
import React, { useEffect, useState } from "react";
import { useId } from './ContextApi'
import NavBar from '../components/NavBar.jsx'
import Footer from '../components/Footer.jsx'
import axios from 'axios';
import Toast from 'react-hot-toast'
function Profile() {
  const [data, setData] = useState([]);
  let [Id] = useId();
  const FetchData = async () => {
    try {
      let UserDetails = await axios.get(`https://bookstore-fullstack-project.onrender.com/show/${Id}`)
      UserDetails = UserDetails.data.userCredentials;
      setData(UserDetails[0])
      if (UserDetails) {
        Toast.success('Welcome to Your Profile')
      }
      else {
        Toast.error('No User Founded')
      }
    }
    catch (e) {
      console.log(e.message);
    }
  }
  useEffect(() => {
    FetchData();
  }, [])
  return (
    <>
      <NavBar />
      <div className="relative">
        <div className="bg-[url(https://img.freepik.com/premium-photo/minimal-geometric-background-copy-space_1179130-414451.jpg?w=740)] bg-cover bg-opacity-0 inset-0 opacity-98 blur-sm min-h-svh absolute mt-16 z-0">
        </div>
        <div className="left min-h-svh py-8  w-full flex flex-col justify-center items-center  md:items-center space-y-6  rounded-2xl shadow-lg shadow-purple-400 md:pl-32 bg-slate-100 text-center leading-10">
          <div className="p-16">
            <div className="avatar">
              <div className="md:w-64 w-60 ml-6 rounded-full">
                <img src={data.gender === 'Female' ? 'https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp' : 'https://img.freepik.com/premium-vector/drawing-man-with-brown-hair-blue-shirt-with-pink-green-background_968517-196100.jpg?w=740'} />
              </div>
            </div>
            <div className=" md:mt-12  relative z-10 md:text-2xl space-y-3 text-black font-bold">
              <div className="text-3xl">
                <span className="text-pink-100">
                  Name :
                </span> {data.name}
              </div>
              <div className="text-3xl">
                <span className="text-pink-100">Gender : </span> {data.gender}
              </div>
              <div className="text-3xl" >
                <span className="text-pink-100">Age : </span> {data.age}
              </div>
              <div className="text-3xl">
                <span className="text-pink-100">
                  Email :
                </span> {data.email}
              </div>
            </div>

          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default Profile
