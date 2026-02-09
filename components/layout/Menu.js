import Link from "next/link"

export default function Menu() {

  return (
  <>
	<ul className="navigation">
		<li>
			<Link href="/diensten">Diensten & Prijzen</Link>
		</li>
		<li>
			<Link href="/over-bleiswijkse-snuitjes">Over Bleiswijkse Snuitjes</Link>
		</li>
		<li>
			<Link href="/contact">Contact</Link>
		</li>
	</ul>
  </>
  )
}
