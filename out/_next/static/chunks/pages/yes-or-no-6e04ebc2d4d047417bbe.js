;(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [579],
  {
    7800: function (e, t, n) {
      'use strict'
      n.r(t),
        n.d(t, {
          __N_SSP: function () {
            return m
          },
        })
      var r = n(5861),
        a = n(5988),
        i = n(7757),
        o = n.n(i),
        c = n(7294),
        s = n(3144),
        l = n.n(s),
        u = n(1664),
        d = n(9445),
        p = n(8237),
        f = n(6662),
        v = n(5893),
        h = (function () {
          var e = (0, r.Z)(
            o().mark(function e() {
              var t, n, r
              return o().wrap(function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      return (
                        (e.next = 2),
                        l()('https://platzi-avo.vercel.app/api/yes-or-no')
                      )
                    case 2:
                      return (t = e.sent), (e.next = 5), t.json()
                    case 5:
                      return (n = e.sent), (r = n.data), e.abrupt('return', r)
                    case 8:
                    case 'end':
                      return e.stop()
                  }
              }, e)
            })
          )
          return function () {
            return e.apply(this, arguments)
          }
        })(),
        m = !0
      t.default = function (e) {
        var t = e.initialResult,
          n = (0, c.useState)(!1),
          i = n[0],
          s = n[1],
          l = (0, c.useState)(t),
          m = l[0],
          b = l[1],
          Z = (0, c.useState)(0),
          x = Z[0],
          G = Z[1]
        ;(0, c.useEffect)(
          function () {
            s(!0),
              h().then(function (e) {
                b(e), s(!1)
              })
          },
          [x]
        )
        var y = (function () {
          var e = (0, r.Z)(
            o().mark(function e() {
              return o().wrap(function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      G(x + 1)
                    case 1:
                    case 'end':
                      return e.stop()
                  }
              }, e)
            })
          )
          return function () {
            return e.apply(this, arguments)
          }
        })()
        return (0, v.jsxs)(f.Z, {
          children: [
            (0, v.jsxs)('div', {
              className: 'jsx-3588775597',
              children: [
                (0, v.jsx)(d.Z, {
                  as: 'h1',
                  color: i ? 'grey' : 'green',
                  children: m,
                }),
                (0, v.jsx)('p', {
                  className: 'jsx-3588775597',
                  children: (0, v.jsx)(p.Z, {
                    color: 'green',
                    onClick: y,
                    loading: i,
                    disabled: i,
                    children: 'Intentar de nuevo',
                  }),
                }),
                (0, v.jsx)('p', {
                  className: 'jsx-3588775597',
                  children: (0, v.jsx)(u.default, {
                    href: '/',
                    children: (0, v.jsx)('a', {
                      className: 'jsx-3588775597 ui black button basic',
                      children: 'Volver al inicio',
                    }),
                  }),
                }),
              ],
            }),
            (0, v.jsx)(a.default, {
              id: '3588775597',
              children: [
                'div.jsx-3588775597{text-align:center;}',
                'div.jsx-3588775597 h1.header{font-size:7rem;text-transform:uppercase;}',
              ],
            }),
          ],
        })
      }
    },
    3144: function (e) {
      'use strict'
      var t = self.fetch.bind(self)
      ;(e.exports = t), (e.exports.default = e.exports)
    },
    4843: function (e, t, n) {
      ;(window.__NEXT_P = window.__NEXT_P || []).push([
        '/yes-or-no',
        function () {
          return n(7800)
        },
      ])
    },
    8237: function (e, t, n) {
      'use strict'
      n.d(t, {
        Z: function () {
          return E
        },
      })
      var r = n(7462),
        a = n(1721),
        i = n(6143),
        o = n(5288),
        c = n(1368),
        s = n(6010),
        l = (n(5697), n(7294)),
        u = n(2248),
        d = n(5929),
        p = n(8935),
        f = n(2519),
        v = n(1826),
        h = n(5382),
        m = n(7401)
      function b(e) {
        var t = e.children,
          n = e.className,
          a = e.content,
          i = e.hidden,
          o = e.visible,
          c = (0, s.Z)(
            (0, d.lG)(o, 'visible'),
            (0, d.lG)(i, 'hidden'),
            'content',
            n
          ),
          v = (0, p.Z)(b, e),
          h = (0, f.Z)(b, e)
        return l.createElement(
          h,
          (0, r.Z)({}, v, { className: c }),
          u.kK(t) ? a : t
        )
      }
      ;(b.handledProps = [
        'as',
        'children',
        'className',
        'content',
        'hidden',
        'visible',
      ]),
        (b.propTypes = {})
      var Z = b,
        x = n(6744)
      function G(e) {
        var t = e.attached,
          n = e.basic,
          a = e.buttons,
          i = e.children,
          c = e.className,
          v = e.color,
          h = e.compact,
          m = e.content,
          b = e.floated,
          Z = e.fluid,
          y = e.icon,
          g = e.inverted,
          N = e.labeled,
          k = e.negative,
          j = e.positive,
          w = e.primary,
          _ = e.secondary,
          C = e.size,
          P = e.toggle,
          T = e.vertical,
          I = e.widths,
          R = (0, s.Z)(
            'ui',
            v,
            C,
            (0, d.lG)(n, 'basic'),
            (0, d.lG)(h, 'compact'),
            (0, d.lG)(Z, 'fluid'),
            (0, d.lG)(y, 'icon'),
            (0, d.lG)(g, 'inverted'),
            (0, d.lG)(N, 'labeled'),
            (0, d.lG)(k, 'negative'),
            (0, d.lG)(j, 'positive'),
            (0, d.lG)(w, 'primary'),
            (0, d.lG)(_, 'secondary'),
            (0, d.lG)(P, 'toggle'),
            (0, d.lG)(T, 'vertical'),
            (0, d.sU)(t, 'attached'),
            (0, d.cD)(b, 'floated'),
            (0, d.H0)(I),
            'buttons',
            c
          ),
          K = (0, p.Z)(G, e),
          z = (0, f.Z)(G, e)
        return (0, o.Z)(a)
          ? l.createElement(
              z,
              (0, r.Z)({}, K, { className: R }),
              u.kK(i) ? m : i
            )
          : l.createElement(
              z,
              (0, r.Z)({}, K, { className: R }),
              (0, x.Z)(a, function (e) {
                return E.create(e)
              })
            )
      }
      ;(G.handledProps = [
        'as',
        'attached',
        'basic',
        'buttons',
        'children',
        'className',
        'color',
        'compact',
        'content',
        'floated',
        'fluid',
        'icon',
        'inverted',
        'labeled',
        'negative',
        'positive',
        'primary',
        'secondary',
        'size',
        'toggle',
        'vertical',
        'widths',
      ]),
        (G.propTypes = {})
      var y = G
      function g(e) {
        var t = e.className,
          n = e.text,
          a = (0, s.Z)('or', t),
          i = (0, p.Z)(g, e),
          o = (0, f.Z)(g, e)
        return l.createElement(
          o,
          (0, r.Z)({}, i, { className: a, 'data-text': n })
        )
      }
      ;(g.handledProps = ['as', 'className', 'text']), (g.propTypes = {})
      var N = g,
        k = (function (e) {
          function t() {
            for (
              var t, n = arguments.length, r = new Array(n), a = 0;
              a < n;
              a++
            )
              r[a] = arguments[a]
            return (
              ((t = e.call.apply(e, [this].concat(r)) || this).ref = (0,
              l.createRef)()),
              (t.computeElementType = function () {
                var e = t.props,
                  n = e.attached,
                  r = e.label
                if (!(0, o.Z)(n) || !(0, o.Z)(r)) return 'div'
              }),
              (t.computeTabIndex = function (e) {
                var n = t.props,
                  r = n.disabled,
                  a = n.tabIndex
                return (0, o.Z)(a) ? (r ? -1 : 'div' === e ? 0 : void 0) : a
              }),
              (t.focus = function () {
                return (0, i.Z)(t.ref.current, 'focus')
              }),
              (t.handleClick = function (e) {
                t.props.disabled
                  ? e.preventDefault()
                  : (0, i.Z)(t.props, 'onClick', e, t.props)
              }),
              (t.hasIconClass = function () {
                var e = t.props,
                  n = e.labelPosition,
                  r = e.children,
                  a = e.content,
                  i = e.icon
                return !0 === i || (i && (n || (u.kK(r) && (0, o.Z)(a))))
              }),
              t
            )
          }
          ;(0, a.Z)(t, e)
          var n = t.prototype
          return (
            (n.computeButtonAriaRole = function (e) {
              var t = this.props.role
              return (0, o.Z)(t) ? ('button' !== e ? 'button' : void 0) : t
            }),
            (n.render = function () {
              var e = this.props,
                n = e.active,
                a = e.animated,
                i = e.attached,
                v = e.basic,
                b = e.children,
                Z = e.circular,
                x = e.className,
                G = e.color,
                y = e.compact,
                g = e.content,
                N = e.disabled,
                k = e.floated,
                E = e.fluid,
                j = e.icon,
                w = e.inverted,
                _ = e.label,
                C = e.labelPosition,
                P = e.loading,
                T = e.negative,
                I = e.positive,
                R = e.primary,
                K = e.secondary,
                z = e.size,
                S = e.toggle,
                U = (0, s.Z)(
                  G,
                  z,
                  (0, d.lG)(n, 'active'),
                  (0, d.lG)(v, 'basic'),
                  (0, d.lG)(Z, 'circular'),
                  (0, d.lG)(y, 'compact'),
                  (0, d.lG)(E, 'fluid'),
                  (0, d.lG)(this.hasIconClass(), 'icon'),
                  (0, d.lG)(w, 'inverted'),
                  (0, d.lG)(P, 'loading'),
                  (0, d.lG)(T, 'negative'),
                  (0, d.lG)(I, 'positive'),
                  (0, d.lG)(R, 'primary'),
                  (0, d.lG)(K, 'secondary'),
                  (0, d.lG)(S, 'toggle'),
                  (0, d.sU)(a, 'animated'),
                  (0, d.sU)(i, 'attached')
                ),
                A = (0, s.Z)((0, d.sU)(C || !!_, 'labeled')),
                D = (0, s.Z)((0, d.lG)(N, 'disabled'), (0, d.cD)(k, 'floated')),
                O = (0, p.Z)(t, this.props),
                B = (0, f.Z)(t, this.props, this.computeElementType),
                X = this.computeTabIndex(B)
              if (!(0, o.Z)(_)) {
                var H = (0, s.Z)('ui', U, 'button', x),
                  V = (0, s.Z)('ui', A, 'button', x, D),
                  q = m.Z.create(_, {
                    defaultProps: {
                      basic: !0,
                      pointing: 'left' === C ? 'right' : 'left',
                    },
                    autoGenerateKey: !1,
                  })
                return l.createElement(
                  B,
                  (0, r.Z)({}, O, { className: V, onClick: this.handleClick }),
                  'left' === C && q,
                  l.createElement(
                    c.R,
                    { innerRef: this.ref },
                    l.createElement(
                      'button',
                      {
                        className: H,
                        'aria-pressed': S ? !!n : void 0,
                        disabled: N,
                        tabIndex: X,
                      },
                      h.Z.create(j, { autoGenerateKey: !1 }),
                      ' ',
                      g
                    )
                  ),
                  ('right' === C || !C) && q
                )
              }
              var F = (0, s.Z)('ui', U, D, A, 'button', x),
                J = !u.kK(b),
                L = this.computeButtonAriaRole(B)
              return l.createElement(
                c.R,
                { innerRef: this.ref },
                l.createElement(
                  B,
                  (0, r.Z)({}, O, {
                    className: F,
                    'aria-pressed': S ? !!n : void 0,
                    disabled: (N && 'button' === B) || void 0,
                    onClick: this.handleClick,
                    role: L,
                    tabIndex: X,
                  }),
                  J && b,
                  !J && h.Z.create(j, { autoGenerateKey: !1 }),
                  !J && g
                )
              )
            }),
            t
          )
        })(l.Component)
      ;(k.handledProps = [
        'active',
        'animated',
        'as',
        'attached',
        'basic',
        'children',
        'circular',
        'className',
        'color',
        'compact',
        'content',
        'disabled',
        'floated',
        'fluid',
        'icon',
        'inverted',
        'label',
        'labelPosition',
        'loading',
        'negative',
        'onClick',
        'positive',
        'primary',
        'role',
        'secondary',
        'size',
        'tabIndex',
        'toggle',
      ]),
        (k.propTypes = {}),
        (k.defaultProps = { as: 'button' }),
        (k.Content = Z),
        (k.Group = y),
        (k.Or = N),
        (k.create = (0, v.u5)(k, function (e) {
          return { content: e }
        }))
      var E = k
    },
    5861: function (e, t, n) {
      'use strict'
      function r(e, t, n, r, a, i, o) {
        try {
          var c = e[i](o),
            s = c.value
        } catch (l) {
          return void n(l)
        }
        c.done ? t(s) : Promise.resolve(s).then(r, a)
      }
      function a(e) {
        return function () {
          var t = this,
            n = arguments
          return new Promise(function (a, i) {
            var o = e.apply(t, n)
            function c(e) {
              r(o, a, i, c, s, 'next', e)
            }
            function s(e) {
              r(o, a, i, c, s, 'throw', e)
            }
            c(void 0)
          })
        }
      }
      n.d(t, {
        Z: function () {
          return a
        },
      })
    },
  },
  function (e) {
    e.O(0, [774, 60, 662, 888, 179], function () {
      return (t = 4843), e((e.s = t))
      var t
    })
    var t = e.O()
    _N_E = t
  },
])
