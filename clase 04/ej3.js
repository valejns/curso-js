const mat = [
    ["Pablo", "Maria", "Pedro"],
    ["Diana", "Juan", "Federico"],
    ["Roberto", "Daniel", "Sandra"]
]

for(let i=0; i<mat.length; i++){

    console.log(`grupo ${i+1}:`)

    for(let x=0; x<mat[i].length; x++){

      console.log(`${mat[i][x]}`)
    }
}
