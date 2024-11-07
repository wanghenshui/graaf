#pragma once

#include <graaflib/graph.h>
#include <graaflib/types.h>

namespace graaf {

template <typename VERTEX_T, typename EDGE_T, graph_type GRAPH_TYPE_V>
class tree {
  using graph_t = graph<VERTEX_T, EDGE_T, GRAPH_TYPE_V>;
  public:
    tree(graph_t&& graph);

    [[nodiscard]] vertex_id_t get_root() const { return root_; }

    [[nodiscard]] const graph_t::vertices_t& get_leafs() const { return leafs_; }

  private:
    graph_t graph_{};
    vertex_id_t root_{};
    graph_t::vertices_t leafs_{};
};

}

#include "tree.tpp"
