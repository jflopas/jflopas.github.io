(() => {
  "use strict";
  var e,
    i = {},
    _ = {};
  function a(e) {
    var n = _[e];
    if (void 0 !== n) return n.exports;
    var r = (_[e] = { exports: {} });
    return i[e](r, r.exports, a), r.exports;
  }
  (a.m = i),
    (e = []),
    (a.O = (n, r, u, t) => {
      if (!r) {
        var l = 1 / 0;
        for (o = 0; o < e.length; o++) {
          for (var [r, u, t] = e[o], s = !0, f = 0; f < r.length; f++)
            (!1 & t || l >= t) && Object.keys(a.O).every((d) => a.O[d](r[f]))
              ? r.splice(f--, 1)
              : ((s = !1), t < l && (l = t));
          if (s) {
            e.splice(o--, 1);
            var c = u();
            void 0 !== c && (n = c);
          }
        }
        return n;
      }
      t = t || 0;
      for (var o = e.length; o > 0 && e[o - 1][2] > t; o--) e[o] = e[o - 1];
      e[o] = [r, u, t];
    }),
    (a.n = (e) => {
      var n = e && e.__esModule ? () => e.default : () => e;
      return a.d(n, { a: n }), n;
    }),
    (a.d = (e, n) => {
      for (var r in n)
        a.o(n, r) &&
          !a.o(e, r) &&
          Object.defineProperty(e, r, { enumerable: !0, get: n[r] });
    }),
    (a.o = (e, n) => Object.prototype.hasOwnProperty.call(e, n)),
    (() => {
      var e = { 666: 0 };
      a.O.j = (u) => 0 === e[u];
      var n = (u, t) => {
          var f,
            c,
            [o, l, s] = t,
            v = 0;
          if (o.some((b) => 0 !== e[b])) {
            for (f in l) a.o(l, f) && (a.m[f] = l[f]);
            if (s) var p = s(a);
          }
          for (u && u(t); v < o.length; v++)
            a.o(e, (c = o[v])) && e[c] && e[c][0](), (e[c] = 0);
          return a.O(p);
        },
        r = (self.webpackChunkcomponentCommunication =
          self.webpackChunkcomponentCommunication || []);
      r.forEach(n.bind(null, 0)), (r.push = n.bind(null, r.push.bind(r)));
    })();
})();