
import React from 'react'
import BookForm from '../components/BookForm.jsx'
import { useAuth } from '../components/ContextApi.jsx'
import Signup from '../components/Signup.jsx'

function CreateBook() {
    const [Auth] = useAuth();
    return (
        <>
            {
                Auth ? <BookForm /> : <Signup />
            }

        </>
    )
}

export default CreateBook