let player = {
    name: 'Marta',
    lastName: 'Silva',
    age: 34,
    medals: { 
        golden: 2, 
        silver: 3 
        },
    bestInTheWorld: [2006, 2007, 2008, 2009, 2010, 2018],
}

let fullName = player.name +" "+player.lastName
let countBest = player.bestInTheWorld.length

console.log("A jogadora "+fullName+ " foi eleita a melhor do mundo por "+countBest+" vezes.")

