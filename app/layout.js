"use client";
import "./globals.css";
import { ThemeProvider } from "next-themes";
import { Open_Sans } from "next/font/google";

const openSans = Open_Sans({
  weight: ["300", "400", "500", "600", "700", "800"],
  style: ["normal"],
  subsets: ["latin"],
});

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      style={{ colorScheme: "light" }} // <--
      className={"light"} // <--
    >
      <head>
        <title>Keshav's Portfolio</title>
        <meta content="width=device-width, initial-scale=1" name="viewport" />
        <meta
          name="description"
          content="Keshav's Portfolio built using Next.js, React.js, TailwindCss."
        />
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className={openSans.className}>
        <ThemeProvider enableSystem="true" attribute="class">
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
