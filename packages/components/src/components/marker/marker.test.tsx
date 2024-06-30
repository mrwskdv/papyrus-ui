import { render } from '../../utils/test-utils';
import { Icon } from '../icon';

import { Marker } from './marker';

describe('Marker', () => {
  describe('Given marker with icon child component', () => {
    describe('When component is rendered', () => {
      it('Then the correct icon should be rendered', () => {
        const { getByTestId } = render(
          <Marker>
            <Icon data-testid="icon" name="check" />
          </Marker>,
        );

        expect(getByTestId('icon')).toBeInTheDocument();
      });
    });
  });
});
