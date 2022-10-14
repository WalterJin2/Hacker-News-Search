// src/mocks/handlers.js
import { rest } from "msw";

export const handlers = [
  rest.get("http://localhost:8800/itms", (req, res, ctx) => {
    console.log(req.url);
    let page = req.url.searchParams.get("page")
    let type = req.url.searchParams.get("type")
    return res(
      ctx.status(200),
      ctx.json({
        nodeFromJson: [
          {
            id: 0,
            page: `${page}`,
            type: `${type}`,
            img: "/img/background.jpg",
            url: "https://www.sina.com.cn/",
          },
          {
            id: 1,
            page: `${page}`,
            type: `${type}`,
            img: "/img/background.jpg",
            url: "https://www.sina.com.cn/",
          },
        ],
      })
    );
  }),
];
