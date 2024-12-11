'use client'
import {useFormStatus} from "react-dom"
import {FaGoogle} from "react-icons/fa"

const GoogleButton = () => {
    const {pending} = useFormStatus()
  return (
    <>
        {pending ? (
            <button disabled className="flex items-center justify-center space-x-1 w-full">
                <span className="loading loading-dots loading-md"></span>
                One Moment...
            </button>
        ) :
        (
            <button className="btn bg-transparent border-[1px] w-full flex items-center justify-center space-x-1">
          <span className="text-[#4285F4]"> {/* Google's primary blue */}
          <FaGoogle size={12} />
                </span>
                SignIn With Google</button>
        )
    
    }
    </>
  )
}

export default GoogleButton