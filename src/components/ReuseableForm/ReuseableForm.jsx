
const ReuseableForm = ({formTitle, handleSubmit ,submitButton='Submit',children}) => {

    const handleLocalSubmit = e => {
        e.preventDefault();
        const data = {
            name: e.target.name.value,
            email: e.target.email.value,
            password: e.target.password.value
        }
        handleSubmit(data);
    }
    // const handleSubmit = e => {
    //     e.preventDefault();
    //     console.log(e.target.name.value)
    //     console.log(e.target.email.value)
    //     console.log(e.target.password.value)
    // }
    return (
        <div>
            {children}
            <form onSubmit={handleLocalSubmit}>
                <input type="text" name="name" />
                <br />
                <input type="email" name="email" />
                <br />
                <input type="password" name="password" />
                <br />
                <input type="submit" value={submitButton} />
            </form>
        </div>
    );
};

export default ReuseableForm;