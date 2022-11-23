export function getDateInfo(){
    const info= document.querySelector(".date__info");
    const weekday =document.querySelector(".date__weekday");
    const clock =document.querySelector(".clock");
    
    const date= new Date();

    console.log(date.getDate());
    console.log(date.getMonth());
    console.log(date.getFullYear());

    info.textContent=`${date.getDate()}.${
        date.getMonth()+1
    }.${date.getFullYear()}`;

    switch(date.getDay()){
        case 0:
            weekday.textContent="Sanday";
        break;
        case 1:
            weekday.textContent="Monday";
            break;
        case 2: 
            weekday.textContent="Tuesday";
            break;
        case 3:
                weekday.textContent="Wednesday";
                break;
        case 4:
            weekday.textContent="Thursday.";
            break;
        case 5:
            weekday.textContent="Friday"  
            break;  
        case 6:
            weekday.textContent="Saturday"
            break;
    }

 setInterval(function () {
    const intervalDate = new Date();
    let h = intervalDate.getHours();
    let m = intervalDate.getMinutes();
    let s = intervalDate.getSeconds();

    let formatedS = s < 10 ? "0" + s : s;
    let formatedM = m < 10 ? "0" + m : m;
    let formatedH = h < 10 ? "0" + h : h;

    clock.textContent = `${formatedH}:${formatedM}:${formatedS}`;
 },1000);

}

