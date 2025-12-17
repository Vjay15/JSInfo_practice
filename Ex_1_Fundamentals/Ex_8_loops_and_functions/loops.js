let i = 4
hello: for(;;){
    while(true){
        console.log(i);
        i--;
        if(i<=1){
            console.log("Breaking for loop labelled hello")
            break hello;
        }
    }
}

while(i>0){
    console.log(i);
    i--;
}

do{
    console.log(i);
    i++;
}while(i<4);


for(let i = 1;i<5;i++){
switch(i){
    case 1:
        console.log("Hello");
        break;
    case 2:
    case 3:
        console.log("BIG hello");
        break;
    case '4':
        console.log("Very strict checking yes");
        break;
    default:
        console.log("bizarre result")
}
}