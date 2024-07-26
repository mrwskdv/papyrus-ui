import { render } from '../../utils/test-utils';
import { Toast } from '../toast';

import { ToastContainer } from './toast-container';

describe('ToastContainer', () => {
  describe('Given toast-container is rendered with toast as children', () => {
    describe('When the toast is displayed', () => {
      it('Then the title should be visible and correctly rendered within the toast', () => {
        const { getByTestId } = render(
          <ToastContainer>
            <Toast data-testid="toast" message="Error Message" />
          </ToastContainer>,
        );

        expect(getByTestId('toast')).toBeInTheDocument();
      });
    });
  });
});
