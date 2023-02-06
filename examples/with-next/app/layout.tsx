import "./globals.css";

import { ReactNode } from "react";

import { Navigation } from "@/components/Navigation";
import {
  Merriweather_Sans,
  Source_Sans_Pro,
  Source_Serif_Pro,
  Titillium_Web,
} from "@next/font/google";

const titilliumWeb = Titillium_Web({
  subsets: ["latin"],
  weight: "700",
});

const sourceSerifPro = Source_Serif_Pro({
  subsets: ["latin"],
  weight: ["400", "700"],
});

const merriweatherSans = Merriweather_Sans({
  subsets: ["latin"],
  weight: ["400", "700"],
});

const sourceSansPro = Source_Sans_Pro({
  style: ["normal", "italic"],
  subsets: ["latin"],
  weight: ["300", "400", "600", "700"],
});

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html
      lang="en"
      className={[
        titilliumWeb.className,
        sourceSerifPro.className,
        merriweatherSans.className,
        sourceSansPro.className,
      ].join(" ")}
    >
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head>
        <link
          href="//code.ionicframework.com/ionicons/2.0.1/css/ionicons.min.css"
          rel="stylesheet"
          type="text/css"
        />
        <link rel="stylesheet" href="//demo.productionready.io/main.css" />
      </head>
      <body>
        <Navigation />
        {children}
      </body>
    </html>
  );
}
