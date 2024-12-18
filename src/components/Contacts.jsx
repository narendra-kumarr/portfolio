import axios from 'axios'
import React from 'react'
import { useForm } from "react-hook-form"
import toast, { Toaster } from 'react-hot-toast'



function Contacts() {
  const {
    register,
    handleSubmit,
   
    formState: { errors },
  } = useForm()

  const onSubmit = async(data) => {
    const userinfo = {
      Name: data.Name,
      Email: data.Email,
      Message: data.Message,

    }
    try{
      await axios.post("https://getform.io/f/bzyyqjya",userinfo)
      toast.success("Message sent successfully")
    }
    catch (error){
      console.log(error);
      toast.error("Something went wrong")
    }
  }
  
  return (
    <div name="Contact" className='max-w-screen-2xl container mx-auto px-4 md:px-20 my-16'>
      <h1 className='text-3xl font-bold mb-4'>Contact me </h1>
      <span>Fill Up the Form below to contact me </span>
      <div className='flex flex-col items-center justify-center mt-5'>

        {/* form start */}
        <form 
        onSubmit={handleSubmit(onSubmit)}
        // action="https://getform.io/f/bzyyqjya"
        // method="POST"

         className='bg-slate-200 w-96 px-8 py-6 rounded-xl'>
          <h1 className='text-xl font-semibold mb-4'>Send Your message</h1>

          <div className='flex flex-col mb-4'>
            <label className='block text-gray-700'>Full Name</label>

            <input
            {...register("Name", { required: true })}
              type='text'
              id='Name'
              name='Name'
              className='shadow appearance-none border rounded-lg py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
              placeholder='Enter your full name'
            />
            {errors.name && <span>This field is required</span>}
          </div>

          <div className='flex flex-col mb-4'>
            <label className='block text-gray-700'>Email address</label>
            <input
            {...register("Email", { required: true })} 
              type='text'
              id='Email'
              name='Email'
              className='shadow appearance-none border rounded-lg py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
              placeholder='Enter your full Email Address'
            />
          </div>
          {errors.email && <span>This field is required</span>}
          <div className='flex flex-col mb-4'>
            <label className='block text-gray-700'>Message</label>
            <textarea
            {...register("Message", { required: true })}
              type='text'
              id='Message'
              name='Message'
              className='shadow appearance-none border rounded-lg py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
              placeholder='Enter your Message'
            />
            {errors.message && <span>This field is required</span>}

          </div>
          <button
          type="submit"
           className='bg-black text-white rounded-xl px-3 py-2 hover:bg-slate-700 duration-300'>Send</button>

        </form>
        {/* form end */}
      </div>
    </div>
  )
}

export default Contacts