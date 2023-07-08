import { Loader } from "../loader/Loader";
import { IMeteor } from "../../types";
import { CardPreview } from "./CardPreview";
import { useFilter } from "../../hooks/useFilter";
import "./style.css";
import { useSelector } from "react-redux";
import { RootState } from "../../store/store";
import { Toast } from "../Toast/Toast";

export const Cards = () => {
  const { isLoading } = useSelector((state: RootState) => state.meteors);
  const { meteors } = useFilter();

  if (isLoading) return <Loader />;
  if (meteors.length === 0) {
    return (
      <Toast
        color="red"
        msg="the mass was not found, jumping to first-year where there is a mass that fits the criteria"
      />
    );
  }
  return (
    <section>
      <h3>{`Total count ${meteors.length}`}</h3>
      <main className="cards-wrapper">
        {meteors?.map((meteor: IMeteor) => (
          <CardPreview key={meteor.id} meteor={meteor} />
        ))}
      </main>
    </section>
  );
};
