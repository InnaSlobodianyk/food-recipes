import { Link } from "react-router-dom";
import { GrMap } from "react-icons/gr";
import { GiHotMeal } from "react-icons/gi";

import Pill from "components/Pill";
import Spinner from "components/Spinner";

import { useGetRandomMealQuery } from "services";

import styles from "./RandomMeal.module.scss";

const RandomMeal = () => {
  const { data, isFetching } = useGetRandomMealQuery();

  if (!data) return null;

  const {
    id,
    name,
    imageSrc,
    strCategory: category,
    strArea: area,
  } = data;

  const mealUrl = (id && name) ? `/recipe/${id}-${name.toLowerCase().replace(/[&(),']/g, '').replace(/\s+/g, '-')}` : '';

  return (
    <section className={styles.wrapper}>
      <div className={styles.innerWrapper}>
        {imageSrc && (
          <figure className="flex grow w-full">
            <img
              src={imageSrc || ""} alt={name}
              className="aspect-[16/9] object-cover rounded-[16px]"
            />
          </figure>
        )}

        <div className={styles.content}>
          <p className={styles.byline}>Recipe of the Moment</p>

          {name && <h2 className={styles.title}>{name}</h2>}

          {(area || category) && (
            <div className="flex gap-6">
              {area && <Pill text={area} icon={<GrMap />} />}

              {category && (
                <Pill
                  text={category}
                  icon={<GiHotMeal />}
                  isLink
                  to={`/categories/${category.toLowerCase()}`}
                />
              )}
            </div>
          )}

          {mealUrl && <Link to={mealUrl} className={styles.link}>Recipe Details</Link>}
        </div>
      </div>

      {isFetching && <Spinner />}
    </section>
  );
};

export default RandomMeal;