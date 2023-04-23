var documenterSearchIndex = {"docs":
[{"location":"1.2.10_algorithm_analysis/#.2.10-Algorithm-analysis","page":"1.2.10 Alg Analysis","title":"1.2.10 Algorithm analysis","text":"","category":"section"},{"location":"1.2.10_algorithm_analysis/","page":"1.2.10 Alg Analysis","title":"1.2.10 Alg Analysis","text":"Note the use of Chebychevs inequality (p 98):","category":"page"},{"location":"1.2.10_algorithm_analysis/","page":"1.2.10 Alg Analysis","title":"1.2.10 Alg Analysis","text":"Given a distribution A with mean µ and standard deviation σ, Then the probability of being r times the the standard deviation away from the mean is less than 1/r²:","category":"page"},{"location":"1.2.10_algorithm_analysis/","page":"1.2.10 Alg Analysis","title":"1.2.10 Alg Analysis","text":"$","category":"page"},{"location":"1.2.10_algorithm_analysis/","page":"1.2.10 Alg Analysis","title":"1.2.10 Alg Analysis","text":"P(|A - µ| > rσ) < 1/r² $","category":"page"},{"location":"1.2.1_bezout/#Section-1.2.1:-Bezout's-identity","page":"1.2.1: Bezout's identity","title":"Section 1.2.1: Bezout's identity","text":"","category":"section"},{"location":"1.2.1_bezout/","page":"1.2.1: Bezout's identity","title":"1.2.1: Bezout's identity","text":"In Section 1.2.1, Knuth introduces induction.","category":"page"},{"location":"1.2.1_bezout/","page":"1.2.1: Bezout's identity","title":"1.2.1: Bezout's identity","text":"He also states, proves and implements Bezout's identity which he calls the \"Extended Euclud's algorithm\":","category":"page"},{"location":"1.2.1_bezout/","page":"1.2.1: Bezout's identity","title":"1.2.1: Bezout's identity","text":"Given two positive integers, m, n, we compute the common greates divisor, d, and also integers a, b (not needed to be positive) such that d = am + bn.","category":"page"},{"location":"1.2.1_bezout/","page":"1.2.1: Bezout's identity","title":"1.2.1: Bezout's identity","text":"As wikipedia notes, this is the prototype of a primary ideal.","category":"page"},{"location":"1.2.1_bezout/","page":"1.2.1: Bezout's identity","title":"1.2.1: Bezout's identity","text":"Knuth also calls this algorithm E, but I'll call it B:","category":"page"},{"location":"1.2.1_bezout/","page":"1.2.1: Bezout's identity","title":"1.2.1: Bezout's identity","text":"Input: n, m","category":"page"},{"location":"1.2.1_bezout/","page":"1.2.1: Bezout's identity","title":"1.2.1: Bezout's identity","text":"[ Initialize ] a' = b = 1, a = b' = 0, c = m, d = n\n[ Divide ] q = c ÷ d; r = c % d (c = qd + r ie m = qn + r)\n[ Remainder zero? ] r == 0 && return (d=n, a=1, b=q)\n[ Recycle ] c = d, d = r, t = a', a' = a, a = t-qa, t = b' , b' = b, b = t - qb, goto 2.","category":"page"},{"location":"1.2.1_bezout/","page":"1.2.1: Bezout's identity","title":"1.2.1: Bezout's identity","text":"This can be done a bit simpler, but we do need to remember a and b over 2 iterations:","category":"page"},{"location":"1.2.1_bezout/","page":"1.2.1: Bezout's identity","title":"1.2.1: Bezout's identity","text":"[ Initialize ] a = b2 = 0, b = a2 = 1\n[ Divide ] q = m ÷ n; r = m % n (m = qn + r)\n Recycle  = (n, r, a2 - qa, b2 - qb, a, b)\n[ Remainder zero? ] r == 0 && return (a, b, m)\ngoto 2","category":"page"},{"location":"7.0_graphs/#Chapter-7.-Graphs","page":"7.0: Graphs","title":"Chapter 7. Graphs","text":"","category":"section"},{"location":"7.0_graphs/","page":"7.0: Graphs","title":"7.0: Graphs","text":"A graph consists of:","category":"page"},{"location":"7.0_graphs/","page":"7.0: Graphs","title":"7.0: Graphs","text":"a set of vertices (no vertex is repeated)\na set of edges which are unordered pairs of distinct vertices","category":"page"},{"location":"7.0_graphs/","page":"7.0: Graphs","title":"7.0: Graphs","text":"In this definition there is at most one edge between any pair of vertexes, and no \"self-edges\" from one vertex to itself.","category":"page"},{"location":"7.0_graphs/","page":"7.0: Graphs","title":"7.0: Graphs","text":"A digraph consists of:","category":"page"},{"location":"7.0_graphs/","page":"7.0: Graphs","title":"7.0: Graphs","text":"a set of vertexes as for graphs\na \"multiset\" of arcs which are ordered pairs of vertices","category":"page"},{"location":"7.0_graphs/","page":"7.0: Graphs","title":"7.0: Graphs","text":"In a digraph, we can have repeated arcs and arcs from a vertex to itself.","category":"page"},{"location":"7.0_graphs/","page":"7.0: Graphs","title":"7.0: Graphs","text":"The vertex at the end of an arc is called the tip.","category":"page"},{"location":"7.0_graphs/#Adjacency-matrix","page":"7.0: Graphs","title":"Adjacency matrix","text":"","category":"section"},{"location":"7.0_graphs/","page":"7.0: Graphs","title":"7.0: Graphs","text":"The adjacency matrix of a directed graph is defined on page 19 and used on page 20.","category":"page"},{"location":"7.0_graphs/#SGB-data-structure","page":"7.0: Graphs","title":"SGB data structure","text":"","category":"section"},{"location":"7.0_graphs/","page":"7.0: Graphs","title":"7.0: Graphs","text":"The SGB (Stanford GraphBase) datastructure for directed graphs is defined on page 21.","category":"page"},{"location":"7.0_graphs/#SGB-digraph","page":"7.0: Graphs","title":"SGB digraph","text":"","category":"section"},{"location":"7.0_graphs/","page":"7.0: Graphs","title":"7.0: Graphs","text":"A digraph consists of:","category":"page"},{"location":"7.0_graphs/","page":"7.0: Graphs","title":"7.0: Graphs","text":"A vector of vertex nodes\nAn \"unstructured pool\" of arch nodes","category":"page"},{"location":"7.0_graphs/","page":"7.0: Graphs","title":"7.0: Graphs","text":"I choose to model the arches as dicts.","category":"page"},{"location":"7.0_graphs/","page":"7.0: Graphs","title":"7.0: Graphs","text":"A vertex consists of:","category":"page"},{"location":"7.0_graphs/","page":"7.0: Graphs","title":"7.0: Graphs","text":"A name called NAME\nA pointer to the first ARC starting at that vertex called ARCS","category":"page"},{"location":"7.0_graphs/","page":"7.0: Graphs","title":"7.0: Graphs","text":"When modeling arcs as Dicts, the \"pointer\" is the key.","category":"page"},{"location":"7.0_graphs/","page":"7.0: Graphs","title":"7.0: Graphs","text":"An arc consists of:","category":"page"},{"location":"7.0_graphs/","page":"7.0: Graphs","title":"7.0: Graphs","text":"The tip of the arch (end vertex) caled TIP\nA pointer to the next arc starting at the same vertex as this one or missing if this is the only arch starting at this vertex, called NEXT","category":"page"},{"location":"7.0_graphs/","page":"7.0: Graphs","title":"7.0: Graphs","text":"When modeling this as a Dict, the value of the Dict is an Int indexing the TIP in the vector of vertexes and a String which is the key of NEXT or Missing.","category":"page"},{"location":"7.0_graphs/#Data-structures-and-methods","page":"7.0: Graphs","title":"Data structures and methods","text":"","category":"section"},{"location":"7.0_graphs/","page":"7.0: Graphs","title":"7.0: Graphs","text":"I'll like to be able to convert between representations like adjaceny matrix, SGB form and other representations.","category":"page"},{"location":"7.0_graphs/","page":"7.0: Graphs","title":"7.0: Graphs","text":"struct AdjacencyMatrix\n    A::Matrix{Int}\nend","category":"page"},{"location":"7.0_graphs/","page":"7.0: Graphs","title":"7.0: Graphs","text":"Implementing the SGB data structure using Dict for the arcs.","category":"page"},{"location":"7.0_graphs/","page":"7.0: Graphs","title":"7.0: Graphs","text":"struct Arc\n    TIP::Int ## Index of end vertex\n    NEXT::Union{String,Missing} ## Key of next arct starting at same node\nend\nstruct Vertex\n    NAME::String ## Name of vertex\n    ARCS::Union{String, Missing} ## Key of first arc starting at this vertex\nend\nstruct Digraph\n    vertices::Vector{Vertex}\n    arcs::Dict{String,Arc}\nend","category":"page"},{"location":"7.0_graphs/","page":"7.0: Graphs","title":"7.0: Graphs","text":"I use a \"naive\" graph data structure as a base case:","category":"page"},{"location":"7.0_graphs/","page":"7.0: Graphs","title":"7.0: Graphs","text":"struct SimpleDigraph\n    name::String\n    nodes::Vector{Symbol}\n    arcs::Vector{Tuple{Symbol,Symbol}}\nend","category":"page"},{"location":"7.0_graphs/","page":"7.0: Graphs","title":"7.0: Graphs","text":"Here is how a minimal example looks:","category":"page"},{"location":"7.0_graphs/","page":"7.0: Graphs","title":"7.0: Graphs","text":"A --> B --> C\nL-----------^","category":"page"},{"location":"7.0_graphs/","page":"7.0: Graphs","title":"7.0: Graphs","text":"(Image: simple graph)","category":"page"},{"location":"7.0_graphs/","page":"7.0: Graphs","title":"7.0: Graphs","text":"In \"naive\" notation (note the nice \"dot\" function I wrote to visualize the naive graphs using GraphViz):","category":"page"},{"location":"7.0_graphs/","page":"7.0: Graphs","title":"7.0: Graphs","text":"g1 = SimpleDigraph(\"Simple\", [:A, :B, :C], [(:A,:B), (:B,:C), (:A,:C)])\ndot(g1,\"/tmp/g1.png\");","category":"page"},{"location":"7.0_graphs/","page":"7.0: Graphs","title":"7.0: Graphs","text":"In SGB notation:","category":"page"},{"location":"7.0_graphs/","page":"7.0: Graphs","title":"7.0: Graphs","text":"\ng2 = Digraph(\n    [Vertex(\"A\",\"AB\"),\n     Vertex(\"B\",\"BC\"),\n     Vertex(\"C\", missing),\n     ],\n    Dict(\"AB\"=>Arc(2,\"AC\"),\n         \"AC\"=>Arc(3,missing),\n         \"BC\"=>Arc(3,missing),\n         )\n)","category":"page"},{"location":"7.0_graphs/#Conversion","page":"7.0: Graphs","title":"Conversion","text":"","category":"section"},{"location":"7.0_graphs/#Digraph(g::SimpleDigraph)","page":"7.0: Graphs","title":"Digraph(g::SimpleDigraph)","text":"","category":"section"},{"location":"7.0_graphs/","page":"7.0: Graphs","title":"7.0: Graphs","text":"It is surprisingly awkward to convert from the naive digraph to the Knuth digraph, but I currently have one that works for this example:","category":"page"},{"location":"7.0_graphs/","page":"7.0: Graphs","title":"7.0: Graphs","text":"julia> Digraph(SimpleDigraph(\"Simple\", [:A, :B, :C, :D], [(:A,:B), (:B,:C), (:A,:C)]))\nDigraph(\n    Vertex[\n        Vertex(\"B\", \"BC\"),\n        Vertex(\"A\", \"AB\"),\n        Vertex(\"C\", missing),\n        Vertex(\"D\", missing)\n    ],\n    Dict{String, Arc}(\n        \"AC\" => Arc(3, missing),\n        \"BC\" => Arc(3, missing),\n        \"AB\" => Arc(1, \"AC\")\n    )\n)\n","category":"page"},{"location":"7.0_graphs/#SimpleDigraph(g::Digraph)","page":"7.0: Graphs","title":"SimpleDigraph(g::Digraph)","text":"","category":"section"},{"location":"7.0_graphs/","page":"7.0: Graphs","title":"7.0: Graphs","text":"We can also convert the other way.  It takes a bit before it is idempotent. We use the very nice StructEquality.jl package to make it easy to compare the data structures.","category":"page"},{"location":"7.0_graphs/","page":"7.0: Graphs","title":"7.0: Graphs","text":"    g1 = SimpleDigraph(\"Simple\", [:A, :B, :C, :D, :E, :F], [(:A,:B), (:B,:C), (:A,:C), (:A, :E), (:F, :A), (:F, :C)])\n    g2 = Digraph(g1)\n    g3 = SimpleDigraph(g2)\n    g4 = Digraph(g3)\n    g5 = SimpleDigraph(g4)\n    g6 = Digraph(g5)\n    g7 = SimpleDigraph(g6)\n    @test g7 == g5\n    @test g6 == g4","category":"page"},{"location":"7.0_graphs/","page":"7.0: Graphs","title":"7.0: Graphs","text":"Even when the data structures look different, GraphViz renders them exactly the same.","category":"page"},{"location":"7.0_graphs/","page":"7.0: Graphs","title":"7.0: Graphs","text":"(Image: more complex graph)","category":"page"},{"location":"7.0_graphs/#TODO","page":"7.0: Graphs","title":"TODO","text":"","category":"section"},{"location":"7.0_graphs/","page":"7.0: Graphs","title":"7.0: Graphs","text":"[X] Digraph(g::SimpleDigraph)\n[x] SimpleDigraph(Digraph)\n[ ] AdjacencyMatrix(x::Digraph)\n[ ] Digraph(x::AdjacencyMatrix)\n[ ] Algorith B (bipartate testing) p22 ff","category":"page"},{"location":"7.0_graphs/","page":"7.0: Graphs","title":"7.0: Graphs","text":"Before the graphs there are some interesting claims about latin squares that could be nice to check.","category":"page"},{"location":"","page":"Home","title":"Home","text":"CurrentModule = TheArtOfComputerProgramming","category":"page"},{"location":"#The-Art-Of-Computer-Programming","page":"Home","title":"The Art Of Computer Programming","text":"","category":"section"},{"location":"","page":"Home","title":"Home","text":"These are my notes from reading Knuth: The art of Computer programming.","category":"page"},{"location":"","page":"Home","title":"Home","text":"","category":"page"},{"location":"","page":"Home","title":"Home","text":"Modules = [TheArtOfComputerProgramming]","category":"page"},{"location":"1.1_euclid/#Chapter-1.1:-Euclids-algorithm","page":"1.1: Euclid alg","title":"Chapter 1.1: Euclids algorithm","text":"","category":"section"},{"location":"1.1_euclid/#Algorithm-E:-Euclids-algorithm-for-finding-gcd(m,n)","page":"1.1: Euclid alg","title":"Algorithm E: Euclids algorithm for finding gcd(m,n)","text":"","category":"section"},{"location":"1.1_euclid/","page":"1.1: Euclid alg","title":"1.1: Euclid alg","text":"Input: m, n positive integers.","category":"page"},{"location":"1.1_euclid/","page":"1.1: Euclid alg","title":"1.1: Euclid alg","text":"E1 [ find remainder ] r = m % n\nE2 [ is remainder zero ] r == 0 && return(n)\nE3  Reduce  = (n,r) . Goto E1","category":"page"},{"location":"1.1_euclid/","page":"1.1: Euclid alg","title":"1.1: Euclid alg","text":"Let's implement in Julia:","category":"page"},{"location":"1.1_euclid/","page":"1.1: Euclid alg","title":"1.1: Euclid alg","text":"function E(m,n)\n    while (r = m % n) != 0\n        (m,n) = (n,r)\n    end\n    n\nend\n","category":"page"},{"location":"1.1_euclid/#Analysis","page":"1.1: Euclid alg","title":"Analysis","text":"","category":"section"},{"location":"1.1_euclid/","page":"1.1: Euclid alg","title":"1.1: Euclid alg","text":"Knuth's goes a bit into the analysis be looking at the average number of iterations neded for a given n.","category":"page"},{"location":"1.1_euclid/","page":"1.1: Euclid alg","title":"1.1: Euclid alg","text":"T_n","category":"page"},{"location":"1.1_euclid/","page":"1.1: Euclid alg","title":"1.1: Euclid alg","text":": = average over all integers m > 0 of time sstep E1 of the algorithm E is performed. [p 7]","category":"page"},{"location":"1.1_euclid/","page":"1.1: Euclid alg","title":"1.1: Euclid alg","text":"He argues that we only need to check m = n, so we get the following implementation:","category":"page"},{"location":"1.1_euclid/","page":"1.1: Euclid alg","title":"1.1: Euclid alg","text":"function T(n0)\n    i=0\n    for m in 1:n0\n        n = n0\n        while (r = m % n) != 0\n            (m,n) = (n,r)\n            i = i + 1\n        end\n        @debug m, n, i\n    end\n    i/n0\nend","category":"page"},{"location":"1.1_euclid/","page":"1.1: Euclid alg","title":"1.1: Euclid alg","text":"He claims that asymptotically, this is 12log(2)pi^2 log(n). we can check this by plotting.","category":"page"},{"location":"1.1_euclid/","page":"1.1: Euclid alg","title":"1.1: Euclid alg","text":"using Plots\nf(n) = 12log(2)/pi^2*log(n)\nn = 1000; plot([T.(1:n) f.(1:n)], label=[\"T(n)\" \"12log(2)/pi^2log(n)\"], title=\"Average number of iterations of gcd\")","category":"page"},{"location":"1.1_euclid/","page":"1.1: Euclid alg","title":"1.1: Euclid alg","text":"(Image: gcd iterations)","category":"page"},{"location":"1.1_euclid/","page":"1.1: Euclid alg","title":"1.1: Euclid alg","text":"We can also estimate it by fitting a log curve to the simulation and plot the difference between the estimated coefficient and the stated one:","category":"page"},{"location":"1.1_euclid/","page":"1.1: Euclid alg","title":"1.1: Euclid alg","text":"using LsqFit, Plots\n\nmodel(x,p) = p[1]*log.(x)\np0 = [1.]\nn = 500; f1 = curve_fit(model, 1.:n, T.(1.:n), p0)\ncoef(f1)[1]*pi^2/log(2)-12\n\nfunction residual(n)\n    model(x,p) = p[1]*log.(x)\n    p0 = [1.]\n    f1 = curve_fit(model, 1.:n, T.(1.:n), p0)\n    coef(f1)[1] - 12log(2)/pi^2\nend\n\nplot(100:100:1000,residual.(100:100:1000), ylims=[residual(100)*1.1,0], label=\"residual\", title=\"Coefficient -  12log(2)/pi^2\")\n","category":"page"},{"location":"1.1_euclid/","page":"1.1: Euclid alg","title":"1.1: Euclid alg","text":"(Image: model convergence)","category":"page"}]
}
