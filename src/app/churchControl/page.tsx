"use client";

import { useAuth } from "@/contexts/AuthContext";

export default function ChurchControlPage() {
  const { logout } = useAuth();

  return (
    <div className="p-4">
      <h1>Sistema de Controle da Igreja</h1>
      <button onClick={logout} className="btn btn-primary">
        Sair
      </button>
    </div>
  );
}
