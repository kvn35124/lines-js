friends = ["Kevin", "Kyle", "Stephen", "Jack", "Bill"];
let count = 100;
let btn = document.createElement('button');
document.body.appendChild(btn);
let btnText = document.createTextNode('Sing!');
btn.appendChild(btnText);

//added event listener


btn.addEventListener('click', function () {
    for (let i = 0; i < friends.length; i++) {
        console.log(friends[i]);
        for (var j = 0; j < 100; j++) {
            count--
            count2 = count - 1
            if (count == 1) {
                var word = "line"
            }
            else {
                var word = "lines"
            }
            console.log(count + " " + word + " of code in the file, " + count + " " + word + " of code; " + friends[i] + " strikes one out, clears it all out, " + count2 + " " + word + " of code in the file.");
        }
    }
})

// for (let i = 0; i < friends.length; i++) {
//     console.log(friends[i]);
//     for (var j = 0; j < 100; j++) {
//         count--
//         count2 = count - 1
//         if (count == 1) {
//             var word = "line"
//         }
//         else {
//             var word = "lines"
//         }
//         console.log(count + " " + word + " of code in the file, " + count + " " + word + " of code; " + friends[i] + " strikes one out, clears it all out, " + count2 + " " + word + " of code in the file.");
//     }
// }


