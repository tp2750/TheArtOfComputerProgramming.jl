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

## Accessor Methods
NAME(v::Vertex) = v.NAME
ARCS(v::Vertex) = v.ARCS
TIP(a::Arc) = a.TIP
NEXT(a::Arc) = a.NEXT

import Base.in ## Overload in for vetex
function in(name::String, vertices::Vector{Vertex})
    for v in vertices
        NAME(v) == name && return(true)
    end
    false
end
in(name::Symbol, vertices::Vector{Vertex}) = in(string(name), vertices)

import Base.findfirst ## Overload for Vertex
function findfirst(name::String, vertices::Vector{Vertex})
    for (index,vertex) in enumerate(vertices)
        NAME(vertex) == name && return(index)
    end
    nothing
end
findfirst(name::Symbol, vertices::Vector{Vertex}) = findfirst(string(name), vertices)

import Base.findlast ## Overload for vertex and arches
function findlast(v::Vertex, arches::Dict) ## Retun list of arches starting at v
    ismissing(ARCS(v)) && return missing
    last_a = next_a = ARCS(v)
    while true
        next_a = NEXT(arches[next_a])
        ismissing(next_a) && return(last_a) ## greak on missing next
        last_a = next_a
    end
    last_a
end

## Naive Datastructure
struct SimpleDigraph
    name::String
    nodes::Vector{Symbol}
    arcs::Vector{Tuple{Symbol,Symbol}}
end

## Convert simple graph to Knuth graph
function Digraph(g::SimpleDigraph)
    ## loop over arcs
    ### if end node not already in vertices, add it without outgoing arc
    ### if start node not already in list of vertices:
    #### add vertex to list and add arc to Dict (no next)
    #### else find start vertex and follow linked list of arcs to the last one. create new arc and update last one to point to this
    ## Loop over vertices: Are there any vertices not in arcs? Add them
    vertices = Vertex[]
    arcs = Dict{String, Arc}()
    for a in g.arcs ## Loop over arcs
        @show a
        if a[2] in vertices
            @info "end node $(a[2]) already found"
        else
            push!(vertices, Vertex(string(a[2]), missing)) ## add end node
            @info "Added end node $(a[2]) as vertex"
        end
        key = string(a[1])*string(a[2]) ## "AB"
        tip = findfirst(a[2], vertices) ## end-node was already added
        merge!(arcs, Dict(key => Arc(tip,missing))) ## Add arc
        if a[1] in vertices
            start_index = findfirst(a[1], vertices) ## index of start node
            current_last_key = findlast(vertices[start_index], arcs) ## last arch from start-node
            if ismissing(current_last_key) ## no next
                this_v = vertices[start_index]
                @info "No next. Update $(NAME(this_v)) to point to $(key)"
                vertices[start_index] = Vertex(NAME(this_v), key) ## update vertex                
            else
                current_last_arc = arcs[current_last_key]
                @info "Current last arc is $(current_last_key). Update this to point to $key"
                merge!(arcs, Dict(current_last_key => Arc(TIP(current_last_arc), key))) ## update current_last
            end
        else ## new start node
            ## merge!(arcs, Dict(key => Arc(tip,missing))) ## Add arc
            push!(vertices, Vertex(string(a[1]),key)) ## start-node with arc
        end   
    end
    ## Now add unconnected vertices:
    for node in g.nodes ## Loop over vertices
        node in vertices || push!(vertices, Vertex(string(node), missing))
    end
    ## @show vertices
    ## @show arcs
    Digraph(vertices, arcs)
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

