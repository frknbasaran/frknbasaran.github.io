Countly = Countly || {};
Countly.onload = Countly.onload || [];
Countly.onload.push(function(){
    
    // helper methods
	var timestamp = function() {
		return Math.round((new Date()).getTime() / 1000);
	} 

	var getRandomInt = function (min, max) {
		return Math.floor(Math.random() * (max - min + 1)) + min;
	}

	var eventObject = {
	    "key":"[CLY]_star_rating",
		"count": 1,
		"segmentation": {
			"contactMe":false, 
			"platform":"web", 
			"app_version":1, 
			"platform_version_rate":"",
			"rating":0,
			"email":"",
			"comment":""
		}
    }

	// append required elements to body
	document.body.innerHTML += '<div class="modal"> <div class="modal-content"> <div class="emotions-area"> <p id="question-area">What is your opinion <br>of this page?</p><span class="emotion-first"><img class="rating-emotion" data-score="1" src="img/0_gray.svg"></span><span class="emotion"><img class="rating-emotion" data-score="2" src="img/1_gray.svg"></span><span class="emotion"><img class="rating-emotion" data-score="3" src="img/2_gray.svg"></span><span class="emotion"><img class="rating-emotion" data-score="4" src="img/3_gray.svg"></span><span class="emotion"><img class="rating-emotion" data-score="5" src="img/4_gray.svg"></span> </div><div class="comment-area"> <div class="input-wrapper"> <input id="comment-show" type="checkbox"> <label for="comment-show">Add Comment</label> <textarea id="countly-feedback-comment-textarea"></textarea> </div><div class="input-wrapper"> <input id="email-show" type="checkbox"> <label for="email-show">Contact me by e-mail</label> <input type="text" id="contact-me-email"> </div></div><div class="buttons-area"><button id="close-button">Cancel</button><button id="send-button">Submit Feedback</button> </div><div class="modal-footer"> <img src="img/powered-by-countly.svg" id="powered-by-countly"> </div></div></div><div id="countly-feedback">Feedback</div><div class="success-modal"> <div class="success-modal-content"> <div class="icon-area"> <i class="fa fa-check fa-2x"></i> </div><div class="emotions-area"> <p id="question-area">Thank you.<br>We received your message.</p></div><div class="buttons-area-on-success"> <button id="continue-button">OK</button> </div><div class="modal-footer"> <img src="img/powered-by-countly.svg" id="powered-by-countly"> </div></div></div>';

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
		document.getElementsByClassName("modal-content")[0].style.display = "block";
	}
	function hideFeedbackPopup() {
		document.getElementsByClassName("modal")[0].style.display = "none";	
	}
	function hideSuccessPopup() {
		document.getElementsByClassName("success-modal")[0].style.display = "none";		
	}
	function rate(e) {
		eventObject["segmentation"].rating = parseInt(modalEmotionImages[e.target.currentIndex].getAttribute('data-score'));
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
	// This method on hold for now
	function sendFeedback() {
		eventObject["segmentation"].comment = document.getElementById('countly-feedback-comment-textarea').value;
		eventObject["segmentation"].email = document.getElementById('contact-me-email').value;
		Countly._internals.add_cly_events(eventObject);
		document.getElementsByClassName("success-modal")[0].style.display = "block";	
		document.getElementsByClassName("success-modal-content")[0].style.display = "block";	
		document.getElementsByClassName("modal")[0].style.display = "none";	
		document.getElementsByClassName("modal-content")[0].style.display = "none";	
	}

	// event handler for countly feedback show comment area checkbox
	// show hide comment area
	Countly._internals.add_event(showCommentCheckbox, 'change', showHideCommentArea);
	
	// event handler for countly feedback show comment area checkbox
	// show hide comment area
	Countly._internals.add_event(showEmailCheckbox, 'change', showHideEmailArea);

	// event handler for countly feedback sticky button
	// show modal
	Countly._internals.add_event(stickyButton, 'click', showFeedbackPopup);
	
	// event handler for countly feedback sticky button
	// show modal
	Countly._internals.add_event(continueButton, 'click', hideSuccessPopup);

	// event handler for countly feedback modal closer
	// hide modal
	Countly._internals.add_event(modalCloseButton, 'click', hideFeedbackPopup);
	
	// event handler for countly feedback sender
	// send feedback
	Countly._internals.add_event(sendButton, 'click', sendFeedback);
	
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
});
