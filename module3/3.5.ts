{
    // Access Modifiers

    class BankAccount {

      readonly  id: number;
        name: string;
    //   private _balance: number;
      protected _balance: number;

        constructor(id: number, name: string, balance: number){
            this.id = id;
            this.name = name;
            this._balance = balance

        }

        addDeposite(amount : number) {

            this._balance = this._balance + amount
        }

        getBalance(){
           return this._balance
        }
    }

    
    class StudentAccount extends BankAccount{

        // test(){
        //     this._balance
        // }
    }
    
    const goribManusherAccount  = new BankAccount ( 111, 'Mr. Gorib', 20)


    goribManusherAccount.addDeposite(20)

    const myBalance = goribManusherAccount.getBalance()

    console.log(myBalance);



    // 
}