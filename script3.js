console.log("ЗАДАНИЕ 3");
let squareCount = 8;
let oddString1 = "";
let evenString1 = "";
let oddString2 = "";
let evenString2 = "";
let oddString3 = "";
let evenString3 = "";
let oddString4 = "";
let evenString4 = "";
for (i = 1; i<= squareCount; i++){
    if (i <=8) {
        if(i%2 != 0) {
            oddString1 += " ";
        }
        else {
            oddString1 += "#"
        }
    }
    if ( 9<= i <=16) {
        if(i%2 == 0) {
            evenString1 += " "
        }
        else {
            evenString1 += "#"
        }
    }
    if ( 17 <= i <= 24) {
        if(i%2 != 0) {
            oddString2 += " ";
        }
        else {
            oddString2 += "#"
        }
    }
    if ( 25<= i <= 32) {
        if(i%2 == 0) {
            evenString2 += " "
        }
        else {
            evenString2 += "#"
        }
    }
    if ( 33 <= i <= 40) {
        if(i%2 != 0) {
            oddString3 += " ";
        }
        else {
            oddString3 += "#"
        }
    }
    if ( 41 <= i <=48) {
        if(i%2 == 0) {
            evenString3 += " "
        }
        else {
            evenString3 += "#"
        }
    }
    if ( 49 <= i <= 56) {
        if(i%2 != 0) {
            oddString4 += " ";
        }
        else {
            oddString4 += "#"
        }
    }
    if ( 57 <= i <= 64 )  {
        if(i%2 == 0) {
            evenString4 += " "
        }
        else {
            evenString4 += "#"
        }
    }  
}
console.log(oddString1 );
console.log(evenString1);
console.log(oddString2);
console.log(evenString2);
console.log(oddString3 );
console.log(evenString3 );
console.log(oddString4 );
console.log(evenString4 );
console.log("________________");