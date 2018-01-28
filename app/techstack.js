Vue.component('tech-item-box', {
  props: ['tech_name', 'tech_desc', 'image_addr'],
  template:
  `
  <div class="column">
    <div class="box">
      <div class="box-img">
        <img :src=image_addr alt="">
      </div>
      <div class="box-content">
        <h4 class="title">{{tech_name}}</h4>
        <p class="description">{{tech_desc}}</p>
      </div>
    </div>
  </div>
  `
})

Vue.component('tech-title', {
  template:
  `
  <div class="columns" style="padding-left: 40px;">
    <div class="column is-two-fifths">
        <p class="title">Technology stack</p>
        <p class="subtitle" style="margin-top: 5px;">We use technologies proven and supported by a large open-source community and adopted by leading companies like Apple, Netflix, Microsoft, and IBM.</p>
        <a href='#'><p>Read More</p></a>
    </div>
    <div class="column">
      <img src='./images/tech/tech-stack.png'>
    </div>
  </div>
  `
})

Vue.component('map-item', {
  props: ['tech_name', 'index'],
  template:
  `
  <li>
    <input :id=index type='checkbox'>
    <label :for=index>{{tech_name}}</label>
  </li>
  `
})

// <div class='selector'>
//   <ul>
//     <Item index='1' tech_name='Ruby on rails' />
//     <Item index='2' tech_name='React Native' />
//     <Item index='3' tech_name='Augular.JS' />
//     <Item index='4' tech_name='Python' />
//     <Item index='5' tech_name='Vue.js' />
//     <Item index='6' tech_name='React.js' />
//     <Item index='7' tech_name='HTML' />
//     <Item index='8' tech_name='SQL' />
//   </ul>
//   <button>Technology map</button>
// </div>

const techStack = {
  template:
  `
  <div class="container is-fullhd" style="margin-top: 50px;">
    <tech-title />
    <div class="white-bg" style="padding-bottom: 30px;">
      <div class="hero-body">
         <div class="container has-text-centered">
           <h1 class="title">
            Our main technologies
           </h1>
         </div>
       </div>
      <div class="columns">
        <tech-item-box
          tech_name="Ruby on rails"
          image_addr='./images/tech/ruby.jpg'
          tech_desc="A web-application framework that includes everything needed to create database-backed web applications according to the Model-View-Controller (MVC) pattern." />
        <tech-item-box tech_name="React Native"
          tech_desc="ffdsfdsfdsfsd"
          image_addr='./images/tech/react-native.png'/>
        <tech-item-box
          tech_name="Python"
          tech_desc="ffdsfdsfdsfsd"
          image_addr='./images/tech/python.jpg'/>
      </div>
      <div class="columns">
        <tech-item-box
          tech_name="HTML + CSS"
          tech_desc="ffdsfdsfdsfsd"
          image_addr='./images/tech/html-css.jpg'/>
        <tech-item-box
          tech_name="Javascript"
          tech_desc="ffdsfdsfdsfsd"
          image_addr='./images/tech/javascript.png'/>
        <tech-item-box
          tech_name="PHP"
          tech_desc="ffdsfdsfdsfsd"
          image_addr='./images/tech/php.jpg'/>
      </div>
    </div>
 </div>
  `,
  mounted: function () {
    var angleStart = -360;

    // jquery rotate animation
    function rotate(li,d) {
        $({d:angleStart}).animate({d:d}, {
            step: function(now) {
                $(li)
                   .css({ transform: 'rotate('+now+'deg)' })
                   .find('label')
                      .css({ transform: 'rotate('+(-now)+'deg)' });
            }, duration: 0
        });
    }

    // show / hide the options
    function toggleOptions(s) {
        $(s).toggleClass('open');
        var li = $(s).find('li');
        var deg = $(s).hasClass('half') ? 180/(li.length-1) : 360/li.length;
        for(var i=0; i<li.length; i++) {
            var d = $(s).hasClass('half') ? (i*deg)-90 : i*deg;
            $(s).hasClass('open') ? rotate(li[i],d) : rotate(li[i],angleStart);
        }
    }

    $('.selector button').click(function(e) {
        toggleOptions($(this).parent());
    });

    setTimeout(function() { toggleOptions('.selector'); }, 100);
  }
}
module.exports = techStack
