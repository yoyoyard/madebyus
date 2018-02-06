const meetUsData = {
  meetUsTitle: "Meet our team",
  members: [
    {
      id: 1,
      name: "Berry Colour",
      title: "Engineer",
      imageUnhover: "./images/team/img/speaker-1.png",
      imageHover: "./images/team/img/speaker-1-hover.png",
    },
    {
      id: 2,
      name: "Berry Colour",
      title: "Engineer",
      imageUnhover: "./images/team/img/speaker-1.png",
      imageHover: "./images/team/img/speaker-1-hover.png",
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
