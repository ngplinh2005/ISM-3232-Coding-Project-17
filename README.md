# ISM-3232-Coding-Project-17

Coding Challenge: Tour Comparison App Using React

Introduction

In this challenge, you will develop a Tour Comparison App that fetches tour data from an API and displays it in an interactive and dynamic interface. This app will allow users to view tours, remove those they are not interested in, and toggle detailed information for each tour. This project is an excellent way to showcase your skills in API interaction, state management, and React component design.

Project Requirements

1. App.jsx (Root Component)

Responsibilities:
Serves as the main container for the application.
Manages global states or context providers if needed.
If navigation is required, implement routing to support multiple pages.

Tasks:
Import and render the Gallery component.
Define and manage global application states or context providers, if necessary.

Commit:
"Setup root component with global state and routing."

2. Gallery.jsx (Tour List Component)

Responsibilities:
Fetch tour data from the API and display it dynamically.
Allow users to interact with the tour list through buttons and toggle functionality.

Tasks:
Fetch Data: Use the API endpoint https://course-api.com/react-tours-project to fetch tour data when the component mounts using useEffect.

State Management: Use useState to manage fetched tour data.

Rendering:
Use the map() function to render a list of tours.
Each tour should display its name, price, description, and image.

Interactivity:
Add a "Not Interested" button to remove a tour from the list.
Include a "Read More" / "Show Less" button to toggle visibility for the tour description.

Error and Loading States:
Display a loading message while fetching data.
Handle and display an error message if the fetch fails.

Commit:
"Implement tour fetching and rendering with state management."

3. Styling and Custom Components

Responsibilities:
Enhance the user experience through CSS styling.
Ensure the app is visually appealing and responsive.

Tasks:
Apply CSS to the toolbar and tour cards for a polished look.
Ensure the design works across various devices (mobile, tablet, desktop).

Commit:
"Style components for better user experience."

Submission Guidelines

GitHub Repository:
Create a new GitHub repository for your project.
Include all necessary files: App.js, Gallery.js, CSS files, and any other components or utilities you create.

Commits:
Each major step (e.g., setting up components, styling) should correspond to a commit, as outlined above.

Push to GitHub:
Push your completed application to your GitHub repository.
Ensure the repository is public or accessible to your instructors.

Share Repository Link:
Provide the URL to your repository for submission.

Evaluation Criteria
Functionality:
Ensure all features work as intended, including fetching tours, removing tours, and toggling details.
Code Quality:
Write clean, well-organized, and properly commented code.
Follow React best practices, such as managing state effectively and using keys for list items.
User Experience:
The app should be easy to use and visually appealing.
Design:
Creativity and responsiveness in the design will be considered.

Expected Outcomes
Understand and implement data fetching with React.
Manage state effectively with useState and useEffect.
Dynamically render and update components using React.
Apply CSS to create a responsive and visually appealing interface.
Demonstrate problem-solving skills by handling API errors and managing component lifecycle events.