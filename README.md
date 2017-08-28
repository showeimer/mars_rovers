# Mars Rover - Photo App

In this project, you will create an application using the NASA MARS ROVER API that will feature stateless and stateful components and use inline styling for your styles.

There are no starter files for this application.

## To Begin:

- Use create-react-app to begin a new project.
- Set up your project with components and styles folders inside of your src directory.
- Be sure to link all style sheets and components together before starting.
- Empty out your App.js component of everything in the return statement besides the main <div className="App"> and remove the className="App" from the <div>.
- You will need to get an API key from the NASA API website.
- You can put the reason for your request as anything you wish or leave it blank.
- NASA will populate your API KEY on the screen for you so you can copy and paste it as stated in the objectives for this project list below.
- Get Your NASA API Key HERE

## objectives

- Create 3 components in addition to your App component each in a separate file in your components folder:
1. GetImageForm should be a stateful smart class based component.
2. Create a const API_KEY = "your API key pasted here"; right after the import statements with your own API KEY Paste it over the "your API key pasted here".
3. It should house both other components (listed below) and be the only component rendered in the App render method.
4. In the render method it should return a form. The form should have two select elements and one input element. See the HINTS below to get the code.
5. Each input will need an onChange function to handle grabbing the data when the button is clicked.
6. There should be a method that is bound to this called fetchRoverImage.
7. fetchRoverImage should use a fetch call to retrieve pictures from the NASA Mars Rover API.
8. You should use a template literal to take the number (Sols) from your form, the Rover you wish to check for pictures from, and the camera on the rover you wish to access, and apply it to the API fetch call to retrieve photos from a specific rover on a specific day with a specific camera (see HINTS below).

- GetImageButton should be a functional stateless component.

  - It should return a <button> and receive props. It should fire the fetchRoverImage function when clicked and return the images if there were any from that day.

- ImageDisplay

  - this component should be a stateless functional component that receives the images, maps over them from props passed by the GetImageForm and displays them in a list fashion.
