function _(o){if(!o||typeof document>"u")return;let c=document.head||document.getElementsByTagName("head")[0],e=document.createElement("style");e.type="text/css",c.appendChild(e),e.styleSheet?e.styleSheet.cssText=o:e.appendChild(document.createTextNode(o))}_(".sarcContainer[data-v-941046c0]{position:relative;width:100%;height:100%}.sarcChild[data-v-941046c0]{position:relative}");Object.defineProperty(exports,Symbol.toStringTag,{value:"Module"});const t=require("vue"),g=[{name:"16:9",width:16,height:9,ratio:16/9},{name:"4:3",width:4,height:3,ratio:4/3},{name:"1:1",width:1,height:1,ratio:1},{name:"9:16",width:9,height:16,ratio:9/16},{name:"3:4",width:3,height:4,ratio:3/4}],y=t.defineComponent({__name:"AspectRatioContainer",props:{ratio:{type:Number,required:!1,default:1},log:{type:Boolean,required:!1,default:!1}},setup(o){const c=o;let e=0;const l=t.ref(),u=t.ref();let i=null;t.watch(()=>c.ratio,()=>{m()});function f(...n){c.log&&console&&console.log(...n)}function m(){f("adjustAspectRatio",e++);const n=l.value,a=u.value;if(!n||!a)return;const s=c.ratio;let r=n.offsetWidth,p=n.offsetHeight,d,h;s===0?(d=r,h=p):r/p>s?(h=p,d=h*s):(d=r,h=d/s),a.style.width=`${d}px`,a.style.height=`${h}px`,a.style.top=`${(p-h)/2}px`,a.style.left=`${(r-d)/2}px`}return t.onMounted(()=>{f("onMounted");let n=l.value;i=new ResizeObserver(a=>{for(let s of a){f("ResizeObserver",s);const r=s.contentRect;f("Element size:",r.width,"x",r.height),m()}}),i.observe(n)}),t.onBeforeUnmount(()=>{i==null||i.unobserve(l.value),i==null||i.disconnect()}),(n,a)=>(t.openBlock(),t.createElementBlock("div",{ref_key:"containerRef",ref:l,class:"sarcContainer"},[t.createElementVNode("div",{ref_key:"childRef",ref:u,class:"sarcChild"},[t.renderSlot(n.$slots,"default",{},void 0,!0)],512)],512))}});const v=(o,c)=>{const e=o.__vccOpts||o;for(const[l,u]of c)e[l]=u;return e},R=v(y,[["__scopeId","data-v-941046c0"]]);exports.AspectRatioContainer=R;exports.CommonAspectRatios=g;
//# sourceMappingURL=vue-aspect-ratio-container.cjs.map
