(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[197],{394:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/404",function(){return t(635)}])},635:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return Component}});var r=t(5893),s=t(7294),o=t(1163),c=t(7558),u=t(9324);t(5202);var i=t(5161),a=t(5541),l=t(9778),h=t(2758),d=t(4859),f=t(4346),p=t(4e3),m=t(2918),x=t.n(m);let useClientSideRouting=()=>{let[e,n]=(0,s.useState)(!1),t=(0,s.useRef)(!1),r=(0,o.useRouter)();return(0,s.useEffect)(()=>{r.isReady&&!t.current&&(t.current=!0,r.replace({pathname:window.location.pathname,query:window.location.search.slice(1)}).catch(e=>{n(!0)}))},[r.isReady]),e};var g=t(9008),j=t.n(g);function Component(){(0,s.useContext)(u.sA);let e=(0,o.useRouter)(),{colorMode:n,toggleColorMode:t}=(0,i.If)(),m=(0,s.useRef)(),[g,C]=(0,s.useContext)(u.DR);(0,s.useEffect)(()=>{m.current&&m.current.focus()}),(0,s.useEffect)(()=>{let change_complete=()=>g(u.Xs.map(e=>({...e})));return e.events.on("routeChangeComplete",change_complete),()=>{e.events.off("routeChangeComplete",change_complete)}},[e]);let _=useClientSideRouting();return(0,r.jsxs)(s.Fragment,{children:[(0,r.jsx)(s.Fragment,{children:(0,c.oA)(null!==C)?(0,r.jsx)(s.Fragment,{children:(0,r.jsx)(a.u_,{isOpen:null!==C,children:(0,r.jsx)(l.Z,{children:(0,r.jsxs)(h.h,{children:[(0,r.jsx)(d.x,{children:"Connection Error"}),(0,r.jsx)(f.f,{children:(0,r.jsxs)(p.x,{children:["Cannot connect to server: ",null!==C?C.message:"",". Check if server is reachable at ","http://app.pseudocaliper.com:3000"]})})]})})})}):(0,r.jsx)(s.Fragment,{})}),(0,r.jsx)(s.Fragment,{children:(0,c.oA)(_)?(0,r.jsx)(s.Fragment,{children:(0,r.jsx)(x(),{statusCode:404})}):(0,r.jsx)(s.Fragment,{})}),(0,r.jsxs)(j(),{children:[(0,r.jsx)("title",{children:"404 - Not Found"}),(0,r.jsx)("meta",{content:"The page was not found",name:"description"}),(0,r.jsx)("meta",{content:"favicon.ico",property:"og:image"})]})]})}},2918:function(e,n,t){e.exports=t(5480)}},function(e){e.O(0,[955,774,888,179],function(){return e(e.s=394)}),_N_E=e.O()}]);