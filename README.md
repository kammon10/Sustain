# Sustain Wellness App

**A front-end application built by:**

- [Kim Ward](https://github.com/kmewrd)
- [Casey Halstead](https://github.com/chalstead16)
- [Katie Ammon](https://github.com/kammon10)
- [Kevin King](https://github.com/King13k)

Sustain is a front-end project from the Mod 2 curriculum at Turing School of Software & Design. Given data from an activity tracker containing hydration, sleep, and activity logs for many users over many days, we used the Fetch API to retrieve data and update the DOM with a specific user’s information. Concepts introduced during the course of this project included webpack, network requests and responses, and Test Driven Development.

The Sustain wellness app is a useful dashboard for users to view their latest activity, sleep, and hydration data, track their fitness goals, and celebrate milestones.

<img width="1440" alt="Sustain Wellness App, dashboard view with daily stats" src="https://user-images.githubusercontent.com/79027364/156067351-fd1b37e9-1f38-4e9d-81a4-2ccb686899d9.png">

<img width="1440" alt="Sustain Wellness App, dashboard view with weekly stats" src="https://user-images.githubusercontent.com/79027364/156067360-f973d8cc-3546-4a72-ab66-2babfe2f220a.png">

## How to Run

1. Clone the repo down to your machine
2. Clone the server repo [here](https://github.com/kammon10/sustain-api)
3. Open the root directory for each repo and run `npm install` to install dependencies
4. Run `npm start` in each repo to initialize the webpage and web server
5. Open the site by copying and pasting the server location in your URL bar
    -   The server location should be http://localhost:8080/

### Technologies Used
- JavaScript
- CSS
- HTML
- Webpack
- Mocha & Chai
- VS Code & Atom

### Future Goals
- Allow users to select a specific user to view through a dropdown menu
- Allow users to interact with the dashboard to view data for a specific day or period of time
- Make layout responsive to different screen sizes
- Add helper functions to `utilities`, including an averaging function
- Make sad path testing more robust
- Add error handling that displays helpful messages for the user if form fields are entered incorrectly

### Design Inspiration
For this project we sourced design inspiration from Dribble creators:

- [Elegant Themes](https://dribbble.com/shots/14045055-Fitness-Coach-Landing-Page-Design-for-Divi): Bright, complementary colors on a neutral/white background
- [Halo Lab](https://dribbble.com/shots/17257234-Gig-Share-Dashboard): Cards for different sections that have rounded corners; each data set (activity, sleep, hydration) has its own corresponding color
- [Hasnur Alam Ujjol](https://dribbble.com/shots/16491774-Fitness-Workout-App-UI-Design): Light and dark theme; everything is modular and self-contained; not too much white space and not too much extraneous info on the page
