import { on } from "events";
import { LuCalendar, LuHome, LuLogOut, LuSettings, LuUser } from "react-icons/lu";

export const sidebarItems = [
    {
        id: 1,
        icon: LuHome,
        text: "Dashboard",
        active: true,
    },
    {
        id: 2,
        icon: LuUser,
        text: "Profiles",
        active: false,
        link: "/plataforma/profiles"
    },
    {
        id: 3,
        icon: LuSettings,
        text: "Configuración",
        active: false,
    }
]