const projectsData = {
  projectsTitle: "Our cases",
  navBarName: "Projects navigation",
  caseList: [
    {
      id: "scrollNav-1",
      hrefLink: "#scrollNav-1",
      name: "Flywheel",
      navTag: {
        tagName: "Mobile",
        tagColor: "is-success",
      },
      projectTags: [
        {
          name: "Angular.js",
          color: "is-danger",
        },
        {
          name: "Python",
          color: "is-success",
        },
      ],
      projectDesc: "Helping instructors inspire riders through experience and service design.",
      caseImage: "./images/projects/p1.jpg",
    },
    {
      id: "scrollNav-2",
      hrefLink: "#scrollNav-2",
      name: "McGraw",
      navTag: {
        tagName: "Desktop",
        tagColor: "is-danger",
      },
      projectTags: [
        {
          name: "Rails",
          color: "is-danger",
        },
        {
          name: "Vue.js",
          color: "is-success",
        },
      ],
      projectDesc: "The best educational experiences are adaptive.",
      caseImage: "./images/projects/p2.jpg",
    },
    {
      id: "scrollNav-3",
      hrefLink: "#scrollNav-3",
      name: "Learnivore",
      navTag: {
        tagName: "WebApp",
        tagColor: "is-info",
      },
      projectTags: [
        {
          name: "React Native",
          color: "is-info",
        },
        {
          name: "Vue.js",
          color: "is-success",
        },
      ],
      projectDesc: "A social platform supporting collaborative learning by connecting instructors and students.",
      caseImage: "./images/projects/p3.jpg",
    },
  ],
}

export default projectsData;
