import { defineComponent as g, ref as m, watch as y, onMounted as v, onBeforeUnmount as C, openBlock as R, createElementBlock as w, createElementVNode as x, renderSlot as b } from "vue";
function _(n) {
  if (!n || typeof document > "u")
    return;
  let s = document.head || document.getElementsByTagName("head")[0], e = document.createElement("style");
  e.type = "text/css", s.appendChild(e), e.styleSheet ? e.styleSheet.cssText = n : e.appendChild(document.createTextNode(n));
}
_(".sarcContainer[data-v-853d884b]{position:relative;width:100%;height:100%}.sarcChild[data-v-853d884b]{position:relative}");
const B = [
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
], A = /* @__PURE__ */ g({
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
    const s = n;
    let e = 0;
    const r = m(), u = m();
    let o = null;
    y(
      () => s.ratio,
      () => {
        p();
      }
    );
    function h(...t) {
      s.log && console && console.log(...t);
    }
    function p() {
      h("adjustAspectRatio", e++);
      const t = r.value, i = u.value;
      if (!t || !i)
        return;
      const c = s.ratio;
      let a = t.offsetWidth, f = t.offsetHeight;
      h("Container size:", a, "x", f);
      let l, d;
      c === 0 ? (l = a, d = f) : a / f > c ? (d = f, l = d * c) : (l = a, d = l / c), i.style.width = `${l}px`, i.style.height = `${d}px`, i.style.top = `${(f - d) / 2}px`, i.style.left = `${(a - l) / 2}px`;
    }
    return v(() => {
      h("onMounted");
      let t = r.value;
      o = new ResizeObserver((i) => {
        for (let c of i) {
          h("ResizeObserver", c);
          const a = c.contentRect;
          h("Element size:", a.width, "x", a.height), p();
        }
      }), o.observe(t);
    }), C(() => {
      o == null || o.unobserve(r.value), o == null || o.disconnect();
    }), (t, i) => (R(), w("div", {
      ref_key: "containerRef",
      ref: r,
      class: "sarcContainer"
    }, [
      x("div", {
        ref_key: "childRef",
        ref: u,
        class: "sarcChild"
      }, [
        b(t.$slots, "default", {}, void 0, !0)
      ], 512)
    ], 512));
  }
});
const S = (n, s) => {
  const e = n.__vccOpts || n;
  for (const [r, u] of s)
    e[r] = u;
  return e;
}, E = /* @__PURE__ */ S(A, [["__scopeId", "data-v-853d884b"]]);
export {
  E as AspectRatioContainer,
  B as CommonAspectRatios
};
//# sourceMappingURL=vue-aspect-ratio-container.js.map
