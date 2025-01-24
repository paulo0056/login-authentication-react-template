"use client";

import { useAuth } from "@/contexts/AuthContext";

export default function HomePage() {
  const { logout } = useAuth();

  return (
    <div className="p-4">
      <h1>Página Inicial</h1>
      <button onClick={logout} className="btn btn-primary">
        Sair
      </button>
    </div>
  );
}
