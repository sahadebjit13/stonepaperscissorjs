var comp;
function compOutput()
{
    comp=Math.floor(Math.random()*3);
    return comp;
}
var score=0;
var compScore=0;
var result;
let sr;
function compPrint(sr)
{
    if(sr==0){document.getElementById("cSign").textContent=" STONE";}
    else if(sr==1){document.getElementById("cSign").textContent=" PAPER";}
    else if(sr==2){document.getElementById("cSign").textContent=" SCISSOR";}
    else{document.getElementById("cSign").textContent="";}
}



    document.getElementById("r0").addEventListener("click",function()
{ 
    result=1;
    if(result)
    {
        let rr=compOutput();
        compPrint(rr);
        if(rr==0){document.getElementById("tie").innerText="Status: Tie";}
        else if(rr==1){
            compScore++;
            document.getElementById("tie").innerText="Status: Lost";
        }
        else if(rr==2){
            score++;
            document.getElementById("tie").innerText="Status: Won";
        }
    }
    document.getElementById("scoreOutput").innerText=score;
    document.getElementById("cScoreOutput").innerText=compScore;

});
document.getElementById("r1").addEventListener("click",function()
{ 
    result=1;
    if(result)
    {
        let rr=compOutput();
        compPrint(rr);
        if(rr==1){document.getElementById("tie").innerText="Status: Tie";}
        else if(rr==2)
        {
            compScore++
            document.getElementById("tie").innerText="Status: Lost";
        }
        else if(rr==0){
            score++;
            document.getElementById("tie").innerText="Status: Won";
        }
    }
    document.getElementById("scoreOutput").innerText=score;
    document.getElementById("cScoreOutput").innerText=compScore;

});
document.getElementById("r2").addEventListener("click",function()
{ 
    result=1;
    if(result)
    {
        let rr=compOutput();
        compPrint(rr);
        if(rr==2){document.getElementById("tie").innerText="Status: Tie";}
        else if(rr==0){
            compScore++;
            document.getElementById("tie").innerText="Status: Lost";
        }
        else if(rr==1){
            score++;
            document.getElementById("tie").innerText="Status: Won";
        }
    }
    document.getElementById("scoreOutput").innerText=score;
    document.getElementById("cScoreOutput").innerText=compScore;

});

const start=document.querySelector("#play");
start.addEventListener("click", function play(){
    
    document.querySelector(".hide").classList.remove("hide");

    }
);


