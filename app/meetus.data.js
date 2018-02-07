const meetUsData = {
  meetUsTitle: "Meet our team",
  members: [
    {
      id: 1,
      name: "Berry Colour",
      aliaz: "berryc",
      title: "Engineer",
      imageUnhover: "./images/team/img/speaker-1.png",
      imageHover: "./images/team/img/speaker-1-hover.png",
      age: 20,
      workAge: 5,
      blog: "rogerluo410.github.io",
      skills: [
        {name: "HTML", value: 1},
        {name: "Ruby on rails", value: 5},
        {name: "React Native", value: 5},
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
      name: "Berry Tan",
      aliaz: "berrytan",
      title: "Engineer",
      imageUnhover: "./images/team/img/speaker-1.png",
      imageHover: "./images/team/img/speaker-1-hover.png",
      age: 20,
      workAge: 5,
      blog: "rogerluo410.github.io",
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
