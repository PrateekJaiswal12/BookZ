import React, { useContext, useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { AuthContext } from '../context/AuthProvider'

import googleLogo from '../assets/google-logo.svg'

const SignUp = () => {

    const {createUser , loginWithGoogle} = useContext(AuthContext);
    const [error,setError] = useState("error");

    const location = useLocation();
    const navigate = useNavigate();

    const from = location.state?.from.pathname || "/"

    const handleSignUp = (e) => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
         
        // console.log(email, password);
        createUser(email, password).then((userCredential) => {
            // Signed up 
            const user = userCredential.user;
            alert("Signed up successfully")
            navigate(from, {replace:true})
            // ...
          }) 
          .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            setError(errorMessage);
            // ..
          });
        
    }
    
    const handleRegister = () =>{
         loginWithGoogle().then((result) => {
            const user = result.user;
            alert("Signed up successfully")
            navigate(from, {replace:true})

         }).catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            setError(errorMessage);
            // ..
          });
    }

  return (
<div className="min-h-screen bg-gray-100 py-6 flex flex-col justify-center sm:py-12">
	<div className="relative py-3 sm:max-w-xl sm:mx-auto">
		<div
			className="absolute inset-0 bg-gradient-to-r from-blue-300 to-blue-600 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl">
		</div>
		<div className="relative px-4 py-10 bg-white shadow-lg sm:rounded-3xl sm:p-20">
			<div className="max-w-md mx-auto">
				<div>
					<h1 className="text-2xl font-semibold">Sign Up</h1>
				</div>
				<div className="divide-y divide-gray-200">
					<form onSubmit={handleSignUp} className="py-8 text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7">
						<div className="relative">
							<input id="email" name="email" type="text" className="peer h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none rounded-lg focus:borer-rose-600" placeholder="Email address" />
						</div>
						<div className="relative">
							<input id="password" name="password" type="password" className="peer h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none rounded-lg focus:borer-rose-600" placeholder="Password" />
						</div>
						<div className="relative flex items-center flex-col gap-2">
                            <p className=''>
                                Already have an account ? <Link to="/login" className='text-blue-500 hover:underline'>Login</Link>
                            </p>
							<button className="bg-blue-500 text-white w-1/2 rounded-md px-2 mt-4 py-2 hover:bg-blue-800 cursor-pointer">Sign up</button>
						</div>
					</form>
				</div>
                <hr/>
                <div className="flex flex-col gap-3 w-full items-center mt-4">
                    <button onClick={handleRegister} className='block text-base'><img src={googleLogo} alt="" className='w-8 h-8 inline-block'/> Login with Google</button>
                </div>
			</div>
		</div>
	</div>
</div>
  )
}

export default SignUp
