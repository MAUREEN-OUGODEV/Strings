// question1
var beauty ="beautiful"
console.log(beauty[0])
console.log(beauty[1])
console.log(beauty[2])
console.log(beauty[3])

// question2
const food = "i did not have appite today"
let index =10;
console.log(`${food[10]}eat`)

// question3
const story = "She sells sea sheals at the sea shore"
//question4
console.log("CONfidant".toUpperCase())
console.log("amaizing","beautiFUL".toLowerCase())
let tag ="A busy office"
tag = tag.split(" ").map(([firstChar,...rest])=>firstChar.toUpperCase()+rest.join("").toLowerCase()).join(" ")
console.log(tag)
//question5
const string1 ="the lady went to the market with her sister"

let market = string1.search("market")
console.log(market)
const string2 ="My favourite season is spring"
 let season = string2.search("season")
 console.log(season)


 
