import React from "react";
import { renderToString } from "react-dom/server";
import ClientApp from "../App";
import { Request, Response } from "express";

const render = () => (req: Request, res: Response) => {
  res.send(`
  <!DOCTYPE html>
  <html>
    <head>
      <meta charset="UTF-8" />
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1, shrink-to-fit=no"
      />
      <title>Yigit Yesilpinar Personal Page</title>
    </head>
    <body>
      <div id="root">${renderToString(<ClientApp />)}</div>
      <noscript>
        You need to enable JavaScript to run this app.
      </noscript>
      <script src="vendors-bundle.js"></script>
      <script src="main-bundle.js"></script>
    </body>
  </html>
`);
};

export default render;
