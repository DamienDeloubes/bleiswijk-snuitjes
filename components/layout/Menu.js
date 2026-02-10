import Link from "next/link"

export default function Menu() {

  return (
  <>
	<ul className="navigation">
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
	</ul>
  </>
  )
}
