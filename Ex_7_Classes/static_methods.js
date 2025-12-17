class User{
    static staticMethod(){
        console.log(this === User);
    }
}

User.staticMethod();
User.staticMethod2 = function(){
    console.log(this === User);
}
User.staticMethod2();

class Article {
    static author = "Vjay";
    constructor(title,date){
        this.title = title;
        this.date = date;
    }
    static createArticleToday(){
        return new this("Today's article",new Date());
    }
}

let today = Article.createArticleToday();
console.log(`${today.date} - ${today.title} - ${Article.author}`);

class Car{
    static date = new Date();
    constructor(owner,brand){
        this.owner = owner;
        this.brand = brand;
    }
}

class Toyota extends Car{
    constructor(owner,model){
        super(owner,'Hyundai');
        this.model=model;
    }
}

let toyo = new Toyota("Vjay","random");
console.log(Toyota.date);