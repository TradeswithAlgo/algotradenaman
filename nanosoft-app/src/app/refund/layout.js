import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Refund Policy - Trades with Algo",
  description: "Trades with Algo",
  alternates: {
    canonical: "https://brainautotech.com/refund/",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
