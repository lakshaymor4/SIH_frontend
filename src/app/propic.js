import React from 'react';

import lockimg from "../assets/images/locklogin.png"
import LoginPage from './loginpage';
function Loc() {
    return (
        <div className="main">
            <div className="sub-main">
                <div>
                    <div className="image">
                        <div className="container-image">

                            <img src={lockimg} alt="LockImage" className="lockimg" />
                            <div className='flex flex-col items-start'>
                                <label for="user" className='pl-4' >Username*</label>
                                <input type="text" name="user" placeholder="Enter your name" className='bg-[#E5E5E5] pt-3.5 pb-3.5 pl-4 pr-3 rounded-[2.5rem] mt-2 w-72' />
                            </div>
                            <div className='flex flex-col items-start mt-4'>
                                <label for="pass" className='pl-4' >Password*</label>
                                <input type="password" name="pass" placeholder="Enter Password" className='bg-[#E5E5E5] pt-3.5 pb-3.5 pl-4 pr-3 rounded-[2.5rem] mt-2 w-72' />
                            </div>
                            <button type='submit' className='mt-8 bg-[#5d61ac] w-44 pt-4 pb-4 pl-8 pr-8 text-white text-xl rounded-[2.5rem] '>Submit</button>
                        </div>
                        <div>

                            <label for="signup" className="pl-4">Don't have an account?</label>
                            <a href="#" class="font-medium text-blue-600 dark:text-blue-500 hover:underline">Sign Up</a>

                        </div>
                    </div>
                </div>
                {/* <h1>Login Now</h1> */}
            </div>
        </div>
    );
}

export default Loc;
