(function($) {

    function respond() {
        console.log(" mc_global_nav: respond");
        var w = $(window).width();
        // remove inline display styles set by jquery.
        $("header[role=banner] *").removeAttr("style");
        closeUpShop();
        if (w < 800) {
            setUpGlobalNavMobile();
            setUpProjectNavMobile();
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

            if ($(".sites_nav > ul").is(":visible")) {
                console.log("is vis, now closing ");
                $(this).removeClass('open');
                $(".sites_nav > ul").slideUp(300, function() {
                    $(this).removeClass("open").attr('aria-hidden', 'true');
                });
            } else {
                console.log("is not visible, now opening ");
                closeUpShop();
                $(this).addClass('open');
                $(".sites_nav > ul").addClass('open');
                $(".sites_nav > ul").slideDown(300, function() {
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

    function setUpProjectNavMobile() {
        $("ul.main").attr('aria-hidden', 'true');

        console.log("inside mc_global_nav setUpProjectNavMobile ");
        // SEARCH
        $('header[role=banner] form[role=search] label').unbind('click').click(function() {
            $theSearchButton = $(this);
            // If search is open
            if ($("header[role=banner] form[role=search] fieldset").is(":visible")) {
                //$(this).parent('form').removeClass("open");
                $("header[role=banner] form[role=search] fieldset").slideUp(300, 'easeInQuad',
                    function() {
                        // closeUpShop();
                        $(this).parent('form').removeClass("open");
                    });
            } else {
                // if search is closed
                // close top two
                closeTopTwo();
                // if main is already open, first close it 
                if ($('nav.main ul').is(":visible")) {
                    $('nav.main ul').slideUp(300, 'easeInQuad', function() {
                        $('header[role=banner] form[role=search]').addClass("open");
                        $('header[role=banner] form[role=search] fieldset').slideDown(300, 'easeInQuad',
                            function() {
                                $(this).parent('form').addClass("open");
                            });
                    });
                } else {
                    // if main is closed
                    $('header[role=banner] form[role=search]').addClass("open");
                    $('header[role=banner] form[role=search] fieldset').slideDown(300, 'easeInQuad',
                        function() {
                            $(this).parent('form').addClass("open");
                        });
                }

                // });
            }
        });
        // Main project nav
        if ($(".nav.main>ul").length) {
            console.log("**   has a list");
            $("header[role=banner] button").unbind('click').click(function() {

                var$theMenuButton = this;
                if ($("nav.main ul").is(":visible")) {
                    console.log("case now 1, visible");
                    $('nav.main ul').slideUp(300, 'easeInQuad', function() {
                        $("header[role=banner] button").removeClass("open");
                    });
                } else {
                    // NOT VISIBLE, So open it
                    closeTopTwo();
                    if ($("header[role=banner] form[role=search] fieldset").is(":visible")) {
                        $('header[role=banner] form[role=search] fieldset').slideUp(300, 'easeInQuad', function() {
                            $('nav.main ul').slideDown(300, 'easeInQuad', function() {
                                $('header[role=banner] form[role=search]').removeClass("open");
                                $("header[role=banner] button").addClass("open");
                                $('nav.main ul').attr('aria-hidden', 'false');
                            });
                        });
                    } else {
                        console.log("case now slide down");
                        // 
                        //   $('nav.main ul').slideDown(300, 'easeInQuad', function() {
                        //   $('nav.main ul').attr('aria-hidden', 'false');
                        // });
                        $('nav.main ul').slideDown(300, 'easeInQuad');
                    }

                }
            });

        } else {
            console.log("**   has no list");
            $("header[role=banner] button").remove();
        }

    }

    function setUpGlobalNavTabletDesk() {
        // the dropdown for navigation among projects   
        $("a.logolink").unbind();
        //$(".sites_nav > ul").attr('aria-hidden', 'false').removeAttr("style");
        $(".sites_nav > ul").removeAttr('aria-hidden').removeAttr("style");
        $("ul.main").removeAttr('aria-hidden').removeAttr("style");
    }

    function closeTopTwo() {
        console.log("###  TOP TWO ");
        if ($('li.sites_nav > ul').attr('aria-hidden') == 'false') {
            $('li.sites_nav > ul').attr('aria-hidden', 'true').removeAttr("style");
            console.log("###  case 1 ");
        }
        if ($('li.utils > ul').attr('aria-hidden') == 'false') {
            $('li.utils > ul').attr('aria-hidden', 'true').removeAttr("style");
            console.log("###  case 2 ");
        }
    }

    function closebottomTwo() {
        console.log("###  Bottom TWO ");
        if ($('ul.main').attr('aria-hidden') == 'false') {
            $('ul.main').attr('aria-hidden', 'true').removeAttr("style");
            console.log("###  case 1 ");
        }
        if ($('[role=search] fieldset').attr('aria-hidden') == 'false') {
            $('[role=search] fieldset').attr('aria-hidden', 'true').removeAttr("style");
            console.log("###  case 2 ");
        }
    }

    function closeUpShop() {
        console.log("###  mc_global_nav closeUpShop ");
        /////////
        //////////
        // for everything that has the open class, remove it
        $('.open').removeClass("open");

        $('[aria-hidden="false"]').attr('aria-hidden', 'true').removeAttr("style");

    }

    function setUpLoginLink() {
        console.log("i am inside mc_global_nav setUpLoginLink ");
        // Global nav - Login - global behavior
        $('.utils a.login-link').unbind('click').click(function(e) {
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
                closeTopTwo();
                closebottomTwo();
                $('.utils a.login-link').addClass("open");
                $('.utils ul').slideDown(300,
                    function() {
                        $('.utils ul[aria-hidden="true"]').attr('aria-hidden', 'false').removeAttr("style");
                        console.log("should be open now utils ul[aria-hidden='false'] ");
                    });
            }
        });
    }

    $(window).resize(_.debounce(function() {
        // executed when the DOM is ready
        console.log("resized (debounced) from mc_global nav");
        respond();
        setUpLoginLink();
    }, 100));
    $(window).bind("load", function() {
        // executed once every element of the page is loaded, including fonts
        console.log("assets loaded");
        respond();
        setUpLoginLink();

    });
})(jQuery);