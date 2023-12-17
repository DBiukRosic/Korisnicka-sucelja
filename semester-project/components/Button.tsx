import { ReactNode, MouseEvent } from "react";
import { ChevronRightIcon } from "@heroicons/react/24/outline";
import { cn } from "@/lib/utils";

// ChatGPT
type ButtonProps = {
  children: ReactNode;
  onClick?: (event: MouseEvent<HTMLButtonElement>) => void;
  orange?: boolean;
  blue?: boolean;
  className?: string;
  iconClassName?: string;
};

const Button = ({
  children,
  className,
  iconClassName,
  onClick,
  orange,
  blue,
}: ButtonProps) => {
  const buttonClasses = cn(
    "transition duration-300 ease-in-out",
    "group flex items-center gap-2 text-lg max-w-min whitespace-nowrap",
    "px-6 py-3 rounded-sm font-urbanist font-medium",
    {
      "bg-brand-orange-75 text-brand-blue-500 hover:bg-brand-orange-400 text-brand-orange-50":
        orange,
      "text-brand-blue-400 hover:text-brand-blue-50": !orange,
      "border-2 border-brand-blue-400 hover:bg-brand-blue-400": blue,
    },
    className
  );

  return (
    <button className={buttonClasses} onClick={onClick}>
      <span>{children}</span>{" "}
      <ChevronRightIcon
        className={cn(
          "w-3 h-3 stroke-[3] transition-transform duration-300 ease-in-out transform group-hover:translate-x-1",
          iconClassName
        )}
      />
    </button>
  );
};

export default Button;