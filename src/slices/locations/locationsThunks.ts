import { createAsyncThunk } from "@reduxjs/toolkit";
import { getLocations } from "../../services/googleClient";

export const fetchLocations = createAsyncThunk(
  "location/fetchLocations",
  async (params: { locationString: string }, { rejectWithValue }) => {
    try {
      const response = await getLocations(params.locationString);

      return await response.json();
    } catch (err: any) {
      return rejectWithValue(err?.message);
    }
  },
);
