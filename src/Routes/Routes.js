import { createBrowserRouter } from "react-router-dom";
import Abouts from "../components/About/Abouts";
import Blog from "../components/Blog/Blog";
import Homes from "../components/Home/Homes";
import Main from "../components/Layout/Main";
import Resumes from "../components/Resume/Resumes";
import Skills from "../components/Skill/Skills";


const router = createBrowserRouter([
             {
               path: '/',
               element: <Main></Main>,
               children:[
                {
                    path:'/',
                    element:<Homes/>,
                    
                },
                {
                    path:'/resumes',
                    element: <Resumes/>

                },
                {
                    path:'/skills',
                    element:<Skills/>
                },
                {
                    path:'/blog',
                    element:<Blog/>
                },
                {
                    path:'/about',
                    element:<Abouts/>
                }
               ]
             }
])

export default router;