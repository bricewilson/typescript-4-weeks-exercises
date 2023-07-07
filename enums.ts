enum AppStatus {
  NotStarted,
  InDevelopment,
  Deployed
}

enum AppEnvironments {
  Dev = "Development",
  Test = "Test",
  Prod = "Production"
}

let currentApp = {
  Status: AppStatus.Deployed,
  Environment: AppEnvironments.Prod
};

console.log(currentApp);