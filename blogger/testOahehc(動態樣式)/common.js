(function (undefined) {
    var aa = '"Helvetica Neue Light", HelveticaNeue-Light, "Helvetica Neue", Helvetica, Arial, sans-serif'
        , ba = "#editor-frame"
        , ca = "#editor-frame .editor-control"
        , ga = "#editor-frame .editor-editor"
        , ha = '#editor-frame .template[data-template="'
        , ia = "#gadget-dock"
        , ja = "#lightbox"
        , h = "#nyanyanya"
        , ka = "#overview"
        , la = "#search"
        , na = ".comments"
        , oa = ".gadget-content"
        , pa = ".gadget-resize-detector"
        , qa = ".lightbox"
        , ra = ".lightbox-content"
        , sa = ".lightbox-panel"
        , ta = ".metrics"
        , ua = ".overview"
        , va = ".overview-content"
        , xa = ".singleton-element, #injected-iframe"
        , ya = ".text-paragraph"
        , za = ".toggle-container"
        , Aa = ".toggle-switch"
        , Ba = ".viewitem-panel"
        , Ca = "//www.blogger.com"
        , Da = "/search/label/"
        , Ea = "400px"
        , Fa = "</div>"
        , Ga = "<a name='more'></a>"
        , Ha = "<div/>"
        , Ia = '<span class="text-break"> </span>'
        , r = "Date"
        , Ja = "Missing or invalid tag"
        , Ka = "Resizable"
        , La = "TemplateEditor"
        , Ma = "__filtered"
        , Na = "__nested:"
        , Oa = "_relative"
        , v = "absolute"
        , Pa = "active"
        , Qa = "archive_blogspot"
        , w = "atPeace_"
        , Ra = "background-color"
        , Sa = "blitzBaseUrl"
        , Ta = "blogger.ui().viewType_.prototype.defaults.name"
        , x = "body"
        , Ua = "bottom"
        , y = "canvas"
        , Va = "center"
        , Wa = "clearselection"
        , Xa = "click"
        , Ya = "closing"
        , Za = "collapse-breaks"
        , $a = "colliding"
        , ab = "comment-view"
        , bb = "custom"
        , cb = "dancing"
        , z = "dancing_"
        , fb = "data-annotation"
        , gb = "data-id"
        , hb = "data-identifier"
        , ib = "data-item-type"
        , jb = "data-itemid"
        , A = "data-src"
        , kb = "data-template"
        , lb = "data-width"
        , mb = "data:image/gif;base64,R0lGODlhAQABAPAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="
        , nb = "defer"
        , ob = "deferred"
        , pb = "desiredX2_"
        , qb = "desiredX3_"
        , rb = "desiredX_"
        , sb = "desiredY2_"
        , tb = "desiredY3_"
        , ub = "desiredY_"
        , vb = "direction"
        , wb = "display"
        , xb = "embed"
        , yb = "exceeding"
        , zb = "fallingAndBouncing"
        , Ab = "false"
        , Bb = "fetchend"
        , Cb = "filter"
        , Db = "fixed"
        , Eb = "fountain-count"
        , Hb = "function"
        , Ib = "gadget-dock-overflow-bottom"
        , Jb = "gadget-dock-overflow-client-area"
        , Kb = "gadget-dock-overflow-normal"
        , Lb = "gadget-opening"
        , Mb = "gadget-selected"
        , Nb = "global-scope"
        , Ob = "height"
        , Pb = "hesitating"
        , Qb = "hidden"
        , Rb = "horizontal"
        , Sb = "https"
        , Tb = "https://www.googleapis.com/plus"
        , Ub = "iframe"
        , Vb = "ignoreMySpeed_"
        , Wb = "img"
        , C = "initialized"
        , Xb = "instant"
        , Yb = "item_blogspot"
        , Zb = "json"
        , $b = "jumpPower_"
        , ac = "jumpWillSucceed_"
        , bc = "jumpedHighEnough_"
        , cc = "lastApex_"
        , dc = "left"
        , ec = "lightbox-open"
        , fc = "loadcomplete"
        , gc = "mousemove.mousewiggle"
        , hc = "mousemove.particles"
        , ic = "number_"
        , jc = "overview-open"
        , kc = "perseverance"
        , lc = "photo"
        , mc = "position"
        , nc = "preDanceRotation"
        , oc = "preDanceRotation_"
        , pc = "preDanceVelocity_"
        , qc = "prerender"
        , rc = "published"
        , sc = "rad)"
        , tc = "relative"
        , uc = "rendercomplete"
        , vc = "rgba(0, 0, 0, 0.5)"
        , wc = "right"
        , xc = "rotate("
        , yc = "scroll"
        , zc = "searching"
        , Ac = "secondLastApex_"
        , Bc = "spritle"
        , D = "src"
        , Cc = "start"
        , Dc = "static_page"
        , G = "string"
        , Ec = "templateeditor"
        , Fc = "text-decoration"
        , Gc = "text-run"
        , Hc = "toggle-active"
        , H = "top"
        , Ic = "transparent"
        , Jc = "true"
        , Kc = "unknown"
        , Lc = "updated.comments"
        , Mc = "velX_"
        , Nc = "velY_"
        , Oc = "vertical"
        , Pc = "video"
        , Qc = "view"
        , Rc = "viewitem-open"
        , Sc = "webkitvisibilitychange"
        , Tc = "width";

    function Uc() {
        return function (a) {
            return a
        }
    }

    function I() {
        return function () {}
    }

    function J(a) {
        return function () {
            return this[a]
        }
    }

    function Vc(a) {
        return function () {
            return a
        }
    }
    var K;
    (function (a, b) {
        function c(a, b) {
            if (!b.length) {
                if (a.caller) return a.caller.arguments;
                if (b.callee && b.callee.caller) return b.callee.caller.arguments
            }
            return b
        }
        var d = /xyz/.test(I()) ? /\bbase\b/ : /.*/;
        a.inherit = function (a) {
            function e() {
                var a = m.prototype
                    , b;
                for (b in a) typeof a[b] == Hb && typeof u[b] == Hb && d.test(a[b]) ? k[b] = function (a, b) {
                    return function () {
                        var d = this.base;
                        this.base = function () {
                            return u[a].apply(this, c(this.base, arguments))
                        };
                        try {
                            return b.apply(this, arguments)
                        }
                        finally {
                            this.base = d
                        }
                    }
                }(b, a[b]) : k[b] = a[b]
            }

            function g() {}
            var l = arguments[1] || arguments[0]
                , m = 2 == arguments.length ? arguments[0] : b
                , n = !0;
            if (m) {
                if (m.prototype.base) throw "Subclass already derives. Multiple inheritance is not supported.";
                for (var p in m.prototype) {
                    n = !1;
                    break
                }
            }
            else m = function () {
                this.base()
            };
            g.prototype = l.prototype;
            var k = new g
                , u = l.prototype;
            n || e();
            k.base = function () {
                n && (n = !1, e());
                var a = this.base;
                this.base = u.base;
                try {
                    l.apply(this, c(k.base, arguments))
                }
                finally {
                    this.base = a
                }
            };
            m.prototype = k;
            return m.prototype.constructor = m
        }
    })(jQuery);
    (function (a) {
        function b(b, c) {
            window.google_persistent_state_async = {};
            window.google_unique_id = null;
            b.each(function () {
                var b = a.extend({}, a.fn.adsense.defaults, g(a(this)), c);
                e(a(this), b)
            })
        }

        function c() {
            var b = window.adsbygoogle;
            if (b && b.push) return !0;
            p || (p = !0, a.getScript("//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js", d));
            return !1
        }

        function d() {
            for (var a = 0, b; b = n[a]; a++) b();
            n = []
        }

        function e(b, c) {
            var d = b.data("adsense") || {}
                , e = f(c);
            c && a.isFunction(c.beforeRender) && c.beforeRender(e);
            c = !1;
            if (d.If)
                for (var k in e) {
                    if (e[k] !== d[k]) {
                        c = !0;
                        break
                    }
                }
            else c = !0;
            if (c && e.format && e.client) {
                b.empty();
                d = {
                    "class": "adsbygoogle"
                };
                e.client && (d["data-ad-client"] = e.client);
                e.host && (d["data-ad-host"] = e.host);
                e.hostchannel && (d["data-ad-host-channel"] = e.hostchannel);
                e.slot && (d["data-ad-slot"] = e.slot);
                e.type && (d["data-ad-type"] = e.type);
                k = m[e.format];
                k.cc ? (d["data-ad-format"] = k.format, d.style = "display:block;") : d.style = "display:block;height:" + k.height + "px;width:" + k.width + "px;";
                e.analytics_id && (d["data-analytics-uacct"] = e.analytics_id);
                var u = a("<ins>", d).appendTo(b).get(0);
                e.If = !0;
                b.data("adsense", e);
                setTimeout(function () {
                    try {
                        window.adsbygoogle.push({
                            element: u
                        })
                    }
                    catch (L) {}
                }, 0)
            }
        }

        function f(b) {
            var c = {};
            a.each(l, function (a, d) {
                c[d] = b[d]
            });
            c.format && (c.format = c.format.toLowerCase().replace(/\s|_/g, ""));
            c.type && (c.type = a.grep(c.type.toLowerCase().split(/\s|_|,|\//), function (a) {
                return "text" == a || "image" == a
            }).sort().join(","));
            var d;
            d = m[b.format] ? b.format : "auto";
            c.format = d;
            return c
        }

        function g(b) {
            var c = {}
                , d;
            for (d in a.fn.adsense.defaults) {
                var e = b.data(d);
                e && (c[d] = e)
            }
            return c
        }
        a.fn.adsense = function (a) {
            if (this.length)
                if (c()) b(this, a);
                else {
                    var d = this;
                    n.push(function () {
                        b(d, a)
                    })
                }
            return this
        };
        a.fn.adsense.defaults = {
            analytics_id: void 0
            , format: void 0
            , type: void 0
            , slot: void 0
            , host: void 0
            , client: void 0
            , beforeRender: void 0
        };
        var l = "analytics_id client format host hostchannel slot type".split(" ")
            , m = {
                auto: {
                    format: "auto"
                    , cc: !0
                }
                , horizontal: {
                    format: Rb
                    , cc: !0
                }
                , vertical: {
                    format: Oc
                    , cc: !0
                }
                , rectangle: {
                    format: "rectangle"
                    , cc: !0
                }
                , banner: {
                    format: "BANNER"
                    , width: 468
                    , height: 60
                }
                , button: {
                    format: "BUTTON"
                    , width: 125
                    , height: 125
                }
                , halfbanner: {
                    format: "HALF_BANNER"
                    , width: 234
                    , height: 60
                }
                , largerectangle: {
                    format: "LARGE_RECTANGLE"
                    , width: 336
                    , height: 280
                }
                , leaderboard: {
                    format: "LEADERBOARD"
                    , width: 728
                    , height: 90
                }
                , largeleaderboard: {
                    format: "LARGE_LEADERBOARD"
                    , width: 970
                    , height: 90
                }
                , billboard: {
                    format: "BILLBOARD"
                    , width: 970
                    , height: 250
                }
                , mediumrectangle: {
                    format: "MEDIUM_RECTANGLE"
                    , width: 300
                    , height: 250
                }
                , skyscraper: {
                    format: "SKYSCRAPER"
                    , width: 120
                    , height: 600
                }
                , smallsquare: {
                    format: "SMALL_SQUARE"
                    , width: 200
                    , height: 200
                }
                , smallrectangle: {
                    format: "SMALL_RECTANGLE"
                    , width: 180
                    , height: 150
                }
                , square: {
                    format: "SQUARE"
                    , width: 250
                    , height: 250
                }
                , verticalbanner: {
                    format: "VERTICAL_BANNER"
                    , width: 120
                    , height: 240
                }
                , wideskyscraper: {
                    format: "WIDE_SKYSCRAPER"
                    , width: 160
                    , height: 600
                }
                , largeskyscraper: {
                    format: "LARGE_SKYSCRAPER"
                    , width: 300
                    , height: 600
                }
                , portrait: {
                    format: "PORTRAIT"
                    , width: 300
                    , height: 1050
                }
            }
            , n = []
            , p = !1
    })(jQuery);
    (function (a) {
        a.asClasses = function (b) {
            var c = [];
            (b = a.isArray(b) ? b : b.split(",")) && (c = a.map(b, function (b) {
                return (b ? a.trim(b.toLowerCase()) : "").replace(/[^\w\s]|_/g, "").replace(/\s+/g, "_")
            }));
            return c.sort().join(" ")
        }
    })(jQuery);
    (function (a, b) {
        var c = /data-(\w+)/;
        a.fn.attributes = function (d, e) {
            var f = d !== b ? d : !1
                , g = e !== b ? e : !1
                , l = {};
            this.each(function () {
                a.each(this.attributes, function (a, b) {
                    if (f || b.value)
                        if (g) {
                            if (a = c.exec(b.name)) l[a[1]] = b.value
                        }
                        else l[b.name] = b.value
                })
            });
            return l
        }
    })(jQuery);
    var Wc = jQuery;
    if (!Wc.browser) {
        var Xc = navigator.userAgent.toLowerCase()
            , Yc = /(opera)(?:.*version)?[ \/]([\w.]+)/
            , Zc = /(msie) ([\w.]+)/
            , $c = /(mozilla)(?:.*? rv:([\w.]+))?/
            , ad = /(webkit)[ \/]([\w.]+)/.exec(Xc) || Yc.exec(Xc) || Zc.exec(Xc) || 0 > Xc.indexOf("compatible") && $c.exec(Xc) || [];
        Wc.browser = {};
        Wc.browser[ad[1] || ""] = !0;
        Wc.browser.version = ad[2] || "0"
    }
    var bd, cd, dd;
    for (dd in Wc.browser) "version" == dd ? cd = Wc.browser[dd] : "webkit" == dd || "chrome" == dd || "safari" == dd ? (Xc = navigator.userAgent, bd = (cd = /chrome\/([\d\.]+)/i.exec(Xc)) && "chrome" || (cd = /version\/([\d\.]+) safari/i.exec(Xc)) && "safari" || (cd = [null, Wc.browser.version], "webkit"), cd = cd && cd[1]) : bd = dd;
    Wc.browser.type = bd || Kc;
    Wc.browser.versionX = cd ? parseInt(cd, 10) : Kc;
    (function (a) {
        function b(a, b, c) {
            a = Math.min(b, Math.max(0, a));
            return void 0 !== c && parseInt(a, 10) != a ? (c = Math.pow(10, c), Math.round(a * c) / c) : a
        }

        function c(a, c, d) {
            var e = g.exec(a);
            a = e ? parseFloat(e[1], 10) : 0;
            e && e[2] && (a = a / 100 * (c || 1));
            return b(a, c, d)
        }

        function d(a) {
            return b(a / 1 * 100, 100, 0) + "%"
        }

        function e(a) {
            this.a = this.b = this.g = this.r = 0;
            a && e.parse(a, this)
        }
        var f = {
                aliceblue: "#f0f8ff"
                , antiquewhite: "#faebd7"
                , aqua: "#00ffff"
                , aquamarine: "#7fffd4"
                , azure: "#f0ffff"
                , beige: "#f5f5dc"
                , bisque: "#ffe4c4"
                , black: "#000000"
                , blanchedalmond: "#ffebcd"
                , blue: "#0000ff"
                , blueviolet: "#8a2be2"
                , brown: "#a52a2a"
                , burlywood: "#deb887"
                , cadetblue: "#5f9ea0"
                , chartreuse: "#7fff00"
                , chocolate: "#d2691e"
                , coral: "#ff7f50"
                , cornflowerblue: "#6495ed"
                , cornsilk: "#fff8dc"
                , crimson: "#dc143c"
                , cyan: "#00ffff"
                , darkblue: "#00008b"
                , darkcyan: "#008b8b"
                , darkgoldenrod: "#b8860b"
                , darkgray: "#a9a9a9"
                , darkgreen: "#006400"
                , darkgrey: "#a9a9a9"
                , darkkhaki: "#bdb76b"
                , darkmagenta: "#8b008b"
                , darkolivegreen: "#556b2f"
                , darkorange: "#ff8c00"
                , darkorchid: "#9932cc"
                , darkred: "#8b0000"
                , darksalmon: "#e9967a"
                , darkseagreen: "#8fbc8f"
                , darkslateblue: "#483d8b"
                , darkslategray: "#2f4f4f"
                , darkslategrey: "#2f4f4f"
                , darkturquoise: "#00ced1"
                , darkviolet: "#9400d3"
                , deeppink: "#ff1493"
                , deepskyblue: "#00bfff"
                , dimgray: "#696969"
                , dimgrey: "#696969"
                , dodgerblue: "#1e90ff"
                , firebrick: "#b22222"
                , floralwhite: "#fffaf0"
                , forestgreen: "#228b22"
                , fuchsia: "#ff00ff"
                , gainsboro: "#dcdcdc"
                , ghostwhite: "#f8f8ff"
                , gold: "#ffd700"
                , goldenrod: "#daa520"
                , gray: "#808080"
                , green: "#008000"
                , greenyellow: "#adff2f"
                , grey: "#808080"
                , honeydew: "#f0fff0"
                , hotpink: "#ff69b4"
                , indianred: "#cd5c5c"
                , indigo: "#4b0082"
                , ivory: "#fffff0"
                , khaki: "#f0e68c"
                , lavender: "#e6e6fa"
                , lavenderblush: "#fff0f5"
                , lawngreen: "#7cfc00"
                , lemonchiffon: "#fffacd"
                , lightblue: "#add8e6"
                , lightcoral: "#f08080"
                , lightcyan: "#e0ffff"
                , lightgoldenrodyellow: "#fafad2"
                , lightgray: "#d3d3d3"
                , lightgreen: "#90ee90"
                , lightgrey: "#d3d3d3"
                , lightpink: "#ffb6c1"
                , lightsalmon: "#ffa07a"
                , lightseagreen: "#20b2aa"
                , lightskyblue: "#87cefa"
                , lightslategray: "#778899"
                , lightslategrey: "#778899"
                , lightsteelblue: "#b0c4de"
                , lightyellow: "#ffffe0"
                , lime: "#00ff00"
                , limegreen: "#32cd32"
                , linen: "#faf0e6"
                , magenta: "#ff00ff"
                , maroon: "#800000"
                , mediumaquamarine: "#66cdaa"
                , mediumblue: "#0000cd"
                , mediumorchid: "#ba55d3"
                , mediumpurple: "#9370db"
                , mediumseagreen: "#3cb371"
                , mediumslateblue: "#7b68ee"
                , mediumspringgreen: "#00fa9a"
                , mediumturquoise: "#48d1cc"
                , mediumvioletred: "#c71585"
                , midnightblue: "#191970"
                , mintcream: "#f5fffa"
                , mistyrose: "#ffe4e1"
                , moccasin: "#ffe4b5"
                , navajowhite: "#ffdead"
                , navy: "#000080"
                , oldlace: "#fdf5e6"
                , olive: "#808000"
                , olivedrab: "#6b8e23"
                , orange: "#ffa500"
                , orangered: "#ff4500"
                , orchid: "#da70d6"
                , palegoldenrod: "#eee8aa"
                , palegreen: "#98fb98"
                , paleturquoise: "#afeeee"
                , palevioletred: "#db7093"
                , papayawhip: "#ffefd5"
                , peachpuff: "#ffdab9"
                , peru: "#cd853f"
                , pink: "#ffc0cb"
                , plum: "#dda0dd"
                , powderblue: "#b0e0e6"
                , purple: "#800080"
                , red: "#ff0000"
                , rosybrown: "#bc8f8f"
                , royalblue: "#4169e1"
                , saddlebrown: "#8b4513"
                , salmon: "#fa8072"
                , sandybrown: "#f4a460"
                , seagreen: "#2e8b57"
                , seashell: "#fff5ee"
                , sienna: "#a0522d"
                , silver: "#c0c0c0"
                , skyblue: "#87ceeb"
                , slateblue: "#6a5acd"
                , slategray: "#708090"
                , slategrey: "#708090"
                , snow: "#fffafa"
                , springgreen: "#00ff7f"
                , steelblue: "#4682b4"
                , tan: "#d2b48c"
                , teal: "#008080"
                , thistle: "#d8bfd8"
                , tomato: "#ff6347"
                , turquoise: "#40e0d0"
                , violet: "#ee82ee"
                , wheat: "#f5deb3"
                , white: "#ffffff"
                , whitesmoke: "#f5f5f5"
                , yellow: "#ffff00"
                , yellowgreen: "#9acd32"
            }
            , g = /(-?[\d\.]+)(%)?/i
            , l = /#([a-f0-9]{1,2})([a-f0-9]{1,2})([a-f0-9]{1,2})/i
            , m = /rgb\(\s*(-?\d{1,3}\%?)\s*,\s*(-?\d{1,3}\%?)\s*,\s*(-?\d{1,3}\%?)\s*\)/i
            , n = /rgba\(\s*(-?\d{1,3}\%?)\s*,\s*(-?\d{1,3}\%?)\s*,\s*(-?\d{1,3}\%?)\s*,\s*([\d\.]+)\s*\)/i
            , p = /hsl\(\s*(-?\d{1,3}\%?)\s*,\s*(-?\d{1,3}\%?)\s*,\s*(-?\d{1,3}\%?)\s*\)/i
            , k = /hsla\(\s*(-?\d{1,3})\s*,\s*(-?\d{1,3}\%)\s*,\s*(-?\d{1,3}\%)\s*,\s*([\d\.]+)\s*\)/i;
        a.color = function (a) {
            return e.parse(a)
        };
        e.parse = function (a, b) {
            b = b || new e;
            l.test(a) ? b.hex(a) : m.test(a) ? b.rgb(a) : n.test(a) ? b.rgba(a) : p.test(a) ? b.hsl(a) : k.test(a) ? b.hsla(a) : b.name(a);
            return b
        };
        e.prototype.clone = function () {
            var a = new e;
            a.rgba(this.r, this.g, this.b, this.a);
            return a
        };
        e.prototype.rgb = function (a, b, c) {
            if (void 0 !== a && !1 !== a) {
                if (typeof a === G && void 0 === b)
                    if (c = m.exec(a)) a = c[1], b = c[2], c = c[3];
                    else return this;
                this.rgba(a, b, c, 1);
                return this
            }
            return !1 !== a ? ["rgb(", this.r, ", ", this.g, ", ", this.b, ")"].join("") : {
                r: this.r
                , g: this.g
                , b: this.b
            }
        };
        e.prototype.rgba = function (a, b, d, e) {
            if (void 0 !== a && !1 !== a) {
                if (typeof a === G && void 0 === b)
                    if (e = n.exec(a)) a = e[1], b = e[2], d = e[3], e = e[4];
                    else return this;
                this.r = c(a, 255, 0);
                this.g = c(b, 255, 0);
                this.b = c(d, 255, 0);
                this.a = c(e, 1, 5);
                return this
            }
            b = {
                r: this.r
                , g: this.g
                , b: this.b
                , a: this.a
            };
            return !1 !== a ? ["rgba(", b.r, ", ", b.g, ", ", b.b, ", ", b.a, ")"].join("") : b
        };
        e.prototype.hsl = function (a, b, c) {
            if (void 0 !== a && !1 !== a) {
                if (typeof a === G && void 0 === b)
                    if (c = p.exec(a)) a = c[1], b = c[2], c = c[3];
                    else return this;
                this.hsla(a, b, c, 1);
                return this
            }
            b = this.hsla(!1);
            return !1 !== a ? ["hsl(", b.h, ", ", d(b.s), ", ", d(b.l), ")"].join("") : {
                h: b.h
                , s: b.s
                , l: b.l
            }
        };
        e.prototype.hsla = function (a, e, f, g) {
            if (void 0 !== a && !1 !== a) {
                if (typeof a === G && void 0 === e)
                    if (g = k.exec(a)) a = g[1], e = g[2], f = g[3], g = g[4];
                    else return this;
                a = (parseFloat(a, 10) % 360 + 360) % 360;
                a /= 360;
                e = c(e, 1);
                f = c(f, 1);
                g = c(g, 1);
                var t = .5 >= f ? f * (e + 1) : f + e - f * e
                    , n = 2 * f - t;
                f = function (a) {
                    var b = 0 > a ? a + 1 : 1 < a ? a - 1 : a;
                    return 1 > 6 * b ? n + (t - n) * b * 6 : 1 > 2 * b ? t : 2 > 3 * b ? n + (t - n) * (2 / 3 - a) * 6 : n
                };
                return this.rgba(Math.round(255 * f(a + 1 / 3)), Math.round(255 * f(a)), Math.round(255 * f(a - 1 / 3)), g)
            }
            var u = this.r / 255
                , l = this.g / 255
                , F = this.b / 255;
            g = this.a;
            var m = Math.max(u, l, F);
            e = Math.min(u, l, F);
            var B;
            f = (m + e) / 2;
            if (m == e) B = e = 0;
            else {
                var p = m - e;
                e = .5 < f ? p / (2 - m - e) : p / (m + e);
                m == u ? B = (l - F) / p + (l < F ? 6 : 0) : m == l ? B = 2 + (F - u) / p : m == F && (B = 4 + (u - l) / p);
                B /= 6
            }
            B = b(360 * B, 360, 0);
            e = b(e, 1, 5);
            f = b(f, 1, 5);
            return !1 !== a ? ["hsla(", B, ", ", d(e), ", ", d(f), ", ", g, ")"].join("") : {
                h: B
                , s: e
                , l: f
                , a: g
            }
        };
        e.prototype.hex = function (a) {
            if (void 0 !== a && !1 !== a) return (a = l.exec(a)) ? this.rgb(parseInt(1 == a[1].length ? a[1] + a[1] : a[1], 16), parseInt(1 == a[2].length ? a[2] + a[2] : a[2], 16), parseInt(1 == a[3].length ? a[3] + a[3] : a[3], 16)) : this;
            if (0 == this.a) return Ic;
            var b = ("0" + this.r.toString(16)).slice(-2)
                , c = ("0" + this.g.toString(16)).slice(-2)
                , d = ("0" + this.b.toString(16)).slice(-2);
            return !1 !== a ? "#" + b + c + d : {
                r: b
                , g: c
                , b: d
            }
        };
        e.prototype.name = function (a) {
            if (void 0 !== a) return a.toLowerCase() == Ic ? this.rgba(0, 0, 0, 0) : this.hex(f[a.toLowerCase()]);
            if (!(this.r || this.g || this.b || this.a)) return Ic;
            a = this.hex();
            for (var b in f)
                if (f[b] == a) return b
        };
        e.prototype.hue = function (a) {
            if (void 0 !== a) {
                var b = this.hsla(!1);
                return this.hsla(a, b.s, b.l, b.a)
            }
            return this.hsla(!1).h
        };
        e.prototype.saturation = function (a) {
            if (void 0 !== a) {
                var b = this.hsla(!1);
                return this.hsla(b.h, a, b.l, b.a)
            }
            return this.hsla(!1).s
        };
        e.prototype.lightness = function (a) {
            if (void 0 !== a) {
                var b = this.hsla(!1);
                return this.hsla(b.h, b.s, a, b.a)
            }
            return this.hsla(!1).l
        };
        e.prototype.alpha = function (a) {
            return void 0 !== a ? (this.a = c(a, 1), this) : this.a
        };
        e.prototype.saturate = function (a) {
            var b = this.hsla(!1);
            b.s += c(a, 1);
            return this.hsla(b.h, b.s, b.l, b.a)
        };
        e.prototype.desaturate = function (a) {
            var b = this.hsla(!1);
            b.s -= c(a, 1);
            return this.hsla(b.h, b.s, b.l, b.a)
        };
        e.prototype.lighten = function (a) {
            var b = this.hsla(!1);
            b.l += c(a, 1);
            return this.hsla(b.h, b.s, b.l, b.a)
        };
        e.prototype.darken = function (a) {
            var b = this.hsla(!1);
            b.l -= c(a, 1);
            return this.hsla(b.h, b.s, b.l, b.a)
        };
        e.prototype.shift = function (a) {
            var b = this.hsla(!1)
                , c = (a = g.exec(a)) ? parseFloat(a[1]) : 0;
            a && a[2] && (c = c / 100 * 360);
            b.h += c;
            return this.hsla(b.h, b.s, b.l, b.a)
        }
    })(jQuery);
    (function (a) {
        function b(b, e) {
            m || (n = b, n.shift = n.maxHeight && !(!n.align || n.align == H), m = [], Gb.bind(yc, d).bind("resize", c), U = 0 < n.fps ? Math.floor(1E3 / n.fps) : 0, n.wrap && (k = e, n.wrapContainer ? (b = a(n.wrapContainer), p = a(Ha), p.attr("id", "dx"), p.css({
                position: v
                , top: 0
                , left: 0
                , width: b.width()
            }).prependTo(b), "static" == b.css(mc) && b.css(mc, tc)) : (p = a(Ha), p.attr("id", "dx"), p.css({
                position: Db
                , top: 0
                , width: k.width()
                , left: k.offset().left
                , "z-index": (parseInt(k.css("z-index"), 10) || 0) + 1
            }).prependTo(x))))
        }

        function c() {
            if (p && k) {
                var b = n.wrapContainer ? a(n.wrapContainer) : void 0;
                if (b) {
                    if (p.css({
                            position: v
                            , top: 0
                            , left: 0
                            , width: b.width()
                        }), b.css("overflow") == Qb) {
                        var c = b.width()
                            , e = b.height();
                        L = {
                            top: 0
                            , right: c
                            , bottom: e
                            , left: 0
                            , width: c
                            , height: e
                        }
                    }
                }
                else p.css({
                    position: Db
                    , top: 0
                    , width: k.width()
                    , left: k.offset().left
                }), L = void 0;
                c = g();
                t = k.offset().top;
                b ? B = 0 : n.align == Ua ? t += c.height : B = "middle" == n.align || n.align == Va ? Math.max(0, Math.floor(c.height / 2 - n.maxHeight / 2) || 0) : isNaN(parseInt(n.align), 10) ? 0 : parseInt(n.align, 10)
            }
            else t = 0, L = void 0;
            d()
        }

        function d() {
            if (U && (new Date).getTime() - Fb < U) null === wa && (wa = setTimeout(d, U));
            else {
                var b = g();
                b.top += t;
                var c = -1;
                L && (b = {
                    top: b.top
                    , bottom: L.height + b.top
                    , left: b.left
                    , right: L.width + b.left
                    , width: L.width
                    , height: L.height
                });
                for (var e = 0, k; k = m[e]; e++) 0 > c && k.bounds.top <= b.top && k.bounds.bottom >= b.top && (c = e), k.update(b);
                n.wrap && (0 <= c && (k = m[c], b = b.top - k.bounds.top, k.bounds.height - k.ca > k.bounds.height - b ? F = k.eb.top - k.ca + b : k.ca && (F = k.eb.top)), p.css(H, B - F));
                if (c != ma && (ma = c, a.isFunction(n.onChange))) n.onChange(m[ma], ma);
                U && (Fb = (new Date).getTime(), null !== wa && (clearTimeout(wa), wa = null))
            }
        }

        function e(a) {
            this.T(a)
        }

        function f(a, b, c) {
            this.T(a, b, c)
        }

        function g(a) {
            var b = a || Gb;
            a = a ? b.position() : {
                top: b.scrollTop()
                , left: b.scrollLeft()
            };
            a.width = b.width();
            a.height = b.height();
            a.right = a.left + a.width;
            a.bottom = a.top + a.height;
            return a
        }

        function l() {}
        var m, n, p, k, u, t, F = 0
            , B = 0
            , ma = -1
            , L, U = 0
            , Fb = 0
            , wa = null;
        a.fn.dx = function (d) {
            if (!this.length) return this;
            b(a.extend({}, a.fn.dx.defaults, d), this.first().parent());
            this.each(function () {
                var b = a(this);
                b.attr("data-dx-init") || (b.attr("data-dx-init", !0), m.push(new e(b)))
            });
            c();
            return this
        };
        a.fn.dx.defaults = {
            fps: 0
            , wrap: !0
            , align: "middle"
            , wrapContainer: ""
            , wrapItem: "dx-scene"
            , maxHeight: 540
            , Qb: 0
            , hg: !1
        };
        a.fn.dx.fx = {};
        var Gb = a(window);
        e.prototype.T = function (b) {
            u && u.remove();
            this.element = b;
            this.bounds = this.eb = g(b);
            this.pe = !0;
            this.$e = this.Yb();
            this.element.css({
                position: tc
                , overflow: Qb
            });
            if (n.wrap) {
                var c = this.bounds.top - k.offset().top;
                this.wc = a(Ha).css({
                    visibility: Qb
                    , height: b.outerHeight(!0)
                    , width: b.outerWidth(!0)
                });
                this.element.attr(gb) && this.wc.attr(gb, this.element.attr(gb));
                this.wc.insertBefore(this.element);
                n.hg && (u = this.wc.clone(), k.append(u));
                this.ca = Math.max(0, n.maxHeight ? this.bounds.height - n.maxHeight : 0);
                (b = n.Qb ? m.length ? m[m.length - 1].Va : null : p.children().last().eq(0)) && (c = (parseInt(b.css(H), 10) || 0) + b.height());
                this.wd = a(Ha).css({
                    position: v
                    , height: this.ca ? n.maxHeight : this.bounds.height
                    , overflow: Qb
                    , width: this.bounds.width
                    , top: c
                    , left: this.element.css(dc)
                }).addClass(n.wrapItem).append(this.element).appendTo(p);
                this.eb = g(this.wd)
            }
            this.Va = this.wd || this.element;
            this.Va.data("dx-scene", this)
        };
        e.prototype.visible = function (a) {
            var b = this.eb
                , c = F
                , d = c + a.height;
            a = L ? b.top < d + B && b.right > a.left && b.bottom > c - B && b.left < a.right : b.top <= d + B && b.right >= a.left && b.bottom >= c - B && b.left <= a.right;
            a != this.pe && (n.wrap ? this.Va.css(wb, a ? "block" : "none") : this.Va.css("visibility", a ? "visible" : Qb), this.pe = a);
            n.Qb && (a && this.uc ? (p.prepend(this.Va), this.uc = !1) : a || this.uc || !(b.top - (d + B) > n.Qb || c - B - b.bottom > n.Qb) || (this.uc = !0, this.Va.detach()));
            return a
        };
        e.prototype.update = function (a) {
            if (this.visible(a)) {
                for (var b = a.top - this.bounds.top, c = 0, d; d = this.$e[c]; c++) d.apply(b, a);
                if (this.ca) {
                    var e;
                    0 > b ? e = 0 : b > this.ca ? e = this.ca : e = b;
                    this.element.css(H, -e)
                }
            }
        };
        e.prototype.Yb = function () {
            var b = this;
            return this.element.find("*").filter(function () {
                var b = a(this);
                return a.hasData(this) && a(b).data("dx-prop") || b.attr("data-dx-prop")
            }).map(function () {
                return f.from(a(this), b)
            })
        };
        f.prototype.T = function (b, c, d) {
            this.Ka = d;
            this.element = b;
            this.options = {
                prop: c.prop
                , start: void 0 !== c.start ? c.start : c.delay
                , stop: void 0 !== c.stop ? c.stop : c.duration ? (c.start || c.delay || 0) + c.duration : void 0
                , from: c.from
                , to: c.to
                , during: c.during
                , ratio: void 0 !== c.ratio ? c.ratio : 1
                , baseline: void 0 !== c.baseline ? c.baseline : H
                , bounds: c.bounds
            };
            this.fx = (this.vd = a.isFunction(this.options.prop)) ? this.options.prop : a.fn.dx.fx[this.options.prop] || new l
        };
        f.from = function (b, c) {
            function d(b, c) {
                b = b.data("dx-" + c);
                return void 0 === b && [] || a.isArray(b) && b || typeof b === G && b.split(",") || [b]
            }
            var e = d(b, "prop")
                , k = {};
            a.each(["duration", "delay", Cc, "stop", "from", "to", "during", "ratio", "baseline"
, "pin"], function (a, c) {
                a = d(b, c);
                for (var f = e.length; a.length < f;) a.push(a[a.length - 1]);
                k[c] = a
            });
            return a.map(e, function (a, d) {
                a = {
                    prop: e[d]
                };
                for (var t in k) a[t] = k[t][d];
                a.bounds = c.bounds;
                return new f(b, a, c)
            })
        };
        f.prototype.apply = function (a, b) {
            this.vd ? this.fx(a, b, this) : this.fx && this.fx.apply(this, a, b)
        };
        l.Ae = {
            display: !0
            , position: !0
            , visibility: !0
        };
        l.prototype.apply = function (a, b, c) {
            a.options.step || (this.init(a), a.options.step = this.Vd(a));
            a.options.step(b, c)
        };
        l.prototype.init = I();
        l.prototype.Vd = function (a) {
            function b(a) {
                e.css(t, f, e.shift(a * k.ratio, g, k.from, k.to))
            }

            function c(b) {
                b = a.Ka.ca ? a.Ka.ca : b.height;
                return k.baseline == Ua ? a.Ka.ca ? a.Ka.eb.top + b : b : void 0 !== k.stop ? k.stop : b
            }

            function d(b) {
                return k.baseline == Ua ? a.Ka.ca ? k.start - a.Ka.eb.top : k.start - b.height : k.start || 0
            }
            var e = this
                , k = a.options
                , f = k.prop
                , t = a.element
                , g = e.css(t, f);
            "static" == t.css(mc) && t.css(mc, tc);
            return void 0 !== k.during ? function (a, b) {
                e.css(t, f, d(b) <= a && c(b) >= a ? k.during : g)
            } : void 0 !== k.from || void 0 !== k.to ? (k.from = e.Hc(t, a), k.to = e.Ic(t, a), k.start = void 0 !== k.start ? k.start : 0, function (a, b) {
                a = (a - d(b)) / (c(b) - d(b));
                a = Math.min(1, Math.max(0, a));
                e.css(t, f, e.percent(a, g, k.from, k.to))
            }) : void 0 !== k.start || void 0 !== k.end ? function (a, e) {
                void 0 !== k.start && d(e) > a ? a = k.start : void 0 !== k.stop && c(e) < a && (a = k.stop);
                b(a)
            } : b
        };
        l.prototype.percent = function (a, b, c, d) {
            return c + a * (d - c)
        };
        l.prototype.shift = function (a, b) {
            return parseFloat(b, 10) + parseFloat(a, 10)
        };
        l.prototype.css = function (a, b, c) {
            if (void 0 !== c) return a.css(b, c);
            if (b in l.Ae) return a.css(b);
            a = parseInt(a.css(b), 10);
            return isNaN(a) ? 0 : a
        };
        l.prototype.Hc = function (a, b) {
            return this.Yb(a, b, b.options.from)
        };
        l.prototype.Ic = function (a, b) {
            return this.Yb(a, b, b.options.to)
        };
        l.prototype.Yb = function (a, b, c) {
            var d = b.options;
            c = void 0 !== c ? c : this.css(a, d.prop);
            if (/top|bottom|left|right/i.test(d.prop)) {
                b = /top|bottom/i.test(d.prop) ? b.options.bounds.height : b.options.bounds.width;
                a = /top|bottom/i.test(d.prop) ? a.outerHeight() : a.outerWidth();
                c = /middle|center/i.test(c) ? "50%" : c;
                if (/\d+%/.test(c)) return b = Math.round(b * parseInt(c, 10) / 100), b - a;
                if (/top|bottom|left|right/i.test(c)) return c == d.prop ? 0 : b - a
            }
            return parseFloat(c, 10) || 0
        };
        var E = a.inherit(l);
        E.prototype.init = function (a) {
            "inline" == a.element.css(wb) && a.element.css(wb, "inline-block")
        };
        E.prototype.css = function (a, b, c) {
            if (void 0 !== c) a.transform(b, c);
            else return parseFloat(a.transform(b), 10) || 0
        };
        var eb = new E;
        a.each("translateX translateY translateZ scaleX scaleY scaleZ rotate rotateX rotateY rotateZ skewX skewY skewZ".split(" "), function (b, c) {
            a.fn.dx.fx[c] = eb
        });
        E = a.inherit(E);
        E.prototype.css = function (a, b, c) {
            return void 0 === c ? (a = parseFloat(this.base(a, "scale", c), 10), isNaN(a) ? 1 : a) : this.base(a, "scale", c)
        };
        E.prototype.shift = function (a, b) {
            return b * Math.pow(1.01, a)
        };
        a.fn.dx.fx.zoom = a.fn.dx.fx.scale = new E;
        E = a.inherit(l);
        E.prototype.init = function (a) {
            1 == a.options.ratio && (a.options.ratio = .01)
        };
        E.prototype.percent = function (b, c, d, e) {
            c = d.r + b * (e.r - d.r);
            var k = d.g + b * (e.g - d.b)
                , f = d.b + b * (e.b - d.b);
            b = d.a + b * (e.a - d.a);
            return a.color().rgba(c, k, f, b)
        };
        E.prototype.shift = function (a, b) {
            return b.shift(a)
        };
        E.prototype.css = function (b, c, d) {
            return void 0 !== d ? (b.css(c, d.rgba()), d) : a.color(b.css(c))
        };
        E.prototype.Hc = function (b, c) {
            return c.options.from == Ic ? this.Ic(b, c).alpha(0) : void 0 !== c.options.from ? a.color(c.options.from) : this.css(b, c.options.prop)
        };
        E.prototype.Ic = function (b, c) {
            return c.options.to == Ic ? this.Hc(b, c).alpha(0) : void 0 !== c.options.to ? a.color(c.options.to) : this.css(b, c.options.prop)
        };
        a.fn.dx.fx.color = a.fn.dx.fx[Ra] = a.fn.dx.fx["border-color"] = new E;
        E = a.inherit(l);
        E.prototype.Vd = function (a) {
            var b = a.element;
            a.element.css(mc);
            a.element.css(H);
            var c = a.element.position()
                , d = a.options.start || 0
                , e = void 0 !== a.options.stop ? a.options.stop : Infinity;
            e == Ua && (e = a.Ka.bounds.height - a.element.height());
            var k = c.top + parseInt(b.css("margin-top"), 10)
                , f = e - d;
            b.css({
                position: v
                , top: k
            });
            return function (a) {
                a < d ? b.css(H, k) : a > f ? b.css(H, f - d + k) : b.css(H, a - d + k)
            }
        };
        a.fn.dx.fx.fixed = new E
    })(jQuery);
    (function (a) {
        var b = /<img\b([^>]*(?:.*?))\/?>/ig
            , c = /([^\s=]+)\s*=\s*((?:\')[^<\']*(?:\')|(?:")[^<"]*(?:"))/g;
        a.findImages = function (a) {
            a = a || "";
            for (var d = [], f; f = b.exec(a);) {
                f = f[1];
                for (var g, l, m = !0; g = c.exec(f);)
                    if ("" !== g[1] && "" !== g[2]) {
                        var n = g[1].toLowerCase();
                        g = g[2].replace(/^(\'|")(.*)(\1)$/, "$2");
                        n == D ? l = g : (n == Tc || n == Ob) && 1 >= parseInt(g, 10) && (m = !1)
                    }
                l && m && d.push(l)
            }
            return d
        }
    })(jQuery);
    (function (a) {
        var b = /url\((['"]?)(.*?)\1\)/;
        a.fn.fullyLoaded = function (c) {
            if (!a.isFunction(c)) return this;
            var d = [];
            this.each(function () {
                a(this).find("*").each(function () {
                    var c = a(this);
                    if (c.is(Wb) && !this.complete) {
                        var e = c.attr(D);
                        e && -1 == e.indexOf("data:") && d.push(c.attr(D))
                    }
                    else(c = c.css("background-image")) && (c = b.exec(c)) && c[2] && -1 == c[2].indexOf("data:") && d.push(c[2])
                })
            });
            if (d.length) {
                var e = [];
                a.each(d, function (b, c) {
                    e.push(a.Deferred(function (b) {
                        var d = new Image;
                        a(d).bind("load error", function () {
                            b.resolve()
                        });
                        d.src = c
                    }))
                });
                a.when.apply(a, e).then(c)
            }
            else c();
            return this
        }
    })(jQuery);
    (function (a) {
        function b() {
            for (var a = 0; a < c.length; a++) c[a]();
            c.length = 0
        }
        var c = [];
        a.Bc = function (d) {
            var e = window.___gcfg;
            e && e.lang || (window.___gcfg = window.___gcfg || {}, window.___gcfg.lang = M().settings.blog_locale || "en");
            (e = window.gapi) && e.plus && e.plusone && e.person && e.page && e.community ? d() : (0 == c.length && (window.___gcfg.parsetags = "explicit", a.getScript(M().settings.plusone_api_src, b)), c.push(d))
        }
    })(jQuery);
    Date.prototype.fromISOString || (Date.prototype.fromISOString = function (a) {
        var b = /^(\d{4}|[+\-]\d{6})(?:-(\d{2})(?:-(\d{2}))?)?(?:T(\d{2}):(\d{2})(?::(\d{2})(?:\.(\d{2,3}))?)?(?:(Z)|([+\-])(\d{2})(?::(\d{2}))?)?)?$/.exec(a);
        if (!b) return Date.parse && this.setTime(Date.parse(a)), isNaN(this.getTime()) ? void 0 : this;
        b[1] = parseInt(b[1], 10) || 0;
        b[4] = parseInt(b[4], 10) || 0;
        b[5] = parseInt(b[5], 10) || 0;
        b[6] = parseInt(b[6], 10) || 0;
        b[7] = parseInt(b[7], 10) || 0;
        b[10] = parseInt(b[10], 10) || 0;
        b[11] = parseInt(b[11], 10) || 0;
        b[2] = (parseInt(b[2], 10) || 1) - 1;
        b[3] = parseInt(b[3], 10) || 1;
        a = 0;
        "Z" !== b[8] && b[9] && (a = 60 * b[10] + b[11], "+" == b[9] && (a = 0 - a));
        this.setTime(Date.UTC(b[1], b[2], b[3], b[4], b[5] + a, b[6], b[7]));
        return this
    });
    Date.prototype.toISOString || (Date.prototype.toISOString = function () {
        function a(a) {
            return 10 > a ? "0" + a : a
        }
        return [this.getUTCFullYear(), "-", a(this.getUTCMonth() + 1), "-", a(this.getUTCDate()), "T", a(this.getUTCHours()), ":", a(this.getUTCMinutes()), ":", a(this.getUTCSeconds()), "Z"].join("")
    });
    (function (a) {
        function b() {
            var b = d();
            g = a.grep(g, function (d) {
                var e = a(d)
                    , f = e.data("lazyload") || a.fn.lazyload.defaults;
                return c(e, {
                    viewport: b
                    , buffer: f.buffer
                }) ? (f.effect || a[f.effect] ? a("<img/>").one("load", function () {
                    e.hide().attr(D, e.attr(A));
                    e.removeAttr(A).removeData().removeClass(ob);
                    e[f.effect](f.duration)
                }).attr(D, e.attr(A)) : (e.attr(D, e.attr(A)), e.removeAttr(A).removeData().removeClass(ob)), !1) : !0
            })
        }

        function c(b, c) {
            var f = c && c.viewport || d()
                , g = e(b);
            if (c = c && c.buffer || 0) g.top -= c, g.right += c, g.bottom += c, g.left -= c;
            return g.top <= f.bottom && g.right >= f.left && g.bottom >= f.top && g.left <= f.right && !b.parents().andSelf().filter(function () {
                return "none" == a(this).css(wb) || "0" == a(this).css("opacity")
            }).length
        }

        function d() {
            var b = a(window);
            return {
                top: b.scrollTop()
                , right: b.scrollLeft() + b.width()
                , bottom: b.scrollTop() + b.height()
                , left: b.scrollLeft()
            }
        }

        function e(a) {
            var b = a.offset();
            return {
                top: b.top
                , right: b.left + a.width()
                , bottom: b.top + a.height()
                , left: b.left
            }
        }
        var f, g = [];
        a.fn.lazyload = function (e) {
            var l = void 0 !== e
                , n = a.extend(a.fn.lazyload.defaults, e)
                , p = n.delay || 0;
            a(window).bind(yc, function () {
                clearTimeout(f);
                f = setTimeout(b, p)
            });
            var k = d();
            return this.each(function () {
                a(this).find(Wb).each(function () {
                    var b = a(this);
                    if (b.attr(A) || !this.complete) c(b, {
                        viewport: k
                        , buffer: n.buffer
                    }) ? b.attr(A) && b.attr(D, b.attr(A)).removeAttr(A) : (b.attr(A) || b.attr(A, b.attr(D)), n.placeholder ? b.attr(D, n.placeholder) : b.removeAttr(D), l && b.data("lazyload", n), b.addClass(ob), g.push(this))
                })
            })
        };
        a.fn.lazyload.defaults = {
            buffer: 400
            , delay: 250
            , placeholder: mb
            , effect: "fadeIn"
            , duration: "slow"
        }
    })(jQuery);
    (function (a) {
        var b;
        a.fn.measure = function (c, d) {
            c || b || (b = a(Ha).css({
                position: v
                , visibility: Qb
                , overflow: Qb
                , height: 0
                , width: 0
                , left: "-9999px"
                , top: "-9999px"
            }).prependTo(x));
            c = this.clone().appendTo(c || b);
            d = {
                width: c.outerWidth(d)
                , height: c.outerHeight(d)
            };
            c.remove();
            return d
        }
    })(jQuery);
    (function (a) {
        function b(a, b, c) {
            a.is("svg") ? (a[0].setAttribute(Tc, b), a[0].setAttribute(Ob, c), a[0].childNodes[0].setAttribute(Tc, b), a[0].childNodes[0].setAttribute(Ob, c)) : a.css({
                width: b
                , height: c
            })
        }

        function c(b, c) {
            var d = document.createElement(Wb);
            d.onload = function () {
                a(this).css(Cb, "gray");
                c(this)
            };
            d.src = b.src
        }

        function d(a, b) {
            a = document.createElementNS("http://www.w3.org/2000/svg", a);
            if (b)
                for (var c in b) 0 == c.indexOf("xlink:") ? a.setAttributeNS("http://www.w3.org/1999/xlink", c.substr(6), b[c]) : a.setAttribute(c, b[c]);
            return a
        }

        function e(a, b) {
            function c(a) {
                var c = document.createElement(Wb);
                c.src = a;
                b(c)
            }
            if (g) {
                var d = document.createElement(y)
                    , e = d.getContext("2d");
                if (e) {
                    var f = document.createElement(Wb);
                    f.crossOrigin = "";
                    f.onload = function () {
                        try {
                            d.width = f.width;
                            d.height = f.height;
                            e.drawImage(f, 0, 0);
                            for (var b = e.getImageData(0, 0, d.width, d.height), k = 0, t = b.data.length; k < t; k += 4) b.data[k] = b.data[k + 1] = b.data[k + 2] = .2989 * b.data[k] + .587 * b.data[k + 1] + .114 * b.data[k + 2];
                            e.putImageData(b, 0, 0, 0, 0, b.width, b.height);
                            c(d.toDataURL());
                            m++
                        }
                        catch (U) {
                            l++, 4 < l && 0 == m && (g = !1), c(a.src)
                        }
                    };
                    f.src = a.src
                }
                else g = !1, c(a.src)
            }
            else c(a.src)
        }
        a.fn.monochromatic = function () {
            return this.each(function () {
                if (a(this).is(Wb)) {
                    var c = a(this);
                    if (c.parent().is(".monochromatic-wrapper")) {
                        var d = parseInt(c[0].style.width || c.width(), 10)
                            , e = parseInt(c[0].style.height || c.height(), 10);
                        c.parent().css({
                            width: d
                            , height: e
                        });
                        b(c.siblings().first(), d, e)
                    }
                    else {
                        var f = c.addClass("monochromatic-original").wrap('<span class="monochromatic-wrapper"/>').parent();
                        f.css({
                            position: tc
                            , display: "inline-block"
                            , width: c.width()
                            , height: c.height()
                        });
                        a.monochrome(this, function (d) {
                            c.css("z-index", 1);
                            a(d).css({
                                position: v
                                , "z-index": 0
                                , left: 0
                                , top: 0
                            });
                            b(a(d), c.width(), c.height());
                            d.setAttribute("class", "monochromatic-friend");
                            f.append(d)
                        })
                    }
                }
                else a(this).find(Wb).monochromatic()
            })
        };
        a.monochrome = function (b, g) {
            var k = a.browser && a.browser.type;
            if ("msie" == k) c(b, g);
            else if ("chrome" == k || "mozilla" == k) {
                if (!f) {
                    var k = d("svg", {
                            width: 0
                            , height: 0
                            , baseProfile: "full"
                        })
                        , l = d(Cb);
                    l.id = "monochromatic-filter";
                    var t = d("feColorMatrix", {
                        type: "matrix"
                        , values: "0.3333 0.3333 0.3333 0 0 0.3333 0.3333 0.3333 0 0 0.3333 0.3333 0.3333 0 0 0      0      0      1 0"
                    });
                    l.appendChild(t);
                    k.appendChild(l);
                    a(k).css({
                        visibility: Qb
                        , position: v
                        , top: -9999
                    }).prependTo(x);
                    f = !0
                }
                k = d("svg", {
                    width: a(b).width()
                    , height: a(b).height()
                });
                b = d("image", {
                    x: 0
                    , y: 0
                    , filter: "url(#monochromatic-filter)"
                    , "xlink:href": b.src
                    , width: a(b).width()
                    , height: a(b).height()
                });
                k.appendChild(b);
                g(k)
            }
            else e(b, g)
        };
        var f = !1
            , g = !0
            , l = 0
            , m = 0
    })(jQuery);
    (function (a) {
        function b(b) {
            var c = a(this)
                , e = (new Date).getTime()
                , f = c.data("_wiggle") || [];
            f.unshift({
                x: b.clientX
                , y: b.clientY
                , Bg: e
            });
            for (var g = 0, l = 0, m = 0, n = 0, p = 0, k = 0, u;
                (u = f[g]) && !(2E3 < e - u.Bg); g++) {
                var l = l + u.x
                    , m = m + u.y
                    , t = f[g + 1];
                if (t) {
                    var F = u.x - t.x;
                    u = u.y - t.y;
                    (0 > F * n || 0 > u * p) && k++;
                    n = F;
                    p = u
                }
            }
            g < f.length && (f = f.slice(0, g + 1));
            4 <= k && (f = [], b.type = "mousewiggle", b.pageX = b.clientX = Math.round(l / g), b.pageY = b.clientY = Math.round(m / g), a.event.handle.apply(this, arguments));
            c.data("_wiggle", f)
        }
        a.event.special.mousewiggle = {
            setup: function () {
                a(this).bind(gc, b)
            }
            , teardown: function () {
                a(this).unbind(gc, b)
            }
        }
    })(jQuery);
    (function (a) {
        function b() {
            l = Math.max(0, l - 2);
            for (var a = !0, c = 0, d; d = f[c]; c++) a &= d.update(), a &= d.va;
            p = a ? 250 : 35;
            k = window.setTimeout(b, p)
        }

        function c(a, b, c) {
            this.Da = a;
            this.settings = c || {};
            this.particles = [];
            this.va = !1;
            this.offset = {
                left: 0
                , top: 0
            };
            b && this.init(b)
        }

        function d(b, c, d, e, k) {
            this.x = this.jg = b;
            this.y = this.kg = c;
            this.r = this.Fc = d;
            k = void 0 === k ? 100 : k;
            this.K = k * (Math.random() - .5);
            this.I = k * (Math.random() - .5);
            this.ge = 3 + 98 * Math.random();
            this.yg = .1 + .4 * Math.random();
            this.ua = 0;
            this.cb = 1;
            this.va = !1;
            b = "#" + e;
            this.element = a(Ha);
            c = {
                position: v
                , "z-index": "-1"
            };
            u ? (this.element.html("."), c.color = b, c.cursor = "default", c.font = "100px Monospace") : (c["-webkit-border-radius"] = Ea, c["-moz-border-radius"] = Ea, c["-ms-border-radius"] = Ea, c["-khtml-border-radius"] = Ea, c["border-radius"] = Ea, c[Ra] = b);
            this.element.css(c);
            this.position()
        }
        var e = !1
            , f = [];
        a.fn.particles = function (b, c) {
            if (g[b]) return g[b].apply(this, Array.prototype.slice.call(arguments, 1));
            if ("object" !== typeof b && b) a.error("Method " + b + " does not exist on jQuery.particles");
            else return g.init.apply(this, arguments)
        };
        var g = {
                init: function (b, d) {
                    g.play();
                    return this.each(function () {
                        b && b.length && f.push(new c(a(this), b, d))
                    })
                }
                , play: function () {
                    e || (a(document).bind(hc, function (a) {
                        l = 200;
                        m = a.clientX;
                        n = a.clientY
                    }), e = !0);
                    b()
                }
                , pause: function () {
                    a(document).unbind(hc);
                    e = !1;
                    k && (window.clearTimeout(k), k = 0)
                }
                , toggle: function () {
                    g[k ? "pause" : "play"]()
                }
            }
            , l = 200
            , m = -200
            , n = -200
            , p = 35
            , k, u = a.browser.msie && 9 > parseInt(a.browser.version, 10)
            , t = !(a.browser.msie && 9 > parseInt(a.browser.version, 10));
        c.prototype.init = function (b) {
            for (var c = 0, e; e = b[c]; c++) e = new d(e.x, e.y, e.r, e.c || "000000", this.settings.initialVelocity), this.particles.push(e), this.Da.append(e.element);
            this.offset = a(this.Da).offset();
            "static" == this.Da.css(mc) && this.Da.css(mc, tc)
        };
        c.prototype.dispose = function () {
            for (var a = 0, b; b = this.particles[a]; a++) b.remove();
            this.particles = []
        };
        c.prototype.update = function () {
            this.va = !0;
            for (var a = m - this.offset.left, b = n - this.offset.top, c = 0, d; d = this.particles[c]; c++) d.update(a, b), this.va &= d.va
        };
        d.prototype.update = function (a, b) {
            this.x += this.K;
            this.y += this.I;
            this.K = this.sd(.92 * (this.K + 0 / this.Fc));
            this.I = this.sd(.92 * (this.I + 0 / this.Fc));
            a -= this.x;
            b -= this.y;
            var c = Math.sqrt(a * a + b * b);
            a /= c;
            b /= c;
            c < l ? (this.K -= a * this.ge, this.I -= b * this.ge, this.ua += .4 * (.005 - this.ua), this.cb = Math.max(0, .9 * this.cb - .01), this.K *= 1 - this.cb, this.I *= 1 - this.cb) : (this.ua += .005 * (this.yg - this.ua), this.cb = Math.min(1, this.cb + .03));
            a = this.jg - this.x;
            b = this.kg - this.y;
            c = Math.sqrt(a * a + b * b);
            this.K += a * this.ua;
            this.I += b * this.ua;
            this.r = this.Fc + c / 8;
            (this.va = .3 > c && .3 > this.K && .3 > this.I) || this.position()
        };
        d.prototype.sd = function (a) {
            return Math.min(50, Math.max(-50, a))
        };
        d.prototype.position = function () {
            var a;
            if (u) this.element.css({
                left: this.x - 20
                , top: this.y - 60
            });
            else {
                var b = 2 * this.r;
                t ? (a = ["translate(", this.x, "px,", this.y, "px)"].join(""), this.element.css({
                    transform: a
                    , "-moz-transform": a
                    , "-ms-transform": a
                    , "-o-transform": a
                    , "-webkit-transform": a
                    , width: b
                    , height: b
                })) : this.element.css({
                    left: this.x
                    , top: this.y
                    , width: b
                    , height: b
                })
            }
        }
    })(jQuery);
    (function (a) {
        function b(b, d, e, f) {
            if (a(b.target).parents().andSelf().filter(b.data).length) {
                d = a(b.data);
                e = 0 == d.scrollTop();
                var c = d[0].scrollHeight - d.scrollTop() == d[0].clientHeight
                    , l = 0 > f || 32 == b.which || 40 == b.which;
                if ((f = 0 < f || 38 == b.which) && e || l && c)
                    if (e = d.data("callback"), c = !1, a.isFunction(e) && (c = e(d, f ? 1 : -1)), !c || void 0 === c) return b.preventDefault(), !1
            }
        }
        a.fn.scrollLimit = function (c) {
            var d = a.extend({
                keydown: !0
                , mousewheel: !0
                , callback: void 0
            }, c);
            return this.each(function () {
                d.keydown && a(this).bind("keydown", this, b);
                d.mousewheel && a(this).bind("mousewheel", this, b);
                d.callback && a(this).data("callback", d.callback)
            })
        }
    })(jQuery);
    (function (a) {
        function b(b) {
            function c(b) {
                b.contents().each(function () {
                    if (1 == this.nodeType) {
                        var b = a(this)
                            , d = n.test(this.nodeName);
                        if (d || "" != a.trim(b.text())) {
                            c(b);
                            var e = b.css("text-align")
                                , k = b.css(Fc)
                                , f = b.css("font-style")
                                , g = b.css("font-weight")
                                , l;
                            if (m.test(this.nodeName)) {
                                var p = a("<p/>").html(this.innerHTML);
                                b.replaceWith(p);
                                b = p;
                                "CENTER" == this.nodeName ? e = Va : "PRE" == this.nodeName && (l = "pre")
                            }
                            b.removeAttr("style");
                            d || (e && e != dc && b.css("text-align", e), f && b.css("font-style", f), g && b.css("font-weight", g), k && b.css(Fc, k), l && b.css("white-space", l))
                        }
                        else b.remove()
                    }
                    else 3 != this.nodeType && a(this).remove()
                })
            }

            function d(b, c) {
                c = c || 0;
                for (var e = b[0].childNodes, k = 0, f; f = e[k]; k++)
                    if (1 == f.nodeType) {
                        if (c && p.test(f.nodeName)) {
                            c = document.createDocumentFragment();
                            f = k;
                            for (var g; g = e[f]; f++) c.appendChild(g.cloneNode(!0));
                            a(c).insertAfter(b);
                            for (f = e.length - 1; f >= k; f--) b[0].removeChild(e[f]);
                            return !0
                        }
                        if (d(a(f), c + 1)) return !0
                    }
                return !1
            }

            function e(b) {
                for (var c = b[0].childNodes, d = -1, e = -1, k = 0, f; f = c[k]; k++)
                    if (0 > d) {
                        if (3 == f.nodeType || 1 == f.nodeType && !p.test(f.nodeName)) d = k
                    }
                    else if (0 > e) 1 == f.nodeType && p.test(f.nodeName) && (e = k - 1);
                else break;
                if (0 <= d) {
                    0 > e && (e = c.length - 1);
                    f = document.createDocumentFragment();
                    for (var g = !1, k = d; k <= e; k++) g = g || "" !== a.trim(c[k].nodeValue), f.appendChild(c[k].cloneNode(!0));
                    for (; e >= d; e--) b[0].removeChild(c[e]);
                    0 < d ? (a("<p/>").append(f).insertAfter(c[d - 1]), g && "BR" == c[d - 1].nodeName && b[0].removeChild(c[d - 1])) : a("<p/>").append(f).prependTo(b);
                    return !0
                }
                return !1
            }
            var m = /^(article|aside|blockquote|center|div|footer|header|section|pre)$/i
                , n = /^(br)$/i
                , p = /^(br|div|h1|h2|h3|h4|h5|h6|p|ol|ul)$/i;
            b = a(Ha).append(a("<p/>").html(b));
            for (c(b); d(b););
            for (; e(b););
            b.children().filter(function () {
                return !n.test(this.nodeName) && "" == a.trim(a(this).text())
            }).remove();
            return b.html()
        }

        function c(b) {
            function c(a, b, c) {
                a = a || "";
                var e = b ? 0 : a.search(d);
                if (e == a.length - 1) return {
                    prefix: a
                    , Wa: ""
                    , P: ""
                };
                for (var k = [], f = e, g = e, n = a.length - 1; g <= n; g++) {
                    var l = a[g]
                        , m = c && g == n;
                    if (m = m || d.test(l) && (" " == a[g + 1] || g == n)) g != n && g++, k.push('<span class="'), k.push(b && 0 == f ? "text-paragraph text-run" : Gc), k.push('">'), k.push(a.substring(f, g + 1)), k.push("</span>"), f = g + 1
                }
                return {
                    prefix: 0 < e ? a.substring(0, e) : ""
                    , Wa: k.join("")
                    , P: a.substring(f)
                }
            }
            b = a(Ha).html(b);
            b.find("p").each(function () {
                var b = a(this)
                    , c = a('<span class="text-paragraph text-run"/>');
                c.append(b.contents()).attr("style", b.attr("style"));
                b.replaceWith(c)
            });
            a(Ia).replaceAll(b.find("br"));
            b.html(b.html().replace(/(\r\n|\n|\r)/gm, Ia));
            b.find(ya).each(function () {
                for (; a(this).contents().first().is(".text-break");) a(this).contents().first().insertBefore(a(this));
                for (; a(this).contents().last().is(".text-break");) a(this).contents().last().insertAfter(a(this))
            });
            var d = /[\.!?]/;
            b.find(ya).each(function () {
                var b = a(this)
                    , d = this.childNodes;
                1 == d.length && /^span$/i.test(d[0].nodeName) && (a(d[0]).attr("style"), d = d[0].childNodes);
                if (d.length) {
                    if (3 == d[0].nodeType) {
                        var e = c(d[0].nodeValue, !0, 1 == d.length);
                        1 < d.length ? e.Wa.length && (a(e.Wa).insertBefore(b), b.removeClass("text-paragraph").addClass(Gc), d[0].nodeValue = e.P) : b.replaceWith(e.Wa)
                    }
                    1 < d.length && 3 == d[d.length - 1].nodeType && (e = c(d[d.length - 1].nodeValue, !1, !0), e.Wa.length && (a(e.Wa).insertAfter(b), d[d.length - 1].nodeValue = e.prefix))
                }
                else b.addClass(Gc)
            });
            return b.html()
        }
        var d = [/<applet[^>]*?>(?:.|\n|\r)*?<\/applet>/ig, /<embed[^>]*?>(?:.|\n|\r)*?<\/embed>/ig, /<head[^>]*?>(?:.|\n|\r)*?<\/head>/ig, /<iframe[^>]*?>(?:.|\n|\r)*?<\/iframe>/ig, /<img[^>]*?.*?\/?>/ig, /<noembed[^>]*?>(?:.|\n|\r)*?<\/noembed>/ig, /<noframes[^>]*?>(?:.|\n|\r)*?<\/noframes>/ig, /<noscript[^>]*?>(?:.|\n|\r)*?<\/noscript>/ig, /<object[^>]*?>(?:.|\n|\r)*?<\/object>/ig
, /<script[^>]*?>(?:.|\n|\r)*?<\/script>/ig, /<style[^>]*?>(?:.|\n|\r)*?<\/style>/ig, /<table[^>]*?>(?:.|\n|\r)*?<\/table>/ig];
        a.simpleHtml = function (e, f) {
            var g;
            g = e || "";
            for (var l = 0; e = d[l]; l++) g = g.replace(e, "");
            e = g;
            e = b(e);
            g = /^((?:[\s\n\r]|(?:<br\/?>))+)/i;
            l = /((?:[\s\n\r]|(?:<br\/?>))+)$/i;
            e = (e || "").replace(/((?:[\s\n\r]*<br\/?>[\s\n\r]*){2,})/gim, "<br/>");
            e = e.replace(g, "");
            e = e.replace(l, "");
            e = a(Ha).html(e);
            var m = e.children().first()
                , n = e.children().last();
            m.length && m.html(m.html().replace(g, ""));
            n.length && n.html(n.html().replace(l, ""));
            e = a.trim(e.html());
            f && (e = c(e));
            return e
        }
    })(jQuery);
    (function (a) {
        function b(a, b, c) {
            for (var d = b.list(), e = 0, f; f = d[e]; e++) {
                var g = f.attr("node");
                if (g)
                    if (k) {
                        var t = ["translate3d(", f.x, "px,", f.y, "px, 0)"].join("");
                        f = 0 != f.a ? " rotateZ(" + f.a + sc : "";
                        t += f;
                        g.css({
                            transform: t
                            , "-webkit-transform": t
                        })
                    }
                    else p ? (t = ["translate(", f.x, "px,", f.y, "px)"].join(""), f = 0 != f.a ? " rotate(" + f.a + sc : "", t += f, g.css({
                        transform: t
                        , "-moz-transform": t
                        , "-ms-transform": t
                        , "-o-transform": t
                    })) : g.css({
                        left: f.x
                        , top: f.y
                    })
            }
            a && a.data && a.data.ha && a.data.ha(b, c)
        }

        function c(a, b, c, e) {
            this.ma = {};
            this.rb = [];
            this.fa = a;
            this.h = b;
            this.qd = void 0 !== c ? c : !0;
            this.Gf = 0;
            this.gc = new d(this, e || 30);
            this.zd = [new l(this), new m(this)]
        }

        function d(b, c) {
            this.ef = b;
            this.Cf = c || 30;
            this.Ed = Math.floor(1E3 / this.Cf);
            this.Ya = a.proxy(this.zg, this);
            this.jb = !1
        }

        function e() {
            this.h = this.fa = this.a = this.y = this.x = this.pa = this.G = this.V = 0;
            this.D = new g;
            this.nb = !1;
            this.attributes = {};
            this.C = {}
        }

        function f(a, b) {
            this.x = a;
            this.y = b
        }

        function g(a, b) {
            this.Ia = this.angle = this.y = this.x = 0;
            this.Kb(a, b)
        }

        function l(a) {
            this.canvas = a;
            this.active = !0
        }

        function m(a) {
            this.canvas = a;
            this.active = !0
        }
        var n = 0
            , p = !(a.browser.msie && 9 > parseInt(a.browser.version, 10))
            , k = "webkit" in a.browser;
        a.fn.U = function (b) {
            if (u[b]) return u[b].apply(this, Array.prototype.slice.call(arguments, 1));
            if ("object" !== typeof b && b) a.error("Method " + b + " does not exist on jQuery.spritle");
            else return u.init.apply(this, arguments)
        };
        var u = {
            init: function (d) {
                var e = a.extend({
                    fps: 30
                    , update: void 0
                }, d);
                return this.each(function () {
                    var d = a(this)
                        , k = d.data(Bc);
                    k || (k = {
                        id: "spritle_" + n++
                        , canvas: new c(d.width(), d.height(), !0, e.fps)
                        , Da: d
                        , Lg: e
                    }, d.data(Bc, k), a(window).bind("resize." + k.id, function () {
                        var a = k.Da;
                        k.canvas.size(a.width(), a.height())
                    }), /absolute|fixed|relative/.test(d.css(mc)) || d.css(mc, tc), a(k.canvas).bind("update", {
                        ha: e.update
                    }, b), e.collision && a(k.canvas).bind("collision", function (a, b, c) {
                        e.collision(k.canvas, b, c)
                    }), e.exceeds && a(k.canvas).bind("exceeds", function (a, b) {
                        e.exceeds(k.canvas, b)
                    }), e.start && a(k.canvas).bind(Cc, function (a, b) {
                        e.start(b)
                    }), e.stop && a(k.canvas).bind("stop", function (a, b) {
                        e.stop(b)
                    }))
                })
            }
            , destroy: function () {
                return this.each(function () {
                    var b = a(this).data(Bc);
                    b && (a(b.canvas).unbind(), b.canvas.dispose(), a(window).unbind("." + b.id), a(this).removeData(Bc))
                })
            }
            , add: function (c, d) {
                var k = this.data(Bc);
                if (k) {
                    d = d || {};
                    c = a(c);
                    c.appendTo(k.Da);
                    var f = c.position()
                        , g = new e;
                    g.size(d.w || c.width(), d.h || c.height());
                    g.position(d.x || f.left, d.y || f.top);
                    (d.xV || d.yV) && g.Na(d.xV || 0, d.yV || 0);
                    g.attr("node", c);
                    c.attr("data-spritle", g.attr("id"));
                    k.canvas.add(g);
                    c.css({
                        position: v
                        , left: 0
                        , top: 0
                        , width: g.fa
                        , height: g.h
                    });
                    b(null, k.canvas, 0);
                    return g
                }
            }
            , remove: function (b) {
                var c = this.data(Bc);
                c && (b = c.canvas.ma[a(b).attr("data-spritle")]) && (b.attr("node").remove(), c.canvas.remove(b));
                return this
            }
            , canvas: function () {
                if (this.data(Bc)) return this.data(Bc).canvas
            }
            , start: function () {
                return this.each(function () {
                    var a = self.data(Bc);
                    a && a.canvas.start()
                })
            }
            , stop: function () {
                return this.each(function () {
                    var a = self.data(Bc);
                    a && a.canvas.stop()
                })
            }
        };
        c.prototype.add = function (b) {
            b.attr("id", this.Gf++);
            this.ma[b.attr("id")] = b;
            this.rb = a.map(this.ma, Uc());
            this.qd && this.rb.length && this.start();
            return this
        };
        c.prototype.remove = function (b) {
            delete this.ma[b.attr("id")];
            b.dispose();
            this.rb = a.map(this.ma, Uc());
            this.qd && !this.rb.length && this.stop();
            return this
        };
        c.prototype.list = J("rb");
        c.prototype.extensions = J("zd");
        c.prototype.size = function (a, b) {
            this.fa = a;
            this.h = b;
            return this
        };
        c.prototype.dispose = function () {
            this.stop();
            for (var a in this.ma) this.ma[a].dispose()
        };
        c.prototype.update = function (b) {
            for (var c in this.ma) this.ma[c].reset().update(b);
            c = 0;
            for (var d; d = this.zd[c]; c++) d.update(b);
            a(this).triggerHandler("update", [this, b]);
            return this
        };
        c.prototype.start = function () {
            var b = !this.gc.jb;
            this.gc.start();
            b && a(this).triggerHandler(Cc, [this]);
            return this
        };
        c.prototype.stop = function () {
            this.gc.stop();
            a(this).triggerHandler("stop", [this]);
            return this
        };
        d.prototype.start = function () {
            if (!this.jb) return this.jb = !0, this.Id = (new Date).getTime(), this.nd = setTimeout(this.Ya, this.Ed), this
        };
        d.prototype.stop = function () {
            this.jb = !1;
            clearTimeout(this.nd);
            return this
        };
        d.prototype.zg = function () {
            var a = (new Date).getTime()
                , b = a - (this.Id || 0);
            this.Id = a;
            this.ef.update(b);
            a = (new Date).getTime() - a;
            this.jb && (this.nd = setTimeout(this.Ya, Math.max(this.Ed - a), 8))
        };
        e.prototype.attr = function (a, b) {
            return "undefined" !== typeof b ? (this.attributes[a] = b, this) : this.C[a] || this.attributes[a]
        };
        e.prototype.cache = function (a, b) {
            return "undefined" !== typeof b ? (this.C[a] = b, this) : this.C[a]
        };
        e.prototype.size = function (a, b) {
            this.fa = a;
            this.h = b;
            this.bb = Math.sqrt(Math.pow(this.fa / 2, 2) + Math.pow(this.h / 2, 2));
            return this
        };
        e.prototype.reset = function () {
            this.nb = !1;
            this.C = {};
            return this
        };
        e.prototype.dispose = function () {
            this.attributes = {};
            this.C = {}
        };
        e.prototype.position = function (a, b) {
            if (void 0 === a && void 0 === b) return {
                x: this.V
                , y: this.G
            };
            this.V = a;
            this.G = b;
            a = Math.round(this.V);
            b = Math.round(this.G);
            this.nb = this.nb || this.x != a || this.y != b;
            this.x = a;
            this.y = b;
            return this
        };
        e.prototype.Ca = function () {
            var a = this.cache(Va);
            void 0 === a && (a = new f(this.x + this.fa / 2, this.y + this.h / 2), this.cache(Va, a));
            return a
        };
        e.prototype.Na = function (a, b) {
            this.D = g.Df(a / 1E3, b / 1E3)
        };
        e.prototype.speed = function (a) {
            if (void 0 === a) return 1E3 * this.D.Ia;
            this.D.Lc(a / 1E3, this.D.angle);
            return this
        };
        e.prototype.ud = function () {
            var a = this.cache("corners");
            if (a) return a;
            var b = this.fa / 2
                , c = this.h / 2;
            if (0 == this.a) a = this.Ca(), a = [new g(a.x - b, a.y - c), new g(a.x - b, a.y + c), new g(a.x + b, a.y + c), new g(a.x + b, a.y - c)];
            else
                for (var a = [], d = Math.sqrt(Math.pow(b, 2) + Math.pow(c, 2)), e = Math.atan2(this.h, this.fa), e = [Math.PI - e, e, -e, Math.PI + e], k = 0; 4 > k; k++) a.push(new g(d * Math.cos(this.a + e[k]) + this.x + b, d * Math.sin(this.a + e[k]) + this.y + c));
            this.cache("corners", a);
            return a
        };
        e.prototype.move = function (a, b) {
            this.position(this.V + a, this.G + b);
            return this
        };
        e.prototype.angle = function (a, b) {
            this.nb = this.nb || this.pa != a;
            var c = this.pa - a;
            this.a = this.pa = a % (2 * Math.PI);
            !0 !== b && this.D.Lc(this.D.Ia, this.D.angle - c);
            return this
        };
        e.prototype.rotate = function (a) {
            return this.angle(this.pa + a)
        };
        e.prototype.cf = function (a, b) {
            a instanceof f && (b = a.y, a = a.x);
            var c = this.Ca();
            return -(this.pa - Math.atan2(b - c.y, a - c.x))
        };
        e.prototype.Wb = function (a, b, c, d) {
            a = this.cf(a, b);
            void 0 !== c && (a = (a + c) % (2 * Math.PI));
            void 0 !== d && (a > Math.PI ? a -= 2 * Math.PI : a < -Math.PI && (a = 2 * Math.PI + a), a = Math.max(Math.min(a, d), -d), .01 > Math.abs(a) && (a = 0));
            this.rotate(a)
        };
        e.prototype.update = function (a) {
            this.move(this.D.x * a, this.D.y * a);
            return this
        };
        g.prototype.Kb = function (a, b) {
            void 0 !== a && void 0 !== b && (this.x = a, this.y = b, this.Ia = Math.sqrt(Math.pow(this.x, 2) + Math.pow(this.y, 2)), this.angle = Math.atan2(this.y, this.x));
            return this
        };
        g.prototype.Lc = function (a, b) {
            void 0 !== a && void 0 !== b && (this.angle = b, this.Ia = a, this.x = Math.cos(this.angle) * this.Ia, this.y = Math.sin(this.angle) * this.Ia);
            return this
        };
        g.prototype.clone = function () {
            return new g(this.x, this.y)
        };
        g.prototype.wf = function (a) {
            return this.x * a.x + this.y * a.y
        };
        g.prototype.ce = function (a) {
            return this.Kb(this.x - a.x, this.y - a.y)
        };
        g.prototype.Sd = function () {
            return this.Kb(-this.y, this.x)
        };
        g.prototype.scale = function (a) {
            a /= this.Ia;
            this.Kb(this.x * a, this.y * a);
            return this
        };
        g.prototype.normalize = function () {
            return this.scale(1)
        };
        g.Df = function (a, b) {
            return new g(a, b)
        };
        g.Gg = function (a, b) {
            return (new g).Lc(a, b)
        };
        l.prototype.update = function () {
            if (this.active)
                for (var b = this.canvas.list(), c = 0, d; d = b[c]; c++)
                    for (var e = c + 1, k; k = b[e]; e++) {
                        var f = this.mf(d, k);
                        d.cache($a, f || d.cache($a));
                        k.cache($a, f || k.cache($a));
                        f && a(this.canvas).trigger("collision", [d, k])
                    }
        };
        l.prototype.mf = function (a, b) {
            return 0 == a.a && 0 == b.a ? this.Cg(a, b) : this.df(a, b) ? !1 !== this.vg(a, b) : !1
        };
        l.prototype.Cg = function (a, b) {
            return a.y <= b.y + b.h && a.x + a.fa >= b.x && a.y + a.h >= b.y && a.x <= b.x + b.fa
        };
        l.prototype.df = function (a, b) {
            var c = a.Ca()
                , d = b.Ca();
            a = a.bb + b.bb;
            return Math.pow(d.x - c.x, 2) + Math.pow(d.y - c.y, 2) < a * a
        };
        l.prototype.vg = function (a, b) {
            a = a.ud();
            b = b.ud();
            for (var c = [], d = 0; 4 > d; d++) {
                var e = a[d].clone().ce(a[(d + 1) % 4])
                    , k = b[d].clone().ce(b[(d + 1) % 4]);
                c.push(e.Sd().normalize());
                c.push(k.Sd().normalize())
            }
            for (var f, g, d = 0; e = c[d]; d++) {
                var k = this.Yd(e, a)
                    , n = this.Yd(e, b);
                if (k.min > n.max || n.min > k.max) return !1;
                k = Math.min(k.max, n.max) - Math.max(k.min, n.min);
                if (void 0 === f || k < f) f = k, g = e
            }
            return {
                axis: g
                , Ig: f
            }
        };
        l.prototype.Yd = function (a, b) {
            for (var c, d, e = 0, k; k = b[e]; e++) k = a.wf(k), void 0 === c ? c = d = k : k < c ? c = k : k > d && (d = k);
            return {
                min: c
                , max: d
            }
        };
        m.prototype.update = function () {
            if (this.active)
                for (var b = this.canvas.h, c = this.canvas.fa, d = this.canvas.list(), e = 0, k; k = d[e]; e++) {
                    var f = k.Ca()
                        , f = 0 > f.x + k.bb || f.x - k.bb > c || 0 > f.y + k.bb || f.y - k.bb > b;
                    k.cache(yb, f);
                    f && a(this.canvas).trigger("exceeds", [self])
                }
        }
    })(jQuery);
    String.prototype.Ff || (String.prototype.Ff = function () {
        for (var a = 0, b = 0; b < this.length; ++b) a = 31 * a + this.charCodeAt(b), a %= 4294967296;
        return a
    });
    $.support.html5tags = $.browser.Sf ? 9 <= parseInt($.browser.version, 10) : $.browser.Rf ? 1.9 <= $.browser.version : !0;
    var ed = $.support
        , fd = document.getElementsByTagName("script")[0]
        , gd = fd.style.color
        , hd = !1;
    if (gd == vc) hd = !0;
    else {
        try {
            fd.style.color = vc
        }
        catch (a) {}
        hd = fd.style.color != gd;
        fd.style.color = gd
    }
    ed.rgba = hd;
    $.support.touch = "ontouchstart" in document.documentElement;
    (function (a) {
        function b(b) {
            return new RegExp(0 <= a.inArray(b.toLowerCase(), l) ? f.source.replace("<(\\w+)", "<(" + b + ")") : e.source.replace("<(\\w+)", "<(" + b + ")"), "ig")
        }

        function c(b, c, d) {
            c = (c || "").toLowerCase();
            for (var e in b)
                if (e.toLowerCase() == c) {
                    if ("undefined" === typeof d) return !0;
                    if (typeof d === G) return b[e] == d;
                    if (d instanceof RegExp) return d.test(b[e]);
                    if (a.isFunction(d)) return d(b[e])
                }
            return !1
        }

        function d(a) {
            this.full = a;
            this.attributes = {};
            a && d.parse(a, this)
        }
        var e = /<(\w+)[^>]*?(?:(?:>((?:.|\n|\r)*?)<\/\1>)|(?:\/>))/ig
            , f = /<(\w+)[^>]*?(?:.*?)\/?>/ig
            , g = /([\w-_]+)(?:\s*=\s*(?:(?:"((?:\\.|[^"])*)")|(?:'((?:\\.|[^'])*)')|([^>\s]+)))?/g
            , l = ["area", "base", xb, "br", "col", "hr", Wb, "input", "link", "meta", "param", "command", "keygen", "source"]
            , m = {
                tag: ""
                , attr: ""
                , attrTest: void 0
                , replace: void 0
                , recurse: !0
            };
        a.tags = function (f, g) {
            var k = []
                , l = a.extend({}, m, g);
            if (!f) return void 0 !== l.replace ? "" : k;
            l.tag = l.tag.toLowerCase();
            g = l.tag ? b(l.tag) : e.global ? new RegExp(e) : e;
            f = f.replace(g, function (b) {
                var e = d.parse(b)
                    , f = !0;
                if (e.value && l.recurse) {
                    var g = a.tags(e.value, l);
                    l.replace ? e.value = g : g && g.length && a.merge(k, g)
                }
                if (f = (f = f && (!l.tag || l.tag == e.name)) && (!l.attr || c(e.attributes, l.attr, l.attrTest)))
                    if (k.push(e), "undefined" !== typeof l.replace) return a.isFunction(l.replace) ? l.replace(e) : l.replace;
                return b
            });
            return "undefined" !== typeof l.replace ? f : k
        };
        d.parse = function (a, c) {
            var e = c || new d;
            e.full = a;
            (c = b(/<(\w+)/.exec(a)[1]).exec(a)) && c.length && (e.full = a, e.name = c[1].toLowerCase(), e.value = c[2], e.attributes = {}, (a = /<\w+([^>]*)?/.exec(a)) && (a[1] || "").replace(g.global ? new RegExp(g) : g, function (a, b, c, d, k) {
                e.attributes[b] = c || d || k || ""
            }));
            return e
        };
        d.prototype.encode = function () {
            var b = [];
            b.push("<" + this.name);
            for (var c in this.attributes) {
                var d = this.attributes[c];
                b.push(" ");
                b.push(c);
                null !== d && (b.push('="'), b.push(void 0 !== d ? (new String(d)).replace(/\"/g, "&#034;") : ""), b.push('"'))
            }!this.value && this.full.match(/\/>$/) ? b.push(this.full.match(/\s?\/>$/)) : 0 <= a.inArray(this.name.toLowerCase(), l) && this.full.match(/\/?>/) ? b.push(this.full.match(/\s?\/?>$/)) : (b.push(">"), b.push(this.value), b.push("</" + this.name + ">"));
            return b.join("")
        };
        d.prototype.attr = function (a, b) {
            return "undefined" !== typeof b ? (this.attributes[a] = b, this) : this.attributes[a]
        }
    })(jQuery);
    (function (a) {
        a.throttle = function (a, c) {
            function b() {
                var a = l >= m ? l : l + 1;
                l = new Date - f > 50 * (Math.pow(2, a + 1) - 1) ? Math.max(0, l - 1) : a;
                g = 50 * (Math.pow(2, l) - 1);
                f = new Date
            }
            var e = null
                , f = new Date
                , g = 0
                , l = 0
                , m = Math.floor(Math.log((c || 3E4) / 50) / Math.LN2);
            return function () {
                var c = new Date - f;
                clearTimeout(e);
                if (c >= g) b(), a.apply(this, arguments);
                else {
                    var d = this
                        , k = arguments;
                    e = setTimeout(function () {
                        b();
                        a.apply(d, k)
                    }, g - c + 1)
                }
            }
        }
    })(jQuery);
    (function (a, b) {
        var c = [/<head[^>]*?>(?:.|\n|\r)*?<\/head>/ig, /<style[^>]*?>(?:.|\n|\r)*?<\/style>/ig, /<script[^>]*?>(?:.|\n|\r)*?<\/script>/ig, /<object[^>]*?>(?:.|\n|\r)*?<\/object>/ig, /<embed[^>]*?>(?:.|\n|\r)*?<\/embed>/ig, /<applet[^>]*?>(?:.|\n|\r)*?<\/applet>/ig, /<noframes[^>]*?>(?:.|\n|\r)*?<\/noframes>/ig, /<noscript[^>]*?>(?:.|\n|\r)*?<\/noscript>/ig, /<noembed[^>]*?>(?:.|\n|\r)*?<\/noembed>/ig, /<img[^>]*?.*?\/?>/ig];
        a.toText = function (d, e) {
            d = d || "";
            for (var f = 0, g; g = c[f]; f++) d = d.replace(g, "");
            d = a("<div>" + d.replace(/\n/g, " ") + Fa);
            d.find("div,h1,h2,h3,h4,h5,h6,p").append("\n\n");
            d.find("br").replaceWith("\n\n");
            e !== b && d.find(e).remove();
            e = d.text().replace(/(\n|\r){2}(\s|\n|\r)+/g, "\n\n");
            e = e.replace(/[ \t]+/g, " ");
            return a.trim(e.replace(/ \n/g, "\n"))
        }
    })(jQuery);
    (function (a, b) {
        var c = a.browser.webkit && "-webkit-transform" || a.browser.Sf && "-ms-transform" || a.browser.Rf && "-moz-transform" || a.browser.opera && "-o-transform" || "transform"
            , d = /([,])+/;
        a.fn.transform = function (e, f) {
            var g;
            this.each(function () {
                var l = a.style(this, c)
                    , m = new RegExp(e + "\\(\\s*([-\\w\\d\\.,\\s]+)\\s*\\)")
                    , n = (l || "").match(m);
                if (f !== b) {
                    var p = d.test(f) ? "" : 0 == e.indexOf("rotate") ? "deg" : 0 == e.indexOf("scale") ? "" : "px"
                        , p = null == f || "" === f ? "" : [e, "(", f, p, ")"].join("")
                        , l = n ? l.replace(m, p) : l + " " + p;
                    a.style(this, c, a.trim(l))
                }
                else g = n ? n[1] : ""
            });
            return f !== b ? this : g
        }
    })(jQuery);
    (function (a, b) {
        function c(f, g) {
            if (g === b) return g;
            var l = e.exec(f)
                , m = d.exec(f);
            return l ? (g = l[1] ? c(l[1], g) : g, g = l[2] ? c(l[2], g) : g, g = l[3] ? c(l[3], g) : g) : m ? (f = a.map((m[2] || "").split(","), function (b) {
                return b && a.trim(b)
            }), (m = m[1] ? g[m[1]] : g) && a.isFunction(m) ? m.apply(g, f.length ? f : b) : b) : g[f]
        }
        var d = /^(.*)\(([^\(\)]*)\)$/
            , e = /^(.*)\[([^\]]+)\](.*)$/;
        a.valueOrDefault = function (a, d, e) {
            e = e || window;
            for (var f = a.split(".");
                (a = f.shift()) && e;) e = c(a, e);
            return f.length || e === b ? d : e
        }
    })(jQuery);
    (function (a) {
        function b(b) {
            b = b.replace(/'|"/g, ",").split(",");
            return a.grep(b, Uc())
        }

        function c() {
            var b = [];
            a.each(f, function (a, c) {
                e[c] || (b.push(c.replace(/\s/g, "+")), e[c] = !0)
            });
            var c = b.join("|");
            c && a("head").append(['<link href="https://fonts.googleapis.com/css?family=', c, '" rel="stylesheet" type="text/css">'].join(""));
            f = []
        }
        var d = "Allerta;Allerta Stencil;Arimo;Arvo;Bentham;Calibri;Calligraffitti;Cambria;Cantarell;Cardo;Cherry Cream Soda;Chewy;Coming Soon;Consolas;Copse;Corsiva;Cousine;Covered By Your Grace;Crafty Girls;Crimson Text;Crushed;Cuprum;Droid Sans;Droid Sans Mono;Droid Serif;Ek Mukta;Fontdiner Swanky;GFS Didot;GFS Neohellenic;Geo;Gruppo;Hanuman;Homemade Apple;IM Fell DW Pica;IM Fell DW Pica SC;IM Fell Double Pica;IM Fell Double Pica SC;IM Fell English;IM Fell English SC;IM Fell French Canon;IM Fell French Canon SC;IM Fell Great Primer;IM Fell Great Primer SC;Inconsolata;Irish Growler;Josefin Sans;Josefin Slab;Just Another Hand;Kenia;Kranky;Lobster;Luckiest Guy;Merriweather;Molengo;Mountains of Christmas;Neucha;Neuton;Nobile;OFL Sorts Mill Goudy TT;Old Standard TT;Open Sans;PT Sans;PT Sans Caption;PT Sans Narrow;Permanent Marker;Philosopher;Puritan;Reenie Beanie;Roboto;Rock Salt;Schoolbell;Slackey;Sunshiney;Syncopate;Tinos;UnifrakturMaguntia;Unkempt;Vollkorn;Walter Turncoat;Yanone Kaffeesatz".split(";")
            , e = {}
            , f = [];
        a.qe = function (g) {
            g = a.isArray(g) ? g : [g];
            a.each(g, function (g, m) {
                g = b(m);
                a.merge(f, a.grep(g, function (b) {
                    return !e[b] && 0 <= a.inArray(b, d)
                }));
                setTimeout(c, 0)
            })
        }
    })(jQuery);
    var N = window.blogger = window.blogger || {};
    window.console || (window.console = {
        log: I()
    });
    Object.keys = Object.keys || function () {
        var a = Object.prototype.hasOwnProperty
            , b = !{
                toString: null
            }.propertyIsEnumerable("toString")
            , c = "toString toLocaleString valueOf hasOwnProperty isPrototypeOf propertyIsEnumerable constructor".split(" ")
            , d = c.length;
        return function (e) {
            if ("object" != typeof e && typeof e != Hb || null === e) throw new TypeError("Object.keys called on a non-object");
            var f = []
                , g;
            for (g in e) a.call(e, g) && f.push(g);
            if (b)
                for (g = 0; g < d; g++) a.call(e, c[g]) && f.push(c[g]);
            return f
        }
    }();

    function O() {}
    O.prototype.init = function (a, b) {
        this.value = a;
        this.start = b;
        return this
    };
    O.prototype.invalid = function (a) {
        a && (this.ld = a);
        return this.ld || !1
    };
    O.prototype.apply = I();
    var id = /([^\s=]+)\s*=\s*(\'[^<\']*\'|\"[^\"]*\"|[\S]*)/g
        , jd = /([^\s=]+)\s*=\s*(\'[^\']*\'|\"[^\"]*\")/g;
    O.prototype.extractAttributes = function (a, b) {
        b = kd(!1 === b ? id : jd);
        for (var c, d = -1; c = b.exec(a);)
            if (d++, d += c[0].length, "" !== c[1] && "" !== c[2]) {
                var e = c[2].replace(/^(\'|")(.*)(\1)$/, "$2");
                this.attr(c[1], e)
            }
            else this.invalid("Invalid attribute");
        d != a.length && this.invalid("Invalid attribute string")
    };
    O.prototype.attr = function (a, b) {
        "undefined" !== typeof b && (this.attributes = this.attributes || {}, this.attributes[a] = typeof b === G ? b : "" + b);
        if (this.attributes) return this.attributes[a]
    };
    O.prototype.resolveAttr = function (a, b) {
        if (a = this.attr(a)) {
            if (ld.exec(a)) return b ? md((new nd).init(a).apply(b)) : void 0;
            if (od.exec(a)) return b ? md((new qd).init(a).apply(b)) : void 0;
            a = a.replace(kd(ld), function (a) {
                a = b ? (new nd).init(a).apply(b) : void 0;
                return void 0 !== a ? a : ""
            });
            a = a.replace(kd(od), function (a) {
                a = b ? (new qd).init(a).apply(b) : void 0;
                return void 0 !== a ? a : ""
            })
        }
        return md(a)
    };

    function md(a) {
        return a === Jc ? !0 : a === Ab ? !1 : a
    }

    function kd(a) {
        if (a.global) return new RegExp(a);
        a = a.source;
        a = a.replace(/^\^/, "").replace(/\$$/, "");
        return new RegExp(a, "g")
    };

    function rd() {
        this.fc = []
    }
    $.extend(rd.prototype, O.prototype);
    var sd = /^{block:([^\s}]+)(?:\s(.+))?}$/
        , td = /^(\w+)s$/
        , ud = /^(?:Has|If(?!Not))(.+)$/
        , vd = /^(?:IfNot)(.+)$/;
    rd.prototype.init = function (a, b) {
        this.value = a;
        this.start = b;
        (this.tag = (a = sd.exec(this.value)) && a[1]) ? a[2] && this.extractAttributes(a[2]): this.invalid(Ja);
        return this
    };
    rd.prototype.children = J("fc");
    rd.prototype.add = function (a) {
        this.fc.push(a)
    };
    rd.prototype.apply = function (a) {
        var b = wd(this, a)
            , c = [];
        if (b)
            if (b instanceof Array)
                for (var d = 0, e = b.length; d < e; d++) {
                    var f = new P(b[d], a)
                        , g = f
                        , l = e
                        , m = d + 1;
                    g.scope("Odd", 1 == m % 2);
                    g.scope("Even", 0 == m % 2);
                    g.scope("Number", m);
                    g.scope("First", 1 == m);
                    g.scope("Last", m == l);
                    l = (l = this.tag.match(td)) && l[1] || this.tag;
                    g.scope(l + m, !0);
                    g.scope(l, g.context);
                    xd(this, f);
                    c = c.concat(yd(this, f))
                }
            else this.attributes && (a = new P(a.context, a), xd(this, a)), c = c.concat(yd(this, a));
        return c.join("")
    };

    function xd(a, b) {
        if (a.attributes)
            for (var c in a.attributes) b.scope(c, a.resolveAttr(c, b))
    }

    function wd(a, b) {
        a = a.tag;
        var c = b.data(a);
        return "undefined" !== typeof c ? c : vd.test(a) ? (a = vd.exec(a)[1], c = b.data(a), "undefined" === typeof c || 0 == c) : ud.test(a) ? (a = ud.exec(a)[1], c = b.data(a), "undefined" === typeof c ? !1 : 0 != c) : b.data(a)
    }

    function yd(a, b) {
        for (var c = [], d = 0, e; e = a.fc[d]; d++) c.push(e.apply(b));
        return c
    };

    function zd() {}
    $.extend(zd.prototype, O.prototype);
    var Ad = /^{\/(?:block|template):([^\s}]+)}$/;
    zd.prototype.init = function (a, b) {
        this.value = a;
        this.start = b;
        (this.tag = (a = Ad.exec(this.value)) && a[1]) || this.invalid(Ja);
        return this
    };

    function Bd(a) {
        this.ld = a
    }
    $.extend(Bd.prototype, O.prototype);

    function Cd() {}
    $.extend(Cd.prototype, O.prototype);
    Cd.prototype.apply = J("value");

    function qd() {}
    $.extend(qd.prototype, O.prototype);
    var od = /^{(\w+):(.*)}$/;
    qd.prototype.init = function (a, b) {
        this.value = a;
        this.start = b;
        this.scope = (a = od.exec(this.value)) && a[1];
        this.term = a && a[2];
        this.scope ? this.term ? (a = this.term.search(jd), 0 < a && (this.extractAttributes(this.term.substr(a), !0), this.term = this.term.substring(0, a).replace(/\s+$/, ""))) : this.invalid("No term specified") : this.invalid("No scope specified");
        this.name = this.scope + ":" + this.term;
        return this
    };
    qd.prototype.apply = function (a) {
        if (!this.invalid()) {
            var b = this.scope + ":" + this.term
                , c = Q().template(b);
            if (c && !a.scope(Na + b)) {
                var d = new P(a.context, a);
                d.scope(Na + b, !0);
                for (var e in this.attributes) d.scope(e, this.resolveAttr(e, a));
                return c.apply(d)
            }
            return (c = Q().generator(b)) ? c.call(this, a) : a.data(b)
        }
    };

    function Dd(a) {
        this.name = a;
        this.kc = []
    }
    $.extend(Dd.prototype, O.prototype);
    var Ed = /^{template:([^\s}]+)(?:\s(.+))?}$/;
    K = Dd.prototype;
    K.init = function (a, b) {
        this.value = a;
        this.start = b;
        (this.name = this.tag = (a = Ed.exec(this.value)) && a[1]) ? a[2] && this.extractAttributes(a[2]): this.invalid("Missing or invalid name");
        return this
    };
    K.children = J("kc");
    K.add = function (a) {
        this.kc.push(a)
    };
    K.raw = function (a) {
        "undefined" !== typeof a && (this.pg = a);
        return this.pg
    };
    K.find = function (a, b, c) {
        function d(c) {
            if (c && c.children)
                for (var f = 0, l; l = c.children()[f]; f++) l.tag == a && (l instanceof rd || b) && e.push({
                    parent: c
                    , child: l
                }), d(l)
        }
        var e = [];
        d(c || this);
        return e
    };
    K.apply = function (a) {
        a = a instanceof P ? a : new P(a);
        for (var b = [], c = 0, d; d = this.kc[c]; c++) b.push(d.apply(a));
        return Fd(this, b.join(""))
    };

    function Fd(a, b, c) {
        if ((c = c || a.attr("whitespace")) && "preserve" != c) {
            if ("discard" == c) return b.replace(/\s/g, "");
            if ("trim" == c) return b.replace(/^\s+/, "").replace(/\s+$/, "");
            if ("collapse" == c || "preserve-breaks" == c || c == Za) {
                b = b.replace(/\n([\t ]+)/g, "\n");
                "collapse" == c && (b = b.replace(/\n/g, " "));
                b = b.replace(/\t/g, " ");
                b = b.replace(/ ( )+/g, " ");
                b = b.split("\n");
                for (var d = 0, e = b.length; d < e; d++) b[d] = b[d].replace(/^\s+/, "").replace(/\s+$/, "");
                b = b.join("\n");
                return c == Za ? Fd(a, b.replace(/\n[\s]+/g, "\n"), "trim") : b
            }
        }
        else return b
    };

    function nd() {}
    $.extend(nd.prototype, O.prototype);
    var ld = /^{([^\s:}]+)(?:\s(.+))?}$/
        , Gd = [{
            prefix: "JSPlaintext"
            , transform: function (a) {
                a = $("<div>" + a + Fa).text();
                return ["'", a ? a.replace(/\'/g, "&#039;") : "", "'"].join("")
            }
        }, {
            prefix: "Plaintext"
            , transform: function (a) {
                return $("<div>" + a + Fa).text()
            }
        }, {
            prefix: "URLEncoded"
            , transform: function (a) {
                return encodeURIComponent(a)
            }
        }, {
            prefix: "JS"
            , transform: function (a) {
                return ["'", a ? a.replace(/\'/g, "&#039;") : "", "'"].join("")
            }
        }, {
            prefix: "HTMLEscaped"
            , transform: function (a) {
                return (a || "").replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/'/g, "&#39;").replace(/</g, "&lt;").replace(/>/g, "&gt;")
            }
        }];
    nd.prototype.init = function (a, b) {
        this.value = a;
        this.start = b;
        (this.variable = this.tag = (a = ld.exec(this.value)) && a[1]) ? a[2] && this.extractAttributes(a[2]): this.invalid(Ja);
        if (this.tag)
            for (a = 0; b = Gd[a]; a++)
                if (0 === this.tag.indexOf(b.prefix)) {
                    this.transform = b.prefix;
                    this.variable = this.tag.substr(b.prefix.length);
                    break
                }
        this.name = this.variable;
        return this
    };
    nd.prototype.apply = function (a) {
        if (this.variable) {
            var b = Q().template(this.tag);
            if (b && !a.scope(Na + this.tag)) {
                var c = new P(a.context, a);
                c.scope(Na + this.tag, !0);
                for (var d in this.attributes) c.scope(d, this.resolveAttr(d, a));
                return b.apply(c)
            }
            c = (b = Q().generator(this.variable)) ? b.apply(this, [a]) : a.data(this.variable);
            b || void 0 !== c || "Value" != this.variable || (c = a.context);
            a: if (a = c, this.transform && a)
                for (b = 0; c = Gd[b]; b++)
                    if (c.prefix === this.transform) {
                        a = c.transform(a);
                        break a
                    }
            return a
        }
    };

    function Hd(a) {
        this.source = typeof a === G ? a : "";
        this.length = this.source.length;
        this.column = this.line = this.la = 0
    }
    K = Hd.prototype;
    K.hasNext = function () {
        return this.la < this.length
    };
    K.next = function () {
        if (this.hasNext()) {
            var a = this.source.charAt(this.la);
            this.la++;
            "\n" == a.charAt(0) ? (this.line++, this.column = 0) : this.column++;
            return a
        }
    };
    K.consume = function (a) {
        if (this.hasNext()) {
            for (var b = [], c = 0; c < a; c++) b.push(this.next());
            return b.join("")
        }
    };
    K.remainder = function () {
        if (this.hasNext()) {
            for (var a = []; this.hasNext();) a.push(this.next());
            return a.join("")
        }
    };
    K.peek = function (a) {
        a = a || this.la;
        if (a < this.length && 0 <= a) return this.source.charAt(a)
    };
    K.match = function (a, b) {
        b = this.source.substr(b || this.la);
        if (typeof a === G) {
            if (b.slice(0, a.length) === a) return a
        }
        else if (a instanceof RegExp && 0 === b.search(a)) return b.match(a)[0]
    };
    K.search = function (a, b) {
        b = this.source.substr(b || this.la);
        if (typeof a === G) return b.indexOf(a);
        if (a instanceof RegExp) return b.search(a)
    };

    function P(a, b) {
        this.ancestor = b;
        this.Pc = {};
        this.context = (b = Q().converter(a)) ? b(a, this) : a
    }
    var Id = /(\w+):([^}]+)/;
    P.prototype.scope = function (a, b) {
        "undefined" !== typeof b && (this.Pc[a] = b);
        return "undefined" !== typeof this.Pc[a] ? this.Pc[a] : this.ancestor && this.ancestor.scope(a)
    };
    P.prototype.value = function (a) {
        var b = this.context && this.context[a];
        "undefined" === typeof b && (b = this.scope(a));
        if ("undefined" === typeof b && 0 <= a.indexOf(".")) {
            a = a.split(".");
            for (var c = a.shift(), d = this.context[c] || this.scope(c);
                (c = a.shift()) && d;)
                if (d = d[c], 0 == a.length) b = d;
                else if (!d) break
        }
        return b
    };
    P.prototype.data = function (a, b) {
        return Id.test(a) ? this.scope(a, b) : this.value(a)
    };

    function Jd() {
        this.C = {};
        this.Mb = [];
        this.Ac = []
    }
    var Kd;
    Jd.prototype.Te = !1;

    function Q() {
        Kd || (Kd = new Jd);
        return Kd
    }
    Jd.prototype.template = function (a, b) {
        "undefined" !== typeof b && (this.C[a] = this.compile(b));
        return this.C[a]
    };
    Jd.prototype.generator = function (a, b) {
        if (b && a) return a = {
            test: a
            , generator: b
        }, this.Ac.push(a), this.Ac.sort(function (a, b) {
            return (typeof b.test === G ? b.test.length : 0) - (typeof a.test === G ? a.test.length : 0)
        }), a.generator;
        if (a && typeof a === G) {
            b = 0;
            for (var c; c = this.Ac[b]; b++)
                if (typeof c.test === G && 0 === a.indexOf(c.test) || c.test instanceof RegExp && c.test.test(a)) return c.generator
        }
    };
    Jd.prototype.converter = function (a, b) {
        for (var c = -1, d = 0, e; e = this.Mb[d]; d++)
            if (a instanceof e.type) {
                c = d;
                break
            }
        a && "undefined" !== typeof b && (0 <= c && this.Mb.splice(c, 1), c = this.Mb.push({
            type: a
            , converter: b
        }) - 1);
        return 0 <= c ? this.Mb[c].converter : void 0
    };
    var Ld = /^{\/?([\w-]+(:[\w\-]+)?(?:(?:[\w:\-\'\"= \.#]*[^\s])|(\s*([^\s=]+)\s*=\s*(\'[^\']*\'|\"[^\"]*\"))*)?)}/
        , Md = /{(\w+:)/;
    Jd.prototype.compile = function (a, b) {
        var c = new Hd(a);
        b = "undefined" !== typeof b ? b : !0;
        var d = new Dd;
        d.raw(a);
        a = d;
        for (var e = [d], f; f = Nd(c);) {
            var g;
            "literal" == f.type ? g = Cd : 0 === f.value.indexOf("{block:") ? g = rd : 0 === f.value.indexOf("{/block:") ? g = zd : 0 === f.value.indexOf("{template:") ? g = Dd : 0 === f.value.indexOf("{/template:") ? g = zd : 0 === f.value.search(Md) ? g = qd : g = nd;
            f = (new g).init(f.value, f.start);
            if (f instanceof rd || f instanceof Dd) {
                if (Jd.Te)
                    for (var l = 0; l < e.length; l++) {
                        if (e[l].tag == f.tag) {
                            f.invalid("Cannot nest blocks with the same tag");
                            break
                        }
                    }
                else if (a.tag == f.tag) {
                    b && Od(this, e.pop(), c);
                    a = e[e.length - 1];
                    continue
                }
                a.add(f);
                a = f;
                e.push(a)
            }
            else f instanceof zd ? a.tag == f.tag ? (b && Od(this, e.pop(), c), a = e[e.length - 1]) : (l = new Bd("Unexpected close block"), l.init(f.value, f.start), a.add(l)) : a.add(f)
        }
        return d
    };

    function Od(a, b, c) {
        b instanceof Dd && b.name && (b.raw(c.source.substring(b.start || 0, c.la)), a.C[b.name] = b)
    }

    function Nd(a) {
        if (a && a.hasNext()) {
            var b = a.la
                , c = a.match(Ld);
            if (c) return {
                type: "token"
                , value: a.consume(c.length)
                , start: b
            };
            for (c = []; a.hasNext();) {
                if ("{" === a.peek())
                    if (a.match(Ld)) break;
                    else if (a.match(Ld, a.la + 1)) {
                    a.next();
                    c.push(a.consume(a.match(Ld).length));
                    continue
                }
                c.push(a.next())
            }
            return {
                type: "literal"
                , value: c.join("")
                , start: b
            }
        }
    };
    window.templates = window.templates || Q;

    function Pd(a) {
        this.source = a || window._WidgetManager && $.valueOrDefault("_WidgetManager._GetAllData()")
    }
    Pd.prototype.get = function () {
        if (!this.source || 0 == Object.keys(this.source).length) return {
            ready: !1
        };
        var a = {
            ready: !0
        };
        if (this.source.blog) {
            var b = this.source.blog
                , c = $.valueOrDefault("skin.vars", void 0, this.source)
                , d = this.source.view
                , e = this.source.widgets
                , f = function (a) {
                    return {
                        "font:Text": a.page_text_font
                        , "color:Text": a.page_text_color
                        , "image:Background": a.body_background
                        , "color:Background": a.body_background_color
                        , "color:Header Background": a.header_background_color
                        , "color:Primary": a.primary_color
                        , "color:Menu Text": a.menu_text_color
                        , "font:Menu": a.menu_font
                        , "font:Link": a.link_font
                        , "color:Link": a.link_color
                        , "color:Link Visited": a.link_visited_color
                        , "color:Link Hover": a.link_hover_color
                        , "font:Blog Title": a.blog_title_font
                        , "color:Blog Title": a.blog_title_color
                        , "font:Blog Description": a.blog_description_font
                        , "color:Blog Description": a.blog_description_color
                        , "font:Post Title": a.post_title_font
                        , "color:Post Title": a.post_title_color
                        , "color:Ribbon": a.ribbon_color
                        , "color:Ribbon Hover": a.ribbon_hover_color
                    }
                };
            if (b) {
                a.blog_locale = b.locale;
                a.blog_title = b.title;
                a.blog_id = b.blogId;
                a.comments_enabled = !0;
                a.comments_mtd = 2;
                a.feeds_api = 2;
                a.analytics_id = b.analyticsAccountNumber;
                a.adsense_client_id = b.adsenseClientId;
                a.adsense_host_id = "pub-1556223355139109";
                a.blog_url = b.homepageUrl ? R.decode(b.homepageUrl).encode(!1, !1) : "/";
                if (b.bloggerUrl) {
                    var g = R.decode(b.bloggerUrl);
                    g.scheme = Sb;
                    a.blogger_base = g.encode()
                }
                a.canonical_url = b.canonicalUrl;
                a["private"] = !!b.isPrivateBlog;
                a.is_mobile = !!b.isMobileRequest;
                a.is_tablet = (!!b.isMobileRequest || $.support.touch) && 768 <= window.screen.width && 1600 >= window.screen.width;
                var l = $.valueOrDefault(Ta);
                a.filter_permalink = $.support.touch && "classic" == l;
                a.plusone_api_src = b.plusOneApiSrc;
                a.pageType = b.pageType;
                a.postId = b.postId;
                a.pageId = b.pageId
            }
            c && (a.template_styles = f(c), a.additional_css = $.valueOrDefault("skin.override", void 0, this.source));
            d && (l = $.valueOrDefault(Ta), a.views = $.map(d, function (a) {
                return a.name && a.url ? {
                    name: a.name
                    , url: a.url
                    , selected: a.name == l
                } : null
            }));
            e && (a.widget_settings = {}, $.each(e, function (b, c) {
                a.widget_settings[b] = c.settings
            }), a.widget_ids = $.map(e, function (c, d) {
                if (/^PageList\d+$/.test(d)) c = $.map(c.links, function (a) {
                    return {
                        title: a.title
                        , url: a.href
                        , page_id: a.id
                    }
                }), a.pages || (a.pages = []), a.pages = $.merge(a.pages, c);
                else if (/^Blog\d+$/.test(d)) {
                    var e = c.previewPost;
                    if (e) {
                        var f = new Qd;
                        f.id = e.id;
                        f.url = e.url;
                        f.title = e.title;
                        f.body = e.body;
                        var g = e.timestampISO8601;
                        f.published = (new Date).fromISOString(g);
                        f.updated = (new Date).fromISOString(g);
                        f.commentCount = e.numComments;
                        f.allowComments = e.allowComments;
                        f.author = new Rd(e.author, e.authorUrl, $.valueOrDefault("authorPhoto.url", void 0, e));
                        f.tags = $.map(e.labels || [], function (a) {
                            return a.name
                        });
                        a.preview = f
                    }(c = c.navMessage) && b && "error_page" == b.pageType && (a.error = c)
                }
                return d
            }));
            if (c = $.valueOrDefault("blog.xpc.rpc")) {
                var m = M();
                c.addChannelToOuter(Ec);
                c.registerService(Ec, "setSkinData", function (a) {
                    m.settings.template_styles = f(a.vars);
                    m.cache(Nb, null);
                    m.notify("templatechange")
                });
                c.connect(Ec)
            }
        }
        else $.extend(a, this.source), a.views = N.views;
        a.blog_url = a.blog_url || R.decode().root();
        a.canonical_url = a.canonical_url || R.decode().encode(!1, !1);
        c = R.decode(a.canonical_url);
        c.scheme = "http";
        a.http_canonical_url = c.encode();
        c = R.decode();
        if (void 0 !== c.param("z") || "z" == c.fragment) a.headless = !0;
        return a
    };
    var Sd = {
        group: function (a, b) {
            var c = Sd.categorizers[b];
            if (!c) return null;
            a = Sd.rf(c, a, b);
            a.sort(function (a, b) {
                return a.unknown || b.unknown ? a.unknown ? 1 : -1 : c.compare(a, b)
            });
            return a
        }
        , rf: function (a, b, c) {
            for (var d = [], e = 0, f; f = b[e]; e++)
                if ("tag" == c)
                    for (var g = a.qf(f), l = 0, m; m = g[l]; l++) {
                        for (var n = !0, p = 0, k; k = d[p]; p++)
                            if (k.caption == m.caption) {
                                n = !1;
                                k.addItem(e, f);
                                break
                            }
                        n && (d.push(m), m.addItem(e, f))
                    }
                else {
                    m = null;
                    for (g = 0; k = d[g]; g++)
                        if (a.Sb(k, f)) {
                            m = k;
                            break
                        }
                    m || (m = a.tc(f), d.push(m));
                    m.addItem(e, f)
                }
            return d
        }
        , categorizers: {
            author: {
                Sb: function (a, b) {
                    return b.author ? a.attr("value") == b.author.name : a.unknown
                }
                , tc: function (a) {
                    return a.author ? new Td(a.author.name, {
                        type: "author"
                        , value: a.author.name
                    }) : new Td(Kc, null, !0)
                }
                , compare: function (a, b) {
                    return a.caption.toLowerCase() > b.caption.toLowerCase() ? 1 : -1
                }
            }
            , tag: {
                Sb: function (a, b) {
                    if (b.tags && 0 < b.tags.length) {
                        for (var c = 0; c < b.tags.length; c++)
                            if (a.attr("value") == b.tags[c]) return !0;
                        return !1
                    }
                    return a.unknown
                }
                , qf: function (a) {
                    var b = [];
                    a.tags && 0 < a.tags.length ? $.each(a.tags, function (a, d) {
                        b.push(new Td(d, {
                            type: "tag"
                            , value: d
                        }))
                    }) : b.push(new Td("No labels", null, !0));
                    return b
                }
                , compare: function (a, b) {
                    return a.caption.toLowerCase() > b.caption.toLowerCase() ? 1 : -1
                }
            }
            , published: {
                Sb: function (a, b) {
                    return b.published ? a.attr("year") == b.published.getFullYear() && a.attr("month") == b.published.getMonth() : a.unknown
                }
                , tc: function (a) {
                    return a.published ? new Td("January February March April May June July August September October November December".split(" ")[a.published.getMonth()] + " " + a.published.getFullYear(), {
                        type: rc
                        , year: a.published.getFullYear()
                        , month: a.published.getMonth()
                    }) : new Td(Kc, null, !0)
                }
                , compare: function (a, b) {
                    return a.attr("year") == b.attr("year") ? a.attr("month") < b.attr("month") ? 1 : -1 : a.attr("year") < b.attr("year") ? 1 : -1
                }
            }
            , service: {
                Sb: function (a, b) {
                    return (b = b instanceof Qd && "Blogger" || b instanceof Ud && "Google+" || "") ? a.attr("value") == b : a.unknown
                }
                , tc: function (a) {
                    return (a = a instanceof Qd && "Blogger" || a instanceof Ud && "Google+" || "") ? new Td(a, {
                        type: "service"
                        , value: a
                    }) : new Td(Kc, null, !0)
                }
                , compare: function (a, b) {
                    return a.caption.toLowerCase() > b.caption.toLowerCase() ? 1 : -1
                }
            }
        }
    };

    function Td(a, b, c) {
        this.caption = a;
        this.Ie = [];
        this.pd = $.extend({}, b);
        this.unknown = c ? !0 : !1
    }
    Td.prototype = {
        attr: function (a, b) {
            null != b && (this.pd[a] = b);
            return this.pd[a]
        }
        , addItem: function (a, b) {
            this.items().push({
                index: a
                , item: b
            })
        }
        , values: function () {
            return $.map(this.items(), function (a) {
                return a.item
            })
        }
        , indexes: function () {
            return $.map(this.items(), function (a) {
                return a.index
            })
        }
        , items: J("Ie")
        , count: function () {
            return this.items().length
        }
    };

    function Vd() {
        this.Oc = {}
    }
    var Wd;
    Vd.prototype.create = function (a) {
        var b = a.match(/([^\d]*)(\d*)$/);
        a = b[1];
        b = "" !== b[2] ? b[2] : void 0;
        return this.Oc[a] && new this.Oc[a](b)
    };
    Vd.prototype.register = function (a, b) {
        a && b && (this.Oc[a] = b)
    };

    function Xd(a) {
        this.settings = $.extend({}, Yd, a);
        this.B = [];
        this.vb = []
    }
    var Yd = {
        width: 500
        , rowHeight: 200
        , margin: 2
    };
    K = Xd.prototype;
    K.photos = J("B");
    K.rows = J("vb");
    K.positions = function () {
        for (var a = this.settings.margin, b = [], c = 0, d = 0, e; e = this.vb[d]; d++) {
            for (var c = c + a, f = 0, g = 0, l; l = e[g]; g++) f += a, b.push({
                top: c
                , left: f
                , width: l.width
                , height: l.height
                , photo: l
            }), f += l.width + a;
            c += e[0].height + a
        }
        return b
    };
    K.add = function (a) {
        return this.insertAt(a)
    };
    K.insertAt = function (a, b) {
        void 0 === b || b == this.B.length ? $.isArray(a) ? this.B = this.B.concat(a) : this.B.push(a) : $.isArray(a) ? this.B = this.B.slice(0, b).concat(a, this.B.slice(b)) : this.B.splice(b, 0, a);
        return this
    };
    K.insertBefore = function (a, b) {
        b = b instanceof Zd ? $d(this, b) : b;
        return this.insertAt(a, 0 <= b ? b : void 0)
    };
    K.insertAfter = function (a, b) {
        b = b instanceof Zd ? $d(this, b) : b;
        return this.insertAt(a, 0 <= b ? b + 1 : void 0)
    };

    function $d(a, b) {
        for (var c = 0, d; d = a.B[c]; c++)
            if (d.url == b.url) return c;
        return -1
    }
    K.layout = function (a) {
        a = this.settings.width = a || this.settings.width;
        this.vb = [];
        for (var b = this.B; b.length;) {
            var c, d = b
                , e = a;
            c = [];
            for (var f = this.settings.margin, g = this.settings.rowHeight, l = 0, m = 0, n;
                (n = d[m]) && l < e; m++) c.push(n.clone()), l += n.size().toHeight(g).width + 2 * f;
            l > e && (m = 2 * f * c.length, g = Math.floor((e - m) / (l - m) * g));
            for (m = d = 0; n = c[m]; m++) d += n.size(n.size().toHeight(g)).width + 2 * f;
            if (l >= e)
                for (e -= d; 0 != e;)
                    for (f = 0 < e ? 1 : -1, m = c.length - 1; 0 <= m && 0 != e; m--) c[m].width += f, e -= f;
            if (c.length) this.vb.push(c), b = b.slice(c.length);
            else break
        }
        return this.vb
    };
    var R = {
        jd: /^(([^:\/?#]+):)?(\/\/([^\/?#]*))?([^?#]*)(\?([^#]*))?(#(.*))?/
        , Se: /^(?:(([^:\/?#]+):){1}(\/\/)?)|(\/\/)/
        , vc: function () {
            return document.URL
        }
        , isCrossDomain: function (a) {
            var b = R.decode();
            a = a instanceof S ? a : new S(a);
            return b.authority != a.authority
        }
        , isSamePage: function (a, b) {
            var c = R.decode();
            a = a instanceof S ? a : new S(a);
            return (!!b || c.authority == a.authority) && c.path == a.path
        }
        , decode: function (a) {
            return new S(a || R.vc())
        }
        , authority: function (a, b) {
            var c = a || R.vc();
            a = (a = c.match(/^(https?:\/\/)/)) ? a[0] : "http://";
            c = c.replace(a, "");
            if (c = /([^\/]+)\/?(.*)/.exec(c)) return a + (0 > c[1].indexOf(".") && b ? c[1] + "." + b : c[1]).toLowerCase()
        }
        , rewritePath: function (a) {
            a = a instanceof S ? a : new S(a);
            if (window.history.pushState) try {
                return R.vc() != a.encode() && window.history.pushState(null, "", a.encode()), !0
            }
            catch (b) {}
            a = "#!" + (R.isCrossDomain(a) ? a.encode(!1, !1) : a.path);
            return window.location.hash != a ? (window.location.hash = a, !0) : !1
        }
        , decodePath: function (a) {
            a = R.decode(a);
            if (a.fragment && "!" == a.fragment[0]) {
                var b = new S(a.fragment.substr(1));
                b.authority || (b.scheme = a.scheme, b.authority = a.authority);
                a = b
            }
            return new S(a.encode(!1, !1))
        }
    };

    function S(a) {
        this.url = null !== a ? a instanceof S ? a.encode() : a : void 0;
        this.params = {};
        this.url && ae(this.url, this)
    }

    function ae(a, b) {
        b = b || new S;
        if ((a = R.Se.exec(a) ? R.jd.exec(a) : R.jd.exec("//" + a)) && a.length && (b.scheme = a[2], b.authority = a[4] && a[4].toLowerCase(), b.path = a[5], b.query = a[7], b.params = {}, b.fragment = a[9], b.query)) {
            a = b.query.replace(/&amp;/g, "&").split("&");
            for (var c = 0, d = a.length; c < d; c++)
                if (a[c]) {
                    var e = a[c].split("=");
                    b.params[e[0]] = e[1] || ""
                }
        }
        return b
    }
    S.prototype.encode = function (a, b, c) {
        a = "undefined" !== typeof a ? a : !0;
        b = "undefined" !== typeof b ? b : !0;
        var d;
        if (c) d = $.param(this.params);
        else {
            c = [];
            for (d in this.params) void 0 !== this.params[d] ? c.push(d + "=" + this.params[d]) : c.push(d);
            d = c.join("&")
        }
        return [this.scheme ? this.scheme + ":" : "", this.authority ? "//" + this.authority : "", this.path, a && d ? "?" + d : "", b && this.fragment ? "#" + this.fragment : ""].join("")
    };
    S.prototype.root = function () {
        return [this.scheme ? this.scheme + ":" : "", this.authority ? "//" + this.authority : ""].join("")
    };
    S.prototype.param = function (a, b) {
        return "undefined" !== typeof b ? (this.params[a] = b, this) : this.params[a]
    };
    S.prototype.normalize = function () {
        this.scheme = this.scheme || R.decode().scheme;
        this.path = this.path || "/";
        return this
    };

    function be() {
        this.B = []
    }
    be.prototype.add = function (a) {
        a = $.isArray(a) ? a : [a];
        for (var b = 0, c; c = a[b]; b++) this.B.push(new Zd(c));
        return this
    };
    be.prototype.load = function (a) {
        function b() {
            setTimeout(function () {
                var b = f.photos();
                $(f).triggerHandler("load", [b]);
                a && a(b)
            }, 0)
        }
        for (var c = [], d = 0, e; e = this.B[d]; d++) e.loaded || e.invalid || c.push(e.load());
        var f = this;
        c.length ? $.when.apply(window, c).always(b) : b();
        return this
    };
    be.prototype.photos = function () {
        return $.grep(this.B, function (a) {
            return a.loaded && !a.invalid
        })
    };

    function ce(a) {
        this.settings = $.extend({}, de, a);
        this.B = [];
        this.fd = 0
    }
    var de = {
        thumbnailHeight: 150
    };
    K = ce.prototype;
    K.add = function (a, b) {
        var c = new Zd(T.full(a), {
            width: b && b.width
            , height: b && b.height
        });
        this.B.push(c);
        if (b)
            for (var d in b) d != Tc && d != Ob && c.attr(d, b[d]);
        c.attr("Index", this.B.length - 1);
        c.attr("Number", this.B.length);
        c.attr(Ka, T.canResize(a));
        if (c.attr(Ka)) {
            a = new Zd(T.thumbnail(a, 2 * this.settings.thumbnailHeight, !1));
            c.associate(a, "thumbnail");
            $(this).triggerHandler("add", [c]);
            var e = this;
            a.load(function () {
                e.ready_(c)
            })
        }
        else $(this).triggerHandler("add", [c]), this.ready_(c);
        return c
    };
    K.ready_ = function (a) {
        var b = this;
        setTimeout(function () {
            $(b).triggerHandler("ready", [a]);
            for (var c = b.fd, d; d = b.B[c]; c++)
                if (b.fd = c, d.attr(Ka)) {
                    if (!d.aspect()) break;
                    $(b).triggerHandler("contiguous", [d])
                }
        }, 0)
    };
    K.photos = function (a, b) {
        return $.map(this.B, function (c) {
            var d = !0;
            !0 === a ? d = void 0 !== c.aspect() : void 0 !== a && (d = c.attr(a) == b);
            return d ? c : null
        })
    };
    K.eq = function (a) {
        if (0 <= a && a < this.B.length) return this.B[a]
    };
    K.size = function () {
        return this.B.length
    };

    function Zd(a, b) {
        this.url = a;
        this.attributes = {};
        this.invalid = this.loaded = !1;
        this.width = b && b.width;
        this.height = b && b.height;
        this.W = {}
    }
    K = Zd.prototype;
    K.clone = function () {
        var a = new Zd(this.url);
        a.loaded = this.loaded;
        a.invalid = this.invalid;
        a.width = this.width;
        a.height = this.height;
        a.attributes = $.extend({}, this.attributes);
        a.W = $.map(this.W, function (a) {
            return a.clone()
        });
        for (var b in this.W) a.W[b] = this.W[b].clone();
        return a
    };
    K.aspect = function () {
        if (this.width && this.height) return this.width / this.height;
        if (this.associated(!0).length) return this.associated(!0)[0].aspect()
    };
    K.size = function (a) {
        return void 0 !== a ? (this.width = a.width, this.height = a.height, this) : new ee(this.width || 1, this.height || 1)
    };
    K.associated = function (a) {
        if (!0 === a) {
            a = [];
            for (var b in this.W) return this.W[b].loaded && a.push(this.W[b]), a
        }
        else return this.W[a]
    };
    K.associate = function (a, b) {
        this.W || (this.W = {});
        this.W[b] = a
    };
    K.load = function (a) {
        function b() {
            e.reject();
            $(d).triggerHandler("error", [d]);
            a && a(d)
        }

        function c() {
            e.resolve();
            $(d).triggerHandler("load", [d]);
            a && a(d)
        }
        var d = this
            , e = $.Deferred();
        this.url ? this.loaded ? c() : this.invalid ? b() : $("<img/>").one("load", function (a) {
            d.loaded = !0;
            d.width = a.target.width;
            d.height = a.target.height;
            $(this).unbind();
            c()
        }).one("error", function () {
            d.invalid = !0;
            $(this).unbind();
            b()
        }).attr(D, d.url) : b();
        return e.promise()
    };
    K.attr = function (a, b) {
        return "undefined" !== typeof b ? (this.attributes[a] = b, this) : this.attributes[a]
    };

    function ee(a, b) {
        this.width = a;
        this.height = b
    }
    K = ee.prototype;
    K.aspect = function () {
        return this.width / this.height
    };
    K.scale = function (a) {
        return new ee(Math.round(a * this.width), Math.round(a * this.height))
    };
    K.toWidth = function (a) {
        return new ee(a, Math.round(a / this.width * this.height))
    };
    K.toHeight = function (a) {
        return new ee(Math.round(a / this.height * this.width), a)
    };
    K.fill = function (a, b, c, d) {
        b = b || a;
        var e = Math.max(a / this.width, b / this.height);
        !1 === c && 1 < e && (e = 1);
        c = new ee(Math.round(e * this.width), Math.round(e * this.height));
        if (void 0 !== d) {
            b = (c.height - b) / c.height;
            a = (c.width - a) / c.width;
            if (b > d) return c.scale(1 - b * c.height / c.height + d);
            if (a > d) return c.scale(1 - a * c.width / c.width + d)
        }
        return c
    };
    K.fit = function (a, b, c) {
        a = Math.min(a / this.width, (b || a) / this.height);
        !1 === c && 1 < a && (a = 1);
        return new ee(Math.round(a * this.width), Math.round(a * this.height))
    };
    var fe = /^\/(\d{4})_(\d{2})_(\d{2})_archive\.html$/
        , ge = /^\/(\d{4})(\/\d{2})?\/?$/
        , he = /^([^\/?#]+)\.blogspot\.[^\/?#]+$/i;

    function ie() {
        var a = R.decode(void 0)
            , b = M().settings.pageType
            , c = new je;
        if (a.path && 0 <= a.path.indexOf(Da)) return c.tags = [decodeURIComponent(a.path.substr(a.path.indexOf(Da) + 14))], c;
        if (fe.test(a.path)) return b = fe.exec(a.path), a = parseInt(b[1], 10), b = parseInt(b[2], 10) - 1, c.ra = new Date(a, b, 1), c.qa = new Date(a, b + 1, 0), c;
        if (ge.test(a.path)) return b = ge.exec(a.path), a = parseInt(b[1], 10), b[2] ? (b = parseInt(b[2].substr(1), 10) - 1, c.ra = new Date(a, b, 1), c.qa = new Date(a, b + 1, 0)) : (c.ra = new Date(a, 0, 1), c.qa = new Date(a, 12, 0))
            , c;
        if (M().settings.filter_permalink && "item" == b) return c.Jc = a.path, c;
        if (M().settings.filter_permalink && b == Dc) return c.Gc = a.path, c;
        if (a.path && 0 == a.path.indexOf("/search")) return c.ra = a.params["updated-min"] ? (new Date).fromISOString(decodeURIComponent(a.params["updated-min"])) : void 0, c.qa = a.params["updated-max"] ? (new Date).fromISOString(decodeURIComponent(a.params["updated-max"])) : void 0, a.params.q && (c.query = decodeURIComponent(a.params.q).replace(/(\+)+/g, " ")), c.ra || c.qa || c.query ? c : void 0
    }

    function ke(a) {
        a = typeof a === G ? R.decode(a) : a;
        if (a.authority)
            if (R.isCrossDomain(a.encode())) {
                a = he.exec(a.authority);
                var b = he.exec(R.decode().authority);
                if (b && a && b[1] == a[1]) return !0
            }
            else return !0;
        else return !0;
        return !1
    }

    function le(a) {
        var b = R.decode(M().settings.blog_url);
        b.path = "/search";
        b.params.q = $.trim(a).replace(/(\s)+/g, "+");
        window.location = b.encode()
    };
    var V = {
        context: function () {
            var a = new P(V.pf());
            return V.scopeGlobals(a)
        }
        , translate: function (a) {
            return V.scopeGlobals(new P(a))
        }
        , scopeGlobals: function (a) {
            var b = M().cache(Nb);
            if (!b) {
                var b = {}
                    , c = M().settings
                    , d = c.headless || !1;
                b.Locale = c.blog_locale;
                b.BloggerBase = W().settings.blogger_base;
                b.PlusBase = W().settings.plus_base;
                if (N && N.l10n)
                    for (var e in N.l10n) b["lang:" + e] = N.l10n[e];
                c.analytics_id && !d && (b.AnalyticsID = c.analytics_id);
                c.adsense_client_id && !d && (b.Adsense = !0, (b.AdsenseClient = c.adsense_client_id) && (b.AdsenseHost = c.adsense_host_id));
                d = !!M().settings.comments_enabled;
                b.Comments = d;
                b.Notes = d;
                b.Gadgets = !!c.enableGadgets;
                var f = ""
                    , d = $.map(c.views || [], function (a) {
                        var b = a.name || ""
                            , c = b.charAt(0).toUpperCase() + b.slice(1);
                        f = a.selected ? c : f || c;
                        var d = N.l10n && N.l10n[c] ? N.l10n[c] : c
                            , e = a.url;
                        e && 0 < e.indexOf("?") && (e = e.slice(e.indexOf("?")));
                        return {
                            Name: b
                            , URL: e
                            , Label: c
                            , LocalizedLabel: d
                            , Current: a.selected
                        }
                    });
                d.sort(function (a, b) {
                    return a.Label < b.Label ? -1 : a.Label == b.Label ? 0 : 1
                });
                b.Views = d;
                b.CurrentView = f;
                b["browser:" + $.browser.type] = !0;
                b["browser:" + $.browser.type + $.browser.versionX] = !0;
                b.Mobile = c.is_mobile || $.support.touch;
                b.Tablet = c.is_tablet;
                $.extend(b, V.Nf());
                for (var d = 0, g = !1, l = 0, m; m = W().resources()[l]; l++) m.total && (d += m.total), g = g || m.filter;
                b.PostCount = d;
                g && (b.SearchQuery = g.query, b.SearchPage = !0, b.SearchResultCount = d, b.NoSearchResults = 0 == d);
                d = R.decode(m && m.url).authority || "";
                b.CustomDomain = -1 == d.indexOf(".blogspot.");
                b.BlogURL = c.blog_url || "/";
                b.CanonicalUrl = c.canonical_url;
                M().cache(Nb, b)
            }
            for (e in b) a.scope(e, b[e]);
            return a
        }
        , Nf: function () {
            var a = {};
            $.extend(a, {
                "font:Text": aa
                , "color:Text": "#333"
                , "image:Background": void 0
                , "color:Background": "#eee"
                , "color:Header Background": "#f3f3f3"
                , "image:Header": void 0
                , "color:Primary": "#333"
                , "color:Menu Text": "white"
                , "font:Menu": aa
                , "font:Link": aa
                , "color:Link": "#009eb8"
                , "color:Link Visited": "#009eb8"
                , "color:Link Hover": "#009eb8"
                , "font:Blog Title": aa
                , "color:Blog Title": "#555"
                , "font:Blog Description": aa
                , "color:Blog Description": "#555"
                , "font:Post Title": aa
                , "color:Post Title": "#333"
                , "color:Ribbon": "#666"
                , "color:Ribbon Hover": "#ad3a2b"
                , "color:Bubble": "#666"
            }, M().settings.template_styles);
            M().settings.additional_css && (a["text:Custom CSS"] = M().settings.additional_css);
            var b = /^(bold|normal|italic|\d+%|\d+px|\s)+/i
                , c;
            for (c in a)
                if (0 == c.indexOf("font:")) a[c] = a[c].replace(b, "");
                else if ("image:Background" == c) {
                var d = /.*url\((.*?)\).*/.exec(a[c]);
                d && (a["image:Header"] = a[c] = d[1], a["text:BodyBackgroundCSS"] = a["text:HeaderBackgroundCSS"] = d[0])
            }
            return a
        }
        , pf: function () {
            for (var a = {}, b = W().resources().slice().reverse()
                    , c = 0, d; d = b[c]; c++) $.isFunction(d.data) && $.extend(a, d.data());
            a.Posts = W().items();
            return a
        }
        , Mf: function (a) {
            var b = {}
                , c = W().items()
                , d = $.inArray(a, c)
                , e;
            0 <= d && (e = 0 < d ? c[d - 1] : null, c = d < c.length - 1 ? c[d + 1] : null, b.PreviousPost = e ? e.url : !1, b.NextPost = c ? c.url : W().hasNext());
            b.SameDayDate = e && e.published && e.published.getDate() == a.published.getDate() && e.published.getMonth() == a.published.getMonth() && e.published.getFullYear() == a.published.getFullYear() ? !0 : !1;
            b.NewDayDate = !b.SameDayDate; - 1 != d && (a = d + 1, b.Odd = 1 == a % 2, b.Even = 0 == a % 2, b.Number = a, b["Post" + a] = !0);
            return b
        }
    };
    (function (a) {
        function b(a) {
            var b = "th"
                , c = a % 10;
            1 != Math.floor(a / 10) % 10 && (1 == c ? b = "st" : 2 == c ? b = "nd" : 3 == c && (b = "rd"));
            return b
        }
        var c = "Sunday Monday Tuesday Wednesday Thursday Friday Saturday".split(" ")
            , d = "January February March April May June July August September October November December".split(" ")
            , e = [{
                    test: /^DayOfMonth$/
                    , generator: function (a) {
                        if (a = a.data(r)) return a.getDate()
                    }
                }, {
                    test: /^DayOfMonthWithZero$/
                    , generator: function (a) {
                        if (a = a.data(r)) return 10 > a.getDate() ? "0" + a.getDate() : a.getDate()
                    }
                }, {
                    test: /^DayOfWeek$/
                    , generator: function (a) {
                        if (a = a.data(r)) return c[a.getDay()]
                    }
                }, {
                    test: /^ShortDayOfWeek$/
                    , generator: function (a) {
                        if (a = a.data(r)) return c[a.getDay()].substr(0, 3)
                    }
                }, {
                    test: /^DayOfWeekNumber$/
                    , generator: function (a) {
                        if (a = a.data(r)) return a.getDay() || 7
                    }
                }, {
                    test: /^DayOfMonthSuffix$/
                    , generator: function (a) {
                        if (a = a.data(r)) return b(a.getDate())
                    }
                }, {
                    test: /^DayOfYear$/
                    , generator: function (a) {
                        if (a = a.data(r)) return Math.ceil((a - new Date(a.getFullYear(), 0, 1) + 1) / 864E5)
                    }
                }, {
                    test: /^WeekOfYear$/
                    , generator: function (a) {
                        if (a = a.data(r)) return Math.ceil(Math.ceil((a - new Date(a.getFullYear(), 0, 1) + 1) / 864E5) / 7)
                    }
                }, {
                    test: /^Month$/
                    , generator: function (a) {
                        if (a = a.data(r)) return d[a.getMonth()]
                    }
                }, {
                    test: /^ShortMonth$/
                    , generator: function (a) {
                        if (a = a.data(r)) return d[a.getMonth()].substr(0, 3)
                    }
                }, {
                    test: /^MonthNumber$/
                    , generator: function (a) {
                        if (a = a.data(r)) return a.getMonth() + 1
                    }
                }, {
                    test: /^MonthNumberWithZero$/
                    , generator: function (a) {
                        if (a = a.data(r)) return 9 > a.getMonth() ? "0" + (a.getMonth() + 1) : a.getMonth() + 1
                    }
                }, {
                    test: /^Year$/
                    , generator: function (a) {
                        if (a = a.data(r)) return a.getFullYear()
                    }
                }
                , {
                    test: /^ShortYear$/
                    , generator: function (a) {
                        if (a = a.data(r)) return a.getFullYear().toString().substr(2)
                    }
                }, {
                    test: /^AmPm$/
                    , generator: function (a) {
                        if (a = a.data(r)) return 12 > a.getHours() ? "am" : "pm"
                    }
                }, {
                    test: /^CapitalAmPm$/
                    , generator: function (a) {
                        if (a = a.data(r)) return 12 > a.getHours() ? "AM" : "PM"
                    }
                }, {
                    test: /^12Hour$/
                    , generator: function (a) {
                        if (a = a.data(r)) return 12 < a.getHours() ? a.getHours() - 12 : a.getHours() || "12"
                    }
                }, {
                    test: /^24Hour$/
                    , generator: function (a) {
                        if (a = a.data(r)) return a.getHours()
                    }
                }, {
                    test: /^12HourWithZero$/
                    , generator: function (a) {
                        if (a = a.data(r)) return a = 12 < a.getHours() ? a.getHours() - 12 : a.getHours() || "12", 10 > a ? "0" + a : a
                    }
                }, {
                    test: /^Minutes$/
                    , generator: function (a) {
                        if (a = a.data(r)) return a = a.getMinutes(), 10 > a ? "0" + a : a
                    }
                }, {
                    test: /^Seconds$/
                    , generator: function (a) {
                        if (a = a.data(r)) return a = a.getSeconds(), 10 > a ? "0" + a : a
                    }
                }, {
                    test: /^Beats$/
                    , generator: function (a) {
                        if (a = a.data(r)) return a = a.getMilliseconds(), 10 > a ? "00" + a : 100 > a ? "0" + a : a
                    }
                }, {
                    test: /^Timestamp$/
                    , generator: function (a) {
                        if (a = a.data(r)) return Math.ceil(a.getTime() / 1E3)
                    }
                }, {
                    test: /^FormattedTime$/
                    , generator: function (a) {
                        if (a = a.data(r)) return a.toLocaleTimeString()
                    }
                }, {
                    test: /^TimeAgo$/
                    , generator: function (a) {
                        var c = a.data(r);
                        if (c) {
                            a = [c.getDate(), b(c.getDate()), " ", d[c.getMonth()]].join("");
                            c.getFullYear() < (new Date).getFullYear() && (a += " " + c.getFullYear());
                            var c = ((new Date).getTime() - c.getTime()) / 1E3
                                , e = Math.floor(c / 86400);
                            return isNaN(e) || 0 > e || 31 <= e ? a : 0 == e && (60 > c && "just now" || 120 > c && "1 minute ago" || 3600 > c && Math.floor(c / 60) + " minutes ago" || 7200 > c && "1 hour ago" || 86400 > c && Math.floor(c / 3600) + " hours ago") || 1 == e && "Yesterday" || 7 > e && e + " days ago" || 14 > e && "1 week ago" || 31 > e && Math.ceil(e / 7) + " weeks ago"
                        }
                    }
                }, {
                    test: /^ISO8601$/
                    , generator: function (a) {
                        if (a = a.data(r)) return a.toISOString()
                    }
                }]
            , f = /^((?:Photo|Portrait)URL)(?:-(\d+)(sq)?)?$/
            , g = /^(Video)(?:-(\d+))?$/
            , l = [{
                test: "color:"
                , generator: function (b) {
                    var c = b.data(this.name) || this.term;
                    if (c) {
                        if (!a.color) return c;
                        var c = a.color(c)
                            , d;
                        for (d in this.attributes)
                            if (d in c && a.isFunction(c[d])) c[d](this.resolveAttr(d, b));
                        return a.support.rgba ? 0 == c.a ? Ic : c.rgba() : c.hex()
                    }
                    return Ic
                }
            }, {
                test: "font:"
                , generator: function (b) {
                    b = b.data(this.name) || this.term;
                    b = void 0 !== b ? b : "sans-serif";
                    a.qe && a.qe(b);
                    return b
                }
            }, {
                test: "image:"
                , generator: function (a) {
                    a = a.data(this.name);
                    return void 0 !== a ? a : mb
                }
            }]
            , m = {
                "lang:By PostAuthorName": "By {PostAuthorName}"
                , "lang:By PostAuthorName 2": 'Posted by <a class="url fn" href="{PostAuthorURL}" rel="author" itemprop="author">{PostAuthorName}</a>'
                , "lang:Location GeoLocationName": 'Location: <a class="url fn" href="{GeoLocationURL}" itemprop="contentLocation">{GeoLocationName}</a>'
                , "lang:No results for SearchQuery": "No results for: {HTMLEscapedSearchQuery}"
                , "lang:No results for SearchQuery2": 'No results for <span class="search_query">{HTMLEscapedSearchQuery}</span>'
                , "lang:Show all SearchResultCount": "Show all {SearchResultCount} results"
                , "lang:Posted TimeAgo": "Posted {TimeAgo}"
                , "lang:Posted TimeAgo by PostAuthorName": 'Posted <abbr class="time published" title="{ISO8601}" itemprop="datePublished">{TimeAgo}</abbr> by {PostAuthorName}'
                , "lang:Posted TimeAgo by PostAuthorName 2": 'Posted <abbr class="time published" title="{ISO8601}" itemprop="datePublished">{TimeAgo}</abbr> by <a class="url fn" href="{PostAuthorURL}" rel="author" itemprop="author">{PostAuthorName}</a>'
                , "lang:Posted at FormattedTime": 'Posted at <abbr class="time published" title="{ISO8601}" itemprop="datePublished">{12Hour}:{Minutes} {AmPm}</abbr>'
            }
            , n = 0
            , p;
        for (; p = e[n]; n++) Q().generator(p.test, p.generator);
        Q().generator(f, function (a) {
            var b = f.exec(this.name)
                , c = a.data(b[1]);
            if (c) {
                var d = b[2] || this.resolveAttr("size", a);
                a = "sq" == b[3] || !!this.resolveAttr("square", a);
                if (d && !isNaN(parseInt(d, 10))) return T.thumbnail(c, parseInt(d, 10), a).replace("'", "%27")
            }
            return c ? c : mb
        });
        Q().generator(g, function (b) {
            var c = g.exec(this.name)
                , d = b.data(c[1]);
            if (d && (b = c[2] || this.resolveAttr("size", b)) && !isNaN(parseInt(b, 10))) var e = parseInt(b, 10)
                , f = Math.ceil(e / 16 * 9)
                , d = a.tags(d, {
                    tag: Ub
                    , replace: function (a) {
                        return a.attr(Tc, e).attr(Ob, f).encode()
                    }
                });
            return d
        });
        Q().generator(/^Summary$/, function (b) {
            var c = this.resolveAttr("text", b);
            if (!c) {
                if (b.data("Summary")) return b.data("Summary");
                c = b.data("PlaintextBody")
            }
            b = this.resolveAttr("length", b) || 300;
            return c && c.substring ? (c = a.trim(c.substring(0, b)), b = c.match(/(?:.|\n|\r)*(\.(?=\s|\n|\r)|\.$)/), (b ? M().escapeHTML(b[0]) : M().escapeHTML(c)).replace(/\n/g, "<br/>")) : c
        });
        Q().generator(/^Snippet$/, function (b) {
            var c = this.resolveAttr("text", b);
            if (!c) {
                if (b.data("Snippet")) return M().escapeHTML(b.data("Snippet"));
                c = b.data("PlaintextBody")
            }
            var c = M().escapeHTML(c)
                , d = this.resolveAttr("before", b) || 50
                , e = this.resolveAttr("after", b) || 300
                , f = this.resolveAttr("length", b) || 300
                , g = this.resolveAttr("term", b) || ""
                , k = this.resolveAttr("class", b) || "term";
            if (c) {
                var l;
                if (g && (b = c.toLowerCase().indexOf(g.toLowerCase()), 0 <= b)) {
                    l = c.substr(0, b);
                    var m = c.substr(b, g.length)
                        , n = c.substr(b + g.length, e);
                    l.length > d && (b = l.indexOf(" ", l.length - d), l = "..." + (0 <= b ? l.substr(b + 1) : l.substr(l.length - d)));
                    n.length && (b = n.lastIndexOf(" "), n = (0 <= b ? n.substr(0, b) : n.substr(0, e)) + "...");
                    l = l + m + n;
                    k && (l = l.replace(new RegExp(g, "gim"), function (a) {
                        return '<span class="' + k + '">' + a + "</span>"
                    }))
                }
                l || (l = a.trim(c.substring(0, f)));
                return l
            }
            return c
        });
        Q().generator("lang:", function (a) {
            var b = a.data(this.name);
            return (b = b || m[this.name]) ? b.replace(/{\w+}/g, function (b) {
                return (new nd).init(b).apply(a)
            }) : this.term
        });
        for (n = 0; p = l[n]; n++) Q().generator(p.test, p.generator)
    })(jQuery);
    var T = {
        getImage: function (a, b) {
            if (a) {
                b = $.extend({}, T.defaults, b);
                b.N = b.N || Math.min(b.width, b.height);
                for (var c = a, d = a, e = b.xc, f = 0, g; g = T.services[f]; f++)
                    if (g.match(a)) {
                        b.xc && g.rawUrl ? c = g.rawUrl(a) : g.rewriteUrl && (c = g.rewriteUrl(a, b), g.ga ? e = !0 : d = g.rawUrl ? g.rawUrl(a) : a);
                        break
                    }!e && T.proxy.enabled() && (c = T.proxy.rewriteUrl(d, b));
                return c
            }
        }
        , thumbnail: function (a, b, c) {
            return T.getImage(a, {
                N: b
                , Ob: "undefined" !== typeof c ? c : !0
            })
        }
        , full: function (a) {
            return T.getImage(a, {
                xc: !0
            })
        }
        , canResize: function (a) {
            if (!a) return !1;
            for (var b = 0, c; c = T.services[b]; b++)
                if (c.match(a) && c.ga) return !0;
            return T.proxy.enabled()
        }
        , defaults: {
            Fg: 100
            , Eg: 100
            , N: null
            , xc: !1
            , Ob: !1
        }
        , proxy: {
            enabled: Vc(!1)
            , ga: !0
            , match: Vc(!0)
            , rewriteUrl: function (a, b) {
                return "https://www.blogspot.com/thumb?" + $.param({
                    image: a
                    , size: b.N
                    , crop: b.Ob
                })
            }
            , rawUrl: Uc()
        }
        , services: [{
                ga: !0
                , match: function (a) {
                    var b = a.match(/(?:bp\.blogspot\.com|ggpht|googleusercontent\.com).*(\/s\d+(?:-[cuh]+)?\/)?/);
                    if (0 <= a.indexOf("googleusercontent.com/gadgets")) return !1;
                    if (b = (b = b && !a.match(/(\/(?:[sS]\d+-[cuh]?R[cuh]?|S\d+)\/)/)) && a.match(/\.(jpg|jpeg|gif|png|tif|tiff|bmp|tga)/i)) a = R.decode(a), a.scheme == Sb && a.query && (b = !!a.params.sz);
                    return b
                }
                , rewriteUrl: function (a, b) {
                    var c = /(\/)(s\d+(?:-[dcuh]+)?)(\/)/;
                    b = "s" + b.N + (b.Ob ? "-p" : "");
                    var d = "$1" + b + "$3";
                    if (a.match(c)) return a.replace(c, d);
                    c = a.lastIndexOf("/");
                    return [a.slice(0, c), "/", b, a.slice(c)].join("")
                }
                , rawUrl: function (a) {
                    return this.rewriteUrl(a, {
                        N: 1600
                    })
                }
            }, {
                ga: !0
                , match: function (a) {
                    return /farm[0-9]+\.static(?:\.)?flickr\.com\/[^\/]+\/[^_]+_[^_\.]+(_[mstzb])?\.jpg/.test(a)
                }
                , rewriteUrl: function (a, b) {
                    for (var c = [{
                            P: "_b"
                            , size: 1024
                        }, {
                            P: "_z"
                            , size: 640
                        }, {
                            P: ""
                            , size: 500
                        }, {
                            P: "_m"
                            , size: 240
                        }, {
                            P: "_t"
                            , size: 100
                        }, {
                            P: "_s"
                            , size: 75
                        }], d = c[0].P, e = 0, f; f = c[e]; e++) f.size >= b.N && (d = f.P);
                    return a.replace(/(\/[^\/]+\/[^_]+_[^_\.]+)(_[mstzb])?\.jpg/, "$1") + d + ".jpg"
                }
                , rawUrl: function (a) {
                    return a.replace(/_[mstzb]\.jpg$/, "_b.jpg")
                }
            }, {
                ga: !0
                , match: function (a) {
                    return a.match(/maps\.googleapis\./i)
                }
                , rewriteUrl: function (a, b) {
                    a = R.decode(a);
                    b.N = Math.min(640, b.N);
                    var c = (a.params.size || "").split("x")
                        , d = parseInt(a.params.zoom, 10) || 1
                        , e = parseInt(c[0], 10) || 512
                        , c = parseInt(c[1], 10) || 512
                        , f = 180 < e;
                    b.Ob ? c = e = b.N : (b = b.N / Math.max(e, c), e = Math.floor(e * b), c = Math.floor(c * b));
                    128 > e && f && (b = 128 / e, e = Math.floor(e * b), c = Math.floor(c * b), d--);
                    a.size = e + "x" + c;
                    a.zoom = d;
                    return a.encode()
                }
                , rawUrl: function (a) {
                    return this.rewriteUrl(a, {
                        N: 640
                    })
                }
            }, {
                ga: !1
                , match: function (a) {
                    return a.match(/i[0-9]+\.photobucket.com\/albums\/.*\.jpg$/)
                }
                , rewriteUrl: function (a) {
                    return a.replace(/\/([^\/]+)$/, "/th_$1")
                }
                , rawUrl: function (a) {
                    return a.replace(/\/th_([^\/]+)$/, "$1")
                }
            }
            , {
                ga: !1
                , match: function (a) {
                    return a.match(/i[0-9]+\.tinypic.com\/[^\.]+.jpg$/)
                }
                , rewriteUrl: function (a) {
                    return a.replace(/\/([^.]+).jpg$/, "/$1_th.jpg")
                }
                , rawUrl: function (a) {
                    return a.replace(/_th\.jpg$/, ".jpg")
                }
            }, {
                ga: !1
                , match: function (a) {
                    return a.match(/imbx.us\/[^\.]+.(jpg|png)$/)
                }
                , rewriteUrl: Uc()
                , rawUrl: Uc()
            }, {
                ga: !1
                , match: function (a) {
                    return a.match(/\.ak\.fbcdn\.net\/.*photos.+_[abnqst]\.jpg$/)
                }
                , rewriteUrl: function (a, b) {
                    for (var c = [{
                                P: "a"
                                , size: 180
                            }, {
                                P: "s"
                                , size: 130
                            }, {
                                P: "t"
                                , size: 75
                            }], d = /_[abnqst]\.jpg$/
                            , e = 0; e < c.length; e++)
                        if (e == c.length - 1 || b.N >= c[e].size) return a.replace(d, "_" + c[e].P + ".jpg")
                }
                , rawUrl: function (a) {
                    return a.replace(/_[abnqst]\.jpg$/, "_n.jpg")
                }
            }]
    };

    function Rd(a, b, c) {
        this.name = a;
        this.profileUrl = b;
        this.avatarUrl = c
    };

    function me(a, b) {
        this.url = a;
        this.id = b
    }
    me.prototype.compareTo = function (a) {
        return a && this.id && this.id == a.id ? 0 : a && this.published && a.published ? this.published.getTime() - a.published.getTime() : -1
    };
    me.prototype.attachments = function (a) {
        return (void 0 === a ? this.Qa : $.grep(this.Qa, function (b) {
            return b.type == a
        })) || []
    };
    me.prototype.attach = function (a, b) {
        this.Qa || (this.Qa = []);
        a = a instanceof ne ? a : new ne(a, b);
        this.Qa.push(a);
        return a
    };
    me.prototype.data = function () {
        return $.extend({
            RawValue: this
        }, oe(this), pe(this))
    };

    function oe(a) {
        var b = {};
        b.ID = a.id;
        b.Permalink = a.url;
        b.HttpPermalink = a.Dc;
        b.Date = a.published;
        b.Body = a.content();
        b.SourceTitle = a.sourceTitle;
        b.Text = !0;
        var c = a.attachments(lc).length;
        a = a.attachments(Pc).length;
        b.Photo = 1 == c;
        b.Photoset = 1 < c;
        b.Video = 0 < a;
        if (M().settings.headless) {
            var d = function (a) {
                var b = R.decode(a.attr(D));
                b.authority = "blitz.nocrawl." + b.authority;
                return a.attr(D, b.encode()).encode()
            };
            b.Body = $.tags(b.Body, {
                tag: Pc
                , attr: D
                , replace: d
            });
            b.Body = $.tags(b.Body, {
                tag: Ub
                , attr: D
                , replace: d
            });
            b.Body = $.tags(b.Body, {
                tag: xb
                , attr: D
                , replace: d
            });
            b.Body = $.tags(b.Body, {
                tag: "script"
                , replace: function (a) {
                    return a.attr(D) ? d(a) : ""
                }
            })
        }
        return b
    }

    function pe(a) {
        var b = {};
        b.Photos = $.map(a.attachments(lc), function (b) {
            var c = T.full(b.url);
            return T.canResize(c) ? {
                Caption: b.title || a.title
                , LinkURL: c
                , PhotoURL: b.url
                , "PhotoURL-HighRes": c
                , PhotoWidth: b.width
                , PhotoHeight: b.height
            } : null
        });
        b.Photos && b.Photos.length && $.extend(b, b.Photos[0]);
        b.Videos = $.map(a.attachments(Pc), function (a) {
            var b = qe(a.url);
            return {
                Caption: a.title
                , Video: b.embed
                , VideoURL: b.url
                , PhotoURL: b.thumbnail
            }
        });
        b.Videos && b.Videos.length && (b.Video = b.Videos[0].Video, b.VideoURL = b.Videos[0].VideoURL, b.PhotoURL = b.PhotoURL || b.Videos[0].PhotoURL);
        b.Attachments = $.map(a.attachments(), function (a) {
            var b = {
                Caption: a.title
                , URL: a.url
                , Content: a.content
            };
            a.type == lc ? (b.Photo = !0, b.PhotoURL = a.url, b["PhotoURL-HighRes"] = T.full(a.url), b.PhotoWidth = a.width, b.PhotoHeight = a.height) : a.type == Pc ? (a = qe(a.url), b.Video = a.embed, b.PhotoURL = a.thumbnail) : "article" == a.type && (b.Article = !0);
            return b
        });
        return b
    }

    function qe(a) {
        var b, c, d = /(?:(?:vi?)|(?:\.be)|(?:embed))[=\/]([^\?&]+)/i;
        d.test(a) ? (c = d.exec(a), b = ['<iframe width="500" height="281" src="//www.youtube.com/embed/', c[1], '?wmode=opaque" frameborder="0" allowfullscreen></iframe>'].join(""), a = "//www.youtube.com/v/" + c[1], c = ["//img.youtube.com/vi/", c[1], "/0.jpg"].join("")) : /vimeo/.test(a) && (b = ['<iframe width="500" height="281" src="', a, '" frameborder="0" allowfullscreen></iframe>'].join(""));
        return {
            embed: b
            , url: a
            , thumbnail: c
        }
    };

    function re(a, b) {
        this.m = a;
        this.ec = -1;
        this.pageSize = b || 25;
        this.Oa = [];
        this.Pa = [];
        this.ib = !1;
        this.Hb = !0;
        this.Tb = $.throttle(this.Tb);
        this.de = $.proxy(this.se, this);
        this.Uc = $.proxy(this.re, this)
    }
    K = re.prototype;
    K.dispose = function () {
        this.Pa = [];
        this.Oa = [];
        delete this.m;
        delete this.de;
        delete this.Uc;
        $(this).unbind()
    };
    K.items = function () {
        return this.m.items()
    };
    K.resources = function () {
        return [this.m.resource()]
    };
    K.waiting = J("ib");
    K.hasNext = function (a) {
        void 0 !== a && (this.Hb = a);
        return 0 != this.Hb || -1 == this.ec
    };
    K.reset = function () {
        this.ec = -1
    };
    K.next = function (a) {
        var b = ++this.ec;
        b < this.Oa.length ? a && a(this.Oa[b]) : this.Hb ? (this.Pa.push({
            ha: a
            , index: b
        }), this.ib || this.Xd || this.Tb()) : a && a(null)
    };
    K.Tb = function () {
        var a = this.Nb();
        a && (a.dataType = R.isCrossDomain(a.url) ? "jsonp" : Zb, a.success = this.de, a.error = this.Uc, this.bc = [(new Date).getTime().toString(36), (65536 * (1 + Math.random()) | 0).toString(36)].join("-"), W().notify("fetchstart", this.bc), $.ajax(a), this.ib = !0)
    };
    K.se = function (a) {
        W().notify(Bb, this.bc);
        if (a = this.Zb(a)) this.Oa.push(a), $.merge(this.items(), a);
        this.ib = !1;
        se(this)
    };
    K.re = function () {
        W().notify(Bb, this.bc);
        this.ib = !1;
        $(this).trigger("error");
        se(this)
    };

    function se(a) {
        a.Xd = !0;
        var b = a.Pa;
        a.Pa = [];
        for (var c = 0, d; d = b[c]; c++) d.index < a.Oa.length ? d.ha && d.ha(a.Oa[d.index]) : a.Hb ? a.Pa.push(d) : d.ha && d.ha(null);
        0 < a.Pa.length && a.Tb();
        a.Xd = !1;
        delete a.bc
    }
    K.Nb = Vc(null);
    K.Zb = Vc(null);

    function te(a, b, c, d) {
        this.url = a;
        this.filter = b;
        this.id = c;
        this.baseUrl = d || this.url
    }
    te.prototype.data = function () {
        var a = {};
        a.Title = this.title;
        a.Subtitle = a.Description = this.subtitle;
        a.BlogID = this.id;
        M().settings.pages && (a.Pages = $.map(M().settings.pages, function (a) {
            return {
                ID: a.page_id
                , URL: a.url
                , Label: a.title
            }
        }));
        var b = this.baseUrl || this.url || "";
        a.RSS = [b, "/" == b[b.length - 1] ? "" : "/", "feeds/posts/default"].join("");
        return a
    };

    function ue() {}
    ue.prototype.content = function () {
        return $("<div>" + this.body + Fa)
    };

    function ne(a, b) {
        b = b || {};
        this.type = a;
        this.url = b.url;
        this.thumbnail = b.thumbnail;
        this.title = b.title;
        this.content = b.content;
        this.width = b.width;
        this.height = b.height
    };

    function ve(a) {
        this.Ce = a;
        this.Be = []
    }
    ve.prototype.items = J("Be");
    ve.prototype.resource = J("Ce");

    function we() {}
    we.prototype.content = I();
    we.prototype.data = I();
    we.prototype.attachments = I();
    we.prototype.attach = I();

    function xe(a, b, c, d) {
        this.base(a, c);
        this.filter = b;
        this.baseUrl = d || this.url
    }
    $.inherit(xe, me);
    K = xe.prototype;
    K.allowComments = !0;
    K.content = function () {
        !this.Lb && this.body && (this.Lb = $.tags(this.body, {
            tag: Ub
            , attr: D
            , attrTest: /\/www.youtube.com\//
            , replace: ye
        }), this.Lb = $.tags(this.Lb, {
            tag: xb
            , replace: ye
        }));
        return this.Lb
    };

    function ye(a) {
        if (a.name == xb) return a.attr("wmode", "opaque").encode();
        if (a.name == Ub) {
            var b = ae(a.attr(D));
            return "www.youtube.com" == b.authority ? a.attr(D, b.param("wmode", "opaque").encode()).encode() : a.full
        }
        return a.full
    }
    K.text = function () {
        this.fe || (this.fe = $.toText(this.body, "table"));
        return this.fe
    };
    K.summary = function (a) {
        a = a || 300;
        var b = (this.body || "").indexOf(Ga);
        if (0 <= b) return $.toText(this.body.substr(0, b));
        a = $.trim(this.text().substring(0, a));
        return (b = a.match(/(?:.|\n|\r)*(\.(?=\s|\n|\r)|\.$)/)) ? b[0] : a
    };
    K.attachments = function (a) {
        this.Qa || (this.Qa = ze(this) || []);
        return this.base(a)
    };

    function ze(a) {
        var b = []
            , c = /(youtube\.com)|(youtu\.be)\//im
            , d = /(maps\.google\.)/im
            , e = a.title;
        $.merge(b, $.map($.findImages(a.body), function (a) {
            return new ne(lc, {
                url: a
                , title: e
            })
        }));
        $.merge(b, $.map($.tags(a.body, {
            attr: D
            , attrTest: c
        }), function (a) {
            a = qe(a.attr(D));
            return new ne(Pc, {
                url: a.url
                , content: a.embed
                , thumbnail: a.thumbnail
                , title: e
            })
        }));
        $.merge(b, $.map($.tags(a.body, {
            tag: Ub
            , attr: D
            , attrTest: function (a) {
                return !c.test(a)
            }
        }), function (a) {
            var b = new ne("other", {
                url: a.attr(D)
                , content: a.encode()
            });
            if (d.test(a.attr(D))) {
                var c = R.decode(a.attr(D));
                if (c) {
                    var f = R.decode("//maps.googleapis.com/maps/api/staticmap")
                        , n = Math.min(640, parseInt(a.attr(Tc), 10) || 512);
                    a = Math.min(640, parseInt(a.attr(Ob), 10) || 512);
                    f.params.center = c.params.ll;
                    f.params.zoom = c.params.z;
                    f.params.maptype = c.params.u && "satellite" || c.params.w && "hybrid" || c.params.f && "terrain" || c.params.t && "roadmap" || "roadmap";
                    f.params.sensor = !1;
                    f.params.size = n + "x" + a;
                    return [new ne(lc, {
                        url: f.encode()
                        , title: e
                    }), b]
                }
            }
            return b
        }));
        $.merge(b, $.map($.tags(a.body, {
            tag: xb
            , attr: D
            , attrTest: function (a) {
                return !c.test(a)
            }
        }), function (a) {
            return new ne("other", {
                url: a.src
                , content: a.encode()
            })
        }));
        return b
    }
    K.data = function () {
        var a = this.base();
        a.Title = this.title;
        a.PlaintextBody = this.text();
        this.body && 0 <= this.body.indexOf(Ga) && (a.Summary = this.summary());
        this.author && (a.PostAuthorName = this.author.name, a.PostAuthorURL = this.author.profileUrl, a.PostAuthorPortraitURL = this.author.image);
        this.geoLocation && (a.GeoLocationName = this.geoLocation.name, a.GeoLocationLatitude = this.geoLocation.latitude, a.GeoLocationLongitude = this.geoLocation.longitude);
        this.tags && (a.Tags = $.map(this.tags, function (a) {
            return {
                Tag: a
            }
        }), a.TagsAsClasses = $.asClasses(this.tags));
        this.relatedUrl && (a.RelatedURL = this.relatedUrl);
        $.extend(a, V.Mf(this));
        return a
    };

    function Ae(a, b, c) {
        this.name = a;
        this.latitude = b;
        this.longitude = c
    };

    function Be(a, b) {
        this.wa = [];
        this.za = [];
        this.ya = 0;
        Be.prototype.T.apply(this, arguments)
    }
    K = Be.prototype;
    K.T = function (a, b) {
        var c = [];
        "number" === typeof a ? (this.pageSize = a, c = Array.prototype.slice.call(arguments, 1)) : c = Array.prototype.slice.call(arguments);
        var d = this
            , e;
        $.each(c, function (a, b) {
            $.each($.isArray(b) ? b : [b], function (a, b) {
                if (void 0 === e || e > b.pageSize) e = b.pageSize;
                d.add(b)
            })
        });
        this.pageSize = this.pageSize || e || 25
    };
    K.add = function (a) {
        this.wa.push({
            index: 0
            , iterator: a
        });
        this.reset();
        return this
    };
    K.dispose = function () {
        delete this.H;
        $.each(this.wa, function (a, b) {
            b.iterator.dispose()
        })
    };
    K.items = function () {
        return this.za.slice(0, this.ya)
    };
    K.waiting = function () {
        return !!this.H || Ce(this)
    };

    function Ce(a) {
        for (var b = 0, c; c = a.wa[b]; b++)
            if (c.iterator.waiting()) return !0;
        return !1
    }
    K.hasNext = function () {
        return this.za.length >= this.ya + 1 || De(this)
    };

    function De(a) {
        for (var b = 0, c; c = a.wa[b]; b++)
            if (c.iterator.hasNext() || c.iterator.items().length > c.index + 1) return !0;
        return !1
    }
    K.reset = function () {
        this.ya = 0;
        this.za = [];
        $.each(this.wa, function (a, b) {
            b.index = 0;
            b.iterator.reset()
        })
    };
    K.resources = function () {
        for (var a = [], b = 0, c; c = this.wa[b]; b++) $.merge(a, c.iterator.resources());
        return a
    };
    K.next = function (a) {
        this.H = a || this.H || I();
        clearTimeout(this.Ec);
        this.Ec = setTimeout($.proxy(this.dd, this), 0)
    };
    K.dd = function () {
        for (var a = !Ce(this); a;) {
            for (var b = void 0, c = 0, d = 0, e; e = this.wa[d]; d++) {
                var f = e.iterator.items()[e.index];
                if (f)(f = f.published && f.published.getTime && f.published.getTime()) ? c < f && (b = e, c = f) : (b = e, c = Number.MAX_VALUE);
                else if (e.iterator.hasNext()) {
                    a = !1;
                    break
                }
            }
            a && b ? (this.za.push(b.iterator.items()[b.index]), b.index++) : a = !1
        }
        a = De(this);
        (this.za.length >= this.ya + this.pageSize || !a) && this.H ? (a = Math.min(this.ya + this.pageSize, this.za.length), b = this.za.slice(this.ya, a), this.ya = a, a = b.length ? b : null, b = this.H, delete this.H, b && b(a)) : Ce(this) || Ee(this, $.proxy(this.dd, this))
    };

    function Ee(a, b) {
        $.each(a.wa, function (a, d) {
            d.iterator.items().length > d.index + 1 || !d.iterator.hasNext() || setTimeout(function () {
                d.iterator.next(b)
            }, 0)
        })
    };
    var Qd = $.inherit(xe);
    Qd.prototype.data = function () {
        var a = this.base();
        a.Blogger = !0;
        a.PostID = this.id;
        a.BlogID = this.blogId;
        a.Comments = a.Notes = !!M().settings.comments_enabled && !!this.allowComments;
        a.Comments && (a.CommentCount = a.NoteCount = this.commentCount || 0, a.CommentCountWithLabel = a.CommentCount + " comment" + (1 != a.CommentCount ? "s" : ""), a.NoteCountWithLabel = a.CommentCountWithLabel, a.IframeComments = "1" == this.nf, a.CommentModerationMode = this.sc);
        if (this.tags) {
            for (var b, c = 0, d; d = W().resources()[c]; c++) d instanceof te && d.id == this.blogId && (b = d.baseUrl);
            var e = b || ""
                , e = e + ("/" == e[e.length - 1] ? "" : "/")
                , e = e + "search/label/";
            a.Tags = $.map(this.tags, function (a) {
                return {
                    Tag: M().escapeHTML(a)
                    , URLSafeTag: encodeURIComponent(a)
                    , TagURL: e + encodeURIComponent(a)
                }
            })
        }
        return a
    };
    var Fe = $.inherit(Qd);
    Fe.prototype.data = function () {
        var a = this.base();
        a.PostID = null;
        a.PageID = this.id;
        return a
    };

    function je(a) {
        this.tags = a ? a.tags : void 0;
        this.ra = a ? a.ra : void 0;
        this.qa = a ? a.qa : void 0;
        this.query = a ? a.query : void 0;
        this.Jc = a ? a.Jc : void 0;
        this.Gc = a ? a.Gc : void 0;
        this.Vb = a && a.Vb || "recent"
    };

    function Ge(a, b, c) {
        this.R = a;
        this.jc = !1;
        this.Aa = 0;
        this.$a = this.pageSize(b) || 1;
        this.lg = c ? c : 0
    }
    K = Ge.prototype;
    K.pageSize = function (a) {
        "undefined" !== typeof a && (this.$a = parseInt(a, 10), this.$a = 0 < this.$a ? this.$a : 1);
        return this.$a
    };
    K.items = function () {
        return this.R.items().slice(0, this.Aa)
    };
    K.resources = function () {
        return this.R.resources()
    };
    K.dispose = function () {
        this.H = null;
        this.R.dispose()
    };
    K.waiting = function () {
        return this.R.waiting() || !!this.H
    };
    K.hasNext = function () {
        return this.R.items().length >= this.Aa + 1 || this.R.hasNext()
    };
    K.reset = function () {
        this.R.reset();
        this.Aa = 0;
        this.jc = !1
    };
    K.prefetch = function () {
        this.R.next(I())
    };
    K.next = function (a) {
        this.H = a || this.H;
        clearTimeout(this.Ec);
        this.Ec = setTimeout($.proxy(this.We, this), Math.max(0, this.lg))
    };
    K.We = function () {
        if (this.R.items().length >= this.Aa + 1) {
            var a = Math.min(this.Aa + this.$a, this.R.items().length)
                , b = this.R.items().slice(this.Aa, a);
            this.Aa = a;
            a = this.H;
            this.H = null;
            a && a(b)
        }
        else this.R.waiting() || (this.jc ? (b = this.H, this.H = null, b && b(null)) : this.R.next($.proxy(this.Tf, this)))
    };
    K.Tf = function (a) {
        null == a && (this.jc = !0);
        this.next(null)
    };

    function He(a, b, c) {
        this.m = a || new ve;
        $.merge(this.m.items(), c || []);
        this.pageSize = b || 25;
        this.hb = 0;
        this.Cb = !1
    }
    K = He.prototype;
    K.dispose = I();
    K.items = function () {
        return this.m.items().slice(0, this.hb)
    };
    K.resources = function () {
        return this.m.resource() ? [this.m.resource()] : []
    };
    K.waiting = J("Cb");
    K.hasNext = function () {
        return this.m.items().length > this.hb
    };
    K.reset = function () {
        this.hb = 0
    };
    K.next = function (a) {
        this.Cb = !0;
        if (this.hasNext()) {
            var b = this.hb
                , c = Math.min(b + this.pageSize, this.m.items().length)
                , b = this.m.items().slice(b, c);
            Ie(this, a, b);
            this.hb = c
        }
        else Ie(this, a, null)
    };

    function Ie(a, b, c) {
        b ? setTimeout(function () {
            a.Cb = !1;
            b(c)
        }, 0) : a.Cb = !1
    };

    function Je() {
        this.Dg = {
            classic: "L0201"
            , flipcard: "L0205"
            , magazine: "L0202"
            , mosaic: "L0206"
            , sidebar: "L0203"
            , snapshot: "L0207"
            , timeslide: "L0204"
        };
        this.Bf = {
            banner: "S0012"
            , button: "S0001"
            , halfbanner: "S0007"
            , largerectangle: "S0011"
            , leaderboard: "S0013"
            , mediumrectangle: "S0009"
            , skyscraper: "S0003"
            , smallsquare: "S0006"
            , smallrectangle: "S0005"
            , square: "S0008"
            , verticalbanner: "S0002"
            , wideskyscraper: "S0004"
            , largeskyscraper: "S0022"
        }
    }
    Je.prototype.init = function (a, b, c) {
        this.i = a;
        this.A = c;
        if (this.i.settings.headless) return this;
        var d = this;
        $(this.i).bind("updated.adsense", function () {
            var a = $(".adsense");
            a.adsense && a.adsense({
                beforeRender: $.proxy(d.af, d)
            })
        });
        return this
    };
    Je.prototype.dispose = function () {
        $(this.i).unbind(".adsense");
        delete this.i;
        delete this.A
    };
    Je.prototype.af = function (a) {
        var b = this.A && this.A.settings && this.Dg[this.A.settings.name]
            , c = this.Bf[a.format];
        (b = b && c ? b + "+" + c : b || c) && (a.hostchannel = b);
        this.i && this.i.settings && this.i.settings.analytics_id && (a.analytics_id = this.i.settings.analytics_id)
    };

    function Ke() {}
    Ke.prototype.init = function (a, b) {
        this.i = a;
        this.j = b;
        if (this.i.settings.headless) return this;
        a = {
            loadMore: a.localize("Load more")
            , loading: a.localize("Loading")
            , loaded: a.localize("No more comments")
            , addComment: a.localize("Add comment")
            , reply: a.localize("Reply")
            , replies: a.localize("Replies")
            , "delete": a.localize("Delete")
        };
        var c = {
            bloggerBase: this.j.settings.blogger_base
            , maxDepth: this.i.settings.comments_mtd
            , messages: a
        };
        $(this.i).bind(Lc, function () {
            $(".blogger-comments").filter(function () {
                return void 0 === $(this).closest(na).data(ab)
            }).each(function () {
                var a = b.find($(this).attr(jb))
                    , e = $(this).closest(na);
                a && e.length && (a = new N.modules.Comments(a, e, c), $(e).data(ab, a))
            });
            $(".plus-comments").filter(function () {
                return void 0 === $(this).closest(na).data(ab)
            }).each(function () {
                var a = b.find($(this).attr(jb))
                    , e = $(this).closest(na);
                a && e.length && (a = new N.modules.PlusComments(a, e, c), $(e).data(ab, a))
            })
        });
        $(this.i).bind(Lc, function () {
            $(".plus-comment-count").filter(function () {
                return void 0 === $(this).data(Eb)
            }).each(function () {
                var a = b.find($(this).attr(jb));
                $(this).data(Eb, !0);
                new N.modules.PlusCommentCount(this, a)
            })
        });
        return this
    };
    Ke.prototype.dispose = function () {
        $(this.i).unbind(na);
        delete this.i;
        delete this.j
    };

    function Le() {
        this.Ga = []
    }
    K = Le.prototype;
    K.init = function (a) {
        this.i = a;
        if (this.i.settings.headless) return this;
        $(this.i).bind("konami", $.proxy(this.Cd, this));
        1 == (new Date).getMonth() && 14 == (new Date).getDate() && setTimeout($.proxy(this.Cd, this), 103E3);
        $(this.i).bind("cuteoverload", $.proxy(this.sf, this));
        this.i.shortcut("eeyore", function () {
            $(".title").text("eeyore is cute!")
        });
        return this
    };
    K.dispose = function () {
        $(window).unbind(".easter");
        $(this.i).unbind(".easter");
        delete this.i
    };
    K.Cd = function () {
        $(window).bind("mousedown.easter", $.proxy(this.Qf, this));
        $(window).bind("click.easter", $.proxy(this.Ld, this));
        $(this.i).bind("select.easter", $.proxy(this.Ld, this));
        $(this.i).bind("clearselection.easter", $.proxy(this.Lf, this))
    };
    K.Qf = function (a) {
        this.Fa = {
            x: a.pageX
            , y: a.pageY
        }
    };
    K.Ld = function (a) {
        a && a.pageX && a.pageY && (this.Fa = {
            x: a.pageX
            , y: a.pageY
        });
        Me(this, !0)
    };
    K.Lf = function () {
        delete this.Fa;
        Me(this, !1)
    };
    K.sf = function (a, b) {
        b && (this.Fa = {
            x: b.x || 0
            , y: b.y || 0
        }, Me(this, !0))
    };

    function Me(a, b) {
        Ne(a);
        a.Ga = [];
        if (b)
            for (b = 0; 14 > b; b++) Oe(a, "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIj8+CjxzdmcKICAgeG1sbnM6c3ZnPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIKICAgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIgogICB2ZXJzaW9uPSIxLjAiCiAgIHdpZHRoPSIxNiIKICAgaGVpZ2h0PSIxNiIKICAgaWQ9InN2ZzIiPgogIDxkZWZzCiAgICAgaWQ9ImRlZnM0IiAvPgogIDxnCiAgICAgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTEuNTMzNDA5MiwtMS42NDM5MjQpIgogICAgIGlkPSJsYXllcjEiPgogICAgPHBhdGgKICAgICAgIGQ9Ik0gNi4wNTYxODMzLDIuNTg4MDUyMSBDIDMuOTM0NTM2LDIuNTg4MDUyMSAyLjIxMjYyMDUsNC4zMDk4ODIzIDIuMjEyNjIwNSw2LjQzMTQyNCBDIDIuMjEyNjIwNSwxMC43NDczODggNi4wNTYwODU3LDEzLjEyMTAxOCA5LjUzMzQwNzgsMTYuNjk5Nzk2IEMgMTMuMDEwODI2LDEzLjEyMTAxOCAxNi44NTQxOTgsMTAuNzQyNjUgMTYuODU0MTk4LDYuNDMxNDI0IEMgMTYuODU0MTk4LDQuMzA5ODgyMyAxNS4xMzIyODUsMi41ODgwNTIxIDEzLjAxMDYzNCwyLjU4ODA1MjEgQyAxMS40NzE2NzQsMi41ODgwNTIxIDEwLjAzMzg0NSwzLjgzMzI0NSA5LjUzMzQwNzgsNC44MDM5OTYzIEMgOS4wMzc1NTE1LDMuODMzMjQ1IDcuNTk1MTQ2OSwyLjU4ODA1MjEgNi4wNTYxODMzLDIuNTg4MDUyMSB6IgogICAgICAgaWQ9InBhdGg3IgogICAgICAgc3R5bGU9ImZpbGw6I2U2MDAwMDtmaWxsLW9wYWNpdHk6MTtzdHJva2U6I2ZmY2RjZDtzdHJva2Utd2lkdGg6MTtzdHJva2UtbWl0ZXJsaW1pdDo0O3N0cm9rZS1kYXNoYXJyYXk6bm9uZTtzdHJva2Utb3BhY2l0eToxIiAvPgogIDwvZz4KPC9zdmc+Cg==", {
                K: 100 * (Math.random() - .5)
                , I: -100 * Math.random() - 250
                , tb: 8 * (Math.random() - .5)
            });
        else Oe(a, "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIj8+CjxzdmcKICAgeG1sbnM6c3ZnPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIKICAgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIgogICB2ZXJzaW9uPSIxLjAiCiAgIHdpZHRoPSIxNiIKICAgaGVpZ2h0PSIxNiIKICAgaWQ9InN2ZzMzMTEiPgogIDxkZWZzCiAgICAgaWQ9ImRlZnMzMzEzIiAvPgogIDxnCiAgICAgaWQ9ImxheWVyMSI+CiAgICA8cGF0aAogICAgICAgZD0iTSA0LjU0Njg4LDAuOTY4NzUgQyAyLjQyNTIzLDAuOTY4NzUgMC43MDMxMywyLjY5MDk2IDAuNzAzMTMsNC44MTI1IEMgMC43MDMxMyw5LjExNTYyIDQuNTE1MjcsMTEuNTAxNSA3Ljk4NDM4LDE1LjA2MjUgQyA4LjA3NTEyLDE1LjAwNzUgOC4wODMzNSwxNC45OTAyNCA4LjE3MTg4LDE0LjkzNzUgQyA4LjM0ODMyLDE0Ljc1ODIgOC41MjU2OCwxNC41ODAwNCA4LjcwMzEzLDE0LjQwNjI1IEwgNy42NzE4OCwxMi41NjI1IEwgOC40NTMxMywxMS45Njg3NSBMIDcuMjk2ODgsMTAuMTU2MjUgTCA4LjQ4NDM4LDkuMjE4NzUgTCA3LjM1OTM4LDguNDM3NSBMIDguMzkwNjMsNy4yNSBMIDcuMzI4MTMsNiBMIDguMTcxODgsNS4xNTYyNSBMIDcuMjAzMTMsNC41OTM3NSBMIDguMzI4MTMsMy45Mzc1IEwgOC4wMTU2MywzLjE4NzUgQyA3LjUxOTc3LDIuMjE2NzUgNi4wODU4NCwwLjk2ODc1IDQuNTQ2ODgsMC45Njg3NSB6IgogICAgICAgaWQ9InBhdGgzMzAyIgogICAgICAgc3R5bGU9ImZpbGw6I2U2MDAwMDtmaWxsLW9wYWNpdHk6MTtzdHJva2U6I2ZmY2RjZDtzdHJva2Utd2lkdGg6MTtzdHJva2UtbWl0ZXJsaW1pdDo0O3N0cm9rZS1kYXNoYXJyYXk6bm9uZTtzdHJva2Utb3BhY2l0eToxIiAvPgogIDwvZz4KPC9zdmc+Cg==", {
            K: -35
            , I: -300
            , tb: -.9
            , qb: 100
        }), Oe(a, "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIj8+CjxzdmcKICAgeG1sbnM6c3ZnPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIKICAgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIgogICB2ZXJzaW9uPSIxLjAiCiAgIHdpZHRoPSIxNiIKICAgaGVpZ2h0PSIxNiIKICAgaWQ9InN2ZzMzMTEiPgogIDxkZWZzCiAgICAgaWQ9ImRlZnMzMzEzIiAvPgogIDxnCiAgICAgaWQ9ImxheWVyMSI+CiAgICA8cGF0aAogICAgICAgZD0iTSAxMS40NTMxMywwLjkzNzUgQyA5LjkxNDE3LDAuOTM3NSA4LjQ4NDgyLDIuMTg1NSA3Ljk4NDM4LDMuMTU2MjUgTCA4LjI5Njg4LDMuOTA2MjUgTCA3LjE3MTg4LDQuNTYyNSBMIDguMTQwNjMsNS4xMjUgTCA3LjI5Njg4LDUuOTY4NzUgTCA4LjM1OTM4LDcuMjE4NzUgTCA3LjMyODEzLDguNDA2MjUgTCA4LjQ1MzEzLDkuMTg3NSBMIDcuMjY1NjMsMTAuMTI1IEwgOC40MjE4OCwxMS45Mzc1IEwgNy42NDA2MywxMi41MzEyNSBMIDguNjcxODgsMTQuMzc1IEMgMTEuOTQ5NTMsMTEuMTY0OSAxNS4yOTY4OCw4LjgxMDE5IDE1LjI5Njg4LDQuNzgxMjUgQyAxNS4yOTY4OCwyLjY1OTcxIDEzLjU3NDc4LDAuOTM3NSAxMS40NTMxMywwLjkzNzUgeiBNIDguMTQwNjMsMTQuOTA2MjUgQyA4LjA1MjEsMTQuOTU4OTkgOC4wNDM4NywxNC45NzYyNSA3Ljk1MzEzLDE1LjAzMTI1IEMgNy45NjM0OCwxNS4wNDE4OCA3Ljk3NDAzLDE1LjA1MTg1IDcuOTg0MzgsMTUuMDYyNSBDIDguMDM2MTMsMTUuMDA5MjQgOC4wODg3MywxNC45NTg5OCA4LjE0MDYzLDE0LjkwNjI1IHoiCiAgICAgICBpZD0icGF0aDMyOTYiCiAgICAgICBzdHlsZT0iZmlsbDojZTYwMDAwO2ZpbGwtb3BhY2l0eToxO3N0cm9rZTojZmZjZGNkO3N0cm9rZS13aWR0aDoxO3N0cm9rZS1taXRlcmxpbWl0OjQ7c3Ryb2tlLWRhc2hhcnJheTpub25lO3N0cm9rZS1vcGFjaXR5OjEiIC8+CiAgPC9nPgo8L3N2Zz4K", {
            K: 35
            , I: -300
            , tb: .9
            , qb: 100
        });
        a.Ee = setInterval($.proxy(a.Fe, a), 25)
    }

    function Oe(a, b, c) {
        c = c || {};
        a.Fa || (a.Fa = {
            x: $(window).scrollLeft() + $(window).width() / 2
            , y: $(window).scrollTop() + $(window).height() / 2
        });
        var d = new Image;
        b = {
            node: $(d).attr(D, b).addClass("like-image").css(wb, "none")[0]
            , x: c.x || a.Fa.x
            , y: c.y || a.Fa.y
            , qb: c.qb || 16
            , size: c.size || 25 * Math.random() + 25
            , K: c.K || 0
            , I: c.I || 0
            , Xa: c.Xa || 2
            , Of: c.Xa || 2
            , Ma: c.Ma || 0
            , tb: c.tb || 0
        };
        $(b.node).appendTo(x);
        a.Ga.push(b)
    }
    K.Fe = function () {
        this.Ga = $.grep(this.Ga, function (a) {
            if (a.node) {
                a.x += .025 * a.K;
                a.y += .025 * a.I;
                a.Ma += .025 * a.tb;
                a.Xa -= .025;
                a.I += 5;
                if (0 > a.Xa) $(a.node).remove(), delete a.node, a = !1;
                else {
                    var b = a.Xa / a.Of;
                    $(a.node).css({
                        display: ""
                        , height: a.size * (1 - b) + a.qb + "px"
                        , left: a.x + "px"
                        , opacity: b
                        , position: v
                        , top: a.y + "px"
                        , "-webkit-transform": xc + a.Ma + sc
                        , "-moz-transform": xc + a.Ma + sc
                        , "-ms-transform": xc + a.Ma + sc
                        , transform: xc + a.Ma + sc
                        , width: a.size * (1 - b) + a.qb + "px"
                        , "z-index": 10001
                    });
                    a = !0
                }
                return a
            }
            return !1
        });
        0 == this.Ga.length && Ne(this)
    };

    function Ne(a) {
        $.each(a.Ga || [], function (a, c) {
            c.node && $(c.node).remove()
        });
        a.Ga = [];
        clearInterval(a.Ee)
    };

    function Pe() {}
    K = Pe.prototype;
    K.init = function (a, b) {
        this.i = a;
        this.j = b;
        this.dc = Qe(this);
        $(this.i).bind("templates.editor", $.proxy(this.He, this));
        $(this.i).bind("updated.editor", $.proxy(this.Za, this));
        $(window).bind("click.editor", $.proxy(this.da, this));
        $(document).bind("keydown.editor", $.proxy(this.Ge, this));
        Re(this);
        return this
    };
    K.dispose = function () {
        $(window).unbind(".editor");
        $(document).unbind(".editor");
        $(this.i).unbind(".editor");
        delete this.i;
        delete this.j
    };
    K.da = function (a) {
        $(a.target).parents().andSelf().filter(ba).length || this.Ea && this.Ea.remove()
    };
    K.Ge = function (a) {
        27 == a.which && this.Ea && this.Ea.remove()
    };

    function Re(a) {
        $.each(a.dc.templates, function (a, c) {
            c.modified && Q().template(c.name, c.custom)
        })
    }
    K.He = function () {
        this.Ea && this.Ea.remove();
        if (window.TemplateEditor && Q().template(La)) {
            if (!$("head #template-editor-css").length) {
                var a = $(Q().template("TemplateEditorCSS").apply());
                a.attr("id", "template-editor-css").addClass("singleton-element");
                $("head").append(a)
            }
            this.Ea = $(Q().template(La).apply(this.dc));
            $(x).append(this.Ea);
            $("#editor-frame .editor-panel").scrollLimit({
                keydown: !1
            });
            $(ca).click(this.Qd).first().click();
            $("#editor-frame .editor-apply").click($.proxy(this.qg, this));
            $("#editor-frame .editor-list .template").click($.proxy(this.Wf, this));
            $("#editor-frame .editor-list .reset").click($.proxy(this.eg, this));
            $(ba).addClass(Xb);
            setTimeout(function () {
                $(ba).removeClass(Xb)
            }, 0)
        }
    };
    K.Wf = function (a) {
        var b = $(a.target).parents().andSelf().filter(".template");
        b.length && b.attr(kb) && ($(ga).empty(), this.xa = $.grep(this.dc.templates, function (a) {
            return a.name == b.attr(kb)
        })[0]) && (this.ob && this.ob.dispose(), this.ob = new window.TemplateEditor($(ga)), this.ob.setValue(this.xa.modified ? this.xa.custom || "" : this.xa.source), $(ca).click(this.Qd).last().click(), $(ga).scrollLimit({
            keydown: !1
        }), $(this.ob).bind("change", $.proxy(this.fg, this)))
    };
    K.eg = function (a) {
        var b = $(a.target).parents().andSelf().filter(".template");
        if (b.length && b.attr(kb)) return Se(this, b.attr(kb)), a.preventDefault(), !1
    };
    K.fg = function () {
        var a = this.ob.getValue();
        if (this.xa.source != a) {
            var b = this.xa.name
                , c = Te(this, b);
            c && (c.custom = a, c.modified = !0, $(ha + b + '"]').addClass(bb), Q().template(c.name, c.custom), a = Ue(this), a[b] = c.custom, (b = Ve()) && window.JSON && b.setItem(We(this), window.JSON.stringify(a)))
        }
        else Se(this, this.xa.name)
    };
    K.qg = function () {
        this.j.resources().length && this.i.view(this.j.resources()[0].url)
    };
    K.Qd = function () {
        var a = $(this).siblings(".on").index()
            , b = $(this).index();
        $(this).siblings().removeClass("on");
        $(this).addClass("on");
        $(this).parent().parent().removeClass("page" + a);
        $(this).parent().parent().addClass("page" + b);
        $(this).parent().parent().find(".editor-panel").each(function (a, d) {
            a = 100 * (a - b);
            $(d).css(dc, a + "%")
        })
    };

    function Qe(a) {
        var b = {
                templates: []
            }
            , c = Q().C;
        a = Ue(a);
        for (var d in c) b.templates.push({
            name: d
            , source: c[d].raw()
            , custom: a[d]
            , modified: "undefined" !== typeof a[d]
        });
        b.templates.sort(function (a, b) {
            return a.name > b.name ? 1 : -1
        });
        return b
    }

    function Te(a, b) {
        return $.grep(a.dc.templates, function (a) {
            return a.name == b
        })[0]
    }

    function We(a) {
        return ((a.i.A && a.i.A.settings ? a.i.A.settings.name : "") || "") + "__templates"
    }

    function Ue(a) {
        var b = {}
            , c = Ve();
        c && window.JSON && (a = c.getItem(We(a))) && (b = window.JSON.parse(a) || {});
        return b
    }

    function Se(a, b) {
        var c = Te(a, b);
        c && (delete c.custom, c.modified = !1, Q().template(c.name, c.source), $(ha + b + '"]').removeClass(bb), c = Ue(a), delete c[b], (b = Ve()) && window.JSON && b.setItem(We(a), window.JSON.stringify(c)))
    }

    function Ve() {
        try {
            return window.localStorage
        }
        catch (a) {
            return null
        }
    };

    function Xe() {
        this.Zc = !1;
        this.Gd = 0
    }
    Xe.prototype.init = function (a, b) {
        this.i = a;
        this.j = b;
        $(this.i).bind("updated.filter", $.proxy(this.Md, this));
        Ye(this);
        return this
    };
    Xe.prototype.dispose = function () {
        $(this.i).unbind(".filter");
        $(la).unbind(".filter");
        delete this.i;
        delete this.j
    };

    function Ye(a) {
        if (!a.Zc) {
            var b = $("input#search");
            b.length && ($(b).bind("keyup.filter", $.proxy(a.Md, a)), a.Zc = !0)
        }
    }
    Xe.prototype.Md = function (a) {
        "updated" == a.type ? (Ye(this), $(la).val() && this.j.items().length != this.Gd && this.$c()) : (clearTimeout(this.zf), this.zf = setTimeout($.proxy(this.$c, this), 300))
    };
    Xe.prototype.$c = function () {
        var a = $(la).val();
        if (a && 0 < a.length) {
            var b = new RegExp(a, "im")
                , c = $.grep(this.j.items(), function (a) {
                    return b.test(a.title) || a.tags && 0 < $.grep(a.tags, function (a) {
                        return b.test(a)
                    }).length ? !0 : b.test(a.text())
                });
            this.Gd = this.j.items().length;
            this.i.filter(c, a)
        }
        else this.i.clearFilter()
    };

    function Ze() {
        this.Dd = this.ad = this.bd = !1;
        this.La = null
    }
    K = Ze.prototype;
    K.init = function (a, b) {
        this.i = a;
        !this.i.settings.enableGadgets || this.i.settings.is_mobile || this.i.settings.headless || ($(this.i).bind("updated.gadgetdock", $.proxy(this.Za, this)), $(b).bind("loadcomplete.gadgetdock", $.proxy(this.$f, this)));
        return this
    };
    K.dispose = function () {
        $(this.i).unbind(".gadgetdock");
        delete this.i
    };

    function $e() {
        var a = Q().template("GadgetDockResizeDetector");
        return a ? $.trim(a.apply()) : ""
    }
    K.Za = function () {
        this.bd = !0;
        af(this)
    };
    K.$f = function () {
        this.ad = !0;
        af(this)
    };

    function af(a) {
        !a.Dd && a.bd && a.ad && (bf(a), $("html").click($.proxy(a.da, a)), $(window).resize($.proxy(a.cd, a)), setTimeout(function () {
            $(ia).removeClass("gadget-notifying")
        }, 5E3), a.Dd = !0)
    }
    K.da = function (a) {
        var b = $(a.target);
        if (b.closest(".gadget-selected .gadget-container").length) a.stopPropagation();
        else {
            var c = this.La;
            if (null != this.La) {
                var d = this.La
                    , e = $(cf(d));
                e && ($(e).removeClass(Mb), $(ia).removeClass(Lb), $(pa).remove(), (d = this.i.gadgets()[d]) && d.hide());
                this.La = null
            }
            b = b.closest(".gadget-item");
            if (b.length) {
                a.stopPropagation();
                a = b.attr("data-gadget-id");
                if ((!a || a == c) && (c = this.i.gadgets()[a]) && !c.renderInLightbox) return;
                if ((b = this.i.gadgets()[a]) && b.invoke()) {
                    if (b.renderInLightbox) b && (c = this.i.gadgets()[a]) && (b = document.createElement("div"), c.render(b), this.i.notify("lightbox", c.getTitle(), b, $(cf(a))));
                    else {
                        c = cf(a);
                        $(c).addClass(Mb);
                        $(ia).addClass(Lb);
                        b.show();
                        df(a);
                        if (b = $(oa, c)[0]) $(b).append($e()), b = $(pa)[0].contentWindow, $(b).resize($.proxy(this.cd, this));
                        $(c).data("scroll-limit") || ($(c).find(".gadget-container .gadget").scrollLimit(), $(c).data("scroll-limit", !0))
                    }
                    this.La = a
                }
            }
        }
    };
    K.cd = function () {
        this.La && df(this.La)
    };

    function df(a) {
        if ((a = $(cf(a))) && a.length) {
            var b = $(".gadget-title", a)
                , c = $(oa, a);
            if (b && b.length && c && c.length) {
                var d = Kb
                    , e = $(window).height()
                    , c = b.height() + c.height()
                    , b = a.offset().top - $(window).scrollTop() + (a.height() - b.height()) / 2;
                c + 27 > e ? d = Jb : b + c + 27 > e && (d = Ib);
                a.toggleClass(Kb, d == Kb).toggleClass(Ib, d == Ib).toggleClass(Jb, d == Jb)
            }
        }
    }

    function ef(a) {
        var b = Q().template("GadgetDockItem");
        return b ? $.trim(b.apply(new P({
            id: a
        }))) : ""
    }

    function ff(a, b) {
        b.showInGadgetDock && $(ia).append(ef(a))
    }

    function cf(a) {
        return $('[data-gadget-id="' + a + '"]')[0]
    }

    function gf(a) {
        var b = Q().template("GadgetDockItemContents");
        if (b) {
            var c = N.l10n && N.l10n[a.getTitle()] ? N.l10n[a.getTitle()] : a.getTitle();
            return $.trim(b.apply(new P({
                title: c
                , icon: a.getIconUrl()
                , "icon-selected": a.getIconSelectedUrl()
            })))
        }
        return ""
    }

    function hf(a, b) {
        a = cf(a);
        $(a).append(gf(b));
        b.render($(oa, a)[0])
    }

    function jf(a, b, c) {
        c && c.enabled && (ff(b, c), c.isReady ? hf(b, c) : $(c).bind("ready", $.proxy(function (a, b) {
            b.enabled ? hf(a, b) : $(cf(a)).remove()
        }, a, b, c)))
    }

    function bf(a) {
        $(ia).empty();
        for (var b = 0, c; c = a.i.gadgets()[b]; b++) jf(a, b, c)
    };

    function kf() {
        this.Ha = null;
        this.hd = /^([^\/?#]+)\.blogspot\.[^\/?#]+$/i
    }
    K = kf.prototype;
    K.init = function (a, b) {
        this.i = a;
        this.j = b;
        $(this.i).bind("select.history", $.proxy(this.Ke, this));
        $(this.i).bind("clearselection.history", $.proxy(this.Je, this));
        a = $.proxy(this.bg, this);
        $(window).bind("popstate.history", a).bind("hashchange.history", a);
        return this
    };
    K.dispose = function () {
        $(this.i).unbind(".history");
        $(window).unbind(".history");
        delete this.i;
        delete this.j
    };
    K.Ke = function (a, b) {
        if (b && b.url && (this.Ha && (clearTimeout(this.Ha), this.Ha = null), this.Ha = setTimeout($.proxy(this.me, this, b.url), 1E3), b.title)) {
            a = b.title;
            b = R.authority(b.url);
            for (var c = 0, d; d = this.j.resources()[c]; c++)
                if (b == R.authority(d.url)) {
                    a += d.title ? " | " + d.title : "";
                    break
                }
            document.title = a
        }
    };
    K.Je = function () {
        this.me();
        this.j.resources().length && this.j.resources()[0].title && (document.title = this.j.resources()[0].title)
    };

    function lf(a) {
        return a.j.resources().length && a.j.resources()[0].url ? a.j.resources()[0].url : (a = R.decode()) ? (a.path = "", a.encode(!1, !1)) : document.URL
    }
    K.me = function (a) {
        var b = R.decode().authority;
        a = R.decode(a || lf(this));
        a.path = a.path || "/";
        a.scheme = a.scheme || R.decode().scheme;
        a.authority = a.authority || b;
        a.params = $.extend(R.decode().params, a.params);
        var c = this.hd.exec(b)
            , d = this.hd.exec(a.authority);
        c && d && c[1] == d[1] && (a.authority = b);
        this.Rb = !0;
        this.Rb = R.rewritePath(a);
        window.location.hash || (this.Rb = !1)
    };
    K.bg = function () {
        this.Ha && (clearTimeout(this.Ha), this.Ha = null);
        if (this.Rb) this.Rb = !1;
        else {
            var a = R.decodePath()
                , b = R.decode(lf(this));
            a.path = a.path || "/";
            b.path = b.path || "/";
            a.scheme = a.scheme || R.decode().scheme;
            b.scheme = b.scheme || a.scheme;
            b = b instanceof S ? b : new S(b);
            a.encode(!1, !1) == b.encode(!1, !1) ? this.i.clearSelection() : this.i.select(a.encode(!1, !1))
        }
    };

    function mf() {
        this.yb = !1
    }
    K = mf.prototype;
    K.init = function (a, b) {
        this.i = a;
        this.j = b;
        $(this.i).bind("lightbox.lightbox", $.proxy(this.Me, this));
        $(this.i).bind("select.lightbox clearselection.lightbox", $.proxy(this.rc, this));
        $(window).bind("click.lightbox", $.proxy(this.da, this));
        return this
    };
    K.dispose = function () {
        $(x).removeClass(ec);
        $(document).unbind(qa);
        $(window).unbind(qa);
        $(this.i).unbind(qa);
        delete this.i;
        delete this.j
    };
    K.Le = function (a) {
        a = $(a.target).parents().andSelf().filter(sa);
        if (a.length) {
            var b = a.find(ra);
            a.toggleClass(Cc, 0 == b.scrollTop())
        }
    };
    K.da = function (a) {
        this.yb && ($(a.target).parents().andSelf().filter(".item, .lightbox-panel").length || this.rc())
    };
    K.Me = function (a, b, c, d) {
        a = $(ja);
        a.length && (this.yb = !1, clearTimeout(this.ub), $(ja).remove(), a = []);
        a = $($.trim(Q().template("Lightbox").apply(V.translate({
            title: b
        })))).prependTo(x);
        var e = a.find(sa);
        e.find(".lightbox-contentwrap").append(c);
        if ((b = d ? $(d) : null) && b.length) {
            var f = {
                top: e.css(H)
                , right: e.css(wc)
                , bottom: e.css(Ua)
                , left: e.css(dc)
            };
            c = b.offset();
            d = $(window).scrollLeft();
            var g = $(window).scrollTop();
            c && (b = {
                top: c.top - g
                , right: $(window).width() - (c.left - d) - b.outerWidth()
                , bottom: $(window).height() - (c.top - g) - b.outerHeight()
                , left: c.left - d
            }, e.addClass(Xb).css(b), setTimeout(function () {
                e.removeClass(Xb).css(f)
            }, 0))
        }
        this.yb = !0;
        a.addClass("open");
        e.addClass("current").addClass(Cc);
        e.find(ra).focus().bind(yc, $.proxy(this.Le, this));
        e.find(".close").bind(Xa, nf(this.rc));
        e.find(ra).scrollLimit();
        $(x).addClass(ec);
        this.i.updated()
    };

    function nf(a) {
        return function (b) {
            b.stopPropagation();
            b.preventDefault();
            a()
        }
    }
    K.rc = function () {
        $(ja).addClass(Ya);
        $(x).removeClass(ec);
        clearTimeout(this.ub);
        this.yb = !1;
        this.ub = setTimeout(function () {
            $(ja).remove()
        }, 1E3)
    };

    function of() {
        this.ed = !1
    }
    of.prototype.init = function (a) {
        this.i = a;
        $(a).bind("updated.meta", $.proxy(this.Za, this));
        return this
    };
    of.prototype.dispose = function () {
        $(this.i).unbind(".meta");
        delete this.i
    };
    of.prototype.Za = function () {
        this.ed || ($('\x3c!-- Yo Dawg... --\x3e<meta name="meta" content="meta"/>').appendTo("head"), this.i.settings.headless && $(x).addClass("headless"), this.ed = !0)
    };

    function pf() {
        this.yd = {};
        this.T()
    }
    var qf = (new Date).getTime();
    pf.prototype.T = function () {
        var a = window.performance && window.performance.timing;
        a && a.responseStart && a.navigationStart && (this.Tc = a.responseStart);
        this.Tc = this.Tc || qf || (new Date).getTime()
    };
    pf.prototype.tick = function (a, b) {
        this.yd[a] = (new Date).getTime() - (b && this.yd[b] || 0) - this.Tc
    };

    function rf() {
        this.ie = {};
        this.le = {};
        this.xb = [];
        this.zb = [];
        this.gb = /\.*(?:(\/\d{4}\/\d{2}\/[^\/]+)|\/p(\/[^\/]+\.html))$/;
        this.Cc = !1
    }
    var sf = document.URL;
    K = rf.prototype;
    K.init = function (a, b, c) {
        this.i = a;
        this.j = b;
        this.A = c;
        if (this.i.settings.headless) return this;
        a = this.A && this.A.settings && this.A.settings.name;
        this.xf = ["blitz", a ? "blitz_" + a.replace(/\s+/g, "_") : ""].join();
        window._gaq && this.i.settings.analytics_id && window._gaq.push(["_setAccount", this.i.settings.analytics_id]);
        $(this.i).bind("viewitem.metrics", $.proxy(this.gg, this));
        $(this.i).bind("select.metrics", $.proxy(this.Oe, this));
        $(this.i).one("clearselection.metrics", $.proxy(this.Ne, this));
        $(this.j).bind("fetchstart.metrics", {
            start: !0
        }, $.proxy(this.Pd, this));
        $(this.j).bind("fetchend.metrics", {
            end: !0
        }, $.proxy(this.Pd, this));
        this.A && ($(this.A).one("initcomplete.metrics", $.proxy(this.Yf, this)), $(this.A).bind("load.metrics", $.proxy(this.ag, this)), $(this.A).bind("rendercomplete.metrics", $.proxy(this.cg, this)));
        a = $.proxy(this.$d, this);
        $(window).bind("beforeunlaod", a);
        setInterval(a, 15E3);
        return this
    };
    K.dispose = function () {
        this.$d();
        $(this.i).unbind(ta);
        $(this.j).unbind(ta);
        $(this.A).unbind(ta);
        delete this.i;
        delete this.j;
        delete this.A
    };
    K.Pd = function (a, b) {
        var c = tf(this);
        if (b != (c && c.url))
            if (a.data && a.data.start) {
                a = this.gb.test(b) ? Yb : Qa;
                if (a == Qa) {
                    if (this.ab) return;
                    this.ab = b
                }
                X(this, b, a, Oa)
            }
            else(a = X(this, b)) && a.tick("st"), this.gb.test(b) && a && a.tick(Oa)
    };

    function tf(a) {
        for (var b = 0, c; c = a.j.resources()[b]; b++)
            if (c instanceof te) return c
    }
    K.Yf = function () {
        var a = tf(this);
        a && a.filter || X(this, b, "blogspot");
        var b = R.decode();
        this.gb.test(b.path) || (delete b.params.base_url, uf(this, b.encode()))
    };
    K.Ne = function () {
        var a = tf(this)
            , b = a && a.url;
        b && !a.filter && uf(this, b)
    };
    K.cg = function () {
        var a;
        this.Cc ? (a = this.ab, delete this.ab) : (a = (a = tf(this)) && a.url, this.Cc = !0);
        var b = X(this, a);
        b && (b.tick("prt", Oa), vf(this, a, $(x)))
    };
    K.ag = function () {
        !this.ab && this.Cc && (this.ab = "prefetched", X(this, this.ab, Qa, Oa))
    };
    K.Oe = function (a, b) {
        a = wf(this, b);
        X(this, a) || X(this, a, Yb, Oa)
    };
    K.gg = function (a, b, c) {
        a = wf(this, b);
        b && b.url && uf(this, b.url);
        (b = X(this, a)) || (b = X(this, a, Yb, Oa));
        b && (b.tick("prt"), c = c ? $(c) : $(x), vf(this, a, c))
    };

    function X(a, b, c, d) {
        var e = $.grep(a.xb, function (a) {
            return a.identifier == b
        });
        if (e && e.length) return e[0] && e[0].timer;
        if (void 0 !== c) {
            if (a.gb.test(b)) {
                if (a.ie[b]) return;
                a.ie[b] = !0
            }
            e = new(window.jstiming && window.jstiming.Timer || pf);
            e.name = c;
            void 0 !== d && e.tick(d);
            a.xb.push({
                identifier: b
                , timer: e
            });
            return e
        }
    }

    function xf(a, b) {
        var c = $.grep(a.xb, function (a) {
            return a.identifier == b
        });
        c.length && (a.zb.push(c[0]), a.xb = $.grep(a.xb, function (a) {
            return a.identifier == b
        }, !0))
    }

    function vf(a, b, c) {
        c && X(a, b) && c.fullyLoaded(function () {
            var c = X(a, b);
            c && (c.tick("pst", Oa), xf(a, b))
        })
    }

    function wf(a, b) {
        return (a = a.gb.exec(typeof b == G ? b : b && b.url)) ? a[1] || a[2] : b
    }
    K.$d = function () {
        if (this.zb.length) {
            var a = $.map(this.zb, function (a) {
                return a.timer
            });
            this.zb = [];
            var b = tf(this);
            yf(a, this.xf, {
                blogId: b ? b.id : ""
            })
        }
    };

    function uf(a, b) {
        var c = R.decode(b).normalize().encode();
        !b || a.le[c] || R.isCrossDomain(c) || (a.le[c] = !0, R.decode(b).path != R.decode(sf).path && (a = window.location.href.split("/")[0], "https:" != a || b.toLowerCase().startsWith(a) || (b = b.replace(b.split("/")[0], a)), setTimeout(function () {
            $.ajax({
                type: "GET"
                , async: !0
                , url: R.decode(b).param("dynamicviews", 1).param("v", 0).encode()
            })
        }, 1E3)), window._gaq && b && window._gaq.push(["_trackPageview", R.decode(b).path]))
    };

    function zf() {
        this.O = [Math.random(), Math.random(), Math.random(), Math.random(), Math.random(), Math.random(), Math.random(), Math.random(), Math.random(), Math.random(), Math.random(), Math.random(), Math.random(), Math.random()];
        this.ja = [73, 13, 73, 13, 59, 5, 59, 5, 42, 4, 42, 4, 27, 9, 17, 17, 10, 27, 6, 38, 6, 49, 8, 60, 14, 71, 25, 82, 45, 88, 73, 83, 78, 67, 63, 62, 63, 62, 105, 75, 117, 83, 137, 80, 146, 65, 145, 49, 137, 37, 123, 32, 108, 36, 101, 46, 97, 56, 100, 65, 105, 75, 117, 83, 180, 81, 202, 78, 214, 59, 208, 41, 194, 32, 178, 34, 169, 43, 166, 55, 169, 69, 180, 81, 202, 78
, 214, 59, 256, 69, 268, 52, 265, 36, 246, 34, 233, 46, 235, 62, 256, 69, 266, 88, 273, 99, 267, 114, 248, 120, 233, 116, 226, 108, 226, 100, 232, 93, 244, 88, 256, 81, 294, 59, 294, 41, 294, 23, 294, 6, 294, 23, 294, 41, 294, 59, 300, 78, 336, 52, 353, 42, 343, 32, 327, 35, 319, 46, 318, 58, 321, 70, 331, 80, 348, 83, 348, 83];
        this.Pb = !1;
        this.wb = 1;
        this.he = !1
    }
    var Af = document.URL;
    K = zf.prototype;
    K.init = function (a) {
        this.i = a;
        a.shortcut("nyan", $.proxy(this.sb, this));
        a.shortcut("flag", $.proxy(this.pb, this));
        a.shortcut("catastrophe", $.proxy(this.oc, this));
        a.shortcut("dance", $.proxy(this.ke, this));
        "nyanyanya" == R.decode(Af).fragment && this.oc();
        "dancenyan" == R.decode(Af).fragment && this.ke();
        return this
    };
    K.dispose = function () {
        $(h).U("destroy");
        delete this.ui
    };
    K.oc = function () {
        if (!this.ia) {
            var a = this;
            this.Ib ? (clearInterval(this.Ib), delete this.Ib) : this.Ib = setInterval(function () {.5 > Math.random() ? a.sb() : a.pb()
            }, 1E3)
        }
    };
    K.ke = function () {
        var a = $(h);
        this.ia ? (delete this.ia, delete this.ba, Bf(), a.length && a.U(y) && $.each(a.U(y).extensions(), function (a, c) {
            c.active = !0
        })) : (this.i.shortcut("moar", $.proxy(this.bf, this)), this.i.shortcut("chopchop", $.proxy(this.tf, this)), this.i.shortcut("doodle", $.proxy(this.Ag, this)), a.length && a.U(y).list().length || (.5 > Math.random() ? this.sb() : this.pb(), a = $(h)), a.length && a.U(y) && $.each(a.U(y).extensions(), function (a, c) {
            c.active = !1
        }), Cf(this), this.ia = !0, this.ba = zb, this.X = this.S = 0, this.Ta = this.Ua = this.M = !1)
    };
    K.Ag = function () {
        this.M ? this.Ta = !0 : this.Ua = !0
    };
    K.tf = function () {
        if (this.ia) {
            this.ba != cb && (this.Y || (this.Y = 0, this.Ra = -.015), this.Z || (this.Z = 1E3 * Math.random()), this.S || (this.X = this.S = 0, this.Ta = this.Ua = this.M = !1));
            for (var a = $(h), b = 0; b < a.U(y).list().length; b++) {
                var c = a.U(y).list()[b];
                c && (c.attr(z, !0), c.attr(ic, b), c.Na(0, 0), c.attr(Mc, 0), c.attr(Nc, 0))
            }
            this.ba = cb
        }
    };
    K.bf = function () {
        if (this.ia)
            for (var a = 0; 10 > a; a++).5 > Math.random() ? this.sb() : this.pb()
    };

    function Bf() {
        for (var a = $(h).U(y), b = 0; b < a.list().length; b++) {
            var c = a.list()[b];
            c.D = c.attr(pc);
            c.a = c.attr(nc);
            c.pa = c.attr(oc);
            c.vf = !0;
            c.attr(z, !1);
            c.attr(w, !1);
            c.attr($b, .5);
            c.attr(cc, 0);
            c.attr(Ac, 1E4)
        }
    }

    function Cf(a) {
        a.Ib && a.oc();
        a = $(h).U(y);
        for (var b = 0; b < a.list().length; b++) {
            var c = a.list()[b];
            c.attr(w, !1);
            c.attr(pc, c.D);
            c.attr(nc, c.a);
            c.attr(oc, c.pa);
            c.Wb(0, 0, 0 < c.attr(vb) ? 0 : Math.PI, .09);
            c.Na(0, 0)
        }
    }
    K.sb = function () {
        Df(this, "data:image/gif;base64,R0lGODlhNQAVAPMAAL3/9///AP/MmTP/AP+Z//+Zmf+ZAJmZmQCZ//8zmWYz//8AAAAAAP///wAAAAAAACH5BAkHAA0AIf8LTkVUU0NBUEUyLjADAQAAACwAAAAANAAUAAAE/rCtSWe7+NaKmf9g6GXZZp4oI6xs664MqaH0qa5Eru86G5OGoDCIGg4XNx4hkWPuYDKjdDpVNZVYguCXoXqp1izBc9XGRpeAeq2mstmGMJZxODCenvrvze8HQGpyOk50ej2Fdml+i396DH8CYoh2H3V6FwOZmpl+mnmUck46k5aliQ2bqaqpnx6RSgmkpqUxq7aqrZGio5YApL6XCMLDwrbEwiCvSoifdpTBx9HSx648hAcFBbOW2THT39NJu2PY2oXn5TEK6+zr0+3tCDfKO8wilw3w+vv6Hy8tsmhh4EewnyURCBPKkMFv4TkGCs6RkChxocWLHT5c0CiDIxoMAhEAACH5BAkHAA0ALAAAAAA1ABQAAAT+cMkpm72WUsy6/2CHYVppngsjrGzrrsyYoXSprkSu7zobj4agMHgaDiU3HiGRY+5gMqN0SlU1lViC4Ieher3WbK6zzG0tokZgzV5T2+1gOMs4HBi9WP2uhvv/f3M6TgR7d2YddnyAjG0dbIJKhnceinwDmJmYgJp7DGtzhDqTlpYxmqipqJ4eAlhMpKWmqrSpk1aio4oApLx2DAjBwsG0w8GJd650ish3lL/G0dLRrTyEdQUFsorZwNPf00m5hQfZzufYBQwK7O3s0+7uxyzLvyG/DfH6+/wdLy6xTFngR7CfvRAIEcoYwW9hPk8KPMmQKNGhxYsNPFzQODENRwsCEQAAIfkECQcADQAsAAAAADUAFQAABP6wyTmXvZZSjLX/FSeOJGOeaGqCDem6jCDPdC0zIGns/K7HMoJwSBzOcJ6ecsnkAYuEhFBKvH2a2GZsCu0SBEhNM0Auk8dbr9AUFYIlK4l5Tq+X017G4cAw4vR8cnaDdXhDVASAfG4me4ENdgOSk5KRhlCKfCeOj5Sen6CTeIhDmZycSKGqoCYCXVKmp6gNoQi2t7aeKa6kpY4ApsB7OLjFxriNjpdEisl8msMNx9PIyq1FiHoFBbKO28THCuLj4sgnCk+9iQfbz+7aBTjk8/T140CuXc0q0Q32//Za2aARa5YEeyAQ6lHBsGEYFhA/APrTj8LEBhcjatRwYkJHDwUfPzaIAAAh+QQJBwANACwAAAAANQAVAAAE/rDJKZe9llKMtf8TJ46kxZxoqp5g6ZKMIM90LTMfaez8rhsxGWFILBJnOE1vyWz2gkZCYjgt3jzObDZGjXoJgiTFGSiby+QA9zs8SYdhCatxrtvv5/WXcTgwjjh8fnR4hXh6RFUEgn5wJ32DeAOTlJOSA4hRjH4okIOVoKGilXqKRJuenjijrKIoAl5TqKmqowi3uLehj36wpqeQAKjCfQy5x8jIm5lFjLx+nMXJ08eCKbBFinwFBbSQ3MbJCuPk47nW41C/iwfc0O/bBQzl9PX1J+RB2JqQK9YN9gIKTKfPxg1v/SQEBLHQmr+HK0BInNjg3z8NFotR3OgBxQSPBh3ngJQQAQAh+QQJBwANACwAAAAANAAVAAAE/rCtSWe7+Naau//eJo7kwpxoqp5g6Y6MIM90LTOfoe86yfOmGWFILBJnuM5vyWTGBEZCYjgt3jzNbDNGjXoJgmQmQC6Tm2azgfslnLpgHOuSrtvtbC/jcGBYT3xJd4N3eURVe4FHiX0XA4+Qj3eQKQMBhkaMfSh8gY6RoKGPjClQcESanaqNDaKulJonpkYJqauqOAi6u7quvCl9UFVFjACpxp68ysvMCCizmZ2AgZvJzdfMmIgHBQW3nd04CuPk483l5c4yUtHdfdTv4Q3o9PX0sutRpCue8/b/6ErZQPJNGggM9jzsW8GQ4cGHHxLJ6ZdBYgOLEDNWnHOR48YkBCg6RAAAIfkECQcADQAsAAAAADQAFQAABP5wySmbvZZSzLvvWiiOEmOeaGp6ZDsyQizPdMx0Rq7n476XMoJwSBzKbhifcsmECYqEhFBKtHGYWCxsCiWYioLbqhEom8vM8zm37XoPB0ZUGGbAb+q8ft/u2u9Gf3Fke4VmJodPRVSCcSdwdw0Dk5STe5V/DGV9UI2Qn4OVoqOimSeKc0OeoJ8MpK+jjZxDCYIAnrd3CLu8u6+9uyZ3T1REgsJ3jrrAzM3Ap252BQWskNMMztnZs4wH03HJ4NcK5OXkzubmwTGpxpAqmQ3p8/T0JkF+1e8W9f32jjVowDvx4UI9D8cGKhxUsOGHePE4QIzksCIGgg0wShyTkaOFCAAh+QQJBwANACwAAAAANAAUAAAE/LDJOZe9ltLLuv9gp1VYaZ6coK5sqzJjg84osxJ4rucrrKGGoDAItAl2hAROqXuNhtCoVGhbIq8EgY8y7U6rWELHmoWJJNOAeq1Og6+Mw4HR7Mh97Lye/VG/c0xxdzyCcxJ7iHx3DAF/O4VzHnJ3h3sDl5iXa3aRb0w5kJOihg2ZpqemnB1HSAmho6IwqLOnqkefoJMAobuUswjAwcC1HqxIhZxzkZTCzc7PwKs7gQcFBbCT1jDQ3NBGSY/V14Lk4tvPCunq6dAKRsY6yCGUDev29/jpxS492JNb+QLekxeiYAgK+WLUG7ioATkNDx8qnEjxgwQPMTA63CIhAgAh+QQJBwANACwAAAAANQAUAAAE/rDJKZe9llLMuv9gp01YaZ4lI6xs667M2KA0ra5Eru86G2sog3AoDBpuPEIit9zBRsSodEpUMZNYguBHoXq91myuo8xtJaIGNcBus9eBcJZxODB6Mbq94e77/25yOk0EenZmHXV7gIyBDG2CSYZ2HoqLfwOZmpmBdQyZcoQ6k5aWMZuoqah6HwJYS6Slpqq0qZNWoqOKAKS8nrQIwcLBtqyuc4qJnpSew87P0MEex4O6BQWyitcM0d3dSLmFB9d2y+Xb0Qrq6+rpCjfUPIYhrA3s9/j57B0vLrGmEvQJ1MeKnsEQE/TJsJevQb16Gh56WkixIpo0DjFS8HCRS4MIACH5BAkHAA0ALAAAAAA1ABUAAAT+sK1JZ7v41pq7/98mjuTCnGiqnqBUviIjzHRtzwxo7PxO9j0TjUAsGou0nAfIbDZlgiMhQaQacR+n1imrSr8EgbITKJvLzvPZ0AUTT1Oi+MK6qO94fBvMOBwYSDl9f3Z5hnpRR1YEg39yJ36EDQOUlZR5lpYBe1+NfyiRkpmjpKR7i0WeoaFKpa6mnEVUqqusDQi4ubiluggqUaipkQCqxH45vcnKvp6xRo2Qx5/Ht8vWvpEoibLCBQW1kd45CuTl5MvmKb4zcUd93n/S8eIN5vb3+OVQ2+7ZK9T18gnEd+KGDVq2WgS8B0JBnxUQI45RSLHDIEEAM1xssLGiRwwJKEDWsVgn5IUIACH5BAkHAA0ALAAAAAA1ABUAAAT+cMkpm72WUsy791oojhJjnmhqfmQ7MkIsz3TMeEau5+O+lzKCcEgcym4cn3LJhAmKhIRQSrR1mFgsbArtEgRITGBMHjPL5dzWKzRFhWDLqoGu2+9rL+NwYBhve310d4R4T0VUBIF9cCZ8ggORkpF3k5NjeV2LfSePkJagoaF5iUObnp43oqujJoeIiqiyjwwItre2ori2jn1PpaaPAKfDfLW7yMm8qa9Qi719nMbK1LeBKM1vbQcFBbN83QwK4+TjyuXXvDHaRHvd0fDuBeLl9fb1JuRO2cHGKsYN7gkcOM5VjRmnUIXxIPCDgmsqIkr8QLFig2sXAXLAiNGix40Jcy6GxHBCzsgIACH5BAkHAA0ALAAAAAA0ABUAAAT9sMk5l72WUoy1/xInjuTCnGiqnmDpjowgz3QtMx9p7PyuxzKCcEgcznCannLJ5AGLhIRQSrx5mthmbArtEgRISjNALpPHWy/hxP3iWBKzfE4vp7uMw4FRPemRdYF1d0NUeX9Gh3txdAOOj452KAEDhEWKeyh6fxKQnp+PiikChZebp6hIoKuhmCekUAmYqKkNqwi4ubiQKXukVESKALPDnLrHyMkIKLBQoqKZxsrTyZaGBwUFtJvZOMoK4OHg30/AQnnZe3/r3Q3i7/Dx4K9Bzpsrh0jy+/CjNkfb7k2QB6LfPXwIV4BYuDBfA4caHEJkSDEinIcXKaCQsJFCBAAh+QQJBwANACwAAAAANAAVAAAE/rDJKZe9llKMtf8VJ47kwpxoqp5f6ZKMIM90LTMeaez8rhsxGWFILBJnOEpvyWz2gkZCYjgt3jTObDZGjRJORgGO1XAGzuizOcD1fg8HhnQoZsBx6bx+n2577XdHgHENfIZ9DGh+RFWDcShwd4V7A5WWlX13lYtGjpGfhJeio6KAKQKMRZ6gnwykr6OOnFSDAJ62mqQIu7y7saaoVaqRJ8SPd73Jysu7KKh/BwUFrJHSDMzY2JyN0dOmd93Xywrk5eTM5FDCRIMrpg3m8fLz5SczbqutEvT883b2Nmi4QzGBHgh/xAYqJASiocN37zRAlOSwogeCDTBKJJORo4QIADs=", 1, "https://www.prguitarman.com/index.php?id=348")
    };
    K.pb = function () {
        for (var a, b, c = 0, d; d = W().resources()[c]; c++)
            if (d instanceof te) {
                b = d;
                break
            }
        b && (a = "https://support.google.com/blogger/bin/request.py?" + $.param({
            contact_type: "main_tos"
            , blog_ID: b.id
            , blog_URL: R.decode(b.url).normalize().encode()
        }));
        Df(this, "data:image/gif;base64,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", -1, a)
    };

    function Df(a, b, c, d) {
        var e = $(h);
        e.length || (e = $('<div id="nyanyanya"/>').css({
            position: Db
            , top: 0
            , right: 0
            , bottom: 0
            , left: 0
            , overflow: Qb
            , "pointer-events": "none"
            , "z-index": 99999
        }).prependTo(x), e.U({
            update: $.proxy(a.ff, a)
            , collision: $.proxy(a.gf, a)
            , start: function () {
                $(h).show()
            }
            , stop: function () {
                $(h).hide()
            }
        }), $(window).bind("mousewiggle", function (b) {
            a.Jb = {
                x: b.clientX
                , y: b.clientY
            };
            clearTimeout(a.jf);
            a.jf = setTimeout(function () {
                delete a.Jb
            }, 2E3)
        }), Ef(a));
        var f = e.height() - 100
            , f = Math.floor(Math.random() * f) + 50;
        b = $("<img/>").attr(D, b);
        d && (b = $("<a/>").attr("href", d).wrapInner(b));
        b.css("pointer-events", "auto");
        d = 0 < c ? -53 : e.width();
        a.ia && (d = Math.random() * (e.width() - 53), f = -21);
        e = e.U("add", b, {
            w: 53
            , h: 21
            , x: d
            , y: f
        });
        e.attr(vb, c);
        e.Na(0 < c ? 100 : -100, 0);
        a.ia && (e.attr(pc, e.D), e.attr(nc, e.a), e.attr(oc, e.pa), e.Wb(0, 0, 0 < e.attr(vb) ? 0 : Math.PI, .09), e.Na(0, 0), e.attr(w, a.ba != zb), c = $(h).U(y), e.attr(z, !1), e.attr(ic, c.list().length - 1), e.attr($b, .5), e.attr(ac, !1), e.vf = !0, a.ba == cb && (a.ba = Pb))
    }

    function Ef(a) {
        a.he || (window.DeviceOrientationEvent ? window.addEventListener("deviceorientation", function (b) {
            Ff(a, b.gamma, b.beta)
        }, !1) : window.OrientationEvent && window.addEventListener("MozOrientation", function (b) {
            Ff(a, 90 * b.x, -90 * b.y)
        }, !1), a.he = !0)
    }

    function Ff(a, b, c) {
        7 < Math.abs(b) || 7 < Math.abs(c) ? a.kb = {
            angle: b / 90
            , speed: c / 90
        } : a.kb && delete a.kb
    }
    K.ff = function (a) {
        if (this.ia)
            if (this.ba == zb) {
                var b = $(h);
                100 > a.list().length && .2 > Math.random() && (.5 > Math.random() ? this.pb() : this.sb());
                for (var b = b.height() - 50, c = 0, d = 0; d < a.list().length; d++) {
                    var e = a.list()[d];
                    e && (e.attr(w) || e.attr(w, Gf(e, b)), e.attr(w) && (c += 1, e.attr(z, !1), e.attr(ic, d), e.attr($b, .5), e.attr(Nc, 0)))
                }
                100 <= c && (this.ba = Pb, this.Y = 0, this.Ra = -.015, this.X = this.S = 0, this.Ta = this.Ua = this.M = !1)
            }
            else if (this.ba == Pb) {
            for (var b = $(h), c = b.height() - 50, f = e = d = 0, g = 0; g < a.list().length; g++) {
                var l = a.list()[g];
                l && (l.attr(z) ? f += 1 : l.attr(w) ? e += 1 : d += 1)
            }
            if (f >= a.list().length) this.ba = cb;
            else
                for (g = 0; g < a.list().length; g++)(l = a.list()[g]) && !l.attr(z) && (f = Gf(l, c), 0 > l.D.y ? l.G < b.height() / 2 && (l.attr(bc, !0), l.attr(ac) && (l.attr(w, !0), l.attr(z, !0), l.Na(0, 0), l.attr(Mc, 0), l.attr(Nc, 0))) : l.attr(bc, !1), f && (l.attr(w, !0), d < a.list().length / 2 && Math.random() < 1 / e && (l.attr(w, !1), l.attr(ac, .7 > Math.random()), l.attr(bc) || (f = l.attr($b) * (1.2 + Math.random()), l.attr($b, f)), l.Na(l.D.x, -l.attr($b)))));
            this.Z || (this.Z = 1E3 * Math.random());
            Hf(this, a)
        }
        else this.ba == cb && Hf(this, a);
        else If(this, a)
    };

    function Gf(a, b) {
        a.attr(cc) || (a.attr(cc, 0), a.attr(Ac, 1E4));
        var c = Math.abs(b - a.G) / 50
            , d = !1;.02 > c && 10 > Math.abs(a.attr(cc) - a.attr(Ac)) && (c = 0, d = !0);
        var e = 0 < a.D.y;
        a.D.y += Math.min(.1, Math.abs(.1 * c));
        e != 0 < a.D.y && (a.attr(Ac, a.attr(cc)), a.attr(cc, a.G));
        a.G > b && (a.D.y *= -1, a.G = Math.min(b, a.G));
        a.D.y *= .95;
        d && (a.D.y = 0);
        return d
    }

    function Jf(a, b, c, d, e, f, g, l, m, n, p, k, u) {
        var t = b.list()[c];
        t && (t.attr(pb, d), t.attr(sb, e), c = 2 * (c + 2) - 2, t = c + 1, c < b.list().length && (Jf(a, b, c, d + g * l * Math.cos(f + n), e + g * l * Math.sin(f + n), f + n, g * k, l, m, n, p, k, u), t < b.list().length && Jf(a, b, t, d + -g * m * Math.cos(f - p), e + -g * m * Math.sin(f - p), f - p, -g * u, l, m, n, p, k, u)))
    }

    function Hf(a, b) {
        var c = $(h);
        c.height();
        var d = Math.min(c.width() / 20, c.height() / 20)
            , e = c.width() / 2 - 26.5
            , f = c.height() / 2 - 10.5
            , g = a.Z + .1 + .018 * Math.cos((.2 + .1 * a.O[0]) * a.Z)
            , l = !1;
        if (1E4 < g) {
            for (var g = 1 + 10 * Math.random(), m = 0; 14 > m; m++) a.O[m] = Math.random();
            l = !0
        }
        var n = 3.3 + (.008923 + 3E-4 * a.O[5]) * g
            , p = .2 + (.006887 + 3E-4 * a.O[6]) * g
            , k = 0 + .057 * Math.cos(1.5 + (5E-4 + 1E-4 * a.O[1]) * g) * g
            , u = 0 + .081 * Math.sin(.5 + (.0011 + 1E-4 * a.O[2]) * g) * g
            , t = Math.min(e, f) * (.1 + .8 * Math.cos(1.7 + (.0033 + 3E-4 * a.O[3]) * g))
            , F = (Math.min(e, f) - t) * (.6 + .5 * Math.sin(3.2 + (.00451 + 3E-4 * a.O[4]) * g))
            , t = .8 * t
            , B = .35 * Math.cos(g * (.01 + .05 * a.O[8]))
            , ma = .35 * Math.sin(g * (.015 + .06 * a.O[9]))
            , L = g * (.037 + .07 * a.O[10])
            , U = g * (.036 + .08 * a.O[11])
            , Fb = .65 + .2 * Math.sin(g * (.0175 + .045 * a.O[12]))
            , wa = .65 + .2 * Math.cos(g * (.0165 + .035 * a.O[13]))
            , Gb = 1
            , E = 1;
        c.width() > c.height() ? Gb = c.width() / c.height() : E = c.height() / c.width();
        var eb = .4 + .3 * Math.sin(.005 * g);.002 > Math.random() && (a.Pb = !a.Pb);
        if (.002 > Math.random())
            for (m = 0; m < b.list().length / 2; m++) {
                var da = b.list()[m]
                    , db = b.list()[b.list().length - 1 - m];
                if (da && db) {
                    var q = da.attr(ic);
                    da.attr(ic, db.attr(ic));
                    db.attr(ic, q)
                }
            }
        m = a.Ua || a.Ta;
        (!a.M && .0015 > Math.random() || m) && !a.mb && (a.Ra *= -1, a.mb = !0, da = Math.floor(2 * Math.random()), m ? .999 < a.Y ? 2 == a.S ? (a.X = da, a.Ta = !1, a.M = !1) : (a.X = 2, a.Ua = !1, a.M = !0) : 2 == a.X ? (a.S = da, a.Ta = !1, a.M = !1) : (a.S = 2, a.Ua = !1, a.M = !0) : .999 < a.Y ? a.X = 1 - a.S : a.S = 1 - a.X);
        a.mb && (0 > a.Ra && .001 > a.Y ? a.mb = !1 : 0 < a.Ra && .999 < a.Y && (a.mb = !1), a.mb || (.999 < a.Y ? a.X = a.S : a.S = a.X));
        a.Y += a.Ra;
        a.Y = Math.max(0, Math.min(1, a.Y));
        da = a.Y;
        db = 1 - da;
        for (m = 0; m < b.list().length; m++)
            if (q = b.list()[m]) {
                if (q.attr(z)) {
                    var ea = Math.cos(n)
                        , ea = ea + ea * Math.abs(ea)
                        , ea = ea / 2
                        , fa = Math.sin(p)
                        , fa = fa + fa * Math.abs(fa)
                        , fa = fa / 2
                        , pd = q.attr(ic);
                    a.Pb && 0 == m % 2 && (pd += 1);
                    ea = k + 1.7 * Math.PI * ea * pd;
                    fa = u + .051 * fa * pd;
                    q.attr(rb, e + (Gb * Math.cos(ea) * t + Math.cos(fa) * F));
                    q.attr(ub, f + (E * Math.sin(ea) * t + Math.sin(fa) * F))
                }
                a.Pb && 0 == m % 2 && (q.attr(rb, e - (q.attr(rb) - e) - 53), q.attr(ub, f - (q.attr(ub) - f) - 21))
            }
        Jf(a, b, 0, B * Math.cos(L), B * Math.sin(L), L, 1, B, ma, L, U, Fb, wa);
        Jf(a, b, 1, -ma * Math.cos(-U), -ma * Math.sin(-U), -U, -1, B, ma, L, U, Fb, wa);
        e = 1E7;
        u = -1E7;
        f = 1E7;
        k = -1E7;
        for (m = 0; m < b.list().length; m++)
            if (q = b.list()[m]) e = Math.min(e, q.attr(pb)), u = Math.max(u, q.attr(pb)), f = Math.min(f, q.attr(sb)), k = Math.max(k, q.attr(sb));
        n = .1 * c.width() - e;
        p = .1 * c.height() - f;
        u = .8 * c.width() / (u - e);
        k = .8 * c.height() / (k - f);
        for (m = 0; m < b.list().length; m++)(q = b.list()[m]) && q.attr(z) && (q.attr(pb, n + (q.attr(pb) - e) * u), q.attr(sb, p + (q.attr(sb) - f) * k));
        e = Math.min(.6 * c.width() / 360, .6 * c.height() / 125);
        f = (c.width() - 360 * e) / 2.2;
        c = (c.height() - 125 * e) / 2;
        n = a.ja.length / b.list().length;
        for (m = 0; m < b.list().length; m++)(q = b.list()[m]) && q.attr(z) && (k = n * q.attr(ic) + 2 * a.Z, p = Math.floor(k), k -= p, u = p % (a.ja.length / 2) * 2, p = (p + 1) % (a.ja.length / 2) * 2, 3 > p ? (0 == p && (u = 0), (1 < a.S || 1 < a.X) && q.attr(Vb, !0)) : q.attr(Vb, !1), q.attr(qb, a.ja[u] + k * (a.ja[p] - a.ja[u])), q.attr(tb, a.ja[u + 1] + k * (a.ja[p + 1] - a.ja[u + 1])), q.attr(tb, c + e * (q.attr(tb) + 15 * Math.sin(a.Z / 4 + q.attr(qb) / 40) * Math.sin(a.Z / 40))), q.attr(qb, f + e * q.attr(qb)));
        e = c = 0;
        p = 1.8 * d;
        n = d / 4;
        for (m = f = 0; m < b.list().length; m++)(q = b.list()[m]) && q.attr(z) && (f += 1, 1 > a.X ? (k = q.attr(rb), t = q.attr(ub)) : 2 > a.X ? (k = q.attr(pb), t = q.attr(sb)) : (k = q.attr(qb), t = q.attr(tb)), 1 > a.S ? (u = q.attr(rb), F = q.attr(ub)) : 2 > a.S ? (u = q.attr(pb), F = q.attr(sb)) : (u = q.attr(qb), F = q.attr(tb)), q.attr(rb, da * u + db * k), q.attr(ub, da * F + db * t), q.Wb(q.V + 1E3 * (q.attr(rb) - q.V), q.G + 1E3 * (q.attr(ub) - q.G), 0 < q.attr(vb) ? 0 : Math.PI, 2), t = q.attr(rb) - q.V, k = q.attr(ub) - q.G, q.attr(Mc, q.attr(Mc) + 1E-4 * t), q.attr(Nc, q.attr(Nc) + 1E-4 * k), u = eb, a.M && (u = 1), q.V += q.attr(Mc) * (1 - u), q.G += q.attr(Nc) * (1 - u), 0 < t ? (t = Math.min(t * u, d), q.V += t, q.attr(Vb) && a.M || (c = Math.max(c, t))) : (t = Math.max(t * u, -d), q.V += t, q.attr(Vb) && a.M || (c = Math.max(c, -t))), 0 < k ? (k = Math.min(k * u, d), q.G += k, q.attr(Vb) && a.M || (e = Math.max(e, k))) : (k = Math.max(k * u, -d), q.G += k, q.attr(Vb) && a.M || (e = Math.max(e, -k))));
        d = p;
        eb = n;
        a.M && (d *= 3, eb *= 3);
        f > .75 * b.list().length && (c + e > d ? a.wb *= .96 : c + e < eb && (a.wb *= 1.04));
        l ? a.Z = g : (q = (g - a.Z) * a.wb, a.Z = q + a.Z)
    }

    function If(a, b) {
        for (var c = 0, d; d = b.list()[c]; c++) {
            var e = d.attr("node");
            if (a.kb) {
                var f = .3 * a.kb.angle
                    , g = 100 - 200 * a.kb.speed
                    , g = Math.max(Math.min(g, 200), 0);
                d.rotate(f);
                d.speed(g)
            }
            a.Jb && d.Wb(a.Jb.x, a.Jb.y, 0 < d.attr(vb) ? 0 : Math.PI, .09);
            if (e && (d.attr($a) || d.attr(yb))) {
                if (d.attr(yb) && !d.attr("lastchance")) {
                    d.attr("lastchance", !0);
                    break
                }
                e.fadeOut(function () {
                    $(this).remove()
                });
                b.remove(d)
            }
        }
    }
    K.gf = function (a, b, c) {
        this.ia || (a = b.Ca(), c = c.Ca(), this.i.notify("cuteoverload", {
            x: Math.round((a.x + c.x) / 2)
            , y: Math.round((a.y + c.y) / 2)
        }))
    };

    function Kf() {}
    Kf.yc = 1E3;
    K = Kf.prototype;
    K.init = function (a, b) {
        this.i = a;
        this.j = b;
        this.i.settings.headless && delete Kf.yc;
        $(this.i).bind("select.overview", $.proxy(this.Re, this));
        $(this.i).bind("clearselection.overview lightbox.overview", $.proxy(this.Pe, this));
        this.Ya = $.proxy(this.i.next, this.i);
        this.Mc = $.proxy(this.i.previous, this.i);
        this.pc = $.proxy(this.i.clearSelection, this.i);
        this.tg = $.proxy(this.Qe, this);
        $(window).bind("click.overview", $.proxy(this.da, this));
        return this
    };
    K.dispose = function () {
        $(x).removeClass(jc);
        $(document).unbind(ua);
        $(window).unbind(ua);
        $(this.i).unbind(ua);
        delete this.i;
        delete this.j
    };
    K.Qe = function (a) {
        a = $(a.target).parents().andSelf().filter(".overview-panel");
        if (a.length) {
            var b = a.find(va);
            a.toggleClass(Cc, 0 == b.scrollTop())
        }
    };
    K.da = function (a) {
        this.Ab && ($(a.target).parents().andSelf().filter(".item, .overview-panel").length || this.i.clearSelection())
    };
    K.Re = function (a, b, c) {
        a = $(ka);
        var d = 0 <= $.inArray(b, this.j.items())
            , d = d & !this.i.settings.headless;
        !a.length || !a.hasClass(Ya) && d || (delete this.Ab, clearTimeout(this.ub), $(ka).remove(), a = []);
        if (d) {
            var e = $($.trim(Q().template("OverviewItem").apply(V.translate(b)))).not(":text");
            if (a.length) {
                c = b.compareTo ? b.compareTo(this.Ab) : -1;
                var f = $("#overview .overview-panel.current");
                if (f.length) {
                    if (0 == c) return;
                    f.removeClass("current");
                    f.addClass(0 > c ? dc : wc);
                    e.addClass(0 > c ? wc : dc);
                    setTimeout(function () {
                        f.remove()
                    }, Kf.yc || 0)
                }
                e.appendTo(a);
                setTimeout(function () {
                    e.removeClass(wc).removeClass(dc)
                }, 0)
            }
            else if (a = $($.trim(Q().template("Overview").apply(V.translate(b)))).prependTo(x), a.append(e), c = c ? $(c) : $(".item[data-id=" + b.id + "]")) {
                var g = {
                        top: e.css(H)
                        , right: e.css(wc)
                        , bottom: e.css(Ua)
                        , left: e.css(dc)
                    }
                    , d = c.offset()
                    , l = $(window).scrollLeft()
                    , m = $(window).scrollTop();
                d && (c = {
                    top: d.top - m
                    , right: $(window).width() - (d.left - l) - c.outerWidth()
                    , bottom: $(window).height() - (d.top - m) - c.outerHeight()
                    , left: d.left - l
                }, e.addClass(Xb).css(c), setTimeout(function () {
                    e.removeClass(Xb).css(g)
                }, 0))
            }
            this.Ab = b;
            a.addClass("open");
            e.addClass("current").addClass(Cc);
            e.find(va).focus().bind(yc, this.tg);
            e.find(".next").bind(Xa, Lf(this.Ya));
            e.find(".previous").bind(Xa, Lf(this.Mc));
            e.find(".close").bind(Xa, Lf(this.pc));
            e.find(va).scrollLimit({
                callback: this.ig
            });
            $(x).addClass(jc);
            if ((a = R.decode().fragment) && R.isSamePage(b.url, !0)) {
                if (!/^[a-zA-Z][\w:.-]*$/.test(a)) return;
                var n = e.find("[id=" + a + "],[name=" + a + "]").first();
                n.length && setTimeout(function () {
                    n[0].scrollIntoView()
                }, 1100)
            }
            this.i.notify("viewitem", b, e);
            this.i.updated()
        }
    };

    function Lf(a) {
        return function (b) {
            b.stopPropagation();
            b.preventDefault();
            a()
        }
    }
    K.Pe = function () {
        $(ka).addClass(Ya);
        $(x).removeClass(jc);
        delete this.Ab;
        clearTimeout(this.ub);
        this.ub = setTimeout(function () {
            $(ka).remove()
        }, Kf.yc || 0)
    };
    K.ig = function (a, b) {
        if (a) try {
            var c = (new Date).getTime()
                , d = a.data("ts") || c
                , e = a.data(kc) || c;
            if (0 > b && 2E3 > c - d) {
                if (1E4 < c - e && !a.data("rewarded")) {
                    var f = $('<div class="surprise"/>').css({
                        "text-align": Va
                        , position: tc
                        , "margin-top": "5000px"
                        , top: a.css("padding-bottom")
                    }).append($('<img style="vertical-align: bottom;"/>').attr(D, "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAASwAAAB9CAMAAAAvBq6hAAADAFBMVEUAAADz7+vr3MbfwZffx6fFi0y8eTO/g0XNjDi0aB6QRhGldkdsamSdmZPf29PTy8HBv7fs6eP379/p1bXy48TLvavFnGft0Jfnw4CzcjGnYyO/j12QWy5FLB1qSjceEQxVPS7dqWXXtITFpHmQYz7+/v7lu33hs3Keaj2AUzC7q5MsDgVIEQG7fDzl4dvTnVvnvHOSUx9YNB93MQuri2fuzIb1469/SSalfluWgmweBwLVm1DPk0vjtWvMjkTao1NnNRW8m3eNalIQAwIBAAHEgjfz8/K+dih/WkCzg1VtQyZlPCWVd1xwVD8DBAvcplvs6+vVq3TNlFLhs2Ll4+HTo2azeD6tay+dWyRWIAeARBahVhd2OxKvm4C1o4efj3mAZ1I/HAlnLQrb29rR09Hs16mhZC6rk3a7qYvBsZnIuaM6IRVKHgm/s6PNw7PUyrs3DwOOTBvz8e2Hc17a0MPc1ctYKw8NCguAfnmvu7zOzssmGxc5Mi8XGyChqak2OTtOU1VtXk/r8/ano5YjIyRSSEHP29/h6+/Z4+fT4eXb6e2Fm59mIwXj8POGOQqEpK8hJis7RElTYmabt8CsxM0NExsnLzRteHi+09vB2+PI4emPkYcFCROpcju/y8+vy9WXu8uy1OCHs8afw9FTfYt9q79nnLNAi6tWkasTc5pjqcgDDB9Ig54HYos7mr+Jus4FZJIbi7VtqsRukpkkOUZScX0KfKpXnLklbI0EV4MKg7FLkbCfzN0YV3cEXIojhKt3t9EEU3sGbJoujLFuo7sDO2sJdqMDGziIzOU3g6UJcZ1Km70MXIMDTXobg6yOxNkde6IERG4tlLt1xOJns9IjkrwIaZQDLVMDJksRi7g9kbRlu9xWq80vZX1bs9ZTtNgDMlwTg65Lq9BDo8hBqtEVZIgEPGIfc5dDmr07o8ozm8IUa5FUo8RKstcFS3Irg6cjirMZkr4wocshmsVLpMcKVXoTeaMsmsMDIUMbQ1oveppcut1pwuJ5yugDEz0DEC/BVt6LAAAAAXRSTlMAQObYZgAAAAFiS0dERPm0mMEAAAAJcEhZcwAAAEgAAABIAEbJaz4AAD/fSURBVHja7JwJWNN31u+1mgTRBiNGCJtEERRIQlgKZkWTgFI0FJBsLLIYCDsKLrijgqKiFMaKWjdeRZk2LfQdaKWjjLHcKlPKBPC+QIa8kMwUUhwBeeXegs9zz/+fINCipdU+4/PcnrKpCfD/5HuW3znn31m/2+/2u/1u/5/Y7Fmz35ozd9bv9vM2B4PFYczmmc9f8DbeYiFh1u82nS2yXLx4EXGJlTWGZDOPZGtnb+/gsNSROOt3+4nrLbbC2JGXWS13WrJikZW1s8uSlauciK5u7hRrS+rsWb/bZN+jeXjQPb28LecuXk72sXrnnXfmu/v6ua5muK1kUljsZYtn/W5GW/yOsxmHS3d391/u7b3GytnH2sdqsZWt09q1/jz+KpaAwzHjkue8+dcREPDb/4wlArNAMyZnpcO65euDPN+d72xNYzpbA7LgDUH2G4OEHI6AYyYwo1HfdFYhISGzf+OwvmweNhDLErDesbLyILvg5tu+F0o3p9DILKaQZhvm7R3mzGYxORQzMxZuzhvNihAeTvhNaVlacQU4DpbJ3YSgCsVFiMTiCJyfk6fEXyoTy2zmcYU0DzbbmRzKEjID51muCHhzdRVOpYaHhwT8ZsEqLIzNCeRwOGxry8U+NEqEODLS19cvKjo6ZvMGh9jYOKlYRMGxWB7WHs5MMltoxsET3lRaIeHxCQnx4b/Z70cQMsk0jhjLIm/ZYmVNlkdKI9clRkUnJSUpFMnJyTGOKalxUrmII+B6WPuwzIQYcWDSG0srhJoARg0P+W10a+nBZuJYWDHTx2qLlYtAuipoXUxUUpKrIo2YnpGRkZ5BjF6dkpkaSTcXcc2YZoECcZaNbQZ+6xsKC4QF0vqNYDlzrT3IOAqd4mH9njPNxmnDtuhoQJWWnpGNx1MJ4VR8TnZGtINjtLeEzqTHRQhFqbGx3sTsN/MAtMU5G6VF/U2UbxlmZcVmh4l95RRRhMh/e0xStKtCQQRSVEJIQAAULVsJ1JycDGKawl7Kojn5OUfw+Dti0jKob6IfLjYLnL9zFz6X+psE+ABrD2suC7dqd6a/eHuK5+aY6GjX5HSE1NZJP242yCsj3d5dTCG70Dz5/D3Rrm8mLBdzqJ/37st1TVvo+vqlv9iazZHb8/iMWAdP3tLVSdFJgArR1I/PjAQqYSdju1SMDeIv3R2TpHgzYUW783kM+/0H4Fp4rrNe929oFcakM+AHMPgM/sFEkBUxA0+YPX13y2JpLJ2+nb8nKgYelvNGxqx0Bj9z3eJkV0e4pJitrzlu5RHIgbF8Xuqag/aOB6OjoxXEbOqL88hOXiyDz9+cBJ6a/Wa2IBbyGb6Wi99ZnMJPyVybgye83iNnSLYfj+GvmLNkeRQSrTJyXuZdh3g7+IcXRCcB0je0XRNwhLHd28pnPt9+vpsj0eK1hoqAECp1JyMzCJpWwEqRnh3/0iwyO901JloB8ssJf1MLeKJbprvf/BT+dlLmkWQifutrPUfl5x7MdOcx3OyjkhTpOT+rF2o2UZGWngPB4A21GEamO4QKhpwZtA1e1NcKKz4318IJvjnPMdo1/eePMAEEfHZ2NvK4N9UUQZ6x9in+JDYncrUrwHqdwkrIzc0/xOPzIbgnZ8/Et0II4YStrzUSFBw9euzYsaOFBXm/+tsSQra+ZYk6xWwfH/YmIUuEcRFJ1iqmcUMCdVHC8eRFbxFmQcUd8Is6P/EJuWAxqbExriCskJk963Um46PH8vOB1LGjqBXOgFfAc3v+N8tYGFsM02UREiYErLAwJoeOYYpOrFOkU6fCIsyFEtxqScradzzYVmTaJsx7i2eeCsNRVglUJ6dkpBh4PRgC8vJC8makkoJj+eOcCsEKCpAPeS9P3qBso4XkjeOKwTFpHAwrcE5IyKxFGBFNyLGRk5kUybrk9KmX9JZAEGbtA0fgYEtorrCZLME8mV/2zCMWygqvyEhPzsDPfg1KKQCnQi8fLr0g7+UOjaAyKQq1AqPlvaytFx+PT0AMHw99ha2Ai7DFOQwICGmhgRE51JAV7wWCrqShzuxQ/2AFcbKyCO8FBjJ9fFycydZWztYuLmQhCx7qlbR19kxYbQ3HI7Dw4VtDqDkQtV89+hxDrh6VyM9cONhR8D8TqQlWJ0/m5cH79HCh/4FPyDUZdGGgZ7ViDofJ9QgNZTKZApEcnGPFpkAmzh9jZe3CoXu7To5ZiwRFRXRoXApZHGhIhXGE8DQhy2a+BVSWM4FFTUB+KpRWSLlFCHjl8DNZI3DJYPDhBY8GVCa0qAHek2B5Jpu2IgRN5U62hKN5CpgIsFhCFtYGS6LgoiHsrjyRZS738fFxxkkBVvwELGsz3HJbkhkWa3PC3Fw8D0tioupajsTqGXshHs2BAa86PioAnRgjjwnVhE2nknw0rqP2HC/YC58zmxA/jioBNficb7FexGGxOBB5xCfEOFvoAVCJkStDRUw2DBLsMrcpJmLWbEsh2+cdF2lWXFxq6ip/d/e4Ii9R2JYty2Kik3NmAouAR4X1OoqmgKP5z6P05OteATYNrRBABZZ/tABxO1RVU1CB/bSxjnLKj39urmuwMhGJEjhP6u7uznCKjoqGGLWGBKqy9vBxtl7J2Pw8wFM3CblhZGcfWiy0JKALFbN69Wa6NC6QyfZeHZU2E1gmL3wNcxBwKlOwQm3iogEVims6VmAnCxJ27dqVULCicDInk019XcEFjWEKxlyEkBB4dzU3D8RFyIpOuPH5O+yPoKc1C4Ill21tbe1jvWXL2pSY58paHsikCcnOZCzd8WAijBaQyYICIxDYBMbEREFgm4kXIrDw1FcvMfNMspqKCliZcMHnn8ar/MKjpw4c3nv4dPH7JSfzJgOeSstUD4LhqchA0FRjrSkyF/v6ykMFXplujM3R402ArWSyh4eHj7XVnHd3R43DotK4NDKM8Uhea5chqGC0YJGRQVxvY74yJiY6fUaw0FwYT3gdrMAm0tmEqMB+SgtY5SOsSg/s4PM3/mHv6dNnPihYcXIyrB/pcStSD6LZD60WULMUyaSZ/A0+XJm5jZcf2ltC+nCzmUw2CAtsk1OUqUE5m8zB0NhkNumEJ6I/IkBFLQdDWx4Tk5Ye//Px2liRJkCz+nWymoYUapOK1HiUVUHJYf5GPkLr9J79ZxYUTHXdKbRAWCgrcL9JXoAXyYKWLvFwWhorSfWNet4E2GRGZnuwQV0CX4AVjnLlMDmbPNi4SPd1SUlpgAouGTLaijXYsOUx0WkWM4cV/speOClehUwrq6k6KTgLsPILd+3lG23H3jP7i8/sXPHTJwY8j+7gAzlHwQWnXFXGMqttQWEYN6d3+ZnBRAtT/YkxEwqFHuwwocgzSmGBwJrN5tJYmzw4dPd3IQdMdAsUXgKz+YcOJVtQZw7rVZVVmP8TXU0La5xWGQLr2Lli0NUErOLiXfCsvOkBQ3CFOgHON1Nf14B4Dzl/gyfPM4XP30C0MHYBDtE5UKCGwflQ7B+VbEFAhmNMCFm4UJGXxHuiG56RnCYSs0TiRFdiLmEmsPBIfH9VWCGoribBmo7UBC0QVhnErMLz/B0mZV1AYB0p/mDikRPQJjKRRcYyzNyAqbBC5ny4g8fj8cHcosCZZoH5xQo4UKSHkTn01Kg0VFlzWDQhxReb5e4AASvD6KzLZUVxJBxHVBQMVT4QmCEswivCOoqYMQ+aUL0cVgLAOnfsWPHGcWH94fSZ4uIDBw4cnUaQeeMukLAMBuGcxT+SwFvswzBoQYwRnGGsluaak+TkMA5LyDFnBJuUxQ3FYezo5u4OSSAs9FEEJlYUwcKJs+KCFUgynCGs+FdUVsGxGcIy0cq7CF5YVljyhwsoLDQb7kFhxa+Y5smodhFY6bDhY5ZImJq6Z1s58d0cEInyPBXZxsy3zCVCJOQyuRxz3oJkNMBHea4ib1rGKXIPToL6M+DizmBnn7DQ0E0kOl0i2TxR5f/2AR7CD+KFk1i9GNdJ5PGXEFgFOzeaYO2YgDUtYCQXQvGcM4csFIqdLH502p9r7chbucrRcynf3tWkkC1sDzscwGKa71idjJYOxVCzriJzi/yjFMmKuZYbeOvkLC5OQMrySo11/2WwQFmvfCIsGBfWzzvixUtlZRCyPuDvQPxw40aAZXTD949O+xz0BJ1g4eJBpnmELUF2BqbCmgszL7sgN35KtMnD3jMji0iwPIX1ggo+A6L+vt1+Dnx+kJm5JGa1Z6Sjvaevt/1SOSy3SNzd3IKifimsV6AFDeHnpfuUEnxaWIWz8kovnS0rA1igLMR27Liw9zAK64OA6QEDrKMJyVyyC9mZvQTkMxUWxcePbx8R5LQhBbriqOqWmbFxIjFOIPJyMx53DvjPfTd1N48+zyvLPRMLmZMBOcEtMk6S+e7a4CjTZH3GRSnhFc7PIKwpypo46Cw8/8EH53eFTIV18mjJVFhA6w+HT+8vPlB86AX+C+3c+NxNTDKsttKdFMlT2ykE6y2W61ZZWglI613TUFjUVSxrD4x0FYcj5Tmi+xgHU1fFpqbyPSk284psInbzEYNtBXfJKnStCqklZtZ0AAvP3RNMfTUv/CmsFfuKT+8FHIePvD0ZVkHh2cuXrpSVlRUeR1ihAX7jBTRoFZ+FB0wPixBlyxKSyeyVDPsYYs5UWFZW1lZ+Citalp1JWdlxcrKHs62vHSaLtzQqAx8QsN8tNhPEZIeVyeZJeXyTHV7rjczfk9HCfwZmPEgfXRibuWbWzz0hPhe/05VgGTIL0tEiArQdtxagXmhS1hRaBXkFC/ZCJDptPPaFTMA6ea7kajkirXOle6EmfQ7rdPH+/0Ccd1pYWwNyQ4UeZLY1JpV35EdbYYucnZ3Z0E4XZfnHGOuEkAgRme1jTfbl+PIPwpA1YMV+XqYbj8/7UFYUGCgxkTqyDVSVhKAy7nXMsEWTQBQKinznEkJeKsK3d7s5MCLNAjFLKDicnf3BBZ57Th+Jhhp6CizoHYBBT/nAxsNnTp8+fRhxsDPvh0yCdeoaSAuh9T7Aek7rzBkQVt6LYIVscWYDAB+fVfzDiqkDeUsIZeT3NpHpcfREgGVcNwNjM31JcfyDChDiivkMHoMHgc3Ly5wOsC7sOXwwKtoVccD07Jm3hwPCgVWGkMslM80yXiLGvJ17GIxMN/sIFksQKCBJECkjdXMWNcTU7hyHBf/BwKJgAR/R1OG98AE5yeycyIbHrldcLb9yBWDBMdpkG3fs3XsGDjsvgpVHZbNh1RyOxjjeHkXGpKCVMceZ7IERsskU2Xb/RMiUaKHKDONyuUySlzvsRRFzAqjYyNhMEJbohLuvd+K2I+fRtUYQFRyoJ1Q1o4YWkcaBQ3oYU5HzwriVuwcSiBvDMzKCy8RwhB/yUlIc7VM8l2bZpFMT8id3/QAVMqo4DgAu/AEMoVUMtvC5sgpv3Ky8DLTOni07Pn6QhiB/Zt8LuxXI8AtKJyYFmlRCf0+HBZMOJ7YCaOlhcKyISInEIVphhDWHyeUKhVy5JHN/EpI8t64siovlOwnFcZmw/aNADCWF/4VDh614Ipdp68GGU+fy9JwXUF70noQH21uMIDGdhcFwmKxV7kEOmUuX+s/LSrYAWBP9GRRV4bGyM0bn+iPQQpVV/MGEG370sfKTcpTW2VPFptPh3vdLwXnzptcWeGEIYdl7LutxMN0S+sO+01vPq2jXSHmEiEKSZ8VJ7KJMsBbRmIiwOKITDFPzL/hEXKY/20MokAQlJaErxdlA6hffVABJhkvGCMPYYVwWkninNWszjC8kkxR/iVwuonBYYR7+PAZ/gx090lGRDrDG51kACrH8YyU7jHqBgwzQ2o/UUAkTsD6tqi4vh7AFVv7Z+/tPn/nPP+07Z+q/TxfjQVgh1DlWy21TnHwgFgW5ua8zlVqLFlktkYspGAyFnuUXNd5PIMDtRUImVyA7wT9s5OcX6eW/KUxI5mZlRadB8qNCX+xXnFq20a2tXXDMMCEc05dDlp1+P1cm4EZI3f2l0qysIrEZhxnGSmV4RgQKJOuSFiZMooXYUZibfjDuXeCLh9HqvHiXKWSdLPvo45raTy6jtMAuXS4pKS9DxxzTN1jBEFg0tl+W/5p3tlj5CGXm9GTLOXNCCNYebC7sNJBwEVLfRLSpjIbdrSwBi4lhCU4w+EdcFdngaonmkeud2Wy2kEJH1jm2/soaHJ/iZ2W1iQKqZXJDiS+ans2F0wNkQH+RONLXfJ4ZxYyLpeM4gXHufiZY43NlYAUd0LJi/gStvUZYb5uEVXDl8y9u1V29Ctq6hLoiRPpz544htE6+IGrlAay8DA55zrIlcy3fIQtAONzAeQJnD3A2GBhSRCKxxBNYES2Mv7+ljRmLw2EJpCcgG6BDrvRYPytIp2QhUzQ/+RX20R09QVokMy58e8r69BcdEnNcXaOjE6Pg5VNs8MKScAImByeWxEkTXReePZtgGgCiwCZgmXgZq/P958fj+5d/vn3rTvW1q5cRXAgslJZRWmA/bd2vOBaOTHKSsRiyy9xlNCyF5sw0E3DCwLhMFo5CEdDjJJuB1fgmYkYcVkhjCrkk81j+NmMJa8t1tmaTgZYAu/wVVgHXZtp6WNNEWCYXGVUmB7woaUJbEWZHaQri+cwiMUmE42CzThQ5QbK5CA0XlJbJoKFwdv8kWNBgR0qtfSYvLKz/y6ef3lXdu/bJZXBFRF1lYPA8RFrT0II/XcpHFkGOess4zA/t6XKytYtQyMSAV4UxWazQ0Ai5f+a2JOijj5c+BHEWEwPTfJFsOz8lLRtp0awxZ5JRY2JJSdRfLa2cOLEH2/o9ESUMcrCZLG36uDc7HJ9tAZadkaOgi3yz5DgcVmbuvhnOoBeBFmgLDCGFsjo7oSy0hICEeOaicbxVeO76Vw23PwZaV68CrVKgdRahhWprYs46mVXBJwnACk6HiSKbuFQZneYhDGUKcaGws8BkYUJpuCwJNNYnT+A3FYlCcViBWObPSzHu6idKRBghkwb1K00uVsAayK+0NXGrQlk+m+QUDEXAMZdDL396bRHQ2WZ43lwSRf4hB0sJNI9jbFYochIQWiAuMAQVCusD/mS78L/O7C0OQVidPHns6/t/eXD7i08b6oAWhHnAdcUYt0zSyptECz7DeOxc/cWzR4/GJ+TnekdKpOZyjkCAY3Ky5pOFUPTRQnHi1JTEaNfJochWxmRCfJJ/+GGqo3GZLVoSGRFKgyxGdhFF2p//1Y5IXbfdF/r7FIyQBp1X0lw84WU30gbMmjsP2b8QYMWSTMYGaAHE70JgmXABqnz4+vgFYDTJE/944biRVd6Vxr9+cxv88HZT7bVrqLjAF1FcpiD/kyF+4Zf15Wfz4y/l5yfkxvjbSSNtZDYiG5JYDj6FC2XJpamOwWhjPWQitJhzKCwOJYJFh98QDVr47RJSaCgLYEWIslLsk3/1fZtzbSLpWBlOyBFyzUSbrOf+zEJJsrmIRBJRKFIvc9irI+IJu3aVorjAmYBVGVIOlBTzp9Di7y9Az4yF3zZ//Levvvn0i2++uau+fg9oIXG+HAKXUVznjhUYXdFIFpFZ4dctrfWXE8ovxSfgcy3SDiWuy0p1Y9BhBxJSIQ5Hj+WloFP7yb91lIxDI+MoTFKk2zZjyx2kJQqFrSRaKI2MweEw2b92z5SAEYttvGwEGBa8FkwybdnLRZpjPo8il1OwYpnshBPACri4q7S0FPXFcbtY+tmFqbR2rSg4WVhY9nXbw9tffXX70//9X1990d5x/d49UBcEeiOv5zUE1PLj9S0kz05Na2t1fTk+4SyMWdOJCteog/YXljKkQiaHgpGn+s8Phsp96u403s5M6CKkhMolqcEmWLPfjcQgRqPRmDiSdAMxd1/ur6KVESktktDNuC4seDH85rCXLXppZeYl4+BEWBFOYM5zQGCFl+wCcV0ah3UFUlxpyd83TmK14/jJQrj4c192ae989RUo65v//uqrmu6KGyguUBfC68srwAvxRuAF1IDcla+vlH3b2qOpBFolORfPXrwI47D0hWnJipg9GxkijkDEEsfFblBEu/5oJz/HLpBFFuJwEbG8zWjMQs9FWJAU4IL0KWXwly7l71j9q2h5S+I8PWVYLjcCEzGfPT9o8078S9CegB0fjp8fC+vlvhnZMg8oLQErLQVel0xWWn717398zurMvsJj58DK6nX6f/zzmy8+fdCA+OGt7+5X1F6/fr26Gnh98gngQqzsypUvjfZ1Z2d9dWVjb5+mtfJq9eWLpeUXcxIAl8XChQsVUXtiBXDpUnns3oMx6Ch6ktHMWHDaEX8oZxj7WSbfBFY0DCWCItrO50F7ix+7bPmSOcgommr51i84Ta/xFZFkIjMzkQATtNIeaY0lvnAnNYkUKJ9ve9zWTFYkWYd2ixJO7QNal8uBF4CC9/LS8sslH/3n3gvo+PQ/yhGZlJVd+bLaUPPP/77dUNV9q6Ghpqbm4ffN31XU1vZfv36v+h74I3hkfWdrq0aj7enR1Hf26B81dqiq1JpWTX91ZfXly6UXc0uRNTbwxvT0Q/ZyDIZEwtmDcGOoU4S1RkaywWFI8lUSBn/jTkuTg1KdpFimMBQn4tjx+JnI/Ue+LKxIOn+lrS1JhHWece01OyDaPEtqIyuS2q30ZKSkLIUObODy6SPXYuy8wGDvmPMc1jwvd4dlIPKCkJJTp0qMuMon2dXrH/397zdOXUbc6wq455VvO77/4ot/fVz1oKa9qab9Vk3Dw4ePmwd6627UNtbWXq++V92vVg0ODg21Dba1qQ1DT/o67qvuqLWa4V5df21/Zf3Vi1cvA6scPB4+nHKEpIzBpPDBdi/cOunokWwjx33oGyGaZyOOBZJHDplUh3eME8sxOBHuXT6PAdJaasfByelZ5mIbbKhIjlmzcIatrdnUxEhGbJyXTOy0m2+f4sY7YMWUrbddo6BO6Wq9/bZiTqCMHnPc+7o3iyLzcn8XBt95R1fknzp16moJapfRD2Dl8PYJfAbnunIJXAuCj+rB//zzX399qH5wZ7i9u6ap6VZD04CqqqlDbai4UfH4aVV7962moSdDI91VDTW3BgcHDY9VbQat3qBSqzs61MOa6vp6dDkyB4J9/p/8KRSyh3C7sUe8cFKbdz021HbtuyyKRCLHyeWrYv3Xm7zE9UScvxxDY4IXQpeZERspEtGzfHE4Gpnpuz2W75gTnzfDjinxIONEnCSLIw8KcjjsYAU3KXADZUV2a5LRXiJsCwWcB6+SyOTrNn9W/dlnUd5xbpk8RyTA5+df/ez6jVokVJeY7BME2CcQuI2h+9uvOw3d4HnN//g///WP72sMGlVNlUE30K02VA10N6kHu5tV3Z/WDI4Y+vR9en1bVUN7d/egQd/2FD7oh9qbgFWvUtdfXd+K+GIC/mzp2S//r1MEJsyDGWTqhxEnVhAS/VcG8Xl2kTwe4mdYrDTO19ioC0iKwOEg8suX8nnv7uYx5ORQnE0oeRPZlkmJ5cV6puXOsFiFlZ7VJ2J5PCmHCcs6LmS0d4rDmgkCl2BYi+c67FlwBBS/dFXE6mD5Z9V1x5PePgBevy2t5OpVcLePfvjHTVUtFE5IbkPfJlt9z1DDg4anVTU3b/7185t3m7v6v29SatRNql5lQ0OTQd999+6TNtVIn35IPzSk7xluHnhiMOhH9TVNbfA33U29moGOWpW6srJVU1dZfxkCIvDftsTbVsgivxeEDmtAFs9jfMYOHn/pDj603ekcG6k00j9ynYXxOBiSk2yLxUKJ5JTCW5XCD/aBjgXJRi62EYmkcUX0NchAe4aeSN0JveNIkkwmEmBp0JeFTfFQaM4K2TAHx/q78Q877uD5zdlHi2mFFHb8+L3i4gWHTkH2r66t+OHPf/7+prKuDv506tS1yXbv3vWKkcGHT6uamrrba+6ovmseGO58/H1vl0E9oNapG26pH7U//LS5r69taOjJyOCQXvtI90gLIV77qK1BretRVil1fWq1TnlHVTfchVYR1ZX15fX1u0oSRRQR2WOJPwOltY36fISwgH946Q7YFokViWEtWUr3TSTCARH1nxzi8g9lFBabHBQbZB9BkfpHbo+Li5Oa082LVnrPbGfZdFamrraP9ZLGSU6YiwKxHDMBHClIFCYNsDHZYdbBPE97nveuGMGpSkheN+pufHTvKuJ9ra11P3z3/T++fzo4pO746MYNyG3A6BpSQQHUG3UV6vbmj9u725oe1AAslUqnHR5QdqnVSnWfTq1WDz1pGDD0qQeHRobaqvp6+vqeDLYP6jRdur5BZVenBv5NZVD2qiC6aTq7uvqH+zWt/dXVrS0t5Yr1gVAhCF3meyLhmrcaP54SCQvT9/NO0Hdvx4rs1q71hvuTYcax1TQnzSFG2MhFOBaJJI5z47kx3GJjpVKvOCnaaJ0pLPSsbBHtF+SZwouVSCRe/hIvryxY1sQKYGuAyV1Cmx9kY3P+uuc2TW11a3Vt7f37dfdra29Ud9VVqG5+d/NOVfvI0OD9zz/66AZYR0dHXV1dRUXF/fuPq6qa2gdBWU0NTXdUA8qeHrVa2wfhqk0/pO7VDVXphvW6qqGRwaoBg8GgrqnpVo8Md3Z29Wi7ND3DSp1ap9UoVYBqbLSnS9PZ2jusuQ7EKqv3YWxsArFMDx8XmFb4xzlkjM8xArbi07bN9070W4/Mm10VMPGC9Zrntx1kKFznx0XGbWfwebGxbpnboQTwC55otM7UkO+UrIjecGQ3nwcTilRzukzsVWSelSWTZW1wkIu3Lej/057Kysrq1koNIGq+r6mo7VFVKJ9CxTSiu9M2UjXw3ec//PBD89OamoYHT5t/uP+4t/dxd/etqqqqgTuqpqdK5R2dpqdNpwOuDQCobUSj0XT16NT6J7duNSmVSvXNZrVOD6x6DX19Op1BretsaYW3fk1Ly1jn2NhYT7dBq6mtbYXnlRx6O/jDeVgW2YMtipSZBymygdZ4AM6BC1EoXAEVkZhhAROvSTf/4C3SNjgeWb15Nwz3Un1XeoOmwNLSTXeGz1hccP9OOpGYDMevw55BdnZecV5eEskJWMjPPLDA8f0P/qQ5f6qyFayyFxyqorKxon+4Q9mhenwH4nOfus2guvP5DxWqB58+fPDg5tMBlaqjd7hR1fBUNdDc3NQ9UKMe7tV0apQ9hr7B9pq2J4PK4dZOuO7+vpEHT9UGtWGkqg1g9ox29ozo9D2dGnVPS0tnfUtrT1dnSyd8qe1r6u3SdDVqOisrr35brjj0tp+5jEOGgYVIKnFQ5EB3ffxejByLdMTQMc6U4SDqi9lEokIRtTlonV8SKr5kmPjgwyceNdM4j8dnZ2RkJCfBIDJ6VVCiX7Cvf3CwowOUUsejT9Ueh3iBXKDybvP9xsaKul4lBBSlsqn7aUP7iNrQ1lBzp+npg5vf32x+/Lh3WNXR36/RfHe7Wd39oKZ7YKBXo9N29uj0IK22thGlphUxzfCwTlUzoFaPqAcNuqEhXWePVqfvhMNOZ+czYPSss2vs2bMWlFVVz2gPBK3+ytbqT1pLFqYp0oIhIeGgLpfTvbwtQFoTAoIrQTj99P5LYAkulA58iMkKhBQgxf+qjT7weEI4CAy+UTIxTYFYNOhZce3U9bRd13srr9WDFHSajs8/ut/R0dir7ICkpuzrU6rVbbduVRkefgwHmZsPmpsfqx6rGjW9jZWa1uHmj79vqxoAYfXrDLqePmXfSNsAfNGj6eoEWI1tEOzbBqpGDFXKnqH2Km2Xsgc87pG+Z3RsDPTU1fkM/K/lWUvXsEH/6JF2rEvXqOmqr6+sL00vuazwZ9hhoJRncaSbMyzCJ8AEGO1F8RlBifwPY4jpoL1XujEXXpf4HLgRGnXKdHgn7oMEWHK5uqOuvrp/WKds7L8BbtjbC6gMbSN9uja1Ci62u6HN8OBuQ7f65t3HHY2NHcrhYcheYI0VHR2gP6VGBzFcaVBXtat6tMM6BJZOM1xVpa6qAeFVqfsMTQ+ah3WG0c4xfd+QfuxZl1ar14+NarVjLS1aDbhm19ioHuoLI+Zvv72cm+PAXyqHPhXGJtM+0YI6400z4AiyoCLiC3nlzfbZyM0xBIR/PLyX3Ktv7KisBL+6V1vbCJF3uLdJ1dH09GbNrVuQvUaGhqAKGGjrbhsy3L3boOr97nFvbX9jb+OwUqMZ7unSQlxSKfuHh5UGw4gBqPXqlAblMHiUBh6gHBjobngKWVBnUD1sVkMK7AQkWt3YM+3o2FDboz796KOxr0cBVAv4pFb/6NmzHqDX2frtpYQEqA79hWRmKMYrMzVzm8Uv28sDN3plUFO/G7TWz967V3n/fsfjgTv9/bUVcPbo0fUPD6ibGmoaGhruPnzQPoTwMnTXjDwZUt++3dzb2NHbCAdgECHoSqsFZsNgoJmqqjZlL4IMQtawRtM53DvcCsU8clRsqNIpK1TqkdEu5diz0VFDz9ej2rEn7fpHT7RabcuzUW1nC7gluOazsRF9y9fgnvXlF3PPlq6DqU8omRIpiXVzi6ZSEdf799nFs5euXi+vf3y/4nHD4/7GuvvNwx1avXpY+fBBQ8MXt7+4/a9vPr41ZGhrH3zS3WAY6lN9/x0Es97efk2fQafrQWoDjRLqcB1YWzv4rRraCoYhg7oPEhuUCF1jUKLf6r5T1fBU19cH50NN57PRRzpDy6i+s6pd3/PkyagW4nvnKPKGBK+xJ/oWxDXryz8pvVSan16UxeSE4qSwr8aIyc4h/DtpnbuUV3L9+rXaO6rHj5vv99ZV3FcZDMP1dW26O3cbqm4+/Mu//va3f/3l7tDQ4K329poGna73fkVvo1LTP9zT0zYI1RLAAr/t0YHzARM1tF9GBvv0hoERpVYDGPu0kPv61E1qdcPdKr2u79GQbmysq6+98xl82abXj4xoH4GYRkfHtPDe0gnh7NHXo49GAdu35eWgrVxHd1/77aLtmZk83jYiDC7+jbQuXyu7VldRd7+76Y66orEX6aao1Els9nmN8mZTU9tI81//52///NvfPm1/8qSquxvqhX5wU3C5rmGNVtk92AdfaYaGRnqUaqVOOVAFp5k2A/y54S4clruGe3R9enWbvkc/omtsunXLoB/R6jtbtKN9fc8ACPIKNOi0jzq1naPaUSRkgbo6/19x1wLeRJmuz+oCih7RRw+3BQXcVl1QBJfHXRBkFxEXL3hZgUJ32XY9nKNFt+6lZ1HPqgisouuquCorUC5KG8qkE9CUSWnSmdBJO03TmZTMJC20SZrMNAmd5tJcSFt63il7FlHO4h4r/k9Jm5D2Sd683/e/3/t//z8dmCmRs/rb2/fXlqKNf2jhraQEjZAP/kxbPrz3G0FrA/ogP/jzrvJ91Q3Vis4HHVrdeuBk16FXfj7+8bvnfb9cpwTtEYvFkj0cDAY5nyfmsra2IrMjBju7jve2dwQMnvBxaIRQOtzV6QFu/nDMY3K5IGBTjCuR8Hf6Mev5fKHjfQFwEaVzXzwQAIcC3f1tgRboepZ1dnf3d0MxdOCrvTPQoVEroWmKdn/vcY1YpX94/h6YDKsKpz/4H2vQ3Q0Z8E2g9eoft2zb8/HmA2UNh5UIwVt4uJrVr3+Ye/v83JuWL5+4yWDpyTbA+O1qbNR3tVpbYdJZrVFnF2Y9FMp+zIJxg0EfCnQArF496wQ2IZeHhfESslpTRo8nDiADAZMnjqpPK55T0X4ohm48v7s/FBgIRVOGRCDQHerrA1zxuL/X5wLtAuk+pHdtPmzZ+dzO0j27YTP85YU716374ZohZoFaFxutP235l7+++i6Mha37GrJBkrCLKX1ZWfWaFVPn5I7LHTvi2YK8KzUM9ChqQCV9F4RCV6/eavEYXNCoKF7gIfg7AV7ID4v4eBfHheAppKOcJR0IQPdrdmgYrEuYhly/dGdnr9PZBq+mO+7RwOoYcFoD8XQgnnD1DwCyQOC4E5kMf7atvh8OBP4dOwJvq/bjjYs2vvXSlBeLfrjmlavH/PLhbwAtQLWlEs7ewfIDBxQ7aacpvjXLN4x9dHxu7rQRy3eULJq+yeWKWbr0DqdWAgIvfIXCVoOJ9cViaafLkI4awmFfNAzdGvZ3iXQ00BuOWUmrK97h10NosIZ0R0fcBeERD8XD4c6QP9CR9iQCaYMTnkOL39EZd4XicJrb+iFL+zv8Bn9bN0QYCiAkMVALAuJIc3v5okVvf/rpSx+9uOYPW6/GDohvAK0//nVX5dF9R6tq92aVw6rdbifwPfLR8rG5j46YVLhu+j1/ORV1QGRZtJra2dh4EpaCyYVi2smSpA/GsMHgMXCeGKuEDEafxxlOqbqQvtNlIhuiLsyNEO2MJdTdnUjENecvFAJegY6OmCmOTAc29vVFjVZrPAQB59GkAmRDOgDQABJ0g76zo6V+oB9lam370YL3yo+9807zISwEvHvVT4fQushg5Wwr3QMPtLzq2P5sjWpPBiPZSEQ8ccW8UTvyseq2/VTr8VBUp2NTqOwAlx45HaFlgmNuYeDnsSlH1GhKWUycLuxjONEXjlKEMx5ysmxDq8PpM1hJBmDFA4k45EEsoU9A2AbaOuLw4mFBx9KhDqfFko7FkOWNcdAq0N+Z6IC0R27vCLmgxepbQuHeYyer9je//2ll26E/NyMO9uwEWNdcfG5t2FC6t6oqq1Q3nixLJil7JKvYlYj40W+ueLbIdupwtsuiRZ0eKt7ZCi3POTs7G3udosdJRl1GY8jF8QaGSfEsw4VdRJCKgHFEFDKfY+DYxIycNRthoqEEggyC1tUbiqXxY58/AbVGKlGTCZUTbDBfIs2QbKyvLxFvT3T393WDV+2GdFt9fVso5O9FGVVVtb+29nhvfX1L867KrWOuehVoXXSwtry7ubaqvDWilPXwkaQ9GSHUoA7cIpRsgxMeg97ac9IJPc4SXBQrDwRrcKKMiZIxLM5wFBMzWiwU4UgxJOcM6Wgz4TDYaUcs4RR9XCrqMTHWRpfRAxM5kU7gz/Q6DbEEaBTwGE1ME281GqMGjwuzg4+iGEM6FI/1B+J93Uhe/X2m+ED9QIdmRR9v7+3qKtNK9s6Wltq9RyrXP4fDfH56UdPWJd++9pJf5+w9erCxuqoh0pCN6KGjInRSoYgIYQ8aHY1Wq8WQcHXqeVEf5lQxqu+McgTviqUDYQ46nqdlLFF0iZTJpzOTDmeKogjGYJdTzkSUsEZgTIgoIHmR7Yyn9YZYWA/ZYfLEoCHicC3sKhdlWWR/p9Xio1WC8WFJ0R+PxRIdLd39ncZQfX1/KNTRAjWPMv1kY2ujtRMuTv2R+ub1z+Hoo9suZtoahwWKeRN+teXovip9VRXfwNMhfTJIJBVCJYJ2bSGnDEnK4DOG/VZdttcjEiRQcPk4h4U1hJ2M0cGbBbuP6+JpzqCjKN5CqEkkrIjKu1wOVSFIjlFV0RoxU/oAEj3ynLFLrxVLKMR5UtRFOAdjZIFhq0W0M4wIi8zfiTXsODwIl8sPWqX9/che8CCO++FoHIPl1YbIrD+y86on0Pl2hlsXQ5uijXwe+sRmfSendN++1q6TlqyOikTtSRrcQuqqAcd0PM9Go85UpCsUjvZaWRDHAovFZdQrdo/BJ1oazJQqkj1WOuUj1CbFQQuqnWApmUeHA81xBOsQVUqnMwt8r8Yho4/Xt4omE6NVAQhcoCMCwoS/q8fiYCnC6Olux/3QgN/EuvrrUe8g0cN/GGjBgIzQzHnMjfVH9u480ly59wOtrfIiUesJbNRDw+SVzbuOVjdYTzr4IE2k7HaVIGgoCKCFGoePECmrniFdMY+zM8WxRHCIL6lOkfQ5eN7KUwJFRboiXIoQZNGQRKlNkZSspDgREUnx0ZhF5K0KHUGTCGZKK9ITY8TESbImB8dFWAd+iGGeRLhHzKIx5I96PLG+Fp8jhNnwjOpCcQgx1taGr76+toGB/oH6WqT65iN7sav4ogXihgdGr5xVuLG8ofxgawN/0qqL0DTL0nJQp8rCCWQv1D58T0TH4X0SUY8xDAdL5LgeXqfQSpQSWb6H5ymZpgkXLxoBFm1kZUlWCXONjtAQJ2k7x6KMtBBEymhmWBF2FjByOJQeAjQzwCTzGDk25koE4hZkAWOsW29wubo7EonujngctU9goAUdES5Y0whBSHnNhe4bONZ7/Fht897SnU9svu2iBeKYvOIZmz7edyBbdbLM2ljFi5R64FAN3q0qZ2qw+pxUFNEBA8Hl83D2FOpiQ8pOMUZfympN2nmVEPkUIctSUkz1EEZCdtMiG3F7vTRxOGgmkqqgCskgnXKkRFqHRM+YRZ4Q2RQZdSCNkWbRhFj1eHzotYnFw1GLJerq7veHnf6+tAumGejW3dfSF2UdDkM41H2GVi2Iyfr6Y7X19c2ae4qzorSjS3BixkUIxOc+/MPDOZVlVdmqBmtrtVVnPjF+zvteWRXkZDLbeFglIjSl6DhDlPRxNGcyxOIxo0iJHO+wyPZIE6WUV+OpYJE1KDKqTSUJjvK6ZUKxU7SqCpJbJRSHRjKCJUiznecZHuGpGFiD1UxTSGI+k48VGcyPToeGSX+b3tk+0M1FdEaPMx5AJAZQbcOf9wf6OjrjGn7IWSh+gNXe53Y+gSWI3/72kmm51+VcJK21d1/50QNljVlrdYPO/OH43Eff0cjCKzVK7+EgH+nREUnRaFd9ZtlsSLuwEmZWabsiUtKJ9w89NW78mhMkQdOwBgnVrVICTUuSl1I0VtHJpErAwkjSFE2JVJMYSaVYB0dRpI9hnQptNkPZ+0wERXEmo4NIeeDSg0IDfXGnPtSJdTSYNUjpbdrtkBvYB+cC2asdyb65pXln6c5/Hzdq5rx5d428/PKncn59EdC6d++uh3N2l2cby7LVZYd+ftNN81fsuBLciChJWem0iOhtAG6iqBKsqjJxvcERoQVJJvhUcMRj2LQ8fv7YjwRBoDhKkGVwSdVuaZ3gllWKSJrFCMfSQI5Gu6QoMCmwkjQLKXMT64LIEJoYn9EsQGCxRooP9MdNsfaj5VUoqWFO4B+WHXGDFUgNtnakLdjxWt7CEmM92umemjPnClyaZAU6pp695CJw67U9pTk5H5RXZatbs/rXc8c/MnXEisL8U8mgko3UyEGrQWdXeQe8CC1okgIbc0ZZQvXKQiRWPvKmOdruxZnz7juFNAd8vLIsJ71qjZyMyDaJpjEdchHEIACsoynC7KUIWUixbJNASl6WraO8EhIZaa+jzaQh3NefNpqiv1i5dsf7HriLsRgW/Z1RnwHJva/yqfWVx9ERAVK1aWsZ7S31zfXrcSjbnJkrV45csnr0mz/4+sHaXLl7w727yo9+XH6gq8e6ZtnUmaMmrZrx/Ing4cOY6dC+F4m6OC5myZIMHfSwSdUYcxk4SnZLqnjoEexeXPbYrZAfkzIqxRKSV3a7k3adTqcohJbIoEeBFC1LbkmSm0S7JBB1XlTVZjctuAWGpAGWWUbACk1mNtBhoc3MlZevvXXl6JdjBihXD8sZYWh4Qv72aY/NGf/KsUAg0A5WaZkeYB158u75uADV4mdHj0bbwQNfe9Hz2racbegY+mDDNrTKWI2/Wb1jR35hwXtBXpXVYJJOERACSZFwoI+R4exJgle9ogf6m5Rtbun9cSOx1XXejrUr8yfbMjLFcLTklmmOMIsKSh/SnFRVgpZVVfZK7tMZd1InNRGUF8gQdYLZ6xZIsk4SmrxetMubmXTAZSJI/S0TV0x49o03akwmk9ZAqXUleTyJ13G0X+6cS48mwjB0ILg0l/7I1lFLbp2wYsWKwry8GQ9e/bVXiFu25Gw+Unlwd05OafmBwz2OT+/MXzWl6BNKac0GI3bZLZhVcAU4cCZnD8prKanIksqxRo7KDNrevmnSujvR1lpYPN1mG3QLlMhQAsikehGTdiEpJO1qk1CHKdFtq6gYHJRS5jozdhJ4vXZKqKtze+sE3AjeTB1FsbE0Y/YZ4uGXR+ffgd0vnwAs1qgB5jH5TKYP78bFuKbOW3C0G6v6CEVtvefIVvT65S/MK1iH9YsPc752YXovTqrI2dBcu2fD5uqyYA3PZ0/U2JGjI0rWqshefPjQEIIsCRTDuvQ8clVQ55Uku0hQgtvmfmDELdq1sgrXFRTZpExGUikzwo7wZpJJmBZ2KWMn8Ne87tPACmDZBI4iNegkCo9Kp0/jJuOt0yhGsVwTybAxT0L/9lsvPP+erElWlmMYAKalr0O43NuymTMvW1ne397WB+WgSYf1t+TNKC6egTXETb8fcxFUPE783ba59GD50V1lZVk5KPJ4jbQsUDStHlaCKtIJhYDEPZoQ0WPMUrROrqjI4FEB77fmvlmFxfhgcdr/W7JqQyjiF5potxvVNC041EHBnAyqbsmLL+CVycicKNsGBzFRek9XDJ4+DRwzdSBZkxk1E4sshXLTEwpAfnEkQ5IMQUQ4UzoBdfX7iSNuxZaUN6aXa5PhACwtILb1yk1Xbpo95eWfvXrv117y3AuodtcePFh1AEs6aEeroYkgIRpZWhBUWfKqdl0ECkn1elV4pzDmzVwKn7ZOqnB7gRWEAqW+uKlIOwRi7kZ3RpAytgxgEYSMG6FIeVWd6qXNFGsmRMIuDVYMZjIZ/KI0OJhB3tLAQiYbHPSCwV6VosxGRDdDMum+WAwLIdoIp51Oj+ZwpbsPFK7KR4PtDYs+xfL+0JKitmAN0HZd/cSr12jO1mdLnid/8OR3fvS74c5ZpbsqK2uPosNRgWbmk6pdMZuNJKQ34gPKFPUMCRKpajLCQ3bVqRCXHCdnZGgBN269gvlU0Sen3st4vaCPWwIcEoIXFALgbtmOKU8UScIMoaoxq6JiO8J1+/ZBtzcDXg1WbN9ecdqLnxCQdQLwIllfIsGaWaQriAcwKmFkUwTQ1qVOPV88A6v2NXCzNIyGTAhtSnx36Ezvc7yHa6dOXDURvVw/umQ4mYWVim2lH6MHOasECYIkIqpQowQj2nSfRLICYpJM4aWaKUptCloiAMid8TIMUrIMDrklm7eJkmoYEiKVljM2d+a0TdKiTos0gCZhegDdbABK2wx17s7E7XgI3yqQ/AeR0QAX1cQwDIQ+Bf1KkSaPkTFTTVIdBcWKRaREtmj6Daec6c5Qx1Av15HSdysrm7HyqhWIZ6tpnBK1ZMkSnLMwcvHEFZd+a9jy1bbS2r3bSnfvKi/Lol5BSUJAKdQkhQjP0eAQ3aRCTeIjxwDLJDkCXwHhJJOk6gVqkgRMhCYaqUqgKQGYZNwYGYxBm4RfwBQgyEDoH4/tknvwIXwbtAEvjdZ1WkkJ1QvNLyBCMctqxTdmDBUfHap413G/vqu/pRIbFirffe4MWL88y6zr5kElr7h5wWXYCD/y0euGzaD5U33l7sqDe2rhJgMsVQVCshuUsutYCnMg8JEFSHMqSTXhbsZNMyJJC9qLp7QElQEjvENFN0IWgNbJoBNABGwADYx5qMJWcSGsQC6bzYbchaCskEAoIwVtIQkgFcJSRzFmiA+1Cc6YXeEVMsIZ011dvbXNtSePVVauH3MWrCG0ANa0BejoX/zozLvQp75gyeW/HSawfv29D7f+6qmjWKdvUJJgkRZ5oFKToCZRwNEaN7RPWB2CES8eTENIiHj5qGMEgIE3ivCBpKQQnXIGRKvzQiTgiAdb5kIonRuSyGYIS7CsiY0ZzbJk1jGk0YSlWa1fh4CqgEEY70CjiNYHfqwNW6Eqt67funXMGbCeOAtWzm0TFi/Anre7lmHnzoKRE9+8b5gmyAfeXLls/rJHXm/INigRWtNTWsIBQE2IQBS8DOJNAkskDUJNQWppHNhpQhMBIsiDSEWYzaCUMNcJMnim2v6+/ff/N2xmTwztNBRoDIAwcDfhQhcTWpsDqBFRQWM17HhtS/P69VuvfmYIrM/GYc5Tqy/HmDh7xLJR85aMzptx3/BcEmtNccGO+fMfnbD2UI9OR9gRR5mM7bQbBLFJglYEi0isKAM1NACThFCpQC5G7q6rEyCQJMG7HaiAU15ksgxEltxkG8Lpq4wK2ZhIGBn4+CQNQjfBXsXSCDZmRA1RdF2icW4/snttbUt95S5s3fwCWE++UZK3rhCnPGA36+o7imcPz4Wd11+xY+4Vcx4fNemO+08oEZJCrEkSxDZYgskdkglcQvSRIgJQFbxaCkKkIGDwf0BOA06WbUg0D2mPeTMVXtJecZZUXwUuBg1gCZ/DLmmMlWiSNQIwl4XnLVEory5tN0Zr1f7965+5eudnwLpmCKyHX/rbn1k6cuXC4oLJY756asdRTk/Ou/37Y2+fiq3Yi95ClxHSuF2zB1DkDb3lGx4Cw9xI8gg9bwZI/f294GHkcIBVYfOCjhgqxbEMy9D4xeEYSPk0a/Lxdvf/qgu4/GTUykMisx5XALtf0cTac3TnM2fD8GzS2vD+83j198xdemfJ9OnFU345HBfL+RDnRIzPfXzE8lV5z5/IBglKq2k0SYBgw6bQSaNK5t7w37YzUx7IA1KdGcBQe2Q7GIW3gZFRk0lYojJS+jCO7fh4zj0vQoLVg38M64l3DzUw165/5hmE4eenw5yc2zbhN9bl4ZiD4slPD8MVl/7009x5M3EEycxRaxfmvcjBfqJUDISblrO23zP5rpGrCxfeB0jAr6FpHcGm3RlE/H0+zrTw/NoHPiUsogi0mRNF7PcM+FvqsXtzzBfBgnp4+F9feuHBXzz99M+fPidjXTfuP2+cdumYfx6wcYtX3Lp81Aice7BwxqcHDyiEPYkBtOAGgFoFa1euWriwZC4+YpDLDeWOFO/WWHY+/nwRq7lFNww3VhU2N1SvLBNGO8l69I37X3nkxqefOw9YZzZAnefCwI/Nv/SRmSOK3tv5T17u696frMqftWLirIVLFxa+HSkHWKqMoSkEDaztRasKCgrmnlVBGIi8L/m+cFZbyaylBcMMFrCqsEHlC0afyJwYtWDxZZetvuPHT5wjtP6B8fCtx+fddROWDKYuL970f63PX3PdtdeOmzr23z5fJF0/vWDdnfn5aJJ+B82hPJb/ILQgxwVNWyLmABWw+sxYBBC+DFu0Iyf+qyh/YWEJTsMb1iSGhACWZwQyZnpv1pIli5csufzNGT/+IljnR+vbi0eNQqvCrc/OmvXkecG8ZhoOnMEBcPNWj5g57Vy4voeZonjGuimbDhzvsmKi4UiCapKhpppkEAvYFBfPPQtAwcKim29ZunxSUcEF3/8iPH1RSUleSV5hScn0YYxCbU7Rqs862pS9edldGlZLRue/AW7hwLgLg3Xj6rVrL5swMX/d/U+fr5kod+aoCT/Ixemot+OIoB0rrv2czHp9/ftvf7T/yJG9exT0YSkKr4P/KdvgYp7J4GdhmX3ZxNX5ayeMXFFwD84A/Ydj7iIN56L7p6/LK1m3bmHh3K+Cz7n3tBMrIZclIWk8dPejyxaMHDlywtoJs1Y9oxHrwmH4r8Vv5q9alXff9247D1Q3jVw8Ye2IG6cBrMcWj1j+7KpnzjWytPMXmnc3o92wtFypru5yuhwpOJMCih353JdZtPyutXesyi9cVQIoLvDuC6bjOJPikoJ1ech5xQUzhpNZf5PDKsW8vPrWCRMmTFwBoryR9/vNXwqs2+6fkVdcfP35ip/fTb37O4//5IEf/fDSceNzHxk79ru3zL76HFG6Baf6vlb6wR9fg5+FfYUQec4wGsoURcEa2CcbPzNeuPmKK0YtnT159uwXpizdeIExeekLU6bcP3ny0tmzZ99//+yi8z3nrY1farz1t+fhuM5PXvzkzDil1tQctvC/mKSN7968Y9J3ry+6cjMuO6Ndz+gCxvJV18++fs255xP8DyB4XR7bNYU+AAAAJXRFWHRkYXRlOmNyZWF0ZQAyMDExLTEyLTE0VDIwOjA5OjQ2LTA2OjAwJsbpGgAAACV0RVh0ZGF0ZTptb2RpZnkAMjAxMS0xMi0xNFQyMDowOTo0Ni0wNjowMFebUaYAAAAASUVORK5CYII="));
                    f.one(Xa, function () {
                        a.children(":not(.surprise)").slideUp(1E3);
                        f.animate({
                            "margin-top": 0
                        }, 200)
                    });
                    a.closest(va).append(f);
                    a.data("rewarded", !0)
                }
                a.data(kc, e);
                a.data("ts", (new Date).getTime())
            }
            else a.data(kc, null)
        }
        catch (g) {}
    };
    var Mf = 0;

    function Nf(a, b) {
        $.Bc(function () {
            var c = document.createElement("span");
            c.id = "comment-count-holder_" + b.id + Mf++;
            var d = b.commentCount;
            $(a).text("");
            a.appendChild(c);
            a.parentNode.style.display = "";
            a.parentNode.style.position = v;
            a.parentNode.style.left = "-10000px";
            var e = $(a).css("font-family");
            window.gapi.commentcount.render(c.id, {
                count_only: Jc
                , query: b.Dc
                , onclick: null
                , onready: function () {
                    c.style.verticalAlign = "text-top";
                    a.parentNode.style.position = "";
                    a.parentNode.style.left = ""
                }
                , preexisting_count: d
                , view_type: b.oe
                , "font-family": e
                , "font-size": $(a).css("font-size")
                , color: $.color($(a).css("color")).hex()
            })
        })
    };

    function Of(a, b, c) {
        this.o = a;
        this.na = $(b);
        this.ta = !1;
        this.settings = $.extend({}, {
            bloggerBase: Ca
        }, this.defaults, c);
        this.init()
    }
    Of.prototype.defaults = {};
    var Pf = document.URL;
    K = Of.prototype;
    K.init = function () {
        var a = this.na.find(Aa).length
            , b = this.na.attr("data-defer")
            , c = b == Jc || b == Qc;
        if (!M().settings.headless) {
            var d = R.decode(Pf);
            d.path == R.decode(this.o.url).path && ("manage" == d.param("google_view_type") && "FILTERED_PREMOD" == this.o.sc && (this.o.oe = "INBOX_NEWITEMS"), "gpluscomments" == d.fragment && (this.o.xg = !0));
            if (a)
                if (this.na.find(Aa).click($.proxy(this.Bb, this)), this.na.find(za).addClass(Hc).toggle(!1), !c) this.sa = setTimeout($.proxy(this.Bb, this), 0);
                else {
                    if (b == Qc) {
                        var e = this
                            , f = "viewitem." + this.o.id;
                        $(N.ui()).on(f, function (a, b) {
                            b.id == e.o.id && /\.*(\/\d{4}\/\d{2}\/[^\/]+)$/.test(R.decode().path) && (e.ta || e.Bb(), $(N.ui()).off(f))
                        })
                    }
                }
            else this.sa = setTimeout($.proxy(this.load, this), 0);
            return this
        }
    };
    K.Bb = function () {
        this.ta ? this.na.find(za).toggleClass(Hc).slideToggle() : (this.Qc = !0, this.load())
    };
    K.dispose = function () {
        clearTimeout(this.sa);
        this.na && $(this.na).unbind(".commentview");
        delete this.na;
        delete this.o
    };
    K.items = function () {
        return []
    };
    K.load = function () {
        this.ta || (this.ta = !0, this.render(), this.Qc && this.Bb())
    };
    K.render = function () {
        var a = "comment-holder_" + this.o.id
            , b = R.authority(window.location.href) + R.decode(this.o.url).path
            , c = this.o.Dc
            , d = this.settings.bloggerBase + "/moderate-legacy-comment.g?blogID=" + this.o.blogId
            , e = this.o.oe || this.o.sc
            , f = document.getElementById(a)
            , g = $.proxy(function () {
                this.o.xg && f.scrollIntoView();
                window.setTimeout($.proxy(this.Af, this), 1050)
            }, this);
        $.Bc(function () {
            window.setTimeout(function () {
                var f = $("#" + a).closest(".comment-styler").innerWidth();
                window.gapi.comments.render(a, {
                    first_party_property: "BLOGGER"
                    , href: b
                    , query: c
                    , legacy_comment_moderation_url: d
                    , view_type: e
                    , width: f
                    , onready: g
                })
            }, 1E3)
        })
    };
    K.Af = function () {
        if (document.createEventObject) {
            var a = document.createEventObject();
            document.documentElement.fireEvent("onresize", a)
        }
        else a = document.createEvent("HTMLEvents"), a.initEvent("resize", !0, !0), window.dispatchEvent(a)
    };

    function Qf() {}
    Qf.prototype.init = function (a, b) {
        this.i = a;
        this.j = b;
        if (this.i.A.settings.name != bb) return $(x).bind("click.selfselect", $.proxy(this.da, this)), this
    };
    Qf.prototype.dispose = function () {
        $(x).unbind(".selfselect");
        delete this.i;
        delete this.j
    };
    Qf.prototype.da = function (a) {
        var b = $(a.target).closest("a");
        if (!a.metaKey && b.length) {
            var c = R.decode(b.attr("href"));
            if (c && ke(c)) {
                var d = b.attr(gb);
                if (d && !this.i.settings.filter_permalink) return this.i.select(d, b.get(0)), a.preventDefault(), a.stopPropagation(), !1;
                a = b.attr("data-view-name");
                b = R.decode();
                a ? (b.param(Qc, c.param(Qc)), c = b) : (b.param(Sa) && 0 < b.param(Sa).length && c.param(Sa, b.param(Sa)), b.param(Qc) && c.param(Qc, b.param(Qc)));
                (c = c.encode()) && window.location.href != c && (window.location.href = c);
                return !1
            }
        }
    };

    function Rf() {
        this.ic = !1;
        this.C = {}
    }
    K = Rf.prototype;
    K.init = function (a, b) {
        this.i = a;
        this.j = b;
        $(this.i).bind("updated.search", $.proxy(this.kd, this));
        this.kd();
        return this
    };
    K.dispose = function () {
        $(this.i).unbind(".search");
        $(la).unbind(".search");
        delete this.i;
        delete this.j
    };
    K.kd = function () {
        this.ic || (this.F = $("input#search"), this.F.length && (this.F.on("keyup.search", $.proxy(this.Pf, this)), this.F.on("focus.search", $.proxy(this.Xf, this)), this.F.on("blur.search", $.proxy(this.Vf, this)), this.ic = !0));
        return this.ic
    };
    K.Pf = function (a) {
        if (13 == a.keyCode) Sf(this), a.preventDefault();
        else if (27 == a.keyCode) Tf(this), a.preventDefault();
        else if (38 == a.keyCode || 40 == a.keyCode) {
            if (this.aa) {
                var b = this.aa.find("li")
                    , c = b.index(this.aa.find("li.active"))
                    , c = 38 == a.keyCode ? 0 > c ? b.length - 1 : Math.max(0, c - 1) : 0 > c ? 0 : Math.min(b.length - 1, c + 1);
                b.removeClass(Pa).eq(c).addClass(Pa)
            }
            a.preventDefault()
        }
        else this.F.val() && this.F.val() != this.ee && Tf(this), clearTimeout(this.ug), this.ug = setTimeout($.proxy(this.ae, this), this.C[this.F.val()] ? 0 : 500)
    };
    K.Xf = function () {
        this.ae()
    };
    K.Vf = function () {
        var a = this;
        setTimeout(function () {
            Tf(a)
        }, 300)
    };

    function Sf(a) {
        var b = a.F.val();
        if (b) {
            if (a.aa) {
                var c = a.C[b]
                    , d = a.aa.find("li.active");
                if (d.length && d.attr(hb) && (c = $.grep(c.items(), function (a) {
                        return a.id == d.attr(hb)
                    })[0])) {
                    a.i.select(c);
                    return
                }
            }
            le(b)
        }
    }
    K.ae = function () {
        var a = this.F.val();
        if (a && 0 < a.length) {
            var b = this.C[a];
            b || (b = this.j.iterator(this.i.settings.blog_url, new je({
                query: a
                , Vb: "best"
            }), 7), this.C[a] = b);
            if (b) {
                b.reset();
                this.F.addClass(zc);
                var c = this;
                b.next(function (b) {
                    if (c.F.val() == a) {
                        c.ee = a;
                        var d = c.C[a]
                            , f = N.templates().template("QuickSearch");
                        f && (Tf(c), b = new P({
                            Posts: b
                        }), b.scope("SearchQuery", a), b.scope("SearchResultCount", $.valueOrDefault("resource().total", 0, d.m)), d = $(f.apply(b)), c.aa = d, d.appendTo(x), d.on("click.search", $.proxy(c.da, c)), $(window).on("scroll.search, resize.search", $.proxy(c.Td, c)), c.Td());
                        c.F.removeClass(zc)
                    }
                })
            }
        }
        else Tf(this)
    };
    K.Td = function () {
        if (this.aa) {
            var a = this
                , b = 0
                , c = 0 < $.grep(this.F.parents().andSelf(), function (c) {
                    if ($(c).css(mc) == Db) return b = c != a.F[0] ? parseInt($(c).css(H), 10) : b, !0
                }).length ? this.F.position() : this.F.offset()
                , d = this.aa.outerWidth();
            $(window).width();
            c = c.top + this.F.outerHeight() + b;
            d = this.F.offset().left + this.F.outerWidth() - d;
            this.aa.css({
                position: Db
                , top: c
                , left: d
            })
        }
    };

    function Tf(a) {
        a.F.removeClass(zc);
        a.aa && (delete a.ee, a.aa.remove(), delete a.aa, $(window).off(".search"))
    }
    K.da = function (a) {
        this.aa.find("li").removeClass(Pa);
        $(a.target).closest("li").addClass(Pa);
        Sf(this)
    };

    function Uf() {
        this.Kd = !1;
        this.sa = null;
        this.Sa = []
    }
    K = Uf.prototype;
    K.init = function (a) {
        this.i = a;
        if (this.i.settings.headless) return this;
        $(this.i).bind("updated.sharing", $.proxy(this.Za, this));
        $(window).bind("scroll.sharing", $.proxy(this.Ue, this));
        return this
    };
    K.dispose = function () {
        $(this.i).unbind(".sharing");
        $(window).unbind(".sharing");
        delete this.i
    };
    K.Za = function () {
        var a = this;
        this.Sa = [];
        $(".share-controls").each(function () {
            function b() {
                Vf(c);
                a.Sa.splice($.inArray(c, a.Sa), 1);
                a.Rc()
            }
            var c = $(this);
            c.data(nb) ? (c.one("mouseover", b), a.Sa.push(c)) : c.data("delay") && (c.children().andSelf().addClass("defer delay"), setTimeout(b, c.data("delay") || 0))
        });
        this.be()
    };

    function Vf(a) {
        a.find(".defer").andSelf().removeClass(nb)
    }
    K.Ue = function () {
        clearTimeout(this.sa);
        this.sa = setTimeout($.proxy(this.be, this), 300)
    };
    K.be = function () {
        Wf(this);
        this.Rc()
    };

    function Wf(a) {
        var b = {
            viewport: Xf()
        };
        a.Sa = $.grep(a.Sa, function (a) {
            return Yf(a, b) ? (Vf(a), !1) : !0
        })
    }

    function Yf(a, b) {
        var c = b && b.viewport || Xf()
            , d = Zf(a);
        if (b = b && b.buffer || 0) d.top -= b, d.right += b, d.bottom += b, d.left -= b;
        return d.top <= c.bottom && d.right >= c.left && d.bottom >= c.top && d.left <= c.right && !a.parents().andSelf().filter(function () {
            return "none" == $(this).css(wb) || "0" == $(this).css("opacity")
        }).length
    }

    function Xf() {
        var a = $(window);
        return {
            top: a.scrollTop()
            , right: a.scrollLeft() + a.width()
            , bottom: a.scrollTop() + a.height()
            , left: a.scrollLeft()
        }
    }

    function Zf(a) {
        var b = a.offset();
        return {
            top: b.top
            , right: b.left + a.width()
            , bottom: b.top + a.height()
            , left: b.left
        }
    }
    K.Rc = function () {
        $f(this);
        ag(this);
        bg(this);
        cg(this);
        if (dg(this)) {
            var a = $.valueOrDefault("gapi.platform.go");
            a && a(void 0, "profile")
        }
        eg();
        fg()
    };

    function dg(a) {
        var b = window.gapi;
        return b && b.plus && b.plusone && b.person && b.page && b.community ? !0 : (a.Kd || (a.Kd = !0, $.Bc($.proxy(a.Rc, a))), !1)
    }

    function ag(a) {
        var b = $(".g-follow").filter(function () {
            return !$(this).data(C)
        });
        if (b.length && dg(a)) {
            var c = window.gapi;
            b.each(function () {
                var a = $(this).attributes(!1, !0);
                $(this).data(C, !0);
                c.follow.render($(this).get(0), a)
            })
        }
    }

    function $f(a) {
        var b = window.gapi
            , c = $(".plus-followers").filter(function () {
                return !$(this).data(C)
            });
        c.length && dg(a) && c.each(function () {
            var a = $(this).attributes(!1, !0);
            $(this).data(C, !0);
            b.plus.render($(this).get(0), a)
        })
    }

    function bg(a) {
        var b = window.gapi
            , c = $(".plus-badge").filter(function () {
                return !$(this).data(C)
            });
        c.length && (c.each(function () {
            var a = $(this);
            a.attr(lb) || a.attr(lb, 300);
            a.attr("data-height") || a.attr("data-height", 131);
            a.attr("data-theme") || a.attr("data-theme", "light")
        }), dg(a) && c.each(function () {
            var a = $(this).attributes(!1, !0)
                , c = $(this).attr("class").match(/g-(\w*)/)[1];
            $(this).data(C, !0);
            "person" == c ? b.person.render($(this).get(0), a) : "page" == c ? b.page.render($(this).get(0), a) : "community" == c ? b.community.render($(this).get(0), a) : b.plus.render($(this).get(0), a)
        }))
    }

    function cg(a) {
        var b = window.gapi
            , c = $(".share-plusone").filter(function () {
                return !$(this).data(C) && !$(this).hasClass(nb)
            });
        c.length && (c.each(function () {
            var a = $(this);
            a.attr("data-size") || a.attr("data-size", "medium");
            a.attr(fb) || a.attr(fb, "bubble");
            a.attr(lb) || a.attr(lb, 300)
        }), dg(a) && c.each(function () {
            var a = $(this).attributes(!1, !0);
            $(this).data(C, !0);
            b.plusone.render($(this).get(0), a)
        }))
    }

    function eg() {
        $(".share-twitter").filter(function () {
            return !$(this).data(C) && !$(this).hasClass(nb)
        }).each(function () {
            $(this).data(C, !0);
            var a = $(document.createElement(Ub)).attr({
                allowtransparency: Jc
                , frameborder: "0"
                , scrolling: "no"
                , src: ["//platform.twitter.com/widgets/tweet_button.html?url=", encodeURIComponent($(this).data("url")), "&count=", $(this).data("count") || Rb, "&text=", encodeURIComponent($(this).data("text")), "&size=", $(this).data("size") || "medium"].join("")
            });
            $(this).append(a)
        })
    }

    function fg() {
        $(".share-facebook").filter(function () {
            return !$(this).data(C) && !$(this).hasClass(nb)
        }).each(function () {
            $(this).data(C, !0);
            var a = $(document.createElement(Ub)).attr({
                allowtransparency: Jc
                , frameborder: "0"
                , scrolling: "no"
                , src: ["//www.facebook.com/plugins/like.php?", $.param({
                    href: $(this).data("url")
                    , send: Ab
                    , layout: $(this).data("layout") || "button_count"
                    , action: "like"
                    , show_faces: Ab
                    , colorscheme: "light"
                })].join("")
            });
            $(this).append(a)
        })
    };

    function gg() {
        this.lb = "";
        this.Hd = new Date;
        this.mc = {}
    }
    K = gg.prototype;
    K.init = function (a) {
        this.i = a;
        $(document).bind("keypress.shortcuts", $.proxy(this.Zf, this));
        $(document).bind("keydown.shortcuts", $.proxy(this.Ve, this));
        return this
    };
    K.dispose = function () {
        $(document).unbind(".shortcuts");
        delete this.i
    };

    function hg(a) {
        return $.map(a, function (a) {
            return String.fromCharCode(a).toLowerCase()
        }).join("")
    }
    K.shortcut = function (a, b) {
        a = $.isArray(a) ? hg(a) : a;
        null === b ? delete this.mc[a] : this.mc[a] = b
    };
    K.Zf = function (a) {
        return ig(this, a)
    };
    K.Ve = function (a) {
        if (-1 !== $.inArray(a.which, [27, 37, 38, 39, 40])) return ig(this, a)
    };

    function ig(a, b) {
        if (/input|textarea|select|option|button/i.test(b.target.tagName)) return !0;
        var c = a.mc || {}
            , d = String.fromCharCode(b.which).toLowerCase()
            , e = new Date;
        a.lb = 1E3 > e - a.Hd ? a.lb + d : d;
        a.Hd = e;
        d = 0;
        for (e = a.lb.length; d < e; d++) {
            var f = a.lb.substr(d);
            if (c[f]) {
                a.lb = "";
                if ($.isFunction(c[f])) c[f]();
                else if (a.i[c[f]]) a.i[c[f]]();
                else a.i.notify(c[f]);
                b.preventDefault();
                return !1
            }
            for (var g in c)
                if (0 == g.indexOf(f)) return
        }
    };

    function jg(a, b, c) {
        this.o = a;
        this.J = $(b);
        this.Zd = void 0;
        this.settings = $.extend({}, {
            bloggerBase: Ca
            , pageSize: 50
            , loadAfter: 2E3
            , maxDepth: 1
            , messages: {}
        }, this.defaults, c);
        this.o.comments = null;
        this.Db = !1;
        this.oa = N.data().commentIterator(this.o, this.settings.pageSize);
        this.init()
    }
    jg.prototype.defaults = {};
    var kg = document.URL
        , lg = /^comment-form_/
        , mg = /^c\d+$/;
    K = jg.prototype;
    K.init = function () {
        var a = this.o.comments ? 0 : this.settings.loadAfter || 0
            , b = this.J.find(Aa).length
            , c = this.J.attr("data-defer")
            , d = c == Jc || c == Qc
            , e = R.decode(kg);
        e.path == R.decode(this.o.url).path && e.fragment && (lg.test(e.fragment) || mg.test(e.fragment)) && (d = !1, this.Db = !0);
        M().settings.headless && (d = !1);
        b && this.J.find(Aa).click($.proxy(this.Eb, this));
        if (b)
            if (this.J.find(za).addClass(Hc).toggle(!1), !d) this.sa = setTimeout($.proxy(this.Eb, this), a);
            else {
                if (c == Qc) {
                    var f = this
                        , g = "viewitem." + this.o.id;
                    $(N.ui()).on(g, function (a, b) {
                        b.id == f.o.id && /\.*(\/\d{4}\/\d{2}\/[^\/]+)$/.test(R.decode().path) && (f.ta || f.Eb(), $(N.ui()).off(g))
                    })
                }
            }
        else this.sa = setTimeout($.proxy(this.load, this), a);
        return this
    };
    K.Eb = function () {
        this.ta ? this.J.find(za).toggleClass(Hc).slideToggle() : (this.Qc = !0, this.load())
    };
    K.dispose = function () {
        clearTimeout(this.sa);
        this.J && $(this.J).unbind(".commentview");
        this.oa.dispose();
        delete this.J;
        delete this.o
    };
    K.items = function () {
        return this.oa.items()
    };
    K.load = function (a) {
        this.ta || (this.o.comments ? this.md(this.o.comments) : this.oa.waiting() && !1 !== a || !this.oa.hasNext() || (ng(this, !0), this.oa.next($.proxy(this.md, this))))
    };
    K.md = function (a) {
        ng(this, !1);
        this.ta = !0;
        this.o.comments = a || [];
        this.render(a);
        this.Qc && this.Eb();
        if (this.Db && !this.J.closest(".no-autoscroll").length) {
            var b = this;
            setTimeout(function () {
                var a = b.Db ? b.J.find(".comments-replybox, .comment-replybox-thread") : b.J;
                a.length && a[0].scrollIntoView && a[0].scrollIntoView(!0)
            }, this.Db ? 250 : 0)
        }
        this.o.commentCount <= this.settings.pageSize && this.J.find(".loadmore").hide()
    };

    function ng(a, b) {
        void 0 !== b && a.J.toggleClass("loading", b)
    }
    K.render = function (a) {
        if (a) {
            og(this);
            var b = this
                , c = this.o.commentCount - b.settings.pageSize
                , d = (window.location.hash || "#").substring(1)
                , e, f;
            lg.test(d) ? e = d.substring(14) : mg.test(d) && (f = d.substring(1));
            var d = {
                    maxDepth: this.settings.maxDepth
                }
                , g = {
                    id: this.o.id
                    , data: a
                    , loadNext: function (a) {
                        b.oa.hasNext() ? b.oa.next(function (d) {
                            ng(b, !1);
                            d ? ($.merge(b.o.comments, d), a(d)) : a(null);
                            b.settings.pageSize >= c ? b.J.find(".loadmore").hide() : c -= b.settings.pageSize
                        }) : a(null)
                    }
                    , hasMore: function () {
                        return b.oa.hasNext()
                    }
                    , getMeta: $.proxy(this.Ef, this)
                    , onReply: $.proxy(this.dg, this)
                    , initComment: f
                    , initReplyThread: e
                    , config: d
                    , messages: this.settings.messages
                }
                , l = $(this.J).find(".comments-content")[0];
            window.goog && window.goog.comments && window.goog.comments.render ? window.goog.comments.render(l, g) : (window.goog = window.goog || {}, window.goog.comments = window.goog.comments || {}, window.goog.comments.Jd = window.goog.comments.Jd || [], window.goog.comments.Jd.push(function () {
                window.goog.comments.render(l, g)
            }))
        }
    };

    function og(a) {
        if (!a.ac) {
            var b = a.J.find(".comments-replybox");
            0 < b.length && !b.attr(D) && b.attr(A) && (a.ac = b[0], a.Xe = b.attr(A), b.attr(D, b.attr(A)))
        }
    }
    K.dg = function (a, b) {
        this.ac && a !== this.Zd && (document.getElementById(b).insertBefore(this.ac, null), this.ac.src = this.Xe + (a ? "&parentID=" + a : ""), this.Zd = a)
    };
    K.Ef = function (a, b) {
        return "iswriter" === a ? (a = this.o, b = b && b.author ? b.author.profileUrl : null, b == (a && a.author ? a.author.profileUrl : null) && null != b ? Jc : Ab) : "deletelink" === a ? this.settings.bloggerBase + "/delete-comment.g?blogID=" + this.o.blogId + "&postID=" + b.id : "deleteclass" === a ? "item-control blog-admin " + (b.extensions["blogger.itemClass"] || "") : null
    };

    function pg() {}
    pg.Bd = 1E3;
    K = pg.prototype;
    K.init = function (a, b) {
        this.i = a;
        this.j = b;
        this.i.settings.headless && delete pg.Bd;
        a = $.proxy(this.Ze, this);
        $(this.i).bind("select.viewitem", a);
        $(this.i).bind("fetch.viewitem", {
            Kf: !0
        }, a);
        $(this.i).bind("viewitem-show.viewitem", {
            force: !0
        }, a);
        $(this.i).bind("clearselection.viewitem", $.proxy(this.Ye, this));
        return this
    };
    K.dispose = function () {
        $(x).removeClass(Rc);
        $(this.i).unbind(".viewitem");
        delete this.i;
        delete this.j
    };
    K.Ze = function (a, b) {
        var c = !(!a.data || !a.data.Kf)
            , d = !(!a.data || !a.data.force);
        if (c || !b.compareTo || 0 != b.compareTo(this.od))
            if (a = 0 == $(Ba).length && !c, this.qc(), d || !(0 <= $.inArray(b, this.j.items())) || this.i.settings.headless) {
                var d = c ? V.translate({
                        Placeholder: !0
                    }) : V.translate(b)
                    , e = $($.trim(Q().template("ViewItem").apply(d))).not(":text");
                e.find(".viewitem-inner").scrollLimit();
                e.find(".close").bind(Xa, $.proxy(this.qc, this));
                $(x).addClass(Rc).prepend(e.toggleClass("new", a));
                a && setTimeout(function () {
                    e.removeClass("new")
                }, 1);
                if ((d = R.decode().fragment) && R.isSamePage(b.url, !0)) {
                    if (!/^[a-zA-Z][\w:.-]*$/.test(d)) return;
                    var f = e.find("[id=" + d + "],[name=" + d + "]").first();
                    f.length && setTimeout(function () {
                        f[0].scrollIntoView()
                    }, a ? 1E3 : 1)
                }
                c || (this.i.notify("viewitem", b, e), this.i.updated(), this.od = b);
                var g = $.proxy(this.i.clearSelection, this.i);
                $(window).bind("click.viewitem", function (a) {
                    $(a.target).parents().andSelf().filter(Ba).length || g()
                })
            }
    };
    K.qc = function () {
        $(x).removeClass(Rc);
        delete this.od;
        $(Ba).each(function () {
            if (!$(this).hasClass(Ya)) {
                $(this).addClass(Ya);
                var a = this;
                setTimeout(function () {
                    $(a).remove()
                }, pg.Bd || 0)
            }
        });
        $(window).unbind(".viewitem")
    };
    K.Ye = function () {
        this.qc()
    };

    function qg(a) {
        this.enabled = !0;
        this.isReady = !1;
        this.suffix_ = a || "1";
        this.settings_ = {};
        this.renderInLightbox = !1;
        this.showInGadgetDock = !0
    }
    K = qg.prototype;
    K.invoke = J("enabled");
    K.show = function () {
        $(this).triggerHandler("show");
        this.onShow()
    };
    K.hide = function () {
        $(this).triggerHandler("hide");
        this.onHide()
    };
    K.init = function (a) {
        this.ui = a;
        this.ready_()
    };
    K.ready_ = function () {
        this.isReady = !0;
        $(this).trigger("ready")
    };
    K.extractGadgetSettings_ = function (a) {
        return (a = a.match(/_WidgetManager\._HandleControllerResult\(.*?,.*?,\{(.*)\}\);/)) ? eval("(function(){ return{" + a[1] + "}; })()") : null
    };
    K.render = function (a) {
        this.isReady && this.enabled && ($(this).triggerHandler("render", a), $(a).append(this.getContentHtml()), this.ui.updated && this.ui.updated(), $(this).triggerHandler(uc, a), this.onRenderComplete(a))
    };
    K.template = function (a, b) {
        a = Q().template(a);
        b = b && new P(b);
        return a ? $.trim(a.apply(b)) : ""
    };
    K.getTitle = Vc("");
    K.getIconUrl = Vc("");
    K.getIconSelectedUrl = Vc("");
    K.getContentHtml = Vc("");
    K.onRenderComplete = I();
    K.onShow = I();
    K.onHide = I();
    K.requestData = function (a, b) {
        var c = a.settings.widget_settings[b];
        if (c) this.processSettings(c);
        else if ((a = a.resources()) && 0 < a.length && a[0] && a[0].baseUrl) b = {
            url: a[0].baseUrl
            , data: {
                v: "0"
                , action: "initial"
                , widgetId: b
                , responseType: "js"
            }
            , dataType: "text"
            , success: $.proxy(this.onSuccess_, this)
            , error: $.proxy(this.onError_, this)
        }, window.__wavt && (b.data.xssi_token = window.__wavt), $.ajax(b);
        else this.onError_()
    };
    K.onSuccess_ = function (a) {
        if (a = this.extractGadgetSettings_(a)) this.processSettings(a);
        else this.onError_()
    };
    K.onError_ = function () {
        this.enabled = !1;
        this.ready_()
    };
    K.processSettings = function (a) {
        this.settings_ = a;
        this.ready_()
    };

    function Y(a, b, c) {
        this.data = b || W();
        this.ui = c || M();
        this.settings = $.extend({}, {
            name: Qc
            , scrollBuffer: 400
            , pageSize: 25
            , infiniteScroll: !0
            , autoselect: !0
        }, this.defaults, a);
        this.Vc = [];
        this.Od = !1;
        this.async(this.mg)
    }
    K = Y.prototype;
    K.defaults = {};
    K.shortcuts = [{
        chord: "j"
        , action: "next"
    }, {
        chord: "k"
        , action: "previous"
    }, {
        chord: ":t"
        , action: "templates"
    }, {
        chord: [37]
        , action: "previous"
    }, {
        chord: [39]
        , action: "next"
    }, {
        chord: [27]
        , action: "clearSelection"
    }, {
        chord: [38, 38, 40, 40, 37, 39, 37, 39, 98, 97]
        , action: "konami"
    }];
    K.modules = [];
    K.Wd = !1;
    K.dispose = function () {
        rg(this)
    };
    K.nameEvent = function (a) {
        return this.settings.name ? a + "." + this.settings.name : a
    };
    K.bind = function (a, b, c, d) {
        b = this.nameEvent(b);
        if (d) $(a).on(b, d, c);
        else $(a).on(b, c)
    };
    K.async = function (a, b) {
        var c = Array.prototype.slice.call(arguments)
            , d = c.shift();
        if ($.isFunction(d)) {
            var e = this;
            setTimeout(function () {
                d.apply(e, c)
            }, 0)
        }
    };
    K.template = function (a, b) {
        return (a = Q().template(a)) ? $.trim(a.apply(this.templateData(b)) || "") : ""
    };
    K.templateData = function (a) {
        a = "undefined" !== typeof a ? V.translate(a) : V.context();
        this.scope(a);
        return a
    };
    K.scope = I();
    K.onItemClick = function (a) {
        var b = $(a.target)
            , b = b.hasClass("item") ? b : b.parents(".item")
            , c = b.attr(gb);
        if (c && !a.metaKey && !($(a.target).is("a") && R.decode($(a.target).attr("href")).authority && R.isCrossDomain($(a.target).attr("href")) && $(a.target).parents().andSelf().filter(".title").length)) return a.stopPropagation(), a.preventDefault(), this.ui.select(c, b), !1
    };
    K.preventMore = function (a) {
        "undefined" !== typeof a && (this.Wd = !!a);
        return this.Wd
    };
    K.maybeMore = function (a) {
        this.preventMore() || this.ui.settings.headless || (a || this.settings.infiniteScroll && this.needMore()) && this.async(this.Ud)
    };
    K.needMore = function () {
        var a = !1;
        if (!this.data.hasNext()) return !1;
        var b = this.settings.infiniteScroll;
        0 <= $.inArray(b, [Oc, Jc, "on", !0]) ? b = Oc : b == Rb ? b = Rb : 0 <= $.inArray(b, [Ab, "off", !1]) && (b = "off");
        if (b && "off" != b) {
            if (b == Oc) b = $(document).height() - $(window).height() - $(window).scrollTop(), a = this.settings.scrollBuffer >= b;
            else if (b == Rb) b = $(document).width() - $(window).width() - $(window).scrollLeft(), a = this.settings.scrollBuffer >= b;
            else {
                var c = $(b);
                if (c.length) {
                    var b = $(window).scrollTop()
                        , d = $(window).scrollLeft() + $(window).width()
                        , e = $(window).scrollTop() + $(window).height()
                        , f = $(window).scrollLeft()
                        , g = c.offset();
                    if (g) var a = g.top
                        , l = g.left + c.width()
                        , c = g.top + c.height()
                        , g = g.left
                        , a = a <= e && l >= f && c >= b && g <= d
                }
            }
            a || (b = this.ui.current()) && $.inArray(b, this.data.items()) == this.data.items().length - 1 && (a = !0)
        }
        return a
    };
    K.mg = function () {
        if (this.modules)
            for (var a = 0, b; b = this.modules[a]; a++) this.ui.settings.modules.push(b);
        this.ui.configure().view(this);
        $(this).triggerHandler("preinit");
        this.onPreInit();
        this.async(this.T);
        if (this.shortcuts)
            for (a = 0; b = this.shortcuts[a]; a++) this.ui.shortcut(b.chord, b.action)
    };
    K.T = function () {
        $(x).addClass(this.settings.name);
        $.support.touch ? $(x).addClass("touch") : $(x).addClass("notouch");
        this.bind(window, yc, $.proxy(this.we, this));
        this.bind(window, "resize", $.proxy(this.ve, this));
        this.settings.autoselect && this.bind(x, Xa, $.proxy(this.onItemClick, this), ".item");
        var a = $.proxy(this.ue, this);
        this.bind(this.data, fc, function (b, c) {
            a(c)
        });
        this.bind(this.ui, "select", $.proxy(this.xe, this));
        this.bind(this.ui, Wa, $.proxy(this.pc, this));
        this.bind(this.ui, Cb, $.proxy(this.te, this));
        this.bind(this.ui, "clearfilter", $.proxy(this.lf, this));
        $(this).triggerHandler("init");
        this.onInit();
        this.async(this.Hf)
    };
    K.Hf = function () {
        $(this).triggerHandler("initcomplete");
        this.onInitComplete();
        this.async(this.Ud)
    };
    K.Ud = function () {
        !this.data.waiting() && this.data.hasNext() && !1 !== this.onPreLoad() && ($(this).triggerHandler("preload"), this.async(this.Jf))
    };
    K.Jf = function () {
        !1 !== this.onLoad() && ($(this).triggerHandler("load"), $(x).addClass("loading"), this.data.next(parseInt(this.settings.pageSize, 10) || 1))
    };
    K.ue = function (a) {
        $(x).removeClass("loading");
        $(this).triggerHandler(fc, [a]);
        this.onLoadComplete(a);
        this.async(this.ng, a)
    };
    K.ng = function (a) {
        this.ui.settings.headless && /\.*(?:(\/\d{4}\/\d{2}\/[^\/]+)|\/p(\/[^\/]+\.html))$/.test(R.decode().path) || (!1 !== this.onPreRender(a) ? ($(this).triggerHandler(qc, [a]), this.async(this.rg, a)) : (this.async(this.Wc, a), this.ui.updated()))
    };
    K.rg = function (a) {
        $(this).triggerHandler("render", [a]);
        this.onRender(a);
        this.async(this.Wc)
    };
    K.Wc = function (a) {
        this.ui.updated();
        $(this).triggerHandler(uc, [a]);
        this.onRenderComplete(a);
        this.Od || this.data.hasNext() || (this.Od = !0, this.async(this.uf));
        this.async(this.maybeMore)
    };
    K.uf = function () {
        $(this).triggerHandler("datacomplete");
        this.onDataComplete()
    };

    function rg(a) {
        if (!1 !== a.onUnload()) {
            $(a).triggerHandler("unload");
            if (a.settings && a.settings.name) {
                $(x).removeClass(a.settings.name);
                var b = "." + a.settings.name;
                $.each(a.Vc, function (a, d) {
                    $(d).off(b)
                });
                delete a.Vc
            }
            delete a.ui;
            delete a.data;
            delete a.settings
        }
    }
    K.ve = function (a) {
        this.onResize(a);
        this.maybeMore()
    };
    K.we = function (a) {
        this.onScroll(a);
        this.maybeMore()
    };
    K.xe = function (a, b) {
        if (!this.ui.settings.headless || this.settings.name == bb) this.onSelect(b)
    };
    K.pc = function () {
        this.onClearSelection()
    };
    K.te = function (a, b, c) {
        this.onFilter(b, c)
    };
    K.lf = function () {
        this.onClearFilter()
    };
    K.ka = I();
    K.Uf = I();
    K.Ub = I();
    K.Nd = I();
    K.onPreInit = Y.prototype.ka;
    K.onInit = Y.prototype.ka;
    K.onInitComplete = Y.prototype.ka;
    K.onPreLoad = Y.prototype.ka;
    K.onLoad = Y.prototype.ka;
    K.onLoadComplete = Y.prototype.Ub;
    K.onPreRender = Y.prototype.Ub;
    K.onRender = Y.prototype.Ub;
    K.onRenderComplete = Y.prototype.Ub;
    K.onDataComplete = Y.prototype.ka;
    K.onUnload = Y.prototype.ka;
    K.onResize = Y.prototype.Nd;
    K.onScroll = Y.prototype.Nd;
    K.onSelect = Y.prototype.Uf;
    K.onClearSelection = Y.prototype.ka;
    K.onFilter = I();
    K.onClearFilter = Y.prototype.ka;

    function sg(a) {
        this.settings = {};
        this.configure(a);
        this.Yc = []
    }
    var tg;

    function W() {
        tg || (tg = new sg);
        return tg
    }
    var ug = [];
    sg.prototype.notify = function (a, b) {
        var c = Array.prototype.slice.call(arguments)
            , d = c.shift()
            , e = this;
        setTimeout(function () {
            $(e).triggerHandler(d, c)
        }, 0);
        return this
    };
    sg.prototype.configure = function (a) {
        this.settings = $.extend({}, vg, this.settings, a);
        return this
    };
    var vg = {
        batchSize: 25
    };
    K = sg.prototype;
    K.open = function (a, b, c) {
        var d = a
            , e = b
            , f = c || this.settings.batchSize;
        arguments.length || (d = R.decode().root(), e = ie());
        var g;
        if ($.isArray(d)) {
            var l = this;
            g = new Be(this.settings.batchSize, $.map(d, function (a) {
                return l.iterator(a, e)
            }))
        }
        else g = this.iterator(d, e);
        this.L = new Ge(g, f);
        this.Gb = new wg(d);
        return this.L
    };
    K.items = function () {
        return this.L ? this.L.items() : []
    };
    K.resources = function () {
        return this.L ? this.L.resources() : []
    };
    K.waiting = function () {
        return this.L ? this.L.waiting() : !1
    };
    K.hasNext = function () {
        return this.L ? this.L.hasNext() : !1
    };
    K.next = function (a, b) {
        if (this.L) {
            var c, d = 0;
            a && ($.isFunction(a) ? c = a : d = parseInt(a, 10));
            b && ($.isFunction(b) ? c = b : d = parseInt(b, 10));
            !isNaN(d) && 0 < d && this.L instanceof Ge && this.L.pageSize(d);
            this.H = c;
            this.L.next($.proxy(this.De, this))
        }
    };
    K.reset = function () {
        this.L && this.L.reset()
    };
    K.De = function (a) {
        this.notify(fc, a);
        this.H && (this.H(a), delete this.H)
    };
    K.find = function (a) {
        if (a) {
            var b = /\./.test(a);
            b && (a = R.decode(a).encode(!1, !1));
            var c = function (c) {
                return a == (b ? c.url : c.id)
            };
            if ((c = $.grep(this.items(), c).concat($.grep(this.Yc, c))) && 0 < c.length) return c[0]
        }
    };
    K.iterator = function (a, b, c) {
        for (var d = 0, e; e = ug[d]; d++)
            if (e.owns(a)) return e.iterator(a, b, c);
        if (xg && xg.owns(a)) return xg.iterator(a, b, c)
    };
    K.post = function (a, b) {
        var c;
        if (c = this.Gb) {
            c = this.Gb;
            b = $.proxy(this.Ad, this, b);
            var d;
            d = [c.ne, "/feeds/posts/default"].join("");
            var e = {
                alt: Zb
                , v: 2
                , dynamicviews: 1
            };
            if (/^\d+$/.test(a)) d += "/" + a;
            else {
                var f = yg(a);
                "/" != f && (e.path = f)
            }
            R.decode().scheme == Sb && (e.rewriteforssl = !0);
            d = {
                type: "GET"
                , url: d + "?" + $.param(e)
            };
            c = zg(c, a, "item", d, b)
        }
        return !!c
    };
    K.page = function (a, b) {
        var c;
        if (c = this.Gb) {
            c = this.Gb;
            b = $.proxy(this.Ad, this, b);
            var d = Ag(c, a);
            if (d) b && b(d), c = !1;
            else {
                var d = [c.ne, "/feeds/pages/default"].join("")
                    , e = {
                        alt: Zb
                        , v: 2
                        , dynamicviews: 1
                    };
                R.decode().scheme == Sb && (e.rewriteforssl = !0);
                /^\d+$/.test(a) && (d += "/" + a);
                d = {
                    type: "GET"
                    , url: d + "?" + $.param(e)
                };
                c = zg(c, a, Dc, d, b)
            }
        }
        return !!c
    };
    K.Ad = function (a, b) {
        b && this.Yc.push(b);
        a(b)
    };
    K.commentIterator = function (a, b) {
        return new Bg(new ve(a), b || this.settings.batchSize)
    };

    function Cg(a) {
        this.Ja = [];
        this.zc = [];
        this.C = {};
        this.wg = (new gg).init(this);
        this.configure(a)
    }
    var Dg, Eg = {
        modules: [Je, Ke, Le, Pe, Xe, Ze, kf, mf, of, rf, zf, Rf, Qf, Uf]
        , showWelcome: !0
        , enableGadgets: !0
    };

    function M() {
        Dg || (Dg = new Cg, Dg.j = W());
        return Dg
    }
    K = Cg.prototype;
    K.dispose = function () {
        this.removeModules();
        $(this).unbind();
        return this
    };

    function Fg(a, b) {
        a.$b ? a.$b.push(b) : (a.$b = [b], a.je = setInterval($.proxy(a.kf, a), 100))
    }
    K.kf = function () {
        (new Pd).get().ready && (clearInterval(this.je), $.each(this.$b, function (a, b) {
            b()
        }), delete this.$b, delete this.je)
    };
    K.configure = function (a) {
        var b = (new Pd(a)).get();
        b.ready || Fg(this, $.proxy(this.configure, this, a));
        this.settings = $.extend({}, Eg, this.settings, b);
        this.j && this.j.configure(this.settings);
        return this
    };
    K.cache = function (a, b) {
        if (void 0 !== b) return this.C = this.C || {}, this.C[a] = b, this;
        if (this.C) return this.C[a]
    };
    K.shortcut = function (a, b) {
        this.wg.shortcut(a, b)
    };
    K.addModule = function (a, b) {
        if (a) {
            for (var c = 0, d; d = this.Ja[c]; c++)
                if (a.constructor === d.constructor)
                    if (b) {
                        this.removeModule(d);
                        break
                    }
                    else return this;
            this.Ja.push(a);
            a.init && a.init(this, this.j, this.A)
        }
        return this
    };
    K.removeModules = function () {
        $.each(this.Ja, function (a, b) {
            b && b.dispose && b.dispose()
        });
        this.Ja = []
    };
    K.removeModule = function (a) {
        a && (a.dispose && a.dispose(), this.Ja = $.grep(this.Ja, function (b) {
            return b === a
        }, !0));
        return this
    };

    function Gg(a, b) {
        a.zc = [];
        var c = a.settings.widget_ids || []
            , c = c.concat(b || []);
        b = 0;
        for (var d = c.length; b < d; b++) {
            var e = N.gadgets().create(c[b]);
            if (e) {
                var f = a;
                f.settings.enableGadgets && e && (f.zc.push(e), e.init && e.init(f, f.j, f.A))
            }
        }
    }
    K.gadgets = J("zc");
    K.register = function (a, b) {
        !1 === b || a.prototype instanceof Y || (a.prototype = $.extend({}, Y.prototype, a.prototype));
        this.viewType_ = a;
        return this
    };
    K.localize = function (a, b) {
        if (a = N.l10n && N.l10n[a] || a) {
            var c = b instanceof P ? b : new P(b || "");
            a = a.replace(/{\w+}/g, function (a) {
                return (new nd).init(a).apply(c)
            })
        }
        return a
    };
    K.view = function (a, b) {
        if (!(this.settings && this.settings.ready || (new Pd).get().ready)) return Fg(this, $.proxy(this.view, this, a, b)), this;
        var c, d, e = this;
        a && (typeof a === G || $.isArray(a) ? d = a : c = a);
        b && (typeof b === G || $.isArray(a) ? d = b : c = b);
        d = d || this.settings.blog_url || R.decode().root();
        if (!c && d) {
            this.A && this.A.dispose();
            if (!Hg(this)) return;
            this.j.open(d, ie());
            this.j.next(function () {
                e.j.reset();
                e.A = new e.viewType_
            })
        }
        else c && (this.A = c, this.j = this.A.data, this.Ja.length || $.each(this.settings.modules, function (a, b) {
            e.addModule(new b)
        }));
        this.settings.enableGadgets && Gg(this, 0 == this.gadgets().length ? ["Subscribe"] : []);
        this.C = {};
        this.ea = -1;
        delete this.lc;
        return this
    };

    function Hg(a) {
        if (a.settings.error) {
            var b = Q().template("ErrorMessage");
            b && ($(x).children().not(xa).remove(), $(x).append(b.apply(V.translate(a.settings.error))))
        }
        else {
            if ($("#injected-iframe").length) return a.ui.settings.headless;
            a.settings.showWelcome && (b = Q().template("Welcome")) && ($(x).children().not(xa).remove(), $(x).append(b.apply(V.context())));
            return !0
        }
    }
    K.current = function () {
        if (0 <= this.ea && this.ea < this.j.items().length) return this.j.items()[this.ea];
        if (this.lc) return this.lc
    };
    K.hasPrevious = function () {
        return 0 < this.j.items().length && 0 < this.ea
    };
    K.hasNext = function () {
        var a = this.j.items().length;
        return 0 < a && (this.ea < a.length - 1 || this.j.hasNext())
    };
    K.next = function () {
        var a = this.Ya();
        if (-1 != a) return a < this.j.items().length ? this.select(this.j.items()[this.ea = a]) : this.j.hasNext() && !this.j.waiting() && this.A.maybeMore(!0), this
    };
    K.Ya = function () {
        var a = this.cache(Ma);
        if (a) {
            var b = $.inArray(this.current(), a);
            return $.inArray(a[Math.min(a.length - 1, b + 1)], this.j.items())
        }
        return this.ea + 1
    };
    K.previous = function () {
        var a = this.Mc();
        0 <= a && a < this.j.items().length && this.select(this.j.items()[this.ea = a]);
        return this
    };
    K.Mc = function () {
        var a = this.cache(Ma);
        if (a) {
            var b = $.inArray(this.current(), a);
            return $.inArray(a[Math.max(0, b - 1)], this.j.items())
        }
        return Math.max(0, this.ea - 1)
    };
    K.select = function (a, b) {
        var c = this.settings.pageType;
        if (void 0 === a)
            if (this.settings.preview) a = this.settings.preview;
            else if (c == Dc || "item" == c) this.settings.permalinked = !0, this.settings.pageId ? a = this.settings.pageId : this.settings.postId && (a = this.settings.postId);
        if (void 0 === a) {
            var d = this.j.resources().length && this.j.resources()[0].url;
            d && !R.isSamePage(d) && (d = R.decode(), "/" != d.path && (a = d.encode(!1, !1), this.settings.permalinked = !0))
        }
        var e;
        "number" == typeof a || typeof a == G ? e = this.find(a) : a && (e = a);
        if (e) Ig(this, e, b);
        else if (a && !1 !== b) {
            b && (b = $(b)) && b.attr(ib) && (c = "page" == b.attr(ib) ? Dc : "item");
            var f = this;
            b = function (a) {
                a && Ig(f, f.find(a.id) || a)
            };
            c == Dc ? this.j.page(a, b) : this.j.post(a, b)
        }
        return this
    };

    function Ig(a, b, c) {
        var d = $.inArray(b, a.j.items());
        a.ea = 0 <= d ? d : a.ea;
        a.lc = 0 <= d ? void 0 : b;
        !1 !== c && a.notify("select", b, c)
    }
    K.clearSelection = function () {
        this.settings.permalinked = !1;
        return this.notify(Wa)
    };
    K.find = function (a) {
        return this.j.find(a)
    };
    K.filter = function (a, b) {
        a && this.cache(Ma, a).notify(Cb, a, b);
        return this
    };
    K.clearFilter = function () {
        return this.cache(Ma, null).notify("clearfilter", this.j.items())
    };
    K.updated = function () {
        return this.notify("updated", this.j.items())
    };
    K.notify = function (a, b) {
        var c = Array.prototype.slice.call(arguments)
            , d = c.shift()
            , e = this;
        setTimeout(function () {
            $(e).triggerHandler(d, c)
        }, 0);
        return this
    };
    K.escapeHTML = function (a) {
        return a && a.replace(/&/g, "&amp;").replace(/>/g, "&gt;").replace(/</g, "&lt;").replace(/'/g, "&#39;").replace(/`/g, "&#96;").replace(/"/g, "&quot;") || ""
    };

    function wg(a) {
        this.ne = a;
        this.fb = []
    }

    function zg(a, b, c, d, e) {
        if (d) {
            var f = 0 < $.grep(a.fb, function (a) {
                return a.identifier == b
            }).length;
            a.fb.push({
                ha: e
                , identifier: b
            });
            if (f) return !0;
            d.context = {
                self: a
                , identifier: b
                , pageType: c
            };
            d.dataType = R.isCrossDomain(d.url) ? "jsonp" : Zb;
            d.success = a.ze;
            d.error = $.proxy(a.ye, a);
            W().notify("fetchstart", d.identifier);
            $.ajax(d);
            return !0
        }
        if (e) return e(null), !1
    }
    wg.prototype.list = function (a) {
        if (this.nc) a && a(this.nc);
        else {
            var b = this;
            $.ajax({
                type: "GET"
                , url: "//www.blogger.com/feeds/default/blogs?v=2&alt=json"
                , dataType: "jsonp"
                , success: function (c) {
                    b.nc = Jg(c);
                    a && a(b.nc)
                }
                , error: function () {
                    a && a(null)
                }
            })
        }
    };
    wg.prototype.ze = function (a) {
        this.self && this.identifier && (W().notify(Bb, this.identifier), this.self.og.call(this.self, a, this.identifier, this.pageType))
    };
    wg.prototype.ye = function () {
        $(this).trigger("error")
    };
    wg.prototype.og = function (a, b, c) {
        c == Dc ? a && a.entry ? a = Kg(a.entry) : (a && a.feed && (this.Rd = (a = Lg(a)) && a.items), a = Ag(this, b)) : a = a && a.entry ? Kg(a.entry) : a && a.feed && 1 == a.feed.entry.length ? Lg(a).items[0] : void 0;
        if (a) {
            c = this.fb;
            this.fb = [];
            for (var d = 0, e; e = c[d]; d++) e.identifier == b ? e.ha(a) : this.fb.push(e)
        }
    };

    function Ag(a, b) {
        if (a.Rd) return (a = $.grep(a.Rd, function (a) {
            if (/^\d+$/.test(b)) return a.id == b;
            var c = yg(b);
            a = yg(a.url);
            return c == a
        })) && a[0]
    }

    function yg(a) {
        var b = W().settings.blog_url;
        if (0 == a.indexOf(b)) return a = a.replace(b, ""), "/" == b[b.length - 1] && (a = "/" + a), a;
        b = R.decode(a).root();
        return a.replace(b, "")
    };

    function Mg() {
        this.T()
    }
    var Ng = {
        blogger_base: "https://www.blogger.com"
    };
    Mg.prototype.owns = function (a) {
        a = new S(a);
        return a.scheme && "http" != a.scheme && a.scheme != Sb ? !1 : !0
    };
    Mg.prototype.iterator = function (a, b, c) {
        Og();
        c = c || W().settings.batchSize;
        return new Pg(new ve(new te(a, b)), c)
    };
    Mg.prototype.T = function () {
        Og();
        Q().converter(Qd, this.td);
        Q().converter(Fe, this.td)
    };
    Mg.prototype.td = function (a, b) {
        a.Ba || (a.Ba = a.data());
        b.scope(a instanceof Fe ? "Page" : "Post", a.Ba);
        return a.Ba
    };

    function Og() {
        for (var a in Ng) W().settings[a] || (W().settings[a] = Ng[a])
    }
    var xg = new Mg;

    function Bg(a, b) {
        re.call(this, a, b || 50)
    }
    Bg.prototype = $.extend({}, re.prototype, Bg.prototype);
    Bg.prototype.Nb = function () {
        var a = W().settings
            , b = [a["private"] || R.decode().scheme == Sb ? a.blogger_base + "/feeds/" + a.blog_id + "/" : a.blog_url + "feeds/", this.m.resource().id, "/comments/default"].join("")
            , c = {
                alt: Zb
                , v: 2
                , dynamicviews: 1
                , orderby: rc
                , reverse: Ab
                , "max-results": this.pageSize
            };
        3 == a.feeds_api && (c.proxy_feed = !0);
        this.Xc && (c["published-min"] = (new Date(this.Xc)).toISOString());
        R.decode().scheme == Sb && (c.rewriteforssl = !0);
        return {
            type: "GET"
            , url: b + "?" + $.param(c)
        }
    };
    Bg.prototype.Zb = function (a) {
        if (a && a.feed) {
            var b = {};
            b.results = Qg(a.feed);
            b.comments = [];
            if (a.feed.entry)
                for (var c = 0, d; d = a.feed.entry[c]; c++) b.comments.push(Rg(d));
            a = b
        }
        else a = void 0;
        if (b = a && a.comments && a.comments.length) this.Xc = parseInt(a.comments[a.comments.length - 1].timestamp) + 1;
        c = this.m.resource() || 0;
        (!b || a.results.startIndex + a.results.pageSize > c) && this.hasNext(!1);
        return a && a.comments
    };

    function Lg(a) {
        if (a && a.feed) {
            var b = {};
            b.Fb = Sg(a.feed);
            b.results = Qg(a.feed);
            b.items = [];
            if (a.feed.entry)
                for (var c = 0, d; d = a.feed.entry[c]; c++)(d = Kg(d)) && d.published && !d.Fd && (d.sourceTitle = b.Fb ? b.Fb.title : void 0, b.items.push(d));
            b.items[0] && (b.Fb.published = b.items[0].published);
            return b
        }
    }

    function Jg(a) {
        if (a && a.feed && a.feed.entry) {
            for (var b = [], c = 0, d; d = a.feed.entry[c]; c++) {
                var e = Sg(d);
                $.grep(d.link, function (a) {
                    "alternate" == a.rel && (e.url = a.href)
                });
                b.push(e)
            }
            b.sort(function (a, b) {
                return b.updated - a.updated
            });
            return b
        }
    }

    function Kg(a) {
        if (a) {
            var b = a.tag || Z(a.id)
                , c = a && /post-/i.test(b) && new Qd || a && /page-/i.test(b) && new Fe || new xe;
            (b = /blog-(\d+)\.\w{4}-(\d+)/.exec(Z(a.id))) ? (c.blogId = b[1], c.id = b[2]) : c.id = a.id;
            c.title = Z(a.title);
            c.body = a.content ? Z(a.content) : Z(a.summary) + "...";
            c.updated = (new Date).fromISOString(Z(a.updated));
            c.published = (new Date).fromISOString(Z(a.published));
            c.Fd = !1;
            a.app$control && a.app$control.app$draft && (c.Fd = "yes" == a.app$control.app$draft.$t);
            if (a.replies || a.thr$total) c.commentCount = parseInt(Z(a.replies || a.thr$total), 10);
            c.allowComments = void 0 !== a.thr$total;
            b = Tg(a);
            b.length && (c.author = b[0]);
            a.link && ($.isArray(a.link) ? $.grep(a.link, function (a) {
                "alternate" == a.rel ? c.url = a.href : "related" == a.rel && (c.relatedUrl = a.href)
            }) : c.url = a.link, c.url && (b = R.decode(c.url), b.scheme = R.decode().scheme, c.url = b.encode(), b.scheme = "http", c.Dc = b.encode(), b = c.url.split("/"), 2 <= b.length && (c.baseUrl = b[0] + "//" + b[2])));
            a.enclosure && $.grep(a.enclosure, function (a) {
                "related" == a.type && (c.relatedUrl = a.url)
            });
            a.hf ? c.tags = a.hf.slice(0) : a.category && (c.tags = $.map(a.category, function (a) {
                return a.term
            }));
            c.geoLocation = Ug(a);
            a = Vg(a);
            c.nf = a.commentSource;
            c.sc = a.commentModerationMode;
            return c
        }
    }

    function Rg(a) {
        var b = new ue
            , c = /blog-(\d+).post-(\d+)/.exec(Z(a.id));
        c && (b.id = c[2]);
        b.extensions = Vg(a);
        b.body = Z(a.content);
        b.timestamp = (new Date).fromISOString(Z(a.published)).getTime() + "";
        b.displayTime = b.extensions["blogger.displayTime"];
        b.extensions["blogger.contentRemoved"] == Jc && (b.body = '<span class="deleted-comment">' + b.body + "</span>");
        if (c = Tg(a)) b.author = c[0];
        a.link && (a.link[2].href && (c = R.decode(a.link[2].href), c.scheme = R.decode().scheme, b.url = b.link = b.permalink = c.encode()), a.link[3] && (a = /.*comments\/default\/(\d+)\?.*/.exec(a.link[3].href))) && (b.parentId = a[1]);
        return b
    }

    function Sg(a) {
        var b = {
                title: Z(a.title)
                , subtitle: Z(a.subtitle)
                , updated: (new Date).fromISOString(Z(a.updated))
            }
            , c = /blog-(\d+)/.exec(Z(a.id));
        b.id = c && c[1] || a.id;
        a.author && (b.authors = Tg(a));
        return b
    }

    function Qg(a) {
        return {
            total: parseInt(Z(a.totalResults || a.openSearch$totalResults), 10)
            , startIndex: parseInt(Z(a.startIndex || a.openSearch$startIndex), 10)
            , pageSize: void 0 === a.openSearch$itemsPerPage ? void 0 : parseInt(Z(a.openSearch$itemsPerPage), 10)
        }
    }

    function Tg(a) {
        var b = [];
        a.author && ($.isArray(a.author) ? b = $.map(a.author, function (a) {
            return new Rd(Z(a.name), Z(a.uri), a.gd$image ? a.gd$image.src : void 0)
        }) : b.push(new Rd(Z(a.author.name), Z(a.author.uri))));
        return b
    }

    function Ug(a) {
        if (a.georss$featurename && a.georss$point) {
            var b = Z(a.georss$point).split(" ");
            if (2 == b.length) return new Ae(Z(a.georss$featurename), parseFloat(b[0], 10), parseFloat(b[1], 10))
        }
    }

    function Vg(a) {
        var b = {};
        a = a.gd$extendedProperty || [];
        $.isArray(a) && $.map(a, function (a) {
            b[a.name] = a.value
        });
        return b
    }

    function Z(a) {
        return a && void 0 !== a.$t ? a.$t : a
    };

    function Pg(a, b) {
        re.call(this, a, b || 25);
        this.hc = (b = Wg(this)) && b.qa ? b.qa.getTime() : void 0;
        this.Sc = 1;
        this.xd = (b = Wg(this)) && b.ra ? b.ra.getTime() : void 0;
        this.Nc = a.resource().filter && $.trim(a.resource().filter.query || "");
        this.Kc = a.resource().filter && $.trim(a.resource().filter.Jc || "");
        this.Xb = a.resource().filter && $.trim(a.resource().filter.Gc || "")
    }
    Pg.prototype = $.extend({}, re.prototype, Pg.prototype);
    Pg.prototype.Nb = function () {
        var a = W().settings
            , b = !!this.Xb
            , c = a["private"] || R.decode().scheme == Sb
            , d = (c ? a.blogger_base : this.m.resource().url) || "";
        "/" !== d[d.length - 1] && (d += "/");
        c = [d, c ? "feeds/" + a.blog_id : "feeds", b ? "/pages/default" : "/posts/default", Xg(this)].join("");
        d = {
            alt: Zb
            , v: 2
            , dynamicviews: 1
        };
        b || (d.orderby = rc, d["max-results"] = this.pageSize);
        3 == a.feeds_api && (d.proxy_feed = !0);
        this.hc && (d["published-max"] = (new Date(this.hc)).toISOString());
        this.xd && (d["published-min"] = (new Date(this.xd)).toISOString());
        this.Nc && (d.q = this.Nc.replace(/(\s)+/g, "+"), "best" == this.m.resource().filter.Vb && (d.orderby = "relevance"), d["start-index"] = this.Sc);
        this.Kc && (d.path = this.Kc);
        R.decode().scheme == Sb && (d.rewriteforssl = !0);
        return {
            type: "GET"
            , url: c + "?" + $.param(d)
        }
    };

    function Xg(a) {
        a = (a = Wg(a)) && a.tags ? a.tags : [];
        return a.length ? "/-/" + encodeURIComponent(a[0]).replace(/\'/g, "%27") : ""
    }

    function Wg(a) {
        if (a.m || a.m.resource()) return a.m.resource().filter
    }
    Pg.prototype.Zb = function (a) {
        a = Lg(a);
        var b = !!this.Xb;
        a && a.items && a.items.length && (b && (a.items = [Yg(this, a)]), "best" != (this.m.resource().filter && this.m.resource().filter.Vb || "recent") && a.items.sort(function (a, b) {
            return b.published.getTime() - a.published.getTime()
        }), this.Nc ? this.Sc += a.results.pageSize : this.hc = a.items[a.items.length - 1].published.getTime() - 1);
        $.extend(this.m.resource(), a.Fb);
        a.results && a.results.total ? this.m.resource().total = a.results.total : this.m.resource().total = $.valueOrDefault("items.length", 0, a);
        (!a.items || !a.items.length || a.results.startIndex + a.results.pageSize > a.results.total || this.Kc || this.Xb) && this.hasNext(!1);
        return a && a.items
    };

    function Yg(a, b) {
        b = b.items;
        for (var c = 0, d = b.length; c < d; c++)
            if ((new S(b[c].url)).path == a.Xb) return b[c];
        return null
    };

    function Zg(a, b) {
        re.call(this, a, b || 25)
    }
    Zg.prototype = $.extend({}, re.prototype, Zg.prototype);
    Zg.prototype.Nb = function () {
        var a = [this.m.resource().url, "/activities/public"].join("")
            , b = {
                maxResults: this.pageSize
                , key: W().settings.plus_key
            };
        this.gd && (b.pageToken = this.gd);
        return {
            type: "GET"
            , url: a + "?" + $.param(b)
        }
    };
    Zg.prototype.Zb = function (a) {
        if (a && a.items) return $.extend(this.m.resource(), {
            id: /people\/(\d+)/.exec(this.m.resource().url)[1]
            , title: a.title
            , updated: (new Date).fromISOString(a.updated)
            , total: (this.m.resource().total || 0) + a.items.length
        }), this.gd = a.nextPageToken, this.pageSize > a.items.length && this.hasNext(!1), a = $.map(a.items, this.yf), !this.m.resource().published && a[0] && (this.m.resource().published = this.m.resource().published = a[0].published), a
    };
    Zg.prototype.yf = function (a) {
        var b = new Ud;
        b.id = a.id;
        b.title = a.title;
        b.published = a.published && (new Date).fromISOString(a.published);
        b.updated = a.updated && (new Date).fromISOString(a.updated);
        b.url = a.url;
        b.author = a.actor && new Rd(a.actor.displayName, a.actor.url, a.actor.image);
        b.location = a.Hg;
        if (a = a.object) b.body = a.content, b.relatedUrl = a.url, b.commentCount = a.replies && a.replies.totalItems || 0, b.Kg = a.resharers && a.resharers.totalItems || 0, b.Jg = a.plusoners && a.plusoners.totalItems || 0, a.attachments && $.each(a.attachments, function (a, d) {
            a = {
                type: d.objectType
                , url: d.fullImage && d.fullImage.url || d.embed && d.embed.url || d.url
                , title: d.displayName
                , content: d.content
                , thumbnail: d.image && d.image.url
                , width: d.fullImage && d.fullImage.width
                , height: d.fullImage && d.fullImage.height
            };
            if (d.objectType == Pc) {
                var c = qe(a.url);
                c && c.embed && (a.content = c.embed)
            }
            b.attach(d.objectType, a)
        });
        return b
    };
    var Ud = $.inherit(xe);
    Ud.prototype.content = J(x);
    Ud.prototype.data = function () {
        var a = this.base();
        a.Plus = !0;
        a.PostID = this.id;
        a.Comments = a.Notes = !!M().settings.comments_enabled && !!this.allowComments;
        a.Comments && (a.CommentCount = a.NoteCount = this.commentCount || 0, a.CommentCountWithLabel = a.CommentCount + " comment" + (1 != a.CommentCount ? "s" : ""), a.NoteCountWithLabel = a.CommentCountWithLabel);
        return a
    };

    function $g() {
        this.T()
    }
    var ah = {
            plus_base: "https://plus.google.com"
            , plusapi_base: Tb
            , plus_key: "AIzaSyAH16LkZIgEhEx-wAoog7elYkd3djaMJGQ"
        }
        , bh = /^plus:(\d+)$/;
    $g.prototype.owns = function (a) {
        return bh.test(a)
    };
    $g.prototype.iterator = function (a, b, c) {
        if (a = bh.exec(a)) return ch(), a = [W().settings.plusapi_base || Tb, "/v1/people/", a[1]].join(""), new Zg(new ve(new dh(a, b)), c || W().settings.batchSize)
    };
    $g.prototype.T = function () {
        ch();
        Q().converter(Ud, function (a, b) {
            a.Ba || (a.Ba = a.data());
            b.scope("Post", a.Ba);
            b.scope("Plus", !0);
            return a.Ba
        })
    };

    function ch() {
        for (var a in ah) W().settings[a] || (W().settings[a] = ah[a])
    }
    ug.push(new $g);

    function dh(a, b, c) {
        this.url = a;
        this.filter = b;
        this.id = c
    }
    dh.prototype.data = function () {
        var a = {};
        a.Title = this.title;
        a.PlusID = this.id;
        return a
    };

    function yf(a, b, c) {
        var d = window.jstiming;
        if (d && d.getLabels && d.getTick) {
            var e = {};
            for (a = a ? a.slice(0) : []; 0 < a.length;)
                for (var f = a.shift(), g = d.getLabels(f) || [], l = 0; l < g.length; ++l)
                    if ("_" !== g[l][0] && g[l] !== Cc) {
                        var m = d.getTick(f, g[l]);
                        e[f.name] ? e[f.name].push({
                            label: g[l]
                            , tick: m
                        }) : e[f.name] = [{
                            label: g[l]
                            , tick: m
                        }]
                    }
            for (var n in e) {
                d = [];
                for (a = 0; a < e[n].length; ++a) d.push(e[n][a].label + "." + e[n][a].tick);
                a = $.extend({}, c);
                b && (a.e = b);
                var f = []
                    , p;
                for (p in a) f.push(p + "=" + a[p]);
                d = ["//csi.gstatic.com/csi?v=3&s=blogger"
, "&action=" + n, "&it=" + d.join(","), f ? "&" + f.join("&") : ""].join("");
                (new Image).src = d
            }
        }
    };
    var eh = {
            core: {
                view: Y
                , gadget: qg
            }
            , data: W
            , gadgets: function () {
                Wd || (Wd = new Vd);
                return Wd
            }
            , modules: {
                Overview: Kf
                , Shortcuts: gg
                , Comments: jg
                , PlusComments: Of
                , PlusCommentCount: function (a, b) {
                    Nf(a, b)
                }
                , ViewLightbox: pg
            }
            , ui: M
            , templates: Q
            , tools: {
                categorizer: Sd
                , Mosaic: Xd
                , path: R
                , PhotoLoader: be
                , Photoset: ce
                , thumbnailer: T
                , data: V
            }
            , views: []
        }
        , fh;
    for (fh in eh) N[fh] = eh[fh];
    if (window.jstiming) {
        window.jstiming.rd = {};
        window.jstiming.sg = 1;
        var gh = function (a, b, c) {
            var d = a.t[b]
                , e = a.t.start;
            if (d && (e || c)) return d = a.t[b][0], void 0 != c ? e = c : e = e[0], Math.round(d - e)
        };
        window.jstiming.getTick = gh;
        window.jstiming.getLabels = function (a) {
            var b = []
                , c;
            for (c in a.t) b.push(c);
            return b
        };
        var hh = function (a, b, c) {
                var d = "";
                window.jstiming.srt && (d += "&srt=" + window.jstiming.srt, delete window.jstiming.srt);
                window.jstiming.pt && (d += "&tbsrt=" + window.jstiming.pt, delete window.jstiming.pt);
                try {
                    window.external && window.external.tran ? d += "&tran=" + window.external.tran : window.gtbExternal && window.gtbExternal.tran ? d += "&tran=" + window.gtbExternal.tran() : window.chrome && window.chrome.csi && (d += "&tran=" + window.chrome.csi().tran)
                }
                catch (k) {}
                var e = window.chrome;
                if (e && (e = e.loadTimes)) {
                    e().wasFetchedViaSpdy && (d += "&p=s");
                    if (e().wasNpnNegotiated) {
                        var d = d + "&npn=1"
                            , f = e().npnNegotiatedProtocol;
                        f && (d += "&npnv=" + (encodeURIComponent || escape)(f))
                    }
                    e().wasAlternateProtocolAvailable && (d += "&apa=1")
                }
                var g = a.t
                    , l = g.start
                    , e = []
                    , f = []
                    , m;
                for (m in g)
                    if (m != Cc && 0 != m.indexOf("_")) {
                        var n = g[m][1];
                        n ? g[n] && f.push(m + "." + gh(a, m, g[n][0])) : l && e.push(m + "." + gh(a, m))
                    }
                delete g.start;
                if (b)
                    for (var p in b) d += "&" + p + "=" + b[p];
                (b = c) || (b = "https:" == document.location.protocol ? "https://csi.gstatic.com/csi" : "http://csi.gstatic.com/csi");
                return [b, "?v=3", "&s=" + (window.jstiming.sn || "blogger") + "&action=", a.name, f.length ? "&it=" + f.join(",") : "", d, "&rt=", e.join(",")].join("")
            }
            , ih = function (a, b, c) {
                a = hh(a, b, c);
                if (!a) return "";
                b = new Image;
                var d = window.jstiming.sg++;
                window.jstiming.rd[d] = b;
                b.onload = b.onerror = function () {
                    window.jstiming && delete window.jstiming.rd[d]
                };
                b.src = a;
                b = null;
                return a
            };
        window.jstiming.report = function (a, b, c) {
            if (document.webkitVisibilityState == qc) {
                var d = !1
                    , e = function () {
                        if (!d) {
                            b ? b.prerender = "1" : b = {
                                prerender: "1"
                            };
                            var f;
                            document.webkitVisibilityState == qc ? f = !1 : (ih(a, b, c), f = !0);
                            f && (d = !0, document.removeEventListener(Sc, e, !1))
                        }
                    };
                document.addEventListener(Sc, e, !1);
                return ""
            }
            return ih(a, b, c)
        }
    };
})();