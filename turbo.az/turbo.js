car = {
    car1: {
        name: "Mitsubishi L200",
        sale: "50.000 AZN",
        credit: "60.000 AZN",
        year: "2012 il",
        hecm: "5.0 L",
        drive: "10.000km",
        data: "20/10/2012",
        img: "img/1.jpg"
    },
    car2: {
        name: "Mitsubishi L200",
        sale: "40.000 AZN",
        credit: "47.000 AZN",
        year: "2013 il",
        hecm: "5.0 L",
        drive: "18.000km",
        data: "20/10/2017",
        img: "img/2.jpg"
    },
    car3: {
        name: "Mitsubishi L200",
        sale: "50.000 AZN",
        credit: "58.000 AZN",
        year: "2018 il",
        hecm: "5.0 L",
        drive: "15.000km",
        data: "20/10/2019",
        img: "img/3.jpg"
    },
    car4: {
        name: "Mitsubishi L200",
        sale: "30.000 AZN",
        credit: "37.000 AZN",
        year: "2014 il",
        hecm: "5.0 L",
        drive: "100.000km",
        data: "20/10/2017",
        img: "img/4.jpg"
    },
    car5: {
        name: "Mitsubishi L200",
        sale: "60.000 AZN",
        credit: "71.000 AZN",
        year: "2019 il",
        hecm: "5.0 L",
        drive: "80.000km",
        data: "20/10/2019",
        img: "img/5.jpg"
    },
    car6: {
        name: "Mitsubishi L200",
        sale: "70.000 AZN",
        credit: "82.000 AZN",
        year: "2011 il",
        hecm: "5.0 L",
        drive: "60.000km",
        data: "20/10/2016",
        img: "img/6.jpg"
    },
    car7: {
        name: "Mitsubishi L200",
        sale: "50.000 AZN",
        credit: "60.000 AZN",
        year: "2012 il",
        hecm: "5.0 L",
        drive: "17.000km",
        data: "20/10/2017",
        img: "img/7.jpg"
    },
    car8: {
        name: "Mitsubishi L200",
        sale: "50.000 AZN",
        credit: "58.000 AZN",
        year: "2012 il",
        hecm: "5.0 L",
        drive: "61.000km",
        data: "20/10/2014",
        img: "img/8.jpg"
    },
    car9: {
        name: "Mitsubishi L200",
        sale: "20.000 AZN",
        credit: "22.000 AZN",
        year: "2012 il",
        hecm: "5.0 L",
        drive: "90.000km",
        data: "20/10/2016",
        img: "img/9.jpg"
    },
    car10: {
        name: "Mitsubishi L200",
        sale: "80.000 AZN",
        credit: "92.000 AZN",
        year: "2018 il",
        hecm: "5.0 L",
        drive: "20.000km",
        data: "20/10/2018",
        img: "img/10.jpg"
    },

    car11: {
        name: "Mitsubishi L200",
        sale: "18.000 AZN",
        credit: "23.000 AZN",
        year: "2012 il",
        hecm: "5.0 L",
        drive: "150.000km",
        data: "20/10/2019",
        img: "img/11.jpg"
    },
    car12: {
        name: "Mitsubishi L200",
        sale: "82.000 AZN",
        credit: "88.000 AZN",
        year: "2018 il",
        hecm: "5.0 L",
        drive: "6.000km",
        data: "20/10/2019",
        img: "img/12.jpg"
    },
};


let container = document.createElement("div");
container.classList.add("container");
document.body.appendChild(container);
let row = document.createElement("div");
row.classList.add("row");
container.appendChild(row);

for (let c in car) {
    let col = document.createElement("div");
    col.classList.add("col-3");
    row.appendChild(col);

    let card = document.createElement('div');
    card.classList.add("card");
    col.appendChild(card);

    let img = document.createElement("img");
    img.classList.add("card-img-top");
    img.src = car[c].img;
    card.appendChild(img);
    img.addEventListener("click",function(){
        localStorage.clear();
        let allcar=JSON.stringify(car[c]);   //obyekti strinqe cevirir
        localStorage.setItem('cars',allcar)  //local sto gonderir 
        document.location="sehfe2.html";  //hara gondermeli oldugumuzu qeyd editik
    })

let p = document.createElement("p");
   p.classList.add("sale");
    p.innerText = car[c].sale;
    col.appendChild(p);

let p5=document.createElement("p");
p5.classList.add("credits");
p5.innerText=car[c].credit;
col.appendChild(p5);

    let h6 = document.createElement("h6");
    h6.innerText = car[c].name;
    col.appendChild(h6);

    let p2 = document.createElement("p");
    p2.classList.add("year");
    p2.innerText = car[c].year;
    col.appendChild(p2);

    let p3 = document.createElement("p");
    p3.classList.add("hecm");
    p3.innerText = car[c].hecm;
    col.appendChild(p3);

    let p1 = document.createElement("p");
    p1.classList.add("drive");
    p1.innerText = car[c].drive;
    col.appendChild(p1);

    let p4 = document.createElement("p");
    p4.classList.add("data");
    p4.innerText = car[c].data;
    col.appendChild(p4);
};




cart = {
    cart_1:{
         number: "1111",
         date: "11/11/2011",
         cvv: "123",
         balance: "6580",
     },
 
     cart_2:{
         number: "2222",
         date: "11/11/2011",
         cvv: "234",
         balance: "5600"
     },
 
     cart_3:{
         number: "3333",
         date: "11/11/2011",
         cvv: "345",
         balance: "490"
     },
 
     cart_4:{
         number: "4444",
         date: "11/11/2011",
         cvv: "456",
         balance: "2300"
     },
 
     cart_5:{
         number: "5555",
         date: "11/11/2011",
         cvv: "567",
         balance: "84000"
     },
     
 };
 
 
 // document.getElementById("buttonpay").addEventListener("click", function (t) {
 //     t.preventDefault();
 //     let number = document.getElementById("cardNumber").value;
 //     let date = document.getElementById("cardDate").value;
 //     let cvv = document.getElementById("cardCvv").value;
 
 //     if (number == "" || date == "" || cvv == "") {
 //         if (number == "") {
 //             document.getElementById("cardNumber").classList.add("is-invalid");
 //         }
 
 //         if (date == "") {
 //             document.getElementById("cardDate").classList.add("is-invalid");
 //         }
 
 //         if (cvv == "") {
 //             document.getElementById("cardCvv").classList.add("is-invalid");
 //         }
 //         alert("xanalari doldurun");
 //     }
 // });
//  let mainsale=car.car1.sale;
//  console.log(mainsale);

 document.getElementById("sixmonth").addEventListener("click", function (six) {
 let mainsale=car.car1.sale;
 console.log(mainsale);
 
 let firstmoney=document.getElementById("cardCvv");
 });
 
 
 
 