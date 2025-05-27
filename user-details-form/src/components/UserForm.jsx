import React, { useRef } from 'react'

export default function UserForm({States, setStates, stateFilter,userInfo, setUserInfo}) {
    
    var name = useRef();
    var email = useRef();
    var mobileNumber = useRef();
    var countryName = useRef();
    var stateName = useRef();

    const UserInfo = (event) => {
        event.preventDefault();
        // console.log(name.current.value)
        var User = {
            name : name.current.value,
            email : email.current.value,
            mobileNumber : mobileNumber.current.value,
            countryName : countryName.current.value,
            stateName : stateName.current.value
        }
        var finalUser = [User,...userInfo]
        setUserInfo(finalUser);
        localStorage.setItem('User_Info',JSON.stringify(finalUser));
        event.target.reset();
        setStates([]);

    }
    return (
        <>
            <div class="form-container">
                <h2>Basic Form</h2>
                <form id="formHandler" autocomplete="off" onSubmit={UserInfo}>
                    <div class="form-group">
                        <label for="name">Name</label>
                        <input type="text" id="name" name="name"  ref={name}/>
                    </div>
                    <div class="form-group">
                        <label for="email">Email</label>
                        <input type="email" id="email" name="email"  ref={email}/>
                    </div>
                    <div class="form-group">
                        <label for="mobile">Mobile Number</label>
                        <input type="tel" id="mobile" name="mobile"  ref={mobileNumber}/>
                    </div>
                    <div class="form-group">
                        <label for="country">Country</label>
                        <select id="country" name="country" onChange={stateFilter} ref={countryName}>
                            <option value="">Select Country</option>
                            <option value="India">India</option>
                            <option value="Canada">Canada</option>
                            <option value="Austraila">Austraila</option>
                        </select>
                    </div>
                    <div class="form-group">
                        <label for="state">State</label>
                        <select id="state" name="state" ref={stateName}>
                            <option value="">Select State</option>
                            {
                                States.map((v, i) => {
                                    return (
                                        <option value={v.name}>{v.name}</option>
                                    )
                                })
                            }
                        </select>
                    </div>
                    <button type="submit" class="submit-btn">Submit</button>
                </form>
            </div>
        </>
    )
}
