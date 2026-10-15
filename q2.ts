let sumaly: number = 0;
let staus: boolean = true;
let p: number = 1;
while(staus){
    sumaly += 5000;
    p = p +1;
    console.log("วันที่ %d : ยอดเงิน  = %d บาท",p,sumaly);
    if(p == 30){
        staus = false;
        console.log("ขอแสดงความยินดี เดือนนี้คุณออมเงินได้ %d: บาท",sumaly);
    }
}