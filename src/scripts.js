// This is the JavaScript entry file - your code begins here
// Do not delete or rename this file ********

console.log(userData,"<>>>>userData")
// An example of how you tell webpack to use a CSS file
import './css/styles.css';

// An example of how you tell webpack to use an image (also need to link to it in the index.html)
import './images/turing-logo.png'

console.log('This is the JavaScript entry file - your code begins here.');

// An example of how you tell webpack to use a JS file

import userData from './data/users';

import UserRepository from './classes/UserRepository';
import User from './classes/User';

// variables
const welcomeMessage = document.querySelector('.js-welcome-message');
const dashboardText = document.querySelector('.js-user-dashboard');
const userInfo = document.querySelector('.js-user-info');
const userStepGoal = document.querySelector('.js-user-step-goal');
const avgUsersStepGoal = document.querySelector('.js-avg-users-step-goal');

// event listeners
window.addEventListener('load', function() {
  const userRepository = new UserRepository(userData);
  userRepository.createAllUsers();
});

// functions
function updateDashboard() {
  // call functions that update welcomeMessage, dashboardText, userInfo, userStepGoal, and avgUsersStepGoal
};
