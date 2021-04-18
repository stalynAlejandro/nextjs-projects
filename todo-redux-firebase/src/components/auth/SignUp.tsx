import React, { useState } from 'react'

interface IUser {
    email: string,
    password: string
}

function SignUp() {

    const [state, setState] = useState<IUser>({ email: '', password: '' })

    const handleChange = (e: any) => {
        setState({ ...state, [e.target.id]: e.target.value })
    }
    
    const handleSubmit = (e: any) => {
        console.log(state)
    }


    return (

        <div className="container">
            <form onSubmit={e => handleSubmit(e)} className="white">
                <h5 className="grey-text text-darken-3">Sign In</h5>

                <div className="input-field">
                    <label htmlFor="email">Email</label>
                    <input type="email" id="email" onChange={e => handleChange(e)} />
                </div>

                <div className="input-field">
                    <label htmlFor="password">Password</label>
                    <input type="password" id="password" onChange={e => handleChange(e)} />
                </div>

                <div className="input-field">
                    <button className="btn pink ligthen-1 z-depth-0">Login</button>
                </div>
            </form>
        </div>
    )
}

export { SignUp }