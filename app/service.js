import serviceData from './service.data.js';

Vue.component('service-item', {
  props: ['name', 'desc', 'serviceImage'],
  template:
  `
  <div class="columns">
   <div class="column">
     <p class="title"><strong>{{name}}</strong></p>
     <p>{{desc}}</p>
   </div>
   <div class="column">
    <img :src=serviceImage class="shadow"/>
   </div>
  </div>
  `
})

Vue.component('service-item-reverse', {
  props: ['name', 'desc', 'serviceImage'],
  template:
  `
  <div class="columns">
   <div class="column">
    <img :src=serviceImage class="shadow"/>
   </div>
   <div class="column">
     <p class="title"><strong>{{name}}</strong></p>
     <p>{{desc}}</p>
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
  <div class='column' style="padding-bottom: 30px;">
    <panel-title :name=serviceTitle />
    <div class="container">
     <service-item
       :name=serviceList[0].name
       :serviceImage=serviceList[0].serviceImage
       :desc=serviceList[0].serviceDesc
     />
    </div>
    <service-item-reverse
      :name=serviceList[1].name
      :serviceImage=serviceList[1].serviceImage
      :desc=serviceList[1].serviceDesc
    />
    <service-item
      :name=serviceList[2].name
      :serviceImage=serviceList[2].serviceImage
      :desc=serviceList[2].serviceDesc
    />
    <service-item-reverse
      :name=serviceList[3].name
      :serviceImage=serviceList[3].serviceImage
      :desc=serviceList[3].serviceDesc
    />
   </div>
  </div>
  `
}
export default service
