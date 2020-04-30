! function(e, t) {
    "object" == typeof exports && "undefined" != typeof module ? module.exports = t(require("responsive")) : "function" == typeof define && define.amd ? define(["responsive"], t) : (e = e || self).Foundation = t(e.Responsive)
}(this, function(i) {
    "use strict";
    i = i && Object.prototype.hasOwnProperty.call(i, "default") ? i.default : i;
    var d = window,
        v = document,
        r = encodeURIComponent,
        e = localStorage,
        t = sessionStorage;

    function m(e, t) {
        e.classList.add(t)
    }

    function a(e, t) {
        e.classList.remove(t)
    }

    function n(e, t) {
        e.classList.toggle(t)
    }

    function g(e, t, n, r) {
        e.addEventListener(t, n, r)
    }

    function c(e) {
        return v.getElementById(e)
    }

    function h(e, t) {
        e.appendChild(t)
    }

    function u(e) {
        return e.currentTarget.events[e.type](e)
    }

    function b(e, t) {
        for (var r = 1 < arguments.length && void 0 !== t ? t : {}, n = [], o = [], i = arguments.length; 2 < i;) i -= 1, n.push(arguments[i]);
        for (; n.length;) {
            var a = n.pop();
            if (a && a.pop)
                for (var c = a.length; 0 < c; c -= 1) n.push(a[c]);
            else null != a && !0 !== a && !1 !== a && o.push(a)
        }
        var s = v.createElement(e);
        return o.forEach(function(e) {
            h(s, function(e) {
                return "string" == typeof e || "number" == typeof e
            }(e) ? v.createTextNode(e) : e)
        }), Object.keys(r).forEach(function(e) {
            var t = r[e];
            if ("o" === e[0] && "n" === e[1]) {
                var n = e.slice(2).toLowerCase();
                s.events || (s.events = {}), s.events[n] = t, g(s, n, u)
            } else null != t && !1 !== t && s.setAttribute(e, t)
        }), s
    }
    var o = d.env,
        s = void 0 === o ? "" : o,
        l = s.version,
        f = "pz-version",
        O = l !== e.getItem(f);
    try {
        e.setItem(f, l)
    } catch (e) {
        console.error(e.error)
    }

    function p(e) {
        return "js-".concat(e)
    }

    function y() {
        return Date.now()
    }

    function w(t) {
        var n = [];
        return Object.keys(t).forEach(function(e) {
            n.push("".concat(r(e), "=").concat(r(t[e])))
        }), "?".concat(n.join("&"))
    }

    function x(e, t, n, r, o, i, a, c, s, u, l, f) {
        var p = [],
            d = "getItem",
            v = "setItem",
            m = "removeItem",
            g = "".concat(n, "-check"),
            h = u,
            b = l,
            y = f;

        function w(e) {
            for (; p.length;) p.shift()[e ? 1 : 0](e || h)
        }
        return t && O && (t[m](g), t[m](n)), {
            get: function() {
                return b ? Promise.resolve(h) : new Promise(function(e, t) {
                    return p.push([e, t])
                })
            },
            initialize: function() {
                return t && t[d](g) === r && (y = t[d](n)), Promise.resolve(y && JSON.parse(y) || e()).then(function(e) {
                    if (b = !0, h = e, t && !y) try {
                        t[v](g, r), t[v](n, JSON.stringify(h))
                    } catch (e) {
                        console.error(e.error)
                    }
                    w()
                }).catch(w)
            }
        }
    }
    var E = "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function(e) {
            var t;
            return t = 16 * Math.random() | 0, ("x" === e ? t : 3 & t | 8).toString(16)
        }),
        j = (/NYT-S=([^;]+)/.exec(v.cookie || "") || [])[1],
        k = (/NYT-NO-ADS=([^;]+)/.exec(v.cookie || "") || [])[1];

    function I(t, e) {
        var n = Object.keys(t);
        if (Object.getOwnPropertySymbols) {
            var r = Object.getOwnPropertySymbols(t);
            e && (r = r.filter(function(e) {
                return Object.getOwnPropertyDescriptor(t, e).enumerable
            })), n.push.apply(n, r)
        }
        return n
    }

    function P(t) {
        for (var e = 1; e < arguments.length; e++) {
            var n = null != arguments[e] ? arguments[e] : {};
            e % 2 ? I(Object(n), !0).forEach(function(e) {
                S(t, e, n[e])
            }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : I(Object(n)).forEach(function(e) {
                Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
            })
        }
        return t
    }

    function S(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n, e
    }
    var T = "responseType",
        C = "withCredentials",
        D = "setRequestHeader",
        z = "withCookie",
        A = "json",
        L = {
            withCookie: !0,
            withCredentials: !0
        };
    L[T] = A;

    function N(e, o, t) {
        var i = P({}, L, {}, t);
        return new Promise(function(t, n) {
            if (!navigator.onLine) return n(new Error("No internet"));
            var r = new XMLHttpRequest;
            r[C] = i[C], r.open(e, o, 1), i[z] && r[D]("nyt-s", j), r[D]("Content-type", i.data ? "application/json" : "application/x-www-form-urlencoded"), r.onload = function() {
                try {
                    var e = r.responseText;
                    t(e && i[T] === A ? JSON.parse(e) : e)
                } catch (e) {
                    n(new Error("Something went wrong"))
                }
            }, g(r, "error", function(e) {
                return n(function(e) {
                    if (!(e.status < 400)) {
                        var t = new Error("bad req");
                        return t.status = e.status, t
                    }
                }(e))
            }), r.send(i.data && JSON.stringify(i.data))
        })
    }
    var _ = {
            get: function(e, t) {
                return N("GET", e, t)
            },
            post: function(e, t, n) {
                return N("POST", e, P({}, n, {
                    data: t
                }))
            },
            put: function(e, t, n) {
                return N("PUT", e, P({}, n, {
                    data: t
                }))
            },
            delete: function(e, t) {
                return N("DELETE", e, t)
            }
        },
        R = x(function() {
            //XXX remove
            console.log("GET GAME: " + JSON.stringify(e));
            //XXX removed
            //return _.get("/puzzles/user?bust=".concat(y()))
            return {"id":42,"displayName":""};
        }, t, "pz-user", j),
        Y = d.userType,
        U = "fluid",
        M = [
            [990, [U, [728, 90],
                [970, 90],
                [970, 250],
                [1605, 300]
            ]],
            [750, [U, [728, 90],
                [1605, 300]
            ]],
            [440, [U, [300, 250],
                [300, 420]
            ]],
            [0, [U, [300, 250]]]
        ];
    d.AdSlot4 = d.AdSlot4 || {
        cmd: []
    };

    function q(o) {
        H.cmd.push(function() {
            var e = i.width.value,
                t = e < 2 ? ["small", "medium"][e] : "large",
                n = function(e, t) {
                    var n = t || d.location.href,
                        r = e.replace(/[[\]]/g, "\\$&"),
                        o = new RegExp("[?&]".concat(r, "(=([^&#]*)|&|#|$)")).exec(n);
                    return o ? o[2] ? decodeURIComponent(o[2].replace(/\+/g, "")) : "" : null
                }("ad-keywords"),
                r = {
                    plat: "web",
                    prop: "nyt",
                    typ: "games",
                    vp: t,
                    sub: Y.entitlement,
                    page_view_id: E
                };
            n && (r.adv = n), H.init({
                adTargeting: r,
                adUnitPath: "".concat("29390238/NYT/crosswords", "/").concat(o),
                sizeMapping: {
                    default: M
                }
            }), H.events.subscribe({
                name: "AdRendered",
                scope: "all",
                callback: function(e) {
                    var t = e.slot,
                        n = e.size,
                        r = v.getElementById(t.getSlotElementId());
                    n && 0 === n[1] ? r && m(r, "fluid") : r && a(r, "fluid")
                }
            })
        })
    }
    var H = d.AdSlot4,
        B = ["transitionend", "webkitTransitionEnd", "oTransitionEnd", "msTransitionEnd"],
        F = Object.keys(B).find(function(e) {
            return "on".concat(B[e].toLowerCase()) in window
        });

    function J(e) {
        var n = [],
            r = document.getElementById(e),
            o = {
                value: r.offsetWidth,
                subscribe: function(e) {
                    return n.push(e),
                        function() {
                            n.splice(n.indexOf(e), 1)
                        }
                }
            };
        return r.addEventListener(F, function() {
            var e = r.offsetWidth;
            if (function(e) {
                    o.value = e
                }(e), n.length)
                for (var t = n.length; 0 < t;) n[t -= 1](e)
        }, !1), o
    }
    var W = document.body.classList.contains("pz-mobile"),
        $ = (J("ratio-hook"), J("width-hook"), d.navigator),
        G = x(function() {
            /*
            {
              "feedback": "\n\n\n----\nDevice summary:\nPage: %s\nBrowser: Chrome 81.0.4044.113\nOS: OS X 10.15.2\nScreen Resolution: %s x %s\nViewport Size: %s x %s\nTimezone: %s\nRegi: %s\nDigi: %s\nXwd: %s\nHd: %s\nPage View: %s\n",
              "description": "Chrome 81.0.4044.113 on OS X 10.15.2 64-bit",
              "layout": "Blink",
              "manufacturer": null,
              "name": "Chrome",
              "prerelease": null,
              "product": null,
              "ua": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_2) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/81.0.4044.113 Safari/537.36",
              "version": "81.0.4044.113",
              "os": {
                "architecture": 64,
                "family": "OS X",
                "version": "10.15.2"
              }
            }
            */
          //XXX removed
          //return _.get("/puzzles/device")
          return {};
        }, e, "pz-device", $.userAgent);

    function V(e, t) {
        return function(e) {
            if (Array.isArray(e)) return e
        }(e) || function(e, t) {
            if ("undefined" == typeof Symbol || !(Symbol.iterator in Object(e))) return;
            var n = [],
                r = !0,
                o = !1,
                i = void 0;
            try {
                for (var a, c = e[Symbol.iterator](); !(r = (a = c.next()).done) && (n.push(a.value), !t || n.length !== t); r = !0);
            } catch (e) {
                o = !0, i = e
            } finally {
                try {
                    r || null == c.return || c.return()
                } finally {
                    if (o) throw i
                }
            }
            return n
        }(e, t) || function(e, t) {
            if (!e) return;
            if ("string" == typeof e) return X(e, t);
            var n = Object.prototype.toString.call(e).slice(8, -1);
            "Object" === n && e.constructor && (n = e.constructor.name);
            if ("Map" === n || "Set" === n) return Array.from(n);
            if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return X(e, t)
        }(e, t) || function() {
            throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
        }()
    }

    function X(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
        return r
    }

    function K(e, t, n) {
        for (var r = "".concat(2 < arguments.length && void 0 !== n ? n : "Web Feedback", " (").concat(E.slice(-6), ")"), o = d.screen, i = v.documentElement, a = (new Date).getTimezoneOffset(), c = [d.location.pathname, o.width, o.height, i.clientWidth, i.clientHeight, "UTC".concat(0 < a ? "" : "+").concat(a / -60), e.id, Y.hasDigi ? "Yes" : "No", Y.hasXwd ? "Yes" : "No", function() {
                try {
                    var e = v.cookie.match(/nyt-xwd-hashd=(.+);/),
                        t = e && e[1];
                    return !0 === t || "true" === t
                } catch (e) {
                    return !1
                }
            }() ? "Yes" : "No", E], s = t.feedback, u = /%s/, l = 0; l < c.length;) s = s.replace(u, c[l]), l += 1;
        return ae + w({
            subject: r,
            body: s
        })
    }

    function Q(o) {
        return Promise.all([R.get(), G.get()]).then(function(e) {
            var t = V(e, 2),
                n = t[0],
                r = t[1];
            return K(n, r, o)
        }).catch(function() {
            return ae
        })
    }

    function Z(e) {
        var t = 0 < arguments.length && void 0 !== e ? e : {},
            n = "logged-in",
            r = "logged-out",
            o = c(p("profile-nav")),
            i = c(p("nav-drawer")),
            a = c(p("username-nav"));
        o && (t.id ? (t.displayName && function(e, t) {
            e.innerHTML = t
        }(a, t.displayName), m(o, n), m(i, n)) : (m(o, r), m(i, r)))
    }

    function ee(e, t) {
        e && t && g(e, "click", function() {
            n(t, "open"), n(e, "active")
        })
    }
    var te, ne, re, oe, ie, ae = "mailto:NYTCrossword@nytimes.com",
        ce = "pz-seen-nav-promo",
        se = "show-new",
        ue = (ne = c(p("global-nav")), re = c(p("mobile-toolbar")), oe = "show-mobile-toolbar", ie = {
            text: function(e, t) {
                return b("span", {
                    class: "pz-nav__toolbar-item",
                    onClick: t
                }, e)
            }
        }, {
            create: function(e) {
                ! function(t, e) {
                    ! function(e) {
                        for (; e.children.length;) e.removeChild(e.children[0])
                    }(t), e.forEach(function(e) {
                        h(t, e)
                    })
                }(re, e.map(le))
            },
            activate: function() {
                te || (te = !0, m(ne, oe))
            },
            deactivate: function() {
                te && (te = !1, a(ne, oe))
            }
        });

    function le(e) {
        return ie[e.type](e.value, e.action)
    }

    function fe(t, e) {
        var n = Object.keys(t);
        if (Object.getOwnPropertySymbols) {
            var r = Object.getOwnPropertySymbols(t);
            e && (r = r.filter(function(e) {
                return Object.getOwnPropertyDescriptor(t, e).enumerable
            })), n.push.apply(n, r)
        }
        return n
    }

    function pe(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n, e
    }
    var de = "dataLayer",
        ve = "games-crosswords";
    d[de] = d[de] || [], d[de].push({
        event: "gtm.js",
        "gtm.start": y()
    });

    function me(e, t) {
        ! function(e) {
            d[de].push(e)
        }(function(t) {
            for (var e = 1; e < arguments.length; e++) {
                var n = null != arguments[e] ? arguments[e] : {};
                e % 2 ? fe(Object(n), !0).forEach(function(e) {
                    pe(t, e, n[e])
                }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : fe(Object(n)).forEach(function(e) {
                    Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
                })
            }
            return t
        }({
            event: e
        }, t))
    }

    function ge() {
        function e(e) {
            e && me("userDataReady", e), me("pageDataReady", {
                    application: {
                        name: ve,
                        environment: s.name
                    },
                    asset: {
                        url: Oe
                    },
                    pageview: {
                        id: E
                    }
                }),
                function() {
                    var e = y();
                    setInterval(function() {
                        v.hasFocus() && me("heartbeat", {
                            pageview: {
                                heartbeat: {
                                    timeSincePageDataReady: y() - e,
                                    heartbeatInterval: 5e3
                                }
                            }
                        })
                    }, 5e3)
                }()
        }! function(r, o, e) {
            var i = !(2 < arguments.length && void 0 !== e) || e;
            new Promise(function(e, t) {
                var n = v.createElement("script");
                n.async = i, r ? (n.src = r, n.onload = e, n.onerror = t) : o && (n.innerHTML = o, e()), v.body.appendChild(n)
            })
        }(s.gtm), xe.initialize(), xe.get().then(e).catch(function() {
            return e()
        })
    }

    function he(e) {
        return (d.abra || {})[e] || null
    }
    var be, ye, we = (be = "link[rel=canonical]", v.querySelector(be)),
        Oe = we ? we.href : v.location.href,
        xe = x(function() {
            //XXX remove
            var e = w({
                    sourceApp: ve,
                    referrer: v.referrer,
                    assetUrl: Oe
                }),
                t = "".concat(s.tagx, "/svc/nyt/data-layer").concat(e);
            return _.get(t, {
                withCookie: !1
            })

        }),
        Ee = {},
        je = {
            get: he,
            reset: function() {
                Ee = {}
            },
            reportExposure: function(e) {
                Ee[e] || (Ee[e] = 1, d.dataLayer.push({
                    event: "ab-expose",
                    abtest: {
                        test: e,
                        variant: he(e) || "0"
                    }
                }))
            }
        },
        ke = "__viewers__";
    "IntersectionObserver" in d && "IntersectionObserverEntry" in d && "intersectionRatio" in d.IntersectionObserverEntry.prototype && ("isIntersecting" in d.IntersectionObserverEntry.prototype || Object.defineProperty(d.IntersectionObserverEntry.prototype, "isIntersecting", {
        get: function() {
            return 0 < this.intersectionRatio
        }
    }), d.__observeInView__ = !0);

    function Ie(e, t) {
        window.__observeInView__ && (ye = ye || new d.IntersectionObserver(function(e) {
            e.forEach(function(t) {
                t.isIntersecting && t.target[ke].forEach(function(e) {
                    return e(t)
                })
            })
        }, {
            threshold: .4
        }), e[ke] ? e[ke].push(t) : (e[ke] = [t], ye.observe(e)))
    }
    var Pe, Se, Te = "prod" === s.name ? "https://purr.nytimes.com/v1/preferences" : "https://purr.dev.nytimes.com/v1/preferences";
    return "ontouchstart" in d || d.DocumentTouch || m(v.documentElement, "pz-dont-touch"), R.initialize(), G.initialize(), R.get().then(Z), ee(c(p("nav-dropdown-button")), c(p("nav-dropdown-menu"))), (Pe = c(p("nav-burger"))).classList.contains("during-promo") ? e.getItem(ce) || (m(Pe, se), g(Pe, "click", function() {
        a(Pe, se), e.setItem(ce, !0)
    })) : e.removeItem(ce), ee(c(p("nav-burger")), c(p("nav-drawer"))), (Se = c(p("feedback-link"))) && Q().then(function(e) {
        Se.setAttribute("href", e)
    }), !W && (/iPad/.test($.platform) || "MacIntel" === $.platform && 1 < $.maxTouchPoints) && (v.cookie = "inferredIpad=true;domain=nytimes.com;", d.location.reload()), Y.isErsatzShortz && k ? d.dataLayer = [] : (H && H.loadScripts && H.loadScripts({
        pageType: "games",
        section: "crosswords"
    }), d.addEventListener("load", function(e) {
        ! function() {
            var n, r, o, i, a, c, s, u = Array.prototype.slice.call(v.getElementsByClassName("ccpa-opt-out")),
                l = {
                    withCookie: !1
                };
            /ccpa-preview=true/.test(d.location.search) && _.get(Te, l).catch(function() {});
            for (var e = function(e) {
                    function t(e) {
                        if (o = !(e instanceof Error), r = j ? "Your preference has been saved." : "Your preference will be stored for this browser and device. If you clear your cookies, your preference will be forgotten.", a = function() {
                                s = !1, i && clearTimeout(i), m(c, "dismissed")
                            }, c = b("div", {
                                class: "ccpa-snackbar",
                                role: "status"
                            }, b("span", {
                                class: "ccpa-snackbar__msg"
                            }, n = o ? r : "Something went wrong. Please try again.")), h(v.body, c), setTimeout(function() {
                                m(c, "enter")
                            }, 30), i = setTimeout(a, 7e3), o) {
                            for (var t = 0; t < u.length; t += 1) u[t].parentNode.removeChild(u[t]);
                            me("impression", {
                                module: {
                                    name: "ccpa snackbar message",
                                    label: n
                                }
                            })
                        }
                    }
                    e.preventDefault(), s || (s = !0, _.post(Te, {
                        ccpa_pref: "opt-out"
                    }, l).then(t).catch(t), me("moduleInteraction", {
                        eventData: {
                            pagetype: "game",
                            trigger: "module",
                            type: "click"
                        },
                        module: {
                            name: "ccpa opt-out link",
                            region: e.target.getAttribute("data-region"),
                            label: e.target.textContent
                        }
                    }))
                }, f = {}, t = function(e) {
                    var t = e.target.getAttribute("data-region");
                    f[t] || (me("impression", {
                        module: {
                            name: "ccpa opt-out link",
                            label: e.target.textContent,
                            region: t
                        }
                    }), f[t] = !0)
                }, p = 0; p < u.length; p += 1) g(u[p], "click", e), Ie(u[p], t)
        }(), q(d.adUnitPath || "default"), ge()
    })), {
        env: s,
        user: R,
        userType: Y,
        getFeedbackLink: Q,
        mobileNavTools: ue,
        track: me,
        xhr: _,
        abra: je,
        refreshAds: function() {
            H.cmd.push(function() {
                H.refreshAds()
            })
        },
        getGameData: function() {
            return d.gameData
        }
    }
});
