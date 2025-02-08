import React from "react";
import styles from "./ArtworkCard.module.css";
import { ArtworkCardProps } from "@/utils/types";

export const ArtworkCard: React.FC<ArtworkCardProps> = ({ title, artist, date, imageId }) => {
    const imageUrl = imageId
        ? `https://www.artic.edu/iiif/2/${imageId}/full/843,/0/default.jpg`
        : "https://via.placeholder.com/843x843?text=No+Image";

    return (
        <div className={styles.card}>
            <img src={imageUrl} alt={title} className={styles.image} />
            <h3 className={styles.title}>{title}</h3>
            <p className={styles.artist}>{artist}</p>
            <p className={styles.date}>{date}</p>
        </div>
    )
};