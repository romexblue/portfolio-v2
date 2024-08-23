import { twMerge } from "tailwind-merge";
import { ClassValue, clsx } from "clsx";

const classnameJoiner = (...className: ClassValue[]) =>
  twMerge(clsx(className));
export default classnameJoiner;
