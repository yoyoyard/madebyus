Vue.component('work-service-item', {
  props: ['name', 'desc', 'image_addr'],
  template:
  `
  <div class="columns">
   <div class="column">
     <p class="title"><strong>{{name}}</strong></p>
     <p>{{desc}}</p>
   </div>
   <div class="column">
    <img :src=image_addr class="shadow"/>
   </div>
  </div>
  `
})

Vue.component('work-service-item-reverse', {
  props: ['name', 'desc', 'image_addr'],
  template:
  `
  <div class="columns">
   <div class="column">
    <img :src=image_addr class="shadow"/>
   </div>
   <div class="column">
     <p class="title"><strong>{{name}}</strong></p>
     <p>{{desc}}</p>
   </div>
  </div>
  `
})

const service = {
  template:
  `
  <div class='column'>
    <panel-title name="Our services" />
    <div class="container">
     <work-service-item
       name="Web Design & Development"
       image_addr="./images/services/s1.jpg"
       desc="So its essential to ensure your website design & development are simple, clean and user friendly, to make the users experience enjoyable.
            Whether your a startup or a well established brand, MadeByUs place thought in to every stage of a website from research and planning, to design & development right through to user and browser testing. Making sure your website is on brand and achieves your goals."
       />
    </div>
    <work-service-item-reverse
      name="Craft CMS"
      image_addr="./images/services/s2.jpg"
      desc="Using the best technologies for progressive web apps our engineers expertly architect and implement quality code that is cost effective for you, and is further supported by our design."
      />
    <work-service-item
      name="Content Management System"
      image_addr="./images/services/s3.jpg"
      desc="Adding a Content Management System (CMS) in to your website will give you full control to update your website, without asking us to add content for you. And even though our CMS is intuitive, we provide full training to you and your team on how to use it.
            Whether it’s updating a blog, shop opening times, restaurant menus, team profiles or adding products to your website. Our CMS will handle it no problem. There are no limitations with what we can create - as we are bespoke web developers and work with clients of all natures including start ups, medium sized businesses and large global organisations."
      />
   </div>
  </div>
  `
}
module.exports = service
