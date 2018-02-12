import serviceData from './service.data.js';
import detectMobilePlatform from './shared/detect-platform.js'

Vue.component('service-item', {
  props: ['name', 'desc', 'serviceImage'],
  template:
  `
  <div class="columns">
   <div class="column">
     <h5 class="title">{{name}}</h5>
     <span>{{desc}}</span>
   </div>
   <div class="column service-item-image">
    <img :src=serviceImage class="shadow"/>
   </div>
  </div>
  `
})

const service = {
  data: function () {
    return serviceData
  },
  template:
  `
  <div>
    <panel-title :name=serviceTitle />
    <div style="padding: 30px;">
     <service-item v-for="item in serviceList"
       :key=item.name
       :name=item.name
       :serviceImage=item.serviceImage
       :desc=item.serviceDesc
     />
   </div>
  </div>
  `,
  mounted: function() {
    $('#contact-button-div').show();

    if (detectMobilePlatform()){
      //Service page
      $(".service-item-image").hide();
    } else {
      //Service page
      $(".service-item-image").show();
    }
  }
}
export default service
