import { useAuth0 } from "@auth0/auth0-react";

const Login = () => {
  const btnStyle={backgroundColor:"salmon"
  ,border:"none",
  padding:"8px",
  borderRadius:"4px",cursor:"pointer"};


  const {loginWithRedirect,isAuthenticated,logout}=useAuth0();
  
  return (
    <div>
     {
     isAuthenticated ? <button style={btnStyle}onClick={() => logout()}>Logout</button> : <button onClick={() => loginWithRedirect()}
     style={btnStyle}>Log In</button>}
    </div>
  )
}

export default Login
