import { useEffect, useState } from "react";

const RefForm = () => {
    const namRef = useState(null);
    const emailRef = useState(null);
    const passwordRef = useState(null);

    useEffect(() => {
        namRef.current.focus();
    }, [])
    const handleSubmit = e => {
        e.preventDefault();
        console.log(namRef.current.value)
        console.log(emailRef.current.value)
        console.log(passwordRef.current.value)
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input
                    ref={namRef}
                    type="text" name="name" />
                <br />
                <input
                    ref={emailRef}
                    type="email" name="email" />
                <br />
                <input
                    ref={passwordRef}
                    type="password" name="password" id="" />
                <br />
                <input type="submit" value="Submit" />
            </form>
        </div>
    );
};

export default RefForm;