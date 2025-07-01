"use client";

import { useRouter } from 'next/navigation';
import { ChevronLeft, ChevronRight, Download, Search } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from '@/components/ui/dropdown-menu';
import { signOut } from 'firebase/auth';
import { auth } from '@/lib/firebase';
import { useToast } from '@/hooks/use-toast';
import { Input } from '@/components/ui/input';
import { useAuth } from '@/hooks/useAuth';

export function Header() {
  const router = useRouter();
  const { toast } = useToast();
  const { user, loading } = useAuth();

  const handleLogout = async () => {
    try {
      await signOut(auth);
      toast({
        title: "Sesión cerrada",
        description: "Has cerrado sesión correctamente.",
      });
      router.push('/');
    } catch (error) {
      console.error("Error signing out: ", error);
      toast({
        title: "Error",
        description: "No se pudo cerrar la sesión.",
        variant: "destructive",
      });
    }
  };

  return (
    <header className="sticky top-0 z-10 flex items-center justify-between rounded-t-lg bg-[#121212] bg-opacity-80 p-4 backdrop-blur-sm">
      <div className="flex flex-1 items-center gap-2">
        <Button variant="ghost" size="icon" className="h-8 w-8 rounded-full bg-black/50 text-muted-foreground hover:bg-accent/50 hover:text-white">
          <ChevronLeft />
        </Button>
        <Button variant="ghost" size="icon" className="h-8 w-8 rounded-full bg-black/50 text-muted-foreground hover:bg-accent/50 hover:text-white">
          <ChevronRight />
        </Button>
        {user && (
          <div className="relative hidden w-full max-w-sm md:block">
            <Search className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-muted-foreground" />
            <Input
              placeholder="¿Qué quieres reproducir?"
              className="h-12 w-full rounded-full border-none bg-[#242424] pl-10 pr-4 text-sm text-white placeholder:text-muted-foreground"
            />
          </div>
        )}
      </div>

      <div className="flex items-center gap-4">
        {loading ? (
          <div>Loading...</div>
        ) : user ? (
          <>
            <Button className="hidden rounded-full bg-white font-bold text-black transition-transform hover:scale-105 md:flex">
              <Download className="mr-2 h-4 w-4" />
              Instalar app
            </Button>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="h-8 w-8 rounded-full bg-black/50">
                  <Avatar className="h-8 w-8">
                    <AvatarImage src={`https://placehold.co/40x40.png`} data-ai-hint="user avatar" />
                    <AvatarFallback>{user.displayName?.[0]?.toUpperCase() || user.email?.[0]?.toUpperCase()}</AvatarFallback>
                  </Avatar>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuLabel>{user?.displayName}</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem>Perfil</DropdownMenuItem>
                <DropdownMenuItem onClick={handleLogout}>
                  Cerrar sesión
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </>
        ) : (
          <>
            <Button variant="link" className="hidden font-bold text-muted-foreground hover:scale-105 hover:text-white md:inline-flex">Premium</Button>
            <Button variant="link" className="hidden font-bold text-muted-foreground hover:scale-105 hover:text-white md:inline-flex">Asistencia</Button>
            <Button variant="link" className="hidden font-bold text-muted-foreground hover:scale-105 hover:text-white md:inline-flex">Descargar</Button>
            <Separator orientation="vertical" className="hidden h-6 md:block" />
            <Button variant="ghost" className="rounded-full px-8 font-bold text-muted-foreground hover:scale-105 hover:bg-transparent hover:text-white" onClick={() => router.push('/signup')}>
              Registrarte
            </Button>
            <Button className="rounded-full bg-white px-8 font-bold text-black transition-transform hover:scale-105" onClick={() => router.push('/login')}>
              Iniciar sesión
            </Button>
          </>
        )}
      </div>
    </header>
  );
}
