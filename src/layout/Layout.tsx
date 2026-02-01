import { Outlet } from "react-router";

interface Props {
  title?: string;
}

function Layout({ title = 'CyberShield' }: Props) {
  return (
    // Contenedor principal: Fondo muy oscuro y texto claro
    <div className="min-h-screen bg-slate-950 text-slate-200 font-sans">
      
      {/* Sidebar o Navbar superior */}
      <header className="border-b border-slate-800 bg-slate-900/50 backdrop-blur-md sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            {/* Un pequeño detalle visual: un punto verde de "sistema activo" */}
            <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse shadow-[0_0_8px_#10b981]"></div>
            <h1 className="text-lg font-mono font-bold tracking-tighter uppercase">
              {title} <span className="text-emerald-500 text-xs">v1.0</span>
            </h1>
          </div>
          
          <nav className="flex gap-6 text-sm font-medium text-slate-400">
            <a href="/" className="hover:text-emerald-400 transition-colors">Dashboard</a>
            <a href="/scanner" className="hover:text-emerald-400 transition-colors">Scanner</a>
            <a href="/logs" className="hover:text-emerald-400 transition-colors">Logs</a>
          </nav>
        </div>
      </header>

      {/* Área de contenido */}
      <main className="max-w-7xl mx-auto p-6">
        {/* Un contenedor con efecto "glassmorphism" suave para el contenido */}
        <div className="bg-slate-900/40 border border-slate-800 rounded-xl p-6 shadow-2xl">
          <Outlet />
        </div>
      </main>

      {/* Footer minimalista */}
      <footer className="fixed bottom-0 w-full p-4 border-t border-slate-900 bg-slate-950 text-center">
        <p className="text-[10px] uppercase tracking-[0.2em] text-slate-500 font-mono">
          System Status: <span className="text-emerald-500">Secure</span> | User: Dani_SMR_DAM
        </p>
      </footer>
    </div>
  );
}

export default Layout;