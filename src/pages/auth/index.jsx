import React, { useContext } from 'react'
import { AppContext } from '../../context'

const Register = () => {

    const { setUser } = useContext(AppContext)

    return (
        <div>
            <h1>Register</h1>
            <button
                onClick={() => setUser(true)}
                className="bg-red px-6 py-2">
                submit
            </button>
        </div>
    )
}

export default Register
