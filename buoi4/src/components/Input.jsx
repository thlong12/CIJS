import { useState } from 'react'

export function Input() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(email);
        console.log(password);
    };
    const handleChangeEmail = (e) => setEmail(e.target.value);
    const handleChangePassword = (e) => setPassword(e.target.value);
    
    return (
    <>
    <form onSubmit={handleSubmit}>
        <div className='login_input_container'>
            <input type='text' name='username' id='username' value={email} onChange={handleChangeEmail} required/>
            <label className='floating-label' htmlFor='username'>Email hoặc số điện thoại</label>
        </div>
        <div className='login_input_container'>
            <input type='password' name='password' id='password' value={password} onChange={handleChangePassword} required/>
            <label className='floating-label' htmlFor='password'>Mật khẩu</label>
        </div>
        <button className='btn' type='submit'>Đăng nhập</button>
    </form>
    </>
   
  )
}