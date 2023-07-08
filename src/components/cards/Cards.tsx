import { Loader } from "../loader/Loader";
import { IMeteor } from "../../types";
import { CardPreview } from "./CardPreview";
import { useFilter } from "../../hooks/useFilter";
import "./style.css";

export const Cards = () => {
  const { meteors } = useFilter();

  if (!meteors) return <Loader />;
  return (
    <section>
      <h3>{`Total count ${meteors.length}`}</h3>
      <main className="cards-wrapper">
        {meteors.map((meteor: IMeteor) => (
          <CardPreview key={meteor.id} meteor={meteor} />
        ))}
      </main>
    </section>
  );
};
