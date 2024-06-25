import { Sidebar } from "@/components/organisms";

export default function plataformaLayout( { children }: {
  children: React.ReactNode;
} ) {
    return (
      <main className="flex">
          <Sidebar />
          {children}
      </main>
    );
}