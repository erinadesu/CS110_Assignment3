




let allLines = 6; 

let curLine = 1;

let text = '';

while (curLine <= allLines) {
    text += "+";
    curLine++;
}

let curRow = 1;
while (curRow <= allLines) {
    console.log(text);
    curRow++;
}