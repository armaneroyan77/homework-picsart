class NotificationCenter{
    #apps;
    constructor(){
        this.#apps = [];
    }

    subscribe(application){
        if(application instanceof App){
            this.#apps.push(application);
            return "App subscribed"    
        }

        return `${application} is not instance of App`;
    }

    notifyAll(message){

        if(typeof message !== "string"){
            return "message must be string!";
        }

        this.#apps.forEach((e) =>{
            return e.recive(message);

        })
        
    }

    unsubscribe(application){
    
        if(application instanceof App){
            this.#apps = this.#apps.filter(e => e !== application);
            return "App unsubscribed"
        }
        return "Application is not instance of App";

    }

}

class App{

    recive(application){
        throw new Error("you can not implement this method in interface method!");
    }
}

class Facebook extends App{
     #name;
    constructor(name){
        super();
        this.#name = name;
    }  

    recive(message){
        console.log(`${this.#name} recive message: ${message}`);
    }
}

class Instagram extends App{
    #name;
    constructor(name){
        super();
        this.#name = name;
    }   


    recive(message){
        console.log(`${this.#name} recive message: ${message}`);
    }
}

class Telegram extends App{
    #name;
    constructor(name){
        super();
        this.#name = name;
    }   

    recive(message){
        console.log(`${this.#name} recive message: ${message}`);
    }
}


const center = new NotificationCenter();

const facebook = new Facebook("Facebook");
const instagram = new Instagram("Instagram");
const telegram = new Telegram("Telegram");

console.log(center.subscribe(facebook));   // "App subscribed"
console.log(center.subscribe(instagram));  // "App subscribed"

center.notifyAll("New post added");
// Facebook and Instagram should receive the message

console.log(center.unsubscribe(instagram)); // "App unsubscribed"

center.notifyAll("Story updated");
// only Facebook should receive the message

