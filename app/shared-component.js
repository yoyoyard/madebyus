export const contactForm = Vue.component('contact-form', {
  template:
  `
  <div id="form_container" class="shadow">
    <form id="contact" action="" method="post">
      <h3>Quick Contact</h3>
      <h4>Contact us today, and get reply with in 24 hours!</h4>
      <fieldset>
        <input placeholder="Your name" type="text" tabindex="1" autofocus>
      </fieldset>
      <fieldset>
        <input placeholder="Your Email Address" type="email" tabindex="2">
      </fieldset>
      <fieldset>
        <input placeholder="Your Phone Number" type="tel" tabindex="3">
      </fieldset>
      <fieldset>
        <textarea placeholder="Type your Message Here...." tabindex="5"></textarea>
      </fieldset>
      <fieldset>
        <button name="submit" type="submit" id="contact-submit" data-submit="...Sending">Submit</button>
      </fieldset>
    </form>
  </div>
  `
})

export const panelTitle = Vue.component('panel-title', {
  props: ['name', 'color'],
  template:
  `
  <div class="container" style="padding-top: 20px; padding-bottom: 10px;">
   <div class="has-text-centered">
     <h1 class="title" :style="'color: ' +color+';'">
       {{name}}
     </h1>
   </div>
  </div>
  `
})

export default contactForm;
