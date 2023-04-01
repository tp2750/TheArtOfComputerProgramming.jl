using TheArtOfComputerProgramming
using Documenter

DocMeta.setdocmeta!(TheArtOfComputerProgramming, :DocTestSetup, :(using TheArtOfComputerProgramming); recursive=true)

makedocs(;
    modules=[TheArtOfComputerProgramming],
    authors="Thomas Poulsen <ta.poulsen@gmail.com> and contributors",
    repo="https://github.com/tp2750/TheArtOfComputerProgramming.jl/blob/{commit}{path}#{line}",
    sitename="TheArtOfComputerProgramming.jl",
    format=Documenter.HTML(;
        prettyurls=get(ENV, "CI", "false") == "true",
        canonical="https://tp2750.github.io/TheArtOfComputerProgramming.jl",
        edit_link="main",
        assets=String[],
    ),
    pages=[
        "Home" => "index.md",
        "1.1: Euclid alg" => "1.1_euclid.md",
        "1.2.10 Alg Analysis" => "1.2.10_algorithm_analysis.md",
    ],
)

deploydocs(;
    repo="github.com/tp2750/TheArtOfComputerProgramming.jl",
    devbranch="main",
)
