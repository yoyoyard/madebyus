export const cv = Vue.component('resume', {
  props: ['resumeInfo'],
  template:
  `
  <div class="container">
    <panel-title name="Profile" color="#ffffff" />
    <div id="user-profile" class="columns has-text-centered">
     <div class="column is-one-quarter">
       <p style="color: #ffffff;">{{resumeInfo.fullName}}</p>
       <p style="color: #ffffff;">Age: {{resumeInfo.age}}</p>
       <p style="color: #ffffff;">Working: {{resumeInfo.workYears}} years</p>
       <p>
         <span class="icon is-large">
          <a :href=resumeInfo.github target="_blank" title="Github"><i class="fab fa-github fa-2x"></i></a>&nbsp
          <a :href=resumeInfo.blog target="_blank" alt="Blog"><i class="fab fa-blogger fa-2x"></i></a>
         </span>
       </p>
     </div>
     <div class="column is-5">
      <img :src=resumeInfo.liveImage class="shadow">
     </div>
    </div>

    <panel-title name="Skills" color="#ffffff" />
    <div class="columns is-multiline">
     <div class="column is-4" style="padding-top:  0px;" v-for="item in resumeInfo.skills">
      <p style="color: #ffffff">{{item.name}}</p>
      <div class="cssProgress">
        <div class="progress2">
          <div class="cssProgress-bar" :class=item.color :data-percent=item.value :style="'width: '+item.value+'%;'" >
            <span class="cssProgress-label">{{item.value}}%</span>
          </div>
        </div>
      </div>
     </div>
    </div>
    <panel-title name="Experience" color="#ffffff" />
    <section id="cd-timeline" class="cd-container">
      <div class="cd-timeline-block" v-for="item in resumeInfo.projects">
        <div class="cd-timeline-img cd-picture">
          <img src="./images/resume/cd-icon-picture.svg" alt="Picture">
        </div>

        <div class="cd-timeline-content">
          <h2 style="height: 0px;">{{item.name}}</h2>
          <span>{{item.timeframe}}</span>
          <br />
          <span>{{item.role}}</span>
          <br />
          <br />
          <span>{{item.desc}}</span>
        </div>
      </div>
    </section>
  </div>
  `,
});
