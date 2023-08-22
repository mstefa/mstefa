"use strict";
exports.id = 870;
exports.ids = [870];
exports.modules = {

/***/ 2165:
/***/ ((module) => {


module.exports = balanced;
function balanced(a, b, str) {
    if (a instanceof RegExp) a = maybeMatch(a, str);
    if (b instanceof RegExp) b = maybeMatch(b, str);
    var r = range(a, b, str);
    return r && {
        start: r[0],
        end: r[1],
        pre: str.slice(0, r[0]),
        body: str.slice(r[0] + a.length, r[1]),
        post: str.slice(r[1] + b.length)
    };
}
function maybeMatch(reg, str) {
    var m = str.match(reg);
    return m ? m[0] : null;
}
balanced.range = range;
function range(a, b, str) {
    var begs, beg, left, right, result;
    var ai = str.indexOf(a);
    var bi = str.indexOf(b, ai + 1);
    var i = ai;
    if (ai >= 0 && bi > 0) {
        if (a === b) {
            return [
                ai,
                bi
            ];
        }
        begs = [];
        left = str.length;
        while(i >= 0 && !result){
            if (i == ai) {
                begs.push(i);
                ai = str.indexOf(a, i + 1);
            } else if (begs.length == 1) {
                result = [
                    begs.pop(),
                    bi
                ];
            } else {
                beg = begs.pop();
                if (beg < left) {
                    left = beg;
                    right = bi;
                }
                bi = str.indexOf(b, i + 1);
            }
            i = ai < bi && ai >= 0 ? ai : bi;
        }
        if (begs.length) {
            result = [
                left,
                right
            ];
        }
    }
    return result;
}


/***/ }),

/***/ 1656:
/***/ ((module) => {


!function(t, e) {
     true ? module.exports = e() : 0;
}(void 0, function() {
    "use strict";
    var t = 1e3, e = 6e4, n = 36e5, r = "millisecond", i = "second", s = "minute", u = "hour", a = "day", o = "week", c = "month", f = "quarter", h = "year", d = "date", l = "Invalid Date", $ = /^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/, y = /\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g, M = {
        name: "en",
        weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),
        months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_"),
        ordinal: function(t) {
            var e = [
                "th",
                "st",
                "nd",
                "rd"
            ], n = t % 100;
            return "[" + t + (e[(n - 20) % 10] || e[n] || e[0]) + "]";
        }
    }, m = function(t, e, n) {
        var r = String(t);
        return !r || r.length >= e ? t : "" + Array(e + 1 - r.length).join(n) + t;
    }, v = {
        s: m,
        z: function(t) {
            var e = -t.utcOffset(), n = Math.abs(e), r = Math.floor(n / 60), i = n % 60;
            return (e <= 0 ? "+" : "-") + m(r, 2, "0") + ":" + m(i, 2, "0");
        },
        m: function t(e, n) {
            if (e.date() < n.date()) return -t(n, e);
            var r = 12 * (n.year() - e.year()) + (n.month() - e.month()), i = e.clone().add(r, c), s = n - i < 0, u = e.clone().add(r + (s ? -1 : 1), c);
            return +(-(r + (n - i) / (s ? i - u : u - i)) || 0);
        },
        a: function(t) {
            return t < 0 ? Math.ceil(t) || 0 : Math.floor(t);
        },
        p: function(t) {
            return ({
                M: c,
                y: h,
                w: o,
                d: a,
                D: d,
                h: u,
                m: s,
                s: i,
                ms: r,
                Q: f
            })[t] || String(t || "").toLowerCase().replace(/s$/, "");
        },
        u: function(t) {
            return void 0 === t;
        }
    }, g = "en", D = {};
    D[g] = M;
    var p = function(t) {
        return t instanceof b;
    }, S = function t(e, n, r) {
        var i;
        if (!e) return g;
        if ("string" == typeof e) {
            var s = e.toLowerCase();
            D[s] && (i = s), n && (D[s] = n, i = s);
            var u = e.split("-");
            if (!i && u.length > 1) return t(u[0]);
        } else {
            var a = e.name;
            D[a] = e, i = a;
        }
        return !r && i && (g = i), i || !r && g;
    }, w = function(t, e) {
        if (p(t)) return t.clone();
        var n = "object" == typeof e ? e : {};
        return n.date = t, n.args = arguments, new b(n);
    }, O = v;
    O.l = S, O.i = p, O.w = function(t, e) {
        return w(t, {
            locale: e.$L,
            utc: e.$u,
            x: e.$x,
            $offset: e.$offset
        });
    };
    var b = function() {
        function M(t) {
            this.$L = S(t.locale, null, !0), this.parse(t);
        }
        var m = M.prototype;
        return m.parse = function(t) {
            this.$d = function(t) {
                var e = t.date, n = t.utc;
                if (null === e) return new Date(NaN);
                if (O.u(e)) return new Date;
                if (e instanceof Date) return new Date(e);
                if ("string" == typeof e && !/Z$/i.test(e)) {
                    var r = e.match($);
                    if (r) {
                        var i = r[2] - 1 || 0, s = (r[7] || "0").substring(0, 3);
                        return n ? new Date(Date.UTC(r[1], i, r[3] || 1, r[4] || 0, r[5] || 0, r[6] || 0, s)) : new Date(r[1], i, r[3] || 1, r[4] || 0, r[5] || 0, r[6] || 0, s);
                    }
                }
                return new Date(e);
            }(t), this.$x = t.x || {}, this.init();
        }, m.init = function() {
            var t = this.$d;
            this.$y = t.getFullYear(), this.$M = t.getMonth(), this.$D = t.getDate(), this.$W = t.getDay(), this.$H = t.getHours(), this.$m = t.getMinutes(), this.$s = t.getSeconds(), this.$ms = t.getMilliseconds();
        }, m.$utils = function() {
            return O;
        }, m.isValid = function() {
            return !(this.$d.toString() === l);
        }, m.isSame = function(t, e) {
            var n = w(t);
            return this.startOf(e) <= n && n <= this.endOf(e);
        }, m.isAfter = function(t, e) {
            return w(t) < this.startOf(e);
        }, m.isBefore = function(t, e) {
            return this.endOf(e) < w(t);
        }, m.$g = function(t, e, n) {
            return O.u(t) ? this[e] : this.set(n, t);
        }, m.unix = function() {
            return Math.floor(this.valueOf() / 1e3);
        }, m.valueOf = function() {
            return this.$d.getTime();
        }, m.startOf = function(t, e) {
            var n = this, r = !!O.u(e) || e, f = O.p(t), l = function(t, e) {
                var i = O.w(n.$u ? Date.UTC(n.$y, e, t) : new Date(n.$y, e, t), n);
                return r ? i : i.endOf(a);
            }, $ = function(t, e) {
                return O.w(n.toDate()[t].apply(n.toDate("s"), (r ? [
                    0,
                    0,
                    0,
                    0
                ] : [
                    23,
                    59,
                    59,
                    999
                ]).slice(e)), n);
            }, y = this.$W, M = this.$M, m = this.$D, v = "set" + (this.$u ? "UTC" : "");
            switch(f){
                case h:
                    return r ? l(1, 0) : l(31, 11);
                case c:
                    return r ? l(1, M) : l(0, M + 1);
                case o:
                    var g = this.$locale().weekStart || 0, D = (y < g ? y + 7 : y) - g;
                    return l(r ? m - D : m + (6 - D), M);
                case a:
                case d:
                    return $(v + "Hours", 0);
                case u:
                    return $(v + "Minutes", 1);
                case s:
                    return $(v + "Seconds", 2);
                case i:
                    return $(v + "Milliseconds", 3);
                default:
                    return this.clone();
            }
        }, m.endOf = function(t) {
            return this.startOf(t, !1);
        }, m.$set = function(t, e) {
            var n, o = O.p(t), f = "set" + (this.$u ? "UTC" : ""), l = (n = {}, n[a] = f + "Date", n[d] = f + "Date", n[c] = f + "Month", n[h] = f + "FullYear", n[u] = f + "Hours", n[s] = f + "Minutes", n[i] = f + "Seconds", n[r] = f + "Milliseconds", n)[o], $ = o === a ? this.$D + (e - this.$W) : e;
            if (o === c || o === h) {
                var y = this.clone().set(d, 1);
                y.$d[l]($), y.init(), this.$d = y.set(d, Math.min(this.$D, y.daysInMonth())).$d;
            } else l && this.$d[l]($);
            return this.init(), this;
        }, m.set = function(t, e) {
            return this.clone().$set(t, e);
        }, m.get = function(t) {
            return this[O.p(t)]();
        }, m.add = function(r, f) {
            var d, l = this;
            r = Number(r);
            var $ = O.p(f), y = function(t) {
                var e = w(l);
                return O.w(e.date(e.date() + Math.round(t * r)), l);
            };
            if ($ === c) return this.set(c, this.$M + r);
            if ($ === h) return this.set(h, this.$y + r);
            if ($ === a) return y(1);
            if ($ === o) return y(7);
            var M = (d = {}, d[s] = e, d[u] = n, d[i] = t, d)[$] || 1, m = this.$d.getTime() + r * M;
            return O.w(m, this);
        }, m.subtract = function(t, e) {
            return this.add(-1 * t, e);
        }, m.format = function(t) {
            var e = this, n = this.$locale();
            if (!this.isValid()) return n.invalidDate || l;
            var r = t || "YYYY-MM-DDTHH:mm:ssZ", i = O.z(this), s = this.$H, u = this.$m, a = this.$M, o = n.weekdays, c = n.months, f = n.meridiem, h = function(t, n, i, s) {
                return t && (t[n] || t(e, r)) || i[n].slice(0, s);
            }, d = function(t) {
                return O.s(s % 12 || 12, t, "0");
            }, $ = f || function(t, e, n) {
                var r = t < 12 ? "AM" : "PM";
                return n ? r.toLowerCase() : r;
            };
            return r.replace(y, function(t, r) {
                return r || function(t) {
                    switch(t){
                        case "YY":
                            return String(e.$y).slice(-2);
                        case "YYYY":
                            return O.s(e.$y, 4, "0");
                        case "M":
                            return a + 1;
                        case "MM":
                            return O.s(a + 1, 2, "0");
                        case "MMM":
                            return h(n.monthsShort, a, c, 3);
                        case "MMMM":
                            return h(c, a);
                        case "D":
                            return e.$D;
                        case "DD":
                            return O.s(e.$D, 2, "0");
                        case "d":
                            return String(e.$W);
                        case "dd":
                            return h(n.weekdaysMin, e.$W, o, 2);
                        case "ddd":
                            return h(n.weekdaysShort, e.$W, o, 3);
                        case "dddd":
                            return o[e.$W];
                        case "H":
                            return String(s);
                        case "HH":
                            return O.s(s, 2, "0");
                        case "h":
                            return d(1);
                        case "hh":
                            return d(2);
                        case "a":
                            return $(s, u, !0);
                        case "A":
                            return $(s, u, !1);
                        case "m":
                            return String(u);
                        case "mm":
                            return O.s(u, 2, "0");
                        case "s":
                            return String(e.$s);
                        case "ss":
                            return O.s(e.$s, 2, "0");
                        case "SSS":
                            return O.s(e.$ms, 3, "0");
                        case "Z":
                            return i;
                    }
                    return null;
                }(t) || i.replace(":", "");
            });
        }, m.utcOffset = function() {
            return 15 * -Math.round(this.$d.getTimezoneOffset() / 15);
        }, m.diff = function(r, d, l) {
            var $, y = this, M = O.p(d), m = w(r), v = (m.utcOffset() - this.utcOffset()) * e, g = this - m, D = function() {
                return O.m(y, m);
            };
            switch(M){
                case h:
                    $ = D() / 12;
                    break;
                case c:
                    $ = D();
                    break;
                case f:
                    $ = D() / 3;
                    break;
                case o:
                    $ = (g - v) / 6048e5;
                    break;
                case a:
                    $ = (g - v) / 864e5;
                    break;
                case u:
                    $ = g / n;
                    break;
                case s:
                    $ = g / e;
                    break;
                case i:
                    $ = g / t;
                    break;
                default:
                    $ = g;
            }
            return l ? $ : O.a($);
        }, m.daysInMonth = function() {
            return this.endOf(c).$D;
        }, m.$locale = function() {
            return D[this.$L];
        }, m.locale = function(t, e) {
            if (!t) return this.$L;
            var n = this.clone(), r = S(t, e, !0);
            return r && (n.$L = r), n;
        }, m.clone = function() {
            return O.w(this.$d, this);
        }, m.toDate = function() {
            return new Date(this.valueOf());
        }, m.toJSON = function() {
            return this.isValid() ? this.toISOString() : null;
        }, m.toISOString = function() {
            return this.$d.toISOString();
        }, m.toString = function() {
            return this.$d.toUTCString();
        }, M;
    }(), _ = b.prototype;
    return w.prototype = _, [
        [
            "$ms",
            r
        ],
        [
            "$s",
            i
        ],
        [
            "$m",
            s
        ],
        [
            "$H",
            u
        ],
        [
            "$W",
            a
        ],
        [
            "$M",
            c
        ],
        [
            "$y",
            h
        ],
        [
            "$D",
            d
        ]
    ].forEach(function(t) {
        _[t[1]] = function(e) {
            return this.$g(e, t[0], t[1]);
        };
    }), w.extend = function(t, e) {
        return t.$i || (t(e, b, w), t.$i = !0), w;
    }, w.locale = S, w.isDayjs = p, w.unix = function(t) {
        return w(1e3 * t);
    }, w.en = D[g], w.Ls = D, w.p = {}, w;
});


/***/ }),

/***/ 3578:
/***/ ((module) => {

//
// format - printf-like string formatting for JavaScript
// github.com/samsonjs/format
// @_sjs
//
// Copyright 2010 - 2013 Sami Samhuri <sami@samhuri.net>
//
// MIT License
// http://sjs.mit-license.org
//

;
(function() {
    //// Export the API
    var namespace;
    // CommonJS / Node module
    if (true) {
        namespace = module.exports = format;
    } else {}
    namespace.format = format;
    namespace.vsprintf = vsprintf;
    if (typeof console !== "undefined" && typeof console.log === "function") {
        namespace.printf = printf;
    }
    function printf() {
        console.log(format.apply(null, arguments));
    }
    function vsprintf(fmt, replacements) {
        return format.apply(null, [
            fmt
        ].concat(replacements));
    }
    function format(fmt) {
        var argIndex = 1 // skip initial format argument
        , args = [].slice.call(arguments), i = 0, n = fmt.length, result = "", c, escaped = false, arg, tmp, leadingZero = false, precision, nextArg = function() {
            return args[argIndex++];
        }, slurpNumber = function() {
            var digits = "";
            while(/\d/.test(fmt[i])){
                digits += fmt[i++];
                c = fmt[i];
            }
            return digits.length > 0 ? parseInt(digits) : null;
        };
        for(; i < n; ++i){
            c = fmt[i];
            if (escaped) {
                escaped = false;
                if (c == ".") {
                    leadingZero = false;
                    c = fmt[++i];
                } else if (c == "0" && fmt[i + 1] == ".") {
                    leadingZero = true;
                    i += 2;
                    c = fmt[i];
                } else {
                    leadingZero = true;
                }
                precision = slurpNumber();
                switch(c){
                    case "b":
                        result += parseInt(nextArg(), 10).toString(2);
                        break;
                    case "c":
                        arg = nextArg();
                        if (typeof arg === "string" || arg instanceof String) result += arg;
                        else result += String.fromCharCode(parseInt(arg, 10));
                        break;
                    case "d":
                        result += parseInt(nextArg(), 10);
                        break;
                    case "f":
                        tmp = String(parseFloat(nextArg()).toFixed(precision || 6));
                        result += leadingZero ? tmp : tmp.replace(/^0/, "");
                        break;
                    case "j":
                        result += JSON.stringify(nextArg());
                        break;
                    case "o":
                        result += "0" + parseInt(nextArg(), 10).toString(8);
                        break;
                    case "s":
                        result += nextArg();
                        break;
                    case "x":
                        result += "0x" + parseInt(nextArg(), 10).toString(16);
                        break;
                    case "X":
                        result += "0x" + parseInt(nextArg(), 10).toString(16).toUpperCase();
                        break;
                    default:
                        result += c;
                        break;
                }
            } else if (c === "%") {
                escaped = true;
            } else {
                result += c;
            }
        }
        return result;
    }
})();


/***/ }),

/***/ 6990:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {


var balanced = __webpack_require__(2165);
module.exports = expandTop;
var escSlash = "\x00SLASH" + Math.random() + "\x00";
var escOpen = "\x00OPEN" + Math.random() + "\x00";
var escClose = "\x00CLOSE" + Math.random() + "\x00";
var escComma = "\x00COMMA" + Math.random() + "\x00";
var escPeriod = "\x00PERIOD" + Math.random() + "\x00";
function numeric(str) {
    return parseInt(str, 10) == str ? parseInt(str, 10) : str.charCodeAt(0);
}
function escapeBraces(str) {
    return str.split("\\\\").join(escSlash).split("\\{").join(escOpen).split("\\}").join(escClose).split("\\,").join(escComma).split("\\.").join(escPeriod);
}
function unescapeBraces(str) {
    return str.split(escSlash).join("\\").split(escOpen).join("{").split(escClose).join("}").split(escComma).join(",").split(escPeriod).join(".");
}
// Basically just str.split(","), but handling cases
// where we have nested braced sections, which should be
// treated as individual members, like {a,{b,c},d}
function parseCommaParts(str) {
    if (!str) return [
        ""
    ];
    var parts = [];
    var m = balanced("{", "}", str);
    if (!m) return str.split(",");
    var pre = m.pre;
    var body = m.body;
    var post = m.post;
    var p = pre.split(",");
    p[p.length - 1] += "{" + body + "}";
    var postParts = parseCommaParts(post);
    if (post.length) {
        p[p.length - 1] += postParts.shift();
        p.push.apply(p, postParts);
    }
    parts.push.apply(parts, p);
    return parts;
}
function expandTop(str) {
    if (!str) return [];
    // I don't know why Bash 4.3 does this, but it does.
    // Anything starting with {} will have the first two bytes preserved
    // but *only* at the top level, so {},a}b will not expand to anything,
    // but a{},b}c will be expanded to [a}c,abc].
    // One could argue that this is a bug in Bash, but since the goal of
    // this module is to match Bash's rules, we escape a leading {}
    if (str.substr(0, 2) === "{}") {
        str = "\\{\\}" + str.substr(2);
    }
    return expand(escapeBraces(str), true).map(unescapeBraces);
}
function embrace(str) {
    return "{" + str + "}";
}
function isPadded(el) {
    return /^-?0\d/.test(el);
}
function lte(i, y) {
    return i <= y;
}
function gte(i, y) {
    return i >= y;
}
function expand(str, isTop) {
    var expansions = [];
    var m = balanced("{", "}", str);
    if (!m) return [
        str
    ];
    // no need to expand pre, since it is guaranteed to be free of brace-sets
    var pre = m.pre;
    var post = m.post.length ? expand(m.post, false) : [
        ""
    ];
    if (/\$$/.test(m.pre)) {
        for(var k = 0; k < post.length; k++){
            var expansion = pre + "{" + m.body + "}" + post[k];
            expansions.push(expansion);
        }
    } else {
        var isNumericSequence = /^-?\d+\.\.-?\d+(?:\.\.-?\d+)?$/.test(m.body);
        var isAlphaSequence = /^[a-zA-Z]\.\.[a-zA-Z](?:\.\.-?\d+)?$/.test(m.body);
        var isSequence = isNumericSequence || isAlphaSequence;
        var isOptions = m.body.indexOf(",") >= 0;
        if (!isSequence && !isOptions) {
            // {a},b}
            if (m.post.match(/,.*\}/)) {
                str = m.pre + "{" + m.body + escClose + m.post;
                return expand(str);
            }
            return [
                str
            ];
        }
        var n;
        if (isSequence) {
            n = m.body.split(/\.\./);
        } else {
            n = parseCommaParts(m.body);
            if (n.length === 1) {
                // x{{a,b}}y ==> x{a}y x{b}y
                n = expand(n[0], false).map(embrace);
                if (n.length === 1) {
                    return post.map(function(p) {
                        return m.pre + n[0] + p;
                    });
                }
            }
        }
        // at this point, n is the parts, and we know it's not a comma set
        // with a single entry.
        var N;
        if (isSequence) {
            var x = numeric(n[0]);
            var y = numeric(n[1]);
            var width = Math.max(n[0].length, n[1].length);
            var incr = n.length == 3 ? Math.abs(numeric(n[2])) : 1;
            var test = lte;
            var reverse = y < x;
            if (reverse) {
                incr *= -1;
                test = gte;
            }
            var pad = n.some(isPadded);
            N = [];
            for(var i = x; test(i, y); i += incr){
                var c;
                if (isAlphaSequence) {
                    c = String.fromCharCode(i);
                    if (c === "\\") c = "";
                } else {
                    c = String(i);
                    if (pad) {
                        var need = width - c.length;
                        if (need > 0) {
                            var z = new Array(need + 1).join("0");
                            if (i < 0) c = "-" + z + c.slice(1);
                            else c = z + c;
                        }
                    }
                }
                N.push(c);
            }
        } else {
            N = [];
            for(var j = 0; j < n.length; j++){
                N.push.apply(N, expand(n[j], false));
            }
        }
        for(var j = 0; j < N.length; j++){
            for(var k = 0; k < post.length; k++){
                var expansion = pre + N[j] + post[k];
                if (!isTop || isSequence || expansion) expansions.push(expansion);
            }
        }
    }
    return expansions;
}


/***/ }),

/***/ 8957:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {


module.exports["default"] = module.exports = __webpack_require__(9037);
module.exports.readingTimeStream = __webpack_require__(4753);


/***/ }),

/***/ 9037:
/***/ ((module) => {

/*!
 * reading-time
 * Copyright (c) Nicolas Gryman <ngryman@gmail.com>
 * MIT Licensed
 */ 
/**
 * @typedef {import('reading-time').Options['wordBound']} WordBoundFunction
 */ /**
 * @param {number} number
 * @param {number[][]} arrayOfRanges
 */ function codeIsInRanges(number, arrayOfRanges) {
    return arrayOfRanges.some(([lowerBound, upperBound])=>lowerBound <= number && number <= upperBound);
}
/**
 * @type {WordBoundFunction}
 */ function isCJK(c) {
    if ("string" !== typeof c) {
        return false;
    }
    const charCode = c.charCodeAt(0);
    // Help wanted!
    // This should be good for most cases, but if you find it unsatisfactory
    // (e.g. some other language where each character should be standalone words),
    // contributions welcome!
    return codeIsInRanges(charCode, [
        // Hiragana (Katakana not included on purpose,
        // context: https://github.com/ngryman/reading-time/pull/35#issuecomment-853364526)
        // If you think Katakana should be included and have solid reasons, improvement is welcomed
        [
            0x3040,
            0x309f
        ],
        // CJK Unified ideographs
        [
            0x4e00,
            0x9fff
        ],
        // Hangul
        [
            0xac00,
            0xd7a3
        ],
        // CJK extensions
        [
            0x20000,
            0x2ebe0
        ]
    ]);
}
/**
 * @type {WordBoundFunction}
 */ function isAnsiWordBound(c) {
    return " \n\r	".includes(c);
}
/**
 * @type {WordBoundFunction}
 */ function isPunctuation(c) {
    if ("string" !== typeof c) {
        return false;
    }
    const charCode = c.charCodeAt(0);
    return codeIsInRanges(charCode, [
        [
            0x21,
            0x2f
        ],
        [
            0x3a,
            0x40
        ],
        [
            0x5b,
            0x60
        ],
        [
            0x7b,
            0x7e
        ],
        // CJK Symbols and Punctuation
        [
            0x3000,
            0x303f
        ],
        // Full-width ASCII punctuation variants
        [
            0xff00,
            0xffef
        ]
    ]);
}
/**
 * @type {import('reading-time').default}
 */ function readingTime(text, options = {}) {
    let words = 0, start = 0, end = text.length - 1;
    // use provided value if available
    const wordsPerMinute = options.wordsPerMinute || 200;
    // use provided function if available
    const isWordBound = options.wordBound || isAnsiWordBound;
    // fetch bounds
    while(isWordBound(text[start]))start++;
    while(isWordBound(text[end]))end--;
    // Add a trailing word bound to make handling edges more convenient
    const normalizedText = `${text}\n`;
    // calculate the number of words
    for(let i = start; i <= end; i++){
        // A CJK character is a always word;
        // A non-word bound followed by a word bound / CJK is the end of a word.
        if (isCJK(normalizedText[i]) || !isWordBound(normalizedText[i]) && (isWordBound(normalizedText[i + 1]) || isCJK(normalizedText[i + 1]))) {
            words++;
        }
        // In case of CJK followed by punctuations, those characters have to be eaten as well
        if (isCJK(normalizedText[i])) {
            while(i <= end && (isPunctuation(normalizedText[i + 1]) || isWordBound(normalizedText[i + 1]))){
                i++;
            }
        }
    }
    // reading time stats
    const minutes = words / wordsPerMinute;
    // Math.round used to resolve floating point funkyness
    //   http://docs.oracle.com/cd/E19957-01/806-3568/ncg_goldberg.html
    const time = Math.round(minutes * 60 * 1000);
    const displayed = Math.ceil(minutes.toFixed(2));
    return {
        text: displayed + " min read",
        minutes: minutes,
        time: time,
        words: words
    };
}
/**
 * Export
 */ module.exports = readingTime;


/***/ }),

/***/ 4753:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

/*!
 * reading-time
 * Copyright (c) Nicolas Gryman <ngryman@gmail.com>
 * MIT Licensed
 */ 
/**
 * Module dependencies.
 */ const readingTime = __webpack_require__(9037);
const Transform = (__webpack_require__(2781).Transform);
const util = __webpack_require__(3837);
/**
 * @typedef {import('reading-time').Options} Options
 * @typedef {import('reading-time').Options['wordBound']} WordBoundFunction
 * @typedef {import('reading-time').readingTimeStream} ReadingTimeStream
 * @typedef {import('stream').TransformCallback} TransformCallback
 */ /**
 * @param {Options} options
 * @returns {ReadingTimeStream}
 */ function ReadingTimeStream(options) {
    // allow use without new
    if (!(this instanceof ReadingTimeStream)) {
        return new ReadingTimeStream(options);
    }
    Transform.call(this, {
        objectMode: true
    });
    this.options = options || {};
    this.stats = {
        minutes: 0,
        time: 0,
        words: 0
    };
}
util.inherits(ReadingTimeStream, Transform);
/**
 * @param {Buffer} chunk
 * @param {BufferEncoding} encoding
 * @param {TransformCallback} callback
 */ ReadingTimeStream.prototype._transform = function(chunk, encoding, callback) {
    const stats = readingTime(chunk.toString(encoding), this.options);
    this.stats.minutes += stats.minutes;
    this.stats.time += stats.time;
    this.stats.words += stats.words;
    callback();
};
/**
 * @param {TransformCallback} callback
 */ ReadingTimeStream.prototype._flush = function(callback) {
    this.stats.text = Math.ceil(this.stats.minutes.toFixed(2)) + " min read";
    this.push(this.stats);
    callback();
};
/**
 * Export
 */ module.exports = ReadingTimeStream;


/***/ }),

/***/ 7060:
/***/ ((module) => {

/* eslint-disable no-multi-assign */ 
function deepFreeze(obj) {
    if (obj instanceof Map) {
        obj.clear = obj.delete = obj.set = function() {
            throw new Error("map is read-only");
        };
    } else if (obj instanceof Set) {
        obj.add = obj.clear = obj.delete = function() {
            throw new Error("set is read-only");
        };
    }
    // Freeze self
    Object.freeze(obj);
    Object.getOwnPropertyNames(obj).forEach((name)=>{
        const prop = obj[name];
        const type = typeof prop;
        // Freeze prop if it is an object or function and also not already frozen
        if ((type === "object" || type === "function") && !Object.isFrozen(prop)) {
            deepFreeze(prop);
        }
    });
    return obj;
}
/** @typedef {import('highlight.js').CallbackResponse} CallbackResponse */ /** @typedef {import('highlight.js').CompiledMode} CompiledMode */ /** @implements CallbackResponse */ class Response {
    /**
   * @param {CompiledMode} mode
   */ constructor(mode){
        // eslint-disable-next-line no-undefined
        if (mode.data === undefined) mode.data = {};
        this.data = mode.data;
        this.isMatchIgnored = false;
    }
    ignoreMatch() {
        this.isMatchIgnored = true;
    }
}
/**
 * @param {string} value
 * @returns {string}
 */ function escapeHTML(value) {
    return value.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#x27;");
}
/**
 * performs a shallow merge of multiple objects into one
 *
 * @template T
 * @param {T} original
 * @param {Record<string,any>[]} objects
 * @returns {T} a single new object
 */ function inherit$1(original, ...objects) {
    /** @type Record<string,any> */ const result = Object.create(null);
    for(const key in original){
        result[key] = original[key];
    }
    objects.forEach(function(obj) {
        for(const key in obj){
            result[key] = obj[key];
        }
    });
    return /** @type {T} */ result;
}
/**
 * @typedef {object} Renderer
 * @property {(text: string) => void} addText
 * @property {(node: Node) => void} openNode
 * @property {(node: Node) => void} closeNode
 * @property {() => string} value
 */ /** @typedef {{scope?: string, language?: string, sublanguage?: boolean}} Node */ /** @typedef {{walk: (r: Renderer) => void}} Tree */ /** */ const SPAN_CLOSE = "</span>";
/**
 * Determines if a node needs to be wrapped in <span>
 *
 * @param {Node} node */ const emitsWrappingTags = (node)=>{
    // rarely we can have a sublanguage where language is undefined
    // TODO: track down why
    return !!node.scope;
};
/**
 *
 * @param {string} name
 * @param {{prefix:string}} options
 */ const scopeToCSSClass = (name, { prefix })=>{
    // sub-language
    if (name.startsWith("language:")) {
        return name.replace("language:", "language-");
    }
    // tiered scope: comment.line
    if (name.includes(".")) {
        const pieces = name.split(".");
        return [
            `${prefix}${pieces.shift()}`,
            ...pieces.map((x, i)=>`${x}${"_".repeat(i + 1)}`)
        ].join(" ");
    }
    // simple scope
    return `${prefix}${name}`;
};
/** @type {Renderer} */ class HTMLRenderer {
    /**
   * Creates a new HTMLRenderer
   *
   * @param {Tree} parseTree - the parse tree (must support `walk` API)
   * @param {{classPrefix: string}} options
   */ constructor(parseTree, options){
        this.buffer = "";
        this.classPrefix = options.classPrefix;
        parseTree.walk(this);
    }
    /**
   * Adds texts to the output stream
   *
   * @param {string} text */ addText(text) {
        this.buffer += escapeHTML(text);
    }
    /**
   * Adds a node open to the output stream (if needed)
   *
   * @param {Node} node */ openNode(node) {
        if (!emitsWrappingTags(node)) return;
        const className = scopeToCSSClass(node.scope, {
            prefix: this.classPrefix
        });
        this.span(className);
    }
    /**
   * Adds a node close to the output stream (if needed)
   *
   * @param {Node} node */ closeNode(node) {
        if (!emitsWrappingTags(node)) return;
        this.buffer += SPAN_CLOSE;
    }
    /**
   * returns the accumulated buffer
  */ value() {
        return this.buffer;
    }
    // helpers
    /**
   * Builds a span element
   *
   * @param {string} className */ span(className) {
        this.buffer += `<span class="${className}">`;
    }
}
/** @typedef {{scope?: string, language?: string, sublanguage?: boolean, children: Node[]} | string} Node */ /** @typedef {{scope?: string, language?: string, sublanguage?: boolean, children: Node[]} } DataNode */ /** @typedef {import('highlight.js').Emitter} Emitter */ /**  */ /** @returns {DataNode} */ const newNode = (opts = {})=>{
    /** @type DataNode */ const result = {
        children: []
    };
    Object.assign(result, opts);
    return result;
};
class TokenTree {
    constructor(){
        /** @type DataNode */ this.rootNode = newNode();
        this.stack = [
            this.rootNode
        ];
    }
    get top() {
        return this.stack[this.stack.length - 1];
    }
    get root() {
        return this.rootNode;
    }
    /** @param {Node} node */ add(node) {
        this.top.children.push(node);
    }
    /** @param {string} scope */ openNode(scope) {
        /** @type Node */ const node = newNode({
            scope
        });
        this.add(node);
        this.stack.push(node);
    }
    closeNode() {
        if (this.stack.length > 1) {
            return this.stack.pop();
        }
        // eslint-disable-next-line no-undefined
        return undefined;
    }
    closeAllNodes() {
        while(this.closeNode());
    }
    toJSON() {
        return JSON.stringify(this.rootNode, null, 4);
    }
    /**
   * @typedef { import("./html_renderer").Renderer } Renderer
   * @param {Renderer} builder
   */ walk(builder) {
        // this does not
        return this.constructor._walk(builder, this.rootNode);
    // this works
    // return TokenTree._walk(builder, this.rootNode);
    }
    /**
   * @param {Renderer} builder
   * @param {Node} node
   */ static _walk(builder, node) {
        if (typeof node === "string") {
            builder.addText(node);
        } else if (node.children) {
            builder.openNode(node);
            node.children.forEach((child)=>this._walk(builder, child));
            builder.closeNode(node);
        }
        return builder;
    }
    /**
   * @param {Node} node
   */ static _collapse(node) {
        if (typeof node === "string") return;
        if (!node.children) return;
        if (node.children.every((el)=>typeof el === "string")) {
            // node.text = node.children.join("");
            // delete node.children;
            node.children = [
                node.children.join("")
            ];
        } else {
            node.children.forEach((child)=>{
                TokenTree._collapse(child);
            });
        }
    }
}
/**
  Currently this is all private API, but this is the minimal API necessary
  that an Emitter must implement to fully support the parser.

  Minimal interface:

  - addText(text)
  - __addSublanguage(emitter, subLanguageName)
  - startScope(scope)
  - endScope()
  - finalize()
  - toHTML()

*/ /**
 * @implements {Emitter}
 */ class TokenTreeEmitter extends TokenTree {
    /**
   * @param {*} options
   */ constructor(options){
        super();
        this.options = options;
    }
    /**
   * @param {string} text
   */ addText(text) {
        if (text === "") {
            return;
        }
        this.add(text);
    }
    /** @param {string} scope */ startScope(scope) {
        this.openNode(scope);
    }
    endScope() {
        this.closeNode();
    }
    /**
   * @param {Emitter & {root: DataNode}} emitter
   * @param {string} name
   */ __addSublanguage(emitter, name) {
        /** @type DataNode */ const node = emitter.root;
        if (name) node.scope = `language:${name}`;
        this.add(node);
    }
    toHTML() {
        const renderer = new HTMLRenderer(this, this.options);
        return renderer.value();
    }
    finalize() {
        this.closeAllNodes();
        return true;
    }
}
/**
 * @param {string} value
 * @returns {RegExp}
 * */ /**
 * @param {RegExp | string } re
 * @returns {string}
 */ function source(re) {
    if (!re) return null;
    if (typeof re === "string") return re;
    return re.source;
}
/**
 * @param {RegExp | string } re
 * @returns {string}
 */ function lookahead(re) {
    return concat("(?=", re, ")");
}
/**
 * @param {RegExp | string } re
 * @returns {string}
 */ function anyNumberOfTimes(re) {
    return concat("(?:", re, ")*");
}
/**
 * @param {RegExp | string } re
 * @returns {string}
 */ function optional(re) {
    return concat("(?:", re, ")?");
}
/**
 * @param {...(RegExp | string) } args
 * @returns {string}
 */ function concat(...args) {
    const joined = args.map((x)=>source(x)).join("");
    return joined;
}
/**
 * @param { Array<string | RegExp | Object> } args
 * @returns {object}
 */ function stripOptionsFromArgs(args) {
    const opts = args[args.length - 1];
    if (typeof opts === "object" && opts.constructor === Object) {
        args.splice(args.length - 1, 1);
        return opts;
    } else {
        return {};
    }
}
/** @typedef { {capture?: boolean} } RegexEitherOptions */ /**
 * Any of the passed expresssions may match
 *
 * Creates a huge this | this | that | that match
 * @param {(RegExp | string)[] | [...(RegExp | string)[], RegexEitherOptions]} args
 * @returns {string}
 */ function either(...args) {
    /** @type { object & {capture?: boolean} }  */ const opts = stripOptionsFromArgs(args);
    const joined = "(" + (opts.capture ? "" : "?:") + args.map((x)=>source(x)).join("|") + ")";
    return joined;
}
/**
 * @param {RegExp | string} re
 * @returns {number}
 */ function countMatchGroups(re) {
    return new RegExp(re.toString() + "|").exec("").length - 1;
}
/**
 * Does lexeme start with a regular expression match at the beginning
 * @param {RegExp} re
 * @param {string} lexeme
 */ function startsWith(re, lexeme) {
    const match = re && re.exec(lexeme);
    return match && match.index === 0;
}
// BACKREF_RE matches an open parenthesis or backreference. To avoid
// an incorrect parse, it additionally matches the following:
// - [...] elements, where the meaning of parentheses and escapes change
// - other escape sequences, so we do not misparse escape sequences as
//   interesting elements
// - non-matching or lookahead parentheses, which do not capture. These
//   follow the '(' with a '?'.
const BACKREF_RE = /\[(?:[^\\\]]|\\.)*\]|\(\??|\\([1-9][0-9]*)|\\./;
// **INTERNAL** Not intended for outside usage
// join logically computes regexps.join(separator), but fixes the
// backreferences so they continue to match.
// it also places each individual regular expression into it's own
// match group, keeping track of the sequencing of those match groups
// is currently an exercise for the caller. :-)
/**
 * @param {(string | RegExp)[]} regexps
 * @param {{joinWith: string}} opts
 * @returns {string}
 */ function _rewriteBackreferences(regexps, { joinWith }) {
    let numCaptures = 0;
    return regexps.map((regex)=>{
        numCaptures += 1;
        const offset = numCaptures;
        let re = source(regex);
        let out = "";
        while(re.length > 0){
            const match = BACKREF_RE.exec(re);
            if (!match) {
                out += re;
                break;
            }
            out += re.substring(0, match.index);
            re = re.substring(match.index + match[0].length);
            if (match[0][0] === "\\" && match[1]) {
                // Adjust the backreference.
                out += "\\" + String(Number(match[1]) + offset);
            } else {
                out += match[0];
                if (match[0] === "(") {
                    numCaptures++;
                }
            }
        }
        return out;
    }).map((re)=>`(${re})`).join(joinWith);
}
/** @typedef {import('highlight.js').Mode} Mode */ /** @typedef {import('highlight.js').ModeCallback} ModeCallback */ // Common regexps
const MATCH_NOTHING_RE = /\b\B/;
const IDENT_RE = "[a-zA-Z]\\w*";
const UNDERSCORE_IDENT_RE = "[a-zA-Z_]\\w*";
const NUMBER_RE = "\\b\\d+(\\.\\d+)?";
const C_NUMBER_RE = "(-?)(\\b0[xX][a-fA-F0-9]+|(\\b\\d+(\\.\\d*)?|\\.\\d+)([eE][-+]?\\d+)?)"; // 0x..., 0..., decimal, float
const BINARY_NUMBER_RE = "\\b(0b[01]+)"; // 0b...
const RE_STARTERS_RE = "!|!=|!==|%|%=|&|&&|&=|\\*|\\*=|\\+|\\+=|,|-|-=|/=|/|:|;|<<|<<=|<=|<|===|==|=|>>>=|>>=|>=|>>>|>>|>|\\?|\\[|\\{|\\(|\\^|\\^=|\\||\\|=|\\|\\||~";
/**
* @param { Partial<Mode> & {binary?: string | RegExp} } opts
*/ const SHEBANG = (opts = {})=>{
    const beginShebang = /^#![ ]*\//;
    if (opts.binary) {
        opts.begin = concat(beginShebang, /.*\b/, opts.binary, /\b.*/);
    }
    return inherit$1({
        scope: "meta",
        begin: beginShebang,
        end: /$/,
        relevance: 0,
        /** @type {ModeCallback} */ "on:begin": (m, resp)=>{
            if (m.index !== 0) resp.ignoreMatch();
        }
    }, opts);
};
// Common modes
const BACKSLASH_ESCAPE = {
    begin: "\\\\[\\s\\S]",
    relevance: 0
};
const APOS_STRING_MODE = {
    scope: "string",
    begin: "'",
    end: "'",
    illegal: "\\n",
    contains: [
        BACKSLASH_ESCAPE
    ]
};
const QUOTE_STRING_MODE = {
    scope: "string",
    begin: '"',
    end: '"',
    illegal: "\\n",
    contains: [
        BACKSLASH_ESCAPE
    ]
};
const PHRASAL_WORDS_MODE = {
    begin: /\b(a|an|the|are|I'm|isn't|don't|doesn't|won't|but|just|should|pretty|simply|enough|gonna|going|wtf|so|such|will|you|your|they|like|more)\b/
};
/**
 * Creates a comment mode
 *
 * @param {string | RegExp} begin
 * @param {string | RegExp} end
 * @param {Mode | {}} [modeOptions]
 * @returns {Partial<Mode>}
 */ const COMMENT = function(begin, end, modeOptions = {}) {
    const mode = inherit$1({
        scope: "comment",
        begin,
        end,
        contains: []
    }, modeOptions);
    mode.contains.push({
        scope: "doctag",
        // hack to avoid the space from being included. the space is necessary to
        // match here to prevent the plain text rule below from gobbling up doctags
        begin: "[ ]*(?=(TODO|FIXME|NOTE|BUG|OPTIMIZE|HACK|XXX):)",
        end: /(TODO|FIXME|NOTE|BUG|OPTIMIZE|HACK|XXX):/,
        excludeBegin: true,
        relevance: 0
    });
    const ENGLISH_WORD = either(// list of common 1 and 2 letter words in English
    "I", "a", "is", "so", "us", "to", "at", "if", "in", "it", "on", // note: this is not an exhaustive list of contractions, just popular ones
    /[A-Za-z]+['](d|ve|re|ll|t|s|n)/, /[A-Za-z]+[-][a-z]+/, /[A-Za-z][a-z]{2,}/ // allow capitalized words at beginning of sentences
    );
    // looking like plain text, more likely to be a comment
    mode.contains.push({
        // TODO: how to include ", (, ) without breaking grammars that use these for
        // comment delimiters?
        // begin: /[ ]+([()"]?([A-Za-z'-]{3,}|is|a|I|so|us|[tT][oO]|at|if|in|it|on)[.]?[()":]?([.][ ]|[ ]|\))){3}/
        // ---
        // this tries to find sequences of 3 english words in a row (without any
        // "programming" type syntax) this gives us a strong signal that we've
        // TRULY found a comment - vs perhaps scanning with the wrong language.
        // It's possible to find something that LOOKS like the start of the
        // comment - but then if there is no readable text - good chance it is a
        // false match and not a comment.
        //
        // for a visual example please see:
        // https://github.com/highlightjs/highlight.js/issues/2827
        begin: concat(/[ ]+/, "(", ENGLISH_WORD, /[.]?[:]?([.][ ]|[ ])/, "){3}") // look for 3 words in a row
    });
    return mode;
};
const C_LINE_COMMENT_MODE = COMMENT("//", "$");
const C_BLOCK_COMMENT_MODE = COMMENT("/\\*", "\\*/");
const HASH_COMMENT_MODE = COMMENT("#", "$");
const NUMBER_MODE = {
    scope: "number",
    begin: NUMBER_RE,
    relevance: 0
};
const C_NUMBER_MODE = {
    scope: "number",
    begin: C_NUMBER_RE,
    relevance: 0
};
const BINARY_NUMBER_MODE = {
    scope: "number",
    begin: BINARY_NUMBER_RE,
    relevance: 0
};
const REGEXP_MODE = {
    // this outer rule makes sure we actually have a WHOLE regex and not simply
    // an expression such as:
    //
    //     3 / something
    //
    // (which will then blow up when regex's `illegal` sees the newline)
    begin: /(?=\/[^/\n]*\/)/,
    contains: [
        {
            scope: "regexp",
            begin: /\//,
            end: /\/[gimuy]*/,
            illegal: /\n/,
            contains: [
                BACKSLASH_ESCAPE,
                {
                    begin: /\[/,
                    end: /\]/,
                    relevance: 0,
                    contains: [
                        BACKSLASH_ESCAPE
                    ]
                }
            ]
        }
    ]
};
const TITLE_MODE = {
    scope: "title",
    begin: IDENT_RE,
    relevance: 0
};
const UNDERSCORE_TITLE_MODE = {
    scope: "title",
    begin: UNDERSCORE_IDENT_RE,
    relevance: 0
};
const METHOD_GUARD = {
    // excludes method names from keyword processing
    begin: "\\.\\s*" + UNDERSCORE_IDENT_RE,
    relevance: 0
};
/**
 * Adds end same as begin mechanics to a mode
 *
 * Your mode must include at least a single () match group as that first match
 * group is what is used for comparison
 * @param {Partial<Mode>} mode
 */ const END_SAME_AS_BEGIN = function(mode) {
    return Object.assign(mode, {
        /** @type {ModeCallback} */ "on:begin": (m, resp)=>{
            resp.data._beginMatch = m[1];
        },
        /** @type {ModeCallback} */ "on:end": (m, resp)=>{
            if (resp.data._beginMatch !== m[1]) resp.ignoreMatch();
        }
    });
};
var MODES = /*#__PURE__*/ Object.freeze({
    __proto__: null,
    MATCH_NOTHING_RE: MATCH_NOTHING_RE,
    IDENT_RE: IDENT_RE,
    UNDERSCORE_IDENT_RE: UNDERSCORE_IDENT_RE,
    NUMBER_RE: NUMBER_RE,
    C_NUMBER_RE: C_NUMBER_RE,
    BINARY_NUMBER_RE: BINARY_NUMBER_RE,
    RE_STARTERS_RE: RE_STARTERS_RE,
    SHEBANG: SHEBANG,
    BACKSLASH_ESCAPE: BACKSLASH_ESCAPE,
    APOS_STRING_MODE: APOS_STRING_MODE,
    QUOTE_STRING_MODE: QUOTE_STRING_MODE,
    PHRASAL_WORDS_MODE: PHRASAL_WORDS_MODE,
    COMMENT: COMMENT,
    C_LINE_COMMENT_MODE: C_LINE_COMMENT_MODE,
    C_BLOCK_COMMENT_MODE: C_BLOCK_COMMENT_MODE,
    HASH_COMMENT_MODE: HASH_COMMENT_MODE,
    NUMBER_MODE: NUMBER_MODE,
    C_NUMBER_MODE: C_NUMBER_MODE,
    BINARY_NUMBER_MODE: BINARY_NUMBER_MODE,
    REGEXP_MODE: REGEXP_MODE,
    TITLE_MODE: TITLE_MODE,
    UNDERSCORE_TITLE_MODE: UNDERSCORE_TITLE_MODE,
    METHOD_GUARD: METHOD_GUARD,
    END_SAME_AS_BEGIN: END_SAME_AS_BEGIN
});
/**
@typedef {import('highlight.js').CallbackResponse} CallbackResponse
@typedef {import('highlight.js').CompilerExt} CompilerExt
*/ // Grammar extensions / plugins
// See: https://github.com/highlightjs/highlight.js/issues/2833
// Grammar extensions allow "syntactic sugar" to be added to the grammar modes
// without requiring any underlying changes to the compiler internals.
// `compileMatch` being the perfect small example of now allowing a grammar
// author to write `match` when they desire to match a single expression rather
// than being forced to use `begin`.  The extension then just moves `match` into
// `begin` when it runs.  Ie, no features have been added, but we've just made
// the experience of writing (and reading grammars) a little bit nicer.
// ------
// TODO: We need negative look-behind support to do this properly
/**
 * Skip a match if it has a preceding dot
 *
 * This is used for `beginKeywords` to prevent matching expressions such as
 * `bob.keyword.do()`. The mode compiler automatically wires this up as a
 * special _internal_ 'on:begin' callback for modes with `beginKeywords`
 * @param {RegExpMatchArray} match
 * @param {CallbackResponse} response
 */ function skipIfHasPrecedingDot(match, response) {
    const before = match.input[match.index - 1];
    if (before === ".") {
        response.ignoreMatch();
    }
}
/**
 *
 * @type {CompilerExt}
 */ function scopeClassName(mode, _parent) {
    // eslint-disable-next-line no-undefined
    if (mode.className !== undefined) {
        mode.scope = mode.className;
        delete mode.className;
    }
}
/**
 * `beginKeywords` syntactic sugar
 * @type {CompilerExt}
 */ function beginKeywords(mode, parent) {
    if (!parent) return;
    if (!mode.beginKeywords) return;
    // for languages with keywords that include non-word characters checking for
    // a word boundary is not sufficient, so instead we check for a word boundary
    // or whitespace - this does no harm in any case since our keyword engine
    // doesn't allow spaces in keywords anyways and we still check for the boundary
    // first
    mode.begin = "\\b(" + mode.beginKeywords.split(" ").join("|") + ")(?!\\.)(?=\\b|\\s)";
    mode.__beforeBegin = skipIfHasPrecedingDot;
    mode.keywords = mode.keywords || mode.beginKeywords;
    delete mode.beginKeywords;
    // prevents double relevance, the keywords themselves provide
    // relevance, the mode doesn't need to double it
    // eslint-disable-next-line no-undefined
    if (mode.relevance === undefined) mode.relevance = 0;
}
/**
 * Allow `illegal` to contain an array of illegal values
 * @type {CompilerExt}
 */ function compileIllegal(mode, _parent) {
    if (!Array.isArray(mode.illegal)) return;
    mode.illegal = either(...mode.illegal);
}
/**
 * `match` to match a single expression for readability
 * @type {CompilerExt}
 */ function compileMatch(mode, _parent) {
    if (!mode.match) return;
    if (mode.begin || mode.end) throw new Error("begin & end are not supported with match");
    mode.begin = mode.match;
    delete mode.match;
}
/**
 * provides the default 1 relevance to all modes
 * @type {CompilerExt}
 */ function compileRelevance(mode, _parent) {
    // eslint-disable-next-line no-undefined
    if (mode.relevance === undefined) mode.relevance = 1;
}
// allow beforeMatch to act as a "qualifier" for the match
// the full match begin must be [beforeMatch][begin]
const beforeMatchExt = (mode, parent)=>{
    if (!mode.beforeMatch) return;
    // starts conflicts with endsParent which we need to make sure the child
    // rule is not matched multiple times
    if (mode.starts) throw new Error("beforeMatch cannot be used with starts");
    const originalMode = Object.assign({}, mode);
    Object.keys(mode).forEach((key)=>{
        delete mode[key];
    });
    mode.keywords = originalMode.keywords;
    mode.begin = concat(originalMode.beforeMatch, lookahead(originalMode.begin));
    mode.starts = {
        relevance: 0,
        contains: [
            Object.assign(originalMode, {
                endsParent: true
            })
        ]
    };
    mode.relevance = 0;
    delete originalMode.beforeMatch;
};
// keywords that should have no default relevance value
const COMMON_KEYWORDS = [
    "of",
    "and",
    "for",
    "in",
    "not",
    "or",
    "if",
    "then",
    "parent",
    "list",
    "value" // common variable name
];
const DEFAULT_KEYWORD_SCOPE = "keyword";
/**
 * Given raw keywords from a language definition, compile them.
 *
 * @param {string | Record<string,string|string[]> | Array<string>} rawKeywords
 * @param {boolean} caseInsensitive
 */ function compileKeywords(rawKeywords, caseInsensitive, scopeName = DEFAULT_KEYWORD_SCOPE) {
    /** @type {import("highlight.js/private").KeywordDict} */ const compiledKeywords = Object.create(null);
    // input can be a string of keywords, an array of keywords, or a object with
    // named keys representing scopeName (which can then point to a string or array)
    if (typeof rawKeywords === "string") {
        compileList(scopeName, rawKeywords.split(" "));
    } else if (Array.isArray(rawKeywords)) {
        compileList(scopeName, rawKeywords);
    } else {
        Object.keys(rawKeywords).forEach(function(scopeName) {
            // collapse all our objects back into the parent object
            Object.assign(compiledKeywords, compileKeywords(rawKeywords[scopeName], caseInsensitive, scopeName));
        });
    }
    return compiledKeywords;
    // ---
    /**
   * Compiles an individual list of keywords
   *
   * Ex: "for if when while|5"
   *
   * @param {string} scopeName
   * @param {Array<string>} keywordList
   */ function compileList(scopeName, keywordList) {
        if (caseInsensitive) {
            keywordList = keywordList.map((x)=>x.toLowerCase());
        }
        keywordList.forEach(function(keyword) {
            const pair = keyword.split("|");
            compiledKeywords[pair[0]] = [
                scopeName,
                scoreForKeyword(pair[0], pair[1])
            ];
        });
    }
}
/**
 * Returns the proper score for a given keyword
 *
 * Also takes into account comment keywords, which will be scored 0 UNLESS
 * another score has been manually assigned.
 * @param {string} keyword
 * @param {string} [providedScore]
 */ function scoreForKeyword(keyword, providedScore) {
    // manual scores always win over common keywords
    // so you can force a score of 1 if you really insist
    if (providedScore) {
        return Number(providedScore);
    }
    return commonKeyword(keyword) ? 0 : 1;
}
/**
 * Determines if a given keyword is common or not
 *
 * @param {string} keyword */ function commonKeyword(keyword) {
    return COMMON_KEYWORDS.includes(keyword.toLowerCase());
}
/*

For the reasoning behind this please see:
https://github.com/highlightjs/highlight.js/issues/2880#issuecomment-747275419

*/ /**
 * @type {Record<string, boolean>}
 */ const seenDeprecations = {};
/**
 * @param {string} message
 */ const error = (message)=>{
    console.error(message);
};
/**
 * @param {string} message
 * @param {any} args
 */ const warn = (message, ...args)=>{
    console.log(`WARN: ${message}`, ...args);
};
/**
 * @param {string} version
 * @param {string} message
 */ const deprecated = (version, message)=>{
    if (seenDeprecations[`${version}/${message}`]) return;
    console.log(`Deprecated as of ${version}. ${message}`);
    seenDeprecations[`${version}/${message}`] = true;
};
/* eslint-disable no-throw-literal */ /**
@typedef {import('highlight.js').CompiledMode} CompiledMode
*/ const MultiClassError = new Error();
/**
 * Renumbers labeled scope names to account for additional inner match
 * groups that otherwise would break everything.
 *
 * Lets say we 3 match scopes:
 *
 *   { 1 => ..., 2 => ..., 3 => ... }
 *
 * So what we need is a clean match like this:
 *
 *   (a)(b)(c) => [ "a", "b", "c" ]
 *
 * But this falls apart with inner match groups:
 *
 * (a)(((b)))(c) => ["a", "b", "b", "b", "c" ]
 *
 * Our scopes are now "out of alignment" and we're repeating `b` 3 times.
 * What needs to happen is the numbers are remapped:
 *
 *   { 1 => ..., 2 => ..., 5 => ... }
 *
 * We also need to know that the ONLY groups that should be output
 * are 1, 2, and 5.  This function handles this behavior.
 *
 * @param {CompiledMode} mode
 * @param {Array<RegExp | string>} regexes
 * @param {{key: "beginScope"|"endScope"}} opts
 */ function remapScopeNames(mode, regexes, { key }) {
    let offset = 0;
    const scopeNames = mode[key];
    /** @type Record<number,boolean> */ const emit = {};
    /** @type Record<number,string> */ const positions = {};
    for(let i = 1; i <= regexes.length; i++){
        positions[i + offset] = scopeNames[i];
        emit[i + offset] = true;
        offset += countMatchGroups(regexes[i - 1]);
    }
    // we use _emit to keep track of which match groups are "top-level" to avoid double
    // output from inside match groups
    mode[key] = positions;
    mode[key]._emit = emit;
    mode[key]._multi = true;
}
/**
 * @param {CompiledMode} mode
 */ function beginMultiClass(mode) {
    if (!Array.isArray(mode.begin)) return;
    if (mode.skip || mode.excludeBegin || mode.returnBegin) {
        error("skip, excludeBegin, returnBegin not compatible with beginScope: {}");
        throw MultiClassError;
    }
    if (typeof mode.beginScope !== "object" || mode.beginScope === null) {
        error("beginScope must be object");
        throw MultiClassError;
    }
    remapScopeNames(mode, mode.begin, {
        key: "beginScope"
    });
    mode.begin = _rewriteBackreferences(mode.begin, {
        joinWith: ""
    });
}
/**
 * @param {CompiledMode} mode
 */ function endMultiClass(mode) {
    if (!Array.isArray(mode.end)) return;
    if (mode.skip || mode.excludeEnd || mode.returnEnd) {
        error("skip, excludeEnd, returnEnd not compatible with endScope: {}");
        throw MultiClassError;
    }
    if (typeof mode.endScope !== "object" || mode.endScope === null) {
        error("endScope must be object");
        throw MultiClassError;
    }
    remapScopeNames(mode, mode.end, {
        key: "endScope"
    });
    mode.end = _rewriteBackreferences(mode.end, {
        joinWith: ""
    });
}
/**
 * this exists only to allow `scope: {}` to be used beside `match:`
 * Otherwise `beginScope` would necessary and that would look weird

  {
    match: [ /def/, /\w+/ ]
    scope: { 1: "keyword" , 2: "title" }
  }

 * @param {CompiledMode} mode
 */ function scopeSugar(mode) {
    if (mode.scope && typeof mode.scope === "object" && mode.scope !== null) {
        mode.beginScope = mode.scope;
        delete mode.scope;
    }
}
/**
 * @param {CompiledMode} mode
 */ function MultiClass(mode) {
    scopeSugar(mode);
    if (typeof mode.beginScope === "string") {
        mode.beginScope = {
            _wrap: mode.beginScope
        };
    }
    if (typeof mode.endScope === "string") {
        mode.endScope = {
            _wrap: mode.endScope
        };
    }
    beginMultiClass(mode);
    endMultiClass(mode);
}
/**
@typedef {import('highlight.js').Mode} Mode
@typedef {import('highlight.js').CompiledMode} CompiledMode
@typedef {import('highlight.js').Language} Language
@typedef {import('highlight.js').HLJSPlugin} HLJSPlugin
@typedef {import('highlight.js').CompiledLanguage} CompiledLanguage
*/ // compilation
/**
 * Compiles a language definition result
 *
 * Given the raw result of a language definition (Language), compiles this so
 * that it is ready for highlighting code.
 * @param {Language} language
 * @returns {CompiledLanguage}
 */ function compileLanguage(language) {
    /**
   * Builds a regex with the case sensitivity of the current language
   *
   * @param {RegExp | string} value
   * @param {boolean} [global]
   */ function langRe(value, global) {
        return new RegExp(source(value), "m" + (language.case_insensitive ? "i" : "") + (language.unicodeRegex ? "u" : "") + (global ? "g" : ""));
    }
    /**
    Stores multiple regular expressions and allows you to quickly search for
    them all in a string simultaneously - returning the first match.  It does
    this by creating a huge (a|b|c) regex - each individual item wrapped with ()
    and joined by `|` - using match groups to track position.  When a match is
    found checking which position in the array has content allows us to figure
    out which of the original regexes / match groups triggered the match.

    The match object itself (the result of `Regex.exec`) is returned but also
    enhanced by merging in any meta-data that was registered with the regex.
    This is how we keep track of which mode matched, and what type of rule
    (`illegal`, `begin`, end, etc).
  */ class MultiRegex {
        constructor(){
            this.matchIndexes = {};
            // @ts-ignore
            this.regexes = [];
            this.matchAt = 1;
            this.position = 0;
        }
        // @ts-ignore
        addRule(re, opts) {
            opts.position = this.position++;
            // @ts-ignore
            this.matchIndexes[this.matchAt] = opts;
            this.regexes.push([
                opts,
                re
            ]);
            this.matchAt += countMatchGroups(re) + 1;
        }
        compile() {
            if (this.regexes.length === 0) {
                // avoids the need to check length every time exec is called
                // @ts-ignore
                this.exec = ()=>null;
            }
            const terminators = this.regexes.map((el)=>el[1]);
            this.matcherRe = langRe(_rewriteBackreferences(terminators, {
                joinWith: "|"
            }), true);
            this.lastIndex = 0;
        }
        /** @param {string} s */ exec(s) {
            this.matcherRe.lastIndex = this.lastIndex;
            const match = this.matcherRe.exec(s);
            if (!match) {
                return null;
            }
            // eslint-disable-next-line no-undefined
            const i = match.findIndex((el, i)=>i > 0 && el !== undefined);
            // @ts-ignore
            const matchData = this.matchIndexes[i];
            // trim off any earlier non-relevant match groups (ie, the other regex
            // match groups that make up the multi-matcher)
            match.splice(0, i);
            return Object.assign(match, matchData);
        }
    }
    /*
    Created to solve the key deficiently with MultiRegex - there is no way to
    test for multiple matches at a single location.  Why would we need to do
    that?  In the future a more dynamic engine will allow certain matches to be
    ignored.  An example: if we matched say the 3rd regex in a large group but
    decided to ignore it - we'd need to started testing again at the 4th
    regex... but MultiRegex itself gives us no real way to do that.

    So what this class creates MultiRegexs on the fly for whatever search
    position they are needed.

    NOTE: These additional MultiRegex objects are created dynamically.  For most
    grammars most of the time we will never actually need anything more than the
    first MultiRegex - so this shouldn't have too much overhead.

    Say this is our search group, and we match regex3, but wish to ignore it.

      regex1 | regex2 | regex3 | regex4 | regex5    ' ie, startAt = 0

    What we need is a new MultiRegex that only includes the remaining
    possibilities:

      regex4 | regex5                               ' ie, startAt = 3

    This class wraps all that complexity up in a simple API... `startAt` decides
    where in the array of expressions to start doing the matching. It
    auto-increments, so if a match is found at position 2, then startAt will be
    set to 3.  If the end is reached startAt will return to 0.

    MOST of the time the parser will be setting startAt manually to 0.
  */ class ResumableMultiRegex {
        constructor(){
            // @ts-ignore
            this.rules = [];
            // @ts-ignore
            this.multiRegexes = [];
            this.count = 0;
            this.lastIndex = 0;
            this.regexIndex = 0;
        }
        // @ts-ignore
        getMatcher(index) {
            if (this.multiRegexes[index]) return this.multiRegexes[index];
            const matcher = new MultiRegex();
            this.rules.slice(index).forEach(([re, opts])=>matcher.addRule(re, opts));
            matcher.compile();
            this.multiRegexes[index] = matcher;
            return matcher;
        }
        resumingScanAtSamePosition() {
            return this.regexIndex !== 0;
        }
        considerAll() {
            this.regexIndex = 0;
        }
        // @ts-ignore
        addRule(re, opts) {
            this.rules.push([
                re,
                opts
            ]);
            if (opts.type === "begin") this.count++;
        }
        /** @param {string} s */ exec(s) {
            const m = this.getMatcher(this.regexIndex);
            m.lastIndex = this.lastIndex;
            let result = m.exec(s);
            // The following is because we have no easy way to say "resume scanning at the
            // existing position but also skip the current rule ONLY". What happens is
            // all prior rules are also skipped which can result in matching the wrong
            // thing. Example of matching "booger":
            // our matcher is [string, "booger", number]
            //
            // ....booger....
            // if "booger" is ignored then we'd really need a regex to scan from the
            // SAME position for only: [string, number] but ignoring "booger" (if it
            // was the first match), a simple resume would scan ahead who knows how
            // far looking only for "number", ignoring potential string matches (or
            // future "booger" matches that might be valid.)
            // So what we do: We execute two matchers, one resuming at the same
            // position, but the second full matcher starting at the position after:
            //     /--- resume first regex match here (for [number])
            //     |/---- full match here for [string, "booger", number]
            //     vv
            // ....booger....
            // Which ever results in a match first is then used. So this 3-4 step
            // process essentially allows us to say "match at this position, excluding
            // a prior rule that was ignored".
            //
            // 1. Match "booger" first, ignore. Also proves that [string] does non match.
            // 2. Resume matching for [number]
            // 3. Match at index + 1 for [string, "booger", number]
            // 4. If #2 and #3 result in matches, which came first?
            if (this.resumingScanAtSamePosition()) {
                if (result && result.index === this.lastIndex) ;
                else {
                    const m2 = this.getMatcher(0);
                    m2.lastIndex = this.lastIndex + 1;
                    result = m2.exec(s);
                }
            }
            if (result) {
                this.regexIndex += result.position + 1;
                if (this.regexIndex === this.count) {
                    // wrap-around to considering all matches again
                    this.considerAll();
                }
            }
            return result;
        }
    }
    /**
   * Given a mode, builds a huge ResumableMultiRegex that can be used to walk
   * the content and find matches.
   *
   * @param {CompiledMode} mode
   * @returns {ResumableMultiRegex}
   */ function buildModeRegex(mode) {
        const mm = new ResumableMultiRegex();
        mode.contains.forEach((term)=>mm.addRule(term.begin, {
                rule: term,
                type: "begin"
            }));
        if (mode.terminatorEnd) {
            mm.addRule(mode.terminatorEnd, {
                type: "end"
            });
        }
        if (mode.illegal) {
            mm.addRule(mode.illegal, {
                type: "illegal"
            });
        }
        return mm;
    }
    /** skip vs abort vs ignore
   *
   * @skip   - The mode is still entered and exited normally (and contains rules apply),
   *           but all content is held and added to the parent buffer rather than being
   *           output when the mode ends.  Mostly used with `sublanguage` to build up
   *           a single large buffer than can be parsed by sublanguage.
   *
   *             - The mode begin ands ends normally.
   *             - Content matched is added to the parent mode buffer.
   *             - The parser cursor is moved forward normally.
   *
   * @abort  - A hack placeholder until we have ignore.  Aborts the mode (as if it
   *           never matched) but DOES NOT continue to match subsequent `contains`
   *           modes.  Abort is bad/suboptimal because it can result in modes
   *           farther down not getting applied because an earlier rule eats the
   *           content but then aborts.
   *
   *             - The mode does not begin.
   *             - Content matched by `begin` is added to the mode buffer.
   *             - The parser cursor is moved forward accordingly.
   *
   * @ignore - Ignores the mode (as if it never matched) and continues to match any
   *           subsequent `contains` modes.  Ignore isn't technically possible with
   *           the current parser implementation.
   *
   *             - The mode does not begin.
   *             - Content matched by `begin` is ignored.
   *             - The parser cursor is not moved forward.
   */ /**
   * Compiles an individual mode
   *
   * This can raise an error if the mode contains certain detectable known logic
   * issues.
   * @param {Mode} mode
   * @param {CompiledMode | null} [parent]
   * @returns {CompiledMode | never}
   */ function compileMode(mode, parent) {
        const cmode = /** @type CompiledMode */ mode;
        if (mode.isCompiled) return cmode;
        [
            scopeClassName,
            // do this early so compiler extensions generally don't have to worry about
            // the distinction between match/begin
            compileMatch,
            MultiClass,
            beforeMatchExt
        ].forEach((ext)=>ext(mode, parent));
        language.compilerExtensions.forEach((ext)=>ext(mode, parent));
        // __beforeBegin is considered private API, internal use only
        mode.__beforeBegin = null;
        [
            beginKeywords,
            // do this later so compiler extensions that come earlier have access to the
            // raw array if they wanted to perhaps manipulate it, etc.
            compileIllegal,
            // default to 1 relevance if not specified
            compileRelevance
        ].forEach((ext)=>ext(mode, parent));
        mode.isCompiled = true;
        let keywordPattern = null;
        if (typeof mode.keywords === "object" && mode.keywords.$pattern) {
            // we need a copy because keywords might be compiled multiple times
            // so we can't go deleting $pattern from the original on the first
            // pass
            mode.keywords = Object.assign({}, mode.keywords);
            keywordPattern = mode.keywords.$pattern;
            delete mode.keywords.$pattern;
        }
        keywordPattern = keywordPattern || /\w+/;
        if (mode.keywords) {
            mode.keywords = compileKeywords(mode.keywords, language.case_insensitive);
        }
        cmode.keywordPatternRe = langRe(keywordPattern, true);
        if (parent) {
            if (!mode.begin) mode.begin = /\B|\b/;
            cmode.beginRe = langRe(cmode.begin);
            if (!mode.end && !mode.endsWithParent) mode.end = /\B|\b/;
            if (mode.end) cmode.endRe = langRe(cmode.end);
            cmode.terminatorEnd = source(cmode.end) || "";
            if (mode.endsWithParent && parent.terminatorEnd) {
                cmode.terminatorEnd += (mode.end ? "|" : "") + parent.terminatorEnd;
            }
        }
        if (mode.illegal) cmode.illegalRe = langRe(/** @type {RegExp | string} */ mode.illegal);
        if (!mode.contains) mode.contains = [];
        mode.contains = [].concat(...mode.contains.map(function(c) {
            return expandOrCloneMode(c === "self" ? mode : c);
        }));
        mode.contains.forEach(function(c) {
            compileMode(/** @type Mode */ c, cmode);
        });
        if (mode.starts) {
            compileMode(mode.starts, parent);
        }
        cmode.matcher = buildModeRegex(cmode);
        return cmode;
    }
    if (!language.compilerExtensions) language.compilerExtensions = [];
    // self is not valid at the top-level
    if (language.contains && language.contains.includes("self")) {
        throw new Error("ERR: contains `self` is not supported at the top-level of a language.  See documentation.");
    }
    // we need a null object, which inherit will guarantee
    language.classNameAliases = inherit$1(language.classNameAliases || {});
    return compileMode(/** @type Mode */ language);
}
/**
 * Determines if a mode has a dependency on it's parent or not
 *
 * If a mode does have a parent dependency then often we need to clone it if
 * it's used in multiple places so that each copy points to the correct parent,
 * where-as modes without a parent can often safely be re-used at the bottom of
 * a mode chain.
 *
 * @param {Mode | null} mode
 * @returns {boolean} - is there a dependency on the parent?
 * */ function dependencyOnParent(mode) {
    if (!mode) return false;
    return mode.endsWithParent || dependencyOnParent(mode.starts);
}
/**
 * Expands a mode or clones it if necessary
 *
 * This is necessary for modes with parental dependenceis (see notes on
 * `dependencyOnParent`) and for nodes that have `variants` - which must then be
 * exploded into their own individual modes at compile time.
 *
 * @param {Mode} mode
 * @returns {Mode | Mode[]}
 * */ function expandOrCloneMode(mode) {
    if (mode.variants && !mode.cachedVariants) {
        mode.cachedVariants = mode.variants.map(function(variant) {
            return inherit$1(mode, {
                variants: null
            }, variant);
        });
    }
    // EXPAND
    // if we have variants then essentially "replace" the mode with the variants
    // this happens in compileMode, where this function is called from
    if (mode.cachedVariants) {
        return mode.cachedVariants;
    }
    // CLONE
    // if we have dependencies on parents then we need a unique
    // instance of ourselves, so we can be reused with many
    // different parents without issue
    if (dependencyOnParent(mode)) {
        return inherit$1(mode, {
            starts: mode.starts ? inherit$1(mode.starts) : null
        });
    }
    if (Object.isFrozen(mode)) {
        return inherit$1(mode);
    }
    // no special dependency issues, just return ourselves
    return mode;
}
var version = "11.8.0";
class HTMLInjectionError extends Error {
    constructor(reason, html){
        super(reason);
        this.name = "HTMLInjectionError";
        this.html = html;
    }
}
/*
Syntax highlighting with language autodetection.
https://highlightjs.org/
*/ /**
@typedef {import('highlight.js').Mode} Mode
@typedef {import('highlight.js').CompiledMode} CompiledMode
@typedef {import('highlight.js').CompiledScope} CompiledScope
@typedef {import('highlight.js').Language} Language
@typedef {import('highlight.js').HLJSApi} HLJSApi
@typedef {import('highlight.js').HLJSPlugin} HLJSPlugin
@typedef {import('highlight.js').PluginEvent} PluginEvent
@typedef {import('highlight.js').HLJSOptions} HLJSOptions
@typedef {import('highlight.js').LanguageFn} LanguageFn
@typedef {import('highlight.js').HighlightedHTMLElement} HighlightedHTMLElement
@typedef {import('highlight.js').BeforeHighlightContext} BeforeHighlightContext
@typedef {import('highlight.js/private').MatchType} MatchType
@typedef {import('highlight.js/private').KeywordData} KeywordData
@typedef {import('highlight.js/private').EnhancedMatch} EnhancedMatch
@typedef {import('highlight.js/private').AnnotatedError} AnnotatedError
@typedef {import('highlight.js').AutoHighlightResult} AutoHighlightResult
@typedef {import('highlight.js').HighlightOptions} HighlightOptions
@typedef {import('highlight.js').HighlightResult} HighlightResult
*/ const escape = escapeHTML;
const inherit = inherit$1;
const NO_MATCH = Symbol("nomatch");
const MAX_KEYWORD_HITS = 7;
/**
 * @param {any} hljs - object that is extended (legacy)
 * @returns {HLJSApi}
 */ const HLJS = function(hljs) {
    // Global internal variables used within the highlight.js library.
    /** @type {Record<string, Language>} */ const languages = Object.create(null);
    /** @type {Record<string, string>} */ const aliases = Object.create(null);
    /** @type {HLJSPlugin[]} */ const plugins = [];
    // safe/production mode - swallows more errors, tries to keep running
    // even if a single syntax or parse hits a fatal error
    let SAFE_MODE = true;
    const LANGUAGE_NOT_FOUND = "Could not find the language '{}', did you forget to load/include a language module?";
    /** @type {Language} */ const PLAINTEXT_LANGUAGE = {
        disableAutodetect: true,
        name: "Plain text",
        contains: []
    };
    // Global options used when within external APIs. This is modified when
    // calling the `hljs.configure` function.
    /** @type HLJSOptions */ let options = {
        ignoreUnescapedHTML: false,
        throwUnescapedHTML: false,
        noHighlightRe: /^(no-?highlight)$/i,
        languageDetectRe: /\blang(?:uage)?-([\w-]+)\b/i,
        classPrefix: "hljs-",
        cssSelector: "pre code",
        languages: null,
        // beta configuration options, subject to change, welcome to discuss
        // https://github.com/highlightjs/highlight.js/issues/1086
        __emitter: TokenTreeEmitter
    };
    /* Utility functions */ /**
   * Tests a language name to see if highlighting should be skipped
   * @param {string} languageName
   */ function shouldNotHighlight(languageName) {
        return options.noHighlightRe.test(languageName);
    }
    /**
   * @param {HighlightedHTMLElement} block - the HTML element to determine language for
   */ function blockLanguage(block) {
        let classes = block.className + " ";
        classes += block.parentNode ? block.parentNode.className : "";
        // language-* takes precedence over non-prefixed class names.
        const match = options.languageDetectRe.exec(classes);
        if (match) {
            const language = getLanguage(match[1]);
            if (!language) {
                warn(LANGUAGE_NOT_FOUND.replace("{}", match[1]));
                warn("Falling back to no-highlight mode for this block.", block);
            }
            return language ? match[1] : "no-highlight";
        }
        return classes.split(/\s+/).find((_class)=>shouldNotHighlight(_class) || getLanguage(_class));
    }
    /**
   * Core highlighting function.
   *
   * OLD API
   * highlight(lang, code, ignoreIllegals, continuation)
   *
   * NEW API
   * highlight(code, {lang, ignoreIllegals})
   *
   * @param {string} codeOrLanguageName - the language to use for highlighting
   * @param {string | HighlightOptions} optionsOrCode - the code to highlight
   * @param {boolean} [ignoreIllegals] - whether to ignore illegal matches, default is to bail
   *
   * @returns {HighlightResult} Result - an object that represents the result
   * @property {string} language - the language name
   * @property {number} relevance - the relevance score
   * @property {string} value - the highlighted HTML code
   * @property {string} code - the original raw code
   * @property {CompiledMode} top - top of the current mode stack
   * @property {boolean} illegal - indicates whether any illegal matches were found
  */ function highlight(codeOrLanguageName, optionsOrCode, ignoreIllegals) {
        let code = "";
        let languageName = "";
        if (typeof optionsOrCode === "object") {
            code = codeOrLanguageName;
            ignoreIllegals = optionsOrCode.ignoreIllegals;
            languageName = optionsOrCode.language;
        } else {
            // old API
            deprecated("10.7.0", "highlight(lang, code, ...args) has been deprecated.");
            deprecated("10.7.0", "Please use highlight(code, options) instead.\nhttps://github.com/highlightjs/highlight.js/issues/2277");
            languageName = codeOrLanguageName;
            code = optionsOrCode;
        }
        // https://github.com/highlightjs/highlight.js/issues/3149
        // eslint-disable-next-line no-undefined
        if (ignoreIllegals === undefined) {
            ignoreIllegals = true;
        }
        /** @type {BeforeHighlightContext} */ const context = {
            code,
            language: languageName
        };
        // the plugin can change the desired language or the code to be highlighted
        // just be changing the object it was passed
        fire("before:highlight", context);
        // a before plugin can usurp the result completely by providing it's own
        // in which case we don't even need to call highlight
        const result = context.result ? context.result : _highlight(context.language, context.code, ignoreIllegals);
        result.code = context.code;
        // the plugin can change anything in result to suite it
        fire("after:highlight", result);
        return result;
    }
    /**
   * private highlight that's used internally and does not fire callbacks
   *
   * @param {string} languageName - the language to use for highlighting
   * @param {string} codeToHighlight - the code to highlight
   * @param {boolean?} [ignoreIllegals] - whether to ignore illegal matches, default is to bail
   * @param {CompiledMode?} [continuation] - current continuation mode, if any
   * @returns {HighlightResult} - result of the highlight operation
  */ function _highlight(languageName, codeToHighlight, ignoreIllegals, continuation) {
        const keywordHits = Object.create(null);
        /**
     * Return keyword data if a match is a keyword
     * @param {CompiledMode} mode - current mode
     * @param {string} matchText - the textual match
     * @returns {KeywordData | false}
     */ function keywordData(mode, matchText) {
            return mode.keywords[matchText];
        }
        function processKeywords() {
            if (!top.keywords) {
                emitter.addText(modeBuffer);
                return;
            }
            let lastIndex = 0;
            top.keywordPatternRe.lastIndex = 0;
            let match = top.keywordPatternRe.exec(modeBuffer);
            let buf = "";
            while(match){
                buf += modeBuffer.substring(lastIndex, match.index);
                const word = language.case_insensitive ? match[0].toLowerCase() : match[0];
                const data = keywordData(top, word);
                if (data) {
                    const [kind, keywordRelevance] = data;
                    emitter.addText(buf);
                    buf = "";
                    keywordHits[word] = (keywordHits[word] || 0) + 1;
                    if (keywordHits[word] <= MAX_KEYWORD_HITS) relevance += keywordRelevance;
                    if (kind.startsWith("_")) {
                        // _ implied for relevance only, do not highlight
                        // by applying a class name
                        buf += match[0];
                    } else {
                        const cssClass = language.classNameAliases[kind] || kind;
                        emitKeyword(match[0], cssClass);
                    }
                } else {
                    buf += match[0];
                }
                lastIndex = top.keywordPatternRe.lastIndex;
                match = top.keywordPatternRe.exec(modeBuffer);
            }
            buf += modeBuffer.substring(lastIndex);
            emitter.addText(buf);
        }
        function processSubLanguage() {
            if (modeBuffer === "") return;
            /** @type HighlightResult */ let result = null;
            if (typeof top.subLanguage === "string") {
                if (!languages[top.subLanguage]) {
                    emitter.addText(modeBuffer);
                    return;
                }
                result = _highlight(top.subLanguage, modeBuffer, true, continuations[top.subLanguage]);
                continuations[top.subLanguage] = /** @type {CompiledMode} */ result._top;
            } else {
                result = highlightAuto(modeBuffer, top.subLanguage.length ? top.subLanguage : null);
            }
            // Counting embedded language score towards the host language may be disabled
            // with zeroing the containing mode relevance. Use case in point is Markdown that
            // allows XML everywhere and makes every XML snippet to have a much larger Markdown
            // score.
            if (top.relevance > 0) {
                relevance += result.relevance;
            }
            emitter.__addSublanguage(result._emitter, result.language);
        }
        function processBuffer() {
            if (top.subLanguage != null) {
                processSubLanguage();
            } else {
                processKeywords();
            }
            modeBuffer = "";
        }
        /**
     * @param {string} text
     * @param {string} scope
     */ function emitKeyword(keyword, scope) {
            if (keyword === "") return;
            emitter.startScope(scope);
            emitter.addText(keyword);
            emitter.endScope();
        }
        /**
     * @param {CompiledScope} scope
     * @param {RegExpMatchArray} match
     */ function emitMultiClass(scope, match) {
            let i = 1;
            const max = match.length - 1;
            while(i <= max){
                if (!scope._emit[i]) {
                    i++;
                    continue;
                }
                const klass = language.classNameAliases[scope[i]] || scope[i];
                const text = match[i];
                if (klass) {
                    emitKeyword(text, klass);
                } else {
                    modeBuffer = text;
                    processKeywords();
                    modeBuffer = "";
                }
                i++;
            }
        }
        /**
     * @param {CompiledMode} mode - new mode to start
     * @param {RegExpMatchArray} match
     */ function startNewMode(mode, match) {
            if (mode.scope && typeof mode.scope === "string") {
                emitter.openNode(language.classNameAliases[mode.scope] || mode.scope);
            }
            if (mode.beginScope) {
                // beginScope just wraps the begin match itself in a scope
                if (mode.beginScope._wrap) {
                    emitKeyword(modeBuffer, language.classNameAliases[mode.beginScope._wrap] || mode.beginScope._wrap);
                    modeBuffer = "";
                } else if (mode.beginScope._multi) {
                    // at this point modeBuffer should just be the match
                    emitMultiClass(mode.beginScope, match);
                    modeBuffer = "";
                }
            }
            top = Object.create(mode, {
                parent: {
                    value: top
                }
            });
            return top;
        }
        /**
     * @param {CompiledMode } mode - the mode to potentially end
     * @param {RegExpMatchArray} match - the latest match
     * @param {string} matchPlusRemainder - match plus remainder of content
     * @returns {CompiledMode | void} - the next mode, or if void continue on in current mode
     */ function endOfMode(mode, match, matchPlusRemainder) {
            let matched = startsWith(mode.endRe, matchPlusRemainder);
            if (matched) {
                if (mode["on:end"]) {
                    const resp = new Response(mode);
                    mode["on:end"](match, resp);
                    if (resp.isMatchIgnored) matched = false;
                }
                if (matched) {
                    while(mode.endsParent && mode.parent){
                        mode = mode.parent;
                    }
                    return mode;
                }
            }
            // even if on:end fires an `ignore` it's still possible
            // that we might trigger the end node because of a parent mode
            if (mode.endsWithParent) {
                return endOfMode(mode.parent, match, matchPlusRemainder);
            }
        }
        /**
     * Handle matching but then ignoring a sequence of text
     *
     * @param {string} lexeme - string containing full match text
     */ function doIgnore(lexeme) {
            if (top.matcher.regexIndex === 0) {
                // no more regexes to potentially match here, so we move the cursor forward one
                // space
                modeBuffer += lexeme[0];
                return 1;
            } else {
                // no need to move the cursor, we still have additional regexes to try and
                // match at this very spot
                resumeScanAtSamePosition = true;
                return 0;
            }
        }
        /**
     * Handle the start of a new potential mode match
     *
     * @param {EnhancedMatch} match - the current match
     * @returns {number} how far to advance the parse cursor
     */ function doBeginMatch(match) {
            const lexeme = match[0];
            const newMode = match.rule;
            const resp = new Response(newMode);
            // first internal before callbacks, then the public ones
            const beforeCallbacks = [
                newMode.__beforeBegin,
                newMode["on:begin"]
            ];
            for (const cb of beforeCallbacks){
                if (!cb) continue;
                cb(match, resp);
                if (resp.isMatchIgnored) return doIgnore(lexeme);
            }
            if (newMode.skip) {
                modeBuffer += lexeme;
            } else {
                if (newMode.excludeBegin) {
                    modeBuffer += lexeme;
                }
                processBuffer();
                if (!newMode.returnBegin && !newMode.excludeBegin) {
                    modeBuffer = lexeme;
                }
            }
            startNewMode(newMode, match);
            return newMode.returnBegin ? 0 : lexeme.length;
        }
        /**
     * Handle the potential end of mode
     *
     * @param {RegExpMatchArray} match - the current match
     */ function doEndMatch(match) {
            const lexeme = match[0];
            const matchPlusRemainder = codeToHighlight.substring(match.index);
            const endMode = endOfMode(top, match, matchPlusRemainder);
            if (!endMode) {
                return NO_MATCH;
            }
            const origin = top;
            if (top.endScope && top.endScope._wrap) {
                processBuffer();
                emitKeyword(lexeme, top.endScope._wrap);
            } else if (top.endScope && top.endScope._multi) {
                processBuffer();
                emitMultiClass(top.endScope, match);
            } else if (origin.skip) {
                modeBuffer += lexeme;
            } else {
                if (!(origin.returnEnd || origin.excludeEnd)) {
                    modeBuffer += lexeme;
                }
                processBuffer();
                if (origin.excludeEnd) {
                    modeBuffer = lexeme;
                }
            }
            do {
                if (top.scope) {
                    emitter.closeNode();
                }
                if (!top.skip && !top.subLanguage) {
                    relevance += top.relevance;
                }
                top = top.parent;
            }while (top !== endMode.parent);
            if (endMode.starts) {
                startNewMode(endMode.starts, match);
            }
            return origin.returnEnd ? 0 : lexeme.length;
        }
        function processContinuations() {
            const list = [];
            for(let current = top; current !== language; current = current.parent){
                if (current.scope) {
                    list.unshift(current.scope);
                }
            }
            list.forEach((item)=>emitter.openNode(item));
        }
        /** @type {{type?: MatchType, index?: number, rule?: Mode}}} */ let lastMatch = {};
        /**
     *  Process an individual match
     *
     * @param {string} textBeforeMatch - text preceding the match (since the last match)
     * @param {EnhancedMatch} [match] - the match itself
     */ function processLexeme(textBeforeMatch, match) {
            const lexeme = match && match[0];
            // add non-matched text to the current mode buffer
            modeBuffer += textBeforeMatch;
            if (lexeme == null) {
                processBuffer();
                return 0;
            }
            // we've found a 0 width match and we're stuck, so we need to advance
            // this happens when we have badly behaved rules that have optional matchers to the degree that
            // sometimes they can end up matching nothing at all
            // Ref: https://github.com/highlightjs/highlight.js/issues/2140
            if (lastMatch.type === "begin" && match.type === "end" && lastMatch.index === match.index && lexeme === "") {
                // spit the "skipped" character that our regex choked on back into the output sequence
                modeBuffer += codeToHighlight.slice(match.index, match.index + 1);
                if (!SAFE_MODE) {
                    /** @type {AnnotatedError} */ const err = new Error(`0 width match regex (${languageName})`);
                    err.languageName = languageName;
                    err.badRule = lastMatch.rule;
                    throw err;
                }
                return 1;
            }
            lastMatch = match;
            if (match.type === "begin") {
                return doBeginMatch(match);
            } else if (match.type === "illegal" && !ignoreIllegals) {
                // illegal match, we do not continue processing
                /** @type {AnnotatedError} */ const err = new Error('Illegal lexeme "' + lexeme + '" for mode "' + (top.scope || "<unnamed>") + '"');
                err.mode = top;
                throw err;
            } else if (match.type === "end") {
                const processed = doEndMatch(match);
                if (processed !== NO_MATCH) {
                    return processed;
                }
            }
            // edge case for when illegal matches $ (end of line) which is technically
            // a 0 width match but not a begin/end match so it's not caught by the
            // first handler (when ignoreIllegals is true)
            if (match.type === "illegal" && lexeme === "") {
                // advance so we aren't stuck in an infinite loop
                return 1;
            }
            // infinite loops are BAD, this is a last ditch catch all. if we have a
            // decent number of iterations yet our index (cursor position in our
            // parsing) still 3x behind our index then something is very wrong
            // so we bail
            if (iterations > 100000 && iterations > match.index * 3) {
                const err = new Error("potential infinite loop, way more iterations than matches");
                throw err;
            }
            /*
      Why might be find ourselves here?  An potential end match that was
      triggered but could not be completed.  IE, `doEndMatch` returned NO_MATCH.
      (this could be because a callback requests the match be ignored, etc)

      This causes no real harm other than stopping a few times too many.
      */ modeBuffer += lexeme;
            return lexeme.length;
        }
        const language = getLanguage(languageName);
        if (!language) {
            error(LANGUAGE_NOT_FOUND.replace("{}", languageName));
            throw new Error('Unknown language: "' + languageName + '"');
        }
        const md = compileLanguage(language);
        let result = "";
        /** @type {CompiledMode} */ let top = continuation || md;
        /** @type Record<string,CompiledMode> */ const continuations = {}; // keep continuations for sub-languages
        const emitter = new options.__emitter(options);
        processContinuations();
        let modeBuffer = "";
        let relevance = 0;
        let index = 0;
        let iterations = 0;
        let resumeScanAtSamePosition = false;
        try {
            if (!language.__emitTokens) {
                top.matcher.considerAll();
                for(;;){
                    iterations++;
                    if (resumeScanAtSamePosition) {
                        // only regexes not matched previously will now be
                        // considered for a potential match
                        resumeScanAtSamePosition = false;
                    } else {
                        top.matcher.considerAll();
                    }
                    top.matcher.lastIndex = index;
                    const match = top.matcher.exec(codeToHighlight);
                    // console.log("match", match[0], match.rule && match.rule.begin)
                    if (!match) break;
                    const beforeMatch = codeToHighlight.substring(index, match.index);
                    const processedCount = processLexeme(beforeMatch, match);
                    index = match.index + processedCount;
                }
                processLexeme(codeToHighlight.substring(index));
            } else {
                language.__emitTokens(codeToHighlight, emitter);
            }
            emitter.finalize();
            result = emitter.toHTML();
            return {
                language: languageName,
                value: result,
                relevance,
                illegal: false,
                _emitter: emitter,
                _top: top
            };
        } catch (err) {
            if (err.message && err.message.includes("Illegal")) {
                return {
                    language: languageName,
                    value: escape(codeToHighlight),
                    illegal: true,
                    relevance: 0,
                    _illegalBy: {
                        message: err.message,
                        index,
                        context: codeToHighlight.slice(index - 100, index + 100),
                        mode: err.mode,
                        resultSoFar: result
                    },
                    _emitter: emitter
                };
            } else if (SAFE_MODE) {
                return {
                    language: languageName,
                    value: escape(codeToHighlight),
                    illegal: false,
                    relevance: 0,
                    errorRaised: err,
                    _emitter: emitter,
                    _top: top
                };
            } else {
                throw err;
            }
        }
    }
    /**
   * returns a valid highlight result, without actually doing any actual work,
   * auto highlight starts with this and it's possible for small snippets that
   * auto-detection may not find a better match
   * @param {string} code
   * @returns {HighlightResult}
   */ function justTextHighlightResult(code) {
        const result = {
            value: escape(code),
            illegal: false,
            relevance: 0,
            _top: PLAINTEXT_LANGUAGE,
            _emitter: new options.__emitter(options)
        };
        result._emitter.addText(code);
        return result;
    }
    /**
  Highlighting with language detection. Accepts a string with the code to
  highlight. Returns an object with the following properties:

  - language (detected language)
  - relevance (int)
  - value (an HTML string with highlighting markup)
  - secondBest (object with the same structure for second-best heuristically
    detected language, may be absent)

    @param {string} code
    @param {Array<string>} [languageSubset]
    @returns {AutoHighlightResult}
  */ function highlightAuto(code, languageSubset) {
        languageSubset = languageSubset || options.languages || Object.keys(languages);
        const plaintext = justTextHighlightResult(code);
        const results = languageSubset.filter(getLanguage).filter(autoDetection).map((name)=>_highlight(name, code, false));
        results.unshift(plaintext); // plaintext is always an option
        const sorted = results.sort((a, b)=>{
            // sort base on relevance
            if (a.relevance !== b.relevance) return b.relevance - a.relevance;
            // always award the tie to the base language
            // ie if C++ and Arduino are tied, it's more likely to be C++
            if (a.language && b.language) {
                if (getLanguage(a.language).supersetOf === b.language) {
                    return 1;
                } else if (getLanguage(b.language).supersetOf === a.language) {
                    return -1;
                }
            }
            // otherwise say they are equal, which has the effect of sorting on
            // relevance while preserving the original ordering - which is how ties
            // have historically been settled, ie the language that comes first always
            // wins in the case of a tie
            return 0;
        });
        const [best, secondBest] = sorted;
        /** @type {AutoHighlightResult} */ const result = best;
        result.secondBest = secondBest;
        return result;
    }
    /**
   * Builds new class name for block given the language name
   *
   * @param {HTMLElement} element
   * @param {string} [currentLang]
   * @param {string} [resultLang]
   */ function updateClassName(element, currentLang, resultLang) {
        const language = currentLang && aliases[currentLang] || resultLang;
        element.classList.add("hljs");
        element.classList.add(`language-${language}`);
    }
    /**
   * Applies highlighting to a DOM node containing code.
   *
   * @param {HighlightedHTMLElement} element - the HTML element to highlight
  */ function highlightElement(element) {
        /** @type HTMLElement */ let node = null;
        const language = blockLanguage(element);
        if (shouldNotHighlight(language)) return;
        fire("before:highlightElement", {
            el: element,
            language
        });
        // we should be all text, no child nodes (unescaped HTML) - this is possibly
        // an HTML injection attack - it's likely too late if this is already in
        // production (the code has likely already done its damage by the time
        // we're seeing it)... but we yell loudly about this so that hopefully it's
        // more likely to be caught in development before making it to production
        if (element.children.length > 0) {
            if (!options.ignoreUnescapedHTML) {
                console.warn("One of your code blocks includes unescaped HTML. This is a potentially serious security risk.");
                console.warn("https://github.com/highlightjs/highlight.js/wiki/security");
                console.warn("The element with unescaped HTML:");
                console.warn(element);
            }
            if (options.throwUnescapedHTML) {
                const err = new HTMLInjectionError("One of your code blocks includes unescaped HTML.", element.innerHTML);
                throw err;
            }
        }
        node = element;
        const text = node.textContent;
        const result = language ? highlight(text, {
            language,
            ignoreIllegals: true
        }) : highlightAuto(text);
        element.innerHTML = result.value;
        updateClassName(element, language, result.language);
        element.result = {
            language: result.language,
            // TODO: remove with version 11.0
            re: result.relevance,
            relevance: result.relevance
        };
        if (result.secondBest) {
            element.secondBest = {
                language: result.secondBest.language,
                relevance: result.secondBest.relevance
            };
        }
        fire("after:highlightElement", {
            el: element,
            result,
            text
        });
    }
    /**
   * Updates highlight.js global options with the passed options
   *
   * @param {Partial<HLJSOptions>} userOptions
   */ function configure(userOptions) {
        options = inherit(options, userOptions);
    }
    // TODO: remove v12, deprecated
    const initHighlighting = ()=>{
        highlightAll();
        deprecated("10.6.0", "initHighlighting() deprecated.  Use highlightAll() now.");
    };
    // TODO: remove v12, deprecated
    function initHighlightingOnLoad() {
        highlightAll();
        deprecated("10.6.0", "initHighlightingOnLoad() deprecated.  Use highlightAll() now.");
    }
    let wantsHighlight = false;
    /**
   * auto-highlights all pre>code elements on the page
   */ function highlightAll() {
        // if we are called too early in the loading process
        if (document.readyState === "loading") {
            wantsHighlight = true;
            return;
        }
        const blocks = document.querySelectorAll(options.cssSelector);
        blocks.forEach(highlightElement);
    }
    function boot() {
        // if a highlight was requested before DOM was loaded, do now
        if (wantsHighlight) highlightAll();
    }
    // make sure we are in the browser environment
    if (false) {}
    /**
   * Register a language grammar module
   *
   * @param {string} languageName
   * @param {LanguageFn} languageDefinition
   */ function registerLanguage(languageName, languageDefinition) {
        let lang = null;
        try {
            lang = languageDefinition(hljs);
        } catch (error$1) {
            error("Language definition for '{}' could not be registered.".replace("{}", languageName));
            // hard or soft error
            if (!SAFE_MODE) {
                throw error$1;
            } else {
                error(error$1);
            }
            // languages that have serious errors are replaced with essentially a
            // "plaintext" stand-in so that the code blocks will still get normal
            // css classes applied to them - and one bad language won't break the
            // entire highlighter
            lang = PLAINTEXT_LANGUAGE;
        }
        // give it a temporary name if it doesn't have one in the meta-data
        if (!lang.name) lang.name = languageName;
        languages[languageName] = lang;
        lang.rawDefinition = languageDefinition.bind(null, hljs);
        if (lang.aliases) {
            registerAliases(lang.aliases, {
                languageName
            });
        }
    }
    /**
   * Remove a language grammar module
   *
   * @param {string} languageName
   */ function unregisterLanguage(languageName) {
        delete languages[languageName];
        for (const alias of Object.keys(aliases)){
            if (aliases[alias] === languageName) {
                delete aliases[alias];
            }
        }
    }
    /**
   * @returns {string[]} List of language internal names
   */ function listLanguages() {
        return Object.keys(languages);
    }
    /**
   * @param {string} name - name of the language to retrieve
   * @returns {Language | undefined}
   */ function getLanguage(name) {
        name = (name || "").toLowerCase();
        return languages[name] || languages[aliases[name]];
    }
    /**
   *
   * @param {string|string[]} aliasList - single alias or list of aliases
   * @param {{languageName: string}} opts
   */ function registerAliases(aliasList, { languageName }) {
        if (typeof aliasList === "string") {
            aliasList = [
                aliasList
            ];
        }
        aliasList.forEach((alias)=>{
            aliases[alias.toLowerCase()] = languageName;
        });
    }
    /**
   * Determines if a given language has auto-detection enabled
   * @param {string} name - name of the language
   */ function autoDetection(name) {
        const lang = getLanguage(name);
        return lang && !lang.disableAutodetect;
    }
    /**
   * Upgrades the old highlightBlock plugins to the new
   * highlightElement API
   * @param {HLJSPlugin} plugin
   */ function upgradePluginAPI(plugin) {
        // TODO: remove with v12
        if (plugin["before:highlightBlock"] && !plugin["before:highlightElement"]) {
            plugin["before:highlightElement"] = (data)=>{
                plugin["before:highlightBlock"](Object.assign({
                    block: data.el
                }, data));
            };
        }
        if (plugin["after:highlightBlock"] && !plugin["after:highlightElement"]) {
            plugin["after:highlightElement"] = (data)=>{
                plugin["after:highlightBlock"](Object.assign({
                    block: data.el
                }, data));
            };
        }
    }
    /**
   * @param {HLJSPlugin} plugin
   */ function addPlugin(plugin) {
        upgradePluginAPI(plugin);
        plugins.push(plugin);
    }
    /**
   * @param {HLJSPlugin} plugin
   */ function removePlugin(plugin) {
        const index = plugins.indexOf(plugin);
        if (index !== -1) {
            plugins.splice(index, 1);
        }
    }
    /**
   *
   * @param {PluginEvent} event
   * @param {any} args
   */ function fire(event, args) {
        const cb = event;
        plugins.forEach(function(plugin) {
            if (plugin[cb]) {
                plugin[cb](args);
            }
        });
    }
    /**
   * DEPRECATED
   * @param {HighlightedHTMLElement} el
   */ function deprecateHighlightBlock(el) {
        deprecated("10.7.0", "highlightBlock will be removed entirely in v12.0");
        deprecated("10.7.0", "Please use highlightElement now.");
        return highlightElement(el);
    }
    /* Interface definition */ Object.assign(hljs, {
        highlight,
        highlightAuto,
        highlightAll,
        highlightElement,
        // TODO: Remove with v12 API
        highlightBlock: deprecateHighlightBlock,
        configure,
        initHighlighting,
        initHighlightingOnLoad,
        registerLanguage,
        unregisterLanguage,
        listLanguages,
        getLanguage,
        registerAliases,
        autoDetection,
        inherit,
        addPlugin,
        removePlugin
    });
    hljs.debugMode = function() {
        SAFE_MODE = false;
    };
    hljs.safeMode = function() {
        SAFE_MODE = true;
    };
    hljs.versionString = version;
    hljs.regex = {
        concat: concat,
        lookahead: lookahead,
        either: either,
        optional: optional,
        anyNumberOfTimes: anyNumberOfTimes
    };
    for(const key in MODES){
        // @ts-ignore
        if (typeof MODES[key] === "object") {
            // @ts-ignore
            deepFreeze(MODES[key]);
        }
    }
    // merge all the modes/regexes into our main object
    Object.assign(hljs, MODES);
    return hljs;
};
// Other names for the variable may break build script
const highlight = HLJS({});
// returns a new instance of the highlighter to be used for extensions
// check https://github.com/wooorm/lowlight/issues/47
highlight.newInstance = ()=>HLJS({});
module.exports = highlight;
highlight.HighlightJS = highlight;
highlight.default = highlight;


/***/ }),

/***/ 64:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  Z_: () => (/* binding */ sync)
});

// UNUSED EXPORTS: Glob, escape, glob, globIterate, globIterateSync, globStream, globStreamSync, globSync, hasMagic, iterate, iterateSync, stream, streamSync, unescape

// EXTERNAL MODULE: ./node_modules/glob/node_modules/brace-expansion/index.js
var brace_expansion = __webpack_require__(6990);
;// CONCATENATED MODULE: ./node_modules/glob/node_modules/minimatch/dist/mjs/assert-valid-pattern.js
const MAX_PATTERN_LENGTH = 1024 * 64;
const assertValidPattern = (pattern)=>{
    if (typeof pattern !== "string") {
        throw new TypeError("invalid pattern");
    }
    if (pattern.length > MAX_PATTERN_LENGTH) {
        throw new TypeError("pattern is too long");
    }
}; //# sourceMappingURL=assert-valid-pattern.js.map

;// CONCATENATED MODULE: ./node_modules/glob/node_modules/minimatch/dist/mjs/brace-expressions.js
// translate the various posix character classes into unicode properties
// this works across all unicode locales
// { <posix class>: [<translation>, /u flag required, negated]
const posixClasses = {
    "[:alnum:]": [
        "\\p{L}\\p{Nl}\\p{Nd}",
        true
    ],
    "[:alpha:]": [
        "\\p{L}\\p{Nl}",
        true
    ],
    "[:ascii:]": [
        "\\x" + "00-\\x" + "7f",
        false
    ],
    "[:blank:]": [
        "\\p{Zs}\\t",
        true
    ],
    "[:cntrl:]": [
        "\\p{Cc}",
        true
    ],
    "[:digit:]": [
        "\\p{Nd}",
        true
    ],
    "[:graph:]": [
        "\\p{Z}\\p{C}",
        true,
        true
    ],
    "[:lower:]": [
        "\\p{Ll}",
        true
    ],
    "[:print:]": [
        "\\p{C}",
        true
    ],
    "[:punct:]": [
        "\\p{P}",
        true
    ],
    "[:space:]": [
        "\\p{Z}\\t\\r\\n\\v\\f",
        true
    ],
    "[:upper:]": [
        "\\p{Lu}",
        true
    ],
    "[:word:]": [
        "\\p{L}\\p{Nl}\\p{Nd}\\p{Pc}",
        true
    ],
    "[:xdigit:]": [
        "A-Fa-f0-9",
        false
    ]
};
// only need to escape a few things inside of brace expressions
// escapes: [ \ ] -
const braceEscape = (s)=>s.replace(/[[\]\\-]/g, "\\$&");
// escape all regexp magic characters
const regexpEscape = (s)=>s.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, "\\$&");
// everything has already been escaped, we just have to join
const rangesToString = (ranges)=>ranges.join("");
// takes a glob string at a posix brace expression, and returns
// an equivalent regular expression source, and boolean indicating
// whether the /u flag needs to be applied, and the number of chars
// consumed to parse the character class.
// This also removes out of order ranges, and returns ($.) if the
// entire class just no good.
const parseClass = (glob, position)=>{
    const pos = position;
    /* c8 ignore start */ if (glob.charAt(pos) !== "[") {
        throw new Error("not in a brace expression");
    }
    /* c8 ignore stop */ const ranges = [];
    const negs = [];
    let i = pos + 1;
    let sawStart = false;
    let uflag = false;
    let escaping = false;
    let negate = false;
    let endPos = pos;
    let rangeStart = "";
    WHILE: while(i < glob.length){
        const c = glob.charAt(i);
        if ((c === "!" || c === "^") && i === pos + 1) {
            negate = true;
            i++;
            continue;
        }
        if (c === "]" && sawStart && !escaping) {
            endPos = i + 1;
            break;
        }
        sawStart = true;
        if (c === "\\") {
            if (!escaping) {
                escaping = true;
                i++;
                continue;
            }
        // escaped \ char, fall through and treat like normal char
        }
        if (c === "[" && !escaping) {
            // either a posix class, a collation equivalent, or just a [
            for (const [cls, [unip, u, neg]] of Object.entries(posixClasses)){
                if (glob.startsWith(cls, i)) {
                    // invalid, [a-[] is fine, but not [a-[:alpha]]
                    if (rangeStart) {
                        return [
                            "$.",
                            false,
                            glob.length - pos,
                            true
                        ];
                    }
                    i += cls.length;
                    if (neg) negs.push(unip);
                    else ranges.push(unip);
                    uflag = uflag || u;
                    continue WHILE;
                }
            }
        }
        // now it's just a normal character, effectively
        escaping = false;
        if (rangeStart) {
            // throw this range away if it's not valid, but others
            // can still match.
            if (c > rangeStart) {
                ranges.push(braceEscape(rangeStart) + "-" + braceEscape(c));
            } else if (c === rangeStart) {
                ranges.push(braceEscape(c));
            }
            rangeStart = "";
            i++;
            continue;
        }
        // now might be the start of a range.
        // can be either c-d or c-] or c<more...>] or c] at this point
        if (glob.startsWith("-]", i + 1)) {
            ranges.push(braceEscape(c + "-"));
            i += 2;
            continue;
        }
        if (glob.startsWith("-", i + 1)) {
            rangeStart = c;
            i += 2;
            continue;
        }
        // not the start of a range, just a single character
        ranges.push(braceEscape(c));
        i++;
    }
    if (endPos < i) {
        // didn't see the end of the class, not a valid class,
        // but might still be valid as a literal match.
        return [
            "",
            false,
            0,
            false
        ];
    }
    // if we got no ranges and no negates, then we have a range that
    // cannot possibly match anything, and that poisons the whole glob
    if (!ranges.length && !negs.length) {
        return [
            "$.",
            false,
            glob.length - pos,
            true
        ];
    }
    // if we got one positive range, and it's a single character, then that's
    // not actually a magic pattern, it's just that one literal character.
    // we should not treat that as "magic", we should just return the literal
    // character. [_] is a perfectly valid way to escape glob magic chars.
    if (negs.length === 0 && ranges.length === 1 && /^\\?.$/.test(ranges[0]) && !negate) {
        const r = ranges[0].length === 2 ? ranges[0].slice(-1) : ranges[0];
        return [
            regexpEscape(r),
            false,
            endPos - pos,
            false
        ];
    }
    const sranges = "[" + (negate ? "^" : "") + rangesToString(ranges) + "]";
    const snegs = "[" + (negate ? "" : "^") + rangesToString(negs) + "]";
    const comb = ranges.length && negs.length ? "(" + sranges + "|" + snegs + ")" : ranges.length ? sranges : snegs;
    return [
        comb,
        uflag,
        endPos - pos,
        true
    ];
}; //# sourceMappingURL=brace-expressions.js.map

;// CONCATENATED MODULE: ./node_modules/glob/node_modules/minimatch/dist/mjs/unescape.js
/**
 * Un-escape a string that has been escaped with {@link escape}.
 *
 * If the {@link windowsPathsNoEscape} option is used, then square-brace
 * escapes are removed, but not backslash escapes.  For example, it will turn
 * the string `'[*]'` into `*`, but it will not turn `'\\*'` into `'*'`,
 * becuase `\` is a path separator in `windowsPathsNoEscape` mode.
 *
 * When `windowsPathsNoEscape` is not set, then both brace escapes and
 * backslash escapes are removed.
 *
 * Slashes (and backslashes in `windowsPathsNoEscape` mode) cannot be escaped
 * or unescaped.
 */ const unescape_unescape = (s, { windowsPathsNoEscape = false } = {})=>{
    return windowsPathsNoEscape ? s.replace(/\[([^\/\\])\]/g, "$1") : s.replace(/((?!\\).|^)\[([^\/\\])\]/g, "$1$2").replace(/\\([^\/])/g, "$1");
}; //# sourceMappingURL=unescape.js.map

;// CONCATENATED MODULE: ./node_modules/glob/node_modules/minimatch/dist/mjs/ast.js
// parse a single path portion


const types = new Set([
    "!",
    "?",
    "+",
    "*",
    "@"
]);
const isExtglobType = (c)=>types.has(c);
// Patterns that get prepended to bind to the start of either the
// entire string, or just a single path portion, to prevent dots
// and/or traversal patterns, when needed.
// Exts don't need the ^ or / bit, because the root binds that already.
const startNoTraversal = "(?!(?:^|/)\\.\\.?(?:$|/))";
const startNoDot = "(?!\\.)";
// characters that indicate a start of pattern needs the "no dots" bit,
// because a dot *might* be matched. ( is not in the list, because in
// the case of a child extglob, it will handle the prevention itself.
const addPatternStart = new Set([
    "[",
    "."
]);
// cases where traversal is A-OK, no dot prevention needed
const justDots = new Set([
    "..",
    "."
]);
const reSpecials = new Set("().*{}+?[]^$\\!");
const regExpEscape = (s)=>s.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, "\\$&");
// any single thing other than /
const qmark = "[^/]";
// * => any number of characters
const star = qmark + "*?";
// use + when we need to ensure that *something* matches, because the * is
// the only thing in the path portion.
const starNoEmpty = qmark + "+?";
// remove the \ chars that we added if we end up doing a nonmagic compare
// const deslash = (s: string) => s.replace(/\\(.)/g, '$1')
class AST {
    #root;
    #hasMagic;
    #uflag;
    #parts;
    #parent;
    #parentIndex;
    #negs;
    #filledNegs;
    #options;
    #toString;
    // set to true if it's an extglob with no children
    // (which really means one child of '')
    #emptyExt;
    constructor(type, parent, options = {}){
        this.#uflag = false;
        this.#parts = [];
        this.#filledNegs = false;
        this.#emptyExt = false;
        this.type = type;
        // extglobs are inherently magical
        if (type) this.#hasMagic = true;
        this.#parent = parent;
        this.#root = this.#parent ? this.#parent.#root : this;
        this.#options = this.#root === this ? options : this.#root.#options;
        this.#negs = this.#root === this ? [] : this.#root.#negs;
        if (type === "!" && !this.#root.#filledNegs) this.#negs.push(this);
        this.#parentIndex = this.#parent ? this.#parent.#parts.length : 0;
    }
    get hasMagic() {
        /* c8 ignore start */ if (this.#hasMagic !== undefined) return this.#hasMagic;
        /* c8 ignore stop */ for (const p of this.#parts){
            if (typeof p === "string") continue;
            if (p.type || p.hasMagic) return this.#hasMagic = true;
        }
        // note: will be undefined until we generate the regexp src and find out
        return this.#hasMagic;
    }
    // reconstructs the pattern
    toString() {
        if (this.#toString !== undefined) return this.#toString;
        if (!this.type) {
            return this.#toString = this.#parts.map((p)=>String(p)).join("");
        } else {
            return this.#toString = this.type + "(" + this.#parts.map((p)=>String(p)).join("|") + ")";
        }
    }
    #fillNegs() {
        /* c8 ignore start */ if (this !== this.#root) throw new Error("should only call on root");
        if (this.#filledNegs) return this;
        /* c8 ignore stop */ // call toString() once to fill this out
        this.toString();
        this.#filledNegs = true;
        let n;
        while(n = this.#negs.pop()){
            if (n.type !== "!") continue;
            // walk up the tree, appending everthing that comes AFTER parentIndex
            let p = n;
            let pp = p.#parent;
            while(pp){
                for(let i = p.#parentIndex + 1; !pp.type && i < pp.#parts.length; i++){
                    for (const part of n.#parts){
                        /* c8 ignore start */ if (typeof part === "string") {
                            throw new Error("string part in extglob AST??");
                        }
                        /* c8 ignore stop */ part.copyIn(pp.#parts[i]);
                    }
                }
                p = pp;
                pp = p.#parent;
            }
        }
        return this;
    }
    push(...parts) {
        for (const p of parts){
            if (p === "") continue;
            /* c8 ignore start */ if (typeof p !== "string" && !(p instanceof AST && p.#parent === this)) {
                throw new Error("invalid part: " + p);
            }
            /* c8 ignore stop */ this.#parts.push(p);
        }
    }
    toJSON() {
        const ret = this.type === null ? this.#parts.slice().map((p)=>typeof p === "string" ? p : p.toJSON()) : [
            this.type,
            ...this.#parts.map((p)=>p.toJSON())
        ];
        if (this.isStart() && !this.type) ret.unshift([]);
        if (this.isEnd() && (this === this.#root || this.#root.#filledNegs && this.#parent?.type === "!")) {
            ret.push({});
        }
        return ret;
    }
    isStart() {
        if (this.#root === this) return true;
        // if (this.type) return !!this.#parent?.isStart()
        if (!this.#parent?.isStart()) return false;
        if (this.#parentIndex === 0) return true;
        // if everything AHEAD of this is a negation, then it's still the "start"
        const p = this.#parent;
        for(let i = 0; i < this.#parentIndex; i++){
            const pp = p.#parts[i];
            if (!(pp instanceof AST && pp.type === "!")) {
                return false;
            }
        }
        return true;
    }
    isEnd() {
        if (this.#root === this) return true;
        if (this.#parent?.type === "!") return true;
        if (!this.#parent?.isEnd()) return false;
        if (!this.type) return this.#parent?.isEnd();
        // if not root, it'll always have a parent
        /* c8 ignore start */ const pl = this.#parent ? this.#parent.#parts.length : 0;
        /* c8 ignore stop */ return this.#parentIndex === pl - 1;
    }
    copyIn(part) {
        if (typeof part === "string") this.push(part);
        else this.push(part.clone(this));
    }
    clone(parent) {
        const c = new AST(this.type, parent);
        for (const p of this.#parts){
            c.copyIn(p);
        }
        return c;
    }
    static #parseAST(str, ast, pos, opt) {
        let escaping = false;
        let inBrace = false;
        let braceStart = -1;
        let braceNeg = false;
        if (ast.type === null) {
            // outside of a extglob, append until we find a start
            let i = pos;
            let acc = "";
            while(i < str.length){
                const c = str.charAt(i++);
                // still accumulate escapes at this point, but we do ignore
                // starts that are escaped
                if (escaping || c === "\\") {
                    escaping = !escaping;
                    acc += c;
                    continue;
                }
                if (inBrace) {
                    if (i === braceStart + 1) {
                        if (c === "^" || c === "!") {
                            braceNeg = true;
                        }
                    } else if (c === "]" && !(i === braceStart + 2 && braceNeg)) {
                        inBrace = false;
                    }
                    acc += c;
                    continue;
                } else if (c === "[") {
                    inBrace = true;
                    braceStart = i;
                    braceNeg = false;
                    acc += c;
                    continue;
                }
                if (!opt.noext && isExtglobType(c) && str.charAt(i) === "(") {
                    ast.push(acc);
                    acc = "";
                    const ext = new AST(c, ast);
                    i = AST.#parseAST(str, ext, i, opt);
                    ast.push(ext);
                    continue;
                }
                acc += c;
            }
            ast.push(acc);
            return i;
        }
        // some kind of extglob, pos is at the (
        // find the next | or )
        let i = pos + 1;
        let part = new AST(null, ast);
        const parts = [];
        let acc = "";
        while(i < str.length){
            const c = str.charAt(i++);
            // still accumulate escapes at this point, but we do ignore
            // starts that are escaped
            if (escaping || c === "\\") {
                escaping = !escaping;
                acc += c;
                continue;
            }
            if (inBrace) {
                if (i === braceStart + 1) {
                    if (c === "^" || c === "!") {
                        braceNeg = true;
                    }
                } else if (c === "]" && !(i === braceStart + 2 && braceNeg)) {
                    inBrace = false;
                }
                acc += c;
                continue;
            } else if (c === "[") {
                inBrace = true;
                braceStart = i;
                braceNeg = false;
                acc += c;
                continue;
            }
            if (isExtglobType(c) && str.charAt(i) === "(") {
                part.push(acc);
                acc = "";
                const ext = new AST(c, part);
                part.push(ext);
                i = AST.#parseAST(str, ext, i, opt);
                continue;
            }
            if (c === "|") {
                part.push(acc);
                acc = "";
                parts.push(part);
                part = new AST(null, ast);
                continue;
            }
            if (c === ")") {
                if (acc === "" && ast.#parts.length === 0) {
                    ast.#emptyExt = true;
                }
                part.push(acc);
                acc = "";
                ast.push(...parts, part);
                return i;
            }
            acc += c;
        }
        // unfinished extglob
        // if we got here, it was a malformed extglob! not an extglob, but
        // maybe something else in there.
        ast.type = null;
        ast.#hasMagic = undefined;
        ast.#parts = [
            str.substring(pos - 1)
        ];
        return i;
    }
    static fromGlob(pattern, options = {}) {
        const ast = new AST(null, undefined, options);
        AST.#parseAST(pattern, ast, 0, options);
        return ast;
    }
    // returns the regular expression if there's magic, or the unescaped
    // string if not.
    toMMPattern() {
        // should only be called on root
        /* c8 ignore start */ if (this !== this.#root) return this.#root.toMMPattern();
        /* c8 ignore stop */ const glob = this.toString();
        const [re, body, hasMagic, uflag] = this.toRegExpSource();
        // if we're in nocase mode, and not nocaseMagicOnly, then we do
        // still need a regular expression if we have to case-insensitively
        // match capital/lowercase characters.
        const anyMagic = hasMagic || this.#hasMagic || this.#options.nocase && !this.#options.nocaseMagicOnly && glob.toUpperCase() !== glob.toLowerCase();
        if (!anyMagic) {
            return body;
        }
        const flags = (this.#options.nocase ? "i" : "") + (uflag ? "u" : "");
        return Object.assign(new RegExp(`^${re}$`, flags), {
            _src: re,
            _glob: glob
        });
    }
    // returns the string match, the regexp source, whether there's magic
    // in the regexp (so a regular expression is required) and whether or
    // not the uflag is needed for the regular expression (for posix classes)
    // TODO: instead of injecting the start/end at this point, just return
    // the BODY of the regexp, along with the start/end portions suitable
    // for binding the start/end in either a joined full-path makeRe context
    // (where we bind to (^|/), or a standalone matchPart context (where
    // we bind to ^, and not /).  Otherwise slashes get duped!
    //
    // In part-matching mode, the start is:
    // - if not isStart: nothing
    // - if traversal possible, but not allowed: ^(?!\.\.?$)
    // - if dots allowed or not possible: ^
    // - if dots possible and not allowed: ^(?!\.)
    // end is:
    // - if not isEnd(): nothing
    // - else: $
    //
    // In full-path matching mode, we put the slash at the START of the
    // pattern, so start is:
    // - if first pattern: same as part-matching mode
    // - if not isStart(): nothing
    // - if traversal possible, but not allowed: /(?!\.\.?(?:$|/))
    // - if dots allowed or not possible: /
    // - if dots possible and not allowed: /(?!\.)
    // end is:
    // - if last pattern, same as part-matching mode
    // - else nothing
    //
    // Always put the (?:$|/) on negated tails, though, because that has to be
    // there to bind the end of the negated pattern portion, and it's easier to
    // just stick it in now rather than try to inject it later in the middle of
    // the pattern.
    //
    // We can just always return the same end, and leave it up to the caller
    // to know whether it's going to be used joined or in parts.
    // And, if the start is adjusted slightly, can do the same there:
    // - if not isStart: nothing
    // - if traversal possible, but not allowed: (?:/|^)(?!\.\.?$)
    // - if dots allowed or not possible: (?:/|^)
    // - if dots possible and not allowed: (?:/|^)(?!\.)
    //
    // But it's better to have a simpler binding without a conditional, for
    // performance, so probably better to return both start options.
    //
    // Then the caller just ignores the end if it's not the first pattern,
    // and the start always gets applied.
    //
    // But that's always going to be $ if it's the ending pattern, or nothing,
    // so the caller can just attach $ at the end of the pattern when building.
    //
    // So the todo is:
    // - better detect what kind of start is needed
    // - return both flavors of starting pattern
    // - attach $ at the end of the pattern when creating the actual RegExp
    //
    // Ah, but wait, no, that all only applies to the root when the first pattern
    // is not an extglob. If the first pattern IS an extglob, then we need all
    // that dot prevention biz to live in the extglob portions, because eg
    // +(*|.x*) can match .xy but not .yx.
    //
    // So, return the two flavors if it's #root and the first child is not an
    // AST, otherwise leave it to the child AST to handle it, and there,
    // use the (?:^|/) style of start binding.
    //
    // Even simplified further:
    // - Since the start for a join is eg /(?!\.) and the start for a part
    // is ^(?!\.), we can just prepend (?!\.) to the pattern (either root
    // or start or whatever) and prepend ^ or / at the Regexp construction.
    toRegExpSource(allowDot) {
        const dot = allowDot ?? !!this.#options.dot;
        if (this.#root === this) this.#fillNegs();
        if (!this.type) {
            const noEmpty = this.isStart() && this.isEnd();
            const src = this.#parts.map((p)=>{
                const [re, _, hasMagic, uflag] = typeof p === "string" ? AST.#parseGlob(p, this.#hasMagic, noEmpty) : p.toRegExpSource(allowDot);
                this.#hasMagic = this.#hasMagic || hasMagic;
                this.#uflag = this.#uflag || uflag;
                return re;
            }).join("");
            let start = "";
            if (this.isStart()) {
                if (typeof this.#parts[0] === "string") {
                    // this is the string that will match the start of the pattern,
                    // so we need to protect against dots and such.
                    // '.' and '..' cannot match unless the pattern is that exactly,
                    // even if it starts with . or dot:true is set.
                    const dotTravAllowed = this.#parts.length === 1 && justDots.has(this.#parts[0]);
                    if (!dotTravAllowed) {
                        const aps = addPatternStart;
                        // check if we have a possibility of matching . or ..,
                        // and prevent that.
                        const needNoTrav = // dots are allowed, and the pattern starts with [ or .
                        dot && aps.has(src.charAt(0)) || // the pattern starts with \., and then [ or .
                        src.startsWith("\\.") && aps.has(src.charAt(2)) || // the pattern starts with \.\., and then [ or .
                        src.startsWith("\\.\\.") && aps.has(src.charAt(4));
                        // no need to prevent dots if it can't match a dot, or if a
                        // sub-pattern will be preventing it anyway.
                        const needNoDot = !dot && !allowDot && aps.has(src.charAt(0));
                        start = needNoTrav ? startNoTraversal : needNoDot ? startNoDot : "";
                    }
                }
            }
            // append the "end of path portion" pattern to negation tails
            let end = "";
            if (this.isEnd() && this.#root.#filledNegs && this.#parent?.type === "!") {
                end = "(?:$|\\/)";
            }
            const final = start + src + end;
            return [
                final,
                unescape_unescape(src),
                this.#hasMagic = !!this.#hasMagic,
                this.#uflag
            ];
        }
        // We need to calculate the body *twice* if it's a repeat pattern
        // at the start, once in nodot mode, then again in dot mode, so a
        // pattern like *(?) can match 'x.y'
        const repeated = this.type === "*" || this.type === "+";
        // some kind of extglob
        const start = this.type === "!" ? "(?:(?!(?:" : "(?:";
        let body = this.#partsToRegExp(dot);
        if (this.isStart() && this.isEnd() && !body && this.type !== "!") {
            // invalid extglob, has to at least be *something* present, if it's
            // the entire path portion.
            const s = this.toString();
            this.#parts = [
                s
            ];
            this.type = null;
            this.#hasMagic = undefined;
            return [
                s,
                unescape_unescape(this.toString()),
                false,
                false
            ];
        }
        // XXX abstract out this map method
        let bodyDotAllowed = !repeated || allowDot || dot || !startNoDot ? "" : this.#partsToRegExp(true);
        if (bodyDotAllowed === body) {
            bodyDotAllowed = "";
        }
        if (bodyDotAllowed) {
            body = `(?:${body})(?:${bodyDotAllowed})*?`;
        }
        // an empty !() is exactly equivalent to a starNoEmpty
        let final = "";
        if (this.type === "!" && this.#emptyExt) {
            final = (this.isStart() && !dot ? startNoDot : "") + starNoEmpty;
        } else {
            const close = this.type === "!" ? "))" + (this.isStart() && !dot && !allowDot ? startNoDot : "") + star + ")" : this.type === "@" ? ")" : this.type === "?" ? ")?" : this.type === "+" && bodyDotAllowed ? ")" : this.type === "*" && bodyDotAllowed ? `)?` : `)${this.type}`;
            final = start + body + close;
        }
        return [
            final,
            unescape_unescape(body),
            this.#hasMagic = !!this.#hasMagic,
            this.#uflag
        ];
    }
    #partsToRegExp(dot) {
        return this.#parts.map((p)=>{
            // extglob ASTs should only contain parent ASTs
            /* c8 ignore start */ if (typeof p === "string") {
                throw new Error("string type in extglob ast??");
            }
            /* c8 ignore stop */ // can ignore hasMagic, because extglobs are already always magic
            const [re, _, _hasMagic, uflag] = p.toRegExpSource(dot);
            this.#uflag = this.#uflag || uflag;
            return re;
        }).filter((p)=>!(this.isStart() && this.isEnd()) || !!p).join("|");
    }
    static #parseGlob(glob, hasMagic, noEmpty = false) {
        let escaping = false;
        let re = "";
        let uflag = false;
        for(let i = 0; i < glob.length; i++){
            const c = glob.charAt(i);
            if (escaping) {
                escaping = false;
                re += (reSpecials.has(c) ? "\\" : "") + c;
                continue;
            }
            if (c === "\\") {
                if (i === glob.length - 1) {
                    re += "\\\\";
                } else {
                    escaping = true;
                }
                continue;
            }
            if (c === "[") {
                const [src, needUflag, consumed, magic] = parseClass(glob, i);
                if (consumed) {
                    re += src;
                    uflag = uflag || needUflag;
                    i += consumed - 1;
                    hasMagic = hasMagic || magic;
                    continue;
                }
            }
            if (c === "*") {
                if (noEmpty && glob === "*") re += starNoEmpty;
                else re += star;
                hasMagic = true;
                continue;
            }
            if (c === "?") {
                re += qmark;
                hasMagic = true;
                continue;
            }
            re += regExpEscape(c);
        }
        return [
            re,
            unescape_unescape(glob),
            !!hasMagic,
            uflag
        ];
    }
} //# sourceMappingURL=ast.js.map

;// CONCATENATED MODULE: ./node_modules/glob/node_modules/minimatch/dist/mjs/escape.js
/**
 * Escape all magic characters in a glob pattern.
 *
 * If the {@link windowsPathsNoEscape | GlobOptions.windowsPathsNoEscape}
 * option is used, then characters are escaped by wrapping in `[]`, because
 * a magic character wrapped in a character class can only be satisfied by
 * that exact character.  In this mode, `\` is _not_ escaped, because it is
 * not interpreted as a magic character, but instead as a path separator.
 */ const escape_escape = (s, { windowsPathsNoEscape = false } = {})=>{
    // don't need to escape +@! because we escape the parens
    // that make those magic, and escaping ! as [!] isn't valid,
    // because [!]] is a valid glob class meaning not ']'.
    return windowsPathsNoEscape ? s.replace(/[?*()[\]]/g, "[$&]") : s.replace(/[?*()[\]\\]/g, "\\$&");
}; //# sourceMappingURL=escape.js.map

;// CONCATENATED MODULE: ./node_modules/glob/node_modules/minimatch/dist/mjs/index.js





const minimatch = (p, pattern, options = {})=>{
    assertValidPattern(pattern);
    // shortcut: comments match nothing.
    if (!options.nocomment && pattern.charAt(0) === "#") {
        return false;
    }
    return new Minimatch(pattern, options).match(p);
};
// Optimized checking for the most common glob patterns.
const starDotExtRE = /^\*+([^+@!?\*\[\(]*)$/;
const starDotExtTest = (ext)=>(f)=>!f.startsWith(".") && f.endsWith(ext);
const starDotExtTestDot = (ext)=>(f)=>f.endsWith(ext);
const starDotExtTestNocase = (ext)=>{
    ext = ext.toLowerCase();
    return (f)=>!f.startsWith(".") && f.toLowerCase().endsWith(ext);
};
const starDotExtTestNocaseDot = (ext)=>{
    ext = ext.toLowerCase();
    return (f)=>f.toLowerCase().endsWith(ext);
};
const starDotStarRE = /^\*+\.\*+$/;
const starDotStarTest = (f)=>!f.startsWith(".") && f.includes(".");
const starDotStarTestDot = (f)=>f !== "." && f !== ".." && f.includes(".");
const dotStarRE = /^\.\*+$/;
const dotStarTest = (f)=>f !== "." && f !== ".." && f.startsWith(".");
const starRE = /^\*+$/;
const starTest = (f)=>f.length !== 0 && !f.startsWith(".");
const starTestDot = (f)=>f.length !== 0 && f !== "." && f !== "..";
const qmarksRE = /^\?+([^+@!?\*\[\(]*)?$/;
const qmarksTestNocase = ([$0, ext = ""])=>{
    const noext = qmarksTestNoExt([
        $0
    ]);
    if (!ext) return noext;
    ext = ext.toLowerCase();
    return (f)=>noext(f) && f.toLowerCase().endsWith(ext);
};
const qmarksTestNocaseDot = ([$0, ext = ""])=>{
    const noext = qmarksTestNoExtDot([
        $0
    ]);
    if (!ext) return noext;
    ext = ext.toLowerCase();
    return (f)=>noext(f) && f.toLowerCase().endsWith(ext);
};
const qmarksTestDot = ([$0, ext = ""])=>{
    const noext = qmarksTestNoExtDot([
        $0
    ]);
    return !ext ? noext : (f)=>noext(f) && f.endsWith(ext);
};
const qmarksTest = ([$0, ext = ""])=>{
    const noext = qmarksTestNoExt([
        $0
    ]);
    return !ext ? noext : (f)=>noext(f) && f.endsWith(ext);
};
const qmarksTestNoExt = ([$0])=>{
    const len = $0.length;
    return (f)=>f.length === len && !f.startsWith(".");
};
const qmarksTestNoExtDot = ([$0])=>{
    const len = $0.length;
    return (f)=>f.length === len && f !== "." && f !== "..";
};
/* c8 ignore start */ const defaultPlatform = typeof process === "object" && process ? typeof process.env === "object" && process.env && process.env.__MINIMATCH_TESTING_PLATFORM__ || process.platform : "posix";
const path = {
    win32: {
        sep: "\\"
    },
    posix: {
        sep: "/"
    }
};
/* c8 ignore stop */ const sep = defaultPlatform === "win32" ? path.win32.sep : path.posix.sep;
minimatch.sep = sep;
const GLOBSTAR = Symbol("globstar **");
minimatch.GLOBSTAR = GLOBSTAR;
// any single thing other than /
// don't need to escape / when using new RegExp()
const mjs_qmark = "[^/]";
// * => any number of characters
const mjs_star = mjs_qmark + "*?";
// ** when dots are allowed.  Anything goes, except .. and .
// not (^ or / followed by one or two dots followed by $ or /),
// followed by anything, any number of times.
const twoStarDot = "(?:(?!(?:\\/|^)(?:\\.{1,2})($|\\/)).)*?";
// not a ^ or / followed by a dot,
// followed by anything, any number of times.
const twoStarNoDot = "(?:(?!(?:\\/|^)\\.).)*?";
const filter = (pattern, options = {})=>(p)=>minimatch(p, pattern, options);
minimatch.filter = filter;
const ext = (a, b = {})=>Object.assign({}, a, b);
const defaults = (def)=>{
    if (!def || typeof def !== "object" || !Object.keys(def).length) {
        return minimatch;
    }
    const orig = minimatch;
    const m = (p, pattern, options = {})=>orig(p, pattern, ext(def, options));
    return Object.assign(m, {
        Minimatch: class Minimatch extends orig.Minimatch {
            constructor(pattern, options = {}){
                super(pattern, ext(def, options));
            }
            static defaults(options) {
                return orig.defaults(ext(def, options)).Minimatch;
            }
        },
        AST: class AST extends orig.AST {
            /* c8 ignore start */ constructor(type, parent, options = {}){
                super(type, parent, ext(def, options));
            }
            /* c8 ignore stop */ static fromGlob(pattern, options = {}) {
                return orig.AST.fromGlob(pattern, ext(def, options));
            }
        },
        unescape: (s, options = {})=>orig.unescape(s, ext(def, options)),
        escape: (s, options = {})=>orig.escape(s, ext(def, options)),
        filter: (pattern, options = {})=>orig.filter(pattern, ext(def, options)),
        defaults: (options)=>orig.defaults(ext(def, options)),
        makeRe: (pattern, options = {})=>orig.makeRe(pattern, ext(def, options)),
        braceExpand: (pattern, options = {})=>orig.braceExpand(pattern, ext(def, options)),
        match: (list, pattern, options = {})=>orig.match(list, pattern, ext(def, options)),
        sep: orig.sep,
        GLOBSTAR: GLOBSTAR
    });
};
minimatch.defaults = defaults;
// Brace expansion:
// a{b,c}d -> abd acd
// a{b,}c -> abc ac
// a{0..3}d -> a0d a1d a2d a3d
// a{b,c{d,e}f}g -> abg acdfg acefg
// a{b,c}d{e,f}g -> abdeg acdeg abdeg abdfg
//
// Invalid sets are not expanded.
// a{2..}b -> a{2..}b
// a{b}c -> a{b}c
const braceExpand = (pattern, options = {})=>{
    assertValidPattern(pattern);
    // Thanks to Yeting Li <https://github.com/yetingli> for
    // improving this regexp to avoid a ReDOS vulnerability.
    if (options.nobrace || !/\{(?:(?!\{).)*\}/.test(pattern)) {
        // shortcut. no need to expand.
        return [
            pattern
        ];
    }
    return brace_expansion(pattern);
};
minimatch.braceExpand = braceExpand;
// parse a component of the expanded set.
// At this point, no pattern may contain "/" in it
// so we're going to return a 2d array, where each entry is the full
// pattern, split on '/', and then turned into a regular expression.
// A regexp is made at the end which joins each array with an
// escaped /, and another full one which joins each regexp with |.
//
// Following the lead of Bash 4.1, note that "**" only has special meaning
// when it is the *only* thing in a path portion.  Otherwise, any series
// of * is equivalent to a single *.  Globstar behavior is enabled by
// default, and can be disabled by setting options.noglobstar.
const makeRe = (pattern, options = {})=>new Minimatch(pattern, options).makeRe();
minimatch.makeRe = makeRe;
const match = (list, pattern, options = {})=>{
    const mm = new Minimatch(pattern, options);
    list = list.filter((f)=>mm.match(f));
    if (mm.options.nonull && !list.length) {
        list.push(pattern);
    }
    return list;
};
minimatch.match = match;
// replace stuff like \* with *
const globMagic = /[?*]|[+@!]\(.*?\)|\[|\]/;
const mjs_regExpEscape = (s)=>s.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, "\\$&");
class Minimatch {
    constructor(pattern, options = {}){
        assertValidPattern(pattern);
        options = options || {};
        this.options = options;
        this.pattern = pattern;
        this.platform = options.platform || defaultPlatform;
        this.isWindows = this.platform === "win32";
        this.windowsPathsNoEscape = !!options.windowsPathsNoEscape || options.allowWindowsEscape === false;
        if (this.windowsPathsNoEscape) {
            this.pattern = this.pattern.replace(/\\/g, "/");
        }
        this.preserveMultipleSlashes = !!options.preserveMultipleSlashes;
        this.regexp = null;
        this.negate = false;
        this.nonegate = !!options.nonegate;
        this.comment = false;
        this.empty = false;
        this.partial = !!options.partial;
        this.nocase = !!this.options.nocase;
        this.windowsNoMagicRoot = options.windowsNoMagicRoot !== undefined ? options.windowsNoMagicRoot : !!(this.isWindows && this.nocase);
        this.globSet = [];
        this.globParts = [];
        this.set = [];
        // make the set of regexps etc.
        this.make();
    }
    hasMagic() {
        if (this.options.magicalBraces && this.set.length > 1) {
            return true;
        }
        for (const pattern of this.set){
            for (const part of pattern){
                if (typeof part !== "string") return true;
            }
        }
        return false;
    }
    debug(..._) {}
    make() {
        const pattern = this.pattern;
        const options = this.options;
        // empty patterns and comments match nothing.
        if (!options.nocomment && pattern.charAt(0) === "#") {
            this.comment = true;
            return;
        }
        if (!pattern) {
            this.empty = true;
            return;
        }
        // step 1: figure out negation, etc.
        this.parseNegate();
        // step 2: expand braces
        this.globSet = [
            ...new Set(this.braceExpand())
        ];
        if (options.debug) {
            this.debug = (...args)=>console.error(...args);
        }
        this.debug(this.pattern, this.globSet);
        // step 3: now we have a set, so turn each one into a series of
        // path-portion matching patterns.
        // These will be regexps, except in the case of "**", which is
        // set to the GLOBSTAR object for globstar behavior,
        // and will not contain any / characters
        //
        // First, we preprocess to make the glob pattern sets a bit simpler
        // and deduped.  There are some perf-killing patterns that can cause
        // problems with a glob walk, but we can simplify them down a bit.
        const rawGlobParts = this.globSet.map((s)=>this.slashSplit(s));
        this.globParts = this.preprocess(rawGlobParts);
        this.debug(this.pattern, this.globParts);
        // glob --> regexps
        let set = this.globParts.map((s, _, __)=>{
            if (this.isWindows && this.windowsNoMagicRoot) {
                // check if it's a drive or unc path.
                const isUNC = s[0] === "" && s[1] === "" && (s[2] === "?" || !globMagic.test(s[2])) && !globMagic.test(s[3]);
                const isDrive = /^[a-z]:/i.test(s[0]);
                if (isUNC) {
                    return [
                        ...s.slice(0, 4),
                        ...s.slice(4).map((ss)=>this.parse(ss))
                    ];
                } else if (isDrive) {
                    return [
                        s[0],
                        ...s.slice(1).map((ss)=>this.parse(ss))
                    ];
                }
            }
            return s.map((ss)=>this.parse(ss));
        });
        this.debug(this.pattern, set);
        // filter out everything that didn't compile properly.
        this.set = set.filter((s)=>s.indexOf(false) === -1);
        // do not treat the ? in UNC paths as magic
        if (this.isWindows) {
            for(let i = 0; i < this.set.length; i++){
                const p = this.set[i];
                if (p[0] === "" && p[1] === "" && this.globParts[i][2] === "?" && typeof p[3] === "string" && /^[a-z]:$/i.test(p[3])) {
                    p[2] = "?";
                }
            }
        }
        this.debug(this.pattern, this.set);
    }
    // various transforms to equivalent pattern sets that are
    // faster to process in a filesystem walk.  The goal is to
    // eliminate what we can, and push all ** patterns as far
    // to the right as possible, even if it increases the number
    // of patterns that we have to process.
    preprocess(globParts) {
        // if we're not in globstar mode, then turn all ** into *
        if (this.options.noglobstar) {
            for(let i = 0; i < globParts.length; i++){
                for(let j = 0; j < globParts[i].length; j++){
                    if (globParts[i][j] === "**") {
                        globParts[i][j] = "*";
                    }
                }
            }
        }
        const { optimizationLevel = 1 } = this.options;
        if (optimizationLevel >= 2) {
            // aggressive optimization for the purpose of fs walking
            globParts = this.firstPhasePreProcess(globParts);
            globParts = this.secondPhasePreProcess(globParts);
        } else if (optimizationLevel >= 1) {
            // just basic optimizations to remove some .. parts
            globParts = this.levelOneOptimize(globParts);
        } else {
            globParts = this.adjascentGlobstarOptimize(globParts);
        }
        return globParts;
    }
    // just get rid of adjascent ** portions
    adjascentGlobstarOptimize(globParts) {
        return globParts.map((parts)=>{
            let gs = -1;
            while(-1 !== (gs = parts.indexOf("**", gs + 1))){
                let i = gs;
                while(parts[i + 1] === "**"){
                    i++;
                }
                if (i !== gs) {
                    parts.splice(gs, i - gs);
                }
            }
            return parts;
        });
    }
    // get rid of adjascent ** and resolve .. portions
    levelOneOptimize(globParts) {
        return globParts.map((parts)=>{
            parts = parts.reduce((set, part)=>{
                const prev = set[set.length - 1];
                if (part === "**" && prev === "**") {
                    return set;
                }
                if (part === "..") {
                    if (prev && prev !== ".." && prev !== "." && prev !== "**") {
                        set.pop();
                        return set;
                    }
                }
                set.push(part);
                return set;
            }, []);
            return parts.length === 0 ? [
                ""
            ] : parts;
        });
    }
    levelTwoFileOptimize(parts) {
        if (!Array.isArray(parts)) {
            parts = this.slashSplit(parts);
        }
        let didSomething = false;
        do {
            didSomething = false;
            // <pre>/<e>/<rest> -> <pre>/<rest>
            if (!this.preserveMultipleSlashes) {
                for(let i = 1; i < parts.length - 1; i++){
                    const p = parts[i];
                    // don't squeeze out UNC patterns
                    if (i === 1 && p === "" && parts[0] === "") continue;
                    if (p === "." || p === "") {
                        didSomething = true;
                        parts.splice(i, 1);
                        i--;
                    }
                }
                if (parts[0] === "." && parts.length === 2 && (parts[1] === "." || parts[1] === "")) {
                    didSomething = true;
                    parts.pop();
                }
            }
            // <pre>/<p>/../<rest> -> <pre>/<rest>
            let dd = 0;
            while(-1 !== (dd = parts.indexOf("..", dd + 1))){
                const p = parts[dd - 1];
                if (p && p !== "." && p !== ".." && p !== "**") {
                    didSomething = true;
                    parts.splice(dd - 1, 2);
                    dd -= 2;
                }
            }
        }while (didSomething);
        return parts.length === 0 ? [
            ""
        ] : parts;
    }
    // First phase: single-pattern processing
    // <pre> is 1 or more portions
    // <rest> is 1 or more portions
    // <p> is any portion other than ., .., '', or **
    // <e> is . or ''
    //
    // **/.. is *brutal* for filesystem walking performance, because
    // it effectively resets the recursive walk each time it occurs,
    // and ** cannot be reduced out by a .. pattern part like a regexp
    // or most strings (other than .., ., and '') can be.
    //
    // <pre>/**/../<p>/<p>/<rest> -> {<pre>/../<p>/<p>/<rest>,<pre>/**/<p>/<p>/<rest>}
    // <pre>/<e>/<rest> -> <pre>/<rest>
    // <pre>/<p>/../<rest> -> <pre>/<rest>
    // **/**/<rest> -> **/<rest>
    //
    // **/*/<rest> -> */**/<rest> <== not valid because ** doesn't follow
    // this WOULD be allowed if ** did follow symlinks, or * didn't
    firstPhasePreProcess(globParts) {
        let didSomething = false;
        do {
            didSomething = false;
            // <pre>/**/../<p>/<p>/<rest> -> {<pre>/../<p>/<p>/<rest>,<pre>/**/<p>/<p>/<rest>}
            for (let parts of globParts){
                let gs = -1;
                while(-1 !== (gs = parts.indexOf("**", gs + 1))){
                    let gss = gs;
                    while(parts[gss + 1] === "**"){
                        // <pre>/**/**/<rest> -> <pre>/**/<rest>
                        gss++;
                    }
                    // eg, if gs is 2 and gss is 4, that means we have 3 **
                    // parts, and can remove 2 of them.
                    if (gss > gs) {
                        parts.splice(gs + 1, gss - gs);
                    }
                    let next = parts[gs + 1];
                    const p = parts[gs + 2];
                    const p2 = parts[gs + 3];
                    if (next !== "..") continue;
                    if (!p || p === "." || p === ".." || !p2 || p2 === "." || p2 === "..") {
                        continue;
                    }
                    didSomething = true;
                    // edit parts in place, and push the new one
                    parts.splice(gs, 1);
                    const other = parts.slice(0);
                    other[gs] = "**";
                    globParts.push(other);
                    gs--;
                }
                // <pre>/<e>/<rest> -> <pre>/<rest>
                if (!this.preserveMultipleSlashes) {
                    for(let i = 1; i < parts.length - 1; i++){
                        const p = parts[i];
                        // don't squeeze out UNC patterns
                        if (i === 1 && p === "" && parts[0] === "") continue;
                        if (p === "." || p === "") {
                            didSomething = true;
                            parts.splice(i, 1);
                            i--;
                        }
                    }
                    if (parts[0] === "." && parts.length === 2 && (parts[1] === "." || parts[1] === "")) {
                        didSomething = true;
                        parts.pop();
                    }
                }
                // <pre>/<p>/../<rest> -> <pre>/<rest>
                let dd = 0;
                while(-1 !== (dd = parts.indexOf("..", dd + 1))){
                    const p = parts[dd - 1];
                    if (p && p !== "." && p !== ".." && p !== "**") {
                        didSomething = true;
                        const needDot = dd === 1 && parts[dd + 1] === "**";
                        const splin = needDot ? [
                            "."
                        ] : [];
                        parts.splice(dd - 1, 2, ...splin);
                        if (parts.length === 0) parts.push("");
                        dd -= 2;
                    }
                }
            }
        }while (didSomething);
        return globParts;
    }
    // second phase: multi-pattern dedupes
    // {<pre>/*/<rest>,<pre>/<p>/<rest>} -> <pre>/*/<rest>
    // {<pre>/<rest>,<pre>/<rest>} -> <pre>/<rest>
    // {<pre>/**/<rest>,<pre>/<rest>} -> <pre>/**/<rest>
    //
    // {<pre>/**/<rest>,<pre>/**/<p>/<rest>} -> <pre>/**/<rest>
    // ^-- not valid because ** doens't follow symlinks
    secondPhasePreProcess(globParts) {
        for(let i = 0; i < globParts.length - 1; i++){
            for(let j = i + 1; j < globParts.length; j++){
                const matched = this.partsMatch(globParts[i], globParts[j], !this.preserveMultipleSlashes);
                if (!matched) continue;
                globParts[i] = matched;
                globParts[j] = [];
            }
        }
        return globParts.filter((gs)=>gs.length);
    }
    partsMatch(a, b, emptyGSMatch = false) {
        let ai = 0;
        let bi = 0;
        let result = [];
        let which = "";
        while(ai < a.length && bi < b.length){
            if (a[ai] === b[bi]) {
                result.push(which === "b" ? b[bi] : a[ai]);
                ai++;
                bi++;
            } else if (emptyGSMatch && a[ai] === "**" && b[bi] === a[ai + 1]) {
                result.push(a[ai]);
                ai++;
            } else if (emptyGSMatch && b[bi] === "**" && a[ai] === b[bi + 1]) {
                result.push(b[bi]);
                bi++;
            } else if (a[ai] === "*" && b[bi] && (this.options.dot || !b[bi].startsWith(".")) && b[bi] !== "**") {
                if (which === "b") return false;
                which = "a";
                result.push(a[ai]);
                ai++;
                bi++;
            } else if (b[bi] === "*" && a[ai] && (this.options.dot || !a[ai].startsWith(".")) && a[ai] !== "**") {
                if (which === "a") return false;
                which = "b";
                result.push(b[bi]);
                ai++;
                bi++;
            } else {
                return false;
            }
        }
        // if we fall out of the loop, it means they two are identical
        // as long as their lengths match
        return a.length === b.length && result;
    }
    parseNegate() {
        if (this.nonegate) return;
        const pattern = this.pattern;
        let negate = false;
        let negateOffset = 0;
        for(let i = 0; i < pattern.length && pattern.charAt(i) === "!"; i++){
            negate = !negate;
            negateOffset++;
        }
        if (negateOffset) this.pattern = pattern.slice(negateOffset);
        this.negate = negate;
    }
    // set partial to true to test if, for example,
    // "/a/b" matches the start of "/*/b/*/d"
    // Partial means, if you run out of file before you run
    // out of pattern, then that's fine, as long as all
    // the parts match.
    matchOne(file, pattern, partial = false) {
        const options = this.options;
        // UNC paths like //?/X:/... can match X:/... and vice versa
        // Drive letters in absolute drive or unc paths are always compared
        // case-insensitively.
        if (this.isWindows) {
            const fileDrive = typeof file[0] === "string" && /^[a-z]:$/i.test(file[0]);
            const fileUNC = !fileDrive && file[0] === "" && file[1] === "" && file[2] === "?" && /^[a-z]:$/i.test(file[3]);
            const patternDrive = typeof pattern[0] === "string" && /^[a-z]:$/i.test(pattern[0]);
            const patternUNC = !patternDrive && pattern[0] === "" && pattern[1] === "" && pattern[2] === "?" && typeof pattern[3] === "string" && /^[a-z]:$/i.test(pattern[3]);
            const fdi = fileUNC ? 3 : fileDrive ? 0 : undefined;
            const pdi = patternUNC ? 3 : patternDrive ? 0 : undefined;
            if (typeof fdi === "number" && typeof pdi === "number") {
                const [fd, pd] = [
                    file[fdi],
                    pattern[pdi]
                ];
                if (fd.toLowerCase() === pd.toLowerCase()) {
                    pattern[pdi] = fd;
                    if (pdi > fdi) {
                        pattern = pattern.slice(pdi);
                    } else if (fdi > pdi) {
                        file = file.slice(fdi);
                    }
                }
            }
        }
        // resolve and reduce . and .. portions in the file as well.
        // dont' need to do the second phase, because it's only one string[]
        const { optimizationLevel = 1 } = this.options;
        if (optimizationLevel >= 2) {
            file = this.levelTwoFileOptimize(file);
        }
        this.debug("matchOne", this, {
            file,
            pattern
        });
        this.debug("matchOne", file.length, pattern.length);
        for(var fi = 0, pi = 0, fl = file.length, pl = pattern.length; fi < fl && pi < pl; fi++, pi++){
            this.debug("matchOne loop");
            var p = pattern[pi];
            var f = file[fi];
            this.debug(pattern, p, f);
            // should be impossible.
            // some invalid regexp stuff in the set.
            /* c8 ignore start */ if (p === false) {
                return false;
            }
            /* c8 ignore stop */ if (p === GLOBSTAR) {
                this.debug("GLOBSTAR", [
                    pattern,
                    p,
                    f
                ]);
                // "**"
                // a/**/b/**/c would match the following:
                // a/b/x/y/z/c
                // a/x/y/z/b/c
                // a/b/x/b/x/c
                // a/b/c
                // To do this, take the rest of the pattern after
                // the **, and see if it would match the file remainder.
                // If so, return success.
                // If not, the ** "swallows" a segment, and try again.
                // This is recursively awful.
                //
                // a/**/b/**/c matching a/b/x/y/z/c
                // - a matches a
                // - doublestar
                //   - matchOne(b/x/y/z/c, b/**/c)
                //     - b matches b
                //     - doublestar
                //       - matchOne(x/y/z/c, c) -> no
                //       - matchOne(y/z/c, c) -> no
                //       - matchOne(z/c, c) -> no
                //       - matchOne(c, c) yes, hit
                var fr = fi;
                var pr = pi + 1;
                if (pr === pl) {
                    this.debug("** at the end");
                    // a ** at the end will just swallow the rest.
                    // We have found a match.
                    // however, it will not swallow /.x, unless
                    // options.dot is set.
                    // . and .. are *never* matched by **, for explosively
                    // exponential reasons.
                    for(; fi < fl; fi++){
                        if (file[fi] === "." || file[fi] === ".." || !options.dot && file[fi].charAt(0) === ".") return false;
                    }
                    return true;
                }
                // ok, let's see if we can swallow whatever we can.
                while(fr < fl){
                    var swallowee = file[fr];
                    this.debug("\nglobstar while", file, fr, pattern, pr, swallowee);
                    // XXX remove this slice.  Just pass the start index.
                    if (this.matchOne(file.slice(fr), pattern.slice(pr), partial)) {
                        this.debug("globstar found match!", fr, fl, swallowee);
                        // found a match.
                        return true;
                    } else {
                        // can't swallow "." or ".." ever.
                        // can only swallow ".foo" when explicitly asked.
                        if (swallowee === "." || swallowee === ".." || !options.dot && swallowee.charAt(0) === ".") {
                            this.debug("dot detected!", file, fr, pattern, pr);
                            break;
                        }
                        // ** swallows a segment, and continue.
                        this.debug("globstar swallow a segment, and continue");
                        fr++;
                    }
                }
                // no match was found.
                // However, in partial mode, we can't say this is necessarily over.
                /* c8 ignore start */ if (partial) {
                    // ran out of file
                    this.debug("\n>>> no match, partial?", file, fr, pattern, pr);
                    if (fr === fl) {
                        return true;
                    }
                }
                /* c8 ignore stop */ return false;
            }
            // something other than **
            // non-magic patterns just have to match exactly
            // patterns with magic have been turned into regexps.
            let hit;
            if (typeof p === "string") {
                hit = f === p;
                this.debug("string match", p, f, hit);
            } else {
                hit = p.test(f);
                this.debug("pattern match", p, f, hit);
            }
            if (!hit) return false;
        }
        // Note: ending in / means that we'll get a final ""
        // at the end of the pattern.  This can only match a
        // corresponding "" at the end of the file.
        // If the file ends in /, then it can only match a
        // a pattern that ends in /, unless the pattern just
        // doesn't have any more for it. But, a/b/ should *not*
        // match "a/b/*", even though "" matches against the
        // [^/]*? pattern, except in partial mode, where it might
        // simply not be reached yet.
        // However, a/b/ should still satisfy a/*
        // now either we fell off the end of the pattern, or we're done.
        if (fi === fl && pi === pl) {
            // ran out of pattern and filename at the same time.
            // an exact hit!
            return true;
        } else if (fi === fl) {
            // ran out of file, but still had pattern left.
            // this is ok if we're doing the match as part of
            // a glob fs traversal.
            return partial;
        } else if (pi === pl) {
            // ran out of pattern, still have file left.
            // this is only acceptable if we're on the very last
            // empty segment of a file with a trailing slash.
            // a/* should match a/b/
            return fi === fl - 1 && file[fi] === "";
        /* c8 ignore start */ } else {
            // should be unreachable.
            throw new Error("wtf?");
        }
    /* c8 ignore stop */ }
    braceExpand() {
        return braceExpand(this.pattern, this.options);
    }
    parse(pattern) {
        assertValidPattern(pattern);
        const options = this.options;
        // shortcuts
        if (pattern === "**") return GLOBSTAR;
        if (pattern === "") return "";
        // far and away, the most common glob pattern parts are
        // *, *.*, and *.<ext>  Add a fast check method for those.
        let m;
        let fastTest = null;
        if (m = pattern.match(starRE)) {
            fastTest = options.dot ? starTestDot : starTest;
        } else if (m = pattern.match(starDotExtRE)) {
            fastTest = (options.nocase ? options.dot ? starDotExtTestNocaseDot : starDotExtTestNocase : options.dot ? starDotExtTestDot : starDotExtTest)(m[1]);
        } else if (m = pattern.match(qmarksRE)) {
            fastTest = (options.nocase ? options.dot ? qmarksTestNocaseDot : qmarksTestNocase : options.dot ? qmarksTestDot : qmarksTest)(m);
        } else if (m = pattern.match(starDotStarRE)) {
            fastTest = options.dot ? starDotStarTestDot : starDotStarTest;
        } else if (m = pattern.match(dotStarRE)) {
            fastTest = dotStarTest;
        }
        const re = AST.fromGlob(pattern, this.options).toMMPattern();
        return fastTest ? Object.assign(re, {
            test: fastTest
        }) : re;
    }
    makeRe() {
        if (this.regexp || this.regexp === false) return this.regexp;
        // at this point, this.set is a 2d array of partial
        // pattern strings, or "**".
        //
        // It's better to use .match().  This function shouldn't
        // be used, really, but it's pretty convenient sometimes,
        // when you just want to work with a regex.
        const set = this.set;
        if (!set.length) {
            this.regexp = false;
            return this.regexp;
        }
        const options = this.options;
        const twoStar = options.noglobstar ? mjs_star : options.dot ? twoStarDot : twoStarNoDot;
        const flags = new Set(options.nocase ? [
            "i"
        ] : []);
        // regexpify non-globstar patterns
        // if ** is only item, then we just do one twoStar
        // if ** is first, and there are more, prepend (\/|twoStar\/)? to next
        // if ** is last, append (\/twoStar|) to previous
        // if ** is in the middle, append (\/|\/twoStar\/) to previous
        // then filter out GLOBSTAR symbols
        let re = set.map((pattern)=>{
            const pp = pattern.map((p)=>{
                if (p instanceof RegExp) {
                    for (const f of p.flags.split(""))flags.add(f);
                }
                return typeof p === "string" ? mjs_regExpEscape(p) : p === GLOBSTAR ? GLOBSTAR : p._src;
            });
            pp.forEach((p, i)=>{
                const next = pp[i + 1];
                const prev = pp[i - 1];
                if (p !== GLOBSTAR || prev === GLOBSTAR) {
                    return;
                }
                if (prev === undefined) {
                    if (next !== undefined && next !== GLOBSTAR) {
                        pp[i + 1] = "(?:\\/|" + twoStar + "\\/)?" + next;
                    } else {
                        pp[i] = twoStar;
                    }
                } else if (next === undefined) {
                    pp[i - 1] = prev + "(?:\\/|" + twoStar + ")?";
                } else if (next !== GLOBSTAR) {
                    pp[i - 1] = prev + "(?:\\/|\\/" + twoStar + "\\/)" + next;
                    pp[i + 1] = GLOBSTAR;
                }
            });
            return pp.filter((p)=>p !== GLOBSTAR).join("/");
        }).join("|");
        // need to wrap in parens if we had more than one thing with |,
        // otherwise only the first will be anchored to ^ and the last to $
        const [open, close] = set.length > 1 ? [
            "(?:",
            ")"
        ] : [
            "",
            ""
        ];
        // must match entire pattern
        // ending in a * or ** will make it less strict.
        re = "^" + open + re + close + "$";
        // can match anything, as long as it's not this.
        if (this.negate) re = "^(?!" + re + ").+$";
        try {
            this.regexp = new RegExp(re, [
                ...flags
            ].join(""));
        /* c8 ignore start */ } catch (ex) {
            // should be impossible
            this.regexp = false;
        }
        /* c8 ignore stop */ return this.regexp;
    }
    slashSplit(p) {
        // if p starts with // on windows, we preserve that
        // so that UNC paths aren't broken.  Otherwise, any number of
        // / characters are coalesced into one, unless
        // preserveMultipleSlashes is set to true.
        if (this.preserveMultipleSlashes) {
            return p.split("/");
        } else if (this.isWindows && /^\/\/[^\/]+/.test(p)) {
            // add an extra '' for the one we lose
            return [
                "",
                ...p.split(/\/+/)
            ];
        } else {
            return p.split(/\/+/);
        }
    }
    match(f, partial = this.partial) {
        this.debug("match", f, this.pattern);
        // short-circuit in the case of busted things.
        // comments, etc.
        if (this.comment) {
            return false;
        }
        if (this.empty) {
            return f === "";
        }
        if (f === "/" && partial) {
            return true;
        }
        const options = this.options;
        // windows: need to use /, not \
        if (this.isWindows) {
            f = f.split("\\").join("/");
        }
        // treat the test path as a set of pathparts.
        const ff = this.slashSplit(f);
        this.debug(this.pattern, "split", ff);
        // just ONE of the pattern sets in this.set needs to match
        // in order for it to be valid.  If negating, then just one
        // match means that we have failed.
        // Either way, return on the first hit.
        const set = this.set;
        this.debug(this.pattern, "set", set);
        // Find the basename of the path by looking for the last non-empty segment
        let filename = ff[ff.length - 1];
        if (!filename) {
            for(let i = ff.length - 2; !filename && i >= 0; i--){
                filename = ff[i];
            }
        }
        for(let i = 0; i < set.length; i++){
            const pattern = set[i];
            let file = ff;
            if (options.matchBase && pattern.length === 1) {
                file = [
                    filename
                ];
            }
            const hit = this.matchOne(file, pattern, partial);
            if (hit) {
                if (options.flipNegate) {
                    return true;
                }
                return !this.negate;
            }
        }
        // didn't get any hits.  this is success if it's a negative
        // pattern, failure otherwise.
        if (options.flipNegate) {
            return false;
        }
        return this.negate;
    }
    static defaults(def) {
        return minimatch.defaults(def).Minimatch;
    }
}
/* c8 ignore start */ 


/* c8 ignore stop */ minimatch.AST = AST;
minimatch.Minimatch = Minimatch;
minimatch.escape = escape_escape;
minimatch.unescape = unescape_unescape; //# sourceMappingURL=index.js.map

;// CONCATENATED MODULE: ./node_modules/path-scurry/node_modules/lru-cache/dist/mjs/index.js
/**
 * @module LRUCache
 */ const perf = typeof performance === "object" && performance && typeof performance.now === "function" ? performance : Date;
const warned = new Set();
/* c8 ignore start */ const PROCESS = typeof process === "object" && !!process ? process : {};
/* c8 ignore start */ const emitWarning = (msg, type, code, fn)=>{
    typeof PROCESS.emitWarning === "function" ? PROCESS.emitWarning(msg, type, code, fn) : console.error(`[${code}] ${type}: ${msg}`);
};
let AC = globalThis.AbortController;
let AS = globalThis.AbortSignal;
/* c8 ignore start */ if (typeof AC === "undefined") {
    //@ts-ignore
    AS = class AbortSignal {
        addEventListener(_, fn) {
            this._onabort.push(fn);
        }
        constructor(){
            this._onabort = [];
            this.aborted = false;
        }
    };
    //@ts-ignore
    AC = class AbortController {
        constructor(){
            this.signal = new AS();
            warnACPolyfill();
        }
        abort(reason) {
            if (this.signal.aborted) return;
            //@ts-ignore
            this.signal.reason = reason;
            //@ts-ignore
            this.signal.aborted = true;
            //@ts-ignore
            for (const fn of this.signal._onabort){
                fn(reason);
            }
            this.signal.onabort?.(reason);
        }
    };
    let printACPolyfillWarning = PROCESS.env?.LRU_CACHE_IGNORE_AC_WARNING !== "1";
    const warnACPolyfill = ()=>{
        if (!printACPolyfillWarning) return;
        printACPolyfillWarning = false;
        emitWarning("AbortController is not defined. If using lru-cache in " + "node 14, load an AbortController polyfill from the " + "`node-abort-controller` package. A minimal polyfill is " + "provided for use by LRUCache.fetch(), but it should not be " + "relied upon in other contexts (eg, passing it to other APIs that " + "use AbortController/AbortSignal might have undesirable effects). " + "You may disable this with LRU_CACHE_IGNORE_AC_WARNING=1 in the env.", "NO_ABORT_CONTROLLER", "ENOTSUP", warnACPolyfill);
    };
}
/* c8 ignore stop */ const shouldWarn = (code)=>!warned.has(code);
const TYPE = Symbol("type");
const isPosInt = (n)=>n && n === Math.floor(n) && n > 0 && isFinite(n);
/* c8 ignore start */ // This is a little bit ridiculous, tbh.
// The maximum array length is 2^32-1 or thereabouts on most JS impls.
// And well before that point, you're caching the entire world, I mean,
// that's ~32GB of just integers for the next/prev links, plus whatever
// else to hold that many keys and values.  Just filling the memory with
// zeroes at init time is brutal when you get that big.
// But why not be complete?
// Maybe in the future, these limits will have expanded.
const getUintArray = (max)=>!isPosInt(max) ? null : max <= Math.pow(2, 8) ? Uint8Array : max <= Math.pow(2, 16) ? Uint16Array : max <= Math.pow(2, 32) ? Uint32Array : max <= Number.MAX_SAFE_INTEGER ? ZeroArray : null;
/* c8 ignore stop */ class ZeroArray extends Array {
    constructor(size){
        super(size);
        this.fill(0);
    }
}
class Stack {
    // private constructor
    static #constructing = false;
    static create(max) {
        const HeapCls = getUintArray(max);
        if (!HeapCls) return [];
        Stack.#constructing = true;
        const s = new Stack(max, HeapCls);
        Stack.#constructing = false;
        return s;
    }
    constructor(max, HeapCls){
        /* c8 ignore start */ if (!Stack.#constructing) {
            throw new TypeError("instantiate Stack using Stack.create(n)");
        }
        /* c8 ignore stop */ this.heap = new HeapCls(max);
        this.length = 0;
    }
    push(n) {
        this.heap[this.length++] = n;
    }
    pop() {
        return this.heap[--this.length];
    }
}
/**
 * Default export, the thing you're using this module to get.
 *
 * All properties from the options object (with the exception of
 * {@link OptionsBase.max} and {@link OptionsBase.maxSize}) are added as
 * normal public members. (`max` and `maxBase` are read-only getters.)
 * Changing any of these will alter the defaults for subsequent method calls,
 * but is otherwise safe.
 */ class LRUCache {
    // properties coming in from the options of these, only max and maxSize
    // really *need* to be protected. The rest can be modified, as they just
    // set defaults for various methods.
    #max;
    #maxSize;
    #dispose;
    #disposeAfter;
    #fetchMethod;
    // computed properties
    #size;
    #calculatedSize;
    #keyMap;
    #keyList;
    #valList;
    #next;
    #prev;
    #head;
    #tail;
    #free;
    #disposed;
    #sizes;
    #starts;
    #ttls;
    #hasDispose;
    #hasFetchMethod;
    #hasDisposeAfter;
    /**
     * Do not call this method unless you need to inspect the
     * inner workings of the cache.  If anything returned by this
     * object is modified in any way, strange breakage may occur.
     *
     * These fields are private for a reason!
     *
     * @internal
     */ static unsafeExposeInternals(c) {
        return {
            // properties
            starts: c.#starts,
            ttls: c.#ttls,
            sizes: c.#sizes,
            keyMap: c.#keyMap,
            keyList: c.#keyList,
            valList: c.#valList,
            next: c.#next,
            prev: c.#prev,
            get head () {
                return c.#head;
            },
            get tail () {
                return c.#tail;
            },
            free: c.#free,
            // methods
            isBackgroundFetch: (p)=>c.#isBackgroundFetch(p),
            backgroundFetch: (k, index, options, context)=>c.#backgroundFetch(k, index, options, context),
            moveToTail: (index)=>c.#moveToTail(index),
            indexes: (options)=>c.#indexes(options),
            rindexes: (options)=>c.#rindexes(options),
            isStale: (index)=>c.#isStale(index)
        };
    }
    // Protected read-only members
    /**
     * {@link LRUCache.OptionsBase.max} (read-only)
     */ get max() {
        return this.#max;
    }
    /**
     * {@link LRUCache.OptionsBase.maxSize} (read-only)
     */ get maxSize() {
        return this.#maxSize;
    }
    /**
     * The total computed size of items in the cache (read-only)
     */ get calculatedSize() {
        return this.#calculatedSize;
    }
    /**
     * The number of items stored in the cache (read-only)
     */ get size() {
        return this.#size;
    }
    /**
     * {@link LRUCache.OptionsBase.fetchMethod} (read-only)
     */ get fetchMethod() {
        return this.#fetchMethod;
    }
    /**
     * {@link LRUCache.OptionsBase.dispose} (read-only)
     */ get dispose() {
        return this.#dispose;
    }
    /**
     * {@link LRUCache.OptionsBase.disposeAfter} (read-only)
     */ get disposeAfter() {
        return this.#disposeAfter;
    }
    constructor(options){
        // conditionally set private methods related to TTL
        this.#updateItemAge = ()=>{};
        this.#statusTTL = ()=>{};
        this.#setItemTTL = ()=>{};
        /* c8 ignore stop */ this.#isStale = ()=>false;
        this.#removeItemSize = (_i)=>{};
        this.#addItemSize = (_i, _s, _st)=>{};
        this.#requireSize = (_k, _v, size, sizeCalculation)=>{
            if (size || sizeCalculation) {
                throw new TypeError("cannot set size without setting maxSize or maxEntrySize on cache");
            }
            return 0;
        };
        const { max = 0, ttl, ttlResolution = 1, ttlAutopurge, updateAgeOnGet, updateAgeOnHas, allowStale, dispose, disposeAfter, noDisposeOnSet, noUpdateTTL, maxSize = 0, maxEntrySize = 0, sizeCalculation, fetchMethod, noDeleteOnFetchRejection, noDeleteOnStaleGet, allowStaleOnFetchRejection, allowStaleOnFetchAbort, ignoreFetchAbort } = options;
        if (max !== 0 && !isPosInt(max)) {
            throw new TypeError("max option must be a nonnegative integer");
        }
        const UintArray = max ? getUintArray(max) : Array;
        if (!UintArray) {
            throw new Error("invalid max value: " + max);
        }
        this.#max = max;
        this.#maxSize = maxSize;
        this.maxEntrySize = maxEntrySize || this.#maxSize;
        this.sizeCalculation = sizeCalculation;
        if (this.sizeCalculation) {
            if (!this.#maxSize && !this.maxEntrySize) {
                throw new TypeError("cannot set sizeCalculation without setting maxSize or maxEntrySize");
            }
            if (typeof this.sizeCalculation !== "function") {
                throw new TypeError("sizeCalculation set to non-function");
            }
        }
        if (fetchMethod !== undefined && typeof fetchMethod !== "function") {
            throw new TypeError("fetchMethod must be a function if specified");
        }
        this.#fetchMethod = fetchMethod;
        this.#hasFetchMethod = !!fetchMethod;
        this.#keyMap = new Map();
        this.#keyList = new Array(max).fill(undefined);
        this.#valList = new Array(max).fill(undefined);
        this.#next = new UintArray(max);
        this.#prev = new UintArray(max);
        this.#head = 0;
        this.#tail = 0;
        this.#free = Stack.create(max);
        this.#size = 0;
        this.#calculatedSize = 0;
        if (typeof dispose === "function") {
            this.#dispose = dispose;
        }
        if (typeof disposeAfter === "function") {
            this.#disposeAfter = disposeAfter;
            this.#disposed = [];
        } else {
            this.#disposeAfter = undefined;
            this.#disposed = undefined;
        }
        this.#hasDispose = !!this.#dispose;
        this.#hasDisposeAfter = !!this.#disposeAfter;
        this.noDisposeOnSet = !!noDisposeOnSet;
        this.noUpdateTTL = !!noUpdateTTL;
        this.noDeleteOnFetchRejection = !!noDeleteOnFetchRejection;
        this.allowStaleOnFetchRejection = !!allowStaleOnFetchRejection;
        this.allowStaleOnFetchAbort = !!allowStaleOnFetchAbort;
        this.ignoreFetchAbort = !!ignoreFetchAbort;
        // NB: maxEntrySize is set to maxSize if it's set
        if (this.maxEntrySize !== 0) {
            if (this.#maxSize !== 0) {
                if (!isPosInt(this.#maxSize)) {
                    throw new TypeError("maxSize must be a positive integer if specified");
                }
            }
            if (!isPosInt(this.maxEntrySize)) {
                throw new TypeError("maxEntrySize must be a positive integer if specified");
            }
            this.#initializeSizeTracking();
        }
        this.allowStale = !!allowStale;
        this.noDeleteOnStaleGet = !!noDeleteOnStaleGet;
        this.updateAgeOnGet = !!updateAgeOnGet;
        this.updateAgeOnHas = !!updateAgeOnHas;
        this.ttlResolution = isPosInt(ttlResolution) || ttlResolution === 0 ? ttlResolution : 1;
        this.ttlAutopurge = !!ttlAutopurge;
        this.ttl = ttl || 0;
        if (this.ttl) {
            if (!isPosInt(this.ttl)) {
                throw new TypeError("ttl must be a positive integer if specified");
            }
            this.#initializeTTLTracking();
        }
        // do not allow completely unbounded caches
        if (this.#max === 0 && this.ttl === 0 && this.#maxSize === 0) {
            throw new TypeError("At least one of max, maxSize, or ttl is required");
        }
        if (!this.ttlAutopurge && !this.#max && !this.#maxSize) {
            const code = "LRU_CACHE_UNBOUNDED";
            if (shouldWarn(code)) {
                warned.add(code);
                const msg = "TTL caching without ttlAutopurge, max, or maxSize can " + "result in unbounded memory consumption.";
                emitWarning(msg, "UnboundedCacheWarning", code, LRUCache);
            }
        }
    }
    /**
     * Return the remaining TTL time for a given entry key
     */ getRemainingTTL(key) {
        return this.#keyMap.has(key) ? Infinity : 0;
    }
    #initializeTTLTracking() {
        const ttls = new ZeroArray(this.#max);
        const starts = new ZeroArray(this.#max);
        this.#ttls = ttls;
        this.#starts = starts;
        this.#setItemTTL = (index, ttl, start = perf.now())=>{
            starts[index] = ttl !== 0 ? start : 0;
            ttls[index] = ttl;
            if (ttl !== 0 && this.ttlAutopurge) {
                const t = setTimeout(()=>{
                    if (this.#isStale(index)) {
                        this.delete(this.#keyList[index]);
                    }
                }, ttl + 1);
                // unref() not supported on all platforms
                /* c8 ignore start */ if (t.unref) {
                    t.unref();
                }
            /* c8 ignore stop */ }
        };
        this.#updateItemAge = (index)=>{
            starts[index] = ttls[index] !== 0 ? perf.now() : 0;
        };
        this.#statusTTL = (status, index)=>{
            if (ttls[index]) {
                const ttl = ttls[index];
                const start = starts[index];
                status.ttl = ttl;
                status.start = start;
                status.now = cachedNow || getNow();
                const age = status.now - start;
                status.remainingTTL = ttl - age;
            }
        };
        // debounce calls to perf.now() to 1s so we're not hitting
        // that costly call repeatedly.
        let cachedNow = 0;
        const getNow = ()=>{
            const n = perf.now();
            if (this.ttlResolution > 0) {
                cachedNow = n;
                const t = setTimeout(()=>cachedNow = 0, this.ttlResolution);
                // not available on all platforms
                /* c8 ignore start */ if (t.unref) {
                    t.unref();
                }
            /* c8 ignore stop */ }
            return n;
        };
        this.getRemainingTTL = (key)=>{
            const index = this.#keyMap.get(key);
            if (index === undefined) {
                return 0;
            }
            const ttl = ttls[index];
            const start = starts[index];
            if (ttl === 0 || start === 0) {
                return Infinity;
            }
            const age = (cachedNow || getNow()) - start;
            return ttl - age;
        };
        this.#isStale = (index)=>{
            return ttls[index] !== 0 && starts[index] !== 0 && (cachedNow || getNow()) - starts[index] > ttls[index];
        };
    }
    #updateItemAge;
    #statusTTL;
    #setItemTTL;
    #isStale;
    #initializeSizeTracking() {
        const sizes = new ZeroArray(this.#max);
        this.#calculatedSize = 0;
        this.#sizes = sizes;
        this.#removeItemSize = (index)=>{
            this.#calculatedSize -= sizes[index];
            sizes[index] = 0;
        };
        this.#requireSize = (k, v, size, sizeCalculation)=>{
            // provisionally accept background fetches.
            // actual value size will be checked when they return.
            if (this.#isBackgroundFetch(v)) {
                return 0;
            }
            if (!isPosInt(size)) {
                if (sizeCalculation) {
                    if (typeof sizeCalculation !== "function") {
                        throw new TypeError("sizeCalculation must be a function");
                    }
                    size = sizeCalculation(v, k);
                    if (!isPosInt(size)) {
                        throw new TypeError("sizeCalculation return invalid (expect positive integer)");
                    }
                } else {
                    throw new TypeError("invalid size value (must be positive integer). " + "When maxSize or maxEntrySize is used, sizeCalculation " + "or size must be set.");
                }
            }
            return size;
        };
        this.#addItemSize = (index, size, status)=>{
            sizes[index] = size;
            if (this.#maxSize) {
                const maxSize = this.#maxSize - sizes[index];
                while(this.#calculatedSize > maxSize){
                    this.#evict(true);
                }
            }
            this.#calculatedSize += sizes[index];
            if (status) {
                status.entrySize = size;
                status.totalCalculatedSize = this.#calculatedSize;
            }
        };
    }
    #removeItemSize;
    #addItemSize;
    #requireSize;
    *#indexes({ allowStale = this.allowStale } = {}) {
        if (this.#size) {
            for(let i = this.#tail; true;){
                if (!this.#isValidIndex(i)) {
                    break;
                }
                if (allowStale || !this.#isStale(i)) {
                    yield i;
                }
                if (i === this.#head) {
                    break;
                } else {
                    i = this.#prev[i];
                }
            }
        }
    }
    *#rindexes({ allowStale = this.allowStale } = {}) {
        if (this.#size) {
            for(let i = this.#head; true;){
                if (!this.#isValidIndex(i)) {
                    break;
                }
                if (allowStale || !this.#isStale(i)) {
                    yield i;
                }
                if (i === this.#tail) {
                    break;
                } else {
                    i = this.#next[i];
                }
            }
        }
    }
    #isValidIndex(index) {
        return index !== undefined && this.#keyMap.get(this.#keyList[index]) === index;
    }
    /**
     * Return a generator yielding `[key, value]` pairs,
     * in order from most recently used to least recently used.
     */ *entries() {
        for (const i of this.#indexes()){
            if (this.#valList[i] !== undefined && this.#keyList[i] !== undefined && !this.#isBackgroundFetch(this.#valList[i])) {
                yield [
                    this.#keyList[i],
                    this.#valList[i]
                ];
            }
        }
    }
    /**
     * Inverse order version of {@link LRUCache.entries}
     *
     * Return a generator yielding `[key, value]` pairs,
     * in order from least recently used to most recently used.
     */ *rentries() {
        for (const i of this.#rindexes()){
            if (this.#valList[i] !== undefined && this.#keyList[i] !== undefined && !this.#isBackgroundFetch(this.#valList[i])) {
                yield [
                    this.#keyList[i],
                    this.#valList[i]
                ];
            }
        }
    }
    /**
     * Return a generator yielding the keys in the cache,
     * in order from most recently used to least recently used.
     */ *keys() {
        for (const i of this.#indexes()){
            const k = this.#keyList[i];
            if (k !== undefined && !this.#isBackgroundFetch(this.#valList[i])) {
                yield k;
            }
        }
    }
    /**
     * Inverse order version of {@link LRUCache.keys}
     *
     * Return a generator yielding the keys in the cache,
     * in order from least recently used to most recently used.
     */ *rkeys() {
        for (const i of this.#rindexes()){
            const k = this.#keyList[i];
            if (k !== undefined && !this.#isBackgroundFetch(this.#valList[i])) {
                yield k;
            }
        }
    }
    /**
     * Return a generator yielding the values in the cache,
     * in order from most recently used to least recently used.
     */ *values() {
        for (const i of this.#indexes()){
            const v = this.#valList[i];
            if (v !== undefined && !this.#isBackgroundFetch(this.#valList[i])) {
                yield this.#valList[i];
            }
        }
    }
    /**
     * Inverse order version of {@link LRUCache.values}
     *
     * Return a generator yielding the values in the cache,
     * in order from least recently used to most recently used.
     */ *rvalues() {
        for (const i of this.#rindexes()){
            const v = this.#valList[i];
            if (v !== undefined && !this.#isBackgroundFetch(this.#valList[i])) {
                yield this.#valList[i];
            }
        }
    }
    /**
     * Iterating over the cache itself yields the same results as
     * {@link LRUCache.entries}
     */ [Symbol.iterator]() {
        return this.entries();
    }
    /**
     * Find a value for which the supplied fn method returns a truthy value,
     * similar to Array.find().  fn is called as fn(value, key, cache).
     */ find(fn, getOptions = {}) {
        for (const i of this.#indexes()){
            const v = this.#valList[i];
            const value = this.#isBackgroundFetch(v) ? v.__staleWhileFetching : v;
            if (value === undefined) continue;
            if (fn(value, this.#keyList[i], this)) {
                return this.get(this.#keyList[i], getOptions);
            }
        }
    }
    /**
     * Call the supplied function on each item in the cache, in order from
     * most recently used to least recently used.  fn is called as
     * fn(value, key, cache).  Does not update age or recenty of use.
     * Does not iterate over stale values.
     */ forEach(fn, thisp = this) {
        for (const i of this.#indexes()){
            const v = this.#valList[i];
            const value = this.#isBackgroundFetch(v) ? v.__staleWhileFetching : v;
            if (value === undefined) continue;
            fn.call(thisp, value, this.#keyList[i], this);
        }
    }
    /**
     * The same as {@link LRUCache.forEach} but items are iterated over in
     * reverse order.  (ie, less recently used items are iterated over first.)
     */ rforEach(fn, thisp = this) {
        for (const i of this.#rindexes()){
            const v = this.#valList[i];
            const value = this.#isBackgroundFetch(v) ? v.__staleWhileFetching : v;
            if (value === undefined) continue;
            fn.call(thisp, value, this.#keyList[i], this);
        }
    }
    /**
     * Delete any stale entries. Returns true if anything was removed,
     * false otherwise.
     */ purgeStale() {
        let deleted = false;
        for (const i of this.#rindexes({
            allowStale: true
        })){
            if (this.#isStale(i)) {
                this.delete(this.#keyList[i]);
                deleted = true;
            }
        }
        return deleted;
    }
    /**
     * Return an array of [key, {@link LRUCache.Entry}] tuples which can be
     * passed to cache.load()
     */ dump() {
        const arr = [];
        for (const i of this.#indexes({
            allowStale: true
        })){
            const key = this.#keyList[i];
            const v = this.#valList[i];
            const value = this.#isBackgroundFetch(v) ? v.__staleWhileFetching : v;
            if (value === undefined || key === undefined) continue;
            const entry = {
                value
            };
            if (this.#ttls && this.#starts) {
                entry.ttl = this.#ttls[i];
                // always dump the start relative to a portable timestamp
                // it's ok for this to be a bit slow, it's a rare operation.
                const age = perf.now() - this.#starts[i];
                entry.start = Math.floor(Date.now() - age);
            }
            if (this.#sizes) {
                entry.size = this.#sizes[i];
            }
            arr.unshift([
                key,
                entry
            ]);
        }
        return arr;
    }
    /**
     * Reset the cache and load in the items in entries in the order listed.
     * Note that the shape of the resulting cache may be different if the
     * same options are not used in both caches.
     */ load(arr) {
        this.clear();
        for (const [key, entry] of arr){
            if (entry.start) {
                // entry.start is a portable timestamp, but we may be using
                // node's performance.now(), so calculate the offset, so that
                // we get the intended remaining TTL, no matter how long it's
                // been on ice.
                //
                // it's ok for this to be a bit slow, it's a rare operation.
                const age = Date.now() - entry.start;
                entry.start = perf.now() - age;
            }
            this.set(key, entry.value, entry);
        }
    }
    /**
     * Add a value to the cache.
     *
     * Note: if `undefined` is specified as a value, this is an alias for
     * {@link LRUCache#delete}
     */ set(k, v, setOptions = {}) {
        if (v === undefined) {
            this.delete(k);
            return this;
        }
        const { ttl = this.ttl, start, noDisposeOnSet = this.noDisposeOnSet, sizeCalculation = this.sizeCalculation, status } = setOptions;
        let { noUpdateTTL = this.noUpdateTTL } = setOptions;
        const size = this.#requireSize(k, v, setOptions.size || 0, sizeCalculation);
        // if the item doesn't fit, don't do anything
        // NB: maxEntrySize set to maxSize by default
        if (this.maxEntrySize && size > this.maxEntrySize) {
            if (status) {
                status.set = "miss";
                status.maxEntrySizeExceeded = true;
            }
            // have to delete, in case something is there already.
            this.delete(k);
            return this;
        }
        let index = this.#size === 0 ? undefined : this.#keyMap.get(k);
        if (index === undefined) {
            // addition
            index = this.#size === 0 ? this.#tail : this.#free.length !== 0 ? this.#free.pop() : this.#size === this.#max ? this.#evict(false) : this.#size;
            this.#keyList[index] = k;
            this.#valList[index] = v;
            this.#keyMap.set(k, index);
            this.#next[this.#tail] = index;
            this.#prev[index] = this.#tail;
            this.#tail = index;
            this.#size++;
            this.#addItemSize(index, size, status);
            if (status) status.set = "add";
            noUpdateTTL = false;
        } else {
            // update
            this.#moveToTail(index);
            const oldVal = this.#valList[index];
            if (v !== oldVal) {
                if (this.#hasFetchMethod && this.#isBackgroundFetch(oldVal)) {
                    oldVal.__abortController.abort(new Error("replaced"));
                } else if (!noDisposeOnSet) {
                    if (this.#hasDispose) {
                        this.#dispose?.(oldVal, k, "set");
                    }
                    if (this.#hasDisposeAfter) {
                        this.#disposed?.push([
                            oldVal,
                            k,
                            "set"
                        ]);
                    }
                }
                this.#removeItemSize(index);
                this.#addItemSize(index, size, status);
                this.#valList[index] = v;
                if (status) {
                    status.set = "replace";
                    const oldValue = oldVal && this.#isBackgroundFetch(oldVal) ? oldVal.__staleWhileFetching : oldVal;
                    if (oldValue !== undefined) status.oldValue = oldValue;
                }
            } else if (status) {
                status.set = "update";
            }
        }
        if (ttl !== 0 && !this.#ttls) {
            this.#initializeTTLTracking();
        }
        if (this.#ttls) {
            if (!noUpdateTTL) {
                this.#setItemTTL(index, ttl, start);
            }
            if (status) this.#statusTTL(status, index);
        }
        if (!noDisposeOnSet && this.#hasDisposeAfter && this.#disposed) {
            const dt = this.#disposed;
            let task;
            while(task = dt?.shift()){
                this.#disposeAfter?.(...task);
            }
        }
        return this;
    }
    /**
     * Evict the least recently used item, returning its value or
     * `undefined` if cache is empty.
     */ pop() {
        try {
            while(this.#size){
                const val = this.#valList[this.#head];
                this.#evict(true);
                if (this.#isBackgroundFetch(val)) {
                    if (val.__staleWhileFetching) {
                        return val.__staleWhileFetching;
                    }
                } else if (val !== undefined) {
                    return val;
                }
            }
        } finally{
            if (this.#hasDisposeAfter && this.#disposed) {
                const dt = this.#disposed;
                let task;
                while(task = dt?.shift()){
                    this.#disposeAfter?.(...task);
                }
            }
        }
    }
    #evict(free) {
        const head = this.#head;
        const k = this.#keyList[head];
        const v = this.#valList[head];
        if (this.#hasFetchMethod && this.#isBackgroundFetch(v)) {
            v.__abortController.abort(new Error("evicted"));
        } else if (this.#hasDispose || this.#hasDisposeAfter) {
            if (this.#hasDispose) {
                this.#dispose?.(v, k, "evict");
            }
            if (this.#hasDisposeAfter) {
                this.#disposed?.push([
                    v,
                    k,
                    "evict"
                ]);
            }
        }
        this.#removeItemSize(head);
        // if we aren't about to use the index, then null these out
        if (free) {
            this.#keyList[head] = undefined;
            this.#valList[head] = undefined;
            this.#free.push(head);
        }
        if (this.#size === 1) {
            this.#head = this.#tail = 0;
            this.#free.length = 0;
        } else {
            this.#head = this.#next[head];
        }
        this.#keyMap.delete(k);
        this.#size--;
        return head;
    }
    /**
     * Check if a key is in the cache, without updating the recency of use.
     * Will return false if the item is stale, even though it is technically
     * in the cache.
     *
     * Will not update item age unless
     * {@link LRUCache.OptionsBase.updateAgeOnHas} is set.
     */ has(k, hasOptions = {}) {
        const { updateAgeOnHas = this.updateAgeOnHas, status } = hasOptions;
        const index = this.#keyMap.get(k);
        if (index !== undefined) {
            const v = this.#valList[index];
            if (this.#isBackgroundFetch(v) && v.__staleWhileFetching === undefined) {
                return false;
            }
            if (!this.#isStale(index)) {
                if (updateAgeOnHas) {
                    this.#updateItemAge(index);
                }
                if (status) {
                    status.has = "hit";
                    this.#statusTTL(status, index);
                }
                return true;
            } else if (status) {
                status.has = "stale";
                this.#statusTTL(status, index);
            }
        } else if (status) {
            status.has = "miss";
        }
        return false;
    }
    /**
     * Like {@link LRUCache#get} but doesn't update recency or delete stale
     * items.
     *
     * Returns `undefined` if the item is stale, unless
     * {@link LRUCache.OptionsBase.allowStale} is set.
     */ peek(k, peekOptions = {}) {
        const { allowStale = this.allowStale } = peekOptions;
        const index = this.#keyMap.get(k);
        if (index !== undefined && (allowStale || !this.#isStale(index))) {
            const v = this.#valList[index];
            // either stale and allowed, or forcing a refresh of non-stale value
            return this.#isBackgroundFetch(v) ? v.__staleWhileFetching : v;
        }
    }
    #backgroundFetch(k, index, options, context) {
        const v = index === undefined ? undefined : this.#valList[index];
        if (this.#isBackgroundFetch(v)) {
            return v;
        }
        const ac = new AC();
        const { signal } = options;
        // when/if our AC signals, then stop listening to theirs.
        signal?.addEventListener("abort", ()=>ac.abort(signal.reason), {
            signal: ac.signal
        });
        const fetchOpts = {
            signal: ac.signal,
            options,
            context
        };
        const cb = (v, updateCache = false)=>{
            const { aborted } = ac.signal;
            const ignoreAbort = options.ignoreFetchAbort && v !== undefined;
            if (options.status) {
                if (aborted && !updateCache) {
                    options.status.fetchAborted = true;
                    options.status.fetchError = ac.signal.reason;
                    if (ignoreAbort) options.status.fetchAbortIgnored = true;
                } else {
                    options.status.fetchResolved = true;
                }
            }
            if (aborted && !ignoreAbort && !updateCache) {
                return fetchFail(ac.signal.reason);
            }
            // either we didn't abort, and are still here, or we did, and ignored
            const bf = p;
            if (this.#valList[index] === p) {
                if (v === undefined) {
                    if (bf.__staleWhileFetching) {
                        this.#valList[index] = bf.__staleWhileFetching;
                    } else {
                        this.delete(k);
                    }
                } else {
                    if (options.status) options.status.fetchUpdated = true;
                    this.set(k, v, fetchOpts.options);
                }
            }
            return v;
        };
        const eb = (er)=>{
            if (options.status) {
                options.status.fetchRejected = true;
                options.status.fetchError = er;
            }
            return fetchFail(er);
        };
        const fetchFail = (er)=>{
            const { aborted } = ac.signal;
            const allowStaleAborted = aborted && options.allowStaleOnFetchAbort;
            const allowStale = allowStaleAborted || options.allowStaleOnFetchRejection;
            const noDelete = allowStale || options.noDeleteOnFetchRejection;
            const bf = p;
            if (this.#valList[index] === p) {
                // if we allow stale on fetch rejections, then we need to ensure that
                // the stale value is not removed from the cache when the fetch fails.
                const del = !noDelete || bf.__staleWhileFetching === undefined;
                if (del) {
                    this.delete(k);
                } else if (!allowStaleAborted) {
                    // still replace the *promise* with the stale value,
                    // since we are done with the promise at this point.
                    // leave it untouched if we're still waiting for an
                    // aborted background fetch that hasn't yet returned.
                    this.#valList[index] = bf.__staleWhileFetching;
                }
            }
            if (allowStale) {
                if (options.status && bf.__staleWhileFetching !== undefined) {
                    options.status.returnedStale = true;
                }
                return bf.__staleWhileFetching;
            } else if (bf.__returned === bf) {
                throw er;
            }
        };
        const pcall = (res, rej)=>{
            const fmp = this.#fetchMethod?.(k, v, fetchOpts);
            if (fmp && fmp instanceof Promise) {
                fmp.then((v)=>res(v === undefined ? undefined : v), rej);
            }
            // ignored, we go until we finish, regardless.
            // defer check until we are actually aborting,
            // so fetchMethod can override.
            ac.signal.addEventListener("abort", ()=>{
                if (!options.ignoreFetchAbort || options.allowStaleOnFetchAbort) {
                    res(undefined);
                    // when it eventually resolves, update the cache.
                    if (options.allowStaleOnFetchAbort) {
                        res = (v)=>cb(v, true);
                    }
                }
            });
        };
        if (options.status) options.status.fetchDispatched = true;
        const p = new Promise(pcall).then(cb, eb);
        const bf = Object.assign(p, {
            __abortController: ac,
            __staleWhileFetching: v,
            __returned: undefined
        });
        if (index === undefined) {
            // internal, don't expose status.
            this.set(k, bf, {
                ...fetchOpts.options,
                status: undefined
            });
            index = this.#keyMap.get(k);
        } else {
            this.#valList[index] = bf;
        }
        return bf;
    }
    #isBackgroundFetch(p) {
        if (!this.#hasFetchMethod) return false;
        const b = p;
        return !!b && b instanceof Promise && b.hasOwnProperty("__staleWhileFetching") && b.__abortController instanceof AC;
    }
    async fetch(k, fetchOptions = {}) {
        const { // get options
        allowStale = this.allowStale, updateAgeOnGet = this.updateAgeOnGet, noDeleteOnStaleGet = this.noDeleteOnStaleGet, // set options
        ttl = this.ttl, noDisposeOnSet = this.noDisposeOnSet, size = 0, sizeCalculation = this.sizeCalculation, noUpdateTTL = this.noUpdateTTL, // fetch exclusive options
        noDeleteOnFetchRejection = this.noDeleteOnFetchRejection, allowStaleOnFetchRejection = this.allowStaleOnFetchRejection, ignoreFetchAbort = this.ignoreFetchAbort, allowStaleOnFetchAbort = this.allowStaleOnFetchAbort, context, forceRefresh = false, status, signal } = fetchOptions;
        if (!this.#hasFetchMethod) {
            if (status) status.fetch = "get";
            return this.get(k, {
                allowStale,
                updateAgeOnGet,
                noDeleteOnStaleGet,
                status
            });
        }
        const options = {
            allowStale,
            updateAgeOnGet,
            noDeleteOnStaleGet,
            ttl,
            noDisposeOnSet,
            size,
            sizeCalculation,
            noUpdateTTL,
            noDeleteOnFetchRejection,
            allowStaleOnFetchRejection,
            allowStaleOnFetchAbort,
            ignoreFetchAbort,
            status,
            signal
        };
        let index = this.#keyMap.get(k);
        if (index === undefined) {
            if (status) status.fetch = "miss";
            const p = this.#backgroundFetch(k, index, options, context);
            return p.__returned = p;
        } else {
            // in cache, maybe already fetching
            const v = this.#valList[index];
            if (this.#isBackgroundFetch(v)) {
                const stale = allowStale && v.__staleWhileFetching !== undefined;
                if (status) {
                    status.fetch = "inflight";
                    if (stale) status.returnedStale = true;
                }
                return stale ? v.__staleWhileFetching : v.__returned = v;
            }
            // if we force a refresh, that means do NOT serve the cached value,
            // unless we are already in the process of refreshing the cache.
            const isStale = this.#isStale(index);
            if (!forceRefresh && !isStale) {
                if (status) status.fetch = "hit";
                this.#moveToTail(index);
                if (updateAgeOnGet) {
                    this.#updateItemAge(index);
                }
                if (status) this.#statusTTL(status, index);
                return v;
            }
            // ok, it is stale or a forced refresh, and not already fetching.
            // refresh the cache.
            const p = this.#backgroundFetch(k, index, options, context);
            const hasStale = p.__staleWhileFetching !== undefined;
            const staleVal = hasStale && allowStale;
            if (status) {
                status.fetch = isStale ? "stale" : "refresh";
                if (staleVal && isStale) status.returnedStale = true;
            }
            return staleVal ? p.__staleWhileFetching : p.__returned = p;
        }
    }
    /**
     * Return a value from the cache. Will update the recency of the cache
     * entry found.
     *
     * If the key is not found, get() will return `undefined`.
     */ get(k, getOptions = {}) {
        const { allowStale = this.allowStale, updateAgeOnGet = this.updateAgeOnGet, noDeleteOnStaleGet = this.noDeleteOnStaleGet, status } = getOptions;
        const index = this.#keyMap.get(k);
        if (index !== undefined) {
            const value = this.#valList[index];
            const fetching = this.#isBackgroundFetch(value);
            if (status) this.#statusTTL(status, index);
            if (this.#isStale(index)) {
                if (status) status.get = "stale";
                // delete only if not an in-flight background fetch
                if (!fetching) {
                    if (!noDeleteOnStaleGet) {
                        this.delete(k);
                    }
                    if (status && allowStale) status.returnedStale = true;
                    return allowStale ? value : undefined;
                } else {
                    if (status && allowStale && value.__staleWhileFetching !== undefined) {
                        status.returnedStale = true;
                    }
                    return allowStale ? value.__staleWhileFetching : undefined;
                }
            } else {
                if (status) status.get = "hit";
                // if we're currently fetching it, we don't actually have it yet
                // it's not stale, which means this isn't a staleWhileRefetching.
                // If it's not stale, and fetching, AND has a __staleWhileFetching
                // value, then that means the user fetched with {forceRefresh:true},
                // so it's safe to return that value.
                if (fetching) {
                    return value.__staleWhileFetching;
                }
                this.#moveToTail(index);
                if (updateAgeOnGet) {
                    this.#updateItemAge(index);
                }
                return value;
            }
        } else if (status) {
            status.get = "miss";
        }
    }
    #connect(p, n) {
        this.#prev[n] = p;
        this.#next[p] = n;
    }
    #moveToTail(index) {
        // if tail already, nothing to do
        // if head, move head to next[index]
        // else
        //   move next[prev[index]] to next[index] (head has no prev)
        //   move prev[next[index]] to prev[index]
        // prev[index] = tail
        // next[tail] = index
        // tail = index
        if (index !== this.#tail) {
            if (index === this.#head) {
                this.#head = this.#next[index];
            } else {
                this.#connect(this.#prev[index], this.#next[index]);
            }
            this.#connect(this.#tail, index);
            this.#tail = index;
        }
    }
    /**
     * Deletes a key out of the cache.
     * Returns true if the key was deleted, false otherwise.
     */ delete(k) {
        let deleted = false;
        if (this.#size !== 0) {
            const index = this.#keyMap.get(k);
            if (index !== undefined) {
                deleted = true;
                if (this.#size === 1) {
                    this.clear();
                } else {
                    this.#removeItemSize(index);
                    const v = this.#valList[index];
                    if (this.#isBackgroundFetch(v)) {
                        v.__abortController.abort(new Error("deleted"));
                    } else if (this.#hasDispose || this.#hasDisposeAfter) {
                        if (this.#hasDispose) {
                            this.#dispose?.(v, k, "delete");
                        }
                        if (this.#hasDisposeAfter) {
                            this.#disposed?.push([
                                v,
                                k,
                                "delete"
                            ]);
                        }
                    }
                    this.#keyMap.delete(k);
                    this.#keyList[index] = undefined;
                    this.#valList[index] = undefined;
                    if (index === this.#tail) {
                        this.#tail = this.#prev[index];
                    } else if (index === this.#head) {
                        this.#head = this.#next[index];
                    } else {
                        this.#next[this.#prev[index]] = this.#next[index];
                        this.#prev[this.#next[index]] = this.#prev[index];
                    }
                    this.#size--;
                    this.#free.push(index);
                }
            }
        }
        if (this.#hasDisposeAfter && this.#disposed?.length) {
            const dt = this.#disposed;
            let task;
            while(task = dt?.shift()){
                this.#disposeAfter?.(...task);
            }
        }
        return deleted;
    }
    /**
     * Clear the cache entirely, throwing away all values.
     */ clear() {
        for (const index of this.#rindexes({
            allowStale: true
        })){
            const v = this.#valList[index];
            if (this.#isBackgroundFetch(v)) {
                v.__abortController.abort(new Error("deleted"));
            } else {
                const k = this.#keyList[index];
                if (this.#hasDispose) {
                    this.#dispose?.(v, k, "delete");
                }
                if (this.#hasDisposeAfter) {
                    this.#disposed?.push([
                        v,
                        k,
                        "delete"
                    ]);
                }
            }
        }
        this.#keyMap.clear();
        this.#valList.fill(undefined);
        this.#keyList.fill(undefined);
        if (this.#ttls && this.#starts) {
            this.#ttls.fill(0);
            this.#starts.fill(0);
        }
        if (this.#sizes) {
            this.#sizes.fill(0);
        }
        this.#head = 0;
        this.#tail = 0;
        this.#free.length = 0;
        this.#calculatedSize = 0;
        this.#size = 0;
        if (this.#hasDisposeAfter && this.#disposed) {
            const dt = this.#disposed;
            let task;
            while(task = dt?.shift()){
                this.#disposeAfter?.(...task);
            }
        }
    }
} //# sourceMappingURL=index.js.map

// EXTERNAL MODULE: external "path"
var external_path_ = __webpack_require__(1017);
// EXTERNAL MODULE: external "url"
var external_url_ = __webpack_require__(7310);
// EXTERNAL MODULE: external "fs"
var external_fs_ = __webpack_require__(7147);
var external_fs_namespaceObject = /*#__PURE__*/__webpack_require__.t(external_fs_, 2);
// EXTERNAL MODULE: external "fs/promises"
var promises_ = __webpack_require__(3292);
// EXTERNAL MODULE: external "node:events"
var external_node_events_ = __webpack_require__(5673);
// EXTERNAL MODULE: external "node:stream"
var external_node_stream_ = __webpack_require__(4492);
// EXTERNAL MODULE: external "node:string_decoder"
var external_node_string_decoder_ = __webpack_require__(6915);
;// CONCATENATED MODULE: ./node_modules/path-scurry/node_modules/minipass/dist/mjs/index.js
const proc = typeof process === "object" && process ? process : {
    stdout: null,
    stderr: null
};



/**
 * Return true if the argument is a Minipass stream, Node stream, or something
 * else that Minipass can interact with.
 */ const isStream = (s)=>!!s && typeof s === "object" && (s instanceof Minipass || s instanceof external_node_stream_ || isReadable(s) || isWritable(s));
/**
 * Return true if the argument is a valid {@link Minipass.Readable}
 */ const isReadable = (s)=>!!s && typeof s === "object" && s instanceof external_node_events_.EventEmitter && typeof s.pipe === "function" && // node core Writable streams have a pipe() method, but it throws
    s.pipe !== external_node_stream_.Writable.prototype.pipe;
/**
 * Return true if the argument is a valid {@link Minipass.Writable}
 */ const isWritable = (s)=>!!s && typeof s === "object" && s instanceof external_node_events_.EventEmitter && typeof s.write === "function" && typeof s.end === "function";
const EOF = Symbol("EOF");
const MAYBE_EMIT_END = Symbol("maybeEmitEnd");
const EMITTED_END = Symbol("emittedEnd");
const EMITTING_END = Symbol("emittingEnd");
const EMITTED_ERROR = Symbol("emittedError");
const CLOSED = Symbol("closed");
const READ = Symbol("read");
const FLUSH = Symbol("flush");
const FLUSHCHUNK = Symbol("flushChunk");
const ENCODING = Symbol("encoding");
const DECODER = Symbol("decoder");
const FLOWING = Symbol("flowing");
const PAUSED = Symbol("paused");
const RESUME = Symbol("resume");
const BUFFER = Symbol("buffer");
const PIPES = Symbol("pipes");
const BUFFERLENGTH = Symbol("bufferLength");
const BUFFERPUSH = Symbol("bufferPush");
const BUFFERSHIFT = Symbol("bufferShift");
const OBJECTMODE = Symbol("objectMode");
// internal event when stream is destroyed
const DESTROYED = Symbol("destroyed");
// internal event when stream has an error
const ERROR = Symbol("error");
const EMITDATA = Symbol("emitData");
const EMITEND = Symbol("emitEnd");
const EMITEND2 = Symbol("emitEnd2");
const ASYNC = Symbol("async");
const ABORT = Symbol("abort");
const ABORTED = Symbol("aborted");
const SIGNAL = Symbol("signal");
const DATALISTENERS = Symbol("dataListeners");
const DISCARDED = Symbol("discarded");
const defer = (fn)=>Promise.resolve().then(fn);
const nodefer = (fn)=>fn();
const isEndish = (ev)=>ev === "end" || ev === "finish" || ev === "prefinish";
const isArrayBufferLike = (b)=>b instanceof ArrayBuffer || !!b && typeof b === "object" && b.constructor && b.constructor.name === "ArrayBuffer" && b.byteLength >= 0;
const isArrayBufferView = (b)=>!Buffer.isBuffer(b) && ArrayBuffer.isView(b);
/**
 * Internal class representing a pipe to a destination stream.
 *
 * @internal
 */ class Pipe {
    constructor(src, dest, opts){
        this.src = src;
        this.dest = dest;
        this.opts = opts;
        this.ondrain = ()=>src[RESUME]();
        this.dest.on("drain", this.ondrain);
    }
    unpipe() {
        this.dest.removeListener("drain", this.ondrain);
    }
    // only here for the prototype
    /* c8 ignore start */ proxyErrors(_er) {}
    /* c8 ignore stop */ end() {
        this.unpipe();
        if (this.opts.end) this.dest.end();
    }
}
/**
 * Internal class representing a pipe to a destination stream where
 * errors are proxied.
 *
 * @internal
 */ class PipeProxyErrors extends Pipe {
    unpipe() {
        this.src.removeListener("error", this.proxyErrors);
        super.unpipe();
    }
    constructor(src, dest, opts){
        super(src, dest, opts);
        this.proxyErrors = (er)=>dest.emit("error", er);
        src.on("error", this.proxyErrors);
    }
}
const isObjectModeOptions = (o)=>!!o.objectMode;
const isEncodingOptions = (o)=>!o.objectMode && !!o.encoding && o.encoding !== "buffer";
/**
 * Main export, the Minipass class
 *
 * `RType` is the type of data emitted, defaults to Buffer
 *
 * `WType` is the type of data to be written, if RType is buffer or string,
 * then any {@link Minipass.ContiguousData} is allowed.
 *
 * `Events` is the set of event handler signatures that this object
 * will emit, see {@link Minipass.Events}
 */ class Minipass extends external_node_events_.EventEmitter {
    /**
     * If `RType` is Buffer, then options do not need to be provided.
     * Otherwise, an options object must be provided to specify either
     * {@link Minipass.SharedOptions.objectMode} or
     * {@link Minipass.SharedOptions.encoding}, as appropriate.
     */ constructor(...args){
        const options = args[0] || {};
        super();
        this[FLOWING] = false;
        this[PAUSED] = false;
        this[PIPES] = [];
        this[BUFFER] = [];
        this[EOF] = false;
        this[EMITTED_END] = false;
        this[EMITTING_END] = false;
        this[CLOSED] = false;
        this[EMITTED_ERROR] = null;
        this[BUFFERLENGTH] = 0;
        this[DESTROYED] = false;
        this[ABORTED] = false;
        this[DATALISTENERS] = 0;
        this[DISCARDED] = false;
        /**
     * true if the stream can be written
     */ this.writable = true;
        /**
     * true if the stream can be read
     */ this.readable = true;
        if (options.objectMode && typeof options.encoding === "string") {
            throw new TypeError("Encoding and objectMode may not be used together");
        }
        if (isObjectModeOptions(options)) {
            this[OBJECTMODE] = true;
            this[ENCODING] = null;
        } else if (isEncodingOptions(options)) {
            this[ENCODING] = options.encoding;
            this[OBJECTMODE] = false;
        } else {
            this[OBJECTMODE] = false;
            this[ENCODING] = null;
        }
        this[ASYNC] = !!options.async;
        this[DECODER] = this[ENCODING] ? new external_node_string_decoder_.StringDecoder(this[ENCODING]) : null;
        //@ts-ignore - private option for debugging and testing
        if (options && options.debugExposeBuffer === true) {
            Object.defineProperty(this, "buffer", {
                get: ()=>this[BUFFER]
            });
        }
        //@ts-ignore - private option for debugging and testing
        if (options && options.debugExposePipes === true) {
            Object.defineProperty(this, "pipes", {
                get: ()=>this[PIPES]
            });
        }
        const { signal } = options;
        if (signal) {
            this[SIGNAL] = signal;
            if (signal.aborted) {
                this[ABORT]();
            } else {
                signal.addEventListener("abort", ()=>this[ABORT]());
            }
        }
    }
    /**
     * The amount of data stored in the buffer waiting to be read.
     *
     * For Buffer strings, this will be the total byte length.
     * For string encoding streams, this will be the string character length,
     * according to JavaScript's `string.length` logic.
     * For objectMode streams, this is a count of the items waiting to be
     * emitted.
     */ get bufferLength() {
        return this[BUFFERLENGTH];
    }
    /**
     * The `BufferEncoding` currently in use, or `null`
     */ get encoding() {
        return this[ENCODING];
    }
    /**
     * @deprecated - This is a read only property
     */ set encoding(_enc) {
        throw new Error("Encoding must be set at instantiation time");
    }
    /**
     * @deprecated - Encoding may only be set at instantiation time
     */ setEncoding(_enc) {
        throw new Error("Encoding must be set at instantiation time");
    }
    /**
     * True if this is an objectMode stream
     */ get objectMode() {
        return this[OBJECTMODE];
    }
    /**
     * @deprecated - This is a read-only property
     */ set objectMode(_om) {
        throw new Error("objectMode must be set at instantiation time");
    }
    /**
     * true if this is an async stream
     */ get ["async"]() {
        return this[ASYNC];
    }
    /**
     * Set to true to make this stream async.
     *
     * Once set, it cannot be unset, as this would potentially cause incorrect
     * behavior.  Ie, a sync stream can be made async, but an async stream
     * cannot be safely made sync.
     */ set ["async"](a) {
        this[ASYNC] = this[ASYNC] || !!a;
    }
    // drop everything and get out of the flow completely
    [ABORT]() {
        this[ABORTED] = true;
        this.emit("abort", this[SIGNAL]?.reason);
        this.destroy(this[SIGNAL]?.reason);
    }
    /**
     * True if the stream has been aborted.
     */ get aborted() {
        return this[ABORTED];
    }
    /**
     * No-op setter. Stream aborted status is set via the AbortSignal provided
     * in the constructor options.
     */ set aborted(_) {}
    write(chunk, encoding, cb) {
        if (this[ABORTED]) return false;
        if (this[EOF]) throw new Error("write after end");
        if (this[DESTROYED]) {
            this.emit("error", Object.assign(new Error("Cannot call write after a stream was destroyed"), {
                code: "ERR_STREAM_DESTROYED"
            }));
            return true;
        }
        if (typeof encoding === "function") {
            cb = encoding;
            encoding = "utf8";
        }
        if (!encoding) encoding = "utf8";
        const fn = this[ASYNC] ? defer : nodefer;
        // convert array buffers and typed array views into buffers
        // at some point in the future, we may want to do the opposite!
        // leave strings and buffers as-is
        // anything is only allowed if in object mode, so throw
        if (!this[OBJECTMODE] && !Buffer.isBuffer(chunk)) {
            if (isArrayBufferView(chunk)) {
                //@ts-ignore - sinful unsafe type changing
                chunk = Buffer.from(chunk.buffer, chunk.byteOffset, chunk.byteLength);
            } else if (isArrayBufferLike(chunk)) {
                //@ts-ignore - sinful unsafe type changing
                chunk = Buffer.from(chunk);
            } else if (typeof chunk !== "string") {
                throw new Error("Non-contiguous data written to non-objectMode stream");
            }
        }
        // handle object mode up front, since it's simpler
        // this yields better performance, fewer checks later.
        if (this[OBJECTMODE]) {
            // maybe impossible?
            /* c8 ignore start */ if (this[FLOWING] && this[BUFFERLENGTH] !== 0) this[FLUSH](true);
            /* c8 ignore stop */ if (this[FLOWING]) this.emit("data", chunk);
            else this[BUFFERPUSH](chunk);
            if (this[BUFFERLENGTH] !== 0) this.emit("readable");
            if (cb) fn(cb);
            return this[FLOWING];
        }
        // at this point the chunk is a buffer or string
        // don't buffer it up or send it to the decoder
        if (!chunk.length) {
            if (this[BUFFERLENGTH] !== 0) this.emit("readable");
            if (cb) fn(cb);
            return this[FLOWING];
        }
        // fast-path writing strings of same encoding to a stream with
        // an empty buffer, skipping the buffer/decoder dance
        if (typeof chunk === "string" && // unless it is a string already ready for us to use
        !(encoding === this[ENCODING] && !this[DECODER]?.lastNeed)) {
            //@ts-ignore - sinful unsafe type change
            chunk = Buffer.from(chunk, encoding);
        }
        if (Buffer.isBuffer(chunk) && this[ENCODING]) {
            //@ts-ignore - sinful unsafe type change
            chunk = this[DECODER].write(chunk);
        }
        // Note: flushing CAN potentially switch us into not-flowing mode
        if (this[FLOWING] && this[BUFFERLENGTH] !== 0) this[FLUSH](true);
        if (this[FLOWING]) this.emit("data", chunk);
        else this[BUFFERPUSH](chunk);
        if (this[BUFFERLENGTH] !== 0) this.emit("readable");
        if (cb) fn(cb);
        return this[FLOWING];
    }
    /**
     * Low-level explicit read method.
     *
     * In objectMode, the argument is ignored, and one item is returned if
     * available.
     *
     * `n` is the number of bytes (or in the case of encoding streams,
     * characters) to consume. If `n` is not provided, then the entire buffer
     * is returned, or `null` is returned if no data is available.
     *
     * If `n` is greater that the amount of data in the internal buffer,
     * then `null` is returned.
     */ read(n) {
        if (this[DESTROYED]) return null;
        this[DISCARDED] = false;
        if (this[BUFFERLENGTH] === 0 || n === 0 || n && n > this[BUFFERLENGTH]) {
            this[MAYBE_EMIT_END]();
            return null;
        }
        if (this[OBJECTMODE]) n = null;
        if (this[BUFFER].length > 1 && !this[OBJECTMODE]) {
            // not object mode, so if we have an encoding, then RType is string
            // otherwise, must be Buffer
            this[BUFFER] = [
                this[ENCODING] ? this[BUFFER].join("") : Buffer.concat(this[BUFFER], this[BUFFERLENGTH])
            ];
        }
        const ret = this[READ](n || null, this[BUFFER][0]);
        this[MAYBE_EMIT_END]();
        return ret;
    }
    [READ](n, chunk) {
        if (this[OBJECTMODE]) this[BUFFERSHIFT]();
        else {
            const c = chunk;
            if (n === c.length || n === null) this[BUFFERSHIFT]();
            else if (typeof c === "string") {
                this[BUFFER][0] = c.slice(n);
                chunk = c.slice(0, n);
                this[BUFFERLENGTH] -= n;
            } else {
                this[BUFFER][0] = c.subarray(n);
                chunk = c.subarray(0, n);
                this[BUFFERLENGTH] -= n;
            }
        }
        this.emit("data", chunk);
        if (!this[BUFFER].length && !this[EOF]) this.emit("drain");
        return chunk;
    }
    end(chunk, encoding, cb) {
        if (typeof chunk === "function") {
            cb = chunk;
            chunk = undefined;
        }
        if (typeof encoding === "function") {
            cb = encoding;
            encoding = "utf8";
        }
        if (chunk !== undefined) this.write(chunk, encoding);
        if (cb) this.once("end", cb);
        this[EOF] = true;
        this.writable = false;
        // if we haven't written anything, then go ahead and emit,
        // even if we're not reading.
        // we'll re-emit if a new 'end' listener is added anyway.
        // This makes MP more suitable to write-only use cases.
        if (this[FLOWING] || !this[PAUSED]) this[MAYBE_EMIT_END]();
        return this;
    }
    // don't let the internal resume be overwritten
    [RESUME]() {
        if (this[DESTROYED]) return;
        if (!this[DATALISTENERS] && !this[PIPES].length) {
            this[DISCARDED] = true;
        }
        this[PAUSED] = false;
        this[FLOWING] = true;
        this.emit("resume");
        if (this[BUFFER].length) this[FLUSH]();
        else if (this[EOF]) this[MAYBE_EMIT_END]();
        else this.emit("drain");
    }
    /**
     * Resume the stream if it is currently in a paused state
     *
     * If called when there are no pipe destinations or `data` event listeners,
     * this will place the stream in a "discarded" state, where all data will
     * be thrown away. The discarded state is removed if a pipe destination or
     * data handler is added, if pause() is called, or if any synchronous or
     * asynchronous iteration is started.
     */ resume() {
        return this[RESUME]();
    }
    /**
     * Pause the stream
     */ pause() {
        this[FLOWING] = false;
        this[PAUSED] = true;
        this[DISCARDED] = false;
    }
    /**
     * true if the stream has been forcibly destroyed
     */ get destroyed() {
        return this[DESTROYED];
    }
    /**
     * true if the stream is currently in a flowing state, meaning that
     * any writes will be immediately emitted.
     */ get flowing() {
        return this[FLOWING];
    }
    /**
     * true if the stream is currently in a paused state
     */ get paused() {
        return this[PAUSED];
    }
    [BUFFERPUSH](chunk) {
        if (this[OBJECTMODE]) this[BUFFERLENGTH] += 1;
        else this[BUFFERLENGTH] += chunk.length;
        this[BUFFER].push(chunk);
    }
    [BUFFERSHIFT]() {
        if (this[OBJECTMODE]) this[BUFFERLENGTH] -= 1;
        else this[BUFFERLENGTH] -= this[BUFFER][0].length;
        return this[BUFFER].shift();
    }
    [FLUSH](noDrain = false) {
        do {}while (this[FLUSHCHUNK](this[BUFFERSHIFT]()) && this[BUFFER].length);
        if (!noDrain && !this[BUFFER].length && !this[EOF]) this.emit("drain");
    }
    [FLUSHCHUNK](chunk) {
        this.emit("data", chunk);
        return this[FLOWING];
    }
    /**
     * Pipe all data emitted by this stream into the destination provided.
     *
     * Triggers the flow of data.
     */ pipe(dest, opts) {
        if (this[DESTROYED]) return dest;
        this[DISCARDED] = false;
        const ended = this[EMITTED_END];
        opts = opts || {};
        if (dest === proc.stdout || dest === proc.stderr) opts.end = false;
        else opts.end = opts.end !== false;
        opts.proxyErrors = !!opts.proxyErrors;
        // piping an ended stream ends immediately
        if (ended) {
            if (opts.end) dest.end();
        } else {
            // "as" here just ignores the WType, which pipes don't care about,
            // since they're only consuming from us, and writing to the dest
            this[PIPES].push(!opts.proxyErrors ? new Pipe(this, dest, opts) : new PipeProxyErrors(this, dest, opts));
            if (this[ASYNC]) defer(()=>this[RESUME]());
            else this[RESUME]();
        }
        return dest;
    }
    /**
     * Fully unhook a piped destination stream.
     *
     * If the destination stream was the only consumer of this stream (ie,
     * there are no other piped destinations or `'data'` event listeners)
     * then the flow of data will stop until there is another consumer or
     * {@link Minipass#resume} is explicitly called.
     */ unpipe(dest) {
        const p = this[PIPES].find((p)=>p.dest === dest);
        if (p) {
            if (this[PIPES].length === 1) {
                if (this[FLOWING] && this[DATALISTENERS] === 0) {
                    this[FLOWING] = false;
                }
                this[PIPES] = [];
            } else this[PIPES].splice(this[PIPES].indexOf(p), 1);
            p.unpipe();
        }
    }
    /**
     * Alias for {@link Minipass#on}
     */ addListener(ev, handler) {
        return this.on(ev, handler);
    }
    /**
     * Mostly identical to `EventEmitter.on`, with the following
     * behavior differences to prevent data loss and unnecessary hangs:
     *
     * - Adding a 'data' event handler will trigger the flow of data
     *
     * - Adding a 'readable' event handler when there is data waiting to be read
     *   will cause 'readable' to be emitted immediately.
     *
     * - Adding an 'endish' event handler ('end', 'finish', etc.) which has
     *   already passed will cause the event to be emitted immediately and all
     *   handlers removed.
     *
     * - Adding an 'error' event handler after an error has been emitted will
     *   cause the event to be re-emitted immediately with the error previously
     *   raised.
     */ on(ev, handler) {
        const ret = super.on(ev, handler);
        if (ev === "data") {
            this[DISCARDED] = false;
            this[DATALISTENERS]++;
            if (!this[PIPES].length && !this[FLOWING]) {
                this[RESUME]();
            }
        } else if (ev === "readable" && this[BUFFERLENGTH] !== 0) {
            super.emit("readable");
        } else if (isEndish(ev) && this[EMITTED_END]) {
            super.emit(ev);
            this.removeAllListeners(ev);
        } else if (ev === "error" && this[EMITTED_ERROR]) {
            const h = handler;
            if (this[ASYNC]) defer(()=>h.call(this, this[EMITTED_ERROR]));
            else h.call(this, this[EMITTED_ERROR]);
        }
        return ret;
    }
    /**
     * Alias for {@link Minipass#off}
     */ removeListener(ev, handler) {
        return this.off(ev, handler);
    }
    /**
     * Mostly identical to `EventEmitter.off`
     *
     * If a 'data' event handler is removed, and it was the last consumer
     * (ie, there are no pipe destinations or other 'data' event listeners),
     * then the flow of data will stop until there is another consumer or
     * {@link Minipass#resume} is explicitly called.
     */ off(ev, handler) {
        const ret = super.off(ev, handler);
        // if we previously had listeners, and now we don't, and we don't
        // have any pipes, then stop the flow, unless it's been explicitly
        // put in a discarded flowing state via stream.resume().
        if (ev === "data") {
            this[DATALISTENERS] = this.listeners("data").length;
            if (this[DATALISTENERS] === 0 && !this[DISCARDED] && !this[PIPES].length) {
                this[FLOWING] = false;
            }
        }
        return ret;
    }
    /**
     * Mostly identical to `EventEmitter.removeAllListeners`
     *
     * If all 'data' event handlers are removed, and they were the last consumer
     * (ie, there are no pipe destinations), then the flow of data will stop
     * until there is another consumer or {@link Minipass#resume} is explicitly
     * called.
     */ removeAllListeners(ev) {
        const ret = super.removeAllListeners(ev);
        if (ev === "data" || ev === undefined) {
            this[DATALISTENERS] = 0;
            if (!this[DISCARDED] && !this[PIPES].length) {
                this[FLOWING] = false;
            }
        }
        return ret;
    }
    /**
     * true if the 'end' event has been emitted
     */ get emittedEnd() {
        return this[EMITTED_END];
    }
    [MAYBE_EMIT_END]() {
        if (!this[EMITTING_END] && !this[EMITTED_END] && !this[DESTROYED] && this[BUFFER].length === 0 && this[EOF]) {
            this[EMITTING_END] = true;
            this.emit("end");
            this.emit("prefinish");
            this.emit("finish");
            if (this[CLOSED]) this.emit("close");
            this[EMITTING_END] = false;
        }
    }
    /**
     * Mostly identical to `EventEmitter.emit`, with the following
     * behavior differences to prevent data loss and unnecessary hangs:
     *
     * If the stream has been destroyed, and the event is something other
     * than 'close' or 'error', then `false` is returned and no handlers
     * are called.
     *
     * If the event is 'end', and has already been emitted, then the event
     * is ignored. If the stream is in a paused or non-flowing state, then
     * the event will be deferred until data flow resumes. If the stream is
     * async, then handlers will be called on the next tick rather than
     * immediately.
     *
     * If the event is 'close', and 'end' has not yet been emitted, then
     * the event will be deferred until after 'end' is emitted.
     *
     * If the event is 'error', and an AbortSignal was provided for the stream,
     * and there are no listeners, then the event is ignored, matching the
     * behavior of node core streams in the presense of an AbortSignal.
     *
     * If the event is 'finish' or 'prefinish', then all listeners will be
     * removed after emitting the event, to prevent double-firing.
     */ emit(ev, ...args) {
        const data = args[0];
        // error and close are only events allowed after calling destroy()
        if (ev !== "error" && ev !== "close" && ev !== DESTROYED && this[DESTROYED]) {
            return false;
        } else if (ev === "data") {
            return !this[OBJECTMODE] && !data ? false : this[ASYNC] ? (defer(()=>this[EMITDATA](data)), true) : this[EMITDATA](data);
        } else if (ev === "end") {
            return this[EMITEND]();
        } else if (ev === "close") {
            this[CLOSED] = true;
            // don't emit close before 'end' and 'finish'
            if (!this[EMITTED_END] && !this[DESTROYED]) return false;
            const ret = super.emit("close");
            this.removeAllListeners("close");
            return ret;
        } else if (ev === "error") {
            this[EMITTED_ERROR] = data;
            super.emit(ERROR, data);
            const ret = !this[SIGNAL] || this.listeners("error").length ? super.emit("error", data) : false;
            this[MAYBE_EMIT_END]();
            return ret;
        } else if (ev === "resume") {
            const ret = super.emit("resume");
            this[MAYBE_EMIT_END]();
            return ret;
        } else if (ev === "finish" || ev === "prefinish") {
            const ret = super.emit(ev);
            this.removeAllListeners(ev);
            return ret;
        }
        // Some other unknown event
        const ret = super.emit(ev, ...args);
        this[MAYBE_EMIT_END]();
        return ret;
    }
    [EMITDATA](data) {
        for (const p of this[PIPES]){
            if (p.dest.write(data) === false) this.pause();
        }
        const ret = this[DISCARDED] ? false : super.emit("data", data);
        this[MAYBE_EMIT_END]();
        return ret;
    }
    [EMITEND]() {
        if (this[EMITTED_END]) return false;
        this[EMITTED_END] = true;
        this.readable = false;
        return this[ASYNC] ? (defer(()=>this[EMITEND2]()), true) : this[EMITEND2]();
    }
    [EMITEND2]() {
        if (this[DECODER]) {
            const data = this[DECODER].end();
            if (data) {
                for (const p of this[PIPES]){
                    p.dest.write(data);
                }
                if (!this[DISCARDED]) super.emit("data", data);
            }
        }
        for (const p of this[PIPES]){
            p.end();
        }
        const ret = super.emit("end");
        this.removeAllListeners("end");
        return ret;
    }
    /**
     * Return a Promise that resolves to an array of all emitted data once
     * the stream ends.
     */ async collect() {
        const buf = Object.assign([], {
            dataLength: 0
        });
        if (!this[OBJECTMODE]) buf.dataLength = 0;
        // set the promise first, in case an error is raised
        // by triggering the flow here.
        const p = this.promise();
        this.on("data", (c)=>{
            buf.push(c);
            if (!this[OBJECTMODE]) buf.dataLength += c.length;
        });
        await p;
        return buf;
    }
    /**
     * Return a Promise that resolves to the concatenation of all emitted data
     * once the stream ends.
     *
     * Not allowed on objectMode streams.
     */ async concat() {
        if (this[OBJECTMODE]) {
            throw new Error("cannot concat in objectMode");
        }
        const buf = await this.collect();
        return this[ENCODING] ? buf.join("") : Buffer.concat(buf, buf.dataLength);
    }
    /**
     * Return a void Promise that resolves once the stream ends.
     */ async promise() {
        return new Promise((resolve, reject)=>{
            this.on(DESTROYED, ()=>reject(new Error("stream destroyed")));
            this.on("error", (er)=>reject(er));
            this.on("end", ()=>resolve());
        });
    }
    /**
     * Asynchronous `for await of` iteration.
     *
     * This will continue emitting all chunks until the stream terminates.
     */ [Symbol.asyncIterator]() {
        // set this up front, in case the consumer doesn't call next()
        // right away.
        this[DISCARDED] = false;
        let stopped = false;
        const stop = async ()=>{
            this.pause();
            stopped = true;
            return {
                value: undefined,
                done: true
            };
        };
        const next = ()=>{
            if (stopped) return stop();
            const res = this.read();
            if (res !== null) return Promise.resolve({
                done: false,
                value: res
            });
            if (this[EOF]) return stop();
            let resolve;
            let reject;
            const onerr = (er)=>{
                this.off("data", ondata);
                this.off("end", onend);
                this.off(DESTROYED, ondestroy);
                stop();
                reject(er);
            };
            const ondata = (value)=>{
                this.off("error", onerr);
                this.off("end", onend);
                this.off(DESTROYED, ondestroy);
                this.pause();
                resolve({
                    value,
                    done: !!this[EOF]
                });
            };
            const onend = ()=>{
                this.off("error", onerr);
                this.off("data", ondata);
                this.off(DESTROYED, ondestroy);
                stop();
                resolve({
                    done: true,
                    value: undefined
                });
            };
            const ondestroy = ()=>onerr(new Error("stream destroyed"));
            return new Promise((res, rej)=>{
                reject = rej;
                resolve = res;
                this.once(DESTROYED, ondestroy);
                this.once("error", onerr);
                this.once("end", onend);
                this.once("data", ondata);
            });
        };
        return {
            next,
            throw: stop,
            return: stop,
            [Symbol.asyncIterator] () {
                return this;
            }
        };
    }
    /**
     * Synchronous `for of` iteration.
     *
     * The iteration will terminate when the internal buffer runs out, even
     * if the stream has not yet terminated.
     */ [Symbol.iterator]() {
        // set this up front, in case the consumer doesn't call next()
        // right away.
        this[DISCARDED] = false;
        let stopped = false;
        const stop = ()=>{
            this.pause();
            this.off(ERROR, stop);
            this.off(DESTROYED, stop);
            this.off("end", stop);
            stopped = true;
            return {
                done: true,
                value: undefined
            };
        };
        const next = ()=>{
            if (stopped) return stop();
            const value = this.read();
            return value === null ? stop() : {
                done: false,
                value
            };
        };
        this.once("end", stop);
        this.once(ERROR, stop);
        this.once(DESTROYED, stop);
        return {
            next,
            throw: stop,
            return: stop,
            [Symbol.iterator] () {
                return this;
            }
        };
    }
    /**
     * Destroy a stream, preventing it from being used for any further purpose.
     *
     * If the stream has a `close()` method, then it will be called on
     * destruction.
     *
     * After destruction, any attempt to write data, read data, or emit most
     * events will be ignored.
     *
     * If an error argument is provided, then it will be emitted in an
     * 'error' event.
     */ destroy(er) {
        if (this[DESTROYED]) {
            if (er) this.emit("error", er);
            else this.emit(DESTROYED);
            return this;
        }
        this[DESTROYED] = true;
        this[DISCARDED] = true;
        // throw away all buffered data, it's never coming out
        this[BUFFER].length = 0;
        this[BUFFERLENGTH] = 0;
        const wc = this;
        if (typeof wc.close === "function" && !this[CLOSED]) wc.close();
        if (er) this.emit("error", er);
        else this.emit(DESTROYED);
        return this;
    }
    /**
     * Alias for {@link isStream}
     *
     * Former export location, maintained for backwards compatibility.
     *
     * @deprecated
     */ static get isStream() {
        return isStream;
    }
} //# sourceMappingURL=index.js.map

;// CONCATENATED MODULE: ./node_modules/path-scurry/dist/mjs/index.js





const realpathSync = external_fs_.realpathSync.native;
// TODO: test perf of fs/promises realpath vs realpathCB,
// since the promises one uses realpath.native


const defaultFS = {
    lstatSync: external_fs_.lstatSync,
    readdir: external_fs_.readdir,
    readdirSync: external_fs_.readdirSync,
    readlinkSync: external_fs_.readlinkSync,
    realpathSync,
    promises: {
        lstat: promises_.lstat,
        readdir: promises_.readdir,
        readlink: promises_.readlink,
        realpath: promises_.realpath
    }
};
// if they just gave us require('fs') then use our default
const fsFromOption = (fsOption)=>!fsOption || fsOption === defaultFS || fsOption === external_fs_namespaceObject ? defaultFS : {
        ...defaultFS,
        ...fsOption,
        promises: {
            ...defaultFS.promises,
            ...fsOption.promises || {}
        }
    };
// turn something like //?/c:/ into c:\
const uncDriveRegexp = /^\\\\\?\\([a-z]:)\\?$/i;
const uncToDrive = (rootPath)=>rootPath.replace(/\//g, "\\").replace(uncDriveRegexp, "$1\\");
// windows paths are separated by either / or \
const eitherSep = /[\\\/]/;
const UNKNOWN = 0; // may not even exist, for all we know
const IFIFO = 1;
const IFCHR = 2;
const IFDIR = 4;
const IFBLK = 6;
const IFREG = 8;
const IFLNK = 10;
const IFSOCK = 12;
const IFMT = 15;
// mask to unset low 4 bits
const IFMT_UNKNOWN = ~IFMT;
// set after successfully calling readdir() and getting entries.
const READDIR_CALLED = 16;
// set after a successful lstat()
const LSTAT_CALLED = 32;
// set if an entry (or one of its parents) is definitely not a dir
const ENOTDIR = 64;
// set if an entry (or one of its parents) does not exist
// (can also be set on lstat errors like EACCES or ENAMETOOLONG)
const ENOENT = 128;
// cannot have child entries -- also verify &IFMT is either IFDIR or IFLNK
// set if we fail to readlink
const ENOREADLINK = 256;
// set if we know realpath() will fail
const ENOREALPATH = 512;
const ENOCHILD = ENOTDIR | ENOENT | ENOREALPATH;
const TYPEMASK = 1023;
const entToType = (s)=>s.isFile() ? IFREG : s.isDirectory() ? IFDIR : s.isSymbolicLink() ? IFLNK : s.isCharacterDevice() ? IFCHR : s.isBlockDevice() ? IFBLK : s.isSocket() ? IFSOCK : s.isFIFO() ? IFIFO : UNKNOWN;
// normalize unicode path names
const normalizeCache = new Map();
const normalize = (s)=>{
    const c = normalizeCache.get(s);
    if (c) return c;
    const n = s.normalize("NFKD");
    normalizeCache.set(s, n);
    return n;
};
const normalizeNocaseCache = new Map();
const normalizeNocase = (s)=>{
    const c = normalizeNocaseCache.get(s);
    if (c) return c;
    const n = normalize(s.toLowerCase());
    normalizeNocaseCache.set(s, n);
    return n;
};
/**
 * An LRUCache for storing resolved path strings or Path objects.
 * @internal
 */ class ResolveCache extends LRUCache {
    constructor(){
        super({
            max: 256
        });
    }
}
// In order to prevent blowing out the js heap by allocating hundreds of
// thousands of Path entries when walking extremely large trees, the "children"
// in this tree are represented by storing an array of Path entries in an
// LRUCache, indexed by the parent.  At any time, Path.children() may return an
// empty array, indicating that it doesn't know about any of its children, and
// thus has to rebuild that cache.  This is fine, it just means that we don't
// benefit as much from having the cached entries, but huge directory walks
// don't blow out the stack, and smaller ones are still as fast as possible.
//
//It does impose some complexity when building up the readdir data, because we
//need to pass a reference to the children array that we started with.
/**
 * an LRUCache for storing child entries.
 * @internal
 */ class ChildrenCache extends LRUCache {
    constructor(maxSize = 16 * 1024){
        super({
            maxSize,
            // parent + children
            sizeCalculation: (a)=>a.length + 1
        });
    }
}
const setAsCwd = Symbol("PathScurry setAsCwd");
/**
 * Path objects are sort of like a super-powered
 * {@link https://nodejs.org/docs/latest/api/fs.html#class-fsdirent fs.Dirent}
 *
 * Each one represents a single filesystem entry on disk, which may or may not
 * exist. It includes methods for reading various types of information via
 * lstat, readlink, and readdir, and caches all information to the greatest
 * degree possible.
 *
 * Note that fs operations that would normally throw will instead return an
 * "empty" value. This is in order to prevent excessive overhead from error
 * stack traces.
 */ class PathBase {
    // potential default fs override
    #fs;
    // Stats fields
    #dev;
    get dev() {
        return this.#dev;
    }
    #mode;
    get mode() {
        return this.#mode;
    }
    #nlink;
    get nlink() {
        return this.#nlink;
    }
    #uid;
    get uid() {
        return this.#uid;
    }
    #gid;
    get gid() {
        return this.#gid;
    }
    #rdev;
    get rdev() {
        return this.#rdev;
    }
    #blksize;
    get blksize() {
        return this.#blksize;
    }
    #ino;
    get ino() {
        return this.#ino;
    }
    #size;
    get size() {
        return this.#size;
    }
    #blocks;
    get blocks() {
        return this.#blocks;
    }
    #atimeMs;
    get atimeMs() {
        return this.#atimeMs;
    }
    #mtimeMs;
    get mtimeMs() {
        return this.#mtimeMs;
    }
    #ctimeMs;
    get ctimeMs() {
        return this.#ctimeMs;
    }
    #birthtimeMs;
    get birthtimeMs() {
        return this.#birthtimeMs;
    }
    #atime;
    get atime() {
        return this.#atime;
    }
    #mtime;
    get mtime() {
        return this.#mtime;
    }
    #ctime;
    get ctime() {
        return this.#ctime;
    }
    #birthtime;
    get birthtime() {
        return this.#birthtime;
    }
    #matchName;
    #depth;
    #fullpath;
    #fullpathPosix;
    #relative;
    #relativePosix;
    #type;
    #children;
    #linkTarget;
    #realpath;
    /**
     * This property is for compatibility with the Dirent class as of
     * Node v20, where Dirent['path'] refers to the path of the directory
     * that was passed to readdir.  So, somewhat counterintuitively, this
     * property refers to the *parent* path, not the path object itself.
     * For root entries, it's the path to the entry itself.
     */ get path() {
        return (this.parent || this).fullpath();
    }
    /**
     * Do not create new Path objects directly.  They should always be accessed
     * via the PathScurry class or other methods on the Path class.
     *
     * @internal
     */ constructor(name, type = UNKNOWN, root, roots, nocase, children, opts){
        this.#onReaddirCB = [];
        this.#readdirCBInFlight = false;
        this.name = name;
        this.#matchName = nocase ? normalizeNocase(name) : normalize(name);
        this.#type = type & TYPEMASK;
        this.nocase = nocase;
        this.roots = roots;
        this.root = root || this;
        this.#children = children;
        this.#fullpath = opts.fullpath;
        this.#relative = opts.relative;
        this.#relativePosix = opts.relativePosix;
        this.parent = opts.parent;
        if (this.parent) {
            this.#fs = this.parent.#fs;
        } else {
            this.#fs = fsFromOption(opts.fs);
        }
    }
    /**
     * Returns the depth of the Path object from its root.
     *
     * For example, a path at `/foo/bar` would have a depth of 2.
     */ depth() {
        if (this.#depth !== undefined) return this.#depth;
        if (!this.parent) return this.#depth = 0;
        return this.#depth = this.parent.depth() + 1;
    }
    /**
     * @internal
     */ childrenCache() {
        return this.#children;
    }
    /**
     * Get the Path object referenced by the string path, resolved from this Path
     */ resolve(path) {
        if (!path) {
            return this;
        }
        const rootPath = this.getRootString(path);
        const dir = path.substring(rootPath.length);
        const dirParts = dir.split(this.splitSep);
        const result = rootPath ? this.getRoot(rootPath).#resolveParts(dirParts) : this.#resolveParts(dirParts);
        return result;
    }
    #resolveParts(dirParts) {
        let p = this;
        for (const part of dirParts){
            p = p.child(part);
        }
        return p;
    }
    /**
     * Returns the cached children Path objects, if still available.  If they
     * have fallen out of the cache, then returns an empty array, and resets the
     * READDIR_CALLED bit, so that future calls to readdir() will require an fs
     * lookup.
     *
     * @internal
     */ children() {
        const cached = this.#children.get(this);
        if (cached) {
            return cached;
        }
        const children = Object.assign([], {
            provisional: 0
        });
        this.#children.set(this, children);
        this.#type &= ~READDIR_CALLED;
        return children;
    }
    /**
     * Resolves a path portion and returns or creates the child Path.
     *
     * Returns `this` if pathPart is `''` or `'.'`, or `parent` if pathPart is
     * `'..'`.
     *
     * This should not be called directly.  If `pathPart` contains any path
     * separators, it will lead to unsafe undefined behavior.
     *
     * Use `Path.resolve()` instead.
     *
     * @internal
     */ child(pathPart, opts) {
        if (pathPart === "" || pathPart === ".") {
            return this;
        }
        if (pathPart === "..") {
            return this.parent || this;
        }
        // find the child
        const children = this.children();
        const name = this.nocase ? normalizeNocase(pathPart) : normalize(pathPart);
        for (const p of children){
            if (p.#matchName === name) {
                return p;
            }
        }
        // didn't find it, create provisional child, since it might not
        // actually exist.  If we know the parent isn't a dir, then
        // in fact it CAN'T exist.
        const s = this.parent ? this.sep : "";
        const fullpath = this.#fullpath ? this.#fullpath + s + pathPart : undefined;
        const pchild = this.newChild(pathPart, UNKNOWN, {
            ...opts,
            parent: this,
            fullpath
        });
        if (!this.canReaddir()) {
            pchild.#type |= ENOENT;
        }
        // don't have to update provisional, because if we have real children,
        // then provisional is set to children.length, otherwise a lower number
        children.push(pchild);
        return pchild;
    }
    /**
     * The relative path from the cwd. If it does not share an ancestor with
     * the cwd, then this ends up being equivalent to the fullpath()
     */ relative() {
        if (this.#relative !== undefined) {
            return this.#relative;
        }
        const name = this.name;
        const p = this.parent;
        if (!p) {
            return this.#relative = this.name;
        }
        const pv = p.relative();
        return pv + (!pv || !p.parent ? "" : this.sep) + name;
    }
    /**
     * The relative path from the cwd, using / as the path separator.
     * If it does not share an ancestor with
     * the cwd, then this ends up being equivalent to the fullpathPosix()
     * On posix systems, this is identical to relative().
     */ relativePosix() {
        if (this.sep === "/") return this.relative();
        if (this.#relativePosix !== undefined) return this.#relativePosix;
        const name = this.name;
        const p = this.parent;
        if (!p) {
            return this.#relativePosix = this.fullpathPosix();
        }
        const pv = p.relativePosix();
        return pv + (!pv || !p.parent ? "" : "/") + name;
    }
    /**
     * The fully resolved path string for this Path entry
     */ fullpath() {
        if (this.#fullpath !== undefined) {
            return this.#fullpath;
        }
        const name = this.name;
        const p = this.parent;
        if (!p) {
            return this.#fullpath = this.name;
        }
        const pv = p.fullpath();
        const fp = pv + (!p.parent ? "" : this.sep) + name;
        return this.#fullpath = fp;
    }
    /**
     * On platforms other than windows, this is identical to fullpath.
     *
     * On windows, this is overridden to return the forward-slash form of the
     * full UNC path.
     */ fullpathPosix() {
        if (this.#fullpathPosix !== undefined) return this.#fullpathPosix;
        if (this.sep === "/") return this.#fullpathPosix = this.fullpath();
        if (!this.parent) {
            const p = this.fullpath().replace(/\\/g, "/");
            if (/^[a-z]:\//i.test(p)) {
                return this.#fullpathPosix = `//?/${p}`;
            } else {
                return this.#fullpathPosix = p;
            }
        }
        const p = this.parent;
        const pfpp = p.fullpathPosix();
        const fpp = pfpp + (!pfpp || !p.parent ? "" : "/") + this.name;
        return this.#fullpathPosix = fpp;
    }
    /**
     * Is the Path of an unknown type?
     *
     * Note that we might know *something* about it if there has been a previous
     * filesystem operation, for example that it does not exist, or is not a
     * link, or whether it has child entries.
     */ isUnknown() {
        return (this.#type & IFMT) === UNKNOWN;
    }
    isType(type) {
        return this[`is${type}`]();
    }
    getType() {
        return this.isUnknown() ? "Unknown" : this.isDirectory() ? "Directory" : this.isFile() ? "File" : this.isSymbolicLink() ? "SymbolicLink" : this.isFIFO() ? "FIFO" : this.isCharacterDevice() ? "CharacterDevice" : this.isBlockDevice() ? "BlockDevice" : /* c8 ignore start */ this.isSocket() ? "Socket" : "Unknown";
    /* c8 ignore stop */ }
    /**
     * Is the Path a regular file?
     */ isFile() {
        return (this.#type & IFMT) === IFREG;
    }
    /**
     * Is the Path a directory?
     */ isDirectory() {
        return (this.#type & IFMT) === IFDIR;
    }
    /**
     * Is the path a character device?
     */ isCharacterDevice() {
        return (this.#type & IFMT) === IFCHR;
    }
    /**
     * Is the path a block device?
     */ isBlockDevice() {
        return (this.#type & IFMT) === IFBLK;
    }
    /**
     * Is the path a FIFO pipe?
     */ isFIFO() {
        return (this.#type & IFMT) === IFIFO;
    }
    /**
     * Is the path a socket?
     */ isSocket() {
        return (this.#type & IFMT) === IFSOCK;
    }
    /**
     * Is the path a symbolic link?
     */ isSymbolicLink() {
        return (this.#type & IFLNK) === IFLNK;
    }
    /**
     * Return the entry if it has been subject of a successful lstat, or
     * undefined otherwise.
     *
     * Does not read the filesystem, so an undefined result *could* simply
     * mean that we haven't called lstat on it.
     */ lstatCached() {
        return this.#type & LSTAT_CALLED ? this : undefined;
    }
    /**
     * Return the cached link target if the entry has been the subject of a
     * successful readlink, or undefined otherwise.
     *
     * Does not read the filesystem, so an undefined result *could* just mean we
     * don't have any cached data. Only use it if you are very sure that a
     * readlink() has been called at some point.
     */ readlinkCached() {
        return this.#linkTarget;
    }
    /**
     * Returns the cached realpath target if the entry has been the subject
     * of a successful realpath, or undefined otherwise.
     *
     * Does not read the filesystem, so an undefined result *could* just mean we
     * don't have any cached data. Only use it if you are very sure that a
     * realpath() has been called at some point.
     */ realpathCached() {
        return this.#realpath;
    }
    /**
     * Returns the cached child Path entries array if the entry has been the
     * subject of a successful readdir(), or [] otherwise.
     *
     * Does not read the filesystem, so an empty array *could* just mean we
     * don't have any cached data. Only use it if you are very sure that a
     * readdir() has been called recently enough to still be valid.
     */ readdirCached() {
        const children = this.children();
        return children.slice(0, children.provisional);
    }
    /**
     * Return true if it's worth trying to readlink.  Ie, we don't (yet) have
     * any indication that readlink will definitely fail.
     *
     * Returns false if the path is known to not be a symlink, if a previous
     * readlink failed, or if the entry does not exist.
     */ canReadlink() {
        if (this.#linkTarget) return true;
        if (!this.parent) return false;
        // cases where it cannot possibly succeed
        const ifmt = this.#type & IFMT;
        return !(ifmt !== UNKNOWN && ifmt !== IFLNK || this.#type & ENOREADLINK || this.#type & ENOENT);
    }
    /**
     * Return true if readdir has previously been successfully called on this
     * path, indicating that cachedReaddir() is likely valid.
     */ calledReaddir() {
        return !!(this.#type & READDIR_CALLED);
    }
    /**
     * Returns true if the path is known to not exist. That is, a previous lstat
     * or readdir failed to verify its existence when that would have been
     * expected, or a parent entry was marked either enoent or enotdir.
     */ isENOENT() {
        return !!(this.#type & ENOENT);
    }
    /**
     * Return true if the path is a match for the given path name.  This handles
     * case sensitivity and unicode normalization.
     *
     * Note: even on case-sensitive systems, it is **not** safe to test the
     * equality of the `.name` property to determine whether a given pathname
     * matches, due to unicode normalization mismatches.
     *
     * Always use this method instead of testing the `path.name` property
     * directly.
     */ isNamed(n) {
        return !this.nocase ? this.#matchName === normalize(n) : this.#matchName === normalizeNocase(n);
    }
    /**
     * Return the Path object corresponding to the target of a symbolic link.
     *
     * If the Path is not a symbolic link, or if the readlink call fails for any
     * reason, `undefined` is returned.
     *
     * Result is cached, and thus may be outdated if the filesystem is mutated.
     */ async readlink() {
        const target = this.#linkTarget;
        if (target) {
            return target;
        }
        if (!this.canReadlink()) {
            return undefined;
        }
        /* c8 ignore start */ // already covered by the canReadlink test, here for ts grumples
        if (!this.parent) {
            return undefined;
        }
        /* c8 ignore stop */ try {
            const read = await this.#fs.promises.readlink(this.fullpath());
            const linkTarget = this.parent.resolve(read);
            if (linkTarget) {
                return this.#linkTarget = linkTarget;
            }
        } catch (er) {
            this.#readlinkFail(er.code);
            return undefined;
        }
    }
    /**
     * Synchronous {@link PathBase.readlink}
     */ readlinkSync() {
        const target = this.#linkTarget;
        if (target) {
            return target;
        }
        if (!this.canReadlink()) {
            return undefined;
        }
        /* c8 ignore start */ // already covered by the canReadlink test, here for ts grumples
        if (!this.parent) {
            return undefined;
        }
        /* c8 ignore stop */ try {
            const read = this.#fs.readlinkSync(this.fullpath());
            const linkTarget = this.parent.resolve(read);
            if (linkTarget) {
                return this.#linkTarget = linkTarget;
            }
        } catch (er) {
            this.#readlinkFail(er.code);
            return undefined;
        }
    }
    #readdirSuccess(children) {
        // succeeded, mark readdir called bit
        this.#type |= READDIR_CALLED;
        // mark all remaining provisional children as ENOENT
        for(let p = children.provisional; p < children.length; p++){
            children[p].#markENOENT();
        }
    }
    #markENOENT() {
        // mark as UNKNOWN and ENOENT
        if (this.#type & ENOENT) return;
        this.#type = (this.#type | ENOENT) & IFMT_UNKNOWN;
        this.#markChildrenENOENT();
    }
    #markChildrenENOENT() {
        // all children are provisional and do not exist
        const children = this.children();
        children.provisional = 0;
        for (const p of children){
            p.#markENOENT();
        }
    }
    #markENOREALPATH() {
        this.#type |= ENOREALPATH;
        this.#markENOTDIR();
    }
    // save the information when we know the entry is not a dir
    #markENOTDIR() {
        // entry is not a directory, so any children can't exist.
        // this *should* be impossible, since any children created
        // after it's been marked ENOTDIR should be marked ENOENT,
        // so it won't even get to this point.
        /* c8 ignore start */ if (this.#type & ENOTDIR) return;
        /* c8 ignore stop */ let t = this.#type;
        // this could happen if we stat a dir, then delete it,
        // then try to read it or one of its children.
        if ((t & IFMT) === IFDIR) t &= IFMT_UNKNOWN;
        this.#type = t | ENOTDIR;
        this.#markChildrenENOENT();
    }
    #readdirFail(code = "") {
        // markENOTDIR and markENOENT also set provisional=0
        if (code === "ENOTDIR" || code === "EPERM") {
            this.#markENOTDIR();
        } else if (code === "ENOENT") {
            this.#markENOENT();
        } else {
            this.children().provisional = 0;
        }
    }
    #lstatFail(code = "") {
        // Windows just raises ENOENT in this case, disable for win CI
        /* c8 ignore start */ if (code === "ENOTDIR") {
            // already know it has a parent by this point
            const p = this.parent;
            p.#markENOTDIR();
        } else if (code === "ENOENT") {
            /* c8 ignore stop */ this.#markENOENT();
        }
    }
    #readlinkFail(code = "") {
        let ter = this.#type;
        ter |= ENOREADLINK;
        if (code === "ENOENT") ter |= ENOENT;
        // windows gets a weird error when you try to readlink a file
        if (code === "EINVAL" || code === "UNKNOWN") {
            // exists, but not a symlink, we don't know WHAT it is, so remove
            // all IFMT bits.
            ter &= IFMT_UNKNOWN;
        }
        this.#type = ter;
        // windows just gets ENOENT in this case.  We do cover the case,
        // just disabled because it's impossible on Windows CI
        /* c8 ignore start */ if (code === "ENOTDIR" && this.parent) {
            this.parent.#markENOTDIR();
        }
    /* c8 ignore stop */ }
    #readdirAddChild(e, c) {
        return this.#readdirMaybePromoteChild(e, c) || this.#readdirAddNewChild(e, c);
    }
    #readdirAddNewChild(e, c) {
        // alloc new entry at head, so it's never provisional
        const type = entToType(e);
        const child = this.newChild(e.name, type, {
            parent: this
        });
        const ifmt = child.#type & IFMT;
        if (ifmt !== IFDIR && ifmt !== IFLNK && ifmt !== UNKNOWN) {
            child.#type |= ENOTDIR;
        }
        c.unshift(child);
        c.provisional++;
        return child;
    }
    #readdirMaybePromoteChild(e, c) {
        for(let p = c.provisional; p < c.length; p++){
            const pchild = c[p];
            const name = this.nocase ? normalizeNocase(e.name) : normalize(e.name);
            if (name !== pchild.#matchName) {
                continue;
            }
            return this.#readdirPromoteChild(e, pchild, p, c);
        }
    }
    #readdirPromoteChild(e, p, index, c) {
        const v = p.name;
        // retain any other flags, but set ifmt from dirent
        p.#type = p.#type & IFMT_UNKNOWN | entToType(e);
        // case sensitivity fixing when we learn the true name.
        if (v !== e.name) p.name = e.name;
        // just advance provisional index (potentially off the list),
        // otherwise we have to splice/pop it out and re-insert at head
        if (index !== c.provisional) {
            if (index === c.length - 1) c.pop();
            else c.splice(index, 1);
            c.unshift(p);
        }
        c.provisional++;
        return p;
    }
    /**
     * Call lstat() on this Path, and update all known information that can be
     * determined.
     *
     * Note that unlike `fs.lstat()`, the returned value does not contain some
     * information, such as `mode`, `dev`, `nlink`, and `ino`.  If that
     * information is required, you will need to call `fs.lstat` yourself.
     *
     * If the Path refers to a nonexistent file, or if the lstat call fails for
     * any reason, `undefined` is returned.  Otherwise the updated Path object is
     * returned.
     *
     * Results are cached, and thus may be out of date if the filesystem is
     * mutated.
     */ async lstat() {
        if ((this.#type & ENOENT) === 0) {
            try {
                this.#applyStat(await this.#fs.promises.lstat(this.fullpath()));
                return this;
            } catch (er) {
                this.#lstatFail(er.code);
            }
        }
    }
    /**
     * synchronous {@link PathBase.lstat}
     */ lstatSync() {
        if ((this.#type & ENOENT) === 0) {
            try {
                this.#applyStat(this.#fs.lstatSync(this.fullpath()));
                return this;
            } catch (er) {
                this.#lstatFail(er.code);
            }
        }
    }
    #applyStat(st) {
        const { atime, atimeMs, birthtime, birthtimeMs, blksize, blocks, ctime, ctimeMs, dev, gid, ino, mode, mtime, mtimeMs, nlink, rdev, size, uid } = st;
        this.#atime = atime;
        this.#atimeMs = atimeMs;
        this.#birthtime = birthtime;
        this.#birthtimeMs = birthtimeMs;
        this.#blksize = blksize;
        this.#blocks = blocks;
        this.#ctime = ctime;
        this.#ctimeMs = ctimeMs;
        this.#dev = dev;
        this.#gid = gid;
        this.#ino = ino;
        this.#mode = mode;
        this.#mtime = mtime;
        this.#mtimeMs = mtimeMs;
        this.#nlink = nlink;
        this.#rdev = rdev;
        this.#size = size;
        this.#uid = uid;
        const ifmt = entToType(st);
        // retain any other flags, but set the ifmt
        this.#type = this.#type & IFMT_UNKNOWN | ifmt | LSTAT_CALLED;
        if (ifmt !== UNKNOWN && ifmt !== IFDIR && ifmt !== IFLNK) {
            this.#type |= ENOTDIR;
        }
    }
    #onReaddirCB;
    #readdirCBInFlight;
    #callOnReaddirCB(children) {
        this.#readdirCBInFlight = false;
        const cbs = this.#onReaddirCB.slice();
        this.#onReaddirCB.length = 0;
        cbs.forEach((cb)=>cb(null, children));
    }
    /**
     * Standard node-style callback interface to get list of directory entries.
     *
     * If the Path cannot or does not contain any children, then an empty array
     * is returned.
     *
     * Results are cached, and thus may be out of date if the filesystem is
     * mutated.
     *
     * @param cb The callback called with (er, entries).  Note that the `er`
     * param is somewhat extraneous, as all readdir() errors are handled and
     * simply result in an empty set of entries being returned.
     * @param allowZalgo Boolean indicating that immediately known results should
     * *not* be deferred with `queueMicrotask`. Defaults to `false`. Release
     * zalgo at your peril, the dark pony lord is devious and unforgiving.
     */ readdirCB(cb, allowZalgo = false) {
        if (!this.canReaddir()) {
            if (allowZalgo) cb(null, []);
            else queueMicrotask(()=>cb(null, []));
            return;
        }
        const children = this.children();
        if (this.calledReaddir()) {
            const c = children.slice(0, children.provisional);
            if (allowZalgo) cb(null, c);
            else queueMicrotask(()=>cb(null, c));
            return;
        }
        // don't have to worry about zalgo at this point.
        this.#onReaddirCB.push(cb);
        if (this.#readdirCBInFlight) {
            return;
        }
        this.#readdirCBInFlight = true;
        // else read the directory, fill up children
        // de-provisionalize any provisional children.
        const fullpath = this.fullpath();
        this.#fs.readdir(fullpath, {
            withFileTypes: true
        }, (er, entries)=>{
            if (er) {
                this.#readdirFail(er.code);
                children.provisional = 0;
            } else {
                // if we didn't get an error, we always get entries.
                //@ts-ignore
                for (const e of entries){
                    this.#readdirAddChild(e, children);
                }
                this.#readdirSuccess(children);
            }
            this.#callOnReaddirCB(children.slice(0, children.provisional));
            return;
        });
    }
    #asyncReaddirInFlight;
    /**
     * Return an array of known child entries.
     *
     * If the Path cannot or does not contain any children, then an empty array
     * is returned.
     *
     * Results are cached, and thus may be out of date if the filesystem is
     * mutated.
     */ async readdir() {
        if (!this.canReaddir()) {
            return [];
        }
        const children = this.children();
        if (this.calledReaddir()) {
            return children.slice(0, children.provisional);
        }
        // else read the directory, fill up children
        // de-provisionalize any provisional children.
        const fullpath = this.fullpath();
        if (this.#asyncReaddirInFlight) {
            await this.#asyncReaddirInFlight;
        } else {
            /* c8 ignore start */ let resolve = ()=>{};
            /* c8 ignore stop */ this.#asyncReaddirInFlight = new Promise((res)=>resolve = res);
            try {
                for (const e of (await this.#fs.promises.readdir(fullpath, {
                    withFileTypes: true
                }))){
                    this.#readdirAddChild(e, children);
                }
                this.#readdirSuccess(children);
            } catch (er) {
                this.#readdirFail(er.code);
                children.provisional = 0;
            }
            this.#asyncReaddirInFlight = undefined;
            resolve();
        }
        return children.slice(0, children.provisional);
    }
    /**
     * synchronous {@link PathBase.readdir}
     */ readdirSync() {
        if (!this.canReaddir()) {
            return [];
        }
        const children = this.children();
        if (this.calledReaddir()) {
            return children.slice(0, children.provisional);
        }
        // else read the directory, fill up children
        // de-provisionalize any provisional children.
        const fullpath = this.fullpath();
        try {
            for (const e of this.#fs.readdirSync(fullpath, {
                withFileTypes: true
            })){
                this.#readdirAddChild(e, children);
            }
            this.#readdirSuccess(children);
        } catch (er) {
            this.#readdirFail(er.code);
            children.provisional = 0;
        }
        return children.slice(0, children.provisional);
    }
    canReaddir() {
        if (this.#type & ENOCHILD) return false;
        const ifmt = IFMT & this.#type;
        // we always set ENOTDIR when setting IFMT, so should be impossible
        /* c8 ignore start */ if (!(ifmt === UNKNOWN || ifmt === IFDIR || ifmt === IFLNK)) {
            return false;
        }
        /* c8 ignore stop */ return true;
    }
    shouldWalk(dirs, walkFilter) {
        return (this.#type & IFDIR) === IFDIR && !(this.#type & ENOCHILD) && !dirs.has(this) && (!walkFilter || walkFilter(this));
    }
    /**
     * Return the Path object corresponding to path as resolved
     * by realpath(3).
     *
     * If the realpath call fails for any reason, `undefined` is returned.
     *
     * Result is cached, and thus may be outdated if the filesystem is mutated.
     * On success, returns a Path object.
     */ async realpath() {
        if (this.#realpath) return this.#realpath;
        if ((ENOREALPATH | ENOREADLINK | ENOENT) & this.#type) return undefined;
        try {
            const rp = await this.#fs.promises.realpath(this.fullpath());
            return this.#realpath = this.resolve(rp);
        } catch (_) {
            this.#markENOREALPATH();
        }
    }
    /**
     * Synchronous {@link realpath}
     */ realpathSync() {
        if (this.#realpath) return this.#realpath;
        if ((ENOREALPATH | ENOREADLINK | ENOENT) & this.#type) return undefined;
        try {
            const rp = this.#fs.realpathSync(this.fullpath());
            return this.#realpath = this.resolve(rp);
        } catch (_) {
            this.#markENOREALPATH();
        }
    }
    /**
     * Internal method to mark this Path object as the scurry cwd,
     * called by {@link PathScurry#chdir}
     *
     * @internal
     */ [setAsCwd](oldCwd) {
        if (oldCwd === this) return;
        const changed = new Set([]);
        let rp = [];
        let p = this;
        while(p && p.parent){
            changed.add(p);
            p.#relative = rp.join(this.sep);
            p.#relativePosix = rp.join("/");
            p = p.parent;
            rp.push("..");
        }
        // now un-memoize parents of old cwd
        p = oldCwd;
        while(p && p.parent && !changed.has(p)){
            p.#relative = undefined;
            p.#relativePosix = undefined;
            p = p.parent;
        }
    }
}
/**
 * Path class used on win32 systems
 *
 * Uses `'\\'` as the path separator for returned paths, either `'\\'` or `'/'`
 * as the path separator for parsing paths.
 */ class PathWin32 extends PathBase {
    /**
     * Do not create new Path objects directly.  They should always be accessed
     * via the PathScurry class or other methods on the Path class.
     *
     * @internal
     */ constructor(name, type = UNKNOWN, root, roots, nocase, children, opts){
        super(name, type, root, roots, nocase, children, opts);
        /**
     * Separator for generating path strings.
     */ this.sep = "\\";
        /**
     * Separator for parsing path strings.
     */ this.splitSep = eitherSep;
    }
    /**
     * @internal
     */ newChild(name, type = UNKNOWN, opts = {}) {
        return new PathWin32(name, type, this.root, this.roots, this.nocase, this.childrenCache(), opts);
    }
    /**
     * @internal
     */ getRootString(path) {
        return external_path_.win32.parse(path).root;
    }
    /**
     * @internal
     */ getRoot(rootPath) {
        rootPath = uncToDrive(rootPath.toUpperCase());
        if (rootPath === this.root.name) {
            return this.root;
        }
        // ok, not that one, check if it matches another we know about
        for (const [compare, root] of Object.entries(this.roots)){
            if (this.sameRoot(rootPath, compare)) {
                return this.roots[rootPath] = root;
            }
        }
        // otherwise, have to create a new one.
        return this.roots[rootPath] = new PathScurryWin32(rootPath, this).root;
    }
    /**
     * @internal
     */ sameRoot(rootPath, compare = this.root.name) {
        // windows can (rarely) have case-sensitive filesystem, but
        // UNC and drive letters are always case-insensitive, and canonically
        // represented uppercase.
        rootPath = rootPath.toUpperCase().replace(/\//g, "\\").replace(uncDriveRegexp, "$1\\");
        return rootPath === compare;
    }
}
/**
 * Path class used on all posix systems.
 *
 * Uses `'/'` as the path separator.
 */ class PathPosix extends PathBase {
    /**
     * Do not create new Path objects directly.  They should always be accessed
     * via the PathScurry class or other methods on the Path class.
     *
     * @internal
     */ constructor(name, type = UNKNOWN, root, roots, nocase, children, opts){
        super(name, type, root, roots, nocase, children, opts);
        /**
     * separator for parsing path strings
     */ this.splitSep = "/";
        /**
     * separator for generating path strings
     */ this.sep = "/";
    }
    /**
     * @internal
     */ getRootString(path) {
        return path.startsWith("/") ? "/" : "";
    }
    /**
     * @internal
     */ getRoot(_rootPath) {
        return this.root;
    }
    /**
     * @internal
     */ newChild(name, type = UNKNOWN, opts = {}) {
        return new PathPosix(name, type, this.root, this.roots, this.nocase, this.childrenCache(), opts);
    }
}
/**
 * The base class for all PathScurry classes, providing the interface for path
 * resolution and filesystem operations.
 *
 * Typically, you should *not* instantiate this class directly, but rather one
 * of the platform-specific classes, or the exported {@link PathScurry} which
 * defaults to the current platform.
 */ class PathScurryBase {
    #resolveCache;
    #resolvePosixCache;
    #children;
    #fs;
    /**
     * This class should not be instantiated directly.
     *
     * Use PathScurryWin32, PathScurryDarwin, PathScurryPosix, or PathScurry
     *
     * @internal
     */ constructor(cwd = process.cwd(), pathImpl, sep, { nocase, childrenCacheSize = 16 * 1024, fs = defaultFS } = {}){
        this.#fs = fsFromOption(fs);
        if (cwd instanceof URL || cwd.startsWith("file://")) {
            cwd = (0,external_url_.fileURLToPath)(cwd);
        }
        // resolve and split root, and then add to the store.
        // this is the only time we call path.resolve()
        const cwdPath = pathImpl.resolve(cwd);
        this.roots = Object.create(null);
        this.rootPath = this.parseRootPath(cwdPath);
        this.#resolveCache = new ResolveCache();
        this.#resolvePosixCache = new ResolveCache();
        this.#children = new ChildrenCache(childrenCacheSize);
        const split = cwdPath.substring(this.rootPath.length).split(sep);
        // resolve('/') leaves '', splits to [''], we don't want that.
        if (split.length === 1 && !split[0]) {
            split.pop();
        }
        /* c8 ignore start */ if (nocase === undefined) {
            throw new TypeError("must provide nocase setting to PathScurryBase ctor");
        }
        /* c8 ignore stop */ this.nocase = nocase;
        this.root = this.newRoot(this.#fs);
        this.roots[this.rootPath] = this.root;
        let prev = this.root;
        let len = split.length - 1;
        const joinSep = pathImpl.sep;
        let abs = this.rootPath;
        let sawFirst = false;
        for (const part of split){
            const l = len--;
            prev = prev.child(part, {
                relative: new Array(l).fill("..").join(joinSep),
                relativePosix: new Array(l).fill("..").join("/"),
                fullpath: abs += (sawFirst ? "" : joinSep) + part
            });
            sawFirst = true;
        }
        this.cwd = prev;
    }
    /**
     * Get the depth of a provided path, string, or the cwd
     */ depth(path = this.cwd) {
        if (typeof path === "string") {
            path = this.cwd.resolve(path);
        }
        return path.depth();
    }
    /**
     * Return the cache of child entries.  Exposed so subclasses can create
     * child Path objects in a platform-specific way.
     *
     * @internal
     */ childrenCache() {
        return this.#children;
    }
    /**
     * Resolve one or more path strings to a resolved string
     *
     * Same interface as require('path').resolve.
     *
     * Much faster than path.resolve() when called multiple times for the same
     * path, because the resolved Path objects are cached.  Much slower
     * otherwise.
     */ resolve(...paths) {
        // first figure out the minimum number of paths we have to test
        // we always start at cwd, but any absolutes will bump the start
        let r = "";
        for(let i = paths.length - 1; i >= 0; i--){
            const p = paths[i];
            if (!p || p === ".") continue;
            r = r ? `${p}/${r}` : p;
            if (this.isAbsolute(p)) {
                break;
            }
        }
        const cached = this.#resolveCache.get(r);
        if (cached !== undefined) {
            return cached;
        }
        const result = this.cwd.resolve(r).fullpath();
        this.#resolveCache.set(r, result);
        return result;
    }
    /**
     * Resolve one or more path strings to a resolved string, returning
     * the posix path.  Identical to .resolve() on posix systems, but on
     * windows will return a forward-slash separated UNC path.
     *
     * Same interface as require('path').resolve.
     *
     * Much faster than path.resolve() when called multiple times for the same
     * path, because the resolved Path objects are cached.  Much slower
     * otherwise.
     */ resolvePosix(...paths) {
        // first figure out the minimum number of paths we have to test
        // we always start at cwd, but any absolutes will bump the start
        let r = "";
        for(let i = paths.length - 1; i >= 0; i--){
            const p = paths[i];
            if (!p || p === ".") continue;
            r = r ? `${p}/${r}` : p;
            if (this.isAbsolute(p)) {
                break;
            }
        }
        const cached = this.#resolvePosixCache.get(r);
        if (cached !== undefined) {
            return cached;
        }
        const result = this.cwd.resolve(r).fullpathPosix();
        this.#resolvePosixCache.set(r, result);
        return result;
    }
    /**
     * find the relative path from the cwd to the supplied path string or entry
     */ relative(entry = this.cwd) {
        if (typeof entry === "string") {
            entry = this.cwd.resolve(entry);
        }
        return entry.relative();
    }
    /**
     * find the relative path from the cwd to the supplied path string or
     * entry, using / as the path delimiter, even on Windows.
     */ relativePosix(entry = this.cwd) {
        if (typeof entry === "string") {
            entry = this.cwd.resolve(entry);
        }
        return entry.relativePosix();
    }
    /**
     * Return the basename for the provided string or Path object
     */ basename(entry = this.cwd) {
        if (typeof entry === "string") {
            entry = this.cwd.resolve(entry);
        }
        return entry.name;
    }
    /**
     * Return the dirname for the provided string or Path object
     */ dirname(entry = this.cwd) {
        if (typeof entry === "string") {
            entry = this.cwd.resolve(entry);
        }
        return (entry.parent || entry).fullpath();
    }
    async readdir(entry = this.cwd, opts = {
        withFileTypes: true
    }) {
        if (typeof entry === "string") {
            entry = this.cwd.resolve(entry);
        } else if (!(entry instanceof PathBase)) {
            opts = entry;
            entry = this.cwd;
        }
        const { withFileTypes } = opts;
        if (!entry.canReaddir()) {
            return [];
        } else {
            const p = await entry.readdir();
            return withFileTypes ? p : p.map((e)=>e.name);
        }
    }
    readdirSync(entry = this.cwd, opts = {
        withFileTypes: true
    }) {
        if (typeof entry === "string") {
            entry = this.cwd.resolve(entry);
        } else if (!(entry instanceof PathBase)) {
            opts = entry;
            entry = this.cwd;
        }
        const { withFileTypes = true } = opts;
        if (!entry.canReaddir()) {
            return [];
        } else if (withFileTypes) {
            return entry.readdirSync();
        } else {
            return entry.readdirSync().map((e)=>e.name);
        }
    }
    /**
     * Call lstat() on the string or Path object, and update all known
     * information that can be determined.
     *
     * Note that unlike `fs.lstat()`, the returned value does not contain some
     * information, such as `mode`, `dev`, `nlink`, and `ino`.  If that
     * information is required, you will need to call `fs.lstat` yourself.
     *
     * If the Path refers to a nonexistent file, or if the lstat call fails for
     * any reason, `undefined` is returned.  Otherwise the updated Path object is
     * returned.
     *
     * Results are cached, and thus may be out of date if the filesystem is
     * mutated.
     */ async lstat(entry = this.cwd) {
        if (typeof entry === "string") {
            entry = this.cwd.resolve(entry);
        }
        return entry.lstat();
    }
    /**
     * synchronous {@link PathScurryBase.lstat}
     */ lstatSync(entry = this.cwd) {
        if (typeof entry === "string") {
            entry = this.cwd.resolve(entry);
        }
        return entry.lstatSync();
    }
    async readlink(entry = this.cwd, { withFileTypes } = {
        withFileTypes: false
    }) {
        if (typeof entry === "string") {
            entry = this.cwd.resolve(entry);
        } else if (!(entry instanceof PathBase)) {
            withFileTypes = entry.withFileTypes;
            entry = this.cwd;
        }
        const e = await entry.readlink();
        return withFileTypes ? e : e?.fullpath();
    }
    readlinkSync(entry = this.cwd, { withFileTypes } = {
        withFileTypes: false
    }) {
        if (typeof entry === "string") {
            entry = this.cwd.resolve(entry);
        } else if (!(entry instanceof PathBase)) {
            withFileTypes = entry.withFileTypes;
            entry = this.cwd;
        }
        const e = entry.readlinkSync();
        return withFileTypes ? e : e?.fullpath();
    }
    async realpath(entry = this.cwd, { withFileTypes } = {
        withFileTypes: false
    }) {
        if (typeof entry === "string") {
            entry = this.cwd.resolve(entry);
        } else if (!(entry instanceof PathBase)) {
            withFileTypes = entry.withFileTypes;
            entry = this.cwd;
        }
        const e = await entry.realpath();
        return withFileTypes ? e : e?.fullpath();
    }
    realpathSync(entry = this.cwd, { withFileTypes } = {
        withFileTypes: false
    }) {
        if (typeof entry === "string") {
            entry = this.cwd.resolve(entry);
        } else if (!(entry instanceof PathBase)) {
            withFileTypes = entry.withFileTypes;
            entry = this.cwd;
        }
        const e = entry.realpathSync();
        return withFileTypes ? e : e?.fullpath();
    }
    async walk(entry = this.cwd, opts = {}) {
        if (typeof entry === "string") {
            entry = this.cwd.resolve(entry);
        } else if (!(entry instanceof PathBase)) {
            opts = entry;
            entry = this.cwd;
        }
        const { withFileTypes = true, follow = false, filter, walkFilter } = opts;
        const results = [];
        if (!filter || filter(entry)) {
            results.push(withFileTypes ? entry : entry.fullpath());
        }
        const dirs = new Set();
        const walk = (dir, cb)=>{
            dirs.add(dir);
            dir.readdirCB((er, entries)=>{
                /* c8 ignore start */ if (er) {
                    return cb(er);
                }
                /* c8 ignore stop */ let len = entries.length;
                if (!len) return cb();
                const next = ()=>{
                    if (--len === 0) {
                        cb();
                    }
                };
                for (const e of entries){
                    if (!filter || filter(e)) {
                        results.push(withFileTypes ? e : e.fullpath());
                    }
                    if (follow && e.isSymbolicLink()) {
                        e.realpath().then((r)=>r?.isUnknown() ? r.lstat() : r).then((r)=>r?.shouldWalk(dirs, walkFilter) ? walk(r, next) : next());
                    } else {
                        if (e.shouldWalk(dirs, walkFilter)) {
                            walk(e, next);
                        } else {
                            next();
                        }
                    }
                }
            }, true); // zalgooooooo
        };
        const start = entry;
        return new Promise((res, rej)=>{
            walk(start, (er)=>{
                /* c8 ignore start */ if (er) return rej(er);
                /* c8 ignore stop */ res(results);
            });
        });
    }
    walkSync(entry = this.cwd, opts = {}) {
        if (typeof entry === "string") {
            entry = this.cwd.resolve(entry);
        } else if (!(entry instanceof PathBase)) {
            opts = entry;
            entry = this.cwd;
        }
        const { withFileTypes = true, follow = false, filter, walkFilter } = opts;
        const results = [];
        if (!filter || filter(entry)) {
            results.push(withFileTypes ? entry : entry.fullpath());
        }
        const dirs = new Set([
            entry
        ]);
        for (const dir of dirs){
            const entries = dir.readdirSync();
            for (const e of entries){
                if (!filter || filter(e)) {
                    results.push(withFileTypes ? e : e.fullpath());
                }
                let r = e;
                if (e.isSymbolicLink()) {
                    if (!(follow && (r = e.realpathSync()))) continue;
                    if (r.isUnknown()) r.lstatSync();
                }
                if (r.shouldWalk(dirs, walkFilter)) {
                    dirs.add(r);
                }
            }
        }
        return results;
    }
    /**
     * Support for `for await`
     *
     * Alias for {@link PathScurryBase.iterate}
     *
     * Note: As of Node 19, this is very slow, compared to other methods of
     * walking.  Consider using {@link PathScurryBase.stream} if memory overhead
     * and backpressure are concerns, or {@link PathScurryBase.walk} if not.
     */ [Symbol.asyncIterator]() {
        return this.iterate();
    }
    iterate(entry = this.cwd, options = {}) {
        // iterating async over the stream is significantly more performant,
        // especially in the warm-cache scenario, because it buffers up directory
        // entries in the background instead of waiting for a yield for each one.
        if (typeof entry === "string") {
            entry = this.cwd.resolve(entry);
        } else if (!(entry instanceof PathBase)) {
            options = entry;
            entry = this.cwd;
        }
        return this.stream(entry, options)[Symbol.asyncIterator]();
    }
    /**
     * Iterating over a PathScurry performs a synchronous walk.
     *
     * Alias for {@link PathScurryBase.iterateSync}
     */ [Symbol.iterator]() {
        return this.iterateSync();
    }
    *iterateSync(entry = this.cwd, opts = {}) {
        if (typeof entry === "string") {
            entry = this.cwd.resolve(entry);
        } else if (!(entry instanceof PathBase)) {
            opts = entry;
            entry = this.cwd;
        }
        const { withFileTypes = true, follow = false, filter, walkFilter } = opts;
        if (!filter || filter(entry)) {
            yield withFileTypes ? entry : entry.fullpath();
        }
        const dirs = new Set([
            entry
        ]);
        for (const dir of dirs){
            const entries = dir.readdirSync();
            for (const e of entries){
                if (!filter || filter(e)) {
                    yield withFileTypes ? e : e.fullpath();
                }
                let r = e;
                if (e.isSymbolicLink()) {
                    if (!(follow && (r = e.realpathSync()))) continue;
                    if (r.isUnknown()) r.lstatSync();
                }
                if (r.shouldWalk(dirs, walkFilter)) {
                    dirs.add(r);
                }
            }
        }
    }
    stream(entry = this.cwd, opts = {}) {
        if (typeof entry === "string") {
            entry = this.cwd.resolve(entry);
        } else if (!(entry instanceof PathBase)) {
            opts = entry;
            entry = this.cwd;
        }
        const { withFileTypes = true, follow = false, filter, walkFilter } = opts;
        const results = new Minipass({
            objectMode: true
        });
        if (!filter || filter(entry)) {
            results.write(withFileTypes ? entry : entry.fullpath());
        }
        const dirs = new Set();
        const queue = [
            entry
        ];
        let processing = 0;
        const process1 = ()=>{
            let paused = false;
            while(!paused){
                const dir = queue.shift();
                if (!dir) {
                    if (processing === 0) results.end();
                    return;
                }
                processing++;
                dirs.add(dir);
                const onReaddir = (er, entries, didRealpaths = false)=>{
                    /* c8 ignore start */ if (er) return results.emit("error", er);
                    /* c8 ignore stop */ if (follow && !didRealpaths) {
                        const promises = [];
                        for (const e of entries){
                            if (e.isSymbolicLink()) {
                                promises.push(e.realpath().then((r)=>r?.isUnknown() ? r.lstat() : r));
                            }
                        }
                        if (promises.length) {
                            Promise.all(promises).then(()=>onReaddir(null, entries, true));
                            return;
                        }
                    }
                    for (const e of entries){
                        if (e && (!filter || filter(e))) {
                            if (!results.write(withFileTypes ? e : e.fullpath())) {
                                paused = true;
                            }
                        }
                    }
                    processing--;
                    for (const e of entries){
                        const r = e.realpathCached() || e;
                        if (r.shouldWalk(dirs, walkFilter)) {
                            queue.push(r);
                        }
                    }
                    if (paused && !results.flowing) {
                        results.once("drain", process1);
                    } else if (!sync) {
                        process1();
                    }
                };
                // zalgo containment
                let sync = true;
                dir.readdirCB(onReaddir, true);
                sync = false;
            }
        };
        process1();
        return results;
    }
    streamSync(entry = this.cwd, opts = {}) {
        if (typeof entry === "string") {
            entry = this.cwd.resolve(entry);
        } else if (!(entry instanceof PathBase)) {
            opts = entry;
            entry = this.cwd;
        }
        const { withFileTypes = true, follow = false, filter, walkFilter } = opts;
        const results = new Minipass({
            objectMode: true
        });
        const dirs = new Set();
        if (!filter || filter(entry)) {
            results.write(withFileTypes ? entry : entry.fullpath());
        }
        const queue = [
            entry
        ];
        let processing = 0;
        const process1 = ()=>{
            let paused = false;
            while(!paused){
                const dir = queue.shift();
                if (!dir) {
                    if (processing === 0) results.end();
                    return;
                }
                processing++;
                dirs.add(dir);
                const entries = dir.readdirSync();
                for (const e of entries){
                    if (!filter || filter(e)) {
                        if (!results.write(withFileTypes ? e : e.fullpath())) {
                            paused = true;
                        }
                    }
                }
                processing--;
                for (const e of entries){
                    let r = e;
                    if (e.isSymbolicLink()) {
                        if (!(follow && (r = e.realpathSync()))) continue;
                        if (r.isUnknown()) r.lstatSync();
                    }
                    if (r.shouldWalk(dirs, walkFilter)) {
                        queue.push(r);
                    }
                }
            }
            if (paused && !results.flowing) results.once("drain", process1);
        };
        process1();
        return results;
    }
    chdir(path = this.cwd) {
        const oldCwd = this.cwd;
        this.cwd = typeof path === "string" ? this.cwd.resolve(path) : path;
        this.cwd[setAsCwd](oldCwd);
    }
}
/**
 * Windows implementation of {@link PathScurryBase}
 *
 * Defaults to case insensitve, uses `'\\'` to generate path strings.  Uses
 * {@link PathWin32} for Path objects.
 */ class PathScurryWin32 extends PathScurryBase {
    constructor(cwd = process.cwd(), opts = {}){
        const { nocase = true } = opts;
        super(cwd, external_path_.win32, "\\", {
            ...opts,
            nocase
        });
        /**
     * separator for generating path strings
     */ this.sep = "\\";
        this.nocase = nocase;
        for(let p = this.cwd; p; p = p.parent){
            p.nocase = this.nocase;
        }
    }
    /**
     * @internal
     */ parseRootPath(dir) {
        // if the path starts with a single separator, it's not a UNC, and we'll
        // just get separator as the root, and driveFromUNC will return \
        // In that case, mount \ on the root from the cwd.
        return external_path_.win32.parse(dir).root.toUpperCase();
    }
    /**
     * @internal
     */ newRoot(fs) {
        return new PathWin32(this.rootPath, IFDIR, undefined, this.roots, this.nocase, this.childrenCache(), {
            fs
        });
    }
    /**
     * Return true if the provided path string is an absolute path
     */ isAbsolute(p) {
        return p.startsWith("/") || p.startsWith("\\") || /^[a-z]:(\/|\\)/i.test(p);
    }
}
/**
 * {@link PathScurryBase} implementation for all posix systems other than Darwin.
 *
 * Defaults to case-sensitive matching, uses `'/'` to generate path strings.
 *
 * Uses {@link PathPosix} for Path objects.
 */ class PathScurryPosix extends PathScurryBase {
    constructor(cwd = process.cwd(), opts = {}){
        const { nocase = false } = opts;
        super(cwd, external_path_.posix, "/", {
            ...opts,
            nocase
        });
        /**
     * separator for generating path strings
     */ this.sep = "/";
        this.nocase = nocase;
    }
    /**
     * @internal
     */ parseRootPath(_dir) {
        return "/";
    }
    /**
     * @internal
     */ newRoot(fs) {
        return new PathPosix(this.rootPath, IFDIR, undefined, this.roots, this.nocase, this.childrenCache(), {
            fs
        });
    }
    /**
     * Return true if the provided path string is an absolute path
     */ isAbsolute(p) {
        return p.startsWith("/");
    }
}
/**
 * {@link PathScurryBase} implementation for Darwin (macOS) systems.
 *
 * Defaults to case-insensitive matching, uses `'/'` for generating path
 * strings.
 *
 * Uses {@link PathPosix} for Path objects.
 */ class PathScurryDarwin extends PathScurryPosix {
    constructor(cwd = process.cwd(), opts = {}){
        const { nocase = true } = opts;
        super(cwd, {
            ...opts,
            nocase
        });
    }
}
/**
 * Default {@link PathBase} implementation for the current platform.
 *
 * {@link PathWin32} on Windows systems, {@link PathPosix} on all others.
 */ const Path = process.platform === "win32" ? PathWin32 : PathPosix;
/**
 * Default {@link PathScurryBase} implementation for the current platform.
 *
 * {@link PathScurryWin32} on Windows systems, {@link PathScurryDarwin} on
 * Darwin (macOS) systems, {@link PathScurryPosix} on all others.
 */ const PathScurry = process.platform === "win32" ? PathScurryWin32 : process.platform === "darwin" ? PathScurryDarwin : PathScurryPosix; //# sourceMappingURL=index.js.map

;// CONCATENATED MODULE: ./node_modules/glob/dist/mjs/pattern.js
// this is just a very light wrapper around 2 arrays with an offset index

const isPatternList = (pl)=>pl.length >= 1;
const isGlobList = (gl)=>gl.length >= 1;
/**
 * An immutable-ish view on an array of glob parts and their parsed
 * results
 */ class Pattern {
    #patternList;
    #globList;
    #index;
    #platform;
    #rest;
    #globString;
    #isDrive;
    #isUNC;
    #isAbsolute;
    #followGlobstar;
    constructor(patternList, globList, index, platform){
        this.#followGlobstar = true;
        if (!isPatternList(patternList)) {
            throw new TypeError("empty pattern list");
        }
        if (!isGlobList(globList)) {
            throw new TypeError("empty glob list");
        }
        if (globList.length !== patternList.length) {
            throw new TypeError("mismatched pattern list and glob list lengths");
        }
        this.length = patternList.length;
        if (index < 0 || index >= this.length) {
            throw new TypeError("index out of range");
        }
        this.#patternList = patternList;
        this.#globList = globList;
        this.#index = index;
        this.#platform = platform;
        // normalize root entries of absolute patterns on initial creation.
        if (this.#index === 0) {
            // c: => ['c:/']
            // C:/ => ['C:/']
            // C:/x => ['C:/', 'x']
            // //host/share => ['//host/share/']
            // //host/share/ => ['//host/share/']
            // //host/share/x => ['//host/share/', 'x']
            // /etc => ['/', 'etc']
            // / => ['/']
            if (this.isUNC()) {
                // '' / '' / 'host' / 'share'
                const [p0, p1, p2, p3, ...prest] = this.#patternList;
                const [g0, g1, g2, g3, ...grest] = this.#globList;
                if (prest[0] === "") {
                    // ends in /
                    prest.shift();
                    grest.shift();
                }
                const p = [
                    p0,
                    p1,
                    p2,
                    p3,
                    ""
                ].join("/");
                const g = [
                    g0,
                    g1,
                    g2,
                    g3,
                    ""
                ].join("/");
                this.#patternList = [
                    p,
                    ...prest
                ];
                this.#globList = [
                    g,
                    ...grest
                ];
                this.length = this.#patternList.length;
            } else if (this.isDrive() || this.isAbsolute()) {
                const [p1, ...prest] = this.#patternList;
                const [g1, ...grest] = this.#globList;
                if (prest[0] === "") {
                    // ends in /
                    prest.shift();
                    grest.shift();
                }
                const p = p1 + "/";
                const g = g1 + "/";
                this.#patternList = [
                    p,
                    ...prest
                ];
                this.#globList = [
                    g,
                    ...grest
                ];
                this.length = this.#patternList.length;
            }
        }
    }
    /**
     * The first entry in the parsed list of patterns
     */ pattern() {
        return this.#patternList[this.#index];
    }
    /**
     * true of if pattern() returns a string
     */ isString() {
        return typeof this.#patternList[this.#index] === "string";
    }
    /**
     * true of if pattern() returns GLOBSTAR
     */ isGlobstar() {
        return this.#patternList[this.#index] === GLOBSTAR;
    }
    /**
     * true if pattern() returns a regexp
     */ isRegExp() {
        return this.#patternList[this.#index] instanceof RegExp;
    }
    /**
     * The /-joined set of glob parts that make up this pattern
     */ globString() {
        return this.#globString = this.#globString || (this.#index === 0 ? this.isAbsolute() ? this.#globList[0] + this.#globList.slice(1).join("/") : this.#globList.join("/") : this.#globList.slice(this.#index).join("/"));
    }
    /**
     * true if there are more pattern parts after this one
     */ hasMore() {
        return this.length > this.#index + 1;
    }
    /**
     * The rest of the pattern after this part, or null if this is the end
     */ rest() {
        if (this.#rest !== undefined) return this.#rest;
        if (!this.hasMore()) return this.#rest = null;
        this.#rest = new Pattern(this.#patternList, this.#globList, this.#index + 1, this.#platform);
        this.#rest.#isAbsolute = this.#isAbsolute;
        this.#rest.#isUNC = this.#isUNC;
        this.#rest.#isDrive = this.#isDrive;
        return this.#rest;
    }
    /**
     * true if the pattern represents a //unc/path/ on windows
     */ isUNC() {
        const pl = this.#patternList;
        return this.#isUNC !== undefined ? this.#isUNC : this.#isUNC = this.#platform === "win32" && this.#index === 0 && pl[0] === "" && pl[1] === "" && typeof pl[2] === "string" && !!pl[2] && typeof pl[3] === "string" && !!pl[3];
    }
    // pattern like C:/...
    // split = ['C:', ...]
    // XXX: would be nice to handle patterns like `c:*` to test the cwd
    // in c: for *, but I don't know of a way to even figure out what that
    // cwd is without actually chdir'ing into it?
    /**
     * True if the pattern starts with a drive letter on Windows
     */ isDrive() {
        const pl = this.#patternList;
        return this.#isDrive !== undefined ? this.#isDrive : this.#isDrive = this.#platform === "win32" && this.#index === 0 && this.length > 1 && typeof pl[0] === "string" && /^[a-z]:$/i.test(pl[0]);
    }
    // pattern = '/' or '/...' or '/x/...'
    // split = ['', ''] or ['', ...] or ['', 'x', ...]
    // Drive and UNC both considered absolute on windows
    /**
     * True if the pattern is rooted on an absolute path
     */ isAbsolute() {
        const pl = this.#patternList;
        return this.#isAbsolute !== undefined ? this.#isAbsolute : this.#isAbsolute = pl[0] === "" && pl.length > 1 || this.isDrive() || this.isUNC();
    }
    /**
     * consume the root of the pattern, and return it
     */ root() {
        const p = this.#patternList[0];
        return typeof p === "string" && this.isAbsolute() && this.#index === 0 ? p : "";
    }
    /**
     * Check to see if the current globstar pattern is allowed to follow
     * a symbolic link.
     */ checkFollowGlobstar() {
        return !(this.#index === 0 || !this.isGlobstar() || !this.#followGlobstar);
    }
    /**
     * Mark that the current globstar pattern is following a symbolic link
     */ markFollowGlobstar() {
        if (this.#index === 0 || !this.isGlobstar() || !this.#followGlobstar) return false;
        this.#followGlobstar = false;
        return true;
    }
} //# sourceMappingURL=pattern.js.map

;// CONCATENATED MODULE: ./node_modules/glob/node_modules/minipass/dist/mjs/index.js
const mjs_proc = typeof process === "object" && process ? process : {
    stdout: null,
    stderr: null
};



/**
 * Return true if the argument is a Minipass stream, Node stream, or something
 * else that Minipass can interact with.
 */ const mjs_isStream = (s)=>!!s && typeof s === "object" && (s instanceof mjs_Minipass || s instanceof external_node_stream_ || mjs_isReadable(s) || mjs_isWritable(s));
/**
 * Return true if the argument is a valid {@link Minipass.Readable}
 */ const mjs_isReadable = (s)=>!!s && typeof s === "object" && s instanceof external_node_events_.EventEmitter && typeof s.pipe === "function" && // node core Writable streams have a pipe() method, but it throws
    s.pipe !== external_node_stream_.Writable.prototype.pipe;
/**
 * Return true if the argument is a valid {@link Minipass.Writable}
 */ const mjs_isWritable = (s)=>!!s && typeof s === "object" && s instanceof external_node_events_.EventEmitter && typeof s.write === "function" && typeof s.end === "function";
const mjs_EOF = Symbol("EOF");
const mjs_MAYBE_EMIT_END = Symbol("maybeEmitEnd");
const mjs_EMITTED_END = Symbol("emittedEnd");
const mjs_EMITTING_END = Symbol("emittingEnd");
const mjs_EMITTED_ERROR = Symbol("emittedError");
const mjs_CLOSED = Symbol("closed");
const mjs_READ = Symbol("read");
const mjs_FLUSH = Symbol("flush");
const mjs_FLUSHCHUNK = Symbol("flushChunk");
const mjs_ENCODING = Symbol("encoding");
const mjs_DECODER = Symbol("decoder");
const mjs_FLOWING = Symbol("flowing");
const mjs_PAUSED = Symbol("paused");
const mjs_RESUME = Symbol("resume");
const mjs_BUFFER = Symbol("buffer");
const mjs_PIPES = Symbol("pipes");
const mjs_BUFFERLENGTH = Symbol("bufferLength");
const mjs_BUFFERPUSH = Symbol("bufferPush");
const mjs_BUFFERSHIFT = Symbol("bufferShift");
const mjs_OBJECTMODE = Symbol("objectMode");
// internal event when stream is destroyed
const mjs_DESTROYED = Symbol("destroyed");
// internal event when stream has an error
const mjs_ERROR = Symbol("error");
const mjs_EMITDATA = Symbol("emitData");
const mjs_EMITEND = Symbol("emitEnd");
const mjs_EMITEND2 = Symbol("emitEnd2");
const mjs_ASYNC = Symbol("async");
const mjs_ABORT = Symbol("abort");
const mjs_ABORTED = Symbol("aborted");
const mjs_SIGNAL = Symbol("signal");
const mjs_DATALISTENERS = Symbol("dataListeners");
const mjs_DISCARDED = Symbol("discarded");
const mjs_defer = (fn)=>Promise.resolve().then(fn);
const mjs_nodefer = (fn)=>fn();
const mjs_isEndish = (ev)=>ev === "end" || ev === "finish" || ev === "prefinish";
const mjs_isArrayBufferLike = (b)=>b instanceof ArrayBuffer || !!b && typeof b === "object" && b.constructor && b.constructor.name === "ArrayBuffer" && b.byteLength >= 0;
const mjs_isArrayBufferView = (b)=>!Buffer.isBuffer(b) && ArrayBuffer.isView(b);
/**
 * Internal class representing a pipe to a destination stream.
 *
 * @internal
 */ class mjs_Pipe {
    constructor(src, dest, opts){
        this.src = src;
        this.dest = dest;
        this.opts = opts;
        this.ondrain = ()=>src[mjs_RESUME]();
        this.dest.on("drain", this.ondrain);
    }
    unpipe() {
        this.dest.removeListener("drain", this.ondrain);
    }
    // only here for the prototype
    /* c8 ignore start */ proxyErrors(_er) {}
    /* c8 ignore stop */ end() {
        this.unpipe();
        if (this.opts.end) this.dest.end();
    }
}
/**
 * Internal class representing a pipe to a destination stream where
 * errors are proxied.
 *
 * @internal
 */ class mjs_PipeProxyErrors extends mjs_Pipe {
    unpipe() {
        this.src.removeListener("error", this.proxyErrors);
        super.unpipe();
    }
    constructor(src, dest, opts){
        super(src, dest, opts);
        this.proxyErrors = (er)=>dest.emit("error", er);
        src.on("error", this.proxyErrors);
    }
}
const mjs_isObjectModeOptions = (o)=>!!o.objectMode;
const mjs_isEncodingOptions = (o)=>!o.objectMode && !!o.encoding && o.encoding !== "buffer";
/**
 * Main export, the Minipass class
 *
 * `RType` is the type of data emitted, defaults to Buffer
 *
 * `WType` is the type of data to be written, if RType is buffer or string,
 * then any {@link Minipass.ContiguousData} is allowed.
 *
 * `Events` is the set of event handler signatures that this object
 * will emit, see {@link Minipass.Events}
 */ class mjs_Minipass extends external_node_events_.EventEmitter {
    /**
     * If `RType` is Buffer, then options do not need to be provided.
     * Otherwise, an options object must be provided to specify either
     * {@link Minipass.SharedOptions.objectMode} or
     * {@link Minipass.SharedOptions.encoding}, as appropriate.
     */ constructor(...args){
        const options = args[0] || {};
        super();
        this[mjs_FLOWING] = false;
        this[mjs_PAUSED] = false;
        this[mjs_PIPES] = [];
        this[mjs_BUFFER] = [];
        this[mjs_EOF] = false;
        this[mjs_EMITTED_END] = false;
        this[mjs_EMITTING_END] = false;
        this[mjs_CLOSED] = false;
        this[mjs_EMITTED_ERROR] = null;
        this[mjs_BUFFERLENGTH] = 0;
        this[mjs_DESTROYED] = false;
        this[mjs_ABORTED] = false;
        this[mjs_DATALISTENERS] = 0;
        this[mjs_DISCARDED] = false;
        /**
     * true if the stream can be written
     */ this.writable = true;
        /**
     * true if the stream can be read
     */ this.readable = true;
        if (options.objectMode && typeof options.encoding === "string") {
            throw new TypeError("Encoding and objectMode may not be used together");
        }
        if (mjs_isObjectModeOptions(options)) {
            this[mjs_OBJECTMODE] = true;
            this[mjs_ENCODING] = null;
        } else if (mjs_isEncodingOptions(options)) {
            this[mjs_ENCODING] = options.encoding;
            this[mjs_OBJECTMODE] = false;
        } else {
            this[mjs_OBJECTMODE] = false;
            this[mjs_ENCODING] = null;
        }
        this[mjs_ASYNC] = !!options.async;
        this[mjs_DECODER] = this[mjs_ENCODING] ? new external_node_string_decoder_.StringDecoder(this[mjs_ENCODING]) : null;
        //@ts-ignore - private option for debugging and testing
        if (options && options.debugExposeBuffer === true) {
            Object.defineProperty(this, "buffer", {
                get: ()=>this[mjs_BUFFER]
            });
        }
        //@ts-ignore - private option for debugging and testing
        if (options && options.debugExposePipes === true) {
            Object.defineProperty(this, "pipes", {
                get: ()=>this[mjs_PIPES]
            });
        }
        const { signal } = options;
        if (signal) {
            this[mjs_SIGNAL] = signal;
            if (signal.aborted) {
                this[mjs_ABORT]();
            } else {
                signal.addEventListener("abort", ()=>this[mjs_ABORT]());
            }
        }
    }
    /**
     * The amount of data stored in the buffer waiting to be read.
     *
     * For Buffer strings, this will be the total byte length.
     * For string encoding streams, this will be the string character length,
     * according to JavaScript's `string.length` logic.
     * For objectMode streams, this is a count of the items waiting to be
     * emitted.
     */ get bufferLength() {
        return this[mjs_BUFFERLENGTH];
    }
    /**
     * The `BufferEncoding` currently in use, or `null`
     */ get encoding() {
        return this[mjs_ENCODING];
    }
    /**
     * @deprecated - This is a read only property
     */ set encoding(_enc) {
        throw new Error("Encoding must be set at instantiation time");
    }
    /**
     * @deprecated - Encoding may only be set at instantiation time
     */ setEncoding(_enc) {
        throw new Error("Encoding must be set at instantiation time");
    }
    /**
     * True if this is an objectMode stream
     */ get objectMode() {
        return this[mjs_OBJECTMODE];
    }
    /**
     * @deprecated - This is a read-only property
     */ set objectMode(_om) {
        throw new Error("objectMode must be set at instantiation time");
    }
    /**
     * true if this is an async stream
     */ get ["async"]() {
        return this[mjs_ASYNC];
    }
    /**
     * Set to true to make this stream async.
     *
     * Once set, it cannot be unset, as this would potentially cause incorrect
     * behavior.  Ie, a sync stream can be made async, but an async stream
     * cannot be safely made sync.
     */ set ["async"](a) {
        this[mjs_ASYNC] = this[mjs_ASYNC] || !!a;
    }
    // drop everything and get out of the flow completely
    [mjs_ABORT]() {
        this[mjs_ABORTED] = true;
        this.emit("abort", this[mjs_SIGNAL]?.reason);
        this.destroy(this[mjs_SIGNAL]?.reason);
    }
    /**
     * True if the stream has been aborted.
     */ get aborted() {
        return this[mjs_ABORTED];
    }
    /**
     * No-op setter. Stream aborted status is set via the AbortSignal provided
     * in the constructor options.
     */ set aborted(_) {}
    write(chunk, encoding, cb) {
        if (this[mjs_ABORTED]) return false;
        if (this[mjs_EOF]) throw new Error("write after end");
        if (this[mjs_DESTROYED]) {
            this.emit("error", Object.assign(new Error("Cannot call write after a stream was destroyed"), {
                code: "ERR_STREAM_DESTROYED"
            }));
            return true;
        }
        if (typeof encoding === "function") {
            cb = encoding;
            encoding = "utf8";
        }
        if (!encoding) encoding = "utf8";
        const fn = this[mjs_ASYNC] ? mjs_defer : mjs_nodefer;
        // convert array buffers and typed array views into buffers
        // at some point in the future, we may want to do the opposite!
        // leave strings and buffers as-is
        // anything is only allowed if in object mode, so throw
        if (!this[mjs_OBJECTMODE] && !Buffer.isBuffer(chunk)) {
            if (mjs_isArrayBufferView(chunk)) {
                //@ts-ignore - sinful unsafe type changing
                chunk = Buffer.from(chunk.buffer, chunk.byteOffset, chunk.byteLength);
            } else if (mjs_isArrayBufferLike(chunk)) {
                //@ts-ignore - sinful unsafe type changing
                chunk = Buffer.from(chunk);
            } else if (typeof chunk !== "string") {
                throw new Error("Non-contiguous data written to non-objectMode stream");
            }
        }
        // handle object mode up front, since it's simpler
        // this yields better performance, fewer checks later.
        if (this[mjs_OBJECTMODE]) {
            // maybe impossible?
            /* c8 ignore start */ if (this[mjs_FLOWING] && this[mjs_BUFFERLENGTH] !== 0) this[mjs_FLUSH](true);
            /* c8 ignore stop */ if (this[mjs_FLOWING]) this.emit("data", chunk);
            else this[mjs_BUFFERPUSH](chunk);
            if (this[mjs_BUFFERLENGTH] !== 0) this.emit("readable");
            if (cb) fn(cb);
            return this[mjs_FLOWING];
        }
        // at this point the chunk is a buffer or string
        // don't buffer it up or send it to the decoder
        if (!chunk.length) {
            if (this[mjs_BUFFERLENGTH] !== 0) this.emit("readable");
            if (cb) fn(cb);
            return this[mjs_FLOWING];
        }
        // fast-path writing strings of same encoding to a stream with
        // an empty buffer, skipping the buffer/decoder dance
        if (typeof chunk === "string" && // unless it is a string already ready for us to use
        !(encoding === this[mjs_ENCODING] && !this[mjs_DECODER]?.lastNeed)) {
            //@ts-ignore - sinful unsafe type change
            chunk = Buffer.from(chunk, encoding);
        }
        if (Buffer.isBuffer(chunk) && this[mjs_ENCODING]) {
            //@ts-ignore - sinful unsafe type change
            chunk = this[mjs_DECODER].write(chunk);
        }
        // Note: flushing CAN potentially switch us into not-flowing mode
        if (this[mjs_FLOWING] && this[mjs_BUFFERLENGTH] !== 0) this[mjs_FLUSH](true);
        if (this[mjs_FLOWING]) this.emit("data", chunk);
        else this[mjs_BUFFERPUSH](chunk);
        if (this[mjs_BUFFERLENGTH] !== 0) this.emit("readable");
        if (cb) fn(cb);
        return this[mjs_FLOWING];
    }
    /**
     * Low-level explicit read method.
     *
     * In objectMode, the argument is ignored, and one item is returned if
     * available.
     *
     * `n` is the number of bytes (or in the case of encoding streams,
     * characters) to consume. If `n` is not provided, then the entire buffer
     * is returned, or `null` is returned if no data is available.
     *
     * If `n` is greater that the amount of data in the internal buffer,
     * then `null` is returned.
     */ read(n) {
        if (this[mjs_DESTROYED]) return null;
        this[mjs_DISCARDED] = false;
        if (this[mjs_BUFFERLENGTH] === 0 || n === 0 || n && n > this[mjs_BUFFERLENGTH]) {
            this[mjs_MAYBE_EMIT_END]();
            return null;
        }
        if (this[mjs_OBJECTMODE]) n = null;
        if (this[mjs_BUFFER].length > 1 && !this[mjs_OBJECTMODE]) {
            // not object mode, so if we have an encoding, then RType is string
            // otherwise, must be Buffer
            this[mjs_BUFFER] = [
                this[mjs_ENCODING] ? this[mjs_BUFFER].join("") : Buffer.concat(this[mjs_BUFFER], this[mjs_BUFFERLENGTH])
            ];
        }
        const ret = this[mjs_READ](n || null, this[mjs_BUFFER][0]);
        this[mjs_MAYBE_EMIT_END]();
        return ret;
    }
    [mjs_READ](n, chunk) {
        if (this[mjs_OBJECTMODE]) this[mjs_BUFFERSHIFT]();
        else {
            const c = chunk;
            if (n === c.length || n === null) this[mjs_BUFFERSHIFT]();
            else if (typeof c === "string") {
                this[mjs_BUFFER][0] = c.slice(n);
                chunk = c.slice(0, n);
                this[mjs_BUFFERLENGTH] -= n;
            } else {
                this[mjs_BUFFER][0] = c.subarray(n);
                chunk = c.subarray(0, n);
                this[mjs_BUFFERLENGTH] -= n;
            }
        }
        this.emit("data", chunk);
        if (!this[mjs_BUFFER].length && !this[mjs_EOF]) this.emit("drain");
        return chunk;
    }
    end(chunk, encoding, cb) {
        if (typeof chunk === "function") {
            cb = chunk;
            chunk = undefined;
        }
        if (typeof encoding === "function") {
            cb = encoding;
            encoding = "utf8";
        }
        if (chunk !== undefined) this.write(chunk, encoding);
        if (cb) this.once("end", cb);
        this[mjs_EOF] = true;
        this.writable = false;
        // if we haven't written anything, then go ahead and emit,
        // even if we're not reading.
        // we'll re-emit if a new 'end' listener is added anyway.
        // This makes MP more suitable to write-only use cases.
        if (this[mjs_FLOWING] || !this[mjs_PAUSED]) this[mjs_MAYBE_EMIT_END]();
        return this;
    }
    // don't let the internal resume be overwritten
    [mjs_RESUME]() {
        if (this[mjs_DESTROYED]) return;
        if (!this[mjs_DATALISTENERS] && !this[mjs_PIPES].length) {
            this[mjs_DISCARDED] = true;
        }
        this[mjs_PAUSED] = false;
        this[mjs_FLOWING] = true;
        this.emit("resume");
        if (this[mjs_BUFFER].length) this[mjs_FLUSH]();
        else if (this[mjs_EOF]) this[mjs_MAYBE_EMIT_END]();
        else this.emit("drain");
    }
    /**
     * Resume the stream if it is currently in a paused state
     *
     * If called when there are no pipe destinations or `data` event listeners,
     * this will place the stream in a "discarded" state, where all data will
     * be thrown away. The discarded state is removed if a pipe destination or
     * data handler is added, if pause() is called, or if any synchronous or
     * asynchronous iteration is started.
     */ resume() {
        return this[mjs_RESUME]();
    }
    /**
     * Pause the stream
     */ pause() {
        this[mjs_FLOWING] = false;
        this[mjs_PAUSED] = true;
        this[mjs_DISCARDED] = false;
    }
    /**
     * true if the stream has been forcibly destroyed
     */ get destroyed() {
        return this[mjs_DESTROYED];
    }
    /**
     * true if the stream is currently in a flowing state, meaning that
     * any writes will be immediately emitted.
     */ get flowing() {
        return this[mjs_FLOWING];
    }
    /**
     * true if the stream is currently in a paused state
     */ get paused() {
        return this[mjs_PAUSED];
    }
    [mjs_BUFFERPUSH](chunk) {
        if (this[mjs_OBJECTMODE]) this[mjs_BUFFERLENGTH] += 1;
        else this[mjs_BUFFERLENGTH] += chunk.length;
        this[mjs_BUFFER].push(chunk);
    }
    [mjs_BUFFERSHIFT]() {
        if (this[mjs_OBJECTMODE]) this[mjs_BUFFERLENGTH] -= 1;
        else this[mjs_BUFFERLENGTH] -= this[mjs_BUFFER][0].length;
        return this[mjs_BUFFER].shift();
    }
    [mjs_FLUSH](noDrain = false) {
        do {}while (this[mjs_FLUSHCHUNK](this[mjs_BUFFERSHIFT]()) && this[mjs_BUFFER].length);
        if (!noDrain && !this[mjs_BUFFER].length && !this[mjs_EOF]) this.emit("drain");
    }
    [mjs_FLUSHCHUNK](chunk) {
        this.emit("data", chunk);
        return this[mjs_FLOWING];
    }
    /**
     * Pipe all data emitted by this stream into the destination provided.
     *
     * Triggers the flow of data.
     */ pipe(dest, opts) {
        if (this[mjs_DESTROYED]) return dest;
        this[mjs_DISCARDED] = false;
        const ended = this[mjs_EMITTED_END];
        opts = opts || {};
        if (dest === mjs_proc.stdout || dest === mjs_proc.stderr) opts.end = false;
        else opts.end = opts.end !== false;
        opts.proxyErrors = !!opts.proxyErrors;
        // piping an ended stream ends immediately
        if (ended) {
            if (opts.end) dest.end();
        } else {
            // "as" here just ignores the WType, which pipes don't care about,
            // since they're only consuming from us, and writing to the dest
            this[mjs_PIPES].push(!opts.proxyErrors ? new mjs_Pipe(this, dest, opts) : new mjs_PipeProxyErrors(this, dest, opts));
            if (this[mjs_ASYNC]) mjs_defer(()=>this[mjs_RESUME]());
            else this[mjs_RESUME]();
        }
        return dest;
    }
    /**
     * Fully unhook a piped destination stream.
     *
     * If the destination stream was the only consumer of this stream (ie,
     * there are no other piped destinations or `'data'` event listeners)
     * then the flow of data will stop until there is another consumer or
     * {@link Minipass#resume} is explicitly called.
     */ unpipe(dest) {
        const p = this[mjs_PIPES].find((p)=>p.dest === dest);
        if (p) {
            if (this[mjs_PIPES].length === 1) {
                if (this[mjs_FLOWING] && this[mjs_DATALISTENERS] === 0) {
                    this[mjs_FLOWING] = false;
                }
                this[mjs_PIPES] = [];
            } else this[mjs_PIPES].splice(this[mjs_PIPES].indexOf(p), 1);
            p.unpipe();
        }
    }
    /**
     * Alias for {@link Minipass#on}
     */ addListener(ev, handler) {
        return this.on(ev, handler);
    }
    /**
     * Mostly identical to `EventEmitter.on`, with the following
     * behavior differences to prevent data loss and unnecessary hangs:
     *
     * - Adding a 'data' event handler will trigger the flow of data
     *
     * - Adding a 'readable' event handler when there is data waiting to be read
     *   will cause 'readable' to be emitted immediately.
     *
     * - Adding an 'endish' event handler ('end', 'finish', etc.) which has
     *   already passed will cause the event to be emitted immediately and all
     *   handlers removed.
     *
     * - Adding an 'error' event handler after an error has been emitted will
     *   cause the event to be re-emitted immediately with the error previously
     *   raised.
     */ on(ev, handler) {
        const ret = super.on(ev, handler);
        if (ev === "data") {
            this[mjs_DISCARDED] = false;
            this[mjs_DATALISTENERS]++;
            if (!this[mjs_PIPES].length && !this[mjs_FLOWING]) {
                this[mjs_RESUME]();
            }
        } else if (ev === "readable" && this[mjs_BUFFERLENGTH] !== 0) {
            super.emit("readable");
        } else if (mjs_isEndish(ev) && this[mjs_EMITTED_END]) {
            super.emit(ev);
            this.removeAllListeners(ev);
        } else if (ev === "error" && this[mjs_EMITTED_ERROR]) {
            const h = handler;
            if (this[mjs_ASYNC]) mjs_defer(()=>h.call(this, this[mjs_EMITTED_ERROR]));
            else h.call(this, this[mjs_EMITTED_ERROR]);
        }
        return ret;
    }
    /**
     * Alias for {@link Minipass#off}
     */ removeListener(ev, handler) {
        return this.off(ev, handler);
    }
    /**
     * Mostly identical to `EventEmitter.off`
     *
     * If a 'data' event handler is removed, and it was the last consumer
     * (ie, there are no pipe destinations or other 'data' event listeners),
     * then the flow of data will stop until there is another consumer or
     * {@link Minipass#resume} is explicitly called.
     */ off(ev, handler) {
        const ret = super.off(ev, handler);
        // if we previously had listeners, and now we don't, and we don't
        // have any pipes, then stop the flow, unless it's been explicitly
        // put in a discarded flowing state via stream.resume().
        if (ev === "data") {
            this[mjs_DATALISTENERS] = this.listeners("data").length;
            if (this[mjs_DATALISTENERS] === 0 && !this[mjs_DISCARDED] && !this[mjs_PIPES].length) {
                this[mjs_FLOWING] = false;
            }
        }
        return ret;
    }
    /**
     * Mostly identical to `EventEmitter.removeAllListeners`
     *
     * If all 'data' event handlers are removed, and they were the last consumer
     * (ie, there are no pipe destinations), then the flow of data will stop
     * until there is another consumer or {@link Minipass#resume} is explicitly
     * called.
     */ removeAllListeners(ev) {
        const ret = super.removeAllListeners(ev);
        if (ev === "data" || ev === undefined) {
            this[mjs_DATALISTENERS] = 0;
            if (!this[mjs_DISCARDED] && !this[mjs_PIPES].length) {
                this[mjs_FLOWING] = false;
            }
        }
        return ret;
    }
    /**
     * true if the 'end' event has been emitted
     */ get emittedEnd() {
        return this[mjs_EMITTED_END];
    }
    [mjs_MAYBE_EMIT_END]() {
        if (!this[mjs_EMITTING_END] && !this[mjs_EMITTED_END] && !this[mjs_DESTROYED] && this[mjs_BUFFER].length === 0 && this[mjs_EOF]) {
            this[mjs_EMITTING_END] = true;
            this.emit("end");
            this.emit("prefinish");
            this.emit("finish");
            if (this[mjs_CLOSED]) this.emit("close");
            this[mjs_EMITTING_END] = false;
        }
    }
    /**
     * Mostly identical to `EventEmitter.emit`, with the following
     * behavior differences to prevent data loss and unnecessary hangs:
     *
     * If the stream has been destroyed, and the event is something other
     * than 'close' or 'error', then `false` is returned and no handlers
     * are called.
     *
     * If the event is 'end', and has already been emitted, then the event
     * is ignored. If the stream is in a paused or non-flowing state, then
     * the event will be deferred until data flow resumes. If the stream is
     * async, then handlers will be called on the next tick rather than
     * immediately.
     *
     * If the event is 'close', and 'end' has not yet been emitted, then
     * the event will be deferred until after 'end' is emitted.
     *
     * If the event is 'error', and an AbortSignal was provided for the stream,
     * and there are no listeners, then the event is ignored, matching the
     * behavior of node core streams in the presense of an AbortSignal.
     *
     * If the event is 'finish' or 'prefinish', then all listeners will be
     * removed after emitting the event, to prevent double-firing.
     */ emit(ev, ...args) {
        const data = args[0];
        // error and close are only events allowed after calling destroy()
        if (ev !== "error" && ev !== "close" && ev !== mjs_DESTROYED && this[mjs_DESTROYED]) {
            return false;
        } else if (ev === "data") {
            return !this[mjs_OBJECTMODE] && !data ? false : this[mjs_ASYNC] ? (mjs_defer(()=>this[mjs_EMITDATA](data)), true) : this[mjs_EMITDATA](data);
        } else if (ev === "end") {
            return this[mjs_EMITEND]();
        } else if (ev === "close") {
            this[mjs_CLOSED] = true;
            // don't emit close before 'end' and 'finish'
            if (!this[mjs_EMITTED_END] && !this[mjs_DESTROYED]) return false;
            const ret = super.emit("close");
            this.removeAllListeners("close");
            return ret;
        } else if (ev === "error") {
            this[mjs_EMITTED_ERROR] = data;
            super.emit(mjs_ERROR, data);
            const ret = !this[mjs_SIGNAL] || this.listeners("error").length ? super.emit("error", data) : false;
            this[mjs_MAYBE_EMIT_END]();
            return ret;
        } else if (ev === "resume") {
            const ret = super.emit("resume");
            this[mjs_MAYBE_EMIT_END]();
            return ret;
        } else if (ev === "finish" || ev === "prefinish") {
            const ret = super.emit(ev);
            this.removeAllListeners(ev);
            return ret;
        }
        // Some other unknown event
        const ret = super.emit(ev, ...args);
        this[mjs_MAYBE_EMIT_END]();
        return ret;
    }
    [mjs_EMITDATA](data) {
        for (const p of this[mjs_PIPES]){
            if (p.dest.write(data) === false) this.pause();
        }
        const ret = this[mjs_DISCARDED] ? false : super.emit("data", data);
        this[mjs_MAYBE_EMIT_END]();
        return ret;
    }
    [mjs_EMITEND]() {
        if (this[mjs_EMITTED_END]) return false;
        this[mjs_EMITTED_END] = true;
        this.readable = false;
        return this[mjs_ASYNC] ? (mjs_defer(()=>this[mjs_EMITEND2]()), true) : this[mjs_EMITEND2]();
    }
    [mjs_EMITEND2]() {
        if (this[mjs_DECODER]) {
            const data = this[mjs_DECODER].end();
            if (data) {
                for (const p of this[mjs_PIPES]){
                    p.dest.write(data);
                }
                if (!this[mjs_DISCARDED]) super.emit("data", data);
            }
        }
        for (const p of this[mjs_PIPES]){
            p.end();
        }
        const ret = super.emit("end");
        this.removeAllListeners("end");
        return ret;
    }
    /**
     * Return a Promise that resolves to an array of all emitted data once
     * the stream ends.
     */ async collect() {
        const buf = Object.assign([], {
            dataLength: 0
        });
        if (!this[mjs_OBJECTMODE]) buf.dataLength = 0;
        // set the promise first, in case an error is raised
        // by triggering the flow here.
        const p = this.promise();
        this.on("data", (c)=>{
            buf.push(c);
            if (!this[mjs_OBJECTMODE]) buf.dataLength += c.length;
        });
        await p;
        return buf;
    }
    /**
     * Return a Promise that resolves to the concatenation of all emitted data
     * once the stream ends.
     *
     * Not allowed on objectMode streams.
     */ async concat() {
        if (this[mjs_OBJECTMODE]) {
            throw new Error("cannot concat in objectMode");
        }
        const buf = await this.collect();
        return this[mjs_ENCODING] ? buf.join("") : Buffer.concat(buf, buf.dataLength);
    }
    /**
     * Return a void Promise that resolves once the stream ends.
     */ async promise() {
        return new Promise((resolve, reject)=>{
            this.on(mjs_DESTROYED, ()=>reject(new Error("stream destroyed")));
            this.on("error", (er)=>reject(er));
            this.on("end", ()=>resolve());
        });
    }
    /**
     * Asynchronous `for await of` iteration.
     *
     * This will continue emitting all chunks until the stream terminates.
     */ [Symbol.asyncIterator]() {
        // set this up front, in case the consumer doesn't call next()
        // right away.
        this[mjs_DISCARDED] = false;
        let stopped = false;
        const stop = async ()=>{
            this.pause();
            stopped = true;
            return {
                value: undefined,
                done: true
            };
        };
        const next = ()=>{
            if (stopped) return stop();
            const res = this.read();
            if (res !== null) return Promise.resolve({
                done: false,
                value: res
            });
            if (this[mjs_EOF]) return stop();
            let resolve;
            let reject;
            const onerr = (er)=>{
                this.off("data", ondata);
                this.off("end", onend);
                this.off(mjs_DESTROYED, ondestroy);
                stop();
                reject(er);
            };
            const ondata = (value)=>{
                this.off("error", onerr);
                this.off("end", onend);
                this.off(mjs_DESTROYED, ondestroy);
                this.pause();
                resolve({
                    value,
                    done: !!this[mjs_EOF]
                });
            };
            const onend = ()=>{
                this.off("error", onerr);
                this.off("data", ondata);
                this.off(mjs_DESTROYED, ondestroy);
                stop();
                resolve({
                    done: true,
                    value: undefined
                });
            };
            const ondestroy = ()=>onerr(new Error("stream destroyed"));
            return new Promise((res, rej)=>{
                reject = rej;
                resolve = res;
                this.once(mjs_DESTROYED, ondestroy);
                this.once("error", onerr);
                this.once("end", onend);
                this.once("data", ondata);
            });
        };
        return {
            next,
            throw: stop,
            return: stop,
            [Symbol.asyncIterator] () {
                return this;
            }
        };
    }
    /**
     * Synchronous `for of` iteration.
     *
     * The iteration will terminate when the internal buffer runs out, even
     * if the stream has not yet terminated.
     */ [Symbol.iterator]() {
        // set this up front, in case the consumer doesn't call next()
        // right away.
        this[mjs_DISCARDED] = false;
        let stopped = false;
        const stop = ()=>{
            this.pause();
            this.off(mjs_ERROR, stop);
            this.off(mjs_DESTROYED, stop);
            this.off("end", stop);
            stopped = true;
            return {
                done: true,
                value: undefined
            };
        };
        const next = ()=>{
            if (stopped) return stop();
            const value = this.read();
            return value === null ? stop() : {
                done: false,
                value
            };
        };
        this.once("end", stop);
        this.once(mjs_ERROR, stop);
        this.once(mjs_DESTROYED, stop);
        return {
            next,
            throw: stop,
            return: stop,
            [Symbol.iterator] () {
                return this;
            }
        };
    }
    /**
     * Destroy a stream, preventing it from being used for any further purpose.
     *
     * If the stream has a `close()` method, then it will be called on
     * destruction.
     *
     * After destruction, any attempt to write data, read data, or emit most
     * events will be ignored.
     *
     * If an error argument is provided, then it will be emitted in an
     * 'error' event.
     */ destroy(er) {
        if (this[mjs_DESTROYED]) {
            if (er) this.emit("error", er);
            else this.emit(mjs_DESTROYED);
            return this;
        }
        this[mjs_DESTROYED] = true;
        this[mjs_DISCARDED] = true;
        // throw away all buffered data, it's never coming out
        this[mjs_BUFFER].length = 0;
        this[mjs_BUFFERLENGTH] = 0;
        const wc = this;
        if (typeof wc.close === "function" && !this[mjs_CLOSED]) wc.close();
        if (er) this.emit("error", er);
        else this.emit(mjs_DESTROYED);
        return this;
    }
    /**
     * Alias for {@link isStream}
     *
     * Former export location, maintained for backwards compatibility.
     *
     * @deprecated
     */ static get isStream() {
        return mjs_isStream;
    }
} //# sourceMappingURL=index.js.map

;// CONCATENATED MODULE: ./node_modules/glob/dist/mjs/ignore.js
// give it a pattern, and it'll be able to tell you if
// a given path should be ignored.
// Ignoring a path ignores its children if the pattern ends in /**
// Ignores are always parsed in dot:true mode


const ignore_defaultPlatform = typeof process === "object" && process && typeof process.platform === "string" ? process.platform : "linux";
/**
 * Class used to process ignored patterns
 */ class Ignore {
    constructor(ignored, { nobrace, nocase, noext, noglobstar, platform = ignore_defaultPlatform }){
        this.relative = [];
        this.absolute = [];
        this.relativeChildren = [];
        this.absoluteChildren = [];
        const mmopts = {
            dot: true,
            nobrace,
            nocase,
            noext,
            noglobstar,
            optimizationLevel: 2,
            platform,
            nocomment: true,
            nonegate: true
        };
        // this is a little weird, but it gives us a clean set of optimized
        // minimatch matchers, without getting tripped up if one of them
        // ends in /** inside a brace section, and it's only inefficient at
        // the start of the walk, not along it.
        // It'd be nice if the Pattern class just had a .test() method, but
        // handling globstars is a bit of a pita, and that code already lives
        // in minimatch anyway.
        // Another way would be if maybe Minimatch could take its set/globParts
        // as an option, and then we could at least just use Pattern to test
        // for absolute-ness.
        // Yet another way, Minimatch could take an array of glob strings, and
        // a cwd option, and do the right thing.
        for (const ign of ignored){
            const mm = new Minimatch(ign, mmopts);
            for(let i = 0; i < mm.set.length; i++){
                const parsed = mm.set[i];
                const globParts = mm.globParts[i];
                const p = new Pattern(parsed, globParts, 0, platform);
                const m = new Minimatch(p.globString(), mmopts);
                const children = globParts[globParts.length - 1] === "**";
                const absolute = p.isAbsolute();
                if (absolute) this.absolute.push(m);
                else this.relative.push(m);
                if (children) {
                    if (absolute) this.absoluteChildren.push(m);
                    else this.relativeChildren.push(m);
                }
            }
        }
    }
    ignored(p) {
        const fullpath = p.fullpath();
        const fullpaths = `${fullpath}/`;
        const relative = p.relative() || ".";
        const relatives = `${relative}/`;
        for (const m of this.relative){
            if (m.match(relative) || m.match(relatives)) return true;
        }
        for (const m of this.absolute){
            if (m.match(fullpath) || m.match(fullpaths)) return true;
        }
        return false;
    }
    childrenIgnored(p) {
        const fullpath = p.fullpath() + "/";
        const relative = (p.relative() || ".") + "/";
        for (const m of this.relativeChildren){
            if (m.match(relative)) return true;
        }
        for (const m of this.absoluteChildren){
            if (m.match(fullpath)) true;
        }
        return false;
    }
} //# sourceMappingURL=ignore.js.map

;// CONCATENATED MODULE: ./node_modules/glob/dist/mjs/processor.js
// synchronous utility for filtering entries and calculating subwalks

/**
 * A cache of which patterns have been processed for a given Path
 */ class HasWalkedCache {
    constructor(store = new Map()){
        this.store = store;
    }
    copy() {
        return new HasWalkedCache(new Map(this.store));
    }
    hasWalked(target, pattern) {
        return this.store.get(target.fullpath())?.has(pattern.globString());
    }
    storeWalked(target, pattern) {
        const fullpath = target.fullpath();
        const cached = this.store.get(fullpath);
        if (cached) cached.add(pattern.globString());
        else this.store.set(fullpath, new Set([
            pattern.globString()
        ]));
    }
}
/**
 * A record of which paths have been matched in a given walk step,
 * and whether they only are considered a match if they are a directory,
 * and whether their absolute or relative path should be returned.
 */ class MatchRecord {
    add(target, absolute, ifDir) {
        const n = (absolute ? 2 : 0) | (ifDir ? 1 : 0);
        const current = this.store.get(target);
        this.store.set(target, current === undefined ? n : n & current);
    }
    // match, absolute, ifdir
    entries() {
        return [
            ...this.store.entries()
        ].map(([path, n])=>[
                path,
                !!(n & 2),
                !!(n & 1)
            ]);
    }
    constructor(){
        this.store = new Map();
    }
}
/**
 * A collection of patterns that must be processed in a subsequent step
 * for a given path.
 */ class SubWalks {
    add(target, pattern) {
        if (!target.canReaddir()) {
            return;
        }
        const subs = this.store.get(target);
        if (subs) {
            if (!subs.find((p)=>p.globString() === pattern.globString())) {
                subs.push(pattern);
            }
        } else this.store.set(target, [
            pattern
        ]);
    }
    get(target) {
        const subs = this.store.get(target);
        /* c8 ignore start */ if (!subs) {
            throw new Error("attempting to walk unknown path");
        }
        /* c8 ignore stop */ return subs;
    }
    entries() {
        return this.keys().map((k)=>[
                k,
                this.store.get(k)
            ]);
    }
    keys() {
        return [
            ...this.store.keys()
        ].filter((t)=>t.canReaddir());
    }
    constructor(){
        this.store = new Map();
    }
}
/**
 * The class that processes patterns for a given path.
 *
 * Handles child entry filtering, and determining whether a path's
 * directory contents must be read.
 */ class Processor {
    constructor(opts, hasWalkedCache){
        this.matches = new MatchRecord();
        this.subwalks = new SubWalks();
        this.opts = opts;
        this.follow = !!opts.follow;
        this.dot = !!opts.dot;
        this.hasWalkedCache = hasWalkedCache ? hasWalkedCache.copy() : new HasWalkedCache();
    }
    processPatterns(target, patterns) {
        this.patterns = patterns;
        const processingSet = patterns.map((p)=>[
                target,
                p
            ]);
        // map of paths to the magic-starting subwalks they need to walk
        // first item in patterns is the filter
        for (let [t, pattern] of processingSet){
            this.hasWalkedCache.storeWalked(t, pattern);
            const root = pattern.root();
            const absolute = pattern.isAbsolute() && this.opts.absolute !== false;
            // start absolute patterns at root
            if (root) {
                t = t.resolve(root === "/" && this.opts.root !== undefined ? this.opts.root : root);
                const rest = pattern.rest();
                if (!rest) {
                    this.matches.add(t, true, false);
                    continue;
                } else {
                    pattern = rest;
                }
            }
            if (t.isENOENT()) continue;
            let p;
            let rest;
            let changed = false;
            while(typeof (p = pattern.pattern()) === "string" && (rest = pattern.rest())){
                const c = t.resolve(p);
                // we can be reasonably sure that .. is a readable dir
                if (c.isUnknown() && p !== "..") break;
                t = c;
                pattern = rest;
                changed = true;
            }
            p = pattern.pattern();
            rest = pattern.rest();
            if (changed) {
                if (this.hasWalkedCache.hasWalked(t, pattern)) continue;
                this.hasWalkedCache.storeWalked(t, pattern);
            }
            // now we have either a final string for a known entry,
            // more strings for an unknown entry,
            // or a pattern starting with magic, mounted on t.
            if (typeof p === "string") {
                // must be final entry
                if (!rest) {
                    const ifDir = p === ".." || p === "" || p === ".";
                    this.matches.add(t.resolve(p), absolute, ifDir);
                } else {
                    this.subwalks.add(t, pattern);
                }
                continue;
            } else if (p === GLOBSTAR) {
                // if no rest, match and subwalk pattern
                // if rest, process rest and subwalk pattern
                // if it's a symlink, but we didn't get here by way of a
                // globstar match (meaning it's the first time THIS globstar
                // has traversed a symlink), then we follow it. Otherwise, stop.
                if (!t.isSymbolicLink() || this.follow || pattern.checkFollowGlobstar()) {
                    this.subwalks.add(t, pattern);
                }
                const rp = rest?.pattern();
                const rrest = rest?.rest();
                if (!rest || (rp === "" || rp === ".") && !rrest) {
                    // only HAS to be a dir if it ends in **/ or **/.
                    // but ending in ** will match files as well.
                    this.matches.add(t, absolute, rp === "" || rp === ".");
                } else {
                    if (rp === "..") {
                        // this would mean you're matching **/.. at the fs root,
                        // and no thanks, I'm not gonna test that specific case.
                        /* c8 ignore start */ const tp = t.parent || t;
                        /* c8 ignore stop */ if (!rrest) this.matches.add(tp, absolute, true);
                        else if (!this.hasWalkedCache.hasWalked(tp, rrest)) {
                            this.subwalks.add(tp, rrest);
                        }
                    }
                }
            } else if (p instanceof RegExp) {
                this.subwalks.add(t, pattern);
            }
        }
        return this;
    }
    subwalkTargets() {
        return this.subwalks.keys();
    }
    child() {
        return new Processor(this.opts, this.hasWalkedCache);
    }
    // return a new Processor containing the subwalks for each
    // child entry, and a set of matches, and
    // a hasWalkedCache that's a copy of this one
    // then we're going to call
    filterEntries(parent, entries) {
        const patterns = this.subwalks.get(parent);
        // put matches and entry walks into the results processor
        const results = this.child();
        for (const e of entries){
            for (const pattern of patterns){
                const absolute = pattern.isAbsolute();
                const p = pattern.pattern();
                const rest = pattern.rest();
                if (p === GLOBSTAR) {
                    results.testGlobstar(e, pattern, rest, absolute);
                } else if (p instanceof RegExp) {
                    results.testRegExp(e, p, rest, absolute);
                } else {
                    results.testString(e, p, rest, absolute);
                }
            }
        }
        return results;
    }
    testGlobstar(e, pattern, rest, absolute) {
        if (this.dot || !e.name.startsWith(".")) {
            if (!pattern.hasMore()) {
                this.matches.add(e, absolute, false);
            }
            if (e.canReaddir()) {
                // if we're in follow mode or it's not a symlink, just keep
                // testing the same pattern. If there's more after the globstar,
                // then this symlink consumes the globstar. If not, then we can
                // follow at most ONE symlink along the way, so we mark it, which
                // also checks to ensure that it wasn't already marked.
                if (this.follow || !e.isSymbolicLink()) {
                    this.subwalks.add(e, pattern);
                } else if (e.isSymbolicLink()) {
                    if (rest && pattern.checkFollowGlobstar()) {
                        this.subwalks.add(e, rest);
                    } else if (pattern.markFollowGlobstar()) {
                        this.subwalks.add(e, pattern);
                    }
                }
            }
        }
        // if the NEXT thing matches this entry, then also add
        // the rest.
        if (rest) {
            const rp = rest.pattern();
            if (typeof rp === "string" && // dots and empty were handled already
            rp !== ".." && rp !== "" && rp !== ".") {
                this.testString(e, rp, rest.rest(), absolute);
            } else if (rp === "..") {
                /* c8 ignore start */ const ep = e.parent || e;
                /* c8 ignore stop */ this.subwalks.add(ep, rest);
            } else if (rp instanceof RegExp) {
                this.testRegExp(e, rp, rest.rest(), absolute);
            }
        }
    }
    testRegExp(e, p, rest, absolute) {
        if (!p.test(e.name)) return;
        if (!rest) {
            this.matches.add(e, absolute, false);
        } else {
            this.subwalks.add(e, rest);
        }
    }
    testString(e, p, rest, absolute) {
        // should never happen?
        if (!e.isNamed(p)) return;
        if (!rest) {
            this.matches.add(e, absolute, false);
        } else {
            this.subwalks.add(e, rest);
        }
    }
} //# sourceMappingURL=processor.js.map

;// CONCATENATED MODULE: ./node_modules/glob/dist/mjs/walker.js
/**
 * Single-use utility classes to provide functionality to the {@link Glob}
 * methods.
 *
 * @module
 */ 


const makeIgnore = (ignore, opts)=>typeof ignore === "string" ? new Ignore([
        ignore
    ], opts) : Array.isArray(ignore) ? new Ignore(ignore, opts) : ignore;
/**
 * basic walking utilities that all the glob walker types use
 */ class GlobUtil {
    #onResume;
    #ignore;
    #sep;
    constructor(patterns, path, opts){
        this.seen = new Set();
        this.paused = false;
        this.aborted = false;
        this.#onResume = [];
        this.patterns = patterns;
        this.path = path;
        this.opts = opts;
        this.#sep = !opts.posix && opts.platform === "win32" ? "\\" : "/";
        if (opts.ignore) {
            this.#ignore = makeIgnore(opts.ignore, opts);
        }
        // ignore, always set with maxDepth, but it's optional on the
        // GlobOptions type
        /* c8 ignore start */ this.maxDepth = opts.maxDepth || Infinity;
        /* c8 ignore stop */ if (opts.signal) {
            this.signal = opts.signal;
            this.signal.addEventListener("abort", ()=>{
                this.#onResume.length = 0;
            });
        }
    }
    #ignored(path) {
        return this.seen.has(path) || !!this.#ignore?.ignored?.(path);
    }
    #childrenIgnored(path) {
        return !!this.#ignore?.childrenIgnored?.(path);
    }
    // backpressure mechanism
    pause() {
        this.paused = true;
    }
    resume() {
        /* c8 ignore start */ if (this.signal?.aborted) return;
        /* c8 ignore stop */ this.paused = false;
        let fn = undefined;
        while(!this.paused && (fn = this.#onResume.shift())){
            fn();
        }
    }
    onResume(fn) {
        if (this.signal?.aborted) return;
        /* c8 ignore start */ if (!this.paused) {
            fn();
        } else {
            /* c8 ignore stop */ this.#onResume.push(fn);
        }
    }
    // do the requisite realpath/stat checking, and return the path
    // to add or undefined to filter it out.
    async matchCheck(e, ifDir) {
        if (ifDir && this.opts.nodir) return undefined;
        let rpc;
        if (this.opts.realpath) {
            rpc = e.realpathCached() || await e.realpath();
            if (!rpc) return undefined;
            e = rpc;
        }
        const needStat = e.isUnknown() || this.opts.stat;
        return this.matchCheckTest(needStat ? await e.lstat() : e, ifDir);
    }
    matchCheckTest(e, ifDir) {
        return e && (this.maxDepth === Infinity || e.depth() <= this.maxDepth) && (!ifDir || e.canReaddir()) && (!this.opts.nodir || !e.isDirectory()) && !this.#ignored(e) ? e : undefined;
    }
    matchCheckSync(e, ifDir) {
        if (ifDir && this.opts.nodir) return undefined;
        let rpc;
        if (this.opts.realpath) {
            rpc = e.realpathCached() || e.realpathSync();
            if (!rpc) return undefined;
            e = rpc;
        }
        const needStat = e.isUnknown() || this.opts.stat;
        return this.matchCheckTest(needStat ? e.lstatSync() : e, ifDir);
    }
    matchFinish(e, absolute) {
        if (this.#ignored(e)) return;
        const abs = this.opts.absolute === undefined ? absolute : this.opts.absolute;
        this.seen.add(e);
        const mark = this.opts.mark && e.isDirectory() ? this.#sep : "";
        // ok, we have what we need!
        if (this.opts.withFileTypes) {
            this.matchEmit(e);
        } else if (abs) {
            const abs = this.opts.posix ? e.fullpathPosix() : e.fullpath();
            this.matchEmit(abs + mark);
        } else {
            const rel = this.opts.posix ? e.relativePosix() : e.relative();
            const pre = this.opts.dotRelative && !rel.startsWith(".." + this.#sep) ? "." + this.#sep : "";
            this.matchEmit(!rel ? "." + mark : pre + rel + mark);
        }
    }
    async match(e, absolute, ifDir) {
        const p = await this.matchCheck(e, ifDir);
        if (p) this.matchFinish(p, absolute);
    }
    matchSync(e, absolute, ifDir) {
        const p = this.matchCheckSync(e, ifDir);
        if (p) this.matchFinish(p, absolute);
    }
    walkCB(target, patterns, cb) {
        /* c8 ignore start */ if (this.signal?.aborted) cb();
        /* c8 ignore stop */ this.walkCB2(target, patterns, new Processor(this.opts), cb);
    }
    walkCB2(target, patterns, processor, cb) {
        if (this.#childrenIgnored(target)) return cb();
        if (this.signal?.aborted) cb();
        if (this.paused) {
            this.onResume(()=>this.walkCB2(target, patterns, processor, cb));
            return;
        }
        processor.processPatterns(target, patterns);
        // done processing.  all of the above is sync, can be abstracted out.
        // subwalks is a map of paths to the entry filters they need
        // matches is a map of paths to [absolute, ifDir] tuples.
        let tasks = 1;
        const next = ()=>{
            if (--tasks === 0) cb();
        };
        for (const [m, absolute, ifDir] of processor.matches.entries()){
            if (this.#ignored(m)) continue;
            tasks++;
            this.match(m, absolute, ifDir).then(()=>next());
        }
        for (const t of processor.subwalkTargets()){
            if (this.maxDepth !== Infinity && t.depth() >= this.maxDepth) {
                continue;
            }
            tasks++;
            const childrenCached = t.readdirCached();
            if (t.calledReaddir()) this.walkCB3(t, childrenCached, processor, next);
            else {
                t.readdirCB((_, entries)=>this.walkCB3(t, entries, processor, next), true);
            }
        }
        next();
    }
    walkCB3(target, entries, processor, cb) {
        processor = processor.filterEntries(target, entries);
        let tasks = 1;
        const next = ()=>{
            if (--tasks === 0) cb();
        };
        for (const [m, absolute, ifDir] of processor.matches.entries()){
            if (this.#ignored(m)) continue;
            tasks++;
            this.match(m, absolute, ifDir).then(()=>next());
        }
        for (const [target, patterns] of processor.subwalks.entries()){
            tasks++;
            this.walkCB2(target, patterns, processor.child(), next);
        }
        next();
    }
    walkCBSync(target, patterns, cb) {
        /* c8 ignore start */ if (this.signal?.aborted) cb();
        /* c8 ignore stop */ this.walkCB2Sync(target, patterns, new Processor(this.opts), cb);
    }
    walkCB2Sync(target, patterns, processor, cb) {
        if (this.#childrenIgnored(target)) return cb();
        if (this.signal?.aborted) cb();
        if (this.paused) {
            this.onResume(()=>this.walkCB2Sync(target, patterns, processor, cb));
            return;
        }
        processor.processPatterns(target, patterns);
        // done processing.  all of the above is sync, can be abstracted out.
        // subwalks is a map of paths to the entry filters they need
        // matches is a map of paths to [absolute, ifDir] tuples.
        let tasks = 1;
        const next = ()=>{
            if (--tasks === 0) cb();
        };
        for (const [m, absolute, ifDir] of processor.matches.entries()){
            if (this.#ignored(m)) continue;
            this.matchSync(m, absolute, ifDir);
        }
        for (const t of processor.subwalkTargets()){
            if (this.maxDepth !== Infinity && t.depth() >= this.maxDepth) {
                continue;
            }
            tasks++;
            const children = t.readdirSync();
            this.walkCB3Sync(t, children, processor, next);
        }
        next();
    }
    walkCB3Sync(target, entries, processor, cb) {
        processor = processor.filterEntries(target, entries);
        let tasks = 1;
        const next = ()=>{
            if (--tasks === 0) cb();
        };
        for (const [m, absolute, ifDir] of processor.matches.entries()){
            if (this.#ignored(m)) continue;
            this.matchSync(m, absolute, ifDir);
        }
        for (const [target, patterns] of processor.subwalks.entries()){
            tasks++;
            this.walkCB2Sync(target, patterns, processor.child(), next);
        }
        next();
    }
}
class GlobWalker extends GlobUtil {
    constructor(patterns, path, opts){
        super(patterns, path, opts);
        this.matches = new Set();
    }
    matchEmit(e) {
        this.matches.add(e);
    }
    async walk() {
        if (this.signal?.aborted) throw this.signal.reason;
        if (this.path.isUnknown()) {
            await this.path.lstat();
        }
        await new Promise((res, rej)=>{
            this.walkCB(this.path, this.patterns, ()=>{
                if (this.signal?.aborted) {
                    rej(this.signal.reason);
                } else {
                    res(this.matches);
                }
            });
        });
        return this.matches;
    }
    walkSync() {
        if (this.signal?.aborted) throw this.signal.reason;
        if (this.path.isUnknown()) {
            this.path.lstatSync();
        }
        // nothing for the callback to do, because this never pauses
        this.walkCBSync(this.path, this.patterns, ()=>{
            if (this.signal?.aborted) throw this.signal.reason;
        });
        return this.matches;
    }
}
class GlobStream extends GlobUtil {
    constructor(patterns, path, opts){
        super(patterns, path, opts);
        this.results = new mjs_Minipass({
            signal: this.signal,
            objectMode: true
        });
        this.results.on("drain", ()=>this.resume());
        this.results.on("resume", ()=>this.resume());
    }
    matchEmit(e) {
        this.results.write(e);
        if (!this.results.flowing) this.pause();
    }
    stream() {
        const target = this.path;
        if (target.isUnknown()) {
            target.lstat().then(()=>{
                this.walkCB(target, this.patterns, ()=>this.results.end());
            });
        } else {
            this.walkCB(target, this.patterns, ()=>this.results.end());
        }
        return this.results;
    }
    streamSync() {
        if (this.path.isUnknown()) {
            this.path.lstatSync();
        }
        this.walkCBSync(this.path, this.patterns, ()=>this.results.end());
        return this.results;
    }
} //# sourceMappingURL=walker.js.map

;// CONCATENATED MODULE: ./node_modules/glob/dist/mjs/glob.js





// if no process global, just call it linux.
// so we default to case-sensitive, / separators
const glob_defaultPlatform = typeof process === "object" && process && typeof process.platform === "string" ? process.platform : "linux";
/**
 * An object that can perform glob pattern traversals.
 */ class Glob {
    /**
     * All options are stored as properties on the `Glob` object.
     *
     * See {@link GlobOptions} for full options descriptions.
     *
     * Note that a previous `Glob` object can be passed as the
     * `GlobOptions` to another `Glob` instantiation to re-use settings
     * and caches with a new pattern.
     *
     * Traversal functions can be called multiple times to run the walk
     * again.
     */ constructor(pattern, opts){
        /* c8 ignore start */ if (!opts) throw new TypeError("glob options required");
        /* c8 ignore stop */ this.withFileTypes = !!opts.withFileTypes;
        this.signal = opts.signal;
        this.follow = !!opts.follow;
        this.dot = !!opts.dot;
        this.dotRelative = !!opts.dotRelative;
        this.nodir = !!opts.nodir;
        this.mark = !!opts.mark;
        if (!opts.cwd) {
            this.cwd = "";
        } else if (opts.cwd instanceof URL || opts.cwd.startsWith("file://")) {
            opts.cwd = (0,external_url_.fileURLToPath)(opts.cwd);
        }
        this.cwd = opts.cwd || "";
        this.root = opts.root;
        this.magicalBraces = !!opts.magicalBraces;
        this.nobrace = !!opts.nobrace;
        this.noext = !!opts.noext;
        this.realpath = !!opts.realpath;
        this.absolute = opts.absolute;
        this.noglobstar = !!opts.noglobstar;
        this.matchBase = !!opts.matchBase;
        this.maxDepth = typeof opts.maxDepth === "number" ? opts.maxDepth : Infinity;
        this.stat = !!opts.stat;
        this.ignore = opts.ignore;
        if (this.withFileTypes && this.absolute !== undefined) {
            throw new Error("cannot set absolute and withFileTypes:true");
        }
        if (typeof pattern === "string") {
            pattern = [
                pattern
            ];
        }
        this.windowsPathsNoEscape = !!opts.windowsPathsNoEscape || opts.allowWindowsEscape === false;
        if (this.windowsPathsNoEscape) {
            pattern = pattern.map((p)=>p.replace(/\\/g, "/"));
        }
        if (this.matchBase) {
            if (opts.noglobstar) {
                throw new TypeError("base matching requires globstar");
            }
            pattern = pattern.map((p)=>p.includes("/") ? p : `./**/${p}`);
        }
        this.pattern = pattern;
        this.platform = opts.platform || glob_defaultPlatform;
        this.opts = {
            ...opts,
            platform: this.platform
        };
        if (opts.scurry) {
            this.scurry = opts.scurry;
            if (opts.nocase !== undefined && opts.nocase !== opts.scurry.nocase) {
                throw new Error("nocase option contradicts provided scurry option");
            }
        } else {
            const Scurry = opts.platform === "win32" ? PathScurryWin32 : opts.platform === "darwin" ? PathScurryDarwin : opts.platform ? PathScurryPosix : PathScurry;
            this.scurry = new Scurry(this.cwd, {
                nocase: opts.nocase,
                fs: opts.fs
            });
        }
        this.nocase = this.scurry.nocase;
        // If you do nocase:true on a case-sensitive file system, then
        // we need to use regexps instead of strings for non-magic
        // path portions, because statting `aBc` won't return results
        // for the file `AbC` for example.
        const nocaseMagicOnly = this.platform === "darwin" || this.platform === "win32";
        const mmo = {
            // default nocase based on platform
            ...opts,
            dot: this.dot,
            matchBase: this.matchBase,
            nobrace: this.nobrace,
            nocase: this.nocase,
            nocaseMagicOnly,
            nocomment: true,
            noext: this.noext,
            nonegate: true,
            optimizationLevel: 2,
            platform: this.platform,
            windowsPathsNoEscape: this.windowsPathsNoEscape,
            debug: !!this.opts.debug
        };
        const mms = this.pattern.map((p)=>new Minimatch(p, mmo));
        const [matchSet, globParts] = mms.reduce((set, m)=>{
            set[0].push(...m.set);
            set[1].push(...m.globParts);
            return set;
        }, [
            [],
            []
        ]);
        this.patterns = matchSet.map((set, i)=>{
            return new Pattern(set, globParts[i], 0, this.platform);
        });
    }
    async walk() {
        // Walkers always return array of Path objects, so we just have to
        // coerce them into the right shape.  It will have already called
        // realpath() if the option was set to do so, so we know that's cached.
        // start out knowing the cwd, at least
        return [
            ...await new GlobWalker(this.patterns, this.scurry.cwd, {
                ...this.opts,
                maxDepth: this.maxDepth !== Infinity ? this.maxDepth + this.scurry.cwd.depth() : Infinity,
                platform: this.platform,
                nocase: this.nocase
            }).walk()
        ];
    }
    walkSync() {
        return [
            ...new GlobWalker(this.patterns, this.scurry.cwd, {
                ...this.opts,
                maxDepth: this.maxDepth !== Infinity ? this.maxDepth + this.scurry.cwd.depth() : Infinity,
                platform: this.platform,
                nocase: this.nocase
            }).walkSync()
        ];
    }
    stream() {
        return new GlobStream(this.patterns, this.scurry.cwd, {
            ...this.opts,
            maxDepth: this.maxDepth !== Infinity ? this.maxDepth + this.scurry.cwd.depth() : Infinity,
            platform: this.platform,
            nocase: this.nocase
        }).stream();
    }
    streamSync() {
        return new GlobStream(this.patterns, this.scurry.cwd, {
            ...this.opts,
            maxDepth: this.maxDepth !== Infinity ? this.maxDepth + this.scurry.cwd.depth() : Infinity,
            platform: this.platform,
            nocase: this.nocase
        }).streamSync();
    }
    /**
     * Default sync iteration function. Returns a Generator that
     * iterates over the results.
     */ iterateSync() {
        return this.streamSync()[Symbol.iterator]();
    }
    [Symbol.iterator]() {
        return this.iterateSync();
    }
    /**
     * Default async iteration function. Returns an AsyncGenerator that
     * iterates over the results.
     */ iterate() {
        return this.stream()[Symbol.asyncIterator]();
    }
    [Symbol.asyncIterator]() {
        return this.iterate();
    }
} //# sourceMappingURL=glob.js.map

;// CONCATENATED MODULE: ./node_modules/glob/dist/mjs/has-magic.js

/**
 * Return true if the patterns provided contain any magic glob characters,
 * given the options provided.
 *
 * Brace expansion is not considered "magic" unless the `magicalBraces` option
 * is set, as brace expansion just turns one string into an array of strings.
 * So a pattern like `'x{a,b}y'` would return `false`, because `'xay'` and
 * `'xby'` both do not contain any magic glob characters, and it's treated the
 * same as if you had called it on `['xay', 'xby']`. When `magicalBraces:true`
 * is in the options, brace expansion _is_ treated as a pattern having magic.
 */ const hasMagic = (pattern, options = {})=>{
    if (!Array.isArray(pattern)) {
        pattern = [
            pattern
        ];
    }
    for (const p of pattern){
        if (new Minimatch(p, options).hasMagic()) return true;
    }
    return false;
}; //# sourceMappingURL=has-magic.js.map

;// CONCATENATED MODULE: ./node_modules/glob/dist/mjs/index.js



function globStreamSync(pattern, options = {}) {
    return new Glob(pattern, options).streamSync();
}
function globStream(pattern, options = {}) {
    return new Glob(pattern, options).stream();
}
function globSync(pattern, options = {}) {
    return new Glob(pattern, options).walkSync();
}
async function glob_(pattern, options = {}) {
    return new Glob(pattern, options).walk();
}
function globIterateSync(pattern, options = {}) {
    return new Glob(pattern, options).iterateSync();
}
function globIterate(pattern, options = {}) {
    return new Glob(pattern, options).iterate();
}
// aliases: glob.sync.stream() glob.stream.sync() glob.sync() etc
const streamSync = globStreamSync;
const stream = Object.assign(globStream, {
    sync: globStreamSync
});
const iterateSync = globIterateSync;
const iterate = Object.assign(globIterate, {
    sync: globIterateSync
});
const sync = Object.assign(globSync, {
    stream: globStreamSync,
    iterate: globIterateSync
});
/* c8 ignore start */ 


/* c8 ignore stop */ const glob = Object.assign(glob_, {
    glob: glob_,
    globSync,
    sync,
    globStream,
    stream,
    globStreamSync,
    streamSync,
    globIterate,
    iterate,
    globIterateSync,
    iterateSync,
    Glob: Glob,
    hasMagic: hasMagic,
    escape: escape_escape,
    unescape: unescape_unescape
});
glob.glob = glob; //# sourceMappingURL=index.js.map


/***/ }),

/***/ 5529:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  Z: () => (/* binding */ rehypeHighlight)
});

;// CONCATENATED MODULE: ./node_modules/highlight.js/es/languages/arduino.js
/*
Language: C++
Category: common, system
Website: https://isocpp.org
*/ /** @type LanguageFn */ function cPlusPlus(hljs) {
    const regex = hljs.regex;
    // added for historic reasons because `hljs.C_LINE_COMMENT_MODE` does
    // not include such support nor can we be sure all the grammars depending
    // on it would desire this behavior
    const C_LINE_COMMENT_MODE = hljs.COMMENT("//", "$", {
        contains: [
            {
                begin: /\\\n/
            }
        ]
    });
    const DECLTYPE_AUTO_RE = "decltype\\(auto\\)";
    const NAMESPACE_RE = "[a-zA-Z_]\\w*::";
    const TEMPLATE_ARGUMENT_RE = "<[^<>]+>";
    const FUNCTION_TYPE_RE = "(?!struct)(" + DECLTYPE_AUTO_RE + "|" + regex.optional(NAMESPACE_RE) + "[a-zA-Z_]\\w*" + regex.optional(TEMPLATE_ARGUMENT_RE) + ")";
    const CPP_PRIMITIVE_TYPES = {
        className: "type",
        begin: "\\b[a-z\\d_]*_t\\b"
    };
    // https://en.cppreference.com/w/cpp/language/escape
    // \\ \x \xFF \u2837 \u00323747 \374
    const CHARACTER_ESCAPES = "\\\\(x[0-9A-Fa-f]{2}|u[0-9A-Fa-f]{4,8}|[0-7]{3}|\\S)";
    const STRINGS = {
        className: "string",
        variants: [
            {
                begin: '(u8?|U|L)?"',
                end: '"',
                illegal: "\\n",
                contains: [
                    hljs.BACKSLASH_ESCAPE
                ]
            },
            {
                begin: "(u8?|U|L)?'(" + CHARACTER_ESCAPES + "|.)",
                end: "'",
                illegal: "."
            },
            hljs.END_SAME_AS_BEGIN({
                begin: /(?:u8?|U|L)?R"([^()\\ ]{0,16})\(/,
                end: /\)([^()\\ ]{0,16})"/
            })
        ]
    };
    const NUMBERS = {
        className: "number",
        variants: [
            {
                begin: "\\b(0b[01']+)"
            },
            {
                begin: "(-?)\\b([\\d']+(\\.[\\d']*)?|\\.[\\d']+)((ll|LL|l|L)(u|U)?|(u|U)(ll|LL|l|L)?|f|F|b|B)"
            },
            {
                begin: "(-?)(\\b0[xX][a-fA-F0-9']+|(\\b[\\d']+(\\.[\\d']*)?|\\.[\\d']+)([eE][-+]?[\\d']+)?)"
            }
        ],
        relevance: 0
    };
    const PREPROCESSOR = {
        className: "meta",
        begin: /#\s*[a-z]+\b/,
        end: /$/,
        keywords: {
            keyword: "if else elif endif define undef warning error line " + "pragma _Pragma ifdef ifndef include"
        },
        contains: [
            {
                begin: /\\\n/,
                relevance: 0
            },
            hljs.inherit(STRINGS, {
                className: "string"
            }),
            {
                className: "string",
                begin: /<.*?>/
            },
            C_LINE_COMMENT_MODE,
            hljs.C_BLOCK_COMMENT_MODE
        ]
    };
    const TITLE_MODE = {
        className: "title",
        begin: regex.optional(NAMESPACE_RE) + hljs.IDENT_RE,
        relevance: 0
    };
    const FUNCTION_TITLE = regex.optional(NAMESPACE_RE) + hljs.IDENT_RE + "\\s*\\(";
    // https://en.cppreference.com/w/cpp/keyword
    const RESERVED_KEYWORDS = [
        "alignas",
        "alignof",
        "and",
        "and_eq",
        "asm",
        "atomic_cancel",
        "atomic_commit",
        "atomic_noexcept",
        "auto",
        "bitand",
        "bitor",
        "break",
        "case",
        "catch",
        "class",
        "co_await",
        "co_return",
        "co_yield",
        "compl",
        "concept",
        "const_cast|10",
        "consteval",
        "constexpr",
        "constinit",
        "continue",
        "decltype",
        "default",
        "delete",
        "do",
        "dynamic_cast|10",
        "else",
        "enum",
        "explicit",
        "export",
        "extern",
        "false",
        "final",
        "for",
        "friend",
        "goto",
        "if",
        "import",
        "inline",
        "module",
        "mutable",
        "namespace",
        "new",
        "noexcept",
        "not",
        "not_eq",
        "nullptr",
        "operator",
        "or",
        "or_eq",
        "override",
        "private",
        "protected",
        "public",
        "reflexpr",
        "register",
        "reinterpret_cast|10",
        "requires",
        "return",
        "sizeof",
        "static_assert",
        "static_cast|10",
        "struct",
        "switch",
        "synchronized",
        "template",
        "this",
        "thread_local",
        "throw",
        "transaction_safe",
        "transaction_safe_dynamic",
        "true",
        "try",
        "typedef",
        "typeid",
        "typename",
        "union",
        "using",
        "virtual",
        "volatile",
        "while",
        "xor",
        "xor_eq"
    ];
    // https://en.cppreference.com/w/cpp/keyword
    const RESERVED_TYPES = [
        "bool",
        "char",
        "char16_t",
        "char32_t",
        "char8_t",
        "double",
        "float",
        "int",
        "long",
        "short",
        "void",
        "wchar_t",
        "unsigned",
        "signed",
        "const",
        "static"
    ];
    const TYPE_HINTS = [
        "any",
        "auto_ptr",
        "barrier",
        "binary_semaphore",
        "bitset",
        "complex",
        "condition_variable",
        "condition_variable_any",
        "counting_semaphore",
        "deque",
        "false_type",
        "future",
        "imaginary",
        "initializer_list",
        "istringstream",
        "jthread",
        "latch",
        "lock_guard",
        "multimap",
        "multiset",
        "mutex",
        "optional",
        "ostringstream",
        "packaged_task",
        "pair",
        "promise",
        "priority_queue",
        "queue",
        "recursive_mutex",
        "recursive_timed_mutex",
        "scoped_lock",
        "set",
        "shared_future",
        "shared_lock",
        "shared_mutex",
        "shared_timed_mutex",
        "shared_ptr",
        "stack",
        "string_view",
        "stringstream",
        "timed_mutex",
        "thread",
        "true_type",
        "tuple",
        "unique_lock",
        "unique_ptr",
        "unordered_map",
        "unordered_multimap",
        "unordered_multiset",
        "unordered_set",
        "variant",
        "vector",
        "weak_ptr",
        "wstring",
        "wstring_view"
    ];
    const FUNCTION_HINTS = [
        "abort",
        "abs",
        "acos",
        "apply",
        "as_const",
        "asin",
        "atan",
        "atan2",
        "calloc",
        "ceil",
        "cerr",
        "cin",
        "clog",
        "cos",
        "cosh",
        "cout",
        "declval",
        "endl",
        "exchange",
        "exit",
        "exp",
        "fabs",
        "floor",
        "fmod",
        "forward",
        "fprintf",
        "fputs",
        "free",
        "frexp",
        "fscanf",
        "future",
        "invoke",
        "isalnum",
        "isalpha",
        "iscntrl",
        "isdigit",
        "isgraph",
        "islower",
        "isprint",
        "ispunct",
        "isspace",
        "isupper",
        "isxdigit",
        "labs",
        "launder",
        "ldexp",
        "log",
        "log10",
        "make_pair",
        "make_shared",
        "make_shared_for_overwrite",
        "make_tuple",
        "make_unique",
        "malloc",
        "memchr",
        "memcmp",
        "memcpy",
        "memset",
        "modf",
        "move",
        "pow",
        "printf",
        "putchar",
        "puts",
        "realloc",
        "scanf",
        "sin",
        "sinh",
        "snprintf",
        "sprintf",
        "sqrt",
        "sscanf",
        "std",
        "stderr",
        "stdin",
        "stdout",
        "strcat",
        "strchr",
        "strcmp",
        "strcpy",
        "strcspn",
        "strlen",
        "strncat",
        "strncmp",
        "strncpy",
        "strpbrk",
        "strrchr",
        "strspn",
        "strstr",
        "swap",
        "tan",
        "tanh",
        "terminate",
        "to_underlying",
        "tolower",
        "toupper",
        "vfprintf",
        "visit",
        "vprintf",
        "vsprintf"
    ];
    const LITERALS = [
        "NULL",
        "false",
        "nullopt",
        "nullptr",
        "true"
    ];
    // https://en.cppreference.com/w/cpp/keyword
    const BUILT_IN = [
        "_Pragma"
    ];
    const CPP_KEYWORDS = {
        type: RESERVED_TYPES,
        keyword: RESERVED_KEYWORDS,
        literal: LITERALS,
        built_in: BUILT_IN,
        _type_hints: TYPE_HINTS
    };
    const FUNCTION_DISPATCH = {
        className: "function.dispatch",
        relevance: 0,
        keywords: {
            // Only for relevance, not highlighting.
            _hint: FUNCTION_HINTS
        },
        begin: regex.concat(/\b/, /(?!decltype)/, /(?!if)/, /(?!for)/, /(?!switch)/, /(?!while)/, hljs.IDENT_RE, regex.lookahead(/(<[^<>]+>|)\s*\(/))
    };
    const EXPRESSION_CONTAINS = [
        FUNCTION_DISPATCH,
        PREPROCESSOR,
        CPP_PRIMITIVE_TYPES,
        C_LINE_COMMENT_MODE,
        hljs.C_BLOCK_COMMENT_MODE,
        NUMBERS,
        STRINGS
    ];
    const EXPRESSION_CONTEXT = {
        // This mode covers expression context where we can't expect a function
        // definition and shouldn't highlight anything that looks like one:
        // `return some()`, `else if()`, `(x*sum(1, 2))`
        variants: [
            {
                begin: /=/,
                end: /;/
            },
            {
                begin: /\(/,
                end: /\)/
            },
            {
                beginKeywords: "new throw return else",
                end: /;/
            }
        ],
        keywords: CPP_KEYWORDS,
        contains: EXPRESSION_CONTAINS.concat([
            {
                begin: /\(/,
                end: /\)/,
                keywords: CPP_KEYWORDS,
                contains: EXPRESSION_CONTAINS.concat([
                    "self"
                ]),
                relevance: 0
            }
        ]),
        relevance: 0
    };
    const FUNCTION_DECLARATION = {
        className: "function",
        begin: "(" + FUNCTION_TYPE_RE + "[\\*&\\s]+)+" + FUNCTION_TITLE,
        returnBegin: true,
        end: /[{;=]/,
        excludeEnd: true,
        keywords: CPP_KEYWORDS,
        illegal: /[^\w\s\*&:<>.]/,
        contains: [
            {
                begin: DECLTYPE_AUTO_RE,
                keywords: CPP_KEYWORDS,
                relevance: 0
            },
            {
                begin: FUNCTION_TITLE,
                returnBegin: true,
                contains: [
                    TITLE_MODE
                ],
                relevance: 0
            },
            // needed because we do not have look-behind on the below rule
            // to prevent it from grabbing the final : in a :: pair
            {
                begin: /::/,
                relevance: 0
            },
            // initializers
            {
                begin: /:/,
                endsWithParent: true,
                contains: [
                    STRINGS,
                    NUMBERS
                ]
            },
            // allow for multiple declarations, e.g.:
            // extern void f(int), g(char);
            {
                relevance: 0,
                match: /,/
            },
            {
                className: "params",
                begin: /\(/,
                end: /\)/,
                keywords: CPP_KEYWORDS,
                relevance: 0,
                contains: [
                    C_LINE_COMMENT_MODE,
                    hljs.C_BLOCK_COMMENT_MODE,
                    STRINGS,
                    NUMBERS,
                    CPP_PRIMITIVE_TYPES,
                    // Count matching parentheses.
                    {
                        begin: /\(/,
                        end: /\)/,
                        keywords: CPP_KEYWORDS,
                        relevance: 0,
                        contains: [
                            "self",
                            C_LINE_COMMENT_MODE,
                            hljs.C_BLOCK_COMMENT_MODE,
                            STRINGS,
                            NUMBERS,
                            CPP_PRIMITIVE_TYPES
                        ]
                    }
                ]
            },
            CPP_PRIMITIVE_TYPES,
            C_LINE_COMMENT_MODE,
            hljs.C_BLOCK_COMMENT_MODE,
            PREPROCESSOR
        ]
    };
    return {
        name: "C++",
        aliases: [
            "cc",
            "c++",
            "h++",
            "hpp",
            "hh",
            "hxx",
            "cxx"
        ],
        keywords: CPP_KEYWORDS,
        illegal: "</",
        classNameAliases: {
            "function.dispatch": "built_in"
        },
        contains: [].concat(EXPRESSION_CONTEXT, FUNCTION_DECLARATION, FUNCTION_DISPATCH, EXPRESSION_CONTAINS, [
            PREPROCESSOR,
            {
                begin: "\\b(deque|list|queue|priority_queue|pair|stack|vector|map|set|bitset|multiset|multimap|unordered_map|unordered_set|unordered_multiset|unordered_multimap|array|tuple|optional|variant|function)\\s*<(?!<)",
                end: ">",
                keywords: CPP_KEYWORDS,
                contains: [
                    "self",
                    CPP_PRIMITIVE_TYPES
                ]
            },
            {
                begin: hljs.IDENT_RE + "::",
                keywords: CPP_KEYWORDS
            },
            {
                match: [
                    // extra complexity to deal with `enum class` and `enum struct`
                    /\b(?:enum(?:\s+(?:class|struct))?|class|struct|union)/,
                    /\s+/,
                    /\w+/
                ],
                className: {
                    1: "keyword",
                    3: "title.class"
                }
            }
        ])
    };
}
/*
Language: Arduino
Author: Stefania Mellai <s.mellai@arduino.cc>
Description: The Arduino® Language is a superset of C++. This rules are designed to highlight the Arduino® source code. For info about language see http://www.arduino.cc.
Website: https://www.arduino.cc
*/ /** @type LanguageFn */ function arduino(hljs) {
    const ARDUINO_KW = {
        type: [
            "boolean",
            "byte",
            "word",
            "String"
        ],
        built_in: [
            "KeyboardController",
            "MouseController",
            "SoftwareSerial",
            "EthernetServer",
            "EthernetClient",
            "LiquidCrystal",
            "RobotControl",
            "GSMVoiceCall",
            "EthernetUDP",
            "EsploraTFT",
            "HttpClient",
            "RobotMotor",
            "WiFiClient",
            "GSMScanner",
            "FileSystem",
            "Scheduler",
            "GSMServer",
            "YunClient",
            "YunServer",
            "IPAddress",
            "GSMClient",
            "GSMModem",
            "Keyboard",
            "Ethernet",
            "Console",
            "GSMBand",
            "Esplora",
            "Stepper",
            "Process",
            "WiFiUDP",
            "GSM_SMS",
            "Mailbox",
            "USBHost",
            "Firmata",
            "PImage",
            "Client",
            "Server",
            "GSMPIN",
            "FileIO",
            "Bridge",
            "Serial",
            "EEPROM",
            "Stream",
            "Mouse",
            "Audio",
            "Servo",
            "File",
            "Task",
            "GPRS",
            "WiFi",
            "Wire",
            "TFT",
            "GSM",
            "SPI",
            "SD"
        ],
        _hints: [
            "setup",
            "loop",
            "runShellCommandAsynchronously",
            "analogWriteResolution",
            "retrieveCallingNumber",
            "printFirmwareVersion",
            "analogReadResolution",
            "sendDigitalPortPair",
            "noListenOnLocalhost",
            "readJoystickButton",
            "setFirmwareVersion",
            "readJoystickSwitch",
            "scrollDisplayRight",
            "getVoiceCallStatus",
            "scrollDisplayLeft",
            "writeMicroseconds",
            "delayMicroseconds",
            "beginTransmission",
            "getSignalStrength",
            "runAsynchronously",
            "getAsynchronously",
            "listenOnLocalhost",
            "getCurrentCarrier",
            "readAccelerometer",
            "messageAvailable",
            "sendDigitalPorts",
            "lineFollowConfig",
            "countryNameWrite",
            "runShellCommand",
            "readStringUntil",
            "rewindDirectory",
            "readTemperature",
            "setClockDivider",
            "readLightSensor",
            "endTransmission",
            "analogReference",
            "detachInterrupt",
            "countryNameRead",
            "attachInterrupt",
            "encryptionType",
            "readBytesUntil",
            "robotNameWrite",
            "readMicrophone",
            "robotNameRead",
            "cityNameWrite",
            "userNameWrite",
            "readJoystickY",
            "readJoystickX",
            "mouseReleased",
            "openNextFile",
            "scanNetworks",
            "noInterrupts",
            "digitalWrite",
            "beginSpeaker",
            "mousePressed",
            "isActionDone",
            "mouseDragged",
            "displayLogos",
            "noAutoscroll",
            "addParameter",
            "remoteNumber",
            "getModifiers",
            "keyboardRead",
            "userNameRead",
            "waitContinue",
            "processInput",
            "parseCommand",
            "printVersion",
            "readNetworks",
            "writeMessage",
            "blinkVersion",
            "cityNameRead",
            "readMessage",
            "setDataMode",
            "parsePacket",
            "isListening",
            "setBitOrder",
            "beginPacket",
            "isDirectory",
            "motorsWrite",
            "drawCompass",
            "digitalRead",
            "clearScreen",
            "serialEvent",
            "rightToLeft",
            "setTextSize",
            "leftToRight",
            "requestFrom",
            "keyReleased",
            "compassRead",
            "analogWrite",
            "interrupts",
            "WiFiServer",
            "disconnect",
            "playMelody",
            "parseFloat",
            "autoscroll",
            "getPINUsed",
            "setPINUsed",
            "setTimeout",
            "sendAnalog",
            "readSlider",
            "analogRead",
            "beginWrite",
            "createChar",
            "motorsStop",
            "keyPressed",
            "tempoWrite",
            "readButton",
            "subnetMask",
            "debugPrint",
            "macAddress",
            "writeGreen",
            "randomSeed",
            "attachGPRS",
            "readString",
            "sendString",
            "remotePort",
            "releaseAll",
            "mouseMoved",
            "background",
            "getXChange",
            "getYChange",
            "answerCall",
            "getResult",
            "voiceCall",
            "endPacket",
            "constrain",
            "getSocket",
            "writeJSON",
            "getButton",
            "available",
            "connected",
            "findUntil",
            "readBytes",
            "exitValue",
            "readGreen",
            "writeBlue",
            "startLoop",
            "IPAddress",
            "isPressed",
            "sendSysex",
            "pauseMode",
            "gatewayIP",
            "setCursor",
            "getOemKey",
            "tuneWrite",
            "noDisplay",
            "loadImage",
            "switchPIN",
            "onRequest",
            "onReceive",
            "changePIN",
            "playFile",
            "noBuffer",
            "parseInt",
            "overflow",
            "checkPIN",
            "knobRead",
            "beginTFT",
            "bitClear",
            "updateIR",
            "bitWrite",
            "position",
            "writeRGB",
            "highByte",
            "writeRed",
            "setSpeed",
            "readBlue",
            "noStroke",
            "remoteIP",
            "transfer",
            "shutdown",
            "hangCall",
            "beginSMS",
            "endWrite",
            "attached",
            "maintain",
            "noCursor",
            "checkReg",
            "checkPUK",
            "shiftOut",
            "isValid",
            "shiftIn",
            "pulseIn",
            "connect",
            "println",
            "localIP",
            "pinMode",
            "getIMEI",
            "display",
            "noBlink",
            "process",
            "getBand",
            "running",
            "beginSD",
            "drawBMP",
            "lowByte",
            "setBand",
            "release",
            "bitRead",
            "prepare",
            "pointTo",
            "readRed",
            "setMode",
            "noFill",
            "remove",
            "listen",
            "stroke",
            "detach",
            "attach",
            "noTone",
            "exists",
            "buffer",
            "height",
            "bitSet",
            "circle",
            "config",
            "cursor",
            "random",
            "IRread",
            "setDNS",
            "endSMS",
            "getKey",
            "micros",
            "millis",
            "begin",
            "print",
            "write",
            "ready",
            "flush",
            "width",
            "isPIN",
            "blink",
            "clear",
            "press",
            "mkdir",
            "rmdir",
            "close",
            "point",
            "yield",
            "image",
            "BSSID",
            "click",
            "delay",
            "read",
            "text",
            "move",
            "peek",
            "beep",
            "rect",
            "line",
            "open",
            "seek",
            "fill",
            "size",
            "turn",
            "stop",
            "home",
            "find",
            "step",
            "tone",
            "sqrt",
            "RSSI",
            "SSID",
            "end",
            "bit",
            "tan",
            "cos",
            "sin",
            "pow",
            "map",
            "abs",
            "max",
            "min",
            "get",
            "run",
            "put"
        ],
        literal: [
            "DIGITAL_MESSAGE",
            "FIRMATA_STRING",
            "ANALOG_MESSAGE",
            "REPORT_DIGITAL",
            "REPORT_ANALOG",
            "INPUT_PULLUP",
            "SET_PIN_MODE",
            "INTERNAL2V56",
            "SYSTEM_RESET",
            "LED_BUILTIN",
            "INTERNAL1V1",
            "SYSEX_START",
            "INTERNAL",
            "EXTERNAL",
            "DEFAULT",
            "OUTPUT",
            "INPUT",
            "HIGH",
            "LOW"
        ]
    };
    const ARDUINO = cPlusPlus(hljs);
    const kws = /** @type {Record<string,any>} */ ARDUINO.keywords;
    kws.type = [
        ...kws.type,
        ...ARDUINO_KW.type
    ];
    kws.literal = [
        ...kws.literal,
        ...ARDUINO_KW.literal
    ];
    kws.built_in = [
        ...kws.built_in,
        ...ARDUINO_KW.built_in
    ];
    kws._hints = ARDUINO_KW._hints;
    ARDUINO.name = "Arduino";
    ARDUINO.aliases = [
        "ino"
    ];
    ARDUINO.supersetOf = "cpp";
    return ARDUINO;
}


;// CONCATENATED MODULE: ./node_modules/highlight.js/es/languages/bash.js
/*
Language: Bash
Author: vah <vahtenberg@gmail.com>
Contributrors: Benjamin Pannell <contact@sierrasoftworks.com>
Website: https://www.gnu.org/software/bash/
Category: common
*/ /** @type LanguageFn */ function bash(hljs) {
    const regex = hljs.regex;
    const VAR = {};
    const BRACED_VAR = {
        begin: /\$\{/,
        end: /\}/,
        contains: [
            "self",
            {
                begin: /:-/,
                contains: [
                    VAR
                ]
            } // default values
        ]
    };
    Object.assign(VAR, {
        className: "variable",
        variants: [
            {
                begin: regex.concat(/\$[\w\d#@][\w\d_]*/, // negative look-ahead tries to avoid matching patterns that are not
                // Perl at all like $ident$, @ident@, etc.
                `(?![\\w\\d])(?![$])`)
            },
            BRACED_VAR
        ]
    });
    const SUBST = {
        className: "subst",
        begin: /\$\(/,
        end: /\)/,
        contains: [
            hljs.BACKSLASH_ESCAPE
        ]
    };
    const HERE_DOC = {
        begin: /<<-?\s*(?=\w+)/,
        starts: {
            contains: [
                hljs.END_SAME_AS_BEGIN({
                    begin: /(\w+)/,
                    end: /(\w+)/,
                    className: "string"
                })
            ]
        }
    };
    const QUOTE_STRING = {
        className: "string",
        begin: /"/,
        end: /"/,
        contains: [
            hljs.BACKSLASH_ESCAPE,
            VAR,
            SUBST
        ]
    };
    SUBST.contains.push(QUOTE_STRING);
    const ESCAPED_QUOTE = {
        className: "",
        begin: /\\"/
    };
    const APOS_STRING = {
        className: "string",
        begin: /'/,
        end: /'/
    };
    const ARITHMETIC = {
        begin: /\$?\(\(/,
        end: /\)\)/,
        contains: [
            {
                begin: /\d+#[0-9a-f]+/,
                className: "number"
            },
            hljs.NUMBER_MODE,
            VAR
        ]
    };
    const SH_LIKE_SHELLS = [
        "fish",
        "bash",
        "zsh",
        "sh",
        "csh",
        "ksh",
        "tcsh",
        "dash",
        "scsh"
    ];
    const KNOWN_SHEBANG = hljs.SHEBANG({
        binary: `(${SH_LIKE_SHELLS.join("|")})`,
        relevance: 10
    });
    const FUNCTION = {
        className: "function",
        begin: /\w[\w\d_]*\s*\(\s*\)\s*\{/,
        returnBegin: true,
        contains: [
            hljs.inherit(hljs.TITLE_MODE, {
                begin: /\w[\w\d_]*/
            })
        ],
        relevance: 0
    };
    const KEYWORDS = [
        "if",
        "then",
        "else",
        "elif",
        "fi",
        "for",
        "while",
        "until",
        "in",
        "do",
        "done",
        "case",
        "esac",
        "function",
        "select"
    ];
    const LITERALS = [
        "true",
        "false"
    ];
    // to consume paths to prevent keyword matches inside them
    const PATH_MODE = {
        match: /(\/[a-z._-]+)+/
    };
    // http://www.gnu.org/software/bash/manual/html_node/Shell-Builtin-Commands.html
    const SHELL_BUILT_INS = [
        "break",
        "cd",
        "continue",
        "eval",
        "exec",
        "exit",
        "export",
        "getopts",
        "hash",
        "pwd",
        "readonly",
        "return",
        "shift",
        "test",
        "times",
        "trap",
        "umask",
        "unset"
    ];
    const BASH_BUILT_INS = [
        "alias",
        "bind",
        "builtin",
        "caller",
        "command",
        "declare",
        "echo",
        "enable",
        "help",
        "let",
        "local",
        "logout",
        "mapfile",
        "printf",
        "read",
        "readarray",
        "source",
        "type",
        "typeset",
        "ulimit",
        "unalias"
    ];
    const ZSH_BUILT_INS = [
        "autoload",
        "bg",
        "bindkey",
        "bye",
        "cap",
        "chdir",
        "clone",
        "comparguments",
        "compcall",
        "compctl",
        "compdescribe",
        "compfiles",
        "compgroups",
        "compquote",
        "comptags",
        "comptry",
        "compvalues",
        "dirs",
        "disable",
        "disown",
        "echotc",
        "echoti",
        "emulate",
        "fc",
        "fg",
        "float",
        "functions",
        "getcap",
        "getln",
        "history",
        "integer",
        "jobs",
        "kill",
        "limit",
        "log",
        "noglob",
        "popd",
        "print",
        "pushd",
        "pushln",
        "rehash",
        "sched",
        "setcap",
        "setopt",
        "stat",
        "suspend",
        "ttyctl",
        "unfunction",
        "unhash",
        "unlimit",
        "unsetopt",
        "vared",
        "wait",
        "whence",
        "where",
        "which",
        "zcompile",
        "zformat",
        "zftp",
        "zle",
        "zmodload",
        "zparseopts",
        "zprof",
        "zpty",
        "zregexparse",
        "zsocket",
        "zstyle",
        "ztcp"
    ];
    const GNU_CORE_UTILS = [
        "chcon",
        "chgrp",
        "chown",
        "chmod",
        "cp",
        "dd",
        "df",
        "dir",
        "dircolors",
        "ln",
        "ls",
        "mkdir",
        "mkfifo",
        "mknod",
        "mktemp",
        "mv",
        "realpath",
        "rm",
        "rmdir",
        "shred",
        "sync",
        "touch",
        "truncate",
        "vdir",
        "b2sum",
        "base32",
        "base64",
        "cat",
        "cksum",
        "comm",
        "csplit",
        "cut",
        "expand",
        "fmt",
        "fold",
        "head",
        "join",
        "md5sum",
        "nl",
        "numfmt",
        "od",
        "paste",
        "ptx",
        "pr",
        "sha1sum",
        "sha224sum",
        "sha256sum",
        "sha384sum",
        "sha512sum",
        "shuf",
        "sort",
        "split",
        "sum",
        "tac",
        "tail",
        "tr",
        "tsort",
        "unexpand",
        "uniq",
        "wc",
        "arch",
        "basename",
        "chroot",
        "date",
        "dirname",
        "du",
        "echo",
        "env",
        "expr",
        "factor",
        // "false", // keyword literal already
        "groups",
        "hostid",
        "id",
        "link",
        "logname",
        "nice",
        "nohup",
        "nproc",
        "pathchk",
        "pinky",
        "printenv",
        "printf",
        "pwd",
        "readlink",
        "runcon",
        "seq",
        "sleep",
        "stat",
        "stdbuf",
        "stty",
        "tee",
        "test",
        "timeout",
        // "true", // keyword literal already
        "tty",
        "uname",
        "unlink",
        "uptime",
        "users",
        "who",
        "whoami",
        "yes"
    ];
    return {
        name: "Bash",
        aliases: [
            "sh"
        ],
        keywords: {
            $pattern: /\b[a-z][a-z0-9._-]+\b/,
            keyword: KEYWORDS,
            literal: LITERALS,
            built_in: [
                ...SHELL_BUILT_INS,
                ...BASH_BUILT_INS,
                // Shell modifiers
                "set",
                "shopt",
                ...ZSH_BUILT_INS,
                ...GNU_CORE_UTILS
            ]
        },
        contains: [
            KNOWN_SHEBANG,
            hljs.SHEBANG(),
            FUNCTION,
            ARITHMETIC,
            hljs.HASH_COMMENT_MODE,
            HERE_DOC,
            PATH_MODE,
            QUOTE_STRING,
            ESCAPED_QUOTE,
            APOS_STRING,
            VAR
        ]
    };
}


;// CONCATENATED MODULE: ./node_modules/highlight.js/es/languages/c.js
/*
Language: C
Category: common, system
Website: https://en.wikipedia.org/wiki/C_(programming_language)
*/ /** @type LanguageFn */ function c(hljs) {
    const regex = hljs.regex;
    // added for historic reasons because `hljs.C_LINE_COMMENT_MODE` does
    // not include such support nor can we be sure all the grammars depending
    // on it would desire this behavior
    const C_LINE_COMMENT_MODE = hljs.COMMENT("//", "$", {
        contains: [
            {
                begin: /\\\n/
            }
        ]
    });
    const DECLTYPE_AUTO_RE = "decltype\\(auto\\)";
    const NAMESPACE_RE = "[a-zA-Z_]\\w*::";
    const TEMPLATE_ARGUMENT_RE = "<[^<>]+>";
    const FUNCTION_TYPE_RE = "(" + DECLTYPE_AUTO_RE + "|" + regex.optional(NAMESPACE_RE) + "[a-zA-Z_]\\w*" + regex.optional(TEMPLATE_ARGUMENT_RE) + ")";
    const TYPES = {
        className: "type",
        variants: [
            {
                begin: "\\b[a-z\\d_]*_t\\b"
            },
            {
                match: /\batomic_[a-z]{3,6}\b/
            }
        ]
    };
    // https://en.cppreference.com/w/cpp/language/escape
    // \\ \x \xFF \u2837 \u00323747 \374
    const CHARACTER_ESCAPES = "\\\\(x[0-9A-Fa-f]{2}|u[0-9A-Fa-f]{4,8}|[0-7]{3}|\\S)";
    const STRINGS = {
        className: "string",
        variants: [
            {
                begin: '(u8?|U|L)?"',
                end: '"',
                illegal: "\\n",
                contains: [
                    hljs.BACKSLASH_ESCAPE
                ]
            },
            {
                begin: "(u8?|U|L)?'(" + CHARACTER_ESCAPES + "|.)",
                end: "'",
                illegal: "."
            },
            hljs.END_SAME_AS_BEGIN({
                begin: /(?:u8?|U|L)?R"([^()\\ ]{0,16})\(/,
                end: /\)([^()\\ ]{0,16})"/
            })
        ]
    };
    const NUMBERS = {
        className: "number",
        variants: [
            {
                begin: "\\b(0b[01']+)"
            },
            {
                begin: "(-?)\\b([\\d']+(\\.[\\d']*)?|\\.[\\d']+)((ll|LL|l|L)(u|U)?|(u|U)(ll|LL|l|L)?|f|F|b|B)"
            },
            {
                begin: "(-?)(\\b0[xX][a-fA-F0-9']+|(\\b[\\d']+(\\.[\\d']*)?|\\.[\\d']+)([eE][-+]?[\\d']+)?)"
            }
        ],
        relevance: 0
    };
    const PREPROCESSOR = {
        className: "meta",
        begin: /#\s*[a-z]+\b/,
        end: /$/,
        keywords: {
            keyword: "if else elif endif define undef warning error line " + "pragma _Pragma ifdef ifndef include"
        },
        contains: [
            {
                begin: /\\\n/,
                relevance: 0
            },
            hljs.inherit(STRINGS, {
                className: "string"
            }),
            {
                className: "string",
                begin: /<.*?>/
            },
            C_LINE_COMMENT_MODE,
            hljs.C_BLOCK_COMMENT_MODE
        ]
    };
    const TITLE_MODE = {
        className: "title",
        begin: regex.optional(NAMESPACE_RE) + hljs.IDENT_RE,
        relevance: 0
    };
    const FUNCTION_TITLE = regex.optional(NAMESPACE_RE) + hljs.IDENT_RE + "\\s*\\(";
    const C_KEYWORDS = [
        "asm",
        "auto",
        "break",
        "case",
        "continue",
        "default",
        "do",
        "else",
        "enum",
        "extern",
        "for",
        "fortran",
        "goto",
        "if",
        "inline",
        "register",
        "restrict",
        "return",
        "sizeof",
        "struct",
        "switch",
        "typedef",
        "union",
        "volatile",
        "while",
        "_Alignas",
        "_Alignof",
        "_Atomic",
        "_Generic",
        "_Noreturn",
        "_Static_assert",
        "_Thread_local",
        // aliases
        "alignas",
        "alignof",
        "noreturn",
        "static_assert",
        "thread_local",
        // not a C keyword but is, for all intents and purposes, treated exactly like one.
        "_Pragma"
    ];
    const C_TYPES = [
        "float",
        "double",
        "signed",
        "unsigned",
        "int",
        "short",
        "long",
        "char",
        "void",
        "_Bool",
        "_Complex",
        "_Imaginary",
        "_Decimal32",
        "_Decimal64",
        "_Decimal128",
        // modifiers
        "const",
        "static",
        // aliases
        "complex",
        "bool",
        "imaginary"
    ];
    const KEYWORDS = {
        keyword: C_KEYWORDS,
        type: C_TYPES,
        literal: "true false NULL",
        // TODO: apply hinting work similar to what was done in cpp.js
        built_in: "std string wstring cin cout cerr clog stdin stdout stderr stringstream istringstream ostringstream " + "auto_ptr deque list queue stack vector map set pair bitset multiset multimap unordered_set " + "unordered_map unordered_multiset unordered_multimap priority_queue make_pair array shared_ptr abort terminate abs acos " + "asin atan2 atan calloc ceil cosh cos exit exp fabs floor fmod fprintf fputs free frexp " + "fscanf future isalnum isalpha iscntrl isdigit isgraph islower isprint ispunct isspace isupper " + "isxdigit tolower toupper labs ldexp log10 log malloc realloc memchr memcmp memcpy memset modf pow " + "printf putchar puts scanf sinh sin snprintf sprintf sqrt sscanf strcat strchr strcmp " + "strcpy strcspn strlen strncat strncmp strncpy strpbrk strrchr strspn strstr tanh tan " + "vfprintf vprintf vsprintf endl initializer_list unique_ptr"
    };
    const EXPRESSION_CONTAINS = [
        PREPROCESSOR,
        TYPES,
        C_LINE_COMMENT_MODE,
        hljs.C_BLOCK_COMMENT_MODE,
        NUMBERS,
        STRINGS
    ];
    const EXPRESSION_CONTEXT = {
        // This mode covers expression context where we can't expect a function
        // definition and shouldn't highlight anything that looks like one:
        // `return some()`, `else if()`, `(x*sum(1, 2))`
        variants: [
            {
                begin: /=/,
                end: /;/
            },
            {
                begin: /\(/,
                end: /\)/
            },
            {
                beginKeywords: "new throw return else",
                end: /;/
            }
        ],
        keywords: KEYWORDS,
        contains: EXPRESSION_CONTAINS.concat([
            {
                begin: /\(/,
                end: /\)/,
                keywords: KEYWORDS,
                contains: EXPRESSION_CONTAINS.concat([
                    "self"
                ]),
                relevance: 0
            }
        ]),
        relevance: 0
    };
    const FUNCTION_DECLARATION = {
        begin: "(" + FUNCTION_TYPE_RE + "[\\*&\\s]+)+" + FUNCTION_TITLE,
        returnBegin: true,
        end: /[{;=]/,
        excludeEnd: true,
        keywords: KEYWORDS,
        illegal: /[^\w\s\*&:<>.]/,
        contains: [
            {
                begin: DECLTYPE_AUTO_RE,
                keywords: KEYWORDS,
                relevance: 0
            },
            {
                begin: FUNCTION_TITLE,
                returnBegin: true,
                contains: [
                    hljs.inherit(TITLE_MODE, {
                        className: "title.function"
                    })
                ],
                relevance: 0
            },
            // allow for multiple declarations, e.g.:
            // extern void f(int), g(char);
            {
                relevance: 0,
                match: /,/
            },
            {
                className: "params",
                begin: /\(/,
                end: /\)/,
                keywords: KEYWORDS,
                relevance: 0,
                contains: [
                    C_LINE_COMMENT_MODE,
                    hljs.C_BLOCK_COMMENT_MODE,
                    STRINGS,
                    NUMBERS,
                    TYPES,
                    // Count matching parentheses.
                    {
                        begin: /\(/,
                        end: /\)/,
                        keywords: KEYWORDS,
                        relevance: 0,
                        contains: [
                            "self",
                            C_LINE_COMMENT_MODE,
                            hljs.C_BLOCK_COMMENT_MODE,
                            STRINGS,
                            NUMBERS,
                            TYPES
                        ]
                    }
                ]
            },
            TYPES,
            C_LINE_COMMENT_MODE,
            hljs.C_BLOCK_COMMENT_MODE,
            PREPROCESSOR
        ]
    };
    return {
        name: "C",
        aliases: [
            "h"
        ],
        keywords: KEYWORDS,
        // Until differentiations are added between `c` and `cpp`, `c` will
        // not be auto-detected to avoid auto-detect conflicts between C and C++
        disableAutodetect: true,
        illegal: "</",
        contains: [].concat(EXPRESSION_CONTEXT, FUNCTION_DECLARATION, EXPRESSION_CONTAINS, [
            PREPROCESSOR,
            {
                begin: hljs.IDENT_RE + "::",
                keywords: KEYWORDS
            },
            {
                className: "class",
                beginKeywords: "enum class struct union",
                end: /[{;:<>=]/,
                contains: [
                    {
                        beginKeywords: "final class struct"
                    },
                    hljs.TITLE_MODE
                ]
            }
        ]),
        exports: {
            preprocessor: PREPROCESSOR,
            strings: STRINGS,
            keywords: KEYWORDS
        }
    };
}


;// CONCATENATED MODULE: ./node_modules/highlight.js/es/languages/cpp.js
/*
Language: C++
Category: common, system
Website: https://isocpp.org
*/ /** @type LanguageFn */ function cpp(hljs) {
    const regex = hljs.regex;
    // added for historic reasons because `hljs.C_LINE_COMMENT_MODE` does
    // not include such support nor can we be sure all the grammars depending
    // on it would desire this behavior
    const C_LINE_COMMENT_MODE = hljs.COMMENT("//", "$", {
        contains: [
            {
                begin: /\\\n/
            }
        ]
    });
    const DECLTYPE_AUTO_RE = "decltype\\(auto\\)";
    const NAMESPACE_RE = "[a-zA-Z_]\\w*::";
    const TEMPLATE_ARGUMENT_RE = "<[^<>]+>";
    const FUNCTION_TYPE_RE = "(?!struct)(" + DECLTYPE_AUTO_RE + "|" + regex.optional(NAMESPACE_RE) + "[a-zA-Z_]\\w*" + regex.optional(TEMPLATE_ARGUMENT_RE) + ")";
    const CPP_PRIMITIVE_TYPES = {
        className: "type",
        begin: "\\b[a-z\\d_]*_t\\b"
    };
    // https://en.cppreference.com/w/cpp/language/escape
    // \\ \x \xFF \u2837 \u00323747 \374
    const CHARACTER_ESCAPES = "\\\\(x[0-9A-Fa-f]{2}|u[0-9A-Fa-f]{4,8}|[0-7]{3}|\\S)";
    const STRINGS = {
        className: "string",
        variants: [
            {
                begin: '(u8?|U|L)?"',
                end: '"',
                illegal: "\\n",
                contains: [
                    hljs.BACKSLASH_ESCAPE
                ]
            },
            {
                begin: "(u8?|U|L)?'(" + CHARACTER_ESCAPES + "|.)",
                end: "'",
                illegal: "."
            },
            hljs.END_SAME_AS_BEGIN({
                begin: /(?:u8?|U|L)?R"([^()\\ ]{0,16})\(/,
                end: /\)([^()\\ ]{0,16})"/
            })
        ]
    };
    const NUMBERS = {
        className: "number",
        variants: [
            {
                begin: "\\b(0b[01']+)"
            },
            {
                begin: "(-?)\\b([\\d']+(\\.[\\d']*)?|\\.[\\d']+)((ll|LL|l|L)(u|U)?|(u|U)(ll|LL|l|L)?|f|F|b|B)"
            },
            {
                begin: "(-?)(\\b0[xX][a-fA-F0-9']+|(\\b[\\d']+(\\.[\\d']*)?|\\.[\\d']+)([eE][-+]?[\\d']+)?)"
            }
        ],
        relevance: 0
    };
    const PREPROCESSOR = {
        className: "meta",
        begin: /#\s*[a-z]+\b/,
        end: /$/,
        keywords: {
            keyword: "if else elif endif define undef warning error line " + "pragma _Pragma ifdef ifndef include"
        },
        contains: [
            {
                begin: /\\\n/,
                relevance: 0
            },
            hljs.inherit(STRINGS, {
                className: "string"
            }),
            {
                className: "string",
                begin: /<.*?>/
            },
            C_LINE_COMMENT_MODE,
            hljs.C_BLOCK_COMMENT_MODE
        ]
    };
    const TITLE_MODE = {
        className: "title",
        begin: regex.optional(NAMESPACE_RE) + hljs.IDENT_RE,
        relevance: 0
    };
    const FUNCTION_TITLE = regex.optional(NAMESPACE_RE) + hljs.IDENT_RE + "\\s*\\(";
    // https://en.cppreference.com/w/cpp/keyword
    const RESERVED_KEYWORDS = [
        "alignas",
        "alignof",
        "and",
        "and_eq",
        "asm",
        "atomic_cancel",
        "atomic_commit",
        "atomic_noexcept",
        "auto",
        "bitand",
        "bitor",
        "break",
        "case",
        "catch",
        "class",
        "co_await",
        "co_return",
        "co_yield",
        "compl",
        "concept",
        "const_cast|10",
        "consteval",
        "constexpr",
        "constinit",
        "continue",
        "decltype",
        "default",
        "delete",
        "do",
        "dynamic_cast|10",
        "else",
        "enum",
        "explicit",
        "export",
        "extern",
        "false",
        "final",
        "for",
        "friend",
        "goto",
        "if",
        "import",
        "inline",
        "module",
        "mutable",
        "namespace",
        "new",
        "noexcept",
        "not",
        "not_eq",
        "nullptr",
        "operator",
        "or",
        "or_eq",
        "override",
        "private",
        "protected",
        "public",
        "reflexpr",
        "register",
        "reinterpret_cast|10",
        "requires",
        "return",
        "sizeof",
        "static_assert",
        "static_cast|10",
        "struct",
        "switch",
        "synchronized",
        "template",
        "this",
        "thread_local",
        "throw",
        "transaction_safe",
        "transaction_safe_dynamic",
        "true",
        "try",
        "typedef",
        "typeid",
        "typename",
        "union",
        "using",
        "virtual",
        "volatile",
        "while",
        "xor",
        "xor_eq"
    ];
    // https://en.cppreference.com/w/cpp/keyword
    const RESERVED_TYPES = [
        "bool",
        "char",
        "char16_t",
        "char32_t",
        "char8_t",
        "double",
        "float",
        "int",
        "long",
        "short",
        "void",
        "wchar_t",
        "unsigned",
        "signed",
        "const",
        "static"
    ];
    const TYPE_HINTS = [
        "any",
        "auto_ptr",
        "barrier",
        "binary_semaphore",
        "bitset",
        "complex",
        "condition_variable",
        "condition_variable_any",
        "counting_semaphore",
        "deque",
        "false_type",
        "future",
        "imaginary",
        "initializer_list",
        "istringstream",
        "jthread",
        "latch",
        "lock_guard",
        "multimap",
        "multiset",
        "mutex",
        "optional",
        "ostringstream",
        "packaged_task",
        "pair",
        "promise",
        "priority_queue",
        "queue",
        "recursive_mutex",
        "recursive_timed_mutex",
        "scoped_lock",
        "set",
        "shared_future",
        "shared_lock",
        "shared_mutex",
        "shared_timed_mutex",
        "shared_ptr",
        "stack",
        "string_view",
        "stringstream",
        "timed_mutex",
        "thread",
        "true_type",
        "tuple",
        "unique_lock",
        "unique_ptr",
        "unordered_map",
        "unordered_multimap",
        "unordered_multiset",
        "unordered_set",
        "variant",
        "vector",
        "weak_ptr",
        "wstring",
        "wstring_view"
    ];
    const FUNCTION_HINTS = [
        "abort",
        "abs",
        "acos",
        "apply",
        "as_const",
        "asin",
        "atan",
        "atan2",
        "calloc",
        "ceil",
        "cerr",
        "cin",
        "clog",
        "cos",
        "cosh",
        "cout",
        "declval",
        "endl",
        "exchange",
        "exit",
        "exp",
        "fabs",
        "floor",
        "fmod",
        "forward",
        "fprintf",
        "fputs",
        "free",
        "frexp",
        "fscanf",
        "future",
        "invoke",
        "isalnum",
        "isalpha",
        "iscntrl",
        "isdigit",
        "isgraph",
        "islower",
        "isprint",
        "ispunct",
        "isspace",
        "isupper",
        "isxdigit",
        "labs",
        "launder",
        "ldexp",
        "log",
        "log10",
        "make_pair",
        "make_shared",
        "make_shared_for_overwrite",
        "make_tuple",
        "make_unique",
        "malloc",
        "memchr",
        "memcmp",
        "memcpy",
        "memset",
        "modf",
        "move",
        "pow",
        "printf",
        "putchar",
        "puts",
        "realloc",
        "scanf",
        "sin",
        "sinh",
        "snprintf",
        "sprintf",
        "sqrt",
        "sscanf",
        "std",
        "stderr",
        "stdin",
        "stdout",
        "strcat",
        "strchr",
        "strcmp",
        "strcpy",
        "strcspn",
        "strlen",
        "strncat",
        "strncmp",
        "strncpy",
        "strpbrk",
        "strrchr",
        "strspn",
        "strstr",
        "swap",
        "tan",
        "tanh",
        "terminate",
        "to_underlying",
        "tolower",
        "toupper",
        "vfprintf",
        "visit",
        "vprintf",
        "vsprintf"
    ];
    const LITERALS = [
        "NULL",
        "false",
        "nullopt",
        "nullptr",
        "true"
    ];
    // https://en.cppreference.com/w/cpp/keyword
    const BUILT_IN = [
        "_Pragma"
    ];
    const CPP_KEYWORDS = {
        type: RESERVED_TYPES,
        keyword: RESERVED_KEYWORDS,
        literal: LITERALS,
        built_in: BUILT_IN,
        _type_hints: TYPE_HINTS
    };
    const FUNCTION_DISPATCH = {
        className: "function.dispatch",
        relevance: 0,
        keywords: {
            // Only for relevance, not highlighting.
            _hint: FUNCTION_HINTS
        },
        begin: regex.concat(/\b/, /(?!decltype)/, /(?!if)/, /(?!for)/, /(?!switch)/, /(?!while)/, hljs.IDENT_RE, regex.lookahead(/(<[^<>]+>|)\s*\(/))
    };
    const EXPRESSION_CONTAINS = [
        FUNCTION_DISPATCH,
        PREPROCESSOR,
        CPP_PRIMITIVE_TYPES,
        C_LINE_COMMENT_MODE,
        hljs.C_BLOCK_COMMENT_MODE,
        NUMBERS,
        STRINGS
    ];
    const EXPRESSION_CONTEXT = {
        // This mode covers expression context where we can't expect a function
        // definition and shouldn't highlight anything that looks like one:
        // `return some()`, `else if()`, `(x*sum(1, 2))`
        variants: [
            {
                begin: /=/,
                end: /;/
            },
            {
                begin: /\(/,
                end: /\)/
            },
            {
                beginKeywords: "new throw return else",
                end: /;/
            }
        ],
        keywords: CPP_KEYWORDS,
        contains: EXPRESSION_CONTAINS.concat([
            {
                begin: /\(/,
                end: /\)/,
                keywords: CPP_KEYWORDS,
                contains: EXPRESSION_CONTAINS.concat([
                    "self"
                ]),
                relevance: 0
            }
        ]),
        relevance: 0
    };
    const FUNCTION_DECLARATION = {
        className: "function",
        begin: "(" + FUNCTION_TYPE_RE + "[\\*&\\s]+)+" + FUNCTION_TITLE,
        returnBegin: true,
        end: /[{;=]/,
        excludeEnd: true,
        keywords: CPP_KEYWORDS,
        illegal: /[^\w\s\*&:<>.]/,
        contains: [
            {
                begin: DECLTYPE_AUTO_RE,
                keywords: CPP_KEYWORDS,
                relevance: 0
            },
            {
                begin: FUNCTION_TITLE,
                returnBegin: true,
                contains: [
                    TITLE_MODE
                ],
                relevance: 0
            },
            // needed because we do not have look-behind on the below rule
            // to prevent it from grabbing the final : in a :: pair
            {
                begin: /::/,
                relevance: 0
            },
            // initializers
            {
                begin: /:/,
                endsWithParent: true,
                contains: [
                    STRINGS,
                    NUMBERS
                ]
            },
            // allow for multiple declarations, e.g.:
            // extern void f(int), g(char);
            {
                relevance: 0,
                match: /,/
            },
            {
                className: "params",
                begin: /\(/,
                end: /\)/,
                keywords: CPP_KEYWORDS,
                relevance: 0,
                contains: [
                    C_LINE_COMMENT_MODE,
                    hljs.C_BLOCK_COMMENT_MODE,
                    STRINGS,
                    NUMBERS,
                    CPP_PRIMITIVE_TYPES,
                    // Count matching parentheses.
                    {
                        begin: /\(/,
                        end: /\)/,
                        keywords: CPP_KEYWORDS,
                        relevance: 0,
                        contains: [
                            "self",
                            C_LINE_COMMENT_MODE,
                            hljs.C_BLOCK_COMMENT_MODE,
                            STRINGS,
                            NUMBERS,
                            CPP_PRIMITIVE_TYPES
                        ]
                    }
                ]
            },
            CPP_PRIMITIVE_TYPES,
            C_LINE_COMMENT_MODE,
            hljs.C_BLOCK_COMMENT_MODE,
            PREPROCESSOR
        ]
    };
    return {
        name: "C++",
        aliases: [
            "cc",
            "c++",
            "h++",
            "hpp",
            "hh",
            "hxx",
            "cxx"
        ],
        keywords: CPP_KEYWORDS,
        illegal: "</",
        classNameAliases: {
            "function.dispatch": "built_in"
        },
        contains: [].concat(EXPRESSION_CONTEXT, FUNCTION_DECLARATION, FUNCTION_DISPATCH, EXPRESSION_CONTAINS, [
            PREPROCESSOR,
            {
                begin: "\\b(deque|list|queue|priority_queue|pair|stack|vector|map|set|bitset|multiset|multimap|unordered_map|unordered_set|unordered_multiset|unordered_multimap|array|tuple|optional|variant|function)\\s*<(?!<)",
                end: ">",
                keywords: CPP_KEYWORDS,
                contains: [
                    "self",
                    CPP_PRIMITIVE_TYPES
                ]
            },
            {
                begin: hljs.IDENT_RE + "::",
                keywords: CPP_KEYWORDS
            },
            {
                match: [
                    // extra complexity to deal with `enum class` and `enum struct`
                    /\b(?:enum(?:\s+(?:class|struct))?|class|struct|union)/,
                    /\s+/,
                    /\w+/
                ],
                className: {
                    1: "keyword",
                    3: "title.class"
                }
            }
        ])
    };
}


;// CONCATENATED MODULE: ./node_modules/highlight.js/es/languages/csharp.js
/*
Language: C#
Author: Jason Diamond <jason@diamond.name>
Contributor: Nicolas LLOBERA <nllobera@gmail.com>, Pieter Vantorre <pietervantorre@gmail.com>, David Pine <david.pine@microsoft.com>
Website: https://docs.microsoft.com/dotnet/csharp/
Category: common
*/ /** @type LanguageFn */ function csharp(hljs) {
    const BUILT_IN_KEYWORDS = [
        "bool",
        "byte",
        "char",
        "decimal",
        "delegate",
        "double",
        "dynamic",
        "enum",
        "float",
        "int",
        "long",
        "nint",
        "nuint",
        "object",
        "sbyte",
        "short",
        "string",
        "ulong",
        "uint",
        "ushort"
    ];
    const FUNCTION_MODIFIERS = [
        "public",
        "private",
        "protected",
        "static",
        "internal",
        "protected",
        "abstract",
        "async",
        "extern",
        "override",
        "unsafe",
        "virtual",
        "new",
        "sealed",
        "partial"
    ];
    const LITERAL_KEYWORDS = [
        "default",
        "false",
        "null",
        "true"
    ];
    const NORMAL_KEYWORDS = [
        "abstract",
        "as",
        "base",
        "break",
        "case",
        "catch",
        "class",
        "const",
        "continue",
        "do",
        "else",
        "event",
        "explicit",
        "extern",
        "finally",
        "fixed",
        "for",
        "foreach",
        "goto",
        "if",
        "implicit",
        "in",
        "interface",
        "internal",
        "is",
        "lock",
        "namespace",
        "new",
        "operator",
        "out",
        "override",
        "params",
        "private",
        "protected",
        "public",
        "readonly",
        "record",
        "ref",
        "return",
        "scoped",
        "sealed",
        "sizeof",
        "stackalloc",
        "static",
        "struct",
        "switch",
        "this",
        "throw",
        "try",
        "typeof",
        "unchecked",
        "unsafe",
        "using",
        "virtual",
        "void",
        "volatile",
        "while"
    ];
    const CONTEXTUAL_KEYWORDS = [
        "add",
        "alias",
        "and",
        "ascending",
        "async",
        "await",
        "by",
        "descending",
        "equals",
        "from",
        "get",
        "global",
        "group",
        "init",
        "into",
        "join",
        "let",
        "nameof",
        "not",
        "notnull",
        "on",
        "or",
        "orderby",
        "partial",
        "remove",
        "select",
        "set",
        "unmanaged",
        "value|0",
        "var",
        "when",
        "where",
        "with",
        "yield"
    ];
    const KEYWORDS = {
        keyword: NORMAL_KEYWORDS.concat(CONTEXTUAL_KEYWORDS),
        built_in: BUILT_IN_KEYWORDS,
        literal: LITERAL_KEYWORDS
    };
    const TITLE_MODE = hljs.inherit(hljs.TITLE_MODE, {
        begin: "[a-zA-Z](\\.?\\w)*"
    });
    const NUMBERS = {
        className: "number",
        variants: [
            {
                begin: "\\b(0b[01']+)"
            },
            {
                begin: "(-?)\\b([\\d']+(\\.[\\d']*)?|\\.[\\d']+)(u|U|l|L|ul|UL|f|F|b|B)"
            },
            {
                begin: "(-?)(\\b0[xX][a-fA-F0-9']+|(\\b[\\d']+(\\.[\\d']*)?|\\.[\\d']+)([eE][-+]?[\\d']+)?)"
            }
        ],
        relevance: 0
    };
    const VERBATIM_STRING = {
        className: "string",
        begin: '@"',
        end: '"',
        contains: [
            {
                begin: '""'
            }
        ]
    };
    const VERBATIM_STRING_NO_LF = hljs.inherit(VERBATIM_STRING, {
        illegal: /\n/
    });
    const SUBST = {
        className: "subst",
        begin: /\{/,
        end: /\}/,
        keywords: KEYWORDS
    };
    const SUBST_NO_LF = hljs.inherit(SUBST, {
        illegal: /\n/
    });
    const INTERPOLATED_STRING = {
        className: "string",
        begin: /\$"/,
        end: '"',
        illegal: /\n/,
        contains: [
            {
                begin: /\{\{/
            },
            {
                begin: /\}\}/
            },
            hljs.BACKSLASH_ESCAPE,
            SUBST_NO_LF
        ]
    };
    const INTERPOLATED_VERBATIM_STRING = {
        className: "string",
        begin: /\$@"/,
        end: '"',
        contains: [
            {
                begin: /\{\{/
            },
            {
                begin: /\}\}/
            },
            {
                begin: '""'
            },
            SUBST
        ]
    };
    const INTERPOLATED_VERBATIM_STRING_NO_LF = hljs.inherit(INTERPOLATED_VERBATIM_STRING, {
        illegal: /\n/,
        contains: [
            {
                begin: /\{\{/
            },
            {
                begin: /\}\}/
            },
            {
                begin: '""'
            },
            SUBST_NO_LF
        ]
    });
    SUBST.contains = [
        INTERPOLATED_VERBATIM_STRING,
        INTERPOLATED_STRING,
        VERBATIM_STRING,
        hljs.APOS_STRING_MODE,
        hljs.QUOTE_STRING_MODE,
        NUMBERS,
        hljs.C_BLOCK_COMMENT_MODE
    ];
    SUBST_NO_LF.contains = [
        INTERPOLATED_VERBATIM_STRING_NO_LF,
        INTERPOLATED_STRING,
        VERBATIM_STRING_NO_LF,
        hljs.APOS_STRING_MODE,
        hljs.QUOTE_STRING_MODE,
        NUMBERS,
        hljs.inherit(hljs.C_BLOCK_COMMENT_MODE, {
            illegal: /\n/
        })
    ];
    const STRING = {
        variants: [
            INTERPOLATED_VERBATIM_STRING,
            INTERPOLATED_STRING,
            VERBATIM_STRING,
            hljs.APOS_STRING_MODE,
            hljs.QUOTE_STRING_MODE
        ]
    };
    const GENERIC_MODIFIER = {
        begin: "<",
        end: ">",
        contains: [
            {
                beginKeywords: "in out"
            },
            TITLE_MODE
        ]
    };
    const TYPE_IDENT_RE = hljs.IDENT_RE + "(<" + hljs.IDENT_RE + "(\\s*,\\s*" + hljs.IDENT_RE + ")*>)?(\\[\\])?";
    const AT_IDENTIFIER = {
        // prevents expressions like `@class` from incorrect flagging
        // `class` as a keyword
        begin: "@" + hljs.IDENT_RE,
        relevance: 0
    };
    return {
        name: "C#",
        aliases: [
            "cs",
            "c#"
        ],
        keywords: KEYWORDS,
        illegal: /::/,
        contains: [
            hljs.COMMENT("///", "$", {
                returnBegin: true,
                contains: [
                    {
                        className: "doctag",
                        variants: [
                            {
                                begin: "///",
                                relevance: 0
                            },
                            {
                                begin: "<!--|-->"
                            },
                            {
                                begin: "</?",
                                end: ">"
                            }
                        ]
                    }
                ]
            }),
            hljs.C_LINE_COMMENT_MODE,
            hljs.C_BLOCK_COMMENT_MODE,
            {
                className: "meta",
                begin: "#",
                end: "$",
                keywords: {
                    keyword: "if else elif endif define undef warning error line region endregion pragma checksum"
                }
            },
            STRING,
            NUMBERS,
            {
                beginKeywords: "class interface",
                relevance: 0,
                end: /[{;=]/,
                illegal: /[^\s:,]/,
                contains: [
                    {
                        beginKeywords: "where class"
                    },
                    TITLE_MODE,
                    GENERIC_MODIFIER,
                    hljs.C_LINE_COMMENT_MODE,
                    hljs.C_BLOCK_COMMENT_MODE
                ]
            },
            {
                beginKeywords: "namespace",
                relevance: 0,
                end: /[{;=]/,
                illegal: /[^\s:]/,
                contains: [
                    TITLE_MODE,
                    hljs.C_LINE_COMMENT_MODE,
                    hljs.C_BLOCK_COMMENT_MODE
                ]
            },
            {
                beginKeywords: "record",
                relevance: 0,
                end: /[{;=]/,
                illegal: /[^\s:]/,
                contains: [
                    TITLE_MODE,
                    GENERIC_MODIFIER,
                    hljs.C_LINE_COMMENT_MODE,
                    hljs.C_BLOCK_COMMENT_MODE
                ]
            },
            {
                // [Attributes("")]
                className: "meta",
                begin: "^\\s*\\[(?=[\\w])",
                excludeBegin: true,
                end: "\\]",
                excludeEnd: true,
                contains: [
                    {
                        className: "string",
                        begin: /"/,
                        end: /"/
                    }
                ]
            },
            {
                // Expression keywords prevent 'keyword Name(...)' from being
                // recognized as a function definition
                beginKeywords: "new return throw await else",
                relevance: 0
            },
            {
                className: "function",
                begin: "(" + TYPE_IDENT_RE + "\\s+)+" + hljs.IDENT_RE + "\\s*(<[^=]+>\\s*)?\\(",
                returnBegin: true,
                end: /\s*[{;=]/,
                excludeEnd: true,
                keywords: KEYWORDS,
                contains: [
                    // prevents these from being highlighted `title`
                    {
                        beginKeywords: FUNCTION_MODIFIERS.join(" "),
                        relevance: 0
                    },
                    {
                        begin: hljs.IDENT_RE + "\\s*(<[^=]+>\\s*)?\\(",
                        returnBegin: true,
                        contains: [
                            hljs.TITLE_MODE,
                            GENERIC_MODIFIER
                        ],
                        relevance: 0
                    },
                    {
                        match: /\(\)/
                    },
                    {
                        className: "params",
                        begin: /\(/,
                        end: /\)/,
                        excludeBegin: true,
                        excludeEnd: true,
                        keywords: KEYWORDS,
                        relevance: 0,
                        contains: [
                            STRING,
                            NUMBERS,
                            hljs.C_BLOCK_COMMENT_MODE
                        ]
                    },
                    hljs.C_LINE_COMMENT_MODE,
                    hljs.C_BLOCK_COMMENT_MODE
                ]
            },
            AT_IDENTIFIER
        ]
    };
}


;// CONCATENATED MODULE: ./node_modules/highlight.js/es/languages/css.js
const MODES = (hljs)=>{
    return {
        IMPORTANT: {
            scope: "meta",
            begin: "!important"
        },
        BLOCK_COMMENT: hljs.C_BLOCK_COMMENT_MODE,
        HEXCOLOR: {
            scope: "number",
            begin: /#(([0-9a-fA-F]{3,4})|(([0-9a-fA-F]{2}){3,4}))\b/
        },
        FUNCTION_DISPATCH: {
            className: "built_in",
            begin: /[\w-]+(?=\()/
        },
        ATTRIBUTE_SELECTOR_MODE: {
            scope: "selector-attr",
            begin: /\[/,
            end: /\]/,
            illegal: "$",
            contains: [
                hljs.APOS_STRING_MODE,
                hljs.QUOTE_STRING_MODE
            ]
        },
        CSS_NUMBER_MODE: {
            scope: "number",
            begin: hljs.NUMBER_RE + "(" + "%|em|ex|ch|rem" + "|vw|vh|vmin|vmax" + "|cm|mm|in|pt|pc|px" + "|deg|grad|rad|turn" + "|s|ms" + "|Hz|kHz" + "|dpi|dpcm|dppx" + ")?",
            relevance: 0
        },
        CSS_VARIABLE: {
            className: "attr",
            begin: /--[A-Za-z][A-Za-z0-9_-]*/
        }
    };
};
const TAGS = [
    "a",
    "abbr",
    "address",
    "article",
    "aside",
    "audio",
    "b",
    "blockquote",
    "body",
    "button",
    "canvas",
    "caption",
    "cite",
    "code",
    "dd",
    "del",
    "details",
    "dfn",
    "div",
    "dl",
    "dt",
    "em",
    "fieldset",
    "figcaption",
    "figure",
    "footer",
    "form",
    "h1",
    "h2",
    "h3",
    "h4",
    "h5",
    "h6",
    "header",
    "hgroup",
    "html",
    "i",
    "iframe",
    "img",
    "input",
    "ins",
    "kbd",
    "label",
    "legend",
    "li",
    "main",
    "mark",
    "menu",
    "nav",
    "object",
    "ol",
    "p",
    "q",
    "quote",
    "samp",
    "section",
    "span",
    "strong",
    "summary",
    "sup",
    "table",
    "tbody",
    "td",
    "textarea",
    "tfoot",
    "th",
    "thead",
    "time",
    "tr",
    "ul",
    "var",
    "video"
];
const MEDIA_FEATURES = [
    "any-hover",
    "any-pointer",
    "aspect-ratio",
    "color",
    "color-gamut",
    "color-index",
    "device-aspect-ratio",
    "device-height",
    "device-width",
    "display-mode",
    "forced-colors",
    "grid",
    "height",
    "hover",
    "inverted-colors",
    "monochrome",
    "orientation",
    "overflow-block",
    "overflow-inline",
    "pointer",
    "prefers-color-scheme",
    "prefers-contrast",
    "prefers-reduced-motion",
    "prefers-reduced-transparency",
    "resolution",
    "scan",
    "scripting",
    "update",
    "width",
    // TODO: find a better solution?
    "min-width",
    "max-width",
    "min-height",
    "max-height"
];
// https://developer.mozilla.org/en-US/docs/Web/CSS/Pseudo-classes
const PSEUDO_CLASSES = [
    "active",
    "any-link",
    "blank",
    "checked",
    "current",
    "default",
    "defined",
    "dir",
    "disabled",
    "drop",
    "empty",
    "enabled",
    "first",
    "first-child",
    "first-of-type",
    "fullscreen",
    "future",
    "focus",
    "focus-visible",
    "focus-within",
    "has",
    "host",
    "host-context",
    "hover",
    "indeterminate",
    "in-range",
    "invalid",
    "is",
    "lang",
    "last-child",
    "last-of-type",
    "left",
    "link",
    "local-link",
    "not",
    "nth-child",
    "nth-col",
    "nth-last-child",
    "nth-last-col",
    "nth-last-of-type",
    "nth-of-type",
    "only-child",
    "only-of-type",
    "optional",
    "out-of-range",
    "past",
    "placeholder-shown",
    "read-only",
    "read-write",
    "required",
    "right",
    "root",
    "scope",
    "target",
    "target-within",
    "user-invalid",
    "valid",
    "visited",
    "where" // where()
];
// https://developer.mozilla.org/en-US/docs/Web/CSS/Pseudo-elements
const PSEUDO_ELEMENTS = [
    "after",
    "backdrop",
    "before",
    "cue",
    "cue-region",
    "first-letter",
    "first-line",
    "grammar-error",
    "marker",
    "part",
    "placeholder",
    "selection",
    "slotted",
    "spelling-error"
];
const ATTRIBUTES = [
    "align-content",
    "align-items",
    "align-self",
    "all",
    "animation",
    "animation-delay",
    "animation-direction",
    "animation-duration",
    "animation-fill-mode",
    "animation-iteration-count",
    "animation-name",
    "animation-play-state",
    "animation-timing-function",
    "backface-visibility",
    "background",
    "background-attachment",
    "background-blend-mode",
    "background-clip",
    "background-color",
    "background-image",
    "background-origin",
    "background-position",
    "background-repeat",
    "background-size",
    "block-size",
    "border",
    "border-block",
    "border-block-color",
    "border-block-end",
    "border-block-end-color",
    "border-block-end-style",
    "border-block-end-width",
    "border-block-start",
    "border-block-start-color",
    "border-block-start-style",
    "border-block-start-width",
    "border-block-style",
    "border-block-width",
    "border-bottom",
    "border-bottom-color",
    "border-bottom-left-radius",
    "border-bottom-right-radius",
    "border-bottom-style",
    "border-bottom-width",
    "border-collapse",
    "border-color",
    "border-image",
    "border-image-outset",
    "border-image-repeat",
    "border-image-slice",
    "border-image-source",
    "border-image-width",
    "border-inline",
    "border-inline-color",
    "border-inline-end",
    "border-inline-end-color",
    "border-inline-end-style",
    "border-inline-end-width",
    "border-inline-start",
    "border-inline-start-color",
    "border-inline-start-style",
    "border-inline-start-width",
    "border-inline-style",
    "border-inline-width",
    "border-left",
    "border-left-color",
    "border-left-style",
    "border-left-width",
    "border-radius",
    "border-right",
    "border-right-color",
    "border-right-style",
    "border-right-width",
    "border-spacing",
    "border-style",
    "border-top",
    "border-top-color",
    "border-top-left-radius",
    "border-top-right-radius",
    "border-top-style",
    "border-top-width",
    "border-width",
    "bottom",
    "box-decoration-break",
    "box-shadow",
    "box-sizing",
    "break-after",
    "break-before",
    "break-inside",
    "caption-side",
    "caret-color",
    "clear",
    "clip",
    "clip-path",
    "clip-rule",
    "color",
    "column-count",
    "column-fill",
    "column-gap",
    "column-rule",
    "column-rule-color",
    "column-rule-style",
    "column-rule-width",
    "column-span",
    "column-width",
    "columns",
    "contain",
    "content",
    "content-visibility",
    "counter-increment",
    "counter-reset",
    "cue",
    "cue-after",
    "cue-before",
    "cursor",
    "direction",
    "display",
    "empty-cells",
    "filter",
    "flex",
    "flex-basis",
    "flex-direction",
    "flex-flow",
    "flex-grow",
    "flex-shrink",
    "flex-wrap",
    "float",
    "flow",
    "font",
    "font-display",
    "font-family",
    "font-feature-settings",
    "font-kerning",
    "font-language-override",
    "font-size",
    "font-size-adjust",
    "font-smoothing",
    "font-stretch",
    "font-style",
    "font-synthesis",
    "font-variant",
    "font-variant-caps",
    "font-variant-east-asian",
    "font-variant-ligatures",
    "font-variant-numeric",
    "font-variant-position",
    "font-variation-settings",
    "font-weight",
    "gap",
    "glyph-orientation-vertical",
    "grid",
    "grid-area",
    "grid-auto-columns",
    "grid-auto-flow",
    "grid-auto-rows",
    "grid-column",
    "grid-column-end",
    "grid-column-start",
    "grid-gap",
    "grid-row",
    "grid-row-end",
    "grid-row-start",
    "grid-template",
    "grid-template-areas",
    "grid-template-columns",
    "grid-template-rows",
    "hanging-punctuation",
    "height",
    "hyphens",
    "icon",
    "image-orientation",
    "image-rendering",
    "image-resolution",
    "ime-mode",
    "inline-size",
    "isolation",
    "justify-content",
    "left",
    "letter-spacing",
    "line-break",
    "line-height",
    "list-style",
    "list-style-image",
    "list-style-position",
    "list-style-type",
    "margin",
    "margin-block",
    "margin-block-end",
    "margin-block-start",
    "margin-bottom",
    "margin-inline",
    "margin-inline-end",
    "margin-inline-start",
    "margin-left",
    "margin-right",
    "margin-top",
    "marks",
    "mask",
    "mask-border",
    "mask-border-mode",
    "mask-border-outset",
    "mask-border-repeat",
    "mask-border-slice",
    "mask-border-source",
    "mask-border-width",
    "mask-clip",
    "mask-composite",
    "mask-image",
    "mask-mode",
    "mask-origin",
    "mask-position",
    "mask-repeat",
    "mask-size",
    "mask-type",
    "max-block-size",
    "max-height",
    "max-inline-size",
    "max-width",
    "min-block-size",
    "min-height",
    "min-inline-size",
    "min-width",
    "mix-blend-mode",
    "nav-down",
    "nav-index",
    "nav-left",
    "nav-right",
    "nav-up",
    "none",
    "normal",
    "object-fit",
    "object-position",
    "opacity",
    "order",
    "orphans",
    "outline",
    "outline-color",
    "outline-offset",
    "outline-style",
    "outline-width",
    "overflow",
    "overflow-wrap",
    "overflow-x",
    "overflow-y",
    "padding",
    "padding-block",
    "padding-block-end",
    "padding-block-start",
    "padding-bottom",
    "padding-inline",
    "padding-inline-end",
    "padding-inline-start",
    "padding-left",
    "padding-right",
    "padding-top",
    "page-break-after",
    "page-break-before",
    "page-break-inside",
    "pause",
    "pause-after",
    "pause-before",
    "perspective",
    "perspective-origin",
    "pointer-events",
    "position",
    "quotes",
    "resize",
    "rest",
    "rest-after",
    "rest-before",
    "right",
    "row-gap",
    "scroll-margin",
    "scroll-margin-block",
    "scroll-margin-block-end",
    "scroll-margin-block-start",
    "scroll-margin-bottom",
    "scroll-margin-inline",
    "scroll-margin-inline-end",
    "scroll-margin-inline-start",
    "scroll-margin-left",
    "scroll-margin-right",
    "scroll-margin-top",
    "scroll-padding",
    "scroll-padding-block",
    "scroll-padding-block-end",
    "scroll-padding-block-start",
    "scroll-padding-bottom",
    "scroll-padding-inline",
    "scroll-padding-inline-end",
    "scroll-padding-inline-start",
    "scroll-padding-left",
    "scroll-padding-right",
    "scroll-padding-top",
    "scroll-snap-align",
    "scroll-snap-stop",
    "scroll-snap-type",
    "scrollbar-color",
    "scrollbar-gutter",
    "scrollbar-width",
    "shape-image-threshold",
    "shape-margin",
    "shape-outside",
    "speak",
    "speak-as",
    "src",
    "tab-size",
    "table-layout",
    "text-align",
    "text-align-all",
    "text-align-last",
    "text-combine-upright",
    "text-decoration",
    "text-decoration-color",
    "text-decoration-line",
    "text-decoration-style",
    "text-emphasis",
    "text-emphasis-color",
    "text-emphasis-position",
    "text-emphasis-style",
    "text-indent",
    "text-justify",
    "text-orientation",
    "text-overflow",
    "text-rendering",
    "text-shadow",
    "text-transform",
    "text-underline-position",
    "top",
    "transform",
    "transform-box",
    "transform-origin",
    "transform-style",
    "transition",
    "transition-delay",
    "transition-duration",
    "transition-property",
    "transition-timing-function",
    "unicode-bidi",
    "vertical-align",
    "visibility",
    "voice-balance",
    "voice-duration",
    "voice-family",
    "voice-pitch",
    "voice-range",
    "voice-rate",
    "voice-stress",
    "voice-volume",
    "white-space",
    "widows",
    "width",
    "will-change",
    "word-break",
    "word-spacing",
    "word-wrap",
    "writing-mode",
    "z-index"
].reverse();
/*
Language: CSS
Category: common, css, web
Website: https://developer.mozilla.org/en-US/docs/Web/CSS
*/ /** @type LanguageFn */ function css(hljs) {
    const regex = hljs.regex;
    const modes = MODES(hljs);
    const VENDOR_PREFIX = {
        begin: /-(webkit|moz|ms|o)-(?=[a-z])/
    };
    const AT_MODIFIERS = "and or not only";
    const AT_PROPERTY_RE = /@-?\w[\w]*(-\w+)*/; // @-webkit-keyframes
    const IDENT_RE = "[a-zA-Z-][a-zA-Z0-9_-]*";
    const STRINGS = [
        hljs.APOS_STRING_MODE,
        hljs.QUOTE_STRING_MODE
    ];
    return {
        name: "CSS",
        case_insensitive: true,
        illegal: /[=|'\$]/,
        keywords: {
            keyframePosition: "from to"
        },
        classNameAliases: {
            // for visual continuity with `tag {}` and because we
            // don't have a great class for this?
            keyframePosition: "selector-tag"
        },
        contains: [
            modes.BLOCK_COMMENT,
            VENDOR_PREFIX,
            // to recognize keyframe 40% etc which are outside the scope of our
            // attribute value mode
            modes.CSS_NUMBER_MODE,
            {
                className: "selector-id",
                begin: /#[A-Za-z0-9_-]+/,
                relevance: 0
            },
            {
                className: "selector-class",
                begin: "\\." + IDENT_RE,
                relevance: 0
            },
            modes.ATTRIBUTE_SELECTOR_MODE,
            {
                className: "selector-pseudo",
                variants: [
                    {
                        begin: ":(" + PSEUDO_CLASSES.join("|") + ")"
                    },
                    {
                        begin: ":(:)?(" + PSEUDO_ELEMENTS.join("|") + ")"
                    }
                ]
            },
            // we may actually need this (12/2020)
            // { // pseudo-selector params
            //   begin: /\(/,
            //   end: /\)/,
            //   contains: [ hljs.CSS_NUMBER_MODE ]
            // },
            modes.CSS_VARIABLE,
            {
                className: "attribute",
                begin: "\\b(" + ATTRIBUTES.join("|") + ")\\b"
            },
            // attribute values
            {
                begin: /:/,
                end: /[;}{]/,
                contains: [
                    modes.BLOCK_COMMENT,
                    modes.HEXCOLOR,
                    modes.IMPORTANT,
                    modes.CSS_NUMBER_MODE,
                    ...STRINGS,
                    // needed to highlight these as strings and to avoid issues with
                    // illegal characters that might be inside urls that would tigger the
                    // languages illegal stack
                    {
                        begin: /(url|data-uri)\(/,
                        end: /\)/,
                        relevance: 0,
                        keywords: {
                            built_in: "url data-uri"
                        },
                        contains: [
                            ...STRINGS,
                            {
                                className: "string",
                                // any character other than `)` as in `url()` will be the start
                                // of a string, which ends with `)` (from the parent mode)
                                begin: /[^)]/,
                                endsWithParent: true,
                                excludeEnd: true
                            }
                        ]
                    },
                    modes.FUNCTION_DISPATCH
                ]
            },
            {
                begin: regex.lookahead(/@/),
                end: "[{;]",
                relevance: 0,
                illegal: /:/,
                contains: [
                    {
                        className: "keyword",
                        begin: AT_PROPERTY_RE
                    },
                    {
                        begin: /\s/,
                        endsWithParent: true,
                        excludeEnd: true,
                        relevance: 0,
                        keywords: {
                            $pattern: /[a-z-]+/,
                            keyword: AT_MODIFIERS,
                            attribute: MEDIA_FEATURES.join(" ")
                        },
                        contains: [
                            {
                                begin: /[a-z-]+(?=:)/,
                                className: "attribute"
                            },
                            ...STRINGS,
                            modes.CSS_NUMBER_MODE
                        ]
                    }
                ]
            },
            {
                className: "selector-tag",
                begin: "\\b(" + TAGS.join("|") + ")\\b"
            }
        ]
    };
}


;// CONCATENATED MODULE: ./node_modules/highlight.js/es/languages/diff.js
/*
Language: Diff
Description: Unified and context diff
Author: Vasily Polovnyov <vast@whiteants.net>
Website: https://www.gnu.org/software/diffutils/
Category: common
*/ /** @type LanguageFn */ function diff(hljs) {
    const regex = hljs.regex;
    return {
        name: "Diff",
        aliases: [
            "patch"
        ],
        contains: [
            {
                className: "meta",
                relevance: 10,
                match: regex.either(/^@@ +-\d+,\d+ +\+\d+,\d+ +@@/, /^\*\*\* +\d+,\d+ +\*\*\*\*$/, /^--- +\d+,\d+ +----$/)
            },
            {
                className: "comment",
                variants: [
                    {
                        begin: regex.either(/Index: /, /^index/, /={3,}/, /^-{3}/, /^\*{3} /, /^\+{3}/, /^diff --git/),
                        end: /$/
                    },
                    {
                        match: /^\*{15}$/
                    }
                ]
            },
            {
                className: "addition",
                begin: /^\+/,
                end: /$/
            },
            {
                className: "deletion",
                begin: /^-/,
                end: /$/
            },
            {
                className: "addition",
                begin: /^!/,
                end: /$/
            }
        ]
    };
}


;// CONCATENATED MODULE: ./node_modules/highlight.js/es/languages/go.js
/*
Language: Go
Author: Stephan Kountso aka StepLg <steplg@gmail.com>
Contributors: Evgeny Stepanischev <imbolk@gmail.com>
Description: Google go language (golang). For info about language
Website: http://golang.org/
Category: common, system
*/ function go(hljs) {
    const LITERALS = [
        "true",
        "false",
        "iota",
        "nil"
    ];
    const BUILT_INS = [
        "append",
        "cap",
        "close",
        "complex",
        "copy",
        "imag",
        "len",
        "make",
        "new",
        "panic",
        "print",
        "println",
        "real",
        "recover",
        "delete"
    ];
    const TYPES = [
        "bool",
        "byte",
        "complex64",
        "complex128",
        "error",
        "float32",
        "float64",
        "int8",
        "int16",
        "int32",
        "int64",
        "string",
        "uint8",
        "uint16",
        "uint32",
        "uint64",
        "int",
        "uint",
        "uintptr",
        "rune"
    ];
    const KWS = [
        "break",
        "case",
        "chan",
        "const",
        "continue",
        "default",
        "defer",
        "else",
        "fallthrough",
        "for",
        "func",
        "go",
        "goto",
        "if",
        "import",
        "interface",
        "map",
        "package",
        "range",
        "return",
        "select",
        "struct",
        "switch",
        "type",
        "var"
    ];
    const KEYWORDS = {
        keyword: KWS,
        type: TYPES,
        literal: LITERALS,
        built_in: BUILT_INS
    };
    return {
        name: "Go",
        aliases: [
            "golang"
        ],
        keywords: KEYWORDS,
        illegal: "</",
        contains: [
            hljs.C_LINE_COMMENT_MODE,
            hljs.C_BLOCK_COMMENT_MODE,
            {
                className: "string",
                variants: [
                    hljs.QUOTE_STRING_MODE,
                    hljs.APOS_STRING_MODE,
                    {
                        begin: "`",
                        end: "`"
                    }
                ]
            },
            {
                className: "number",
                variants: [
                    {
                        begin: hljs.C_NUMBER_RE + "[i]",
                        relevance: 1
                    },
                    hljs.C_NUMBER_MODE
                ]
            },
            {
                begin: /:=/ // relevance booster
            },
            {
                className: "function",
                beginKeywords: "func",
                end: "\\s*(\\{|$)",
                excludeEnd: true,
                contains: [
                    hljs.TITLE_MODE,
                    {
                        className: "params",
                        begin: /\(/,
                        end: /\)/,
                        endsParent: true,
                        keywords: KEYWORDS,
                        illegal: /["']/
                    }
                ]
            }
        ]
    };
}


;// CONCATENATED MODULE: ./node_modules/highlight.js/es/languages/graphql.js
/*
 Language: GraphQL
 Author: John Foster (GH jf990), and others
 Description: GraphQL is a query language for APIs
 Category: web, common
*/ /** @type LanguageFn */ function graphql(hljs) {
    const regex = hljs.regex;
    const GQL_NAME = /[_A-Za-z][_0-9A-Za-z]*/;
    return {
        name: "GraphQL",
        aliases: [
            "gql"
        ],
        case_insensitive: true,
        disableAutodetect: false,
        keywords: {
            keyword: [
                "query",
                "mutation",
                "subscription",
                "type",
                "input",
                "schema",
                "directive",
                "interface",
                "union",
                "scalar",
                "fragment",
                "enum",
                "on"
            ],
            literal: [
                "true",
                "false",
                "null"
            ]
        },
        contains: [
            hljs.HASH_COMMENT_MODE,
            hljs.QUOTE_STRING_MODE,
            hljs.NUMBER_MODE,
            {
                scope: "punctuation",
                match: /[.]{3}/,
                relevance: 0
            },
            {
                scope: "punctuation",
                begin: /[\!\(\)\:\=\[\]\{\|\}]{1}/,
                relevance: 0
            },
            {
                scope: "variable",
                begin: /\$/,
                end: /\W/,
                excludeEnd: true,
                relevance: 0
            },
            {
                scope: "meta",
                match: /@\w+/,
                excludeEnd: true
            },
            {
                scope: "symbol",
                begin: regex.concat(GQL_NAME, regex.lookahead(/\s*:/)),
                relevance: 0
            }
        ],
        illegal: [
            /[;<']/,
            /BEGIN/
        ]
    };
}


;// CONCATENATED MODULE: ./node_modules/highlight.js/es/languages/ini.js
/*
Language: TOML, also INI
Description: TOML aims to be a minimal configuration file format that's easy to read due to obvious semantics.
Contributors: Guillaume Gomez <guillaume1.gomez@gmail.com>
Category: common, config
Website: https://github.com/toml-lang/toml
*/ function ini(hljs) {
    const regex = hljs.regex;
    const NUMBERS = {
        className: "number",
        relevance: 0,
        variants: [
            {
                begin: /([+-]+)?[\d]+_[\d_]+/
            },
            {
                begin: hljs.NUMBER_RE
            }
        ]
    };
    const COMMENTS = hljs.COMMENT();
    COMMENTS.variants = [
        {
            begin: /;/,
            end: /$/
        },
        {
            begin: /#/,
            end: /$/
        }
    ];
    const VARIABLES = {
        className: "variable",
        variants: [
            {
                begin: /\$[\w\d"][\w\d_]*/
            },
            {
                begin: /\$\{(.*?)\}/
            }
        ]
    };
    const LITERALS = {
        className: "literal",
        begin: /\bon|off|true|false|yes|no\b/
    };
    const STRINGS = {
        className: "string",
        contains: [
            hljs.BACKSLASH_ESCAPE
        ],
        variants: [
            {
                begin: "'''",
                end: "'''",
                relevance: 10
            },
            {
                begin: '"""',
                end: '"""',
                relevance: 10
            },
            {
                begin: '"',
                end: '"'
            },
            {
                begin: "'",
                end: "'"
            }
        ]
    };
    const ARRAY = {
        begin: /\[/,
        end: /\]/,
        contains: [
            COMMENTS,
            LITERALS,
            VARIABLES,
            STRINGS,
            NUMBERS,
            "self"
        ],
        relevance: 0
    };
    const BARE_KEY = /[A-Za-z0-9_-]+/;
    const QUOTED_KEY_DOUBLE_QUOTE = /"(\\"|[^"])*"/;
    const QUOTED_KEY_SINGLE_QUOTE = /'[^']*'/;
    const ANY_KEY = regex.either(BARE_KEY, QUOTED_KEY_DOUBLE_QUOTE, QUOTED_KEY_SINGLE_QUOTE);
    const DOTTED_KEY = regex.concat(ANY_KEY, "(\\s*\\.\\s*", ANY_KEY, ")*", regex.lookahead(/\s*=\s*[^#\s]/));
    return {
        name: "TOML, also INI",
        aliases: [
            "toml"
        ],
        case_insensitive: true,
        illegal: /\S/,
        contains: [
            COMMENTS,
            {
                className: "section",
                begin: /\[+/,
                end: /\]+/
            },
            {
                begin: DOTTED_KEY,
                className: "attr",
                starts: {
                    end: /$/,
                    contains: [
                        COMMENTS,
                        ARRAY,
                        LITERALS,
                        VARIABLES,
                        STRINGS,
                        NUMBERS
                    ]
                }
            }
        ]
    };
}


;// CONCATENATED MODULE: ./node_modules/highlight.js/es/languages/java.js
// https://docs.oracle.com/javase/specs/jls/se15/html/jls-3.html#jls-3.10
var decimalDigits = "[0-9](_*[0-9])*";
var frac = `\\.(${decimalDigits})`;
var hexDigits = "[0-9a-fA-F](_*[0-9a-fA-F])*";
var NUMERIC = {
    className: "number",
    variants: [
        // DecimalFloatingPointLiteral
        // including ExponentPart
        {
            begin: `(\\b(${decimalDigits})((${frac})|\\.)?|(${frac}))` + `[eE][+-]?(${decimalDigits})[fFdD]?\\b`
        },
        // excluding ExponentPart
        {
            begin: `\\b(${decimalDigits})((${frac})[fFdD]?\\b|\\.([fFdD]\\b)?)`
        },
        {
            begin: `(${frac})[fFdD]?\\b`
        },
        {
            begin: `\\b(${decimalDigits})[fFdD]\\b`
        },
        // HexadecimalFloatingPointLiteral
        {
            begin: `\\b0[xX]((${hexDigits})\\.?|(${hexDigits})?\\.(${hexDigits}))` + `[pP][+-]?(${decimalDigits})[fFdD]?\\b`
        },
        // DecimalIntegerLiteral
        {
            begin: "\\b(0|[1-9](_*[0-9])*)[lL]?\\b"
        },
        // HexIntegerLiteral
        {
            begin: `\\b0[xX](${hexDigits})[lL]?\\b`
        },
        // OctalIntegerLiteral
        {
            begin: "\\b0(_*[0-7])*[lL]?\\b"
        },
        // BinaryIntegerLiteral
        {
            begin: "\\b0[bB][01](_*[01])*[lL]?\\b"
        }
    ],
    relevance: 0
};
/*
Language: Java
Author: Vsevolod Solovyov <vsevolod.solovyov@gmail.com>
Category: common, enterprise
Website: https://www.java.com/
*/ /**
 * Allows recursive regex expressions to a given depth
 *
 * ie: recurRegex("(abc~~~)", /~~~/g, 2) becomes:
 * (abc(abc(abc)))
 *
 * @param {string} re
 * @param {RegExp} substitution (should be a g mode regex)
 * @param {number} depth
 * @returns {string}``
 */ function recurRegex(re, substitution, depth) {
    if (depth === -1) return "";
    return re.replace(substitution, (_)=>{
        return recurRegex(re, substitution, depth - 1);
    });
}
/** @type LanguageFn */ function java(hljs) {
    const regex = hljs.regex;
    const JAVA_IDENT_RE = "[\xc0-ʸa-zA-Z_$][\xc0-ʸa-zA-Z_$0-9]*";
    const GENERIC_IDENT_RE = JAVA_IDENT_RE + recurRegex("(?:<" + JAVA_IDENT_RE + "~~~(?:\\s*,\\s*" + JAVA_IDENT_RE + "~~~)*>)?", /~~~/g, 2);
    const MAIN_KEYWORDS = [
        "synchronized",
        "abstract",
        "private",
        "var",
        "static",
        "if",
        "const ",
        "for",
        "while",
        "strictfp",
        "finally",
        "protected",
        "import",
        "native",
        "final",
        "void",
        "enum",
        "else",
        "break",
        "transient",
        "catch",
        "instanceof",
        "volatile",
        "case",
        "assert",
        "package",
        "default",
        "public",
        "try",
        "switch",
        "continue",
        "throws",
        "protected",
        "public",
        "private",
        "module",
        "requires",
        "exports",
        "do",
        "sealed",
        "yield",
        "permits"
    ];
    const BUILT_INS = [
        "super",
        "this"
    ];
    const LITERALS = [
        "false",
        "true",
        "null"
    ];
    const TYPES = [
        "char",
        "boolean",
        "long",
        "float",
        "int",
        "byte",
        "short",
        "double"
    ];
    const KEYWORDS = {
        keyword: MAIN_KEYWORDS,
        literal: LITERALS,
        type: TYPES,
        built_in: BUILT_INS
    };
    const ANNOTATION = {
        className: "meta",
        begin: "@" + JAVA_IDENT_RE,
        contains: [
            {
                begin: /\(/,
                end: /\)/,
                contains: [
                    "self"
                ] // allow nested () inside our annotation
            }
        ]
    };
    const PARAMS = {
        className: "params",
        begin: /\(/,
        end: /\)/,
        keywords: KEYWORDS,
        relevance: 0,
        contains: [
            hljs.C_BLOCK_COMMENT_MODE
        ],
        endsParent: true
    };
    return {
        name: "Java",
        aliases: [
            "jsp"
        ],
        keywords: KEYWORDS,
        illegal: /<\/|#/,
        contains: [
            hljs.COMMENT("/\\*\\*", "\\*/", {
                relevance: 0,
                contains: [
                    {
                        // eat up @'s in emails to prevent them to be recognized as doctags
                        begin: /\w+@/,
                        relevance: 0
                    },
                    {
                        className: "doctag",
                        begin: "@[A-Za-z]+"
                    }
                ]
            }),
            // relevance boost
            {
                begin: /import java\.[a-z]+\./,
                keywords: "import",
                relevance: 2
            },
            hljs.C_LINE_COMMENT_MODE,
            hljs.C_BLOCK_COMMENT_MODE,
            {
                begin: /"""/,
                end: /"""/,
                className: "string",
                contains: [
                    hljs.BACKSLASH_ESCAPE
                ]
            },
            hljs.APOS_STRING_MODE,
            hljs.QUOTE_STRING_MODE,
            {
                match: [
                    /\b(?:class|interface|enum|extends|implements|new)/,
                    /\s+/,
                    JAVA_IDENT_RE
                ],
                className: {
                    1: "keyword",
                    3: "title.class"
                }
            },
            {
                // Exceptions for hyphenated keywords
                match: /non-sealed/,
                scope: "keyword"
            },
            {
                begin: [
                    regex.concat(/(?!else)/, JAVA_IDENT_RE),
                    /\s+/,
                    JAVA_IDENT_RE,
                    /\s+/,
                    /=(?!=)/
                ],
                className: {
                    1: "type",
                    3: "variable",
                    5: "operator"
                }
            },
            {
                begin: [
                    /record/,
                    /\s+/,
                    JAVA_IDENT_RE
                ],
                className: {
                    1: "keyword",
                    3: "title.class"
                },
                contains: [
                    PARAMS,
                    hljs.C_LINE_COMMENT_MODE,
                    hljs.C_BLOCK_COMMENT_MODE
                ]
            },
            {
                // Expression keywords prevent 'keyword Name(...)' from being
                // recognized as a function definition
                beginKeywords: "new throw return else",
                relevance: 0
            },
            {
                begin: [
                    "(?:" + GENERIC_IDENT_RE + "\\s+)",
                    hljs.UNDERSCORE_IDENT_RE,
                    /\s*(?=\()/
                ],
                className: {
                    2: "title.function"
                },
                keywords: KEYWORDS,
                contains: [
                    {
                        className: "params",
                        begin: /\(/,
                        end: /\)/,
                        keywords: KEYWORDS,
                        relevance: 0,
                        contains: [
                            ANNOTATION,
                            hljs.APOS_STRING_MODE,
                            hljs.QUOTE_STRING_MODE,
                            NUMERIC,
                            hljs.C_BLOCK_COMMENT_MODE
                        ]
                    },
                    hljs.C_LINE_COMMENT_MODE,
                    hljs.C_BLOCK_COMMENT_MODE
                ]
            },
            NUMERIC,
            ANNOTATION
        ]
    };
}


;// CONCATENATED MODULE: ./node_modules/highlight.js/es/languages/javascript.js
const IDENT_RE = "[A-Za-z$_][0-9A-Za-z$_]*";
const KEYWORDS = [
    "as",
    "in",
    "of",
    "if",
    "for",
    "while",
    "finally",
    "var",
    "new",
    "function",
    "do",
    "return",
    "void",
    "else",
    "break",
    "catch",
    "instanceof",
    "with",
    "throw",
    "case",
    "default",
    "try",
    "switch",
    "continue",
    "typeof",
    "delete",
    "let",
    "yield",
    "const",
    "class",
    // JS handles these with a special rule
    // "get",
    // "set",
    "debugger",
    "async",
    "await",
    "static",
    "import",
    "from",
    "export",
    "extends"
];
const LITERALS = [
    "true",
    "false",
    "null",
    "undefined",
    "NaN",
    "Infinity"
];
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects
const TYPES = [
    // Fundamental objects
    "Object",
    "Function",
    "Boolean",
    "Symbol",
    // numbers and dates
    "Math",
    "Date",
    "Number",
    "BigInt",
    // text
    "String",
    "RegExp",
    // Indexed collections
    "Array",
    "Float32Array",
    "Float64Array",
    "Int8Array",
    "Uint8Array",
    "Uint8ClampedArray",
    "Int16Array",
    "Int32Array",
    "Uint16Array",
    "Uint32Array",
    "BigInt64Array",
    "BigUint64Array",
    // Keyed collections
    "Set",
    "Map",
    "WeakSet",
    "WeakMap",
    // Structured data
    "ArrayBuffer",
    "SharedArrayBuffer",
    "Atomics",
    "DataView",
    "JSON",
    // Control abstraction objects
    "Promise",
    "Generator",
    "GeneratorFunction",
    "AsyncFunction",
    // Reflection
    "Reflect",
    "Proxy",
    // Internationalization
    "Intl",
    // WebAssembly
    "WebAssembly"
];
const ERROR_TYPES = [
    "Error",
    "EvalError",
    "InternalError",
    "RangeError",
    "ReferenceError",
    "SyntaxError",
    "TypeError",
    "URIError"
];
const BUILT_IN_GLOBALS = [
    "setInterval",
    "setTimeout",
    "clearInterval",
    "clearTimeout",
    "require",
    "exports",
    "eval",
    "isFinite",
    "isNaN",
    "parseFloat",
    "parseInt",
    "decodeURI",
    "decodeURIComponent",
    "encodeURI",
    "encodeURIComponent",
    "escape",
    "unescape"
];
const BUILT_IN_VARIABLES = [
    "arguments",
    "this",
    "super",
    "console",
    "window",
    "document",
    "localStorage",
    "sessionStorage",
    "module",
    "global" // Node.js
];
const BUILT_INS = [].concat(BUILT_IN_GLOBALS, TYPES, ERROR_TYPES);
/*
Language: JavaScript
Description: JavaScript (JS) is a lightweight, interpreted, or just-in-time compiled programming language with first-class functions.
Category: common, scripting, web
Website: https://developer.mozilla.org/en-US/docs/Web/JavaScript
*/ /** @type LanguageFn */ function javascript(hljs) {
    const regex = hljs.regex;
    /**
   * Takes a string like "<Booger" and checks to see
   * if we can find a matching "</Booger" later in the
   * content.
   * @param {RegExpMatchArray} match
   * @param {{after:number}} param1
   */ const hasClosingTag = (match, { after })=>{
        const tag = "</" + match[0].slice(1);
        const pos = match.input.indexOf(tag, after);
        return pos !== -1;
    };
    const IDENT_RE$1 = IDENT_RE;
    const FRAGMENT = {
        begin: "<>",
        end: "</>"
    };
    // to avoid some special cases inside isTrulyOpeningTag
    const XML_SELF_CLOSING = /<[A-Za-z0-9\\._:-]+\s*\/>/;
    const XML_TAG = {
        begin: /<[A-Za-z0-9\\._:-]+/,
        end: /\/[A-Za-z0-9\\._:-]+>|\/>/,
        /**
     * @param {RegExpMatchArray} match
     * @param {CallbackResponse} response
     */ isTrulyOpeningTag: (match, response)=>{
            const afterMatchIndex = match[0].length + match.index;
            const nextChar = match.input[afterMatchIndex];
            if (// HTML should not include another raw `<` inside a tag
            // nested type?
            // `<Array<Array<number>>`, etc.
            nextChar === "<" || // the , gives away that this is not HTML
            // `<T, A extends keyof T, V>`
            nextChar === ",") {
                response.ignoreMatch();
                return;
            }
            // `<something>`
            // Quite possibly a tag, lets look for a matching closing tag...
            if (nextChar === ">") {
                // if we cannot find a matching closing tag, then we
                // will ignore it
                if (!hasClosingTag(match, {
                    after: afterMatchIndex
                })) {
                    response.ignoreMatch();
                }
            }
            // `<blah />` (self-closing)
            // handled by simpleSelfClosing rule
            let m;
            const afterMatch = match.input.substring(afterMatchIndex);
            // some more template typing stuff
            //  <T = any>(key?: string) => Modify<
            if (m = afterMatch.match(/^\s*=/)) {
                response.ignoreMatch();
                return;
            }
            // `<From extends string>`
            // technically this could be HTML, but it smells like a type
            // NOTE: This is ugh, but added specifically for https://github.com/highlightjs/highlight.js/issues/3276
            if (m = afterMatch.match(/^\s+extends\s+/)) {
                if (m.index === 0) {
                    response.ignoreMatch();
                    // eslint-disable-next-line no-useless-return
                    return;
                }
            }
        }
    };
    const KEYWORDS$1 = {
        $pattern: IDENT_RE,
        keyword: KEYWORDS,
        literal: LITERALS,
        built_in: BUILT_INS,
        "variable.language": BUILT_IN_VARIABLES
    };
    // https://tc39.es/ecma262/#sec-literals-numeric-literals
    const decimalDigits = "[0-9](_?[0-9])*";
    const frac = `\\.(${decimalDigits})`;
    // DecimalIntegerLiteral, including Annex B NonOctalDecimalIntegerLiteral
    // https://tc39.es/ecma262/#sec-additional-syntax-numeric-literals
    const decimalInteger = `0|[1-9](_?[0-9])*|0[0-7]*[89][0-9]*`;
    const NUMBER = {
        className: "number",
        variants: [
            // DecimalLiteral
            {
                begin: `(\\b(${decimalInteger})((${frac})|\\.)?|(${frac}))` + `[eE][+-]?(${decimalDigits})\\b`
            },
            {
                begin: `\\b(${decimalInteger})\\b((${frac})\\b|\\.)?|(${frac})\\b`
            },
            // DecimalBigIntegerLiteral
            {
                begin: `\\b(0|[1-9](_?[0-9])*)n\\b`
            },
            // NonDecimalIntegerLiteral
            {
                begin: "\\b0[xX][0-9a-fA-F](_?[0-9a-fA-F])*n?\\b"
            },
            {
                begin: "\\b0[bB][0-1](_?[0-1])*n?\\b"
            },
            {
                begin: "\\b0[oO][0-7](_?[0-7])*n?\\b"
            },
            // LegacyOctalIntegerLiteral (does not include underscore separators)
            // https://tc39.es/ecma262/#sec-additional-syntax-numeric-literals
            {
                begin: "\\b0[0-7]+n?\\b"
            }
        ],
        relevance: 0
    };
    const SUBST = {
        className: "subst",
        begin: "\\$\\{",
        end: "\\}",
        keywords: KEYWORDS$1,
        contains: [] // defined later
    };
    const HTML_TEMPLATE = {
        begin: "html`",
        end: "",
        starts: {
            end: "`",
            returnEnd: false,
            contains: [
                hljs.BACKSLASH_ESCAPE,
                SUBST
            ],
            subLanguage: "xml"
        }
    };
    const CSS_TEMPLATE = {
        begin: "css`",
        end: "",
        starts: {
            end: "`",
            returnEnd: false,
            contains: [
                hljs.BACKSLASH_ESCAPE,
                SUBST
            ],
            subLanguage: "css"
        }
    };
    const GRAPHQL_TEMPLATE = {
        begin: "gql`",
        end: "",
        starts: {
            end: "`",
            returnEnd: false,
            contains: [
                hljs.BACKSLASH_ESCAPE,
                SUBST
            ],
            subLanguage: "graphql"
        }
    };
    const TEMPLATE_STRING = {
        className: "string",
        begin: "`",
        end: "`",
        contains: [
            hljs.BACKSLASH_ESCAPE,
            SUBST
        ]
    };
    const JSDOC_COMMENT = hljs.COMMENT(/\/\*\*(?!\/)/, "\\*/", {
        relevance: 0,
        contains: [
            {
                begin: "(?=@[A-Za-z]+)",
                relevance: 0,
                contains: [
                    {
                        className: "doctag",
                        begin: "@[A-Za-z]+"
                    },
                    {
                        className: "type",
                        begin: "\\{",
                        end: "\\}",
                        excludeEnd: true,
                        excludeBegin: true,
                        relevance: 0
                    },
                    {
                        className: "variable",
                        begin: IDENT_RE$1 + "(?=\\s*(-)|$)",
                        endsParent: true,
                        relevance: 0
                    },
                    // eat spaces (not newlines) so we can find
                    // types or variables
                    {
                        begin: /(?=[^\n])\s/,
                        relevance: 0
                    }
                ]
            }
        ]
    });
    const COMMENT = {
        className: "comment",
        variants: [
            JSDOC_COMMENT,
            hljs.C_BLOCK_COMMENT_MODE,
            hljs.C_LINE_COMMENT_MODE
        ]
    };
    const SUBST_INTERNALS = [
        hljs.APOS_STRING_MODE,
        hljs.QUOTE_STRING_MODE,
        HTML_TEMPLATE,
        CSS_TEMPLATE,
        GRAPHQL_TEMPLATE,
        TEMPLATE_STRING,
        // Skip numbers when they are part of a variable name
        {
            match: /\$\d+/
        },
        NUMBER
    ];
    SUBST.contains = SUBST_INTERNALS.concat({
        // we need to pair up {} inside our subst to prevent
        // it from ending too early by matching another }
        begin: /\{/,
        end: /\}/,
        keywords: KEYWORDS$1,
        contains: [
            "self"
        ].concat(SUBST_INTERNALS)
    });
    const SUBST_AND_COMMENTS = [].concat(COMMENT, SUBST.contains);
    const PARAMS_CONTAINS = SUBST_AND_COMMENTS.concat([
        // eat recursive parens in sub expressions
        {
            begin: /\(/,
            end: /\)/,
            keywords: KEYWORDS$1,
            contains: [
                "self"
            ].concat(SUBST_AND_COMMENTS)
        }
    ]);
    const PARAMS = {
        className: "params",
        begin: /\(/,
        end: /\)/,
        excludeBegin: true,
        excludeEnd: true,
        keywords: KEYWORDS$1,
        contains: PARAMS_CONTAINS
    };
    // ES6 classes
    const CLASS_OR_EXTENDS = {
        variants: [
            // class Car extends vehicle
            {
                match: [
                    /class/,
                    /\s+/,
                    IDENT_RE$1,
                    /\s+/,
                    /extends/,
                    /\s+/,
                    regex.concat(IDENT_RE$1, "(", regex.concat(/\./, IDENT_RE$1), ")*")
                ],
                scope: {
                    1: "keyword",
                    3: "title.class",
                    5: "keyword",
                    7: "title.class.inherited"
                }
            },
            // class Car
            {
                match: [
                    /class/,
                    /\s+/,
                    IDENT_RE$1
                ],
                scope: {
                    1: "keyword",
                    3: "title.class"
                }
            }
        ]
    };
    const CLASS_REFERENCE = {
        relevance: 0,
        match: regex.either(// Hard coded exceptions
        /\bJSON/, // Float32Array, OutT
        /\b[A-Z][a-z]+([A-Z][a-z]*|\d)*/, // CSSFactory, CSSFactoryT
        /\b[A-Z]{2,}([A-Z][a-z]+|\d)+([A-Z][a-z]*)*/, // FPs, FPsT
        /\b[A-Z]{2,}[a-z]+([A-Z][a-z]+|\d)*([A-Z][a-z]*)*/),
        className: "title.class",
        keywords: {
            _: [
                // se we still get relevance credit for JS library classes
                ...TYPES,
                ...ERROR_TYPES
            ]
        }
    };
    const USE_STRICT = {
        label: "use_strict",
        className: "meta",
        relevance: 10,
        begin: /^\s*['"]use (strict|asm)['"]/
    };
    const FUNCTION_DEFINITION = {
        variants: [
            {
                match: [
                    /function/,
                    /\s+/,
                    IDENT_RE$1,
                    /(?=\s*\()/
                ]
            },
            // anonymous function
            {
                match: [
                    /function/,
                    /\s*(?=\()/
                ]
            }
        ],
        className: {
            1: "keyword",
            3: "title.function"
        },
        label: "func.def",
        contains: [
            PARAMS
        ],
        illegal: /%/
    };
    const UPPER_CASE_CONSTANT = {
        relevance: 0,
        match: /\b[A-Z][A-Z_0-9]+\b/,
        className: "variable.constant"
    };
    function noneOf(list) {
        return regex.concat("(?!", list.join("|"), ")");
    }
    const FUNCTION_CALL = {
        match: regex.concat(/\b/, noneOf([
            ...BUILT_IN_GLOBALS,
            "super",
            "import"
        ]), IDENT_RE$1, regex.lookahead(/\(/)),
        className: "title.function",
        relevance: 0
    };
    const PROPERTY_ACCESS = {
        begin: regex.concat(/\./, regex.lookahead(regex.concat(IDENT_RE$1, /(?![0-9A-Za-z$_(])/))),
        end: IDENT_RE$1,
        excludeBegin: true,
        keywords: "prototype",
        className: "property",
        relevance: 0
    };
    const GETTER_OR_SETTER = {
        match: [
            /get|set/,
            /\s+/,
            IDENT_RE$1,
            /(?=\()/
        ],
        className: {
            1: "keyword",
            3: "title.function"
        },
        contains: [
            {
                begin: /\(\)/
            },
            PARAMS
        ]
    };
    const FUNC_LEAD_IN_RE = "(\\(" + "[^()]*(\\(" + "[^()]*(\\(" + "[^()]*" + "\\)[^()]*)*" + "\\)[^()]*)*" + "\\)|" + hljs.UNDERSCORE_IDENT_RE + ")\\s*=>";
    const FUNCTION_VARIABLE = {
        match: [
            /const|var|let/,
            /\s+/,
            IDENT_RE$1,
            /\s*/,
            /=\s*/,
            /(async\s*)?/,
            regex.lookahead(FUNC_LEAD_IN_RE)
        ],
        keywords: "async",
        className: {
            1: "keyword",
            3: "title.function"
        },
        contains: [
            PARAMS
        ]
    };
    return {
        name: "JavaScript",
        aliases: [
            "js",
            "jsx",
            "mjs",
            "cjs"
        ],
        keywords: KEYWORDS$1,
        // this will be extended by TypeScript
        exports: {
            PARAMS_CONTAINS,
            CLASS_REFERENCE
        },
        illegal: /#(?![$_A-z])/,
        contains: [
            hljs.SHEBANG({
                label: "shebang",
                binary: "node",
                relevance: 5
            }),
            USE_STRICT,
            hljs.APOS_STRING_MODE,
            hljs.QUOTE_STRING_MODE,
            HTML_TEMPLATE,
            CSS_TEMPLATE,
            GRAPHQL_TEMPLATE,
            TEMPLATE_STRING,
            COMMENT,
            // Skip numbers when they are part of a variable name
            {
                match: /\$\d+/
            },
            NUMBER,
            CLASS_REFERENCE,
            {
                className: "attr",
                begin: IDENT_RE$1 + regex.lookahead(":"),
                relevance: 0
            },
            FUNCTION_VARIABLE,
            {
                begin: "(" + hljs.RE_STARTERS_RE + "|\\b(case|return|throw)\\b)\\s*",
                keywords: "return throw case",
                relevance: 0,
                contains: [
                    COMMENT,
                    hljs.REGEXP_MODE,
                    {
                        className: "function",
                        // we have to count the parens to make sure we actually have the
                        // correct bounding ( ) before the =>.  There could be any number of
                        // sub-expressions inside also surrounded by parens.
                        begin: FUNC_LEAD_IN_RE,
                        returnBegin: true,
                        end: "\\s*=>",
                        contains: [
                            {
                                className: "params",
                                variants: [
                                    {
                                        begin: hljs.UNDERSCORE_IDENT_RE,
                                        relevance: 0
                                    },
                                    {
                                        className: null,
                                        begin: /\(\s*\)/,
                                        skip: true
                                    },
                                    {
                                        begin: /\(/,
                                        end: /\)/,
                                        excludeBegin: true,
                                        excludeEnd: true,
                                        keywords: KEYWORDS$1,
                                        contains: PARAMS_CONTAINS
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        begin: /,/,
                        relevance: 0
                    },
                    {
                        match: /\s+/,
                        relevance: 0
                    },
                    {
                        variants: [
                            {
                                begin: FRAGMENT.begin,
                                end: FRAGMENT.end
                            },
                            {
                                match: XML_SELF_CLOSING
                            },
                            {
                                begin: XML_TAG.begin,
                                // we carefully check the opening tag to see if it truly
                                // is a tag and not a false positive
                                "on:begin": XML_TAG.isTrulyOpeningTag,
                                end: XML_TAG.end
                            }
                        ],
                        subLanguage: "xml",
                        contains: [
                            {
                                begin: XML_TAG.begin,
                                end: XML_TAG.end,
                                skip: true,
                                contains: [
                                    "self"
                                ]
                            }
                        ]
                    }
                ]
            },
            FUNCTION_DEFINITION,
            {
                // prevent this from getting swallowed up by function
                // since they appear "function like"
                beginKeywords: "while if switch catch for"
            },
            {
                // we have to count the parens to make sure we actually have the correct
                // bounding ( ).  There could be any number of sub-expressions inside
                // also surrounded by parens.
                begin: "\\b(?!function)" + hljs.UNDERSCORE_IDENT_RE + "\\(" + // first parens
                "[^()]*(\\(" + "[^()]*(\\(" + "[^()]*" + "\\)[^()]*)*" + "\\)[^()]*)*" + "\\)\\s*\\{",
                returnBegin: true,
                label: "func.def",
                contains: [
                    PARAMS,
                    hljs.inherit(hljs.TITLE_MODE, {
                        begin: IDENT_RE$1,
                        className: "title.function"
                    })
                ]
            },
            // catch ... so it won't trigger the property rule below
            {
                match: /\.\.\./,
                relevance: 0
            },
            PROPERTY_ACCESS,
            // hack: prevents detection of keywords in some circumstances
            // .keyword()
            // $keyword = x
            {
                match: "\\$" + IDENT_RE$1,
                relevance: 0
            },
            {
                match: [
                    /\bconstructor(?=\s*\()/
                ],
                className: {
                    1: "title.function"
                },
                contains: [
                    PARAMS
                ]
            },
            FUNCTION_CALL,
            UPPER_CASE_CONSTANT,
            CLASS_OR_EXTENDS,
            GETTER_OR_SETTER,
            {
                match: /\$[(.]/ // relevance booster for a pattern common to JS libs: `$(something)` and `$.something`
            }
        ]
    };
}


;// CONCATENATED MODULE: ./node_modules/highlight.js/es/languages/json.js
/*
Language: JSON
Description: JSON (JavaScript Object Notation) is a lightweight data-interchange format.
Author: Ivan Sagalaev <maniac@softwaremaniacs.org>
Website: http://www.json.org
Category: common, protocols, web
*/ function json(hljs) {
    const ATTRIBUTE = {
        className: "attr",
        begin: /"(\\.|[^\\"\r\n])*"(?=\s*:)/,
        relevance: 1.01
    };
    const PUNCTUATION = {
        match: /[{}[\],:]/,
        className: "punctuation",
        relevance: 0
    };
    const LITERALS = [
        "true",
        "false",
        "null"
    ];
    // NOTE: normally we would rely on `keywords` for this but using a mode here allows us
    // - to use the very tight `illegal: \S` rule later to flag any other character
    // - as illegal indicating that despite looking like JSON we do not truly have
    // - JSON and thus improve false-positively greatly since JSON will try and claim
    // - all sorts of JSON looking stuff
    const LITERALS_MODE = {
        scope: "literal",
        beginKeywords: LITERALS.join(" ")
    };
    return {
        name: "JSON",
        keywords: {
            literal: LITERALS
        },
        contains: [
            ATTRIBUTE,
            PUNCTUATION,
            hljs.QUOTE_STRING_MODE,
            LITERALS_MODE,
            hljs.C_NUMBER_MODE,
            hljs.C_LINE_COMMENT_MODE,
            hljs.C_BLOCK_COMMENT_MODE
        ],
        illegal: "\\S"
    };
}


;// CONCATENATED MODULE: ./node_modules/highlight.js/es/languages/kotlin.js
// https://docs.oracle.com/javase/specs/jls/se15/html/jls-3.html#jls-3.10
var kotlin_decimalDigits = "[0-9](_*[0-9])*";
var kotlin_frac = `\\.(${kotlin_decimalDigits})`;
var kotlin_hexDigits = "[0-9a-fA-F](_*[0-9a-fA-F])*";
var kotlin_NUMERIC = {
    className: "number",
    variants: [
        // DecimalFloatingPointLiteral
        // including ExponentPart
        {
            begin: `(\\b(${kotlin_decimalDigits})((${kotlin_frac})|\\.)?|(${kotlin_frac}))` + `[eE][+-]?(${kotlin_decimalDigits})[fFdD]?\\b`
        },
        // excluding ExponentPart
        {
            begin: `\\b(${kotlin_decimalDigits})((${kotlin_frac})[fFdD]?\\b|\\.([fFdD]\\b)?)`
        },
        {
            begin: `(${kotlin_frac})[fFdD]?\\b`
        },
        {
            begin: `\\b(${kotlin_decimalDigits})[fFdD]\\b`
        },
        // HexadecimalFloatingPointLiteral
        {
            begin: `\\b0[xX]((${kotlin_hexDigits})\\.?|(${kotlin_hexDigits})?\\.(${kotlin_hexDigits}))` + `[pP][+-]?(${kotlin_decimalDigits})[fFdD]?\\b`
        },
        // DecimalIntegerLiteral
        {
            begin: "\\b(0|[1-9](_*[0-9])*)[lL]?\\b"
        },
        // HexIntegerLiteral
        {
            begin: `\\b0[xX](${kotlin_hexDigits})[lL]?\\b`
        },
        // OctalIntegerLiteral
        {
            begin: "\\b0(_*[0-7])*[lL]?\\b"
        },
        // BinaryIntegerLiteral
        {
            begin: "\\b0[bB][01](_*[01])*[lL]?\\b"
        }
    ],
    relevance: 0
};
/*
 Language: Kotlin
 Description: Kotlin is an OSS statically typed programming language that targets the JVM, Android, JavaScript and Native.
 Author: Sergey Mashkov <cy6erGn0m@gmail.com>
 Website: https://kotlinlang.org
 Category: common
 */ function kotlin(hljs) {
    const KEYWORDS = {
        keyword: "abstract as val var vararg get set class object open private protected public noinline " + "crossinline dynamic final enum if else do while for when throw try catch finally " + "import package is in fun override companion reified inline lateinit init " + "interface annotation data sealed internal infix operator out by constructor super " + "tailrec where const inner suspend typealias external expect actual",
        built_in: "Byte Short Char Int Long Boolean Float Double Void Unit Nothing",
        literal: "true false null"
    };
    const KEYWORDS_WITH_LABEL = {
        className: "keyword",
        begin: /\b(break|continue|return|this)\b/,
        starts: {
            contains: [
                {
                    className: "symbol",
                    begin: /@\w+/
                }
            ]
        }
    };
    const LABEL = {
        className: "symbol",
        begin: hljs.UNDERSCORE_IDENT_RE + "@"
    };
    // for string templates
    const SUBST = {
        className: "subst",
        begin: /\$\{/,
        end: /\}/,
        contains: [
            hljs.C_NUMBER_MODE
        ]
    };
    const VARIABLE = {
        className: "variable",
        begin: "\\$" + hljs.UNDERSCORE_IDENT_RE
    };
    const STRING = {
        className: "string",
        variants: [
            {
                begin: '"""',
                end: '"""(?=[^"])',
                contains: [
                    VARIABLE,
                    SUBST
                ]
            },
            // Can't use built-in modes easily, as we want to use STRING in the meta
            // context as 'meta-string' and there's no syntax to remove explicitly set
            // classNames in built-in modes.
            {
                begin: "'",
                end: "'",
                illegal: /\n/,
                contains: [
                    hljs.BACKSLASH_ESCAPE
                ]
            },
            {
                begin: '"',
                end: '"',
                illegal: /\n/,
                contains: [
                    hljs.BACKSLASH_ESCAPE,
                    VARIABLE,
                    SUBST
                ]
            }
        ]
    };
    SUBST.contains.push(STRING);
    const ANNOTATION_USE_SITE = {
        className: "meta",
        begin: "@(?:file|property|field|get|set|receiver|param|setparam|delegate)\\s*:(?:\\s*" + hljs.UNDERSCORE_IDENT_RE + ")?"
    };
    const ANNOTATION = {
        className: "meta",
        begin: "@" + hljs.UNDERSCORE_IDENT_RE,
        contains: [
            {
                begin: /\(/,
                end: /\)/,
                contains: [
                    hljs.inherit(STRING, {
                        className: "string"
                    }),
                    "self"
                ]
            }
        ]
    };
    // https://kotlinlang.org/docs/reference/whatsnew11.html#underscores-in-numeric-literals
    // According to the doc above, the number mode of kotlin is the same as java 8,
    // so the code below is copied from java.js
    const KOTLIN_NUMBER_MODE = kotlin_NUMERIC;
    const KOTLIN_NESTED_COMMENT = hljs.COMMENT("/\\*", "\\*/", {
        contains: [
            hljs.C_BLOCK_COMMENT_MODE
        ]
    });
    const KOTLIN_PAREN_TYPE = {
        variants: [
            {
                className: "type",
                begin: hljs.UNDERSCORE_IDENT_RE
            },
            {
                begin: /\(/,
                end: /\)/,
                contains: [] // defined later
            }
        ]
    };
    const KOTLIN_PAREN_TYPE2 = KOTLIN_PAREN_TYPE;
    KOTLIN_PAREN_TYPE2.variants[1].contains = [
        KOTLIN_PAREN_TYPE
    ];
    KOTLIN_PAREN_TYPE.variants[1].contains = [
        KOTLIN_PAREN_TYPE2
    ];
    return {
        name: "Kotlin",
        aliases: [
            "kt",
            "kts"
        ],
        keywords: KEYWORDS,
        contains: [
            hljs.COMMENT("/\\*\\*", "\\*/", {
                relevance: 0,
                contains: [
                    {
                        className: "doctag",
                        begin: "@[A-Za-z]+"
                    }
                ]
            }),
            hljs.C_LINE_COMMENT_MODE,
            KOTLIN_NESTED_COMMENT,
            KEYWORDS_WITH_LABEL,
            LABEL,
            ANNOTATION_USE_SITE,
            ANNOTATION,
            {
                className: "function",
                beginKeywords: "fun",
                end: "[(]|$",
                returnBegin: true,
                excludeEnd: true,
                keywords: KEYWORDS,
                relevance: 5,
                contains: [
                    {
                        begin: hljs.UNDERSCORE_IDENT_RE + "\\s*\\(",
                        returnBegin: true,
                        relevance: 0,
                        contains: [
                            hljs.UNDERSCORE_TITLE_MODE
                        ]
                    },
                    {
                        className: "type",
                        begin: /</,
                        end: />/,
                        keywords: "reified",
                        relevance: 0
                    },
                    {
                        className: "params",
                        begin: /\(/,
                        end: /\)/,
                        endsParent: true,
                        keywords: KEYWORDS,
                        relevance: 0,
                        contains: [
                            {
                                begin: /:/,
                                end: /[=,\/]/,
                                endsWithParent: true,
                                contains: [
                                    KOTLIN_PAREN_TYPE,
                                    hljs.C_LINE_COMMENT_MODE,
                                    KOTLIN_NESTED_COMMENT
                                ],
                                relevance: 0
                            },
                            hljs.C_LINE_COMMENT_MODE,
                            KOTLIN_NESTED_COMMENT,
                            ANNOTATION_USE_SITE,
                            ANNOTATION,
                            STRING,
                            hljs.C_NUMBER_MODE
                        ]
                    },
                    KOTLIN_NESTED_COMMENT
                ]
            },
            {
                begin: [
                    /class|interface|trait/,
                    /\s+/,
                    hljs.UNDERSCORE_IDENT_RE
                ],
                beginScope: {
                    3: "title.class"
                },
                keywords: "class interface trait",
                end: /[:\{(]|$/,
                excludeEnd: true,
                illegal: "extends implements",
                contains: [
                    {
                        beginKeywords: "public protected internal private constructor"
                    },
                    hljs.UNDERSCORE_TITLE_MODE,
                    {
                        className: "type",
                        begin: /</,
                        end: />/,
                        excludeBegin: true,
                        excludeEnd: true,
                        relevance: 0
                    },
                    {
                        className: "type",
                        begin: /[,:]\s*/,
                        end: /[<\(,){\s]|$/,
                        excludeBegin: true,
                        returnEnd: true
                    },
                    ANNOTATION_USE_SITE,
                    ANNOTATION
                ]
            },
            STRING,
            {
                className: "meta",
                begin: "^#!/usr/bin/env",
                end: "$",
                illegal: "\n"
            },
            KOTLIN_NUMBER_MODE
        ]
    };
}


;// CONCATENATED MODULE: ./node_modules/highlight.js/es/languages/less.js
const less_MODES = (hljs)=>{
    return {
        IMPORTANT: {
            scope: "meta",
            begin: "!important"
        },
        BLOCK_COMMENT: hljs.C_BLOCK_COMMENT_MODE,
        HEXCOLOR: {
            scope: "number",
            begin: /#(([0-9a-fA-F]{3,4})|(([0-9a-fA-F]{2}){3,4}))\b/
        },
        FUNCTION_DISPATCH: {
            className: "built_in",
            begin: /[\w-]+(?=\()/
        },
        ATTRIBUTE_SELECTOR_MODE: {
            scope: "selector-attr",
            begin: /\[/,
            end: /\]/,
            illegal: "$",
            contains: [
                hljs.APOS_STRING_MODE,
                hljs.QUOTE_STRING_MODE
            ]
        },
        CSS_NUMBER_MODE: {
            scope: "number",
            begin: hljs.NUMBER_RE + "(" + "%|em|ex|ch|rem" + "|vw|vh|vmin|vmax" + "|cm|mm|in|pt|pc|px" + "|deg|grad|rad|turn" + "|s|ms" + "|Hz|kHz" + "|dpi|dpcm|dppx" + ")?",
            relevance: 0
        },
        CSS_VARIABLE: {
            className: "attr",
            begin: /--[A-Za-z][A-Za-z0-9_-]*/
        }
    };
};
const less_TAGS = [
    "a",
    "abbr",
    "address",
    "article",
    "aside",
    "audio",
    "b",
    "blockquote",
    "body",
    "button",
    "canvas",
    "caption",
    "cite",
    "code",
    "dd",
    "del",
    "details",
    "dfn",
    "div",
    "dl",
    "dt",
    "em",
    "fieldset",
    "figcaption",
    "figure",
    "footer",
    "form",
    "h1",
    "h2",
    "h3",
    "h4",
    "h5",
    "h6",
    "header",
    "hgroup",
    "html",
    "i",
    "iframe",
    "img",
    "input",
    "ins",
    "kbd",
    "label",
    "legend",
    "li",
    "main",
    "mark",
    "menu",
    "nav",
    "object",
    "ol",
    "p",
    "q",
    "quote",
    "samp",
    "section",
    "span",
    "strong",
    "summary",
    "sup",
    "table",
    "tbody",
    "td",
    "textarea",
    "tfoot",
    "th",
    "thead",
    "time",
    "tr",
    "ul",
    "var",
    "video"
];
const less_MEDIA_FEATURES = [
    "any-hover",
    "any-pointer",
    "aspect-ratio",
    "color",
    "color-gamut",
    "color-index",
    "device-aspect-ratio",
    "device-height",
    "device-width",
    "display-mode",
    "forced-colors",
    "grid",
    "height",
    "hover",
    "inverted-colors",
    "monochrome",
    "orientation",
    "overflow-block",
    "overflow-inline",
    "pointer",
    "prefers-color-scheme",
    "prefers-contrast",
    "prefers-reduced-motion",
    "prefers-reduced-transparency",
    "resolution",
    "scan",
    "scripting",
    "update",
    "width",
    // TODO: find a better solution?
    "min-width",
    "max-width",
    "min-height",
    "max-height"
];
// https://developer.mozilla.org/en-US/docs/Web/CSS/Pseudo-classes
const less_PSEUDO_CLASSES = [
    "active",
    "any-link",
    "blank",
    "checked",
    "current",
    "default",
    "defined",
    "dir",
    "disabled",
    "drop",
    "empty",
    "enabled",
    "first",
    "first-child",
    "first-of-type",
    "fullscreen",
    "future",
    "focus",
    "focus-visible",
    "focus-within",
    "has",
    "host",
    "host-context",
    "hover",
    "indeterminate",
    "in-range",
    "invalid",
    "is",
    "lang",
    "last-child",
    "last-of-type",
    "left",
    "link",
    "local-link",
    "not",
    "nth-child",
    "nth-col",
    "nth-last-child",
    "nth-last-col",
    "nth-last-of-type",
    "nth-of-type",
    "only-child",
    "only-of-type",
    "optional",
    "out-of-range",
    "past",
    "placeholder-shown",
    "read-only",
    "read-write",
    "required",
    "right",
    "root",
    "scope",
    "target",
    "target-within",
    "user-invalid",
    "valid",
    "visited",
    "where" // where()
];
// https://developer.mozilla.org/en-US/docs/Web/CSS/Pseudo-elements
const less_PSEUDO_ELEMENTS = [
    "after",
    "backdrop",
    "before",
    "cue",
    "cue-region",
    "first-letter",
    "first-line",
    "grammar-error",
    "marker",
    "part",
    "placeholder",
    "selection",
    "slotted",
    "spelling-error"
];
const less_ATTRIBUTES = [
    "align-content",
    "align-items",
    "align-self",
    "all",
    "animation",
    "animation-delay",
    "animation-direction",
    "animation-duration",
    "animation-fill-mode",
    "animation-iteration-count",
    "animation-name",
    "animation-play-state",
    "animation-timing-function",
    "backface-visibility",
    "background",
    "background-attachment",
    "background-blend-mode",
    "background-clip",
    "background-color",
    "background-image",
    "background-origin",
    "background-position",
    "background-repeat",
    "background-size",
    "block-size",
    "border",
    "border-block",
    "border-block-color",
    "border-block-end",
    "border-block-end-color",
    "border-block-end-style",
    "border-block-end-width",
    "border-block-start",
    "border-block-start-color",
    "border-block-start-style",
    "border-block-start-width",
    "border-block-style",
    "border-block-width",
    "border-bottom",
    "border-bottom-color",
    "border-bottom-left-radius",
    "border-bottom-right-radius",
    "border-bottom-style",
    "border-bottom-width",
    "border-collapse",
    "border-color",
    "border-image",
    "border-image-outset",
    "border-image-repeat",
    "border-image-slice",
    "border-image-source",
    "border-image-width",
    "border-inline",
    "border-inline-color",
    "border-inline-end",
    "border-inline-end-color",
    "border-inline-end-style",
    "border-inline-end-width",
    "border-inline-start",
    "border-inline-start-color",
    "border-inline-start-style",
    "border-inline-start-width",
    "border-inline-style",
    "border-inline-width",
    "border-left",
    "border-left-color",
    "border-left-style",
    "border-left-width",
    "border-radius",
    "border-right",
    "border-right-color",
    "border-right-style",
    "border-right-width",
    "border-spacing",
    "border-style",
    "border-top",
    "border-top-color",
    "border-top-left-radius",
    "border-top-right-radius",
    "border-top-style",
    "border-top-width",
    "border-width",
    "bottom",
    "box-decoration-break",
    "box-shadow",
    "box-sizing",
    "break-after",
    "break-before",
    "break-inside",
    "caption-side",
    "caret-color",
    "clear",
    "clip",
    "clip-path",
    "clip-rule",
    "color",
    "column-count",
    "column-fill",
    "column-gap",
    "column-rule",
    "column-rule-color",
    "column-rule-style",
    "column-rule-width",
    "column-span",
    "column-width",
    "columns",
    "contain",
    "content",
    "content-visibility",
    "counter-increment",
    "counter-reset",
    "cue",
    "cue-after",
    "cue-before",
    "cursor",
    "direction",
    "display",
    "empty-cells",
    "filter",
    "flex",
    "flex-basis",
    "flex-direction",
    "flex-flow",
    "flex-grow",
    "flex-shrink",
    "flex-wrap",
    "float",
    "flow",
    "font",
    "font-display",
    "font-family",
    "font-feature-settings",
    "font-kerning",
    "font-language-override",
    "font-size",
    "font-size-adjust",
    "font-smoothing",
    "font-stretch",
    "font-style",
    "font-synthesis",
    "font-variant",
    "font-variant-caps",
    "font-variant-east-asian",
    "font-variant-ligatures",
    "font-variant-numeric",
    "font-variant-position",
    "font-variation-settings",
    "font-weight",
    "gap",
    "glyph-orientation-vertical",
    "grid",
    "grid-area",
    "grid-auto-columns",
    "grid-auto-flow",
    "grid-auto-rows",
    "grid-column",
    "grid-column-end",
    "grid-column-start",
    "grid-gap",
    "grid-row",
    "grid-row-end",
    "grid-row-start",
    "grid-template",
    "grid-template-areas",
    "grid-template-columns",
    "grid-template-rows",
    "hanging-punctuation",
    "height",
    "hyphens",
    "icon",
    "image-orientation",
    "image-rendering",
    "image-resolution",
    "ime-mode",
    "inline-size",
    "isolation",
    "justify-content",
    "left",
    "letter-spacing",
    "line-break",
    "line-height",
    "list-style",
    "list-style-image",
    "list-style-position",
    "list-style-type",
    "margin",
    "margin-block",
    "margin-block-end",
    "margin-block-start",
    "margin-bottom",
    "margin-inline",
    "margin-inline-end",
    "margin-inline-start",
    "margin-left",
    "margin-right",
    "margin-top",
    "marks",
    "mask",
    "mask-border",
    "mask-border-mode",
    "mask-border-outset",
    "mask-border-repeat",
    "mask-border-slice",
    "mask-border-source",
    "mask-border-width",
    "mask-clip",
    "mask-composite",
    "mask-image",
    "mask-mode",
    "mask-origin",
    "mask-position",
    "mask-repeat",
    "mask-size",
    "mask-type",
    "max-block-size",
    "max-height",
    "max-inline-size",
    "max-width",
    "min-block-size",
    "min-height",
    "min-inline-size",
    "min-width",
    "mix-blend-mode",
    "nav-down",
    "nav-index",
    "nav-left",
    "nav-right",
    "nav-up",
    "none",
    "normal",
    "object-fit",
    "object-position",
    "opacity",
    "order",
    "orphans",
    "outline",
    "outline-color",
    "outline-offset",
    "outline-style",
    "outline-width",
    "overflow",
    "overflow-wrap",
    "overflow-x",
    "overflow-y",
    "padding",
    "padding-block",
    "padding-block-end",
    "padding-block-start",
    "padding-bottom",
    "padding-inline",
    "padding-inline-end",
    "padding-inline-start",
    "padding-left",
    "padding-right",
    "padding-top",
    "page-break-after",
    "page-break-before",
    "page-break-inside",
    "pause",
    "pause-after",
    "pause-before",
    "perspective",
    "perspective-origin",
    "pointer-events",
    "position",
    "quotes",
    "resize",
    "rest",
    "rest-after",
    "rest-before",
    "right",
    "row-gap",
    "scroll-margin",
    "scroll-margin-block",
    "scroll-margin-block-end",
    "scroll-margin-block-start",
    "scroll-margin-bottom",
    "scroll-margin-inline",
    "scroll-margin-inline-end",
    "scroll-margin-inline-start",
    "scroll-margin-left",
    "scroll-margin-right",
    "scroll-margin-top",
    "scroll-padding",
    "scroll-padding-block",
    "scroll-padding-block-end",
    "scroll-padding-block-start",
    "scroll-padding-bottom",
    "scroll-padding-inline",
    "scroll-padding-inline-end",
    "scroll-padding-inline-start",
    "scroll-padding-left",
    "scroll-padding-right",
    "scroll-padding-top",
    "scroll-snap-align",
    "scroll-snap-stop",
    "scroll-snap-type",
    "scrollbar-color",
    "scrollbar-gutter",
    "scrollbar-width",
    "shape-image-threshold",
    "shape-margin",
    "shape-outside",
    "speak",
    "speak-as",
    "src",
    "tab-size",
    "table-layout",
    "text-align",
    "text-align-all",
    "text-align-last",
    "text-combine-upright",
    "text-decoration",
    "text-decoration-color",
    "text-decoration-line",
    "text-decoration-style",
    "text-emphasis",
    "text-emphasis-color",
    "text-emphasis-position",
    "text-emphasis-style",
    "text-indent",
    "text-justify",
    "text-orientation",
    "text-overflow",
    "text-rendering",
    "text-shadow",
    "text-transform",
    "text-underline-position",
    "top",
    "transform",
    "transform-box",
    "transform-origin",
    "transform-style",
    "transition",
    "transition-delay",
    "transition-duration",
    "transition-property",
    "transition-timing-function",
    "unicode-bidi",
    "vertical-align",
    "visibility",
    "voice-balance",
    "voice-duration",
    "voice-family",
    "voice-pitch",
    "voice-range",
    "voice-rate",
    "voice-stress",
    "voice-volume",
    "white-space",
    "widows",
    "width",
    "will-change",
    "word-break",
    "word-spacing",
    "word-wrap",
    "writing-mode",
    "z-index"
].reverse();
// some grammars use them all as a single group
const PSEUDO_SELECTORS = less_PSEUDO_CLASSES.concat(less_PSEUDO_ELEMENTS);
/*
Language: Less
Description: It's CSS, with just a little more.
Author:   Max Mikhailov <seven.phases.max@gmail.com>
Website: http://lesscss.org
Category: common, css, web
*/ /** @type LanguageFn */ function less(hljs) {
    const modes = less_MODES(hljs);
    const PSEUDO_SELECTORS$1 = PSEUDO_SELECTORS;
    const AT_MODIFIERS = "and or not only";
    const IDENT_RE = "[\\w-]+"; // yes, Less identifiers may begin with a digit
    const INTERP_IDENT_RE = "(" + IDENT_RE + "|@\\{" + IDENT_RE + "\\})";
    /* Generic Modes */ const RULES = [];
    const VALUE_MODES = []; // forward def. for recursive modes
    const STRING_MODE = function(c) {
        return {
            // Less strings are not multiline (also include '~' for more consistent coloring of "escaped" strings)
            className: "string",
            begin: "~?" + c + ".*?" + c
        };
    };
    const IDENT_MODE = function(name, begin, relevance) {
        return {
            className: name,
            begin: begin,
            relevance: relevance
        };
    };
    const AT_KEYWORDS = {
        $pattern: /[a-z-]+/,
        keyword: AT_MODIFIERS,
        attribute: less_MEDIA_FEATURES.join(" ")
    };
    const PARENS_MODE = {
        // used only to properly balance nested parens inside mixin call, def. arg list
        begin: "\\(",
        end: "\\)",
        contains: VALUE_MODES,
        keywords: AT_KEYWORDS,
        relevance: 0
    };
    // generic Less highlighter (used almost everywhere except selectors):
    VALUE_MODES.push(hljs.C_LINE_COMMENT_MODE, hljs.C_BLOCK_COMMENT_MODE, STRING_MODE("'"), STRING_MODE('"'), modes.CSS_NUMBER_MODE, {
        begin: "(url|data-uri)\\(",
        starts: {
            className: "string",
            end: "[\\)\\n]",
            excludeEnd: true
        }
    }, modes.HEXCOLOR, PARENS_MODE, IDENT_MODE("variable", "@@?" + IDENT_RE, 10), IDENT_MODE("variable", "@\\{" + IDENT_RE + "\\}"), IDENT_MODE("built_in", "~?`[^`]*?`"), {
        className: "attribute",
        begin: IDENT_RE + "\\s*:",
        end: ":",
        returnBegin: true,
        excludeEnd: true
    }, modes.IMPORTANT, {
        beginKeywords: "and not"
    }, modes.FUNCTION_DISPATCH);
    const VALUE_WITH_RULESETS = VALUE_MODES.concat({
        begin: /\{/,
        end: /\}/,
        contains: RULES
    });
    const MIXIN_GUARD_MODE = {
        beginKeywords: "when",
        endsWithParent: true,
        contains: [
            {
                beginKeywords: "and not"
            }
        ].concat(VALUE_MODES) // using this form to override VALUE’s 'function' match
    };
    /* Rule-Level Modes */ const RULE_MODE = {
        begin: INTERP_IDENT_RE + "\\s*:",
        returnBegin: true,
        end: /[;}]/,
        relevance: 0,
        contains: [
            {
                begin: /-(webkit|moz|ms|o)-/
            },
            modes.CSS_VARIABLE,
            {
                className: "attribute",
                begin: "\\b(" + less_ATTRIBUTES.join("|") + ")\\b",
                end: /(?=:)/,
                starts: {
                    endsWithParent: true,
                    illegal: "[<=$]",
                    relevance: 0,
                    contains: VALUE_MODES
                }
            }
        ]
    };
    const AT_RULE_MODE = {
        className: "keyword",
        begin: "@(import|media|charset|font-face|(-[a-z]+-)?keyframes|supports|document|namespace|page|viewport|host)\\b",
        starts: {
            end: "[;{}]",
            keywords: AT_KEYWORDS,
            returnEnd: true,
            contains: VALUE_MODES,
            relevance: 0
        }
    };
    // variable definitions and calls
    const VAR_RULE_MODE = {
        className: "variable",
        variants: [
            // using more strict pattern for higher relevance to increase chances of Less detection.
            // this is *the only* Less specific statement used in most of the sources, so...
            // (we’ll still often loose to the css-parser unless there's '//' comment,
            // simply because 1 variable just can't beat 99 properties :)
            {
                begin: "@" + IDENT_RE + "\\s*:",
                relevance: 15
            },
            {
                begin: "@" + IDENT_RE
            }
        ],
        starts: {
            end: "[;}]",
            returnEnd: true,
            contains: VALUE_WITH_RULESETS
        }
    };
    const SELECTOR_MODE = {
        // first parse unambiguous selectors (i.e. those not starting with tag)
        // then fall into the scary lookahead-discriminator variant.
        // this mode also handles mixin definitions and calls
        variants: [
            {
                begin: "[\\.#:&\\[>]",
                end: "[;{}]" // mixin calls end with ';'
            },
            {
                begin: INTERP_IDENT_RE,
                end: /\{/
            }
        ],
        returnBegin: true,
        returnEnd: true,
        illegal: "[<='$\"]",
        relevance: 0,
        contains: [
            hljs.C_LINE_COMMENT_MODE,
            hljs.C_BLOCK_COMMENT_MODE,
            MIXIN_GUARD_MODE,
            IDENT_MODE("keyword", "all\\b"),
            IDENT_MODE("variable", "@\\{" + IDENT_RE + "\\}"),
            {
                begin: "\\b(" + less_TAGS.join("|") + ")\\b",
                className: "selector-tag"
            },
            modes.CSS_NUMBER_MODE,
            IDENT_MODE("selector-tag", INTERP_IDENT_RE, 0),
            IDENT_MODE("selector-id", "#" + INTERP_IDENT_RE),
            IDENT_MODE("selector-class", "\\." + INTERP_IDENT_RE, 0),
            IDENT_MODE("selector-tag", "&", 0),
            modes.ATTRIBUTE_SELECTOR_MODE,
            {
                className: "selector-pseudo",
                begin: ":(" + less_PSEUDO_CLASSES.join("|") + ")"
            },
            {
                className: "selector-pseudo",
                begin: ":(:)?(" + less_PSEUDO_ELEMENTS.join("|") + ")"
            },
            {
                begin: /\(/,
                end: /\)/,
                relevance: 0,
                contains: VALUE_WITH_RULESETS
            },
            {
                begin: "!important"
            },
            modes.FUNCTION_DISPATCH
        ]
    };
    const PSEUDO_SELECTOR_MODE = {
        begin: IDENT_RE + ":(:)?" + `(${PSEUDO_SELECTORS$1.join("|")})`,
        returnBegin: true,
        contains: [
            SELECTOR_MODE
        ]
    };
    RULES.push(hljs.C_LINE_COMMENT_MODE, hljs.C_BLOCK_COMMENT_MODE, AT_RULE_MODE, VAR_RULE_MODE, PSEUDO_SELECTOR_MODE, RULE_MODE, SELECTOR_MODE, MIXIN_GUARD_MODE, modes.FUNCTION_DISPATCH);
    return {
        name: "Less",
        case_insensitive: true,
        illegal: "[=>'/<($\"]",
        contains: RULES
    };
}


;// CONCATENATED MODULE: ./node_modules/highlight.js/es/languages/lua.js
/*
Language: Lua
Description: Lua is a powerful, efficient, lightweight, embeddable scripting language.
Author: Andrew Fedorov <dmmdrs@mail.ru>
Category: common, scripting
Website: https://www.lua.org
*/ function lua(hljs) {
    const OPENING_LONG_BRACKET = "\\[=*\\[";
    const CLOSING_LONG_BRACKET = "\\]=*\\]";
    const LONG_BRACKETS = {
        begin: OPENING_LONG_BRACKET,
        end: CLOSING_LONG_BRACKET,
        contains: [
            "self"
        ]
    };
    const COMMENTS = [
        hljs.COMMENT("--(?!" + OPENING_LONG_BRACKET + ")", "$"),
        hljs.COMMENT("--" + OPENING_LONG_BRACKET, CLOSING_LONG_BRACKET, {
            contains: [
                LONG_BRACKETS
            ],
            relevance: 10
        })
    ];
    return {
        name: "Lua",
        keywords: {
            $pattern: hljs.UNDERSCORE_IDENT_RE,
            literal: "true false nil",
            keyword: "and break do else elseif end for goto if in local not or repeat return then until while",
            built_in: // Metatags and globals:
            "_G _ENV _VERSION __index __newindex __mode __call __metatable __tostring __len " + "__gc __add __sub __mul __div __mod __pow __concat __unm __eq __lt __le assert " + "collectgarbage dofile error getfenv getmetatable ipairs load loadfile loadstring " + "module next pairs pcall print rawequal rawget rawset require select setfenv " + "setmetatable tonumber tostring type unpack xpcall arg self " + "coroutine resume yield status wrap create running debug getupvalue " + "debug sethook getmetatable gethook setmetatable setlocal traceback setfenv getinfo setupvalue getlocal getregistry getfenv " + "io lines write close flush open output type read stderr stdin input stdout popen tmpfile " + "math log max acos huge ldexp pi cos tanh pow deg tan cosh sinh random randomseed frexp ceil floor rad abs sqrt modf asin min mod fmod log10 atan2 exp sin atan " + "os exit setlocale date getenv difftime remove time clock tmpname rename execute package preload loadlib loaded loaders cpath config path seeall " + "string sub upper len gfind rep find match char dump gmatch reverse byte format gsub lower " + "table setn insert getn foreachi maxn foreach concat sort remove"
        },
        contains: COMMENTS.concat([
            {
                className: "function",
                beginKeywords: "function",
                end: "\\)",
                contains: [
                    hljs.inherit(hljs.TITLE_MODE, {
                        begin: "([_a-zA-Z]\\w*\\.)*([_a-zA-Z]\\w*:)?[_a-zA-Z]\\w*"
                    }),
                    {
                        className: "params",
                        begin: "\\(",
                        endsWithParent: true,
                        contains: COMMENTS
                    }
                ].concat(COMMENTS)
            },
            hljs.C_NUMBER_MODE,
            hljs.APOS_STRING_MODE,
            hljs.QUOTE_STRING_MODE,
            {
                className: "string",
                begin: OPENING_LONG_BRACKET,
                end: CLOSING_LONG_BRACKET,
                contains: [
                    LONG_BRACKETS
                ],
                relevance: 5
            }
        ])
    };
}


;// CONCATENATED MODULE: ./node_modules/highlight.js/es/languages/makefile.js
/*
Language: Makefile
Author: Ivan Sagalaev <maniac@softwaremaniacs.org>
Contributors: Joël Porquet <joel@porquet.org>
Website: https://www.gnu.org/software/make/manual/html_node/Introduction.html
Category: common
*/ function makefile(hljs) {
    /* Variables: simple (eg $(var)) and special (eg $@) */ const VARIABLE = {
        className: "variable",
        variants: [
            {
                begin: "\\$\\(" + hljs.UNDERSCORE_IDENT_RE + "\\)",
                contains: [
                    hljs.BACKSLASH_ESCAPE
                ]
            },
            {
                begin: /\$[@%<?\^\+\*]/
            }
        ]
    };
    /* Quoted string with variables inside */ const QUOTE_STRING = {
        className: "string",
        begin: /"/,
        end: /"/,
        contains: [
            hljs.BACKSLASH_ESCAPE,
            VARIABLE
        ]
    };
    /* Function: $(func arg,...) */ const FUNC = {
        className: "variable",
        begin: /\$\([\w-]+\s/,
        end: /\)/,
        keywords: {
            built_in: "subst patsubst strip findstring filter filter-out sort " + "word wordlist firstword lastword dir notdir suffix basename " + "addsuffix addprefix join wildcard realpath abspath error warning " + "shell origin flavor foreach if or and call eval file value"
        },
        contains: [
            VARIABLE
        ]
    };
    /* Variable assignment */ const ASSIGNMENT = {
        begin: "^" + hljs.UNDERSCORE_IDENT_RE + "\\s*(?=[:+?]?=)"
    };
    /* Meta targets (.PHONY) */ const META = {
        className: "meta",
        begin: /^\.PHONY:/,
        end: /$/,
        keywords: {
            $pattern: /[\.\w]+/,
            keyword: ".PHONY"
        }
    };
    /* Targets */ const TARGET = {
        className: "section",
        begin: /^[^\s]+:/,
        end: /$/,
        contains: [
            VARIABLE
        ]
    };
    return {
        name: "Makefile",
        aliases: [
            "mk",
            "mak",
            "make"
        ],
        keywords: {
            $pattern: /[\w-]+/,
            keyword: "define endef undefine ifdef ifndef ifeq ifneq else endif " + "include -include sinclude override export unexport private vpath"
        },
        contains: [
            hljs.HASH_COMMENT_MODE,
            VARIABLE,
            QUOTE_STRING,
            FUNC,
            ASSIGNMENT,
            META,
            TARGET
        ]
    };
}


;// CONCATENATED MODULE: ./node_modules/highlight.js/es/languages/markdown.js
/*
Language: Markdown
Requires: xml.js
Author: John Crepezzi <john.crepezzi@gmail.com>
Website: https://daringfireball.net/projects/markdown/
Category: common, markup
*/ function markdown(hljs) {
    const regex = hljs.regex;
    const INLINE_HTML = {
        begin: /<\/?[A-Za-z_]/,
        end: ">",
        subLanguage: "xml",
        relevance: 0
    };
    const HORIZONTAL_RULE = {
        begin: "^[-\\*]{3,}",
        end: "$"
    };
    const CODE = {
        className: "code",
        variants: [
            // TODO: fix to allow these to work with sublanguage also
            {
                begin: "(`{3,})[^`](.|\\n)*?\\1`*[ ]*"
            },
            {
                begin: "(~{3,})[^~](.|\\n)*?\\1~*[ ]*"
            },
            // needed to allow markdown as a sublanguage to work
            {
                begin: "```",
                end: "```+[ ]*$"
            },
            {
                begin: "~~~",
                end: "~~~+[ ]*$"
            },
            {
                begin: "`.+?`"
            },
            {
                begin: "(?=^( {4}|\\t))",
                // use contains to gobble up multiple lines to allow the block to be whatever size
                // but only have a single open/close tag vs one per line
                contains: [
                    {
                        begin: "^( {4}|\\t)",
                        end: "(\\n)$"
                    }
                ],
                relevance: 0
            }
        ]
    };
    const LIST = {
        className: "bullet",
        begin: "^[ 	]*([*+-]|(\\d+\\.))(?=\\s+)",
        end: "\\s+",
        excludeEnd: true
    };
    const LINK_REFERENCE = {
        begin: /^\[[^\n]+\]:/,
        returnBegin: true,
        contains: [
            {
                className: "symbol",
                begin: /\[/,
                end: /\]/,
                excludeBegin: true,
                excludeEnd: true
            },
            {
                className: "link",
                begin: /:\s*/,
                end: /$/,
                excludeBegin: true
            }
        ]
    };
    const URL_SCHEME = /[A-Za-z][A-Za-z0-9+.-]*/;
    const LINK = {
        variants: [
            // too much like nested array access in so many languages
            // to have any real relevance
            {
                begin: /\[.+?\]\[.*?\]/,
                relevance: 0
            },
            // popular internet URLs
            {
                begin: /\[.+?\]\(((data|javascript|mailto):|(?:http|ftp)s?:\/\/).*?\)/,
                relevance: 2
            },
            {
                begin: regex.concat(/\[.+?\]\(/, URL_SCHEME, /:\/\/.*?\)/),
                relevance: 2
            },
            // relative urls
            {
                begin: /\[.+?\]\([./?&#].*?\)/,
                relevance: 1
            },
            // whatever else, lower relevance (might not be a link at all)
            {
                begin: /\[.*?\]\(.*?\)/,
                relevance: 0
            }
        ],
        returnBegin: true,
        contains: [
            {
                // empty strings for alt or link text
                match: /\[(?=\])/
            },
            {
                className: "string",
                relevance: 0,
                begin: "\\[",
                end: "\\]",
                excludeBegin: true,
                returnEnd: true
            },
            {
                className: "link",
                relevance: 0,
                begin: "\\]\\(",
                end: "\\)",
                excludeBegin: true,
                excludeEnd: true
            },
            {
                className: "symbol",
                relevance: 0,
                begin: "\\]\\[",
                end: "\\]",
                excludeBegin: true,
                excludeEnd: true
            }
        ]
    };
    const BOLD = {
        className: "strong",
        contains: [],
        variants: [
            {
                begin: /_{2}(?!\s)/,
                end: /_{2}/
            },
            {
                begin: /\*{2}(?!\s)/,
                end: /\*{2}/
            }
        ]
    };
    const ITALIC = {
        className: "emphasis",
        contains: [],
        variants: [
            {
                begin: /\*(?![*\s])/,
                end: /\*/
            },
            {
                begin: /_(?![_\s])/,
                end: /_/,
                relevance: 0
            }
        ]
    };
    // 3 level deep nesting is not allowed because it would create confusion
    // in cases like `***testing***` because where we don't know if the last
    // `***` is starting a new bold/italic or finishing the last one
    const BOLD_WITHOUT_ITALIC = hljs.inherit(BOLD, {
        contains: []
    });
    const ITALIC_WITHOUT_BOLD = hljs.inherit(ITALIC, {
        contains: []
    });
    BOLD.contains.push(ITALIC_WITHOUT_BOLD);
    ITALIC.contains.push(BOLD_WITHOUT_ITALIC);
    let CONTAINABLE = [
        INLINE_HTML,
        LINK
    ];
    [
        BOLD,
        ITALIC,
        BOLD_WITHOUT_ITALIC,
        ITALIC_WITHOUT_BOLD
    ].forEach((m)=>{
        m.contains = m.contains.concat(CONTAINABLE);
    });
    CONTAINABLE = CONTAINABLE.concat(BOLD, ITALIC);
    const HEADER = {
        className: "section",
        variants: [
            {
                begin: "^#{1,6}",
                end: "$",
                contains: CONTAINABLE
            },
            {
                begin: "(?=^.+?\\n[=-]{2,}$)",
                contains: [
                    {
                        begin: "^[=-]*$"
                    },
                    {
                        begin: "^",
                        end: "\\n",
                        contains: CONTAINABLE
                    }
                ]
            }
        ]
    };
    const BLOCKQUOTE = {
        className: "quote",
        begin: "^>\\s+",
        contains: CONTAINABLE,
        end: "$"
    };
    return {
        name: "Markdown",
        aliases: [
            "md",
            "mkdown",
            "mkd"
        ],
        contains: [
            HEADER,
            INLINE_HTML,
            LIST,
            BOLD,
            ITALIC,
            BLOCKQUOTE,
            CODE,
            HORIZONTAL_RULE,
            LINK,
            LINK_REFERENCE
        ]
    };
}


;// CONCATENATED MODULE: ./node_modules/highlight.js/es/languages/objectivec.js
/*
Language: Objective-C
Author: Valerii Hiora <valerii.hiora@gmail.com>
Contributors: Angel G. Olloqui <angelgarcia.mail@gmail.com>, Matt Diephouse <matt@diephouse.com>, Andrew Farmer <ahfarmer@gmail.com>, Minh Nguyễn <mxn@1ec5.org>
Website: https://developer.apple.com/documentation/objectivec
Category: common
*/ function objectivec(hljs) {
    const API_CLASS = {
        className: "built_in",
        begin: "\\b(AV|CA|CF|CG|CI|CL|CM|CN|CT|MK|MP|MTK|MTL|NS|SCN|SK|UI|WK|XC)\\w+"
    };
    const IDENTIFIER_RE = /[a-zA-Z@][a-zA-Z0-9_]*/;
    const TYPES = [
        "int",
        "float",
        "char",
        "unsigned",
        "signed",
        "short",
        "long",
        "double",
        "wchar_t",
        "unichar",
        "void",
        "bool",
        "BOOL",
        "id|0",
        "_Bool"
    ];
    const KWS = [
        "while",
        "export",
        "sizeof",
        "typedef",
        "const",
        "struct",
        "for",
        "union",
        "volatile",
        "static",
        "mutable",
        "if",
        "do",
        "return",
        "goto",
        "enum",
        "else",
        "break",
        "extern",
        "asm",
        "case",
        "default",
        "register",
        "explicit",
        "typename",
        "switch",
        "continue",
        "inline",
        "readonly",
        "assign",
        "readwrite",
        "self",
        "@synchronized",
        "id",
        "typeof",
        "nonatomic",
        "IBOutlet",
        "IBAction",
        "strong",
        "weak",
        "copy",
        "in",
        "out",
        "inout",
        "bycopy",
        "byref",
        "oneway",
        "__strong",
        "__weak",
        "__block",
        "__autoreleasing",
        "@private",
        "@protected",
        "@public",
        "@try",
        "@property",
        "@end",
        "@throw",
        "@catch",
        "@finally",
        "@autoreleasepool",
        "@synthesize",
        "@dynamic",
        "@selector",
        "@optional",
        "@required",
        "@encode",
        "@package",
        "@import",
        "@defs",
        "@compatibility_alias",
        "__bridge",
        "__bridge_transfer",
        "__bridge_retained",
        "__bridge_retain",
        "__covariant",
        "__contravariant",
        "__kindof",
        "_Nonnull",
        "_Nullable",
        "_Null_unspecified",
        "__FUNCTION__",
        "__PRETTY_FUNCTION__",
        "__attribute__",
        "getter",
        "setter",
        "retain",
        "unsafe_unretained",
        "nonnull",
        "nullable",
        "null_unspecified",
        "null_resettable",
        "class",
        "instancetype",
        "NS_DESIGNATED_INITIALIZER",
        "NS_UNAVAILABLE",
        "NS_REQUIRES_SUPER",
        "NS_RETURNS_INNER_POINTER",
        "NS_INLINE",
        "NS_AVAILABLE",
        "NS_DEPRECATED",
        "NS_ENUM",
        "NS_OPTIONS",
        "NS_SWIFT_UNAVAILABLE",
        "NS_ASSUME_NONNULL_BEGIN",
        "NS_ASSUME_NONNULL_END",
        "NS_REFINED_FOR_SWIFT",
        "NS_SWIFT_NAME",
        "NS_SWIFT_NOTHROW",
        "NS_DURING",
        "NS_HANDLER",
        "NS_ENDHANDLER",
        "NS_VALUERETURN",
        "NS_VOIDRETURN"
    ];
    const LITERALS = [
        "false",
        "true",
        "FALSE",
        "TRUE",
        "nil",
        "YES",
        "NO",
        "NULL"
    ];
    const BUILT_INS = [
        "dispatch_once_t",
        "dispatch_queue_t",
        "dispatch_sync",
        "dispatch_async",
        "dispatch_once"
    ];
    const KEYWORDS = {
        "variable.language": [
            "this",
            "super"
        ],
        $pattern: IDENTIFIER_RE,
        keyword: KWS,
        literal: LITERALS,
        built_in: BUILT_INS,
        type: TYPES
    };
    const CLASS_KEYWORDS = {
        $pattern: IDENTIFIER_RE,
        keyword: [
            "@interface",
            "@class",
            "@protocol",
            "@implementation"
        ]
    };
    return {
        name: "Objective-C",
        aliases: [
            "mm",
            "objc",
            "obj-c",
            "obj-c++",
            "objective-c++"
        ],
        keywords: KEYWORDS,
        illegal: "</",
        contains: [
            API_CLASS,
            hljs.C_LINE_COMMENT_MODE,
            hljs.C_BLOCK_COMMENT_MODE,
            hljs.C_NUMBER_MODE,
            hljs.QUOTE_STRING_MODE,
            hljs.APOS_STRING_MODE,
            {
                className: "string",
                variants: [
                    {
                        begin: '@"',
                        end: '"',
                        illegal: "\\n",
                        contains: [
                            hljs.BACKSLASH_ESCAPE
                        ]
                    }
                ]
            },
            {
                className: "meta",
                begin: /#\s*[a-z]+\b/,
                end: /$/,
                keywords: {
                    keyword: "if else elif endif define undef warning error line " + "pragma ifdef ifndef include"
                },
                contains: [
                    {
                        begin: /\\\n/,
                        relevance: 0
                    },
                    hljs.inherit(hljs.QUOTE_STRING_MODE, {
                        className: "string"
                    }),
                    {
                        className: "string",
                        begin: /<.*?>/,
                        end: /$/,
                        illegal: "\\n"
                    },
                    hljs.C_LINE_COMMENT_MODE,
                    hljs.C_BLOCK_COMMENT_MODE
                ]
            },
            {
                className: "class",
                begin: "(" + CLASS_KEYWORDS.keyword.join("|") + ")\\b",
                end: /(\{|$)/,
                excludeEnd: true,
                keywords: CLASS_KEYWORDS,
                contains: [
                    hljs.UNDERSCORE_TITLE_MODE
                ]
            },
            {
                begin: "\\." + hljs.UNDERSCORE_IDENT_RE,
                relevance: 0
            }
        ]
    };
}


;// CONCATENATED MODULE: ./node_modules/highlight.js/es/languages/perl.js
/*
Language: Perl
Author: Peter Leonov <gojpeg@yandex.ru>
Website: https://www.perl.org
Category: common
*/ /** @type LanguageFn */ function perl(hljs) {
    const regex = hljs.regex;
    const KEYWORDS = [
        "abs",
        "accept",
        "alarm",
        "and",
        "atan2",
        "bind",
        "binmode",
        "bless",
        "break",
        "caller",
        "chdir",
        "chmod",
        "chomp",
        "chop",
        "chown",
        "chr",
        "chroot",
        "close",
        "closedir",
        "connect",
        "continue",
        "cos",
        "crypt",
        "dbmclose",
        "dbmopen",
        "defined",
        "delete",
        "die",
        "do",
        "dump",
        "each",
        "else",
        "elsif",
        "endgrent",
        "endhostent",
        "endnetent",
        "endprotoent",
        "endpwent",
        "endservent",
        "eof",
        "eval",
        "exec",
        "exists",
        "exit",
        "exp",
        "fcntl",
        "fileno",
        "flock",
        "for",
        "foreach",
        "fork",
        "format",
        "formline",
        "getc",
        "getgrent",
        "getgrgid",
        "getgrnam",
        "gethostbyaddr",
        "gethostbyname",
        "gethostent",
        "getlogin",
        "getnetbyaddr",
        "getnetbyname",
        "getnetent",
        "getpeername",
        "getpgrp",
        "getpriority",
        "getprotobyname",
        "getprotobynumber",
        "getprotoent",
        "getpwent",
        "getpwnam",
        "getpwuid",
        "getservbyname",
        "getservbyport",
        "getservent",
        "getsockname",
        "getsockopt",
        "given",
        "glob",
        "gmtime",
        "goto",
        "grep",
        "gt",
        "hex",
        "if",
        "index",
        "int",
        "ioctl",
        "join",
        "keys",
        "kill",
        "last",
        "lc",
        "lcfirst",
        "length",
        "link",
        "listen",
        "local",
        "localtime",
        "log",
        "lstat",
        "lt",
        "ma",
        "map",
        "mkdir",
        "msgctl",
        "msgget",
        "msgrcv",
        "msgsnd",
        "my",
        "ne",
        "next",
        "no",
        "not",
        "oct",
        "open",
        "opendir",
        "or",
        "ord",
        "our",
        "pack",
        "package",
        "pipe",
        "pop",
        "pos",
        "print",
        "printf",
        "prototype",
        "push",
        "q|0",
        "qq",
        "quotemeta",
        "qw",
        "qx",
        "rand",
        "read",
        "readdir",
        "readline",
        "readlink",
        "readpipe",
        "recv",
        "redo",
        "ref",
        "rename",
        "require",
        "reset",
        "return",
        "reverse",
        "rewinddir",
        "rindex",
        "rmdir",
        "say",
        "scalar",
        "seek",
        "seekdir",
        "select",
        "semctl",
        "semget",
        "semop",
        "send",
        "setgrent",
        "sethostent",
        "setnetent",
        "setpgrp",
        "setpriority",
        "setprotoent",
        "setpwent",
        "setservent",
        "setsockopt",
        "shift",
        "shmctl",
        "shmget",
        "shmread",
        "shmwrite",
        "shutdown",
        "sin",
        "sleep",
        "socket",
        "socketpair",
        "sort",
        "splice",
        "split",
        "sprintf",
        "sqrt",
        "srand",
        "stat",
        "state",
        "study",
        "sub",
        "substr",
        "symlink",
        "syscall",
        "sysopen",
        "sysread",
        "sysseek",
        "system",
        "syswrite",
        "tell",
        "telldir",
        "tie",
        "tied",
        "time",
        "times",
        "tr",
        "truncate",
        "uc",
        "ucfirst",
        "umask",
        "undef",
        "unless",
        "unlink",
        "unpack",
        "unshift",
        "untie",
        "until",
        "use",
        "utime",
        "values",
        "vec",
        "wait",
        "waitpid",
        "wantarray",
        "warn",
        "when",
        "while",
        "write",
        "x|0",
        "xor",
        "y|0"
    ];
    // https://perldoc.perl.org/perlre#Modifiers
    const REGEX_MODIFIERS = /[dualxmsipngr]{0,12}/; // aa and xx are valid, making max length 12
    const PERL_KEYWORDS = {
        $pattern: /[\w.]+/,
        keyword: KEYWORDS.join(" ")
    };
    const SUBST = {
        className: "subst",
        begin: "[$@]\\{",
        end: "\\}",
        keywords: PERL_KEYWORDS
    };
    const METHOD = {
        begin: /->\{/,
        end: /\}/
    };
    const VAR = {
        variants: [
            {
                begin: /\$\d/
            },
            {
                begin: regex.concat(/[$%@](\^\w\b|#\w+(::\w+)*|\{\w+\}|\w+(::\w*)*)/, // negative look-ahead tries to avoid matching patterns that are not
                // Perl at all like $ident$, @ident@, etc.
                `(?![A-Za-z])(?![@$%])`)
            },
            {
                begin: /[$%@][^\s\w{]/,
                relevance: 0
            }
        ]
    };
    const STRING_CONTAINS = [
        hljs.BACKSLASH_ESCAPE,
        SUBST,
        VAR
    ];
    const REGEX_DELIMS = [
        /!/,
        /\//,
        /\|/,
        /\?/,
        /'/,
        /"/,
        /#/ // valid but infrequent and weird
    ];
    /**
   * @param {string|RegExp} prefix
   * @param {string|RegExp} open
   * @param {string|RegExp} close
   */ const PAIRED_DOUBLE_RE = (prefix, open, close = "\\1")=>{
        const middle = close === "\\1" ? close : regex.concat(close, open);
        return regex.concat(regex.concat("(?:", prefix, ")"), open, /(?:\\.|[^\\\/])*?/, middle, /(?:\\.|[^\\\/])*?/, close, REGEX_MODIFIERS);
    };
    /**
   * @param {string|RegExp} prefix
   * @param {string|RegExp} open
   * @param {string|RegExp} close
   */ const PAIRED_RE = (prefix, open, close)=>{
        return regex.concat(regex.concat("(?:", prefix, ")"), open, /(?:\\.|[^\\\/])*?/, close, REGEX_MODIFIERS);
    };
    const PERL_DEFAULT_CONTAINS = [
        VAR,
        hljs.HASH_COMMENT_MODE,
        hljs.COMMENT(/^=\w/, /=cut/, {
            endsWithParent: true
        }),
        METHOD,
        {
            className: "string",
            contains: STRING_CONTAINS,
            variants: [
                {
                    begin: "q[qwxr]?\\s*\\(",
                    end: "\\)",
                    relevance: 5
                },
                {
                    begin: "q[qwxr]?\\s*\\[",
                    end: "\\]",
                    relevance: 5
                },
                {
                    begin: "q[qwxr]?\\s*\\{",
                    end: "\\}",
                    relevance: 5
                },
                {
                    begin: "q[qwxr]?\\s*\\|",
                    end: "\\|",
                    relevance: 5
                },
                {
                    begin: "q[qwxr]?\\s*<",
                    end: ">",
                    relevance: 5
                },
                {
                    begin: "qw\\s+q",
                    end: "q",
                    relevance: 5
                },
                {
                    begin: "'",
                    end: "'",
                    contains: [
                        hljs.BACKSLASH_ESCAPE
                    ]
                },
                {
                    begin: '"',
                    end: '"'
                },
                {
                    begin: "`",
                    end: "`",
                    contains: [
                        hljs.BACKSLASH_ESCAPE
                    ]
                },
                {
                    begin: /\{\w+\}/,
                    relevance: 0
                },
                {
                    begin: "-?\\w+\\s*=>",
                    relevance: 0
                }
            ]
        },
        {
            className: "number",
            begin: "(\\b0[0-7_]+)|(\\b0x[0-9a-fA-F_]+)|(\\b[1-9][0-9_]*(\\.[0-9_]+)?)|[0_]\\b",
            relevance: 0
        },
        {
            begin: "(\\/\\/|" + hljs.RE_STARTERS_RE + "|\\b(split|return|print|reverse|grep)\\b)\\s*",
            keywords: "split return print reverse grep",
            relevance: 0,
            contains: [
                hljs.HASH_COMMENT_MODE,
                {
                    className: "regexp",
                    variants: [
                        // allow matching common delimiters
                        {
                            begin: PAIRED_DOUBLE_RE("s|tr|y", regex.either(...REGEX_DELIMS, {
                                capture: true
                            }))
                        },
                        // and then paired delmis
                        {
                            begin: PAIRED_DOUBLE_RE("s|tr|y", "\\(", "\\)")
                        },
                        {
                            begin: PAIRED_DOUBLE_RE("s|tr|y", "\\[", "\\]")
                        },
                        {
                            begin: PAIRED_DOUBLE_RE("s|tr|y", "\\{", "\\}")
                        }
                    ],
                    relevance: 2
                },
                {
                    className: "regexp",
                    variants: [
                        {
                            // could be a comment in many languages so do not count
                            // as relevant
                            begin: /(m|qr)\/\//,
                            relevance: 0
                        },
                        // prefix is optional with /regex/
                        {
                            begin: PAIRED_RE("(?:m|qr)?", /\//, /\//)
                        },
                        // allow matching common delimiters
                        {
                            begin: PAIRED_RE("m|qr", regex.either(...REGEX_DELIMS, {
                                capture: true
                            }), /\1/)
                        },
                        // allow common paired delmins
                        {
                            begin: PAIRED_RE("m|qr", /\(/, /\)/)
                        },
                        {
                            begin: PAIRED_RE("m|qr", /\[/, /\]/)
                        },
                        {
                            begin: PAIRED_RE("m|qr", /\{/, /\}/)
                        }
                    ]
                }
            ]
        },
        {
            className: "function",
            beginKeywords: "sub",
            end: "(\\s*\\(.*?\\))?[;{]",
            excludeEnd: true,
            relevance: 5,
            contains: [
                hljs.TITLE_MODE
            ]
        },
        {
            begin: "-\\w\\b",
            relevance: 0
        },
        {
            begin: "^__DATA__$",
            end: "^__END__$",
            subLanguage: "mojolicious",
            contains: [
                {
                    begin: "^@@.*",
                    end: "$",
                    className: "comment"
                }
            ]
        }
    ];
    SUBST.contains = PERL_DEFAULT_CONTAINS;
    METHOD.contains = PERL_DEFAULT_CONTAINS;
    return {
        name: "Perl",
        aliases: [
            "pl",
            "pm"
        ],
        keywords: PERL_KEYWORDS,
        contains: PERL_DEFAULT_CONTAINS
    };
}


;// CONCATENATED MODULE: ./node_modules/highlight.js/es/languages/php.js
/*
Language: PHP
Author: Victor Karamzin <Victor.Karamzin@enterra-inc.com>
Contributors: Evgeny Stepanischev <imbolk@gmail.com>, Ivan Sagalaev <maniac@softwaremaniacs.org>
Website: https://www.php.net
Category: common
*/ /**
 * @param {HLJSApi} hljs
 * @returns {LanguageDetail}
 * */ function php(hljs) {
    const regex = hljs.regex;
    // negative look-ahead tries to avoid matching patterns that are not
    // Perl at all like $ident$, @ident@, etc.
    const NOT_PERL_ETC = /(?![A-Za-z0-9])(?![$])/;
    const IDENT_RE = regex.concat(/[a-zA-Z_\x7f-\xff][a-zA-Z0-9_\x7f-\xff]*/, NOT_PERL_ETC);
    // Will not detect camelCase classes
    const PASCAL_CASE_CLASS_NAME_RE = regex.concat(/(\\?[A-Z][a-z0-9_\x7f-\xff]+|\\?[A-Z]+(?=[A-Z][a-z0-9_\x7f-\xff])){1,}/, NOT_PERL_ETC);
    const VARIABLE = {
        scope: "variable",
        match: "\\$+" + IDENT_RE
    };
    const PREPROCESSOR = {
        scope: "meta",
        variants: [
            {
                begin: /<\?php/,
                relevance: 10
            },
            {
                begin: /<\?=/
            },
            // less relevant per PSR-1 which says not to use short-tags
            {
                begin: /<\?/,
                relevance: 0.1
            },
            {
                begin: /\?>/
            } // end php tag
        ]
    };
    const SUBST = {
        scope: "subst",
        variants: [
            {
                begin: /\$\w+/
            },
            {
                begin: /\{\$/,
                end: /\}/
            }
        ]
    };
    const SINGLE_QUOTED = hljs.inherit(hljs.APOS_STRING_MODE, {
        illegal: null
    });
    const DOUBLE_QUOTED = hljs.inherit(hljs.QUOTE_STRING_MODE, {
        illegal: null,
        contains: hljs.QUOTE_STRING_MODE.contains.concat(SUBST)
    });
    const HEREDOC = {
        begin: /<<<[ \t]*(?:(\w+)|"(\w+)")\n/,
        end: /[ \t]*(\w+)\b/,
        contains: hljs.QUOTE_STRING_MODE.contains.concat(SUBST),
        "on:begin": (m, resp)=>{
            resp.data._beginMatch = m[1] || m[2];
        },
        "on:end": (m, resp)=>{
            if (resp.data._beginMatch !== m[1]) resp.ignoreMatch();
        }
    };
    const NOWDOC = hljs.END_SAME_AS_BEGIN({
        begin: /<<<[ \t]*'(\w+)'\n/,
        end: /[ \t]*(\w+)\b/
    });
    // list of valid whitespaces because non-breaking space might be part of a IDENT_RE
    const WHITESPACE = "[ 	\n]";
    const STRING = {
        scope: "string",
        variants: [
            DOUBLE_QUOTED,
            SINGLE_QUOTED,
            HEREDOC,
            NOWDOC
        ]
    };
    const NUMBER = {
        scope: "number",
        variants: [
            {
                begin: `\\b0[bB][01]+(?:_[01]+)*\\b`
            },
            {
                begin: `\\b0[oO][0-7]+(?:_[0-7]+)*\\b`
            },
            {
                begin: `\\b0[xX][\\da-fA-F]+(?:_[\\da-fA-F]+)*\\b`
            },
            // Decimals w/ underscore support, with optional fragments and scientific exponent (e) suffix.
            {
                begin: `(?:\\b\\d+(?:_\\d+)*(\\.(?:\\d+(?:_\\d+)*))?|\\B\\.\\d+)(?:[eE][+-]?\\d+)?`
            }
        ],
        relevance: 0
    };
    const LITERALS = [
        "false",
        "null",
        "true"
    ];
    const KWS = [
        // Magic constants:
        // <https://www.php.net/manual/en/language.constants.predefined.php>
        "__CLASS__",
        "__DIR__",
        "__FILE__",
        "__FUNCTION__",
        "__COMPILER_HALT_OFFSET__",
        "__LINE__",
        "__METHOD__",
        "__NAMESPACE__",
        "__TRAIT__",
        // Function that look like language construct or language construct that look like function:
        // List of keywords that may not require parenthesis
        "die",
        "echo",
        "exit",
        "include",
        "include_once",
        "print",
        "require",
        "require_once",
        // These are not language construct (function) but operate on the currently-executing function and can access the current symbol table
        // 'compact extract func_get_arg func_get_args func_num_args get_called_class get_parent_class ' +
        // Other keywords:
        // <https://www.php.net/manual/en/reserved.php>
        // <https://www.php.net/manual/en/language.types.type-juggling.php>
        "array",
        "abstract",
        "and",
        "as",
        "binary",
        "bool",
        "boolean",
        "break",
        "callable",
        "case",
        "catch",
        "class",
        "clone",
        "const",
        "continue",
        "declare",
        "default",
        "do",
        "double",
        "else",
        "elseif",
        "empty",
        "enddeclare",
        "endfor",
        "endforeach",
        "endif",
        "endswitch",
        "endwhile",
        "enum",
        "eval",
        "extends",
        "final",
        "finally",
        "float",
        "for",
        "foreach",
        "from",
        "global",
        "goto",
        "if",
        "implements",
        "instanceof",
        "insteadof",
        "int",
        "integer",
        "interface",
        "isset",
        "iterable",
        "list",
        "match|0",
        "mixed",
        "new",
        "never",
        "object",
        "or",
        "private",
        "protected",
        "public",
        "readonly",
        "real",
        "return",
        "string",
        "switch",
        "throw",
        "trait",
        "try",
        "unset",
        "use",
        "var",
        "void",
        "while",
        "xor",
        "yield"
    ];
    const BUILT_INS = [
        // Standard PHP library:
        // <https://www.php.net/manual/en/book.spl.php>
        "Error|0",
        "AppendIterator",
        "ArgumentCountError",
        "ArithmeticError",
        "ArrayIterator",
        "ArrayObject",
        "AssertionError",
        "BadFunctionCallException",
        "BadMethodCallException",
        "CachingIterator",
        "CallbackFilterIterator",
        "CompileError",
        "Countable",
        "DirectoryIterator",
        "DivisionByZeroError",
        "DomainException",
        "EmptyIterator",
        "ErrorException",
        "Exception",
        "FilesystemIterator",
        "FilterIterator",
        "GlobIterator",
        "InfiniteIterator",
        "InvalidArgumentException",
        "IteratorIterator",
        "LengthException",
        "LimitIterator",
        "LogicException",
        "MultipleIterator",
        "NoRewindIterator",
        "OutOfBoundsException",
        "OutOfRangeException",
        "OuterIterator",
        "OverflowException",
        "ParentIterator",
        "ParseError",
        "RangeException",
        "RecursiveArrayIterator",
        "RecursiveCachingIterator",
        "RecursiveCallbackFilterIterator",
        "RecursiveDirectoryIterator",
        "RecursiveFilterIterator",
        "RecursiveIterator",
        "RecursiveIteratorIterator",
        "RecursiveRegexIterator",
        "RecursiveTreeIterator",
        "RegexIterator",
        "RuntimeException",
        "SeekableIterator",
        "SplDoublyLinkedList",
        "SplFileInfo",
        "SplFileObject",
        "SplFixedArray",
        "SplHeap",
        "SplMaxHeap",
        "SplMinHeap",
        "SplObjectStorage",
        "SplObserver",
        "SplPriorityQueue",
        "SplQueue",
        "SplStack",
        "SplSubject",
        "SplTempFileObject",
        "TypeError",
        "UnderflowException",
        "UnexpectedValueException",
        "UnhandledMatchError",
        // Reserved interfaces:
        // <https://www.php.net/manual/en/reserved.interfaces.php>
        "ArrayAccess",
        "BackedEnum",
        "Closure",
        "Fiber",
        "Generator",
        "Iterator",
        "IteratorAggregate",
        "Serializable",
        "Stringable",
        "Throwable",
        "Traversable",
        "UnitEnum",
        "WeakReference",
        "WeakMap",
        // Reserved classes:
        // <https://www.php.net/manual/en/reserved.classes.php>
        "Directory",
        "__PHP_Incomplete_Class",
        "parent",
        "php_user_filter",
        "self",
        "static",
        "stdClass"
    ];
    /** Dual-case keywords
   *
   * ["then","FILE"] =>
   *     ["then", "THEN", "FILE", "file"]
   *
   * @param {string[]} items */ const dualCase = (items)=>{
        /** @type string[] */ const result = [];
        items.forEach((item)=>{
            result.push(item);
            if (item.toLowerCase() === item) {
                result.push(item.toUpperCase());
            } else {
                result.push(item.toLowerCase());
            }
        });
        return result;
    };
    const KEYWORDS = {
        keyword: KWS,
        literal: dualCase(LITERALS),
        built_in: BUILT_INS
    };
    /**
   * @param {string[]} items */ const normalizeKeywords = (items)=>{
        return items.map((item)=>{
            return item.replace(/\|\d+$/, "");
        });
    };
    const CONSTRUCTOR_CALL = {
        variants: [
            {
                match: [
                    /new/,
                    regex.concat(WHITESPACE, "+"),
                    // to prevent built ins from being confused as the class constructor call
                    regex.concat("(?!", normalizeKeywords(BUILT_INS).join("\\b|"), "\\b)"),
                    PASCAL_CASE_CLASS_NAME_RE
                ],
                scope: {
                    1: "keyword",
                    4: "title.class"
                }
            }
        ]
    };
    const CONSTANT_REFERENCE = regex.concat(IDENT_RE, "\\b(?!\\()");
    const LEFT_AND_RIGHT_SIDE_OF_DOUBLE_COLON = {
        variants: [
            {
                match: [
                    regex.concat(/::/, regex.lookahead(/(?!class\b)/)),
                    CONSTANT_REFERENCE
                ],
                scope: {
                    2: "variable.constant"
                }
            },
            {
                match: [
                    /::/,
                    /class/
                ],
                scope: {
                    2: "variable.language"
                }
            },
            {
                match: [
                    PASCAL_CASE_CLASS_NAME_RE,
                    regex.concat(/::/, regex.lookahead(/(?!class\b)/)),
                    CONSTANT_REFERENCE
                ],
                scope: {
                    1: "title.class",
                    3: "variable.constant"
                }
            },
            {
                match: [
                    PASCAL_CASE_CLASS_NAME_RE,
                    regex.concat("::", regex.lookahead(/(?!class\b)/))
                ],
                scope: {
                    1: "title.class"
                }
            },
            {
                match: [
                    PASCAL_CASE_CLASS_NAME_RE,
                    /::/,
                    /class/
                ],
                scope: {
                    1: "title.class",
                    3: "variable.language"
                }
            }
        ]
    };
    const NAMED_ARGUMENT = {
        scope: "attr",
        match: regex.concat(IDENT_RE, regex.lookahead(":"), regex.lookahead(/(?!::)/))
    };
    const PARAMS_MODE = {
        relevance: 0,
        begin: /\(/,
        end: /\)/,
        keywords: KEYWORDS,
        contains: [
            NAMED_ARGUMENT,
            VARIABLE,
            LEFT_AND_RIGHT_SIDE_OF_DOUBLE_COLON,
            hljs.C_BLOCK_COMMENT_MODE,
            STRING,
            NUMBER,
            CONSTRUCTOR_CALL
        ]
    };
    const FUNCTION_INVOKE = {
        relevance: 0,
        match: [
            /\b/,
            // to prevent keywords from being confused as the function title
            regex.concat("(?!fn\\b|function\\b|", normalizeKeywords(KWS).join("\\b|"), "|", normalizeKeywords(BUILT_INS).join("\\b|"), "\\b)"),
            IDENT_RE,
            regex.concat(WHITESPACE, "*"),
            regex.lookahead(/(?=\()/)
        ],
        scope: {
            3: "title.function.invoke"
        },
        contains: [
            PARAMS_MODE
        ]
    };
    PARAMS_MODE.contains.push(FUNCTION_INVOKE);
    const ATTRIBUTE_CONTAINS = [
        NAMED_ARGUMENT,
        LEFT_AND_RIGHT_SIDE_OF_DOUBLE_COLON,
        hljs.C_BLOCK_COMMENT_MODE,
        STRING,
        NUMBER,
        CONSTRUCTOR_CALL
    ];
    const ATTRIBUTES = {
        begin: regex.concat(/#\[\s*/, PASCAL_CASE_CLASS_NAME_RE),
        beginScope: "meta",
        end: /]/,
        endScope: "meta",
        keywords: {
            literal: LITERALS,
            keyword: [
                "new",
                "array"
            ]
        },
        contains: [
            {
                begin: /\[/,
                end: /]/,
                keywords: {
                    literal: LITERALS,
                    keyword: [
                        "new",
                        "array"
                    ]
                },
                contains: [
                    "self",
                    ...ATTRIBUTE_CONTAINS
                ]
            },
            ...ATTRIBUTE_CONTAINS,
            {
                scope: "meta",
                match: PASCAL_CASE_CLASS_NAME_RE
            }
        ]
    };
    return {
        case_insensitive: false,
        keywords: KEYWORDS,
        contains: [
            ATTRIBUTES,
            hljs.HASH_COMMENT_MODE,
            hljs.COMMENT("//", "$"),
            hljs.COMMENT("/\\*", "\\*/", {
                contains: [
                    {
                        scope: "doctag",
                        match: "@[A-Za-z]+"
                    }
                ]
            }),
            {
                match: /__halt_compiler\(\);/,
                keywords: "__halt_compiler",
                starts: {
                    scope: "comment",
                    end: hljs.MATCH_NOTHING_RE,
                    contains: [
                        {
                            match: /\?>/,
                            scope: "meta",
                            endsParent: true
                        }
                    ]
                }
            },
            PREPROCESSOR,
            {
                scope: "variable.language",
                match: /\$this\b/
            },
            VARIABLE,
            FUNCTION_INVOKE,
            LEFT_AND_RIGHT_SIDE_OF_DOUBLE_COLON,
            {
                match: [
                    /const/,
                    /\s/,
                    IDENT_RE
                ],
                scope: {
                    1: "keyword",
                    3: "variable.constant"
                }
            },
            CONSTRUCTOR_CALL,
            {
                scope: "function",
                relevance: 0,
                beginKeywords: "fn function",
                end: /[;{]/,
                excludeEnd: true,
                illegal: "[$%\\[]",
                contains: [
                    {
                        beginKeywords: "use"
                    },
                    hljs.UNDERSCORE_TITLE_MODE,
                    {
                        begin: "=>",
                        endsParent: true
                    },
                    {
                        scope: "params",
                        begin: "\\(",
                        end: "\\)",
                        excludeBegin: true,
                        excludeEnd: true,
                        keywords: KEYWORDS,
                        contains: [
                            "self",
                            VARIABLE,
                            LEFT_AND_RIGHT_SIDE_OF_DOUBLE_COLON,
                            hljs.C_BLOCK_COMMENT_MODE,
                            STRING,
                            NUMBER
                        ]
                    }
                ]
            },
            {
                scope: "class",
                variants: [
                    {
                        beginKeywords: "enum",
                        illegal: /[($"]/
                    },
                    {
                        beginKeywords: "class interface trait",
                        illegal: /[:($"]/
                    }
                ],
                relevance: 0,
                end: /\{/,
                excludeEnd: true,
                contains: [
                    {
                        beginKeywords: "extends implements"
                    },
                    hljs.UNDERSCORE_TITLE_MODE
                ]
            },
            // both use and namespace still use "old style" rules (vs multi-match)
            // because the namespace name can include `\` and we still want each
            // element to be treated as its own *individual* title
            {
                beginKeywords: "namespace",
                relevance: 0,
                end: ";",
                illegal: /[.']/,
                contains: [
                    hljs.inherit(hljs.UNDERSCORE_TITLE_MODE, {
                        scope: "title.class"
                    })
                ]
            },
            {
                beginKeywords: "use",
                relevance: 0,
                end: ";",
                contains: [
                    // TODO: title.function vs title.class
                    {
                        match: /\b(as|const|function)\b/,
                        scope: "keyword"
                    },
                    // TODO: could be title.class or title.function
                    hljs.UNDERSCORE_TITLE_MODE
                ]
            },
            STRING,
            NUMBER
        ]
    };
}


;// CONCATENATED MODULE: ./node_modules/highlight.js/es/languages/php-template.js
/*
Language: PHP Template
Requires: xml.js, php.js
Author: Josh Goebel <hello@joshgoebel.com>
Website: https://www.php.net
Category: common
*/ function phpTemplate(hljs) {
    return {
        name: "PHP template",
        subLanguage: "xml",
        contains: [
            {
                begin: /<\?(php|=)?/,
                end: /\?>/,
                subLanguage: "php",
                contains: [
                    // We don't want the php closing tag ?> to close the PHP block when
                    // inside any of the following blocks:
                    {
                        begin: "/\\*",
                        end: "\\*/",
                        skip: true
                    },
                    {
                        begin: 'b"',
                        end: '"',
                        skip: true
                    },
                    {
                        begin: "b'",
                        end: "'",
                        skip: true
                    },
                    hljs.inherit(hljs.APOS_STRING_MODE, {
                        illegal: null,
                        className: null,
                        contains: null,
                        skip: true
                    }),
                    hljs.inherit(hljs.QUOTE_STRING_MODE, {
                        illegal: null,
                        className: null,
                        contains: null,
                        skip: true
                    })
                ]
            }
        ]
    };
}


;// CONCATENATED MODULE: ./node_modules/highlight.js/es/languages/plaintext.js
/*
Language: Plain text
Author: Egor Rogov (e.rogov@postgrespro.ru)
Description: Plain text without any highlighting.
Category: common
*/ function plaintext(hljs) {
    return {
        name: "Plain text",
        aliases: [
            "text",
            "txt"
        ],
        disableAutodetect: true
    };
}


;// CONCATENATED MODULE: ./node_modules/highlight.js/es/languages/python.js
/*
Language: Python
Description: Python is an interpreted, object-oriented, high-level programming language with dynamic semantics.
Website: https://www.python.org
Category: common
*/ function python(hljs) {
    const regex = hljs.regex;
    const IDENT_RE = /[\p{XID_Start}_]\p{XID_Continue}*/u;
    const RESERVED_WORDS = [
        "and",
        "as",
        "assert",
        "async",
        "await",
        "break",
        "case",
        "class",
        "continue",
        "def",
        "del",
        "elif",
        "else",
        "except",
        "finally",
        "for",
        "from",
        "global",
        "if",
        "import",
        "in",
        "is",
        "lambda",
        "match",
        "nonlocal|10",
        "not",
        "or",
        "pass",
        "raise",
        "return",
        "try",
        "while",
        "with",
        "yield"
    ];
    const BUILT_INS = [
        "__import__",
        "abs",
        "all",
        "any",
        "ascii",
        "bin",
        "bool",
        "breakpoint",
        "bytearray",
        "bytes",
        "callable",
        "chr",
        "classmethod",
        "compile",
        "complex",
        "delattr",
        "dict",
        "dir",
        "divmod",
        "enumerate",
        "eval",
        "exec",
        "filter",
        "float",
        "format",
        "frozenset",
        "getattr",
        "globals",
        "hasattr",
        "hash",
        "help",
        "hex",
        "id",
        "input",
        "int",
        "isinstance",
        "issubclass",
        "iter",
        "len",
        "list",
        "locals",
        "map",
        "max",
        "memoryview",
        "min",
        "next",
        "object",
        "oct",
        "open",
        "ord",
        "pow",
        "print",
        "property",
        "range",
        "repr",
        "reversed",
        "round",
        "set",
        "setattr",
        "slice",
        "sorted",
        "staticmethod",
        "str",
        "sum",
        "super",
        "tuple",
        "type",
        "vars",
        "zip"
    ];
    const LITERALS = [
        "__debug__",
        "Ellipsis",
        "False",
        "None",
        "NotImplemented",
        "True"
    ];
    // https://docs.python.org/3/library/typing.html
    // TODO: Could these be supplemented by a CamelCase matcher in certain
    // contexts, leaving these remaining only for relevance hinting?
    const TYPES = [
        "Any",
        "Callable",
        "Coroutine",
        "Dict",
        "List",
        "Literal",
        "Generic",
        "Optional",
        "Sequence",
        "Set",
        "Tuple",
        "Type",
        "Union"
    ];
    const KEYWORDS = {
        $pattern: /[A-Za-z]\w+|__\w+__/,
        keyword: RESERVED_WORDS,
        built_in: BUILT_INS,
        literal: LITERALS,
        type: TYPES
    };
    const PROMPT = {
        className: "meta",
        begin: /^(>>>|\.\.\.) /
    };
    const SUBST = {
        className: "subst",
        begin: /\{/,
        end: /\}/,
        keywords: KEYWORDS,
        illegal: /#/
    };
    const LITERAL_BRACKET = {
        begin: /\{\{/,
        relevance: 0
    };
    const STRING = {
        className: "string",
        contains: [
            hljs.BACKSLASH_ESCAPE
        ],
        variants: [
            {
                begin: /([uU]|[bB]|[rR]|[bB][rR]|[rR][bB])?'''/,
                end: /'''/,
                contains: [
                    hljs.BACKSLASH_ESCAPE,
                    PROMPT
                ],
                relevance: 10
            },
            {
                begin: /([uU]|[bB]|[rR]|[bB][rR]|[rR][bB])?"""/,
                end: /"""/,
                contains: [
                    hljs.BACKSLASH_ESCAPE,
                    PROMPT
                ],
                relevance: 10
            },
            {
                begin: /([fF][rR]|[rR][fF]|[fF])'''/,
                end: /'''/,
                contains: [
                    hljs.BACKSLASH_ESCAPE,
                    PROMPT,
                    LITERAL_BRACKET,
                    SUBST
                ]
            },
            {
                begin: /([fF][rR]|[rR][fF]|[fF])"""/,
                end: /"""/,
                contains: [
                    hljs.BACKSLASH_ESCAPE,
                    PROMPT,
                    LITERAL_BRACKET,
                    SUBST
                ]
            },
            {
                begin: /([uU]|[rR])'/,
                end: /'/,
                relevance: 10
            },
            {
                begin: /([uU]|[rR])"/,
                end: /"/,
                relevance: 10
            },
            {
                begin: /([bB]|[bB][rR]|[rR][bB])'/,
                end: /'/
            },
            {
                begin: /([bB]|[bB][rR]|[rR][bB])"/,
                end: /"/
            },
            {
                begin: /([fF][rR]|[rR][fF]|[fF])'/,
                end: /'/,
                contains: [
                    hljs.BACKSLASH_ESCAPE,
                    LITERAL_BRACKET,
                    SUBST
                ]
            },
            {
                begin: /([fF][rR]|[rR][fF]|[fF])"/,
                end: /"/,
                contains: [
                    hljs.BACKSLASH_ESCAPE,
                    LITERAL_BRACKET,
                    SUBST
                ]
            },
            hljs.APOS_STRING_MODE,
            hljs.QUOTE_STRING_MODE
        ]
    };
    // https://docs.python.org/3.9/reference/lexical_analysis.html#numeric-literals
    const digitpart = "[0-9](_?[0-9])*";
    const pointfloat = `(\\b(${digitpart}))?\\.(${digitpart})|\\b(${digitpart})\\.`;
    // Whitespace after a number (or any lexical token) is needed only if its absence
    // would change the tokenization
    // https://docs.python.org/3.9/reference/lexical_analysis.html#whitespace-between-tokens
    // We deviate slightly, requiring a word boundary or a keyword
    // to avoid accidentally recognizing *prefixes* (e.g., `0` in `0x41` or `08` or `0__1`)
    const lookahead = `\\b|${RESERVED_WORDS.join("|")}`;
    const NUMBER = {
        className: "number",
        relevance: 0,
        variants: [
            // exponentfloat, pointfloat
            // https://docs.python.org/3.9/reference/lexical_analysis.html#floating-point-literals
            // optionally imaginary
            // https://docs.python.org/3.9/reference/lexical_analysis.html#imaginary-literals
            // Note: no leading \b because floats can start with a decimal point
            // and we don't want to mishandle e.g. `fn(.5)`,
            // no trailing \b for pointfloat because it can end with a decimal point
            // and we don't want to mishandle e.g. `0..hex()`; this should be safe
            // because both MUST contain a decimal point and so cannot be confused with
            // the interior part of an identifier
            {
                begin: `(\\b(${digitpart})|(${pointfloat}))[eE][+-]?(${digitpart})[jJ]?(?=${lookahead})`
            },
            {
                begin: `(${pointfloat})[jJ]?`
            },
            // decinteger, bininteger, octinteger, hexinteger
            // https://docs.python.org/3.9/reference/lexical_analysis.html#integer-literals
            // optionally "long" in Python 2
            // https://docs.python.org/2.7/reference/lexical_analysis.html#integer-and-long-integer-literals
            // decinteger is optionally imaginary
            // https://docs.python.org/3.9/reference/lexical_analysis.html#imaginary-literals
            {
                begin: `\\b([1-9](_?[0-9])*|0+(_?0)*)[lLjJ]?(?=${lookahead})`
            },
            {
                begin: `\\b0[bB](_?[01])+[lL]?(?=${lookahead})`
            },
            {
                begin: `\\b0[oO](_?[0-7])+[lL]?(?=${lookahead})`
            },
            {
                begin: `\\b0[xX](_?[0-9a-fA-F])+[lL]?(?=${lookahead})`
            },
            // imagnumber (digitpart-based)
            // https://docs.python.org/3.9/reference/lexical_analysis.html#imaginary-literals
            {
                begin: `\\b(${digitpart})[jJ](?=${lookahead})`
            }
        ]
    };
    const COMMENT_TYPE = {
        className: "comment",
        begin: regex.lookahead(/# type:/),
        end: /$/,
        keywords: KEYWORDS,
        contains: [
            {
                begin: /# type:/
            },
            // comment within a datatype comment includes no keywords
            {
                begin: /#/,
                end: /\b\B/,
                endsWithParent: true
            }
        ]
    };
    const PARAMS = {
        className: "params",
        variants: [
            // Exclude params in functions without params
            {
                className: "",
                begin: /\(\s*\)/,
                skip: true
            },
            {
                begin: /\(/,
                end: /\)/,
                excludeBegin: true,
                excludeEnd: true,
                keywords: KEYWORDS,
                contains: [
                    "self",
                    PROMPT,
                    NUMBER,
                    STRING,
                    hljs.HASH_COMMENT_MODE
                ]
            }
        ]
    };
    SUBST.contains = [
        STRING,
        NUMBER,
        PROMPT
    ];
    return {
        name: "Python",
        aliases: [
            "py",
            "gyp",
            "ipython"
        ],
        unicodeRegex: true,
        keywords: KEYWORDS,
        illegal: /(<\/|\?)|=>/,
        contains: [
            PROMPT,
            NUMBER,
            {
                // very common convention
                begin: /\bself\b/
            },
            {
                // eat "if" prior to string so that it won't accidentally be
                // labeled as an f-string
                beginKeywords: "if",
                relevance: 0
            },
            STRING,
            COMMENT_TYPE,
            hljs.HASH_COMMENT_MODE,
            {
                match: [
                    /\bdef/,
                    /\s+/,
                    IDENT_RE
                ],
                scope: {
                    1: "keyword",
                    3: "title.function"
                },
                contains: [
                    PARAMS
                ]
            },
            {
                variants: [
                    {
                        match: [
                            /\bclass/,
                            /\s+/,
                            IDENT_RE,
                            /\s*/,
                            /\(\s*/,
                            IDENT_RE,
                            /\s*\)/
                        ]
                    },
                    {
                        match: [
                            /\bclass/,
                            /\s+/,
                            IDENT_RE
                        ]
                    }
                ],
                scope: {
                    1: "keyword",
                    3: "title.class",
                    6: "title.class.inherited"
                }
            },
            {
                className: "meta",
                begin: /^[\t ]*@/,
                end: /(?=#)|$/,
                contains: [
                    NUMBER,
                    PARAMS,
                    STRING
                ]
            }
        ]
    };
}


;// CONCATENATED MODULE: ./node_modules/highlight.js/es/languages/python-repl.js
/*
Language: Python REPL
Requires: python.js
Author: Josh Goebel <hello@joshgoebel.com>
Category: common
*/ function pythonRepl(hljs) {
    return {
        aliases: [
            "pycon"
        ],
        contains: [
            {
                className: "meta.prompt",
                starts: {
                    // a space separates the REPL prefix from the actual code
                    // this is purely for cleaner HTML output
                    end: / |$/,
                    starts: {
                        end: "$",
                        subLanguage: "python"
                    }
                },
                variants: [
                    {
                        begin: /^>>>(?=[ ]|$)/
                    },
                    {
                        begin: /^\.\.\.(?=[ ]|$)/
                    }
                ]
            }
        ]
    };
}


;// CONCATENATED MODULE: ./node_modules/highlight.js/es/languages/r.js
/*
Language: R
Description: R is a free software environment for statistical computing and graphics.
Author: Joe Cheng <joe@rstudio.org>
Contributors: Konrad Rudolph <konrad.rudolph@gmail.com>
Website: https://www.r-project.org
Category: common,scientific
*/ /** @type LanguageFn */ function r(hljs) {
    const regex = hljs.regex;
    // Identifiers in R cannot start with `_`, but they can start with `.` if it
    // is not immediately followed by a digit.
    // R also supports quoted identifiers, which are near-arbitrary sequences
    // delimited by backticks (`…`), which may contain escape sequences. These are
    // handled in a separate mode. See `test/markup/r/names.txt` for examples.
    // FIXME: Support Unicode identifiers.
    const IDENT_RE = /(?:(?:[a-zA-Z]|\.[._a-zA-Z])[._a-zA-Z0-9]*)|\.(?!\d)/;
    const NUMBER_TYPES_RE = regex.either(// Special case: only hexadecimal binary powers can contain fractions
    /0[xX][0-9a-fA-F]+\.[0-9a-fA-F]*[pP][+-]?\d+i?/, // Hexadecimal numbers without fraction and optional binary power
    /0[xX][0-9a-fA-F]+(?:[pP][+-]?\d+)?[Li]?/, // Decimal numbers
    /(?:\d+(?:\.\d*)?|\.\d+)(?:[eE][+-]?\d+)?[Li]?/);
    const OPERATORS_RE = /[=!<>:]=|\|\||&&|:::?|<-|<<-|->>|->|\|>|[-+*\/?!$&|:<=>@^~]|\*\*/;
    const PUNCTUATION_RE = regex.either(/[()]/, /[{}]/, /\[\[/, /[[\]]/, /\\/, /,/);
    return {
        name: "R",
        keywords: {
            $pattern: IDENT_RE,
            keyword: "function if in break next repeat else for while",
            literal: "NULL NA TRUE FALSE Inf NaN NA_integer_|10 NA_real_|10 " + "NA_character_|10 NA_complex_|10",
            built_in: // Builtin constants
            "LETTERS letters month.abb month.name pi T F " + "abs acos acosh all any anyNA Arg as.call as.character " + "as.complex as.double as.environment as.integer as.logical " + "as.null.default as.numeric as.raw asin asinh atan atanh attr " + "attributes baseenv browser c call ceiling class Conj cos cosh " + "cospi cummax cummin cumprod cumsum digamma dim dimnames " + "emptyenv exp expression floor forceAndCall gamma gc.time " + "globalenv Im interactive invisible is.array is.atomic is.call " + "is.character is.complex is.double is.environment is.expression " + "is.finite is.function is.infinite is.integer is.language " + "is.list is.logical is.matrix is.na is.name is.nan is.null " + "is.numeric is.object is.pairlist is.raw is.recursive is.single " + "is.symbol lazyLoadDBfetch length lgamma list log max min " + "missing Mod names nargs nzchar oldClass on.exit pos.to.env " + "proc.time prod quote range Re rep retracemem return round " + "seq_along seq_len seq.int sign signif sin sinh sinpi sqrt " + "standardGeneric substitute sum switch tan tanh tanpi tracemem " + "trigamma trunc unclass untracemem UseMethod xtfrm"
        },
        contains: [
            // Roxygen comments
            hljs.COMMENT(/#'/, /$/, {
                contains: [
                    {
                        // Handle `@examples` separately to cause all subsequent code
                        // until the next `@`-tag on its own line to be kept as-is,
                        // preventing highlighting. This code is example R code, so nested
                        // doctags shouldn’t be treated as such. See
                        // `test/markup/r/roxygen.txt` for an example.
                        scope: "doctag",
                        match: /@examples/,
                        starts: {
                            end: regex.lookahead(regex.either(// end if another doc comment
                            /\n^#'\s*(?=@[a-zA-Z]+)/, // or a line with no comment
                            /\n^(?!#')/)),
                            endsParent: true
                        }
                    },
                    {
                        // Handle `@param` to highlight the parameter name following
                        // after.
                        scope: "doctag",
                        begin: "@param",
                        end: /$/,
                        contains: [
                            {
                                scope: "variable",
                                variants: [
                                    {
                                        match: IDENT_RE
                                    },
                                    {
                                        match: /`(?:\\.|[^`\\])+`/
                                    }
                                ],
                                endsParent: true
                            }
                        ]
                    },
                    {
                        scope: "doctag",
                        match: /@[a-zA-Z]+/
                    },
                    {
                        scope: "keyword",
                        match: /\\[a-zA-Z]+/
                    }
                ]
            }),
            hljs.HASH_COMMENT_MODE,
            {
                scope: "string",
                contains: [
                    hljs.BACKSLASH_ESCAPE
                ],
                variants: [
                    hljs.END_SAME_AS_BEGIN({
                        begin: /[rR]"(-*)\(/,
                        end: /\)(-*)"/
                    }),
                    hljs.END_SAME_AS_BEGIN({
                        begin: /[rR]"(-*)\{/,
                        end: /\}(-*)"/
                    }),
                    hljs.END_SAME_AS_BEGIN({
                        begin: /[rR]"(-*)\[/,
                        end: /\](-*)"/
                    }),
                    hljs.END_SAME_AS_BEGIN({
                        begin: /[rR]'(-*)\(/,
                        end: /\)(-*)'/
                    }),
                    hljs.END_SAME_AS_BEGIN({
                        begin: /[rR]'(-*)\{/,
                        end: /\}(-*)'/
                    }),
                    hljs.END_SAME_AS_BEGIN({
                        begin: /[rR]'(-*)\[/,
                        end: /\](-*)'/
                    }),
                    {
                        begin: '"',
                        end: '"',
                        relevance: 0
                    },
                    {
                        begin: "'",
                        end: "'",
                        relevance: 0
                    }
                ]
            },
            // Matching numbers immediately following punctuation and operators is
            // tricky since we need to look at the character ahead of a number to
            // ensure the number is not part of an identifier, and we cannot use
            // negative look-behind assertions. So instead we explicitly handle all
            // possible combinations of (operator|punctuation), number.
            // TODO: replace with negative look-behind when available
            // { begin: /(?<![a-zA-Z0-9._])0[xX][0-9a-fA-F]+\.[0-9a-fA-F]*[pP][+-]?\d+i?/ },
            // { begin: /(?<![a-zA-Z0-9._])0[xX][0-9a-fA-F]+([pP][+-]?\d+)?[Li]?/ },
            // { begin: /(?<![a-zA-Z0-9._])(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?[Li]?/ }
            {
                relevance: 0,
                variants: [
                    {
                        scope: {
                            1: "operator",
                            2: "number"
                        },
                        match: [
                            OPERATORS_RE,
                            NUMBER_TYPES_RE
                        ]
                    },
                    {
                        scope: {
                            1: "operator",
                            2: "number"
                        },
                        match: [
                            /%[^%]*%/,
                            NUMBER_TYPES_RE
                        ]
                    },
                    {
                        scope: {
                            1: "punctuation",
                            2: "number"
                        },
                        match: [
                            PUNCTUATION_RE,
                            NUMBER_TYPES_RE
                        ]
                    },
                    {
                        scope: {
                            2: "number"
                        },
                        match: [
                            /[^a-zA-Z0-9._]|^/,
                            NUMBER_TYPES_RE
                        ]
                    }
                ]
            },
            // Operators/punctuation when they're not directly followed by numbers
            {
                // Relevance boost for the most common assignment form.
                scope: {
                    3: "operator"
                },
                match: [
                    IDENT_RE,
                    /\s+/,
                    /<-/,
                    /\s+/
                ]
            },
            {
                scope: "operator",
                relevance: 0,
                variants: [
                    {
                        match: OPERATORS_RE
                    },
                    {
                        match: /%[^%]*%/
                    }
                ]
            },
            {
                scope: "punctuation",
                relevance: 0,
                match: PUNCTUATION_RE
            },
            {
                // Escaped identifier
                begin: "`",
                end: "`",
                contains: [
                    {
                        begin: /\\./
                    }
                ]
            }
        ]
    };
}


;// CONCATENATED MODULE: ./node_modules/highlight.js/es/languages/ruby.js
/*
Language: Ruby
Description: Ruby is a dynamic, open source programming language with a focus on simplicity and productivity.
Website: https://www.ruby-lang.org/
Author: Anton Kovalyov <anton@kovalyov.net>
Contributors: Peter Leonov <gojpeg@yandex.ru>, Vasily Polovnyov <vast@whiteants.net>, Loren Segal <lsegal@soen.ca>, Pascal Hurni <phi@ruby-reactive.org>, Cedric Sohrauer <sohrauer@googlemail.com>
Category: common
*/ function ruby(hljs) {
    const regex = hljs.regex;
    const RUBY_METHOD_RE = "([a-zA-Z_]\\w*[!?=]?|[-+~]@|<<|>>|=~|===?|<=>|[<>]=?|\\*\\*|[-/+%^&*~`|]|\\[\\]=?)";
    // TODO: move concepts like CAMEL_CASE into `modes.js`
    const CLASS_NAME_RE = regex.either(/\b([A-Z]+[a-z0-9]+)+/, // ends in caps
    /\b([A-Z]+[a-z0-9]+)+[A-Z]+/);
    const CLASS_NAME_WITH_NAMESPACE_RE = regex.concat(CLASS_NAME_RE, /(::\w+)*/);
    // very popular ruby built-ins that one might even assume
    // are actual keywords (despite that not being the case)
    const PSEUDO_KWS = [
        "include",
        "extend",
        "prepend",
        "public",
        "private",
        "protected",
        "raise",
        "throw"
    ];
    const RUBY_KEYWORDS = {
        "variable.constant": [
            "__FILE__",
            "__LINE__",
            "__ENCODING__"
        ],
        "variable.language": [
            "self",
            "super"
        ],
        keyword: [
            "alias",
            "and",
            "begin",
            "BEGIN",
            "break",
            "case",
            "class",
            "defined",
            "do",
            "else",
            "elsif",
            "end",
            "END",
            "ensure",
            "for",
            "if",
            "in",
            "module",
            "next",
            "not",
            "or",
            "redo",
            "require",
            "rescue",
            "retry",
            "return",
            "then",
            "undef",
            "unless",
            "until",
            "when",
            "while",
            "yield",
            ...PSEUDO_KWS
        ],
        built_in: [
            "proc",
            "lambda",
            "attr_accessor",
            "attr_reader",
            "attr_writer",
            "define_method",
            "private_constant",
            "module_function"
        ],
        literal: [
            "true",
            "false",
            "nil"
        ]
    };
    const YARDOCTAG = {
        className: "doctag",
        begin: "@[A-Za-z]+"
    };
    const IRB_OBJECT = {
        begin: "#<",
        end: ">"
    };
    const COMMENT_MODES = [
        hljs.COMMENT("#", "$", {
            contains: [
                YARDOCTAG
            ]
        }),
        hljs.COMMENT("^=begin", "^=end", {
            contains: [
                YARDOCTAG
            ],
            relevance: 10
        }),
        hljs.COMMENT("^__END__", hljs.MATCH_NOTHING_RE)
    ];
    const SUBST = {
        className: "subst",
        begin: /#\{/,
        end: /\}/,
        keywords: RUBY_KEYWORDS
    };
    const STRING = {
        className: "string",
        contains: [
            hljs.BACKSLASH_ESCAPE,
            SUBST
        ],
        variants: [
            {
                begin: /'/,
                end: /'/
            },
            {
                begin: /"/,
                end: /"/
            },
            {
                begin: /`/,
                end: /`/
            },
            {
                begin: /%[qQwWx]?\(/,
                end: /\)/
            },
            {
                begin: /%[qQwWx]?\[/,
                end: /\]/
            },
            {
                begin: /%[qQwWx]?\{/,
                end: /\}/
            },
            {
                begin: /%[qQwWx]?</,
                end: />/
            },
            {
                begin: /%[qQwWx]?\//,
                end: /\//
            },
            {
                begin: /%[qQwWx]?%/,
                end: /%/
            },
            {
                begin: /%[qQwWx]?-/,
                end: /-/
            },
            {
                begin: /%[qQwWx]?\|/,
                end: /\|/
            },
            // in the following expressions, \B in the beginning suppresses recognition of ?-sequences
            // where ? is the last character of a preceding identifier, as in: `func?4`
            {
                begin: /\B\?(\\\d{1,3})/
            },
            {
                begin: /\B\?(\\x[A-Fa-f0-9]{1,2})/
            },
            {
                begin: /\B\?(\\u\{?[A-Fa-f0-9]{1,6}\}?)/
            },
            {
                begin: /\B\?(\\M-\\C-|\\M-\\c|\\c\\M-|\\M-|\\C-\\M-)[\x20-\x7e]/
            },
            {
                begin: /\B\?\\(c|C-)[\x20-\x7e]/
            },
            {
                begin: /\B\?\\?\S/
            },
            // heredocs
            {
                // this guard makes sure that we have an entire heredoc and not a false
                // positive (auto-detect, etc.)
                begin: regex.concat(/<<[-~]?'?/, regex.lookahead(/(\w+)(?=\W)[^\n]*\n(?:[^\n]*\n)*?\s*\1\b/)),
                contains: [
                    hljs.END_SAME_AS_BEGIN({
                        begin: /(\w+)/,
                        end: /(\w+)/,
                        contains: [
                            hljs.BACKSLASH_ESCAPE,
                            SUBST
                        ]
                    })
                ]
            }
        ]
    };
    // Ruby syntax is underdocumented, but this grammar seems to be accurate
    // as of version 2.7.2 (confirmed with (irb and `Ripper.sexp(...)`)
    // https://docs.ruby-lang.org/en/2.7.0/doc/syntax/literals_rdoc.html#label-Numbers
    const decimal = "[1-9](_?[0-9])*|0";
    const digits = "[0-9](_?[0-9])*";
    const NUMBER = {
        className: "number",
        relevance: 0,
        variants: [
            // decimal integer/float, optionally exponential or rational, optionally imaginary
            {
                begin: `\\b(${decimal})(\\.(${digits}))?([eE][+-]?(${digits})|r)?i?\\b`
            },
            // explicit decimal/binary/octal/hexadecimal integer,
            // optionally rational and/or imaginary
            {
                begin: "\\b0[dD][0-9](_?[0-9])*r?i?\\b"
            },
            {
                begin: "\\b0[bB][0-1](_?[0-1])*r?i?\\b"
            },
            {
                begin: "\\b0[oO][0-7](_?[0-7])*r?i?\\b"
            },
            {
                begin: "\\b0[xX][0-9a-fA-F](_?[0-9a-fA-F])*r?i?\\b"
            },
            // 0-prefixed implicit octal integer, optionally rational and/or imaginary
            {
                begin: "\\b0(_?[0-7])+r?i?\\b"
            }
        ]
    };
    const PARAMS = {
        variants: [
            {
                match: /\(\)/
            },
            {
                className: "params",
                begin: /\(/,
                end: /(?=\))/,
                excludeBegin: true,
                endsParent: true,
                keywords: RUBY_KEYWORDS
            }
        ]
    };
    const INCLUDE_EXTEND = {
        match: [
            /(include|extend)\s+/,
            CLASS_NAME_WITH_NAMESPACE_RE
        ],
        scope: {
            2: "title.class"
        },
        keywords: RUBY_KEYWORDS
    };
    const CLASS_DEFINITION = {
        variants: [
            {
                match: [
                    /class\s+/,
                    CLASS_NAME_WITH_NAMESPACE_RE,
                    /\s+<\s+/,
                    CLASS_NAME_WITH_NAMESPACE_RE
                ]
            },
            {
                match: [
                    /\b(class|module)\s+/,
                    CLASS_NAME_WITH_NAMESPACE_RE
                ]
            }
        ],
        scope: {
            2: "title.class",
            4: "title.class.inherited"
        },
        keywords: RUBY_KEYWORDS
    };
    const UPPER_CASE_CONSTANT = {
        relevance: 0,
        match: /\b[A-Z][A-Z_0-9]+\b/,
        className: "variable.constant"
    };
    const METHOD_DEFINITION = {
        match: [
            /def/,
            /\s+/,
            RUBY_METHOD_RE
        ],
        scope: {
            1: "keyword",
            3: "title.function"
        },
        contains: [
            PARAMS
        ]
    };
    const OBJECT_CREATION = {
        relevance: 0,
        match: [
            CLASS_NAME_WITH_NAMESPACE_RE,
            /\.new[. (]/
        ],
        scope: {
            1: "title.class"
        }
    };
    // CamelCase
    const CLASS_REFERENCE = {
        relevance: 0,
        match: CLASS_NAME_RE,
        scope: "title.class"
    };
    const RUBY_DEFAULT_CONTAINS = [
        STRING,
        CLASS_DEFINITION,
        INCLUDE_EXTEND,
        OBJECT_CREATION,
        UPPER_CASE_CONSTANT,
        CLASS_REFERENCE,
        METHOD_DEFINITION,
        {
            // swallow namespace qualifiers before symbols
            begin: hljs.IDENT_RE + "::"
        },
        {
            className: "symbol",
            begin: hljs.UNDERSCORE_IDENT_RE + "(!|\\?)?:",
            relevance: 0
        },
        {
            className: "symbol",
            begin: ":(?!\\s)",
            contains: [
                STRING,
                {
                    begin: RUBY_METHOD_RE
                }
            ],
            relevance: 0
        },
        NUMBER,
        {
            // negative-look forward attempts to prevent false matches like:
            // @ident@ or $ident$ that might indicate this is not ruby at all
            className: "variable",
            begin: "(\\$\\W)|((\\$|@@?)(\\w+))(?=[^@$?])" + `(?![A-Za-z])(?![@$?'])`
        },
        {
            className: "params",
            begin: /\|/,
            end: /\|/,
            excludeBegin: true,
            excludeEnd: true,
            relevance: 0,
            keywords: RUBY_KEYWORDS
        },
        {
            begin: "(" + hljs.RE_STARTERS_RE + "|unless)\\s*",
            keywords: "unless",
            contains: [
                {
                    className: "regexp",
                    contains: [
                        hljs.BACKSLASH_ESCAPE,
                        SUBST
                    ],
                    illegal: /\n/,
                    variants: [
                        {
                            begin: "/",
                            end: "/[a-z]*"
                        },
                        {
                            begin: /%r\{/,
                            end: /\}[a-z]*/
                        },
                        {
                            begin: "%r\\(",
                            end: "\\)[a-z]*"
                        },
                        {
                            begin: "%r!",
                            end: "![a-z]*"
                        },
                        {
                            begin: "%r\\[",
                            end: "\\][a-z]*"
                        }
                    ]
                }
            ].concat(IRB_OBJECT, COMMENT_MODES),
            relevance: 0
        }
    ].concat(IRB_OBJECT, COMMENT_MODES);
    SUBST.contains = RUBY_DEFAULT_CONTAINS;
    PARAMS.contains = RUBY_DEFAULT_CONTAINS;
    // >>
    // ?>
    const SIMPLE_PROMPT = "[>?]>";
    // irb(main):001:0>
    const DEFAULT_PROMPT = "[\\w#]+\\(\\w+\\):\\d+:\\d+[>*]";
    const RVM_PROMPT = "(\\w+-)?\\d+\\.\\d+\\.\\d+(p\\d+)?[^\\d][^>]+>";
    const IRB_DEFAULT = [
        {
            begin: /^\s*=>/,
            starts: {
                end: "$",
                contains: RUBY_DEFAULT_CONTAINS
            }
        },
        {
            className: "meta.prompt",
            begin: "^(" + SIMPLE_PROMPT + "|" + DEFAULT_PROMPT + "|" + RVM_PROMPT + ")(?=[ ])",
            starts: {
                end: "$",
                keywords: RUBY_KEYWORDS,
                contains: RUBY_DEFAULT_CONTAINS
            }
        }
    ];
    COMMENT_MODES.unshift(IRB_OBJECT);
    return {
        name: "Ruby",
        aliases: [
            "rb",
            "gemspec",
            "podspec",
            "thor",
            "irb"
        ],
        keywords: RUBY_KEYWORDS,
        illegal: /\/\*/,
        contains: [
            hljs.SHEBANG({
                binary: "ruby"
            })
        ].concat(IRB_DEFAULT).concat(COMMENT_MODES).concat(RUBY_DEFAULT_CONTAINS)
    };
}


;// CONCATENATED MODULE: ./node_modules/highlight.js/es/languages/rust.js
/*
Language: Rust
Author: Andrey Vlasovskikh <andrey.vlasovskikh@gmail.com>
Contributors: Roman Shmatov <romanshmatov@gmail.com>, Kasper Andersen <kma_untrusted@protonmail.com>
Website: https://www.rust-lang.org
Category: common, system
*/ /** @type LanguageFn */ function rust(hljs) {
    const regex = hljs.regex;
    const FUNCTION_INVOKE = {
        className: "title.function.invoke",
        relevance: 0,
        begin: regex.concat(/\b/, /(?!let\b)/, hljs.IDENT_RE, regex.lookahead(/\s*\(/))
    };
    const NUMBER_SUFFIX = "([ui](8|16|32|64|128|size)|f(32|64))?";
    const KEYWORDS = [
        "abstract",
        "as",
        "async",
        "await",
        "become",
        "box",
        "break",
        "const",
        "continue",
        "crate",
        "do",
        "dyn",
        "else",
        "enum",
        "extern",
        "false",
        "final",
        "fn",
        "for",
        "if",
        "impl",
        "in",
        "let",
        "loop",
        "macro",
        "match",
        "mod",
        "move",
        "mut",
        "override",
        "priv",
        "pub",
        "ref",
        "return",
        "self",
        "Self",
        "static",
        "struct",
        "super",
        "trait",
        "true",
        "try",
        "type",
        "typeof",
        "unsafe",
        "unsized",
        "use",
        "virtual",
        "where",
        "while",
        "yield"
    ];
    const LITERALS = [
        "true",
        "false",
        "Some",
        "None",
        "Ok",
        "Err"
    ];
    const BUILTINS = [
        // functions
        "drop ",
        // traits
        "Copy",
        "Send",
        "Sized",
        "Sync",
        "Drop",
        "Fn",
        "FnMut",
        "FnOnce",
        "ToOwned",
        "Clone",
        "Debug",
        "PartialEq",
        "PartialOrd",
        "Eq",
        "Ord",
        "AsRef",
        "AsMut",
        "Into",
        "From",
        "Default",
        "Iterator",
        "Extend",
        "IntoIterator",
        "DoubleEndedIterator",
        "ExactSizeIterator",
        "SliceConcatExt",
        "ToString",
        // macros
        "assert!",
        "assert_eq!",
        "bitflags!",
        "bytes!",
        "cfg!",
        "col!",
        "concat!",
        "concat_idents!",
        "debug_assert!",
        "debug_assert_eq!",
        "env!",
        "panic!",
        "file!",
        "format!",
        "format_args!",
        "include_bytes!",
        "include_str!",
        "line!",
        "local_data_key!",
        "module_path!",
        "option_env!",
        "print!",
        "println!",
        "select!",
        "stringify!",
        "try!",
        "unimplemented!",
        "unreachable!",
        "vec!",
        "write!",
        "writeln!",
        "macro_rules!",
        "assert_ne!",
        "debug_assert_ne!"
    ];
    const TYPES = [
        "i8",
        "i16",
        "i32",
        "i64",
        "i128",
        "isize",
        "u8",
        "u16",
        "u32",
        "u64",
        "u128",
        "usize",
        "f32",
        "f64",
        "str",
        "char",
        "bool",
        "Box",
        "Option",
        "Result",
        "String",
        "Vec"
    ];
    return {
        name: "Rust",
        aliases: [
            "rs"
        ],
        keywords: {
            $pattern: hljs.IDENT_RE + "!?",
            type: TYPES,
            keyword: KEYWORDS,
            literal: LITERALS,
            built_in: BUILTINS
        },
        illegal: "</",
        contains: [
            hljs.C_LINE_COMMENT_MODE,
            hljs.COMMENT("/\\*", "\\*/", {
                contains: [
                    "self"
                ]
            }),
            hljs.inherit(hljs.QUOTE_STRING_MODE, {
                begin: /b?"/,
                illegal: null
            }),
            {
                className: "string",
                variants: [
                    {
                        begin: /b?r(#*)"(.|\n)*?"\1(?!#)/
                    },
                    {
                        begin: /b?'\\?(x\w{2}|u\w{4}|U\w{8}|.)'/
                    }
                ]
            },
            {
                className: "symbol",
                begin: /'[a-zA-Z_][a-zA-Z0-9_]*/
            },
            {
                className: "number",
                variants: [
                    {
                        begin: "\\b0b([01_]+)" + NUMBER_SUFFIX
                    },
                    {
                        begin: "\\b0o([0-7_]+)" + NUMBER_SUFFIX
                    },
                    {
                        begin: "\\b0x([A-Fa-f0-9_]+)" + NUMBER_SUFFIX
                    },
                    {
                        begin: "\\b(\\d[\\d_]*(\\.[0-9_]+)?([eE][+-]?[0-9_]+)?)" + NUMBER_SUFFIX
                    }
                ],
                relevance: 0
            },
            {
                begin: [
                    /fn/,
                    /\s+/,
                    hljs.UNDERSCORE_IDENT_RE
                ],
                className: {
                    1: "keyword",
                    3: "title.function"
                }
            },
            {
                className: "meta",
                begin: "#!?\\[",
                end: "\\]",
                contains: [
                    {
                        className: "string",
                        begin: /"/,
                        end: /"/
                    }
                ]
            },
            {
                begin: [
                    /let/,
                    /\s+/,
                    /(?:mut\s+)?/,
                    hljs.UNDERSCORE_IDENT_RE
                ],
                className: {
                    1: "keyword",
                    3: "keyword",
                    4: "variable"
                }
            },
            // must come before impl/for rule later
            {
                begin: [
                    /for/,
                    /\s+/,
                    hljs.UNDERSCORE_IDENT_RE,
                    /\s+/,
                    /in/
                ],
                className: {
                    1: "keyword",
                    3: "variable",
                    5: "keyword"
                }
            },
            {
                begin: [
                    /type/,
                    /\s+/,
                    hljs.UNDERSCORE_IDENT_RE
                ],
                className: {
                    1: "keyword",
                    3: "title.class"
                }
            },
            {
                begin: [
                    /(?:trait|enum|struct|union|impl|for)/,
                    /\s+/,
                    hljs.UNDERSCORE_IDENT_RE
                ],
                className: {
                    1: "keyword",
                    3: "title.class"
                }
            },
            {
                begin: hljs.IDENT_RE + "::",
                keywords: {
                    keyword: "Self",
                    built_in: BUILTINS,
                    type: TYPES
                }
            },
            {
                className: "punctuation",
                begin: "->"
            },
            FUNCTION_INVOKE
        ]
    };
}


;// CONCATENATED MODULE: ./node_modules/highlight.js/es/languages/scss.js
const scss_MODES = (hljs)=>{
    return {
        IMPORTANT: {
            scope: "meta",
            begin: "!important"
        },
        BLOCK_COMMENT: hljs.C_BLOCK_COMMENT_MODE,
        HEXCOLOR: {
            scope: "number",
            begin: /#(([0-9a-fA-F]{3,4})|(([0-9a-fA-F]{2}){3,4}))\b/
        },
        FUNCTION_DISPATCH: {
            className: "built_in",
            begin: /[\w-]+(?=\()/
        },
        ATTRIBUTE_SELECTOR_MODE: {
            scope: "selector-attr",
            begin: /\[/,
            end: /\]/,
            illegal: "$",
            contains: [
                hljs.APOS_STRING_MODE,
                hljs.QUOTE_STRING_MODE
            ]
        },
        CSS_NUMBER_MODE: {
            scope: "number",
            begin: hljs.NUMBER_RE + "(" + "%|em|ex|ch|rem" + "|vw|vh|vmin|vmax" + "|cm|mm|in|pt|pc|px" + "|deg|grad|rad|turn" + "|s|ms" + "|Hz|kHz" + "|dpi|dpcm|dppx" + ")?",
            relevance: 0
        },
        CSS_VARIABLE: {
            className: "attr",
            begin: /--[A-Za-z][A-Za-z0-9_-]*/
        }
    };
};
const scss_TAGS = [
    "a",
    "abbr",
    "address",
    "article",
    "aside",
    "audio",
    "b",
    "blockquote",
    "body",
    "button",
    "canvas",
    "caption",
    "cite",
    "code",
    "dd",
    "del",
    "details",
    "dfn",
    "div",
    "dl",
    "dt",
    "em",
    "fieldset",
    "figcaption",
    "figure",
    "footer",
    "form",
    "h1",
    "h2",
    "h3",
    "h4",
    "h5",
    "h6",
    "header",
    "hgroup",
    "html",
    "i",
    "iframe",
    "img",
    "input",
    "ins",
    "kbd",
    "label",
    "legend",
    "li",
    "main",
    "mark",
    "menu",
    "nav",
    "object",
    "ol",
    "p",
    "q",
    "quote",
    "samp",
    "section",
    "span",
    "strong",
    "summary",
    "sup",
    "table",
    "tbody",
    "td",
    "textarea",
    "tfoot",
    "th",
    "thead",
    "time",
    "tr",
    "ul",
    "var",
    "video"
];
const scss_MEDIA_FEATURES = [
    "any-hover",
    "any-pointer",
    "aspect-ratio",
    "color",
    "color-gamut",
    "color-index",
    "device-aspect-ratio",
    "device-height",
    "device-width",
    "display-mode",
    "forced-colors",
    "grid",
    "height",
    "hover",
    "inverted-colors",
    "monochrome",
    "orientation",
    "overflow-block",
    "overflow-inline",
    "pointer",
    "prefers-color-scheme",
    "prefers-contrast",
    "prefers-reduced-motion",
    "prefers-reduced-transparency",
    "resolution",
    "scan",
    "scripting",
    "update",
    "width",
    // TODO: find a better solution?
    "min-width",
    "max-width",
    "min-height",
    "max-height"
];
// https://developer.mozilla.org/en-US/docs/Web/CSS/Pseudo-classes
const scss_PSEUDO_CLASSES = [
    "active",
    "any-link",
    "blank",
    "checked",
    "current",
    "default",
    "defined",
    "dir",
    "disabled",
    "drop",
    "empty",
    "enabled",
    "first",
    "first-child",
    "first-of-type",
    "fullscreen",
    "future",
    "focus",
    "focus-visible",
    "focus-within",
    "has",
    "host",
    "host-context",
    "hover",
    "indeterminate",
    "in-range",
    "invalid",
    "is",
    "lang",
    "last-child",
    "last-of-type",
    "left",
    "link",
    "local-link",
    "not",
    "nth-child",
    "nth-col",
    "nth-last-child",
    "nth-last-col",
    "nth-last-of-type",
    "nth-of-type",
    "only-child",
    "only-of-type",
    "optional",
    "out-of-range",
    "past",
    "placeholder-shown",
    "read-only",
    "read-write",
    "required",
    "right",
    "root",
    "scope",
    "target",
    "target-within",
    "user-invalid",
    "valid",
    "visited",
    "where" // where()
];
// https://developer.mozilla.org/en-US/docs/Web/CSS/Pseudo-elements
const scss_PSEUDO_ELEMENTS = [
    "after",
    "backdrop",
    "before",
    "cue",
    "cue-region",
    "first-letter",
    "first-line",
    "grammar-error",
    "marker",
    "part",
    "placeholder",
    "selection",
    "slotted",
    "spelling-error"
];
const scss_ATTRIBUTES = [
    "align-content",
    "align-items",
    "align-self",
    "all",
    "animation",
    "animation-delay",
    "animation-direction",
    "animation-duration",
    "animation-fill-mode",
    "animation-iteration-count",
    "animation-name",
    "animation-play-state",
    "animation-timing-function",
    "backface-visibility",
    "background",
    "background-attachment",
    "background-blend-mode",
    "background-clip",
    "background-color",
    "background-image",
    "background-origin",
    "background-position",
    "background-repeat",
    "background-size",
    "block-size",
    "border",
    "border-block",
    "border-block-color",
    "border-block-end",
    "border-block-end-color",
    "border-block-end-style",
    "border-block-end-width",
    "border-block-start",
    "border-block-start-color",
    "border-block-start-style",
    "border-block-start-width",
    "border-block-style",
    "border-block-width",
    "border-bottom",
    "border-bottom-color",
    "border-bottom-left-radius",
    "border-bottom-right-radius",
    "border-bottom-style",
    "border-bottom-width",
    "border-collapse",
    "border-color",
    "border-image",
    "border-image-outset",
    "border-image-repeat",
    "border-image-slice",
    "border-image-source",
    "border-image-width",
    "border-inline",
    "border-inline-color",
    "border-inline-end",
    "border-inline-end-color",
    "border-inline-end-style",
    "border-inline-end-width",
    "border-inline-start",
    "border-inline-start-color",
    "border-inline-start-style",
    "border-inline-start-width",
    "border-inline-style",
    "border-inline-width",
    "border-left",
    "border-left-color",
    "border-left-style",
    "border-left-width",
    "border-radius",
    "border-right",
    "border-right-color",
    "border-right-style",
    "border-right-width",
    "border-spacing",
    "border-style",
    "border-top",
    "border-top-color",
    "border-top-left-radius",
    "border-top-right-radius",
    "border-top-style",
    "border-top-width",
    "border-width",
    "bottom",
    "box-decoration-break",
    "box-shadow",
    "box-sizing",
    "break-after",
    "break-before",
    "break-inside",
    "caption-side",
    "caret-color",
    "clear",
    "clip",
    "clip-path",
    "clip-rule",
    "color",
    "column-count",
    "column-fill",
    "column-gap",
    "column-rule",
    "column-rule-color",
    "column-rule-style",
    "column-rule-width",
    "column-span",
    "column-width",
    "columns",
    "contain",
    "content",
    "content-visibility",
    "counter-increment",
    "counter-reset",
    "cue",
    "cue-after",
    "cue-before",
    "cursor",
    "direction",
    "display",
    "empty-cells",
    "filter",
    "flex",
    "flex-basis",
    "flex-direction",
    "flex-flow",
    "flex-grow",
    "flex-shrink",
    "flex-wrap",
    "float",
    "flow",
    "font",
    "font-display",
    "font-family",
    "font-feature-settings",
    "font-kerning",
    "font-language-override",
    "font-size",
    "font-size-adjust",
    "font-smoothing",
    "font-stretch",
    "font-style",
    "font-synthesis",
    "font-variant",
    "font-variant-caps",
    "font-variant-east-asian",
    "font-variant-ligatures",
    "font-variant-numeric",
    "font-variant-position",
    "font-variation-settings",
    "font-weight",
    "gap",
    "glyph-orientation-vertical",
    "grid",
    "grid-area",
    "grid-auto-columns",
    "grid-auto-flow",
    "grid-auto-rows",
    "grid-column",
    "grid-column-end",
    "grid-column-start",
    "grid-gap",
    "grid-row",
    "grid-row-end",
    "grid-row-start",
    "grid-template",
    "grid-template-areas",
    "grid-template-columns",
    "grid-template-rows",
    "hanging-punctuation",
    "height",
    "hyphens",
    "icon",
    "image-orientation",
    "image-rendering",
    "image-resolution",
    "ime-mode",
    "inline-size",
    "isolation",
    "justify-content",
    "left",
    "letter-spacing",
    "line-break",
    "line-height",
    "list-style",
    "list-style-image",
    "list-style-position",
    "list-style-type",
    "margin",
    "margin-block",
    "margin-block-end",
    "margin-block-start",
    "margin-bottom",
    "margin-inline",
    "margin-inline-end",
    "margin-inline-start",
    "margin-left",
    "margin-right",
    "margin-top",
    "marks",
    "mask",
    "mask-border",
    "mask-border-mode",
    "mask-border-outset",
    "mask-border-repeat",
    "mask-border-slice",
    "mask-border-source",
    "mask-border-width",
    "mask-clip",
    "mask-composite",
    "mask-image",
    "mask-mode",
    "mask-origin",
    "mask-position",
    "mask-repeat",
    "mask-size",
    "mask-type",
    "max-block-size",
    "max-height",
    "max-inline-size",
    "max-width",
    "min-block-size",
    "min-height",
    "min-inline-size",
    "min-width",
    "mix-blend-mode",
    "nav-down",
    "nav-index",
    "nav-left",
    "nav-right",
    "nav-up",
    "none",
    "normal",
    "object-fit",
    "object-position",
    "opacity",
    "order",
    "orphans",
    "outline",
    "outline-color",
    "outline-offset",
    "outline-style",
    "outline-width",
    "overflow",
    "overflow-wrap",
    "overflow-x",
    "overflow-y",
    "padding",
    "padding-block",
    "padding-block-end",
    "padding-block-start",
    "padding-bottom",
    "padding-inline",
    "padding-inline-end",
    "padding-inline-start",
    "padding-left",
    "padding-right",
    "padding-top",
    "page-break-after",
    "page-break-before",
    "page-break-inside",
    "pause",
    "pause-after",
    "pause-before",
    "perspective",
    "perspective-origin",
    "pointer-events",
    "position",
    "quotes",
    "resize",
    "rest",
    "rest-after",
    "rest-before",
    "right",
    "row-gap",
    "scroll-margin",
    "scroll-margin-block",
    "scroll-margin-block-end",
    "scroll-margin-block-start",
    "scroll-margin-bottom",
    "scroll-margin-inline",
    "scroll-margin-inline-end",
    "scroll-margin-inline-start",
    "scroll-margin-left",
    "scroll-margin-right",
    "scroll-margin-top",
    "scroll-padding",
    "scroll-padding-block",
    "scroll-padding-block-end",
    "scroll-padding-block-start",
    "scroll-padding-bottom",
    "scroll-padding-inline",
    "scroll-padding-inline-end",
    "scroll-padding-inline-start",
    "scroll-padding-left",
    "scroll-padding-right",
    "scroll-padding-top",
    "scroll-snap-align",
    "scroll-snap-stop",
    "scroll-snap-type",
    "scrollbar-color",
    "scrollbar-gutter",
    "scrollbar-width",
    "shape-image-threshold",
    "shape-margin",
    "shape-outside",
    "speak",
    "speak-as",
    "src",
    "tab-size",
    "table-layout",
    "text-align",
    "text-align-all",
    "text-align-last",
    "text-combine-upright",
    "text-decoration",
    "text-decoration-color",
    "text-decoration-line",
    "text-decoration-style",
    "text-emphasis",
    "text-emphasis-color",
    "text-emphasis-position",
    "text-emphasis-style",
    "text-indent",
    "text-justify",
    "text-orientation",
    "text-overflow",
    "text-rendering",
    "text-shadow",
    "text-transform",
    "text-underline-position",
    "top",
    "transform",
    "transform-box",
    "transform-origin",
    "transform-style",
    "transition",
    "transition-delay",
    "transition-duration",
    "transition-property",
    "transition-timing-function",
    "unicode-bidi",
    "vertical-align",
    "visibility",
    "voice-balance",
    "voice-duration",
    "voice-family",
    "voice-pitch",
    "voice-range",
    "voice-rate",
    "voice-stress",
    "voice-volume",
    "white-space",
    "widows",
    "width",
    "will-change",
    "word-break",
    "word-spacing",
    "word-wrap",
    "writing-mode",
    "z-index"
].reverse();
/*
Language: SCSS
Description: Scss is an extension of the syntax of CSS.
Author: Kurt Emch <kurt@kurtemch.com>
Website: https://sass-lang.com
Category: common, css, web
*/ /** @type LanguageFn */ function scss(hljs) {
    const modes = scss_MODES(hljs);
    const PSEUDO_ELEMENTS$1 = scss_PSEUDO_ELEMENTS;
    const PSEUDO_CLASSES$1 = scss_PSEUDO_CLASSES;
    const AT_IDENTIFIER = "@[a-z-]+"; // @font-face
    const AT_MODIFIERS = "and or not only";
    const IDENT_RE = "[a-zA-Z-][a-zA-Z0-9_-]*";
    const VARIABLE = {
        className: "variable",
        begin: "(\\$" + IDENT_RE + ")\\b",
        relevance: 0
    };
    return {
        name: "SCSS",
        case_insensitive: true,
        illegal: "[=/|']",
        contains: [
            hljs.C_LINE_COMMENT_MODE,
            hljs.C_BLOCK_COMMENT_MODE,
            // to recognize keyframe 40% etc which are outside the scope of our
            // attribute value mode
            modes.CSS_NUMBER_MODE,
            {
                className: "selector-id",
                begin: "#[A-Za-z0-9_-]+",
                relevance: 0
            },
            {
                className: "selector-class",
                begin: "\\.[A-Za-z0-9_-]+",
                relevance: 0
            },
            modes.ATTRIBUTE_SELECTOR_MODE,
            {
                className: "selector-tag",
                begin: "\\b(" + scss_TAGS.join("|") + ")\\b",
                // was there, before, but why?
                relevance: 0
            },
            {
                className: "selector-pseudo",
                begin: ":(" + PSEUDO_CLASSES$1.join("|") + ")"
            },
            {
                className: "selector-pseudo",
                begin: ":(:)?(" + PSEUDO_ELEMENTS$1.join("|") + ")"
            },
            VARIABLE,
            {
                begin: /\(/,
                end: /\)/,
                contains: [
                    modes.CSS_NUMBER_MODE
                ]
            },
            modes.CSS_VARIABLE,
            {
                className: "attribute",
                begin: "\\b(" + scss_ATTRIBUTES.join("|") + ")\\b"
            },
            {
                begin: "\\b(whitespace|wait|w-resize|visible|vertical-text|vertical-ideographic|uppercase|upper-roman|upper-alpha|underline|transparent|top|thin|thick|text|text-top|text-bottom|tb-rl|table-header-group|table-footer-group|sw-resize|super|strict|static|square|solid|small-caps|separate|se-resize|scroll|s-resize|rtl|row-resize|ridge|right|repeat|repeat-y|repeat-x|relative|progress|pointer|overline|outside|outset|oblique|nowrap|not-allowed|normal|none|nw-resize|no-repeat|no-drop|newspaper|ne-resize|n-resize|move|middle|medium|ltr|lr-tb|lowercase|lower-roman|lower-alpha|loose|list-item|line|line-through|line-edge|lighter|left|keep-all|justify|italic|inter-word|inter-ideograph|inside|inset|inline|inline-block|inherit|inactive|ideograph-space|ideograph-parenthesis|ideograph-numeric|ideograph-alpha|horizontal|hidden|help|hand|groove|fixed|ellipsis|e-resize|double|dotted|distribute|distribute-space|distribute-letter|distribute-all-lines|disc|disabled|default|decimal|dashed|crosshair|collapse|col-resize|circle|char|center|capitalize|break-word|break-all|bottom|both|bolder|bold|block|bidi-override|below|baseline|auto|always|all-scroll|absolute|table|table-cell)\\b"
            },
            {
                begin: /:/,
                end: /[;}{]/,
                relevance: 0,
                contains: [
                    modes.BLOCK_COMMENT,
                    VARIABLE,
                    modes.HEXCOLOR,
                    modes.CSS_NUMBER_MODE,
                    hljs.QUOTE_STRING_MODE,
                    hljs.APOS_STRING_MODE,
                    modes.IMPORTANT,
                    modes.FUNCTION_DISPATCH
                ]
            },
            // matching these here allows us to treat them more like regular CSS
            // rules so everything between the {} gets regular rule highlighting,
            // which is what we want for page and font-face
            {
                begin: "@(page|font-face)",
                keywords: {
                    $pattern: AT_IDENTIFIER,
                    keyword: "@page @font-face"
                }
            },
            {
                begin: "@",
                end: "[{;]",
                returnBegin: true,
                keywords: {
                    $pattern: /[a-z-]+/,
                    keyword: AT_MODIFIERS,
                    attribute: scss_MEDIA_FEATURES.join(" ")
                },
                contains: [
                    {
                        begin: AT_IDENTIFIER,
                        className: "keyword"
                    },
                    {
                        begin: /[a-z-]+(?=:)/,
                        className: "attribute"
                    },
                    VARIABLE,
                    hljs.QUOTE_STRING_MODE,
                    hljs.APOS_STRING_MODE,
                    modes.HEXCOLOR,
                    modes.CSS_NUMBER_MODE
                ]
            },
            modes.FUNCTION_DISPATCH
        ]
    };
}


;// CONCATENATED MODULE: ./node_modules/highlight.js/es/languages/shell.js
/*
Language: Shell Session
Requires: bash.js
Author: TSUYUSATO Kitsune <make.just.on@gmail.com>
Category: common
Audit: 2020
*/ /** @type LanguageFn */ function shell(hljs) {
    return {
        name: "Shell Session",
        aliases: [
            "console",
            "shellsession"
        ],
        contains: [
            {
                className: "meta.prompt",
                // We cannot add \s (spaces) in the regular expression otherwise it will be too broad and produce unexpected result.
                // For instance, in the following example, it would match "echo /path/to/home >" as a prompt:
                // echo /path/to/home > t.exe
                begin: /^\s{0,3}[/~\w\d[\]()@-]*[>%$#][ ]?/,
                starts: {
                    end: /[^\\](?=\s*$)/,
                    subLanguage: "bash"
                }
            }
        ]
    };
}


;// CONCATENATED MODULE: ./node_modules/highlight.js/es/languages/sql.js
/*
 Language: SQL
 Website: https://en.wikipedia.org/wiki/SQL
 Category: common, database
 */ /*

Goals:

SQL is intended to highlight basic/common SQL keywords and expressions

- If pretty much every single SQL server includes supports, then it's a canidate.
- It is NOT intended to include tons of vendor specific keywords (Oracle, MySQL,
  PostgreSQL) although the list of data types is purposely a bit more expansive.
- For more specific SQL grammars please see:
  - PostgreSQL and PL/pgSQL - core
  - T-SQL - https://github.com/highlightjs/highlightjs-tsql
  - sql_more (core)

 */ function sql(hljs) {
    const regex = hljs.regex;
    const COMMENT_MODE = hljs.COMMENT("--", "$");
    const STRING = {
        className: "string",
        variants: [
            {
                begin: /'/,
                end: /'/,
                contains: [
                    {
                        begin: /''/
                    }
                ]
            }
        ]
    };
    const QUOTED_IDENTIFIER = {
        begin: /"/,
        end: /"/,
        contains: [
            {
                begin: /""/
            }
        ]
    };
    const LITERALS = [
        "true",
        "false",
        // Not sure it's correct to call NULL literal, and clauses like IS [NOT] NULL look strange that way.
        // "null",
        "unknown"
    ];
    const MULTI_WORD_TYPES = [
        "double precision",
        "large object",
        "with timezone",
        "without timezone"
    ];
    const TYPES = [
        "bigint",
        "binary",
        "blob",
        "boolean",
        "char",
        "character",
        "clob",
        "date",
        "dec",
        "decfloat",
        "decimal",
        "float",
        "int",
        "integer",
        "interval",
        "nchar",
        "nclob",
        "national",
        "numeric",
        "real",
        "row",
        "smallint",
        "time",
        "timestamp",
        "varchar",
        "varying",
        "varbinary"
    ];
    const NON_RESERVED_WORDS = [
        "add",
        "asc",
        "collation",
        "desc",
        "final",
        "first",
        "last",
        "view"
    ];
    // https://jakewheat.github.io/sql-overview/sql-2016-foundation-grammar.html#reserved-word
    const RESERVED_WORDS = [
        "abs",
        "acos",
        "all",
        "allocate",
        "alter",
        "and",
        "any",
        "are",
        "array",
        "array_agg",
        "array_max_cardinality",
        "as",
        "asensitive",
        "asin",
        "asymmetric",
        "at",
        "atan",
        "atomic",
        "authorization",
        "avg",
        "begin",
        "begin_frame",
        "begin_partition",
        "between",
        "bigint",
        "binary",
        "blob",
        "boolean",
        "both",
        "by",
        "call",
        "called",
        "cardinality",
        "cascaded",
        "case",
        "cast",
        "ceil",
        "ceiling",
        "char",
        "char_length",
        "character",
        "character_length",
        "check",
        "classifier",
        "clob",
        "close",
        "coalesce",
        "collate",
        "collect",
        "column",
        "commit",
        "condition",
        "connect",
        "constraint",
        "contains",
        "convert",
        "copy",
        "corr",
        "corresponding",
        "cos",
        "cosh",
        "count",
        "covar_pop",
        "covar_samp",
        "create",
        "cross",
        "cube",
        "cume_dist",
        "current",
        "current_catalog",
        "current_date",
        "current_default_transform_group",
        "current_path",
        "current_role",
        "current_row",
        "current_schema",
        "current_time",
        "current_timestamp",
        "current_path",
        "current_role",
        "current_transform_group_for_type",
        "current_user",
        "cursor",
        "cycle",
        "date",
        "day",
        "deallocate",
        "dec",
        "decimal",
        "decfloat",
        "declare",
        "default",
        "define",
        "delete",
        "dense_rank",
        "deref",
        "describe",
        "deterministic",
        "disconnect",
        "distinct",
        "double",
        "drop",
        "dynamic",
        "each",
        "element",
        "else",
        "empty",
        "end",
        "end_frame",
        "end_partition",
        "end-exec",
        "equals",
        "escape",
        "every",
        "except",
        "exec",
        "execute",
        "exists",
        "exp",
        "external",
        "extract",
        "false",
        "fetch",
        "filter",
        "first_value",
        "float",
        "floor",
        "for",
        "foreign",
        "frame_row",
        "free",
        "from",
        "full",
        "function",
        "fusion",
        "get",
        "global",
        "grant",
        "group",
        "grouping",
        "groups",
        "having",
        "hold",
        "hour",
        "identity",
        "in",
        "indicator",
        "initial",
        "inner",
        "inout",
        "insensitive",
        "insert",
        "int",
        "integer",
        "intersect",
        "intersection",
        "interval",
        "into",
        "is",
        "join",
        "json_array",
        "json_arrayagg",
        "json_exists",
        "json_object",
        "json_objectagg",
        "json_query",
        "json_table",
        "json_table_primitive",
        "json_value",
        "lag",
        "language",
        "large",
        "last_value",
        "lateral",
        "lead",
        "leading",
        "left",
        "like",
        "like_regex",
        "listagg",
        "ln",
        "local",
        "localtime",
        "localtimestamp",
        "log",
        "log10",
        "lower",
        "match",
        "match_number",
        "match_recognize",
        "matches",
        "max",
        "member",
        "merge",
        "method",
        "min",
        "minute",
        "mod",
        "modifies",
        "module",
        "month",
        "multiset",
        "national",
        "natural",
        "nchar",
        "nclob",
        "new",
        "no",
        "none",
        "normalize",
        "not",
        "nth_value",
        "ntile",
        "null",
        "nullif",
        "numeric",
        "octet_length",
        "occurrences_regex",
        "of",
        "offset",
        "old",
        "omit",
        "on",
        "one",
        "only",
        "open",
        "or",
        "order",
        "out",
        "outer",
        "over",
        "overlaps",
        "overlay",
        "parameter",
        "partition",
        "pattern",
        "per",
        "percent",
        "percent_rank",
        "percentile_cont",
        "percentile_disc",
        "period",
        "portion",
        "position",
        "position_regex",
        "power",
        "precedes",
        "precision",
        "prepare",
        "primary",
        "procedure",
        "ptf",
        "range",
        "rank",
        "reads",
        "real",
        "recursive",
        "ref",
        "references",
        "referencing",
        "regr_avgx",
        "regr_avgy",
        "regr_count",
        "regr_intercept",
        "regr_r2",
        "regr_slope",
        "regr_sxx",
        "regr_sxy",
        "regr_syy",
        "release",
        "result",
        "return",
        "returns",
        "revoke",
        "right",
        "rollback",
        "rollup",
        "row",
        "row_number",
        "rows",
        "running",
        "savepoint",
        "scope",
        "scroll",
        "search",
        "second",
        "seek",
        "select",
        "sensitive",
        "session_user",
        "set",
        "show",
        "similar",
        "sin",
        "sinh",
        "skip",
        "smallint",
        "some",
        "specific",
        "specifictype",
        "sql",
        "sqlexception",
        "sqlstate",
        "sqlwarning",
        "sqrt",
        "start",
        "static",
        "stddev_pop",
        "stddev_samp",
        "submultiset",
        "subset",
        "substring",
        "substring_regex",
        "succeeds",
        "sum",
        "symmetric",
        "system",
        "system_time",
        "system_user",
        "table",
        "tablesample",
        "tan",
        "tanh",
        "then",
        "time",
        "timestamp",
        "timezone_hour",
        "timezone_minute",
        "to",
        "trailing",
        "translate",
        "translate_regex",
        "translation",
        "treat",
        "trigger",
        "trim",
        "trim_array",
        "true",
        "truncate",
        "uescape",
        "union",
        "unique",
        "unknown",
        "unnest",
        "update",
        "upper",
        "user",
        "using",
        "value",
        "values",
        "value_of",
        "var_pop",
        "var_samp",
        "varbinary",
        "varchar",
        "varying",
        "versioning",
        "when",
        "whenever",
        "where",
        "width_bucket",
        "window",
        "with",
        "within",
        "without",
        "year"
    ];
    // these are reserved words we have identified to be functions
    // and should only be highlighted in a dispatch-like context
    // ie, array_agg(...), etc.
    const RESERVED_FUNCTIONS = [
        "abs",
        "acos",
        "array_agg",
        "asin",
        "atan",
        "avg",
        "cast",
        "ceil",
        "ceiling",
        "coalesce",
        "corr",
        "cos",
        "cosh",
        "count",
        "covar_pop",
        "covar_samp",
        "cume_dist",
        "dense_rank",
        "deref",
        "element",
        "exp",
        "extract",
        "first_value",
        "floor",
        "json_array",
        "json_arrayagg",
        "json_exists",
        "json_object",
        "json_objectagg",
        "json_query",
        "json_table",
        "json_table_primitive",
        "json_value",
        "lag",
        "last_value",
        "lead",
        "listagg",
        "ln",
        "log",
        "log10",
        "lower",
        "max",
        "min",
        "mod",
        "nth_value",
        "ntile",
        "nullif",
        "percent_rank",
        "percentile_cont",
        "percentile_disc",
        "position",
        "position_regex",
        "power",
        "rank",
        "regr_avgx",
        "regr_avgy",
        "regr_count",
        "regr_intercept",
        "regr_r2",
        "regr_slope",
        "regr_sxx",
        "regr_sxy",
        "regr_syy",
        "row_number",
        "sin",
        "sinh",
        "sqrt",
        "stddev_pop",
        "stddev_samp",
        "substring",
        "substring_regex",
        "sum",
        "tan",
        "tanh",
        "translate",
        "translate_regex",
        "treat",
        "trim",
        "trim_array",
        "unnest",
        "upper",
        "value_of",
        "var_pop",
        "var_samp",
        "width_bucket"
    ];
    // these functions can
    const POSSIBLE_WITHOUT_PARENS = [
        "current_catalog",
        "current_date",
        "current_default_transform_group",
        "current_path",
        "current_role",
        "current_schema",
        "current_transform_group_for_type",
        "current_user",
        "session_user",
        "system_time",
        "system_user",
        "current_time",
        "localtime",
        "current_timestamp",
        "localtimestamp"
    ];
    // those exist to boost relevance making these very
    // "SQL like" keyword combos worth +1 extra relevance
    const COMBOS = [
        "create table",
        "insert into",
        "primary key",
        "foreign key",
        "not null",
        "alter table",
        "add constraint",
        "grouping sets",
        "on overflow",
        "character set",
        "respect nulls",
        "ignore nulls",
        "nulls first",
        "nulls last",
        "depth first",
        "breadth first"
    ];
    const FUNCTIONS = RESERVED_FUNCTIONS;
    const KEYWORDS = [
        ...RESERVED_WORDS,
        ...NON_RESERVED_WORDS
    ].filter((keyword)=>{
        return !RESERVED_FUNCTIONS.includes(keyword);
    });
    const VARIABLE = {
        className: "variable",
        begin: /@[a-z0-9][a-z0-9_]*/
    };
    const OPERATOR = {
        className: "operator",
        begin: /[-+*/=%^~]|&&?|\|\|?|!=?|<(?:=>?|<|>)?|>[>=]?/,
        relevance: 0
    };
    const FUNCTION_CALL = {
        begin: regex.concat(/\b/, regex.either(...FUNCTIONS), /\s*\(/),
        relevance: 0,
        keywords: {
            built_in: FUNCTIONS
        }
    };
    // keywords with less than 3 letters are reduced in relevancy
    function reduceRelevancy(list, { exceptions, when } = {}) {
        const qualifyFn = when;
        exceptions = exceptions || [];
        return list.map((item)=>{
            if (item.match(/\|\d+$/) || exceptions.includes(item)) {
                return item;
            } else if (qualifyFn(item)) {
                return `${item}|0`;
            } else {
                return item;
            }
        });
    }
    return {
        name: "SQL",
        case_insensitive: true,
        // does not include {} or HTML tags `</`
        illegal: /[{}]|<\//,
        keywords: {
            $pattern: /\b[\w\.]+/,
            keyword: reduceRelevancy(KEYWORDS, {
                when: (x)=>x.length < 3
            }),
            literal: LITERALS,
            type: TYPES,
            built_in: POSSIBLE_WITHOUT_PARENS
        },
        contains: [
            {
                begin: regex.either(...COMBOS),
                relevance: 0,
                keywords: {
                    $pattern: /[\w\.]+/,
                    keyword: KEYWORDS.concat(COMBOS),
                    literal: LITERALS,
                    type: TYPES
                }
            },
            {
                className: "type",
                begin: regex.either(...MULTI_WORD_TYPES)
            },
            FUNCTION_CALL,
            VARIABLE,
            STRING,
            QUOTED_IDENTIFIER,
            hljs.C_NUMBER_MODE,
            hljs.C_BLOCK_COMMENT_MODE,
            COMMENT_MODE,
            OPERATOR
        ]
    };
}


;// CONCATENATED MODULE: ./node_modules/highlight.js/es/languages/swift.js
/**
 * @param {string} value
 * @returns {RegExp}
 * */ /**
 * @param {RegExp | string } re
 * @returns {string}
 */ function source(re) {
    if (!re) return null;
    if (typeof re === "string") return re;
    return re.source;
}
/**
 * @param {RegExp | string } re
 * @returns {string}
 */ function lookahead(re) {
    return concat("(?=", re, ")");
}
/**
 * @param {...(RegExp | string) } args
 * @returns {string}
 */ function concat(...args) {
    const joined = args.map((x)=>source(x)).join("");
    return joined;
}
/**
 * @param { Array<string | RegExp | Object> } args
 * @returns {object}
 */ function stripOptionsFromArgs(args) {
    const opts = args[args.length - 1];
    if (typeof opts === "object" && opts.constructor === Object) {
        args.splice(args.length - 1, 1);
        return opts;
    } else {
        return {};
    }
}
/** @typedef { {capture?: boolean} } RegexEitherOptions */ /**
 * Any of the passed expresssions may match
 *
 * Creates a huge this | this | that | that match
 * @param {(RegExp | string)[] | [...(RegExp | string)[], RegexEitherOptions]} args
 * @returns {string}
 */ function either(...args) {
    /** @type { object & {capture?: boolean} }  */ const opts = stripOptionsFromArgs(args);
    const joined = "(" + (opts.capture ? "" : "?:") + args.map((x)=>source(x)).join("|") + ")";
    return joined;
}
const keywordWrapper = (keyword)=>concat(/\b/, keyword, /\w$/.test(keyword) ? /\b/ : /\B/);
// Keywords that require a leading dot.
const dotKeywords = [
    "Protocol",
    "Type" // contextual
].map(keywordWrapper);
// Keywords that may have a leading dot.
const optionalDotKeywords = [
    "init",
    "self"
].map(keywordWrapper);
// should register as keyword, not type
const keywordTypes = [
    "Any",
    "Self"
];
// Regular keywords and literals.
const keywords = [
    // strings below will be fed into the regular `keywords` engine while regex
    // will result in additional modes being created to scan for those keywords to
    // avoid conflicts with other rules
    "actor",
    "any",
    "associatedtype",
    "async",
    "await",
    /as\?/,
    /as!/,
    "as",
    "break",
    "case",
    "catch",
    "class",
    "continue",
    "convenience",
    "default",
    "defer",
    "deinit",
    "didSet",
    "distributed",
    "do",
    "dynamic",
    "else",
    "enum",
    "extension",
    "fallthrough",
    /fileprivate\(set\)/,
    "fileprivate",
    "final",
    "for",
    "func",
    "get",
    "guard",
    "if",
    "import",
    "indirect",
    "infix",
    /init\?/,
    /init!/,
    "inout",
    /internal\(set\)/,
    "internal",
    "in",
    "is",
    "isolated",
    "nonisolated",
    "lazy",
    "let",
    "mutating",
    "nonmutating",
    /open\(set\)/,
    "open",
    "operator",
    "optional",
    "override",
    "postfix",
    "precedencegroup",
    "prefix",
    /private\(set\)/,
    "private",
    "protocol",
    /public\(set\)/,
    "public",
    "repeat",
    "required",
    "rethrows",
    "return",
    "set",
    "some",
    "static",
    "struct",
    "subscript",
    "super",
    "switch",
    "throws",
    "throw",
    /try\?/,
    /try!/,
    "try",
    "typealias",
    /unowned\(safe\)/,
    /unowned\(unsafe\)/,
    "unowned",
    "var",
    "weak",
    "where",
    "while",
    "willSet" // contextual
];
// NOTE: Contextual keywords are reserved only in specific contexts.
// Ideally, these should be matched using modes to avoid false positives.
// Literals.
const literals = [
    "false",
    "nil",
    "true"
];
// Keywords used in precedence groups.
const precedencegroupKeywords = [
    "assignment",
    "associativity",
    "higherThan",
    "left",
    "lowerThan",
    "none",
    "right"
];
// Keywords that start with a number sign (#).
// #(un)available is handled separately.
const numberSignKeywords = [
    "#colorLiteral",
    "#column",
    "#dsohandle",
    "#else",
    "#elseif",
    "#endif",
    "#error",
    "#file",
    "#fileID",
    "#fileLiteral",
    "#filePath",
    "#function",
    "#if",
    "#imageLiteral",
    "#keyPath",
    "#line",
    "#selector",
    "#sourceLocation",
    "#warn_unqualified_access",
    "#warning"
];
// Global functions in the Standard Library.
const builtIns = [
    "abs",
    "all",
    "any",
    "assert",
    "assertionFailure",
    "debugPrint",
    "dump",
    "fatalError",
    "getVaList",
    "isKnownUniquelyReferenced",
    "max",
    "min",
    "numericCast",
    "pointwiseMax",
    "pointwiseMin",
    "precondition",
    "preconditionFailure",
    "print",
    "readLine",
    "repeatElement",
    "sequence",
    "stride",
    "swap",
    "swift_unboxFromSwiftValueWithType",
    "transcode",
    "type",
    "unsafeBitCast",
    "unsafeDowncast",
    "withExtendedLifetime",
    "withUnsafeMutablePointer",
    "withUnsafePointer",
    "withVaList",
    "withoutActuallyEscaping",
    "zip"
];
// Valid first characters for operators.
const operatorHead = either(/[/=\-+!*%<>&|^~?]/, /[\u00A1-\u00A7]/, /[\u00A9\u00AB]/, /[\u00AC\u00AE]/, /[\u00B0\u00B1]/, /[\u00B6\u00BB\u00BF\u00D7\u00F7]/, /[\u2016-\u2017]/, /[\u2020-\u2027]/, /[\u2030-\u203E]/, /[\u2041-\u2053]/, /[\u2055-\u205E]/, /[\u2190-\u23FF]/, /[\u2500-\u2775]/, /[\u2794-\u2BFF]/, /[\u2E00-\u2E7F]/, /[\u3001-\u3003]/, /[\u3008-\u3020]/, /[\u3030]/);
// Valid characters for operators.
const operatorCharacter = either(operatorHead, /[\u0300-\u036F]/, /[\u1DC0-\u1DFF]/, /[\u20D0-\u20FF]/, /[\uFE00-\uFE0F]/, /[\uFE20-\uFE2F]/);
// Valid operator.
const operator = concat(operatorHead, operatorCharacter, "*");
// Valid first characters for identifiers.
const identifierHead = either(/[a-zA-Z_]/, /[\u00A8\u00AA\u00AD\u00AF\u00B2-\u00B5\u00B7-\u00BA]/, /[\u00BC-\u00BE\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u00FF]/, /[\u0100-\u02FF\u0370-\u167F\u1681-\u180D\u180F-\u1DBF]/, /[\u1E00-\u1FFF]/, /[\u200B-\u200D\u202A-\u202E\u203F-\u2040\u2054\u2060-\u206F]/, /[\u2070-\u20CF\u2100-\u218F\u2460-\u24FF\u2776-\u2793]/, /[\u2C00-\u2DFF\u2E80-\u2FFF]/, /[\u3004-\u3007\u3021-\u302F\u3031-\u303F\u3040-\uD7FF]/, /[\uF900-\uFD3D\uFD40-\uFDCF\uFDF0-\uFE1F\uFE30-\uFE44]/, /[\uFE47-\uFEFE\uFF00-\uFFFD]/ // Should be /[\uFE47-\uFFFD]/, but we have to exclude FEFF.
);
// Valid characters for identifiers.
const identifierCharacter = either(identifierHead, /\d/, /[\u0300-\u036F\u1DC0-\u1DFF\u20D0-\u20FF\uFE20-\uFE2F]/);
// Valid identifier.
const identifier = concat(identifierHead, identifierCharacter, "*");
// Valid type identifier.
const typeIdentifier = concat(/[A-Z]/, identifierCharacter, "*");
// Built-in attributes, which are highlighted as keywords.
// @available is handled separately.
const keywordAttributes = [
    "autoclosure",
    concat(/convention\(/, either("swift", "block", "c"), /\)/),
    "discardableResult",
    "dynamicCallable",
    "dynamicMemberLookup",
    "escaping",
    "frozen",
    "GKInspectable",
    "IBAction",
    "IBDesignable",
    "IBInspectable",
    "IBOutlet",
    "IBSegueAction",
    "inlinable",
    "main",
    "nonobjc",
    "NSApplicationMain",
    "NSCopying",
    "NSManaged",
    concat(/objc\(/, identifier, /\)/),
    "objc",
    "objcMembers",
    "propertyWrapper",
    "requires_stored_property_inits",
    "resultBuilder",
    "testable",
    "UIApplicationMain",
    "unknown",
    "usableFromInline"
];
// Contextual keywords used in @available and #(un)available.
const availabilityKeywords = [
    "iOS",
    "iOSApplicationExtension",
    "macOS",
    "macOSApplicationExtension",
    "macCatalyst",
    "macCatalystApplicationExtension",
    "watchOS",
    "watchOSApplicationExtension",
    "tvOS",
    "tvOSApplicationExtension",
    "swift"
];
/*
Language: Swift
Description: Swift is a general-purpose programming language built using a modern approach to safety, performance, and software design patterns.
Author: Steven Van Impe <steven.vanimpe@icloud.com>
Contributors: Chris Eidhof <chris@eidhof.nl>, Nate Cook <natecook@gmail.com>, Alexander Lichter <manniL@gmx.net>, Richard Gibson <gibson042@github>
Website: https://swift.org
Category: common, system
*/ /** @type LanguageFn */ function swift(hljs) {
    const WHITESPACE = {
        match: /\s+/,
        relevance: 0
    };
    // https://docs.swift.org/swift-book/ReferenceManual/LexicalStructure.html#ID411
    const BLOCK_COMMENT = hljs.COMMENT("/\\*", "\\*/", {
        contains: [
            "self"
        ]
    });
    const COMMENTS = [
        hljs.C_LINE_COMMENT_MODE,
        BLOCK_COMMENT
    ];
    // https://docs.swift.org/swift-book/ReferenceManual/LexicalStructure.html#ID413
    // https://docs.swift.org/swift-book/ReferenceManual/zzSummaryOfTheGrammar.html
    const DOT_KEYWORD = {
        match: [
            /\./,
            either(...dotKeywords, ...optionalDotKeywords)
        ],
        className: {
            2: "keyword"
        }
    };
    const KEYWORD_GUARD = {
        // Consume .keyword to prevent highlighting properties and methods as keywords.
        match: concat(/\./, either(...keywords)),
        relevance: 0
    };
    const PLAIN_KEYWORDS = keywords.filter((kw)=>typeof kw === "string").concat([
        "_|0"
    ]); // seems common, so 0 relevance
    const REGEX_KEYWORDS = keywords.filter((kw)=>typeof kw !== "string") // find regex
    .concat(keywordTypes).map(keywordWrapper);
    const KEYWORD = {
        variants: [
            {
                className: "keyword",
                match: either(...REGEX_KEYWORDS, ...optionalDotKeywords)
            }
        ]
    };
    // find all the regular keywords
    const KEYWORDS = {
        $pattern: either(/\b\w+/, /#\w+/ // number keywords
        ),
        keyword: PLAIN_KEYWORDS.concat(numberSignKeywords),
        literal: literals
    };
    const KEYWORD_MODES = [
        DOT_KEYWORD,
        KEYWORD_GUARD,
        KEYWORD
    ];
    // https://github.com/apple/swift/tree/main/stdlib/public/core
    const BUILT_IN_GUARD = {
        // Consume .built_in to prevent highlighting properties and methods.
        match: concat(/\./, either(...builtIns)),
        relevance: 0
    };
    const BUILT_IN = {
        className: "built_in",
        match: concat(/\b/, either(...builtIns), /(?=\()/)
    };
    const BUILT_INS = [
        BUILT_IN_GUARD,
        BUILT_IN
    ];
    // https://docs.swift.org/swift-book/ReferenceManual/LexicalStructure.html#ID418
    const OPERATOR_GUARD = {
        // Prevent -> from being highlighting as an operator.
        match: /->/,
        relevance: 0
    };
    const OPERATOR = {
        className: "operator",
        relevance: 0,
        variants: [
            {
                match: operator
            },
            {
                // dot-operator: only operators that start with a dot are allowed to use dots as
                // characters (..., ...<, .*, etc). So there rule here is: a dot followed by one or more
                // characters that may also include dots.
                match: `\\.(\\.|${operatorCharacter})+`
            }
        ]
    };
    const OPERATORS = [
        OPERATOR_GUARD,
        OPERATOR
    ];
    // https://docs.swift.org/swift-book/ReferenceManual/LexicalStructure.html#grammar_numeric-literal
    // TODO: Update for leading `-` after lookbehind is supported everywhere
    const decimalDigits = "([0-9]_*)+";
    const hexDigits = "([0-9a-fA-F]_*)+";
    const NUMBER = {
        className: "number",
        relevance: 0,
        variants: [
            // decimal floating-point-literal (subsumes decimal-literal)
            {
                match: `\\b(${decimalDigits})(\\.(${decimalDigits}))?` + `([eE][+-]?(${decimalDigits}))?\\b`
            },
            // hexadecimal floating-point-literal (subsumes hexadecimal-literal)
            {
                match: `\\b0x(${hexDigits})(\\.(${hexDigits}))?` + `([pP][+-]?(${decimalDigits}))?\\b`
            },
            // octal-literal
            {
                match: /\b0o([0-7]_*)+\b/
            },
            // binary-literal
            {
                match: /\b0b([01]_*)+\b/
            }
        ]
    };
    // https://docs.swift.org/swift-book/ReferenceManual/LexicalStructure.html#grammar_string-literal
    const ESCAPED_CHARACTER = (rawDelimiter = "")=>({
            className: "subst",
            variants: [
                {
                    match: concat(/\\/, rawDelimiter, /[0\\tnr"']/)
                },
                {
                    match: concat(/\\/, rawDelimiter, /u\{[0-9a-fA-F]{1,8}\}/)
                }
            ]
        });
    const ESCAPED_NEWLINE = (rawDelimiter = "")=>({
            className: "subst",
            match: concat(/\\/, rawDelimiter, /[\t ]*(?:[\r\n]|\r\n)/)
        });
    const INTERPOLATION = (rawDelimiter = "")=>({
            className: "subst",
            label: "interpol",
            begin: concat(/\\/, rawDelimiter, /\(/),
            end: /\)/
        });
    const MULTILINE_STRING = (rawDelimiter = "")=>({
            begin: concat(rawDelimiter, /"""/),
            end: concat(/"""/, rawDelimiter),
            contains: [
                ESCAPED_CHARACTER(rawDelimiter),
                ESCAPED_NEWLINE(rawDelimiter),
                INTERPOLATION(rawDelimiter)
            ]
        });
    const SINGLE_LINE_STRING = (rawDelimiter = "")=>({
            begin: concat(rawDelimiter, /"/),
            end: concat(/"/, rawDelimiter),
            contains: [
                ESCAPED_CHARACTER(rawDelimiter),
                INTERPOLATION(rawDelimiter)
            ]
        });
    const STRING = {
        className: "string",
        variants: [
            MULTILINE_STRING(),
            MULTILINE_STRING("#"),
            MULTILINE_STRING("##"),
            MULTILINE_STRING("###"),
            SINGLE_LINE_STRING(),
            SINGLE_LINE_STRING("#"),
            SINGLE_LINE_STRING("##"),
            SINGLE_LINE_STRING("###")
        ]
    };
    // https://docs.swift.org/swift-book/ReferenceManual/LexicalStructure.html#ID412
    const QUOTED_IDENTIFIER = {
        match: concat(/`/, identifier, /`/)
    };
    const IMPLICIT_PARAMETER = {
        className: "variable",
        match: /\$\d+/
    };
    const PROPERTY_WRAPPER_PROJECTION = {
        className: "variable",
        match: `\\$${identifierCharacter}+`
    };
    const IDENTIFIERS = [
        QUOTED_IDENTIFIER,
        IMPLICIT_PARAMETER,
        PROPERTY_WRAPPER_PROJECTION
    ];
    // https://docs.swift.org/swift-book/ReferenceManual/Attributes.html
    const AVAILABLE_ATTRIBUTE = {
        match: /(@|#(un)?)available/,
        className: "keyword",
        starts: {
            contains: [
                {
                    begin: /\(/,
                    end: /\)/,
                    keywords: availabilityKeywords,
                    contains: [
                        ...OPERATORS,
                        NUMBER,
                        STRING
                    ]
                }
            ]
        }
    };
    const KEYWORD_ATTRIBUTE = {
        className: "keyword",
        match: concat(/@/, either(...keywordAttributes))
    };
    const USER_DEFINED_ATTRIBUTE = {
        className: "meta",
        match: concat(/@/, identifier)
    };
    const ATTRIBUTES = [
        AVAILABLE_ATTRIBUTE,
        KEYWORD_ATTRIBUTE,
        USER_DEFINED_ATTRIBUTE
    ];
    // https://docs.swift.org/swift-book/ReferenceManual/Types.html
    const TYPE = {
        match: lookahead(/\b[A-Z]/),
        relevance: 0,
        contains: [
            {
                className: "type",
                match: concat(/(AV|CA|CF|CG|CI|CL|CM|CN|CT|MK|MP|MTK|MTL|NS|SCN|SK|UI|WK|XC)/, identifierCharacter, "+")
            },
            {
                className: "type",
                match: typeIdentifier,
                relevance: 0
            },
            {
                match: /[?!]+/,
                relevance: 0
            },
            {
                match: /\.\.\./,
                relevance: 0
            },
            {
                match: concat(/\s+&\s+/, lookahead(typeIdentifier)),
                relevance: 0
            }
        ]
    };
    const GENERIC_ARGUMENTS = {
        begin: /</,
        end: />/,
        keywords: KEYWORDS,
        contains: [
            ...COMMENTS,
            ...KEYWORD_MODES,
            ...ATTRIBUTES,
            OPERATOR_GUARD,
            TYPE
        ]
    };
    TYPE.contains.push(GENERIC_ARGUMENTS);
    // https://docs.swift.org/swift-book/ReferenceManual/Expressions.html#ID552
    // Prevents element names from being highlighted as keywords.
    const TUPLE_ELEMENT_NAME = {
        match: concat(identifier, /\s*:/),
        keywords: "_|0",
        relevance: 0
    };
    // Matches tuples as well as the parameter list of a function type.
    const TUPLE = {
        begin: /\(/,
        end: /\)/,
        relevance: 0,
        keywords: KEYWORDS,
        contains: [
            "self",
            TUPLE_ELEMENT_NAME,
            ...COMMENTS,
            ...KEYWORD_MODES,
            ...BUILT_INS,
            ...OPERATORS,
            NUMBER,
            STRING,
            ...IDENTIFIERS,
            ...ATTRIBUTES,
            TYPE
        ]
    };
    const GENERIC_PARAMETERS = {
        begin: /</,
        end: />/,
        contains: [
            ...COMMENTS,
            TYPE
        ]
    };
    const FUNCTION_PARAMETER_NAME = {
        begin: either(lookahead(concat(identifier, /\s*:/)), lookahead(concat(identifier, /\s+/, identifier, /\s*:/))),
        end: /:/,
        relevance: 0,
        contains: [
            {
                className: "keyword",
                match: /\b_\b/
            },
            {
                className: "params",
                match: identifier
            }
        ]
    };
    const FUNCTION_PARAMETERS = {
        begin: /\(/,
        end: /\)/,
        keywords: KEYWORDS,
        contains: [
            FUNCTION_PARAMETER_NAME,
            ...COMMENTS,
            ...KEYWORD_MODES,
            ...OPERATORS,
            NUMBER,
            STRING,
            ...ATTRIBUTES,
            TYPE,
            TUPLE
        ],
        endsParent: true,
        illegal: /["']/
    };
    // https://docs.swift.org/swift-book/ReferenceManual/Declarations.html#ID362
    const FUNCTION = {
        match: [
            /func/,
            /\s+/,
            either(QUOTED_IDENTIFIER.match, identifier, operator)
        ],
        className: {
            1: "keyword",
            3: "title.function"
        },
        contains: [
            GENERIC_PARAMETERS,
            FUNCTION_PARAMETERS,
            WHITESPACE
        ],
        illegal: [
            /\[/,
            /%/
        ]
    };
    // https://docs.swift.org/swift-book/ReferenceManual/Declarations.html#ID375
    // https://docs.swift.org/swift-book/ReferenceManual/Declarations.html#ID379
    const INIT_SUBSCRIPT = {
        match: [
            /\b(?:subscript|init[?!]?)/,
            /\s*(?=[<(])/
        ],
        className: {
            1: "keyword"
        },
        contains: [
            GENERIC_PARAMETERS,
            FUNCTION_PARAMETERS,
            WHITESPACE
        ],
        illegal: /\[|%/
    };
    // https://docs.swift.org/swift-book/ReferenceManual/Declarations.html#ID380
    const OPERATOR_DECLARATION = {
        match: [
            /operator/,
            /\s+/,
            operator
        ],
        className: {
            1: "keyword",
            3: "title"
        }
    };
    // https://docs.swift.org/swift-book/ReferenceManual/Declarations.html#ID550
    const PRECEDENCEGROUP = {
        begin: [
            /precedencegroup/,
            /\s+/,
            typeIdentifier
        ],
        className: {
            1: "keyword",
            3: "title"
        },
        contains: [
            TYPE
        ],
        keywords: [
            ...precedencegroupKeywords,
            ...literals
        ],
        end: /}/
    };
    // Add supported submodes to string interpolation.
    for (const variant of STRING.variants){
        const interpolation = variant.contains.find((mode)=>mode.label === "interpol");
        // TODO: Interpolation can contain any expression, so there's room for improvement here.
        interpolation.keywords = KEYWORDS;
        const submodes = [
            ...KEYWORD_MODES,
            ...BUILT_INS,
            ...OPERATORS,
            NUMBER,
            STRING,
            ...IDENTIFIERS
        ];
        interpolation.contains = [
            ...submodes,
            {
                begin: /\(/,
                end: /\)/,
                contains: [
                    "self",
                    ...submodes
                ]
            }
        ];
    }
    return {
        name: "Swift",
        keywords: KEYWORDS,
        contains: [
            ...COMMENTS,
            FUNCTION,
            INIT_SUBSCRIPT,
            {
                beginKeywords: "struct protocol class extension enum actor",
                end: "\\{",
                excludeEnd: true,
                keywords: KEYWORDS,
                contains: [
                    hljs.inherit(hljs.TITLE_MODE, {
                        className: "title.class",
                        begin: /[A-Za-z$_][\u00C0-\u02B80-9A-Za-z$_]*/
                    }),
                    ...KEYWORD_MODES
                ]
            },
            OPERATOR_DECLARATION,
            PRECEDENCEGROUP,
            {
                beginKeywords: "import",
                end: /$/,
                contains: [
                    ...COMMENTS
                ],
                relevance: 0
            },
            ...KEYWORD_MODES,
            ...BUILT_INS,
            ...OPERATORS,
            NUMBER,
            STRING,
            ...IDENTIFIERS,
            ...ATTRIBUTES,
            TYPE,
            TUPLE
        ]
    };
}


;// CONCATENATED MODULE: ./node_modules/highlight.js/es/languages/typescript.js
const typescript_IDENT_RE = "[A-Za-z$_][0-9A-Za-z$_]*";
const typescript_KEYWORDS = [
    "as",
    "in",
    "of",
    "if",
    "for",
    "while",
    "finally",
    "var",
    "new",
    "function",
    "do",
    "return",
    "void",
    "else",
    "break",
    "catch",
    "instanceof",
    "with",
    "throw",
    "case",
    "default",
    "try",
    "switch",
    "continue",
    "typeof",
    "delete",
    "let",
    "yield",
    "const",
    "class",
    // JS handles these with a special rule
    // "get",
    // "set",
    "debugger",
    "async",
    "await",
    "static",
    "import",
    "from",
    "export",
    "extends"
];
const typescript_LITERALS = [
    "true",
    "false",
    "null",
    "undefined",
    "NaN",
    "Infinity"
];
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects
const typescript_TYPES = [
    // Fundamental objects
    "Object",
    "Function",
    "Boolean",
    "Symbol",
    // numbers and dates
    "Math",
    "Date",
    "Number",
    "BigInt",
    // text
    "String",
    "RegExp",
    // Indexed collections
    "Array",
    "Float32Array",
    "Float64Array",
    "Int8Array",
    "Uint8Array",
    "Uint8ClampedArray",
    "Int16Array",
    "Int32Array",
    "Uint16Array",
    "Uint32Array",
    "BigInt64Array",
    "BigUint64Array",
    // Keyed collections
    "Set",
    "Map",
    "WeakSet",
    "WeakMap",
    // Structured data
    "ArrayBuffer",
    "SharedArrayBuffer",
    "Atomics",
    "DataView",
    "JSON",
    // Control abstraction objects
    "Promise",
    "Generator",
    "GeneratorFunction",
    "AsyncFunction",
    // Reflection
    "Reflect",
    "Proxy",
    // Internationalization
    "Intl",
    // WebAssembly
    "WebAssembly"
];
const typescript_ERROR_TYPES = [
    "Error",
    "EvalError",
    "InternalError",
    "RangeError",
    "ReferenceError",
    "SyntaxError",
    "TypeError",
    "URIError"
];
const typescript_BUILT_IN_GLOBALS = [
    "setInterval",
    "setTimeout",
    "clearInterval",
    "clearTimeout",
    "require",
    "exports",
    "eval",
    "isFinite",
    "isNaN",
    "parseFloat",
    "parseInt",
    "decodeURI",
    "decodeURIComponent",
    "encodeURI",
    "encodeURIComponent",
    "escape",
    "unescape"
];
const typescript_BUILT_IN_VARIABLES = [
    "arguments",
    "this",
    "super",
    "console",
    "window",
    "document",
    "localStorage",
    "sessionStorage",
    "module",
    "global" // Node.js
];
const typescript_BUILT_INS = [].concat(typescript_BUILT_IN_GLOBALS, typescript_TYPES, typescript_ERROR_TYPES);
/*
Language: JavaScript
Description: JavaScript (JS) is a lightweight, interpreted, or just-in-time compiled programming language with first-class functions.
Category: common, scripting, web
Website: https://developer.mozilla.org/en-US/docs/Web/JavaScript
*/ /** @type LanguageFn */ function typescript_javascript(hljs) {
    const regex = hljs.regex;
    /**
   * Takes a string like "<Booger" and checks to see
   * if we can find a matching "</Booger" later in the
   * content.
   * @param {RegExpMatchArray} match
   * @param {{after:number}} param1
   */ const hasClosingTag = (match, { after })=>{
        const tag = "</" + match[0].slice(1);
        const pos = match.input.indexOf(tag, after);
        return pos !== -1;
    };
    const IDENT_RE$1 = typescript_IDENT_RE;
    const FRAGMENT = {
        begin: "<>",
        end: "</>"
    };
    // to avoid some special cases inside isTrulyOpeningTag
    const XML_SELF_CLOSING = /<[A-Za-z0-9\\._:-]+\s*\/>/;
    const XML_TAG = {
        begin: /<[A-Za-z0-9\\._:-]+/,
        end: /\/[A-Za-z0-9\\._:-]+>|\/>/,
        /**
     * @param {RegExpMatchArray} match
     * @param {CallbackResponse} response
     */ isTrulyOpeningTag: (match, response)=>{
            const afterMatchIndex = match[0].length + match.index;
            const nextChar = match.input[afterMatchIndex];
            if (// HTML should not include another raw `<` inside a tag
            // nested type?
            // `<Array<Array<number>>`, etc.
            nextChar === "<" || // the , gives away that this is not HTML
            // `<T, A extends keyof T, V>`
            nextChar === ",") {
                response.ignoreMatch();
                return;
            }
            // `<something>`
            // Quite possibly a tag, lets look for a matching closing tag...
            if (nextChar === ">") {
                // if we cannot find a matching closing tag, then we
                // will ignore it
                if (!hasClosingTag(match, {
                    after: afterMatchIndex
                })) {
                    response.ignoreMatch();
                }
            }
            // `<blah />` (self-closing)
            // handled by simpleSelfClosing rule
            let m;
            const afterMatch = match.input.substring(afterMatchIndex);
            // some more template typing stuff
            //  <T = any>(key?: string) => Modify<
            if (m = afterMatch.match(/^\s*=/)) {
                response.ignoreMatch();
                return;
            }
            // `<From extends string>`
            // technically this could be HTML, but it smells like a type
            // NOTE: This is ugh, but added specifically for https://github.com/highlightjs/highlight.js/issues/3276
            if (m = afterMatch.match(/^\s+extends\s+/)) {
                if (m.index === 0) {
                    response.ignoreMatch();
                    // eslint-disable-next-line no-useless-return
                    return;
                }
            }
        }
    };
    const KEYWORDS$1 = {
        $pattern: typescript_IDENT_RE,
        keyword: typescript_KEYWORDS,
        literal: typescript_LITERALS,
        built_in: typescript_BUILT_INS,
        "variable.language": typescript_BUILT_IN_VARIABLES
    };
    // https://tc39.es/ecma262/#sec-literals-numeric-literals
    const decimalDigits = "[0-9](_?[0-9])*";
    const frac = `\\.(${decimalDigits})`;
    // DecimalIntegerLiteral, including Annex B NonOctalDecimalIntegerLiteral
    // https://tc39.es/ecma262/#sec-additional-syntax-numeric-literals
    const decimalInteger = `0|[1-9](_?[0-9])*|0[0-7]*[89][0-9]*`;
    const NUMBER = {
        className: "number",
        variants: [
            // DecimalLiteral
            {
                begin: `(\\b(${decimalInteger})((${frac})|\\.)?|(${frac}))` + `[eE][+-]?(${decimalDigits})\\b`
            },
            {
                begin: `\\b(${decimalInteger})\\b((${frac})\\b|\\.)?|(${frac})\\b`
            },
            // DecimalBigIntegerLiteral
            {
                begin: `\\b(0|[1-9](_?[0-9])*)n\\b`
            },
            // NonDecimalIntegerLiteral
            {
                begin: "\\b0[xX][0-9a-fA-F](_?[0-9a-fA-F])*n?\\b"
            },
            {
                begin: "\\b0[bB][0-1](_?[0-1])*n?\\b"
            },
            {
                begin: "\\b0[oO][0-7](_?[0-7])*n?\\b"
            },
            // LegacyOctalIntegerLiteral (does not include underscore separators)
            // https://tc39.es/ecma262/#sec-additional-syntax-numeric-literals
            {
                begin: "\\b0[0-7]+n?\\b"
            }
        ],
        relevance: 0
    };
    const SUBST = {
        className: "subst",
        begin: "\\$\\{",
        end: "\\}",
        keywords: KEYWORDS$1,
        contains: [] // defined later
    };
    const HTML_TEMPLATE = {
        begin: "html`",
        end: "",
        starts: {
            end: "`",
            returnEnd: false,
            contains: [
                hljs.BACKSLASH_ESCAPE,
                SUBST
            ],
            subLanguage: "xml"
        }
    };
    const CSS_TEMPLATE = {
        begin: "css`",
        end: "",
        starts: {
            end: "`",
            returnEnd: false,
            contains: [
                hljs.BACKSLASH_ESCAPE,
                SUBST
            ],
            subLanguage: "css"
        }
    };
    const GRAPHQL_TEMPLATE = {
        begin: "gql`",
        end: "",
        starts: {
            end: "`",
            returnEnd: false,
            contains: [
                hljs.BACKSLASH_ESCAPE,
                SUBST
            ],
            subLanguage: "graphql"
        }
    };
    const TEMPLATE_STRING = {
        className: "string",
        begin: "`",
        end: "`",
        contains: [
            hljs.BACKSLASH_ESCAPE,
            SUBST
        ]
    };
    const JSDOC_COMMENT = hljs.COMMENT(/\/\*\*(?!\/)/, "\\*/", {
        relevance: 0,
        contains: [
            {
                begin: "(?=@[A-Za-z]+)",
                relevance: 0,
                contains: [
                    {
                        className: "doctag",
                        begin: "@[A-Za-z]+"
                    },
                    {
                        className: "type",
                        begin: "\\{",
                        end: "\\}",
                        excludeEnd: true,
                        excludeBegin: true,
                        relevance: 0
                    },
                    {
                        className: "variable",
                        begin: IDENT_RE$1 + "(?=\\s*(-)|$)",
                        endsParent: true,
                        relevance: 0
                    },
                    // eat spaces (not newlines) so we can find
                    // types or variables
                    {
                        begin: /(?=[^\n])\s/,
                        relevance: 0
                    }
                ]
            }
        ]
    });
    const COMMENT = {
        className: "comment",
        variants: [
            JSDOC_COMMENT,
            hljs.C_BLOCK_COMMENT_MODE,
            hljs.C_LINE_COMMENT_MODE
        ]
    };
    const SUBST_INTERNALS = [
        hljs.APOS_STRING_MODE,
        hljs.QUOTE_STRING_MODE,
        HTML_TEMPLATE,
        CSS_TEMPLATE,
        GRAPHQL_TEMPLATE,
        TEMPLATE_STRING,
        // Skip numbers when they are part of a variable name
        {
            match: /\$\d+/
        },
        NUMBER
    ];
    SUBST.contains = SUBST_INTERNALS.concat({
        // we need to pair up {} inside our subst to prevent
        // it from ending too early by matching another }
        begin: /\{/,
        end: /\}/,
        keywords: KEYWORDS$1,
        contains: [
            "self"
        ].concat(SUBST_INTERNALS)
    });
    const SUBST_AND_COMMENTS = [].concat(COMMENT, SUBST.contains);
    const PARAMS_CONTAINS = SUBST_AND_COMMENTS.concat([
        // eat recursive parens in sub expressions
        {
            begin: /\(/,
            end: /\)/,
            keywords: KEYWORDS$1,
            contains: [
                "self"
            ].concat(SUBST_AND_COMMENTS)
        }
    ]);
    const PARAMS = {
        className: "params",
        begin: /\(/,
        end: /\)/,
        excludeBegin: true,
        excludeEnd: true,
        keywords: KEYWORDS$1,
        contains: PARAMS_CONTAINS
    };
    // ES6 classes
    const CLASS_OR_EXTENDS = {
        variants: [
            // class Car extends vehicle
            {
                match: [
                    /class/,
                    /\s+/,
                    IDENT_RE$1,
                    /\s+/,
                    /extends/,
                    /\s+/,
                    regex.concat(IDENT_RE$1, "(", regex.concat(/\./, IDENT_RE$1), ")*")
                ],
                scope: {
                    1: "keyword",
                    3: "title.class",
                    5: "keyword",
                    7: "title.class.inherited"
                }
            },
            // class Car
            {
                match: [
                    /class/,
                    /\s+/,
                    IDENT_RE$1
                ],
                scope: {
                    1: "keyword",
                    3: "title.class"
                }
            }
        ]
    };
    const CLASS_REFERENCE = {
        relevance: 0,
        match: regex.either(// Hard coded exceptions
        /\bJSON/, // Float32Array, OutT
        /\b[A-Z][a-z]+([A-Z][a-z]*|\d)*/, // CSSFactory, CSSFactoryT
        /\b[A-Z]{2,}([A-Z][a-z]+|\d)+([A-Z][a-z]*)*/, // FPs, FPsT
        /\b[A-Z]{2,}[a-z]+([A-Z][a-z]+|\d)*([A-Z][a-z]*)*/),
        className: "title.class",
        keywords: {
            _: [
                // se we still get relevance credit for JS library classes
                ...typescript_TYPES,
                ...typescript_ERROR_TYPES
            ]
        }
    };
    const USE_STRICT = {
        label: "use_strict",
        className: "meta",
        relevance: 10,
        begin: /^\s*['"]use (strict|asm)['"]/
    };
    const FUNCTION_DEFINITION = {
        variants: [
            {
                match: [
                    /function/,
                    /\s+/,
                    IDENT_RE$1,
                    /(?=\s*\()/
                ]
            },
            // anonymous function
            {
                match: [
                    /function/,
                    /\s*(?=\()/
                ]
            }
        ],
        className: {
            1: "keyword",
            3: "title.function"
        },
        label: "func.def",
        contains: [
            PARAMS
        ],
        illegal: /%/
    };
    const UPPER_CASE_CONSTANT = {
        relevance: 0,
        match: /\b[A-Z][A-Z_0-9]+\b/,
        className: "variable.constant"
    };
    function noneOf(list) {
        return regex.concat("(?!", list.join("|"), ")");
    }
    const FUNCTION_CALL = {
        match: regex.concat(/\b/, noneOf([
            ...typescript_BUILT_IN_GLOBALS,
            "super",
            "import"
        ]), IDENT_RE$1, regex.lookahead(/\(/)),
        className: "title.function",
        relevance: 0
    };
    const PROPERTY_ACCESS = {
        begin: regex.concat(/\./, regex.lookahead(regex.concat(IDENT_RE$1, /(?![0-9A-Za-z$_(])/))),
        end: IDENT_RE$1,
        excludeBegin: true,
        keywords: "prototype",
        className: "property",
        relevance: 0
    };
    const GETTER_OR_SETTER = {
        match: [
            /get|set/,
            /\s+/,
            IDENT_RE$1,
            /(?=\()/
        ],
        className: {
            1: "keyword",
            3: "title.function"
        },
        contains: [
            {
                begin: /\(\)/
            },
            PARAMS
        ]
    };
    const FUNC_LEAD_IN_RE = "(\\(" + "[^()]*(\\(" + "[^()]*(\\(" + "[^()]*" + "\\)[^()]*)*" + "\\)[^()]*)*" + "\\)|" + hljs.UNDERSCORE_IDENT_RE + ")\\s*=>";
    const FUNCTION_VARIABLE = {
        match: [
            /const|var|let/,
            /\s+/,
            IDENT_RE$1,
            /\s*/,
            /=\s*/,
            /(async\s*)?/,
            regex.lookahead(FUNC_LEAD_IN_RE)
        ],
        keywords: "async",
        className: {
            1: "keyword",
            3: "title.function"
        },
        contains: [
            PARAMS
        ]
    };
    return {
        name: "JavaScript",
        aliases: [
            "js",
            "jsx",
            "mjs",
            "cjs"
        ],
        keywords: KEYWORDS$1,
        // this will be extended by TypeScript
        exports: {
            PARAMS_CONTAINS,
            CLASS_REFERENCE
        },
        illegal: /#(?![$_A-z])/,
        contains: [
            hljs.SHEBANG({
                label: "shebang",
                binary: "node",
                relevance: 5
            }),
            USE_STRICT,
            hljs.APOS_STRING_MODE,
            hljs.QUOTE_STRING_MODE,
            HTML_TEMPLATE,
            CSS_TEMPLATE,
            GRAPHQL_TEMPLATE,
            TEMPLATE_STRING,
            COMMENT,
            // Skip numbers when they are part of a variable name
            {
                match: /\$\d+/
            },
            NUMBER,
            CLASS_REFERENCE,
            {
                className: "attr",
                begin: IDENT_RE$1 + regex.lookahead(":"),
                relevance: 0
            },
            FUNCTION_VARIABLE,
            {
                begin: "(" + hljs.RE_STARTERS_RE + "|\\b(case|return|throw)\\b)\\s*",
                keywords: "return throw case",
                relevance: 0,
                contains: [
                    COMMENT,
                    hljs.REGEXP_MODE,
                    {
                        className: "function",
                        // we have to count the parens to make sure we actually have the
                        // correct bounding ( ) before the =>.  There could be any number of
                        // sub-expressions inside also surrounded by parens.
                        begin: FUNC_LEAD_IN_RE,
                        returnBegin: true,
                        end: "\\s*=>",
                        contains: [
                            {
                                className: "params",
                                variants: [
                                    {
                                        begin: hljs.UNDERSCORE_IDENT_RE,
                                        relevance: 0
                                    },
                                    {
                                        className: null,
                                        begin: /\(\s*\)/,
                                        skip: true
                                    },
                                    {
                                        begin: /\(/,
                                        end: /\)/,
                                        excludeBegin: true,
                                        excludeEnd: true,
                                        keywords: KEYWORDS$1,
                                        contains: PARAMS_CONTAINS
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        begin: /,/,
                        relevance: 0
                    },
                    {
                        match: /\s+/,
                        relevance: 0
                    },
                    {
                        variants: [
                            {
                                begin: FRAGMENT.begin,
                                end: FRAGMENT.end
                            },
                            {
                                match: XML_SELF_CLOSING
                            },
                            {
                                begin: XML_TAG.begin,
                                // we carefully check the opening tag to see if it truly
                                // is a tag and not a false positive
                                "on:begin": XML_TAG.isTrulyOpeningTag,
                                end: XML_TAG.end
                            }
                        ],
                        subLanguage: "xml",
                        contains: [
                            {
                                begin: XML_TAG.begin,
                                end: XML_TAG.end,
                                skip: true,
                                contains: [
                                    "self"
                                ]
                            }
                        ]
                    }
                ]
            },
            FUNCTION_DEFINITION,
            {
                // prevent this from getting swallowed up by function
                // since they appear "function like"
                beginKeywords: "while if switch catch for"
            },
            {
                // we have to count the parens to make sure we actually have the correct
                // bounding ( ).  There could be any number of sub-expressions inside
                // also surrounded by parens.
                begin: "\\b(?!function)" + hljs.UNDERSCORE_IDENT_RE + "\\(" + // first parens
                "[^()]*(\\(" + "[^()]*(\\(" + "[^()]*" + "\\)[^()]*)*" + "\\)[^()]*)*" + "\\)\\s*\\{",
                returnBegin: true,
                label: "func.def",
                contains: [
                    PARAMS,
                    hljs.inherit(hljs.TITLE_MODE, {
                        begin: IDENT_RE$1,
                        className: "title.function"
                    })
                ]
            },
            // catch ... so it won't trigger the property rule below
            {
                match: /\.\.\./,
                relevance: 0
            },
            PROPERTY_ACCESS,
            // hack: prevents detection of keywords in some circumstances
            // .keyword()
            // $keyword = x
            {
                match: "\\$" + IDENT_RE$1,
                relevance: 0
            },
            {
                match: [
                    /\bconstructor(?=\s*\()/
                ],
                className: {
                    1: "title.function"
                },
                contains: [
                    PARAMS
                ]
            },
            FUNCTION_CALL,
            UPPER_CASE_CONSTANT,
            CLASS_OR_EXTENDS,
            GETTER_OR_SETTER,
            {
                match: /\$[(.]/ // relevance booster for a pattern common to JS libs: `$(something)` and `$.something`
            }
        ]
    };
}
/*
Language: TypeScript
Author: Panu Horsmalahti <panu.horsmalahti@iki.fi>
Contributors: Ike Ku <dempfi@yahoo.com>
Description: TypeScript is a strict superset of JavaScript
Website: https://www.typescriptlang.org
Category: common, scripting
*/ /** @type LanguageFn */ function typescript(hljs) {
    const tsLanguage = typescript_javascript(hljs);
    const IDENT_RE$1 = typescript_IDENT_RE;
    const TYPES = [
        "any",
        "void",
        "number",
        "boolean",
        "string",
        "object",
        "never",
        "symbol",
        "bigint",
        "unknown"
    ];
    const NAMESPACE = {
        beginKeywords: "namespace",
        end: /\{/,
        excludeEnd: true,
        contains: [
            tsLanguage.exports.CLASS_REFERENCE
        ]
    };
    const INTERFACE = {
        beginKeywords: "interface",
        end: /\{/,
        excludeEnd: true,
        keywords: {
            keyword: "interface extends",
            built_in: TYPES
        },
        contains: [
            tsLanguage.exports.CLASS_REFERENCE
        ]
    };
    const USE_STRICT = {
        className: "meta",
        relevance: 10,
        begin: /^\s*['"]use strict['"]/
    };
    const TS_SPECIFIC_KEYWORDS = [
        "type",
        "namespace",
        "interface",
        "public",
        "private",
        "protected",
        "implements",
        "declare",
        "abstract",
        "readonly",
        "enum",
        "override"
    ];
    const KEYWORDS$1 = {
        $pattern: typescript_IDENT_RE,
        keyword: typescript_KEYWORDS.concat(TS_SPECIFIC_KEYWORDS),
        literal: typescript_LITERALS,
        built_in: typescript_BUILT_INS.concat(TYPES),
        "variable.language": typescript_BUILT_IN_VARIABLES
    };
    const DECORATOR = {
        className: "meta",
        begin: "@" + IDENT_RE$1
    };
    const swapMode = (mode, label, replacement)=>{
        const indx = mode.contains.findIndex((m)=>m.label === label);
        if (indx === -1) {
            throw new Error("can not find mode to replace");
        }
        mode.contains.splice(indx, 1, replacement);
    };
    // this should update anywhere keywords is used since
    // it will be the same actual JS object
    Object.assign(tsLanguage.keywords, KEYWORDS$1);
    tsLanguage.exports.PARAMS_CONTAINS.push(DECORATOR);
    tsLanguage.contains = tsLanguage.contains.concat([
        DECORATOR,
        NAMESPACE,
        INTERFACE
    ]);
    // TS gets a simpler shebang rule than JS
    swapMode(tsLanguage, "shebang", hljs.SHEBANG());
    // JS use strict rule purposely excludes `asm` which makes no sense
    swapMode(tsLanguage, "use_strict", USE_STRICT);
    const functionDeclaration = tsLanguage.contains.find((m)=>m.label === "func.def");
    functionDeclaration.relevance = 0; // () => {} is more typical in TypeScript
    Object.assign(tsLanguage, {
        name: "TypeScript",
        aliases: [
            "ts",
            "tsx",
            "mts",
            "cts"
        ]
    });
    return tsLanguage;
}


;// CONCATENATED MODULE: ./node_modules/highlight.js/es/languages/vbnet.js
/*
Language: Visual Basic .NET
Description: Visual Basic .NET (VB.NET) is a multi-paradigm, object-oriented programming language, implemented on the .NET Framework.
Authors: Poren Chiang <ren.chiang@gmail.com>, Jan Pilzer
Website: https://docs.microsoft.com/dotnet/visual-basic/getting-started
Category: common
*/ /** @type LanguageFn */ function vbnet(hljs) {
    const regex = hljs.regex;
    /**
   * Character Literal
   * Either a single character ("a"C) or an escaped double quote (""""C).
   */ const CHARACTER = {
        className: "string",
        begin: /"(""|[^/n])"C\b/
    };
    const STRING = {
        className: "string",
        begin: /"/,
        end: /"/,
        illegal: /\n/,
        contains: [
            {
                // double quote escape
                begin: /""/
            }
        ]
    };
    /** Date Literals consist of a date, a time, or both separated by whitespace, surrounded by # */ const MM_DD_YYYY = /\d{1,2}\/\d{1,2}\/\d{4}/;
    const YYYY_MM_DD = /\d{4}-\d{1,2}-\d{1,2}/;
    const TIME_12H = /(\d|1[012])(:\d+){0,2} *(AM|PM)/;
    const TIME_24H = /\d{1,2}(:\d{1,2}){1,2}/;
    const DATE = {
        className: "literal",
        variants: [
            {
                // #YYYY-MM-DD# (ISO-Date) or #M/D/YYYY# (US-Date)
                begin: regex.concat(/# */, regex.either(YYYY_MM_DD, MM_DD_YYYY), / *#/)
            },
            {
                // #H:mm[:ss]# (24h Time)
                begin: regex.concat(/# */, TIME_24H, / *#/)
            },
            {
                // #h[:mm[:ss]] A# (12h Time)
                begin: regex.concat(/# */, TIME_12H, / *#/)
            },
            {
                // date plus time
                begin: regex.concat(/# */, regex.either(YYYY_MM_DD, MM_DD_YYYY), / +/, regex.either(TIME_12H, TIME_24H), / *#/)
            }
        ]
    };
    const NUMBER = {
        className: "number",
        relevance: 0,
        variants: [
            {
                // Float
                begin: /\b\d[\d_]*((\.[\d_]+(E[+-]?[\d_]+)?)|(E[+-]?[\d_]+))[RFD@!#]?/
            },
            {
                // Integer (base 10)
                begin: /\b\d[\d_]*((U?[SIL])|[%&])?/
            },
            {
                // Integer (base 16)
                begin: /&H[\dA-F_]+((U?[SIL])|[%&])?/
            },
            {
                // Integer (base 8)
                begin: /&O[0-7_]+((U?[SIL])|[%&])?/
            },
            {
                // Integer (base 2)
                begin: /&B[01_]+((U?[SIL])|[%&])?/
            }
        ]
    };
    const LABEL = {
        className: "label",
        begin: /^\w+:/
    };
    const DOC_COMMENT = hljs.COMMENT(/'''/, /$/, {
        contains: [
            {
                className: "doctag",
                begin: /<\/?/,
                end: />/
            }
        ]
    });
    const COMMENT = hljs.COMMENT(null, /$/, {
        variants: [
            {
                begin: /'/
            },
            {
                // TODO: Use multi-class for leading spaces
                begin: /([\t ]|^)REM(?=\s)/
            }
        ]
    });
    const DIRECTIVES = {
        className: "meta",
        // TODO: Use multi-class for indentation once available
        begin: /[\t ]*#(const|disable|else|elseif|enable|end|externalsource|if|region)\b/,
        end: /$/,
        keywords: {
            keyword: "const disable else elseif enable end externalsource if region then"
        },
        contains: [
            COMMENT
        ]
    };
    return {
        name: "Visual Basic .NET",
        aliases: [
            "vb"
        ],
        case_insensitive: true,
        classNameAliases: {
            label: "symbol"
        },
        keywords: {
            keyword: "addhandler alias aggregate ansi as async assembly auto binary by byref byval " /* a-b */  + "call case catch class compare const continue custom declare default delegate dim distinct do " /* c-d */  + "each equals else elseif end enum erase error event exit explicit finally for friend from function " /* e-f */  + "get global goto group handles if implements imports in inherits interface into iterator " /* g-i */  + "join key let lib loop me mid module mustinherit mustoverride mybase myclass " /* j-m */  + "namespace narrowing new next notinheritable notoverridable " /* n */  + "of off on operator option optional order overloads overridable overrides " /* o */  + "paramarray partial preserve private property protected public " /* p */  + "raiseevent readonly redim removehandler resume return " /* r */  + "select set shadows shared skip static step stop structure strict sub synclock " /* s */  + "take text then throw to try unicode until using when where while widening with withevents writeonly yield" /* t-y */ ,
            built_in: // Operators https://docs.microsoft.com/dotnet/visual-basic/language-reference/operators
            "addressof and andalso await directcast gettype getxmlnamespace is isfalse isnot istrue like mod nameof new not or orelse trycast typeof xor " + "cbool cbyte cchar cdate cdbl cdec cint clng cobj csbyte cshort csng cstr cuint culng cushort",
            type: // Data types https://docs.microsoft.com/dotnet/visual-basic/language-reference/data-types
            "boolean byte char date decimal double integer long object sbyte short single string uinteger ulong ushort",
            literal: "true false nothing"
        },
        illegal: "//|\\{|\\}|endif|gosub|variant|wend|^\\$ " /* reserved deprecated keywords */ ,
        contains: [
            CHARACTER,
            STRING,
            DATE,
            NUMBER,
            LABEL,
            DOC_COMMENT,
            COMMENT,
            DIRECTIVES
        ]
    };
}


;// CONCATENATED MODULE: ./node_modules/highlight.js/es/languages/wasm.js
/*
Language: WebAssembly
Website: https://webassembly.org
Description:  Wasm is designed as a portable compilation target for programming languages, enabling deployment on the web for client and server applications.
Category: web, common
Audit: 2020
*/ /** @type LanguageFn */ function wasm(hljs) {
    hljs.regex;
    const BLOCK_COMMENT = hljs.COMMENT(/\(;/, /;\)/);
    BLOCK_COMMENT.contains.push("self");
    const LINE_COMMENT = hljs.COMMENT(/;;/, /$/);
    const KWS = [
        "anyfunc",
        "block",
        "br",
        "br_if",
        "br_table",
        "call",
        "call_indirect",
        "data",
        "drop",
        "elem",
        "else",
        "end",
        "export",
        "func",
        "global.get",
        "global.set",
        "local.get",
        "local.set",
        "local.tee",
        "get_global",
        "get_local",
        "global",
        "if",
        "import",
        "local",
        "loop",
        "memory",
        "memory.grow",
        "memory.size",
        "module",
        "mut",
        "nop",
        "offset",
        "param",
        "result",
        "return",
        "select",
        "set_global",
        "set_local",
        "start",
        "table",
        "tee_local",
        "then",
        "type",
        "unreachable"
    ];
    const FUNCTION_REFERENCE = {
        begin: [
            /(?:func|call|call_indirect)/,
            /\s+/,
            /\$[^\s)]+/
        ],
        className: {
            1: "keyword",
            3: "title.function"
        }
    };
    const ARGUMENT = {
        className: "variable",
        begin: /\$[\w_]+/
    };
    const PARENS = {
        match: /(\((?!;)|\))+/,
        className: "punctuation",
        relevance: 0
    };
    const NUMBER = {
        className: "number",
        relevance: 0,
        // borrowed from Prism, TODO: split out into variants
        match: /[+-]?\b(?:\d(?:_?\d)*(?:\.\d(?:_?\d)*)?(?:[eE][+-]?\d(?:_?\d)*)?|0x[\da-fA-F](?:_?[\da-fA-F])*(?:\.[\da-fA-F](?:_?[\da-fA-D])*)?(?:[pP][+-]?\d(?:_?\d)*)?)\b|\binf\b|\bnan(?::0x[\da-fA-F](?:_?[\da-fA-D])*)?\b/
    };
    const TYPE = {
        // look-ahead prevents us from gobbling up opcodes
        match: /(i32|i64|f32|f64)(?!\.)/,
        className: "type"
    };
    const MATH_OPERATIONS = {
        className: "keyword",
        // borrowed from Prism, TODO: split out into variants
        match: /\b(f32|f64|i32|i64)(?:\.(?:abs|add|and|ceil|clz|const|convert_[su]\/i(?:32|64)|copysign|ctz|demote\/f64|div(?:_[su])?|eqz?|extend_[su]\/i32|floor|ge(?:_[su])?|gt(?:_[su])?|le(?:_[su])?|load(?:(?:8|16|32)_[su])?|lt(?:_[su])?|max|min|mul|nearest|neg?|or|popcnt|promote\/f32|reinterpret\/[fi](?:32|64)|rem_[su]|rot[lr]|shl|shr_[su]|store(?:8|16|32)?|sqrt|sub|trunc(?:_[su]\/f(?:32|64))?|wrap\/i64|xor))\b/
    };
    const OFFSET_ALIGN = {
        match: [
            /(?:offset|align)/,
            /\s*/,
            /=/
        ],
        className: {
            1: "keyword",
            3: "operator"
        }
    };
    return {
        name: "WebAssembly",
        keywords: {
            $pattern: /[\w.]+/,
            keyword: KWS
        },
        contains: [
            LINE_COMMENT,
            BLOCK_COMMENT,
            OFFSET_ALIGN,
            ARGUMENT,
            PARENS,
            FUNCTION_REFERENCE,
            hljs.QUOTE_STRING_MODE,
            TYPE,
            MATH_OPERATIONS,
            NUMBER
        ]
    };
}


;// CONCATENATED MODULE: ./node_modules/highlight.js/es/languages/xml.js
/*
Language: HTML, XML
Website: https://www.w3.org/XML/
Category: common, web
Audit: 2020
*/ /** @type LanguageFn */ function xml(hljs) {
    const regex = hljs.regex;
    // XML names can have the following additional letters: https://www.w3.org/TR/xml/#NT-NameChar
    // OTHER_NAME_CHARS = /[:\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]/;
    // Element names start with NAME_START_CHAR followed by optional other Unicode letters, ASCII digits, hyphens, underscores, and periods
    // const TAG_NAME_RE = regex.concat(/[A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD]/, regex.optional(/[A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*:/), /[A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*/);;
    // const XML_IDENT_RE = /[A-Z_a-z:\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]+/;
    // const TAG_NAME_RE = regex.concat(/[A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD]/, regex.optional(/[A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*:/), /[A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*/);
    // however, to cater for performance and more Unicode support rely simply on the Unicode letter class
    const TAG_NAME_RE = regex.concat(/[\p{L}_]/u, regex.optional(/[\p{L}0-9_.-]*:/u), /[\p{L}0-9_.-]*/u);
    const XML_IDENT_RE = /[\p{L}0-9._:-]+/u;
    const XML_ENTITIES = {
        className: "symbol",
        begin: /&[a-z]+;|&#[0-9]+;|&#x[a-f0-9]+;/
    };
    const XML_META_KEYWORDS = {
        begin: /\s/,
        contains: [
            {
                className: "keyword",
                begin: /#?[a-z_][a-z1-9_-]+/,
                illegal: /\n/
            }
        ]
    };
    const XML_META_PAR_KEYWORDS = hljs.inherit(XML_META_KEYWORDS, {
        begin: /\(/,
        end: /\)/
    });
    const APOS_META_STRING_MODE = hljs.inherit(hljs.APOS_STRING_MODE, {
        className: "string"
    });
    const QUOTE_META_STRING_MODE = hljs.inherit(hljs.QUOTE_STRING_MODE, {
        className: "string"
    });
    const TAG_INTERNALS = {
        endsWithParent: true,
        illegal: /</,
        relevance: 0,
        contains: [
            {
                className: "attr",
                begin: XML_IDENT_RE,
                relevance: 0
            },
            {
                begin: /=\s*/,
                relevance: 0,
                contains: [
                    {
                        className: "string",
                        endsParent: true,
                        variants: [
                            {
                                begin: /"/,
                                end: /"/,
                                contains: [
                                    XML_ENTITIES
                                ]
                            },
                            {
                                begin: /'/,
                                end: /'/,
                                contains: [
                                    XML_ENTITIES
                                ]
                            },
                            {
                                begin: /[^\s"'=<>`]+/
                            }
                        ]
                    }
                ]
            }
        ]
    };
    return {
        name: "HTML, XML",
        aliases: [
            "html",
            "xhtml",
            "rss",
            "atom",
            "xjb",
            "xsd",
            "xsl",
            "plist",
            "wsf",
            "svg"
        ],
        case_insensitive: true,
        unicodeRegex: true,
        contains: [
            {
                className: "meta",
                begin: /<![a-z]/,
                end: />/,
                relevance: 10,
                contains: [
                    XML_META_KEYWORDS,
                    QUOTE_META_STRING_MODE,
                    APOS_META_STRING_MODE,
                    XML_META_PAR_KEYWORDS,
                    {
                        begin: /\[/,
                        end: /\]/,
                        contains: [
                            {
                                className: "meta",
                                begin: /<![a-z]/,
                                end: />/,
                                contains: [
                                    XML_META_KEYWORDS,
                                    XML_META_PAR_KEYWORDS,
                                    QUOTE_META_STRING_MODE,
                                    APOS_META_STRING_MODE
                                ]
                            }
                        ]
                    }
                ]
            },
            hljs.COMMENT(/<!--/, /-->/, {
                relevance: 10
            }),
            {
                begin: /<!\[CDATA\[/,
                end: /\]\]>/,
                relevance: 10
            },
            XML_ENTITIES,
            // xml processing instructions
            {
                className: "meta",
                end: /\?>/,
                variants: [
                    {
                        begin: /<\?xml/,
                        relevance: 10,
                        contains: [
                            QUOTE_META_STRING_MODE
                        ]
                    },
                    {
                        begin: /<\?[a-z][a-z0-9]+/
                    }
                ]
            },
            {
                className: "tag",
                /*
        The lookahead pattern (?=...) ensures that 'begin' only matches
        '<style' as a single word, followed by a whitespace or an
        ending bracket.
        */ begin: /<style(?=\s|>)/,
                end: />/,
                keywords: {
                    name: "style"
                },
                contains: [
                    TAG_INTERNALS
                ],
                starts: {
                    end: /<\/style>/,
                    returnEnd: true,
                    subLanguage: [
                        "css",
                        "xml"
                    ]
                }
            },
            {
                className: "tag",
                // See the comment in the <style tag about the lookahead pattern
                begin: /<script(?=\s|>)/,
                end: />/,
                keywords: {
                    name: "script"
                },
                contains: [
                    TAG_INTERNALS
                ],
                starts: {
                    end: /<\/script>/,
                    returnEnd: true,
                    subLanguage: [
                        "javascript",
                        "handlebars",
                        "xml"
                    ]
                }
            },
            // we need this for now for jSX
            {
                className: "tag",
                begin: /<>|<\/>/
            },
            // open tag
            {
                className: "tag",
                begin: regex.concat(/</, regex.lookahead(regex.concat(TAG_NAME_RE, // <tag/>
                // <tag>
                // <tag ...
                regex.either(/\/>/, />/, /\s/)))),
                end: /\/?>/,
                contains: [
                    {
                        className: "name",
                        begin: TAG_NAME_RE,
                        relevance: 0,
                        starts: TAG_INTERNALS
                    }
                ]
            },
            // close tag
            {
                className: "tag",
                begin: regex.concat(/<\//, regex.lookahead(regex.concat(TAG_NAME_RE, />/))),
                contains: [
                    {
                        className: "name",
                        begin: TAG_NAME_RE,
                        relevance: 0
                    },
                    {
                        begin: />/,
                        relevance: 0,
                        endsParent: true
                    }
                ]
            }
        ]
    };
}


;// CONCATENATED MODULE: ./node_modules/highlight.js/es/languages/yaml.js
/*
Language: YAML
Description: Yet Another Markdown Language
Author: Stefan Wienert <stwienert@gmail.com>
Contributors: Carl Baxter <carl@cbax.tech>
Requires: ruby.js
Website: https://yaml.org
Category: common, config
*/ function yaml(hljs) {
    const LITERALS = "true false yes no null";
    // YAML spec allows non-reserved URI characters in tags.
    const URI_CHARACTERS = "[\\w#;/?:@&=+$,.~*'()[\\]]+";
    // Define keys as starting with a word character
    // ...containing word chars, spaces, colons, forward-slashes, hyphens and periods
    // ...and ending with a colon followed immediately by a space, tab or newline.
    // The YAML spec allows for much more than this, but this covers most use-cases.
    const KEY = {
        className: "attr",
        variants: [
            {
                begin: "\\w[\\w :\\/.-]*:(?=[ 	]|$)"
            },
            {
                begin: '"\\w[\\w :\\/.-]*":(?=[ 	]|$)'
            },
            {
                begin: "'\\w[\\w :\\/.-]*':(?=[ 	]|$)"
            }
        ]
    };
    const TEMPLATE_VARIABLES = {
        className: "template-variable",
        variants: [
            {
                begin: /\{\{/,
                end: /\}\}/
            },
            {
                begin: /%\{/,
                end: /\}/
            }
        ]
    };
    const STRING = {
        className: "string",
        relevance: 0,
        variants: [
            {
                begin: /'/,
                end: /'/
            },
            {
                begin: /"/,
                end: /"/
            },
            {
                begin: /\S+/
            }
        ],
        contains: [
            hljs.BACKSLASH_ESCAPE,
            TEMPLATE_VARIABLES
        ]
    };
    // Strings inside of value containers (objects) can't contain braces,
    // brackets, or commas
    const CONTAINER_STRING = hljs.inherit(STRING, {
        variants: [
            {
                begin: /'/,
                end: /'/
            },
            {
                begin: /"/,
                end: /"/
            },
            {
                begin: /[^\s,{}[\]]+/
            }
        ]
    });
    const DATE_RE = "[0-9]{4}(-[0-9][0-9]){0,2}";
    const TIME_RE = "([Tt \\t][0-9][0-9]?(:[0-9][0-9]){2})?";
    const FRACTION_RE = "(\\.[0-9]*)?";
    const ZONE_RE = "([ \\t])*(Z|[-+][0-9][0-9]?(:[0-9][0-9])?)?";
    const TIMESTAMP = {
        className: "number",
        begin: "\\b" + DATE_RE + TIME_RE + FRACTION_RE + ZONE_RE + "\\b"
    };
    const VALUE_CONTAINER = {
        end: ",",
        endsWithParent: true,
        excludeEnd: true,
        keywords: LITERALS,
        relevance: 0
    };
    const OBJECT = {
        begin: /\{/,
        end: /\}/,
        contains: [
            VALUE_CONTAINER
        ],
        illegal: "\\n",
        relevance: 0
    };
    const ARRAY = {
        begin: "\\[",
        end: "\\]",
        contains: [
            VALUE_CONTAINER
        ],
        illegal: "\\n",
        relevance: 0
    };
    const MODES = [
        KEY,
        {
            className: "meta",
            begin: "^---\\s*$",
            relevance: 10
        },
        {
            // Blocks start with a | or > followed by a newline
            //
            // Indentation of subsequent lines must be the same to
            // be considered part of the block
            className: "string",
            begin: "[\\|>]([1-9]?[+-])?[ ]*\\n( +)[^ ][^\\n]*\\n(\\2[^\\n]+\\n?)*"
        },
        {
            begin: "<%[%=-]?",
            end: "[%-]?%>",
            subLanguage: "ruby",
            excludeBegin: true,
            excludeEnd: true,
            relevance: 0
        },
        {
            className: "type",
            begin: "!\\w+!" + URI_CHARACTERS
        },
        // https://yaml.org/spec/1.2/spec.html#id2784064
        {
            className: "type",
            begin: "!<" + URI_CHARACTERS + ">"
        },
        {
            className: "type",
            begin: "!" + URI_CHARACTERS
        },
        {
            className: "type",
            begin: "!!" + URI_CHARACTERS
        },
        {
            className: "meta",
            begin: "&" + hljs.UNDERSCORE_IDENT_RE + "$"
        },
        {
            className: "meta",
            begin: "\\*" + hljs.UNDERSCORE_IDENT_RE + "$"
        },
        {
            className: "bullet",
            // TODO: remove |$ hack when we have proper look-ahead support
            begin: "-(?=[ ]|$)",
            relevance: 0
        },
        hljs.HASH_COMMENT_MODE,
        {
            beginKeywords: LITERALS,
            keywords: {
                literal: LITERALS
            }
        },
        TIMESTAMP,
        // numbers are any valid C-style number that
        // sit isolated from other words
        {
            className: "number",
            begin: hljs.C_NUMBER_RE + "\\b",
            relevance: 0
        },
        OBJECT,
        ARRAY,
        STRING
    ];
    const VALUE_MODES = [
        ...MODES
    ];
    VALUE_MODES.pop();
    VALUE_MODES.push(CONTAINER_STRING);
    VALUE_CONTAINER.contains = VALUE_MODES;
    return {
        name: "YAML",
        case_insensitive: true,
        aliases: [
            "yml"
        ],
        contains: MODES
    };
}


// EXTERNAL MODULE: ./node_modules/highlight.js/lib/core.js
var core = __webpack_require__(7060);
;// CONCATENATED MODULE: ./node_modules/highlight.js/es/core.js
// https://nodejs.org/api/packages.html#packages_writing_dual_packages_while_avoiding_or_minimizing_hazards


/* harmony default export */ const es_core = (core);

// EXTERNAL MODULE: ./node_modules/format/format.js
var format_format = __webpack_require__(3578);
;// CONCATENATED MODULE: ./node_modules/fault/index.js
// @ts-expect-error

const fault = Object.assign(create(Error), {
    eval: create(EvalError),
    range: create(RangeError),
    reference: create(ReferenceError),
    syntax: create(SyntaxError),
    type: create(TypeError),
    uri: create(URIError)
});
/**
 * Create a new `EConstructor`, with the formatted `format` as a first argument.
 *
 * @template {Error} Fault
 * @template {new (reason: string) => Fault} Class
 * @param {Class} Constructor
 */ function create(Constructor) {
    /** @type {string} */ // @ts-expect-error
    FormattedError.displayName = Constructor.displayName || Constructor.name;
    return FormattedError;
    /**
   * Create an error with a printf-like formatted message.
   *
   * @param {string|null} [format]
   *   Template string.
   * @param {...unknown} values
   *   Values to render in `format`.
   * @returns {Fault}
   */ function FormattedError(format, ...values) {
        /** @type {string} */ const reason = format ? format_format(format, ...values) : format;
        return new Constructor(reason);
    }
}

;// CONCATENATED MODULE: ./node_modules/lowlight/lib/core.js
/**
 * @typedef {import('hast').Text} Text
 * @typedef {import('highlight.js').HighlightResult} HighlightResult
 * @typedef {import('highlight.js').HLJSOptions} HighlightOptions
 * @typedef {import('highlight.js').LanguageFn} HighlightSyntax
 * @typedef {import('highlight.js').Emitter} HighlightEmitter
 *
 * @typedef {{type: 'element', tagName: 'span', properties: {className: Array<string>}, children: Array<Span|Text>}} Span
 * @typedef {{type: 'root', data: {language: string|null, relevance: number}, children: Array<Span|Text>}} Root
 *
 * @typedef {Object} ExtraOptions
 * @property {Array<string>} [subset]
 *   List of allowed languages, defaults to all registered languages.
 *
 * @typedef {Object} Options
 *   Configuration.
 * @property {string} [prefix='hljs-']
 *   Class prefix.
 *
 * @typedef {Options & ExtraOptions} AutoOptions
 */ 

const own = {}.hasOwnProperty;
const defaultPrefix = "hljs-";
/**
 * Highlight `value` (code) as `language` (name).
 *
 * @param {string} language
 *   Programming language name.
 * @param {string} value
 *   Code to highlight.
 * @param {Options} [options={}]
 *   Configuration.
 * @returns {Root}
 *   A hast `Root` node.
 */ function highlight(language, value, options = {}) {
    let prefix = options.prefix;
    if (typeof language !== "string") {
        throw fault("Expected `string` for name, got `%s`", language);
    }
    if (!es_core.getLanguage(language)) {
        throw fault("Unknown language: `%s` is not registered", language);
    }
    if (typeof value !== "string") {
        throw fault("Expected `string` for value, got `%s`", value);
    }
    if (prefix === null || prefix === undefined) {
        prefix = defaultPrefix;
    }
    // @ts-expect-error: Types out of date.
    // See: <https://github.com/highlightjs/highlight.js/issues/3621#issuecomment-1528841888>
    es_core.configure({
        __emitter: HastEmitter,
        classPrefix: prefix
    });
    const result = /** @type {HighlightResult & {_emitter: HastEmitter}} */ es_core.highlight(value, {
        language,
        ignoreIllegals: true
    });
    es_core.configure({});
    // `highlight.js` seems to use this (currently) for broken grammars, so let’s
    // keep it in there just to be sure.
    /* c8 ignore next 3 */ if (result.errorRaised) {
        throw result.errorRaised;
    }
    // @ts-expect-error: `language` is always defined in `highlight`.
    result._emitter.root.data.language = result.language;
    result._emitter.root.data.relevance = result.relevance;
    return result._emitter.root;
}
/**
 * Highlight `value` (code) and guess its programming language.
 *
 * @param {string} value
 *   Code to highlight.
 * @param {AutoOptions} [options={}]
 *   Configuration.
 * @returns {Root}
 *   A hast `Root` node.
 */ function highlightAuto(value, options = {}) {
    const subset = options.subset || es_core.listLanguages();
    let prefix = options.prefix;
    let index = -1;
    /** @type {Root} */ let result = {
        type: "root",
        data: {
            language: null,
            relevance: 0
        },
        children: []
    };
    if (prefix === null || prefix === undefined) {
        prefix = defaultPrefix;
    }
    if (typeof value !== "string") {
        throw fault("Expected `string` for value, got `%s`", value);
    }
    while(++index < subset.length){
        const name = subset[index];
        if (!es_core.getLanguage(name)) continue;
        const current = highlight(name, value, options);
        if (current.data.relevance > result.data.relevance) result = current;
    }
    return result;
}
/**
 * Register a language.
 *
 * @param {string} language
 *   Programming language name.
 * @param {HighlightSyntax} syntax
 *   `highlight.js` language syntax.
 * @returns {void}
 */ function registerLanguage(language, syntax) {
    es_core.registerLanguage(language, syntax);
}
/**
 * Register aliases for already registered languages.
 *
 * @param {string|Record<string, string|Array<string>>} language
 *   Programming language name or a map of `language`s to `alias`es or `list`s
 * @param {string|Array<string>} [alias]
 *   New aliases for the programming language.
 * @returns {void}
 */ const registerAlias = /**
   * @type {(
   *   ((language: string, alias: string|Array<string>) => void) &
   *   ((aliases: Record<string, string|Array<string>>) => void)
   * )}
   */ /**
     * @param {string|Record<string, string|Array<string>>} language
     * @param {string|Array<string>} [alias]
     * @returns {void}
     */ function(language, alias) {
    if (typeof language === "string") {
        // @ts-expect-error: should be a string in this overload.
        es_core.registerAliases(alias, {
            languageName: language
        });
    } else {
        /** @type {string} */ let key;
        for(key in language){
            if (own.call(language, key)) {
                es_core.registerAliases(language[key], {
                    languageName: key
                });
            }
        }
    }
};
/**
 * Check whether an `alias` or `language` is registered.
 *
 * @param {string} aliasOrLanguage
 *   Name of a registered language or alias.
 * @returns {boolean}
 *   Whether `aliasOrlanguage` is registered.
 */ function registered(aliasOrLanguage) {
    return Boolean(es_core.getLanguage(aliasOrLanguage));
}
/**
 * List registered languages.
 *
 * @returns {Array<string>}
 *   Names of registered language.
 */ function listLanguages() {
    return es_core.listLanguages();
}
/** @type {HighlightEmitter} */ class HastEmitter {
    /**
   * @param {HighlightOptions} options
   */ constructor(options){
        /** @type {HighlightOptions} */ this.options = options;
        /** @type {Root} */ this.root = {
            type: "root",
            data: {
                language: null,
                relevance: 0
            },
            children: []
        };
        /** @type {[Root, ...Array<Span>]} */ this.stack = [
            this.root
        ];
    }
    /**
   * @param {string} value
   */ addText(value) {
        if (value === "") return;
        const current = this.stack[this.stack.length - 1];
        const tail = current.children[current.children.length - 1];
        if (tail && tail.type === "text") {
            tail.value += value;
        } else {
            current.children.push({
                type: "text",
                value
            });
        }
    }
    /**
   *
   * @param {unknown} rawName
   */ startScope(rawName) {
        this.openNode(String(rawName));
    }
    /**
   */ endScope() {
        this.closeNode();
    }
    /**
   * @param {HastEmitter} other
   * @param {string} name
   */ __addSublanguage(other, name) {
        const current = this.stack[this.stack.length - 1];
        const results = other.root.children;
        if (name) {
            current.children.push({
                type: "element",
                tagName: "span",
                properties: {
                    className: [
                        name
                    ]
                },
                children: results
            });
        } else {
            current.children.push(...results);
        }
    }
    /**
   * @param {string} name
   */ openNode(name) {
        // First “class” gets the prefix. Rest gets a repeated underscore suffix.
        // See: <https://github.com/highlightjs/highlight.js/commit/51806aa>
        // See: <https://github.com/wooorm/lowlight/issues/43>
        const className = name.split(".").map((d, i)=>i ? d + "_".repeat(i) : this.options.classPrefix + d);
        const current = this.stack[this.stack.length - 1];
        /** @type {Span} */ const child = {
            type: "element",
            tagName: "span",
            properties: {
                className
            },
            children: []
        };
        current.children.push(child);
        this.stack.push(child);
    }
    /**
   */ closeNode() {
        this.stack.pop();
    }
    /**
   */ finalize() {}
    /**
   */ toHTML() {
        return "";
    }
}
const lowlight = {
    highlight,
    highlightAuto,
    registerLanguage,
    registered,
    listLanguages,
    registerAlias
};

;// CONCATENATED MODULE: ./node_modules/lowlight/lib/common.js
// @ts-expect-error: this registers types for the language files.
/** @typedef {import('highlight.js/types/index.js')} DoNotTochItRegistersLanguageFiles */ 





































lowlight.registerLanguage("arduino", arduino);
lowlight.registerLanguage("bash", bash);
lowlight.registerLanguage("c", c);
lowlight.registerLanguage("cpp", cpp);
lowlight.registerLanguage("csharp", csharp);
lowlight.registerLanguage("css", css);
lowlight.registerLanguage("diff", diff);
lowlight.registerLanguage("go", go);
lowlight.registerLanguage("graphql", graphql);
lowlight.registerLanguage("ini", ini);
lowlight.registerLanguage("java", java);
lowlight.registerLanguage("javascript", javascript);
lowlight.registerLanguage("json", json);
lowlight.registerLanguage("kotlin", kotlin);
lowlight.registerLanguage("less", less);
lowlight.registerLanguage("lua", lua);
lowlight.registerLanguage("makefile", makefile);
lowlight.registerLanguage("markdown", markdown);
lowlight.registerLanguage("objectivec", objectivec);
lowlight.registerLanguage("perl", perl);
lowlight.registerLanguage("php", php);
lowlight.registerLanguage("php-template", phpTemplate);
lowlight.registerLanguage("plaintext", plaintext);
lowlight.registerLanguage("python", python);
lowlight.registerLanguage("python-repl", pythonRepl);
lowlight.registerLanguage("r", r);
lowlight.registerLanguage("ruby", ruby);
lowlight.registerLanguage("rust", rust);
lowlight.registerLanguage("scss", scss);
lowlight.registerLanguage("shell", shell);
lowlight.registerLanguage("sql", sql);
lowlight.registerLanguage("swift", swift);
lowlight.registerLanguage("typescript", typescript);
lowlight.registerLanguage("vbnet", vbnet);
lowlight.registerLanguage("wasm", wasm);
lowlight.registerLanguage("xml", xml);
lowlight.registerLanguage("yaml", yaml);


;// CONCATENATED MODULE: ./node_modules/lowlight/index.js
/**
 * @typedef {import('./lib/core.js').Root} Root
 * @typedef {import('./lib/core.js').Options} Options
 * @typedef {import('./lib/core.js').AutoOptions} AutoOptions
 */ 

;// CONCATENATED MODULE: ./node_modules/hast-util-is-element/index.js
/**
 * @typedef {import('unist').Parent} Parent
 * @typedef {import('hast').Element} Element
 */ /**
 * @typedef {null | undefined | string | TestFunctionAnything | Array<string | TestFunctionAnything>} Test
 *   Check for an arbitrary element, unaware of TypeScript inferral.
 *
 * @callback TestFunctionAnything
 *   Check if an element passes a test, unaware of TypeScript inferral.
 * @param {Element} element
 *   An element.
 * @param {number | null | undefined} [index]
 *   The element’s position in its parent.
 * @param {Parent | null | undefined} [parent]
 *   The element’s parent.
 * @returns {boolean | void}
 *   Whether this element passes the test.
 */ /**
 * @template {Element} T
 *   Element type.
 * @typedef {T['tagName'] | TestFunctionPredicate<T> | Array<T['tagName'] | TestFunctionPredicate<T>>} PredicateTest
 *   Check for an element that can be inferred by TypeScript.
 */ /**
 * Check if an element passes a certain node test.
 *
 * @template {Element} T
 *   Element type.
 * @callback TestFunctionPredicate
 *   Complex test function for an element that can be inferred by TypeScript.
 * @param {Element} element
 *   An element.
 * @param {number | null | undefined} [index]
 *   The element’s position in its parent.
 * @param {Parent | null | undefined} [parent]
 *   The element’s parent.
 * @returns {element is T}
 *   Whether this element passes the test.
 */ /**
 * @callback AssertAnything
 *   Check that an arbitrary value is an element, unaware of TypeScript inferral.
 * @param {unknown} [node]
 *   Anything (typically a node).
 * @param {number | null | undefined} [index]
 *   The node’s position in its parent.
 * @param {Parent | null | undefined} [parent]
 *   The node’s parent.
 * @returns {boolean}
 *   Whether this is an element and passes a test.
 */ /**
 * Check if a node is an element and passes a certain node test
 *
 * @template {Element} T
 *   Element type.
 * @callback AssertPredicate
 *   Check that an arbitrary value is a specific element, aware of TypeScript.
 * @param {unknown} [node]
 *   Anything (typically a node).
 * @param {number | null | undefined} [index]
 *   The node’s position in its parent.
 * @param {Parent | null | undefined} [parent]
 *   The node’s parent.
 * @returns {node is T}
 *   Whether this is an element and passes a test.
 */ /**
 * Check if `node` is an `Element` and whether it passes the given test.
 *
 * @param node
 *   Thing to check, typically `Node`.
 * @param test
 *   A check for a specific element.
 * @param index
 *   The node’s position in its parent.
 * @param parent
 *   The node’s parent.
 * @returns
 *   Whether `node` is an element and passes a test.
 */ const isElement = /**
   * @type {(
   *   (() => false) &
   *   (<T extends Element = Element>(node: unknown, test?: PredicateTest<T>, index?: number, parent?: Parent, context?: unknown) => node is T) &
   *   ((node: unknown, test: Test, index?: number, parent?: Parent, context?: unknown) => boolean)
   * )}
   */ /**
     * @param {unknown} [node]
     * @param {Test | undefined} [test]
     * @param {number | null | undefined} [index]
     * @param {Parent | null | undefined} [parent]
     * @param {unknown} [context]
     * @returns {boolean}
     */ // eslint-disable-next-line max-params
function(node, test, index, parent, context) {
    const check = convertElement(test);
    if (index !== undefined && index !== null && (typeof index !== "number" || index < 0 || index === Number.POSITIVE_INFINITY)) {
        throw new Error("Expected positive finite index for child node");
    }
    if (parent !== undefined && parent !== null && (!parent.type || !parent.children)) {
        throw new Error("Expected parent node");
    }
    // @ts-expect-error Looks like a node.
    if (!node || !node.type || typeof node.type !== "string") {
        return false;
    }
    if ((parent === undefined || parent === null) !== (index === undefined || index === null)) {
        throw new Error("Expected both parent and index");
    }
    return check.call(context, node, index, parent);
};
/**
 * Generate an assertion from a test.
 *
 * Useful if you’re going to test many nodes, for example when creating a
 * utility where something else passes a compatible test.
 *
 * The created function is a bit faster because it expects valid input only:
 * a `node`, `index`, and `parent`.
 *
 * @param test
 *   *  When nullish, checks if `node` is an `Element`.
 *   *  When `string`, works like passing `(element) => element.tagName === test`.
 *   *  When `function` checks if function passed the element is true.
 *   *  When `array`, checks any one of the subtests pass.
 * @returns
 *   An assertion.
 */ const convertElement = /**
   * @type {(
   *   (<T extends Element>(test: T['tagName'] | TestFunctionPredicate<T>) => AssertPredicate<T>) &
   *   ((test?: Test) => AssertAnything)
   * )}
   */ /**
     * @param {Test | null | undefined} [test]
     * @returns {AssertAnything}
     */ function(test) {
    if (test === undefined || test === null) {
        return hast_util_is_element_element;
    }
    if (typeof test === "string") {
        return tagNameFactory(test);
    }
    if (typeof test === "object") {
        return anyFactory(test);
    }
    if (typeof test === "function") {
        return castFactory(test);
    }
    throw new Error("Expected function, string, or array as test");
};
/**
 * Handle multiple tests.
 *
 * @param {Array<string | TestFunctionAnything>} tests
 * @returns {AssertAnything}
 */ function anyFactory(tests) {
    /** @type {Array<AssertAnything>} */ const checks = [];
    let index = -1;
    while(++index < tests.length){
        checks[index] = convertElement(tests[index]);
    }
    return castFactory(any);
    /**
   * @this {unknown}
   * @param {Array<unknown>} parameters
   * @returns {boolean}
   */ function any(...parameters) {
        let index = -1;
        while(++index < checks.length){
            if (checks[index].call(this, ...parameters)) {
                return true;
            }
        }
        return false;
    }
}
/**
 * Turn a string into a test for an element with a certain tag name.
 *
 * @param {string} check
 * @returns {AssertAnything}
 */ function tagNameFactory(check) {
    return tagName;
    /**
   * @param {unknown} node
   * @returns {boolean}
   */ function tagName(node) {
        return hast_util_is_element_element(node) && node.tagName === check;
    }
}
/**
 * Turn a custom test into a test for an element that passes that test.
 *
 * @param {TestFunctionAnything} check
 * @returns {AssertAnything}
 */ function castFactory(check) {
    return assertion;
    /**
   * @this {unknown}
   * @param {unknown} node
   * @param {Array<unknown>} parameters
   * @returns {boolean}
   */ function assertion(node, ...parameters) {
        // @ts-expect-error: fine.
        return hast_util_is_element_element(node) && Boolean(check.call(this, node, ...parameters));
    }
}
/**
 * Make sure something is an element.
 *
 * @param {unknown} node
 * @returns {node is Element}
 */ function hast_util_is_element_element(node) {
    return Boolean(node && typeof node === "object" && // @ts-expect-error Looks like a node.
    node.type === "element" && // @ts-expect-error Looks like an element.
    typeof node.tagName === "string");
}

;// CONCATENATED MODULE: ./node_modules/unist-util-is/lib/index.js
/**
 * @typedef {import('unist').Node} Node
 * @typedef {import('unist').Parent} Parent
 */ /**
 * @typedef {Record<string, unknown>} Props
 * @typedef {null | undefined | string | Props | TestFunctionAnything | Array<string | Props | TestFunctionAnything>} Test
 *   Check for an arbitrary node, unaware of TypeScript inferral.
 *
 * @callback TestFunctionAnything
 *   Check if a node passes a test, unaware of TypeScript inferral.
 * @param {unknown} this
 *   The given context.
 * @param {Node} node
 *   A node.
 * @param {number | null | undefined} [index]
 *   The node’s position in its parent.
 * @param {Parent | null | undefined} [parent]
 *   The node’s parent.
 * @returns {boolean | void}
 *   Whether this node passes the test.
 */ /**
 * @template {Node} Kind
 *   Node type.
 * @typedef {Kind['type'] | Partial<Kind> | TestFunctionPredicate<Kind> | Array<Kind['type'] | Partial<Kind> | TestFunctionPredicate<Kind>>} PredicateTest
 *   Check for a node that can be inferred by TypeScript.
 */ /**
 * Check if a node passes a certain test.
 *
 * @template {Node} Kind
 *   Node type.
 * @callback TestFunctionPredicate
 *   Complex test function for a node that can be inferred by TypeScript.
 * @param {Node} node
 *   A node.
 * @param {number | null | undefined} [index]
 *   The node’s position in its parent.
 * @param {Parent | null | undefined} [parent]
 *   The node’s parent.
 * @returns {node is Kind}
 *   Whether this node passes the test.
 */ /**
 * @callback AssertAnything
 *   Check that an arbitrary value is a node, unaware of TypeScript inferral.
 * @param {unknown} [node]
 *   Anything (typically a node).
 * @param {number | null | undefined} [index]
 *   The node’s position in its parent.
 * @param {Parent | null | undefined} [parent]
 *   The node’s parent.
 * @returns {boolean}
 *   Whether this is a node and passes a test.
 */ /**
 * Check if a node is a node and passes a certain node test.
 *
 * @template {Node} Kind
 *   Node type.
 * @callback AssertPredicate
 *   Check that an arbitrary value is a specific node, aware of TypeScript.
 * @param {unknown} [node]
 *   Anything (typically a node).
 * @param {number | null | undefined} [index]
 *   The node’s position in its parent.
 * @param {Parent | null | undefined} [parent]
 *   The node’s parent.
 * @returns {node is Kind}
 *   Whether this is a node and passes a test.
 */ /**
 * Check if `node` is a `Node` and whether it passes the given test.
 *
 * @param node
 *   Thing to check, typically `Node`.
 * @param test
 *   A check for a specific node.
 * @param index
 *   The node’s position in its parent.
 * @param parent
 *   The node’s parent.
 * @returns
 *   Whether `node` is a node and passes a test.
 */ const is = /**
   * @type {(
   *   (() => false) &
   *   (<Kind extends Node = Node>(node: unknown, test: PredicateTest<Kind>, index: number, parent: Parent, context?: unknown) => node is Kind) &
   *   (<Kind extends Node = Node>(node: unknown, test: PredicateTest<Kind>, index?: null | undefined, parent?: null | undefined, context?: unknown) => node is Kind) &
   *   ((node: unknown, test: Test, index: number, parent: Parent, context?: unknown) => boolean) &
   *   ((node: unknown, test?: Test, index?: null | undefined, parent?: null | undefined, context?: unknown) => boolean)
   * )}
   */ /**
     * @param {unknown} [node]
     * @param {Test} [test]
     * @param {number | null | undefined} [index]
     * @param {Parent | null | undefined} [parent]
     * @param {unknown} [context]
     * @returns {boolean}
     */ // eslint-disable-next-line max-params
function is(node, test, index, parent, context) {
    const check = convert(test);
    if (index !== undefined && index !== null && (typeof index !== "number" || index < 0 || index === Number.POSITIVE_INFINITY)) {
        throw new Error("Expected positive finite index");
    }
    if (parent !== undefined && parent !== null && (!is(parent) || !parent.children)) {
        throw new Error("Expected parent node");
    }
    if ((parent === undefined || parent === null) !== (index === undefined || index === null)) {
        throw new Error("Expected both parent and index");
    }
    // @ts-expect-error Looks like a node.
    return node && node.type && typeof node.type === "string" ? Boolean(check.call(context, node, index, parent)) : false;
};
/**
 * Generate an assertion from a test.
 *
 * Useful if you’re going to test many nodes, for example when creating a
 * utility where something else passes a compatible test.
 *
 * The created function is a bit faster because it expects valid input only:
 * a `node`, `index`, and `parent`.
 *
 * @param test
 *   *   when nullish, checks if `node` is a `Node`.
 *   *   when `string`, works like passing `(node) => node.type === test`.
 *   *   when `function` checks if function passed the node is true.
 *   *   when `object`, checks that all keys in test are in node, and that they have (strictly) equal values.
 *   *   when `array`, checks if any one of the subtests pass.
 * @returns
 *   An assertion.
 */ const convert = /**
   * @type {(
   *   (<Kind extends Node>(test: PredicateTest<Kind>) => AssertPredicate<Kind>) &
   *   ((test?: Test) => AssertAnything)
   * )}
   */ /**
     * @param {Test} [test]
     * @returns {AssertAnything}
     */ function(test) {
    if (test === undefined || test === null) {
        return ok;
    }
    if (typeof test === "string") {
        return typeFactory(test);
    }
    if (typeof test === "object") {
        return Array.isArray(test) ? lib_anyFactory(test) : propsFactory(test);
    }
    if (typeof test === "function") {
        return lib_castFactory(test);
    }
    throw new Error("Expected function, string, or object as test");
};
/**
 * @param {Array<string | Props | TestFunctionAnything>} tests
 * @returns {AssertAnything}
 */ function lib_anyFactory(tests) {
    /** @type {Array<AssertAnything>} */ const checks = [];
    let index = -1;
    while(++index < tests.length){
        checks[index] = convert(tests[index]);
    }
    return lib_castFactory(any);
    /**
   * @this {unknown}
   * @param {Array<unknown>} parameters
   * @returns {boolean}
   */ function any(...parameters) {
        let index = -1;
        while(++index < checks.length){
            if (checks[index].call(this, ...parameters)) return true;
        }
        return false;
    }
}
/**
 * Turn an object into a test for a node with a certain fields.
 *
 * @param {Props} check
 * @returns {AssertAnything}
 */ function propsFactory(check) {
    return lib_castFactory(all);
    /**
   * @param {Node} node
   * @returns {boolean}
   */ function all(node) {
        /** @type {string} */ let key;
        for(key in check){
            // @ts-expect-error: hush, it sure works as an index.
            if (node[key] !== check[key]) return false;
        }
        return true;
    }
}
/**
 * Turn a string into a test for a node with a certain type.
 *
 * @param {string} check
 * @returns {AssertAnything}
 */ function typeFactory(check) {
    return lib_castFactory(type);
    /**
   * @param {Node} node
   */ function type(node) {
        return node && node.type === check;
    }
}
/**
 * Turn a custom test into a test for a node that passes that test.
 *
 * @param {TestFunctionAnything} check
 * @returns {AssertAnything}
 */ function lib_castFactory(check) {
    return assertion;
    /**
   * @this {unknown}
   * @param {unknown} node
   * @param {Array<unknown>} parameters
   * @returns {boolean}
   */ function assertion(node, ...parameters) {
        return Boolean(node && typeof node === "object" && "type" in node && // @ts-expect-error: fine.
        Boolean(check.call(this, node, ...parameters)));
    }
}
function ok() {
    return true;
}

;// CONCATENATED MODULE: ./node_modules/unist-util-find-after/lib/index.js
/**
 * @typedef {import('unist').Node} Node
 * @typedef {import('unist').Parent} Parent
 * @typedef {import('unist-util-is').Test} Test
 */ 
/**
 * Find the first node in `parent` after another `node` or after an index,
 * that passes `test`.

 * @param parent
 *   Parent node.
 * @param index
 *   Child of `parent` or it’s index.
 * @param test
 *   `unist-util-is`-compatible test.
 * @returns
 *   Child of `parent` or `null`.
 */ const findAfter = /**
   * @type {(
   *  (<T extends Node>(node: Parent, index: Node | number, test: import('unist-util-is').PredicateTest<T>) => T | null) &
   *  ((node: Parent, index: Node | number, test?: Test) => Node | null)
   * )}
   */ /**
     * @param {Parent} parent
     * @param {Node | number} index
     * @param {Test} [test]
     * @returns {Node | null}
     */ function(parent, index, test) {
    const is = convert(test);
    if (!parent || !parent.type || !parent.children) {
        throw new Error("Expected parent node");
    }
    if (typeof index === "number") {
        if (index < 0 || index === Number.POSITIVE_INFINITY) {
            throw new Error("Expected positive finite number as index");
        }
    } else {
        index = parent.children.indexOf(index);
        if (index < 0) {
            throw new Error("Expected child node or index");
        }
    }
    while(++index < parent.children.length){
        if (is(parent.children[index], index, parent)) {
            return parent.children[index];
        }
    }
    return null;
};

;// CONCATENATED MODULE: ./node_modules/hast-util-to-text/lib/index.js
/**
 * @typedef {import('hast-util-is-element').TestFunctionAnything} TestFunctionAnything
 * @typedef {import('hast').Content} Content
 * @typedef {import('hast').Text} Text
 * @typedef {import('hast').Comment} Comment
 * @typedef {import('hast').Root} Root
 * @typedef {import('hast').Element} Element
 */ /**
 * @typedef {Content | Root} Node
 *   Any node.
 * @typedef {Extract<Node, import('unist').Parent>} Parent
 *   Any parent.
 * @typedef {'normal' | 'pre' | 'nowrap' | 'pre-wrap'} Whitespace
 *   Valid and useful whitespace values (from CSS).
 * @typedef {0 | 1 | 2} BreakNumber
 *   Specific break:
 *
 *   *   `0` — space
 *   *   `1` — line ending
 *   *   `2` — blank line
 * @typedef {'\n'} BreakForce
 *   Forced break.
 * @typedef {boolean} BreakValue
 *   Whether there was a break.
 * @typedef {BreakValue | BreakNumber | undefined} BreakBefore
 *   Any value for a break before.
 * @typedef {BreakValue | BreakNumber | BreakForce | undefined} BreakAfter
 *   Any value for a break after.
 *
 * @typedef CollectionInfo
 *   Info on current collection.
 * @property {Whitespace} whitespace
 *   Current whitespace setting.
 * @property {BreakBefore} breakBefore
 *   Whether there was a break before.
 * @property {BreakAfter} breakAfter
 *   Whether there was a break after.
 *
 * @typedef Options
 *   Configuration.
 * @property {Whitespace | null | undefined} [whitespace='normal']
 *   Initial CSS whitespace setting to use.
 */ 

const searchLineFeeds = /\n/g;
const searchTabOrSpaces = /[\t ]+/g;
const br = convertElement("br");
const p = convertElement("p");
const cell = convertElement([
    "th",
    "td"
]);
const row = convertElement("tr");
// Note that we don’t need to include void elements here as they don’t have text.
// See: <https://github.com/wooorm/html-void-elements>
const notRendered = convertElement([
    // List from: <https://html.spec.whatwg.org/#hidden-elements>
    "datalist",
    "head",
    "noembed",
    "noframes",
    "noscript",
    "rp",
    "script",
    "style",
    "template",
    "title",
    // Hidden attribute.
    lib_hidden,
    // From: <https://html.spec.whatwg.org/#flow-content-3>
    closedDialog
]);
// See: <https://html.spec.whatwg.org/#the-css-user-agent-style-sheet-and-presentational-hints>
const blockOrCaption = convertElement([
    "address",
    "article",
    "aside",
    "blockquote",
    "body",
    "caption",
    "center",
    "dd",
    "dialog",
    "dir",
    "dl",
    "dt",
    "div",
    "figure",
    "figcaption",
    "footer",
    "form,",
    "h1",
    "h2",
    "h3",
    "h4",
    "h5",
    "h6",
    "header",
    "hgroup",
    "hr",
    "html",
    "legend",
    "listing",
    "main",
    "menu",
    "nav",
    "ol",
    "p",
    "plaintext",
    "pre",
    "section",
    "ul",
    "xmp" // Flow content (legacy)
]);
/**
 * Get the plain-text value of a node.
 *
 * ###### Algorithm
 *
 * *   if `tree` is a comment, returns its `value`
 * *   if `tree` is a text, applies normal whitespace collapsing to its
 *     `value`, as defined by the CSS Text spec
 * *   if `tree` is a root or element, applies an algorithm similar to the
 *     `innerText` getter as defined by HTML
 *
 * ###### Notes
 *
 * > 👉 **Note**: the algorithm acts as if `tree` is being rendered, and as if
 * > we’re a CSS-supporting user agent, with scripting enabled.
 *
 * *   if `tree` is an element that is not displayed (such as a `head`), we’ll
 *     still use the `innerText` algorithm instead of switching to `textContent`
 * *   if descendants of `tree` are elements that are not displayed, they are
 *     ignored
 * *   CSS is not considered, except for the default user agent style sheet
 * *   a line feed is collapsed instead of ignored in cases where Fullwidth, Wide,
 *     or Halfwidth East Asian Width characters are used, the same goes for a case
 *     with Chinese, Japanese, or Yi writing systems
 * *   replaced elements (such as `audio`) are treated like non-replaced elements
 *
 * @param {Node} tree
 *   Tree to turn into text.
 * @param {Options} [options]
 *   Configuration (optional).
 * @returns {string}
 *   Serialized `tree`.
 */ function toText(tree, options = {}) {
    const children = "children" in tree ? tree.children : [];
    const block = blockOrCaption(tree);
    const whitespace = inferWhitespace(tree, {
        whitespace: options.whitespace || "normal",
        breakBefore: false,
        breakAfter: false
    });
    /** @type {Array<string | BreakNumber>} */ const results = [];
    // Treat `text` and `comment` as having normal white-space.
    // This deviates from the spec as in the DOM the node’s `.data` has to be
    // returned.
    // If you want that behavior use `hast-util-to-string`.
    // All other nodes are later handled as if they are `element`s (so the
    // algorithm also works on a `root`).
    // Nodes without children are treated as a void element, so `doctype` is thus
    // ignored.
    if (tree.type === "text" || tree.type === "comment") {
        results.push(...collectText(tree, {
            whitespace,
            breakBefore: true,
            breakAfter: true
        }));
    }
    // 1.  If this element is not being rendered, or if the user agent is a
    //     non-CSS user agent, then return the same value as the textContent IDL
    //     attribute on this element.
    //
    //     Note: we’re not supporting stylesheets so we’re acting as if the node
    //     is rendered.
    //
    //     If you want that behavior use `hast-util-to-string`.
    //     Important: we’ll have to account for this later though.
    // 2.  Let results be a new empty list.
    let index = -1;
    // 3.  For each child node node of this element:
    while(++index < children.length){
        // 3.1. Let current be the list resulting in running the inner text
        //      collection steps with node.
        //      Each item in results will either be a JavaScript string or a
        //      positive integer (a required line break count).
        // 3.2. For each item item in current, append item to results.
        results.push(// @ts-expect-error Looks like a parent.
        ...innerTextCollection(children[index], tree, {
            whitespace,
            breakBefore: index ? undefined : block,
            breakAfter: index < children.length - 1 ? br(children[index + 1]) : block
        }));
    }
    // 4.  Remove any items from results that are the empty string.
    // 5.  Remove any runs of consecutive required line break count items at the
    //     start or end of results.
    // 6.  Replace each remaining run of consecutive required line break count
    //     items with a string consisting of as many U+000A LINE FEED (LF)
    //     characters as the maximum of the values in the required line break
    //     count items.
    /** @type {Array<string>} */ const result = [];
    /** @type {number | undefined} */ let count;
    index = -1;
    while(++index < results.length){
        const value = results[index];
        if (typeof value === "number") {
            if (count !== undefined && value > count) count = value;
        } else if (value) {
            if (count !== undefined && count > -1) {
                result.push("\n".repeat(count) || " ");
            }
            count = -1;
            result.push(value);
        }
    }
    // 7.  Return the concatenation of the string items in results.
    return result.join("");
}
/**
 * <https://html.spec.whatwg.org/#inner-text-collection-steps>
 *
 * @param {Node} node
 * @param {Parent} parent
 * @param {CollectionInfo} info
 * @returns {Array<string | BreakNumber>}
 */ function innerTextCollection(node, parent, info) {
    if (node.type === "element") {
        return collectElement(node, parent, info);
    }
    if (node.type === "text") {
        return info.whitespace === "normal" ? collectText(node, info) : collectPreText(node);
    }
    return [];
}
/**
 * Collect an element.
 *
 * @param {Element} node
 *   Element node.
 * @param {Parent} parent
 * @param {CollectionInfo} info
 *   Info on current collection.
 * @returns {Array<string | BreakNumber>}
 */ function collectElement(node, parent, info) {
    // First we infer the `white-space` property.
    const whitespace = inferWhitespace(node, info);
    const children = node.children || [];
    let index = -1;
    /** @type {Array<string | BreakNumber>} */ let items = [];
    // We’re ignoring point 3, and exiting without any content here, because we
    // deviated from the spec in `toText` at step 3.
    if (notRendered(node)) {
        return items;
    }
    /** @type {BreakNumber | undefined} */ let prefix;
    /** @type {BreakNumber | BreakForce | undefined} */ let suffix;
    // Note: we first detect if there is going to be a break before or after the
    // contents, as that changes the white-space handling.
    // 2.  If node’s computed value of `visibility` is not `visible`, then return
    //     items.
    //
    //     Note: Ignored, as everything is visible by default user agent styles.
    // 3.  If node is not being rendered, then return items. [...]
    //
    //     Note: We already did this above.
    // See `collectText` for step 4.
    // 5.  If node is a `<br>` element, then append a string containing a single
    //     U+000A LINE FEED (LF) character to items.
    if (br(node)) {
        suffix = "\n";
    } else if (row(node) && findAfter(parent, node, row)) {
        suffix = "\n";
    } else if (p(node)) {
        prefix = 2;
        suffix = 2;
    } else if (blockOrCaption(node)) {
        prefix = 1;
        suffix = 1;
    }
    // 1.  Let items be the result of running the inner text collection steps with
    //     each child node of node in tree order, and then concatenating the
    //     results to a single list.
    while(++index < children.length){
        items = items.concat(innerTextCollection(children[index], node, {
            whitespace,
            breakBefore: index ? undefined : prefix,
            breakAfter: index < children.length - 1 ? br(children[index + 1]) : suffix
        }));
    }
    // 6.  If node’s computed value of `display` is `table-cell`, and node’s CSS
    //     box is not the last `table-cell` box of its enclosing `table-row` box,
    //     then append a string containing a single U+0009 CHARACTER TABULATION
    //     (tab) character to items.
    //
    //     See: <https://html.spec.whatwg.org/#tables-2>
    if (cell(node) && findAfter(parent, node, cell)) {
        items.push("	");
    }
    // Add the pre- and suffix.
    if (prefix) items.unshift(prefix);
    if (suffix) items.push(suffix);
    return items;
}
/**
 * 4.  If node is a Text node, then for each CSS text box produced by node,
 *     in content order, compute the text of the box after application of the
 *     CSS `white-space` processing rules and `text-transform` rules, set
 *     items to the list of the resulting strings, and return items.
 *     The CSS `white-space` processing rules are slightly modified:
 *     collapsible spaces at the end of lines are always collapsed, but they
 *     are only removed if the line is the last line of the block, or it ends
 *     with a br element.
 *     Soft hyphens should be preserved.
 *
 *     Note: See `collectText` and `collectPreText`.
 *     Note: we don’t deal with `text-transform`, no element has that by
 *     default.
 *
 * See: <https://drafts.csswg.org/css-text/#white-space-phase-1>
 *
 * @param {Text | Comment} node
 *   Text node.
 * @param {CollectionInfo} info
 *   Info on current collection.
 * @returns {Array<string | BreakNumber>}
 *   Result.
 */ function collectText(node, info) {
    const value = String(node.value);
    /** @type {Array<string>} */ const lines = [];
    /** @type {Array<string | BreakNumber>} */ const result = [];
    let start = 0;
    while(start <= value.length){
        searchLineFeeds.lastIndex = start;
        const match = searchLineFeeds.exec(value);
        const end = match && "index" in match ? match.index : value.length;
        lines.push(// Any sequence of collapsible spaces and tabs immediately preceding or
        // following a segment break is removed.
        trimAndCollapseSpacesAndTabs(// […] ignoring bidi formatting characters (characters with the
        // Bidi_Control property [UAX9]: ALM, LTR, RTL, LRE-RLO, LRI-PDI) as if
        // they were not there.
        value.slice(start, end).replace(/[\u061C\u200E\u200F\u202A-\u202E\u2066-\u2069]/g, ""), start === 0 ? info.breakBefore : true, end === value.length ? info.breakAfter : true));
        start = end + 1;
    }
    // Collapsible segment breaks are transformed for rendering according to the
    // segment break transformation rules.
    // So here we jump to 4.1.2 of [CSSTEXT]:
    // Any collapsible segment break immediately following another collapsible
    // segment break is removed
    let index = -1;
    /** @type {BreakNumber | undefined} */ let join;
    while(++index < lines.length){
        // *   If the character immediately before or immediately after the segment
        //     break is the zero-width space character (U+200B), then the break is
        //     removed, leaving behind the zero-width space.
        if (lines[index].charCodeAt(lines[index].length - 1) === 0x200b /* ZWSP */  || index < lines.length - 1 && lines[index + 1].charCodeAt(0) === 0x200b) {
            result.push(lines[index]);
            join = undefined;
        } else if (lines[index]) {
            if (typeof join === "number") result.push(join);
            result.push(lines[index]);
            join = 0;
        } else if (index === 0 || index === lines.length - 1) {
            // If this line is empty, and it’s the first or last, add a space.
            // Note that this function is only called in normal whitespace, so we
            // don’t worry about `pre`.
            result.push(0);
        }
    }
    return result;
}
/**
 * Collect a text node as “pre” whitespace.
 *
 * @param {Text} node
 *   Text node.
 * @returns {Array<string | BreakNumber>}
 *   Result.
 */ function collectPreText(node) {
    return [
        String(node.value)
    ];
}
/**
 * 3.  Every collapsible tab is converted to a collapsible space (U+0020).
 * 4.  Any collapsible space immediately following another collapsible
 *     space—even one outside the boundary of the inline containing that
 *     space, provided both spaces are within the same inline formatting
 *     context—is collapsed to have zero advance width. (It is invisible,
 *     but retains its soft wrap opportunity, if any.)
 *
 * @param {string} value
 *   Value to collapse.
 * @param {BreakBefore} breakBefore
 *   Whether there was a break before.
 * @param {BreakAfter} breakAfter
 *   Whether there was a break after.
 * @returns {string}
 *   Result.
 */ function trimAndCollapseSpacesAndTabs(value, breakBefore, breakAfter) {
    /** @type {Array<string>} */ const result = [];
    let start = 0;
    /** @type {number | undefined} */ let end;
    while(start < value.length){
        searchTabOrSpaces.lastIndex = start;
        const match = searchTabOrSpaces.exec(value);
        end = match ? match.index : value.length;
        // If we’re not directly after a segment break, but there was white space,
        // add an empty value that will be turned into a space.
        if (!start && !end && match && !breakBefore) {
            result.push("");
        }
        if (start !== end) {
            result.push(value.slice(start, end));
        }
        start = match ? end + match[0].length : end;
    }
    // If we reached the end, there was trailing white space, and there’s no
    // segment break after this node, add an empty value that will be turned
    // into a space.
    if (start !== end && !breakAfter) {
        result.push("");
    }
    return result.join(" ");
}
/**
 * Figure out the whitespace of a node.
 *
 * We don’t support void elements here (so `nobr wbr` -> `normal` is ignored).
 *
 * @param {Node} node
 *   Node (typically `Element`).
 * @param {CollectionInfo} info
 *   Info on current collection.
 * @returns {Whitespace}
 *   Applied whitespace.
 */ function inferWhitespace(node, info) {
    if (node.type === "element") {
        const props = node.properties || {};
        switch(node.tagName){
            case "listing":
            case "plaintext":
            case "xmp":
                {
                    return "pre";
                }
            case "nobr":
                {
                    return "nowrap";
                }
            case "pre":
                {
                    return props.wrap ? "pre-wrap" : "pre";
                }
            case "td":
            case "th":
                {
                    return props.noWrap ? "nowrap" : info.whitespace;
                }
            case "textarea":
                {
                    return "pre-wrap";
                }
            default:
        }
    }
    return info.whitespace;
}
/** @type {TestFunctionAnything} */ function lib_hidden(node) {
    return Boolean((node.properties || {}).hidden);
}
/** @type {TestFunctionAnything} */ function closedDialog(node) {
    return node.tagName === "dialog" && !(node.properties || {}).open;
}

;// CONCATENATED MODULE: ./node_modules/unist-util-visit-parents/lib/color.js
/**
 * @param {string} d
 * @returns {string}
 */ function color(d) {
    return "\x1b[33m" + d + "\x1b[39m";
}

;// CONCATENATED MODULE: ./node_modules/unist-util-visit-parents/lib/index.js
/**
 * @typedef {import('unist').Node} Node
 * @typedef {import('unist').Parent} Parent
 * @typedef {import('unist-util-is').Test} Test
 */ /**
 * @typedef {boolean | 'skip'} Action
 *   Union of the action types.
 *
 * @typedef {number} Index
 *   Move to the sibling at `index` next (after node itself is completely
 *   traversed).
 *
 *   Useful if mutating the tree, such as removing the node the visitor is
 *   currently on, or any of its previous siblings.
 *   Results less than 0 or greater than or equal to `children.length` stop
 *   traversing the parent.
 *
 * @typedef {[(Action | null | undefined | void)?, (Index | null | undefined)?]} ActionTuple
 *   List with one or two values, the first an action, the second an index.
 *
 * @typedef {Action | ActionTuple | Index | null | undefined | void} VisitorResult
 *   Any value that can be returned from a visitor.
 */ /**
 * @template {Node} [Visited=Node]
 *   Visited node type.
 * @template {Parent} [Ancestor=Parent]
 *   Ancestor type.
 * @callback Visitor
 *   Handle a node (matching `test`, if given).
 *
 *   Visitors are free to transform `node`.
 *   They can also transform the parent of node (the last of `ancestors`).
 *
 *   Replacing `node` itself, if `SKIP` is not returned, still causes its
 *   descendants to be walked (which is a bug).
 *
 *   When adding or removing previous siblings of `node` (or next siblings, in
 *   case of reverse), the `Visitor` should return a new `Index` to specify the
 *   sibling to traverse after `node` is traversed.
 *   Adding or removing next siblings of `node` (or previous siblings, in case
 *   of reverse) is handled as expected without needing to return a new `Index`.
 *
 *   Removing the children property of an ancestor still results in them being
 *   traversed.
 * @param {Visited} node
 *   Found node.
 * @param {Array<Ancestor>} ancestors
 *   Ancestors of `node`.
 * @returns {VisitorResult}
 *   What to do next.
 *
 *   An `Index` is treated as a tuple of `[CONTINUE, Index]`.
 *   An `Action` is treated as a tuple of `[Action]`.
 *
 *   Passing a tuple back only makes sense if the `Action` is `SKIP`.
 *   When the `Action` is `EXIT`, that action can be returned.
 *   When the `Action` is `CONTINUE`, `Index` can be returned.
 */ /**
 * @template {Node} [Tree=Node]
 *   Tree type.
 * @template {Test} [Check=string]
 *   Test type.
 * @typedef {Visitor<import('./complex-types.js').Matches<import('./complex-types.js').InclusiveDescendant<Tree>, Check>, Extract<import('./complex-types.js').InclusiveDescendant<Tree>, Parent>>} BuildVisitor
 *   Build a typed `Visitor` function from a tree and a test.
 *
 *   It will infer which values are passed as `node` and which as `parents`.
 */ 

/**
 * Continue traversing as normal.
 */ const CONTINUE = true;
/**
 * Stop traversing immediately.
 */ const EXIT = false;
/**
 * Do not traverse this node’s children.
 */ const SKIP = "skip";
/**
 * Visit nodes, with ancestral information.
 *
 * This algorithm performs *depth-first* *tree traversal* in *preorder*
 * (**NLR**) or if `reverse` is given, in *reverse preorder* (**NRL**).
 *
 * You can choose for which nodes `visitor` is called by passing a `test`.
 * For complex tests, you should test yourself in `visitor`, as it will be
 * faster and will have improved type information.
 *
 * Walking the tree is an intensive task.
 * Make use of the return values of the visitor when possible.
 * Instead of walking a tree multiple times, walk it once, use `unist-util-is`
 * to check if a node matches, and then perform different operations.
 *
 * You can change the tree.
 * See `Visitor` for more info.
 *
 * @param tree
 *   Tree to traverse.
 * @param test
 *   `unist-util-is`-compatible test
 * @param visitor
 *   Handle each node.
 * @param reverse
 *   Traverse in reverse preorder (NRL) instead of the default preorder (NLR).
 * @returns
 *   Nothing.
 */ const visitParents = /**
   * @type {(
   *   (<Tree extends Node, Check extends Test>(tree: Tree, test: Check, visitor: BuildVisitor<Tree, Check>, reverse?: boolean | null | undefined) => void) &
   *   (<Tree extends Node>(tree: Tree, visitor: BuildVisitor<Tree>, reverse?: boolean | null | undefined) => void)
   * )}
   */ /**
     * @param {Node} tree
     * @param {Test} test
     * @param {Visitor<Node>} visitor
     * @param {boolean | null | undefined} [reverse]
     * @returns {void}
     */ function(tree, test, visitor, reverse) {
    if (typeof test === "function" && typeof visitor !== "function") {
        reverse = visitor;
        // @ts-expect-error no visitor given, so `visitor` is test.
        visitor = test;
        test = null;
    }
    const is = convert(test);
    const step = reverse ? -1 : 1;
    factory(tree, undefined, [])();
    /**
       * @param {Node} node
       * @param {number | undefined} index
       * @param {Array<Parent>} parents
       */ function factory(node, index, parents) {
        /** @type {Record<string, unknown>} */ // @ts-expect-error: hush
        const value = node && typeof node === "object" ? node : {};
        if (typeof value.type === "string") {
            const name = // `hast`
            typeof value.tagName === "string" ? value.tagName : typeof value.name === "string" ? value.name : undefined;
            Object.defineProperty(visit, "name", {
                value: "node (" + color(node.type + (name ? "<" + name + ">" : "")) + ")"
            });
        }
        return visit;
        function visit() {
            /** @type {ActionTuple} */ let result = [];
            /** @type {ActionTuple} */ let subresult;
            /** @type {number} */ let offset;
            /** @type {Array<Parent>} */ let grandparents;
            if (!test || is(node, index, parents[parents.length - 1] || null)) {
                result = toResult(visitor(node, parents));
                if (result[0] === EXIT) {
                    return result;
                }
            }
            // @ts-expect-error looks like a parent.
            if (node.children && result[0] !== SKIP) {
                // @ts-expect-error looks like a parent.
                offset = (reverse ? node.children.length : -1) + step;
                // @ts-expect-error looks like a parent.
                grandparents = parents.concat(node);
                // @ts-expect-error looks like a parent.
                while(offset > -1 && offset < node.children.length){
                    // @ts-expect-error looks like a parent.
                    subresult = factory(node.children[offset], offset, grandparents)();
                    if (subresult[0] === EXIT) {
                        return subresult;
                    }
                    offset = typeof subresult[1] === "number" ? subresult[1] : offset + step;
                }
            }
            return result;
        }
    }
};
/**
 * Turn a return value into a clean result.
 *
 * @param {VisitorResult} value
 *   Valid return values from visitors.
 * @returns {ActionTuple}
 *   Clean result.
 */ function toResult(value) {
    if (Array.isArray(value)) {
        return value;
    }
    if (typeof value === "number") {
        return [
            CONTINUE,
            value
        ];
    }
    return [
        value
    ];
}

;// CONCATENATED MODULE: ./node_modules/unist-util-visit/lib/index.js
/**
 * @typedef {import('unist').Node} Node
 * @typedef {import('unist').Parent} Parent
 * @typedef {import('unist-util-is').Test} Test
 * @typedef {import('unist-util-visit-parents').VisitorResult} VisitorResult
 */ /**
 * Check if `Child` can be a child of `Ancestor`.
 *
 * Returns the ancestor when `Child` can be a child of `Ancestor`, or returns
 * `never`.
 *
 * @template {Node} Ancestor
 *   Node type.
 * @template {Node} Child
 *   Node type.
 * @typedef {(
 *   Ancestor extends Parent
 *     ? Child extends Ancestor['children'][number]
 *       ? Ancestor
 *       : never
 *     : never
 * )} ParentsOf
 */ /**
 * @template {Node} [Visited=Node]
 *   Visited node type.
 * @template {Parent} [Ancestor=Parent]
 *   Ancestor type.
 * @callback Visitor
 *   Handle a node (matching `test`, if given).
 *
 *   Visitors are free to transform `node`.
 *   They can also transform `parent`.
 *
 *   Replacing `node` itself, if `SKIP` is not returned, still causes its
 *   descendants to be walked (which is a bug).
 *
 *   When adding or removing previous siblings of `node` (or next siblings, in
 *   case of reverse), the `Visitor` should return a new `Index` to specify the
 *   sibling to traverse after `node` is traversed.
 *   Adding or removing next siblings of `node` (or previous siblings, in case
 *   of reverse) is handled as expected without needing to return a new `Index`.
 *
 *   Removing the children property of `parent` still results in them being
 *   traversed.
 * @param {Visited} node
 *   Found node.
 * @param {Visited extends Node ? number | null : never} index
 *   Index of `node` in `parent`.
 * @param {Ancestor extends Node ? Ancestor | null : never} parent
 *   Parent of `node`.
 * @returns {VisitorResult}
 *   What to do next.
 *
 *   An `Index` is treated as a tuple of `[CONTINUE, Index]`.
 *   An `Action` is treated as a tuple of `[Action]`.
 *
 *   Passing a tuple back only makes sense if the `Action` is `SKIP`.
 *   When the `Action` is `EXIT`, that action can be returned.
 *   When the `Action` is `CONTINUE`, `Index` can be returned.
 */ /**
 * Build a typed `Visitor` function from a node and all possible parents.
 *
 * It will infer which values are passed as `node` and which as `parent`.
 *
 * @template {Node} Visited
 *   Node type.
 * @template {Parent} Ancestor
 *   Parent type.
 * @typedef {Visitor<Visited, ParentsOf<Ancestor, Visited>>} BuildVisitorFromMatch
 */ /**
 * Build a typed `Visitor` function from a list of descendants and a test.
 *
 * It will infer which values are passed as `node` and which as `parent`.
 *
 * @template {Node} Descendant
 *   Node type.
 * @template {Test} Check
 *   Test type.
 * @typedef {(
 *   BuildVisitorFromMatch<
 *     import('unist-util-visit-parents/complex-types.js').Matches<Descendant, Check>,
 *     Extract<Descendant, Parent>
 *   >
 * )} BuildVisitorFromDescendants
 */ /**
 * Build a typed `Visitor` function from a tree and a test.
 *
 * It will infer which values are passed as `node` and which as `parent`.
 *
 * @template {Node} [Tree=Node]
 *   Node type.
 * @template {Test} [Check=string]
 *   Test type.
 * @typedef {(
 *   BuildVisitorFromDescendants<
 *     import('unist-util-visit-parents/complex-types.js').InclusiveDescendant<Tree>,
 *     Check
 *   >
 * )} BuildVisitor
 */ 
/**
 * Visit nodes.
 *
 * This algorithm performs *depth-first* *tree traversal* in *preorder*
 * (**NLR**) or if `reverse` is given, in *reverse preorder* (**NRL**).
 *
 * You can choose for which nodes `visitor` is called by passing a `test`.
 * For complex tests, you should test yourself in `visitor`, as it will be
 * faster and will have improved type information.
 *
 * Walking the tree is an intensive task.
 * Make use of the return values of the visitor when possible.
 * Instead of walking a tree multiple times, walk it once, use `unist-util-is`
 * to check if a node matches, and then perform different operations.
 *
 * You can change the tree.
 * See `Visitor` for more info.
 *
 * @param tree
 *   Tree to traverse.
 * @param test
 *   `unist-util-is`-compatible test
 * @param visitor
 *   Handle each node.
 * @param reverse
 *   Traverse in reverse preorder (NRL) instead of the default preorder (NLR).
 * @returns
 *   Nothing.
 */ const visit = /**
   * @type {(
   *   (<Tree extends Node, Check extends Test>(tree: Tree, test: Check, visitor: BuildVisitor<Tree, Check>, reverse?: boolean | null | undefined) => void) &
   *   (<Tree extends Node>(tree: Tree, visitor: BuildVisitor<Tree>, reverse?: boolean | null | undefined) => void)
   * )}
   */ /**
     * @param {Node} tree
     * @param {Test} test
     * @param {Visitor} visitor
     * @param {boolean | null | undefined} [reverse]
     * @returns {void}
     */ function(tree, test, visitor, reverse) {
    if (typeof test === "function" && typeof visitor !== "function") {
        reverse = visitor;
        visitor = test;
        test = null;
    }
    visitParents(tree, test, overload, reverse);
    /**
       * @param {Node} node
       * @param {Array<Parent>} parents
       */ function overload(node, parents) {
        const parent = parents[parents.length - 1];
        return visitor(node, parent ? parent.children.indexOf(node) : null, parent);
    }
};


;// CONCATENATED MODULE: ./node_modules/rehype-highlight/lib/index.js
/**
 * @typedef {import('lowlight').Root} LowlightRoot
 * @typedef {import('lowlight/lib/core.js').HighlightSyntax} HighlightSyntax
 * @typedef {import('hast').Root} Root
 * @typedef {import('hast').Element} Element
 * @typedef {Root|Root['children'][number]} Node
 *
 * @typedef Options
 *   Configuration (optional).
 * @property {string} [prefix='hljs-']
 *   Prefix to use before classes.
 * @property {boolean} [detect=false]
 *   Whether to detect the programming language on code without a language
 *   class.
 * @property {Array<string>} [subset]
 *   Scope of languages to check when auto-detecting (default: all languages).
 * @property {boolean} [ignoreMissing=false]
 *   Swallow errors for missing languages.
 *   By default, unregistered syntaxes throw an error when they are used.
 *   Pass `true` to swallow those errors and thus ignore code with unknown code
 *   languages.
 * @property {Array<string>} [plainText=[]]
 *   List of plain-text languages.
 *   Pass any languages you would like to be kept as plain-text instead of
 *   getting highlighted.
 * @property {Record<string, string|Array<string>>} [aliases={}]
 *   Register more aliases.
 *   Passed to `lowlight.registerAlias`.
 * @property {Record<string, HighlightSyntax>} [languages={}]
 *   Register more languages.
 *   Each key/value pair passed as arguments to `lowlight.registerLanguage`.
 */ 


const lib_own = {}.hasOwnProperty;
/**
 * Plugin to highlight the syntax of code with lowlight (`highlight.js`).
 *
 * @type {import('unified').Plugin<[Options?] | Array<void>, Root>}
 */ function rehypeHighlight(options = {}) {
    const { aliases, languages, prefix, plainText, ignoreMissing, subset, detect } = options;
    let name = "hljs";
    if (aliases) {
        lowlight.registerAlias(aliases);
    }
    if (languages) {
        /** @type {string} */ let key;
        for(key in languages){
            if (lib_own.call(languages, key)) {
                lowlight.registerLanguage(key, languages[key]);
            }
        }
    }
    if (prefix) {
        const pos = prefix.indexOf("-");
        name = pos > -1 ? prefix.slice(0, pos) : prefix;
    }
    return (tree, file)=>{
        // eslint-disable-next-line complexity
        visit(tree, "element", (node, _, givenParent)=>{
            const parent = /** @type {Node?} */ givenParent;
            if (!parent || !("tagName" in parent) || parent.tagName !== "pre" || node.tagName !== "code" || !node.properties) {
                return;
            }
            const lang = language(node);
            if (lang === false || !lang && !detect || lang && plainText && plainText.includes(lang)) {
                return;
            }
            if (!Array.isArray(node.properties.className)) {
                node.properties.className = [];
            }
            if (!node.properties.className.includes(name)) {
                node.properties.className.unshift(name);
            }
            /** @type {LowlightRoot} */ let result;
            try {
                result = lang ? lowlight.highlight(lang, toText(parent), {
                    prefix
                }) : lowlight.highlightAuto(toText(parent), {
                    prefix,
                    subset
                });
            } catch (error) {
                const exception = /** @type {Error} */ error;
                if (!ignoreMissing || !/Unknown language/.test(exception.message)) {
                    file.fail(exception, node, "rehype-highlight:missing-language");
                }
                return;
            }
            if (!lang && result.data.language) {
                node.properties.className.push("language-" + result.data.language);
            }
            if (Array.isArray(result.children) && result.children.length > 0) {
                node.children = result.children;
            }
        });
    };
}
/**
 * Get the programming language of `node`.
 *
 * @param {Element} node
 * @returns {false|string|undefined}
 */ function language(node) {
    const className = node.properties && node.properties.className;
    let index = -1;
    if (!Array.isArray(className)) {
        return;
    }
    while(++index < className.length){
        const value = String(className[index]);
        if (value === "no-highlight" || value === "nohighlight") {
            return false;
        }
        if (value.slice(0, 5) === "lang-") {
            return value.slice(5);
        }
        if (value.slice(0, 9) === "language-") {
            return value.slice(9);
        }
    }
}


/***/ })

};
;