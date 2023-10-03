import "./globals.css";

import { Metadata } from "next";
import Script from "next/script";
import { ReactNode } from "react";
import { environments } from "~/src/environments";

export const metadata: Metadata = {
  title: {
    default: "의현",
    template: "%s | 의현",
  },
  description: "Frontend but also Backend",
};

interface Props {
  children: ReactNode;
}

export default function Layout({ children }: Props) {
  return (
    <html lang="ko">
      <body>{children}</body>
      <Script
        async={true}
        src={`https://www.googletagmanager.com/gtag/js?id=${environments.GOOGLE_ANALYTICS_ID}`}
      />
      <Script id="google-analytics">
        {`window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', '${environments.GOOGLE_ANALYTICS_ID}');`}
      </Script>
    </html>
  );
}
