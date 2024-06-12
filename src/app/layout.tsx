import type { Metadata } from "next";
import { Nunito } from "next/font/google";
import "./globals.scss";
import Main from "@/components/Main/Main";
import Footer from "@/components/Footer/Footer";

const font = Nunito({ subsets: ["latin"], weight: ["400", "500", "700"] });

export const metadata: Metadata = {
  title: "Мои Финансы",
  description: "Приложение для учета финансов",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='ru'>
      <head>
        <link
          rel='apple-touch-icon'
          sizes='57x57'
          href='favicon/apple-icon-57x57.png'
        />
        <link
          rel='apple-touch-icon'
          sizes='60x60'
          href='favicon/apple-icon-60x60.png'
        />
        <link
          rel='apple-touch-icon'
          sizes='72x72'
          href='favicon/apple-icon-72x72.png'
        />
        <link
          rel='apple-touch-icon'
          sizes='76x76'
          href='favicon/apple-icon-76x76.png'
        />
        <link
          rel='apple-touch-icon'
          sizes='114x114'
          href='favicon/apple-icon-114x114.png'
        />
        <link
          rel='apple-touch-icon'
          sizes='120x120'
          href='favicon/apple-icon-120x120.png'
        />
        <link
          rel='apple-touch-icon'
          sizes='144x144'
          href='favicon/apple-icon-144x144.png'
        />
        <link
          rel='apple-touch-icon'
          sizes='152x152'
          href='favicon/apple-icon-152x152.png'
        />
        <link
          rel='apple-touch-icon'
          sizes='180x180'
          href='favicon/apple-icon-180x180.png'
        />
        <link
          rel='icon'
          type='image/png'
          sizes='192x192'
          href='favicon/android-icon-192x192.png'
        />
        <link
          rel='icon'
          type='image/png'
          sizes='32x32'
          href='favicon/favicon-32x32.png'
        />
        <link
          rel='icon'
          type='image/png'
          sizes='96x96'
          href='favicon/favicon-96x96.png'
        />
        <link
          rel='icon'
          type='image/png'
          sizes='16x16'
          href='favicon/favicon-16x16.png'
        />
        <meta name='msapplication-TileColor' content='#ffffff' />
        <meta name='msapplication-TileImage' content='/ms-icon-144x144.png' />
        <meta name='theme-color' content='#ffffff' />
      </head>
      <body className={`${font.className} flex flex-col h-screen`}>
        <Main>{children}</Main>
        <Footer footerText='Frontend-разработчик Корчин М.В. 2024 год' />
      </body>
    </html>
  );
}
