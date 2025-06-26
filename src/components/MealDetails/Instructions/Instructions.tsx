import styles from "./Instructions.module.scss";

interface InstructionsProps {
  instructions: string[];
}

const Instructions = ({ instructions }: InstructionsProps) => (
  <section className="flex flex-col gap-3">
    <h2 className={styles.title}>Instructions</h2>

    <div className="flex flex-col gap-4">
      {instructions.map((item, index) => <p key={index}>{item}</p>)}
    </div>
  </section>
);

export default Instructions;