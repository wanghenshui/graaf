"use strict";(self.webpackChunkgraaf=self.webpackChunkgraaf||[]).push([[547],{6819:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>i,contentTitle:()=>c,default:()=>h,frontMatter:()=>a,metadata:()=>o,toc:()=>l});const o=JSON.parse('{"id":"algorithms/strongly-connected-components/tarjan","title":"Tarjan\'s Strongly Connected Components","description":"Tarjan\'s algorithm computes the Strongly Connected Components (SCCs) of a directed graph. An SCC is a subset of vertices","source":"@site/docs/algorithms/strongly-connected-components/tarjan.md","sourceDirName":"algorithms/strongly-connected-components","slug":"/algorithms/strongly-connected-components/tarjan","permalink":"/graaf/docs/algorithms/strongly-connected-components/tarjan","draft":false,"unlisted":false,"editUrl":"https://github.com/bobluppes/graaf/tree/main/docs/algorithms/strongly-connected-components/tarjan.md","tags":[],"version":"current","frontMatter":{},"sidebar":"algorithmSidebar","previous":{"title":"Kosaraju\'s Strongly Connected Components","permalink":"/graaf/docs/algorithms/strongly-connected-components/kosarajus"},"next":{"title":"Topological sort algorithm","permalink":"/graaf/docs/algorithms/topological-sort/"}}');var r=t(4848),s=t(8453);const a={},c="Tarjan's Strongly Connected Components",i={},l=[{value:"Syntax",id:"syntax",level:2}];function d(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",header:"header",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,s.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.header,{children:(0,r.jsx)(n.h1,{id:"tarjans-strongly-connected-components",children:"Tarjan's Strongly Connected Components"})}),"\n",(0,r.jsx)(n.p,{children:"Tarjan's algorithm computes the Strongly Connected Components (SCCs) of a directed graph. An SCC is a subset of vertices\nin the graph for which every vertex is reachable from every other vertex in the subset, i.e. there exists a path between\nall pairs of vertices for the subset of vertices."}),"\n",(0,r.jsxs)(n.p,{children:["Tarjan's algorithm runs in ",(0,r.jsx)(n.code,{children:"O(|V| + |E|)"})," for directed graphs, where ",(0,r.jsx)(n.code,{children:"|V|"})," the number of vertices and ",(0,r.jsx)(n.code,{children:"|E|"})," is the\nnumber of edges in the graph. So it runs in linear time."]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.a,{href:"https://en.wikipedia.org/wiki/Tarjan%27s_strongly_connected_components_algorithm",children:"wikipedia"})}),"\n",(0,r.jsx)(n.h2,{id:"syntax",children:"Syntax"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-cpp",children:"template <typename V, typename E>\n[[nodiscard]] sccs_t tarjans_strongly_connected_components(const graph<V, E, graph_type::DIRECTED>& graph);\n"})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"graph"})," The graph for which to compute SCCs."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"return"})," A type consisting of a vector of vectors representing SCCs."]}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},8453:(e,n,t)=>{t.d(n,{R:()=>a,x:()=>c});var o=t(6540);const r={},s=o.createContext(r);function a(e){const n=o.useContext(s);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:a(e.components),o.createElement(s.Provider,{value:n},e.children)}}}]);