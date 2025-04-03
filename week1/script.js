function plus1(){
    const priceElement = document.getElementById("price1");
    const totalpriceElement = document.getElementById("totalprice1");

    let currentPrice = parseInt(priceElement.textContent.replace(/[^\d]/g,''));
    let totalcurrentPrice = parseInt(totalpriceElement.textContent.replace(/[^\d]/g,''));

    currentPrice+=10000;
    totalcurrentPrice+=50000;

    priceElement.textContent = `￦${currentPrice.toLocaleString()} /박 `;  
    totalpriceElement.textContent = `총액 ￦${totalcurrentPrice.toLocaleString()}`; 
}

function plus2(){
    const priceElement = document.getElementById("price2");
    const totalpriceElement = document.getElementById("totalprice2");

    let currentPrice = parseInt(priceElement.textContent.replace(/[^\d]/g,''));
    let totalcurrentPrice = parseInt(totalpriceElement.textContent.replace(/[^\d]/g,''));

    currentPrice+=10000;
    totalcurrentPrice+=50000;

    priceElement.textContent = `￦${currentPrice.toLocaleString()} /박 `; 
    totalpriceElement.textContent = `총액 ￦${totalcurrentPrice.toLocaleString()}`; 
  
}

function plus3(){
    const priceElement = document.getElementById("price3");
    const totalpriceElement = document.getElementById("totalprice3");

    let currentPrice = parseInt(priceElement.textContent.replace(/[^\d]/g,''));
    let totalcurrentPrice = parseInt(totalpriceElement.textContent.replace(/[^\d]/g,''));

    currentPrice+=10000;
    totalcurrentPrice+=50000;

    priceElement.textContent = `￦${currentPrice.toLocaleString()} /박 `;
    totalpriceElement.textContent = `총액 ￦${totalcurrentPrice.toLocaleString()}`; 

}

function plus4(){
    const priceElement = document.getElementById("price4");
    const totalpriceElement = document.getElementById("totalprice4");

    let currentPrice = parseInt(priceElement.textContent.replace(/[^\d]/g,''));
    let totalcurrentPrice = parseInt(totalpriceElement.textContent.replace(/[^\d]/g,''));

    currentPrice+=10000;
    totalcurrentPrice+=50000;

    priceElement.textContent = `￦${currentPrice.toLocaleString()} /박 `;   
    totalpriceElement.textContent = `총액 ￦${totalcurrentPrice.toLocaleString()}`; 

}

function minus1(){
    const priceElement = document.getElementById("price1");
    const totalpriceElement = document.getElementById("totalprice1");

    let currentPrice = parseInt(priceElement.textContent.replace(/[^\d]/g,''));
    let totalcurrentPrice = parseInt(totalpriceElement.textContent.replace(/[^\d]/g,''));

    currentPrice-=10000;
    totalcurrentPrice-=50000;
    if(currentPrice < 0) {
        currentPrice += 10000;
        totalcurrentPrice += 50000;
        alert("최소 가격은 0원입니다.");
    }

    priceElement.textContent = `￦${currentPrice.toLocaleString()} /박 `;   
    totalpriceElement.textContent = `총액 ￦${totalcurrentPrice.toLocaleString()}`; 
}

function minus2(){
    const priceElement = document.getElementById("price2");
    const totalpriceElement = document.getElementById("totalprice2");

    let currentPrice = parseInt(priceElement.textContent.replace(/[^\d]/g,''));
    let totalcurrentPrice = parseInt(totalpriceElement.textContent.replace(/[^\d]/g,''));

    currentPrice-=10000;
    totalcurrentPrice-=50000;
    if(currentPrice < 0) {
        currentPrice += 10000;
        totalcurrentPrice += 50000;
        alert("최소 가격은 0원입니다.");
    }

    priceElement.textContent = `￦${currentPrice.toLocaleString()} /박 `;   
    totalpriceElement.textContent = `총액 ￦${totalcurrentPrice.toLocaleString()}`; 
}

function minus3(){
    const priceElement = document.getElementById("price3");
    const totalpriceElement = document.getElementById("totalprice3");

    let currentPrice = parseInt(priceElement.textContent.replace(/[^\d]/g,''));
    let totalcurrentPrice = parseInt(totalpriceElement.textContent.replace(/[^\d]/g,''));

    currentPrice-=10000;
    totalcurrentPrice-=50000;
    if(currentPrice < 0) {
        currentPrice += 10000;
        totalcurrentPrice += 50000;
        alert("최소 가격은 0원입니다.");
    }

    priceElement.textContent = `￦${currentPrice.toLocaleString()} /박 `;   
    totalpriceElement.textContent = `총액 ￦${totalcurrentPrice.toLocaleString()}`; 

}

function minus4(){
    const priceElement = document.getElementById("price4");
    const totalpriceElement = document.getElementById("totalprice4");

    let currentPrice = parseInt(priceElement.textContent.replace(/[^\d]/g,''));
    let totalcurrentPrice = parseInt(totalpriceElement.textContent.replace(/[^\d]/g,''));

    currentPrice-=10000;
    totalcurrentPrice-=50000;
    if(currentPrice < 0) {
        currentPrice += 10000;
        totalcurrentPrice += 50000;
        alert("최소 가격은 0원입니다.");
    }

    priceElement.textContent = `￦${currentPrice.toLocaleString()} /박 `;   
    totalpriceElement.textContent = `총액 ￦${totalcurrentPrice.toLocaleString()}`; 

}