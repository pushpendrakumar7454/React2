import React,{useEffect} from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router'
import PublicRoute from './Public/PublicRoute'
import Login from '../features/auth/ui/pages/Login'
import Register from '../features/auth/ui/pages/Register'
import ProtectedRoute from './protected/ProtectedRoute'
import Layout from '../app/layout/Layout'
import Home from '../shared/components/Home'
import { hydredUser } from '../features/auth/api/authApi'
import { useDispatch } from 'react-redux'
import { addUser } from '../features/auth/state/useAuth'

const AppRoutes = () => {

    const disptach=useDispatch()

    useEffect(()=>{
        (async()=>{
            try {
                let res=await hydredUser()
                disptach(addUser(res))
                
                
            } catch (error) {
                console.log(error);
                
                
            }

        })()

    },[])
    


     let router=createBrowserRouter([
        {
            path:"/",
            element:<PublicRoute/>,
            children:[
                {
                    path:"",
                    element:<Login/>
                },{
                    path:"registerr",
                    element:<Register/>
                }
            ]
        },{
            path:"/main",
            element:<ProtectedRoute/>,
            children:[{
                path:"",
                element:<Layout/>
            },{
                path:"",
                element:<Home/>
            }
        ]
        }

     ])



    return <RouterProvider router={router}/>
}

export default AppRoutes
