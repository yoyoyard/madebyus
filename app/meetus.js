import meetUsData from './meetus.data.js';
import meetUsFunc from './meetus.mounted.js'

Vue.component('member-item', {
  props: ['name', 'title', 'image_hover', 'image_unhover'],
  template:
  `
   <div class="column is-3">
    <a href="#" class="member-profile has-text-centered">
      <div class="unhover_img">
      <img :src=image_unhover alt="" />
      </div>
      <div class="hover_img">
      <img :src=image_hover alt="" />
      </div>
    </a>
    <div class="has-text-centered">
      <h6 style="min-width: 40px;"><strong>{{name}}</strong><span class="tag is-light">{{title}}</span></h6>
    </div>
  </div>
  `
})


Vue.component('member-list', {
  props: ['meetUsTitle', 'members'],
  template:
  `
  <div class="container" style="margin-bottom: 30px;">
   <panel-title :name=meetUsTitle />
   <div class="columns is-centered" style="margin: 0 40px;">
     <member-item v-for="member in members"
        :key=member.id
        :name=member.name
        :title=member.title
        :image_unhover=member.imageUnhover
        :image_hover=member.imageHover
     />
   </div>
  </div>
  `
})

Vue.component('tech-stack-title', {
  props: ['techStackTitle', 'techStackDesc'],
  template:
  `<div class="white-bg">
    <div class="columns" style="padding-left: 40px; padding-top: 60px;">
     <div class="column is-mobile is-two-fifths">
      <p class="title">{{techStackTitle}}</p>
      <p class="subtitle" style="margin-top: 5px;">{{techStackDesc}}</p>
      </div>
     <div class="column is-mobile">
      <div class="image_wall_grid" style="margin-top: 0px;" />
     </div>
    </div>
   </div>
  `
})

Vue.component('tech-item-card', {
  props: ['name', 'tag', 'tagColor', 'imageIcon'],
  template:
  `
  <div class="card">
    <div class="card-content has-text-centered">
     <div class="content">
      <img :src=imageIcon :alt=name style="width: 80px; height: 80px;"/>
      <p class="title is-4">{{name}}</p>
      <p class="subtitle is-6"><span :class=tagColor class="tag">{{tag}}</span></p>
     </div>
    </div>
   </div>
  `
})

Vue.component('tech-stack-list', {
  props: ['techStackContentTitle', 'techStackList'],
  template:
  `
  <div style="padding: 0 30px 30px 30px;">
   <panel-title :name=techStackContentTitle />
   <div class="columns">
    <div class="column is-3" v-for="techStackItem in techStackList">
     <tech-item-card
        :key=techStackItem.id
        :name=techStackItem.name
        :tag=techStackItem.tag
        :tagColor=techStackItem.tagColor
        :imageIcon=techStackItem.imageIcon
     />
     <div class="content"
          style="background-color: #363636; padding: 20px;"
     >
      <div class="columns" style="height: 14px;">
       <p style="padding-left: 12px; color: #ffffff;">{{techStackItem.dependency.name}}</p>
      </div>
      <div class="columns is-mobile" >
       <div class="column is-3" v-for="item in techStackItem.dependency.dependencyList">
        <img :src=item style="width: 40px; height: 40px;"/>
       </div>
      </div>
     </div>
    </div>
   </div>
  </div>
  `
})

const meetUs = {
  data: function () {
    return meetUsData
  },
  template:
  `
   <div class="container is-fullhd">
     <member-list :members=members :meetUsTitle=meetUsTitle />
     <tech-stack-title :techStackTitle=techStackTitle :techStackDesc=techStackDesc />
     <tech-stack-list :techStackContentTitle=techStackContentTitle :techStackList=techStackList />
   </div>
  `,
  mounted: meetUsFunc,
}
export default meetUs;
