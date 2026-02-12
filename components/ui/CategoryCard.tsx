import Image from "next/image";

interface CategoryCardProps {
  name: string;
  description: string;
  startingPrice: number;
  image: string;
  isFirstCard?: boolean;
}

export function CategoryCard({
  name,
  description,
  startingPrice,
  image,
  isFirstCard = false,
}: CategoryCardProps) {
    
  if (isFirstCard) {
    // Left card: shows all info stacked vertically
    return (
      <div className="h-100 w-80 shrink-0 rounded-4xl overflow-hidden bg-cover bg-center relative group shadow-md">
        <div className="absolute inset-0 bg-black/20">
          <Image src={image} alt={name} fill className="object-cover bg-white w-full h-full group-hover:scale-105 transition-transform" />
          <div className="bg-linear-to-t from-black/80 to-transparent absolute w-full h-full pointer-events-none"></div>
</div>
        <div className="absolute inset-0 flex flex-col items-start justify-between p-4">
          <div className="inline-flex rounded-lg bg-white px-3 py-1 text-base font-semibold">
            From ₹{startingPrice}
          </div>
          <div className="w-full text-center rounded-[20px] bg-white px-6 py-3 text-sm font-semibold text-stone-900">
            {description}
          </div>
        </div>
      </div>
    );
  }

  // Right cards: grid layout with dark border and white label at bottom
  return (
    <div className="h-90 w-70 shrink-0 relative group shadow-md overflow-hidden">
      <div className="flex flex-col justify-center items-center h-full gap-4">
        <div className="h-full w-full bg-white rounded-2xl overflow-clip">
            <Image src={image} alt={name} height={300} width={300} className="object-cover bg-white w-full h-full rounded-2xl hover:scale-105 transition-transform" />
        </div>
        <div className="px-4 p-2 h-max w-full bg-white rounded-2xl">
            <p className="text-stone-900 text-center font-semibold">
                {name}
            </p>
        </div>
      </div>
    </div>
  );
}
