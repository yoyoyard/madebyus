Vue.component('company-title', {
  template:
  `
  <div class="columns">
    <div class="column is-two-fifths">
        <p class="title">MadeByUs Believes</p>
        <p class="subtitle" style="margin-top: 5px;">We understand the challenges faced when embracing new technology and tools. With this in mind, our expert team takes pride in ensuring you’re set up for success.</p>
        <div class="columns">
         <div class="column">
           <a href='/#/contactus' style="margin-left: 30px;" class="button is-dark is-outlined">Let's build together</a>
         </div>
        </div>
    </div>
    <div class="column">
      <img src='./images/home/home-image.png'>
    </div>
  </div>
  `
})

Vue.component('service-item', {
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

const home = {
  template:
  `
    <div class="container is-fullhd">
      <div class="section">
        <company-title />
      </div>
      <div class="white-bg">
        <div class="hero-body">
         <div class="container has-text-centered">
           <h1 class="title">
             About us
           </h1>
         </div>
        </div>
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

     <div>
      <div class="hero-body">
         <div class="container has-text-centered">
           <h1 class="title">
             Our work process
           </h1>
         </div>
       </div>
      <div style="margin-left: 20px; margin-right: 20px;">
       <img src="./images/home/web-design-process.png" />
       <br /><h1 class="title has-text-centered">Sprint</h1><br />
       <img src="./images/home/work-sprint.png" />
      </div>
    </div>

    <div class="white-bg" style="padding-bottom: 20px;">
     <div class="hero-body">
        <div class="container has-text-centered">
          <h1 class="title">
            All we could
          </h1>
        </div>
      </div>
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
    </div>
  `
}
module.exports = home
