import { RefObject } from 'react';

function getItems(menuRef: RefObject<HTMLElement>) {
  const role = menuRef.current?.getAttribute('role');

  const nodes = menuRef.current?.querySelectorAll<HTMLElement>(
    `[role=${role === 'tablist' ? 'tab' : 'menuitem'}]`,
  ) as NodeListOf<HTMLElement>;

  return nodes
    ? Array.from(nodes).filter(
        (item) => item.getAttribute('aria-disabled') !== 'true',
      )
    : [];
}

export function getNextItem(
  menuRef: RefObject<HTMLElement>,
  current: HTMLElement,
): HTMLElement | undefined {
  const items = getItems(menuRef);
  const currIdx = items.findIndex((item) => item === current);
  const nextIdx = currIdx === items.length - 1 ? 0 : currIdx + 1;
  return items[nextIdx];
}

export function getPrevItem(
  menuRef: RefObject<HTMLElement>,
  current: HTMLElement,
): HTMLElement | undefined {
  const items = getItems(menuRef);
  const currIdx = items.findIndex((item) => item === current);
  const prevIdx = currIdx === 0 ? items.length - 1 : currIdx - 1;
  return items[prevIdx];
}

export function getFirstItem(
  menuRef: RefObject<HTMLElement>,
): HTMLElement | undefined {
  const items = getItems(menuRef);
  return items[0];
}

export function getLastItem(
  menuRef: RefObject<HTMLElement>,
): HTMLElement | undefined {
  const items = getItems(menuRef);
  return items[items.length - 1];
}
