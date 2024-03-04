import { defineComponent as y, ref as _, watch as g, onMounted as v, onBeforeUnmount as R, openBlock as C, createElementBlock as x, createElementVNode as w, renderSlot as A } from "vue";
function m(n) {
  if (!n || typeof document > "u")
    return;
  let i = document.head || document.getElementsByTagName("head")[0], e = document.createElement("style");
  e.type = "text/css", i.appendChild(e), e.styleSheet ? e.styleSheet.cssText = n : e.appendChild(document.createTextNode(n));
}
m(".sarcContainer[data-v-82011e3e]{position:relative;width:100%;height:100%}.sarcChild[data-v-82011e3e]{position:relative}");
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
    const i = n;
    let e = 0;
    const s = _(), h = _();
    let o = null;
    g(() => i.ratio, () => {
      p();
    });
    function f(...t) {
      i.log && console && console.log(...t);
    }
    function p() {
      f("adjustAspectRatio", e++);
      const t = s.value, a = h.value;
      if (!t || !a)
        return;
      const c = i.ratio;
      let l = t.offsetWidth, u = t.offsetHeight, r, d;
      l / u > c ? (d = u, r = d * c) : (r = l, d = r / c), a.style.width = `${r}px`, a.style.height = `${d}px`, a.style.top = `${(u - d) / 2}px`, a.style.left = `${(l - r) / 2}px`;
    }
    return v(() => {
      f("onMounted");
      let t = s.value;
      o = new ResizeObserver((a) => {
        for (let c of a) {
          f("ResizeObserver", c);
          const l = c.contentRect;
          f("Element size:", l.width, "x", l.height), p();
        }
      }), o.observe(t);
    }), R(() => {
      o == null || o.unobserve(s.value), o == null || o.disconnect();
    }), (t, a) => (C(), x("div", {
      ref_key: "containerRef",
      ref: s,
      class: "sarcContainer"
    }, [
      w("div", {
        ref_key: "childRef",
        ref: h,
        class: "sarcChild"
      }, [
        A(t.$slots, "default", {}, void 0, !0)
      ], 512)
    ], 512));
  }
});
const k = (n, i) => {
  const e = n.__vccOpts || n;
  for (const [s, h] of i)
    e[s] = h;
  return e;
}, $ = /* @__PURE__ */ k(S, [["__scopeId", "data-v-82011e3e"]]);
export {
  $ as AspectRatioContainer,
  E as CommonAspectRatios
};
//# sourceMappingURL=vue-aspect-ratio-container.js.map
