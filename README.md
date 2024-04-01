## Location search app

Welcome to the Location Search App! This application allows you to input a location name and receive suggestions. Upon selecting a suggestion, it displays the location on a map. The app directly calls the Google Places API from the backend. However, in a real-world scenario, this interaction should be mediated by our own backend. For simplicity in this demo, direct API calls are made from the frontend.

### what we have used

- Create React App
- Google Places Api
- google-map-react
- Redux
- Redux Toolkit
- Redux Thunk

### Setting up

- along with this project you should get a .env file. Make sure to place it in the root of the project. (In the same level as this READme file)
- This app is calling the google places api from the client side, so you will get an error related to CORS. To stop this make sure to add CORS enabler addon for your browser
  Firefox : [Access Control Allow Origin](https://addons.mozilla.org/en-US/firefox/addon/access-control-allow-origin/)
  Chrom: [Allow CORS: Access-Control-Allow-Origin](https://chromewebstore.google.com/detail/allow-cors-access-control/lhobafahddgcelffkeicbaginigeejlf?pli=1)
- Install the dependencies
  `npm install `
- Start the app with
  `npm start `

### Folder structure

The project follows a simple yet scalable folder structure. Each component is treated as a separate entity, promoting modularity and reusability. Redux-related logic is organized within the slices folder.

Backend API calls are segregated based on domain. For instance, for Google-related functionalities, a service named googleClient is created. This ensures that all Google-related operations are encapsulated within this service. If additional domains are introduced (e.g., authentication), separate clients can be created for each.

Ideally, all service calls should pass through a common handler called handleCall. However, due to CORS limitations, a simple fetch call is used instead.

### Improvements

- Backend Integration: Either migrate the project to a Next.js environment to perform Google API calls from a server component or develop a custom backend to securely handle API calls.

- Error Handling: Implement robust error handling mechanisms, especially for scenarios like network failures or API errors.

- UI/UX Enhancements: Enhance the user interface and experience by incorporating design principles and feedback from user testing.
