import React, { useState } from "react"


function GreetMe () {
    const [formName, setFormName] = useState(
            {
            firstname: "",
            lastname: ""
        }
    )

    const handleChange = (e) => {
        let name = e.target.name
        let value = e.target.value
        setFormName((values) => ({...values, [name]: value}))
    }

    const buttonClick = (e) => {
        e.preventDefault();
        let myFullName = `${formName.firstname} ${formName.lastname}`
        alert(`Hello ${myFullName}`)
        console.log(myFullName)
        
    }


    return (
        <div>
            <form style={{ "background": "lightgreen", "height": "100vh", "width": "100%" }} >
                <label>
                    <input 
                        type="text" 
                        name="firstname" 
                        placeholder="First Name" 
                        onChange={handleChange} 
                        value={formName.firstname} 
                        style={{ "width": "20%", "padding": "15px", "backgroundColor": "lightcyan", "border": "2px solid green","fontSize": "1.5rem" , "borderRadius": "5px", "margin": "5% 37% 3px", "color": "green" }}
                    /><br />

                    <input 
                        type="text" 
                        name="lastname" 
                        placeholder="Last Name" 
                        onChange={handleChange} 
                        value={formName.lastname}
                        style={{ "width": "20%", "padding": "15px", "backgroundColor": "lightcyan", "border": "2px solid green","fontSize": "1.5rem" , "borderRadius": "5px", "borderRadius": "5px", "margin": "3px 37%", "color": "green" }}
                    /><br />

                    <button 
                        onClick={buttonClick} 
                        style={{ "width": "10%", "padding": "15px", "backgroundColor": "lightcyan", "border": "2px solid green","fontSize": "1.5rem" , "borderRadius": "5px", "borderRadius": "5px", "margin": "3px 43%", "color": "green" }}
                    >
                        Greet Me
                    </button>
                </label>
            </form>
        </div>
    )
}


export default GreetMe