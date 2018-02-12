import projectsData from './projects.data.js';
import projectsFunc from './projects.mounted.js';

Vue.component('project-item', {
  props: ['caseItem'],
  template:
  `
  <div class="columns has-text-centered">
    <div class="column has-text-left">
      <span class="title">{{caseItem.name}}</span>
      <br />
      <span class="tag" style="margin-left: 3px;" :class=item.color v-for="item in caseItem.projectTags">
       {{item.name}}
      </span>
      <br />
      <br />
      <p>{{caseItem.projectDesc}}</p>
      <div class="has-text-left">
        <a href='./cases/caseview.html'>Read More ></a>
      </div>
    </div>
    <div class="tile is-vertical is-6">
      <img :src=caseItem.caseImage class="shadow"/>
    </div>
  </div>
  `
})

Vue.component('project-list', {
  props: ['navBarName', 'caseList'],
  template:
  `
   <div style="padding-bottom: 30px;">
    <article class="post__article">
      <section :id=item.id class="section" v-for="item in caseList">
        <div class="column is-gapless is-multiline is-mobile">
          <project-item :caseItem=item />
        </div>
      </section>
    </article>
   </div>
  `
})

Vue.component('top-nav-bar', {
  props: ['navBarName', 'caseList'],
  template:
  `
  <nav class="scroll-nav">
    <p style="margin-left: 15px;"><strong>{{navBarName}}</strong></p>
    <ul id="menu">
      <li v-for="item in caseList">
        <a :href=item.hrefLink style="margin-left: 15px;">
        {{item.name}}
        <span class="tag" :class=item.navTag.tagColor>{{item.navTag.tagName}}</span>
        </a>
      </li>
    </ul>
  </nav>
  `
})

Vue.component('project-content', {
  props: ['navBarName', 'caseList'],
  template:
  `
    <div class="column">
     <div class="project-top-bar">
      <top-nav-bar :navBarName=navBarName :caseList=caseList />
     </div>
    	<project-list :navBarName=navBarName :caseList=caseList />
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
   <project-content :navBarName=navBarName :caseList=caseList />
  </div>
  `,
  mounted: projectsFunc,
}
export default projects
