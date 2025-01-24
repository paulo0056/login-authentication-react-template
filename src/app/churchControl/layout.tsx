import "../globals.css";

export default function AuthenticatedLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-gray-100">
      <nav className="bg-white shadow-lg">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <a href="/churchControl/home" className="text-xl font-semibold text-indigo-600">
                Ekklesia
              </a>
            </div>
            <div className="flex items-center space-x-4">
              <a href="/churchControl/home" className="text-gray-700 hover:text-gray-900">Home</a>
              <a href="/churchControl/members" className="text-gray-700 hover:text-gray-900">Membros</a>
              <a href="/churchControl/events" className="text-gray-700 hover:text-gray-900">Eventos</a>
              <a href="/churchControl/reports" className="text-gray-700 hover:text-gray-900">Relatórios</a>
              <div className="relative ml-3">
                <button className="text-gray-700 hover:text-gray-900">
                  Sair
                </button>
              </div>
            </div>
          </div>
        </div>
      </nav>
      <main className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
        {children}
      </main>
    </div>
  );
}
