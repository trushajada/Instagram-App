import React from "react";

const Navbar =()=>{
    return(
        <><header id="insta" className="bg-gray-100 shadow-lg"> 
        <div className="container mx-auto py-4 px-4 flex justify-between items-center">
          <h1 className="italic text-5xl font-bold">instagram</h1>
          <nav>
            <ul className="flex space-x-4"> 
              <li>
                <a href="#" className="font-semibold">Sign Up</a> 
              </li>
              <li>
                <a href="#" className="font-semibold">Sign In</a>
              </li>
              <li>
                <a href="#" className=" font-semibold">Profile</a>
              </li>
            </ul>
          </nav>
        </div>
      </header>
        </>
    )
}
export default Navbar