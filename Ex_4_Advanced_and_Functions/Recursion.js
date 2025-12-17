function pow(x,n){
    if(n==1){
        return x;
    }
    else{
        return x * pow(x,n-1);
    }
}

console.log(pow(3,3));

let recursiveObject = {
    "Apple": {
      "Mac": {
        "MacBook": {
          "M1 Series": [
            { "name": "MacBook Air M1 (2020)", "price": 999 },
            { "name": "MacBook Pro 13\" M1 (2020)", "price": 1299 }
          ],
          "M2 Series": [
            { "name": "MacBook Air M2 (2022)", "price": 1199 },
            { "name": "MacBook Pro 13\" M2 (2022)", "price": 1399 }
          ]
        },
        "iMac": {
          "M1 Series": [
            { "name": "iMac 24\" M1 (2021)", "price": 1499 }
          ]
        }
      },
      "iPad": {
        "iPad Air": [
          { "name": "iPad Air M1 (2022)", "price": 599 }
        ],
        "iPad Pro": {
          "M2 Series": [
            { "name": "iPad Pro 11\" M2 (2022)", "price": 799 },
            { "name": "iPad Pro 12.9\" M2 (2022)", "price": 1099 }
          ]
        }
      },
      "iPhone": {
        "iPhone 15 Series": [
          { "name": "iPhone 15", "price": 799 },
          { "name": "iPhone 15 Plus", "price": 899 },
          { "name": "iPhone 15 Pro", "price": 999 },
          { "name": "iPhone 15 Pro Max", "price": 1199 }
        ]
      }
    }
  }
  
function recursiveFunction(key) {
    let sum = 0;
    if(Array.isArray(key)){
        for(let item of key){
            if(item.price) sum += item.price;
        }
    }
    else if(typeof key == "object" && key!=null){
        for(let val of Object.values(key)){
            sum += recursiveFunction(val);
        }
    }
    return sum;
}

console.log(recursiveFunction(recursiveObject));

let linkedList = {};
let next;
function insertElement(a){
    if(Object.keys(linkedList).length === 0){
        linkedList["value"] = a;
        next = linkedList;
    }
    else{
        next["next"] = {
          value:a,
        };
        next = next["next"];
    }
    return null;
}

insertElement(1);
insertElement(2);
insertElement(3);
insertElement(4);
insertElement(5);
let json = JSON.stringify(linkedList,null,2);
console.log(json);