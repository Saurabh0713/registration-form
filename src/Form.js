import React, { useState } from 'react' ;
import './Form.css';

export default function Form() {

    let [confirmPassword,setConfirmPassword]=useState("")
    let [mystylePassword,setMyStylePassword] = useState({})

    const [userDetail,setUserDetail] = useState({
      firstName:"",
      lastName:"",
      email:"",
      password:"",
      mobile:"",
      dob:"",
      gender:""
    })

    const [checkBox,setCheckBox] = useState(false)

    const handleCheckBoxChange=(event)=>{
      if(event.target.checked){
        setCheckBox(true)
      }else{
        setCheckBox(false)
      }
      console.log(event.target.value)
    }

    const handleConfirmPassword=(event)=>{
      setConfirmPassword(event.target.value)
  
        if(event.target.value!==userDetail.password){
          console.log("Password is not matching")
          setMyStylePassword({outline:'2px solid red'})
        }else{
          console.log("Password matched")
          setMyStylePassword({})
        }
      
    }
   
    const handleOnChange=(event)=>{
        // console.log(event.target.value)
        // console.log(event.target.id)

        const {name,value} = event.target
        
        setUserDetail((prevValue)=>{
        return {
          ...prevValue,
          [name]:value
        }
        })

        // below is the long way of doing same task, here id is used instead of name by choice
        // const value = event.target.value
        // const id = event.target.id
        
        // setUserDetail((prevValue)=>{

          // if(id === "fname"){
          //   return (
          //     {
          //       firstName: value,
          //       lastName: prevValue.lastName,
          //       email: prevValue.email,
          //       password: prevValue.password,
          //       mobile: prevValue.mobile,
          //       dob:prevValue.dob,
          //       gender: prevValue.gender
          //     }
          //   )
          // }else if(id === "lname"){
          //   return (
          //     {
          //       firstName: prevValue.firstName,
          //       lastName: value,
          //       email: prevValue.email,
          //       password: prevValue.password,
          //       mobile: prevValue.mobile,
          //       dob:prevValue.dob,
          //       gender: prevValue.gender
          //     }
          //   )
          // }else if(id === "inputEmail4"){
          //   return (
          //     {
          //       firstName: prevValue.firstName,
          //       lastName: prevValue.lastName,
          //       email: value,
          //       password: prevValue.password,
          //       mobile: prevValue.mobile,
          //       dob:prevValue.dob,
          //       gender: prevValue.gender
          //     }
          //   )
          // }else if(id === "password"){
          //   return (
          //     {
          //       firstName: prevValue.firstName,
          //       lastName: prevValue.lastName,
          //       email: prevValue.email,
          //       password: value,
          //       mobile: prevValue.mobile,
          //       dob:prevValue.dob,
          //       gender: prevValue.gender
          //     }
          //   )
          // }else if(id === "inputMobile"){
          //   return (
          //     {
          //       firstName: prevValue.firstName,
          //       lastName: prevValue.lastName,
          //       email: prevValue.email,
          //       password: prevValue.password,
          //       mobile: value,
          //       dob:prevValue.dob,
          //       gender: prevValue.gender
          //     }
          //   )
          // }
        // })
  
    }

    const handleSubmit=(event)=>{
      event.preventDefault()
      for (var key in userDetail) {
        let emptyField = document.getElementsByName(key)
        if (userDetail[key]==="") {
          // console.log(emptyField)
          // Unlike other getElementsBy* methods, getElementsByName() method returns live NodeList. So NodeList can be iterated using in-built forEach() method.
          emptyField.forEach(element=>{
            element.style.outline = "2px solid red"
          })
          alert(key+" Can't be empty")
          return
        }else{
          emptyField.forEach(element=>{
            element.style.outline = "none"
          })
        }
      }
      if(userDetail.password!==confirmPassword){
        setMyStylePassword({outline:'2px solid red'})
        alert("Password not matched")
        return
      }
      if(checkBox===false){
        alert("Agree to TnC")
        return
      }
      alert("Form submitted")
    }

   
  return (
    <form className="row g-3" onSubmit={handleSubmit}>
  <div className="col-md-6">
    <label htmlFor="fname" className="form-label">First Name : {userDetail.firstName}</label>
    <input type="text" className="form-control" id="fname" name='firstName' value={userDetail.firstName} onChange={handleOnChange} placeholder="enter first name"></input>
  </div>
  <div className="col-md-6">
    <label htmlFor="lname" className="form-label">Last Name : {userDetail.lastName}</label>
    <input type="text" className="form-control" id="lname" name='lastName' value={userDetail.lastName} onChange={handleOnChange} placeholder="enter last name"></input>
  </div>
  <div className="col-md-4">
    <label htmlFor="inputEmail4" className="form-label">Email Id</label>
    <input type="email" className="form-control" id="inputEmail4" name='email' value={userDetail.email} onChange={handleOnChange} placeholder="enter email id" ></input>
  </div>
  <div className="col-md-4">
    <label htmlFor="password" className="form-label">Password</label>
    <input type="password" className="form-control" id="password" name='password' value={userDetail.password} onChange={handleOnChange} placeholder="enter password" ></input>
  </div>
  <div className="col-md-4">
    <label htmlFor="confirmPassword" className="form-label">Confirm Password</label>
    <input type="password" className="form-control" id="confirmPassword" name='confirmPassword' value={confirmPassword} onChange={handleConfirmPassword} style={mystylePassword} placeholder="confirm password"></input>
  </div>
  <div className="col-md-4">
    <label htmlFor="inputMobile" className="form-label">Mobile No</label>
    <input type="number" className="form-control" id="inputMobile" name='mobile'  value={userDetail.mobile} onChange={handleOnChange} placeholder="enter mobile no"></input>
  </div>
  <div className="col-md-4">
    <label htmlFor="dob" className="form-label">DOB</label>
    <input type="date" className="form-control" id="dob" name='dob'  value={userDetail.dob} onChange={handleOnChange} ></input>
  </div>
  <div className="col-md-4">
    <label htmlFor="inputGender" className="form-label">Gender</label>
    <select id="inputGender" name='gender' className="form-select"  value={userDetail.gender} onChange={handleOnChange} >
      <option>Select...</option>
      <option value="male">Male</option>
      <option value="female">Female</option>
      <option value="other">Other</option>
    </select>
  </div>
  <div className="col-12">
    <div className="form-check">
      <input className="form-check-input" type="checkbox" id="gridCheck" name='tc'  value={checkBox} onChange={handleCheckBoxChange}></input>
      <label className="form-check-label" htmlFor="gridCheck">
        I Agree to T&c
      </label>
    </div>
  </div>
  <div className="col-12">
    <button type="submit" className="btn btn-primary">Sign In</button>
  </div>
</form>
  )
}
