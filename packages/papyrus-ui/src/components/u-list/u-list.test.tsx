import { render } from '../../utils/test-utils';

import { UList } from './u-list';

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
});
