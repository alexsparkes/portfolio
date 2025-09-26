'use client';

import dynamic from "next/dynamic";

const Music = dynamic(() => import("@/components/sections/music"), {
  ssr: false,
  loading: () => (
    <div className="flex h-32 items-center justify-center rounded-xl border border-dashed border-border/60 text-sm text-muted-foreground">
      Loading playlists…
    </div>
  ),
});

export function MusicClient() {
  return <Music />;
}
