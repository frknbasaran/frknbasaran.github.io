$(function() {

	var constants = {
		server_url:"https://furkan.count.ly",
		app_key:"ba551f90d219c54a0c631a064ab592f3eefe4b35"
	}
	
	var ts = Math.round((new Date()).getTime() / 1000);

	var getRandomInt = function (min, max) {
		return Math.floor(Math.random() * (max - min + 1)) + min;
	}
	/*
		Prepare SDK request data object
	*/
	var event = {"key":"[CLY]_star_rating",  "count": 1, "timestamp":  ts, "hour": getRandomInt(0, 23), "dow": getRandomInt(0, 6), "segmentation":{"contactMe":false, "platform":"web", "app_version":1, "platform_version_rate":"","rating":0,"email":"","comment":""}};
	/*
		Inject required elements
	*/
	$('body').append('<div class="modal"><div class="modal-content"><div class="countly-feedback-modal-header"><img src="https://count.ly/images/logos/countly-logo.svg"><h3>Your Feedback</h3></div><div class="emotions-area"><p class="question-area">What is your opinion of this page?</p><span class="emotion"><img data-score="1" src="img/1.png"></span><span class="emotion"><img data-score="2" src="img/2.png"></span><span class="emotion"><img data-score="3" src="img/3.png"></span><span class="emotion"><img data-score="4" src="img/4.png"></span><span class="emotion"><img data-score="5" src="img/5.png"></span></div><div class="comment-area"><p class="question-area">Would you like to add a comment?</p><textarea id="countly-feedback-comment-textarea" placeholder="Your comment"></textarea></div><div class="contact-me-area"><div class="input-area"><input type="checkbox" id="contact-me-checkbox"> Contact Me</div><div class="input-area"><input type="text" id="contact-me-email" placeholder="Contact email address"></div></div><div class="buttons-area"><button id="send-button">Send Feedback</button> <button id="close-button">Cancel</button></div></div></div><div class="countly-feedback">Feedback</div>');
	/*
		Event Handlers
	*/
	$('.countly-feedback').on('click', function() { $('.modal').css({"display":"block"}); });
	$('#close-button').on('click', function() { $('.modal').css({"display":"none"}); });
	$('#contact-me-checkbox').on('change', function() {
		if ($(this).is(':checked')) {
			event["segmentation"].contactMe = true;
			$('#contact-me-email').css({"display":"block"});
		} else {
			event["segmentation"].contactMe = false;
			$('#contact-me-email').css({"display":"none"});
		}
	});
	$('.emotion > img').on('click', function() {
		event["segmentation"].rating = parseInt($(this).data('score'));
		$('.emotion > img').animate({ opacity: 0.5, height: 40, width:40 }, 250, function(){});
		$(this).animate({ opacity: 1, height: 45, width:45}, 250, function() {});
	})
	$('#send-button').on('click', function() {
		event["segmentation"].comment = $("#countly-feedback-comment-textarea").val().trim();
		event["segmentation"].email = $("#contact-me-email").val().trim();
		$.ajax({
			"method":"POST",
			"url": constants.server_url + "/i",
			"data": {"method":"star","events":JSON.stringify([event]), "app_key":constants.app_key, "device_id":1,"timestamp":ts},
			dataType:'json'
		})
		.then(function(response) {
			$('.modal').css({"display":"none"});
		})
	})
})