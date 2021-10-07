import React, {useEffect, useState}  from "react"
import Form from "./components/Form"
import Table from "./components/Table"
import { HashRouter as Router,Switch,Route,Link } from "react-router-dom"
import "./style/style.css"

const getLocalStorage = ()=>{
  let localData = localStorage.getItem("user")
  if(localData)
  {
    return localData = JSON.parse(localStorage.getItem("user"))
  }
  else
  {
    return []
  }
}

const App = ()=>{
  const [text,setText] = useState("")
  const [email,setEmail] = useState("")
  const [phone,setPhone] = useState("")
  const [host,setHost] = useState("")
  const [beverage,setBeverage] = useState("")
  const [clean,setClean] = useState("")
  const [dining,setDining] = useState("")
  const [name,setName] = useState("")
  const [data,setData] = useState(getLocalStorage())
  const [textError,setTextError]  = useState("")
  const [emailError,setEmailError] = useState("")
  const [phoneError,setPhoneError] = useState("")
  const [nameError,setNameError] = useState("")
  const [radioError,setRadioError] = useState("")
  const [sub,setSub] = useState("")
  
  const handleSubmit = (e)=>{
      if(text.length > 2 && email.match(/^[^ ]+@[^ ]+\.[a-z]{2,3}$/) && host !== "" && beverage !== "" && clean !== "" && dining !== "" && name.length > 2 && phone.match(/^[7-9][0-9]{9}$/))
      {
       setSub("Thank you for completing the information")
        alert("Thank you for completing the information")
      setData([...data,{"text":text,"email":email,"phone":phone,"host":host,"beverage":beverage,"clean":clean,"dining":dining,"name":name}])
      setText("")
      setEmail("")
      setPhone("")
      setHost("")
      setBeverage("")
      setClean("")
      setDining("")
      setName("")
      //because error is displaying after refresh
      setTextError("")
      setEmailError("")
      setPhoneError("")
      setNameError("")
      setRadioError("")
      // alert("Thank you for completing the information")
      }
      else
      {
        e.preventDefault()
      }
      if(host === "" || beverage === "" || clean === "" || dining === "")
      {
        e.preventDefault()
        setRadioError("please answer all the four questions")
      }
      if(text.length < 3)
      {
        e.preventDefault()
        setTextError("please enter more than two character")
      }
      if(email.length === 0)
      {
        e.preventDefault()
        setEmailError("please enter a email")
      }
      else if(email.match(/^[^ ]+@[^ ]+\.[a-z]{2,3}$/) == null)
      {
        e.preventDefault()
        setEmailError('please include an "@" in the email address')
      }
      if(phone.match(/^[7-9][0-9]{9}$/) == null)
      {
        e.preventDefault()
        setPhoneError("please enter a valid phone number")
      }
      if(name.length < 3)
      {
        e.preventDefault()
        setNameError("please enter more than two character")
      } 
  }
  useEffect(()=>{
    localStorage.setItem("user",JSON.stringify(data))
  },[data])
   
  return (
    <Router>
      <main>
        <header>
          <ul className = "nav-header">
            <Link to = "/">
            <li>Form</li>
            </Link>
            <Link to = {`/table`}>
            <li>Table</li>
            </Link>
          </ul>
        </header>
        <Switch>
          <Route path = "/" exact>
              <Form 
              text = {text}
              setText = {setText}
              email = {email}
              setEmail = {setEmail}
              phone = {phone}
              setPhone = {setPhone}
              host = {host}
              setHost = {setHost}
              beverage = {beverage}
              setBeverage = {setBeverage}
              clean = {clean}
              setClean = {setClean}
              dining = {dining}
              setDining = {setDining}
              name = {name}
              setName = {setName}
              handleSubmit = {handleSubmit}
              textError = {textError}
              emailError = {emailError}
              phoneError = {phoneError}
              nameError = {nameError}
              radioError = {radioError}
              sub = {sub}/>
          </Route>
          <Route path = "/table">
            <Table data = {data}/>
          </Route>
        </Switch>
      </main>
    </Router>
    
  );
}

export default App;
