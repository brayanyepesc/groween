import Link from "next/link";

interface SidebarItemProps {
    icon: React.ReactNode;
    text: string;
    active: boolean;
    expanded: boolean;
    link?: string;
}

export const SidebarItem = ({ icon, text, active, expanded, link }: SidebarItemProps) => {
  return (
    <Link href={`${link || '/'}`} className={`relative flex items-center p-2 justify-center my-2 font-medium rounded-full cursor-pointer transition-colors group ${active ? 'bg-gradient-to-l from-blue-groween font-bold to-white' : 'hover:bg-gradient-to-l from-blue-groween to-white'}`}>
        {icon}
        <span className={`overflow-hidden ${expanded ? 'w-52 ml-3' : 'w-0'}`}>{text}</span>
        {
            !expanded && (
                <div className="absolute left-full rounded-full p-2 ml-6 bg-blue-groween text-xs text-white opacity-50 transition-all invisible -translate-x-3 group-hover:visible group-hover:opacity-100 group-hover:translate-x-0">
                    {text}
                </div>
            )
        }
    </Link>
  )
}