(window.webpackJsonp = window.webpackJsonp || []).push([
  [5],
  {
    JN4l: function(t, e, a) {
      'use strict';
      a.r(e);
      var n = a('h7sq'),
        i = a('tS02'),
        r = a('/XES'),
        o = a('ztBH'),
        l = a('Fayl'),
        p = a('ERkP'),
        c = a.n(p),
        d = a('uDfI'),
        s = a('7C4t'),
        m = a('WVWT'),
        u = a('jukB'),
        f = (a('Ax/r'), c.a.createElement),
        x = (function(t) {
          function e() {
            return (
              Object(n.a)(this, e),
              Object(r.a)(this, Object(o.a)(e).apply(this, arguments))
            );
          }
          return (
            Object(l.a)(e, t),
            Object(i.a)(e, [
              {
                key: 'render',
                value: function() {
                  return f(u.b, null, f(s.a, null, f(m.a, null)));
                },
              },
            ]),
            e
          );
        })(p.Component);
      e.default = Object(d.b)(function(t) {
        return { authUser: t.sessionState.authUser };
      })(x);
    },
    TUO6: function(t, e) {
      t.exports =
        '/_next/static/images/logo2-459b30930d2147ee85ca426b08b153da.png';
    },
    WVWT: function(t, e, a) {
      'use strict';
      var n = a('pneb'),
        i = a('ERkP'),
        r = a.n(i),
        o = a('jvFD'),
        l = a.n(o),
        p = a('bKIR'),
        c = a('Ax/r'),
        d = a('rNkn'),
        s = a('rcog'),
        m = a('YhXy'),
        u = a('iP0v'),
        f = a('wk2l'),
        x = a('j/s1'),
        h = a('GkOb'),
        b = x.d.div.withConfig({
          displayName: 'featureBlockstyle__FeatureBlockWrapper',
          componentId: 'sc-1pllarm-0',
        })(
          [
            '&.icon_left{display:flex;.icon__wrapper{flex-shrink:0;}}&.icon_right{display:flex;flex-direction:row-reverse;.content__wrapper{text-align:right;}.icon__wrapper{flex-shrink:0;}}',
            ' ',
            ' ',
            ' ',
            ' ',
            ' ',
            ' ',
            ' ',
            ' ',
            ' ',
            ' ',
            ' ',
            ' ',
            ' ',
            ' ',
            '',
          ],
          h.i,
          h.E,
          h.p,
          h.l,
          h.k,
          h.a,
          h.q,
          h.z,
          h.g,
          h.A,
          h.e,
          h.c,
          h.f,
          h.d,
          h.y
        ),
        g = x.d.div.withConfig({
          displayName: 'featureBlockstyle__IconWrapper',
          componentId: 'sc-1pllarm-1',
        })(
          [
            '',
            ' ',
            ' ',
            ' ',
            ' ',
            ' ',
            ' ',
            ' ',
            ' ',
            ' ',
            ' ',
            ' ',
            ' ',
            ' ',
            '',
          ],
          h.i,
          h.E,
          h.p,
          h.a,
          h.q,
          h.z,
          h.g,
          h.A,
          h.e,
          h.c,
          h.f,
          h.d,
          h.y,
          h.n
        ),
        w = x.d.div.withConfig({
          displayName: 'featureBlockstyle__ContentWrapper',
          componentId: 'sc-1pllarm-2',
        })(['', ' ', ' ', ''], h.E, h.A, h.B),
        y = x.d.div.withConfig({
          displayName: 'featureBlockstyle__ButtonWrapper',
          componentId: 'sc-1pllarm-3',
        })(['', ' ', ' ', ' ', ' ', ''], h.i, h.A, h.a, h.k, h.q),
        _ = b,
        j = r.a.createElement,
        k = function(t) {
          var e = t.className,
            a = t.icon,
            r = t.title,
            o = t.button,
            l = t.description,
            p = t.iconPosition,
            c = t.additionalContent,
            d = t.wrapperStyle,
            s = t.iconStyle,
            m = t.contentStyle,
            u = t.btnWrapperStyle,
            x = Object(f.a)(t, [
              'className',
              'icon',
              'title',
              'button',
              'description',
              'iconPosition',
              'additionalContent',
              'wrapperStyle',
              'iconStyle',
              'contentStyle',
              'btnWrapperStyle',
            ]),
            h = ['feature__block'];
          p && h.push('icon_'.concat(p)), e && h.push(e);
          var b = a && j(g, Object(n.a)({ className: 'icon__wrapper' }, s), a);
          return j(
            _,
            Object(n.a)({ className: h.join(' ') }, d, x),
            b,
            r || l || o
              ? j(
                  i.Fragment,
                  null,
                  j(
                    w,
                    Object(n.a)({ className: 'content__wrapper' }, m),
                    r,
                    l,
                    o &&
                      j(y, Object(n.a)({ className: 'button__wrapper' }, u), o)
                  ),
                  c
                )
              : ''
          );
        };
      k.defaultProps = { iconPosition: 'top' };
      var S = k,
        O = x.d.div.withConfig({
          displayName: 'style__ContainerWrapper',
          componentId: 'sc-1gre7ok-0',
        })(
          [
            "margin-left:auto;margin-right:auto;display:'flex';",
            ';',
            ';@media (min-width:768px){max-width:750px;width:100%;}@media (min-width:992px){max-width:970px;width:100%;}@media (min-width:1220px){max-width:',
            ';width:100%;}@media (max-width:768px){',
            ';}',
          ],
          function(t) {
            return (
              t.fullWidth &&
              Object(x.c)(['width:100%;max-width:none !important;'])
            );
          },
          function(t) {
            return (
              (t.noGutter &&
                Object(x.c)(['padding-left:0;padding-right:0;'])) ||
              Object(x.c)(['padding-left:30px;padding-right:30px;'])
            );
          },
          function(t) {
            return t.width || '1170px';
          },
          function(t) {
            return (
              t.mobileGutter &&
              Object(x.c)(['padding-left:30px;padding-right:30px;'])
            );
          }
        ),
        v = r.a.createElement,
        W = function(t) {
          var e = t.children,
            a = t.className,
            n = t.fullWidth,
            i = t.noGutter,
            r = t.mobileGutter,
            o = t.width,
            l = t.id,
            p = ['container'];
          return (
            a && p.push(a),
            v(
              O,
              {
                id: l,
                className: p.join(' '),
                fullWidth: n,
                noGutter: i,
                width: o,
                mobileGutter: r,
              },
              e
            )
          );
        },
        N = x.d.div.withConfig({
          displayName: 'bannerstyle__ButtonWrapper',
          componentId: 'sc-1q82f00-0',
        })([
          'position:relative;@media screen and (max-width:991px) and (min-width:767px){display:flex;.reusecore__button{padding-left:0;padding-right:0;&.btn-secondary{margin-left:15px;&:hover{background:transparent !important;box-shadow:none !important;}}}}@media (max-width:480px){display:flex;flex-direction:column;.reusecore__button{width:100%;&.btn-secondary{border:0;}}}',
        ]),
        P = a('rTXN'),
        A = a.n(P),
        E = a('TUO6'),
        C = a.n(E),
        B = r.a.createElement,
        I = function(t) {
          var e = t.SectionWrapper,
            a = t.row,
            i = t.col,
            r = t.title,
            o = t.description,
            f = t.button,
            x = t.image,
            h = t.imageArea,
            b = t.imageAreaMobile,
            g = t.imageFarmer,
            w = (t.btnStyleTwo, t.logoStyle);
          return B(
            p.a,
            e,
            B(
              W,
              null,
              B(
                p.a,
                a,
                B(
                  p.a,
                  i,
                  B(
                    p.a,
                    null,
                    B(s.a, {
                      href: '#',
                      logoSrc: C.a,
                      title: 'Dhakon',
                      logoStyle: w,
                    })
                  ),
                  B(
                    p.a,
                    Object(n.a)({}, i, b),
                    B(u.a, Object(n.a)({ src: A.a, alt: 'Farmer Image' }, g))
                  ),
                  B(S, { title: B(d.a, r), description: B(c.a, o) }),
                  B(N, null, B(l.a, { href: '/form' }, B(m.a, f)))
                ),
                B(
                  p.a,
                  Object(n.a)({}, i, h),
                  B(u.a, Object(n.a)({ src: A.a, alt: 'Dhakon Image' }, x))
                )
              )
            )
          );
        };
      I.defaultProps = {
        SectionWrapper: {
          as: 'main',
          pt: '80px',
          pb: '80px',
          overflow: 'hidden',
        },
        row: { flexBox: !0, flexWrap: 'wrap', ml: '-15px', mr: '-15px' },
        logoStyle: { width: ['140px', '280px'], mt: '50px' },
        col: {
          pr: '10px',
          pl: '10px',
          width: ['100%', '100%', '50%', '44%', '44%'],
          mt: '-80px',
          alignSelf: 'center',
        },
        imageArea: { width: ['0%', '0%', '50%', '50%', '50%'], ml: 'auto' },
        imageAreaMobile: { width: ['100%', '100%', '0%', '0%', '0%'] },
        title: {
          content: 'Temukan teman kerja dengan cepat dan mudah',
          fontSize: ['20px', '24px', '40px', '40px', '40px'],
          fontWeight: '900',
          color: '#ffffff',
          letterSpacing: '-0.01px',
          mb: '10px',
          mt: ['40px', '40px', '-150px', '-160px', '-160px'],
        },
        description: {
          content:
            'Bersama dhakon mudahkan pencarian teman kerja yang terbaik dan berkualitas',
          fontSize: ['10px', '14px', '16px', '16px', '20px'],
          color: '#ffffff',
          mb: ['40px', '40px', '60px', '60px', '60px'],
        },
        button: {
          title: 'Cari Teman Kerja',
          fontSize: '14px',
          fontWeight: '900',
          pl: '22px',
          pr: '22px',
          colors: 'secondaryWithBg',
        },
        image: { ml: 'auto', mt: '70px' },
        imageFarmer: {
          width: '198.17px',
          height: '192.78px',
          alignSelf: 'center',
          mt: '130px',
        },
        textArea: { width: ['100%', '100%', '50%', '55%', '55%'] },
        discountAmount: {
          content: 'update',
          fontSize: '14px',
          fontWeight: '600',
          color: '#fff',
          mb: 0,
          as: 'span',
          mr: '0.4em',
          bg: 'rgb(26, 115, 232)',
        },
        discountText: {
          content: 'Version 2.5.0 has just released .',
          fontSize: '13px',
          fontWeight: '400',
          color: '#0f2137',
          mb: 0,
          as: 'span',
          ml: '10px',
        },
      };
      e.a = I;
    },
    cXN6: function(t, e, a) {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        '/home',
        function() {
          var t = a('JN4l');
          return { page: t.default || t };
        },
      ]);
    },
    rTXN: function(t, e) {
      t.exports =
        '/_next/static/images/farmer-570a901099b499c4b4ad7e4aa615de07.svg';
    },
    rcog: function(t, e, a) {
      'use strict';
      var n = a('pneb'),
        i = a('wk2l'),
        r = a('ERkP'),
        o = a.n(r),
        l = a('Ax/r'),
        p = a('j/s1'),
        c = a('/MbW'),
        d = o.a.createElement,
        s = Object(p.d)('a').withConfig({
          displayName: 'Link__LinkWrapper',
          componentId: 'efswp7-0',
        })({ textDecoration: 'none' }, c.a, Object(c.b)('Link')),
        m = function(t) {
          var e = t.children,
            a = Object(i.a)(t, ['children']);
          return d(s, a, e);
        },
        u = m;
      m.defaultProps = { as: 'a', m: 0, display: 'inline-block' };
      var f = a('iP0v'),
        x = o.a.createElement,
        h = function(t) {
          var e = t.logoWrapperStyle,
            a = t.logoStyle,
            r = t.titleStyle,
            p = t.withAchor,
            c = t.anchorProps,
            d = t.logoSrc,
            s = t.title,
            m = Object(i.a)(t, [
              'logoWrapperStyle',
              'logoStyle',
              'titleStyle',
              'withAchor',
              'anchorProps',
              'logoSrc',
              'title',
            ]);
          return x(
            u,
            Object(n.a)({}, m, e),
            p
              ? x(
                  'a',
                  c,
                  d
                    ? x(f.a, Object(n.a)({ src: d, alt: s }, a))
                    : x(l.a, Object(n.a)({ content: s }, r))
                )
              : x(
                  o.a.Fragment,
                  null,
                  d
                    ? x(f.a, Object(n.a)({ src: d, alt: s }, a))
                    : x(l.a, Object(n.a)({ content: s }, r))
                )
          );
        };
      h.defaultProps = {
        logoWrapperStyle: {
          display: 'inline-block',
          mr: '1rem',
          'a:hover,a:focus': { textDecoration: 'none' },
        },
        titleStyle: {
          display: 'inline-block',
          fontSize: '2rem',
          lineHeight: 'inherit',
          whiteSpace: 'nowrap',
        },
      };
      e.a = h;
    },
  },
  [['cXN6', 1, 0]],
]);
