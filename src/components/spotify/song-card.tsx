import Image from 'next/image';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Play } from 'lucide-react';
import { Button } from '@/components/ui/button';

type SongCardProps = {
  title: string;
  artist: string | string[];
  dataAiHint: string;
  isExplicit?: boolean;
};

export function SongCard({ title, artist, dataAiHint, isExplicit = false }: SongCardProps) {
  const artistText = Array.isArray(artist) ? artist.join(', ') : artist;

  return (
    <Card className="group relative cursor-pointer border-none bg-[#181818] p-4 transition-all hover:bg-accent">
      <CardContent className="relative p-0">
        <Image
          src={`https://placehold.co/200x200.png`}
          alt={title}
          width={200}
          height={200}
          className="h-auto w-full rounded-md object-cover shadow-lg"
          data-ai-hint={dataAiHint}
        />
        <Button size="icon" className="absolute bottom-2 right-2 h-12 w-12 rounded-full bg-primary text-black opacity-0 shadow-lg transition-all group-hover:bottom-4 group-hover:opacity-100 hover:scale-105">
          <Play className="h-6 w-6 fill-black" />
        </Button>
      </CardContent>
      <CardHeader className="p-0 pt-4">
        <CardTitle className="truncate font-headline text-base font-bold text-white">{title}</CardTitle>
        <CardDescription className="mt-1 flex items-center gap-1.5 truncate text-sm text-muted-foreground">
          {isExplicit && <span className="grid h-4 w-4 place-items-center rounded-sm bg-muted-foreground/80 text-[10px] font-bold leading-none text-background">E</span>}
          <span className="truncate">{artistText}</span>
        </CardDescription>
      </CardHeader>
    </Card>
  );
}
