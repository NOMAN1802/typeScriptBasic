{
    // Getter and setter

    class BankAccount {

        readonly  id: number;
          name: string;
        private _balance: number;
  
          constructor(id: number, name: string, balance: number){
              this.id = id;
              this.name = name;
              this._balance = balance
  
          }
  
        //   addDeposite(amount : number) {
  
        //       this._balance = this._balance + amount
        //   }
  
//    setter

  set deposit(amount: number){

    this._balance = this._balance + amount;
}
        
        //   getBalance(){
        //      return this._balance
        //   }

        // getter

        get balance(){
            return this._balance
        }
      }
  
      const goribManusherAccount  = new BankAccount ( 111, 'Mr. Gorib', 200)
  
    //   goribManusherAccount.addDeposite(20)  
    //   //function call korta hossa
  
    //   const myBalance = goribManusherAccount.getBalance()   
      //function call korta hossa

      //   property ar moto kora

      goribManusherAccount.deposit = 30;

      const myBalance = goribManusherAccount.balance;
    

    
  
      console.log(myBalance);

    // 
}