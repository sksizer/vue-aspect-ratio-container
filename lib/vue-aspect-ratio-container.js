import { defineComponent as g, ref as m, watch as y, onMounted as v, onBeforeUnmount as R, openBlock as C, createElementBlock as w, createElementVNode as x, renderSlot as A } from "vue";
function _(n) {
  if (!n || typeof document > "u")
    return;
  let a = document.head || document.getElementsByTagName("head")[0], e = document.createElement("style");
  e.type = "text/css", a.appendChild(e), e.styleSheet ? e.styleSheet.cssText = n : e.appendChild(document.createTextNode(n));
}
_(".sarcContainer[data-v-941046c0]{position:relative;width:100%;height:100%}.sarcChild[data-v-941046c0]{position:relative}");
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
  },
  {
    name: "9:16",
    width: 9,
    height: 16,
    ratio: 9 / 16
  },
  {
    name: "3:4",
    width: 3,
    height: 4,
    ratio: 3 / 4
  }
], S = /* @__PURE__ */ g({
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
    const r = m(), h = m();
    let o = null;
    y(
      () => a.ratio,
      () => {
        p();
      }
    );
    function f(...t) {
      a.log && console && console.log(...t);
    }
    function p() {
      f("adjustAspectRatio", e++);
      const t = r.value, i = h.value;
      if (!t || !i)
        return;
      const c = a.ratio;
      let s = t.offsetWidth, u = t.offsetHeight, l, d;
      c === 0 ? (l = s, d = u) : s / u > c ? (d = u, l = d * c) : (l = s, d = l / c), i.style.width = `${l}px`, i.style.height = `${d}px`, i.style.top = `${(u - d) / 2}px`, i.style.left = `${(s - l) / 2}px`;
    }
    return v(() => {
      f("onMounted");
      let t = r.value;
      o = new ResizeObserver((i) => {
        for (let c of i) {
          f("ResizeObserver", c);
          const s = c.contentRect;
          f("Element size:", s.width, "x", s.height), p();
        }
      }), o.observe(t);
    }), R(() => {
      o == null || o.unobserve(r.value), o == null || o.disconnect();
    }), (t, i) => (C(), w("div", {
      ref_key: "containerRef",
      ref: r,
      class: "sarcContainer"
    }, [
      x("div", {
        ref_key: "childRef",
        ref: h,
        class: "sarcChild"
      }, [
        A(t.$slots, "default", {}, void 0, !0)
      ], 512)
    ], 512));
  }
});
const k = (n, a) => {
  const e = n.__vccOpts || n;
  for (const [r, h] of a)
    e[r] = h;
  return e;
}, $ = /* @__PURE__ */ k(S, [["__scopeId", "data-v-941046c0"]]);
export {
  $ as AspectRatioContainer,
  E as CommonAspectRatios
};
//# sourceMappingURL=vue-aspect-ratio-container.js.map
