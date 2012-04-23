/*
---
description: Element class, Elements class, and basic dom methods.

license: MIT-style

authors:
- Aron Budinszky <aron@outlast.hu>

requires:
- localComponent1
- [localComponent2, localComponent3]
- externalPackage1/tag: component4
- externalPackage2/tag: [component1, component2]

provides: [MooScrollDepth]

...
*/
var MooScrollDepth = new Class({
	
	Implements: [Options, Events],
	
	options: {
		debug_mode: false,
		marks: [0.25, 0.50, 0.75, 1]
	},
	
	/**
	 * Init the method.
	 **/
	initialize: function(options){
		this.setOptions(options);
		this.send_event('Percentage', 'baseline');
		// Add scroll event
		var self = this;
		window.addEvent('scroll', function(){ self.mark_check(); });
		return true;
	},
	
	/**
	 * Check if mark hit.
	 **/
    mark_check: function() {
		// Calculate window height
			var ssize = window.getScrollSize();
			var wsize = window.getSize();
			var spos = window.getScroll();
			var self = this;
		// Did I pass any marks
			this.options.marks.each(function(mark){
				if((spos.y + wsize.y) > (ssize.y * mark - 1)){
					// Send event in percent
						self.send_event('Percentage', (mark*100)+'%');
					// Mark me as sent
						self.options.marks.splice(self.options.marks.indexOf(mark), 1);
						if(self.options.debug_mode) console.log("Marks is now", self.options.marks);
				}			
			});
		return true;
    },

	
	/**
	 * Send a google analytics event.
	 **/
	send_event: function(action, label){
		if(!this.options.debug_mode) _gaq.push(['_trackEvent', 'Scroll Depth', action, label, 1, true]);
		else console.log(action + ': ' + label);
		return true;
	}
	
});