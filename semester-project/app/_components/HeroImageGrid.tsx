import Image, { StaticImageData } from "next/image";

export type HeroImageObject = {
  image: StaticImageData;
  borderRadius: string;
};

export type HeroImageGridProps = {
  images: HeroImageObject[];
};

const HeroImageGrid = ({ images }: HeroImageGridProps) => {
  return (
    <div className="grid grid-cols-2 grid-rows-2 gap-2 grow">
      {images.map((imageObj, index) => (
        <div key={index} className="relative h-128 w-128 xl:h-64 xl:w-80">
          <Image
            src={imageObj.image}
            placeholder="blur"
            alt={`Hero image ${index + 1}`}
            fill
            sizes="(min-width: 1024px) 33vw"
            style={{
              objectFit: "cover",
              borderRadius: `${imageObj.borderRadius}`,
            }}
          />
        </div>
      ))}
    </div>
  );
};

export default HeroImageGrid;