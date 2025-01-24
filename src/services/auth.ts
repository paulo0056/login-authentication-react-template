export interface LoginCredentials {
  cpf: string;
  senha: string;
}

export interface AuthResponse {
  token: string;
}

export const authService = {
  async login(credentials: LoginCredentials): Promise<AuthResponse> {
    const response = await fetch("http://localhost:3001/auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(credentials),
    });

    if (!response.ok) {
      throw new Error("Falha na autenticação");
    }

    return response.json();
  },
};
