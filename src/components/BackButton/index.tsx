import { IoArrowBack } from "react-icons/io5";

import { useMoveBack } from "hooks/useMoveBack.ts";
import Button from "components/Button";

const BackButton = () => {
  const moveBack = useMoveBack();

  return (
    <Button className="flex items-center gap-2" onClick={moveBack}>
      <IoArrowBack className="text-xl" />
      <span>Back</span>
    </Button>
  );
};

export default BackButton;
