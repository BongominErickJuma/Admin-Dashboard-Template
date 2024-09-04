const dropdown = [
  {
    label: "Overview",
    linkTo: "/",
    icon: "bi bi-house-door",
  },
  {
    label: "Twogere",
    linkTo: "#",
    icon: "bi bi-flag",
    chevron: "bi bi-chevron-down",
    children: [
      {
        label: "Organizations",
        linkTo: "/twogere-organizations",
        icon: "bi bi-file-earmark-text",
      },
      {
        label: "Individuals",
        linkTo: "/twogere-individuals",
        icon: "bi bi-person",
      },
      {
        label: "Subscriptions",
        linkTo: "/twogere-subscriptions",
        icon: "bi bi-check-circle",
      },
    ],
  },
  {
    label: "YoDegree",
    linkTo: "#",
    icon: "bi bi-journals",
    chevron: "bi bi-chevron-down",
    children: [
      {
        label: "Institutions",
        linkTo: "/yodegree-institutions",
        icon: "bi bi-book",
      },
      {
        label: "Individuals",
        linkTo: "/yodegree-individuals",
        icon: "bi bi-phone",
      },
      {
        label: "Sessions",
        linkTo: "/yodegree-sessions",
        icon: "bi bi-activity",
      },
      {
        label: "Subscriptions",
        linkTo: "/assignments",
        icon: "bi bi-check-circle",
      },
    ],
  },
  {
    label: "GoLive",
    linkTo: "#",
    icon: "bi bi-box",
    chevron: "bi bi-chevron-down",
    children: [
      {
        label: "Organizations",
        linkTo: "/golive-organizations",
        icon: "bi bi-tv",
      },
      {
        label: "Individuals",
        linkTo: "/golive-individuals",
        icon: "bi bi-phone",
      },
      {
        label: "Subscriptions",
        linkTo: "/golive-subscriptions",
        icon: "bi bi-check-circle",
      },
    ],
  },
  {
    label: "Mail",
    linkTo: "#",
    icon: "bi bi-envelope",
    chevron: "bi bi-chevron-down",
    children: [
      { label: "Accounts", linkTo: "/students", icon: "bi bi-person" },
    ],
  },
  {
    label: "Administrators",
    linkTo: "/calendar",
    icon: "bi bi-people",
  },
];
export default dropdown;
