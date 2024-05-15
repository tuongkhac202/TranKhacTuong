/*!
=========================================================
* Steller Landing page
=========================================================

* Copyright: 2019 DevCRUD (https://devcrud.com)
* Licensed: (https://devcrud.com/licenses)
* Coded by www.devcrud.com

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

// smooth scroll
$(document).ready(function(){
	$(".nav-link").on('click', function(event) {

    	if (this.hash !== "") {

			event.preventDefault();

			var hash = this.hash;

			$('html, body').animate({
				scrollTop: $(hash).offset().top
			}, 700, function(){
				window.location.hash = hash;
			});
      	} 
    });
});

// DOWNLOAD CV
function downloadCV() {
    var file = document.getElementById("myCV");
    var link = document.createElement("a");
    link.href = file.src;
    link.download = "CV-Trần-Khắc-Tường.pdf";
    link.click();
}

// SLICK
$(document).ready(function () {
	$('.my-skills').slick({
		infinite: true,
		speed: 1500,
		slidesToShow: 5,
		slidesToScroll: 5,
		dots: true,
		autoplay: true,
		arrows: false,
		autoplaySpeed: 4000,
		responsive: [
			{
				breakpoint: 1024,
				settings: {
					slidesToShow: 5,
					slidesToScroll: 5,
					infinite: true,
					dots: true
				}
			},
			{
				breakpoint: 750,
				settings: {
					slidesToShow: 4,
					slidesToScroll: 4
				}
			},
			{
				breakpoint: 480,
				settings: {
					slidesToShow: 3,
					slidesToScroll: 3
				}
			}
		]
	});
});
