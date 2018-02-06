import contactForm from './shared-component.js'
import contactUsData from './contactus.data.js'

Vue.component('contact-us-info', {
  props: ['contactUsInfo'],
  template:
  `
  <div class="columns is-gapless is-mobile">
   <div class="column is-5" v-for="info in contactUsInfo">
     <p>
       <strong>{{info.name}}</strong>
       <br>
       {{info.value}}
     </p>
   </div>
  </div>
  `
})

Vue.component('contact-us-buttons', {
  template:
  `
  <div class="columns is-gapless is-mobile">
   <div class="column is-one-quarter is-3">
    <p><strong>Follow us:</strong></p>
   </div>
   <div class="column">
     <a class="button">
       <span class="icon">
         <i class="fab fa-github"></i>
       </span>
     </a>
     <a class="button">
       <span class="icon">
         <i class="fab fa-twitter"></i>
       </span>
     </a>
     <a class="button">
       <span class="icon">
         <i class="fab fa-facebook"></i>
       </span>
     </a>
   </div>
  </div>
  `
})

Vue.component('contact-us-title', {
  props: ['contactUsTitle', 'contactUsSubTitle'],
  template:
  `
  <div class="column is-four-fifths">
    <p class="title">{{contactUsTitle}}</p>
    <p class="subtitle" style="margin-top: 5px;">{{contactUsSubTitle}}</p>
  </div>
  `
})

const contactUs = {
  data: function () {
    return contactUsData
  },
  template:
  `
  <div class='columns' style="padding-bottom: 30px; padding-top: 30px;">
    <div class="column is-half">
      <contact-us-title :contactUsTitle=contactUsTitle :contactUsSubTitle=contactUsSubTitle />
      <div class="column">
        <contact-us-info :contactUsInfo=contactUsInfo />
        <contact-us-buttons />
      </div>
    </div>
    <div class="column">
     <contact-form />
    </div>
   </div>
  `
}
export default contactUs
