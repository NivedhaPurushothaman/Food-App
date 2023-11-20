import {React} from 'react';

function Login(){

return(
    <div style={{boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.3)',padding: '20px',borderRadius: '8px',maxWidth: '300px',margin: 'auto'}}>
        <label style={{display: 'block',marginBottom: '6px',fontWeight: 'bold'}} htmlFor="">Username</label>
        <input style={{width: '100%',padding: '8px',marginBottom: '12px',boxSizing: 'border-box'}} type="text" id='username'/>
        <label style={{display: 'block',marginBottom: '6px',fontWeight: 'bold'}} htmlFor="">Password</label>
        <input style={{width: '100%',padding: '8px',marginBottom: '12px',boxSizing: 'border-box'}} type="password" id='password' />
    </div>
)
}

export default Login;