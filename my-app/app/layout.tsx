import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Main from "@/app/components/main";
import "@radix-ui/themes/styles.css";
import { Theme, ThemePanel } from "@radix-ui/themes";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "App Store Reviews",
  description: "Mohnish Chawda",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Theme
          accentColor="gray"
          grayColor="auto"
          appearance="dark"
          radius="medium"
          scaling="90%"
          panelBackground="translucent"
        >
          <Main />
          {children}
        </Theme>
      </body>
    </html>
  );
}
