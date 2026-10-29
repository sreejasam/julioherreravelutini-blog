

import Header from "@/components/Header";
import { Inter, Libre_Baskerville, Mrs_Saint_Delafield } from "next/font/google";
import "./globals.css";

/* =========================================
   FONTS
========================================= */

/* Main sans-serif font */
const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  display: "swap",
});

/* Main editorial serif font */
const libreBaskerville = Libre_Baskerville({
  variable: "--font-libre-baskerville",
  subsets: ["latin"],
  weight: ["400", "700"],
  style: ["normal", "italic"],
  display: "swap",
});

/* Signature / script font */
const mrsSaintDelafield = Mrs_Saint_Delafield({
  variable: "--font-script",
  subsets: ["latin"],
  weight: "400",
  display: "swap",
});

/* =========================================
   METADATA
========================================= */

export const metadata = {
  title: {
    default: "Julio Herrera Velutini | Insights, Ideas & Perspectives",
    template: "%s | JHV",
  },

  description:
    "Thoughts on finance, global markets, family legacy, and the principles that shape a lasting future.",

  metadataBase: new URL("https://www.julioherreravelutini.xyz"),

  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/favicon.ico",
  },
};

/* =========================================
   VIEWPORT
========================================= */

export const viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#e9decc",
};

/* =========================================
   ROOT LAYOUT
========================================= */

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`
        ${inter.variable}
        ${libreBaskerville.variable}
        ${mrsSaintDelafield.variable}
        desk:[--u:calc(100vw_/_1853)]
        desk:has-[.hero]:h-full
        desk:has-[.hero]:overflow-hidden
      `}
    >
      <head>
        {/* Adds .is-mac on <html> for real Macs only (not iPhone/iPad) */}
        <script
          dangerouslySetInnerHTML={{
            __html:
              "try{var n=navigator,p=n.userAgentData&&n.userAgentData.platform||n.platform||'';if(/Mac/i.test(p)&&!(n.maxTouchPoints>1))document.documentElement.classList.add('is-mac')}catch(e){}",
          }}
        />
      </head>
      <body
        className="
          m-0
          bg-cream
          font-serif
          leading-[normal]
          text-navy
          antialiased
          [text-rendering:optimizeLegibility]
          desk:has-[.hero]:h-full
          desk:has-[.hero]:overflow-hidden
        "
      >
        <Header />
        {children}
      </body>
    </html>
  );
}