/*
 * name: 	LinkIt
 * author: 	Daniel Espley
 * version: 0.1.0
 * license: MIT
 */
 
(function($)
{
	$.fn.linkIt = function(options)
	{
		// Default settings
		var settings = $.extend(
		{
			href : null
		}, 
		options);

		// Validate
		if (settings.href == null)
		{
			console.log('You need an href option for linkIt to work.');
			return this;
		}

		return this.each(function()
		{
			var span = $(this);
			// Use text in <span> tag if none supplied in settings
			if (settings.text == null)
			{
				settings.text = span.text(); 
			}
			span.wrap('<a href="' + settings.href +'" target="' + settings.target + '"></a>')
			    .text(settings.text);
		});
	}
} (jQuery) );