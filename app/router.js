const project = require('./projects.js')
const techStack = require('./techstack.js')
const sampleCode = require('./samplecode.js')
const service = require('./service.js')
const meetUs = require('./meetus.js')
const contactUs = require('./contactus.js')
const home = require('./home.js')
const contactForm = require('./contactform.js')

const router = new VueRouter({
  routes: [
    { path: '/', redirect: '/home' },
    { path: '/home', name: 'home', component: home },
    { path: '/projects', name: 'projects', component: project },
    { path: '/techstack', name: 'techstack', component: techStack },
    { path: '/samplecode', name: 'samplecode', component: sampleCode },
    { path: '/services', name: 'services', component: service },
    { path: '/meetus', name: 'meetus', component: meetUs },
    { path: '/contactus', name: 'contactus', component: contactUs },
  ]
})

new Vue({
	router,
  el: '#root',
  components: {
    contactForm: contactForm,
  },
  mounted: function () {

    $('.modal-button').click(function(e) {
        $('.modal').addClass('is-active')
    });

    $('.modal-close').click(function(e) {
        $('.modal').removeClass('is-active')
    });

    //Hamburger
    var menuIsOpen=false,
  		$menu=$(".menu"),
  		$menuItem=$(".menu-item"),
  		$menuBg=$(".menu-bg"),
  		$menuToggle=$(".menu-toggle"),

  		menuWidth=300,
  		menuItemOffset=150,
  		menuBgSkew=-10,
  		timeScale={v:1}
  	;
  	TweenMax.globalTimeScale(timeScale.v);

  	TweenMax.set($menuItem,{
  		x:-menuItemOffset
  	});
  	TweenMax.set($menuBg,{
  		skewX:menuBgSkew
  	})
  	function setTimescale(v){
  		TweenMax.to(timeScale,0.5,{
  			v:v,
  			ease:Quad.easeInOut,
  			onUpdate:updateTimescale,
  			onComplete:updateTimescale
  		});
  	}
  	function updateTimescale(){
  		TweenMax.globalTimeScale(timeScale.v);
  	}

  	function openMenu(){
  		menuIsOpen=true;
  		TweenMax.to($menu,0.55,{
  			x:menuWidth,
  			force3D:false,
  			ease:Elastic.easeOut,
  			easeParams:[1.01,0.8]
  		});
  		TweenMax.to($menuBg,0.55,{
  			skewX:0,
  			force3D:false,
  			ease:Elastic.easeOut,
  			easeParams:[1.01,0.8]
  		});
  		$menuItem.each(function(i){
  			TweenMax.to($(this),0.7+(i*0.05),{
  				delay:0.02*i,
  				x:0,
  				force3D:false,
  				// ease:Quint.easeOut
  				ease:Elastic.easeOut,
  				easeParams:[1.1,0.6]
  			});
  		});
  	}
  	function closeMenu(){
  		menuIsOpen=false;
  		TweenMax.to($menu,0.2,{
  			x:-100,
  			ease:Quad.easeIn,
  			force3D:false
  		});
  		TweenMax.set($menuBg,{
  			delay:0.2,
  			skewX:menuBgSkew,
  			force3D:false
  		});
  		$menuItem.each(function(i){
  			TweenMax.to($(this),0.3+(0.05*i),{
  				x:-menuItemOffset,
  				ease:Quad.easeIn,
  				force3D:false
  			});
  		});
  	}
  	function toggleMenu(){
  		if(menuIsOpen){
  			$menuToggle.removeClass('menu-open');
  			closeMenu();
  		}else{
  			$menuToggle.addClass('menu-open');
  			openMenu();
  		}
  	}
  	$menuToggle.click(function(){
  		toggleMenu();
  	});


    var scrollOffset = function(e){
      var e =e || window.event;
      var scrolltop=document.documentElement.scrollTop||document.body.scrollTop;
      if (scrolltop > 70) {
        $("#navbar").addClass('navbar-fixed-top');
        $("body").css("padding-top","120px");
      } else {
        $("#navbar").removeClass('navbar-fixed-top');
        $("body").css("padding-top","0px");
      }
    }

    //resize screen size
    var resizeFun = function(event) {
      if(event.currentTarget.outerWidth < 1024){
          $("#humburger").show();
          $("#contact-button").show();
          $("#contact-button").removeClass('button');
          $("#contact-icon").show();
          $("#contact-text").hide();
          $("#navbar").addClass('navbar-fixed-top');
          $("body").css("padding-top","120px");
          $("#brand-title").addClass('has-text-centered');
          $("#brand-title").css("width","180px");
          $(".brand-pos").css("padding-top","30px");
          $("#brand-subtitle").hide();
      }else{
          $("#humburger").hide();
          $("#contact-button").show();
          $("#contact-button").addClass('button');
          $("#contact-icon").hide();
          $("#contact-text").show();
          $("#navbar").removeClass('navbar-fixed-top');
          $("body").css("padding-top","0px");
          $("#brand-title").removeClass('has-text-centered');
          $(".brand-pos").css("padding-top","0px");
          $("#brand-subtitle").show()

          window.onscroll = scrollOffset
      }
    }
    window.onresize = resizeFun
    window.onload = resizeFun


  }
})
