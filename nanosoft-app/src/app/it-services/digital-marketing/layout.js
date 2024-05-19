import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Digital Marketing - Brain Auto Tech",
  description: "Brain Auto Tech",
  alternates: {
    canonical: "https://brainautotech.com/it-services/digital-marketing/",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
