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

Vue.component('google-map', {
  template:
  `
   <div id="google-map" class="shadow" style="width: 480px; height: 480px;"></div>
  `
})

const contactUs = {
  data: function () {
    return contactUsData
  },
  template:
  `
   <div class="container">
    <panel-title :name=contactUsTitle />
    <div class='columns' style="padding-bottom: 30px;">
      <div class="column is-half">
       <contact-form />
      </div>
      <div class="column">
       <google-map />
      </div>
    </div>
   </div>
  `,
  mounted: function() {
    $('#contact-button-div').hide();
    var map = new GMaps({
      el: '#google-map',
      lat: 30.519107,
      lng: 114.366855,
    });

    map.addMarker({
      lat: 30.519107,
      lng: 114.366855,
      title: 'Wuhan',
      infoWindow: {
        content: '<span>312 Luoyu Rd, Hongshan Qu, Wuhan Shi, Hubei Sheng, China, 430072</span>'
      }
    });
  }
}
export default contactUs
