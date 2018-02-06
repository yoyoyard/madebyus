//meet us
Vue.component('company-value', {
  template:
  `
  <div class="swiper-container">
    <div class="swiper-wrapper">
      <div class="swiper-slide">
        <div class="one">
          <blockquote>
            <span class="leftq quotes">&ldquo;</span> He promptly completed the task at hand and communicates really well till the project reaches the finishing line. I was pleased with his creative design and will definitely be hiring him again. <span class="rightq quotes">&bdquo; </span>
          </blockquote>
          <img src="./images/team/leader1.jpg" width="170" height="130" class='say_img' />
          <h2>Steve Kruger</h2>
          <h6>UI/UX Designer at MadeByUs</h6>
        </div>
      </div>

      <div class="swiper-slide">
       <div class="two">
        <blockquote>
          <span class="leftq quotes">&ldquo;</span> He promptly completed the task at hand and communicates really well till the project reaches the finishing line. I recommend him to anyone who wants their work done professionally. The project ... <span class="rightq quotes">&bdquo; </span>
        </blockquote>
        <img src="./images/team/leader2.jpg" width="170" height="130" class='say_img'/>
        <h2>John Doe</h2>
        <h6>Developer Relations at MadeByUs</h6>
       </div>
      </div>

      <div class="swiper-slide">
       <div class="three">
        <blockquote>
          <span class="quotes leftq"> &ldquo;</span> He promptly completed the task at hand and communicates really well till the project reaches the finishing line. I was pleased with his creative design and will definitely be hiring him again. <span class="rightq quotes">&bdquo; </span>
        </blockquote>
        <img src="./images/team/leader3.jpeg" width="170" height="130" class='say_img' />
        <h2>Steve Stevenson</h2>
        <h6>CEO of MadeByUs</h6>
       </div>
      </div>
    </div>
   </div>
  `
})


Vue.component('office-images', {
  template:
  `
  <div class="swiper-container" style="padding-top: 18px;">
   <div class="swiper-wrapper">
     <div class="swiper-slide"><img src="./images/services/s1.jpg"></div>
     <div class="swiper-slide"><img src="./images/services/s2.jpg"></div>
     <div class="swiper-slide"><img src="./images/services/s3.jpg"></div>
   </div>
  </div>
  `
})

Vue.component('team-slides', {
  template:
  `
  <div style="padding-top: 30px;">
   <div class="columns">
    <div class="column is-half" style="padding-bottom: 50px; padding-left: 40px;">
      <div class="columns is-mobile" style="padding-top: 30px;">
      <h1>Recent Projects</h1>
      <a href='/#/projects' style="margin-left: 3px;" class="button is-dark is-outlined">Click for more projects</a>
      </div>
      <div class="columns">
      <office-images />
      </div>
    </div>
    <div class="column is-half">
      <div class="columns is-mobile" style="padding-top: 30px; padding-left: 30px;">
      <h1>Our Team</h1>
      <a href='/#/meetus' style="margin-left: 3px;" class="button is-dark is-outlined">Click for more team-members</a>
      </div>
      <div class="columns" style="padding-top: 18px;">
      <company-value />
      </div>
    </div>
   </div>
 </div>
  `
})


//js:
var swiper = new Swiper('.swiper-container', {
  spaceBetween: 30,
  centeredSlides: true,
  autoplay: {
    delay: 5000,
    disableOnInteraction: false,
  },
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});

//home
Vue.component('about-us', {
  template:
  `
  <div class="white-bg">
    <panel-title name="About us" />
    <div class="container">
      <div class="columns">
       <div class="column">
         <strong>MadeByUs</strong> helps companies design, engineer, and iterate on their most important digital products. Our team is smart, relatable, and deeply knowledgeable about modern application architecture and UX. We work alongside teams building beautiful, functional web applications with an eye toward the future.
       </div>
       <div class="column">
        <img src="./images/home/teamwork.jpg" class="shadow"/>
       </div>
      </div>
    </div>
  </div>
  `
})

Vue.component('our-ability', {
  template:
  `
  <div class="white-bg" style="padding-bottom: 20px;">
    <panel-title name="All we could" />
    <service-item
     name="Website development"
     desc="Reducing costs. Expediting development. We empower companies with website solutions."
     image_addr="./images/home/website-dev.png" />
    <service-item
      name="Website maintanance"
      desc="Optimize performance, fix security problems."
      image_addr="./images/home/web-maintenance.png" />
    <service-item
      name="Mobile development"
      desc="Both Android and iOS platform."
      image_addr="./images/home/mobile-dev.png" />
    <service-item
      name="Report analysis"
      desc="Generate and export schematize report."
      image_addr="./images/home/report-analysis.png" />
   </div>
 `
})

Vue.component('service-item1', {
  props: ['name', 'desc', 'image_addr'],
  template:
  `
  <div class="tile is-ancestor">
    <div class="tile is-parent">
      <div class="tile">
        <div class="tile is-parent is-vertical">
          <article class="tile is-child notification ">
            <p class="title">{{name}}</p>
            <p class="subtitle">{{desc}}</p>
            <a href='#'><p>Read More</p></a>
          </article>
        </div>
      </div>
    </div>
    <div class="tile is-vertical is-5" style="padding-right: 30px;">
      <img :src=image_addr />
    </div>
  </div>
  `
})
