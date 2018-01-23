Vue.component('Box', {
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

Vue.component('Title', {
  template:
  `
  <div class="tile is-ancestor">
    <div class="tile is-vertical is-8">
      <div class="tile">
        <div class="tile is-parent is-vertical">
          <article class="tile is-child notification ">
            <p class="title">Technology stack</p>
            <p class="subtitle">We use technologies proven and supported by a large open-source community and adopted by leading companies like Apple, Netflix, Microsoft, and IBM.</p>
          </article>
        </div>
      </div>
    </div>
    <div class="tile is-parent">
      <img src='./images/tech2.jpeg'>
    </div>
  </div>
  `
})

Vue.component('Item', {
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

const Techstack = {
  template:
  `
  <div class="column">
    <Title />
    <div class="hero-body">
       <div class="container has-text-centered">
         <h1 class="title">
          Our main technologies
         </h1>
       </div>
     </div>
    <div class="columns">
      <Box tech_name="Ruby on rails" tech_desc="ffdsfdsfdsfsd" image_addr='./lib/tech_stack/images/1.jpg'/>
      <Box tech_name="React Native" tech_desc="ffdsfdsfdsfsd" image_addr='./lib/tech_stack/images/2.png'/>
      <Box tech_name="Python" tech_desc="ffdsfdsfdsfsd" image_addr='./lib/tech_stack/images/3.jpg'/>
    </div>
    <div class="columns">
      <Box tech_name="HTML + CSS" tech_desc="ffdsfdsfdsfsd" image_addr='./lib/tech_stack/images/4.jpg'/>
      <Box tech_name="Javascript" tech_desc="ffdsfdsfdsfsd" image_addr='./lib/tech_stack/images/5.png'/>
      <Box tech_name="PHP" tech_desc="ffdsfdsfdsfsd" image_addr='./lib/tech_stack/images/6.jpg'/>
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
module.exports = Techstack
