import CardSmall from "components/CardSmall";
import { Area } from "types/Country.ts";

import styles from "./MealsByCountryList.module.scss";

type MealsByCountryListProps = {
  areas: Area[];
};

const MealsByCountryList = ({ areas }: MealsByCountryListProps) => (
  <ul className={styles.list}>
    {areas.map(({ name, url }: Area, index: number) => (
      <li key={index}>
        <CardSmall name={name} url={url} />
      </li>
    ))}
  </ul>
);

export default MealsByCountryList;