import Pagination from '../Pagination';
import { renderWithProviders } from "../../test/test-utils";

it('Pagination renders correctly', () => {
    const props = {
      setCurrentPage: () => Promise.resolve(),
      currentPage: 3,
      nPages: 50,
    };
  const { asFragment } = renderWithProviders(<Pagination {...props} />);
  expect(asFragment()).toMatchSnapshot();
  
});
