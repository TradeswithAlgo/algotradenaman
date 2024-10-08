import metadataProps from "@/app/metadataProps";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: metadataProps.algoServices.algoTrading.title,
  description: metadataProps.algoServices.algoTrading.description,
  alternates: {
    canonical: "https://tradeswithalgo.com/algo-services/algo-trading/",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
