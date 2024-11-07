#pragma once

#include <graaflib/properties/vertex_properties.h>

namespace graaf {

template <typename VERTEX_T, typename EDGE_T, graph_type GRAPH_TYPE_V>
tree<VERTEX_T, EDGE_T, GRAPH_TYPE_V>::tree(graph_t&& graph)
  : graph_{std::move(graph)} {
    std::size_t highest_degree{0};
    for (const auto& [vertex_id, _] : graph_.get_vertices()) {
      const auto degree{properties::vertex_degree(graph_, vertex_id)};

      if (degree > highest_degree) {
        highest_degree = degree;
        root_ = vertex_id;
      }

      if (degree == 1) {
        leafs_.insert(vertex_id);
      }
    }
  }

}
