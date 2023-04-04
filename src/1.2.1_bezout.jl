# Bezout's idnetity
# TAoCP 1.2.1 p 13-14

function B1(m,n)
    a = b2 = 0; b = a2 = 1
    (c, d) = (m, n)
    while true
        r = c % d
        q = c ÷ d # integer division
        ## @show a2, a, b2, b, m, n, q, r
        if r == 0
            ## @info "($a) * $m + ($b) * $n = $(a*m + b*n)"
            return (a, b, d)
        end
        (c, d) = (d, r)
        (a2, a) = (a, a2 - q*a)
        (b2, b) = (b, b2 - q*b)
    end
end

## A bit simpler
function B2(m,n)
    a = b2 = 0; b = a2 = 1
    (c, d) = (m, n)
    while (r = c % d) != 0
        q = c ÷ d # integer division
        @debug(@show a2, a, b2, b, m, n, q, r)
        (c, d) = (d, r)
        (a2, a) = (a, a2 - q*a)
        (b2, b) = (b, b2 - q*b)
    end
    return (a, b, d)
end

## As in doc
function B(m,n)
    a = b2 = 0; b = a2 = 1
    while (r = m % n) != 0
        q = m ÷ n # integer division
        (m, n, a, b, a2, b2) = (n, r, a2 - q*a, b2 - q*b, a, b)
    end
    return (a, b, n)
end
