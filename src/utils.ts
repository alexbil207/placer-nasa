import { IMeteor } from "./types";

export const toLocalString = (date: string) => {
  const fullDate = new Date(date);
  return fullDate.toLocaleString("en-US", {
    dateStyle: "short",
    timeStyle: "medium",
  });
};

export const getYear = (date: string) => {
  const fullDate = new Date(date);
  return fullDate.getFullYear().toString();
};

export const getOptions = (meteors: IMeteor[] | null) => {
  if (!meteors) return null;

  const years = meteors.map((meteor) => getYear(meteor.year));
  const unic = new Set(years);
  return Array.from(unic).slice(0, 10);
};
