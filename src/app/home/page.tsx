'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import type { User as FirebaseUser } from 'firebase/auth';
import { Timestamp } from 'firebase/firestore';
import { format } from 'date-fns';
import { Sidebar } from '@/components/spotify/sidebar';
import { Header } from '@/components/spotify/header';
import { Footer } from '@/components/spotify/footer';
import { SongCard } from '@/components/spotify/song-card';
import { ArtistAvatar } from '@/components/spotify/artist-avatar';
import { Skeleton } from '@/components/ui/skeleton';
import Link from 'next/link';
import { useAuth } from '@/hooks/useAuth';

interface AppUser extends FirebaseUser {
  name?: string;
  registrationDate?: Timestamp;
}

const trendingSongs = [
  { title: 'Frecuencia', artist: 'Los Dareyes De La Sierra', dataAiHint: 'regional mexican', isExplicit: true },
  { title: 'Coleccionando Heridas', artist: ['KAROL G', 'Marco Antonio Solís'], dataAiHint: 'latin pop' },
  { title: 'Little Demon', artist: 'Anuel AA', dataAiHint: 'latin trap' },
  { title: 'Perdon Mama', artist: ['Chuy Montana', 'Juanpa Salazar'], dataAiHint: 'corrido tumbado', isExplicit: true },
  { title: 'YO y TÚ', artist: ['Ovy On The Drums', 'Quevedo', 'Beéle'], dataAiHint: 'reggaeton' },
  { title: 'Golden', artist: ['HUNTR/X', 'EJAE', 'NUNA', 'REI AMI'], dataAiHint: 'k-pop' },
];

const popularArtists = [
  { name: 'Lana Del Rey', dataAiHint: 'female singer' },
  { name: 'The Weeknd', dataAiHint: 'male singer' },
  { name: 'Billie Eilish', dataAiHint: 'pop artist' },
  { name: 'Daft Punk', dataAiHint: 'music duo' },
  { name: 'Queen', dataAiHint: 'rock band' },
  { name: 'Kendrick Lamar', dataAiHint: 'rap artist' },
];


function PageLoader() {
    return (
        <div className="flex min-h-screen w-full items-center justify-center bg-black">
            <div className="space-y-4 text-center">
                <Skeleton className="mx-auto h-12 w-12 rounded-full" />
                <div className="space-y-2">
                    <Skeleton className="mx-auto h-4 w-[250px]" />
                    <Skeleton className="mx-auto h-4 w-[200px]" />
                </div>
            </div>
        </div>
    )
}

export default function HomePage() {
  const router = useRouter();
  const { user, loading }: { user: AppUser | null, loading: boolean } = useAuth();

  useEffect(() => {
    if (!loading && !user) {
      router.push('/login');
    }
  }, [user, loading, router]);

  if (loading || !user) {
    return <PageLoader />;
  }

  const registrationDate = user.registrationDate 
    ? format(user.registrationDate.toDate(), 'dd/MM/yyyy')
    : '...';
  
  const displayName = user.name || user.displayName || 'amigo';

  return (
    <div className="relative flex min-h-screen w-full flex-col p-2">
    <div className="flex flex-1 gap-2 overflow-hidden">
      <Sidebar />
      <div className="flex-1 overflow-y-auto rounded-lg bg-[#121212]">
        <Header />
        <div className="p-6">
            <section className="mb-8">
                 <h1 className="font-headline text-3xl font-bold text-white">
                    ¡Bienvenido, {displayName}!
                </h1>
                <p className="text-muted-foreground">Miembro desde: {registrationDate}</p>
            </section>
          <section>
            <div className="mb-4 flex items-center justify-between">
              <h2 className="font-headline text-2xl font-bold text-white">
                Canciones en tendencia
              </h2>
              <Link href="#" className="text-sm font-bold text-muted-foreground hover:underline">
                Mostrar todo
              </Link>
            </div>
            <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6">
              {trendingSongs.map((song, index) => (
                <SongCard key={index} {...song} />
              ))}
            </div>
          </section>

          <section className="mt-8">
            <div className="mb-4 flex items-center justify-between">
              <h2 className="font-headline text-2xl font-bold text-white">
                Artistas populares
              </h2>
              <Link href="#" className="text-sm font-bold text-muted-foreground hover:underline">
                Mostrar todo
              </Link>
            </div>
            <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6">
              {popularArtists.map((artist, index) => (
                <ArtistAvatar key={index} {...artist} />
              ))}
            </div>
          </section>
        </div>
      </div>
    </div>
    <Footer />
  </div>
  );
}
