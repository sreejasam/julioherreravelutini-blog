"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const NAV = [
  { href: "/", label: "Home" },
  { href: "/julio-herrera-velutini-biography", label: "Biography" },
  { href: "/what-private-banking-means", label: "What Private Banking Means" },
  { href: "/reading-the-global-markets", label: "Reading the Global Markets" },
  { href: "/building-a-lasting-legacy", label: "Building a Lasting Legacy" },
  { href: "/principles-for-a-lasting-future", label: "Principles for a Lasting Future" },
];

/*
  Site menu. Still a native <details>, so all links are in the server-rendered
  HTML and Google can crawl them. The client code only adds the closing behaviour:
  - closes when a menu link is clicked
  - closes when the page (route) changes
  - closes when you click/tap outside the menu
  - closes on the Escape key
*/
export default function SiteMenu() {
  const ref = useRef(null);
  const pathname = usePathname();

  const close = () => {
    if (ref.current) ref.current.open = false;
  };

  // Close after navigating to another page
  useEffect(() => {
    close();
  }, [pathname]);

  // Close on outside click / tap and on Escape
  useEffect(() => {
    const onPointerDown = (e) => {
      if (ref.current && ref.current.open && !ref.current.contains(e.target)) {
        close();
      }
    };
    const onKeyDown = (e) => {
      if (e.key === "Escape") close();
    };
    document.addEventListener("pointerdown", onPointerDown);
    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.removeEventListener("pointerdown", onPointerDown);
      document.removeEventListener("keydown", onKeyDown);
    };
  }, []);

  return (
    <details ref={ref} className="group relative">
      <summary className="cursor-pointer list-none font-sans text-[11.5px] uppercase tracking-[0.28em] text-navy [&::-webkit-details-marker]:hidden tab:text-[13px]">
        Menu
      </summary>
      <nav
        aria-label="Main"
        className="absolute right-0 top-full mt-3 w-[min(86vw,320px)] bg-cream p-5 shadow-[0_8px_30px_rgba(17,38,75,0.18)]"
      >
        <ul className="m-0 flex list-none flex-col gap-3 p-0">
          {NAV.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                onClick={close}
                className="font-serif text-[16px] text-navy no-underline hover:underline"
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </details>
  );
}
