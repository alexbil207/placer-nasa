import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { IFilter, IMeteor } from "../types";

interface IState {
  meteors: IMeteor[];
  isLoading: boolean;
  filterBy: IFilter;
}

export const meteorSlice = createSlice({
  name: "meteorReducer",
  initialState: {
    meteors: [],
    isLoading: false,
    filterBy: { year: "", mass: "" },
  },
  reducers: {
    addMeteors: (state: IState, action: PayloadAction<IMeteor[]>) => {
      state.meteors = [...action.payload];
    },
    setLoading: (state: IState, action: PayloadAction<boolean>) => {
      state.isLoading = action.payload;
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

export const { addMeteors, setLoading, setFilter } = meteorSlice.actions;
export const meteorReducer = meteorSlice.reducer;
