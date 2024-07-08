import { ArrowUpRight } from "lucide-react";

export const Card = ({
  name,
  description,
  imageURL,
}: {
  name: string;
  description: string;
  imageURL: string;
}) => {
  return (
    <div className="flex flex-col gap-2 relative group hover:bg-card p-5 rounded-lg transition-all duration-300 cursor-pointer">
      <img className="rounded-lg" src={imageURL} />
      <h3 className="text-3xl bodoni mt-3">{name}</h3>
      <span className="lexend">{description}</span>
      <button className="absolute top-3 right-3 bg-accent rounded-full p-2 transition-transform group-hover:transform group-hover:translate-x-1 group-hover:translate-y-1 duration-300">
        <ArrowUpRight />
      </button>
    </div>
  );
};
