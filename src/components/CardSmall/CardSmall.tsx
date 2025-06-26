import { Link } from "react-router-dom";

import styles from "./CardSmall.module.scss";

interface CardSmallProps {
  name: string;
  imageSrc: string | null;
  url: string;
}

const CardSmall = ({ name, imageSrc, url }: CardSmallProps) => {
  return (
    <Link to={url} className={styles.cardSmall}>
      {imageSrc && (
        <figure className={styles.imageContainer}>
          <img src={imageSrc} alt={name} />
        </figure>
      )}

      <span className={styles.content}>{name}</span>
    </Link>
  );
};

export default CardSmall;