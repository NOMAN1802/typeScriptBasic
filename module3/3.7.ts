{
    // static
 class Counter {

    static count : number = 6;

    increment(){
        return (Counter.count = Counter.count + 1);
    }
  static  decrement(){
        return (Counter.count = Counter.count -1); 
    }

 }

 const instance1 = new Counter()
 const instance2 = new Counter()
 const instance3 = new Counter()
 console.log(instance1.increment());  

 console.log(instance2.increment());

 console.log(instance3.increment());
 const instance4 = new Counter()
 const instance5 = new Counter()
 const instance6 = new Counter()
 console.log(Counter.decrement());  

 console.log(Counter.decrement());

 console.log(Counter.decrement());


    // 
}