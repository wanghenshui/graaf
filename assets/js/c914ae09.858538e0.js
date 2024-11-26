"use strict";(self.webpackChunkgraaf=self.webpackChunkgraaf||[]).push([[283],{9107:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>h,default:()=>c,frontMatter:()=>o,metadata:()=>r,toc:()=>i});const r=JSON.parse('{"id":"algorithms/shortest-path/floyd-warshall","title":"Floyd-Warshall algorithm","description":"Floyd-Warshall algorithm computes the shortest path between any two vertices in a graph, both directed and undirected.","source":"@site/docs/algorithms/shortest-path/floyd-warshall.md","sourceDirName":"algorithms/shortest-path","slug":"/algorithms/shortest-path/floyd-warshall","permalink":"/graaf/docs/algorithms/shortest-path/floyd-warshall","draft":false,"unlisted":false,"editUrl":"https://github.com/bobluppes/graaf/tree/main/docs/algorithms/shortest-path/floyd-warshall.md","tags":[],"version":"current","frontMatter":{},"sidebar":"algorithmSidebar","previous":{"title":"Dijkstra Shortest Path","permalink":"/graaf/docs/algorithms/shortest-path/dijkstra"},"next":{"title":"Strongly Connected Component Algorithms","permalink":"/graaf/docs/category/strongly-connected-component-algorithms"}}');var s=a(4848),n=a(8453);const o={},h="Floyd-Warshall algorithm",l={},i=[{value:"Syntax",id:"syntax",level:2}];function d(e){const t={a:"a",code:"code",h1:"h1",h2:"h2",header:"header",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,n.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.header,{children:(0,s.jsx)(t.h1,{id:"floyd-warshall-algorithm",children:"Floyd-Warshall algorithm"})}),"\n",(0,s.jsxs)(t.p,{children:["Floyd-Warshall algorithm computes the shortest path between any two vertices in a graph, both directed and undirected.\nThe algorithm does not work for graphs with negative weight cycles.\nThe key idea of the algorithm is to relax the weighted shortest path between any two vertices, using any vertex as an\nintermediate one.\nAdvantage of the algorithm is that it processes vertices instead of edges. This advantage can be used when the number of\nedges is large enough, aka a dense graph.\nRuntime of the algorithm is O(|V",(0,s.jsx)("sup",{children:"3"}),"|) and memory consumption is O(|V",(0,s.jsx)("sup",{children:"2"}),"|)."]}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.a,{href:"https://en.wikipedia.org/wiki/Floyd%E2%80%93Warshall_algorithm",children:"wikipedia"})}),"\n",(0,s.jsx)(t.h2,{id:"syntax",children:"Syntax"}),"\n",(0,s.jsx)(t.p,{children:"Calculates the shortest path between any two vertices."}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-cpp",children:"template <typename V, typename E, graph_type T,\n          typename WEIGHT_T = decltype(get_weight(std::declval<E>()))>\nstd::vector<std::vector<WEIGHT_T>> floyd_warshall_shortest_paths(\n    const graph<V, E, T>& graph);\n"})}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.strong,{children:"graph"})," The graph to extract the shortest path from."]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.strong,{children:"return"})," Returns a 2D vector of the shortest path. If a path doesn't exist between two vertices, mark it as\nTYPE_MAX."]}),"\n"]})]})}function c(e={}){const{wrapper:t}={...(0,n.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},8453:(e,t,a)=>{a.d(t,{R:()=>o,x:()=>h});var r=a(6540);const s={},n=r.createContext(s);function o(e){const t=r.useContext(n);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function h(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),r.createElement(n.Provider,{value:t},e.children)}}}]);