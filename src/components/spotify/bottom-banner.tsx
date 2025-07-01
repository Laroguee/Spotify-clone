import { Button } from '@/components/ui/button';
import Link from 'next/link';

export function BottomBanner() {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-20 flex items-center justify-between bg-gradient-to-r from-[#af2896] to-[#509bf5] p-4 text-white">
      <div>
        <p className="font-headline text-sm uppercase">Muestra de Spotify</p>
        <p className="font-body">
          Regístrate para disfrutar de canciones y podcasts sin límites, con anuncios ocasionales. No hace falta tarjeta de crédito.
        </p>
      </div>
      <Button asChild className="rounded-full bg-white px-8 font-bold text-black transition-transform hover:scale-105 hover:bg-gray-200">
        <Link href="/signup">Registrarte gratis</Link>
      </Button>
    </div>
  );
}
