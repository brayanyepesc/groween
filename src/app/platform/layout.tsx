import { Sidebar } from "@/components/organisms";
import { ProtectRoutes } from "@/components/templates";

export default function plataformaLayout( { children }: {
  children: React.ReactNode;
} ) {
    return (
      <ProtectRoutes>
        <main className="flex">
          <Sidebar />
          {children}
        </main>
      </ProtectRoutes>
    );
}