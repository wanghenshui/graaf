"use strict";(self.webpackChunkgraaf=self.webpackChunkgraaf||[]).push([[381],{1046:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>h,contentTitle:()=>l,default:()=>c,frontMatter:()=>a,metadata:()=>t,toc:()=>o});const t=JSON.parse('{"id":"algorithms/traversal/depth-first-search","title":"Depth First Search (DFS)","description":"Depth First Search (DFS) Algorithm","source":"@site/docs/algorithms/traversal/depth-first-search.md","sourceDirName":"algorithms/traversal","slug":"/algorithms/traversal/depth-first-search","permalink":"/graaf/docs/algorithms/traversal/depth-first-search","draft":false,"unlisted":false,"editUrl":"https://github.com/bobluppes/graaf/tree/main/docs/algorithms/traversal/depth-first-search.md","tags":[],"version":"current","frontMatter":{},"sidebar":"algorithmSidebar","previous":{"title":"Breadth First Search (BFS)","permalink":"/graaf/docs/algorithms/traversal/breadth-first-search"}}');var s=r(4848),i=r(8453);const a={},l="Depth First Search (DFS)",h={},o=[{value:"Depth First Search (DFS) Algorithm",id:"depth-first-search-dfs-algorithm",level:2},{value:"DFS is particularly useful for:",id:"dfs-is-particularly-useful-for",level:3},{value:"Limitations of DFS:",id:"limitations-of-dfs",level:4},{value:"Complexity and Performance:",id:"complexity-and-performance",level:3},{value:"Syntax",id:"syntax",level:2},{value:"Explanation of Parameters:",id:"explanation-of-parameters",level:3}];function d(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",header:"header",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,i.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.header,{children:(0,s.jsx)(n.h1,{id:"depth-first-search-dfs",children:"Depth First Search (DFS)"})}),"\n",(0,s.jsx)(n.h2,{id:"depth-first-search-dfs-algorithm",children:"Depth First Search (DFS) Algorithm"}),"\n",(0,s.jsx)(n.p,{children:"Depth First Search (DFS) is a fundamental graph traversal algorithm used to explore and analyze graphs, whether they are\ndirected or undirected.\nDFS traverses deeper into the graph before backtracking to explore other branches."}),"\n",(0,s.jsx)(n.p,{children:"The DFS algorithm can be succinctly described using the following steps:"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Begin by selecting a source node as the starting point of the traversal and push it onto a stack data structure."}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"While the stack is not empty, repeat the following steps:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"a. Pop a node from the top of the stack."}),"\n",(0,s.jsx)(n.li,{children:"b. Process the popped node, which may involve examining its attributes, marking it as visited, or performing other\nrelevant operations."}),"\n",(0,s.jsx)(n.li,{children:"c. Push all unvisited neighbors of the popped node onto the stack."}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Continue this process until the stack becomes empty, indicating that all reachable nodes have been visited."}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"The main difference to the BFS is the use of a stack instead of a queue."}),"\n",(0,s.jsx)(n.h3,{id:"dfs-is-particularly-useful-for",children:"DFS is particularly useful for:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Topological Sorting:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Finds a linear ordering of nodes that respects the partial order imposed by directed edges in a directed acyclic\ngraph."}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Pathfinding:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Can be used to find paths between nodes, although it may not always find the shortest path."}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Solving Mazes:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Navigates through maze-like structures to find a way from a starting point to an end point."}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Detecting Cycles:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Helps identify cycles in a graph, which is valuable for various applications."}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.h4,{id:"limitations-of-dfs",children:"Limitations of DFS:"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Completeness:"})," DFS may not explore all nodes in disconnected graphs unless modifications are made to the\nalgorithm."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Infinite Graphs:"})," DFS can get stuck in an infinite loop if applied to graphs with infinite branches."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Performance on Dense Graphs:"})," In dense graphs, DFS might explore many nodes before reaching a solution, making it\nless efficient compared to other algorithms."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"No Guarantee of Optimality:"})," Like BFS, DFS may not always find the optimal solution, especially in cases where the\ngraph has weighted edges or other complexities."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Memory Usage:"})," DFS on deep graphs may lead to excessive recursion and memory consumption due to the call stack."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Biased Exploration:"})," DFS can lead to biased exploration when some branches are deeper than others, potentially\nmissing relevant solutions."]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"complexity-and-performance",children:"Complexity and Performance:"}),"\n",(0,s.jsxs)(n.p,{children:["The DFS algorithm is implemented with a stack and runs in ",(0,s.jsx)(n.code,{children:"O(|V| + |E|)"})," time complexity for connected graphs,\nwhere ",(0,s.jsx)(n.code,{children:"|E|"})," is the number of edges and ",(0,s.jsx)(n.code,{children:"|V|"})," the number of vertices in the graph."]}),"\n",(0,s.jsx)(n.p,{children:"In summary, Depth First Search is a powerful and versatile algorithm for exploring graphs, but its limitations in\nhandling weighted graphs and negative edge weights should be considered. It provides a straightforward way to explore a\ngraph layer by layer and is particularly useful for unweighted graph scenarios and connectivity analysis."}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.a,{href:"https://en.wikipedia.org/wiki/Depth-first_search",children:"wikipedia"})}),"\n",(0,s.jsx)(n.h2,{id:"syntax",children:"Syntax"}),"\n",(0,s.jsx)(n.p,{children:"The dfs_termination_strategy returns true when a certain condition is met, causing to terminate. The dfs_edge_callback\nis a function that is used as a callback during the DFS traversal to perform some action whenever an edge is traversed."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-cpp",children:"template <\n    typename V, typename E, graph_type T,\n    typename EDGE_CALLBACK_T = detail::noop_callback,\n    typename SEARCH_TERMINATION_STRATEGY_T = detail::exhaustive_search_strategy>\n  requires std::invocable<EDGE_CALLBACK_T &, edge_id_t &> &&\n           std::is_invocable_r_v<bool, SEARCH_TERMINATION_STRATEGY_T &,\n                                 vertex_id_t>\nvoid depth_first_traverse(\n    const graph<V, E, T> &graph, vertex_id_t start_vertex,\n    const EDGE_CALLBACK_T &edge_callback,\n    const SEARCH_TERMINATION_STRATEGY_T &search_termination_strategy =\n        SEARCH_TERMINATION_STRATEGY_T{});\n"})}),"\n",(0,s.jsx)(n.h3,{id:"explanation-of-parameters",children:"Explanation of Parameters:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"graph"}),": The graph to traverse. This parameter represents the graph data structure on which the traversal will be\nperformed."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"start_vertex"}),": Vertex id where the traversal should be started. This parameter specifies the initial vertex from\nwhich the traversal begins."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"edge_callback"}),": A callback function that is called for each traversed edge. It should be invocable with\nan ",(0,s.jsx)(n.code,{children:"edge_id_t"})," object, representing an edge in the graph."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"search_termination_strategy"}),": A unary predicate that indicates whether the traversal should continue or not. The\ntraversal continues while this predicate returns ",(0,s.jsx)(n.code,{children:"false"}),". This parameter is optional and defaults to a predefined\nsearch termination strategy, which traverses the graph exhaustively."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"return"}),": The provided code does not explicitly return a value. The traversal is performed by visiting vertices and\nedges in the graph based on the specified parameters."]}),"\n"]})]})}function c(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},8453:(e,n,r)=>{r.d(n,{R:()=>a,x:()=>l});var t=r(6540);const s={},i=t.createContext(s);function a(e){const n=t.useContext(i);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:a(e.components),t.createElement(i.Provider,{value:n},e.children)}}}]);