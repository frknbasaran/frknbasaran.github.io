(function() {
	// available methods
	// ga('send','event','category','action','label');
	// ga('send',{hitType:'event',eventCategory:val, eventAction:val, eventLabel:val});
	// ga('send','pageview');
	window.CountlyGAListener = function() {
		var old_ga = window.ga;
		window.ga = function(c,o,u,n,t,l,y) {
			switch (c) {
				case 'send':
					if (typeof o === 'string') {
						if (o == 'event') {
							console.log('ga("send","event",..)');
							if (u) {
								var category = u;
								var action = n;
								var label = t;

								Countly.q.push(['add_event',{
									key:action, 
									segmentation: {
										'category':category,
										'action': action,
										'label': label
									}
								}]);
							}
						}
						if (o == 'pageview') {
							console.log('ga("send","pageview")');
							Countly.q.push(['track_pageview']);
						}
					} else if (typeof o === 'object') {
						if (o.hitType == 'event') {
							console.log('ga("send",{"hitType":"event",".."})');
							var category = o.eventCategory;
							var action = o.eventAction;
							var label = o.eventLabel;
							Countly.q.push(['add_event',{
								key:action, 
								segmentation: {
									'category':category,
									'action': action,
									'label': label
								}
							}]);
						}
					}
					break;
			}
			return old_ga.apply(this, arguments);
		}
		window.ga._signature = 1;
	}
	setTimeout(function check() {
		if(!ga._signature) return CountlyGAListener();
		setTimeout(check, 125);
	}, 125);
})();