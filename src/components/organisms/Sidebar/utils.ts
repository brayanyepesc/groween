import { LuMap, LuSettings, LuUser } from "react-icons/lu";

export const sidebarItems = [
    {
        id: 1,
        icon: LuMap,
        text: "Maps",
        link: "/platform/maps",
        active: true,
    },
    {
        id: 2,
        icon: LuUser,
        text: "Profiles",
        active: false,
        link: "/platform/profiles"
    },
    {
        id: 3,
        icon: LuSettings,
        text: "Configuración",
        active: false,
    }
]