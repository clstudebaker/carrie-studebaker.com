window.onload = greeting;


function greeting() {
	document.getElementById("content").innerHTML="I love Photography & Spreadsheets. My study interests are Mandarin & Programming.";
}


function about() {
	document.getElementById("content").innerHTML="I love Photography & Spreadsheets. My study interests are Mandarin & Programming.";
}



function contact() {
	document.getElementById("content").innerHTML="<p>clstudebaker@gmail.com</p>"
}



function projects() {
	document.getElementById("content").innerHTML="<p>Projects</p>\n\n<p><a href=\"http://willcodeforcupcakes.com/\" target=\"_blank\">http://willcodeforcupcakes.com</a></p>\n<p><a href=\"https://github.com/clstudebaker\" target=\"_blank\">Github</a></p>"
}

/*This is all related to the slide show html & function*/
function slideshow() {  
    document.getElementById("content").innerHTML="<div class=\"slideshow-container\"><div class=\"mySlides\"><img src=\"https://s3-us-west-1.amazonaws.com/carrie-studebaker.com/images/1.JPG\" style=\"width:100%\"></div><div class=\"mySlides\"><img src=\"https://s3-us-west-1.amazonaws.com/carrie-studebaker.com/images/2.JPG\" style=\"width:100%\"></div><div class=\"mySlides\"><img src=\"https://s3-us-west-1.amazonaws.com/carrie-studebaker.com/images/3.JPG\" style=\"width:100%\"></div><div class=\"mySlides\"><img src=\"https://s3-us-west-1.amazonaws.com/carrie-studebaker.com/images/4.JPG\" style=\"width:100%\"></div><div class=\"mySlides\"><img src=\"https://s3-us-west-1.amazonaws.com/carrie-studebaker.com/images/5.JPG\" style=\"width:100%\"></div><div class=\"mySlides\"><img src=\"https://s3-us-west-1.amazonaws.com/carrie-studebaker.com/images/6.JPG\" style=\"width:100%\"></div><div class=\"mySlides\"><img src=\"https://s3-us-west-1.amazonaws.com/carrie-studebaker.com/images/7.JPG\" style=\"width:100%\"></div>"
	
	/*<a class=\"prev\" onclick=\"plusSlides(-1)\">&#10094;</a><a class=\"next\" onclick=\"plusSlides(1)\">&#10095;</a></div>\""
window.onload = showSlides;*/
var slideIndex = 0;
showSlides();

function showSlides() {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > slides.length) {slideIndex = 1}
    slides[slideIndex-1].style.display = "block";
    setTimeout(showSlides, 2500); // Change image every 2 seconds
} 

}
/* this is the end of the slideshow*/

