class ActivityLog {
  constructor(data) {
    this.userID = data.userID;
    this.date = data.date;
    this.numSteps = data.numSteps;
    this.minutesActive = data.minutesActive;
    this.flightsOfStairs = data.flightsOfStairs;
  };
};

export default ActivityLog;
