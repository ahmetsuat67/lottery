let luckyNum = document.getElementById("luckynum")
let btn = document.getElementById("btn")
let result = document.getElementById("result")

btn.addEventListener('click', function () {
    result.innerHTML = "";


    var numbers = [];

    for (let i = 0; i < luckyNum.value; i++) { // burada işlemin kaç kere döneceğini yazdık i miz value büyük olnan kadar döner
        for (var j = 0; numbers.length < 6; j++) {
        let number = Math.round(Math.random() * 90) ;
        if(luckyNum.value>8){
            alert("Your number must be between 1 and 8!")
            break
        }else if(numbers.indexOf(number) === -1) { // 
            numbers.push(number);
        }
    }

let sorted = numbers.sort((a,b) => a - b) // küçükten büyüğe doğru sıralama lk sayıdan ikinci sayıyı çıkar negatifse ilk sayıyı yerinde tut değilse yerlerini değiş
// 7. hane joker numarasıdır. ilk 6 hane ile aynı olamaz.
for (var k = 0; numbers.length < 7; k++) { // 6 rakam var numbers eleman sayısı 7 olana kadar dönecek eğer aynı sayı gelirse farklı olana kadar for döbgüsü çalışacak
    let number = Math.floor(Math.random() * 90) + 1;
    if(numbers.indexOf(number) === -1) { // indexof numbers içinde numberın  indexi yoksa -1 verecek if içine girip  sonuna eklenecek 
      numbers.push(number);
    }
  }
  numbers.push(Math.round(Math.random() * 90) ); 
//8. hane süper yıldız numarasıdır. 1'den 90'a kadar herhangi bir sayı olabilir.
result.innerHTML += sorted[0]+ '-' + sorted[1]+ '-' + sorted[2]+ '-' + sorted[3]+ '-' + sorted[4]+ '-' + sorted[5]+ ' |     ' + numbers[6]+ '   |   ' + numbers[7] + '<br>';
result.innerHTML += '<hr>';
numbers = []
        
    }
   

});

