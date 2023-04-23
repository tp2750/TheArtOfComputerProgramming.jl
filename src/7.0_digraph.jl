## SGB Datastructure

struct Arc
    TIP::Int ## Index of end vertex
    NEXT::Union{String,Missing} ## Key of next arct starting at same node
end
struct Vertex
    NAME::String ## Name of vertex
    ARCS::Union{String, Missing} ## Key of first arc starting at this vertex
end
struct Digraph
    vertices::Vector{Vertex}
    arcs::Dict{String,Arc}
end

## Naive Datastructure
struct SimpleDigraph
    name::String
    nodes::Vector{Symbol}
    arcs::Vector{Tuple{Symbol,Symbol}}
end

## Plot the naive graph
function dot(g::SimpleDigraph)
    res = "digraph $(g.name) {\n"
    for node in g.nodes
        res *= "$node \n"
    end
    for (b,t) in g.arcs
        res *= "$b -> $t \n"
    end
    res *= "}"
    res
end

function dot(g::SimpleDigraph,path::String;type="png")
    res = dot(g)
    cmd = pipeline(`echo "$res"`, `dot -T$type -o"$path"`)
    run(cmd)
end

