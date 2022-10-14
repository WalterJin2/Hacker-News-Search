const searchResult = require('../../../test/searchTestsMockData.json').searchResult
import SearchList from '../SearchList';
import { renderWithProviders } from "../../../test/test-utils";

it('SeachList renders correctly', () => {
    const props = {
      itms: searchResult,
    };
  const { asFragment } = renderWithProviders(<SearchList {...props} />);
  expect(asFragment()).toMatchSnapshot();
  
});