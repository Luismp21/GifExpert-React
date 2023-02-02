import { GiftItem } from "./GiftItem";
import { useFetchGifs } from "../hooks/useFetchGifs";

export const GifGrid = ({ category }) => {
  const { images, isLoading } = useFetchGifs(category);

  return (
    <>
      <h3 className="text-4xl font-bold capitalize italic py-4 text-center">
        {category}
      </h3>

      <div className="sm:flex px-4 flex-wrap gap-4 justify-center">
        {images.map((image) => (
          <GiftItem key={image.id} {...image} />
        ))}
      </div>
    </>
  );
};
