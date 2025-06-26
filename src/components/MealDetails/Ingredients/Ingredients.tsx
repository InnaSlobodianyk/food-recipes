import { FiCircle } from "react-icons/fi";

import styles from "./Ingredients.module.scss";

interface Ingredient {
  id: number;
  ingredient: string | null;
  measure: string | null;
}

interface IngredientsProps {
  ingredients: Ingredient[];
}

const Ingredients = ({ ingredients }: IngredientsProps) => (
  <section className="flex flex-col gap-3 self-stretch">
    <h2 className={styles.title}>Ingredients</h2>

    <ul className={styles.ingredientsList}>
      {ingredients.map((item: Ingredient) => (
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
  </section>
);

export default Ingredients;