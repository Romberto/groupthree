import React from "react";
import { useEffect, useState } from "react";
import styles from "./ArtworkList.module.css";
import { Artwork } from "@/utils/types";
import { ArtworkCard } from "./ArtworkCard";
import { ARTWORKS_ENDPOINT } from "@/utils/constants";
import { useAppSelector } from "@/app/hooks";

export const ArtworkList: React.FC = () => {
    const [artworks, setArtworks] = useState<Artwork[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);
    const favorites = useAppSelector((state)=>state.favoritesReducer.favorites)
    const isExistInFavoritas = (id:number):boolean =>{
        if(favorites.includes(id)){
            return true
        }else{
            return false
        }
        
    }
    useEffect(() => {
        fetch(ARTWORKS_ENDPOINT)
            .then((response) => {
                if (!response.ok) {
                    throw new Error("Failed to fetch artworks");
                }
                return response.json();
            })
            .then((data) => {
                setArtworks(data.data);
                setLoading(false);
            })
            .catch((error) => {
                setError(error.message);
                setLoading(false);
            });
    }, []);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error}</p>;

    return (
        <div className={styles.grid}>
            {artworks.map((art) => (
                <ArtworkCard
                    key={art.id}
                    id={art.id}
                    title={art.title}
                    artist={art.artist_display}
                    date={art.date_display}
                    imageId={art.image_id}
                    isFavorites={isExistInFavoritas(art.id)} />
            ))}
        </div>
    );
};
