import styles from './Specification.module.css';
import { SpecificationProps } from '@/utils/types';
import { NO_INFO } from '@/utils/constants';

export const Specifications: React.FC<SpecificationProps> = ({ data }) => {
  const specifications: Record<string, string> = {
    Date: data?.date_display || NO_INFO,
    'Artwork Type': data?.artwork_type_title || NO_INFO,
    'Department title': data?.department_title || NO_INFO,
    Style: data?.style_title || NO_INFO,
    Medium: data?.medium_display || NO_INFO,
    'Refference Number': data?.main_reference_number || NO_INFO,
    Inscriptions: data?.inscriptions || NO_INFO,
    Dimensions: data?.dimensions || NO_INFO,
    Description: data?.short_description || NO_INFO,
  };

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
