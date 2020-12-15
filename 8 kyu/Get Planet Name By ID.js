/* 
The function is not returning the correct values. Can you figure out why?

getPlanetName(3); // should return 'Earth'

*/


// function getPlanetName(id) {
//     var name;
//     switch (id) {
//         case 1:
//             name = 'Mercury'
//             break;
//         case 2:
//             name = 'Venus'
//             break;
//         case 3:
//             name = 'Earth'
//             break;
//         case 4:
//             name = 'Mars'
//             break;
//         case 5:
//             name = 'Jupiter'
//             break;
//         case 6:
//             name = 'Saturn'
//             break;
//         case 7:
//             name = 'Uranus'
//             break;
//         case 8:
//             name = 'Neptune'
//             break;
//     }
//     return name;
// }

const plants = ['The Sun', 'Mercury', 'Venus', 'Earth', 'Mars', 'Jupiter', 'Saturn', 'Uranus', 'Neptune']

const getPlanetName = (id) => plants[id]


// best answer
function getPlanetName(id) {
    var name;
    switch (id) {
        case 1:
            name = 'Mercury'
            break;
        case 2:
            name = 'Venus'
            break;
        case 3:
            name = 'Earth'
            break;
        case 4:
            name = 'Mars'
            break;
        case 5:
            name = 'Jupiter'
            break;
        case 6:
            name = 'Saturn'
            break;
        case 7:
            name = 'Uranus'
            break;
        case 8:
            name = 'Neptune'
    }

    return name;
}

// 2nd best

function getPlanetName(id) {
    return {
        1: 'Mercury',
        2: 'Venus',
        3: 'Earth',
        4: 'Mars',
        5: 'Jupiter',
        6: 'Saturn',
        7: 'Uranus',
        8: 'Neptune'
    }[id]
}