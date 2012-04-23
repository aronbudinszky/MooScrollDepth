MooScrollDepth
==============

*A Mootools plugin for sending scroll-depth data to Google Analytics.*

MooScrollDepth uses Google Analytics events to help you generate nice reports of how far users scrolled down within the page.

The idea and some code snippets are based on Rob Flaherty's jQuery plugin:
http://www.ravelrumba.com/blog/tracking-scroll-depth-jquery-google-analytics/

![Screenshot](http://f.cl.ly/items/1M3X3M2i1c2Z0H293U0K/google-analytics-scroll-depth.png)

How to use
----------

The simplest way to get started using MooScrollDepth is to include this line of code after your <body> tag:

	window.addEvent('domready', function(){ var msd = new MooScrollDepth(); });

This will initialize the script with the default options.

Options
-------

MooScrollDepth has three options with which you can customize its behavior: debug_mode, marks, and action_label.

	options: {
		debug_mode: false,				// If set to true, the events will be reported to the console and not sent to Analytics (only works on newish browsers that support console)
		marks: [0.25, 0.50, 0.75, 1],	// The percentages at which to fire an event
		action_label: 'Percentage'		// The 'action' label to apply to Analytics events
	}
	
So for example if you want to report scrolls at every 10% you can init with the following code:

	window.addEvent('domready', function(){ var msd = new MooScrollDepth({
		marks: [0.10, 0.20, 0.30, 0.40, 0.50, 0.60, 0.70, 0.80, 0.90, 1.00]
	}); });
	