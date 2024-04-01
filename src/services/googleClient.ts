const apiKey = "AIzaSyCuLkwbbatjnimjiMQh5puLNv610srYaf0";

export function getLocations(locationString: string) {
  return fetch(
    `https://maps.googleapis.com/maps/api/place/textsearch/json?query=${encodeURIComponent(locationString)}&key=${apiKey}`,
  );
}
