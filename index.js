var ogrVizeNot = 86 ;
var ogrFinalNot = 10 ;

var ogrOrtalama = (ogrVizeNot*0.3)+(ogrFinalNot*0.7);

if (ogrOrtalama >= 0 && ogrOrtalama <= 30) {
    console.log("Not ortalamanız:" + ogrOrtalama + "Kaldınız(FF)");
}
 else if (ogrOrtalama >=31 && ogrOrtalama <=49) {

    console.log("Not ortalamanız:" + ogrOrtalama + "Koşullu Geçtiniz(DC)");
 }
 else if (ogrOrtalama >=50 && ogrOrtalama <=84) {

    console.log("Not ortalamanız:" + ogrOrtalama + "Geçtiniz(CC)");
 }
 else if (ogrOrtalama >=85 && ogrOrtalama <=100) {

    console.log("Not ortalamanız:" + ogrOrtalama + "Geçtiniz(AA)");
 }