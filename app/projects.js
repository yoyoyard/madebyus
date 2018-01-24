Vue.component('ReverseItem', {
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
    <div class="tile is-vertical is-8">
      <img :src=image_addr class="shadow"/>
    </div>
  </div>
  `
})


Vue.component('ProjectItem', {
  props: ['name', 'desc', 'image_addr'],
  template:
  `
  <div class="tile is-ancestor">
    <div class="tile is-vertical is-8">
      <img :src=image_addr class="shadow"/>
    </div>
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

  </div>
  `
})

const Projects = {
  template:
  `
  <div class="column">
   <div class="hero-body">
      <div class="container has-text-centered">
        <h1 class="title">
          All we did
        </h1>
      </div>
    </div>
    <section class="section">
      <div class="column is-gapless is-multiline is-mobile">
        <ProjectItem name="Flywheel" desc="fsfsfwerewrew  rewrewr ewrfewrfwefewwfwe" image_addr='./images/projects/p1.jpg' />
      </div>
    </section>
    <section class="section">
      <div class="column is-gapless is-multiline is-mobile">
        <ReverseItem name="Flywheel" desc="fsfsfwerewrew  rewrewr ewrfewrfwefewwfwe" image_addr='./images/projects/p2.jpg' />
      </div>
    </section>
    <section class="section">
      <div class="column is-gapless is-multiline is-mobile">
        <ProjectItem name="Flywheel" desc="fsfsfwerewrew  rewrewr ewrfewrfwefewwfwe" image_addr='./images/projects/p3.jpg' />
      </div>
    </section>
  </div>

  `,
  mounted: function () {
  }

}
module.exports = Projects
