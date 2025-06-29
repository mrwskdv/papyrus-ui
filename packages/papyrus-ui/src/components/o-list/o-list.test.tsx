import { render } from "../../utils/test-utils";

import { OList } from "./o-list";

describe("OList", () => {
  describe("Given o-list with default props", () => {
    describe("When component is rendered", () => {
      it("Then `<ol>` element should be in the document", () => {
        const { container } = render(<OList />);
        expect(container.querySelector("ol")).toBeInTheDocument();
      });
    });
  });

  describe("Given o-list with list items", () => {
    describe("When component is rendered", () => {
      it("Then provided children should be displayed", () => {
        const { getByText } = render(
          <OList>
            <li>Item 1</li>
            <li>Item 2</li>
            <li>Item 3</li>
          </OList>
        );

        expect(getByText("Item 1")).toBeInTheDocument();
        expect(getByText("Item 2")).toBeInTheDocument();
        expect(getByText("Item 3")).toBeInTheDocument();
      });
    });
  });
});
