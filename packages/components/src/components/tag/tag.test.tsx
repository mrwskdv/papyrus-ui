import { render, screen, userEvent } from '../../utils/test-utils';

import { Tag } from './tag';

describe('Tag', () => {
  describe('Given a tag component with child content', () => {
    describe('When the component is rendered', () => {
      it('Then it should render the child content', () => {
        const { getByText } = render(<Tag>Tag</Tag>);
        expect(getByText('Tag')).toBeInTheDocument();
      });
    });
  });

  describe('Given a tag component with an onClick handler', () => {
    describe('When the component is rendered', () => {
      it('Then the tag should have a role of button', () => {
        // eslint-disable-next-line @typescript-eslint/no-empty-function
        render(<Tag onClick={() => {}}>Tag</Tag>);
        expect(screen.getByRole('button')).toBeInTheDocument();
      });

      it('Then the tag should have a tabIndex of 0', () => {
        // eslint-disable-next-line @typescript-eslint/no-empty-function
        render(<Tag onClick={() => {}}>Tag</Tag>);
        expect(screen.getByRole('button')).toHaveAttribute('tabIndex', '0');
      });
    });

    describe('When a user clicks on the tag', () => {
      it('Then the onClick handler should be called', () => {
        const onClickMock = jest.fn();
        render(<Tag onClick={onClickMock}>Tag</Tag>);
        screen.getByRole('button').click();
        expect(onClickMock).toHaveBeenCalledTimes(1);
      });
    });

    describe('When a user presses the Enter key on the tag', () => {
      it('Then the onClick handler should be called', async () => {
        const onClickMock = jest.fn();
        render(<Tag onClick={onClickMock}>Tag</Tag>);
        screen.getByRole('button').focus();
        await userEvent.keyboard('{enter}');
        expect(onClickMock).toHaveBeenCalledTimes(1);
      });
    });

    describe('When a user presses the Space key on the tag', () => {
      it('Then the onClick handler should be called', async () => {
        const onClickMock = jest.fn();
        render(<Tag onClick={onClickMock}>Tag</Tag>);
        screen.getByRole('button').focus();
        await userEvent.keyboard('{ }');
        expect(onClickMock).toHaveBeenCalledTimes(1);
      });
    });
  });

  describe('Given a tag component with disabled prop set to true and an onClick handler', () => {
    describe('When a user clicks on the tag', () => {
      it('Then the onClick handler should not be called', () => {
        const onClickMock = jest.fn();
        render(
          <Tag disabled onClick={onClickMock}>
            Tag
          </Tag>,
        );
        screen.getByRole('button').click();
        expect(onClickMock).not.toHaveBeenCalled();
      });
    });

    describe('When a user presses the Enter key on the tag', () => {
      it('Then the onClick handler should not be called', async () => {
        const onClickMock = jest.fn();
        render(
          <Tag disabled onClick={onClickMock}>
            Tag
          </Tag>,
        );
        screen.getByRole('button').focus();
        await userEvent.keyboard('{enter}');
        expect(onClickMock).not.toHaveBeenCalled();
      });
    });

    describe('When a user presses the Space key on the tag', () => {
      it('Then the onClick handler should not be called', async () => {
        const onClickMock = jest.fn();
        render(
          <Tag disabled onClick={onClickMock}>
            Tag
          </Tag>,
        );
        screen.getByRole('button').focus();
        await userEvent.keyboard('{ }');
        expect(onClickMock).not.toHaveBeenCalled();
      });
    });
  });

  describe('Given a tag component with readOnly prop set to true and an onClick handler', () => {
    describe('When a user clicks on the tag', () => {
      it('Then the onClick handler should not be called', () => {
        const onClickMock = jest.fn();
        render(
          <Tag readOnly onClick={onClickMock}>
            Tag
          </Tag>,
        );
        screen.getByRole('button').click();
        expect(onClickMock).not.toHaveBeenCalled();
      });
    });

    describe('When a user presses the Enter key on the tag', () => {
      it('Then the onClick handler should not be called', async () => {
        const onClickMock = jest.fn();
        render(
          <Tag readOnly onClick={onClickMock}>
            Tag
          </Tag>,
        );
        screen.getByRole('button').focus();
        await userEvent.keyboard('{enter}');
        expect(onClickMock).not.toHaveBeenCalled();
      });
    });

    describe('When a user presses the Space key on the tag', () => {
      it('Then the onClick handler should not be called', async () => {
        const onClickMock = jest.fn();
        render(
          <Tag readOnly onClick={onClickMock}>
            Tag
          </Tag>,
        );
        screen.getByRole('button').focus();
        await userEvent.keyboard('{ }');
        expect(onClickMock).not.toHaveBeenCalled();
      });
    });
  });

  describe('Given a tag component with the removable prop set to true', () => {
    describe('When the component is rendered', () => {
      it('Then it should render the clear-icon component', () => {
        const testId = 'clear-icon';
        render(<Tag removable>Tag</Tag>);
        expect(screen.getByTestId(testId)).toBeInTheDocument();
      });

      it('Then the tag should have a role of button', () => {
        // eslint-disable-next-line @typescript-eslint/no-empty-function
        render(<Tag onClick={() => {}}>Tag</Tag>);
        expect(screen.getByRole('button')).toBeInTheDocument();
      });

      it('Then the tag should have a tabIndex of 0', () => {
        // eslint-disable-next-line @typescript-eslint/no-empty-function
        render(<Tag onClick={() => {}}>Tag</Tag>);
        expect(screen.getByRole('button')).toHaveAttribute('tabIndex', '0');
      });
    });
  });

  describe('Given a tag component with the removable prop set to true and an onClick handler', () => {
    describe("When a user clicks on the tag's clear-icon", () => {
      it('Then the onClick handler should be called', () => {
        const onClickMock = jest.fn();

        render(
          <Tag removable onClick={onClickMock}>
            Tag
          </Tag>,
        );

        screen.getByTestId('clear-icon').click();
        expect(onClickMock).toHaveBeenCalledTimes(1);
      });
    });

    describe('When a user presses the Del key on the tag', () => {
      it('Then the onClick handler should be called', async () => {
        const onClickMock = jest.fn();

        render(
          <Tag removable onClick={onClickMock}>
            Tag
          </Tag>,
        );

        screen.getByRole('button').focus();
        await userEvent.keyboard('{delete}');
        expect(onClickMock).toHaveBeenCalledTimes(1);
      });
    });
  });

  describe('Given a tag component with the removable and disabled props set to true and an onClick handler', () => {
    describe("When a user clicks on the tag's clear-icon", () => {
      it('Then the onClick handler should not be called', () => {
        const onClickMock = jest.fn();

        render(
          <Tag disabled removable onClick={onClickMock}>
            Tag
          </Tag>,
        );

        expect(screen.queryByTestId('clear-icon')).not.toBeInTheDocument();
      });
    });

    describe('When a user presses the Del key on the tag', () => {
      it('Then the onClick handler should not be called', async () => {
        const onClickMock = jest.fn();

        render(
          <Tag readOnly removable onClick={onClickMock}>
            Tag
          </Tag>,
        );

        screen.getByRole('button').focus();
        await userEvent.keyboard('{delete}');
        expect(onClickMock).not.toHaveBeenCalled();
      });
    });
  });

  describe('Given a tag component with the removable and readOnly props set to true and an onClick handler', () => {
    describe("When a user clicks on the tag's clear-icon", () => {
      it('Then the onClick handler should not be called', () => {
        const onClickMock = jest.fn();

        render(
          <Tag readOnly removable onClick={onClickMock}>
            Tag
          </Tag>,
        );

        expect(screen.queryByTestId('clear-icon')).not.toBeInTheDocument();
      });
    });

    describe('When a user presses the Del key on the tag', () => {
      it('Then the onClick handler should not be called', async () => {
        const onClickMock = jest.fn();

        render(
          <Tag readOnly removable onClick={onClickMock}>
            Tag
          </Tag>,
        );

        screen.getByRole('button').focus();
        await userEvent.keyboard('{delete}');
        expect(onClickMock).not.toHaveBeenCalled();
      });
    });
  });
});
