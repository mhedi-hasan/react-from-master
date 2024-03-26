import './App.css'
import Grandpa from './components/Grandpa/Grandpa'
// import ReuseableForm from './components/ReuseableForm/ReuseableForm'
// import HookForm from './components/HookForm/HookForm'
// import RefForm from './components/RefForm/RefForm'
// import SimpleFrom from './components/SimpleFrom/SimpleFrom'
// import StatefulForm from './components/StatefulForm/StatefulForm'

function App() {

  // const handleSignUpSubmit = data => {
  //   console.log('Sign Up Data',data);
  // }
  // const handleProfileSubmit = data => {
  //   console.log('Profile Update Data',data);
  // }

  return (
    <>
      <h1>Form Muster</h1>
      <Grandpa></Grandpa>
      {/* <SimpleFrom></SimpleFrom> */}
      {/* <StatefulForm></StatefulForm> */}
      {/* <RefForm></RefForm> */}
      {/* <HookForm></HookForm> */}

      {/* <ReuseableForm formTitle={"Sign Up"}
      handleSubmit={handleSignUpSubmit}>
        <div>
          <h2>Please Sign UP</h2>
          <p>Sign up and enjoy our website.</p>
        </div>
      </ReuseableForm> */}
      
      {/* <ReuseableForm formTitle={"Profile Update"} handleSubmit={handleProfileSubmit} submitButton='Update'>
        <div>
          <h2>Update Your Profile</h2>
          <p>Our Country name is Bangladesh.</p>
        </div>
      </ReuseableForm> */}
    </>
  )
}

export default App
