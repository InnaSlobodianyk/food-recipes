import { Link } from "react-router-dom";

import { cn } from "helpers";

import Button from "components/Button";

export enum CardType {
  default = "default",
  thumb = "thumb",
}

const cardTypeClass = {
  default: "",
  thumb: "mt-20 h-[calc(100%-64px)]",
};

const imgContainerClassNames = {
  default: "w-full pt-[100%] rounded-t",
  thumb: "-mt-20 h-32 w-3/4 rounded",
};

type PropsType = {
  id: string;
  title: string;
  thumb: string;
  link: string;
  btnText?: string;
  type?: CardType;
  className?: string;
};

const Card = ({
  id,
  title,
  thumb,
  link,
  btnText,
  type = CardType.default,
  className,
}: PropsType) => {
  const cardClassList = cn(
    "group flex h-full flex-col items-center gap-5 rounded border border-slate-200 bg-slate-50 dark:border-slate-700 dark:bg-slate-800",
    cardTypeClass[type],
    className,
  );

  const imgContainerClassList = cn(
    "relative overflow-hidden",
    imgContainerClassNames[type],
  );

  return (
    <li key={id} className={type === CardType.default ? "h-full" : undefined}>
      <Link to={link} className={cardClassList}>
        <div className={imgContainerClassList}>
          <img
            src={thumb}
            alt={title}
            className="absolute left-1/2 top-1/2 h-full -translate-x-1/2 -translate-y-1/2 transform"
          />
        </div>

        <div className="flex w-full grow flex-col items-center gap-5 px-4 pb-4">
          <span className="text-center text-xl font-bold">{title}</span>
          <Button className="mt-auto">{btnText}</Button>
        </div>
      </Link>
    </li>
  );
};

export default Card;
