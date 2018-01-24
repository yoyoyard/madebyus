// const member = new Vue({
//   el: '#hexGrid',
//   data: {
//     items: [
//       { image: './lib/image_gallery/img/1.jpg', name: 'Roger Luo', description: 'C++/Python/Ruby' },
//       { image: './lib/image_gallery/img/1.jpg', name: 'Berry Colorful', description: 'C++/Python/Ruby' },
//       { image: './lib/image_gallery/img/1.jpg', name: 'Berry Colorful', description: 'C++/Python/Ruby' },
//     ]
//   }
// })
//


Vue.component('child', {
  props: ['name', 'title', 'desc', 'image_profile'],
  template:
  `
    <div class="single-member effect-3">
      <div class="member-image">
        <img :src=image_profile alt="Member">
      </div>
      <div class="member-info">
        <h3>{{name}}</h3>
        <h5>{{title}}</h5>
        <p>{{desc}}</p>
        <div class="social-touch">
          <a class="fb-touch" href="#"></a>
          <a class="tweet-touch" href="#"></a>
          <a class="linkedin-touch" href="#"></a>
        </div>
      </div>
    </div>
  `
})

Vue.component('LeadersSay', {
  template:
  `
  <div id="say_container">
    <input type="radio" name="nav" id="first" checked/>
    <input type="radio" name="nav" id="second" />
    <input type="radio" name="nav" id="third" />

    <label for="first" class="first"></label>
    <label for="second"  class="second"></label>
    <label for="third" class="third"></label>

    <div class="one slide">
      <blockquote>
        <span class="leftq quotes">&ldquo;</span> He promptly completed the task at hand and communicates really well till the project reaches the finishing line. I was pleased with his creative design and will definitely be hiring him again. <span class="rightq quotes">&bdquo; </span>
      </blockquote>
      <img src="./images/leader1.jpg" width="170" height="130" class='say_img' />
      <h2>Steve Kruger</h2>
      <h6>UI/UX Designer at MadeByUs</h6>
    </div>

    <div class="two slide">
      <blockquote>
        <span class="leftq quotes">&ldquo;</span> He promptly completed the task at hand and communicates really well till the project reaches the finishing line. I recommend him to anyone who wants their work done professionally. The project ... <a href="#"> read more</a><span class="rightq quotes">&bdquo; </span>
      </blockquote>
      <img src="./images/leader2.jpg" width="170" height="130" class='say_img'/>
      <h2>John Doe</h2>
      <h6>Developer Relations at MadeByUs</h6>
    </div>

    <div class="three slide">
      <blockquote>
        <span class="quotes leftq"> &ldquo;</span> He promptly completed the task at hand and communicates really well till the project reaches the finishing line. I was pleased with his creative design and will definitely be hiring him again. <span class="rightq quotes">&bdquo; </span>
      </blockquote>
      <img src="./images/leader3.jpeg" width="170" height="130" class='say_img' />
      <h2>Steve Stevenson</h2>
      <h6>CEO of MadeByUs</h6>
    </div>
  `
})



const Meetus = {
  template:
  `
   <div class="column">
     <div class="hero-body">
        <div class="container has-text-centered">
          <h1 class="title">
            Team wall
          </h1>
        </div>
      </div>
     <div class="grid" style="margin-top: 0px;" />
     <div class="hero-body">
        <div class="container has-text-centered">
          <h1 class="title">
            Leaders Say
          </h1>
        </div>
      </div>
     <LeadersSay />
     <div class="hero-body">
        <div class="container has-text-centered">
          <h1 class="title">
            Meet our team
          </h1>
        </div>
      </div>
     <div class="team-members row is-centered" style="margin-top: 0px;">
       <child
          name="Berry Colour"
          title="Engineer" desc="Ruby / Python / C++ / Postgresql"
          image_profile="./images/member_270x210.jpg" >
       </child>
       <child
          name="Richard Gan"
          title="Engineer" desc="Ruby / Python / C++ / Postgresql"
          image_profile="./images/member_270x210.jpg" >
       </child>
       <child
          name="Roger Luo"
          title="Engineer" desc="Ruby / Python / C++ / Postgresql"
          image_profile="./images/member_270x210.jpg" >
       </child>
       <child
          name="Chris Wang"
          title="Engineer" desc="Ruby / Python / C++ / Postgresql"
          image_profile="./images/member_270x210.jpg" >
       </child>
       <child
          name="Gary Gao"
          title="Engineer" desc="Ruby / Python / C++ / Postgresql"
          image_profile="./images/member_270x210.jpg" >
       </child>
       <child
          name="Berry Tan"
          title="Engineer" desc="Ruby / Python / C++ / Postgresql"
          image_profile="./images/member_270x210.jpg" >
       </child>
     </div>
    </div>
  `,
  mounted: function () {
    //Creating 50 thumbnails inside .grid
    //the images are stored on the server serially. So we can use a loop to generate the HTML.
    var images = "", count = 50;
    for(var i = 1; i <= count; i++)
    	images += '<img src="http://thecodeplayer.com/u/uifaces/'+i+'.jpg" class="image_wall" />';

    //appending the images to .grid
    $(".grid").append(images);

    var d = 0; //delay
    var ry, tz, s; //transform params

    //animation time
    $(document).ready(function(){
    	//fading out the thumbnails with style
    	$(".image_wall").each(function(){
    		d = Math.random()*1000; //1ms to 1000ms delay
    		$(this).delay(d).animate({opacity: 0}, {
    			//while the thumbnails are fading out, we will use the step function to apply some transforms. variable n will give the current opacity in the animation.
    			step: function(n){
    				s = 1-n; //scale - will animate from 0 to 1
    				$(this).css("transform", "scale("+s+")");
    			},
    			duration: 1000,
    		})
    	}).promise().done(function(){
    		//after *promising* and *doing* the fadeout animation we will bring the images back
    		storm();
    	})
    })

    //bringing back the images with style
    function storm()
    {
    	$(".image_wall").each(function(){
    		d = Math.random()*1000;
    		$(this).delay(d).animate({opacity: 1}, {
    			step: function(n){
    				//rotating the images on the Y axis from 360deg to 0deg
    				ry = (1-n)*360;
    				//translating the images from 1000px to 0px
    				tz = (1-n)*1000;
    				//applying the transformation
    				$(this).css("transform", "rotateY("+ry+"deg) translateZ("+tz+"px)");
    			},
    			duration: 3000,
    			//some easing fun. Comes from the jquery easing plugin.
    			easing: 'easeOutQuint',
    		})
    	})
    }
  }
}
module.exports = Meetus
