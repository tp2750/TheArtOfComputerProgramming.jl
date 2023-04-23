module TheArtOfComputerProgramming

using Plots, LsqFit
include("1.1_Alg-E_euclid.jl")
export E, T

include("1.2.1_bezout.jl")
export B

include("7.0_digraph.jl")
export Digraph,Vertex, Arc ## SGB datastructures
export SimpleDigraph ## naive datastructure
export dot ## render SimpleDigraph to file 

end
