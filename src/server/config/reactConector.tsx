import express from "express";
import path from "path";
import React from 'react'
import ReactDOMServer from 'react-dom/server'
import { StaticRouter } from "react-router-dom/server";
import { AppRouter } from "../../client/routers/AppRouter"
//@ts-ignore
import favicon from "../../client/assets/favicon-16x16.png"


const router = express.Router();

router.use("/public", express.static(path.join(__dirname, "static")));
router.use("/images", express.static(path.join(__dirname, "images")));

router.get("*", (req, res) => {
  let html = ReactDOMServer.renderToString(
    <StaticRouter location={req.url} >
      <AppRouter />
    </StaticRouter>
  );

  try {
    res.send(`
    <!DOCTYPE html>
    <html lang="es">
        <head>
            <meta charset="UTF-8">
            <meta http-equiv="X-UA-Compatible" content="IE=edge">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <meta name="description" content="prueba tecnica de fontend para MercadoLibre"/>
            <meta name="theme-color" content="#FFE600"/>
            <link rel="stylesheet" href="/public/client.css">
            <link rel="preconnect" href="https://fonts.googleapis.com">
            <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
            <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700&display=swap" rel="stylesheet">
            <link rel="icon" type="image/png" sizes="16x16" href=${favicon}>
            <title>Meli tests</title>
        </head>

        <body>
            <div id="root">${html}</div>
            <script defer="defer" src="/public/client.js"></script>
        </body>
    </html>
  `);
  } catch (error) {
    console.log(error)
  }
});

export default router; 
