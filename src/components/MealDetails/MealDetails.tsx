import { FiCircle } from "react-icons/fi";
import { Link } from "react-router-dom";
import { GrYoutube } from "react-icons/gr";

import { cn } from "helpers";

import styles from "./MealDetails.module.scss";

const YOUTUBE_EMBED_URL = 'https://www.youtube.com/embed/';

export interface IngredientsAndMeasuresType {
  id: number;
  ingredient: string | null;
  measure: string | null;
}

interface MealDetailsProps {
  meal: {
    name: string;
    imageSrc: string | null;
    instructions: string[];
    tags: string[];
    youtubeSrc: string | null;
    ingredientsAndMeasures: IngredientsAndMeasuresType[];
  }
}

const MealDetails = ({ meal }: MealDetailsProps) => {
  const {
    name,
    imageSrc,
    instructions,
    tags,
    youtubeSrc,
    ingredientsAndMeasures,
  } = meal;

  const youTubeUrl = `${YOUTUBE_EMBED_URL}${youtubeSrc}`;

  return (
    <div className={styles.wrapper}>
      {imageSrc ? (
        <figure className="flex grow w-full">
          <img src={imageSrc || ""} alt={name} className={styles.image} />
        </figure>
      ) : null}

      {(ingredientsAndMeasures.length || tags || youtubeSrc) && (
        <div className={styles.ingredientsContainer}>
          {ingredientsAndMeasures.length ? (
            <div className="flex flex-col gap-3 self-stretch">
              <h2 className={styles.title}>Ingredients</h2>

              <ul className={styles.ingredientsList}>
                {ingredientsAndMeasures.map((item) => (
                  <li key={item.id} className={styles.ingredientsListItem}>
                    <FiCircle className="text-indigo-600" />

                    <p className={styles.ingredientsListItemContent}>
                        <span className="first-letter:capitalize flex-1">
                          {item.ingredient}:
                        </span>

                      <span className="flex-1">{item.measure}</span>
                    </p>
                  </li>
                ))}
              </ul>
            </div>
          ) : null}

          {(tags || youtubeSrc) && (
            <div className="flex flex-col gap-8">
              {tags ? (
                <div className="flex flex-col gap-3">
                  <h2 className={styles.title}>Tags</h2>

                  <div>{tags?.join(" | ")}</div>
                </div>
              ) : null}

              {youtubeSrc ? (
                <Link to={youTubeUrl} className={cn(styles.title, styles.sourceLink)}>
                  <GrYoutube />

                  <span>See recipe in YouTube</span>
                </Link>
              ) : null}
            </div>
          )}
        </div>
      )}

      {instructions ? (
        <div className="flex flex-col gap-3">
          <h2 className={styles.title}>Instructions</h2>

          <div className="flex flex-col gap-4">
            {instructions.map((item, index) => <p key={index}>{item}</p>)}
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default MealDetails;