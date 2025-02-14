import styles from './ArtworkPage.module.css';
import { fetchApiGetById } from '@/utils/api';
import arrow from '@/assets/details-arrow.svg';
import { BASE_IMAGE_URL, DEFAULTIMAGE, PATH } from '@/utils/constants';
import { ArtworkFullType } from '@/utils/types';
import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router';
import { Specifications } from '@/components/UI/Specifications/Specification';

export const ArtworkPage = () => {
  const { id } = useParams();
  const [artwork, setArtwork] = useState<ArtworkFullType | null>(null);
  const imageUrl = artwork?.image_id
    ? `${BASE_IMAGE_URL}/${artwork?.image_id}/full/500,/0/default.jpg`
    : DEFAULTIMAGE;

  useEffect(() => {
    window.scrollTo(0, 0);
    fetchApiGetById(`${id}`).then(data => {
      setArtwork(data.data);
    });
  }, []);

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <Link to={PATH.SEARCH} className={styles.redirect}>
          <img className={styles.redirect_arrow} src={arrow} />
          Return to Search Page
        </Link>
        <h2 className={styles.title}>{artwork?.title}</h2>
        <p className={styles.subtitle}>{artwork?.artist_display}</p>
      </header>
      <section className={styles.artwork}>
        <img className={styles.image} src={imageUrl} alt={artwork?.title} />
        <Specifications data={artwork} />
      </section>
    </div>
  );
};
