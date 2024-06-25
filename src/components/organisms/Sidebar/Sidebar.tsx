'use client'
import Image from "next/image"
import GroweenIsotipo from "@/assets/logos/GroweenIsotipo.png"
import { LuChevronFirst, LuLogOut } from "react-icons/lu"
import { SidebarItem } from "../../molecules"
import { useState } from "react"
import { useRouter } from "next/navigation"
import { signOut } from "next-auth/react"
import { sidebarItems } from "./utils"

export const Sidebar = () => {

    const [expanded, setExpanded] = useState(false)
    const router = useRouter();
    const handleLogout = async () => {
        await signOut({ redirect: false });
        router.push('/ingresar');
    };

    return (
        <aside className="h-screen">
            <nav className="h-full bg-white flex flex-col border-r shadow-md">
                <div className="p-4 pb-2 flex justify-between items-center">
                    <h1 className={`overflow-hidden transition-all font-bold ${expanded  ? 'w-32' : 'w-0'}`}>Groween</h1>
                    <button className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-all" onClick={() => setExpanded(!expanded)}>
                        { expanded ? <LuChevronFirst className="w-6 h-6" /> : <LuChevronFirst className="w-6 h-6 transform rotate-180" />}
                    </button>
                </div>
                <ul className="flex-1 px-3">
                    {
                        sidebarItems.map(({ id, icon: Icon, text, active, link }) => (
                            <SidebarItem 
                                key={id}
                                icon={<Icon />}
                                text={text}
                                active={active}
                                expanded={expanded}
                                link={link}
                            />
                        ))
                    }
                </ul>
                <div className="flex-2 px-3">
                    <button onClick={handleLogout} className={`relative flex items-center p-3 justify-center my-2 rounded-full cursor-pointer transition-colors group bg-gradient-to-l from-blue-groween font-bold to-white hover:bg-gradient-to-l`}>
                        <LuLogOut />
                        <span className={`overflow-hidden ${expanded ? 'w-52 ml-3' : 'w-0'}`}>Salir</span>
                        {
                            !expanded && (
                                <div className="absolute left-full rounded-full p-2 ml-6 bg-blue-groween text-xs opacity-50 transition-all invisible -translate-x-3 group-hover:visible group-hover:opacity-100 group-hover:translate-x-0 text-white">
                                    Salir
                                </div>
                            )
                        }
                    </button>
                </div>
                <div className="border-t flex p-3">
                    <Image 
                        src={GroweenIsotipo}
                        alt="Logotipo de AVA"
                        className="w-10"
                    />
                    <div className={`flex-row-center overflow-hidden transition-all ${expanded ? 'w-52' : 'w-0'}`}>
                        <div className="leading-4">
                            <h4>Desarrollado por Brayan</h4>
                        </div>
                    </div>
                </div>
            </nav>
        </aside>
    )
}