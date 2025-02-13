import styles from './ArtworkPage.module.css';
import { fetchApiGetById } from '@/utils/api';
import arrow from '@/assets/details-arrow.svg';
import { BASE_IMAGE_URL, DEFAULTIMAGE, PATH } from '@/utils/constants';
import { fetchArtworkDataType } from '@/utils/types';
import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router';

export const ArtworkPage = () => {
  const { id } = useParams();
  const [artwork, setArtwork] = useState<fetchArtworkDataType | null>(null);
  const imageUrl = artwork?.image_id
    ? `${BASE_IMAGE_URL}/${artwork?.image_id}/full/500,/0/default.jpg`
    : DEFAULTIMAGE;

  useEffect(() => {
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
        <div className={styles.specification}>
          <h3 className={styles.specification_title}>Specification:</h3>
          <p className={styles.text}>
            <b>Date: </b> {artwork?.date_display}
          </p>
          <p className={styles.text}>
            <b>Artwork Type: </b>
            {artwork?.artwork_type_title}
          </p>
          <p className={styles.text}>
            <b>Department title: </b> {artwork?.department_title}
          </p>
          <p className={styles.text}>
            <b>Style: </b>
            {artwork?.style_title ? artwork?.style_title : 'no info'}
          </p>
          <p className={styles.text}>
            <b>Medium: </b> {artwork?.medium_display}
          </p>
          <p className={styles.text}>
            <b>Refference Number: </b> {artwork?.main_reference_number}
          </p>
          <p className={styles.text}>
            <b>Inscriptions: </b>{' '}
            {artwork?.inscriptions ? artwork?.inscriptions : 'no info'}
          </p>
          <p className={styles.text}>
            <b>Dimensions: </b> {artwork?.dimensions}
          </p>
          <p className={styles.text}>
            <b>Description: </b>
            {artwork?.short_description
              ? artwork?.short_description
              : 'The description is missing'}
          </p>
        </div>
      </section>
    </div>
  );
};
