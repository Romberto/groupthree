import React from "react";
import { useEffect, useState } from "react";
import styles from "./ArtworkList.module.css";
import { Artwork } from "@/utils/types";
import { ArtworkCard } from "./ArtworkCard";
import { ARTWORKS_ENDPOINT } from "@/utils/constants";

export const ArtworkList: React.FC<{ searchQuery: string }> = ({ searchQuery }) => {
    const [artworks, setArtworks] = useState<Artwork[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        fetch(ARTWORKS_ENDPOINT)
            .then((response) => {
                if (!response.ok) {
                    throw new Error("Failed to fetch artworks");
                }
                return response.json();
            })
            .then((data) => {
                console.log(data);
                setArtworks(data.data);
                setLoading(false);
            })
            .catch((error) => {
                setError(error.message);
                setLoading(false);
            });
    }, []);

    const filteredArtworks = artworks.filter(art =>
        art.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        (art.artist_display && art.artist_display.toLowerCase().includes(searchQuery.toLowerCase()))
    );

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error}</p>;

    return (
        <div className={styles.grid}>
            {filteredArtworks.length > 0 ? (
                filteredArtworks.map((art) => (
                    <ArtworkCard
                        key={art.id}
                        title={art.title}
                        artist={art.artist_display}
                        date={art.date_display}
                        imageId={art.image_id}
                    />
                ))
            ) : (
                <p className={styles.noResults}>not found</p>
            )}
        </div>
    );
};
