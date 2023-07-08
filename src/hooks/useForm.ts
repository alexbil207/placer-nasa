import { useDispatch } from "react-redux";
import { setFilter } from "../store/meteorReducer";

export const useForm = () => {
  const dispatch = useDispatch();
  return {
    handleChange: (ev: React.ChangeEvent<HTMLInputElement>) => {
      dispatch(
        setFilter({ name: ev.target.name, value: ev.target.value.toString() })
      );
    },
    handleClick: (value: string) => {
      dispatch(setFilter({ name: "year", value }));
    },
  };
};
