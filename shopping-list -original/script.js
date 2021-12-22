//btn <3
let like=document.getElementsByClassName("like");
for(let i=0;i<like.length;i++){
    let heart=like[i];
    heart.addEventListener('click',function(){
    let x =heart.firstElementChild;
    if(x.style.color=='red')
    x.style.color='black';
    else
    x.style.color='red';

    })
}
//btn+
let plus_btn=document.getElementsByClassName('plus_btn');
for (let i=0;i<plus_btn.length;i++){
    let plus=plus_btn[i];
    plus.addEventListener('click',function(){
        let u=plus.previousElementSibling.value++;
        price1();
        price2();
        price3();
        pricetotal();
    })
}
//btn-
let minus_btn=document.getElementsByClassName('minus_btn');
for (let i=0;i<minus_btn.length;i++){
    let minus=minus_btn[i];
   minus.addEventListener('click',function(){
    if(minus.nextElementSibling.value==0)
        
    minus.nextElementSibling.value=0; else  
    minus.nextElementSibling.value--;
    price1();
    price2();
    price3();
    pricetotal();
    })
}
//btn x 
let parent=document.getElementById('parent');
let ite=document.getElementsByClassName('Item');
console.log(ite)

for(let i=0;i<ite.length;i++)
{
del=ite[i].lastElementChild;
del.addEventListener('click',function(){
    parent.removeChild(ite[i]);
})
}
function price1(){
let price=document.getElementById('p1')
let quant1=document.getElementById('q1')
price.innerHTML=1379*quant1.value;
}
function price2(){
let price=document.getElementById('p2')
let quant1=document.getElementById('q2')
price.innerHTML=176.80*quant1.value;    
}
function price3(){
    let price=document.getElementById('p3')
    let quant1=document.getElementById('q3')
price.innerHTML=249*quant1.value;
}
function pricetotal(){
let pt=document.getElementById('finalprice');
let p1=document.getElementById('p1').innerHTML;
let p2=document.getElementById('p2').innerHTML;
let p3=document.getElementById('p3').innerHTML;
pt.value=parseInt(p1)+parseInt(p2)+parseInt(p3);
}