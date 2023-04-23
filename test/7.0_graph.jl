using Test

@testset "Digraph" begin
    g1 = SimpleDigraph("Simple", [:F, :A, :B, :C, :D, :E], [(:A,:B), (:B,:C), (:A,:C), (:A, :E), (:F,:A), (:F, :C)])
    g2 = Digraph(g1)
    g3 = SimpleDigraph(g2)
    g4 = Digraph(g3)
    g5 = SimpleDigraph(g4)
    g6 = Digraph(g5)
    g7 = SimpleDigraph(g6)
    @test g7 == g5
    @test g6 == g4
end
