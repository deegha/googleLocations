import React, { useMemo, useEffect } from "react";
import debounce from "lodash.debounce";
import { useAppDispatch, useAppSelector } from "../../hooks/reduxHooks";
import {
  setLocationText,
  setSelectedLocation,
} from "../../slices/locations/locationSlice";
import { fetchLocations } from "../../slices/locations/locationsThunks";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import { TLocation } from "../../slices/locations/d";

export default function Search() {
  const dispatch = useAppDispatch();
  const { locationText, selectedLocation, avilableLocations } = useAppSelector(
    (state) => state.location,
  );

  useEffect(() => {
    dispatch(fetchLocations({ locationString: locationText }));
  }, [locationText, dispatch]);

  //debouncing search result so that we do not add stress to the server and we do not re render on each key strok
  const debouncedResults = useMemo(() => {
    const handleTextChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      dispatch(
        setLocationText({
          text: e.target.value,
        }),
      );
    };
    return debounce(handleTextChange, 300);
  }, [dispatch]);

  //Making sure we remove debounce event listner when we unmount
  useEffect(() => {
    return () => {
      debouncedResults.cancel();
    };
  }, [debouncedResults]);

  return (
    <div>
      <Autocomplete
        getOptionLabel={(option) => {
          return Object.keys(option).length === 0 ? "" : option.label;
        }}
        value={selectedLocation}
        onChange={(e, newValue) => {
          console.log(e);
          dispatch(setSelectedLocation(newValue as TLocation));
        }}
        disablePortal
        id="combo-box-demo"
        options={avilableLocations}
        sx={{ width: 300 }}
        renderInput={(params) => (
          <TextField
            onChange={debouncedResults}
            {...params}
            label="Locations"
          />
        )}
      />
    </div>
  );
}
