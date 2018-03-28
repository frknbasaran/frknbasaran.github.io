
// init variables
var constants = {
	server_url:"https://furkan.count.ly",
	app_key:"ba551f90d219c54a0c631a064ab592f3eefe4b35"
}

// helper methods
var timestamp = function() {
	return Math.round((new Date()).getTime() / 1000);
} 

var getRandomInt = function (min, max) {
	return Math.floor(Math.random() * (max - min + 1)) + min;
}

// prepare SDK request data object
var requestObject = {
	"key":"[CLY]_star_rating",
	"count": 1,
	"timestamp": timestamp(), 
	"hour": getRandomInt(0, 23), 
	"dow": getRandomInt(0, 6), 
	"segmentation": {
		"contactMe":false, 
		"platform":"web", 
		"app_version":1, 
		"platform_version_rate":"",
		"rating":0,
		"email":"",
		"comment":""
	}
};

// append required elements to body
document.body.innerHTML += '<div class="modal"> <div class="modal-content"> <div class="emotions-area"> <p id="question-area">What is your opinion of this page?</p><span class="emotion"><img class="rating-emotion" data-score="1" src="img/0_gray.svg"></span><span class="emotion"><img class="rating-emotion" data-score="2" src="img/1_gray.svg"></span><span class="emotion"><img class="rating-emotion" data-score="3" src="img/2_gray.svg"></span><span class="emotion"><img class="rating-emotion" data-score="4" src="img/3_gray.svg"></span><span class="emotion"><img class="rating-emotion" data-score="5" src="img/4_gray.svg"></span> </div><div class="comment-area"> <div class="input-wrapper"> <input id="comment-show" type="checkbox"> <label for="comment-show">Add Comment</label> <textarea id="countly-feedback-comment-textarea"></textarea> </div><div class="input-wrapper"> <input id="email-show" type="checkbox"> <label for="email-show">Contact me by e-mail</label> <input type="text" id="contact-me-email"> </div></div><div class="buttons-area"><button id="close-button">Cancel</button><button id="send-button">Submit Feedback</button> </div><div class="modal-footer"> <img src="img/powered-by-countly.svg" id="powered-by-countly"> </div></div></div><div id="countly-feedback">Feedback</div><div class="success-modal"> <div class="success-modal-content"> <div class="icon-area"> <i class="fa fa-check fa-2x"></i> </div><div class="emotions-area"> <p id="question-area">Thank you.<br>We received your message.</p></div><div class="buttons-area-on-success"> <button id="continue-button">OK</button> </div><div class="modal-footer"> <img src="img/powered-by-countly.svg" id="powered-by-countly"> </div></div></div>';

// countly feedback elements 
var stickyButton = document.getElementById('countly-feedback');
var modalCloseButton = document.getElementById('close-button');
var contactMeCheckbox = document.getElementById('contact-me-checkbox');
var contactMeEmailInput = document.getElementById('contact-me-email');
var modalEmotionImages = document.getElementsByClassName('rating-emotion');
var sendButton = document.getElementById('send-button');
var showCommentCheckbox = document.getElementById('comment-show');
var showEmailCheckbox = document.getElementById('email-show');
var continueButton = document.getElementById('continue-button');

function showFeedbackPopup() {
	document.getElementsByClassName("modal")[0].style.display = "block";
}
function hideFeedbackPopup() {
	document.getElementsByClassName("modal")[0].style.display = "none";	
}
function hideSuccessPopup() {
	document.getElementsByClassName("success-modal")[0].style.display = "none";		
}
function rate(e) {
	requestObject["segmentation"].rating = parseInt(modalEmotionImages[e.target.currentIndex].getAttribute('data-score'));
	for (var i = 0; i < modalEmotionImages.length; i++) {
		modalEmotionImages[i].src = 'img/' + i + '_gray.svg';
	}
	modalEmotionImages[e.target.currentIndex].src = 'img/' + e.target.currentIndex + '_color.svg';	
}
function showHideCommentArea() {
	if (document.getElementById('comment-show').checked) {
		document.getElementById('countly-feedback-comment-textarea').style.display = "block";	
	} else document.getElementById('countly-feedback-comment-textarea').style.display = "none";
}
function showHideEmailArea() {
	if (document.getElementById('email-show').checked) {
		document.getElementById('contact-me-email').style.display = "block";	
	} else document.getElementById('contact-me-email').style.display = "none";
}
// TODO: form verification
function sendFeedback() {
	requestObject["segmentation"].comment = document.getElementById('countly-feedback-comment-textarea').value;
	requestObject["segmentation"].email = document.getElementById('contact-me-email').value;
	try {
		x = new(XMLHttpRequest || ActiveXObject)('MSXML2.XMLHTTP.3.0');
		x.open('POST', constants.server_url + "/i", 1);
		x.setRequestHeader("Content-Type", "x-www-form/urlencoded");
		x.onreadystatechange = function () {
			console.log(x.responseText);
		};
		x.send({"method":"star","events":JSON.stringify([requestObject]), "app_key":constants.app_key, "device_id":1,"timestamp":timestamp()});
	} catch (e) {
		window.console && console.log(e);
	}
	document.getElementsByClassName('success-modal')[0].style.display = "block";
	document.getElementsByClassName('modal')[0].style.display = "none";
	document.getElementsByClassName('modal-content')[0].style.display = "none";		
	document.getElementsByClassName('success-modal-content')[0].style.display = "block";
}

// event handler for countly feedback show comment area checkbox
// show hide comment area
if(showCommentCheckbox.addEventListener) 
	showCommentCheckbox.addEventListener('change', showHideCommentArea, false);
// this is for IE, because it doesn't support addEventListener
else if(showCommentCheckbox.attachEvent) 
	// this strange part for making the keyword 'this' indicate the clicked anchor
	showCommentCheckbox.attachEvent('onchange', function(){ return showHideCommentArea.apply(showCommentCheckbox, [window.event])}); 

// event handler for countly feedback show comment area checkbox
// show hide comment area
if(showEmailCheckbox.addEventListener) 
	showEmailCheckbox.addEventListener('change', showHideEmailArea, false);
// this is for IE, because it doesn't support addEventListener
else if(showEmailCheckbox.attachEvent) 
	// this strange part for making the keyword 'this' indicate the clicked anchor
	showEmailCheckbox.attachEvent('onchange', function(){ return showHideEmailArea.apply(showEmailCheckbox, [window.event])}); 

// event handler for countly feedback sticky button
// show modal
if(stickyButton.addEventListener) 
	stickyButton.addEventListener('click', showFeedbackPopup, false);
// this is for IE, because it doesn't support addEventListener
else if(stickyButton.attachEvent) 
	// this strange part for making the keyword 'this' indicate the clicked anchor
	countlyFeedbackStickyButton.attachEvent('onclick', function(){ return showFeedbackPopup.apply(countlyFeedbackStickyButton, [window.event])}); 		

// event handler for countly feedback sticky button
// show modal
if(continueButton.addEventListener) 
	continueButton.addEventListener('click', hideSuccessPopup, false);
// this is for IE, because it doesn't support addEventListener
else if(continueButton.attachEvent) 
	// this strange part for making the keyword 'this' indicate the clicked anchor
	continueButton.attachEvent('onclick', function(){ return hideSuccessPopup.apply(continueButton, [window.event])}); 		

// event handler for countly feedback modal closer
// hide modal
if(modalCloseButton.addEventListener) 
	modalCloseButton.addEventListener('click', hideFeedbackPopup, false);
// this is for IE, because it doesn't support addEventListener
else if(modalCloseButton.attachEvent) 
	// this strange part for making the keyword 'this' indicate the clicked anchor
	modalCloseButton.attachEvent('onclick', function() { return hideFeedbackPopup.apply(modalCloseButton, [window.event])}); 	

// event handler for countly feedback sender
// send feedback
if(sendButton.addEventListener) 
	sendButton.addEventListener('click', sendFeedback, false);
// this is for IE, because it doesn't support addEventListener
else if(sendButton.attachEvent) 
	// this strange part for making the keyword 'this' indicate the clicked anchor
	sendButton.attachEvent('onclick', function() { return sendFeedback.apply(sendButton, [window.event])}); 	

// event handler for countly feedback emotion img
// rate for feedback
for (var i = 0; i < modalEmotionImages.length; i++) {
	if(modalEmotionImages[i].addEventListener) {
		modalEmotionImages[i].addEventListener('click', rate, false);
		modalEmotionImages[i].currentIndex = i;
	}
	// this is for IE, because it doesn't support addEventListener
	else if(modalEmotionImages[i].attachEvent) {
		// this strange part for making the keyword 'this' indicate the clicked anchor
		modalEmotionImages[i].attachEvent('onclick', function() { return rate.apply(modalCloseButton, [window.event])}); 	
		modalEmotionImages[i].currentIndex = i;
	}
}
