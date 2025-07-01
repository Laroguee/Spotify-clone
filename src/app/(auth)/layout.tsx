'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { Icons } from '@/components/icons';
import { useAuth } from '@/hooks/useAuth';
import { Skeleton } from '@/components/ui/skeleton';

function AuthLoader() {
    return (
        <div className="flex min-h-screen w-full items-center justify-center bg-black">
            <div className="space-y-4 text-center">
                <Icons.spotify className="mx-auto h-12 w-12 animate-pulse text-white" />
                <div className="space-y-2">
                    <Skeleton className="mx-auto h-4 w-[250px]" />
                </div>
            </div>
        </div>
    )
}


export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { user, loading } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!loading && user) {
      router.push('/home');
    }
  }, [user, loading, router]);

  if (loading || user) {
    return <AuthLoader />;
  }

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-black">
        <Link href="/" className="mb-8 flex items-center gap-2 text-white">
            <Icons.spotify className="h-10 w-10" />
            <h1 className="font-headline text-4xl font-bold">Spotify</h1>
        </Link>
      {children}
    </div>
  );
}
