// кнопка мобильного меню
var mobMenuButton = $('.mobile-menu__btn'),
		mobMenuBlock = $('.mobile-menu-nav-list');
$('.mobile-menu__btn').on('click', function (event) {
	mobMenuBlock.toggleClass('mobile-menu-nav-list--show');
});


// Chosen plugin
$(".chosen-select").chosen({
	width: "262px"
});
// Chosen plugin

new WOW().init();

//jQuery is required to run this code
$(document).ready(function() {

	$('.owl-carousel').owlCarousel({
		items:1,
		merge:true,
		loop:true,
		margin:10,
		video:true,
		lazyLoad:true,
		center:true,
		responsive:{
			480:{
				items:2
			},
			600:{
				items:4
			}
		}
	});

});








// setTimeout(function(){
  
//   var button = document.querySelector("li.slick-active > button");
//   var fillButton = document.createElement("span");
//   fillButton.className += "fillButton";
//   button.insertAdjacentElement("afterEnd", fillButton);

//   var currSlide = document.querySelector("div.slick-current.slick-active");
//   console.log(currSlide);
  
// }, 100);



// .fillButton {
//   position: absolute;
//   top: 7px;
//   left: 0px;
//   display: block;
//   background-color: red;
//   width: 1%;
//   height: 3px;
// }




{/* <section class="main-slider">
<div class="item video">
    <video class="slide-video slide-media" loop muted preload="metadata" poster="https://drive.google.com/uc?export=view&id=0B_koKn2rKOkLSXZCakVGZWhOV00" data-length="7000">
      <source src="https://player.vimeo.com/external/138504815.sd.mp4?s=8a71ff38f08ec81efe50d35915afd426765a7526&profile_id=112" type="video/mp4" />
    </video>
  </div>
 <div class="item video">
    <video class="slide-video slide-media" loop muted preload="metadata" poster="https://drive.google.com/uc?export=view&id=0B_koKn2rKOkLSXZCakVGZWhOV00" data-length="7000">
      <source src="https://player.vimeo.com/external/138504815.sd.mp4?s=8a71ff38f08ec81efe50d35915afd426765a7526&profile_id=112" type="video/mp4" />
    </video>
  </div><div class="item video">
    <video class="slide-video slide-media" loop muted preload="metadata" poster="https://drive.google.com/uc?export=view&id=0B_koKn2rKOkLSXZCakVGZWhOV00">
      <source src="https://player.vimeo.com/external/138504815.sd.mp4?s=8a71ff38f08ec81efe50d35915afd426765a7526&profile_id=112" type="video/mp4" data-length="7000"/>
    </video>
    <p class="caption">HTML 5 Video</p>
  </div>
</section> */}