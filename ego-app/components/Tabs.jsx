"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Tabs() {
  const pathname = usePathname();

  return (
    <nav>
      <ul className="navbar-items m-0">
        <li>
          <Link href="/" className={pathname === "/" ? "active-tab" : ""}>
            Modelos
          </Link>
        </li>
        <li>
          <Link
            href="/modelos"
            className={pathname.startsWith("/modelos") ? "active-tab" : "disabled"}
          >
            Ficha de modelo
          </Link>
        </li>
      </ul>
    </nav>
  );
}
