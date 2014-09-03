(function($) {
   
    function respond() {
        console.log(" mc_global_nav: respond");
        var w = $(window).width();
        // remove inline display styles set by jquery.
        $("header[role=banner] *").removeAttr("style");
        closeUpShop();
        if (w < 800) {
            setUpGlobalNavMobile();
        } else {
            setUpGlobalNavTabletDesk();
        }
    }

    function setUpGlobalNavMobile() {
        console.log("inside mc_global_nav: setUpGlobalNavMobile ");
        $("a.logolink").unbind("click");
       $(".sites_nav > ul").attr('aria-hidden', 'true');
        $("a.logolink").click(function(e) {
            e.preventDefault();
            e.stopPropagation();
            var $myul = $(this).next('ul');
            if ($myul.is(":visible")) {
                 console.log("is vis, now closing ");
                $(this).removeClass('open');
                $($myul).slideUp(300, function() {
                    $(this).removeClass("open");
                    $(this).attr('aria-hidden', 'true');
                });
            } else {
                 console.log("is not visible, now opening ");
                closeUpShop();
                $(this).addClass('open');
                $myul.addClass('open');
                $myul.slideDown(300, function() {
                    $(this).attr('aria-hidden', 'false');
                });
            }
        });
      
        // $(document).click(function(e) {
        //     e.preventDefault();
        //     console.log("clicked anywhere");
        //     $('nav.global li.sites_nav ul').removeClass("open");
        //     $('nav.global li.sites_nav ul').attr('aria-hidden', 'true');
        //     $('nav.global li.sites_nav ul').removeAttr("style");
        //     // Everything with an "open" class should be closed here?
        //     //closeUpShop();
        // });

    }

    function setUpGlobalNavTabletDesk() {
        // the dropdown for navigation among projects 
        $("a.logolink").unbind();
        //$(".sites_nav > ul").attr('aria-hidden', 'false').removeAttr("style");
        $(".sites_nav > ul").removeAttr('aria-hidden').removeAttr("style");
    }

    function closeUpShop() {
        console.log("###  mc_global_nav closeUpShop ");
        /////////

  
        //////////
        // for everything that has the open class, remove it
        $('.open').removeClass("open");
        $('[aria-hidden="false"]').attr('aria-hidden', 'true').removeAttr("style");
       
    }

    function siteHeaderBehavior() {
        console.log("inside mc_global_nav siteHeaderBehavior ");
        // SEARCH
        $('header[role=banner] form[role=search] label').click(function() {
            $theSearchButton = $(this);
            if ($($theSearchButton).parent('form').hasClass("open")) {
                $(this).parent('form').removeClass("open");
                $($theSearchButton).parent('form').find('fieldset').slideUp(300,
                    function() {
                        closeUpShop();
                        $(this).parent('form').removeClass("open");
                    });
            } else {
                $('nav.main ul').slideUp(300, function() {
                    $('header[role=banner] button').removeClass("open");
                    $('header[role=banner] form[role=search] fieldset').slideDown(300,
                        function() {
                            $(this).parent('form').addClass("open");
                        });
                });
            }
        });
        $("header[role=banner] button").click(function() {
            var $theMenuButton = this;
            if ($("nav.main ul").is(":visible")) {
                //console.log(" is visible");
                $('nav.main ul').slideUp(300, function() {
                    $($theMenuButton).removeClass("open");
                });
            } else {
                console.log(" is so  NOT visible");
               // $('header[role=banner] form[role=search] fieldset').slideUp(200,
                  //  function() {
                        $('nav.main ul').slideDown(300, function() {
                            $('header[role=banner] form[role=search]').removeClass("open");
                            $("header[role=banner] button").addClass("open");
                        });
                   // });
            }
        });
    }

    function setUpLoginLink() {
        console.log("i am inside mc_global_nav setUpLoginLink ");
        // Global nav - Login - global behavior
        $('.utils a.login-link').click(function(e) {
            console.log("just clicked ");
            if (!e) {
                e = window.event;
            }
            e.preventDefault();
            if ($(this).next('ul').is(":visible")) {
                console.log("am visible: close me");
                $('.utils a.login-link').removeClass("open");
                $('.utils ul').slideUp(300,
                    function() {
                        $('.utils ul[aria-hidden="false"]').attr('aria-hidden', 'true');
                    });
            } else {
                console.log("am closed: open me");
                closeUpShop();
                $('.utils a.login-link').addClass("open");
                $('.utils ul').slideDown(300,
                    function() {
                        $('.utils ul[aria-hidden="true"]').attr('aria-hidden', 'false').removeAttr("style");
                        console.log("should be open now utils ul[aria-hidden='false'] ");
                    });
            }
        });
    }

    // executed when the DOM is ready
    respond();
    siteHeaderBehavior();
    setUpLoginLink();
    $(window).resize(_.debounce(function() {
        console.log("resized (debounced) from mc_global nav");
        respond();
    }, 100));
    $(window).bind("load", function() {
        // executed once every element of the page is loaded, including fonts
        console.log("assets loaded");
       // respond();

    });
})(jQuery);