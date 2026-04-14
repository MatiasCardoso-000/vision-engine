import { useState } from "react";

export default function useImageGeneration() {
  const [imageUrl, setImageUrl] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);


  const generateImage = async (prompt: string) => {
    setIsLoading(true);
    setImageUrl(null);
    setError(null);

    try {
      const response = await fetch(
        `https://gen.pollinations.ai/image/a%20${prompt}%20in%20space?model=flux`,
        {
          headers: {
            "Authorization": `Bearer ${import.meta.env.VITE_HF_TOKEN}`,
          },
        },
      );

      if (!response.ok) {
        throw new Error(`Error ${response.status}: ${response.statusText}`);
      }

      const blob = await response.blob();
      const url = URL.createObjectURL(blob);
      setImageUrl(url);
    } catch (error) {
      console.error(error);
      setError(error instanceof Error ? error.message : "Algo salio mal");
    } finally {
      setIsLoading(false);
    }
  };

  return { generateImage, imageUrl, isLoading, error };
}
