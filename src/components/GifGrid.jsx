import { useEffect, useState } from "react";

import { getGifs } from "../helpers/getGifs";
import { useFetchGiffs } from "../hooks/useFetchGiffs";
import { GiffItem } from "./GiffItem";

export const GifGrid = ({ category }) => {
    const {images, isLoading} = useFetchGiffs(category);

    return (
        <>
            <h3>{category}</h3>
            {isLoading && <h2>Loading...</h2>}
            <div className="card-grid">
                {images.map(image => (
                    <GiffItem 
                        key={image.id}
                        {...image}
                    />
                ))}
            </div>
        </>
    )
}
