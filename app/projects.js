import projectsData from './projects.data.js';
import projectsFunc from './projects.mounted.js';

Vue.component('project-item', {
  props: ['caseItem'],
  template:
  `
  <div class="tile is-ancestor">
    <div class="tile is-parent">
      <div class="tile">
        <div class="tile is-parent is-vertical">
          <div class="tile is-child notification">
            <span class="title">{{caseItem.name}}</span>
            <br />
            <span class="tag" style="margin-left: 3px;" :class=item.color v-for="item in caseItem.projectTags">
             {{item.name}}
            </span>
            <br />
            <br />
            <span class="subtitle">{{caseItem.projectDesc}}</span>
            <br />
            <div class="has-text-right">
              <a href='./cases/caseview.html'>Read More ></a>
            </div>
          </div>
        </div>

      </div>
    </div>
    <div class="tile is-vertical is-6">
      <img :src=caseItem.caseImage class="shadow"/>
    </div>
  </div>
  `
})

Vue.component('project-list', {
  props: ['caseList'],
  template:
  `
   <div style="padding-bottom: 30px;">
    <div id="st-trigger-effects" style="position: fixed; top: 10; z-index: 1000px;" >
     <button style="background-color: #ee4f4b;" class="is-outlined has-text-white go-to-top" data-effect="st-effect-3">
      <i class="far fa-caret-square-down fa-3x"></i>
     </button>
    </div>
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

Vue.component('left-nav-bar', {
  props: ['navBarName', 'caseList'],
  template:
  `
  <nav class="st-menu st-effect-3 scroll-nav" id="menu-3">
    <h4>{{navBarName}}</h4>
    <ul>
      <li v-for="item in caseList">
        <a :href=item.hrefLink class="project-nav-item">
        {{item.name}}
        <span style="margin: 10px; 0;" class="tag" :class=item.navTag.tagColor>{{item.navTag.tagName}}</span>
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
    <div id="st-container" class="st-container">
    	<div class="st-pusher">
    		<left-nav-bar :navBarName=navBarName :caseList=caseList />
    		<div class="st-content">
    			<div class="st-content-inner">
    				 <project-list :caseList=caseList />
    			</div>
    		</div>
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
   <project-content :navBarName=navBarName :caseList=caseList />
  </div>
  `,
  mounted: projectsFunc,
}
export default projects
