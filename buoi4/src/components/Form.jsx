import React from 'react'
import { Input } from './Input'

export const Form = () => {
  return (
    <div className='login_body'>
        <div className='login_form'>
            <div className='login_form_main'>
                <h1>Đăng nhập</h1>
                <Input/>
                <div className='login_form_help'>
                    <div className='remember_me'>
                        <input type='checkbox' name='tick' value='' />
                        <p> Ghi nhớ tôi</p>
                    </div>
                    <a className='login-help-link' href={'#'}>Bạn cần trợ giúp?</a>
                </div>
                <div className='login_form_other'>
                    <div className='sign_up'>
                        <p>Bạn mới tham gia Netflix? <a href='#' className='now'>Đăng ký ngay.</a></p>
                    </div>
                    <div className='capcha'>
                        <p>Trang này được Google reCAPTCHA bảo vệ để đảm bảo bạn không phải là robot. <a href='#' className='more'>Tìm hiểu thêm.</a></p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
