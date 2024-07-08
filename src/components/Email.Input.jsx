import { useState } from "react";

export default function EmailInput({ updateValidStatus }) {
    const [email, setEmail] = useState('')

    const handleChange = (e) => {
        setEmail(e.target.value)

        if ((/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/.test(e.target.value))) {
            updateValidStatus(true)
        } else {
            updateValidStatus(false)
        }
    } 

    return (
        <div className="flex flex-col">
            <label className="border-" htmlFor="email-input">Email</label>
            <input style={{
                padding: "0.75rem",
                border: "1px solid #e6e6e6",
                boxShadow: "0px 1px 1px rgba(0, 0, 0, 0.03)"
            }} type="email" id="email-input" value={email} onChange={handleChange} />
        </div>
    )
}