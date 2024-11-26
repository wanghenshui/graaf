"use strict";(self.webpackChunkgraaf=self.webpackChunkgraaf||[]).push([[672],{3243:(e,r,o)=>{o.r(r),o.d(r,{assets:()=>a,contentTitle:()=>i,default:()=>d,frontMatter:()=>l,metadata:()=>t,toc:()=>c});const t=JSON.parse('{"id":"algorithms/coloring/welsh-powell","title":"Welsh Powell Algorithm","description":"Welsh Powell Algorithm computes a coloring of the vertices of a (simple, connected) graph such that no two adjacent","source":"@site/docs/algorithms/coloring/welsh-powell.md","sourceDirName":"algorithms/coloring","slug":"/algorithms/coloring/welsh-powell","permalink":"/graaf/docs/algorithms/coloring/welsh-powell","draft":false,"unlisted":false,"editUrl":"https://github.com/bobluppes/graaf/tree/main/docs/algorithms/coloring/welsh-powell.md","tags":[],"version":"current","frontMatter":{},"sidebar":"algorithmSidebar","previous":{"title":"Greedy Graph Coloring Algorithm","permalink":"/graaf/docs/algorithms/coloring/greedy-graph-coloring"},"next":{"title":"Cycle Detection Algorithms","permalink":"/graaf/docs/category/cycle-detection-algorithms"}}');var n=o(4848),s=o(8453);const l={},i="Welsh Powell Algorithm",a={},c=[{value:"Syntax",id:"syntax",level:2}];function h(e){const r={a:"a",code:"code",h1:"h1",h2:"h2",header:"header",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,s.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(r.header,{children:(0,n.jsx)(r.h1,{id:"welsh-powell-algorithm",children:"Welsh Powell Algorithm"})}),"\n",(0,n.jsx)(r.p,{children:"Welsh Powell Algorithm computes a coloring of the vertices of a (simple, connected) graph such that no two adjacent\nvertices have the same color."}),"\n",(0,n.jsx)(r.p,{children:"If the graph has different connected components, each component will be treated as a separate simple connected graph."}),"\n",(0,n.jsx)(r.p,{children:"The algorithm is heuristic and does not guarantee an optimal number of different colors (that is, equal to the chromatic\nnumber of a simple, connected graph)."}),"\n",(0,n.jsx)(r.p,{children:"Colors are represented by the numbers 0, 1, 2,... The Welsh Powell algorithm considers the vertices of the graph in\ndescending order of their degrees and assigns each vertex with its first available color, i.e. the color with the\nsmallest number that is not already used by one of its neighbors."}),"\n",(0,n.jsxs)(r.p,{children:["The overall worst-case time complexity of the algorithm is ",(0,n.jsx)(r.code,{children:"O(n^2)"}),". In cases where the graph has a fixed degree (a\nconstant number of neighbors for each vertex), the time complexity can be approximated as ",(0,n.jsx)(r.code,{children:"O(n)"}),". However, if the graph\nis highly connected (dense) and approaches a complete graph, the time complexity could approach ",(0,n.jsx)(r.code,{children:"O(n^2)"}),"."]}),"\n",(0,n.jsxs)(r.p,{children:["If no coloring is possible, an empty ",(0,n.jsx)(r.code,{children:"unordered_map"})," is returned. This is the case when the graph contains no vertices."]}),"\n",(0,n.jsx)(r.p,{children:(0,n.jsx)(r.a,{href:"https://www.tutorialspoint.com/welsh-powell-graph-colouring-algorithm",children:"Tutorials Point"})}),"\n",(0,n.jsx)(r.h2,{id:"syntax",children:"Syntax"}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-cpp",children:"template <typename GRAPH>\nstd::unordered_map<vertex_id_t, int> welsh_powell_coloring(const GRAPH& graph);\n"})}),"\n",(0,n.jsxs)(r.ul,{children:["\n",(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.strong,{children:"graph"})," A graph to perform graph coloring on."]}),"\n",(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.strong,{children:"return"})," An unordered_map where keys are vertex identifiers and values are their respective colors. If no coloring\nis possible, an empty ",(0,n.jsx)(r.code,{children:"unordered_map"})," is returned."]}),"\n"]})]})}function d(e={}){const{wrapper:r}={...(0,s.R)(),...e.components};return r?(0,n.jsx)(r,{...e,children:(0,n.jsx)(h,{...e})}):h(e)}},8453:(e,r,o)=>{o.d(r,{R:()=>l,x:()=>i});var t=o(6540);const n={},s=t.createContext(n);function l(e){const r=t.useContext(s);return t.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function i(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:l(e.components),t.createElement(s.Provider,{value:r},e.children)}}}]);