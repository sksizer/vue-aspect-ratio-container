import { defineComponent as y, ref as _, watch as g, onMounted as v, onBeforeUnmount as R, openBlock as C, createElementBlock as x, createElementVNode as w, renderSlot as A } from "vue";
function m(n) {
  if (!n || typeof document > "u")
    return;
  let a = document.head || document.getElementsByTagName("head")[0], e = document.createElement("style");
  e.type = "text/css", a.appendChild(e), e.styleSheet ? e.styleSheet.cssText = n : e.appendChild(document.createTextNode(n));
}
m(".sarcContainer[data-v-941046c0]{position:relative;width:100%;height:100%}.sarcChild[data-v-941046c0]{position:relative}");
const E = [
  {
    name: "16:9",
    width: 16,
    height: 9,
    ratio: 16 / 9
  },
  {
    name: "4:3",
    width: 4,
    height: 3,
    ratio: 4 / 3
  },
  {
    name: "1:1",
    width: 1,
    height: 1,
    ratio: 1
  }
], S = /* @__PURE__ */ y({
  __name: "AspectRatioContainer",
  props: {
    ratio: {
      type: Number,
      required: !1,
      default: 1
    },
    log: {
      type: Boolean,
      required: !1,
      default: !1
    }
  },
  setup(n) {
    const a = n;
    let e = 0;
    const l = _(), f = _();
    let o = null;
    g(
      () => a.ratio,
      () => {
        p();
      }
    );
    function h(...t) {
      a.log && console && console.log(...t);
    }
    function p() {
      h("adjustAspectRatio", e++);
      const t = l.value, i = f.value;
      if (!t || !i)
        return;
      const c = a.ratio;
      let s = t.offsetWidth, u = t.offsetHeight, r, d;
      c === 0 ? (r = s, d = u) : s / u > c ? (d = u, r = d * c) : (r = s, d = r / c), i.style.width = `${r}px`, i.style.height = `${d}px`, i.style.top = `${(u - d) / 2}px`, i.style.left = `${(s - r) / 2}px`;
    }
    return v(() => {
      h("onMounted");
      let t = l.value;
      o = new ResizeObserver((i) => {
        for (let c of i) {
          h("ResizeObserver", c);
          const s = c.contentRect;
          h("Element size:", s.width, "x", s.height), p();
        }
      }), o.observe(t);
    }), R(() => {
      o == null || o.unobserve(l.value), o == null || o.disconnect();
    }), (t, i) => (C(), x("div", {
      ref_key: "containerRef",
      ref: l,
      class: "sarcContainer"
    }, [
      w("div", {
        ref_key: "childRef",
        ref: f,
        class: "sarcChild"
      }, [
        A(t.$slots, "default", {}, void 0, !0)
      ], 512)
    ], 512));
  }
});
const k = (n, a) => {
  const e = n.__vccOpts || n;
  for (const [l, f] of a)
    e[l] = f;
  return e;
}, $ = /* @__PURE__ */ k(S, [["__scopeId", "data-v-941046c0"]]);
export {
  $ as AspectRatioContainer,
  E as CommonAspectRatios
};
//# sourceMappingURL=vue-aspect-ratio-container.js.map
