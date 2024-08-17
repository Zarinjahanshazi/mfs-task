/* eslint-disable react/prop-types */

import { Navigate, useLocation } from "react-router-dom";

import { useContext } from "react";
import { AuthContext } from "../Firebase/AuthProviders";




const PrivateRoutes = ({children}) => {
    const {user,loading} = useContext(AuthContext)
    const location= useLocation()


if(loading){
return <div className="flex items-center justify-center space-x-2">
<div className="w-4 h-4 rounded-full animate-pulse dark:bg-violet-600"></div>
<div className="w-4 h-4 rounded-full animate-pulse dark:bg-violet-600"></div>
<div className="w-4 h-4 rounded-full animate-pulse dark:bg-violet-600"></div>
</div>
}


   if (!user) {
    return <Navigate to='/login' state={location?.pathname || '/'}/>
   }
    
    return (
        <div>
            {children}
        </div>
    );
};

export default PrivateRoutes;