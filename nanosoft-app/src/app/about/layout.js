import { Inter } from "next/font/google";
import metadataProps from "../metadataProps";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: metadataProps.about.title,
  description: metadataProps.about.description,
  alternates: {
    canonical: "https://tradeswithalgo.com/about/",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
