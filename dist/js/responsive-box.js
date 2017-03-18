(function ( $ ) {
 
    $.fn.responsiveBox = function( target,options ) {

        var pageWidth, pageHeight;
        var $page = this;
        var $target = $(target);

        // This is the easiest way to have default options.
        var settings = $.extend({
            // These are the defaults.
            width: $target.width(),
            height: $target.height(),
            scale:1
        }, options );

        var basePage = {
            width: settings.width,
            height: settings.height,
            scale: settings.scale
        };

        $(this).addClass("responsive-box-content");
        $(target).addClass("responsive-box-cover");

        $(window).resize(function () {
            
            scalePages($page, $target,basePage);
        });
     
        return this;
 
    };

    function scalePages(page, target, basePage) {
        var scale;
        target = $(target.selector);
        page = $(page.selector);
        maxHeight = target.height();
        maxWidth = target.width();
        scale = Math.min(
            maxWidth / basePage.width,
            maxHeight / basePage.height
          );

        basePage.scale = scale;

        var newLeftPos = Math.abs(Math.floor(((basePage.width * basePage.scale) - maxWidth) / 2));
        var newTopPos = Math.abs(Math.floor(((basePage.height * basePage.scale) - maxHeight) / 2));

        page.attr('style', '-webkit-transform:scale(' + basePage.scale + ');left:' + newLeftPos + 'px;top:' + newTopPos + 'px;');
    }
    
 
}( jQuery ));