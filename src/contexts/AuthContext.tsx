"use client";

import {
  createContext,
  useContext,
  useState,
  useEffect,
  useCallback,
} from "react";
import { LoginCredentials, authService } from "@/services/auth";
import Cookies from "js-cookie";
import { useRouter } from "next/navigation";

interface AuthContextType {
  isAuthenticated: boolean;
  login: (credentials: LoginCredentials) => Promise<void>;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const router = useRouter();

  const logout = useCallback(() => {
    localStorage.removeItem("token");
    localStorage.removeItem("tokenExpiration");
    Cookies.remove("token");
    setIsAuthenticated(false);
    router.replace("/");
  }, [router]);

  useEffect(() => {
    const token = localStorage.getItem("token");
    const tokenExpiration = localStorage.getItem("tokenExpiration");

    if (token && tokenExpiration) {
      const isExpired = Date.now() > parseInt(tokenExpiration);
      if (isExpired) {
        logout();
      } else {
        setIsAuthenticated(true);
      }
    }
  }, [logout]);

  const login = async (credentials: LoginCredentials) => {
    try {
      const { token } = await authService.login(credentials);

      // Calcula a data de expiração (24 horas a partir de agora)
      const expirationTime = Date.now() + 24 * 60 * 60 * 1000;

      // Salva o token e sua data de expiração
      localStorage.setItem("token", token);
      localStorage.setItem("tokenExpiration", expirationTime.toString());

      // Salva o token nos cookies com expiração
      Cookies.set("token", token, {
        expires: 1, // 1 dia
      });

      setIsAuthenticated(true);
      router.replace("/churchControl/home");
    } catch (error) {
      throw error;
    }
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth deve ser usado dentro de um AuthProvider");
  }
  return context;
}
