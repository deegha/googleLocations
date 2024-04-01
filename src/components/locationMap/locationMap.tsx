import GoogleMapReact from "google-map-react";
import {
  Container,
  LocationPinContainer,
  LocationMarker,
  LocationText,
} from "./locatioinMapStyles";

import { useAppSelector } from "../../hooks/reduxHooks";

const apiKey = process.env.REACT_APP_PLACES_G;
const LocationPin = ({
  text,
  icon,
}: {
  icon: string;
  text: string;
  lat: number;
  lng: number;
}) => (
  <LocationPinContainer>
    <LocationMarker>
      <img src={icon} alt={text} />
    </LocationMarker>
    <LocationText>{text}</LocationText>
  </LocationPinContainer>
);

export default function LocationMap() {
  const { selectedLocation } = useAppSelector((state) => state.location);

  if (!selectedLocation || !selectedLocation.geometry) {
    return <div>No location is selected</div>;
  }

  return (
    <Container>
      <GoogleMapReact
        key={selectedLocation.place_id}
        bootstrapURLKeys={{ key: apiKey as string }}
        yesIWantToUseGoogleMapApiInternals
        defaultCenter={selectedLocation.geometry.location}
        defaultZoom={9}
      >
        <LocationPin
          lat={selectedLocation.geometry.location.lat}
          lng={selectedLocation.geometry.location.lng}
          text={selectedLocation.name}
          icon={selectedLocation.icon}
        />
      </GoogleMapReact>
    </Container>
  );
}
