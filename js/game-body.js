<!-- <body class="pz-page pz-desktop pz-use-intercept"> -->
<div class="pz-page pz-desktop pz-use-intercept">
    <header class="pz-header pz-game-header">
        <nav class="pz-nav pz-flex-row" id="js-global-nav">
            <div class="pz-nav__hamburger-helper pz-nav__hamburger pz-nav__hamburger-squeeze" id="js-nav-burger"><span class="pz-nav__hamburger-box"><span class="pz-nav__hamburger-inner"></span></span>
            </div>
            <div class="pz-nav__toolbar" id="js-mobile-toolbar"></div>
        </nav>
    </header>
    <div class="pz-intercept"></div>
    <div class="pz-content">
        <div class="pz-section" id="spelling-bee-container">
            <div class="pz-row pz-game-title-bar">
                <div class="pz-module">
                    <h2><em class="pz-game-title">Buzzwords</em><span class="pz-game-date">April 21, 2020</span></h2>
                    <div class="pz-byline"><span class="pz-byline__text">Inspired by the New York Times Spelling Bee!</span></div>
                </div>
            </div>
            <div class="pz-game-screen">
                <div class="pz-game-toolbar">
                    <div class="pz-row">
                        <div class="pz-module pz-flex-row pz-game-toolbar-content" id="portal-game-toolbar"></div>
                    </div>
                </div>
                <div class="pz-game-field" id="pz-game-root">
                    <noscript>This game requires javascript</noscript>
                </div>
                <div id="portal-game-modals"></div>

                <!-- New code, dynamic -->
                <script type="text/javascript" src="https://cdn.jsdelivr.net/npm/jquery@3.5.0/dist/jquery.min.js"></script>
                <script type="text/javascript" src="https://unpkg.com/@ungap/url-search-params"></script>

                <script type="text/javascript">
                    window.gameData = {
                        "today": {
                            "expiration": 1587538800,
                            "displayWeekday": "Tuesday",
                            "displayDate": "April 21, 2020",
                            "printDate": "2020-04-21",
                            "id": 717,
                            "freeExpiration": 0,
                            "editor": "BuzzWords"
                        },
                        "yesterday": {
                            "displayWeekday": "Monday",
                            "displayDate": "April 20, 2020",
                            "printDate": "2020-04-20",
                            "centerLetter": "w",
                            "outerLetters": ["a", "d", "h", "i", "r", "t"],
                            "validLetters": ["w", "a", "d", "h", "i", "r", "t"],
                            "pangrams": ["withdraw"],
                            "answers": ["withdraw", "athwart", "await", "award", "draw", "thaw", "thwart", "twit", "wait", "ward", "wart", "watt", "what", "whir", "whirr", "whit", "width", "with", "wraith", "wrath", "writ"],
                            "id": 7339,
                            "freeExpiration": 0,
                            "editor": "BuzzWords"
                        }
                    };

                    $(function(){
                        var key  = "p";
                        var base = "https://cdn.jsdelivr.net/gh//BuzzWordsGame/assets/puzzles/";
                        var up   = new URLSearchParams(location.search);

                        var puzzle = up.get(key) || "fd72121d14a4cf353a7ef5478edc85b2"; // evergreen
                        var url = base + puzzle + ".json";

                        $.get( url, function( data ) {
                            console.log("Puzzle data for " + puzzle + " : " + JSON.stringify(data) );
                            $.each( data, function(k,v)  {
                                console.log( "JSON: " + k + ' => ' + v );
                                window.gameData.today[k] = v;
                            });
                        });
                    });
                </script>

                <!--
                <script type="text/javascript">
                    window.gameData = {
                        "today": {
                            "expiration": 1587538800,
                            "displayWeekday": "Tuesday",
                            "displayDate": "April 21, 2020",
                            "printDate": "2020-04-21",
                            "centerLetter": "d",
                            "outerLetters": ["a", "b", "i", "j", "l", "r"],
                            "validLetters": ["d", "a", "b", "i", "j", "l", "r"],
                            "pangrams": ["jailbird"],
                            "answers": ["jailbird", "arid", "bald", "ballad", "bard", "billiard", "bird", "brad", "braid", "bridal", "dial", "dill", "drab", "drib", "drill", "iliad", "laid", "lard", "rabid", "radar", "radial", "radii", "raid", "railbird", "ribald"],
                            "id": 717,
                            "freeExpiration": 0,
                            "editor": "BuzzWords"
                        },
                        "yesterday": {
                            "displayWeekday": "Monday",
                            "displayDate": "April 20, 2020",
                            "printDate": "2020-04-20",
                            "centerLetter": "w",
                            "outerLetters": ["a", "d", "h", "i", "r", "t"],
                            "validLetters": ["w", "a", "d", "h", "i", "r", "t"],
                            "pangrams": ["withdraw"],
                            "answers": ["withdraw", "athwart", "await", "award", "draw", "thaw", "thwart", "twit", "wait", "ward", "wart", "watt", "what", "whir", "whirr", "whit", "width", "with", "wraith", "wrath", "writ"],
                            "id": 7339,
                            "freeExpiration": 0,
                            "editor": "BuzzWords"
                        }
                    }
                </script>
                -->
            </div>
        </div>
    </div>
    <footer class="pz-footer">
    </footer>
    <script type="text/javascript">
        window.userType = {
            "isLoggedIn": true,
            "hasXwd": true,
            "hasDigi": false,
            "isErsatzShortz": false,
            "inShortzMode": false,
            "entitlement": "cr"
        }
    </script>
    <script type="text/javascript">
        window.abra = {
            "GAMES_TP12_SpellingBeeCutoff": "1_good"
        }
    </script>
    <script type="text/javascript">
        window.adUnitPath = "spellingbee"
    </script>
    <div id="ratio-hook"></div>
    <div id="width-hook"></div>
    <script defer="" type="text/javascript" src="/gh//BuzzWordsGame/assets/games-assets/v2/polyfills.cf1a343c9aa7a0116d199c3358ceb1bc.js"></script>
    <script id="responsive.js" defer="" type="text/javascript">
        ! function(n, e) {
            "object" == typeof exports && "undefined" != typeof module ? module.exports = e() : "function" == typeof define && define.amd ? define(e) : (n = n || self).Responsive = e()
        }(this, function() {
            "use strict";
            var e = ["transitionend", "webkitTransitionEnd", "oTransitionEnd", "msTransitionEnd"],
                s = Object.keys(e).find(function(n) {
                    return "on".concat(e[n].toLowerCase()) in window
                });

            function n(n) {
                var t = [],
                    i = document.getElementById(n),
                    o = {
                        value: i.offsetWidth,
                        subscribe: function(n) {
                            return t.push(n),
                                function() {
                                    t.splice(t.indexOf(n), 1)
                                }
                        }
                    };
                return i.addEventListener(s, function() {
                    var n = i.offsetWidth;
                    if (function(n) {
                            o.value = n
                        }(n), t.length)
                        for (var e = t.length; 0 < e;) t[e -= 1](n)
                }, !1), o
            }
            return {
                isMobile: document.body.classList.contains("pz-mobile"),
                ratio: n("ratio-hook"),
                width: n("width-hook")
            }
        });
    </script>
    <script defer="" type="text/javascript" src="/gh//BuzzWordsGame/assets/games-assets/v2/foundation.1dddedf5dea1cc1dcadeffd4bc8c8c7a.js"></script>
    <script defer="" type="text/javascript" src="/gh//BuzzWordsGame/assets/games-assets/v2/react-bundle.ed5aa23021514c7375186d441aaeb51f.js"></script>
    <script defer="" type="text/javascript" src="/gh//BuzzWordsGame/assets/games-assets/v2/spelling-bee.19d29c4ad0a6d0ee7048803012f843bd.js"></script>
</div>
<!-- </body> -->
