import { useEffect, useState } from "react";
import { getGift } from "../helpers/getGifs";

export const useFetchGifs = category => {
  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const getImages = async () => {
      const newImages = await getGift(category);
      setImages(newImages);
      setIsLoading(false);
    };
    getImages();
  }, []);

  return { images, isLoading };
};
