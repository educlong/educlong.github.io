/*!
* Start Bootstrap - Resume v7.0.2 (https://startbootstrap.com/theme/resume)
* Copyright 2013-2021 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-resume/blob/master/LICENSE)
*/
//
// Scripts
// 

window.addEventListener('DOMContentLoaded', event => {

    // Activate Bootstrap scrollspy on the main nav element
    const sideNav = document.body.querySelector('#sideNav');
    if (sideNav) {
        new bootstrap.ScrollSpy(document.body, {
            target: '#sideNav',
            offset: 74,
        });
    };

    // Collapse responsive navbar when toggler is visible
    const navbarToggler = document.body.querySelector('.navbar-toggler');
    const responsiveNavItems = [].slice.call(
        document.querySelectorAll('#navbarResponsive .nav-link')
    );
    responsiveNavItems.map(function (responsiveNavItem) {
        responsiveNavItem.addEventListener('click', () => {
            if (window.getComputedStyle(navbarToggler).display !== 'none') {
                navbarToggler.click();
            }
        });
    });

    
    $(".started-content a.btnPage.btnContact").click(function(event){ /*nth-child: tức là 4th,5th -> số thứ tự. lấy các phầntử trong thẻ li*/
		// event.preventDefault();	/*prevent: chặn, Default: mặc định --> chặn mặc định trỏ đến page # (ở đây thẻ a -> chặn k cho đến thẻ a)*/
		$("html").animate({ scrollTop: $(".section.contacts").offset().top }, 1000);/*xử lý cuộn chuột trong html. Hàm scrollTop --> cuộn*/
	});	/*chuột xuống dưới đến tận vị trí của div có class là chapter1OnePage $(".chapter1OnePage").offset().top*/		/*1000 --> tốc độ 1s*/
});



