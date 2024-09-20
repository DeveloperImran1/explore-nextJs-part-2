'use client'
import Link from "next/link";


const SignUp = () => {


 
    const handleSubmit = async e => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        const confirmPassword = form.confirmPassword.value;
   

        console.log(name, email, password, confirmPassword)


        const newUser = {
            name, email, password
        }
        const resp = await fetch('http://localhost:3000/api/auth/signup/new-user', {
            method: 'POST',
            body: JSON.stringify(newUser),
            headers: {
                'content-type': 'application/json'
            }
        })
        console.log(resp)
   
    }

    return (


        <div className="flex flex-col md:flex-row justify-between items-center mt-[100px] ">
            <img src="https://i.ibb.co/vjXZQCx/login-svg.png" alt="login" className="max-w-[40%] mx-auto " />
            <div className="w-full md:w-[50%]  flex  flex-col items-center md:items-start justify-center md:justify-start">
                <div className="w-full  ">
                    <h1 className="text-[26px] text-primary font-bold">Sign Up</h1>
                    <p className="text-gray-400 mt-3 mb-10">Join To Us</p>

                    <span  className="p-2 rounded-full border-2 flex items-center justify-center w-[40px] ml-[200px] cursor-pointer ">
                        Google
                    </span>
                    <p className="text-[18px] font-bold mt-3 ml-[210px] my-10">Or</p>

                    <form onSubmit={handleSubmit}>

                        <label className="form-control w-full mb-4">
                            <span className="text-[17px] ">Your Name</span>
                            <input type="text" name="name" placeholder="Your Name" className="mx-atuo w-full md:w-[80%] p-2 outline-none border-2 rounded-md" />
                        </label>
                        <label className="form-control w-full mb-4">
                            <span className="text-[17px] ">Your Email</span>
                            <input type="email" name="email" placeholder="Your Email" className="mx-atuo w-full md:w-[80%] p-2 outline-none border-2 rounded-md" />
                        </label>

                        <label className="form-control w-full mb-4">
                            <span className="text-[17px] ">Upload Photo</span>
                            <input type="file" name="photo" placeholder="Upload Your Photo" className="mx-atuo w-full md:w-[80%] p-2 outline-none border-2 rounded-md" />
                        </label>

                        <label className="form-control w-full mb-4">
                            <span className="text-[17px] ">Your Password</span>
                            <div className="relative w-full md:w-[80%]">
                                <input name="password"  placeholder="Your Password" className="w-full  p-2 outline-none border-2 rounded-md" />



                            </div>
                        </label>
                        <label className="form-control w-full mb-4">
                            <span className="text-[17px] ">Your Confirm Password</span>
                            <div className="relative w-full md:w-[80%]">
                                <input name="confirmPassword"  placeholder="Your Confirm Password" className="w-full  p-2 outline-none border-2 rounded-md" />


                            </div>
                        </label>

                        <button className='font-semibold mt-[40px] text-[19px] px-4 py-2 rounded-md bg-primary '>SignIn</button>
                        
                        <p>Already have an account? <Link href="/signIn" className="text-primary">Sign In</Link></p>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default SignUp;