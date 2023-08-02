



function star(){
  
    let star=parseInt(document.getElementById('star').value)
    let outputpatern=''
        for(let v=0;v<star;v++){
            let row="";
        for(let j=0;j<star;j++){
            row+="*";
        }    

        outputpatern+=row + "<br>";
        }
        document.getElementById('result').innerHTML=outputpatern;
}
function star2() {
    let khan=parseInt(document.getElementById('star2').value)
   let patternOutput='';
        for(let x=1;x<= khan;x++){
           let col='';
        for(let z=1; z<=x ;z++){
               col+= "*";
        }
    patternOutput+=col+"<br>";
        }
        document.getElementById('result2').innerHTML=patternOutput;
}




