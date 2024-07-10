'use client';

import {
  autoUpdate,
  flip,
  offset as offsetFn,
  shift,
  useClick,
  useDismiss,
  useFloating,
  useInteractions,
  useRole,
  useTypeahead,
  Placement,
  OffsetOptions,
  FloatingTree,
  useFloatingTree,
} from '@floating-ui/react';
import {
  FC,
  KeyboardEvent,
  ReactNode,
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from 'react';

import {
  getFirstItem,
  getLastItem,
  getNextItem,
  getPrevItem,
} from '../../utils/list-navigation';

import { DropdownMenuContent } from './dropdown-menu-content';
import { DropdownMenuItem } from './dropdown-menu-item';
import { DropdownMenuTrigger } from './dropdown-menu-trigger';
import {
  DropdownMenuContext,
  DropdownMenuContextType,
} from './dropdown-menu.context';
import { DropdownSubmenu } from './dropdown-submenu';

export type DropdownMenuPlacement = Placement;

export type DropdownMenuStrategy = 'fixed' | 'absolute';

export interface DropdownMenuProps {
  children?: ReactNode;
  offset?: number | OffsetOptions;
  placement?: DropdownMenuPlacement;
  strategy?: DropdownMenuStrategy;
}

const DEFAULT_OFFSET: OffsetOptions = {
  mainAxis: 4,
  alignmentAxis: -2,
};

export const DropdownMenuComponent: FC<DropdownMenuProps> = ({
  children,
  offset = DEFAULT_OFFSET,
  placement = 'bottom-start',
  strategy = 'fixed',
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const elementsRef = useRef<Array<HTMLAnchorElement | null>>([]);
  const labelsRef = useRef<Array<string>>([]);
  const tree = useFloatingTree();

  const { floatingStyles, refs, context } = useFloating<HTMLElement>({
    open: isOpen,
    strategy,
    onOpenChange: setIsOpen,
    placement,
    middleware: [offsetFn(offset), flip({ padding: 4 }), shift({ padding: 4 })],
    whileElementsMounted: autoUpdate,
  });

  const click = useClick(context, {
    event: 'mousedown',
    toggle: true,
    ignoreMouse: false,
    keyboardHandlers: false,
  });

  const dismiss = useDismiss(context);

  const role = useRole(context, { role: 'menu' });

  const typeahead = useTypeahead(context, {
    listRef: labelsRef,
    onMatch: setActiveIndex,
    activeIndex,
  });

  const { getReferenceProps, getFloatingProps, getItemProps } = useInteractions(
    [click, role, dismiss, typeahead],
  );

  const handleMenuKeyDown = useCallback(
    (e: KeyboardEvent<HTMLUListElement>) => {
      if (e.key === 'ArrowUp') {
        e.preventDefault();
        e.stopPropagation();
        const item = getLastItem(refs.floating);
        item?.focus();
      }

      if (e.key === 'ArrowDown') {
        e.preventDefault();
        e.stopPropagation();
        const item = getFirstItem(refs.floating);
        item?.focus();
      }
    },
    [refs.floating],
  );

  const handleMenuItemKeyDown = useCallback(
    (e: KeyboardEvent<HTMLAnchorElement>) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        e.stopPropagation();
        e.currentTarget.click();
      }

      if (e.key === 'ArrowUp') {
        e.preventDefault();
        e.stopPropagation();
        const item = getPrevItem(refs.floating, e.currentTarget);
        item?.focus();
      }

      if (e.key === 'ArrowDown') {
        e.preventDefault();
        e.stopPropagation();
        const item = getNextItem(refs.floating, e.currentTarget);
        item?.focus();
      }
    },
    [refs.floating],
  );

  const menuCtx = useMemo<DropdownMenuContextType>(
    () => ({
      activeIndex,
      context,
      elementsRef,
      floatingStyles,
      getReferenceProps,
      isOpen,
      labelsRef,
      refs,
      setActiveIndex,
      getFloatingProps: (userProps = {}) => ({
        ...getFloatingProps({
          ...userProps,
          onKeyDown: (e: KeyboardEvent<HTMLUListElement>) => {
            handleMenuKeyDown(e);
            userProps.onKeyDown?.(e);
          },
        }),
      }),
      getItemProps: (userProps = {}) => ({
        ...getItemProps({
          ...userProps,
          onKeyDown: (e: KeyboardEvent<HTMLAnchorElement>) => {
            handleMenuItemKeyDown(e);
            userProps.onKeyDown?.(e);
          },
        }),
      }),
    }),
    [
      activeIndex,
      context,
      floatingStyles,
      getFloatingProps,
      getItemProps,
      getReferenceProps,
      handleMenuItemKeyDown,
      handleMenuKeyDown,
      isOpen,
      refs,
    ],
  );

  useEffect(() => {
    if (!tree) {
      return;
    }

    function handleTreeClick() {
      setIsOpen(false);
    }

    tree.events.on('click', handleTreeClick);

    return () => {
      tree.events.off('click', handleTreeClick);
    };
  }, [tree]);

  useEffect(() => {
    function handleOutsideClick(e: MouseEvent) {
      if (
        e.target instanceof Node &&
        !refs.floating.current?.contains(e.target)
      ) {
        setActiveIndex(null);
      }
    }

    document.addEventListener('mousedown', handleOutsideClick);

    return () => {
      document.removeEventListener('mousedown', handleOutsideClick);
    };
  }, [refs.floating]);

  return (
    <DropdownMenuContext.Provider value={menuCtx}>
      {children}
    </DropdownMenuContext.Provider>
  );
};

const DropdownMenuTree = ({ children, ...props }: DropdownMenuProps) => (
  <FloatingTree>
    <DropdownMenuComponent {...props}>{children}</DropdownMenuComponent>
  </FloatingTree>
);

export const DropdownMenu = Object.assign(DropdownMenuTree, {
  Trigger: DropdownMenuTrigger,
  Content: DropdownMenuContent,
  Submenu: DropdownSubmenu,
  Item: DropdownMenuItem,
});
