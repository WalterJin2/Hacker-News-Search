import SearchBar from '../SearchBar';
import { renderWithProviders } from "../../test/test-utils";

it('SearchBar renders correctly', () => {
    const props = {
        handleInputChange: () => {},
        search: () => Promise.resolve(),
    };

  const { asFragment } = renderWithProviders(<SearchBar {...props} />);
  expect(asFragment()).toMatchSnapshot();
});
