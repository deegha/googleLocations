const apiKey = process.env.REACT_APP_PLACES_G;
const baseUrl = process.env.REACT_APP_GOOGLE_URL;

export function getLocations(locationString: string) {
  return fetch(
    `${baseUrl}query=${encodeURIComponent(locationString)}&key=${apiKey}`,
  );
}
