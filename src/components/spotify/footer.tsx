import Link from 'next/link';
import { Instagram, Twitter, Facebook } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';

const footerLinks = {
  'Empresa': [
    { name: 'Acerca de', href: '#' },
    { name: 'Empleo', href: '#' },
    { name: 'For the Record', href: '#' },
  ],
  'Comunidades': [
    { name: 'Para artistas', href: '#' },
    { name: 'Desarrolladores', href: '#' },
    { name: 'Publicidad', href: '#' },
    { name: 'Inversores', href: '#' },
    { name: 'Proveedores', href: '#' },
  ],
  'Enlaces útiles': [
    { name: 'Asistencia', href: '#' },
    { name: 'App gratis para móvil', href: '#' },
  ],
  'Planes de Spotify': [
    { name: 'Premium Individual', href: '#' },
    { name: 'Premium Duo', href: '#' },
    { name: 'Premium Familiar', href: '#' },
    { name: 'Spotify Free', href: '#' },
  ]
};

export function Footer() {
  return (
    <footer className="mt-2 flex-shrink-0 rounded-lg bg-[#121212] px-6 py-8 text-white">
      <div className="container mx-auto">
        <div className="flex flex-col justify-between gap-8 md:flex-row">
          <div className="grid flex-1 grid-cols-2 gap-8 sm:grid-cols-4">
            {Object.entries(footerLinks).map(([title, links]) => (
              <div key={title}>
                <h3 className="font-headline font-bold text-white">{title}</h3>
                <ul className="mt-4 space-y-2">
                  {links.map((link) => (
                    <li key={link.name}>
                      <Link href={link.href} className="text-muted-foreground hover:text-white hover:underline">
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div className="flex items-start gap-4 md:items-center">
            <Button variant="ghost" size="icon" className="bg-accent/80 hover:bg-accent text-white rounded-full h-10 w-10">
              <Instagram />
            </Button>
            <Button variant="ghost" size="icon" className="bg-accent/80 hover:bg-accent text-white rounded-full h-10 w-10">
              <Twitter />
            </Button>
            <Button variant="ghost" size="icon" className="bg-accent/80 hover:bg-accent text-white rounded-full h-10 w-10">
              <Facebook />
            </Button>
          </div>
        </div>
        <Separator className="my-8 bg-muted-foreground/20" />
        <div className="flex flex-col items-center justify-between text-sm text-muted-foreground sm:flex-row">
          <p>&copy; 2025 SpotClone AB</p>
          <div className="mt-4 flex flex-wrap justify-center gap-x-4 gap-y-2 sm:mt-0">
            <Link href="#" className="hover:text-white">Legal</Link>
            <Link href="#" className="hover:text-white">Centro de Privacidad</Link>
            <Link href="#" className="hover:text-white">Política de Privacidad</Link>
            <Link href="#" className="hover:text-white">Cookies</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
