function createCard(){
    let title=prompt("Enter Title");
    let cname=prompt("Enter channel Name");
    let views=Number(prompt("Enter views"));
    let monthsOld=prompt("Enter months old");
    let duration=prompt("Enter duration");
    let thumbnail=prompt("Enter link of thumbnail");

    let container=document.querySelector(".container");
    let div=document.createElement("div");    
    container.append(div);
    div.classList.add("box");

    let subdiv1=document.createElement("div");//contains image part
    let subdiv2=document.createElement("div");//contains textual or info part
    div.append(subdiv1);
    div.append(subdiv2);
    subdiv1.classList.add("img");
    subdiv2.classList.add("info");

    subdiv1.style.backgroundImage=`url(${thumbnail})`;
    
    let subdiv3=document.createElement("div");//contains title
    let subdiv4=document.createElement("div");//contains channel name
    let subdiv5=document.createElement("div");//contains views and mothsold
    subdiv2.append(subdiv3);
    subdiv2.append(subdiv4);
    subdiv2.append(subdiv5);

    subdiv3.classList.add("title");
    subdiv4.classList.add("channel");
    subdiv5.classList.add("views");
    
    subdiv3.innerText=title;
    subdiv4.innerText=cname;
    let view;
    if(views>=1000 && views<1000000){
        views=Math.floor(views/100);
        views/=10;
        view=String(views)+"K views";
    }
    else{
        views=Math.floor(views/100000);
        views/=10;
        view=String(views)+"M views";
    }
    let mold=String(monthsOld)+" months ago";

    let subdiv6=document.createElement("div");//contains views
    let subdiv7=document.createElement("div");//contains monthsold

    subdiv5.append(subdiv6);
    subdiv5.append(subdiv7);

    subdiv6.innerText=view;
    subdiv7.innerText=mold;

    let subdiv8=document.createElement("div");//contains duration
    subdiv8.classList.add("duration");
    subdiv1.append(subdiv8);
    subdiv8.innerText=duration;
}
console.log("Hello");

let button=document.querySelector("button");
button.addEventListener("click",createCard);
