import { render } from '../../utils/test-utils';

import { Divider } from './divider';

describe('Divider', () => {
  describe('Given no props', () => {
    describe('When the component is rendered', () => {
      it('Then it should apply the horizontal classes and `bg-current`', () => {
        const { container } = render(<Divider />);
        expect(container.firstChild).toHaveClass(
          'w-full',
          'h-px',
          'bg-current',
        );
      });
    });
  });

  describe('Given a `direction` of `vertical`', () => {
    describe('When the component is rendered', () => {
      it('Then it should apply the vertical classes instead', () => {
        const { container } = render(<Divider direction="vertical" />);
        expect(container.firstChild).toHaveClass('h-full', 'w-px');
        expect(container.firstChild).not.toHaveClass('w-full', 'h-px');
      });
    });
  });

  describe('Given a `className` containing `bg-`', () => {
    describe('When the component is rendered', () => {
      it('Then `bg-current` should be absent and the supplied class should be kept', () => {
        const { container } = render(<Divider className="bg-red-500" />);
        expect(container.firstChild).toHaveClass('bg-red-500');
        expect(container.firstChild).not.toHaveClass('bg-current');
      });
    });
  });

  describe('Given an `as` prop of `hr`', () => {
    describe('When the component is rendered', () => {
      it('Then an `hr` element should be rendered', () => {
        const { container } = render(<Divider as="hr" />);
        expect(container.querySelector('hr')).toBeInTheDocument();
      });
    });
  });
});
