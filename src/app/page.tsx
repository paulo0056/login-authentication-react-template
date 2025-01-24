'use client';

import { useRouter } from 'next/navigation';

export default function LoginPage() {
  const router = useRouter();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // Aqui você implementará a lógica de autenticação
    router.push('/churchControl/home');
  };

  return (
    <div className="min-h-screen hero bg-base-200">
      <div className="hero-content flex-col">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-primary">Ekklesia</h1>
          <p className="py-6 text-base-content/70">Faça login para acessar o sistema</p>
        </div>
        <div className="card w-full w-96 shadow-2xl bg-base-100">
          <form className="card-body" onSubmit={handleLogin}>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                placeholder="seu@email.com"
                className="input input-bordered"
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
                required
              />
              <label className="label">
                <a href="#" className="label-text-alt link link-primary">Esqueceu a senha?</a>
              </label>
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
