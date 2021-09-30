import React from "react"
const Radio = ({radio,id,question,name})=>{
   
    return (
        <div>
            <p>{id}) {question} ?</p>
                <label>
                <input onChange = {(e)=>radio(e.target.value)} name = {name} id = "Excellent" type = "radio" value = "Excellent"/>
                Excellent
                </label>

                <label>
                <input onChange = {(e)=>radio(e.target.value)} name = {name}  id = "Good" type = "radio" value = "Good"/>
                    Good
                 </label>

                 <label>
                <input onChange = {(e)=>radio(e.target.value)} name = {name} id = "Fair" type = "radio" value = "Fair"/>
                 Fair
                </label>

                <label>
                <input onChange = {(e)=>radio(e.target.value)} name = {name} id = "Bad" type = "radio" value = "Bad"/>
                    Bad
                </label>
        </div>
    )
}
export default Radio;