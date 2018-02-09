const meetUsData = {
  meetUsTitle: "Meet our team",
  members: [
    {
      id: 1,
      name: "Berrys",
      fullName: "Berry Colour",
      title: "Engineer",
      imageUnhover: "./images/team/img/speaker-1.png",
      imageHover: "./images/team/img/speaker-1-hover.png",
      liveImage: "./images/team/leader2.jpg",
      age: 20,
      workYears: 5,
      blog: "http://rogerluo410.github.io",
      github: "https://github.com/rogerluo410",
      skills: [
        {name: "HTML", value: 75, color: "cssProgress-info"},
        {name: "Ruby on rails", value: 85, color: "cssProgress-danger"},
        {name: "React Native", value: 75, color: "cssProgress-success"},
        {name: "Vue.js", value: 55, color: "cssProgress-warning"},
        {name: "Angular.js", value: 95, color: "cssProgress-success"},
      ],
      projects: [
        {
          id: 1,
          name: "Project1",
          timeframe: "Jan 2010 - Mar 2012",
          role: "Developer",
          desc: "I started my frontend carrier here, spent tow years learning and working in various frontend aspects. I worked on about 40+ projects local and online.",
        },
        {
          id: 2,
          name: "Project2",
          timeframe: "Jan 2010 - Mar 2012",
          role: "Developer",
          desc: "I started my frontend carrier here, spent tow years learning and working in various frontend aspects. I worked on about 40+ projects local and online.",
        },
      ],
    },
    {
      id: 2,
      name: "Berry",
      fullName: "Berry Tan",
      title: "Engineer",
      imageUnhover: "./images/team/img/speaker-1.png",
      imageHover: "./images/team/img/speaker-1-hover.png",
      liveImage: "./images/team/leader2.jpg",
      age: 20,
      workYears: 5,
      blog: "http://rogerluo410.github.io",
      github: "https://github.com/rogerluo410",
      skills: [
        {name: "HTML", value: 1},
        {name: "Ruby on rails", value: 5},
        {name: "React Native", value: 5},
      ],
      projects: [
        {
          id: 1,
          name: "Project3",
          timeframe: "Jan 2012 - Mar 2015",
          role: "Developer",
          desc: "I started my frontend carrier here, spent tow years learning and working in various frontend aspects. I worked on about 40+ projects local and online.",
        },
        {
          id: 2,
          name: "Project4",
          timeframe: "Jan 2015 - Mar 2017",
          role: "Developer",
          desc: "I started my frontend carrier here, spent tow years learning and working in various frontend aspects. I worked on about 40+ projects local and online.",
        },
      ],
    },
  ],
  techStackTitle: "Technology stack",
  techStackDesc: "We use technologies proven and supported by a large open-source community and adopted by leading companies like Apple, Netflix, Microsoft, and IBM.",
  techStackContentTitle: "Our technology stack",
  techStackList: [
    {
      id: 1,
      name: "Ruby on rails",
      tag: "Backend",
      tagColor: "is-success",
      imageIcon: "./images/tech/rails-icon.png",
      dependency:{
        name: "Modules",
        dependencyList: [
          "./images/tech/devise.png",
          "./images/tech/rspec.png",
        ]
      },
    },
  ],

}

export default meetUsData;
