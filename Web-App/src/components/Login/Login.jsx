import { React, useEffect, useState } from 'react';

function Login() {

    const [userInfo, setUserInfo] = useState({});

    const formUserInfo = (e) => {
        e.preventDefault();
        setUserInfo({ ...userInfo, [e.target.id]: e.target.value })
    }
    const onSubmit = (e) => {
        e.preventDefault();
        console.log(userInfo)
    }
    return (
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
            <div style={{ boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.3)', padding: '20px', borderRadius: '8px', maxWidth: '300px', margin: 'auto' }}>
                <form action="">
                    <label style={{ display: 'block', marginBottom: '6px', fontWeight: 'bold' }} htmlFor="">Username</label>
                    <input style={{ width: '100%', padding: '8px', marginBottom: '12px', boxSizing: 'border-box' }} type="text" id='username' onChange={formUserInfo} value={userInfo.username} />
                    <label style={{ display: 'block', marginBottom: '6px', fontWeight: 'bold' }} htmlFor="">Password</label>
                    <input style={{ width: '100%', padding: '8px', marginBottom: '12px', boxSizing: 'border-box' }} type="password" id='password' onChange={formUserInfo} value={userInfo.password} />
                    <input type="submit" style={{ width: '100%', padding: '8px', boxSizing: 'border-box', backgroundColor: 'blue', color: 'white', borderRadius: '4px', cursor: 'pointer' }} value="Login" onClick={onSubmit} />
                </form>
            </div>
        </div>
    )
}

export default Login;