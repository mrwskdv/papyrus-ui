import { render, screen, userEvent } from "../../utils/test-utils";

import { NumericInput } from "./numeric-input";

describe("NumericInput", () => {
  describe("Given the numeric-input component with default props", () => {
    describe("When it is rendered", () => {
      it("Then it should render with default values, and the input field should be enabled and empty", () => {
        render(<NumericInput />);
        expect(screen.getByRole("textbox")).toBeInTheDocument();
        expect(screen.getByRole("textbox")).toBeEnabled();
        expect(screen.getByRole("textbox")).toHaveValue("");
      });
    });
  });

  describe("Given the numeric-input component with a placeholder", () => {
    describe("When it is rendered", () => {
      it("Then it should render with the placeholder", () => {
        render(<NumericInput placeholder="Max Price" />);
        expect(screen.getByRole("textbox")).toHaveAttribute(
          "placeholder",
          "Max Price"
        );
      });
    });
  });

  describe("Given the numeric-input component with `disabled` set to true", () => {
    describe("When it is rendered", () => {
      it("Then it should render with the input field disabled", () => {
        render(<NumericInput disabled />);
        expect(screen.getByRole("textbox")).toBeDisabled();
      });
    });
  });

  describe("Given the numeric-input component with `readOnly` set to true", () => {
    describe("When it is rendered", () => {
      it("Then it should render with the input field readOnly", () => {
        render(<NumericInput readOnly />);
        expect(screen.getByRole("textbox")).toHaveAttribute("readonly");
      });
    });
  });

  describe("Given the numeric-input component with `defaultValue`", () => {
    describe("When it is rendered", () => {
      it("Then it should render with the default value", () => {
        render(<NumericInput defaultValue={1999} />);
        expect(screen.getByRole("textbox")).toHaveValue("1999");
      });
    });
  });

  describe("Given the numeric-input component with a valid `startIcon` component", () => {
    describe("When it is rendered", () => {
      it("Then it should render with the startIcon", () => {
        render(<NumericInput startIcon={<div data-testid="start-icon" />} />);

        expect(screen.getByTestId("start-icon")).toBeInTheDocument();
      });
    });
  });

  describe("Given the numeric-input component with a valid `endIcon` component", () => {
    describe("When it is rendered", () => {
      it("Then it should render with the endIcon", () => {
        render(<NumericInput endIcon={<div data-testid="end-icon" />} />);

        expect(screen.getByTestId("end-icon")).toBeInTheDocument();
      });
    });
  });

  describe("Given the numeric-input component with an `onChange` handler", () => {
    describe("When a user types into the input field", () => {
      it("Then it should call the `onChange` handler with the new value", async () => {
        const onChange = jest.fn();
        render(<NumericInput onChange={onChange} />);
        await userEvent.type(screen.getByRole("textbox"), "1999");
        expect(onChange).toHaveBeenCalledWith(1999);
      });
    });
  });

  describe("Given the numeric-input component with the `value` prop", () => {
    describe("When it is rendered", () => {
      it("Then it should render with the value", () => {
        render(<NumericInput value={1999} />);
        expect(screen.getByRole("textbox")).toHaveValue("1999");
      });
    });

    describe("When the `value` prop changes", () => {
      it("Then it should render with the new value", () => {
        const { rerender } = render(<NumericInput value={1999} />);
        expect(screen.getByRole("textbox")).toHaveValue("1999");
        rerender(<NumericInput value={2000} />);
        expect(screen.getByRole("textbox")).toHaveValue("2000");
      });
    });
  });
});
