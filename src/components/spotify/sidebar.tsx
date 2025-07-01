import Link from 'next/link';
import { Home, Search, Library, Plus, ArrowRight, Globe } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Icons } from '@/components/icons';

export function Sidebar() {
  return (
    <aside className="flex w-[350px] flex-col gap-2">
      <div className="rounded-lg bg-[#121212] p-2">
        <nav className="flex flex-col gap-1 p-2">
          <Link href="/" className="flex items-center gap-4 rounded p-2 text-lg font-bold text-white transition-colors hover:text-white/80">
            <Icons.spotify className="h-8 w-8" />
            <span className="font-headline">Spotify</span>
          </Link>
          <Link href="/" className="flex items-center gap-4 rounded p-2 font-bold text-muted-foreground transition-colors hover:text-white">
            <Home className="h-6 w-6" />
            <span className="font-headline">Inicio</span>
          </Link>
          <Link href="#" className="flex items-center gap-4 rounded p-2 font-bold text-muted-foreground transition-colors hover:text-white">
            <Search className="h-6 w-6" />
            <span className="font-headline">Buscar</span>
          </Link>
        </nav>
      </div>

      <div className="flex-1 rounded-lg bg-[#121212] p-2 flex flex-col justify-between">
        <div>
          <div className="p-2">
            <div className="mb-2 flex items-center justify-between">
              <Link href="#" className="flex items-center gap-2 font-bold text-muted-foreground transition-colors hover:text-white">
                <Library className="h-6 w-6" />
                <span className="font-headline">Tu biblioteca</span>
              </Link>
              <div className="flex items-center gap-2">
                <Button variant="ghost" size="icon" className="h-8 w-8 text-muted-foreground hover:bg-accent/50 hover:text-white">
                  <Plus />
                </Button>
                <Button variant="ghost" size="icon" className="h-8 w-8 text-muted-foreground hover:bg-accent/50 hover:text-white">
                  <ArrowRight />
                </Button>
              </div>
            </div>
            
            <div className="mt-4 flex flex-col gap-4">
               <Card className="border-none bg-[#242424] p-4 text-white">
                <CardContent className="p-0">
                  <p className="font-headline font-semibold">Crea tu primera lista</p>
                  <p className="text-sm">Es muy fácil, y te echaremos una mano.</p>
                  <Button className="mt-4 rounded-full bg-white px-4 py-1 text-black font-bold h-auto hover:scale-105 transition-transform">Crear lista</Button>
                </CardContent>
              </Card>

              <Card className="border-none bg-[#242424] p-4 text-white">
                <CardContent className="p-0">
                  <p className="font-headline font-semibold">Busquemos algunos podcasts para seguir</p>
                  <p className="text-sm">Te avisaremos cuando salgan nuevos episodios.</p>
                  <Button className="mt-4 rounded-full bg-white px-4 py-1 text-black font-bold h-auto hover:scale-105 transition-transform">Explorar pódcasts</Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>

        <div className="px-4 pb-4">
          <div className="flex flex-wrap gap-x-4 gap-y-2 text-xs text-muted-foreground">
              <Link href="#" className="hover:underline">Legal</Link>
              <Link href="#" className="hover:underline">Centro de seguridad y privacidad</Link>
              <Link href="#" className="hover:underline">Política de Privacidad</Link>
              <Link href="#" className="hover:underline">Cookies</Link>
              <Link href="#" className="hover:underline">Información sobre los anuncios</Link>
              <Link href="#" className="hover:underline">Accesibilidad</Link>
          </div>
          <Button variant="outline" className="mt-8 rounded-full border-muted-foreground text-white hover:text-white hover:border-white font-bold text-sm">
              <Globe className="mr-2 h-4 w-4" />
              Español de España
          </Button>
        </div>
      </div>
    </aside>
  );
}
