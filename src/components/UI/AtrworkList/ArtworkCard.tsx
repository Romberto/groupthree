import React from "react";
import styles from "./ArtworkCard.module.css";
import { ArtworkCardProps } from "@/utils/types";
import { BASE_IMAGE_URL, PLACEHOLDER_IMAGE } from "@/utils/constants";

export const ArtworkCard: React.FC<ArtworkCardProps> = ({ title, artist, date, imageId }) => {
    const imageUrl = imageId
        ? `${BASE_IMAGE_URL}/${imageId}/full/843,/0/default.jpg`
        : PLACEHOLDER_IMAGE;
    return (
        <div className={styles.card}>
            <img src={imageUrl} alt={title} className={styles.image} />
            <h3 className={styles.title}>{title}</h3>
            <p className={styles.artist}>{artist}</p>
            <p className={styles.date}>{date}</p>
        </div>
    )
};