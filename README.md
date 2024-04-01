## Location search app

This app will let you input a location name and will give you suggestion. Based on what you select if will show that in a map.
This app calls the google places api directly form the backend. But in a real world app this should be done by our own backend, But I decided to call the api directly since we do not have a backend for this app. I didnt use any 3rd party package either as this way enables me use redux.

Read the improvement section for more info about this.

### what we have used

- Create react app
- Google places api
- google-map-react
- Redux
- Redux tool kit
- Redux Thunk

### Setting up

- along with this project you should get a .env file. Make sure to place it in the root of the project. (In the same level as this REASme file)
- This app is calling the google places api from the client side, so you will get an error related to CORS. To stop this make sure to add CORS enabler addon for your browser
  Firefox : https://addons.mozilla.org/en-US/firefox/addon/access-control-allow-origin/
  Chrom: https://chromewebstore.google.com/detail/allow-cors-access-control/lhobafahddgcelffkeicbaginigeejlf?pli=1
- Install the dependencies
  `npm install `
- Start the app with
  `npm start `

### Folder structure

I followed a simple yet scallable folder structure. I treat everything as a component. That was this app is modularized and most of the component become reusable.

I moved the redux bit into a seperate space so that we know the logic lives in the slices folder.

I have defined backend api call based on the domain. For our single use case I created a service called googleClient. So that everyting realted to google will live inside that. and If you introduce a new domain area, lets say authentication. Then we can create a seperate client for all the authenticaton related things.

Based on the initial plan all the service calls should go through a common handler called handleCall. This will reduce the repetitive things like method, option and body. But unfortunatly with the CORS issue we cannot use that. So I ended up using a simple fetch call.

### Improvements

If I have to improve this code the first this I would do either move this to a next js project so that I could do the google api call in a server component. or I would create my own backend to securly call the google endpoint.
