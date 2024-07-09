import Link from "next/link";
import { Button } from "@/components/ui/button";
import { MoveRight } from "lucide-react";
import Image from 'next/image';
import detective from '@/public/detective.svg';

export default function NotFound() {
  return (
    <div className="min-h-screen grid place-items-center">
      <section className="flex lg:flex-row flex-col justify-center gap-10 items-center">
      <Image src={detective} alt="Detective" />
        <div>
          <h1 className="bodoni text-6xl">404</h1>
          <p className="lexend">Appears you&apos;ve taken a wrong turn....</p>
          <Button className="mt-3 lexend gap-3 group" size="lg" asChild>
            <Link href="/">
              Return Home
              <MoveRight className="w-4 h-4 group-hover:translate-x-1 transition-all duration-300" />
            </Link>
          </Button>
        </div>
      </section>
    </div>
  );
}
