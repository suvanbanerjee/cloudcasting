"use client";

import { useSession, signIn, signOut } from "next-auth/react";

export const useAuth = () => {
  const { data: session, status } = useSession();
  const isLoading = status === "loading";
  const isAuthenticated = status === "authenticated";

  return {
    session,
    isLoading,
    isAuthenticated,
    user: session?.user,
    signIn: () => signIn("auth0"),
    signOut: () => signOut({ callbackUrl: "/" })
  };
};
