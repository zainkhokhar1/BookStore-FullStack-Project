
import React from 'react'
import Profile from '../components/Profile'
import { useAuth } from '../components/ContextApi'
import Signup from '../components/Signup.jsx'

function UserProfile() {
    const [Auth] = useAuth();
    return (
        <>
            {
                Auth ? <Profile /> : <Signup />
            }
        </>
    )
}

export default UserProfile