import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { fetchLocations } from "./locationsThunks";
import { TLocation, IApidata, ILocationState } from "./d";

const initialState: ILocationState = {
  selectedLocation: {} as TLocation,
  avilableLocations: [],
  locationText: "",
  loading: false,
};

export const locationSlice = createSlice({
  name: "location",
  initialState,
  reducers: {
    setSelectedLocation: (state, action: PayloadAction<TLocation>) => {
      state.selectedLocation = action.payload;
    },
    setLocationText: (state, action: PayloadAction<{ text: string }>) => {
      state.locationText = action.payload.text;
    },
  },
  extraReducers(builder) {
    builder
      .addCase(fetchLocations.pending, (state) => {
        state.loading = true;
      })
      .addCase(
        fetchLocations.fulfilled,
        (state, action: PayloadAction<IApidata>) => {
          console.log(action);
          state.loading = false;
          state.avilableLocations = action.payload.results;
        },
      )
      .addCase(fetchLocations.rejected, (state) => {
        state.loading = false;
      });
  },
});

export const { setSelectedLocation, setLocationText } = locationSlice.actions;

export default locationSlice.reducer;
