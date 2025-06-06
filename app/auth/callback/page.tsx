'use client';

import { useEffect } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { useAuth } from '@/hooks/useAuth';

export default function CallbackPage() {
  const { isAuthenticated, isLoading } = useAuth();
  const router = useRouter();
  const searchParams = useSearchParams();

  useEffect(() => {
    // If authentication process is finished (no longer loading)
    if (!isLoading) {
      // Only redirect if authenticated
      if (isAuthenticated) {
        const returnTo = searchParams.get('returnTo');
        router.push(returnTo || '/');
      } else {
        // If not authenticated after callback completes, go to login
        router.push('/login');
      }
    }
  }, [isAuthenticated, isLoading, router, searchParams]);

  // Show loading state while we wait for Auth0
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-yellow-500"></div>
      <p className="mt-4 text-lg">Completing authentication...</p>
    </div>
  );
}
