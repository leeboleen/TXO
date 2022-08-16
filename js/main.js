            

            // force scroll pos to top on refresh

	            window.onbeforeunload = function () {
	              window.scrollTo(0, 0);
	            }

            
            // slide caption

	            $(document).ready(function(){
	              $("#hide_txt").click(function(){
	                $(".cn").slideUp();
	              });
	              $("#show_txt").click(function(){
	                $(".cn").slideDown();
	              });
	            });


            
            // Get active gallery image - to assign caption txt
            
	            document.getElementById("name-txt").innerHTML = "Office 1";
	            document.getElementById("availability-txt").innerHTML = "[Seasonal]";

	            document.getElementById("name-txt-full").innerHTML = "Office 1";
	            document.getElementById("location-txt-full").innerHTML = "[Poplar]";
	            document.getElementById("availability-txt-full").innerHTML = "[Winter]";
	            document.getElementById("size-txt-full").innerHTML = "[4,200] sqft";
	            document.getElementById("info-txt-full").innerHTML = "This modern office space houses a clean aesthetic, with it's white walls and spacious decor.";

	            const prev1 = document.getElementById("prev1");
	            const next1 = document.getElementById("next1");

	            prev1.onclick = function () {
	            	document.getElementById("name-txt").innerHTML = "Office 5";
	            	document.getElementById("availability-txt").innerHTML = "[Now]";

		            document.getElementById("name-txt-full").innerHTML = "Office 5";
		            document.getElementById("location-txt-full").innerHTML = "[Bristol]";
		            document.getElementById("availability-txt-full").innerHTML = "[Now]";
		            document.getElementById("size-txt-full").innerHTML = "[6,950] sqft";
		            document.getElementById("info-txt-full").innerHTML = "The simpler aesthetic of this space gives for a more relaxed feel with comfort considered.";
	            }

	            next1.onclick = function () {
	            	document.getElementById("name-txt").innerHTML = "Office 2";
		            document.getElementById("availability-txt").innerHTML = "[2023]";

		            document.getElementById("name-txt-full").innerHTML = "Office 2";
		            document.getElementById("location-txt-full").innerHTML = "[NYC]";
		            document.getElementById("availability-txt-full").innerHTML = "[Summer 2023]";
		            document.getElementById("size-txt-full").innerHTML = "[3,670] sqft";
		            document.getElementById("info-txt-full").innerHTML = "Front-of-house focused, this space gives a more open feel for a better sense of collaboration.";
	            }

	            const prev2 = document.getElementById("prev2");
	            const next2 = document.getElementById("next2");

	            prev2.onclick = function () {
	            	document.getElementById("name-txt").innerHTML = "Office 1";
		            document.getElementById("availability-txt").innerHTML = "[Seasonal]";

		            document.getElementById("name-txt-full").innerHTML = "Office 1";
		            document.getElementById("location-txt-full").innerHTML = "[Poplar]";
		            document.getElementById("availability-txt-full").innerHTML = "[Winter]";
		            document.getElementById("size-txt-full").innerHTML = "[4,200] sqft";
		            document.getElementById("info-txt-full").innerHTML = "This modern office space houses a clean aesthetic, with it's white walls and spacious decor.";
	            }

	            next2.onclick = function () {
	            	document.getElementById("name-txt").innerHTML = "Office 3";
		            document.getElementById("availability-txt").innerHTML = "[2024]";

		            document.getElementById("name-txt-full").innerHTML = "Office 3";
		            document.getElementById("location-txt-full").innerHTML = "[Manchester]";
		            document.getElementById("availability-txt-full").innerHTML = "[Spring 2024]";
		            document.getElementById("size-txt-full").innerHTML = "[9,200] sqft";
		            document.getElementById("info-txt-full").innerHTML = "A great example of a juxtaposition between an industrial decor and a modern, flawless design.";
	            }

	            const prev3 = document.getElementById("prev3");
	            const next3 = document.getElementById("next3");

	            prev3.onclick = function () {
	            	document.getElementById("name-txt").innerHTML = "Office 2";
		            document.getElementById("availability-txt").innerHTML = "[2023]";

		            document.getElementById("name-txt-full").innerHTML = "Office 2";
		            document.getElementById("location-txt-full").innerHTML = "[NYC]";
		            document.getElementById("availability-txt-full").innerHTML = "[Summer 2023]";
		            document.getElementById("size-txt-full").innerHTML = "[3,670] sqft";
		            document.getElementById("info-txt-full").innerHTML = "Front-of-house focused, this space gives a more open feel for a better sense of collaboration.";
	            }

	            next3.onclick = function () {
	            	document.getElementById("name-txt").innerHTML = "Office 4";
		            document.getElementById("availability-txt").innerHTML = "[Now]";

		            document.getElementById("name-txt-full").innerHTML = "Office 4";
		            document.getElementById("location-txt-full").innerHTML = "[Soho]";
		            document.getElementById("availability-txt-full").innerHTML = "[Now]";
		            document.getElementById("size-txt-full").innerHTML = "[8,200] sqft";
		            document.getElementById("info-txt-full").innerHTML = "Parellels between a 70s design and modern revitalization, make this space open to all possibilities.";
	            }

	            const prev4 = document.getElementById("prev4");
	            const next4 = document.getElementById("next4");

	            prev4.onclick = function () {
	            	document.getElementById("name-txt").innerHTML = "Office 3";
		            document.getElementById("availability-txt").innerHTML = "[2024]";

		            document.getElementById("name-txt-full").innerHTML = "Office 3";
		            document.getElementById("location-txt-full").innerHTML = "[Manchester]";
		            document.getElementById("availability-txt-full").innerHTML = "[Spring 2024]";
		            document.getElementById("size-txt-full").innerHTML = "[9,200] sqft";
		            document.getElementById("info-txt-full").innerHTML = "A great example of a juxtaposition between an industrial decor and a modern, flawless design.";
	            }

	            next4.onclick = function () {
	            	document.getElementById("name-txt").innerHTML = "Office 5";
	            	document.getElementById("availability-txt").innerHTML = "[Now]";

		            document.getElementById("name-txt-full").innerHTML = "Office 5";
		            document.getElementById("location-txt-full").innerHTML = "[Bristol]";
		            document.getElementById("availability-txt-full").innerHTML = "[Now]";
		            document.getElementById("size-txt-full").innerHTML = "[6,950] sqft";
		            document.getElementById("info-txt-full").innerHTML = "The simpler aesthetic of this space gives for a more relaxed feel with comfort considered.";
	            }

	            const prev5 = document.getElementById("prev5");
	            const next5 = document.getElementById("next5");

	            prev5.onclick = function () {
	            	document.getElementById("name-txt").innerHTML = "Office 4";
		            document.getElementById("availability-txt").innerHTML = "[Now]";

		            document.getElementById("name-txt-full").innerHTML = "Office 4";
		            document.getElementById("location-txt-full").innerHTML = "[Soho]";
		            document.getElementById("availability-txt-full").innerHTML = "[Now]";
		            document.getElementById("size-txt-full").innerHTML = "[8,200] sqft";
		            document.getElementById("info-txt-full").innerHTML = "Parellels between a 70s design and modern revitalization, make this space open to all possibilities.";
	            }

	            next5.onclick = function () {
	            	document.getElementById("name-txt").innerHTML = "Office 1";
		            document.getElementById("availability-txt").innerHTML = "[Seasonal]";

		            document.getElementById("name-txt-full").innerHTML = "Office 1";
		            document.getElementById("location-txt-full").innerHTML = "[Poplar]";
		            document.getElementById("availability-txt-full").innerHTML = "[Winter]";
		            document.getElementById("size-txt-full").innerHTML = "[4,200] sqft";
		            document.getElementById("info-txt-full").innerHTML = "This modern office space houses a clean aesthetic, with it's white walls and spacious decor.";
	            }


	            // @Comment:
	            // Apologies for this being horribly hard-coded! 
	            // Tried to use a loop for this and a dynamic change element innerHTML script, depending on gallery imnage .style.display = 'block' 
	            // but had dificulties, as using div background image

            
            // mob-nav overlay 100%

	            function openNav() {
	              document.getElementById("myNav").style.width = "100%";
	            }

	            function closeNav() {
	              document.getElementById("myNav").style.width = "0%";
	            }

            

            // Show/Hide more text on gallery caption

	            const btn = document.getElementById("show_txt");
	            const btn2 = document.getElementById("hide_txt");

	            btn.onclick = function () {
	                document.getElementById("caption_full").style.display = 'block'
	                document.getElementById("hide_txt").style.display = 'block';

	                document.getElementById("caption").style.display = 'none';
	                document.getElementById("show_txt").style.display = 'none';
	                
	                document.getElementById("spacer").style.paddingTop = "200px";
	                document.getElementById("spacer").style.transition = "all .5s ease-in-out";
	            };

	            btn2.onclick = function () {
	                document.getElementById("caption_full").style.display = 'none';
	                document.getElementById("hide_txt").style.display = 'none';
	                
	                document.getElementById("caption").style.display = 'flex';
	                document.getElementById("show_txt").style.display = 'flex';

	                document.getElementById("spacer").style.paddingTop = "20px";
	                document.getElementById("spacer").style.transition = "all .5s ease-in-out";
	            };


            
            // resize TOX logo on scroll

	            let logoTl = gsap.timeline({
	              scrollTrigger: {
	                trigger: document.body,
	                start: 0,
	                end: () => window.innerHeight * 0.9,
	                scrub: 0.6
	              }
	            });

	            logoTl.fromTo('.fst', {
	              scale: 1,
	            }, {
	              top: '0',
	              left: '0',
	              yPercent: -35,
	              xPercent: -37,
	              scale: 0.2,
	              duration: 0.8
	            });

            
            
            // fade-in intro txt

	            gsap.registerPlugin(ScrollTrigger);

	            gsap.to('header', { autoAlpha: 1, 
	                scrollTrigger: {
	                  class: 'header',
	                  trigger: '.scrollTriggerLogo',
	                  start: '30 top+=50',
	                  end: '+=750',
	                  scrub: true
	                  //markers: true
	                } 
	            });


            
            // fade-in hero txt

	            gsap.to('.hero', { autoAlpha: 1, 
	                scrollTrigger: {
	                  class: '.hero',
	                  trigger: '.scrollTriggerLogo',
	                  start: 'top+=200 top+=90',
	                  end: '+=700',
	                  scrub: true
	                  //markers: true
	                } 
	            });


            
            // fade-in form-title txt

	            /* gsap.to('.stay-updated', { autoAlpha: 1, 
	                 scrollTrigger: {
	                   class: '.stay-updated',
	                   trigger: '.hero',
	                   start: 'top-=500 top+=90',
	                   end: '+=300',
	                   scrub: true
	                   //markers: true
	                 } 
	             });    */

            // @TODO:
            // Align 'stay updated' text to sit fixed on bottom scroll point but only fade-in bottom/left in sub-hero section

            
            // apply sticky section for scroll animation timeline

	            var tl = new TimelineMax({onUpdate:updatePercentage});
	            var tl2 = new TimelineMax();
	            const controller = new ScrollMagic.Controller();

	            const scene2 = new ScrollMagic.Scene({
	              triggerElement: "navbar"
	            })
	              
	              .setPin(".navbar")
	              .setTween(tl2)
	                    .addTo(controller);


	            const scene3 = new ScrollMagic.Scene({
	              triggerElement: "main-logo"
	            })

	              .setPin(".fst")
	                .addTo(controller);


	            const scene4 = new ScrollMagic.Scene({
	              triggerElement: "sub-hero"
	            })

	              .setPin(".stay-updated")
	                .addTo(controller);


	            function updatePercentage() {
	              //percent.innerHTML = (tl.progress() *100 ).toFixed();
	              tl.progress();
	              console.log(tl.progress());
	            }

            
            
            // Gallery carousel script

	            let slideIndex = 1;
	            showSlides(slideIndex);

	            function plusSlides(n) {
	              showSlides(slideIndex += n);
	            }

	            function currentSlide(n) {
	              showSlides(slideIndex = n);
	            }

	            function showSlides(n) {
	              let i;
	              let slides = document.getElementsByClassName("mySlides");
	              let dots = document.getElementsByClassName("dot");
	              if (n > slides.length) {slideIndex = 1}    
	              if (n < 1) {slideIndex = slides.length}
	              for (i = 0; i < slides.length; i++) {
	                slides[i].style.display = "none";  
	              }
	              for (i = 0; i < dots.length; i++) {
	                dots[i].className = dots[i].className.replace(" active", "");
	              }
	              slides[slideIndex-1].style.display = "block";
	              dots[slideIndex-1].className += " active";
	            }

