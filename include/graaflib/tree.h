#pragma once

#include <vector>

#include <graaflib/graph.h>
#include <graaflib/types.h>

namespace graaf {

template <typename VERTEX_T, typename EDGE_T, graph_type GRAPH_TYPE_V>
class tree {
  using graph_t = graph<VERTEX_T, EDGE_T, GRAPH_TYPE_V>;
  using edges_t = std::vector<edge_id_t>;
  public:
    tree(graph_t&& graph);


    [[nodiscard]] vertex_id_t get_root() const { return root_; }

    [[nodiscard]] const graph_t::vertices_t& get_leafs() const { return leafs_; }

    [[nodiscard]] edges_t get_edges() const;

    [[nodiscard]] bool empty() const { return graph_.vertex_count() == 0; }

  private:
    graph_t graph_{};
    vertex_id_t root_{};
    graph_t::vertices_t leafs_{};
};

template <typename V, typename E, graph_type T>
[[nodiscard]] tree<V, E, T> tree_from_graph(const graph<V, E, T>& input_graph, const std::vector<edge_id_t>& tree_edges);

}

#include "tree.tpp"
