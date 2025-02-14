import { Artwork } from "@/utils/types";


export const filterArtworks = (artworks: Artwork[], query: string): Artwork[] => {
    if (!query.trim()) return artworks; // Если запрос пустой, возвращаем весь список
    const lowerQuery = query.toLowerCase();
    return artworks.filter(art =>
        art.title.toLowerCase().includes(lowerQuery) ||
        (art.artist_display && art.artist_display.toLowerCase().includes(lowerQuery))
    );
};
