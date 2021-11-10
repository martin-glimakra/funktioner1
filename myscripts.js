// let juldagen = '25dec'

// // deklarera funktion
// function namn() {
//     // lokal variabel för funktionen
//     let julafton = '24dec'
//     console.log('hej')
//     console.log('hej')
//     console.log('hej')
//     console.log('juldagen', juldagen)
// }
// // anropa funktion
// namn()
// namn()

// console.log('julafton', julafton)

// funktion med två parametrar
function add(first, second){
    let summa = first + second
    console.log('first', first)
    console.log('second', second)

    console.log('summa', summa)
}

//let fromPrompt = prompt("tal 1");
//fromPrompt = parseInt(fromPrompt)
//console.log('fromPrompt', fromPrompt)

// antop med två argument
//add(fromPrompt, 3)


function addReturn(first, second) {
    let summa = first + second
    return summa
}

console.log('test', addReturn(1, 2))