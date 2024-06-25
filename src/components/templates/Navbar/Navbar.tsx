import Image from "next/image"
import Link from "next/link"
import GroweenLogo from "@/assets/images/GroweenIsotipo.png"

export const Navbar = () => {
  return (
    <nav className="bg-white z-20 fixed top-0 w-full h-20">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
            <Link className="flex items-center space-x-3 rtl:space-x-reverse" href="/">
                <Image 
                    src={GroweenLogo}
                    alt=""
                    className="w-10 h-10"
                />
                <h2 className="hover:text-green-groween transition-all">Groween</h2>
            </Link>
            <Link href='/autenticacion/ingresar' className="rounded-xl p-2 text-white bg-gradient-to-tr from-green-groween to-blue-groween shadow-lg">Get started</Link>
        </div>
    </nav>
  )
}