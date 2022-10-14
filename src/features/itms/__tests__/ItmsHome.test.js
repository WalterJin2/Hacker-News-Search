import { rest } from "msw";
import { screen } from "@testing-library/react";
import { server } from "../../../test/server";
import { renderWithProviders } from "../../../test/test-utils";
import ItemHome from "../ItmsHome";
  it("ItemHome renders correctly", async () => {
    // force msw to return error response
    server.use(
      rest.get(
        "/search?query=&tags=(story,comment)&hitsPerPage=20",
        (req, res, ctx) => {
            return res(ctx.status(200), ctx.json({}));
        }
      )
    );


  const { asFragment } = renderWithProviders(<ItemHome  />);
  expect(asFragment()).toMatchSnapshot();

  });

// it("Search renders correctly", async () => {
//   apiMock
//     .get("/search?query=&tags=(story,comment)&hitsPerPage=20")
//     .reply(200, {});

//   const component = await renderComponent(<Search />, getInitialState());
//   const result = component.toJSON();
//   expect(result).toMatchSnapshot();
// });
