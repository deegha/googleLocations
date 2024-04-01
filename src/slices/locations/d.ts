export type TLocation = {
  icon: string;
  label: string;
  formatted_address: string;
  geometry: {
    location: {
      lng: number;
      lat: number;
    };
  };
};

export interface IApidata {
  results: TLocation[];
  totalCount: number;
  totalPages: number;
  pageSize: number;
}

export interface ILocationState {
  locationText: string;
  avilableLocations: Array<TLocation>;
  loading: boolean;
  selectedLocation: TLocation;
}
