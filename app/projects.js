import projectsData from './projects.data.js';
import projectsFunc from './projects.mounted.js';

Vue.component('project-item', {
  props: ['name', 'projectDesc', 'caseImage'],
  template:
  `
  <div class="tile is-ancestor">
    <div class="tile is-parent">
      <div class="tile">
        <div class="tile is-parent is-vertical">
          <article class="tile is-child notification ">
            <p class="title">{{name}}</p>
            <p class="subtitle">{{projectDesc}}</p>
            <a href='#'><p>Read More</p></a>
          </article>
        </div>
      </div>
    </div>
    <div class="tile is-vertical is-6">
      <img :src=caseImage class="shadow"/>
    </div>
  </div>
  `
})

Vue.component('project-list', {
  props: ['caseList'],
  template:
  `
   <div style="padding-bottom: 30px;">
    <article class="post__article">
      <section :id=item.id class="section" v-for="item in caseList">
        <div class="column is-gapless is-multiline is-mobile">
          <project-item
           :name=item.name
           :projectDesc=item.projectDesc
           :caseImage=item.caseImage />
        </div>
      </section>
    </article>
   </div>
  `
})

Vue.component('left-nav-bar', {
  props: ['navBarName', 'caseList'],
  template:
  `
  <nav class="scroll-nav fixed"
    style="position:fixed; left:50px; top:200px; z-index: 1000"
    role="navigation"
  >
    <div class="scroll-nav__wrapper">
      <span class="scroll-nav__heading">{{navBarName}}</span>
      <ol class="scroll-nav__list">
        <li class="scroll-nav__item" v-for="item in caseList">
          <a :href=item.hrefLink class="scroll-nav__link">
          {{item.name}}
          <span class="tag" :class=item.navTag.tagColor>{{item.navTag.tagName}}</span>
          </a>
        </li>
      </ol>
    </div>
  </nav>
  `
})

Vue.component('project-content', {
  props: ['navBarName', 'caseList'],
  template:
  `
    <div class="columns">
      <div class="column is-one-fifth">
       <left-nav-bar :navBarName=navBarName :caseList=caseList />
      </div>
      <div class="column">
       <project-list :caseList=caseList />
      </div>
    </div>
  `
})



const projects = {
  data: function () {
    return projectsData
  },
  template:
  `
  <div class="container is-fullhd">
   <panel-title :name=projectsTitle />
   <project-content :navBarName=navBarName :caseList=caseList />
  </div>
  `,
  mounted: projectsFunc,
}
export default projects
