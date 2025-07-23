import { Link } from "react-router-dom";
import { GrYoutube } from "react-icons/gr";

import Ingredients from "./Ingredients";
import Tags from "./Tags";
import Instructions from "./Instructions";
import type { IngredientMeasure } from "types/MealDetails.ts";
import { cn } from "helpers";

import styles from "./MealDetails.module.scss";

const YOUTUBE_EMBED_URL = 'https://www.youtube.com/embed/';

type MealDetailsProps = {
  meal: {
    name: string;
    imageSrc: string | null;
    instructions: string[];
    tags: string[];
    youtubeSrc: string | null;
    ingredientsAndMeasures: IngredientMeasure[];
  }
};

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

  const hasIngredients = Boolean(ingredientsAndMeasures.length);
  const hasTags = Boolean(tags.length);
  const hasInstructions = Boolean(instructions.length);

  return (
    <div className={styles.wrapper}>
      {imageSrc && (
        <figure className="flex grow w-full">
          <img src={imageSrc || ""} alt={name} className={styles.image} />
        </figure>
      )}

      {(hasIngredients || hasTags || youtubeSrc) && (
        <div className={styles.ingredientsContainer}>
          {hasIngredients && <Ingredients ingredients={ingredientsAndMeasures} /> }

          {(hasTags || youtubeSrc) && (
            <div className="flex flex-col gap-8">
              {hasTags && <Tags tags={tags} />}

              {youtubeSrc && (
                <Link to={youTubeUrl} className={cn(styles.title, styles.sourceLink)}>
                  <GrYoutube />

                  <span>See recipe in YouTube</span>
                </Link>
              )}
            </div>
          )}
        </div>
      )}

      {hasInstructions && <Instructions instructions={instructions} />}
    </div>
  );
};

export default MealDetails;