(function($) {
    function respond() {
        console.log("lmh inside mc_global_nav: respond");
        var w = $(window).width();
        // remove inline display styles set by jquery.
        $("header[role=banner] *").removeAttr("style");
        closeUpShop();
        if (w < 600) {
            setUpGlobalNavMobile();
        } else {
            setUpGlobalNavTabletDesk();
        }
    }

    function setUpGlobalNavMobile() {
        console.log("inside mc_global_nav: setUpGlobalNavMobile ");
        $("a.logolink").unbind("click");
        $("a.drop-down").remove();
        $(".navitems2 ul").children().unwrap().unwrap();
        $("a.logolink").click(function(e) {
            e.preventDefault();
            e.stopPropagation();
            var $myul = $(this).next('ul');
            if ($($myul).is(":visible")) {
                $(this).removeClass('open');
                $($myul).slideUp(300, function() {
                    $(this).removeClass("open");
                    $(this).attr('aria-hidden', 'true');
                });
            } else {
                closeUpShop();
                $(this).addClass('open');
                $($myul).addClass('open');
                $($myul).slideDown(300, function() {
                    $(this).attr('aria-hidden', 'false');
                });
            }
        });
        $("a.logolink").blur(function() {
            $('ul.navitems').toggleClass("open", false, 100);

        });
        $(document).click(function(e) {
            e.preventDefault();
            console.log("clicked anywhere");
            $('nav.global li.sites_nav ul').removeClass("open");
            $('nav.global li.sites_nav ul').attr('aria-hidden', 'true');
            $('nav.global li.sites_nav ul').removeAttr("style");
            // Everything with an "open" class should be closed here?
            //closeUpShop();
        });

    }

    function setUpGlobalNavTabletDesk() {
        $(".sites_nav > ul").removeAttr("style");
        $(".sites_nav > ul").attr('aria-hidden', 'false');
        $("a.logolink").unbind();
        $(document).unbind("click");
        $("a.drop-down").remove();
        $(".navitems2 ul").children().unwrap().unwrap();
        var widthSum = 0;
        var spaceWidth = ($("nav.global").width() - $("a.logolink.mc-logo").width() - $("li.utils").width()) - 125;
        console.log('$("nav.global").width() ' + $("nav.global").width() + ' ||| a.logolink.mc-logo ' + $("a.logolink.mc-logo").width() + ' ||| $("li.utils").width()' + $("li.utils").width());
        console.log("inside mc_global_nav setUpGlobalNavTabletDesk ");
        $("nav.global li.sites_nav li").each(function(index) {
            widthSum += $(this).width();
            if (widthSum > spaceWidth) {
                $(this).nextAll('li').addBack().wrapAll("<li class='navitems2' role='menuitem'><ul class='more-items'></ul><li>");
                $('.navitems2').prepend('<a class="drop-down" href="#">More</a>');

                $("a.drop-down").click(function() {
                    $('.navitems2').toggleClass("open");
                    $('.navitems').toggleClass("open");
                    $(this).toggleClass("open");

                });
                return false;
            }
        });
    }

    function closeUpShop() {
        console.log("lmh inside mc_global_nav closeUpShop ");
        // for everything that has the open class, remove it
        $('.open').removeClass("open");
        $('[aria-hidden="false"]').attr('aria-hidden', 'true');
        $('[aria-hidden="true"]').removeAttr("style");
        $('.utils ul').slideUp(100,
            function() {
                $('.utils ul[aria-hidden="false"]').attr('aria-hidden', 'true');
            });
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
                console.log(" is NOT visible");
                $('header[role=banner] form[role=search] fieldset').slideUp(200,
                    function() {
                        $('nav.main ul').slideDown(300, function() {
                            $('header[role=banner] form[role=search]').removeClass("open");
                            $($theMenuButton).addClass("open");
                        });
                    });
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
                $('.utils ul').slideUp(100,
                    function() {
                        $('.utils ul[aria-hidden="false"]').attr('aria-hidden', 'true');
                    });
            } else {
                console.log("am closed: open me");
                $('.utils a.login-link').addClass("open");
                $('.utils ul').slideDown(100,
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
        respond();

    });
})(jQuery);