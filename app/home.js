import homeData from './home.data.js';
import homeFunc from './home.mounted.js';

Vue.component('company-home-header', {
  props: ['companyTitle', 'companySubTitle', 'companyButtonText', 'companyImageAddr'],
  template:
  `
  <div class="section">
    <div class="columns">
      <div class="column is-two-fifths">
          <p class="title">{{companyTitle}}</p>
          <p class="subtitle" style="margin-top: 5px;">{{companySubTitle}}</p>
          <div class="columns">
           <div class="column">
             <a href='/#/contactus' style="background-color: #ee4f4b;" class="button is-outlined has-text-white">
              {{companyButtonText}}
             </a>
           </div>
          </div>
      </div>
      <div class="column">
        <img :src=companyImageAddr>
      </div>
    </div>
  </div>
  `
})

Vue.component('work-process-introduce', {
  props: ['workProcessTitle', 'workProcessImage', 'workSprintImage'],
  template:
  `
  <div class="white-bg">
   <panel-title :name=workProcessTitle />
   <div class="columns" style="padding-right: 10px;">
    <div class="column is-half is-mobile">
     <img :src=workProcessImage />
    </div>
    <div class="column is-half is-mobile">
     <img :src=workSprintImage />
    </div>
   </div>
  </div>
 `
})

Vue.component('recent-case-card', {
  props: ['desc', 'caseImage'],
  template:
  `
  <div class="card">
    <div class="card-image">
      <figure class="image is-4by3">
        <img :src=caseImage alt="">
      </figure>
    </div>
    <div class="card-content">
      <div class="content">
       {{desc}}
       <a href="/#/projects">View more cases</a>.
      </div>
    </div>
  </div>
 `
})

Vue.component('recent-case-list', {
  props: ['recentCaseTitle', 'recentCaseList', 'recentCaseButtonText'],
  template:
  `
  <div class="container is-mobile">
    <panel-title :name=recentCaseTitle />
    <div class="columns is-centered is-mobile">
     <div class="column is-3" v-for="item in recentCaseList">
      <recent-case-card :desc=item.desc :caseImage=item.caseImage />
     </div>
    </div>
    <div class="column has-text-centered">
      <a href='/#/projects' style="background-color: #ee4f4b;"
         class="button is-outlined has-text-white go-to-top">
         {{recentCaseButtonText}}
       </a>
    </div>
  </div>
 `
})

Vue.component('home-member-introduce', {
  props: ['memberIntroduceTitle', 'memberStars', 'memberIntroduceButtonText'],
  template:
  `
  <div class="white-bg">
   <panel-title :name=memberIntroduceTitle />
   <div class="columns is-centered is-mobile" style="margin: 0 40px;">
     <member-item v-for="member in memberStars"
        :key=member.id
        :name=member.name
        :title=member.title
        :image_unhover=member.imageUnhover
        :image_hover=member.imageHover
     />
   </div>
   <div class="column has-text-centered">
     <a href='/#/meetus' style="background-color: #ee4f4b;"
        class="button is-outlined has-text-white go-to-top">
        {{memberIntroduceButtonText}}
      </a>
   </div>
  </div>
  `
})


const home = {
  data: function () {
    return homeData
  },
  template:
  `
   <div class="container is-fullhd">
     <company-home-header
      :companyTitle=companyTitle
      :companySubTitle=companySubTitle
      :companyButtonText=companyButtonText
      :companyImageAddr=companyImageAddr
     />
     <work-process-introduce
      :workProcessTitle=workProcessTitle
      :workProcessImage=workProcessImage
      :workSprintImage=workSprintImage
     />
     <recent-case-list
      :recentCaseTitle=recentCaseTitle
      :recentCaseList=recentCaseList
      :recentCaseButtonText=recentCaseButtonText
     />
     <home-member-introduce
      :memberIntroduceTitle=memberIntroduceTitle
      :memberStars=memberStars
      :memberIntroduceButtonText=memberIntroduceButtonText
     />
    </div>
  `,
  mounted: homeFunc,
}

export default home;
