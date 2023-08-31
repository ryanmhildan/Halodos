/* eslint-disable no-unused-vars */
import React from 'react'
import {FcGoogle} from 'react-icons/fc'
import bgLogin from '../assets/bgLogin.png'
import Logo from '../assets/Logo.png'

const Register = () => {
  return (
    <div className='w-full h-screen flex'>
        <div className='grid grid-cols-1 md:grid-cols-2 m-auto h-[550px] shadow-lg shadow-gray-600 sm:max-w-[900px] rounded-3xl'>
            
            <div className='flex w-full justify-center items-center h-[550px] bg-[#215273] rounded-3xl px-5 z-10'>
                <form className='max-w-[400x] w-full mx-auto p-10 ' action="">
                    <div className='flex justify-center items-center'>
                        <img className='w-[180px] flex items-center' src={Logo} alt="logo" />
                    </div>
                    <div className='flex justify-center py-1'>
                        <button>
                        <p className='border shadow-lg hover:shadow-xl px-4 py-2 relative flex items-center bg-white rounded-md text-black' ><FcGoogle className='mr-3 w-5'/> Continue with Google</p>
                        </button>
                    </div>
                    <div className='mt-3 mb-3 grid grid-cols-3 items-center text-[#E0E0E0]'>
                        <hr className='border-[#E0E0E0]'/>
                        <p className='text-center'>OR</p>
                        <hr className='border-[#E0E0E0]'/>
                    </div>
                    <div className='flex flex-col mb-3 '>
                        <label><p className='text-white'>Email</p></label>
                        <input className='relative bg-[#215273] p-0.5 px-5 outline-none focus:border-[#215273]' type="text"/>
                        <hr className='border-[#FEBE32]'/>
                    </div>
                    <div className='flex flex-col mb-3 '>
                        <label><p className='text-white'>Username</p></label>
                        <input className='relative bg-[#215273] p-0.5 px-5 outline-none focus:border-[#215273]' type="text"/>
                        <hr className='border-[#FEBE32]'/>
                    </div>
                    <div className='flex flex-col mb-3'>
                        <label><p className='text-white'>Password</p></label>
                        <input className='relative bg-[#215273] p-0.5 px-5 outline-none focus:border-[#215273]' type="password"/>
                        <hr className='border-[#FEBE32]'/>
                    </div>
                    <div className='flex flex-col '>
                        <label><p className='text-white'>Confirm Password</p></label>
                        <input className='relative bg-[#215273] p-0.5 px-5 outline-none focus:border-[#215273]' type="password"/>
                        <hr className='border-[#FEBE32]'/>
                    </div>
                    <div className='flex justify-center'>
                        <button className='flex justify-center items-center px-6 py-2 mt-5 bg-[#FEBE32] hover:bg-[#FEBE32] relative text-black rounded-md'>Sign Up</button>
                    </div>
                    <div className='flex justify-center'>
                        <p className=' text-center mt-3 text-white'>Do you have account?</p>
                        <p className=' text-center mt-3 text-[#FEBE32] pl-2'>Sign In</p>
                    </div>
                </form>
            </div>
            <div className='w-[650px] h-[550px] hidden md:block -ml-12 z-0'>
                <img className='w-[550px] h-full rounded-3xl -ml-12' src={bgLogin} alt="bg" />
            </div>
        </div>
    </div>
  )
}

export default Register