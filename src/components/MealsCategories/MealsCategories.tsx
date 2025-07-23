import CardSmall from "components/CardSmall";

import { Category } from "types/Category.ts";

import styles from "./MealsCategories.module.scss";

type MealsCategoriesProps = {
  meals: Category[];
};

const MealsCategories = ({ meals = [] }: MealsCategoriesProps) => {
  const hasMeals = Boolean(meals.length);

  return (
    <section className={styles.wrapper}>
      <h2 className={styles.mealsTitle}>Meals Categories</h2>
      <p>Explore various categories of meals to find your favorite dishes!</p>

      {hasMeals && (
        <ul className={styles.mealsCategories}>
          {meals.map((meal: Category) => (
            <CardSmall
              key={meal.id}
              name={meal.name}
              imageSrc={meal.imageSrc}
              url={`/categories/${meal.url}`}
            />
          ))}
        </ul>
      )}
    </section>
  );
};

export default MealsCategories;