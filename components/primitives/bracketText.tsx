import { HiOutlineChevronLeft, HiOutlineChevronRight } from "react-icons/hi2";
import { RxSlash } from "react-icons/rx";
import { BruteForceTypewriter } from "../animations";

const BracketText = ({
  text,
  type = "default",
  className = "",
  animated = false,
  clickable = false,
  delay = 0,
}: {
  text: string;
  type?: "closed" | "open" | "default";
  className?: string;
  animated?: boolean;
  clickable?: boolean;
  delay?: number;
}) => {
  return (
    <span className={`flex flex-row justify-center items-center ${className}`}>
      <>
        <HiOutlineChevronLeft className={clickable ? "cursor-pointer" : ""} />
        {type == "closed" && (
          <RxSlash className={`-ml-1 ${clickable && "cursor-pointer"}`} />
        )}
        {animated ? (
          <BruteForceTypewriter
            text={text}
            typingSpeed={50}
            pauseDuration={20}
            delay={delay}
            clickable={clickable}
          />
        ) : (
          text
        )}
        {type == "default" && (
          <RxSlash className={`ml-2  ${clickable && "cursor-pointer"}`} />
        )}
        <HiOutlineChevronRight className={clickable ? "cursor-pointer" : ""} />
      </>
    </span>
  );
};

export default BracketText;
