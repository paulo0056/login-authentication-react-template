"use client";

import { useState } from "react";
import { useAuth } from "@/contexts/AuthContext";

export default function LoginPage() {
  const [cpf, setCpf] = useState("");
  const [senha, setSenha] = useState("");
  const [error, setError] = useState("");
  const { login } = useAuth();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    try {
      await login({ cpf, senha });
    } catch {
      setError("CPF ou senha inválidos");
    }
  };

  return (
    <div className="min-h-screen hero bg-base-200">
      <div className="hero-content flex-col">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-primary">Ekklesia</h1>
          <p className="py-6 text-base-content/70">
            Faça login para acessar o sistema
          </p>
        </div>

        <div className="card w-96 shadow-2xl bg-base-100">
          {error && (
            <div className="alert alert-error mt-4">
              <span>{error}</span>
            </div>
          )}

          <form className="card-body" onSubmit={handleSubmit}>
            <div className="form-control">
              <label className="label">
                <span className="label-text">CPF</span>
              </label>
              <input
                type="text"
                placeholder="Digite seu CPF"
                className="input input-bordered"
                value={cpf}
                onChange={(e) => setCpf(e.target.value)}
                required
              />
            </div>

            <div className="form-control">
              <label className="label">
                <span className="label-text">Senha</span>
              </label>
              <input
                type="password"
                placeholder="••••••••"
                className="input input-bordered"
                value={senha}
                onChange={(e) => setSenha(e.target.value)}
                required
              />
            </div>

            <div className="form-control mt-6">
              <button className="btn btn-primary">Entrar</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
