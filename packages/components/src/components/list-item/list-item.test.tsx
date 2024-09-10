import { BiCheck } from 'react-icons/bi';

import { render } from '../../utils/test-utils';
import { Marker } from '../marker';

import { ListItem } from './list-item';

describe('ListItem', () => {
  describe('Given list-item with default props', () => {
    describe('When component is rendered', () => {
      it('Then `<li>` element should be in the document', () => {
        const { container } = render(<ListItem />);
        expect(container.querySelector('li')).toBeInTheDocument();
      });
    });
  });

  describe('Given list-item with text content', () => {
    describe('When component is rendered', () => {
      it('Then provided text content should be displayed', () => {
        const { getByText } = render(<ListItem>List Item</ListItem>);
        expect(getByText('List Item')).toBeInTheDocument();
      });
    });
  });

  describe('Given list-item with text content and custom marker', () => {
    describe('When component is rendered', () => {
      it('Then provided text content and marker icon', () => {
        const { getByText, getByTestId } = render(
          <ListItem>
            <Marker>
              <BiCheck data-testid="icon" />
            </Marker>{' '}
            List Item
          </ListItem>,
        );

        expect(getByText('List Item')).toBeInTheDocument();
        expect(getByTestId('icon')).toBeInTheDocument();
      });
    });
  });
});
