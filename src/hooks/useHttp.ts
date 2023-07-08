import { useEffect } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { addMeteors, setLoading } from "../store/meteorReducer";
import { AppDispatch } from "../store/store";
import { IMeteor } from "../types";

export const useHttp = () => {
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    const getData = async () => {
      try {
        dispatch(setLoading(true));
        const res = await axios.get<IMeteor[]>(
          "https://data.nasa.gov/resource/y77d-th95.json"
        );
        dispatch(setLoading(false));
        dispatch(addMeteors(res.data));
      } catch (err: unknown) {
        dispatch(setLoading(false));
        console.error((err as Error).message);
      }
    };

    getData();
  }, [dispatch]);
};
