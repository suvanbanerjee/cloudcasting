"use client";

import { useAuth } from "../../hooks/useAuth";
import { useEffect } from "react";
import { useRouter } from "next/navigation";

const Login = () => {
  const { signIn, isAuthenticated } = useAuth();
  const router = useRouter();

  useEffect(() => {
    // Redirect to home if already authenticated
    if (isAuthenticated) {
      router.push("/");
    }
  }, [isAuthenticated, router]);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    signIn();
  };
  useEffect(() => {
    // Redirect to home if already authenticated
    if (isAuthenticated) {
      router.push("/");
    } else {
      // If not authenticated, redirect directly to Auth0 login
      signIn();
    }
  }, [isAuthenticated, router, signIn]);

  return <></>;
};

export default Login;