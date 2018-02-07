import cvData from './cv.data.js';
import cvFunc from './cv.mounted.js';

export const cv = Vue.component('resume', {
  props: ['resumeInfo'],
  template:
  `
  <div>
    <section id="cd-timeline" class="cd-container">
      <div class="cd-timeline-block" v-for="item in resumeInfo.projects">
        <div class="cd-timeline-img cd-picture">
          <img src="./images/resume/cd-icon-picture.svg" alt="Picture">
        </div>

        <div class="cd-timeline-content">
          <h2>{{item.name}}</h2>
          <p>{{item.timeframe}}</p>
          <p>{{item.role}}</p>
          <p>{{item.desc}}</p>
        </div>
      </div>
    </section>
  </div>
  `,

});
