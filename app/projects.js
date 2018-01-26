Vue.component('reverse-item', {
  props: ['name', 'desc', 'image_addr'],
  template:
  `
  <div class="tile is-ancestor">
    <div class="tile is-vertical is-6">
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


Vue.component('project-item', {
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
    <div class="tile is-vertical is-6">
      <img :src=image_addr class="shadow"/>
    </div>
  </div>
  `
})

const projects = {
  template:
  `
  <div class="container is-fullhd">
   <div class="hero-body">
      <div class="container has-text-centered">
        <h1 class="title">
          All we did
        </h1>
      </div>
    </div>
    <section class="section white-bg">
      <div class="column is-gapless is-multiline is-mobile">
        <project-item name="Flywheel"
         desc="Helping instructors inspire riders through experience and service design."
         image_addr='./images/projects/p1.jpg' />
      </div>
    </section>
    <section class="section">
      <div class="column is-gapless is-multiline is-mobile">
        <reverse-item name="McGraw-Hill Education"
        desc="The best educational experiences are adaptive."
        image_addr='./images/projects/p2.jpg' />
      </div>
    </section>
    <section class="section white-bg">
      <div class="column is-gapless is-multiline is-mobile">
        <project-item
        name="Learnivore"
        desc="A social platform supporting collaborative learning by connecting instructors and students."
        image_addr='./images/projects/p3.jpg' />
      </div>
    </section>
  </div>

  `,
  mounted: function () {
  }
}
module.exports = projects
