import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { IFilter, IMeteor } from "../types";

interface IState {
  meteors: IMeteor[];
  isLoading: boolean;
  error: string;
  total: number;
  filterBy: IFilter;
}

export const meteorSlice = createSlice({
  name: "meteorReducer",
  initialState: {
    meteors: [],
    isLoading: false,
    error: "",
    total: 0,
    filterBy: { year: "", mass: "" },
  },
  reducers: {
    addMeteors: (state: IState, action: PayloadAction<IMeteor[]>) => {
      state.meteors = [...action.payload];
      state.total = action.payload.length;
    },
    setLoading: (state: IState, action: PayloadAction<boolean>) => {
      state.isLoading = action.payload;
    },
    setError: (state: IState, action: PayloadAction<string>) => {
      state.error = action.payload;
    },
    setFilter: (
      state: IState,
      action: PayloadAction<{ name: string; value: string }>
    ) => {
      const { name, value } = action.payload;
      state.filterBy = { ...state.filterBy, [name]: value };
    },
  },
});

export const { addMeteors, setLoading, setError, setFilter } =
  meteorSlice.actions;
export const meteorReducer = meteorSlice.reducer;
