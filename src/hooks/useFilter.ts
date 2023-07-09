import { useSelector } from "react-redux";
import { RootState } from "../store/store";
import { IMeteor } from "../types";
import { getYear } from "../utils";

export const useFilter = () => {
  const { meteors, filterBy } = useSelector(
    (state: RootState) => state.meteors
  );

  let isModal = false;

  let filter: IMeteor[] = meteors
    .filter((meteor: IMeteor) => {
      if (!filterBy.year) return meteor;
      return getYear(meteor.year).includes(filterBy.year as string);
    })
    .filter((meteor: IMeteor) => {
      if (!filterBy.mass) return meteor;
      return +meteor.mass > +filterBy.mass;
    });

  if (!filter.length) {
    const res: IMeteor | undefined = meteors.find(
      (meteor: IMeteor) => +meteor.mass > +filterBy.mass
    );
    if (res) {
      isModal = true;
      filter = [res];
    }
  }

  return { meteors: filter, filterBy, isModal };
};
