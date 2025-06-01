"use client";

import { useAuth } from "../../hooks/useAuth";
import { useEffect, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";

const Login = () => {
  const { signIn, isAuthenticated, isLoading } = useAuth();
  const router = useRouter();
  const searchParams = useSearchParams();
  const [authInitiated, setAuthInitiated] = useState(false);

  useEffect(() => {
    if (!isLoading) {
      if (isAuthenticated) {
        router.push("/");

      } else if (!authInitiated) {
        setAuthInitiated(true);
        const returnTo = searchParams.get('returnTo') || '/';
        signIn();
      }
    }
  }, [isAuthenticated, isLoading, router, signIn, authInitiated]);

  return <></>;
};

export default Login;