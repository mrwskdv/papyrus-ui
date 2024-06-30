import { render, screen, userEvent, waitFor } from '../../utils/test-utils';

import { Dialog } from './dialog';

describe('Dialog', () => {
  describe('Given a dialog component with valid dialog.Trigger and dialog.Content components', () => {
    describe('When interacting with the dialog.Trigger component', () => {
      it('Then the dialog.Content should be displayed', async () => {
        render(
          <Dialog>
            <Dialog.Trigger>
              <button>Trigger</button>
            </Dialog.Trigger>
            <Dialog.Content>
              <div>Content</div>
            </Dialog.Content>
          </Dialog>,
        );

        const button = screen.getByRole('button');
        await userEvent.click(button);

        await waitFor(() => {
          expect(screen.getByText('Content')).toBeVisible();
        });
      });
    });

    describe('When popover is open and user click outside the popover content', () => {
      it('Then the dialog.Content should be hidden', async () => {
        render(
          <>
            <button>Outside</button>
            <Dialog>
              <Dialog.Trigger>
                <button>Trigger</button>
              </Dialog.Trigger>
              <Dialog.Content>
                <div>Content</div>
              </Dialog.Content>
            </Dialog>
          </>,
        );

        await userEvent.click(screen.getByText('Trigger'));

        await waitFor(() => {
          expect(screen.getByText('Content')).toBeVisible();
        });

        await userEvent.click(screen.getByText('Outside'));

        await waitFor(() => {
          expect(screen.queryByText('Content')).not.toBeInTheDocument();
        });
      });
    });
  });

  describe('Given a dialog component with `open` prop', () => {
    describe('When the open prop is toggled from false to true', () => {
      it('Then the dialog should become open', async () => {
        const { rerender } = render(
          <Dialog isOpen={false}>
            <Dialog.Trigger>
              <button>Trigger</button>
            </Dialog.Trigger>
            <Dialog.Content>
              <div>Content</div>
            </Dialog.Content>
          </Dialog>,
        );

        expect(screen.queryByText('Content')).not.toBeInTheDocument();

        rerender(
          <Dialog isOpen>
            <Dialog.Trigger>
              <button>Trigger</button>
            </Dialog.Trigger>
            <Dialog.Content>
              <div>Content</div>
            </Dialog.Content>
          </Dialog>,
        );

        await waitFor(() => {
          expect(screen.getByText('Content')).toBeVisible();
        });
      });
    });

    describe('When the open prop is toggled from true to false', () => {
      it('Then the dialog should become hidden', async () => {
        const { rerender } = render(
          <Dialog isOpen>
            <Dialog.Trigger>
              <button>Trigger</button>
            </Dialog.Trigger>
            <Dialog.Content>
              <div>Content</div>
            </Dialog.Content>
          </Dialog>,
        );

        expect(screen.getByText('Content')).toBeVisible();

        rerender(
          <Dialog isOpen={false}>
            <Dialog.Trigger>
              <button>Trigger</button>
            </Dialog.Trigger>
            <Dialog.Content>
              <div>Content</div>
            </Dialog.Content>
          </Dialog>,
        );

        await waitFor(() => {
          expect(screen.queryByText('Content')).not.toBeInTheDocument();
        });
      });
    });
  });

  describe('Given a dialog component with open and onOpenChange props', () => {
    describe('When the popover is opened and user click outside the popover content', () => {
      it('Then the onClose callback should be called', async () => {
        const onClose = jest.fn();

        render(
          <>
            <button>Outside</button>
            <Dialog isOpen={true} onClose={onClose}>
              <Dialog.Trigger>
                <button>Trigger</button>
              </Dialog.Trigger>
              <Dialog.Content>
                <div>Content</div>
              </Dialog.Content>
            </Dialog>
          </>,
        );

        await userEvent.click(screen.getByText('Outside'));

        await waitFor(() => {
          expect(onClose).toHaveBeenCalledTimes(1);
        });
      });
    });
  });
});
