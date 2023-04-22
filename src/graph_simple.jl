struct DiGraphSimple
    name::String
    nodes::Vector{Symbol}
    arcs::Vector{Tuple{Symbol,Symbol}}
end

function dot(g::DiGraphSimple)
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

function dot(g::DiGraphSimple,path::String;type="png")
    res = dot(g)
    cmd = pipeline(`echo "$res"`, `dot -T$type -o"$path"`)
    run(cmd)
end
 
g = DiGraphSimple(
    "G1",
    [:A, :B, :C],
    [(:A, :B), (:B,:C), (:C, :A)]
)

print(dot(g))
null = dot(g,"/tmp/g2.png");
