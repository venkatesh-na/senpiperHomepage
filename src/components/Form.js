import React from "react"
import Radio from "./Radio"

const Form = ({text,setText,email,setEmail,phone,setPhone,host,setHost,beverage,setBeverage,clean,setClean,dining,setDining,name,setName,handleSubmit,textError,emailError,phoneError,nameError,radioError,sub})=>{
    
    const Questions = [{id:1,question:"Please rate the quality of the service you received from your host",name:"host",Radio:setHost},
    {id:2,question:"Please rate the quality of your beverage",name:"beverage",Radio:setBeverage},
    {id:3,question:"Was our restaurant clean",name:"clean",Radio:setClean},
    {id:4,question:"Please rate your overall dining experience.",name:"dining",Radio:setDining}]

    const handle = (a)=>{
        if(a.value)
        {
            a.classList.remove("error")
        }
        else
        {
           a.classList.add("error")
        }
    }

    const handleText = (e)=>{
        if(e.target.value < 3)
        {
            e.target.classList.add("error")
        }
        else
        {
           e.target.classList.remove("error")
        }
        setText(e.target.value)
    }
    const handleEmail = (e)=>{
        e.preventDefault()
        handle(e.target)
        setEmail(e.target.value)
    }
    const handlePhone = (e)=>{
        handle(e.target)
        setPhone(e.target.value)
    }
    const handleName = (e)=>{
        if(e.target.value < 3)
        {
            e.target.classList.add("error")
        }
        else
        {
           e.target.classList.remove("error")
        }
        setName(e.target.value)
    }
    
    
    return (
        <React.Fragment>
        <section className = "container">
            <article className = "form-desc">
                <h1>Aromatic Bar</h1>
                <p>We are committed to providing you with the best dinning experience possible,so we welcome your comments. Please fill out this questionnaire. Thank you</p>
            </article>
            <article className = "form-container">
                <form action = "#" onSubmit = {handleSubmit}>
                    <div className = "text">
                        <p>Text</p>
                        <input onChange = {handleText} value = {text} type = "text" placeholder = "hello"></input>
                        {textError && <p className = "errorMessage">{text.length < 3 ? textError : ""}</p>}
                    </div>
                    <div className = "email">
                        <p>Email</p>
                        <input onChange = {handleEmail} value = {email} type = "email"></input>
                        {emailError && <p className = "errorMessage" >{email.match(/^[^ ]+@[^ ]+\.[a-z]{2,3}$/) === null ? emailError : ""}</p>}

                    </div>
                    <div className = "phone">
                        <p>Phone</p>
                        <input onChange = {handlePhone} value = {phone} type = "tel" placeholder = "2323A45656">
                        </input>
                        <img src = "india.png" alt = "india"/>
                        {phoneError && <p className = "errorMessage">{phone.match(/^[7-9][0-9]{9}$/) == null ? phoneError : ""}</p>}
                    </div>
                    <div className = "radio-container">
                    {
                        Questions.map(q => <Radio key = {q.id}
                            id = {q.id} radio = {q.Radio} question = {q.question} name = {q.name}/>)
                    }
                   {radioError && <p className = "errorMessage">{host === "" || beverage === "" || clean === "" || dining === "" ? radioError : ""}</p>}
                    </div>

                    <div className = "name">
                        <p>Name</p>
                        <input onChange = {handleName} value = {name} type = "text"></input>
                        {nameError && <p className = "errorMessage">{name.length < 3 ? nameError : ""}</p>}
                    </div>
                    <button className = "submit" type = "submit">submit</button>
                </form>
            </article>
         </section>
    <div className = {sub ? "submission" : ""}>{sub}</div>
    </React.Fragment>

    )
}
export default Form;