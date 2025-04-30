var btn = document.getElementById('btn');

btn.addEventListener('click',(event)=>{
    var dob = document.getElementById('date').value;
    var DOB = new Date(dob).getTime();
    var currentDate = new Date().getTime();
    var difference = currentDate - DOB;
    var diffSecond = difference/1000;
    var month = Math.floor((((diffSecond/60)/60)/24)/30);
    var age = Math.floor((((diffSecond/60)/60)/24)/365);
    var days = Math.floor((((diffSecond/60)/60)/24));
    var hours = Math.floor(((diffSecond/60)/60));
    var minutes = Math.floor(((diffSecond/60)));

    var finalAge = age + 'Years' + month + 'Months' + days + 'days' + hours + 'hrs' + minutes + 'min';
    document.getElementById('age').innerText = age;
})