const World="Hello World!";


function length(ok) {
    let lengthmessage = 0;
    if (typeof ok !== "string") {
        return -1
        } 
    
    for (i= 0; i< ok.length ; i++) {
        // if (typeof World === "string") {
        lengthmessage = i+1
        // }
    } 
}

const lengthOfmessage = length(World);

console.log(lengthmessage);