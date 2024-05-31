import { GifItem } from "./GifItem";
import { useFetchGifs } from "../hooks/useFetchGifs";

export const GifGrid = ({ category }) => {

    const { images, isLoading } = useFetchGifs(category);

    return (
        <>
            <h3>{category}</h3>
            {
                isLoading && <h2>Loading...</h2>
            }
            <div className="card-grid">
                {
                    images.map((image) => (
                        <GifItem
                            key={image.id}
                            {...image}
                        />
                        // <img key={image.id} src={image.url} alt={image.title} />
                    ))
                }
            </div>
        </>
    )
}


//ee1KwlapklY8OwBMMiGqOgQAmP1P9FpY