var MooScrollDepth=new Class({Implements:[Options],options:{debug_mode:false,marks:[0.25,0.50,0.75,1],action_label:'Percentage'},initialize:function(options){this.setOptions(options);this.send_event(self.options.action_label,'baseline');var self=this;window.addEvent('scroll',function(){self.mark_check();});return true;},mark_check:function(){var ssize=window.getScrollSize();var wsize=window.getSize();var spos=window.getScroll();var self=this;this.options.marks.each(function(mark){if((spos.y+wsize.y)>(ssize.y*mark-1)){self.send_event(self.options.action_label,(mark*100)+'%');self.options.marks.splice(self.options.marks.indexOf(mark),1);if(self.options.debug_mode)console.log("Marks is now",self.options.marks);}});return true;},send_event:function(action,label){if(!this.options.debug_mode)_gaq.push(['_trackEvent','Scroll Depth',action,label,1,true]);else console.log(action+': '+label);return true;}});