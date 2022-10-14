import Footer from "../Footer";
import { renderWithProviders } from "../../test/test-utils";

it("Footer renders correctly", () => {
  const { asFragment } = renderWithProviders(<Footer />);
  expect(asFragment()).toMatchSnapshot();
});