import './css/styles.css';
import './images/activity-icon.png';
import './images/hydration-icon.png';
import './images/sleep-icon.png';
import {fetchData} from './apiCalls';
import UserRepository from './classes/UserRepository';
import User from './classes/User';
import HydrationLog from './classes/HydrationLog';
import SleepLog from './classes/SleepLog';
import ActivityLog from './classes/ActivityLog';
import domUpdates from './domUpdates.js';

// global variables
let userRepository;
let users;
let hydrationLogs;
let sleepLogs;
let activityLogs;
let currentUser;

// functions
function fetchAllData() {
  Promise.all([fetchData('users'), fetchData('hydration'), fetchData('sleep'), fetchData('activity')])
    .then(data => {
      initializeUserData(data[0].userData, data[1].hydrationData, data[2].sleepData, data[3].activityData);
      let randomUser = getRandomID(userRepository.users);
      getCurrentUser(randomUser);
      updateDashboard();
  });
};

function getRandomID(array) {
  let randomUserID = Math.floor(Math.random() * array.length);
  if (randomUserID) {
    return randomUserID;
  } else {
    randomUserID ++;
    return randomUserID;
  };
};

function updateDashboard() {
  welcomeUser(currentUser);
  updateUserInfo(currentUser);
  domUpdates.displayUserStepGoal(currentUser);
  domUpdates.displayAvgUsersStepGoal();
  updateDailyStats();
  updateWeeklyStats();
};

function updateDailyStats() {
  updateCurrentWaterIntake(currentUser);
  updateAvgSleepQualityPerDay();
  updateAvgHoursSleepPerDay();
  updateRecentSleepQuality();
  updateRecentHoursSlept();
};

function updateWeeklyStats() {
  updateWeeklyWaterIntake();
  updateWeeklySleepData();
};

function initializeUserData(userData, hydrationData, sleepData, activityData) {
  users = userData.map(user => new User(user));
  hydrationLogs = hydrationData.map(log => new HydrationLog(log));
  sleepLogs = sleepData.map(log => new SleepLog(log));
  activityLogs = activityData.map(log => new ActivityLog(log));
  userRepository = new UserRepository(users, hydrationLogs, sleepLogs, activityLogs);
};

function getCurrentUser(id) {
  currentUser = userRepository.getUserById(id);
};

function welcomeUser() {
  let userName = currentUser.returnFirstName();
  domUpdates.displayWelcomeMessage(userName, currentUser);
};

function updateUserInfo(currentUser) {
  currentUser.splitAddress();
  domUpdates.displayUserInfo(currentUser);
};

function updateAvgUsersStepGoal() {
  const avg = userRepository.getAvgUserStepGoal();
  displayAvgUsersStepGoal(avg);

};

function updateCurrentWaterIntake(currentUser) {
  const currentDate = currentUser.hydrationLogs[(currentUser.hydrationLogs.length -1)].date;
  const currentWaterIntake = currentUser.getOuncesByDay(currentDate);
  domUpdates.displayCurrentWaterIntake(currentUser, currentWaterIntake);
};

function updateWeeklyWaterIntake() {
  const currentDate = currentUser.hydrationLogs[(currentUser.hydrationLogs.length -1)].date;
  const weeklyWater = currentUser.getOuncesByWeek(currentDate);
  domUpdates.displayWeeklyWaterIntake(weeklyWater);
};

function updateRecentHoursSlept() {
  const currentDate = currentUser.sleepLogs[(currentUser.sleepLogs.length -1)].date;
  const lastNightHoursSlept = currentUser.getSleepHoursByDay(currentDate);
  domUpdates.displayRecentHoursSlept(lastNightHoursSlept);
};

function updateRecentSleepQuality() {
  const currentDate = currentUser.sleepLogs[(currentUser.sleepLogs.length -1)].date;
  const lastNightSleepQuality = currentUser.getSleepQualityByDay(currentDate);
 domUpdates.displayRecentSleepQuality(lastNightSleepQuality);
};

function updateAvgHoursSleepPerDay() {
  const avgSleepHours = currentUser.getAvgHoursSleepPerDay();
  domUpdates.displayAvgHoursSleepPerDay(avgSleepHours);
};

function updateAvgSleepQualityPerDay() {
  const avgQuality = currentUser.getAvgSleepQualityPerDay();
  domUpdates.displayAvgSleepQualityPerDay(avgQuality)
};

function updateWeeklySleepData() {
  const currentDate = currentUser.sleepLogs[(currentUser.sleepLogs.length -1)].date;
  const weeklyHours = currentUser.getHoursSleptByWeek(currentDate);
  const weeklyQuality = currentUser.getSleepQualityByWeek(currentDate);
  domUpdates.displayWeeklySleepData(weeklyHours, weeklyQuality);
};

function updateTodaySteps() {
  const sortByDate = currentUser.activityLogs.sort((a, b) => {
    let aa = a.date.split('/').reverse().join();
    let bb = b.date.split('/').reverse().join();

    if (bb < aa) {
      return -1
    } else if (aa > bb) {
      return 1;
    } else {
      return 0;
    }
  });
  const sortByYear = sortByDate.sort((a, b) => {
    let aa = a.date;
    let bb = b.date;

    if (bb < aa) {
      return -1
    } else if (aa > bb) {
      return 1;
    } else {
      return 0;
    }
  });

  return sortByDate[0].numSteps;
};

function updateTodayMinutesActive() {
  const sortByDate = currentUser.activityLogs.sort((a, b) => {
    let aa = a.date.split('/').reverse().join();
    let bb = b.date.split('/').reverse().join();

    if (bb < aa) {
      return -1
    } else if (aa > bb) {
      return 1;
    } else {
      return 0;
    }
  });
  const sortByYear = sortByDate.sort((a, b) => {
    let aa = a.date;
    let bb = b.date;

    if (bb < aa) {
      return -1
    } else if (aa > bb) {
      return 1;
    } else {
      return 0;
    }
  });

  return sortByDate[0].minutesActive;
};

function updateTodayMilesWalked() {
  const sortByDate = currentUser.activityLogs.sort((a, b) => {
    let aa = a.date.split('/').reverse().join();
    let bb = b.date.split('/').reverse().join();

    if (bb < aa) {
      return -1
    } else if (aa > bb) {
      return 1;
    } else {
      return 0;
    }
  });
  const sortByYear = sortByDate.sort((a, b) => {
    let aa = a.date;
    let bb = b.date;

    if (bb < aa) {
      return -1
    } else if (aa > bb) {
      return 1;
    } else {
      return 0;
    }
  });

  const todayLog = sortByDate[0];
  const miles = ((currentUser.strideLength * todayLog.numSteps) / 5280).toFixed(1);

  return miles;
};

function updateAllUsersTodaySteps(date) {
  const allUserLogsToday = userRepository.activityLogs.filter(log => {
    return log.date === date;
  });

  const totalSteps = allUserLogsToday.reduce((acc, log) => {
    return acc += log.numSteps;
  }, 0);

  const avg = totalSteps / allUserLogsToday.length;

  return avg;
};

function updateAllUsersMinutesActive(date) {
  const allUserLogsToday = userRepository.activityLogs.filter(log => {
    return log.date === date;
  });

  const totalMinutes = allUserLogsToday.reduce((acc, log) => {
    return acc += log.minutesActive;
  }, 0);

  const avg = totalMinutes / allUserLogsToday.length;

  return avg;
};

function updateAllUsersFlightsClimbed(date) {
  const avgFlightsClimbed = userRepository.getAvgUserFlightsClimbed(date);
};

// event listeners
window.addEventListener('load', function() {
  fetchAllData();
});
