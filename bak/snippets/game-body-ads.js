    <!--
    <script type="text/javascript">
        var AdSlot4 = function() {
            "use strict";

            function A(e) {
                var n = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : 0,
                    t = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : 0,
                    o = 3 < arguments.length && void 0 !== arguments[3] ? arguments[3] : 0,
                    i = 4 < arguments.length && void 0 !== arguments[4] ? arguments[4] : 0,
                    a = !(5 < arguments.length && void 0 !== arguments[5]) || arguments[5];
                if (!e || 1 !== e.nodeType) return !1;
                var d = e.getBoundingClientRect(),
                    r = d.top - n,
                    s = d.left,
                    l = d.bottom,
                    c = d.right,
                    u = 0,
                    p = 0,
                    g = window.innerHeight,
                    f = window.innerWidth;
                return a ? u + o * i <= l && p + t * i <= c && r <= g - o * i && s <= f - t * i : u <= r && l <= g
            }
            var C = function() {
                return !("undefined" == typeof window || !window.document || !window.document.createElement) && window.self !== window.top
            };

            function P(e) {
                var n = window.location.href,
                    t = e.replace(/[[]]/g, "\$&"),
                    o = new RegExp("[?&]".concat(t, "(=([^&#]*)|&|#|$)")).exec(n);
                return o && o[2] ? decodeURIComponent(o[2].replace(/\+/g, "")) : ""
            }

            function O(e, n, t) {
                var o = "".concat(e, "-").concat(n);
                try {
                    performance.mark(o), performance.measure(e, t, o);
                    var i = performance.getEntriesByName(e).pop();
                    return i ? Math.round(i.duration) : 0
                } catch (e) {
                    return 0
                }
            }

            function R() {
                var e = document.referrer || "",
                    n = /([a-zA-Z0-9_\-.]+)(@|%40)([a-zA-Z0-9_\-.]+).([a-zA-Z]{2,5})/;
                return n.test(e) || n.test(window.location.href)
            }

            function I(e) {
                var n = document.cookie.match(new RegExp("".concat(e, "=([^;]+)")));
                return n ? n[1] : ""
            }
            var x = {
                adConfigPosition: 1,
                nonPersonalized: "n",
                collapsed: "c",
                full: "f",
                socrates: "s"
            };

            function j() {
                return I("nyt-purr")[x.adConfigPosition] || ""
            }
            return function() {
                var s, l, E = window.AdSlot4 || {},
                    n = window.performance && window.performance.timing && performance.timing.responseStart,
                    r = {},
                    c = [],
                    u = !1,
                    p = !1,
                    m = !0,
                    t = !1,
                    S = !1,
                    w = j() === x.collapsed,
                    z = !1;
                if (E.init) return E;

                function g(e) {
                    e && n && e.setTargeting("request_time", (Date.now() - n).toString())
                }

                function h(e, n) {
                    window.googletag.cmd.push(function() {
                        g(n), window.googletag.display(e)
                    })
                }

                function T(e) {
                    if (R() || e) E.events.publish({
                        name: "AdEmpty",
                        value: {
                            type: "AdsDisabled"
                        }
                    });
                    else {
                        var n, t, o, i, a, d = function() {
                            var e = window.googletag;
                            e ? e.cmd.push(function() {
                                e._loadStarted_ ? window.advBidxc && !window.advBidxc.isAdServerLoaded && (window.advBidxc.isAdServerLoaded = !0) : E.events.publish({
                                    name: "AdEmpty",
                                    value: {
                                        type: "AdBlockOn"
                                    }
                                })
                            }) : E.events.publish({
                                name: "AdEmpty",
                                value: {
                                    type: "GptError"
                                }
                            })
                        };
                        window.googletag && window.googletag.apiReady ? d() : (n = "https://securepubads.g.doubleclick.net/tag/js/gpt.js", t = d, o = function() {
                            E.events.publish({
                                name: "AdEmpty",
                                value: {
                                    type: "GptError"
                                }
                            })
                        }, i = document.getElementsByTagName("head")[0], a = document.createElement("script"), t && (a.onload = t), o && (a.onerror = o), a.src = n, a.async = !0, i.appendChild(a))
                    }
                }

                function b(e, n, t) {
                    return window.googletag.defineSlot(e, n, t)
                }

                function i(e) {
                    var n, t, o, i = e.displayed,
                        a = e.id,
                        d = e.slot;
                    (E.events.publish({
                        name: "AdCalled",
                        value: {
                            id: a,
                            timeCalled: O(a, "timeCalled", "responseStart")
                        },
                        scope: a
                    }), u && i) ? (n = [d], t = p ? null : {
                        changeCorrelator: !1
                    }, (o = window.googletag).cmd.push(function() {
                        n && n.forEach(function(e) {
                            g(e)
                        }), n && t ? o.pubads().refresh(n, t) : n ? o.pubads().refresh(n) : t ? o.pubads().refresh(null, t) : o.pubads().refresh()
                    }), p = !1) : (h(a, d), r[a].displayed = !0)
                }

                function e() {
                    c = c.filter(function(e) {
                        var n = e.AdSlotElement,
                            t = A(n, m ? E.props.offset : 0, 0, 0, 0, m);
                        return t && i(e), !t
                    })
                }

                function a(t) {
                    var o = t.AdSlotElement,
                        e = {
                            root: null,
                            rootMargin: "".concat(E.props.offset, "px"),
                            threshold: 0
                        },
                        n = new IntersectionObserver(function(e, n) {
                            e[0].isIntersecting && (i(t), n.unobserve(o))
                        }, e);
                    return n.observe(o), n
                }

                function k() {
                    window.IntersectionObserver ? (t = !0, window.IntersectionObserver.prototype.POLL_INTERVAL = 1e3) : document.addEventListener("scroll", function(o) {
                        var i = this,
                            a = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : 1e3,
                            d = null;
                        return function() {
                            for (var e = arguments.length, n = new Array(e), t = 0; t < e; t++) n[t] = arguments[t];
                            null === d && (d = setTimeout(function() {
                                o.apply(i, n), d = null
                            }, a))
                        }
                    }(e, 1e3))
                }

                function y(e) {
                    e.displayed || (t && (e.observer = a(e)), c.push(e)), r[e.id] = e
                }

                function L(e) {
                    if (e.data.exclusive && e.data.div) {
                        var n, t = e.data.div;
                        switch (e.data.type) {
                            case "only-child":
                                o = {
                                    empty: (a = t, d = [], Object.keys(r).forEach(function(e) {
                                        a !== e && d.push(r[e])
                                    }), d)
                                }, (i = o && o.empty || c).length && i.forEach(function(e) {
                                    e.observer && e.observer.unobserve(e.AdSlotElement), E.events.publish({
                                        name: "AdEmpty",
                                        value: {
                                            type: e.id
                                        },
                                        scope: e.id
                                    })
                                }), c = [], w = !0;
                                break;
                            case "family-plan":
                                void 0 !== (n = r[t] && r[t].slot && (r[t].slot.getResponseInformation() || {}).lineItemId) && E.updateAdReq({
                                    adv: n,
                                    excl: "family"
                                });
                                break;
                            case "blank":
                                E.events.publish({
                                    name: "AdEmpty",
                                    value: {
                                        type: t
                                    },
                                    scope: e.data.div
                                })
                        }
                    }
                    var o, i, a, d
                }
                if (E.events = (s = {}, l = {}, {
                        publish: function e(n) {
                            var t = n.name,
                                o = void 0 === t ? "" : t,
                                i = n.value,
                                a = void 0 === i ? {} : i,
                                d = n.scope,
                                r = void 0 === d ? "page" : d;
                            "all" !== r && e({
                                name: o,
                                value: a,
                                scope: "all"
                            }), s[o] || (s[o] = {}), s[o][r] || (s[o][r] = []), s[o][r].push(a), l[o] && l[o][r] && l[o][r].forEach(function(e) {
                                e(a)
                            })
                        },
                        subscribe: function(e) {
                            var n = e.name,
                                t = void 0 === n ? "" : n,
                                o = e.callback,
                                i = void 0 === o ? function() {} : o,
                                a = e.scope,
                                d = void 0 === a ? "page" : a;
                            l[t] || (l[t] = {}), l[t][d] || (l[t][d] = []);
                            var r = l[t][d].push(i) - 1;
                            return s[t] && s[t][d] && s[t][d].length && s[t][d].forEach(function(e) {
                                i(e)
                            }), {
                                remove: function() {
                                    return l[t][d].splice(r, 1)
                                }
                            }
                        },
                        unsubscribeToAll: function(n) {
                            Object.keys(l).forEach(function(e) {
                                l[e] && l[e][n] && delete l[e][n]
                            }), Object.keys(s).forEach(function(e) {
                                s[e] && s[e][n] && delete s[e][n]
                            })
                        }
                    }), E.initializeAd = function(d, e) {
                        if (E.props) {
                            var n = E.props,
                                t = n.adTargeting,
                                r = n.adUnitPath,
                                o = n.sizeMapping,
                                i = n.hideTopAd,
                                a = n.isSocrates,
                                s = e.id,
                                l = e.position,
                                c = e.sizeKey,
                                u = e.lazyLoad,
                                p = e.truePosition,
                                g = c || l,
                                f = g in o ? o[g] : o.default;
                            if (("top" !== l || !i) && s && r && f && d && d.classList && !d.classList.contains("placed-ad"))
                                if (t && t.gdprUser && t.noTracking || R() || a) E.events.publish({
                                    name: "AdEmpty",
                                    value: {
                                        type: "AdsDisabled"
                                    }
                                });
                                else if (w) E.events.publish({
                                name: "AdEmpty",
                                value: {
                                    type: s
                                },
                                scope: s
                            });
                            else {
                                var v = window.googletag;
                                v.cmd.push(function() {
                                    var e;
                                    if (C()) {
                                        var i = window.outerWidth,
                                            n = f.reduce(function(e, n) {
                                                var t = Number.isInteger(n[0]) ? n[0] : null,
                                                    o = e.prevVp;
                                                return t < i && o < t && (e.prevVp = t, e.sizes = n[1]), e
                                            }, {
                                                prevVp: -1,
                                                sizes: []
                                            });
                                        e = b(r, n.sizes, s)
                                    } else {
                                        e = b(r, [], s);
                                        var t = v.sizeMapping();
                                        f.forEach(function(e) {
                                            t.addSize([e[0], 0], e[1])
                                        }), e.defineSizeMapping(t.build())
                                    }
                                    var o = p || l;
                                    e.setTargeting("div", s), e.setTargeting("pos", o), e.setCollapseEmptyDiv(!0), e.addService(v.pubads());
                                    var a = {
                                        id: s,
                                        slot: e,
                                        AdSlotElement: d,
                                        sizes: f
                                    };
                                    if (E.events.publish({
                                            name: "AdDefined",
                                            value: {
                                                id: s,
                                                sizes: f,
                                                truePosition: p,
                                                timeDefined: O(s, "timeDefined", "responseStart")
                                            },
                                            scope: s
                                        }), z) return h(s, e), a.displayed = !0, void y(a);
                                    u && !A(d, 0, 0, 0, 0, m) || (E.events.publish({
                                        name: "AdCalled",
                                        value: {
                                            id: s,
                                            timeCalled: O(s, "timeCalled", "responseStart")
                                        },
                                        scope: s
                                    }), h(s, e), a.displayed = !0), y(a)
                                })
                            }
                        } else E.events.subscribe({
                            name: "AdSlotReady",
                            callback: function() {
                                return E.initializeAd(d, e)
                            }
                        })
                    }, E.fillPlacements = function() {
                        var e = document.querySelectorAll(".place-ad:not(.placed-ad)");
                        if (e)
                            for (var n = 0; n < e.length; n++) {
                                var t = e[n],
                                    o = t.id,
                                    i = t.dataset,
                                    a = i.position,
                                    d = i.sizeKey,
                                    r = "false" !== i.lazyLoad;
                                o && a && (E.initializeAd(t, {
                                    id: o,
                                    position: a,
                                    sizeKey: d,
                                    lazyLoad: r
                                }), t.classList.add("placed-ad"))
                            }
                    }, E.updateAdReq = function(n, t) {
                        window.googletag.cmd.push(function() {
                            t && r[t] ? Object.keys(n).forEach(function(e) {
                                r[t].slot.setTargeting(e, "".concat(n[e]))
                            }) : Object.keys(n).forEach(function(e) {
                                window.googletag.pubads().setTargeting(e, "".concat(n[e]))
                            })
                        })
                    }, E.refreshAds = function() {
                        m = !(p = u = !0), c = [], t ? Object.keys(r).forEach(function(e) {
                            var n = r[e],
                                t = n.observer,
                                o = n.displayed,
                                i = n.AdSlotElement;
                            c.push(n), o && (t && t.unobserve(i), n.observer = a(n))
                        }) : (Object.keys(r).forEach(function(e) {
                            c.push(r[e])
                        }), z ? c.forEach(function(e) {
                            i(e)
                        }) : e()), setTimeout(function() {
                            m = !0
                        }, 2e3)
                    }, E.init = function(e) {
                        var n = e || {},
                            t = n.adTargeting,
                            i = void 0 === t ? {} : t,
                            o = n.adUnitPath,
                            a = void 0 === o ? "" : o,
                            d = n.offset,
                            r = void 0 === d ? 400 : d,
                            s = n.haltDFP,
                            l = void 0 !== s && s,
                            c = n.lockdownAds,
                            u = void 0 !== c && c,
                            p = n.hideTopAd,
                            g = void 0 !== p && p,
                            f = n.sizeMapping,
                            v = void 0 === f ? {} : f,
                            m = n.lazyApi,
                            w = void 0 === m ? {} : m,
                            h = "s" === I("nyt-purr").substring(1, 2),
                            b = l || h;
                        if (!S) {
                            i.vp = window.matchMedia("(min-width: 970px)").matches ? "large" : window.matchMedia("(min-width: 728px)").matches ? "medium" : "small", i.aid = I("nyt-a") || null;
                            var y = P("ad-keywords");
                            y && (i.adv = y);
                            var A = P("debugads");
                            A && (i.debugAdsQP = A), "1" === I("nyt-gdpr") && (i.gdprUser = !0), "out" === I("NYT-T").toLowerCase() && (i.noTracking = !0), E.props = {
                                adTargeting: i,
                                adUnitPath: a,
                                offset: r,
                                sizeMapping: v,
                                hideTopAd: g,
                                isSocrates: h,
                                lazyApi: w
                            }, window.googletag = window.googletag || {}, window.googletag.cmd = window.googletag.cmd || [], window.googletag.cmd.push(function() {
                                var t, n, e, o = (t = i, n = window.googletag.pubads().getTargetingKeys(), Object.keys(t).filter(function(e) {
                                    return n.indexOf(e) < 0
                                }).reduce(function(e, n) {
                                    return e[n] = t[n], e
                                }, {}));
                                Object.keys(o).forEach(function(e) {
                                    window.googletag.pubads().setTargeting(e, o[e])
                                }), (i.gdprUser || j() === x.nonPersonalized) && window.googletag.pubads().setRequestNonPersonalizedAds(1), w.fetch && w.render ? (z = !0, e = w, window.googletag.cmd.push(function() {
                                    window.googletag.pubads().enableLazyLoad({
                                        fetchMarginPercent: e.fetch,
                                        renderMarginPercent: e.render
                                    }), window.googletag.enableServices()
                                })) : (window.googletag.enableServices(), k()), E.fillPlacements(), window.googletag.pubads().addEventListener("slotRenderEnded", function(e) {
                                    var n = e.slot.getSlotElementId();
                                    e.timeRendered = O(n, "timeRendered", "".concat(n, "-timeCalled")), e.isEmpty ? E.events.publish({
                                        name: "AdEmpty",
                                        value: {
                                            type: n
                                        },
                                        scope: n
                                    }) : E.events.publish({
                                        name: "AdRendered",
                                        value: e,
                                        scope: n
                                    })
                                }), window.googletag.pubads().addEventListener("slotOnload", function(e) {
                                    var n = e.slot.getSlotElementId();
                                    e.timeLoaded = O(n, "timeLoaded", "".concat(n, "-timeCalled")), E.events.publish({
                                        name: "AdLoaded",
                                        value: e,
                                        scope: n
                                    })
                                }), window.googletag.pubads().addEventListener("impressionViewable", function(e) {
                                    var n = e.slot.getSlotElementId();
                                    e.timeViewed = O(n, "timeViewed", "".concat(n, "-timeCalled")), E.events.publish({
                                        name: "AdViewable",
                                        value: e,
                                        scope: n
                                    })
                                })
                            }), u ? window.googletag.cmd.push(function() {
                                window.googletag.pubads().setForceSafeFrame(!0)
                            }) : window.addEventListener("message", function(e) {
                                (e.origin.match(/tpc.googlesyndication.com$/) || e.origin === window.location.origin) && L(e)
                            }, !1), T(b), E.events.publish({
                                name: "AdSlotReady"
                            }), S = !0
                        }
                    }, E.cmd)
                    for (; E.cmd.length;) E.cmd.shift()();
                return E.cmd = {
                    length: 0,
                    push: function(e) {
                        e()
                    }
                }, window.AdSlot4 = E
            }()
        }();
        var AdSlot4 = function() {
            "use strict";

            function _(n, i, o) {
                var t = document.getElementsByTagName("head")[0],
                    e = document.createElement("script");
                i && (e.onload = i), o && (e.onerror = o), e.src = n, e.async = !0, t.appendChild(e)
            }

            function E(n) {
                var i = document.cookie.match(new RegExp("".concat(n, "=([^;]+)")));
                return i ? i[1] : ""
            }
            var n = {
                adConfigPosition: 1,
                nonPersonalized: "n",
                collapsed: "c",
                full: "f",
                socrates: "s"
            };

            function S() {
                return (E("nyt-purr")[n.adConfigPosition] || "") === n.full
            }
            var d = [{
                id: "dfp-ad-top",
                sizes: {
                    large: [
                        [728, 90],
                        [970, 90],
                        [970, 250]
                    ],
                    medium: [
                        [728, 90],
                        [300, 250]
                    ],
                    small: [
                        [300, 250],
                        [300, 420]
                    ]
                }
            }, {
                id: "top",
                sizes: {
                    large: [
                        [728, 90],
                        [970, 90],
                        [970, 250]
                    ],
                    medium: [
                        [728, 90],
                        [300, 250]
                    ],
                    small: [
                        [300, 250],
                        [300, 420]
                    ]
                }
            }];
            return function() {
                var z = window.AdSlot4 || {};
                z.cmd = z.cmd || [];
                var b = !1;
                if (z.loadScripts) return z;
                var o, e = window.innerWidth;

                function a(t) {
                    z.events.subscribe({
                        name: "AdDefined",
                        scope: "all",
                        callback: function(n) {
                            var o, i = [-1];
                            n.sizes.forEach(function(n) {
                                n[0] < e && n[0] > i[0] && (i = [n])
                            }), i[0][1] && window.apstag.fetchBids({
                                slots: [{
                                    slotID: n.truePosition || n.id,
                                    slotName: "".concat(n.id, "_").concat(t, "_web"),
                                    sizes: (o = i[0][1], Array.isArray(o) ? [
                                        [300, 250],
                                        [728, 90],
                                        [970, 90],
                                        [970, 250]
                                    ].filter(function(i) {
                                        return o.some(function(n) {
                                            return n[0] === i[0] && n[1] === i[1]
                                        })
                                    }) : (console.warn("filterSizes() did not receive an array"), []))
                                }]
                            }, function() {
                                window.googletag.cmd.push(function() {
                                    window.apstag.setDisplayBids()
                                })
                            })
                        }
                    })
                }

                function D(n, i) {
                    "art, oak" !== n && "art,oak" !== n || (n = "art"), z.cmd.push(function() {
                        var t, e;
                        i && window.apstag.fetchBids({
                            slots: (t = o, e = n, d.reduce(function(n, i) {
                                var o = {
                                    slotID: i.id,
                                    slotName: "".concat(i, "_").concat(e, "_web"),
                                    sizes: i.sizes[t]
                                };
                                return n.push(o), n
                            }, []))
                        }, function() {
                            window.googletag.cmd.push(function() {
                                window.apstag.setDisplayBids()
                            })
                        }), a(n)
                    })
                }
                return e <= 600 ? o = "small" : e <= 740 ? o = "medium" : 740 < e && (o = "large"), z.loadScripts = function(n) {
                    var i, o, t, e, a, d, s, c = n || {},
                        r = c.loadMnet,
                        u = void 0 === r || r,
                        l = c.loadAmazon,
                        w = void 0 === l || l,
                        p = c.setFastFetch,
                        f = void 0 !== p && p,
                        m = c.loadBait,
                        g = void 0 === m || m,
                        v = c.section,
                        h = void 0 === v ? "none" : v,
                        y = c.pageViewId,
                        B = void 0 === y ? "" : y,
                        x = c.pageType,
                        A = void 0 === x ? "" : x;
                    b || ("1" !== E("nyt-gdpr") && (i = document.referrer || "", !((o = /([a-zA-Z0-9_\-.]+)(@|%40)([a-zA-Z0-9_\-.]+).([a-zA-Z]{2,5})/).test(i) || o.test(window.location.href))) && S() && (!u || window.advBidxc && window.advBidxc.isLoaded || (d = B, s = "8CU2553YN", window.innerWidth < 740 && (s = "8CULO58R6"), _("https://contextual.media.net/bidexchange.js?cid=".concat(s, "&dn=").concat("www.nytimes.com", "&https=1"), function() {
                        window.advBidxc && window.advBidxc.isLoaded || console.warn("Media.net not loading properly")
                    }, function() {
                        z.cmd.push(function() {
                            z.events.publish({
                                name: "BidderError",
                                value: {
                                    type: "Mnet"
                                }
                            })
                        })
                    }), window.advBidxc = window.advBidxc || {}, window.advBidxc.renderAd = function() {}, window.advBidxc.startTime = (new Date).getTime(), window.advBidxc.customerId = {
                        mediaNetCID: s
                    }, window.advBidxc.misc = {
                        isGptDisabled: 1
                    }, d && (window.advBidxc.misc.keywords = d)), w && !window.apstag && (t = h, e = A, a = f, function(o, t) {
                        function n(n, i) {
                            t[o]._Q.push([n, i])
                        }
                        t[o] || (t[o] = {
                            init: function() {
                                n("i", arguments)
                            },
                            fetchBids: function() {
                                n("f", arguments)
                            },
                            setDisplayBids: function() {},
                            targetingKeys: function() {
                                return []
                            },
                            _Q: []
                        })
                    }("apstag", window), _("//c.amazon-adsystem.com/aax2/apstag.js", function() {
                        window.apstag || console.warn("A9 not loading properly")
                    }, function() {
                        z.cmd.push(function() {
                            z.events.publish({
                                name: "BidderError",
                                value: {
                                    type: "A9"
                                }
                            })
                        })
                    }), window.apstag.init({
                        pubID: "3030",
                        adServer: "googletag",
                        params: {
                            si_section: t
                        }
                    }), D(e, a))), g && _("https://nytimes.com/ads/google/adsbygoogle.js", function() {}, function() {
                        z.cmd.push(function() {
                            z.events.publish({
                                name: "AdEmpty",
                                value: {
                                    type: "AdBlockOn"
                                }
                            })
                        })
                    }), b = !0)
                }, window.AdSlot4 = z
            }()
        }();
    </script>
    -->
