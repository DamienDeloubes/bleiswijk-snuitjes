import Link from "next/link"

export default function Menu() {

  return (
  <>
  <ul className="navigation">
	 
    <li className="dropdown"><Link href="/diensten">Diensten & Prijzen</Link>
      <ul>
        <li><Link href="/diensten/honden-uitlaten">Honden Uitlaten</Link></li>
        <li><Link href="/diensten/honden-oppassen">Honden Oppassen</Link></li>
        <li><Link href="/diensten/strippenkaarten">Strippenkaarten</Link></li>
        <li><Link href="/diensten/abonnementen">Abonnementen</Link></li>
      </ul>
    </li>
    <li>
		<Link href="/over-mij">Over mij</Link>
    </li>
	<li>
		<Link href="/contact">Contact</Link>
    </li>
  </ul>
  </>
  )
}
