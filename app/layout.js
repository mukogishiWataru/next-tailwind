import { M_PLUS_1 } from "next/font/google";
import "./globals.css";

const m_PLUS_1 = M_PLUS_1({ subsets: ["latin"] });

export const metadata = {
  title: "practice",
  description: "Nextの学習",
};

// font設定、日本語設定
export default function RootLayout({ children }) {
  return (
    <html lang="ja">
      <body className={m_PLUS_1.className}>{children}</body>
    </html>
  );
}
