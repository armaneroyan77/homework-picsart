/* 
   Create a class Email with _email. 
   Setter should check if the value includes "@". 
   If not, print "Invalid email" 

*/

class Email{

    constructor(emailAddres = ""){
        this._email = emailAddres;
    }

    set email(mail){
        if(!mail.includes("@")) {
            console.log("invalid Email!")
            return;
        };

        this._email = mail;
    }

}

const mail = new Email();
mail.email = "armanEroyanmail.ru"

