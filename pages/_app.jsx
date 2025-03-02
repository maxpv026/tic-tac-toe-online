import "../styles/output.css";
import clsx from "clsx";

import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin", "cyrillic"] });

export default function App({ Component, pageProps }) {
  <div className={clsx(inter.className, "text-slate-900")} />;
  return <Component {...pageProps} />;
  <div />;
}
