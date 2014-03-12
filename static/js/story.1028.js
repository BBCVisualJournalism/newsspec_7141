(function () {
    (function () {
        'use strict';
        $(function () {
            var currentSectionNumber;
            $('.section').each(function (i) {
                $(this).scrollWatch().on('scroll', function (e) {
                    if (Math.abs(e.visibility) > .8) {
                        if (currentSectionNumber !== i) {
                            currentSectionNumber = i;
                            if (istatsGlobal) {
                                istatsGlobal.log('sectionView', 'shorthand.sectionView', {
                                    'time': Date.now(),
                                    'section': i
                                });
                            }
                        }
                    }
                })
            })
        })
    })();
    (function () {
        "use strict";
        var copyElements = "copy-elements";
        $("[data-" + copyElements + "]").each(function (index, el) {
            var $el = $(el);
            var elementsSelector = $el.data(copyElements);
            var elements = $(elementsSelector);
            $el.append(elements.clone())
        })
    })();
    (function () {
        "use strict";
        $(function () {
            var running = false;
            var $window = $(window);
            var _refresh = function () {
                if ($window.width() > 700) {
                    $("[data-possible-scrollmation]").each(function () {
                        $(this).removeAttr("data-possible-scrollmation");
                        new window.SectionScrollmation.ImageScrollmation({
                            el: $(this)
                        })
                    })
                } else {}
            };
            var tick = function () {
                if (!running) {
                    window.requestAnimationFrame(_refresh)
                }
                running = true
            };
            _refresh();
            $window.on("resize", tick);
            $window.scroll()
        })
    })();
    (function ($, videojs, Backbone) {
        "use strict";

        function VideoSectionCaptions(options) {
            _.bindAll(this);
            this.$el = $(options.el);
            this.$caption = this.$el.find("[data-video-player-caption]");
            this.$video = this.$el.find(".video-js");
            this.vent = options.vent;
            this.initialize()
        }
        VideoSectionCaptions.prototype = {
            initialize: function () {
                this.$el.addClass("is-not-playing is-inactive");
                this.player = videojs(this.$video[0]);
                this.player.ready(this.onVideoReady);
                this.vent.on("play", this.onOtherVideoPlay)
            },
            onOtherVideoPlay: function (elt) {
                if (this.$el !== elt) {
                    this.player.pause()
                }
            },
            onVideoReady: function () {
                this.player.on("pause", this.onVideoPause);
                this.player.on("play", this.onVideoPlay);
                this.player.on("useractive", this.onUserActive);
                this.player.on("userinactive", this.onUserInactive);
                this.$el.find(".video-js").css({
                    height: "100%",
                    width: "100%"
                })
            },
            onVideoPause: function () {
                this.$el.addClass("is-not-playing")
            },
            onVideoPlay: function () {
                this.vent.trigger("play", this.$el);
                this.$el.removeClass("is-not-playing")
            },
            onUserActive: function () {
                this.$el.removeClass("is-inactive")
            },
            onUserInactive: function () {
                this.$el.addClass("is-inactive")
            }
        };
        $(function () {
            var vent = {};
            _.extend(vent, Backbone.Events);
            $(".section-video").each(function () {
                new VideoSectionCaptions({
                    el: this,
                    vent: vent
                })
            })
        })
    })($, window.videojs, window.Backbone);
    (function () {
        "use strict";
        $(function () {
            var $html = $("html, body");
            var $nav = $(".section-navigation");

            function activateItem($el) {
                $nav.find(".active").removeClass("active");
                $el.addClass("active")
            }

            function stick() {
                $nav.addClass("stick")
            }

            function unstick() {
                $nav.removeClass("stick")
            }

            function jumpToSection(event) {
                event.preventDefault();
                var $anchor = $(event.delegateTarget);
                $html.stop().animate({
                    scrollTop: $($anchor.attr("href")).offset().top + 1
                }, 1500).promise().done(function () {
                    activateItem($anchor)
                })
            }
            $(".sections-list .section").each(function () {
                var $el = $(this);
                var id = $el.attr("id");
                var $navEl = $nav.find('[href="#' + id + '"]');
                if ($navEl.length === 1) {
                    $el.scrollWatch().on("scroll", function (e) {
                        var visibility = Math.abs(e.visibility);
                        if (visibility > .8) {
                            activateItem($navEl)
                        } else if (visibility === 0 && e.direction === "up") {
                            activateItem($navEl.prev())
                        }
                    })
                }
            });
            $(".section-header").scrollWatch().on("scroll", function (e) {
                var visibility = Math.abs(e.visibility);
                if (visibility > 0) {
                    unstick()
                } else {
                    stick()
                }
            });
            if (!$("html").hasClass("faux-scroll")) {
                $("a[href^=#].section-navigator").on("click", jumpToSection)
            }
        })
    })();
    (function () {
        "use strict";

        function sectionInViewport($el, visibility) {
            var $video = $el.find("video")[0];
            if ($video) {
                if (visibility > .2) {
                    $video.play()
                }
                if (visibility < .2) {
                    $video.pause()
                }
            }
        }
        $(".section-text-over-media, section-title").each(function () {
            $(this).scrollWatch().on("scroll", function (e) {
                var visibility = Math.abs(e.visibility);
                sectionInViewport($(this), visibility)
            })
        })
    })()
    function handleOrientationChange() {
        var viewPortHeight, viewPortWidth = document.documentElement.clientWidth || window.screen.availWidth || $window.width();
        switch(window.orientation) {
            case -90:
            case 90:
                //landscape
                viewPortHeight = viewPortWidth * 0.6;
            break;
            default:
                //portrait
                viewPortHeight = viewPortWidth / 0.6;
            break;
        }

        $('.section-text-over-image').css('height', viewPortHeight);
        $('#introduction-327').css('height', viewPortHeight);
    }

    window.addEventListener('orientationchange', handleOrientationChange);

    // Initial execution if needed
    handleOrientationChange();
}).call(this);