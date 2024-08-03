import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export const classnames = (...inputs: ClassValue[]): string => {
  return twMerge(clsx(inputs));
};
