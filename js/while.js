



//Create a while loop that uses console.log() to create the output shown below.
//
//
// 2
// 4
// 8
// 16
// 32
// 64
// 128
// 256
// 512
// 1024
// 2048
// 4096
// 8192
// 16384
// 32768
// 65536


var x = 2;

while (x < 65536) {
    console.log(x);
    x = x * 2;
}

// This is how to get a random number between 50 & 100
var allCones = Math.floor(Math.random(* 50) +50;
//This expression will generate a random number between 1 &  5
console.log(" I have this many cones to sell + allCones");

do {
    var conesPurchased = Math.floor(Math.random() * 5) + 1;

    if (conesPurchased > allCones) {
        console.log("cant see you any cones, you wanted" + conesPurchased + ",but all I've got is" + allCones);
    } else {
        allCones = allCones -conesPurchased;
        console.log(conesPurchased + " Is how many you want? No problem!") + allCones + "left to sell");
    }
} while (allCones > 0)

console.log("Yeah, I sold all the ice cream")





