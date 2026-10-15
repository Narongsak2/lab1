let dailySales: number[] = [15000,5500,4200,8900,7300,9600,12500];

function fiter(): number[]{
    let list = [];
    for(let i: number = 0; i<dailySales.length; i++) {
        if(dailySales[i] >= 10000){
            list.push(dailySales[i]);
        }
    }
    return list;
}

function gh (daily: number[]): number{
    let list = 0;
    for (let i: number = 0; i<daily.length; i++){
        list = list + daily[i];
    }
    return list;
}
let dai = fiter();
let total = gh(dai);
console.log(`ยอดขายในแต่ละวันของสัปดาห์นี้${dai}`);
console.log(`จำนวนวันที่มียอดขายดีเยี่ยม${dai.length}ชิ้น`);
console.log(`ยอดขายเฉลี่ยในสัปดาห์นี้${total/dai.length} บาท`);