! function(e, t) {
    "object" == typeof exports && "undefined" != typeof module ? t(require("react"), require("react-dom"), require("react-redux"), require("foundation"), require("redux-thunk"), require("redux"), require("reselect"), require("prop-types"), require("classnames")) : "function" == typeof define && define.amd ? define(["react", "react-dom", "react-redux", "foundation", "redux-thunk", "redux", "reselect", "prop-types", "classnames"], t) : t((e = e || self).React, e.ReactDOM, e.ReactRedux, e.Foundation, e.ReduxThunk, e.Redux, e.Reselect, e.PropTypes, e.classNames)
}(this, function(r, i, e, u, n, a, t, o, f) {
    "use strict";
    var d = "default" in r ? r.default : r;

    function m(e) {
        return function(e) {
            if (Array.isArray(e)) return c(e)
        }(e) || function(e) {
            if ("undefined" != typeof Symbol && Symbol.iterator in Object(e)) return Array.from(e)
        }(e) || function(e, t) {
            if (!e) return;
            if ("string" == typeof e) return c(e, t);
            var n = Object.prototype.toString.call(e).slice(8, -1);
            "Object" === n && e.constructor && (n = e.constructor.name);
            if ("Map" === n || "Set" === n) return Array.from(n);
            if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return c(e, t)
        }(e) || function() {
            throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
        }()
    }

    function c(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
        return r
    }
    i = i && Object.prototype.hasOwnProperty.call(i, "default") ? i.default : i, n = n && Object.prototype.hasOwnProperty.call(n, "default") ? n.default : n, o = o && Object.prototype.hasOwnProperty.call(o, "default") ? o.default : o, f = f && Object.prototype.hasOwnProperty.call(f, "default") ? f.default : f;

    function l(t) {
        return new Promise(function(e) {
            setTimeout(e, t)
        })
    }
    var s = u.userType.hasXwd ? 0 : 9;

    function p(e) {
        return (p = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
            return typeof e
        } : function(e) {
            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
        })(e)
    }

    function y(t, e) {
        var n = Object.keys(t);
        if (Object.getOwnPropertySymbols) {
            var r = Object.getOwnPropertySymbols(t);
            e && (r = r.filter(function(e) {
                return Object.getOwnPropertyDescriptor(t, e).enumerable
            })), n.push.apply(n, r)
        }
        return n
    }

    function b(e, t) {
        for (var n = 0; n < t.length; n++) {
            var r = t[n];
            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
        }
    }

    function g(r) {
        return function() {
            var e, t = v(r);
            if (function() {
                    if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                    if (Reflect.construct.sham) return !1;
                    if ("function" == typeof Proxy) return !0;
                    try {
                        return Date.prototype.toString.call(Reflect.construct(Date, [], function() {})), !0
                    } catch (e) {
                        return !1
                    }
                }()) {
                var n = v(this).constructor;
                e = Reflect.construct(t, arguments, n)
            } else e = t.apply(this, arguments);
            return function(e, t) {
                return !t || "object" !== p(t) && "function" != typeof t ? h(e) : t
            }(this, e)
        }
    }

    function h(e) {
        if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return e
    }

    function v(e) {
        return (v = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
            return e.__proto__ || Object.getPrototypeOf(e)
        })(e)
    }

    function E(e, t) {
        return (E = Object.setPrototypeOf || function(e, t) {
            return e.__proto__ = t, e
        })(e, t)
    }

    function w(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n, e
    }

    function O(e) {
        return (O = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
            return typeof e
        } : function(e) {
            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
        })(e)
    }

    function N(e, t) {
        for (var n = 0; n < t.length; n++) {
            var r = t[n];
            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
        }
    }

    function S(r) {
        return function() {
            var e, t = k(r);
            if (function() {
                    if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                    if (Reflect.construct.sham) return !1;
                    if ("function" == typeof Proxy) return !0;
                    try {
                        return Date.prototype.toString.call(Reflect.construct(Date, [], function() {})), !0
                    } catch (e) {
                        return !1
                    }
                }()) {
                var n = k(this).constructor;
                e = Reflect.construct(t, arguments, n)
            } else e = t.apply(this, arguments);
            return function(e, t) {
                return !t || "object" !== O(t) && "function" != typeof t ? function(e) {
                    if (void 0 !== e) return e;
                    throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
                }(e) : t
            }(this, e)
        }
    }

    function k(e) {
        return (k = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
            return e.__proto__ || Object.getPrototypeOf(e)
        })(e)
    }

    function _(e, t) {
        return (_ = Object.setPrototypeOf || function(e, t) {
            return e.__proto__ = t, e
        })(e, t)
    }
    var T = function() {
        ! function(e, t) {
            if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    writable: !0,
                    configurable: !0
                }
            }), t && _(e, t)
        }(r, d.Component);
        var n = S(r);

        function r(e) {
            var t;
            return function(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }(this, r), (t = n.call(this, e)).state = {
                href: "mailto:NYTCrossword@nytimes.com"
            }, t
        }
        return function(e, t, n) {
            t && N(e.prototype, t), n && N(e, n)
        }(r, [{
            key: "componentDidMount",
            value: function() {
                var t = this,
                    e = this.props.subject;
                u.getFeedbackLink(e).then(function(e) {
                    return t.setState({
                        href: e
                    })
                })
            }
        }, {
            key: "render",
            value: function() {
                var e = this.props,
                    t = e.href,
                    n = e.subject,
                    r = e.children,
                    o = this.state.href,
                    a = t && n ? n : "",
                    c = t ? "".concat(t, "?subject=").concat(a) : o;
                return d.createElement("a", {
                    rel: "noopener noreferrer",
                    target: "_blank",
                    href: c
                }, r)
            }
        }]), r
    }();
    T.defaultProps = {
        subject: "",
        href: "",
        children: null
    }, T.propTypes = {
        subject: o.string,
        href: o.string,
        children: o.string
    };

    //TODO - filter out NYT
    var j = function() {
        return d.createElement(d.Fragment, null, d.createElement("h3", {
            className: "sb-modal-title"
        }, "How to Play"), d.createElement("h4", {
            className: "sb-modal-heading"
        }, "Create words using letters from the hive."), d.createElement("ul", {
            className: "sb-modal-list"
        }, d.createElement("li", null, "Words must contain at least 4 letters."), d.createElement("li", null, "Words must include the center letter."), d.createElement("li", null, "Our word list does not include words that are obscure, hyphenated, or proper nouns."), d.createElement("li", null, "No cussing either, sorry."), d.createElement("li", null, "Letters can be used more than once.")), d.createElement("h4", {
            className: "sb-modal-heading"
        }, "Score points to increase your rating."), d.createElement("ul", {
            className: "sb-modal-list"
        }, d.createElement("li", null, "4-letter words are worth 1 point each."), d.createElement("li", null, "Longer words earn 1 point per letter."), d.createElement("li", null, "Each puzzle includes at least one “pangram” which uses every letter. These are worth 7 extra points!")), d.createElement("p", {
            className: "sb-modal-message"
        }, "New puzzles are released daily at 3:00 a.m. ET."), d.createElement("p", {
            className: "sb-modal-message"
        }, "Think we missed a word? Email us at", " ", d.createElement(T, {
            subject: "Spelling Bee Word Suggestion",
            href: "mailto:buzzwords@nytimes.com"
        }, "buzzwords@nytimes.com"), "."), d.createElement("p", {
            className: "sb-modal-message"
        }, "Have feedback? Email us at ", d.createElement(T, {
            subject: "Spelling Bee Feedback"
        }, "NYTCrossword@nytimes.com"), "."))
    };
    j.propTypes = {};

    //TODO - filter out NYT
    function L(e) {
        var t = e.ranks;
        return d.createElement(d.Fragment, null, d.createElement("h3", {
            className: "sb-modal-title"
        }, "Rankings"), d.createElement("p", {
            className: "sb-modal-message"
        }, "Ranks are based on a percentage of possible points in a puzzle. The minimum scores to reach each rank for today’s are:"), d.createElement("ol", {
            className: "sb-modal-list"
        }, t.map(function(e) {
            var t = e.minScore,
                n = e.title;
            return d.createElement("li", {
                key: n
            }, "".concat(n, " (").concat(t, ")"))
        })), d.createElement("p", {
            className: "sb-modal-message"
        }, "Have feedback? Email us at ", d.createElement(T, {
            subject: "Spelling Bee Feedback"
        }, "NYTCrossword@nytimes.com"), "."))
    }
    L.propTypes = {
        ranks: o.arrayOf(o.shape({
            minScore: o.number.isRequired,
            title: o.string.isRequired
        }))
    };

    function P() {
        window.localStorage.removeItem(I)
    }

    //TODO - filter out NYT
    function R(e) {
        return u.xhr.get("".concat(u.env.api, "/svc/spelling-bee/v1/game/").concat(e, ".json")).then(function(e) {
            return e.answers
        }).catch(function(e) {
            console.error("unable to get remote progress", e)
        })
    }

    //TODO - filter out NYT
    function C(e, t) {
        return t.length ? u.xhr.put("".concat(u.env.api, "/svc/spelling-bee/v1/game.json"), {
            puzzleID: e,
            answers: t
        }) : Promise.resolve()
    }

    //TODO - filter out NYT
    function W(t, n, r) {
        function o() {
            if (window.SIMULATE_OFFLINE) return Promise.reject(new Error("simulating offline"));
            var e = t.getState().foundWords;
            ! function(e, t) {
                if (t.length) try {
                    window.localStorage.setItem(I, JSON.stringify({
                        id: e,
                        words: t
                    }))
                } catch (e) {
                    console.error("local storage failure:", e)
                }
            }(a, e), C(a, e).catch(function(e) {
                console.error("unable to save remote progress", e)
            })
        }
        var e = t.getState(),
            a = e.id,
            c = e.yesterday.id,
            s = function(e) {
                var t, n = window.localStorage.getItem(I);
                if (n) try {
                    var r = JSON.parse(n);
                    t = r.words, e !== r.id && (t = P())
                } catch (e) {
                    t = P(), console.error("could not parse local progress: ".concat(n))
                }
                return t
            }(a),
            l = 0;
        R(c).then(function(e) {
            r(e)
        }), s && (l = s.length, n(s)), R(a).then(function(e) {
            e && n(e), o()
        }), t.subscribe(function() {
            var e = t.getState().foundWords;
            l !== e.length && (l = e.length, 0 === e.length ? (function(e) {
                delete window.resetProgressComplete, u.xhr.delete("".concat(u.env.api, "/svc/spelling-bee/v1/game/").concat(e, ".json")).then(function() {
                    window.resetProgressComplete = !0
                }).catch(function(e) {
                    console.error(e)
                })
            }(a), P()) : o())
        }), window.addEventListener("online", o)
    }
    var D, x, M, z, A = e.connect(function(e) {
            return {
                ranks: Je(e)
            }
        })(L),
        I = "sb-today",
        q = ["modal", "gameplay", "settings", "general"],
        B = ["tech", "gameplay", "settings"],
        U = (D = "SB", x = u.getGameData().today.id, M = "".concat(D, "-").concat(x), z = {
            interaction: {},
            impression: {}
        }, q.forEach(function(n) {
            z.interaction[n] = function(e, t) {
                return K("moduleInteraction", n, e, t)
            }
        }), B.forEach(function(n) {
            z.impression[n] = function(e, t) {
                return K("impression", n, e, t)
            }
        }), z);

    function K(e, t, n, r) {
        u.track(e, "moduleInteraction" === e ? {
            module: {
                name: t,
                context: M,
                element: {
                    name: n || "",
                    label: "string" == typeof r ? r : JSON.stringify(r)
                }
            },
            eventData: {
                pageType: "game",
                type: "click",
                trigger: "module",
                status: ""
            }
        } : {
            module: {
                name: t,
                context: M,
                region: n || "",
                label: "string" == typeof r ? r : JSON.stringify(r)
            }
        })
    }

    //TODO - filter out NYT

    function F(e) {
        var t = e.children,
            n = void 0 === t ? "Back to the hub" : t,
            r = e.triggerName,
            o = e.disabled;
        return d.createElement("a", {
            className: f("sb-modal-button", {
                disabled: o
            }),
            href: "/puzzles",
            onClick: function(e) {
                if (o) return e.preventDefault();
                U.interaction.gameplay("back-to-hub", r)
            }
        }, n)
    }

    function G(e) {
        return (G = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
            return typeof e
        } : function(e) {
            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
        })(e)
    }

    function Y(e, t) {
        for (var n = 0; n < t.length; n++) {
            var r = t[n];
            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
        }
    }

    function H(r) {
        return function() {
            var e, t = X(r);
            if (function() {
                    if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                    if (Reflect.construct.sham) return !1;
                    if ("function" == typeof Proxy) return !0;
                    try {
                        return Date.prototype.toString.call(Reflect.construct(Date, [], function() {})), !0
                    } catch (e) {
                        return !1
                    }
                }()) {
                var n = X(this).constructor;
                e = Reflect.construct(t, arguments, n)
            } else e = t.apply(this, arguments);
            return function(e, t) {
                return !t || "object" !== G(t) && "function" != typeof t ? function(e) {
                    if (void 0 !== e) return e;
                    throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
                }(e) : t
            }(this, e)
        }
    }

    function X(e) {
        return (X = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
            return e.__proto__ || Object.getPrototypeOf(e)
        })(e)
    }

    function J(e, t) {
        return (J = Object.setPrototypeOf || function(e, t) {
            return e.__proto__ = t, e
        })(e, t)
    }
    F.propTypes = {
        children: o.string,
        triggerName: o.string.isRequired,
        disabled: o.bool
    };
    var Q = function() {
        ! function(e, t) {
            if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    writable: !0,
                    configurable: !0
                }
            }), t && J(e, t)
        }(r, d.Component);
        var n = H(r);

    //TODO - filter out NYT

        function r(e) {
            var t;
            return function(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }(this, r), (t = n.call(this, e)).state = {
                buttonText: "Back to the hub",
                message: "Your progress auto-saves, so feel free to leave and come back later today.",
                pending: !0
            }, t
        }
        return function(e, t, n) {
            t && Y(e.prototype, t), n && Y(e, n)
        }(r, [{
            key: "componentDidMount",
            value: function() {
                var e = this,
                    t = this.props,
                    n = t.foundWords,
                    r = t.id;
                C(r, n).then(function() {
                    e.setState({
                        pending: !1
                    })
                }).catch(function() {
                    e.setState({
                        buttonText: "Something went wrong",
                        message: "Your progress is stored on this device but may not be synced to other devices."
                    })
                })
            }
        }, {
            key: "render",
            value: function() {
                var e = this.state,
                    t = e.message,
                    n = e.pending,
                    r = e.buttonText;
                return d.createElement(d.Fragment, null, d.createElement("div", {
                    className: "sb-modal-image bee-sleepy"
                }), d.createElement("h3", {
                    className: "sb-modal-title"
                }, "See you later"), d.createElement("p", {
                    className: "sb-modal-message"
                }, t), d.createElement("div", {
                    className: "sb-modal-buttons-section"
                }, d.createElement(F, {
                    disabled: n,
                    triggerName: "see-you-later"
                }, r)))
            }
        }]), r
    }();
    Q.defaultProps = {
        foundWords: [],
        id: null
    }, Q.propTypes = {
        foundWords: o.arrayOf(o.string),
        id: o.number
    };

    //TODO - filter out NYT

    function V(e) {
        var t = e.editor;
        return d.createElement(d.Fragment, null, d.createElement("div", {
            className: "sb-modal-image bee-ready"
        }), d.createElement("h3", {
            className: "pz-modal__title"
        }, "Spelling Bee"), d.createElement("p", {
            className: "pz-modal__message"
        }, "How many words can you make with 7 letters?"), d.createElement("div", {
            className: "pz-byline"
        }, d.createElement("span", {
            className: "pz-byline__text"
        }, "Edited by", t)))
    }
    var $ = e.connect(function(e) {
        return {
            foundWords: e.foundWords,
            id: e.id
        }
    })(Q);
    V.propTypes = {
        editor: o.string
    };

    //TODO - filter out NYT

    function Z(e) {
        var t = e.wordCount,
            n = e.score;
        return d.createElement(d.Fragment, null, d.createElement("h3", {
            className: "pz-modal__title"
        }, "Welcome Back"), d.createElement("p", {
            className: "pz-modal-message"
        }, "You’ve found", d.createElement("em", null, " ".concat(t, " word").concat(1 < t ? "s" : "")), d.createElement("br", null), "and have", d.createElement("em", null, " ".concat(n, " point").concat(1 < n ? "s" : "")), "."))
    }
    Z.propTypes = {
        wordCount: o.number,
        score: o.number
    };

    //TODO - filter out NYT

    function ee(e) {
        var t = e.toggleModal;
        return d.createElement("button", {
            type: "button",
            className: "pz-modal__button white",
            onClick: function() {
                return t("yesterday", "get-started")
            }
        }, "Yesterday")
    }
    ee.propTypes = {
        toggleModal: o.func.isRequired
    };

    //TODO - filter out NYT

    function te(e) {
        var t = e.toggleModal,
            n = e.isReturning;
        return d.createElement("button", {
            type: "button",
            className: "pz-modal__button dark",
            onClick: function() {
                t(null, "get-started")
            }
        }, n ? "Continue" : "Play")
    }
    te.propTypes = {
        toggleModal: o.func.isRequired,
        isReturning: o.bool
    };

    //TODO - filter out NYT

    function ne(e) {
        var t = e.tag,
            n = void 0 === t ? "cutoff-start" : t,
            r = e.styleName,
            o = void 0 === r ? "white" : r;
        return d.createElement("button", {
            type: "button",
            className: "pz-modal__button ".concat(o),
            onClick: function() {
                return window.location.href = function(e) {
                    return "/puzzles/subscribe/spelling-bee?campaign=".concat(e)
                }(n), null
            }
        }, "Subscribe")
    }
    ne.propTypes = {
        tag: o.string,
        styleName: o.string
    };

    //TODO - filter out NYT

    function re(e) {
        var t = e.score,
            n = e.wordCount,
            r = e.toggleModal,
            o = e.editor,
            a = 0 < n,
            c = a ? "returning" : "new";
        return d.createElement("div", {
            className: "welcome-modal ".concat(c)
        }, a ? d.createElement(Z, {
            wordCount: n,
            score: t
        }) : d.createElement(V, {
            editor: o
        }), d.createElement("div", {
            className: "sb-modal-buttons-section"
        }, d.createElement(te, {
            toggleModal: r,
            isReturning: a
        }), d.createElement("div", {
            className: "pz-button__wrapper"
        }, d.createElement("button", {
            type: "button",
            className: "pz-modal__button white",
            onClick: function() {
                return r("help", "get-started")
            }
        }, "Rules"), d.createElement(ee, {
            toggleModal: r
        }))))
    }
    re.propTypes = {
        toggleModal: o.func.isRequired,
        wordCount: o.number,
        score: o.number,
        editor: o.string
    };

    //TODO - filter out NYT

    function oe(e) {
        var t = e.lock,
            n = e.score,
            r = e.wordCount,
            o = e.toggleModal,
            a = e.editor,
            c = 0 < r,
            s = c ? "returning" : "new";
        return e.cutoff ? (t(), d.createElement("div", {
            className: "welcome-modal returning"
        }, d.createElement("h3", {
            className: "pz-modal__title"
        }, "Welcome Back"), d.createElement("p", {
            className: "pz-modal-message"
        }, "Subscribe to continue playing Spelling Bee or come back tomorrow."), d.createElement("div", {
            className: "sb-modal-buttons-section"
        }, d.createElement(ne, {
            tag: "cutoff-stop",
            styleName: "dark"
        })))) : d.createElement("div", {
            className: "welcome-modal ".concat(s)
        }, c ? d.createElement(Z, {
            wordCount: r,
            score: n
        }) : d.createElement(V, {
            editor: a
        }), d.createElement("div", {
            className: "sb-modal-buttons-section"
        }, d.createElement(te, {
            toggleModal: o,
            isReturning: c
        }), d.createElement("div", {
            className: "pz-button__wrapper"
        }, d.createElement("button", {
            type: "button",
            className: "pz-modal__button white",
            onClick: function() {
                return o("help", "get-started")
            }
        }, "Rules"), u.userType.hasXwd ? d.createElement(ee, {
            toggleModal: o
        }) : d.createElement(ne, {
            tag: c ? "cutoff-welcome-back" : "cutoff-start",
            styleName: "dark"
        }))))
    }
    var ae = e.connect(function(e) {
        var t = e.foundWords,
            n = e.editor;
        return {
            wordCount: t.length,
            score: Xe(e),
            editor: n
        }
    })(re);
    oe.propTypes = {
        toggleModal: o.func.isRequired,
        wordCount: o.number,
        score: o.number,
        editor: o.string,
        lock: o.func,
        cutoff: o.bool
    };

    //TODO - filter out NYT

    function ce(e) {
        var t = e.hasCompleted,
            n = e.toggleModal,
            r = e.score,
            o = e.wordCount,
            a = e.isHalloween;
        return t ? d.createElement(d.Fragment, null, d.createElement("div", {
            className: "sb-modal-image bee-queen"
        }), d.createElement("h3", {
            className: "sb-modal-title"
        }, "Queen Bee"), d.createElement("p", {
            className: "sb-modal-message"
        }, "You found everything! All", " ", d.createElement("em", null, "".concat(o, " words")), ", worth", " ", d.createElement("em", null, "".concat(r, " points")), "."), d.createElement("div", {
            className: "sb-modal-buttons-section"
        }, d.createElement(F, {
            triggerName: "completed-modal"
        }))) : d.createElement(d.Fragment, null, d.createElement("div", {
            className: f("sb-modal-image", a ? "bee-spooky" : "bee-smarty")
        }), d.createElement("h3", {
            className: "sb-modal-title"
        }, "Genius"), d.createElement("p", {
            className: "sb-modal-message"
        }, "You reached the highest rank, with", " ", d.createElement("em", null, "".concat(o, " words")), " ", "and", " ", d.createElement("em", null, "".concat(r, " points")), "."), d.createElement("div", {
            className: "sb-modal-buttons-section"
        }, d.createElement("button", {
            type: "button",
            className: "sb-modal-button sb-modal-button-secondary",
            onClick: function() {
                return n()
            }
        }, "Keep playing"), d.createElement(F, {
            triggerName: "genius-modal"
        })))
    }
    var se = e.connect(function(e) {
        var t = e.foundWords,
            n = e.editor;
        return {
            wordCount: t.length,
            score: Xe(e),
            editor: n,
            cutoff: et(e)
        }
    })(oe);
    ce.propTypes = {
        toggleModal: o.func,
        hasCompleted: o.bool,
        wordCount: o.number,
        score: o.number,
        isHalloween: o.bool
    };

    //TODO - filter out NYT

    function le(e) {
        var t = e.value,
            n = e.centerLetter,
            r = [],
            o = t.split(n),
            a = 0;
        return o.forEach(function(e, t) {
            a += 1, 0 < t && r.push(d.createElement("span", {
                key: a,
                className: "sb-anagram-key"
            }, n)), e && r.push(e)
        }), d.createElement("span", {
            className: "sb-anagram"
        }, r)
    }
    var ie = e.connect(function(e) {
        return {
            hasCompleted: Ze(e),
            wordCount: e.foundWords.length,
            score: Xe(e),
            isHalloween: /10-31/.test(e.printDate)
        }
    })(ce);
    le.propTypes = {
        value: o.string,
        centerLetter: o.string
    };

    //TODO - filter out NYT

    function ue(e) {
        var t = e.displayDate,
            n = e.centerLetter,
            r = e.validLetters,
            o = e.answers,
            a = e.foundWords;
        return d.createElement(d.Fragment, null, d.createElement("h3", {
            className: "sb-modal-title"
        }, "Yesterday’s Answers"), d.createElement("div", {
            className: "sb-modal-date__yesterday"
        }, t), d.createElement("div", {
            className: "sb-modal-letters"
        }, r), d.createElement("div", {
            className: "sb-modal-wordlist"
        }, d.createElement("ul", {
            className: "sb-modal-wordlist-items"
        }, o.map(function(e) {
            return d.createElement("li", {
                key: e,
                "data-testid": "yesterdays-answer-word"
            }, d.createElement(le, {
                value: e,
                centerLetter: n
            }), a.includes(e) && d.createElement("span", {
                className: "check"
            }))
        }))))
    }
    ue.propTypes = {
        displayDate: o.string,
        centerLetter: o.string,
        validLetters: o.arrayOf(o.string),
        answers: o.arrayOf(o.string),
        foundWords: o.arrayOf(o.string)
    };

    //TODO - filter out NYT

    function fe(e) {
        var t = e.lock;

        function n() {
            return d.createElement("button", {
                type: "button",
                className: "pz-modal__button white",
                onClick: function() {
                    return window.location.href = "http://nytimes.com/puzzles", null
                }
            }, "Quit")
        }
        return d.useEffect(function() {
            t()
        }, []), d.createElement("div", {
            className: "welcome-modal new"
        }, d.createElement("div", {
            className: "sb-modal-image bee-loved"
        }), d.createElement("h3", {
            className: "pz-modal__title"
        }, "You’re pretty good at this!"), d.createElement("p", {
            className: "pz-modal-message"
        }, "Know more words? Subscribe to rank up even more."), d.createElement("div", {
            className: "sb-modal-buttons-section"
        }, d.createElement("div", {
            className: "pz-button__wrapper"
        }, d.createElement(n, null), d.createElement(ne, {
            tag: "cutoff-stop",
            styleName: "dark"
        }))))
    }
    var de = e.connect(function(e) {
        var t = e.yesterday;
        return {
            displayDate: t.displayDate,
            centerLetter: t.centerLetter,
            validLetters: t.validLetters,
            answers: t.answers,
            foundWords: t.foundWords
        }
    })(ue);
    fe.propTypes = {
        lock: o.func
    };

    //TODO - filter out NYT

    function me(e) {
        var t = e.children,
            n = e.toggleModal,
            r = e.modalType,
            o = [j, A, de].includes(pe[r]),
            a = d.createElement("div", {
                role: "button",
                className: "sb-modal-close",
                onClick: function() {
                    return n()
                }
            }, "×");
        return d.createElement("div", {
            role: "button",
            className: f("sb-modal-frame", {
                "left-aligned": o
            }, r),
            onClick: function(e) {
                return e.stopPropagation()
            }
        }, o && a, d.createElement("div", {
            className: "sb-modal-content"
        }, t))
    }
        //TODO - filter out NYT

    var pe = {
        start: 0 < s ? se : ae,
        help: j,
        ranks: A,
        save: $,
        congrats: ie,
        yesterday: de,
        cutoff: fe
    };
    me.propTypes = {
        toggleModal: o.func,
        children: o.element,
        modalType: o.string
    };

    function ye(e, t) {
        return be.toggleModal(e, t)
    }
    var be = function(a, c, s) {
            var l = {},
                e = Object.keys(a),
                t = function() {
                    ! function(e, t) {
                        if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                        e.prototype = Object.create(t && t.prototype, {
                            constructor: {
                                value: e,
                                writable: !0,
                                configurable: !0
                            }
                        }), t && E(e, t)
                    }(n, r.Component);
                    var t = g(n);

                    function n(e) {
                        var u;
                        return function(e, t) {
                            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                        }(this, n), w(h(u = t.call(this, e)), "toggleModal", function(e, t) {
                            var n = u.state,
                                r = n.isOpen,
                                o = n.locked,
                                a = n.currentModal,
                                c = u.props,
                                s = c.onOpen,
                                l = c.onClose;
                            if (!o) {
                                var i = "string" == typeof e && e;
                                i ? (s && s(i, t), r ? u.setState({
                                    currentModal: i
                                }) : u.setThenWaitThenSet({}, {
                                    isOpen: !0,
                                    currentModal: i
                                })) : (l && l(a, t), u.setThenWaitThenSet({
                                    isClosing: !0
                                }, {
                                    isClosing: !1,
                                    isOpen: !1,
                                    currentModal: null
                                }))
                            }
                        }), u.state = {
                            currentModal: e.initialModal || null,
                            isOpen: !!e.initialModal,
                            isClosing: !1
                        }, l.toggleModal = u.toggleModal, l.lock = u.lock, l.unlock = u.unlock, u
                    }
                    return function(e, t, n) {
                        t && b(e.prototype, t), n && b(e, n)
                    }(n, [{
                        key: "setThenWaitThenSet",
                        value: function(e, t) {
                            var n = this;
                            this.setState(function() {
                                return function(t) {
                                    for (var e = 1; e < arguments.length; e++) {
                                        var n = null != arguments[e] ? arguments[e] : {};
                                        e % 2 ? y(Object(n), !0).forEach(function(e) {
                                            w(t, e, n[e])
                                        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : y(Object(n)).forEach(function(e) {
                                            Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
                                        })
                                    }
                                    return t
                                }({}, e)
                            }, function() {
                                return setTimeout(function() {
                                    n.setState(t)
                                }, 150)
                            })
                        }
                    }, {
                        key: "lock",
                        value: function() {
                            this.setState({
                                locked: !0
                            })
                        }
                    }, {
                        key: "unlock",
                        value: function() {
                            this.setState({
                                locked: !1
                            })
                        }
                    }, {
                        key: "render",
                        value: function() {
                            var e = this.state,
                                t = e.isOpen,
                                n = e.isClosing,
                                r = e.currentModal,
                                o = a[r] || null;
                                    //TODO - filter out NYT

                            return i.createPortal(d.createElement("div", {
                                className: f("sb-modal-system", {
                                    "sb-modal-open": t,
                                    "sb-modal-closing": n
                                })
                            }, d.createElement("div", {
                                role: "presentation",
                                className: "sb-modal-scrim",
                                onClick: l.toggleModal
                            }, d.createElement("div", {
                                className: "sb-modal-wrapper"
                            }, r && d.createElement(c, {
                                key: r,
                                toggleModal: l.toggleModal,
                                modalType: r
                            }, d.createElement(o, {
                                toggleModal: l.toggleModal,
                                modalType: r,
                                lock: l.lock,
                                unlock: l.unlock
                            }))))), s)
                        }
                    }]), n
                }();
            t.propTypes = {
                initialModal: o.oneOf(e).isRequired,
                onClose: o.func.isRequired,
                onOpen: o.func.isRequired
            };

            function n(e) {
                var t = e.modal,
                    n = e.children,
                    r = e.className,
                    o = e.triggerName;
                return d.createElement("span", {
                    role: "presentation",
                    className: r,
                    onClick: function() {
                        l.toggleModal(t, o)
                    }
                }, n)
            }
                //TODO - filter out NYT

            return n.propTypes = {
                modal: o.oneOf(e),
                className: o.string,
                triggerName: o.string,
                children: o.oneOfType([o.string, o.element, o.arrayOf(o.element)])
            }, l.Modals = t, l.ModalButton = n, l
        }(pe, me, document.getElementById("portal-game-modals")),
        ge = be.Modals,
        he = be.ModalButton;

    function ve(e, t) {
        return function(e) {
            if (Array.isArray(e)) return e
        }(e) || function(e, t) {
            if ("undefined" == typeof Symbol || !(Symbol.iterator in Object(e))) return;
            var n = [],
                r = !0,
                o = !1,
                a = void 0;
            try {
                for (var c, s = e[Symbol.iterator](); !(r = (c = s.next()).done) && (n.push(c.value), !t || n.length !== t); r = !0);
            } catch (e) {
                o = !0, a = e
            } finally {
                try {
                    r || null == s.return || s.return()
                } finally {
                    if (o) throw a
                }
            }
            return n
        }(e, t) || we(e, t) || function() {
            throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
        }()
    }

    function Ee(e) {
        return function(e) {
            if (Array.isArray(e)) return Oe(e)
        }(e) || function(e) {
            if ("undefined" != typeof Symbol && Symbol.iterator in Object(e)) return Array.from(e)
        }(e) || we(e) || function() {
            throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
        }()
    }

    function we(e, t) {
        if (e) {
            if ("string" == typeof e) return Oe(e, t);
            var n = Object.prototype.toString.call(e).slice(8, -1);
            return "Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n ? Array.from(n) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? Oe(e, t) : void 0
        }
    }

    function Oe(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
        return r
    }

    function Ne(t, e) {
        var n = Object.keys(t);
        if (Object.getOwnPropertySymbols) {
            var r = Object.getOwnPropertySymbols(t);
            e && (r = r.filter(function(e) {
                return Object.getOwnPropertyDescriptor(t, e).enumerable
            })), n.push.apply(n, r)
        }
        return n
    }

    function Se(t) {
        for (var e = 1; e < arguments.length; e++) {
            var n = null != arguments[e] ? arguments[e] : {};
            e % 2 ? Ne(Object(n), !0).forEach(function(e) {
                ke(t, e, n[e])
            }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : Ne(Object(n)).forEach(function(e) {
                Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
            })
        }
        return t
    }

    function ke(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n, e
    }

    function _e(e, t) {
        return e.length < 5 ? 1 : e.length + (t ? 7 : 0)
    }

    function Te(e, n) {
        return e.reduce(function(e, t) {
            return e + _e(t, n.includes(t))
        }, 0)
    }

    function je(t, e) {
        var n = e.type,
            r = e.payload;
        switch (n) {
            case ze:
                return Se({}, t, {
                    input: [].concat(Ee(t.input), [r])
                });
            case Ae:
                return Se({}, t, {
                    input: t.input.slice(0, -1)
                });
            case Me:
                return Se({}, t, {
                    outerLetters: function e(t, n) {
                        for (var r = m(t), o = r.length; o;) {
                            o -= 1;
                            var a = Math.floor(Math.random() * o),
                                c = r[o];
                            if (r[o] = r[a], r[a] = c, n && (t[o] === r[o] || t[a] === r[a])) return e(t, !0)
                        }
                        return r
                    }(t.outerLetters, !0)
                });
            case Ie:
                return Se({}, t, {
                    input: []
                });
            case qe:
                return Se({}, t, {
                    foundWords: [].concat(Ee(t.foundWords), [r])
                });
            case Fe:
                return Se({}, t, {
                    expandedWordlist: !t.expandedWordlist
                });
            case "LOCK":
                return Se({}, t, {
                    isLocked: !0
                });
            case "UNLOCK":
                return Se({}, t, {
                    isLocked: !1
                });
            case Be:
                return Se({}, t, {
                    message: r
                });
            case Ue:
                return Se({}, t, {
                    message: null
                });
            case Ke:
                return Se({}, t, {
                    input: [],
                    message: null
                });
            case Ye:
                return Se({}, t, {
                    foundWords: [].concat(Ee(t.foundWords), Ee(r.filter(function(e) {
                        return t.answers.includes(e) && !t.foundWords.includes(e)
                    })))
                });
            case He:
                return Se({}, t, {
                    yesterday: Se({}, t.yesterday, {
                        foundWords: Ee(r || []),
                        fetched: !0
                    })
                });
            case Ge:
                return Se({}, t, {
                    foundWords: []
                });
            default:
                return t
        }
    }

    function Le(e) {
        return Te(e.answers, e.pangrams)
    }

    function Pe(o) {
        return function(e, t) {
            e({
                type: Be,
                payload: o
            });
            var n = o.isError ? 1100 : 900,
                r = o.isError ? Ke : Ue;
            return l(n).then(function() {
                t().message && e({
                    type: r
                })
            })
        }
    }

    function Re() {
        return function(e) {
            e({
                type: Me
            })
        }
    }

    //TODO - filter out NYT

    function Ce(l) {
        return function(e, t) {
            var n = t();
            if (!n.isLocked) {
                var r = l || n.input.join("");
                if (r.length) {
                    if (window.cheat && r.split("").every(function(e) {
                            return e === n.centerLetter
                        })) return window.cheat(r.length);
                    window.reset && function(e, t) {
                        var n = 1 < arguments.length && void 0 !== t ? t : [];
                        return m(0 < arguments.length && void 0 !== e ? e : []).sort().join() === m(n).sort().join()
                    }(r.split(""), n.outerLetters) && window.reset();
                    var o = function(e, t) {
                        var n = e.split("");
                        return e.length < 4 ? "Too short" : n.some(function(e) {
                            return !t.validLetters.includes(e)
                        }) ? "Bad letters" : e.includes(t.centerLetter) ? t.answers.includes(e) ? t.foundWords.includes(e) ? "Already found" : void 0 : "Not in word list" : "Missing center letter"
                    }(r, n);
                    if (o) e(Pe({
                        value: o,
                        isError: !0
                    }));
                    else {
                        e({
                            type: qe,
                            payload: r
                        });
                        var a = n.pangrams.includes(r),
                            c = _e(r, a),
                            s = function(e, t) {
                                //TODO - filter out NYT

                                return t ? "Pangram!" : 7 <= e ? "Awesome!" : 1 < e ? "Nice!" : "Good!"
                            }(c, a);
                        e({
                            type: Ie
                        }), e(Pe({
                            value: s,
                            points: c,
                            isPangram: a
                        }))
                    }
                }
            }
        }
    }

    function We(i) {
        var u;
        return function(l) {
            return function(e) {
                var t = i.getState(),
                    n = l(e);
                if (e.type === Fe && (t.expandedWordlist ? U.interaction.gameplay("close-word-list", (new Date).getTime() - u) : u = (new Date).getTime()), e.type === qe) {
                    var r = i.getState(),
                        o = Qe(t),
                        a = Qe(r);
                    if (o < a)
                        for (var c = o + 1; c <= a; c += 1) {
                            var s = xe[c][0];
                            U.interaction.gameplay("level-up", "".concat(c, "-").concat(s.replace(" ", "-").toLowerCase()))
                        }!Ze(t) && Ze(r) && U.interaction.gameplay("level-up", "".concat(Qe(r) + 1, "-completed"))
                }
                return n
            }
        }
    }

    function De(s) {
        return function(c) {
            return function(e) {
                var t = s.getState(),
                    n = c(e);
                if (e.type === qe) {
                    var r = s.getState(),
                        o = !$e(t) && $e(r),
                        a = !Ze(t) && Ze(r);
                    et(r) && setTimeout(function() {
                        ye("cutoff", "in-game")
                    }, 450), (o || a) && setTimeout(function() {
                        ye("congrats", "in-game")
                    }, 450)
                }
                return n
            }
        }
    }
        //TODO - filter out NYT

    var xe = [
            ["Beginner", 0],
            ["Good Start", 2],
            ["Moving Up", 5],
            ["Good", 8],
            ["Solid", 15],
            ["Nice", 25],
            ["Great", 40],
            ["Amazing", 50],
            ["Genius", 70]
        ],
        Me = "SHUFFLE",
        ze = "INPUT_LETTER",
        Ae = "DELETE_LETTER",
        Ie = "CLEAR_INPUT",
        qe = "ACCEPT_WORD",
        Be = "SHOW_MESSAGE",
        Ue = "CLEAR_MESSAGE",
        Ke = "CLEAR_MESSAGE_AND_INPUT",
        Fe = "TOGGLE_WORDLIST",
        Ge = "RESET_GAME",
        Ye = "INSERT_FOUND_WORDS",
        He = "SET_YESTERDAYS_FOUND_WORDS",
        Xe = function(e) {
            return Te(e.foundWords, e.pangrams)
        },
        Je = t.createSelector(Le, function(o) {
            return xe.map(function(e) {
                var t = ve(e, 2),
                    n = t[0],
                    r = t[1];
                return {
                    title: n,
                    minScore: Math.round(r / 100 * o)
                }
            })
        }),
        Qe = t.createSelector([Xe, Je], function(e, t) {
            var n;
            for (n = 0; n < t.length && !(e < t[n].minScore); n += 1);
            return n - 1
        }),
        Ve = t.createSelector(Qe, function(e) {
            return xe[e][0]
        }),
        $e = t.createSelector([Xe, Qe], function(e, t) {
            return t === xe.length - 1
        }),
        Ze = t.createSelector([Xe, Le], function(e, t) {
            return e === t
        }),
        et = t.createSelector([Qe], function(e) {
            return 0 < s && s <= e
        }),
        tt = window,
        nt = "touchstart",
        rt = "touchend",
        ot = "mousedown",
        at = "mouseup",
        ct = "mouseout",
        st = "addEventListener",
        lt = "removeEventListener",
        it = "push-active",
        ut = !1;
    if ("function" == typeof tt.addEventListener) {
        var ft = !1,
            dt = Object.defineProperty({}, "passive", {
                get: function() {
                    return ft = !0
                }
            }),
            mt = function() {};
        tt.addEventListener("testPassiveEventSupport", mt, dt), tt.removeEventListener("testPassiveEventSupport", mt, dt), ut = ft
    }

    function pt(t, n, r, o) {
        function e(e) {
            ut || e.preventDefault(), l && t.classList.add(it), o && !s && (s = setTimeout(function() {
                c = setInterval(function() {
                    n(e)
                }, 90)
            }, 350)), n(e)
        }

        function a(e) {
            e.cancelable && e.preventDefault(), l && t.classList.remove(it), c = c && clearInterval(c), s = s && clearTimeout(s), r && r(e)
        }
        var c, s, l = !!t.classList;
        return t[st](nt, e, yt), t[st](ot, e), t[st](rt, a), t[st](at, a), t[st](ct, a),
            function() {
                c = c && clearInterval(c), s = s && clearTimeout(s), t[lt](nt), t[lt](ot), t[lt](rt), t[lt](at), t[lt](ct)
            }
    }
    var yt = {
        passive: !0
    };

    function bt(e) {
        return (bt = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
            return typeof e
        } : function(e) {
            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
        })(e)
    }

    function gt(e, t) {
        for (var n = 0; n < t.length; n++) {
            var r = t[n];
            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
        }
    }

    function ht(r) {
        return function() {
            var e, t = vt(r);
            if (function() {
                    if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                    if (Reflect.construct.sham) return !1;
                    if ("function" == typeof Proxy) return !0;
                    try {
                        return Date.prototype.toString.call(Reflect.construct(Date, [], function() {})), !0
                    } catch (e) {
                        return !1
                    }
                }()) {
                var n = vt(this).constructor;
                e = Reflect.construct(t, arguments, n)
            } else e = t.apply(this, arguments);
            return function(e, t) {
                return !t || "object" !== bt(t) && "function" != typeof t ? function(e) {
                    if (void 0 !== e) return e;
                    throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
                }(e) : t
            }(this, e)
        }
    }

    function vt(e) {
        return (vt = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
            return e.__proto__ || Object.getPrototypeOf(e)
        })(e)
    }

    function Et(e, t) {
        return (Et = Object.setPrototypeOf || function(e, t) {
            return e.__proto__ = t, e
        })(e, t)
    }
    var wt = Math.pow(3, .5),
        Ot = 2 * wt,
        Nt = [
            [0, wt],
            [1, 0],
            [3, 0],
            [4, wt],
            [3, Ot],
            [1, Ot]
        ].map(function(e) {
            return e.map(function(e) {
                return 30 * e
            }).join()
        }).join(" "),
        St = function() {
            ! function(e, t) {
                if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                        value: e,
                        writable: !0,
                        configurable: !0
                    }
                }), t && Et(e, t)
            }(t, r.Component);
            var e = ht(t);

            function t() {
                return function(e, t) {
                    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                }(this, t), e.apply(this, arguments)
            }
            return function(e, t, n) {
                t && gt(e.prototype, t), n && gt(e, n)
            }(t, [{
                key: "componentDidMount",
                value: function() {
                    var e = this.props,
                        t = e.onUp,
                        n = e.onDown;
                    this.unbind = pt(this._el, n, t, !0)
                }
            }, {
                key: "componentWillUnmount",
                value: function() {
                    this.unbind()
                }
            }, {
                key: "render",
                    //TODO - filter out NYT

                value: function() {
                    var t = this,
                        e = this.props,
                        n = e.activeKey,
                        r = e.letter,
                        o = e.type;
                    return d.createElement("svg", {
                        className: f("hive-cell", o),
                        viewBox: "0 0 ".concat(120, " ").concat(30 * Ot)
                    }, d.createElement("polygon", {
                        ref: function(e) {
                            t._el = e
                        },
                        className: f("cell-fill", {
                            "push-active": r === n
                        }),
                        points: Nt,
                        stroke: "white",
                        strokeWidth: 7.5
                    }), d.createElement("text", {
                        className: "cell-letter",
                        x: "50%",
                        y: "50%",
                        dy: "10.75%"
                    }, r))
                }
            }]), t
        }();

    function kt(e) {
        return (kt = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
            return typeof e
        } : function(e) {
            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
        })(e)
    }

    function _t(e, t) {
        for (var n = 0; n < t.length; n++) {
            var r = t[n];
            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
        }
    }

    function Tt(r) {
        return function() {
            var e, t = jt(r);
            if (function() {
                    if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                    if (Reflect.construct.sham) return !1;
                    if ("function" == typeof Proxy) return !0;
                    try {
                        return Date.prototype.toString.call(Reflect.construct(Date, [], function() {})), !0
                    } catch (e) {
                        return !1
                    }
                }()) {
                var n = jt(this).constructor;
                e = Reflect.construct(t, arguments, n)
            } else e = t.apply(this, arguments);
            return function(e, t) {
                return !t || "object" !== kt(t) && "function" != typeof t ? function(e) {
                    if (void 0 !== e) return e;
                    throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
                }(e) : t
            }(this, e)
        }
    }

    function jt(e) {
        return (jt = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
            return e.__proto__ || Object.getPrototypeOf(e)
        })(e)
    }

    function Lt(e, t) {
        return (Lt = Object.setPrototypeOf || function(e, t) {
            return e.__proto__ = t, e
        })(e, t)
    }
    St.propTypes = {
        letter: o.string,
        activeKey: o.string,
        type: o.oneOf(["center", "outer"]),
        onDown: o.func,
        onUp: o.func
    }, St.defaultProps = {
        letter: "",
        activeKey: "",
        type: "center",
        onUp: function() {},
        onDown: function() {}
    };
    var Pt = function() {
        ! function(e, t) {
            if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    writable: !0,
                    configurable: !0
                }
            }), t && Lt(e, t)
        }(t, r.Component);
        var e = Tt(t);

        function t() {
            return function(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }(this, t), e.apply(this, arguments)
        }
        return function(e, t, n) {
            t && _t(e.prototype, t), n && _t(e, n)
        }(t, [{
            key: "componentDidMount",
            value: function() {
                var e = this.props,
                    t = e.onDown,
                    n = e.onUp,
                    r = e.allowBurst;
                this.unbind = pt(this.button, t, n, r)
            }
        }, {
            key: "componentWillUnmount",
            value: function() {
                this.unbind()
            }
        }, {
            key: "render",
            value: function() {
                var t = this,
                    e = this.props,
                    n = e.className,
                    r = e.children;
                return d.createElement("div", {
                    ref: function(e) {
                        t.button = e
                    },
                    className: f(n, "sb-touch-button")
                }, r)
            }
        }]), t
    }();

    function Rt(e) {
        return (Rt = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
            return typeof e
        } : function(e) {
            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
        })(e)
    }

    function Ct(e, t) {
        for (var n = 0; n < t.length; n++) {
            var r = t[n];
            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
        }
    }

    function Wt(r) {
        return function() {
            var e, t = xt(r);
            if (function() {
                    if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                    if (Reflect.construct.sham) return !1;
                    if ("function" == typeof Proxy) return !0;
                    try {
                        return Date.prototype.toString.call(Reflect.construct(Date, [], function() {})), !0
                    } catch (e) {
                        return !1
                    }
                }()) {
                var n = xt(this).constructor;
                e = Reflect.construct(t, arguments, n)
            } else e = t.apply(this, arguments);
            return function(e, t) {
                return !t || "object" !== Rt(t) && "function" != typeof t ? Dt(e) : t
            }(this, e)
        }
    }

    function Dt(e) {
        if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return e
    }

    function xt(e) {
        return (xt = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
            return e.__proto__ || Object.getPrototypeOf(e)
        })(e)
    }

    function Mt(e, t) {
        return (Mt = Object.setPrototypeOf || function(e, t) {
            return e.__proto__ = t, e
        })(e, t)
    }

    function zt(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n, e
    }
    Pt.defaultProps = {
        className: "",
        onDown: function() {},
        onUp: function() {},
        allowBurst: !1,
        children: null
    }, Pt.propTypes = {
        className: o.string,
        onDown: o.func,
        onUp: o.func,
        allowBurst: o.bool,
        children: o.oneOfType([o.string, o.element, o.arrayOf(o.element)])
    };
    var At = /[a-z]/,
        It = function() {
            ! function(e, t) {
                if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                        value: e,
                        writable: !0,
                        configurable: !0
                    }
                }), t && Mt(e, t)
            }(n, r.Component);
            var t = Wt(n);

            function n(e) {
                var s;
                return function(e, t) {
                    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                }(this, n), zt(Dt(s = t.call(this, e)), "handleKeydown", function(e) {
                    var t, n = s.props,
                        r = n.inputLetter,
                        o = n.deleteLetter,
                        a = n.submitWord;
                    if (!e.metaKey) {
                        if (8 === e.keyCode || 46 === e.keyCode) t = "delete", o(), e.preventDefault();
                        else if (13 === e.which) t = "submit", a(), e.preventDefault();
                        else if (32 === e.keyCode) t = "shuffle", s.handleShuffle(), e.preventDefault();
                        else {
                            var c = String.fromCharCode(e.which).toLowerCase();
                            ! function(e) {
                                return At.exec(e)
                            }(c) || r(t = c)
                        }
                        s.setState({
                            activeKey: t
                        })
                    }
                }), zt(Dt(s), "handleKeyup", function() {
                    s.setState({
                        activeKey: null
                    })
                }), zt(Dt(s), "handleShuffle", function() {
                    var e = s.props.shuffleLetters;
                    if (!s.state.shuffleStage) {
                        s.setState({
                            shuffleStage: "beforeShuffle"
                        }), l(300).then(function() {
                            s.setState({
                                shuffleStage: "shuffling"
                            }), e()
                        }).then(function() {
                            return l(10)
                        }).then(function() {
                            return s.setState({
                                shuffleStage: "afterShuffle"
                            })
                        }).then(function() {
                            return l(300)
                        }).then(function() {
                            return s.setState({
                                shuffleStage: null
                            })
                        })
                    }
                }), s.state = {
                    activeKey: null,
                    shuffleStage: null
                }, s
            }
            return function(e, t, n) {
                t && Ct(e.prototype, t), n && Ct(e, n)
            }(n, [{
                key: "componentDidMount",
                value: function() {
                    window.addEventListener("keydown", this.handleKeydown, !1), window.addEventListener("keyup", this.handleKeyup, !1)
                }
            }, {
                key: "componentWillUnmount",
                value: function() {
                    window.removeEventListener("keydown", this.handleKeydown), window.removeEventListener("keyup", this.handleKeyup)
                }
            }, {
                key: "render",
                value: function() {
                    var e = this,
                        t = this.props,
                        n = t.outerLetters,
                        r = t.centerLetter,
                        o = t.inputLetter,
                        a = t.deleteLetter,
                        c = t.submitWord,
                        s = this.state,
                        l = s.activeKey,
                        i = s.shuffleStage,
                        u = [d.createElement(St, {
                            key: r,
                            letter: r,
                            activeKey: l,
                            onDown: function() {
                                return o(r)
                            },
                            type: "center"
                        })].concat([n.map(function(e) {
                            return d.createElement(St, {
                                key: e,
                                letter: e,
                                activeKey: l,
                                onDown: function() {
                                    return o(e)
                                },
                                className: l === e ? "cell-down" : "",
                                type: "outer"
                            })
                        })]);
                            //TODO - filter out NYT

                    return d.createElement(d.Fragment, null, d.createElement("div", {
                        className: "sb-hive"
                    }, d.createElement("div", {
                        className: f("hive", {
                            "fade-out": "beforeShuffle" === i
                        }, {
                            shuffling: "shuffling" === i
                        }, {
                            "fade-in": "afterShuffle" === i
                        })
                    }, u)), d.createElement("div", {
                        className: "hive-actions"
                    }, d.createElement(Pt, {
                        allowBurst: !0,
                        className: f("hive-action", "hive-action__delete", {
                            "action-active": "delete" === l
                        }),
                        onDown: function() {
                            return a()
                        }
                    }, "Delete"), d.createElement(Pt, {
                        className: f("hive-action", "hive-action__shuffle", {
                            "action-active": "shuffle" === l
                        }),
                        onDown: function() {
                            return e.handleShuffle()
                        }
                    }), d.createElement(Pt, {
                        className: f("hive-action", "hive-action__submit", {
                            "action-active": "submit" === l
                        }),
                        onDown: function() {
                            return c()
                        }
                    }, "Enter")))
                }
            }]), n
        }();
    It.defaultProps = {}, It.propTypes = {
        shuffleLetters: o.func.isRequired,
        submitWord: o.func.isRequired,
        inputLetter: o.func.isRequired,
        deleteLetter: o.func.isRequired,
        centerLetter: o.string.isRequired,
        outerLetters: o.arrayOf(o.string).isRequired
    };

    //TODO - filter out NYT

    function qt(e) {
        var t = e.input,
            n = e.centerLetter,
            r = e.validLetters,
            o = e.message;
        return d.createElement("div", {
            className: "sb-hive-input"
        }, d.createElement("span", {
            className: f("sb-hive-input-content", {
                "non-empty": !!t.length,
                "has-error": o && o.isError,
                "is-accepting": o && !o.isError
            }),
            style: {
                fontSize: function(e) {
                    return "".concat(e < 13 ? 32 : 32 - 1.5 * (e - 13), "px")
                }(t.length)
            }
        }, t.length ? t.map(function(e, t) {
            return d.createElement("span", {
                key: e + t,
                className: f({
                    "sb-input-bright": n === e,
                    "sb-input-invalid": !r.includes(e)
                })
            }, e)
        }) : d.createElement("span", null, " ")))
    }
    var Bt = e.connect(function(e) {
        return {
            centerLetter: e.centerLetter,
            outerLetters: e.outerLetters
        }
    }, function(t) {
        return {
            deleteLetter: function() {
                return t(function(e, t) {
                    var n = t();
                    n.isLocked || (n.message && n.message.isError ? e({
                        type: Ke
                    }) : e({
                        type: Ae
                    }))
                })
            },
            inputLetter: function(e) {
                return t(function(r) {
                    return function(e, t) {
                        var n = t();
                        n.isLocked || (18 < n.input.length ? e(Pe({
                            value: "Too long",
                            isError: !0
                        })) : (n.message && n.message.isError && e({
                            type: Ke
                        }), e({
                            type: ze,
                            payload: r
                        })))
                    }
                }(e))
            },
            submitWord: function() {
                return t(Ce())
            },
            shuffleLetters: function() {
                return t(Re())
            }
        }
    })(It);
    qt.propTypes = {
        message: o.shape({
            isError: o.bool
        }),
        centerLetter: o.string,
        validLetters: o.arrayOf(o.string),
        input: o.arrayOf(o.string)
    };

    //TODO - filter out NYT

    function Ut(e) {
        var t = e.words,
            n = e.centerLetter;
        return d.createElement("div", {
            className: "sb-wordlist"
        }, d.createElement("ul", {
            className: "sb-wordlist-items"
        }, t.map(function(e) {
            return d.createElement("li", {
                key: e
            }, d.createElement(le, {
                value: e,
                centerLetter: n
            }))
        })))
    }
    var Kt = e.connect(function(e) {
        var t = e.centerLetter,
            n = e.outerLetters,
            r = e.input;
        return {
            message: e.message,
            centerLetter: t,
            validLetters: [t].concat(n),
            input: r
        }
    })(qt);
    Ut.propTypes = {
        words: o.arrayOf(o.string),
        centerLetter: o.string
    };

    //TODO - filter out NYT

    function Ft(e) {
        var t = e.wordCount,
            n = e.recentWords,
            r = e.centerLetter,
            o = e.expandedWordlist,
            a = e.toggleWordlist;
        return d.createElement(Pt, {
            className: "sb-wordlist-heading-wrap",
            onDown: a
        }, d.createElement("div", {
            className: "sb-wordlist-summary"
        }, "You have found", " ", t, " ", 1 === t ? "word" : "words"), d.createElement("div", {
            className: "sb-recent-words-wrap"
        }, d.createElement("ul", {
            className: f("sb-recent-words", {
                "sb-has-words": 0 < n.length
            })
        }, n.length ? n.map(function(e) {
            return d.createElement("li", {
                key: e
            }, d.createElement(le, {
                value: e,
                centerLetter: r
            }))
        }) : d.createElement("li", {
            key: "none",
            className: "sb-placeholder-text"
        }, "Your words …"))), d.createElement("div", {
            className: "sb-toggle-expand"
        }, d.createElement("span", {
            className: f("sb-toggle-icon", {
                "sb-toggle-icon-expanded": o
            })
        })))
    }
    var Gt = e.connect(function(e) {
        return {
            words: e.foundWords.slice().sort(function(e, t) {
                return t < e ? 1 : -1
            }),
            centerLetter: e.centerLetter,
            expandedWordlist: e.expandedWordlist
        }
    }, {})(Ut);
    Ft.propTypes = {
        wordCount: o.number,
        recentWords: o.arrayOf(o.string),
        centerLetter: o.string,
        expandedWordlist: o.bool,
        toggleWordlist: o.func
    };

    //TODO - filter out NYT

    function Yt(e) {
        var t = e.score,
            n = e.rank,
            r = e.rankIdx,
            o = e.ranks;
        return d.createElement(he, {
            modal: "ranks",
            triggerName: "in-game"
        }, d.createElement("div", {
            className: "sb-progress",
            title: "Click to see today’s ranks"
        }, d.createElement("h4", {
            className: "sb-progress-rank"
        }, n), d.createElement("div", {
            className: "sb-progress-line"
        }, d.createElement("div", {
            className: "sb-progress-dots"
        }, o.map(function(e, t) {
            return d.createElement("span", {
                key: t,
                className: f("sb-progress-dot", {
                    completed: t < r
                })
            })
        })), d.createElement("div", {
            className: f("sb-progress-marker", {
                final: r === o.length - 1
            }),
            style: {
                left: "".concat(r / (o.length - 1) * 100, "%")
            }
        }, d.createElement("span", {
            className: "sb-progress-value"
        }, t)))))
    }
    var Ht = e.connect(function(e) {
        return {
            wordCount: e.foundWords.length,
            recentWords: e.foundWords.slice().reverse(),
            centerLetter: e.centerLetter,
            expandedWordlist: e.expandedWordlist
        }
    }, function(e) {
        return {
            toggleWordlist: function() {
                return e({
                    type: Fe
                })
            }
        }
    })(Ft);
    Yt.propTypes = {
        score: o.number,
        rank: o.string,
        rankIdx: o.number,
        ranks: o.arrayOf(o.shape([]))
    };

    //TODO - filter out NYT

    function Xt(e) {
        var t = e.message;
        return d.createElement("div", {
            className: f("sb-message-box", {
                "error-message": t && t.isError,
                "success-message": t && !t.isError,
                "pangram-message": t && t.isPangram
            })
        }, t && d.createElement("span", {
            className: "sb-message"
        }, t.value), t && t.points && d.createElement("span", {
            className: "sb-message-points"
        }, "+", t.points))
    }
    var Jt = e.connect(function(e) {
        return {
            score: Xe(e),
            ranks: Je(e),
            rankIdx: Qe(e),
            rank: Ve(e)
        }
    })(Yt);
    Xt.propTypes = {
        message: o.shape({
            isError: o.bool,
            isPangram: o.bool,
            value: o.string,
            points: o.oneOfType([o.string, o.number])
        })
    };
    var Qt = e.connect(function(e) {
        return {
            message: e.message
        }
    })(Xt);
    u.mobileNavTools.create([{
        type: "text",
        value: "Help",
        action: function() {
            return ye("help", "toolbar")
        }
    }, {
        type: "text",
        value: "Save",
        action: function() {
            return ye("save", "toolbar")
        }
    }]);

    //TODO - filter out NYT

    function Vt() {
        return i.createPortal(d.createElement(d.Fragment, null, d.createElement("div", null, d.createElement(he, {
            className: "pz-toolbar-button pz-toolbar-button__help",
            modal: "help",
            triggerName: "toolbar"
        }, "Help"), d.createElement(he, {
            className: "pz-toolbar-button pz-toolbar-button__save",
            modal: "save",
            triggerName: "toolbar"
        }, "Save & Quit")), d.createElement(he, {
            className: "pz-toolbar-button pz-toolbar-button__yesterday",
            modal: "yesterday",
            triggerName: "toolbar"
        }, "Yesterday’s Answers")), en)
    }

    function $t(e, t, n) {
        U.interaction.modal("".concat(tn[e] || e, "|").concat(t), n)
    }

    //TODO - filter out NYT

    function Zt(e) {
        var t = e.expandedWordlist,
            n = e.isLocked,
            r = e.lockGame,
            o = e.unlockGame,
            a = e.initialModal;
        return d.createElement("div", {
            className: f("sb-content-box", {
                "sb-expanded": t,
                "sb-game-locked": n
            })
        }, d.createElement(Vt, null), d.createElement(ge, {
            onOpen: function(e, t) {
                r(), $t(e, "open", t)
            },
            onClose: function(e, t) {
                o(), u.mobileNavTools.activate(), $t(e, "close", t)
            },
            initialModal: a
        }), d.createElement("div", {
            className: "sb-controls-box"
        }, d.createElement("div", {
            className: "sb-controls"
        }, d.createElement(Qt, null), d.createElement(Kt, null), d.createElement(Bt, null))), d.createElement("div", {
            className: "sb-status-box"
        }, d.createElement("div", {
            className: "sb-progress-box"
        }, d.createElement(Jt, null)), d.createElement("div", {
            className: "sb-wordlist-box"
        }, d.createElement("div", {
            className: "sb-wordlist-heading"
        }, d.createElement(Ht, null)), d.createElement("div", {
            className: "sb-wordlist-drawer"
        }, d.createElement("div", {
            className: "sb-wordlist-window"
        }, d.createElement(Gt, null))))))
    }
    var en = document.getElementById("portal-game-toolbar"),
        tn = {
            help: "rules",
            save: "save-and-quit",
            ranks: "rankings",
            start: "get-started",
            congrats: "congrats",
            yesterday: "yesterdays-answers"
        };
    Zt.propTypes = {
        expandedWordlist: o.bool,
        isLocked: o.bool,
        unlockGame: o.func,
        lockGame: o.func,
        initialModal: o.string
    };
    var nn = e.connect(function(e) {
            var t = e.expandedWordlist,
                n = e.isLocked,
                r = Ze(e);
            return {
                expandedWordlist: t,
                isLocked: n,
                hasCompleted: r,
                score: Xe(e),
                initialModal: r ? null : "start"
            }
        }, function(e) {
            return {
                lockGame: function() {
                    return e({
                        type: "LOCK"
                    })
                },
                unlockGame: function() {
                    return e({
                        type: "UNLOCK"
                    })
                }
            }
        })(Zt),
            //TODO - filter out NYT

        rn = document.getElementById("pz-game-root");
    i.render(d.createElement(e.Provider, {
        store: function(e) {
            var t = [a.applyMiddleware(n, De, We)];
            window.__REDUX_DEVTOOLS_EXTENSION__ && t.push(window.__REDUX_DEVTOOLS_EXTENSION__());
            var o = a.createStore(je, function(e) {
                return Se({}, e.today, {
                    input: [],
                    foundWords: [],
                    expandedWordlist: !1,
                    isLocked: !1,
                    message: null,
                    yesterday: Se({}, e.yesterday, {
                        foundWords: []
                    }),
                    userType: u.userType
                })
            }(e), a.compose.apply(void 0, t));
            return W(o, function(e) {
                return o.dispatch(function(e) {
                    return {
                        type: Ye,
                        payload: e
                    }
                }(e))
            }, function(e) {
                return o.dispatch(function(e) {
                    return {
                        type: He,
                        payload: e
                    }
                }(e))

                    //TODO - filter out NYT

            }), o.dispatch(Re()), window.userType.inShortzMode && (window.cheat = function() {
                var e = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : 1,
                    t = o.getState(),
                    n = t.answers,
                    r = t.foundWords;
                n.filter(function(e) {
                    return !r.includes(e)
                }).slice(0, e).forEach(function(e) {
                    return o.dispatch({
                        type: qe,
                        payload: e
                    })
                })
            }, window.reset = function() {
                o.dispatch({
                    type: Ge
                })
            }), o
        }(u.getGameData())
    }, d.createElement(nn, null)), rn)
});
