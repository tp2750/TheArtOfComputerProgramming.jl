# TAoCP 1.1 p 2
# Algorithm E
# Euclid's algorithm for greateds common denominator

function E(m,n)
    while (r = m % n) != 0
        (m,n) = (n,r)
    end
    n
end

function T(n0)
    i=0
    for m in 1:n0
        n = n0
        while (r = m % n) != 0
            (m,n) = (n,r)
            i = i + 1
        end
        @debug m, n, i
    end
    i/n0
end
        
# Check the assymptotics 12log(2)/pi^2 log(n) graphically
using Plots
f(n) = 12log(2)/pi^2*log(n)
n = 1000; plot([T.(1:n) f.(1:n)], label=["T(n)" "12log(2)/pi^2log(n)"], title="Average number of iterations of gcd")

# Estimate it
using LsqFit

model(x,p) = p[1]*log.(x)
p0 = [1.]
n = 500; f1 = curve_fit(model, 1.:n, T.(1.:n), p0)
coef(f1)[1]*pi^2/log(2)-12

function residual(n)
    model(x,p) = p[1]*log.(x)
    p0 = [1.]
    f1 = curve_fit(model, 1.:n, T.(1.:n), p0)
    coef(f1)[1] - 12log(2)/pi^2
end

## Concvergence
plot(100:100:1000,residual.(100:100:1000), ylims=[residual(100)*1.1,0], label="residual", title="Coefficient -  12log(2)/pi^2")
