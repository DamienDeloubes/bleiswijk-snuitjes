"use client";

import Link from "next/link";

export const MobileMenu = () => {
  return (
    <ul className="navigation clearfix">
      <li>
        <Link href="/over-bleiswijkse-snuitjes">Over mij</Link>
      </li>

      <li>
        <Link href="/diensten">Diensten & Prijzen</Link>
      </li>

      <li>
        <Link href="/strippenkaart">Strippenkaart</Link>
      </li>

      <li>
        <Link href="/contact">Contact</Link>
      </li>

      <li>
        <Link href="/op-vakantie">Op vakantie?</Link>
      </li>
    </ul>
  );
};
