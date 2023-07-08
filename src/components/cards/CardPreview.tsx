import { IMeteor } from "../../types";
import { getYear } from "../../utils";

interface ICardPreview {
  meteor: IMeteor;
}

export const CardPreview = ({ meteor }: ICardPreview) => {
  return (
    <article className="card-container">
      <p>{meteor.name}</p>
      <label>year:</label>
      <p> {getYear(meteor.year)}</p>
      <label>mass:</label>
      <p>{meteor.mass}</p>
    </article>
  );
};
