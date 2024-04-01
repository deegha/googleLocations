const apiKey = process.env.REACT_APP_PLACES_G;
const baseUrl = process.env.REACT_APP_GOOGLE_URL;

//**
// I supose to use the handleCall function with the end point from this function. But since I'm facing CORS issues I decided to use just a simple fetch request. This call never supose to be called from the frontend thats why I get the corse issue. I decided to call this from the front end just for the sake of this test project. So I could showcase my redux knowladge
//*/
export function getLocations(locationString: string) {
  return fetch(
    `${baseUrl}query=${encodeURIComponent(locationString)}&key=${apiKey}`,
  );
}
