const contactForm = require('./contactform.js')

Vue.component('contact-info', {
  template:
  `
  <div class="columns is-gapless is-mobile">
   <div class="column is-4">
     <p>
       <strong>Email Address: </strong>
       <br>
       xxxx@madebyus.com
     </p>
   </div>
   <div class="column is-3">
     <p style="padding-left: 5px; padding-right: 5px;">
       <strong>Skype: </strong>
       <br>
       xxxx@madebyus.com
     </p>
   </div>
   <div class="column">
     <p style="padding-left: 5px; padding-right: 5px;">
       <strong>Telephone: </strong>
       <br>
       0212-634255309
     </p>
   </div>
  </div>
  `
})

Vue.component('contact-buttons', {
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

Vue.component('contact-title', {
  template:
  `
  <div class="column is-four-fifths">
      <p class="title">Let’s build something great together</p>
      <p class="subtitle" style="margin-top: 5px;">Whatever your ambition, we’d love to design and build your next big idea or lend a hand on an existing one.</p>
  </div>
  `
})

const contactUs = {
  template:
  `
  <div class='columns' style="padding-bottom: 30px; padding-top: 30px;">
    <div class="column is-half">
      <contact-title />
      <div class="column">
        <contact-info />
        <contact-buttons />
      </div>
    </div>
    <div class="column">
     <contact-form />
    </div>
   </div>
  `
}
module.exports = contactUs
