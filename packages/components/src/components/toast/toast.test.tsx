import { render, screen, userEvent } from '../../utils/test-utils';

import { Toast } from './toast';

describe('Toast', () => {
  describe('Given that the toast component is rendered with message', () => {
    const content = 'Error message';

    describe('When the toast is displayed', () => {
      it('Then the title should be visible and correctly rendered within the toast', () => {
        render(<Toast message={content} />);
        const toastElement = screen.getByRole('alert');
        const titleElement = screen.getByText(content);
        expect(toastElement).toContainElement(titleElement);
      });
    });
  });

  describe('Given that the toast component is rendered with visible set to true', () => {
    describe('When the toast is displayed', () => {
      it('Then it should be visible on the screen', () => {
        render(<Toast message="Message" visible={true} />);
        const toastElement = screen.getByRole('alert');
        expect(toastElement).toBeVisible();
      });
    });
  });

  describe('Given that the toast component is rendered with an onDismiss callback', () => {
    const dismissLabel = 'Dismiss';
    const onDismissMock = jest.fn();

    describe('When the close button is clicked', () => {
      it('Then the onClose callback should be triggered', async () => {
        render(
          <Toast
            dismissLabel={dismissLabel}
            message="Message"
            onDismiss={onDismissMock}
          />,
        );
        const closeButton = screen.getByLabelText(dismissLabel);
        await userEvent.click(closeButton);
        expect(onDismissMock).toHaveBeenCalledTimes(1);
      });
    });
  });

  describe('Given that the toast component is rendered with a specified autoHideDuration and onHide callback', () => {
    const autoCloseTimeout = 1000;
    const onHideMock = jest.fn();

    describe('When the toast is displayed', () => {
      beforeEach(() => {
        jest.useFakeTimers();
      });

      afterEach(() => {
        jest.runOnlyPendingTimers();
        jest.useRealTimers();
      });

      it('Then the onHide callback should be triggered automatically after the specified duration', () => {
        render(
          <Toast
            autoHideDuration={autoCloseTimeout}
            message="Message"
            onHide={onHideMock}
          />,
        );

        expect(onHideMock).toHaveBeenCalledTimes(0);
        jest.runAllTimers();
        expect(onHideMock).toHaveBeenCalledTimes(1);
      });
    });
  });

  describe('Given that the toast component is rendered with an onAfterHide callback and visible set to false', () => {
    const onAfterHideMock = jest.fn();

    describe('When the toast is displayed', () => {
      beforeEach(() => {
        jest.useFakeTimers();
      });

      afterEach(() => {
        jest.runOnlyPendingTimers();
        jest.useRealTimers();
      });

      it('Then the onAfterHide callback should be triggered after the animation is finished', () => {
        render(
          <Toast
            message="Message"
            visible={false}
            onAfterHide={onAfterHideMock}
          />,
        );

        jest.runAllTimers();
        expect(onAfterHideMock).toHaveBeenCalledTimes(1);
      });
    });
  });

  describe('Given that the toast component is rendered with additional content', () => {
    const content = 'Error message';

    describe('When the toast is displayed', () => {
      it('Then the title should be visible and correctly rendered within the toast', () => {
        render(<Toast message="Message">{content}</Toast>);
        const toastElement = screen.getByRole('alert');
        const titleElement = screen.getByText(content);
        expect(toastElement).toContainElement(titleElement);
      });
    });
  });

  describe('Given that the toast component is rendered with `actionLabel` and `onActionClick`', () => {
    const actionLabel = 'Action';
    const onActionMock = jest.fn();

    describe('When the toast is displayed', () => {
      it('Then the action should be visible and correctly rendered within the toast', async () => {
        render(
          <Toast
            actionLabel={actionLabel}
            message="Message"
            onActionClick={onActionMock}
          />,
        );

        const buttonElement = screen.getByTestId('action');
        await userEvent.click(buttonElement);
        expect(onActionMock).toHaveBeenCalledTimes(1);
      });
    });
  });
});
