import React from "react";
import Logo from '../../assets/images/Logo.png';
import { Link } from "react-router-dom";


const SingUp = () => {
    return (
        <>
            <div className="singup py-4 px-4 box-content">
                <div className="container mx-auto text-center">
                    <div className="from mx-auto ">
                    <h1 id="logo">
                        <img src={Logo} alt="Logo"  className="w-40 h-auto mx-auto" />
                    </h1>
                    <p className="para mb-5 text-gray-500 font-semibold">Sing Up to See Photo and Videos From Your Frieds</p>
                    <div>
                        <input type="text" name="email" id="email" placeholder="Email..." className="border w-full p-2 mb-3 rounded-lg"/>
                    </div> 
                    <div>
                        <input type="text" name="name" id="name" placeholder="Full Name... "className="border w-full p-2 mb-3 rounded-lg"/>
                    </div>  <div>
                        <input type="text" name="user" id="user" placeholder="User Name..."className="border w-full p-2 mb-3 rounded-lg"/>
                    </div> 
                     <div>
                        <input type="number" name="password" id="password" placeholder="Password..."className="border w-full p-2 mb-3 rounded-lg"/>
                    </div> 
                    <p className="mt-4 text-gray-500 font-semibold">By Singing up , You agree to out terms , <br />Privacy and policy </p>
                    <button type="submit" value="sing up" className="border-2 p-2 text-white rounded-lg  w-full bg-blue-600 mt-5 font-semibold">Sing up</button>
                    <div className="from-2">
                        <Link to="/Singin">
                        <p className="w-full text-center mt-4">Already Have An Account ? <span className="cursor-pointer text-blue-700 ">SingIn</span></p>
                        
                        </Link>
                    </div>
                    </div>
                    
                    </div>
                    
                    </div>
        </>
    )
}
export default SingUp