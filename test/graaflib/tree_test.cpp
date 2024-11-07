#include <graaflib/tree.h>
#include <gtest/gtest.h>

namespace graaf {

TEST(TreeTest, TreeWithSingleVertex) {
  // GIVEN - a tree with a single vertex
  undirected_graph<int, int> graph{};
  const auto vertex_0{graph.add_vertex(0)};

  // WHEN
  tree tree{std::move(graph)};

  // THEN
  EXPECT_EQ(tree.get_root(), vertex_0);
}

TEST(TreeTest, TreeWithRootAndTwoLeafs) {
  // GIVEN - a tree with a root and two leafs
  undirected_graph<int, int> graph{};
  const auto vertex_0{graph.add_vertex(0)};
  const auto vertex_1{graph.add_vertex(1)};
  const auto vertex_2{graph.add_vertex(2)};
  graph.add_edge(vertex_0, vertex_1, 10);
  graph.add_edge(vertex_0, vertex_2, 11);

  // WHEN
  tree tree{std::move(graph)};

  // THEN
  EXPECT_EQ(tree.get_root(), vertex_0);
  
  const auto& leafs{tree.get_leafs()};
  EXPECT_EQ(leafs.size(), 2);
  EXPECT_TRUE(leafs.contains(vertex_1));
  EXPECT_TRUE(leafs.contains(vertex_2));
}

TEST(TreeTest, TreeWithRootAndFiveLeafs) {
  // GIVEN - a tree with a root and two leafs
  undirected_graph<int, int> graph{};
  const auto vertex_0{graph.add_vertex(0)};
  const auto vertex_1{graph.add_vertex(1)};
  const auto vertex_2{graph.add_vertex(2)};
  const auto vertex_3{graph.add_vertex(3)};
  const auto vertex_4{graph.add_vertex(4)};
  const auto vertex_5{graph.add_vertex(5)};
  const auto vertex_6{graph.add_vertex(6)};
  graph.add_edge(vertex_0, vertex_1, 10);
  graph.add_edge(vertex_0, vertex_2, 11);
  graph.add_edge(vertex_2, vertex_3, 12);
  graph.add_edge(vertex_2, vertex_4, 13);
  graph.add_edge(vertex_0, vertex_5, 14);
  graph.add_edge(vertex_0, vertex_6, 15);

  // WHEN
  tree tree{std::move(graph)};

  // THEN
  EXPECT_EQ(tree.get_root(), vertex_0);
  
  const auto& leafs{tree.get_leafs()};
  EXPECT_EQ(leafs.size(), 5);
  EXPECT_TRUE(leafs.contains(vertex_1));
  EXPECT_TRUE(leafs.contains(vertex_3));
  EXPECT_TRUE(leafs.contains(vertex_4));
  EXPECT_TRUE(leafs.contains(vertex_5));
  EXPECT_TRUE(leafs.contains(vertex_6));
}

}
