import Image from "next/image";

export const Gallery = () => {
  return (
    <section id="work">
      <div className="mx-auto lg:w-2/3 w-full py-10 bodoni px-5">
        <h1 className="text-[50px] md:text-[75px] xl:text-[80px] bodoni">
          Gallery
        </h1>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
          <Image
            src="https://cdn.muetab.com/img/original/50d01152b2c994f6eb14ef4cde40bed6.webp?v=1668725961"
            alt=""
            width={750}
            height={750}
            className="h-full max-w-full rounded-lg object-cover"
          />
          <Image
            src="https://cdn.muetab.com/img/original/749feab8657e65e07b1a9480dee280c8.webp?v=1668725577"
            alt=""
            width={750}
            height={750}
            className="h-full max-w-full rounded-lg object-cover"
          />
          <Image
            src="https://cdn.muetab.com/img/original/09791dacc52ac63f6c88c289f536ff72.webp?v=1668725242"
            alt=""
            width={750}
            height={750}
            className="h-full max-w-full rounded-lg object-cover"
          />
          <Image
            src="https://cdn.muetab.com/img/original/b6acd3ac8a0899c170142c3211cb1c6d.webp?v=1668725610"
            alt=""
            width={750}
            height={750}
            className="h-full max-w-full rounded-lg object-cover"
          />
          <Image
            src="https://cdn.muetab.com/img/original/73599d71ccdaa1b65a8f20bd1834f174.webp?v=1668726022"
            alt=""
            width={750}
            height={750}
            className="h-full max-w-full rounded-lg object-cover"
          />
          <Image
            src="https://cdn.muetab.com/img/original/3042117ae21c8862c3a7a3b46d8643ac.webp?v=1668726310"
            alt=""
            width={750}
            height={750}
            className="h-full max-w-full rounded-lg object-cover"
          />
          <Image
            src="https://cdn.muetab.com/img/original/017bb6fd4dff474bf387b88ddb16d29f.webp?v=1668725089"
            alt=""
            width={750}
            height={750}
            className="h-full max-w-full rounded-lg object-cover"
          />
          <Image
            src="https://cdn.muetab.com/img/original/ea7b2fdd269e8857b888ce9d40d989af.webp?v=1668726093"
            alt=""
            width={750}
            height={750}
            className="h-full max-w-full rounded-lg object-cover"
          />
          <Image
            src="https://cdn.muetab.com/img/original/6ff6155033541882ea2c3a0c6649d399.webp?v=1668725171"
            alt=""
            width={750}
            height={750}
            className="h-full max-w-full rounded-lg object-cover"
          />
          <Image
            src="https://cdn.muetab.com/img/original/6e2a7652203abbe71028fd2fe16b333d.webp?v=1668725275"
            alt=""
            width={750}
            height={750}
            className="h-full max-w-full rounded-lg object-cover"
          />
          <Image
            src="https://cdn.muetab.com/img/original/3b56295e62bff7650e0825a511a728cb.webp?v=1668726669"
            alt=""
            width={750}
            height={750}
            className="h-full max-w-full rounded-lg object-cover"
          />
          <Image
            src="https://cdn.muetab.com/img/original/c1a9589daffdbad8cb50d838dbf3adc9.webp?v=1668726408"
            alt=""
            width={750}
            height={750}
            className="h-full max-w-full rounded-lg object-cover"
          />
        </div>
      </div>
    </section>
  );
};
