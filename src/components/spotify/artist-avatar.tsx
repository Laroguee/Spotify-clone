import Image from 'next/image';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Play } from 'lucide-react';
import { Button } from '@/components/ui/button';

type ArtistAvatarProps = {
  name: string;
  dataAiHint: string;
};

export function ArtistAvatar({ name, dataAiHint }: ArtistAvatarProps) {
  return (
    <Card className="group relative cursor-pointer border-none bg-[#181818] p-4 text-center transition-all hover:bg-accent">
      <CardContent className="relative p-0">
        <Image
          src={`https://placehold.co/200x200.png`}
          alt={name}
          width={200}
          height={200}
          className="h-auto w-full rounded-full object-cover shadow-lg img-fluid"
          data-ai-hint={dataAiHint}
        />
        <Button size="icon" className="absolute bottom-2 right-2 h-12 w-12 rounded-full bg-primary text-black opacity-0 shadow-lg transition-all group-hover:bottom-4 group-hover:opacity-100 hover:scale-105">
          <Play className="h-6 w-6 fill-black" />
        </Button>
      </CardContent>
      <CardHeader className="p-0 pt-4">
        <CardTitle className="truncate font-headline text-base font-bold text-white">{name}</CardTitle>
        <CardDescription className="mt-1 text-sm text-muted-foreground">Artista</CardDescription>
      </CardHeader>
    </Card>
  );
}
