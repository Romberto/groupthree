import { filterArtworks } from "./filterArtworks";
import { Artwork } from "./types";

const mockArtworks: Artwork[] = [
    { id: 1, title: "Starry Night", artist_display: "Vincent van Gogh", date_display: "1889", image_id: "123" },
    { id: 2, title: "The Persistence of Memory", artist_display: "Salvador Dalí", date_display: "1931", image_id: "456" },
    { id: 3, title: "The Scream", artist_display: "Edvard Munch", date_display: "1893", image_id: "789" }
];

describe("filterArtworks", () => {
    it("возвращает все произведения искусства, если поисковый запрос пуст", () => {
        expect(filterArtworks(mockArtworks, "").length).toBe(3);
    });

    it("фильтрует произведения искусства по названию", () => {
        expect(filterArtworks(mockArtworks, "Scream")).toEqual([mockArtworks[2]]);
    });

    it("фильтры произведений искусства по художнику", () => {
        expect(filterArtworks(mockArtworks, "van Gogh")).toEqual([mockArtworks[0]]);
    });

    it("нечувствителен к регистру", () => {
        expect(filterArtworks(mockArtworks, "starry night")).toEqual([mockArtworks[0]]);
    });

    it("возвращает пустой массив, если совпадений не найдено", () => {
        expect(filterArtworks(mockArtworks, "nnn mmm random")).toEqual([]);
    });
});