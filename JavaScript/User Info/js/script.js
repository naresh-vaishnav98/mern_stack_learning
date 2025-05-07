
var states = [
    {'id':1, 'country_name':'India', 'State_name':'Rajasthan'},
    {'id':2, 'country_name':'India', 'State_name':'Delhi'},
    {'id':3, 'country_name':'India', 'State_name':'Gujarat'},
    {'id':4, 'country_name':'Russia', 'State_name':'Moscow'},
    {'id':5, 'country_name':'Russia', 'State_name':'Tatarstan'},
    {'id':6, 'country_name':'Russia', 'State_name':'Dagestan'},
    {'id':7, 'country_name':'Germany', 'State_name':'Berlin'},
    {'id':8, 'country_name':'Germany', 'State_name':'Hamburg'},
    {'id':9, 'country_name':'Germany', 'State_name':'Saarland'},
    {'id':9, 'country_name':'Austrailia', 'State_name':'Tasmania'},
    {'id':9, 'country_name':'Austrailia', 'State_name':'West Auatrailia'},
    {'id':9, 'country_name':'Austrailia', 'State_name':'Victoria'}
]





document.getElementById('country').addEventListener('change',(event)=>{
    var opt = '<option value="">Select State</option>';
    document.getElementById('state').innerHTML = opt;
    states.forEach((v)=>{
        if(v.country_name == event.target.value){                
            document.getElementById('state').innerHTML += '<option value="'+v.State_name+'">'+v.State_name+'</option>';
        }
    })
})




var userss = [];
var display_table = () => {
    var userr = JSON.parse(localStorage.getItem('user'));
    // var static_table = document.querySelector('tbody').innerHTML;
    // console.log(JSON.parse(userr).U_name);
    
    // userss = JSON.stringify(userr);
    // userss = JSON.parse(userr);
    // console.log(userr);
    // console.log(userss);

    var tbody = document.querySelector('tbody');
    var static_table = `<tr>
                <th>S.No.</th>
                <th>Name</th>
                <th>Email</th>
                <th>Mobile</th>
                <th>State</th>
                <th>Country</th>
            </tr>`;

    userr.forEach((value, index) => {
        static_table += `<tr>
                        <td>${index+1}</td>
                        <td>${value.U_name}</td>
                        <td>${value.U_mail}</td>
                        <td>${value.U_mob}</th>
                        <td>${value.U_state}</th>
                        <td>${value.U_country}</td>
                    </tr>`;
    })
        
    
    
    tbody.innerHTML = static_table;

    // console.log(static_table);

};


display_table();


var allUsers = [];


document.querySelector('form').addEventListener('submit',(event) => {
    event.preventDefault();
    var name = event.target.name.value;
    var email = event.target.email.value;
    var mob = event.target.mob.value;
    var country = event.target.country.value;
    var state = event.target.state.value;
    
    var user = JSON.parse(localStorage.getItem('user'));
    allUsers = user ? user : allUsers;

    var user_data = {'U_name':name,'U_mail':email,'U_mob':mob,'U_country':country,'U_state':state};
    // user_data = JSON.stringify(user_data);
    allUsers = [user_data,...allUsers];
    allUsers = JSON.stringify(allUsers);
    // console.log(allUsers);
    localStorage.setItem('user',allUsers);
    // var userr = JSON.parse(localStorage.getItem('user'));
    // console.log(userr); 
    event.target.reset();    
    document.getElementById('state').innerHTML = '<option value="">Select State</option>';
    display_table();

})