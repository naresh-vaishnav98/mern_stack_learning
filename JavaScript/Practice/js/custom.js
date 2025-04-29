function swap(){
    var a = document.getElementById('img1').src;
    var b = document.getElementById('img2').src;

    document.getElementById('img2').src = a;
    document.getElementById('img1').src = b;
}


function btn_swap(){
    var a = document.getElementById('row').innerText;
    var b = document.getElementById('row1').innerText;

    document.getElementById('row1').innerText = a;
    document.getElementById('row').innerText = b;

}


function writee(){
    var a = document.getElementById('inp').value;
    document.getElementById('output').innerText = a;
}


function calc(){
    var a = Number(document.getElementById('first_num').value);
    var b = Number(document.getElementById('sec_num').value);
    var c = document.getElementById('operator').value;

    if(c == '+'){
        document.getElementById('calc_output').value = a+b;
    }else if(c  == '-'){
        document.getElementById('calc_output').value = a-b;
    }else if(c == '*'){
        document.getElementById('calc_output').value = a*b;
    }else{
        document.getElementById('calc_output').value = a/b;
    }
}



function show_hide(){
    var a = document.getElementById('pass').type;
    var b = document.getElementById('pass_btn').innerText;

    if(a == 'password'){
        document.getElementById('pass').type = 'text';
        document.getElementById('pass_btn').innerText = 'Hide';
    }else{
        document.getElementById('pass').type = 'password';
        document.getElementById('pass_btn').innerText = 'Show';
    }
}




function chng_img(i){
    var img_src = i.src;
    document.getElementById('main_img').src = img_src;
}





var arr = [];
 function backgrd(i){
    if(arr.length < 9){
        if(arr.includes(i.innerText)){

        }else{
            arr.push(i.innerText);
        }
        i.style.backgroundColor = 'red';
    }
    
    
    console.log(arr);
 }

 function collect_value(i){
    i.style.backgroundColor = 'dimgrey';
 }