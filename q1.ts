
export{};
class Movie{
    constructor(public age: number ,public disc: boolean){
    }
    calcule(age: number): number{
        let price: number = 60 ;
        if(age > 12) {
            price =  60;
        }else if(age <= 13-59){
            price = 120;
        }else if(age >= 60){
            price = 100;
        }
        return price;
        
    }
    event(): void{
        let price2 = 0;
        let price  = this.calcule(this.age);
        console.log(price);

        if (this.disc == true){
            price2 = price*0.10;
        }
        console.log("คุณอายุ %d ปี ตั๋วราคาปกติ %d บาท", this.age,price);
        console.log(`ได้รับส่วนลด 10% ราคาสุทธิ ${price-price2} บาท`);
    }
}

let event1 = new Movie(11,true);
event1.event();