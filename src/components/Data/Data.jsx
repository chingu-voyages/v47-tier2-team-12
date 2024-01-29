const todo_global_data = [
  {
    categoryName: "ROUTINE ACTIVITIES",
    activityTypes: [
      {
        activityName: "Projects",
        Tasks: [
          {
            taskName: "Update Recipes Project Backlog",
            taskDescription: "",
            days: ["monday"],
            id: Math.random(),
          },
          {
            taskName: "Update The dailyTasks sheet with the backlog tasks",
            taskDescription: "add the filtering feature to Done",
            days: ["monday"],
            id: Math.random(),

          },
        ],
      },
      {
        activityName: "Blog Posts",
        Tasks: [
          {
            taskName: "Publish The recent Blog Post Draft to hashnode",
            taskDescription: "",
            days: ["friday"],
            id: Math.random(),

          },
          {
            taskName: "Write a New headline in a Blog Post Draft",
            taskDescription: "",
            days: [
              "saturday",
              "sunday",
              "monday",
              "tuesday",
              "wednesday",
              "thursday",
              "friday",
            ],
            id: Math.random(),

          },
        ],
      },
    ],
  },
  {
    categoryName: "STUDYING",
    activityTypes: [
      {
        activityName: "Node Js Course",
        Tasks: [
          {
            taskName: "Plan The Node Js Course Progress By Month",
            taskDescription:
              "Set Up A Plan For The Next Month Of Node Js Learning",
            days: ["1"],
            id: Math.random(),

          },
          {
            taskName: "Study The First Node Js Lecture",
            taskDescription: "",
            days: ["2"],
            id: Math.random(),

          },
        ],
      },
      {
        activityName: "MongoDB",
        Tasks: [
          {
            taskName: "Plan The MongoDB Course Progress By Month",
            taskDescription:
              "Set Up A Plan For The Next Month Of Node Js Learning",
            days: ["30"],
            id: Math.random(),

          },
          {
            taskName: "Study The First MongoDB Lecture",
            taskDescription: "",
            days: ["15"],
            id: Math.random(),

          },
        ],
      },
    ],
  },
  {
    categoryName: "DAILY TASKS PROJECT",
    activityTypes: [
      {
        activityName: "Backlog",
        Tasks: [
          {
            taskName: "Add The New Features list",
            taskDescription: "",
            days: ["monday"],
            id: Math.random(),

          },
          {
            taskName: "Add The New PRs To InReview",
            taskDescription: "",
            days: ["7"],
            id: Math.random(),

          },
        ],
      },
      {
        activityName: "Coding",
        Tasks: [
          {
            taskName: "Work On The Sidebar",
            taskDescription: "Add The Sections Links",
            days: ["thursday"],
            id: Math.random(),

          },
          {
            taskName: "Refactor The Filtering Feature Code",
            taskDescription: "",
            days: ["friday"],
            id: Math.random(),

          },
        ],
      },
    ],
  },
  {
    categoryName: "CHINGU",
    activityTypes: [
      {
        activityName: "Voyage",
        Tasks: [
          {
            taskName: "Conduct The Project Planning Meeting",
            taskDescription:
              "Conduct The Project Planning Meeting To Discuss Our Ideas",
            days: ["monday"],
            id: Math.random(),

          },
          {
            taskName: "Create The UI/UX Design For The DailyTasks Project",
            taskDescription:
              "Create The UI/UX Design For The DailyTasks Project Based On The Team Discussion",
            days: ["monday", "tuesday", "wednesday"],
            id: Math.random(),

          },
        ],
      },
      {
        activityName: "Pair Programming",
        Tasks: [
          {
            taskName: "Create When2Meet Link",
            taskDescription: "Create When2Meet Link To Introduce Yourselves",
            days: ["thursday"],
            id: Math.random(),

          },
          {
            taskName: "Attend The Introduction Meeting With Someone",
            taskDescription: "",
            days: ["thursday"],
            id: Math.random(),

          },
        ],
      },
    ],
  },
];
export default todo_global_data;