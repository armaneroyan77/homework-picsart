class Account{

    constructor(usName = "", nicName = "", passwd = ""){

        this._userFullName = usName;
        this._nicName = nicName;
        this._password = passwd; 
           
    }

    set userFullName(full_name){

        if(!full_name){
            return "invalid input!";
        }

        this._userFullName = full_name;
    }

    set nicName(nic_name){
        if(!nic_name){
            return "invalid input!";
        }

        this._nicName = nic_name;
    }

    set password(passwd){

        if(typeof password !== "string" && password.length < 6){
            return "password to short!";
        }

        this._password = passwd;
    }
    
    #isUser(full_name, nic_name, password){
        return (
            full_name === this._userFullName &&
            nic_name === this._nicName       &&
            password === this._password
        );
    }


    signIn(full_name, nic_name, password){

        if(this.#isUser(full_name, nic_name, password)){
            return "sign in pass succesfully";
        }

        return "invalid input!";
    }

}

const account = new Account();

account.userFullName = "Joe Smit";;
account.nicName = "joe110__";
account._password = "joe1997by";

const fName = "Joe Smit";
const nName = "joe110__";
const password = "joe1997by";

console.log(account.signIn(fName, nName, password));
