import { Loader } from "../loader/Loader";
import { IMeteor } from "../../types";
import { CardPreview } from "./CardPreview";
import { useFilter } from "../../hooks/useFilter";
import { useSelector } from "react-redux";
import { RootState } from "../../store/store";
import "./style.css";
import { Toast } from "../Toast/Toast";

export const Cards = () => {
  const { isLoading } = useSelector((state: RootState) => state.meteors);
  const { meteors, isModal } = useFilter();

  if (isLoading) return <Loader />;

  return (
    <>
      {isModal ? (
        <Toast
          color="red"
          msg="the mass was not found, jumping to first-year where there is a mass that fits the criteria"
        />
      ) : null}
      <section>
        <h3>{`Total count ${meteors.length}`}</h3>
        <main className="cards-wrapper">
          {meteors?.map((meteor: IMeteor) => (
            <CardPreview key={meteor.id} meteor={meteor} />
          ))}
        </main>
      </section>
    </>
  );
};
