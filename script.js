if ((document.getElementById('value1')).value==""){
    (document.getElementById('value1')).value=1
  }
if ((document.getElementById('value2')).value==""){
    (document.getElementById('value2')).value=1
}
let qnt1=document.getElementById('value1');
let qnt2=document.getElementById('value2');
let q1=document.getElementsByName('value1');
let q2=document.getElementsByName('value2');

function multip1(x){
    let tot1=0
    let tot2=0
    if (Number(x[0].value)>0 & Number(x[0].value)<=10){
        tot1 = Number(x[0].value)*54.99;
        tot2 = Number(x[0].value)*94.99;
    }
    else if (Number(x[0].value)<=0){
        tot1 = 54.99;
        tot2 = 94.99;
    }
    else{
        tot1 = 10 *54.99;
        tot2 = 10*94.99;
    }
    document.getElementById('buy1').innerHTML=tot1.toFixed(2);
    document.getElementById('discount1').innerHTML=tot2.toFixed(2);
}

function multip2(x){
    let tot1=0
    let tot2=0
    if (Number(x[0].value)>0 & Number(x[0].value)<=10){
        tot1 = Number(x[0].value)*74.99;
        tot2 = Number(x[0].value)*124.99;
    }
    else if (Number(x[0].value)<=0){
        tot1 = 74.99;
        tot2 = 124.99;
    }
    else{
        tot1 = 10 *74.99;
        tot2 = 10*124.99;
    }
    document.getElementById('buy2').innerHTML=tot1.toFixed(2);
    document.getElementById('discount2').innerHTML=tot2.toFixed(2);
}

function merge11(){
    minus(qnt1);
    multip1(q1);
    total();
}

function merge12(){
    plus(qnt1);
    multip1(q1);
    total();
}

function merge21(){
    minus(qnt2);
    multip2(q2);
    total();
}

function merge22(){
    plus(qnt2);
    multip2(q2);
    total();
}

function plus(x){
    if (Number(x.value)>0 & Number(x.value)<=9){
        x.value = Number(x.value) + 1;
    }
}

function minus(x){
    if (Number(x.value)>1 & Number(x.value)<=10){
        x.value = Number(x.value) - 1;  
    }
}

function total(){
    let a=document.getElementById('buy1').innerHTML;
    let b=document.getElementById('buy2').innerHTML;
    let tot=Number(a)+Number(b)+19;
    document.getElementById('total').innerHTML=tot.toFixed(2);
}

