import styles from "./Tags.module.scss";

interface TagsProps {
  tags: string[];
}

const Tags = ({ tags }: TagsProps) => (
  <section className="flex flex-col gap-3">
    <h2 className={styles.title}>Tags</h2>

    <div>{tags?.join(" | ")}</div>
  </section>
);

export default Tags;