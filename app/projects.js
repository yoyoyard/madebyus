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

Vue.component('project-list', {
  template:
  `
   <div style="padding-bottom: 30px;">
    <article class="post__article">
      <section id="scrollNav-1" class="section white-bg">
        <div class="column is-gapless is-multiline is-mobile">
          <project-item name="Flywheel"
           desc="Helping instructors inspire riders through experience and service design."
           image_addr='./images/projects/p1.jpg' />
        </div>
      </section>
      <section id="scrollNav-2" class="section">
        <div class="column is-gapless is-multiline is-mobile">
          <reverse-item name="McGraw-Hill Education"
          desc="The best educational experiences are adaptive."
          image_addr='./images/projects/p2.jpg' />
        </div>
      </section>
      <section id="scrollNav-3" class="section white-bg">
        <div class="column is-gapless is-multiline is-mobile">
          <project-item
          name="Learnivore"
          desc="A social platform supporting collaborative learning by connecting instructors and students."
          image_addr='./images/projects/p3.jpg' />
        </div>
      </section>
    </article>
   </div>
  `
})

Vue.component('left-nav-bar', {
  template:
  `
  <nav class="scroll-nav fixed"
    style="position:fixed; left:50px; top:200px; z-index: 1000"
    role="navigation"
  >
    <div class="scroll-nav__wrapper">
      <span class="scroll-nav__heading">Projects navigation</span>
      <ol class="scroll-nav__list">
        <li class="scroll-nav__item description">
          <a href="#scrollNav-1" class="scroll-nav__link">
          Flywheel
          <span class="tag is-success">Mobile</span>
          </a>
        </li>
        <li class="scroll-nav__item features">
          <a href="#scrollNav-2" class="scroll-nav__link">
          Education
          <span class="tag is-danger">Desktop</span>
          </a>
        </li>
        <li class="scroll-nav__item usage active in-view">
          <a href="#scrollNav-3" class="scroll-nav__link">
          Learnivore
          <span class="tag is-info">Web App</span>
          </a>
        </li>
      </ol>
    </div>
  </nav>
  `
})

Vue.component('project-content', {
  template:
  `
    <div class="columns">
      <div class="column is-one-fifth">
       <left-nav-bar />
      </div>
      <div class="column">
       <project-list />
      </div>
    </div>
  `
})



const projects = {
  template:
  `
  <div class="container is-fullhd">
   <panel-title name="All we did" />
   <project-content />
  </div>

  `,
  mounted: function () {
    $('.post-article').scrollNav({
    	sections: 'section',
    	subSections: false,
    	sectionElem: 'section',
    	className: 'scroll-nav',
    	showHeadline: true,
    	headlineText: 'Scroll To',
    	showTopLink: true,
    	topLinkText: 'Top',
    	fixedMargin: 40,
    	scrollOffset: 0,
    	animated: true,
    	speed: 500,
    	insertTarget: this.selector,
    	insertLocation: 'insertBefore',
    	activeClass: 'active',
    	arrowKeys: false,
    	scrollToHash: true,
    	onInit: null,
    	onRender: null,
    	onDestroy: null
    });

  }
}
module.exports = projects
