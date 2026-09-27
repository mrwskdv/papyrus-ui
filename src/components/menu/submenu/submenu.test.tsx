import { render, screen, userEvent } from '../../../utils/test-utils';
import { Menu } from '../menu';
import { MenuItem } from '../menu-item';

import { Submenu } from './submenu';

describe('Submenu', () => {
  describe('Given a submenu with no initialOpen prop', () => {
    describe('When it is rendered', () => {
      it('Then it should be collapsed', () => {
        render(
          <Menu>
            <Submenu label="Products">
              <MenuItem>Electronics</MenuItem>
            </Submenu>
          </Menu>,
        );

        expect(
          screen.getByRole('menuitem', { name: 'Products' }),
        ).toHaveAttribute('aria-expanded', 'false');
      });
    });

    describe('When the user clicks the submenu button', () => {
      it('Then it should expand, and clicking again should collapse it', async () => {
        render(
          <Menu>
            <Submenu label="Products">
              <MenuItem>Electronics</MenuItem>
            </Submenu>
          </Menu>,
        );

        const button = screen.getByRole('menuitem', { name: 'Products' });

        await userEvent.click(button);
        expect(button).toHaveAttribute('aria-expanded', 'true');

        await userEvent.click(button);
        expect(button).toHaveAttribute('aria-expanded', 'false');
      });
    });
  });

  describe('Given an open submenu whose parent menu becomes collapsed', () => {
    describe('When the parent collapses', () => {
      it('Then the submenu should close', () => {
        const { rerender } = render(
          <Menu collapsed={false}>
            <Submenu initialOpen label="Products">
              <MenuItem>Electronics</MenuItem>
            </Submenu>
          </Menu>,
        );

        expect(
          screen.getByRole('menuitem', { name: 'Products' }),
        ).toHaveAttribute('aria-expanded', 'true');

        rerender(
          <Menu collapsed>
            <Submenu initialOpen label="Products">
              <MenuItem>Electronics</MenuItem>
            </Submenu>
          </Menu>,
        );

        expect(
          screen.getByRole('menuitem', { name: 'Products' }),
        ).toHaveAttribute('aria-expanded', 'false');
      });
    });

    describe('When the parent expands again', () => {
      it('Then the submenu should return to its previous open state', () => {
        const { rerender } = render(
          <Menu collapsed>
            <Submenu initialOpen label="Products">
              <MenuItem>Electronics</MenuItem>
            </Submenu>
          </Menu>,
        );

        expect(
          screen.getByRole('menuitem', { name: 'Products' }),
        ).toHaveAttribute('aria-expanded', 'false');

        rerender(
          <Menu collapsed={false}>
            <Submenu initialOpen label="Products">
              <MenuItem>Electronics</MenuItem>
            </Submenu>
          </Menu>,
        );

        expect(
          screen.getByRole('menuitem', { name: 'Products' }),
        ).toHaveAttribute('aria-expanded', 'true');
      });
    });
  });
});
