import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Algo Trading - Brain Auto Tech",
  description: "Brain Auto Tech",
  alternates: {
    canonical: "https://brainautotech.com/algo-services/algo-trading/",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
