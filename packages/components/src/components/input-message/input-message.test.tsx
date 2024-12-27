import { render } from '../../utils/test-utils';

import { InputMessage } from './input-message';

describe('InputMessage', () => {
  describe('Given text with text content', () => {
    describe('When component is rendered', () => {
      it('Then provided text should be displayed', () => {
        const { getByText } = render(<InputMessage>Text</InputMessage>);
        expect(getByText('Text')).toBeInTheDocument();
      });
    });
  });
});
