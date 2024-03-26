import { useState } from "react";


const StatefulForm = () => {
    const [name, setName] = useState('Enter your name');
    const [email, setEmail] = useState('Enter your email');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = e => {
        e.preventDefault();
        if (password.length < 6) {
            setError('Password must be 6 characters or longer')
        } else {
            setError('')
        }
        console.log(error, name, email, password)
    }
    const handleNameChange = e => {
        // console.log(e.target.value);
        setName(e.target.value)
    }
    const handleEmailChange = e => {
        // console.log(e.target.value);
        setEmail(e.target.value)
    }
    const handlePasswordChange = e => {
        // console.log(e.target.value);
        setPassword(e.target.value)
    }
    const passwordError = {
        color: 'red',
        fontWeight: '500',
        textDecoration: 'underline',
        cursor: 'pointer'
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input value={name}
                    onChange={handleNameChange}
                    type="text" required name="name" />

                <br />
                <input value={email}
                    onChange={handleEmailChange} type="email" required name="email" />
                <br />
                <input
                    onChange={handlePasswordChange}
                    type="password" required name="password" />
                <br />
                <input type="submit" required name="Submit" />
                {
                    error && <p style={passwordError}>{error}</p>
                }
            </form>
        </div>
    );
};

export default StatefulForm;