import { render } from '../../utils/test-utils';

import { UList } from './u-list';
import type { UListType } from './u-list';

describe('UList', () => {
  describe('Given u-list with default props', () => {
    describe('When component is rendered', () => {
      it('Then `<ul>` element should be in the document', () => {
        const { container } = render(<UList />);
        expect(container.querySelector('ul')).toBeInTheDocument();
      });
    });
  });

  describe('Given u-list with list items', () => {
    describe('When component is rendered', () => {
      it('Then provided children should be displayed', () => {
        const { getByText } = render(
          <UList>
            <li>Item 1</li>
            <li>Item 2</li>
            <li>Item 3</li>
          </UList>,
        );

        expect(getByText('Item 1')).toBeInTheDocument();
        expect(getByText('Item 2')).toBeInTheDocument();
        expect(getByText('Item 3')).toBeInTheDocument();
      });
    });
  });

  describe('Given u-list with different types', () => {
    it.each([
      ['disc', 'list-disc'],
      ['dash', 'list-dash'],
      ['none', 'list-none'],
    ])('When type is %s, Then should have %s class', (type, expectedClass) => {
      const { container } = render(
        <UList type={type as UListType}>
          <li>Item 1</li>
        </UList>,
      );

      const ulElement = container.querySelector('ul');
      expect(ulElement).toHaveClass(expectedClass);
    });

    it('When no type is provided, Then should default to dash type', () => {
      const { container } = render(
        <UList>
          <li>Item 1</li>
        </UList>,
      );

      const ulElement = container.querySelector('ul');
      expect(ulElement).toHaveClass('list-dash');
    });
  });
});
