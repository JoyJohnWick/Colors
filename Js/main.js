let input = document.querySelector(".cvalue")
let avalue = document.querySelector(".a")

input.addEventListener("keyup", hi)

function hi(){
    avalue.innerHTML = "";
    let v = input.value;
    let rex = /#([0-9A-F]{1,2})([0-9A-F]{1,2})([0-9A-F]{1,2})/i;

    if(v.length === 4 || v.length === 7){
        let output = rex.exec(v);
        if(output === null){
            avalue.innerHTML = "NaN";
        }else{
            avalue.innerHTML = `rga (${getColorValue(output[1])} , ${getColorValue(output[2])} , ${getColorValue(output[3])} )`;
            document.body.style.background = v;
        }
    }else if(v.length > 7){
        document.body.style.background = "radial-gradient(circle, rgba(246,151,192,1) 0%, rgba(129,174,228,1) 100%)"
        avalue.innerHTML = "NaN";
    }else if(v.length === 0){
        document.body.style.background = "linear-gradient(90deg, rgba(82,142,255,1) 0%, rgba(181,90,157,1) 61%, rgba(252,126,151,1) 100%)"
        avalue.innerHTML = "rgb";
    } else{
        avalue.innerHTML = "NaN";
        document.body.style.background = "radial-gradient(circle, rgba(246,151,192,1) 0%, rgba(129,174,228,1) 100%)"
    }
}


function getColorValue(hex){
    if(hex.length === 1){
        hex = hex + hex;
    }
    return parseInt(hex,16)
}