console.log("Hello\nWorld");
console.log('Hello\nWorld');
console.log(`Hello
    World`);

console.log("\vHello\vWow\vcool");

console.log("This is a slash \\, This is a double quote \"");

console.log("w\n".length);

console.log("\n Index based access for strings");
let str = "Bingo";

console.log(str[2]);
console.log(str.at(2));

for(char of str){
    console.log(char);
}
for(index in str){
    console.log(index,str[index]);
}

console.log("\nUPPERCASE and lowercase")

console.log("Hello".toUpperCase());
console.log("Hello".toLowerCase());

console.log("\nFind index of occurence of characters")
let line = "billie billie ho";

console.log(line.indexOf('i'));
console.log(line.indexOf("ho"));
let pos = 0
while(true){
    let foundPos = line.indexOf("billie",pos);
    if(foundPos === -1){
        break;
    }
    console.log(`Found occurence of the word at index: ${foundPos}`);
    pos = foundPos+1;
}


console.log("\nTo check for the occurence specifically");

let text = "Oliver";

console.log(text.includes("li"));
console.log(text.startsWith("O"));
console.log(text.startsWith("o"));
console.log(text.endsWith("r"));

console.log("\nSlicing Strings");

console.log(text.slice(0,3));
console.log(text.slice(-4,-1));
console.log(text.substring(1,3));
console.log(text.substring(3,1));
console.log(text.slice(3,1));
console.log(text.substring(-4,-1));

console.log(text.substr(2,4));


console.log("\nComparing Strings");

console.log('a'>'Z');
console.log('Österreich' > 'Zealand');
console.log("Ö".codePointAt(0),"Z".codePointAt(0));
console.log(String.fromCodePoint(90));

console.log("Ǎ" < 'Z');
console.log("Ǎ".localeCompare("Z"));
console.log("A".localeCompare("Z"));