﻿/*
 Highcharts JS v2.2.5 (2012-06-08)

 (c) 2009-2011 Torstein H?nsi

 License: www.highcharts.com/license
*/
(function () {
    function u(a, b) { var c; a || (a = {}); for (c in b) a[c] = b[c]; return a } function la() { for (var a = 0, b = arguments, c = b.length, d = {}; a < c; a++) d[b[a++]] = b[a]; return d } function w(a, b) { return parseInt(a, b || 10) } function ra(a) { return typeof a === "string" } function aa(a) { return typeof a === "object" } function Ja(a) { return Object.prototype.toString.call(a) === "[object Array]" } function Ka(a) { return typeof a === "number" } function ma(a) { return L.log(a) / L.LN10 } function ba(a) { return L.pow(10, a) } function za(a, b) {
        for (var c =
        a.length; c--;) if (a[c] === b) { a.splice(c, 1); break }
    } function s(a) { return a !== A && a !== null } function z(a, b, c) { var d, e; if (ra(b)) s(c) ? a.setAttribute(b, c) : a && a.getAttribute && (e = a.getAttribute(b)); else if (s(b) && aa(b)) for (d in b) a.setAttribute(d, b[d]); return e } function na(a) { return Ja(a) ? a : [a] } function o() { var a = arguments, b, c, d = a.length; for (b = 0; b < d; b++) if (c = a[b], typeof c !== "undefined" && c !== null) return c } function F(a, b) { if (La && b && b.opacity !== A) b.filter = "alpha(opacity=" + b.opacity * 100 + ")"; u(a.style, b) } function S(a,
    b, c, d, e) { a = B.createElement(a); b && u(a, b); e && F(a, { padding: 0, border: U, margin: 0 }); c && F(a, c); d && d.appendChild(a); return a } function ca(a, b) { var c = function () { }; c.prototype = new a; u(c.prototype, b); return c } function Xa(a, b, c, d) {
        var e = V.lang, f = a; b === -1 ? (b = (a || 0).toString(), a = b.indexOf(".") > -1 ? b.split(".")[1].length : 0) : a = isNaN(b = M(b)) ? 2 : b; var b = a, c = c === void 0 ? e.decimalPoint : c, d = d === void 0 ? e.thousandsSep : d, e = f < 0 ? "-" : "", a = String(w(f = M(+f || 0).toFixed(b))), g = a.length > 3 ? a.length % 3 : 0; return e + (g ? a.substr(0, g) + d : "") +
        a.substr(g).replace(/(\d{3})(?=\d)/g, "$1" + d) + (b ? c + M(f - a).toFixed(b).slice(2) : "")
    } function sa(a, b) { return Array((b || 2) + 1 - String(a).length).join(0) + a } function gb(a, b, c, d) { var e, c = o(c, 1); e = a / c; b || (b = [1, 2, 2.5, 5, 10], d && d.allowDecimals === !1 && (c === 1 ? b = [1, 2, 5, 10] : c <= 0.1 && (b = [1 / c]))); for (d = 0; d < b.length; d++) if (a = b[d], e <= (b[d] + (b[d + 1] || b[d])) / 2) break; a *= c; return a } function Ob(a, b) {
        var c = b || [[vb, [1, 2, 5, 10, 20, 25, 50, 100, 200, 500]], [hb, [1, 2, 5, 10, 15, 30]], [Ya, [1, 2, 5, 10, 15, 30]], [Ma, [1, 2, 3, 4, 6, 8, 12]], [oa, [1, 2]], [Za,
        [1, 2]], [Na, [1, 2, 3, 4, 6]], [ta, null]], d = c[c.length - 1], e = D[d[0]], f = d[1], g; for (g = 0; g < c.length; g++) if (d = c[g], e = D[d[0]], f = d[1], c[g + 1] && a <= (e * f[f.length - 1] + D[c[g + 1][0]]) / 2) break; e === D[ta] && a < 5 * e && (f = [1, 2, 5]); e === D[ta] && a < 5 * e && (f = [1, 2, 5]); c = gb(a / e, f); return { unitRange: e, count: c, unitName: d[0] }
    } function Pb(a, b, c, d) {
        var e = [], f = {}, g = V.global.useUTC, h, i = new Date(b), b = a.unitRange, j = a.count; b >= D[hb] && (i.setMilliseconds(0), i.setSeconds(b >= D[Ya] ? 0 : j * W(i.getSeconds() / j))); if (b >= D[Ya]) i[wb](b >= D[Ma] ? 0 : j * W(i[ib]() / j));
        if (b >= D[Ma]) i[xb](b >= D[oa] ? 0 : j * W(i[jb]() / j)); if (b >= D[oa]) i[kb](b >= D[Na] ? 1 : j * W(i[Oa]() / j)); b >= D[Na] && (i[yb](b >= D[ta] ? 0 : j * W(i[$a]() / j)), h = i[ab]()); b >= D[ta] && (h -= h % j, i[zb](h)); if (b === D[Za]) i[kb](i[Oa]() - i[lb]() + o(d, 1)); d = 1; h = i[ab](); for (var k = i.getTime(), l = i[$a](), m = i[Oa](), i = g ? 0 : (864E5 + i.getTimezoneOffset() * 6E4) % 864E5; k < c;) e.push(k), b === D[ta] ? k = bb(h + d * j, 0) : b === D[Na] ? k = bb(h, l + d * j) : !g && (b === D[oa] || b === D[Za]) ? k = bb(h, l, m + d * j * (b === D[oa] ? 1 : 7)) : (k += b * j, b <= D[Ma] && k % D[oa] === i && (f[k] = oa)), d++; e.push(k); e.info =
        u(a, { higherRanks: f, totalRange: b * j }); return e
    } function Ab() { this.symbol = this.color = 0 } function Qb(a, b) { var c = a.length, d, e; for (e = 0; e < c; e++) a[e].ss_i = e; a.sort(function (a, c) { d = b(a, c); return d === 0 ? a.ss_i - c.ss_i : d }); for (e = 0; e < c; e++) delete a[e].ss_i } function Pa(a) { for (var b = a.length, c = a[0]; b--;) a[b] < c && (c = a[b]); return c } function Aa(a) { for (var b = a.length, c = a[0]; b--;) a[b] > c && (c = a[b]); return c } function Ba(a, b) { for (var c in a) a[c] && a[c] !== b && a[c].destroy && a[c].destroy(), delete a[c] } function Qa(a) {
        cb || (cb = S(ia));
        a && cb.appendChild(a); cb.innerHTML = ""
    } function mb(a, b) { var c = "Highcharts error #" + a + ": www.highcharts.com/errors/" + a; if (b) throw c; else N.console && console.log(c) } function ja(a) { return parseFloat(a.toPrecision(14)) } function ua(a, b) { Ra = o(a, b.animation) } function Bb() {
        var a = V.global.useUTC, b = a ? "getUTC" : "get", c = a ? "setUTC" : "set"; bb = a ? Date.UTC : function (a, b, c, g, h, i) { return (new Date(a, b, o(c, 1), o(g, 0), o(h, 0), o(i, 0))).getTime() }; ib = b + "Minutes"; jb = b + "Hours"; lb = b + "Day"; Oa = b + "Date"; $a = b + "Month"; ab = b + "FullYear"; wb =
        c + "Minutes"; xb = c + "Hours"; kb = c + "Date"; yb = c + "Month"; zb = c + "FullYear"
    } function va() { } function Sa(a, b, c) { this.axis = a; this.pos = b; this.type = c || ""; this.isNew = !0; c || this.addLabel() } function nb(a, b) { this.axis = a; if (b) this.options = b, this.id = b.id; return this } function Cb(a, b, c, d, e) {
        var f = a.chart.inverted; this.axis = a; this.isNegative = c; this.options = b; this.x = d; this.stack = e; this.alignOptions = {
            align: b.align || (f ? c ? "left" : "right" : "center"), verticalAlign: b.verticalAlign || (f ? "middle" : c ? "bottom" : "top"), y: o(b.y, f ? 4 : c ? 14 :
            -6), x: o(b.x, f ? c ? -6 : 6 : 0)
        }; this.textAlign = b.textAlign || (f ? c ? "right" : "left" : "center")
    } function ob() { this.init.apply(this, arguments) } function pb(a, b) {
        var c = b.borderWidth, d = b.style, e = b.shared, f = w(d.padding); this.chart = a; this.options = b; d.padding = 0; this.crosshairs = []; this.currentY = this.currentX = 0; this.tooltipIsHidden = !0; this.label = a.renderer.label("", 0, 0, null, null, null, b.useHTML, null, "tooltip").attr({ padding: f, fill: b.backgroundColor, "stroke-width": c, r: b.borderRadius, zIndex: 8 }).css(d).hide().add(); ga || this.label.shadow(b.shadow);
        this.shared = e
    } function Db(a, b) { var c = ga ? "" : b.chart.zoomType; this.zoomX = /x/.test(c); this.zoomY = /y/.test(c); this.options = b; this.chart = a; this.init(a, b.tooltip) } function qb(a) { this.init(a) } function rb(a, b) {
        var c, d = a.series; a.series = null; c = C(V, a); c.series = a.series = d; var d = c.chart, e = d.margin, e = aa(e) ? e : [e, e, e, e]; this.optionsMarginTop = o(d.marginTop, e[0]); this.optionsMarginRight = o(d.marginRight, e[1]); this.optionsMarginBottom = o(d.marginBottom, e[2]); this.optionsMarginLeft = o(d.marginLeft, e[3]); this.runChartClick =
        (e = d.events) && !!e.click; this.callback = b; this.isResizing = 0; this.options = c; this.axes = []; this.series = []; this.hasCartesianSeries = d.showAxes; this.init(e)
    } var A, B = document, N = window, L = Math, t = L.round, W = L.floor, wa = L.ceil, x = L.max, O = L.min, M = L.abs, X = L.cos, da = L.sin, xa = L.PI, Eb = xa * 2 / 360, ya = navigator.userAgent, La = /msie/i.test(ya) && !N.opera, Ca = B.documentMode === 8, Fb = /AppleWebKit/.test(ya), Gb = /Firefox/.test(ya), Da = !!B.createElementNS && !!B.createElementNS("http://www.w3.org/2000/svg", "svg").createSVGRect, Rb = Gb && parseInt(ya.split("Firefox/")[1],
    10) < 4, ga = !Da && !La && !!B.createElement("canvas").getContext, Ta, ea = B.documentElement.ontouchstart !== A, Hb = {}, sb = 0, cb, V, db, Ra, Ua, D, Sb = function () { }, ia = "div", U = "none", tb = "rgba(192,192,192," + (Da ? 1.0E-6 : 0.0020) + ")", vb = "millisecond", hb = "second", Ya = "minute", Ma = "hour", oa = "day", Za = "week", Na = "month", ta = "year", bb, ib, jb, lb, Oa, $a, ab, wb, xb, kb, yb, zb, Y = {}; N.Highcharts = {}; db = function (a, b, c) {
        if (!s(b) || isNaN(b)) return "Invalid date"; var a = o(a, "%Y-%m-%d %H:%M:%S"), d = new Date(b), e, f = d[jb](), g = d[lb](), h = d[Oa](), i = d[$a](), j =
        d[ab](), k = V.lang, l = k.weekdays, b = { a: l[g].substr(0, 3), A: l[g], d: sa(h), e: h, b: k.shortMonths[i], B: k.months[i], m: sa(i + 1), y: j.toString().substr(2, 2), Y: j, H: sa(f), I: sa(f % 12 || 12), l: f % 12 || 12, M: sa(d[ib]()), p: f < 12 ? "AM" : "PM", P: f < 12 ? "am" : "pm", S: sa(d.getSeconds()), L: sa(t(b % 1E3), 3) }; for (e in b) a = a.replace("%" + e, b[e]); return c ? a.substr(0, 1).toUpperCase() + a.substr(1) : a
    }; Ab.prototype = { wrapColor: function (a) { if (this.color >= a) this.color = 0 }, wrapSymbol: function (a) { if (this.symbol >= a) this.symbol = 0 } }; D = la(vb, 1, hb, 1E3, Ya, 6E4,
    Ma, 36E5, oa, 864E5, Za, 6048E5, Na, 2592E6, ta, 31556952E3); Ua = {
        init: function (a, b, c) {
            var b = b || "", d = a.shift, e = b.indexOf("C") > -1, f = e ? 7 : 3, g, b = b.split(" "), c = [].concat(c), h, i, j = function (a) { for (g = a.length; g--;) a[g] === "M" && a.splice(g + 1, 0, a[g + 1], a[g + 2], a[g + 1], a[g + 2]) }; e && (j(b), j(c)); a.isArea && (h = b.splice(b.length - 6, 6), i = c.splice(c.length - 6, 6)); if (d <= c.length / f) for (; d--;) c = [].concat(c).splice(0, f).concat(c); a.shift = 0; if (b.length) for (a = c.length; b.length < a;) d = [].concat(b).splice(b.length - f, f), e && (d[f - 6] = d[f - 2], d[f -
            5] = d[f - 1]), b = b.concat(d); h && (b = b.concat(h), c = c.concat(i)); return [b, c]
        }, step: function (a, b, c, d) { var e = [], f = a.length; if (c === 1) e = d; else if (f === b.length && c < 1) for (; f--;) d = parseFloat(a[f]), e[f] = isNaN(d) ? a[f] : c * parseFloat(b[f] - d) + d; else e = b; return e }
    }; var T = N.HighchartsAdapter, G = T || {}, Va = G.adapterRun, Ib = G.getScript, n = G.each, ub = G.grep, Jb = G.offset, Ea = G.map, C = G.merge, I = G.addEvent, P = G.removeEvent, E = G.fireEvent, Kb = G.washMouseEvent, eb = G.animate, Fa = G.stop; T && T.init && T.init(Ua); if (!T && N.jQuery) {
        var Q = jQuery, Ib = Q.getScript,
        Va = function (a, b) { return Q(a)[b]() }, n = function (a, b) { for (var c = 0, d = a.length; c < d; c++) if (b.call(a[c], a[c], c, a) === !1) return c }, ub = Q.grep, Ea = function (a, b) { for (var c = [], d = 0, e = a.length; d < e; d++) c[d] = b.call(a[d], a[d], d, a); return c }, C = function () { var a = arguments; return Q.extend(!0, null, a[0], a[1], a[2], a[3]) }, Jb = function (a) { return Q(a).offset() }, I = function (a, b, c) { Q(a).bind(b, c) }, P = function (a, b, c) { var d = B.removeEventListener ? "removeEventListener" : "detachEvent"; B[d] && !a[d] && (a[d] = function () { }); Q(a).unbind(b, c) },
        E = function (a, b, c, d) { var e = Q.Event(b), f = "detached" + b, g; !La && c && (delete c.layerX, delete c.layerY); u(e, c); a[b] && (a[f] = a[b], a[b] = null); n(["preventDefault", "stopPropagation"], function (a) { var b = e[a]; e[a] = function () { try { b.call(e) } catch (c) { a === "preventDefault" && (g = !0) } } }); Q(a).trigger(e); a[f] && (a[b] = a[f], a[f] = null); d && !e.isDefaultPrevented() && !g && d(e) }, Kb = function (a) { return a }, eb = function (a, b, c) { var d = Q(a); if (b.d) a.toD = b.d, b.d = 1; d.stop(); d.animate(b, c) }, Fa = function (a) { Q(a).stop() }; Q.extend(Q.easing, {
            easeOutQuad: function (a,
            b, c, d, e) { return -d * (b /= e) * (b - 2) + c }
        }); var Lb = Q.fx, Mb = Lb.step; n(["cur", "_default", "width", "height"], function (a, b) { var c = Mb, d, e; a === "cur" ? c = Lb.prototype : a === "_default" && Q.Tween && (c = Q.Tween.propHooks[a], a = "set"); (d = c[a]) && (c[a] = function (c) { c = b ? c : this; e = c.elem; return e.attr ? e.attr(c.prop, a === "cur" ? A : c.now) : d.apply(this, arguments) }) }); Mb.d = function (a) { var b = a.elem; if (!a.started) { var c = Ua.init(b, b.d, b.toD); a.start = c[0]; a.end = c[1]; a.started = !0 } b.attr("d", Ua.step(a.start, a.end, a.pos, b.toD)) }
    } G = {
        enabled: !0,
        align: "center", x: 0, y: 15, style: { color: "#666", fontSize: "11px", lineHeight: "14px" }
    }; V = {
        colors: "#4572A7,#AA4643,#89A54E,#80699B,#3D96AE,#DB843D,#92A8CD,#A47D7C,#B5CA92".split(","), symbols: ["circle", "diamond", "square", "triangle", "triangle-down"], lang: {
            loading: "Loading...", months: "January,February,March,April,May,June,July,August,September,October,November,December".split(","), shortMonths: "一月,二月,三月,四月,五月,六月,七月,八月,九月,十月,十一月,十二月".split(","), weekdays: "周日,周一,周二,周三,周四,周五,周六".split(","),
            decimalPoint: ".", resetZoom: "全部", resetZoomTitle: "Reset zoom level 1:1", thousandsSep: ","
        }, global: { useUTC: !0, canvasToolsURL: "http://code.highcharts.com/2.2.5/modules/canvas-tools.js" }, chart: {
            borderColor: "#4572A7", borderRadius: 5, defaultSeriesType: "line", ignoreHiddenSeries: !0, spacingTop: 10, spacingRight: 10, spacingBottom: 15, spacingLeft: 10, style: { fontFamily: '"Lucida Grande", "Lucida Sans Unicode", Verdana, Arial, Helvetica, sans-serif', fontSize: "12px" }, backgroundColor: "#FFFFFF", plotBorderColor: "#C0C0C0",
            resetZoomButton: { theme: { zIndex: 20 }, position: { align: "right", x: -10, y: 10 } }
        }, title: { text: "Chart title", align: "center", y: 15, style: { color: "#3E576F", fontSize: "16px" } }, subtitle: { text: "", align: "center", y: 30, style: { color: "#6D869F" } }, plotOptions: {
            line: {
                allowPointSelect: !1, showCheckbox: !1, animation: { duration: 1E3 }, events: {}, lineWidth: 2, shadow: !0, marker: { enabled: !0, lineWidth: 0, radius: 4, lineColor: "#FFFFFF", states: { hover: {}, select: { fillColor: "#FFFFFF", lineColor: "#000000", lineWidth: 2 } } }, point: { events: {} }, dataLabels: C(G,
                { enabled: !1, y: -6, formatter: function () { return this.y } }), cropThreshold: 300, pointRange: 0, showInLegend: !0, states: { hover: { marker: {} }, select: { marker: {} } }, stickyTracking: !0
            }
        }, labels: { style: { position: "absolute", color: "#3E576F" } }, legend: {
            enabled: !0, align: "center", layout: "horizontal", labelFormatter: function () { return this.name }, borderWidth: 1, borderColor: "#909090", borderRadius: 5, navigation: { activeColor: "#3E576F", inactiveColor: "#CCC" }, shadow: !1, itemStyle: { cursor: "pointer", color: "#3E576F", fontSize: "12px" }, itemHoverStyle: { color: "#000" },
            itemHiddenStyle: { color: "#CCC" }, itemCheckboxStyle: { position: "absolute", width: "13px", height: "13px" }, symbolWidth: 16, symbolPadding: 5, verticalAlign: "bottom", x: 0, y: 0
        }, loading: { labelStyle: { fontWeight: "bold", position: "relative", top: "1em" }, style: { position: "absolute", backgroundColor: "white", opacity: 0.5, textAlign: "center" } }, tooltip: {
            enabled: !0, backgroundColor: "rgba(255, 255, 255, .85)", borderWidth: 2, borderRadius: 5, dateTimeLabelFormats: {
                millisecond: "%Y-%m-%d, %H:%M:%S.%L", second: "%Y-%m-%d, %H:%M:%S", minute: "%Y-%m-%d, %H:%M:%S",
                hour: "%Y-%m-%d, %H:%M:%S", day: "%Y-%m-%d", week: "%Y-%m-%d", month: "%Y-%m-%d", year: "%Y-%m-%d"
            }, headerFormat: '<span style="font-size: 10px">{point.key}</span><br/>', pointFormat: '<span style="color:{series.color}">{series.name}</span>: <b>{point.y}</b><br/>', shadow: !0, shared: ga, snap: ea ? 25 : 10, style: { color: "#333333", fontSize: "12px", padding: "5px", whiteSpace: "nowrap" }
        }, credits: {
            enabled: !0, text: "", href: "javascript:void(0);", position: { align: "right", x: -10, verticalAlign: "bottom", y: -5 },
            style: { cursor: "pointer", color: "#909090", fontSize: "10px" }
        }
    }; var Z = V.plotOptions, T = Z.line; Bb(); var pa = function (a) {
        var b = [], c; (function (a) { (c = /rgba\(\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*,\s*([0-9]?(?:\.[0-9]+)?)\s*\)/.exec(a)) ? b = [w(c[1]), w(c[2]), w(c[3]), parseFloat(c[4], 10)] : (c = /#([a-fA-F0-9]{2})([a-fA-F0-9]{2})([a-fA-F0-9]{2})/.exec(a)) && (b = [w(c[1], 16), w(c[2], 16), w(c[3], 16), 1]) })(a); return {
            get: function (c) {
                return b && !isNaN(b[0]) ? c === "rgb" ? "rgb(" + b[0] + "," + b[1] + "," + b[2] + ")" : c === "a" ? b[3] :
                "rgba(" + b.join(",") + ")" : a
            }, brighten: function (a) { if (Ka(a) && a !== 0) { var c; for (c = 0; c < 3; c++) b[c] += w(a * 255), b[c] < 0 && (b[c] = 0), b[c] > 255 && (b[c] = 255) } return this }, setOpacity: function (a) { b[3] = a; return this }
        }
    }; va.prototype = {
        init: function (a, b) { this.element = b === "span" ? S(b) : B.createElementNS("http://www.w3.org/2000/svg", b); this.renderer = a; this.attrSetters = {} }, animate: function (a, b, c) { b = o(b, Ra, !0); Fa(this); if (b) { b = C(b); if (c) b.complete = c; eb(this, a, b) } else this.attr(a), c && c() }, attr: function (a, b) {
            var c, d, e, f, g = this.element,
            h = g.nodeName, i = this.renderer, j, k = this.attrSetters, l = this.shadows, m, p, q = this; ra(a) && s(b) && (c = a, a = {}, a[c] = b); if (ra(a)) c = a, h === "circle" ? c = { x: "cx", y: "cy" }[c] || c : c === "strokeWidth" && (c = "stroke-width"), q = z(g, c) || this[c] || 0, c !== "d" && c !== "visibility" && (q = parseFloat(q)); else for (c in a) if (j = !1, d = a[c], e = k[c] && k[c](d, c), e !== !1) {
                e !== A && (d = e); if (c === "d") d && d.join && (d = d.join(" ")), /(NaN| {2}|^$)/.test(d) && (d = "M 0 0"); else if (c === "x" && h === "text") {
                    for (e = 0; e < g.childNodes.length; e++) f = g.childNodes[e], z(f, "x") === z(g,
                    "x") && z(f, "x", d); this.rotation && z(g, "transform", "rotate(" + this.rotation + " " + d + " " + w(a.y || z(g, "y")) + ")")
                } else if (c === "fill") d = i.color(d, g, c); else if (h === "circle" && (c === "x" || c === "y")) c = { x: "cx", y: "cy" }[c] || c; else if (h === "rect" && c === "r") z(g, { rx: d, ry: d }), j = !0; else if (c === "translateX" || c === "translateY" || c === "rotation" || c === "verticalAlign") j = p = !0; else if (c === "stroke") d = i.color(d, g, c); else if (c === "dashstyle") if (c = "stroke-dasharray", d = d && d.toLowerCase(), d === "solid") d = U; else {
                    if (d) {
                        d = d.replace("shortdashdotdot",
                        "3,1,1,1,1,1,").replace("shortdashdot", "3,1,1,1").replace("shortdot", "1,1,").replace("shortdash", "3,1,").replace("longdash", "8,3,").replace(/dot/g, "1,3,").replace("dash", "4,3,").replace(/,$/, "").split(","); for (e = d.length; e--;) d[e] = w(d[e]) * a["stroke-width"]; d = d.join(",")
                    }
                } else if (c === "isTracker") this[c] = d; else if (c === "width") d = w(d); else if (c === "align") c = "text-anchor", d = { left: "start", center: "middle", right: "end" }[d]; else if (c === "title") e = g.getElementsByTagName("title")[0], e || (e = B.createElementNS("http://www.w3.org/2000/svg",
                "title"), g.appendChild(e)), e.textContent = d; c === "strokeWidth" && (c = "stroke-width"); Fb && c === "stroke-width" && d === 0 && (d = 1.0E-6); this.symbolName && /^(x|y|width|height|r|start|end|innerR|anchorX|anchorY)/.test(c) && (m || (this.symbolAttr(a), m = !0), j = !0); if (l && /^(width|height|visibility|x|y|d|transform)$/.test(c)) for (e = l.length; e--;) z(l[e], c, c === "height" ? x(d - (l[e].cutHeight || 0), 0) : d); if ((c === "width" || c === "height") && h === "rect" && d < 0) d = 0; this[c] = d; p && this.updateTransform(); c === "text" ? (this.textStr = d, this.added &&
                i.buildText(this)) : j || z(g, c, d)
            } if (Fb && /Chrome\/(18|19)/.test(ya) && h === "text" && (a.x !== A || a.y !== A)) c = g.parentNode, d = g.nextSibling, c && (c.removeChild(g), d ? c.insertBefore(g, d) : c.appendChild(g)); return q
        }, symbolAttr: function (a) { var b = this; n("x,y,r,start,end,width,height,innerR,anchorX,anchorY".split(","), function (c) { b[c] = o(a[c], b[c]) }); b.attr({ d: b.renderer.symbols[b.symbolName](b.x, b.y, b.width, b.height, b) }) }, clip: function (a) { return this.attr("clip-path", "url(" + this.renderer.url + "#" + a.id + ")") }, crisp: function (a,
        b, c, d, e) { var f, g = {}, h = {}, i, a = a || this.strokeWidth || this.attr && this.attr("stroke-width") || 0; i = t(a) % 2 / 2; h.x = W(b || this.x || 0) + i; h.y = W(c || this.y || 0) + i; h.width = W((d || this.width || 0) - 2 * i); h.height = W((e || this.height || 0) - 2 * i); h.strokeWidth = a; for (f in h) this[f] !== h[f] && (this[f] = g[f] = h[f]); return g }, css: function (a) {
            var b = this.element, b = a && a.width && b.nodeName === "text", c, d = "", e = function (a, b) { return "-" + b.toLowerCase() }; if (a && a.color) a.fill = a.color; this.styles = a = u(this.styles, a); if (La && !Da) b && delete a.width, F(this.element,
            a); else { for (c in a) d += c.replace(/([A-Z])/g, e) + ":" + a[c] + ";"; this.attr({ style: d }) } b && this.added && this.renderer.buildText(this); return this
        }, on: function (a, b) { var c = b; ea && a === "click" && (a = "touchstart", c = function (a) { a.preventDefault(); b() }); this.element["on" + a] = c; return this }, setRadialReference: function (a) { this.element.radialReference = a; return this }, translate: function (a, b) { return this.attr({ translateX: a, translateY: b }) }, invert: function () { this.inverted = !0; this.updateTransform(); return this }, htmlCss: function (a) {
            var b =
            this.element; if (b = a && b.tagName === "SPAN" && a.width) delete a.width, this.textWidth = b, this.updateTransform(); this.styles = u(this.styles, a); F(this.element, a); return this
        }, htmlGetBBox: function (a) { var b = this.element, c = this.bBox; if (!c || a) { if (b.nodeName === "text") b.style.position = "absolute"; c = this.bBox = { x: b.offsetLeft, y: b.offsetTop, width: b.offsetWidth, height: b.offsetHeight } } return c }, htmlUpdateTransform: function () {
            if (this.added) {
                var a = this.renderer, b = this.element, c = this.translateX || 0, d = this.translateY || 0, e = this.x ||
                0, f = this.y || 0, g = this.textAlign || "left", h = { left: 0, center: 0.5, right: 1 }[g], i = g && g !== "left", j = this.shadows; if (c || d) F(b, { marginLeft: c, marginTop: d }), j && n(j, function (a) { F(a, { marginLeft: c + 1, marginTop: d + 1 }) }); this.inverted && n(b.childNodes, function (c) { a.invertChild(c, b) }); if (b.tagName === "SPAN") {
                    var k, l, j = this.rotation, m; k = 0; var p = 1, q = 0, fa; m = w(this.textWidth); var r = this.xCorr || 0, y = this.yCorr || 0, $ = [j, g, b.innerHTML, this.textWidth].join(","); if ($ !== this.cTT) s(j) && (k = j * Eb, p = X(k), q = da(k), F(b, {
                        filter: j ? ["progid:DXImageTransform.Microsoft.Matrix(M11=",
                        p, ", M12=", -q, ", M21=", q, ", M22=", p, ", sizingMethod='auto expand')"].join("") : U
                    })), k = o(this.elemWidth, b.offsetWidth), l = o(this.elemHeight, b.offsetHeight), k > m && /[ \-]/.test(b.innerText) && (F(b, { width: m + "px", display: "block", whiteSpace: "normal" }), k = m), m = a.fontMetrics(b.style.fontSize).b, r = p < 0 && -k, y = q < 0 && -l, fa = p * q < 0, r += q * m * (fa ? 1 - h : h), y -= p * m * (j ? fa ? h : 1 - h : 1), i && (r -= k * h * (p < 0 ? -1 : 1), j && (y -= l * h * (q < 0 ? -1 : 1)), F(b, { textAlign: g })), this.xCorr = r, this.yCorr = y; F(b, { left: e + r + "px", top: f + y + "px" }); this.cTT = $
                }
            } else this.alignOnAdd =
            !0
        }, updateTransform: function () { var a = this.translateX || 0, b = this.translateY || 0, c = this.inverted, d = this.rotation, e = []; c && (a += this.attr("width"), b += this.attr("height")); (a || b) && e.push("translate(" + a + "," + b + ")"); c ? e.push("rotate(90) scale(-1,1)") : d && e.push("rotate(" + d + " " + (this.x || 0) + " " + (this.y || 0) + ")"); e.length && z(this.element, "transform", e.join(" ")) }, toFront: function () { var a = this.element; a.parentNode.appendChild(a); return this }, align: function (a, b, c) {
            a ? (this.alignOptions = a, this.alignByTranslate = b, c ||
            this.renderer.alignedObjects.push(this)) : (a = this.alignOptions, b = this.alignByTranslate); var c = o(c, this.renderer), d = a.align, e = a.verticalAlign, f = (c.x || 0) + (a.x || 0), g = (c.y || 0) + (a.y || 0), h = {}; /^(right|center)$/.test(d) && (f += (c.width - (a.width || 0)) / { right: 1, center: 2 }[d]); h[b ? "translateX" : "x"] = t(f); /^(bottom|middle)$/.test(e) && (g += (c.height - (a.height || 0)) / ({ bottom: 1, middle: 2 }[e] || 1)); h[b ? "translateY" : "y"] = t(g); this[this.placed ? "animate" : "attr"](h); this.placed = !0; this.alignAttr = h; return this
        }, getBBox: function (a) {
            var b,
            c, d = this.rotation; c = this.element; var e = d * Eb; if (c.namespaceURI === "http://www.w3.org/2000/svg" || this.renderer.forExport) { try { b = c.getBBox ? u({}, c.getBBox()) : { width: c.offsetWidth, height: c.offsetHeight } } catch (f) { } if (!b || b.width < 0) b = { width: 0, height: 0 }; a = b.width; c = b.height; if (d) b.width = M(c * da(e)) + M(a * X(e)), b.height = M(c * X(e)) + M(a * da(e)) } else b = this.htmlGetBBox(a); return b
        }, show: function () { return this.attr({ visibility: "visible" }) }, hide: function () { return this.attr({ visibility: "hidden" }) }, add: function (a) {
            var b =
            this.renderer, c = a || b, d = c.element || b.box, e = d.childNodes, f = this.element, g = z(f, "zIndex"), h; this.parentInverted = a && a.inverted; this.textStr !== void 0 && b.buildText(this); if (g) c.handleZ = !0, g = w(g); if (c.handleZ) for (c = 0; c < e.length; c++) if (a = e[c], b = z(a, "zIndex"), a !== f && (w(b) > g || !s(g) && s(b))) { d.insertBefore(f, a); h = !0; break } h || d.appendChild(f); this.added = !0; E(this, "add"); return this
        }, safeRemoveChild: function (a) { var b = a.parentNode; b && b.removeChild(a) }, destroy: function () {
            var a = this, b = a.element || {}, c = a.shadows, d = a.box,
            e, f; b.onclick = b.onmouseout = b.onmouseover = b.onmousemove = null; Fa(a); if (a.clipPath) a.clipPath = a.clipPath.destroy(); if (a.stops) { for (f = 0; f < a.stops.length; f++) a.stops[f] = a.stops[f].destroy(); a.stops = null } a.safeRemoveChild(b); c && n(c, function (b) { a.safeRemoveChild(b) }); d && d.destroy(); za(a.renderer.alignedObjects, a); for (e in a) delete a[e]; return null
        }, empty: function () { for (var a = this.element, b = a.childNodes, c = b.length; c--;) a.removeChild(b[c]) }, shadow: function (a, b, c) {
            var d = [], e, f = this.element, g, h = this.parentInverted ?
            "(-1,-1)" : "(1,1)"; if (a) { for (a = 1; a <= 3; a++) { e = f.cloneNode(0); g = 7 - 2 * a; z(e, { isShadow: "true", stroke: "rgb(0, 0, 0)", "stroke-opacity": 0.05 * a, "stroke-width": g, transform: "translate" + h, fill: U }); if (c) z(e, "height", x(z(e, "height") - g, 0)), e.cutHeight = g; b ? b.element.appendChild(e) : f.parentNode.insertBefore(e, f); d.push(e) } this.shadows = d } return this
        }
    }; var qa = function () { this.init.apply(this, arguments) }; qa.prototype = {
        Element: va, init: function (a, b, c, d) {
            var e = location, f; f = this.createElement("svg").attr({
                xmlns: "http://www.w3.org/2000/svg",
                version: "1.1"
            }); a.appendChild(f.element); this.isSVG = !0; this.box = f.element; this.boxWrapper = f; this.alignedObjects = []; this.url = La ? "" : e.href.replace(/#.*?$/, "").replace(/([\('\)])/g, "\\$1"); this.defs = this.createElement("defs").add(); this.forExport = d; this.gradients = {}; this.setSize(b, c, !1); var g; if (Gb && a.getBoundingClientRect) this.subPixelFix = b = function () { F(a, { left: 0, top: 0 }); g = a.getBoundingClientRect(); F(a, { left: wa(g.left) - g.left + "px", top: wa(g.top) - g.top + "px" }) }, b(), I(N, "resize", b)
        }, isHidden: function () { return !this.boxWrapper.getBBox().width },
        destroy: function () { var a = this.defs; this.box = null; this.boxWrapper = this.boxWrapper.destroy(); Ba(this.gradients || {}); this.gradients = null; if (a) this.defs = a.destroy(); this.subPixelFix && P(N, "resize", this.subPixelFix); return this.alignedObjects = null }, createElement: function (a) { var b = new this.Element; b.init(this, a); return b }, draw: function () { }, buildText: function (a) {
            for (var b = a.element, c = o(a.textStr, "").toString().replace(/<(b|strong)>/g, '<span style="font-weight:bold">').replace(/<(i|em)>/g, '<span style="font-style:italic">').replace(/<a/g,
            "<span").replace(/<\/(b|strong|i|em|a)>/g, "</span>").split(/<br.*?>/g), d = b.childNodes, e = /style="([^"]+)"/, f = /href="([^"]+)"/, g = z(b, "x"), h = a.styles, i = h && w(h.width), j = h && h.lineHeight, k, h = d.length, l = []; h--;) b.removeChild(d[h]); i && !a.added && this.box.appendChild(b); c[c.length - 1] === "" && c.pop(); n(c, function (c, d) {
                var h, fa = 0, r, c = c.replace(/<span/g, "|||<span").replace(/<\/span>/g, "</span>|||"); h = c.split("|||"); n(h, function (c) {
                    if (c !== "" || h.length === 1) {
                        var m = {}, n = B.createElementNS("http://www.w3.org/2000/svg",
                        "tspan"); e.test(c) && z(n, "style", c.match(e)[1].replace(/(;| |^)color([ :])/, "$1fill$2")); f.test(c) && (z(n, "onclick", 'location.href="' + c.match(f)[1] + '"'), F(n, { cursor: "pointer" })); c = (c.replace(/<(.|\n)*?>/g, "") || " ").replace(/&lt;/g, "<").replace(/&gt;/g, ">"); n.appendChild(B.createTextNode(c)); fa ? m.dx = 3 : m.x = g; if (!fa) {
                            if (d) {
                                !Da && a.renderer.forExport && F(n, { display: "block" }); r = N.getComputedStyle && w(N.getComputedStyle(k, null).getPropertyValue("line-height")); if (!r || isNaN(r)) {
                                    var o; if (!(o = j)) if (!(o = k.offsetHeight)) l[d] =
                                    b.getBBox().height, o = t(l[d] - (l[d - 1] || 0)) || 18; r = o
                                } z(n, "dy", r)
                            } k = n
                        } z(n, m); b.appendChild(n); fa++; if (i) for (var c = c.replace(/-/g, "- ").split(" "), H = []; c.length || H.length;) o = a.getBBox().width, m = o > i, !m || c.length === 1 ? (c = H, H = [], c.length && (n = B.createElementNS("http://www.w3.org/2000/svg", "tspan"), z(n, { dy: j || 16, x: g }), b.appendChild(n), o > i && (i = o))) : (n.removeChild(n.firstChild), H.unshift(c.pop())), c.length && n.appendChild(B.createTextNode(c.join(" ").replace(/- /g, "-")))
                    }
                })
            })
        }, button: function (a, b, c, d, e, f, g) {
            var h =
            this.label(a, b, c), i = 0, j, k, l, m, p, a = { x1: 0, y1: 0, x2: 0, y2: 1 }, e = C(la("stroke-width", 1, "stroke", "#999", "fill", la("linearGradient", a, "stops", [[0, "#FFF"], [1, "#DDD"]]), "r", 3, "padding", 3, "style", la("color", "black")), e); l = e.style; delete e.style; f = C(e, la("stroke", "#68A", "fill", la("linearGradient", a, "stops", [[0, "#FFF"], [1, "#ACF"]])), f); m = f.style; delete f.style; g = C(e, la("stroke", "#68A", "fill", la("linearGradient", a, "stops", [[0, "#9BD"], [1, "#CDF"]])), g); p = g.style; delete g.style; I(h.element, "mouseenter", function () { h.attr(f).css(m) });
            I(h.element, "mouseleave", function () { j = [e, f, g][i]; k = [l, m, p][i]; h.attr(j).css(k) }); h.setState = function (a) { (i = a) ? a === 2 && h.attr(g).css(p) : h.attr(e).css(l) }; return h.on("click", function () { d.call(h) }).attr(e).css(u({ cursor: "default" }, l))
        }, crispLine: function (a, b) { a[1] === a[4] && (a[1] = a[4] = t(a[1]) + b % 2 / 2); a[2] === a[5] && (a[2] = a[5] = t(a[2]) + b % 2 / 2); return a }, path: function (a) { var b = { fill: U }; Ja(a) ? b.d = a : aa(a) && u(b, a); return this.createElement("path").attr(b) }, circle: function (a, b, c) { a = aa(a) ? a : { x: a, y: b, r: c }; return this.createElement("circle").attr(a) },
        arc: function (a, b, c, d, e, f) { if (aa(a)) b = a.y, c = a.r, d = a.innerR, e = a.start, f = a.end, a = a.x; return this.symbol("arc", a || 0, b || 0, c || 0, c || 0, { innerR: d || 0, start: e || 0, end: f || 0 }) }, rect: function (a, b, c, d, e, f) { e = aa(a) ? a.r : e; e = this.createElement("rect").attr({ rx: e, ry: e, fill: U }); return e.attr(aa(a) ? a : e.crisp(f, a, b, x(c, 0), x(d, 0))) }, setSize: function (a, b, c) { var d = this.alignedObjects, e = d.length; this.width = a; this.height = b; for (this.boxWrapper[o(c, !0) ? "animate" : "attr"]({ width: a, height: b }) ; e--;) d[e].align() }, g: function (a) {
            var b =
            this.createElement("g"); return s(a) ? b.attr({ "class": "highcharts-" + a }) : b
        }, image: function (a, b, c, d, e) { var f = { preserveAspectRatio: U }; arguments.length > 1 && u(f, { x: b, y: c, width: d, height: e }); f = this.createElement("image").attr(f); f.element.setAttributeNS ? f.element.setAttributeNS("http://www.w3.org/1999/xlink", "href", a) : f.element.setAttribute("hc-svg-href", a); return f }, symbol: function (a, b, c, d, e, f) {
            var g, h = this.symbols[a], h = h && h(t(b), t(c), d, e, f), i = /^url\((.*?)\)$/, j, k; h ? (g = this.path(h), u(g, {
                symbolName: a, x: b, y: c,
                width: d, height: e
            }), f && u(g, f)) : i.test(a) && (k = function (a, b) { a.attr({ width: b[0], height: b[1] }); a.alignByTranslate || a.translate(-t(b[0] / 2), -t(b[1] / 2)) }, j = a.match(i)[1], a = Hb[j], g = this.image(j).attr({ x: b, y: c }), a ? k(g, a) : (g.attr({ width: 0, height: 0 }), S("img", { onload: function () { k(g, Hb[j] = [this.width, this.height]) }, src: j }))); return g
        }, symbols: {
            circle: function (a, b, c, d) { var e = 0.166 * c; return ["M", a + c / 2, b, "C", a + c + e, b, a + c + e, b + d, a + c / 2, b + d, "C", a - e, b + d, a - e, b, a + c / 2, b, "Z"] }, square: function (a, b, c, d) {
                return ["M", a, b, "L", a +
                c, b, a + c, b + d, a, b + d, "Z"]
            }, triangle: function (a, b, c, d) { return ["M", a + c / 2, b, "L", a + c, b + d, a, b + d, "Z"] }, "triangle-down": function (a, b, c, d) { return ["M", a, b, "L", a + c, b, a + c / 2, b + d, "Z"] }, diamond: function (a, b, c, d) { return ["M", a + c / 2, b, "L", a + c, b + d / 2, a + c / 2, b + d, a, b + d / 2, "Z"] }, arc: function (a, b, c, d, e) { var f = e.start, c = e.r || c || d, g = e.end - 1.0E-6, d = e.innerR, h = e.open, i = X(f), j = da(f), k = X(g), g = da(g), e = e.end - f < xa ? 0 : 1; return ["M", a + c * i, b + c * j, "A", c, c, 0, e, 1, a + c * k, b + c * g, h ? "M" : "L", a + d * k, b + d * g, "A", d, d, 0, e, 0, a + d * i, b + d * j, h ? "" : "Z"] }
        }, clipRect: function (a,
        b, c, d) { var e = "highcharts-" + sb++, f = this.createElement("clipPath").attr({ id: e }).add(this.defs), a = this.rect(a, b, c, d, 0).add(f); a.id = e; a.clipPath = f; return a }, color: function (a, b, c) {
            var d = this, e, f = /^rgba/, g; a && a.linearGradient ? g = "linearGradient" : a && a.radialGradient && (g = "radialGradient"); if (g) {
                var c = a[g], h = d.gradients, i, j, k, b = b.radialReference; if (!c.id || !h[c.id]) Ja(c) && (a[g] = c = { x1: c[0], y1: c[1], x2: c[2], y2: c[3], gradientUnits: "userSpaceOnUse" }), g === "radialGradient" && b && !s(c.gradientUnits) && u(c, {
                    cx: b[0] - b[2] /
                    2 + c.cx * b[2], cy: b[1] - b[2] / 2 + c.cy * b[2], r: c.r * b[2], gradientUnits: "userSpaceOnUse"
                }), c.id = "highcharts-" + sb++, h[c.id] = i = d.createElement(g).attr(c).add(d.defs), i.stops = [], n(a.stops, function (a) { f.test(a[1]) ? (e = pa(a[1]), j = e.get("rgb"), k = e.get("a")) : (j = a[1], k = 1); a = d.createElement("stop").attr({ offset: a[0], "stop-color": j, "stop-opacity": k }).add(i); i.stops.push(a) }); return "url(" + d.url + "#" + c.id + ")"
            } else return f.test(a) ? (e = pa(a), z(b, c + "-opacity", e.get("a")), e.get("rgb")) : (b.removeAttribute(c + "-opacity"), a)
        }, text: function (a,
        b, c, d) { var e = V.chart.style; if (d && !this.forExport) return this.html(a, b, c); b = t(o(b, 0)); c = t(o(c, 0)); a = this.createElement("text").attr({ x: b, y: c, text: a }).css({ fontFamily: e.fontFamily, fontSize: e.fontSize }); a.x = b; a.y = c; return a }, html: function (a, b, c) {
            var d = V.chart.style, e = this.createElement("span"), f = e.attrSetters, g = e.element, h = e.renderer; f.text = function (a) { g.innerHTML = a; return !1 }; f.x = f.y = f.align = function (a, b) { b === "align" && (b = "textAlign"); e[b] = a; e.htmlUpdateTransform(); return !1 }; e.attr({ text: a, x: t(b), y: t(c) }).css({
                position: "absolute",
                whiteSpace: "nowrap", fontFamily: d.fontFamily, fontSize: d.fontSize
            }); e.css = e.htmlCss; if (h.isSVG) e.add = function (a) {
                var b, c, d = h.box.parentNode; if (a) { if (b = a.div, !b) b = a.div = S(ia, { className: z(a.element, "class") }, { position: "absolute", left: a.attr("translateX") + "px", top: a.attr("translateY") + "px" }, d), c = b.style, u(a.attrSetters, { translateX: function (a) { c.left = a + "px" }, translateY: function (a) { c.top = a + "px" }, visibility: function (a, b) { c[b] = a } }) } else b = d; b.appendChild(g); e.added = !0; e.alignOnAdd && e.htmlUpdateTransform();
                return e
            }; return e
        }, fontMetrics: function (a) { var a = w(a || 11), a = a < 24 ? a + 4 : t(a * 1.2), b = t(a * 0.8); return { h: a, b: b } }, label: function (a, b, c, d, e, f, g, h, i) {
            function j() { var a = p.styles, a = a && a.textAlign, b = $ * (1 - y), c; c = h ? 0 : Ha; if (s(Ga) && (a === "center" || a === "right")) b += { center: 0.5, right: 1 }[a] * (Ga - r.width); (b !== q.x || c !== q.y) && q.attr({ x: b, y: c }); q.x = b; q.y = c } function k(a, b) { o ? o.attr(a, b) : x[a] = b } function l() { p.attr({ text: a, x: b, y: c }); s(e) && p.attr({ anchorX: e, anchorY: f }) } var m = this, p = m.g(i), q = m.text("", 0, 0, g).attr({ zIndex: 1 }).add(p),
            o, r, y = 0, $ = 3, Ga, v, H, J, K = 0, x = {}, Ha, g = p.attrSetters; I(p, "add", l); g.width = function (a) { Ga = a; return !1 }; g.height = function (a) { v = a; return !1 }; g.padding = function (a) { s(a) && a !== $ && ($ = a, j()); return !1 }; g.align = function (a) { y = { left: 0, center: 0.5, right: 1 }[a]; return !1 }; g.text = function (a, b) {
                q.attr(b, a); var c; c = q.element.style; r = (Ga === void 0 || v === void 0 || p.styles.textAlign) && q.getBBox(!0); p.width = (Ga || r.width || 0) + 2 * $; p.height = (v || r.height || 0) + 2 * $; Ha = $ + m.fontMetrics(c && c.fontSize).b; if (!o) c = h ? -Ha : 0, p.box = o = d ? m.symbol(d,
                -y * $, c, p.width, p.height) : m.rect(-y * $, c, p.width, p.height, 0, x["stroke-width"]), o.add(p); o.attr(C({ width: p.width, height: p.height }, x)); x = null; j(); return !1
            }; g["stroke-width"] = function (a, b) { K = a % 2 / 2; k(b, a); return !1 }; g.stroke = g.fill = g.r = function (a, b) { k(b, a); return !1 }; g.anchorX = function (a, b) { e = a; k(b, a + K - H); return !1 }; g.anchorY = function (a, b) { f = a; k(b, a - J); return !1 }; g.x = function (a) { p.x = a; a -= y * ((Ga || r.width) + $); H = t(a); p.attr("translateX", H); return !1 }; g.y = function (a) { J = p.y = t(a); p.attr("translateY", a); return !1 };
            var w = p.css; return u(p, { css: function (a) { if (a) { var b = {}, a = C({}, a); n("fontSize,fontWeight,fontFamily,color,lineHeight,width".split(","), function (c) { a[c] !== A && (b[c] = a[c], delete a[c]) }); q.css(b) } return w.call(p, a) }, getBBox: function () { return o.getBBox() }, shadow: function (a) { o.shadow(a); return p }, destroy: function () { P(p, "add", l); P(p.element, "mouseenter"); P(p.element, "mouseleave"); q && (q = q.destroy()); va.prototype.destroy.call(p) } })
        }
    }; Ta = qa; var ka; if (!Da && !ga) {
        ka = {
            init: function (a, b) {
                var c = ["<", b, ' filled="f" stroked="f"'],
                d = ["position: ", "absolute", ";"]; (b === "shape" || b === ia) && d.push("left:0;top:0;width:1px;height:1px;"); Ca && d.push("visibility: ", b === ia ? "hidden" : "visible"); c.push(' style="', d.join(""), '"/>'); if (b) c = b === ia || b === "span" || b === "img" ? c.join("") : a.prepVML(c), this.element = S(c); this.renderer = a; this.attrSetters = {}
            }, add: function (a) {
                var b = this.renderer, c = this.element, d = b.box, d = a ? a.element || a : d; a && a.inverted && b.invertChild(c, d); Ca && d.gVis === "hidden" && F(c, { visibility: "hidden" }); d.appendChild(c); this.added = !0; this.alignOnAdd &&
                !this.deferUpdateTransform && this.updateTransform(); E(this, "add"); return this
            }, toggleChildren: function (a, b) { for (var c = a.childNodes, d = c.length; d--;) F(c[d], { visibility: b }), c[d].nodeName === "DIV" && this.toggleChildren(c[d], b) }, updateTransform: va.prototype.htmlUpdateTransform, attr: function (a, b) {
                var c, d, e, f = this.element || {}, g = f.style, h = f.nodeName, i = this.renderer, j = this.symbolName, k, l = this.shadows, m, p = this.attrSetters, q = this; ra(a) && s(b) && (c = a, a = {}, a[c] = b); if (ra(a)) c = a, q = c === "strokeWidth" || c === "stroke-width" ?
                this.strokeweight : this[c]; else for (c in a) if (d = a[c], m = !1, e = p[c] && p[c](d, c), e !== !1 && d !== null) {
                    e !== A && (d = e); if (j && /^(x|y|r|start|end|width|height|innerR|anchorX|anchorY)/.test(c)) k || (this.symbolAttr(a), k = !0), m = !0; else if (c === "d") { d = d || []; this.d = d.join(" "); e = d.length; for (m = []; e--;) m[e] = Ka(d[e]) ? t(d[e] * 10) - 5 : d[e] === "Z" ? "x" : d[e]; d = m.join(" ") || "x"; f.path = d; if (l) for (e = l.length; e--;) l[e].path = l[e].cutOff ? this.cutOffPath(d, l[e].cutOff) : d; m = !0 } else if (c === "zIndex" || c === "visibility") {
                        if (Ca && c === "visibility" &&
                        h === "DIV") f.gVis = d, this.toggleChildren(f, d), d === "visible" && (d = null); d && (g[c] = d); m = !0
                    } else if (c === "width" || c === "height") d = x(0, d), this[c] = d, this.updateClipping ? (this[c] = d, this.updateClipping()) : g[c] = d, m = !0; else if (c === "x" || c === "y") this[c] = d, g[{ x: "left", y: "top" }[c]] = d; else if (c === "class") f.className = d; else if (c === "stroke") d = i.color(d, f, c), c = "strokecolor"; else if (c === "stroke-width" || c === "strokeWidth") f.stroked = d ? !0 : !1, c = "strokeweight", this[c] = d, Ka(d) && (d += "px"); else if (c === "dashstyle") (f.getElementsByTagName("stroke")[0] ||
                    S(i.prepVML(["<stroke/>"]), null, null, f))[c] = d || "solid", this.dashstyle = d, m = !0; else if (c === "fill") h === "SPAN" ? g.color = d : (f.filled = d !== U ? !0 : !1, d = i.color(d, f, c), c = "fillcolor"); else if (h === "shape" && c === "rotation") this[c] = d; else if (c === "translateX" || c === "translateY" || c === "rotation") this[c] = d, this.updateTransform(), m = !0; else if (c === "text") this.bBox = null, f.innerHTML = d, m = !0; if (l && c === "visibility") for (e = l.length; e--;) l[e].style[c] = d; m || (Ca ? f[c] = d : z(f, c, d))
                } return q
            }, clip: function (a) {
                var b = this, c = a.members, d =
                b.element, e = d.parentNode; c.push(b); b.destroyClip = function () { za(c, b) }; e && e.className === "highcharts-tracker" && !Ca && F(d, { visibility: "hidden" }); return b.css(a.getCSS(b))
            }, css: va.prototype.htmlCss, safeRemoveChild: function (a) { a.parentNode && Qa(a) }, destroy: function () { this.destroyClip && this.destroyClip(); return va.prototype.destroy.apply(this) }, empty: function () { for (var a = this.element.childNodes, b = a.length, c; b--;) c = a[b], c.parentNode.removeChild(c) }, on: function (a, b) {
                this.element["on" + a] = function () {
                    var a = N.event;
                    a.target = a.srcElement; b(a)
                }; return this
            }, cutOffPath: function (a, b) { var c, a = a.split(/[ ,]/); c = a.length; if (c === 9 || c === 11) a[c - 4] = a[c - 2] = w(a[c - 2]) - 10 * b; return a.join(" ") }, shadow: function (a, b, c) {
                var d = [], e = this.element, f = this.renderer, g, h = e.style, i, j = e.path, k, l; j && typeof j.value !== "string" && (j = "x"); l = j; if (a) {
                    for (a = 1; a <= 3; a++) {
                        k = 7 - 2 * a; c && (l = this.cutOffPath(j.value, k + 0.5)); i = ['<shape isShadow="true" strokeweight="', 7 - 2 * a, '" filled="false" path="', l, '" coordsize="10 10" style="', e.style.cssText, '" />']; g =
                        S(f.prepVML(i), null, { left: w(h.left) + 1, top: w(h.top) + 1 }); if (c) g.cutOff = k + 1; i = ['<stroke color="black" opacity="', 0.05 * a, '"/>']; S(f.prepVML(i), null, null, g); b ? b.element.appendChild(g) : e.parentNode.insertBefore(g, e); d.push(g)
                    } this.shadows = d
                } return this
            }
        }; ka = ca(va, ka); var ha = {
            Element: ka, isIE8: ya.indexOf("MSIE 8.0") > -1, init: function (a, b, c) {
                var d, e; this.alignedObjects = []; d = this.createElement(ia); e = d.element; e.style.position = "relative"; a.appendChild(d.element); this.box = e; this.boxWrapper = d; this.setSize(b, c,
                !1); if (!B.namespaces.hcv) B.namespaces.add("hcv", "urn:schemas-microsoft-com:vml"), B.createStyleSheet().cssText = "hcv\\:fill, hcv\\:path, hcv\\:shape, hcv\\:stroke{ behavior:url(#default#VML); display: inline-block; } "
            }, isHidden: function () { return !this.box.offsetWidth }, clipRect: function (a, b, c, d) {
                var e = this.createElement(); return u(e, {
                    members: [], left: a, top: b, width: c, height: d, getCSS: function (a) {
                        var b = a.inverted, c = this.top, d = this.left, e = d + this.width, k = c + this.height, c = {
                            clip: "rect(" + t(b ? d : c) + "px," + t(b ? k :
                            e) + "px," + t(b ? e : k) + "px," + t(b ? c : d) + "px)"
                        }; !b && Ca && a.element.nodeName !== "IMG" && u(c, { width: e + "px", height: k + "px" }); return c
                    }, updateClipping: function () { n(e.members, function (a) { a.css(e.getCSS(a)) }) }
                })
            }, color: function (a, b, c) {
                var d, e = /^rgba/, f, g = U; a && a.linearGradient ? f = "gradient" : a && a.radialGradient && (f = "pattern"); if (f) {
                    var h, i, j = a.linearGradient || a.radialGradient, k, l, m, p, q, o, r = "", a = a.stops, y, s = []; l = a[0]; y = a[a.length - 1]; l[0] > 0 && a.unshift([0, l[1]]); y[0] < 1 && a.push([1, y[1]]); n(a, function (a, b) {
                        e.test(a[1]) ? (d =
                        pa(a[1]), h = d.get("rgb"), i = d.get("a")) : (h = a[1], i = 1); s.push(a[0] * 100 + "% " + h); b ? (p = i, q = h) : (m = i, o = h)
                    }); f === "gradient" ? (k = j.x1 || j[0] || 0, a = j.y1 || j[1] || 0, l = j.x2 || j[2] || 0, j = j.y2 || j[3] || 0, k = 90 - L.atan((j - a) / (l - k)) * 180 / xa) : (g = j.r * 2, r = 'src="http://code.highcharts.com/gfx/radial-gradient.png" size="' + g + "," + g + '" origin="0.5,0.5" position="' + j.cx + "," + j.cy + '" color2="' + o + '" ', g = q); c === "fill" ? (c = ['<fill colors="' + s.join(",") + '" angle="', k, '" opacity="', p, '" o:opacity2="', m, '" type="', f, '" ', r, 'focus="100%" method="any" />'],
                    S(this.prepVML(c), null, null, b)) : g = h
                } else if (e.test(a) && b.tagName !== "IMG") d = pa(a), c = ["<", c, ' opacity="', d.get("a"), '"/>'], S(this.prepVML(c), null, null, b), g = d.get("rgb"); else { b = b.getElementsByTagName(c); if (b.length) b[0].opacity = 1; g = a } return g
            }, prepVML: function (a) {
                var b = this.isIE8, a = a.join(""); b ? (a = a.replace("/>", ' xmlns="urn:schemas-microsoft-com:vml" />'), a = a.indexOf('style="') === -1 ? a.replace("/>", ' style="display:inline-block;behavior:url(#default#VML);" />') : a.replace('style="', 'style="display:inline-block;behavior:url(#default#VML);')) :
                a = a.replace("<", "<hcv:"); return a
            }, text: qa.prototype.html, path: function (a) { var b = { coordsize: "10 10" }; Ja(a) ? b.d = a : aa(a) && u(b, a); return this.createElement("shape").attr(b) }, circle: function (a, b, c) { return this.symbol("circle").attr({ x: a - c, y: b - c, width: 2 * c, height: 2 * c }) }, g: function (a) { var b; a && (b = { className: "highcharts-" + a, "class": "highcharts-" + a }); return this.createElement(ia).attr(b) }, image: function (a, b, c, d, e) {
                var f = this.createElement("img").attr({ src: a }); arguments.length > 1 && f.css({
                    left: b, top: c, width: d,
                    height: e
                }); return f
            }, rect: function (a, b, c, d, e, f) { if (aa(a)) b = a.y, c = a.width, d = a.height, f = a.strokeWidth, a = a.x; var g = this.symbol("rect"); g.r = e; return g.attr(g.crisp(f, a, b, x(c, 0), x(d, 0))) }, invertChild: function (a, b) { var c = b.style; F(a, { flip: "x", left: w(c.width) - 1, top: w(c.height) - 1, rotation: -90 }) }, symbols: {
                arc: function (a, b, c, d, e) {
                    var f = e.start, g = e.end, h = e.r || c || d, c = X(f), d = da(f), i = X(g), j = da(g), k = e.innerR, l = 0.08 / h, m = k && 0.1 / k || 0; if (g - f === 0) return ["x"]; else 2 * xa - g + f < l ? i = -l : g - f < m && (i = X(f + m)); f = ["wa", a - h, b - h, a + h,
                    b + h, a + h * c, b + h * d, a + h * i, b + h * j]; e.open && f.push("M", a - k, b - k); f.push("at", a - k, b - k, a + k, b + k, a + k * i, b + k * j, a + k * c, b + k * d, "x", "e"); return f
                }, circle: function (a, b, c, d) { return ["wa", a, b, a + c, b + d, a + c, b + d / 2, a + c, b + d / 2, "e"] }, rect: function (a, b, c, d, e) {
                    var f = a + c, g = b + d, h; !s(e) || !e.r ? f = qa.prototype.symbols.square.apply(0, arguments) : (h = O(e.r, c, d), f = ["M", a + h, b, "L", f - h, b, "wa", f - 2 * h, b, f, b + 2 * h, f - h, b, f, b + h, "L", f, g - h, "wa", f - 2 * h, g - 2 * h, f, g, f, g - h, f - h, g, "L", a + h, g, "wa", a, g - 2 * h, a + 2 * h, g, a + h, g, a, g - h, "L", a, b + h, "wa", a, b, a + 2 * h, b + 2 * h, a, b + h, a +
                    h, b, "x", "e"]); return f
                }
            }
        }; ka = function () { this.init.apply(this, arguments) }; ka.prototype = C(qa.prototype, ha); Ta = ka
    } var fb, Nb; if (ga) fb = function () { }, fb.prototype.symbols = {}, Nb = function () { function a() { var a = b.length, d; for (d = 0; d < a; d++) b[d](); b = [] } var b = []; return { push: function (c, d) { b.length === 0 && Ib(d, a); b.push(c) } } }(); Ta = ka || fb || qa; Sa.prototype = {
        addLabel: function () {
            var a = this.axis, b = a.options, c = a.chart, d = a.horiz, e = a.categories, f = this.pos, g = b.labels, h = a.tickPositions, d = e && d && e.length && !g.step && !g.staggerLines &&
            !g.rotation && c.plotWidth / h.length || !d && c.plotWidth / 2, i = f === h[0], j = f === h[h.length - 1], k = e && s(e[f]) ? e[f] : f, e = this.label, h = h.info, l; a.isDatetimeAxis && h && (l = b.dateTimeLabelFormats[h.higherRanks[f] || h.unitName]); this.isFirst = i; this.isLast = j; b = a.labelFormatter.call({ axis: a, chart: c, isFirst: i, isLast: j, dateTimeLabelFormat: l, value: a.isLog ? ja(ba(k)) : k }); f = d && { width: x(1, t(d - 2 * (g.padding || 10))) + "px" }; f = u(f, g.style); if (s(e)) e && e.attr({ text: b }).css(f); else {
                d = { align: g.align }; if (Ka(g.rotation)) d.rotation = g.rotation;
                this.label = s(b) && g.enabled ? c.renderer.text(b, 0, 0, g.useHTML).attr(d).css(f).add(a.axisGroup) : null
            }
        }, getLabelSize: function () { var a = this.label, b = this.axis; return a ? (this.labelBBox = a.getBBox(!0))[b.horiz ? "height" : "width"] : 0 }, getLabelSides: function () { var a = this.axis.options.labels, b = this.labelBBox.width, a = b * { left: 0, center: 0.5, right: 1 }[a.align] - a.x; return [-a, b - a] }, handleOverflow: function (a, b) {
            var c = !0, d = this.axis, e = d.chart, f = this.isFirst, g = this.isLast, h = b.x, i = d.reversed, j = d.tickPositions; if (f || g) {
                var k =
                this.getLabelSides(), l = k[0], k = k[1], e = e.plotLeft, m = e + d.len, j = (d = d.ticks[j[a + (f ? 1 : -1)]]) && d.label.xy.x + d.getLabelSides()[f ? 0 : 1]; f && !i || g && i ? h + l < e && (h = e - l, d && h + k > j && (c = !1)) : h + k > m && (h = m - k, d && h + l < j && (c = !1)); b.x = h
            } return c
        }, getPosition: function (a, b, c, d) {
            var e = this.axis, f = e.chart, g = d && f.oldChartHeight || f.chartHeight; return {
                x: a ? e.translate(b + c, null, null, d) + e.transB : e.left + e.offset + (e.opposite ? (d && f.oldChartWidth || f.chartWidth) - e.right - e.left : 0), y: a ? g - e.bottom + e.offset - (e.opposite ? e.height : 0) : g - e.translate(b +
                c, null, null, d) - e.transB
            }
        }, getLabelPosition: function (a, b, c, d, e, f, g, h) { var i = this.axis, j = i.transA, k = i.reversed, i = i.staggerLines, a = a + e.x - (f && d ? f * j * (k ? -1 : 1) : 0), b = b + e.y - (f && !d ? f * j * (k ? 1 : -1) : 0); s(e.y) || (b += w(c.styles.lineHeight) * 0.9 - c.getBBox().height / 2); i && (b += g / (h || 1) % i * 16); return { x: a, y: b } }, getMarkPath: function (a, b, c, d, e, f) { return f.crispLine(["M", a, b, "L", a + (e ? 0 : -c), b + (e ? c : 0)], d) }, render: function (a, b) {
            var c = this.axis, d = c.options, e = c.chart.renderer, f = c.horiz, g = this.type, h = this.label, i = this.pos, j = d.labels,
            k = this.gridLine, l = g ? g + "Grid" : "grid", m = g ? g + "Tick" : "tick", p = d[l + "LineWidth"], q = d[l + "LineColor"], n = d[l + "LineDashStyle"], r = d[m + "Length"], l = d[m + "Width"] || 0, y = d[m + "Color"], s = d[m + "Position"], m = this.mark, t = j.step, v = !0, H = d.categories && d.tickmarkPlacement === "between" ? 0.5 : 0, J = this.getPosition(f, i, H, b), K = J.x, J = J.y, x = c.staggerLines; if (p) {
                i = c.getPlotLinePath(i + H, p, b); if (k === A) { k = { stroke: q, "stroke-width": p }; if (n) k.dashstyle = n; if (!g) k.zIndex = 1; this.gridLine = k = p ? e.path(i).attr(k).add(c.gridGroup) : null } if (!b && k && i) k[this.isNew ?
                "attr" : "animate"]({ d: i })
            } if (l) s === "inside" && (r = -r), c.opposite && (r = -r), g = this.getMarkPath(K, J, r, l, f, e), m ? m.animate({ d: g }) : this.mark = e.path(g).attr({ stroke: y, "stroke-width": l }).add(c.axisGroup); if (h && !isNaN(K)) h.xy = J = this.getLabelPosition(K, J, h, f, j, H, a, t), this.isFirst && !o(d.showFirstLabel, 1) || this.isLast && !o(d.showLastLabel, 1) ? v = !1 : !x && f && j.overflow === "justify" && !this.handleOverflow(a, J) && (v = !1), t && a % t && (v = !1), v ? (h[this.isNew ? "attr" : "animate"](J), h.show(), this.isNew = !1) : h.hide()
        }, destroy: function () {
            Ba(this,
            this.axis)
        }
    }; nb.prototype = {
        render: function () {
            var a = this, b = a.axis, c = b.horiz, d = (b.pointRange || 0) / 2, e = a.options, f = e.label, g = a.label, h = e.width, i = e.to, j = e.from, k = s(j) && s(i), l = e.value, m = e.dashStyle, p = a.svgElem, q = [], n, r = e.color, y = e.zIndex, t = e.events, u = b.chart.renderer; b.isLog && (j = ma(j), i = ma(i), l = ma(l)); if (h) { if (q = b.getPlotLinePath(l, h), d = { stroke: r, "stroke-width": h }, m) d.dashstyle = m } else if (k) {
                if (j = x(j, b.min - d), i = O(i, b.max + d), q = b.getPlotBandPath(j, i, e), d = { fill: r }, e.borderWidth) d.stroke = e.borderColor, d["stroke-width"] =
                e.borderWidth
            } else return; if (s(y)) d.zIndex = y; if (p) q ? p.animate({ d: q }, null, p.onGetPath) : (p.hide(), p.onGetPath = function () { p.show() }); else if (q && q.length && (a.svgElem = p = u.path(q).attr(d).add(), t)) for (n in e = function (b) { p.on(b, function (c) { t[b].apply(a, [c]) }) }, t) e(n); if (f && s(f.text) && q && q.length && b.width > 0 && b.height > 0) {
                f = C({ align: c && k && "center", x: c ? !k && 4 : 10, verticalAlign: !c && k && "middle", y: c ? k ? 16 : 10 : k ? 6 : -4, rotation: c && !k && 90 }, f); if (!g) a.label = g = u.text(f.text, 0, 0).attr({
                    align: f.textAlign || f.align, rotation: f.rotation,
                    zIndex: y
                }).css(f.style).add(); b = [q[1], q[4], o(q[6], q[1])]; q = [q[2], q[5], o(q[7], q[2])]; c = Pa(b); k = Pa(q); g.align(f, !1, { x: c, y: k, width: Aa(b) - c, height: Aa(q) - k }); g.show()
            } else g && g.hide(); return a
        }, destroy: function () { za(this.axis.plotLinesAndBands, this); Ba(this, this.axis) }
    }; Cb.prototype = {
        destroy: function () { Ba(this, this.axis) }, setTotal: function (a) { this.cum = this.total = a }, render: function (a) {
            var b = this.options.formatter.call(this); this.label ? this.label.attr({ text: b, visibility: "hidden" }) : this.label = this.axis.chart.renderer.text(b,
            0, 0).css(this.options.style).attr({ align: this.textAlign, rotation: this.options.rotation, visibility: "hidden" }).add(a)
        }, setOffset: function (a, b) { var c = this.axis, d = c.chart, e = d.inverted, f = this.isNegative, g = c.translate(this.total, 0, 0, 0, 1), c = c.translate(0), c = M(g - c), h = d.xAxis[0].translate(this.x) + a, d = d.plotHeight, e = { x: e ? f ? g : g - c : h, y: e ? d - h - b : f ? d - g - c : d - g, width: e ? c : b, height: e ? b : c }; this.label && this.label.align(this.alignOptions, null, e).attr({ visibility: "visible" }) }
    }; ob.prototype = {
        defaultOptions: {
            dateTimeLabelFormats: {
                millisecond: "%H:%M:%S.%L",
                second: "%H:%M:%S", minute: "%H:%M", hour: "%H:%M", day: "%e. %b", week: "%e. %b", month: "%b '%y", year: "%Y"
            }, endOnTick: !1, gridLineColor: "#C0C0C0", labels: G, lineColor: "#C0D0E0", lineWidth: 1, minPadding: 0.01, maxPadding: 0.01, minorGridLineColor: "#E0E0E0", minorGridLineWidth: 1, minorTickColor: "#A0A0A0", minorTickLength: 2, minorTickPosition: "outside", startOfWeek: 1, startOnTick: !1, tickColor: "#C0D0E0", tickLength: 5, tickmarkPlacement: "between", tickPixelInterval: 100, tickPosition: "outside", tickWidth: 1, title: {
                align: "middle", style: {
                    color: "#6D869F",
                    fontWeight: "bold"
                }
            }, type: "linear"
        }, defaultYAxisOptions: { endOnTick: !0, gridLineWidth: 1, tickPixelInterval: 72, showLastLabel: !0, labels: { align: "right", x: -8, y: 3 }, lineWidth: 0, maxPadding: 0.05, minPadding: 0.05, startOnTick: !0, tickWidth: 0, title: { rotation: 270, text: "Y-values" }, stackLabels: { enabled: !1, formatter: function () { return this.total }, style: G.style } }, defaultLeftAxisOptions: { labels: { align: "right", x: -8, y: null }, title: { rotation: 270 } }, defaultRightAxisOptions: { labels: { align: "left", x: 8, y: null }, title: { rotation: 90 } },
        defaultBottomAxisOptions: { labels: { align: "center", x: 0, y: 14 }, title: { rotation: 0 } }, defaultTopAxisOptions: { labels: { align: "center", x: 0, y: -5 }, title: { rotation: 0 } }, init: function (a, b) {
            var c = b.isX; this.horiz = a.inverted ? !c : c; this.xOrY = (this.isXAxis = c) ? "x" : "y"; this.opposite = b.opposite; this.side = this.horiz ? this.opposite ? 0 : 2 : this.opposite ? 1 : 3; this.setOptions(b); var d = this.options, e = d.type, f = e === "datetime"; this.labelFormatter = d.labels.formatter || this.defaultLabelFormatter; this.staggerLines = this.horiz && d.labels.staggerLines;
            this.userOptions = b; this.minPixelPadding = 0; this.chart = a; this.reversed = d.reversed; this.categories = d.categories; this.isLog = e === "logarithmic"; this.isLinked = s(d.linkedTo); this.isDatetimeAxis = f; this.ticks = {}; this.minorTicks = {}; this.plotLinesAndBands = []; this.alternateBands = {}; this.len = 0; this.minRange = this.userMinRange = d.minRange || d.maxZoom; this.range = d.range; this.offset = d.offset || 0; this.stacks = {}; this.min = this.max = null; var g, d = this.options.events; a.axes.push(this); a[c ? "xAxis" : "yAxis"].push(this); this.series =
            []; if (a.inverted && c && this.reversed === A) this.reversed = !0; this.removePlotLine = this.removePlotBand = this.removePlotBandOrLine; this.addPlotLine = this.addPlotBand = this.addPlotBandOrLine; for (g in d) I(this, g, d[g]); if (this.isLog) this.val2lin = ma, this.lin2val = ba
        }, setOptions: function (a) { this.options = C(this.defaultOptions, this.isXAxis ? {} : this.defaultYAxisOptions, [this.defaultTopAxisOptions, this.defaultRightAxisOptions, this.defaultBottomAxisOptions, this.defaultLeftAxisOptions][this.side], a) }, defaultLabelFormatter: function () {
            var a =
            this.axis, b = this.value, c = a.tickInterval, d = this.dateTimeLabelFormat; return a.categories ? b : d ? db(d, b) : c % 1E6 === 0 ? b / 1E6 + "M" : c % 1E3 === 0 ? b / 1E3 + "k" : b >= 1E3 ? Xa(b, 0) : Xa(b, -1)
        }, getSeriesExtremes: function () {
            var a = this, b = a.chart, c = a.stacks, d = [], e = [], f; a.dataMin = a.dataMax = null; n(a.series, function (g) {
                if (g.visible || !b.options.chart.ignoreHiddenSeries) {
                    var h = g.options, i, j, k, l, m, p, q, n, r, y = h.threshold, t, u = [], v = 0; if (a.isLog && y <= 0) y = h.threshold = null; if (a.isXAxis) {
                        if (h = g.xData, h.length) a.dataMin = O(o(a.dataMin, h[0]), Pa(h)),
                        a.dataMax = x(o(a.dataMax, h[0]), Aa(h))
                    } else {
                        var H, J, K, C = g.cropped, Ha = g.xAxis.getExtremes(), w = !!g.modifyValue; i = h.stacking; a.usePercentage = i === "percent"; if (i) m = h.stack, l = g.type + o(m, ""), p = "-" + l, g.stackKey = l, j = d[l] || [], d[l] = j, k = e[p] || [], e[p] = k; if (a.usePercentage) a.dataMin = 0, a.dataMax = 99; h = g.processedXData; q = g.processedYData; t = q.length; for (f = 0; f < t; f++) if (n = h[f], r = q[f], r !== null && r !== A && (i ? (J = (H = r < y) ? k : j, K = H ? p : l, r = J[n] = s(J[n]) ? J[n] + r : r, c[K] || (c[K] = {}), c[K][n] || (c[K][n] = new Cb(a, a.options.stackLabels, H, n,
                        m)), c[K][n].setTotal(r)) : w && (r = g.modifyValue(r)), C || (h[f + 1] || n) >= Ha.min && (h[f - 1] || n) <= Ha.max)) if (n = r.length) for (; n--;) r[n] !== null && (u[v++] = r[n]); else u[v++] = r; if (!a.usePercentage && u.length) a.dataMin = O(o(a.dataMin, u[0]), Pa(u)), a.dataMax = x(o(a.dataMax, u[0]), Aa(u)); if (s(y)) if (a.dataMin >= y) a.dataMin = y, a.ignoreMinPadding = !0; else if (a.dataMax < y) a.dataMax = y, a.ignoreMaxPadding = !0
                    }
                }
            })
        }, translate: function (a, b, c, d, e) {
            var f = this.len, g = 1, h = 0, i = d ? this.oldTransA : this.transA, d = d ? this.oldMin : this.min, e = this.options.ordinal ||
            this.isLog && e; if (!i) i = this.transA; c && (g *= -1, h = f); this.reversed && (g *= -1, h -= g * f); b ? (this.reversed && (a = f - a), a = a / i + d, e && (a = this.lin2val(a))) : (e && (a = this.val2lin(a)), a = g * (a - d) * i + h + g * this.minPixelPadding); return a
        }, getPlotLinePath: function (a, b, c) {
            var d = this.chart, e = this.left, f = this.top, g, h, i, a = this.translate(a, null, null, c), j = c && d.oldChartHeight || d.chartHeight, k = c && d.oldChartWidth || d.chartWidth, l; g = this.transB; c = h = t(a + g); g = i = t(j - a - g); if (isNaN(a)) l = !0; else if (this.horiz) {
                if (g = f, i = j - this.bottom, c < e || c > e + this.width) l =
                !0
            } else if (c = e, h = k - this.right, g < f || g > f + this.height) l = !0; return l ? null : d.renderer.crispLine(["M", c, g, "L", h, i], b || 0)
        }, getPlotBandPath: function (a, b) { var c = this.getPlotLinePath(b), d = this.getPlotLinePath(a); d && c ? d.push(c[4], c[5], c[1], c[2]) : d = null; return d }, getLinearTickPositions: function (a, b, c) { for (var d, b = ja(W(b / a) * a), c = ja(wa(c / a) * a), e = []; b <= c;) { e.push(b); b = ja(b + a); if (b === d) break; d = b } return e }, getLogTickPositions: function (a, b, c, d) {
            var e = this.options, f = this.len, g = []; if (!d) this._minorAutoInterval = null;
            if (a >= 0.5) a = t(a), g = this.getLinearTickPositions(a, b, c); else if (a >= 0.08) for (var f = W(b), h, i, j, k, l, e = a > 0.3 ? [1, 2, 4] : a > 0.15 ? [1, 2, 4, 6, 8] : [1, 2, 3, 4, 5, 6, 7, 8, 9]; f < c + 1 && !l; f++) { i = e.length; for (h = 0; h < i && !l; h++) j = ma(ba(f) * e[h]), j > b && g.push(k), k > c && (l = !0), k = j } else if (b = ba(b), c = ba(c), a = e[d ? "minorTickInterval" : "tickInterval"], a = o(a === "auto" ? null : a, this._minorAutoInterval, (c - b) * (e.tickPixelInterval / (d ? 5 : 1)) / ((d ? f / this.tickPositions.length : f) || 1)), a = gb(a, null, L.pow(10, W(L.log(a) / L.LN10))), g = Ea(this.getLinearTickPositions(a,
            b, c), ma), !d) this._minorAutoInterval = a / 5; if (!d) this.tickInterval = a; return g
        }, getMinorTickPositions: function () { var a = this.tickPositions, b = this.minorTickInterval, c = [], d, e; if (this.isLog) { e = a.length; for (d = 1; d < e; d++) c = c.concat(this.getLogTickPositions(b, a[d - 1], a[d], !0)) } else for (a = this.min + (a[0] - this.min) % b; a <= this.max; a += b) c.push(a); return c }, adjustForMinRange: function () {
            var a = this.options, b = this.min, c = this.max, d, e = this.dataMax - this.dataMin >= this.minRange, f, g, h, i, j; if (this.isXAxis && this.minRange === A &&
            !this.isLog) s(a.min) || s(a.max) ? this.minRange = null : (n(this.series, function (a) { i = a.xData; for (g = j = a.xIncrement ? 1 : i.length - 1; g > 0; g--) if (h = i[g] - i[g - 1], f === A || h < f) f = h }), this.minRange = O(f * 5, this.dataMax - this.dataMin)); if (c - b < this.minRange) { var k = this.minRange; d = (k - c + b) / 2; d = [b - d, o(a.min, b - d)]; if (e) d[2] = this.dataMin; b = Aa(d); c = [b + k, o(a.max, b + k)]; if (e) c[2] = this.dataMax; c = Pa(c); c - b < k && (d[0] = c - k, d[1] = o(a.min, c - k), b = Aa(d)) } this.min = b; this.max = c
        }, setAxisTranslation: function () {
            var a = this.max - this.min, b = 0, c, d, e = this.transA;
            if (this.isXAxis) this.isLinked ? b = this.linkedParent.pointRange : n(this.series, function (a) { b = x(b, a.pointRange); d = a.closestPointRange; !a.noSharedTooltip && s(d) && (c = s(c) ? O(c, d) : d) }), this.pointRange = b, this.closestPointRange = c; this.oldTransA = e; this.translationSlope = this.transA = e = this.len / (a + b || 1); this.transB = this.horiz ? this.left : this.bottom; this.minPixelPadding = e * (b / 2)
        }, setTickPositions: function (a) {
            var b = this, c = b.chart, d = b.options, e = b.isLog, f = b.isDatetimeAxis, g = b.isXAxis, h = b.isLinked, i = b.options.tickPositioner,
            j = d.maxPadding, k = d.minPadding, l = d.tickInterval, m = d.tickPixelInterval, p = b.categories; h ? (b.linkedParent = c[g ? "xAxis" : "yAxis"][d.linkedTo], c = b.linkedParent.getExtremes(), b.min = o(c.min, c.dataMin), b.max = o(c.max, c.dataMax), d.type !== b.linkedParent.options.type && mb(11, 1)) : (b.min = o(b.userMin, d.min, b.dataMin), b.max = o(b.userMax, d.max, b.dataMax)); if (e) !a && O(b.min, o(b.dataMin, b.min)) <= 0 && mb(10, 1), b.min = ja(ma(b.min)), b.max = ja(ma(b.max)); if (b.range && (b.userMin = b.min = x(b.min, b.max - b.range), b.userMax = b.max, a)) b.range =
            null; b.adjustForMinRange(); if (!p && !b.usePercentage && !h && s(b.min) && s(b.max)) { c = b.max - b.min || 1; if (!s(d.min) && !s(b.userMin) && k && (b.dataMin < 0 || !b.ignoreMinPadding)) b.min -= c * k; if (!s(d.max) && !s(b.userMax) && j && (b.dataMax > 0 || !b.ignoreMaxPadding)) b.max += c * j } b.tickInterval = b.min === b.max || b.min === void 0 || b.max === void 0 ? 1 : h && !l && m === b.linkedParent.options.tickPixelInterval ? b.linkedParent.tickInterval : o(l, p ? 1 : (b.max - b.min) * m / (b.len || 1)); g && !a && n(b.series, function (a) { a.processData(b.min !== b.oldMin || b.max !== b.oldMax) });
            b.setAxisTranslation(); b.beforeSetTickPositions && b.beforeSetTickPositions(); if (b.postProcessTickInterval) b.tickInterval = b.postProcessTickInterval(b.tickInterval); if (!f && !e && (a = L.pow(10, W(L.log(b.tickInterval) / L.LN10)), !s(d.tickInterval))) b.tickInterval = gb(b.tickInterval, null, a, d); b.minorTickInterval = d.minorTickInterval === "auto" && b.tickInterval ? b.tickInterval / 5 : d.minorTickInterval; b.tickPositions = i = d.tickPositions || i && i.apply(b, [b.min, b.max]); if (!i) i = f ? (b.getNonLinearTimeTicks || Pb)(Ob(b.tickInterval,
            d.units), b.min, b.max, d.startOfWeek, b.ordinalPositions, b.closestPointRange, !0) : e ? b.getLogTickPositions(b.tickInterval, b.min, b.max) : b.getLinearTickPositions(b.tickInterval, b.min, b.max), b.tickPositions = i; if (!h) e = i[0], f = i[i.length - 1], d.startOnTick ? b.min = e : b.min > e && i.shift(), d.endOnTick ? b.max = f : b.max < f && i.pop()
        }, setMaxTicks: function () {
            var a = this.chart, b = a.maxTicks, c = this.tickPositions, d = this.xOrY; b || (b = { x: 0, y: 0 }); if (!this.isLinked && !this.isDatetimeAxis && c.length > b[d] && this.options.alignTicks !== !1) b[d] =
            c.length; a.maxTicks = b
        }, adjustTickAmount: function () { var a = this.xOrY, b = this.tickPositions, c = this.chart.maxTicks; if (c && c[a] && !this.isDatetimeAxis && !this.categories && !this.isLinked && this.options.alignTicks !== !1) { var d = this.tickAmount, e = b.length; this.tickAmount = a = c[a]; if (e < a) { for (; b.length < a;) b.push(ja(b[b.length - 1] + this.tickInterval)); this.transA *= (e - 1) / (a - 1); this.max = b[b.length - 1] } if (s(d) && a !== d) this.isDirty = !0 } }, setScale: function () {
            var a = this.stacks, b, c, d, e; this.oldMin = this.min; this.oldMax = this.max;
            this.oldAxisLength = this.len; this.setAxisSize(); e = this.len !== this.oldAxisLength; n(this.series, function (a) { if (a.isDirtyData || a.isDirty || a.xAxis.isDirty) d = !0 }); if (e || d || this.isLinked || this.userMin !== this.oldUserMin || this.userMax !== this.oldUserMax) if (this.getSeriesExtremes(), this.setTickPositions(), this.oldUserMin = this.userMin, this.oldUserMax = this.userMax, !this.isDirty) this.isDirty = e || this.min !== this.oldMin || this.max !== this.oldMax; if (!this.isXAxis) for (b in a) for (c in a[b]) a[b][c].cum = a[b][c].total; this.setMaxTicks()
        },
        setExtremes: function (a, b, c, d, e) { var f = this, g = f.chart, c = o(c, !0), e = u(e, { min: a, max: b }); E(f, "setExtremes", e, function () { f.userMin = a; f.userMax = b; f.isDirtyExtremes = !0; c && g.redraw(d) }) }, setAxisSize: function () {
            var a = this.chart, b = this.options, c = b.offsetLeft || 0, d = b.offsetRight || 0; this.left = o(b.left, a.plotLeft + c); this.top = o(b.top, a.plotTop); this.width = o(b.width, a.plotWidth - c + d); this.height = o(b.height, a.plotHeight); this.bottom = a.chartHeight - this.height - this.top; this.right = a.chartWidth - this.width - this.left; this.len =
            x(this.horiz ? this.width : this.height, 0)
        }, getExtremes: function () { var a = this.isLog; return { min: a ? ja(ba(this.min)) : this.min, max: a ? ja(ba(this.max)) : this.max, dataMin: this.dataMin, dataMax: this.dataMax, userMin: this.userMin, userMax: this.userMax } }, getThreshold: function (a) { var b = this.isLog, c = b ? ba(this.min) : this.min, b = b ? ba(this.max) : this.max; c > a || a === null ? a = c : b < a && (a = b); return this.translate(a, 0, 1, 0, 1) }, addPlotBandOrLine: function (a) { a = (new nb(this, a)).render(); this.plotLinesAndBands.push(a); return a }, getOffset: function () {
            var a =
            this, b = a.chart, c = b.renderer, d = a.options, e = a.tickPositions, f = a.ticks, g = a.horiz, h = a.side, i, j = 0, k, l = 0, m = d.title, p = d.labels, q = 0, fa = b.axisOffset, r = [-1, 1, 1, -1][h], y; a.hasData = b = a.series.length && s(a.min) && s(a.max); a.showAxis = i = b || o(d.showEmpty, !0); if (!a.axisGroup) a.axisGroup = c.g("axis").attr({ zIndex: d.zIndex || 7 }).add(), a.gridGroup = c.g("grid").attr({ zIndex: d.gridZIndex || 1 }).add(); if (b || a.isLinked) n(e, function (b) { f[b] ? f[b].addLabel() : f[b] = new Sa(a, b) }), n(e, function (a) {
                if (h === 0 || h === 2 || { 1: "left", 3: "right" }[h] ===
                p.align) q = x(f[a].getLabelSize(), q)
            }), a.staggerLines && (q += (a.staggerLines - 1) * 16); else for (y in f) f[y].destroy(), delete f[y]; if (m && m.text) { if (!a.axisTitle) a.axisTitle = c.text(m.text, 0, 0, m.useHTML).attr({ zIndex: 7, rotation: m.rotation || 0, align: m.textAlign || { low: "left", middle: "center", high: "right" }[m.align] }).css(m.style).add(a.axisGroup), a.axisTitle.isNew = !0; if (i) j = a.axisTitle.getBBox()[g ? "height" : "width"], l = o(m.margin, g ? 5 : 10), k = m.offset; a.axisTitle[i ? "show" : "hide"]() } a.offset = r * o(d.offset, fa[h]); a.axisTitleMargin =
            o(k, q + l + (h !== 2 && q && r * d.labels[g ? "y" : "x"])); fa[h] = x(fa[h], a.axisTitleMargin + j + r * a.offset)
        }, getLinePath: function (a) { var b = this.chart, c = this.opposite, d = this.offset, e = this.horiz, f = this.left + (c ? this.width : 0) + d, c = b.chartHeight - this.bottom - (c ? this.height : 0) + d; return b.renderer.crispLine(["M", e ? this.left : f, e ? c : this.top, "L", e ? b.chartWidth - this.right : f, e ? c : b.chartHeight - this.bottom], a) }, getTitlePosition: function () {
            var a = this.horiz, b = this.left, c = this.top, d = this.len, e = this.options.title, f = a ? b : c, g = this.opposite,
            h = this.offset, i = w(e.style.fontSize || 12), d = { low: f + (a ? 0 : d), middle: f + d / 2, high: f + (a ? d : 0) }[e.align], b = (a ? c + this.height : b) + (a ? 1 : -1) * (g ? -1 : 1) * this.axisTitleMargin + (this.side === 2 ? i : 0); return { x: a ? d : b + (g ? this.width : 0) + h + (e.x || 0), y: a ? b - (g ? this.height : 0) + h : d + (e.y || 0) }
        }, render: function () {
            var a = this, b = a.chart, c = b.renderer, d = a.options, e = a.isLog, f = a.isLinked, g = a.tickPositions, h = a.axisTitle, i = a.stacks, j = a.ticks, k = a.minorTicks, l = a.alternateBands, m = d.stackLabels, p = d.alternateGridColor, q = d.lineWidth, o, r = b.hasRendered &&
            s(a.oldMin) && !isNaN(a.oldMin), y = a.showAxis, t, u; if (a.hasData || f) if (a.minorTickInterval && !a.categories && n(a.getMinorTickPositions(), function (b) { k[b] || (k[b] = new Sa(a, b, "minor")); r && k[b].isNew && k[b].render(null, !0); k[b].isActive = !0; k[b].render() }), n(g.slice(1).concat([g[0]]), function (b, c) { c = c === g.length - 1 ? 0 : c + 1; if (!f || b >= a.min && b <= a.max) j[b] || (j[b] = new Sa(a, b)), r && j[b].isNew && j[b].render(c, !0), j[b].isActive = !0, j[b].render(c) }), p && n(g, function (b, c) {
            if (c % 2 === 0 && b < a.max) l[b] || (l[b] = new nb(a)), t = b, u = g[c +
            1] !== A ? g[c + 1] : a.max, l[b].options = { from: e ? ba(t) : t, to: e ? ba(u) : u, color: p }, l[b].render(), l[b].isActive = !0
            }), !a._addedPlotLB) n((d.plotLines || []).concat(d.plotBands || []), function (b) { a.addPlotBandOrLine(b) }), a._addedPlotLB = !0; n([j, k, l], function (a) { for (var b in a) a[b].isActive ? a[b].isActive = !1 : (a[b].destroy(), delete a[b]) }); if (q) o = a.getLinePath(q), a.axisLine ? a.axisLine.animate({ d: o }) : a.axisLine = c.path(o).attr({ stroke: d.lineColor, "stroke-width": q, zIndex: 7 }).add(), a.axisLine[y ? "show" : "hide"](); if (h && y) h[h.isNew ?
            "attr" : "animate"](a.getTitlePosition()), h.isNew = !1; if (m && m.enabled) { var v, H, d = a.stackTotalGroup; if (!d) a.stackTotalGroup = d = c.g("stack-labels").attr({ visibility: "visible", zIndex: 6 }).add(); d.translate(b.plotLeft, b.plotTop); for (v in i) for (H in b = i[v], b) b[H].render(d) } a.isDirty = !1
        }, removePlotBandOrLine: function (a) { for (var b = this.plotLinesAndBands, c = b.length; c--;) b[c].id === a && b[c].destroy() }, setTitle: function (a, b) {
            var c = this.chart, d = this.options; d.title = C(d.title, a); this.axisTitle = void 0; this.isDirty = !0;
            o(b, !0) && c.redraw()
        }, redraw: function () { var a = this.chart; a.tracker.resetTracker && a.tracker.resetTracker(!0); this.render(); n(this.plotLinesAndBands, function (a) { a.render() }); n(this.series, function (a) { a.isDirty = !0 }) }, setCategories: function (a, b) { var c = this.chart; this.categories = this.userOptions.categories = a; n(this.series, function (a) { a.translate(); a.setTooltipPoints(!0) }); this.isDirty = !0; o(b, !0) && c.redraw() }, destroy: function () {
            var a = this, b = a.stacks, c; P(a); for (c in b) Ba(b[c]), b[c] = null; n([a.ticks, a.minorTicks,
            a.alternateBands, a.plotLinesAndBands], function (a) { Ba(a) }); n(["stackTotalGroup", "axisLine", "axisGroup", "gridGroup", "axisTitle"], function (b) { a[b] && (a[b] = a[b].destroy()) })
        }
    }; pb.prototype = {
        destroy: function () { n(this.crosshairs, function (a) { a && a.destroy() }); if (this.label) this.label = this.label.destroy() }, move: function (a, b) {
            var c = this; c.currentX = c.tooltipIsHidden ? a : (2 * c.currentX + a) / 3; c.currentY = c.tooltipIsHidden ? b : (c.currentY + b) / 2; c.label.attr({ x: c.currentX, y: c.currentY }); c.tooltipTick = M(a - c.currentX) > 1 ||
            M(b - c.currentY) > 1 ? function () { c.move(a, b) } : null
        }, hide: function () { if (!this.tooltipIsHidden) { var a = this.chart.hoverPoints; this.label.hide(); a && n(a, function (a) { a.setState() }); this.chart.hoverPoints = null; this.tooltipIsHidden = !0 } }, hideCrosshairs: function () { n(this.crosshairs, function (a) { a && a.hide() }) }, getAnchor: function (a, b) {
            var c, d = this.chart, e = d.inverted, f = 0, g = 0, a = na(a); c = a[0].tooltipPos; c || (n(a, function (a) { f += a.plotX; g += a.plotLow ? (a.plotLow + a.plotHigh) / 2 : a.plotY }), f /= a.length, g /= a.length, c = [e ? d.plotWidth -
                g : f, this.shared && !e && a.length > 1 && b ? b.chartY - d.plotTop : e ? d.plotHeight - f : g]); return Ea(c, t)
        }, getPosition: function (a, b, c) { var d = this.chart, e = d.plotLeft, f = d.plotTop, g = d.plotWidth, h = d.plotHeight, i = o(this.options.distance, 12), j = c.plotX, c = c.plotY, d = j + e + (d.inverted ? i : -a - i), k = c - b + f + 15, l; d < 7 && (d = e + j + i); d + a > e + g && (d -= d + a - (e + g), k = c - b + f - i, l = !0); k < f + 5 && (k = f + 5, l && c >= k && c <= k + b && (k = c + f + i)); k + b > f + h && (k = x(f, f + h - b - i)); return { x: d, y: k } }, refresh: function (a, b) {
            function c() {
                var a = this.points || na(this), b = a[0].series, c; c = [b.tooltipHeaderFormatter(a[0].key)];
                n(a, function (a) { b = a.series; c.push(b.tooltipFormatter && b.tooltipFormatter(a) || a.point.tooltipFormatter(b.tooltipOptions.pointFormat)) }); c.push(f.footerFormat || ""); return c.join("")
            } var d = this.chart, e = this.label, f = this.options, g, h, i, j = {}, k, l = []; k = f.formatter || c; var j = d.hoverPoints, m, p = f.crosshairs; i = this.shared; h = this.getAnchor(a, b); g = h[0]; h = h[1]; i && (!a.series || !a.series.noSharedTooltip) ? (j && n(j, function (a) { a.setState() }), d.hoverPoints = a, n(a, function (a) { a.setState("hover"); l.push(a.getLabelConfig()) }),
            j = { x: a[0].category, y: a[0].y }, j.points = l, a = a[0]) : j = a.getLabelConfig(); k = k.call(j); j = a.series; i = i || !j.isCartesian || j.tooltipOutsidePlot || d.isInsidePlot(g, h); k === !1 || !i ? this.hide() : (this.tooltipIsHidden && e.show(), e.attr({ text: k }), m = f.borderColor || a.color || j.color || "#606060", e.attr({ stroke: m }), e = (f.positioner || this.getPosition).call(this, e.width, e.height, { plotX: g, plotY: h }), this.move(t(e.x), t(e.y)), this.tooltipIsHidden = !1); if (p) {
                p = na(p); for (e = p.length; e--;) if (i = a.series[e ? "yAxis" : "xAxis"], p[e] && i) if (i =
                i.getPlotLinePath(e ? o(a.stackY, a.y) : a.x, 1), this.crosshairs[e]) this.crosshairs[e].attr({ d: i, visibility: "visible" }); else { j = { "stroke-width": p[e].width || 1, stroke: p[e].color || "#C0C0C0", zIndex: p[e].zIndex || 2 }; if (p[e].dashStyle) j.dashstyle = p[e].dashStyle; this.crosshairs[e] = d.renderer.path(i).attr(j).add() }
            } E(d, "tooltipRefresh", { text: k, x: g + d.plotLeft, y: h + d.plotTop, borderColor: m })
        }, tick: function () { this.tooltipTick && this.tooltipTick() }
    }; Db.prototype = {
        normalizeMouseEvent: function (a) {
            var b, c, d, a = a || N.event; if (!a.target) a.target =
            a.srcElement; if (a.originalEvent) a = a.originalEvent; if (a.event) a = a.event; d = a.touches ? a.touches.item(0) : a; this.chartPosition = b = Jb(this.chart.container); d.pageX === A ? (c = a.x, b = a.y) : (c = d.pageX - b.left, b = d.pageY - b.top); return u(a, { chartX: t(c), chartY: t(b) })
        }, getMouseCoordinates: function (a) { var b = { xAxis: [], yAxis: [] }, c = this.chart; n(c.axes, function (d) { var e = d.isXAxis; b[e ? "xAxis" : "yAxis"].push({ axis: d, value: d.translate((c.inverted ? !e : e) ? a.chartX - c.plotLeft : c.plotHeight - a.chartY + c.plotTop, !0) }) }); return b }, onmousemove: function (a) {
            var b =
            this.chart, c = b.series, d, e, f = b.hoverPoint, g = b.hoverSeries, h, i, j = b.chartWidth, k = b.inverted ? b.plotHeight + b.plotTop - a.chartY : a.chartX - b.plotLeft; if (b.tooltip && this.options.tooltip.shared && (!g || !g.noSharedTooltip)) {
                e = []; h = c.length; for (i = 0; i < h; i++) if (c[i].visible && c[i].options.enableMouseTracking !== !1 && !c[i].noSharedTooltip && c[i].tooltipPoints.length) d = c[i].tooltipPoints[k], d._dist = M(k - d.plotX), j = O(j, d._dist), e.push(d); for (h = e.length; h--;) e[h]._dist > j && e.splice(h, 1); if (e.length && e[0].plotX !== this.hoverX) b.tooltip.refresh(e,
                a), this.hoverX = e[0].plotX
            } if (g && g.tracker && (d = g.tooltipPoints[k]) && d !== f) d.onMouseOver()
        }, resetTracker: function (a) { var b = this.chart, c = b.hoverSeries, d = b.hoverPoint, e = b.hoverPoints || d, b = b.tooltip; (a = a && b && e) && na(e)[0].plotX === A && (a = !1); if (a) b.refresh(e); else { if (d) d.onMouseOut(); if (c) c.onMouseOut(); b && (b.hide(), b.hideCrosshairs()); this.hoverX = null } }, setDOMEvents: function () {
            function a() {
                if (b.selectionMarker) {
                    var f = { xAxis: [], yAxis: [] }, g = b.selectionMarker.getBBox(), h = g.x - c.plotLeft, l = g.y - c.plotTop, m; e &&
                    (n(c.axes, function (a) { if (a.options.zoomEnabled !== !1) { var b = a.isXAxis, d = c.inverted ? !b : b, e = a.translate(d ? h : c.plotHeight - l - g.height, !0, 0, 0, 1), d = a.translate(d ? h + g.width : c.plotHeight - l, !0, 0, 0, 1); !isNaN(e) && !isNaN(d) && (f[b ? "xAxis" : "yAxis"].push({ axis: a, min: O(e, d), max: x(e, d) }), m = !0) } }), m && E(c, "selection", f, function (a) { c.zoom(a) })); b.selectionMarker = b.selectionMarker.destroy()
                } if (c) F(d, { cursor: "auto" }), c.cancelClick = e, c.mouseIsDown = e = !1; P(B, ea ? "touchend" : "mouseup", a)
            } var b = this, c = b.chart, d = c.container, e,
            f = b.zoomX && !c.inverted || b.zoomY && c.inverted, g = b.zoomY && !c.inverted || b.zoomX && c.inverted; b.hideTooltipOnMouseMove = function (a) { Kb(a); b.chartPosition && c.hoverSeries && c.hoverSeries.isCartesian && !c.isInsidePlot(a.pageX - b.chartPosition.left - c.plotLeft, a.pageY - b.chartPosition.top - c.plotTop) && b.resetTracker() }; b.hideTooltipOnMouseLeave = function () { b.resetTracker(); b.chartPosition = null }; d.onmousedown = function (d) {
                d = b.normalizeMouseEvent(d); !ea && d.preventDefault && d.preventDefault(); c.mouseIsDown = !0; c.cancelClick =
                !1; c.mouseDownX = b.mouseDownX = d.chartX; b.mouseDownY = d.chartY; I(B, ea ? "touchend" : "mouseup", a)
            }; var h = function (a) {
                if (!a || !(a.touches && a.touches.length > 1)) {
                    a = b.normalizeMouseEvent(a); if (!ea) a.returnValue = !1; var d = a.chartX, h = a.chartY, l = !c.isInsidePlot(d - c.plotLeft, h - c.plotTop); ea && a.type === "touchstart" && (z(a.target, "isTracker") ? c.runTrackerClick || a.preventDefault() : !c.runChartClick && !l && a.preventDefault()); if (l) d < c.plotLeft ? d = c.plotLeft : d > c.plotLeft + c.plotWidth && (d = c.plotLeft + c.plotWidth), h < c.plotTop ? h =
                    c.plotTop : h > c.plotTop + c.plotHeight && (h = c.plotTop + c.plotHeight); if (c.mouseIsDown && a.type !== "touchstart") {
                        if (e = Math.sqrt(Math.pow(b.mouseDownX - d, 2) + Math.pow(b.mouseDownY - h, 2)), e > 10) {
                            a = c.isInsidePlot(b.mouseDownX - c.plotLeft, b.mouseDownY - c.plotTop); if (c.hasCartesianSeries && (b.zoomX || b.zoomY) && a && !b.selectionMarker) b.selectionMarker = c.renderer.rect(c.plotLeft, c.plotTop, f ? 1 : c.plotWidth, g ? 1 : c.plotHeight, 0).attr({ fill: b.options.chart.selectionMarkerFill || "rgba(69,114,167,0.25)", zIndex: 7 }).add(); if (b.selectionMarker &&
                            f) { var m = d - b.mouseDownX; b.selectionMarker.attr({ width: M(m), x: (m > 0 ? 0 : m) + b.mouseDownX }) } b.selectionMarker && g && (h -= b.mouseDownY, b.selectionMarker.attr({ height: M(h), y: (h > 0 ? 0 : h) + b.mouseDownY })); a && !b.selectionMarker && b.options.chart.panning && c.pan(d)
                        }
                    } else if (!l) b.onmousemove(a); return l || !c.hasCartesianSeries
                }
            }; d.onmousemove = h; I(d, "mouseleave", b.hideTooltipOnMouseLeave); I(B, "mousemove", b.hideTooltipOnMouseMove); d.ontouchstart = function (a) { if (b.zoomX || b.zoomY) d.onmousedown(a); h(a) }; d.ontouchmove = h; d.ontouchend =
            function () { e && b.resetTracker() }; d.onclick = function (a) {
                var d = c.hoverPoint, e, f, a = b.normalizeMouseEvent(a); a.cancelBubble = !0; if (!c.cancelClick) d && (z(a.target, "isTracker") || z(a.target.parentNode, "isTracker")) ? (e = d.plotX, f = d.plotY, u(d, { pageX: b.chartPosition.left + c.plotLeft + (c.inverted ? c.plotWidth - f : e), pageY: b.chartPosition.top + c.plotTop + (c.inverted ? c.plotHeight - e : f) }), E(d.series, "click", u(a, { point: d })), d.firePointEvent("click", a)) : (u(a, b.getMouseCoordinates(a)), c.isInsidePlot(a.chartX - c.plotLeft, a.chartY -
                c.plotTop) && E(c, "click", a))
            }
        }, destroy: function () { var a = this.chart, b = a.container; if (a.trackerGroup) a.trackerGroup = a.trackerGroup.destroy(); P(b, "mouseleave", this.hideTooltipOnMouseLeave); P(B, "mousemove", this.hideTooltipOnMouseMove); b.onclick = b.onmousedown = b.onmousemove = b.ontouchstart = b.ontouchend = b.ontouchmove = null; clearInterval(this.tooltipInterval) }, init: function (a, b) {
            if (!a.trackerGroup) a.trackerGroup = a.renderer.g("tracker").attr({ zIndex: 9 }).add(); if (b.enabled) a.tooltip = new pb(a, b), this.tooltipInterval =
            setInterval(function () { a.tooltip.tick() }, 32); this.setDOMEvents()
        }
    }; qb.prototype = {
        init: function (a) { var b = this, c = b.options = a.options.legend; if (c.enabled) { var d = c.itemStyle, e = o(c.padding, 8), f = c.itemMarginTop || 0; b.baseline = w(d.fontSize) + 3 + f; b.itemStyle = d; b.itemHiddenStyle = C(d, c.itemHiddenStyle); b.itemMarginTop = f; b.padding = e; b.initialItemX = e; b.initialItemY = e - 5; b.maxItemWidth = 0; b.chart = a; b.itemHeight = 0; b.lastLineHeight = 0; b.render(); I(b.chart, "endResize", function () { b.positionCheckboxes() }) } }, colorizeItem: function (a,
        b) { var c = this.options, d = a.legendItem, e = a.legendLine, f = a.legendSymbol, g = this.itemHiddenStyle.color, c = b ? c.itemStyle.color : g, g = b ? a.color : g; d && d.css({ fill: c }); e && e.attr({ stroke: g }); f && f.attr({ stroke: g, fill: g }) }, positionItem: function (a) { var b = this.options, c = b.symbolPadding, b = !b.rtl, d = a._legendItemPos, e = d[0], d = d[1], f = a.checkbox; a.legendGroup && a.legendGroup.translate(b ? e : this.legendWidth - e - 2 * c - 4, d); if (f) f.x = e, f.y = d }, destroyItem: function (a) {
            var b = a.checkbox; n(["legendItem", "legendLine", "legendSymbol", "legendGroup"],
            function (b) { a[b] && a[b].destroy() }); b && Qa(a.checkbox)
        }, destroy: function () { var a = this.group, b = this.box; if (b) this.box = b.destroy(); if (a) this.group = a.destroy() }, positionCheckboxes: function () { var a = this; n(a.allItems, function (b) { var c = b.checkbox, d = a.group.alignAttr; c && F(c, { left: d.translateX + b.legendItemWidth + c.x - 20 + "px", top: d.translateY + c.y + 3 + "px" }) }) }, renderItem: function (a) {
            var q; var b = this, c = b.chart, d = c.renderer, e = b.options, f = e.layout === "horizontal", g = e.symbolWidth, h = e.symbolPadding, i = b.itemStyle, j = b.itemHiddenStyle,
            k = b.padding, l = !e.rtl, m = e.width, p = e.itemMarginBottom || 0, n = b.itemMarginTop, o = b.initialItemX, r = a.legendItem, s = a.series || a, t = s.options, u = t.showCheckbox; if (!r && (a.legendGroup = d.g("legend-item").attr({ zIndex: 1 }).add(b.scrollGroup), s.drawLegendSymbol(b, a), a.legendItem = r = d.text(e.labelFormatter.call(a), l ? g + h : -h, b.baseline, e.useHTML).css(C(a.visible ? i : j)).attr({ align: l ? "left" : "right", zIndex: 2 }).add(a.legendGroup), a.legendGroup.on("mouseover", function () { a.setState("hover"); r.css(b.options.itemHoverStyle) }).on("mouseout",
            function () { r.css(a.visible ? i : j); a.setState() }).on("click", function (b) { var c = function () { a.setVisible() }, b = { browserEvent: b }; a.firePointEvent ? a.firePointEvent("legendItemClick", b, c) : E(a, "legendItemClick", b, c) }), b.colorizeItem(a, a.visible), t && u)) a.checkbox = S("input", { type: "checkbox", checked: a.selected, defaultChecked: a.selected }, e.itemCheckboxStyle, c.container), I(a.checkbox, "click", function (b) { E(a, "checkboxClick", { checked: b.target.checked }, function () { a.select() }) }); d = r.getBBox(); q = a.legendItemWidth = e.itemWidth ||
            g + h + d.width + k + (u ? 20 : 0), e = q; b.itemHeight = g = d.height; if (f && b.itemX - o + e > (m || c.chartWidth - 2 * k - o)) b.itemX = o, b.itemY += n + b.lastLineHeight + p, b.lastLineHeight = 0; b.maxItemWidth = x(b.maxItemWidth, e); b.lastItemY = n + b.itemY + p; b.lastLineHeight = x(g, b.lastLineHeight); a._legendItemPos = [b.itemX, b.itemY]; f ? b.itemX += e : (b.itemY += n + g + p, b.lastLineHeight = g); b.offsetWidth = m || x(f ? b.itemX - o : e, b.offsetWidth)
        }, render: function () {
            var a = this, b = a.chart, c = b.renderer, d = a.group, e, f, g, h, i = a.box, j = a.options, k = a.padding, l = j.borderWidth,
            m = j.backgroundColor; a.itemX = a.initialItemX; a.itemY = a.initialItemY; a.offsetWidth = 0; a.lastItemY = 0; if (!d) a.group = d = c.g("legend").attr({ zIndex: 7 }).add(), a.contentGroup = c.g().attr({ zIndex: 1 }).add(d), a.scrollGroup = c.g().add(a.contentGroup), a.clipRect = c.clipRect(0, 0, 9999, b.chartHeight), a.contentGroup.clip(a.clipRect); e = []; n(b.series, function (a) { var b = a.options; b.showInLegend && (e = e.concat(a.legendItems || (b.legendType === "point" ? a.data : a))) }); Qb(e, function (a, b) {
                return (a.options.legendIndex || 0) - (b.options.legendIndex ||
                0)
            }); j.reversed && e.reverse(); a.allItems = e; a.display = f = !!e.length; n(e, function (b) { a.renderItem(b) }); g = j.width || a.offsetWidth; h = a.lastItemY + a.lastLineHeight; h = a.handleOverflow(h); if (l || m) { g += k; h += k; if (i) { if (g > 0 && h > 0) i[i.isNew ? "attr" : "animate"](i.crisp(null, null, null, g, h)), i.isNew = !1 } else a.box = i = c.rect(0, 0, g, h, j.borderRadius, l || 0).attr({ stroke: j.borderColor, "stroke-width": l || 0, fill: m || U }).add(d).shadow(j.shadow), i.isNew = !0; i[f ? "show" : "hide"]() } a.legendWidth = g; a.legendHeight = h; n(e, function (b) { a.positionItem(b) });
            f && d.align(u({ width: g, height: h }, j), !0, b.spacingBox); b.isResizing || this.positionCheckboxes()
        }, handleOverflow: function (a) {
            var b = this, c = this.chart, d = c.renderer, e = this.options, f = e.y, f = c.spacingBox.height + (e.verticalAlign === "top" ? -f : f) - this.padding, g = e.maxHeight, h = this.clipRect, i = e.navigation, j = o(i.animation, !0), k = i.arrowSize || 12, l = this.nav; e.layout === "horizontal" && (f /= 2); g && (f = O(f, g)); if (a > f) {
                this.clipHeight = c = f - 20; this.pageCount = wa(a / c); this.currentPage = o(this.currentPage, 1); this.fullHeight = a; h.attr({ height: c });
                if (!l) this.nav = l = d.g().attr({ zIndex: 1 }).add(this.group), this.up = d.symbol("triangle", 0, 0, k, k).on("click", function () { b.scroll(-1, j) }).add(l), this.pager = d.text("", 15, 10).css(i.style).add(l), this.down = d.symbol("triangle-down", 0, 0, k, k).on("click", function () { b.scroll(1, j) }).add(l); b.scroll(0); a = f
            } else l && (h.attr({ height: c.chartHeight }), l.hide(), this.scrollGroup.attr({ translateY: 1 })); return a
        }, scroll: function (a, b) {
            var c = this.pageCount, d = this.currentPage + a, e = this.clipHeight, f = this.options.navigation, g = f.activeColor,
            f = f.inactiveColor, h = this.pager, i = this.padding; d > c && (d = c); if (d > 0) b !== A && ua(b, this.chart), this.nav.attr({ translateX: i, translateY: e + 7, visibility: "visible" }), this.up.attr({ fill: d === 1 ? f : g }).css({ cursor: d === 1 ? "default" : "pointer" }), h.attr({ text: d + "/" + this.pageCount }), this.down.attr({ x: 18 + this.pager.getBBox().width, fill: d === c ? f : g }).css({ cursor: d === c ? "default" : "pointer" }), this.scrollGroup.animate({ translateY: -O(e * (d - 1), this.fullHeight - e + i) + 1 }), h.attr({ text: d + "/" + c }), this.currentPage = d
        }
    }; rb.prototype = {
        initSeries: function (a) {
            var b =
            this.options.chart, b = new Y[a.type || b.type || b.defaultSeriesType]; b.init(this, a); return b
        }, addSeries: function (a, b, c) { var d = this; a && (ua(c, d), b = o(b, !0), E(d, "addSeries", { options: a }, function () { d.initSeries(a); d.isDirtyLegend = !0; b && d.redraw() })) }, isInsidePlot: function (a, b) { return a >= 0 && a <= this.plotWidth && b >= 0 && b <= this.plotHeight }, adjustTickAmounts: function () { this.options.chart.alignTicks !== !1 && n(this.axes, function (a) { a.adjustTickAmount() }); this.maxTicks = null }, redraw: function (a) {
            var b = this.axes, c = this.series,
            d = this.tracker, e = this.legend, f = this.isDirtyLegend, g, h = this.isDirtyBox, i = c.length, j = i, k = this.clipRect, l = this.renderer, m = l.isHidden(); ua(a, this); for (m && this.cloneRenderTo() ; j--;) if (a = c[j], a.isDirty && a.options.stacking) { g = !0; break } if (g) for (j = i; j--;) if (a = c[j], a.options.stacking) a.isDirty = !0; n(c, function (a) { a.isDirty && a.options.legendType === "point" && (f = !0) }); if (f && e.options.enabled) e.render(), this.isDirtyLegend = !1; if (this.hasCartesianSeries) {
                if (!this.isResizing) this.maxTicks = null, n(b, function (a) { a.setScale() });
                this.adjustTickAmounts(); this.getMargins(); n(b, function (a) { if (a.isDirtyExtremes) a.isDirtyExtremes = !1, E(a, "afterSetExtremes", a.getExtremes()); if (a.isDirty || h || g) a.redraw(), h = !0 })
            } h && (this.drawChartBox(), k && (Fa(k), k.animate({ width: this.plotSizeX, height: this.plotSizeY + 1 }))); n(c, function (a) { a.isDirty && a.visible && (!a.isCartesian || a.xAxis) && a.redraw() }); d && d.resetTracker && d.resetTracker(!0); l.draw(); E(this, "redraw"); m && this.cloneRenderTo(!0)
        }, showLoading: function (a) {
            var b = this.options, c = this.loadingDiv,
            d = b.loading; if (!c) this.loadingDiv = c = S(ia, { className: "highcharts-loading" }, u(d.style, { left: this.plotLeft + "px", top: this.plotTop + "px", width: this.plotWidth + "px", height: this.plotHeight + "px", zIndex: 10, display: U }), this.container), this.loadingSpan = S("span", null, d.labelStyle, c); this.loadingSpan.innerHTML = a || b.lang.loading; if (!this.loadingShown) F(c, { opacity: 0, display: "" }), eb(c, { opacity: d.style.opacity }, { duration: d.showDuration || 0 }), this.loadingShown = !0
        }, hideLoading: function () {
            var a = this.options, b = this.loadingDiv;
            b && eb(b, { opacity: 0 }, { duration: a.loading.hideDuration || 100, complete: function () { F(b, { display: U }) } }); this.loadingShown = !1
        }, get: function (a) { var b = this.axes, c = this.series, d, e; for (d = 0; d < b.length; d++) if (b[d].options.id === a) return b[d]; for (d = 0; d < c.length; d++) if (c[d].options.id === a) return c[d]; for (d = 0; d < c.length; d++) { e = c[d].points || []; for (b = 0; b < e.length; b++) if (e[b].id === a) return e[b] } return null }, getAxes: function () {
            var a = this, b = this.options, c = b.xAxis || {}, b = b.yAxis || {}, c = na(c); n(c, function (a, b) {
                a.index = b; a.isX =
                !0
            }); b = na(b); n(b, function (a, b) { a.index = b }); c = c.concat(b); n(c, function (b) { new ob(a, b) }); a.adjustTickAmounts()
        }, getSelectedPoints: function () { var a = []; n(this.series, function (b) { a = a.concat(ub(b.points, function (a) { return a.selected })) }); return a }, getSelectedSeries: function () { return ub(this.series, function (a) { return a.selected }) }, showResetZoom: function () {
            var a = this, b = V.lang, c = a.options.chart.resetZoomButton, d = c.theme, e = d.states, f = c.relativeTo === "chart" ? null : { x: a.plotLeft, y: a.plotTop, width: a.plotWidth, height: a.plotHeight };
            this.resetZoomButton = a.renderer.button(b.resetZoom, null, null, function () { a.zoomOut() }, d, e && e.hover).attr({ align: c.position.align, title: b.resetZoomTitle }).add().align(c.position, !1, f)
        }, zoomOut: function () { var a = this, b = a.resetZoomButton; E(a, "selection", { resetSelection: !0 }, function () { a.zoom() }); if (b) a.resetZoomButton = b.destroy() }, zoom: function (a) {
            var b = this, c = b.options.chart, d; b.resetZoomEnabled !== !1 && !b.resetZoomButton && b.showResetZoom(); !a || a.resetSelection ? n(b.axes, function (a) {
                a.options.zoomEnabled !==
                !1 && (a.setExtremes(null, null, !1), d = !0)
            }) : n(a.xAxis.concat(a.yAxis), function (a) { var c = a.axis; if (b.tracker[c.isXAxis ? "zoomX" : "zoomY"]) c.setExtremes(a.min, a.max, !1), d = !0 }); d && b.redraw(o(c.animation, b.pointCount < 100))
        }, pan: function (a) {
            var b = this.xAxis[0], c = this.mouseDownX, d = b.pointRange / 2, e = b.getExtremes(), f = b.translate(c - a, !0) + d, c = b.translate(c + this.plotWidth - a, !0) - d; (d = this.hoverPoints) && n(d, function (a) { a.setState() }); b.series.length && f > O(e.dataMin, e.min) && c < x(e.dataMax, e.max) && b.setExtremes(f, c, !0,
            !1); this.mouseDownX = a; F(this.container, { cursor: "move" })
        }, setTitle: function (a, b) { var c = this, d = c.options, e; c.chartTitleOptions = e = C(d.title, a); c.chartSubtitleOptions = d = C(d.subtitle, b); n([["title", a, e], ["subtitle", b, d]], function (a) { var b = a[0], d = c[b], e = a[1], a = a[2]; d && e && (d = d.destroy()); a && a.text && !d && (c[b] = c.renderer.text(a.text, 0, 0, a.useHTML).attr({ align: a.align, "class": "highcharts-" + b, zIndex: a.zIndex || 4 }).css(a.style).add().align(a, !1, c.spacingBox)) }) }, getChartSize: function () {
            var a = this.options.chart,
            b = this.renderToClone || this.renderTo; this.containerWidth = Va(b, "width"); this.containerHeight = Va(b, "height"); this.chartWidth = a.width || this.containerWidth || 600; this.chartHeight = a.height || (this.containerHeight > 19 ? this.containerHeight : 400)
        }, cloneRenderTo: function (a) {
            var b = this.renderToClone, c = this.container; a ? b && (this.renderTo.appendChild(c), Qa(b), delete this.renderToClone) : (c && this.renderTo.removeChild(c), this.renderToClone = b = this.renderTo.cloneNode(0), F(b, { position: "absolute", top: "-9999px", display: "block" }),
            B.body.appendChild(b), c && b.appendChild(c))
        }, getContainer: function () {
            var a, b = this.options.chart, c, d, e; this.renderTo = a = b.renderTo; e = "highcharts-" + sb++; if (ra(a)) this.renderTo = a = B.getElementById(a); a || mb(13, !0); a.innerHTML = ""; a.offsetWidth || this.cloneRenderTo(); this.getChartSize(); c = this.chartWidth; d = this.chartHeight; this.container = a = S(ia, { className: "highcharts-container" + (b.className ? " " + b.className : ""), id: e }, u({ position: "relative", overflow: "hidden", width: c + "px", height: d + "px", textAlign: "left", lineHeight: "normal" },
            b.style), this.renderToClone || a); this.renderer = b.forExport ? new qa(a, c, d, !0) : new Ta(a, c, d); ga && this.renderer.create(this, a, c, d)
        }, getMargins: function () {
            var a = this.options.chart, b = a.spacingTop, c = a.spacingRight, d = a.spacingBottom, a = a.spacingLeft, e, f = this.legend, g = this.optionsMarginTop, h = this.optionsMarginLeft, i = this.optionsMarginRight, j = this.optionsMarginBottom, k = this.chartTitleOptions, l = this.chartSubtitleOptions, m = this.options.legend, p = o(m.margin, 10), q = m.x, t = m.y, r = m.align, y = m.verticalAlign; this.resetMargins();
            e = this.axisOffset; if ((this.title || this.subtitle) && !s(this.optionsMarginTop)) if (l = x(this.title && !k.floating && !k.verticalAlign && k.y || 0, this.subtitle && !l.floating && !l.verticalAlign && l.y || 0)) this.plotTop = x(this.plotTop, l + o(k.margin, 15) + b); if (f.display && !m.floating) if (r === "right") { if (!s(i)) this.marginRight = x(this.marginRight, f.legendWidth - q + p + c) } else if (r === "left") { if (!s(h)) this.plotLeft = x(this.plotLeft, f.legendWidth + q + p + a) } else if (y === "top") { if (!s(g)) this.plotTop = x(this.plotTop, f.legendHeight + t + p + b) } else if (y ===
            "bottom" && !s(j)) this.marginBottom = x(this.marginBottom, f.legendHeight - t + p + d); this.extraBottomMargin && (this.marginBottom += this.extraBottomMargin); this.extraTopMargin && (this.plotTop += this.extraTopMargin); this.hasCartesianSeries && n(this.axes, function (a) { a.getOffset() }); s(h) || (this.plotLeft += e[3]); s(g) || (this.plotTop += e[0]); s(j) || (this.marginBottom += e[2]); s(i) || (this.marginRight += e[1]); this.setChartSize()
        }, initReflow: function () {
            function a(a) {
                var g = c.width || Va(d, "width"), h = c.height || Va(d, "height"), a = a ?
                a.target : N; if (g && h && (a === N || a === B)) { if (g !== b.containerWidth || h !== b.containerHeight) clearTimeout(e), e = setTimeout(function () { b.resize(g, h, !1) }, 100); b.containerWidth = g; b.containerHeight = h }
            } var b = this, c = b.options.chart, d = b.renderTo, e; I(N, "resize", a); I(b, "destroy", function () { P(N, "resize", a) })
        }, fireEndResize: function () { var a = this; a && E(a, "endResize", null, function () { a.isResizing -= 1 }) }, resize: function (a, b, c) {
            var d, e, f = this.title, g = this.subtitle; this.isResizing += 1; ua(c, this); this.oldChartHeight = this.chartHeight;
            this.oldChartWidth = this.chartWidth; if (s(a)) this.chartWidth = d = t(a); if (s(b)) this.chartHeight = e = t(b); F(this.container, { width: d + "px", height: e + "px" }); this.renderer.setSize(d, e, c); this.plotWidth = d - this.plotLeft - this.marginRight; this.plotHeight = e - this.plotTop - this.marginBottom; this.maxTicks = null; n(this.axes, function (a) { a.isDirty = !0; a.setScale() }); n(this.series, function (a) { a.isDirty = !0 }); this.isDirtyBox = this.isDirtyLegend = !0; this.getMargins(); a = this.spacingBox; f && f.align(null, null, a); g && g.align(null, null,
            a); this.redraw(c); this.oldChartHeight = null; E(this, "resize"); Ra === !1 ? this.fireEndResize() : setTimeout(this.fireEndResize, Ra && Ra.duration || 500)
        }, setChartSize: function () {
            var a = this.inverted, b = this.chartWidth, c = this.chartHeight, d = this.options.chart, e = d.spacingTop, f = d.spacingRight, g = d.spacingBottom, d = d.spacingLeft; this.plotLeft = t(this.plotLeft); this.plotTop = t(this.plotTop); this.plotWidth = t(b - this.plotLeft - this.marginRight); this.plotHeight = t(c - this.plotTop - this.marginBottom); this.plotSizeX = a ? this.plotHeight :
            this.plotWidth; this.plotSizeY = a ? this.plotWidth : this.plotHeight; this.spacingBox = { x: d, y: e, width: b - d - f, height: c - e - g }; n(this.axes, function (a) { a.setAxisSize(); a.setAxisTranslation() })
        }, resetMargins: function () { var a = this.options.chart, b = a.spacingRight, c = a.spacingBottom, d = a.spacingLeft; this.plotTop = o(this.optionsMarginTop, a.spacingTop); this.marginRight = o(this.optionsMarginRight, b); this.marginBottom = o(this.optionsMarginBottom, c); this.plotLeft = o(this.optionsMarginLeft, d); this.axisOffset = [0, 0, 0, 0] }, drawChartBox: function () {
            var a =
            this.options.chart, b = this.renderer, c = this.chartWidth, d = this.chartHeight, e = this.chartBackground, f = this.plotBackground, g = this.plotBorder, h = this.plotBGImage, i = a.borderWidth || 0, j = a.backgroundColor, k = a.plotBackgroundColor, l = a.plotBackgroundImage, m, p = { x: this.plotLeft, y: this.plotTop, width: this.plotWidth, height: this.plotHeight }; m = i + (a.shadow ? 8 : 0); if (i || j) if (e) e.animate(e.crisp(null, null, null, c - m, d - m)); else {
                e = { fill: j || U }; if (i) e.stroke = a.borderColor, e["stroke-width"] = i; this.chartBackground = b.rect(m / 2, m / 2, c -
                m, d - m, a.borderRadius, i).attr(e).add().shadow(a.shadow)
            } if (k) f ? f.animate(p) : this.plotBackground = b.rect(this.plotLeft, this.plotTop, this.plotWidth, this.plotHeight, 0).attr({ fill: k }).add().shadow(a.plotShadow); if (l) h ? h.animate(p) : this.plotBGImage = b.image(l, this.plotLeft, this.plotTop, this.plotWidth, this.plotHeight).add(); if (a.plotBorderWidth) g ? g.animate(g.crisp(null, this.plotLeft, this.plotTop, this.plotWidth, this.plotHeight)) : this.plotBorder = b.rect(this.plotLeft, this.plotTop, this.plotWidth, this.plotHeight,
            0, a.plotBorderWidth).attr({ stroke: a.plotBorderColor, "stroke-width": a.plotBorderWidth, zIndex: 4 }).add(); this.isDirtyBox = !1
        }, propFromSeries: function () { var a = this, b = a.options.chart, c, d = a.options.series, e, f; n(["inverted", "angular", "polar"], function (g) { c = Y[b.type || b.defaultSeriesType]; f = a[g] || b[g] || c && c.prototype[g]; for (e = d && d.length; !f && e--;) (c = Y[d[e].type]) && c.prototype[g] && (f = !0); a[g] = f }) }, render: function () {
            var a = this, b = a.axes, c = a.renderer, d = a.options, e = d.labels, d = d.credits, f; a.setTitle(); a.legend = new qb(a);
            n(b, function (a) { a.setScale() }); a.getMargins(); a.maxTicks = null; n(b, function (a) { a.setTickPositions(!0); a.setMaxTicks() }); a.adjustTickAmounts(); a.getMargins(); a.drawChartBox(); a.hasCartesianSeries && n(b, function (a) { a.render() }); if (!a.seriesGroup) a.seriesGroup = c.g("series-group").attr({ zIndex: 3 }).add(); n(a.series, function (a) { a.translate(); a.setTooltipPoints(); a.render() }); e.items && n(e.items, function () {
                var b = u(e.style, this.style), d = w(b.left) + a.plotLeft, f = w(b.top) + a.plotTop + 12; delete b.left; delete b.top;
                c.text(this.html, d, f).attr({ zIndex: 2 }).css(b).add()
            }); if (d.enabled && !a.credits) f = d.href, a.credits = c.text(d.text, 0, 0).on("click", function () { if (f) location.href = f }).attr({ align: d.position.align, zIndex: 8 }).css(d.style).add().align(d.position); a.hasRendered = !0
        }, destroy: function () {
            var a = this, b = a.axes, c = a.series, d = a.container, e, f = d && d.parentNode; if (a !== null) {
                E(a, "destroy"); P(a); for (e = b.length; e--;) b[e] = b[e].destroy(); for (e = c.length; e--;) c[e] = c[e].destroy(); n("title,subtitle,chartBackground,plotBackground,plotBGImage,plotBorder,seriesGroup,clipRect,credits,tracker,scroller,rangeSelector,legend,resetZoomButton,tooltip,renderer".split(","),
                function (b) { var c = a[b]; c && (a[b] = c.destroy()) }); if (d) d.innerHTML = "", P(d), f && Qa(d), d = null; for (e in a) delete a[e]; a = a.options = null
            }
        }, firstRender: function () {
            var a = this, b = a.options, c = a.callback; if (!Da && N == N.top && B.readyState !== "complete" || ga && !N.canvg) ga ? Nb.push(function () { a.firstRender() }, b.global.canvasToolsURL) : B.attachEvent("onreadystatechange", function () { B.detachEvent("onreadystatechange", a.firstRender); B.readyState === "complete" && a.firstRender() }); else {
                a.getContainer(); E(a, "init"); if (Highcharts.RangeSelector &&
                b.rangeSelector.enabled) a.rangeSelector = new Highcharts.RangeSelector(a); a.resetMargins(); a.setChartSize(); a.propFromSeries(); a.getAxes(); n(b.series || [], function (b) { a.initSeries(b) }); if (Highcharts.Scroller && (b.navigator.enabled || b.scrollbar.enabled)) a.scroller = new Highcharts.Scroller(a); a.tracker = new Db(a, b); a.render(); a.renderer.draw(); c && c.apply(a, [a]); n(a.callbacks, function (b) { b.apply(a, [a]) }); a.cloneRenderTo(!0); E(a, "load")
            }
        }, init: function (a) {
            var b = this.options.chart, c; b.reflow !== !1 && I(this, "load",
            this.initReflow); if (a) for (c in a) I(this, c, a[c]); this.xAxis = []; this.yAxis = []; this.animation = ga ? !1 : o(b.animation, !0); this.setSize = this.resize; this.pointCount = 0; this.counters = new Ab; this.firstRender()
        }
    }; rb.prototype.callbacks = []; var Wa = function () { }; Wa.prototype = {
        init: function (a, b, c) {
            var d = a.chart.counters; this.series = a; this.applyOptions(b, c); this.pointAttr = {}; if (a.options.colorByPoint) { b = a.chart.options.colors; if (!this.options) this.options = {}; this.color = this.options.color = this.color || b[d.color++]; d.wrapColor(b.length) } a.chart.pointCount++;
            return this
        }, applyOptions: function (a, b) { var c = this.series, d = typeof a; this.config = a; if (d === "number" || a === null) this.y = a; else if (typeof a[0] === "number") this.x = a[0], this.y = a[1]; else if (d === "object" && typeof a.length !== "number") { if (u(this, a), this.options = a, a.dataLabels) c._hasPointLabels = !0 } else if (typeof a[0] === "string") this.name = a[0], this.y = a[1]; if (this.x === A) this.x = b === A ? c.autoIncrement() : b }, destroy: function () {
            var a = this.series.chart, b = a.hoverPoints, c; a.pointCount--; if (b && (this.setState(), za(b, this),
            !b.length)) a.hoverPoints = null; if (this === a.hoverPoint) this.onMouseOut(); if (this.graphic || this.dataLabel) P(this), this.destroyElements(); this.legendItem && a.legend.destroyItem(this); for (c in this) this[c] = null
        }, destroyElements: function () { for (var a = "graphic,tracker,dataLabel,group,connector,shadowGroup".split(","), b, c = 6; c--;) b = a[c], this[b] && (this[b] = this[b].destroy()) }, getLabelConfig: function () {
            return {
                x: this.category, y: this.y, key: this.name || this.category, series: this.series, point: this, percentage: this.percentage,
                total: this.total || this.stackTotal
            }
        }, select: function (a, b) { var c = this, d = c.series.chart, a = o(a, !c.selected); c.firePointEvent(a ? "select" : "unselect", { accumulate: b }, function () { c.selected = a; c.setState(a && "select"); b || n(d.getSelectedPoints(), function (a) { if (a.selected && a !== c) a.selected = !1, a.setState(""), a.firePointEvent("unselect") }) }) }, onMouseOver: function () {
            var a = this.series, b = a.chart, c = b.tooltip, d = b.hoverPoint; if (d && d !== this) d.onMouseOut(); this.firePointEvent("mouseOver"); c && (!c.shared || a.noSharedTooltip) &&
            c.refresh(this); this.setState("hover"); b.hoverPoint = this
        }, onMouseOut: function () { this.firePointEvent("mouseOut"); this.setState(); this.series.chart.hoverPoint = null }, tooltipFormatter: function (a) {
            var b = this.series, c = b.tooltipOptions, d = a.match(/\{(series|point)\.[a-zA-Z]+\}/g), e = /[{\.}]/, f, g, h, i, j = { y: 0, open: 0, high: 0, low: 0, close: 0, percentage: 1, total: 1 }; c.valuePrefix = c.valuePrefix || c.yPrefix; c.valueDecimals = c.valueDecimals || c.yDecimals; c.valueSuffix = c.valueSuffix || c.ySuffix; for (i in d) g = d[i], ra(g) && g !==
            a && (h = (" " + g).split(e), f = { point: this, series: b }[h[1]], h = h[2], f === this && j.hasOwnProperty(h) ? (f = j[h] ? h : "value", f = (c[f + "Prefix"] || "") + Xa(this[h], o(c[f + "Decimals"], -1)) + (c[f + "Suffix"] || "")) : f = f[h], a = a.replace(g, f)); return a
        }, update: function (a, b, c) {
            var d = this, e = d.series, f = d.graphic, g, h = e.data, i = h.length, j = e.chart, b = o(b, !0); d.firePointEvent("update", { options: a }, function () {
                d.applyOptions(a); aa(a) && (e.getAttribs(), f && f.attr(d.pointAttr[e.state])); for (g = 0; g < i; g++) if (h[g] === d) {
                    e.xData[g] = d.x; e.yData[g] = d.y;
                    e.options.data[g] = a; break
                } e.isDirty = !0; e.isDirtyData = !0; b && j.redraw(c)
            })
        }, remove: function (a, b) { var c = this, d = c.series, e = d.chart, f, g = d.data, h = g.length; ua(b, e); a = o(a, !0); c.firePointEvent("remove", null, function () { for (f = 0; f < h; f++) if (g[f] === c) { g.splice(f, 1); d.options.data.splice(f, 1); d.xData.splice(f, 1); d.yData.splice(f, 1); break } c.destroy(); d.isDirty = !0; d.isDirtyData = !0; a && e.redraw() }) }, firePointEvent: function (a, b, c) {
            var d = this, e = this.series.options; (e.point.events[a] || d.options && d.options.events && d.options.events[a]) &&
            this.importEvents(); a === "click" && e.allowPointSelect && (c = function (a) { d.select(null, a.ctrlKey || a.metaKey || a.shiftKey) }); E(this, a, b, c)
        }, importEvents: function () { if (!this.hasImportedEvents) { var a = C(this.series.options.point, this.options).events, b; this.events = a; for (b in a) I(this, b, a[b]); this.hasImportedEvents = !0 } }, setState: function (a) {
            var b = this.plotX, c = this.plotY, d = this.series, e = d.options.states, f = Z[d.type].marker && d.options.marker, g = f && !f.enabled, h = f && f.states[a], i = h && h.enabled === !1, j = d.stateMarkerGraphic,
            k = d.chart, l = this.pointAttr, a = a || ""; if (!(a === this.state || this.selected && a !== "select" || e[a] && e[a].enabled === !1 || a && (i || g && !h.enabled))) { if (this.graphic) e = f && this.graphic.symbolName && l[a].r, this.graphic.attr(C(l[a], e ? { x: b - e, y: c - e, width: 2 * e, height: 2 * e } : {})); else { if (a && h) { if (!j) e = h.radius, d.stateMarkerGraphic = j = k.renderer.symbol(d.symbol, -e, -e, 2 * e, 2 * e).attr(l[a]).add(d.group); j.translate(b, c) } if (j) j[a ? "show" : "hide"]() } this.state = a }
        }
    }; var R = function () { }; R.prototype = {
        isCartesian: !0, type: "line", pointClass: Wa,
        sorted: !0, pointAttrToOptions: { stroke: "lineColor", "stroke-width": "lineWidth", fill: "fillColor", r: "radius" }, init: function (a, b) {
            var c, d; d = a.series.length; this.chart = a; this.options = b = this.setOptions(b); this.bindAxes(); u(this, { index: d, name: b.name || "Series " + (d + 1), state: "", pointAttr: {}, visible: b.visible !== !1, selected: b.selected === !0 }); if (ga) b.animation = !1; d = b.events; for (c in d) I(this, c, d[c]); if (d && d.click || b.point && b.point.events && b.point.events.click || b.allowPointSelect) a.runTrackerClick = !0; this.getColor();
            this.getSymbol(); this.setData(b.data, !1); if (this.isCartesian) a.hasCartesianSeries = !0; a.series.push(this)
        }, bindAxes: function () { var a = this, b = a.options, c = a.chart, d; a.isCartesian && n(["xAxis", "yAxis"], function (e) { n(c[e], function (c) { d = c.options; if (b[e] === d.index || b[e] === A && d.index === 0) c.series.push(a), a[e] = c, c.isDirty = !0 }) }) }, autoIncrement: function () {
            var a = this.options, b = this.xIncrement, b = o(b, a.pointStart, 0); this.pointInterval = o(this.pointInterval, a.pointInterval, 1); this.xIncrement = b + this.pointInterval;
            return b
        }, getSegments: function () { var a = -1, b = [], c, d = this.points, e = d.length; if (e) if (this.options.connectNulls) { for (c = e; c--;) d[c].y === null && d.splice(c, 1); d.length && (b = [d]) } else n(d, function (c, g) { c.y === null ? (g > a + 1 && b.push(d.slice(a + 1, g)), a = g) : g === e - 1 && b.push(d.slice(a + 1, g + 1)) }); this.segments = b }, setOptions: function (a) { var b = this.chart.options, c = b.plotOptions, d = a.data; a.data = null; c = C(c[this.type], c.series, a); c.data = a.data = d; this.tooltipOptions = C(b.tooltip, c.tooltip); return c }, getColor: function () {
            var a =
            this.options, b = this.chart.options.colors, c = this.chart.counters; this.color = a.color || !a.colorByPoint && b[c.color++] || "gray"; c.wrapColor(b.length)
        }, getSymbol: function () { var a = this.options.marker, b = this.chart, c = b.options.symbols, b = b.counters; this.symbol = a.symbol || c[b.symbol++]; if (/^url/.test(this.symbol)) a.radius = 0; b.wrapSymbol(c.length) }, drawLegendSymbol: function (a) {
            var b = this.options, c = b.marker, d = a.options.symbolWidth, e = this.chart.renderer, f = this.legendGroup, a = a.baseline, g; if (b.lineWidth) {
                g = { "stroke-width": b.lineWidth };
                if (b.dashStyle) g.dashstyle = b.dashStyle; this.legendLine = e.path(["M", 0, a - 4, "L", d, a - 4]).attr(g).add(f)
            } if (c && c.enabled) b = c.radius, this.legendSymbol = e.symbol(this.symbol, d / 2 - b, a - 4 - b, 2 * b, 2 * b).attr(this.pointAttr[""]).add(f)
        }, addPoint: function (a, b, c, d) {
            var e = this.data, f = this.graph, g = this.area, h = this.chart, i = this.xData, j = this.yData, k = f && f.shift || 0, l = this.options.data; ua(d, h); if (f && c) f.shift = k + 1; if (g) { if (c) g.shift = k + 1; g.isArea = !0 } b = o(b, !0); d = { series: this }; this.pointClass.prototype.applyOptions.apply(d, [a]);
            i.push(d.x); j.push(this.valueCount === 4 ? [d.open, d.high, d.low, d.close] : d.y); l.push(a); c && (e[0] && e[0].remove ? e[0].remove(!1) : (e.shift(), i.shift(), j.shift(), l.shift())); this.getAttribs(); this.isDirtyData = this.isDirty = !0; b && h.redraw()
        }, setData: function (a, b) {
            var c = this.points, d = this.options, e = this.initialColor, f = this.chart, g = null, h = this.xAxis, i = this.pointClass.prototype; this.xIncrement = null; this.pointRange = h && h.categories && 1 || d.pointRange; if (s(e)) f.counters.color = e; var j = [], k = [], l = a ? a.length : [], m = this.valueCount;
            if (l > (d.turboThreshold || 1E3)) { for (e = 0; g === null && e < l;) g = a[e], e++; if (Ka(g)) { i = o(d.pointStart, 0); d = o(d.pointInterval, 1); for (e = 0; e < l; e++) j[e] = i, k[e] = a[e], i += d; this.xIncrement = i } else if (Ja(g)) if (m) for (e = 0; e < l; e++) d = a[e], j[e] = d[0], k[e] = d.slice(1, m + 1); else for (e = 0; e < l; e++) d = a[e], j[e] = d[0], k[e] = d[1] } else for (e = 0; e < l; e++) d = { series: this }, i.applyOptions.apply(d, [a[e]]), j[e] = d.x, k[e] = i.toYData ? i.toYData.apply(d) : d.y; this.data = []; this.options.data = a; this.xData = j; this.yData = k; for (e = c && c.length || 0; e--;) c[e] && c[e].destroy &&
            c[e].destroy(); if (h) h.minRange = h.userMinRange; this.isDirty = this.isDirtyData = f.isDirtyBox = !0; o(b, !0) && f.redraw(!1)
        }, remove: function (a, b) { var c = this, d = c.chart, a = o(a, !0); if (!c.isRemoving) c.isRemoving = !0, E(c, "remove", null, function () { c.destroy(); d.isDirtyLegend = d.isDirtyBox = !0; a && d.redraw(b) }); c.isRemoving = !1 }, processData: function (a) {
            var b = this.xData, c = this.yData, d = b.length, e = 0, f = d, g, h, i = this.xAxis, j = this.options, k = j.cropThreshold, l = this.isCartesian; if (l && !this.isDirty && !i.isDirty && !this.yAxis.isDirty &&
            !a) return !1; if (l && this.sorted && (!k || d > k || this.forceCrop)) if (a = i.getExtremes(), i = a.min, k = a.max, b[d - 1] < i || b[0] > k) b = [], c = []; else if (b[0] < i || b[d - 1] > k) { for (a = 0; a < d; a++) if (b[a] >= i) { e = x(0, a - 1); break } for (; a < d; a++) if (b[a] > k) { f = a + 1; break } b = b.slice(e, f); c = c.slice(e, f); g = !0 } for (a = b.length - 1; a > 0; a--) if (d = b[a] - b[a - 1], d > 0 && (h === A || d < h)) h = d; this.cropped = g; this.cropStart = e; this.processedXData = b; this.processedYData = c; if (j.pointRange === null) this.pointRange = h || 1; this.closestPointRange = h
        }, generatePoints: function () {
            var a =
            this.options.data, b = this.data, c, d = this.processedXData, e = this.processedYData, f = this.pointClass, g = d.length, h = this.cropStart || 0, i, j = this.hasGroupedData, k, l = [], m; if (!b && !j) b = [], b.length = a.length, b = this.data = b; for (m = 0; m < g; m++) i = h + m, j ? l[m] = (new f).init(this, [d[m]].concat(na(e[m]))) : (b[i] ? k = b[i] : a[i] !== A && (b[i] = k = (new f).init(this, a[i], d[m])), l[m] = k); if (b && (g !== (c = b.length) || j)) for (m = 0; m < c; m++) if (m === h && !j && (m += g), b[m]) b[m].destroyElements(), b[m].plotX = A; this.data = b; this.points = l
        }, translate: function () {
            this.processedXData ||
            this.processData(); this.generatePoints(); for (var a = this.chart, b = this.options, c = b.stacking, d = this.xAxis, e = d.categories, f = this.yAxis, g = this.points, h = g.length, i = !!this.modifyValue, j, k = f.series, l = k.length; l--;) if (k[l].visible) { l === this.index && (j = !0); break } for (l = 0; l < h; l++) {
                var k = g[l], m = k.x, p = k.y, n = k.low, o = f.stacks[(p < b.threshold ? "-" : "") + this.stackKey]; k.plotX = d.translate(m, 0, 0, 0, 1); if (c && this.visible && o && o[m]) {
                    n = o[m]; m = n.total; n.cum = n = n.cum - p; p = n + p; if (j) n = b.threshold; c === "percent" && (n = m ? n * 100 / m : 0, p = m ?
                    p * 100 / m : 0); k.percentage = m ? k.y * 100 / m : 0; k.stackTotal = m; k.stackY = p
                } k.yBottom = s(n) ? f.translate(n, 0, 1, 0, 1) : null; i && (p = this.modifyValue(p, k)); k.plotY = typeof p === "number" ? t(f.translate(p, 0, 1, 0, 1) * 10) / 10 : A; k.clientX = a.inverted ? a.plotHeight - k.plotX : k.plotX; k.category = e && e[k.x] !== A ? e[k.x] : k.x
            } this.getSegments()
        }, setTooltipPoints: function (a) {
            var b = [], c = this.chart.plotSizeX, d, e; d = this.xAxis; var f, g, h = []; if (this.options.enableMouseTracking !== !1) {
                if (a) this.tooltipPoints = null; n(this.segments || this.points, function (a) {
                    b =
                    b.concat(a)
                }); d && d.reversed && (b = b.reverse()); a = b.length; for (g = 0; g < a; g++) { f = b[g]; d = b[g - 1] ? b[g - 1]._high + 1 : 0; for (f._high = e = b[g + 1] ? x(0, W((f.plotX + (b[g + 1] ? b[g + 1].plotX : c)) / 2)) : c; d >= 0 && d <= e;) h[d++] = f } this.tooltipPoints = h
            }
        }, tooltipHeaderFormatter: function (a) {
            var b = this.tooltipOptions, c = b.xDateFormat, d = this.xAxis, e = d && d.options.type === "datetime", f; if (e && !c) for (f in D) if (D[f] >= d.closestPointRange) { c = b.dateTimeLabelFormats[f]; break } return b.headerFormat.replace("{point.key}", e ? db(c, a) : a).replace("{series.name}",
            this.name).replace("{series.color}", this.color)
        }, onMouseOver: function () { var a = this.chart, b = a.hoverSeries; if (ea || !a.mouseIsDown) { if (b && b !== this) b.onMouseOut(); this.options.events.mouseOver && E(this, "mouseOver"); this.setState("hover"); a.hoverSeries = this } }, onMouseOut: function () { var a = this.options, b = this.chart, c = b.tooltip, d = b.hoverPoint; if (d) d.onMouseOut(); this && a.events.mouseOut && E(this, "mouseOut"); c && !a.stickyTracking && !c.shared && c.hide(); this.setState(); b.hoverSeries = null }, animate: function (a) {
            var b =
            this.chart, c = this.clipRect, d = this.options.animation; d && !aa(d) && (d = {}); if (a) { if (!c.isAnimating) c.attr("width", 0), c.isAnimating = !0 } else c.animate({ width: b.plotSizeX }, d), this.animate = null
        }, drawPoints: function () {
            var a, b = this.points, c = this.chart, d, e, f, g, h, i, j, k; if (this.options.marker.enabled) for (f = b.length; f--;) if (g = b[f], d = g.plotX, e = g.plotY, k = g.graphic, e !== A && !isNaN(e)) if (a = g.pointAttr[g.selected ? "select" : ""], h = a.r, i = o(g.marker && g.marker.symbol, this.symbol), j = i.indexOf("url") === 0, k) k.animate(u({
                x: d - h,
                y: e - h
            }, k.symbolName ? { width: 2 * h, height: 2 * h } : {})); else if (h > 0 || j) g.graphic = c.renderer.symbol(i, d - h, e - h, 2 * h, 2 * h).attr(a).add(this.group)
        }, convertAttribs: function (a, b, c, d) { var e = this.pointAttrToOptions, f, g, h = {}, a = a || {}, b = b || {}, c = c || {}, d = d || {}; for (f in e) g = e[f], h[f] = o(a[g], b[f], c[f], d[f]); return h }, getAttribs: function () {
            var a = this, b = Z[a.type].marker ? a.options.marker : a.options, c = b.states, d = c.hover, e, f = a.color, g = { stroke: f, fill: f }, h = a.points || [], i = [], j, k = a.pointAttrToOptions, l; a.options.marker ? (d.radius =
            d.radius || b.radius + 2, d.lineWidth = d.lineWidth || b.lineWidth + 1) : d.color = d.color || pa(d.color || f).brighten(d.brightness).get(); i[""] = a.convertAttribs(b, g); n(["hover", "select"], function (b) { i[b] = a.convertAttribs(c[b], i[""]) }); a.pointAttr = i; for (f = h.length; f--;) {
                g = h[f]; if ((b = g.options && g.options.marker || g.options) && b.enabled === !1) b.radius = 0; e = !1; if (g.options) for (l in k) s(b[k[l]]) && (e = !0); if (e) {
                    j = []; c = b.states || {}; e = c.hover = c.hover || {}; if (!a.options.marker) e.color = pa(e.color || g.options.color).brighten(e.brightness ||
                    d.brightness).get(); j[""] = a.convertAttribs(b, i[""]); j.hover = a.convertAttribs(c.hover, i.hover, j[""]); j.select = a.convertAttribs(c.select, i.select, j[""])
                } else j = i; g.pointAttr = j
            }
        }, destroy: function () {
            var a = this, b = a.chart, c = a.clipRect, d = /AppleWebKit\/533/.test(ya), e, f, g = a.data || [], h, i, j; E(a, "destroy"); P(a); n(["xAxis", "yAxis"], function (b) { if (j = a[b]) za(j.series, a), j.isDirty = !0 }); a.legendItem && a.chart.legend.destroyItem(a); for (f = g.length; f--;) (h = g[f]) && h.destroy && h.destroy(); a.points = null; if (c && c !== b.clipRect) a.clipRect =
            c.destroy(); n("area,graph,dataLabelsGroup,group,tracker,trackerGroup".split(","), function (b) { a[b] && (e = d && b === "group" ? "hide" : "destroy", a[b][e]()) }); if (b.hoverSeries === a) b.hoverSeries = null; za(b.series, a); for (i in a) delete a[i]
        }, drawDataLabels: function () {
            var a = this, b = a.options, c = b.dataLabels; if (c.enabled || a._hasPointLabels) {
                var d, e, f = a.points, g, h, i, j = a.dataLabelsGroup, k = a.chart, l = a.xAxis, l = l ? l.left : k.plotLeft, m = a.yAxis, m = m ? m.top : k.plotTop, p = k.renderer, q = k.inverted, u = a.type, r = b.stacking, y = u === "column" ||
                u === "bar", x = c.verticalAlign === null, w = c.y === null, v = p.fontMetrics(c.style.fontSize), H = v.h, J = v.b, K, z; y && (v = { top: J, middle: J - H / 2, bottom: -H + J }, r ? (x && (c = C(c, { verticalAlign: "middle" })), w && (c = C(c, { y: v[c.verticalAlign] }))) : x ? c = C(c, { verticalAlign: "top" }) : w && (c = C(c, { y: v[c.verticalAlign] }))); j ? j.translate(l, m) : j = a.dataLabelsGroup = p.g("data-labels").attr({ visibility: a.visible ? "visible" : "hidden", zIndex: 6 }).translate(l, m).add(); h = c; n(f, function (f) {
                    K = f.dataLabel; c = h; (g = f.options) && g.dataLabels && (c = C(c, g.dataLabels));
                    if (z = c.enabled) { var l = f.barX && f.barX + f.barW / 2 || o(f.plotX, -999), m = o(f.plotY, -999), n = c.y === null ? f.y >= b.threshold ? -H + J : J : c.y; d = (q ? k.plotWidth - m : l) + c.x; e = t((q ? k.plotHeight - l : m) + n) } if (K && a.isCartesian && (!k.isInsidePlot(d, e) || !z)) f.dataLabel = K.destroy(); else if (z) {
                        var l = c.align, v; i = c.formatter.call(f.getLabelConfig(), c); u === "column" && (d += { left: -1, right: 1 }[l] * f.barW / 2 || 0); !r && q && f.y < 0 && (l = "right", d -= 10); c.style.color = o(c.color, c.style.color, a.color, "black"); if (K) K.attr({ text: i }).animate({ x: d, y: e }); else if (s(i)) {
                            l =
                            { align: l, fill: c.backgroundColor, stroke: c.borderColor, "stroke-width": c.borderWidth, r: c.borderRadius || 0, rotation: c.rotation, padding: c.padding, zIndex: 1 }; for (v in l) l[v] === A && delete l[v]; K = f.dataLabel = p[c.rotation ? "text" : "label"](i, d, e, null, null, null, c.useHTML, !0).attr(l).css(c.style).add(j).shadow(c.shadow)
                        } if (y && b.stacking && K) v = f.barX, l = f.barY, m = f.barW, f = f.barH, K.align(c, null, { x: q ? k.plotWidth - l - f : v, y: q ? k.plotHeight - v - m : l, width: q ? f : m, height: q ? m : f })
                    }
                })
            }
        }, getSegmentPath: function (a) {
            var b = this, c = []; n(a,
            function (d, e) { b.getPointSpline ? c.push.apply(c, b.getPointSpline(a, d, e)) : (c.push(e ? "L" : "M"), e && b.options.step && c.push(d.plotX, a[e - 1].plotY), c.push(d.plotX, d.plotY)) }); return c
        }, drawGraph: function () {
            var a = this, b = a.options, c = a.graph, d = [], e = a.group, f = b.lineColor || a.color, g = b.lineWidth, h = b.dashStyle, i, j = a.chart.renderer, k = []; n(a.segments, function (b) { i = a.getSegmentPath(b); b.length > 1 ? d = d.concat(i) : k.push(b[0]) }); a.graphPath = d; a.singlePoints = k; if (c) Fa(c), c.animate({ d: d }); else if (g) {
                c = { stroke: f, "stroke-width": g };
                if (h) c.dashstyle = h; a.graph = j.path(d).attr(c).add(e).shadow(b.shadow)
            }
        }, invertGroups: function () { function a() { var a = { width: b.yAxis.len, height: b.xAxis.len }; c.attr(a).invert(); d && d.attr(a).invert() } var b = this, c = b.group, d = b.trackerGroup, e = b.chart; I(e, "resize", a); I(b, "destroy", function () { P(e, "resize", a) }); a(); b.invertGroups = a }, createGroup: function () {
            var a = this.chart; (this.group = a.renderer.g("series")).attr({ visibility: this.visible ? "visible" : "hidden", zIndex: this.options.zIndex }).translate(this.xAxis.left,
            this.yAxis.top).add(a.seriesGroup); this.createGroup = Sb
        }, render: function () {
            var a = this, b = a.chart, c, d = a.options, e = d.clip !== !1, f = d.animation, f = (d = f && a.animate) ? f && f.duration || 500 : 0, g = a.clipRect, h = b.renderer; if (!g && (g = a.clipRect = !b.hasRendered && b.clipRect ? b.clipRect : h.clipRect(0, 0, b.plotSizeX, b.plotSizeY + 1), !b.clipRect)) b.clipRect = g; a.createGroup(); c = a.group; a.drawDataLabels(); d && a.animate(!0); a.getAttribs(); a.drawGraph && a.drawGraph(); a.drawPoints(); a.options.enableMouseTracking !== !1 && a.drawTracker();
            b.inverted && a.invertGroups(); e && !a.hasRendered && (c.clip(g), a.trackerGroup && a.trackerGroup.clip(b.clipRect)); d && a.animate(); setTimeout(function () { g.isAnimating = !1; if ((c = a.group) && g !== b.clipRect && g.renderer) { if (e) c.clip(a.clipRect = b.clipRect); g.destroy() } }, f); a.isDirty = a.isDirtyData = !1; a.hasRendered = !0
        }, redraw: function () {
            var a = this.chart, b = this.isDirtyData, c = this.group; c && (a.inverted && c.attr({ width: a.plotWidth, height: a.plotHeight }), c.animate({ translateX: this.xAxis.left, translateY: this.yAxis.top }));
            this.translate(); this.setTooltipPoints(!0); this.render(); b && E(this, "updatedData")
        }, setState: function (a) { var b = this.options, c = this.graph, d = b.states, b = b.lineWidth, a = a || ""; if (this.state !== a) this.state = a, d[a] && d[a].enabled === !1 || (a && (b = d[a].lineWidth || b + 1), c && !c.dashstyle && c.attr({ "stroke-width": b }, a ? 0 : 500)) }, setVisible: function (a, b) {
            var c = this.chart, d = this.legendItem, e = this.group, f = this.tracker, g = this.dataLabelsGroup, h, i = this.points, j = c.options.chart.ignoreHiddenSeries; h = this.visible; h = (this.visible =
            a = a === A ? !h : a) ? "show" : "hide"; if (e) e[h](); if (f) f[h](); else if (i) for (e = i.length; e--;) if (f = i[e], f.tracker) f.tracker[h](); if (g) g[h](); d && c.legend.colorizeItem(this, a); this.isDirty = !0; this.options.stacking && n(c.series, function (a) { if (a.options.stacking && a.visible) a.isDirty = !0 }); if (j) c.isDirtyBox = !0; b !== !1 && c.redraw(); E(this, h)
        }, show: function () { this.setVisible(!0) }, hide: function () { this.setVisible(!1) }, select: function (a) {
            this.selected = a = a === A ? !this.selected : a; if (this.checkbox) this.checkbox.checked = a; E(this,
            a ? "select" : "unselect")
        }, drawTrackerGroup: function () { var a = this.trackerGroup, b = this.chart; if (this.isCartesian) { if (!a) this.trackerGroup = a = b.renderer.g().attr({ zIndex: this.options.zIndex || 1 }).add(b.trackerGroup); a.translate(this.xAxis.left, this.yAxis.top) } return a }, drawTracker: function () {
            var a = this, b = a.options, c = b.trackByArea, d = [].concat(c ? a.areaPath : a.graphPath), e = d.length, f = a.chart, g = f.renderer, h = f.options.tooltip.snap, i = a.tracker, j = b.cursor, j = j && { cursor: j }, k = a.singlePoints, l = a.drawTrackerGroup(),
            m; if (e && !c) for (m = e + 1; m--;) d[m] === "M" && d.splice(m + 1, 0, d[m + 1] - h, d[m + 2], "L"), (m && d[m] === "M" || m === e) && d.splice(m, 0, "L", d[m - 2] + h, d[m - 1]); for (m = 0; m < k.length; m++) e = k[m], d.push("M", e.plotX - h, e.plotY, "L", e.plotX + h, e.plotY); i ? i.attr({ d: d }) : a.tracker = g.path(d).attr({ isTracker: !0, "stroke-linejoin": "bevel", visibility: a.visible ? "visible" : "hidden", stroke: tb, fill: c ? tb : U, "stroke-width": b.lineWidth + (c ? 0 : 2 * h) }).on(ea ? "touchstart" : "mouseover", function () { if (f.hoverSeries !== a) a.onMouseOver() }).on("mouseout", function () { if (!b.stickyTracking) a.onMouseOut() }).css(j).add(l)
        }
    };
    G = ca(R); Y.line = G; Z.area = C(T, { threshold: 0 }); G = ca(R, {
        type: "area", getSegmentPath: function (a) { var b = R.prototype.getSegmentPath.call(this, a), c = [].concat(b), d, e = this.options; d = b.length; var f = this.yAxis.getThreshold(e.threshold); d === 3 && c.push("L", b[1], b[2]); if (e.stacking && this.type !== "areaspline") for (d = a.length - 1; d >= 0; d--) d < a.length - 1 && e.step && c.push(a[d + 1].plotX, a[d].yBottom), c.push(a[d].plotX, a[d].yBottom); else c.push("L", a[a.length - 1].plotX, f, "L", a[0].plotX, f); this.areaPath = this.areaPath.concat(c); return b },
        drawGraph: function () { this.areaPath = []; R.prototype.drawGraph.apply(this); var a = this.areaPath, b = this.options, c = this.area; c ? c.animate({ d: a }) : this.area = this.chart.renderer.path(a).attr({ fill: o(b.fillColor, pa(this.color).setOpacity(b.fillOpacity || 0.75).get()) }).add(this.group) }, drawLegendSymbol: function (a, b) { b.legendSymbol = this.chart.renderer.rect(0, a.baseline - 11, a.options.symbolWidth, 12, 2).attr({ zIndex: 3 }).add(b.legendGroup) }
    }); Y.area = G; Z.spline = C(T); ha = ca(R, {
        type: "spline", getPointSpline: function (a, b,
        c) { var d = b.plotX, e = b.plotY, f = a[c - 1], g = a[c + 1], h, i, j, k; if (c && c < a.length - 1) { a = f.plotY; j = g.plotX; var g = g.plotY, l; h = (1.5 * d + f.plotX) / 2.5; i = (1.5 * e + a) / 2.5; j = (1.5 * d + j) / 2.5; k = (1.5 * e + g) / 2.5; l = (k - i) * (j - d) / (j - h) + e - k; i += l; k += l; i > a && i > e ? (i = x(a, e), k = 2 * e - i) : i < a && i < e && (i = O(a, e), k = 2 * e - i); k > g && k > e ? (k = x(g, e), i = 2 * e - k) : k < g && k < e && (k = O(g, e), i = 2 * e - k); b.rightContX = j; b.rightContY = k } c ? (b = ["C", f.rightContX || f.plotX, f.rightContY || f.plotY, h || d, i || e, d, e], f.rightContX = f.rightContY = null) : b = ["M", d, e]; return b }
    }); Y.spline = ha; Z.areaspline =
    C(Z.area); var Ia = G.prototype, ha = ca(ha, { type: "areaspline", getSegmentPath: Ia.getSegmentPath, drawGraph: Ia.drawGraph }); Y.areaspline = ha; Z.column = C(T, { borderColor: "#FFFFFF", borderWidth: 1, borderRadius: 0, groupPadding: 0.2, marker: null, pointPadding: 0.1, minPointLength: 0, cropThreshold: 50, pointRange: null, states: { hover: { brightness: 0.1, shadow: !1 }, select: { color: "#C0C0C0", borderColor: "#000000", shadow: !1 } }, dataLabels: { y: null, verticalAlign: null }, threshold: 0 }); ha = ca(R, {
        type: "column", tooltipOutsidePlot: !0, pointAttrToOptions: {
            stroke: "borderColor",
            "stroke-width": "borderWidth", fill: "color", r: "borderRadius"
        }, init: function () { R.prototype.init.apply(this, arguments); var a = this, b = a.chart; b.hasRendered && n(b.series, function (b) { if (b.type === a.type) b.isDirty = !0 }) }, translate: function () {
            var a = this, b = a.chart, c = a.options, d = c.stacking, e = c.borderWidth, f = 0, g = a.xAxis, h = g.reversed, i = {}, j, k; R.prototype.translate.apply(a); n(b.series, function (b) {
                if (b.type === a.type && b.visible && a.options.group === b.options.group) b.options.stacking ? (j = b.stackKey, i[j] === A && (i[j] = f++),
                k = i[j]) : k = f++, b.columnIndex = k
            }); var l = a.points, g = M(g.transA) * (g.ordinalSlope || c.pointRange || g.closestPointRange || 1), m = g * c.groupPadding, p = (g - 2 * m) / f, q = c.pointWidth, t = s(q) ? (p - q) / 2 : p * c.pointPadding, r = o(q, p - 2 * t), y = wa(x(r, 1 + 2 * e)), w = t + (m + ((h ? f - a.columnIndex : a.columnIndex) || 0) * p - g / 2) * (h ? -1 : 1), z = a.yAxis.getThreshold(c.threshold), v = o(c.minPointLength, 5); n(l, function (c) {
                var f = c.plotY, g = o(c.yBottom, z), h = c.plotX + w, i = wa(O(f, g)), j = wa(x(f, g) - i), k = a.yAxis.stacks[(c.y < 0 ? "-" : "") + a.stackKey]; d && a.visible && k && k[c.x] &&
                k[c.x].setOffset(w, y); M(j) < v && v && (j = v, i = M(i - z) > v ? g - v : z - (f <= z ? v : 0)); u(c, { barX: h, barY: i, barW: y, barH: j, pointWidth: r }); c.shapeType = "rect"; c.shapeArgs = f = b.renderer.Element.prototype.crisp.call(0, e, h, i, y, j); e % 2 && (f.y -= 1, f.height += 1); c.trackerArgs = M(j) < 3 && C(c.shapeArgs, { height: 6, y: i - 3 })
            })
        }, getSymbol: function () { }, drawLegendSymbol: G.prototype.drawLegendSymbol, drawGraph: function () { }, drawPoints: function () {
            var a = this, b = a.options, c = a.chart.renderer, d, e; n(a.points, function (f) {
                var g = f.plotY; if (g !== A && !isNaN(g) &&
                f.y !== null) d = f.graphic, e = f.shapeArgs, d ? (Fa(d), d.animate(C(e))) : f.graphic = d = c[f.shapeType](e).attr(f.pointAttr[f.selected ? "select" : ""]).add(a.group).shadow(b.shadow, null, b.stacking && !b.borderRadius)
            })
        }, drawTracker: function () {
            var a = this, b = a.chart, c = b.renderer, d, e, f = +new Date, g = a.options, h = g.cursor, i = h && { cursor: h }, j = a.drawTrackerGroup(), k, l, m; n(a.points, function (h) {
                e = h.tracker; d = h.trackerArgs || h.shapeArgs; l = h.plotY; m = !a.isCartesian || l !== A && !isNaN(l); delete d.strokeWidth; if (h.y !== null && m) e ? e.attr(d) :
                h.tracker = c[h.shapeType](d).attr({ isTracker: f, fill: tb, visibility: a.visible ? "visible" : "hidden" }).on(ea ? "touchstart" : "mouseover", function (c) { k = c.relatedTarget || c.fromElement; if (b.hoverSeries !== a && z(k, "isTracker") !== f) a.onMouseOver(); h.onMouseOver() }).on("mouseout", function (b) { if (!g.stickyTracking && (k = b.relatedTarget || b.toElement, z(k, "isTracker") !== f)) a.onMouseOut() }).css(i).add(h.group || j)
            })
        }, animate: function (a) {
            var b = this, c = b.points, d = b.options; if (!a) n(c, function (a) {
                var c = a.graphic, a = a.shapeArgs, g =
                b.yAxis, h = d.threshold; c && (c.attr({ height: 0, y: s(h) ? g.getThreshold(h) : g.translate(g.getExtremes().min, 0, 1, 0, 1) }), c.animate({ height: a.height, y: a.y }, d.animation))
            }), b.animate = null
        }, remove: function () { var a = this, b = a.chart; b.hasRendered && n(b.series, function (b) { if (b.type === a.type) b.isDirty = !0 }); R.prototype.remove.apply(a, arguments) }
    }); Y.column = ha; Z.bar = C(Z.column, { dataLabels: { align: "left", x: 5, y: null, verticalAlign: "middle" } }); Ia = ca(ha, { type: "bar", inverted: !0 }); Y.bar = Ia; Z.scatter = C(T, {
        lineWidth: 0, states: { hover: { lineWidth: 0 } },
        tooltip: { headerFormat: '<span style="font-size: 10px; color:{series.color}">{series.name}</span><br/>', pointFormat: "x: <b>{point.x}</b><br/>y: <b>{point.y}</b><br/>" }
    }); Ia = ca(R, {
        type: "scatter", sorted: !1, translate: function () { var a = this; R.prototype.translate.apply(a); n(a.points, function (b) { b.shapeType = "circle"; b.shapeArgs = { x: b.plotX, y: b.plotY, r: a.chart.options.tooltip.snap } }) }, drawTracker: function () {
            for (var a = this, b = a.options.cursor, b = b && { cursor: b }, c = a.points, d = c.length, e; d--;) if (e = c[d].graphic) e.element._i =
            d; a._hasTracking ? a._hasTracking = !0 : a.group.attr({ isTracker: !0 }).on(ea ? "touchstart" : "mouseover", function (b) { a.onMouseOver(); if (b.target._i !== A) c[b.target._i].onMouseOver() }).on("mouseout", function () { if (!a.options.stickyTracking) a.onMouseOut() }).css(b)
        }
    }); Y.scatter = Ia; Z.pie = C(T, {
        borderColor: "#FFFFFF", borderWidth: 1, center: ["50%", "50%"], colorByPoint: !0, dataLabels: { distance: 30, enabled: !0, formatter: function () { return this.point.name }, y: 5 }, legendType: "point", marker: null, size: "75%", showInLegend: !1, slicedOffset: 10,
        states: { hover: { brightness: 0.1, shadow: !1 } }
    }); T = {
        type: "pie", isCartesian: !1, pointClass: ca(Wa, {
            init: function () { Wa.prototype.init.apply(this, arguments); var a = this, b; u(a, { visible: a.visible !== !1, name: o(a.name, "Slice") }); b = function () { a.slice() }; I(a, "select", b); I(a, "unselect", b); return a }, setVisible: function (a) {
                var b = this.series.chart, c = this.tracker, d = this.dataLabel, e = this.connector, f = this.shadowGroup, g; g = (this.visible = a = a === A ? !this.visible : a) ? "show" : "hide"; this.group[g](); if (c) c[g](); if (d) d[g](); if (e) e[g]();
                if (f) f[g](); this.legendItem && b.legend.colorizeItem(this, a)
            }, slice: function (a, b, c) { var d = this.series.chart, e = this.slicedTranslation; ua(c, d); o(b, !0); a = this.sliced = s(a) ? a : !this.sliced; a = { translateX: a ? e[0] : d.plotLeft, translateY: a ? e[1] : d.plotTop }; this.group.animate(a); this.shadowGroup && this.shadowGroup.animate(a) }
        }), pointAttrToOptions: { stroke: "borderColor", "stroke-width": "borderWidth", fill: "color" }, getColor: function () { this.initialColor = this.chart.counters.color }, animate: function () {
            var a = this; n(a.points,
            function (b) { var c = b.graphic, b = b.shapeArgs, d = -xa / 2; c && (c.attr({ r: 0, start: d, end: d }), c.animate({ r: b.r, start: b.start, end: b.end }, a.options.animation)) }); a.animate = null
        }, setData: function (a, b) { R.prototype.setData.call(this, a, !1); this.processData(); this.generatePoints(); o(b, !0) && this.chart.redraw() }, getCenter: function () { var a = this.options, b = this.chart, c = b.plotWidth, d = b.plotHeight, a = a.center.concat([a.size, a.innerSize || 0]), e = O(c, d), f; return Ea(a, function (a, b) { return (f = /%$/.test(a)) ? [c, d, e, e][b] * w(a) / 100 : a }) },
        translate: function () {
            this.generatePoints(); var a = 0, b = -0.25, c = this.options, d = c.slicedOffset, e = d + c.borderWidth, f, g = this.chart, h, i, j, k = this.points, l = 2 * xa, m, p, o, s = c.dataLabels.distance; this.center = f = this.getCenter(); this.getX = function (a, b) { j = L.asin((a - f[1]) / (f[2] / 2 + s)); return f[0] + (b ? -1 : 1) * X(j) * (f[2] / 2 + s) }; n(k, function (b) { a += b.y }); n(k, function (c) {
                m = a ? c.y / a : 0; h = t(b * l * 1E3) / 1E3; b += m; i = t(b * l * 1E3) / 1E3; c.shapeType = "arc"; c.shapeArgs = { x: f[0], y: f[1], r: f[2] / 2, innerR: f[3] / 2, start: h, end: i }; j = (i + h) / 2; c.slicedTranslation =
                Ea([X(j) * d + g.plotLeft, da(j) * d + g.plotTop], t); p = X(j) * f[2] / 2; o = da(j) * f[2] / 2; c.tooltipPos = [f[0] + p * 0.7, f[1] + o * 0.7]; c.labelPos = [f[0] + p + X(j) * s, f[1] + o + da(j) * s, f[0] + p + X(j) * e, f[1] + o + da(j) * e, f[0] + p, f[1] + o, s < 0 ? "center" : j < l / 4 ? "left" : "right", j]; c.percentage = m * 100; c.total = a
            }); this.setTooltipPoints()
        }, render: function () { this.getAttribs(); this.drawPoints(); this.options.enableMouseTracking !== !1 && this.drawTracker(); this.drawDataLabels(); this.options.animation && this.animate && this.animate(); this.isDirty = !1 }, drawPoints: function () {
            var a =
            this, b = a.chart, c = b.renderer, d, e, f, g = a.options.shadow, h, i; n(a.points, function (j) {
                e = j.graphic; i = j.shapeArgs; f = j.group; h = j.shadowGroup; if (g && !h) h = j.shadowGroup = c.g("shadow").attr({ zIndex: 4 }).add(); if (!f) f = j.group = c.g("point").attr({ zIndex: 5 }).add(); d = j.sliced ? j.slicedTranslation : [b.plotLeft, b.plotTop]; f.translate(d[0], d[1]); h && h.translate(d[0], d[1]); e ? e.animate(i) : j.graphic = e = c.arc(i).setRadialReference(a.center).attr(u(j.pointAttr[""], { "stroke-linejoin": "round" })).add(j.group).shadow(g, h); j.visible ===
                !1 && j.setVisible(!1)
            })
        }, drawDataLabels: function () {
            var a = this.data, b, c = this.chart, d = this.options.dataLabels, e = o(d.connectorPadding, 10), f = o(d.connectorWidth, 1), g, h, i = o(d.softConnector, !0), j = d.distance, k = this.center, l = k[2] / 2, m = k[1], p = j > 0, q = [[], []], s, r, t, u, x = 2, v; if (d.enabled) {
                R.prototype.drawDataLabels.apply(this); n(a, function (a) { a.dataLabel && q[a.labelPos[7] < xa / 2 ? 0 : 1].push(a) }); q[1].reverse(); u = function (a, b) { return b.y - a.y }; for (a = q[0][0] && q[0][0].dataLabel && (q[0][0].dataLabel.getBBox().height || 21) ; x--;) {
                    var w =
                    [], C = [], z = q[x], A = z.length, B; if (j > 0) { for (v = m - l - j; v <= m + l + j; v += a) w.push(v); t = w.length; if (A > t) { h = [].concat(z); h.sort(u); for (v = A; v--;) h[v].rank = v; for (v = A; v--;) z[v].rank >= t && z.splice(v, 1); A = z.length } for (v = 0; v < A; v++) { b = z[v]; h = b.labelPos; b = 9999; for (r = 0; r < t; r++) g = M(w[r] - h[1]), g < b && (b = g, B = r); if (B < v && w[v] !== null) B = v; else for (t < A - v + B && w[v] !== null && (B = t - A + v) ; w[B] === null;) B++; C.push({ i: B, y: w[B] }); w[B] = null } C.sort(u) } for (v = 0; v < A; v++) {
                        b = z[v]; h = b.labelPos; g = b.dataLabel; t = b.visible === !1 ? "hidden" : "visible"; s = h[1]; if (j >
                        0) { if (r = C.pop(), B = r.i, r = r.y, s > r && w[B + 1] !== null || s < r && w[B - 1] !== null) r = s } else r = s; s = d.justify ? k[0] + (x ? -1 : 1) * (l + j) : this.getX(B === 0 || B === w.length - 1 ? s : r, x); g.attr({ visibility: t, align: h[6] })[g.moved ? "animate" : "attr"]({ x: s + d.x + ({ left: e, right: -e }[h[6]] || 0), y: r + d.y }); g.moved = !0; if (p && f) g = b.connector, h = i ? ["M", s + (h[6] === "left" ? 5 : -5), r, "C", s, r, 2 * h[2] - h[4], 2 * h[3] - h[5], h[2], h[3], "L", h[4], h[5]] : ["M", s + (h[6] === "left" ? 5 : -5), r, "L", h[2], h[3], "L", h[4], h[5]], g ? (g.animate({ d: h }), g.attr("visibility", t)) : b.connector = g = this.chart.renderer.path(h).attr({
                            "stroke-width": f,
                            stroke: d.connectorColor || b.color || "#606060", visibility: t, zIndex: 3
                        }).translate(c.plotLeft, c.plotTop).add()
                    }
                }
            }
        }, drawTracker: ha.prototype.drawTracker, drawLegendSymbol: G.prototype.drawLegendSymbol, getSymbol: function () { }
    }; T = ca(R, T); Y.pie = T; u(Highcharts, {
        Axis: ob, CanVGRenderer: fb, Chart: rb, Color: pa, Legend: qb, Point: Wa, Tick: Sa, Tooltip: pb, Renderer: Ta, Series: R, SVGRenderer: qa, VMLRenderer: ka, dateFormat: db, pathAnim: Ua, getOptions: function () { return V }, hasBidiBug: Rb, numberFormat: Xa, seriesTypes: Y, setOptions: function (a) {
            V =
            C(V, a); Bb(); return V
        }, addEvent: I, removeEvent: P, createElement: S, discardElement: Qa, css: F, each: n, extend: u, map: Ea, merge: C, pick: o, splat: na, extendClass: ca, pInt: w, product: "Highcharts", version: "2.2.5"
    })
})();
