import styles from './Specification.module.css';
import { ArtworkFullType } from '@/utils/types';

type SpecificationProps = {
  data: ArtworkFullType | null;
};

export const Specifications: React.FC<SpecificationProps> = ({ data }) => {
  const specifications = {
    Date: data?.date_display || 'No info',
    'Artwork Type': data?.artwork_type_title || 'No info',
    'Department title': data?.department_title || 'No info',
    Style: data?.style_title || 'No info',
    Medium: data?.medium_display || 'No info',
    'Refference Number': data?.main_reference_number || 'No info',
    Inscriptions: data?.inscriptions || 'No info',
    Dimensions: data?.dimensions || 'No info',
    Description: data?.short_description || 'No info',
  };

  console.log(data);
  return (
    <div className={styles.specification}>
      <h3 className={styles.specification_title}>Specification:</h3>
      {Object.entries(specifications).map(([key, value]) => (
        <p className={styles.text}>
          <b>{key}</b> {value}
        </p>
      ))}
    </div>
  );
};
