import { useEffect, useState } from "react";

import { getGifs } from "../helpers/getGifs";

export const useFetchGiffs = (category) => {
    const [images, setImages] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    const getData = async () => {
        const images = await getGifs(category);
        setImages(images);
        setIsLoading(false);
    }

    useEffect(() => {
        getData();
    }, []);

    return {
        images,
        isLoading    
    }
}
