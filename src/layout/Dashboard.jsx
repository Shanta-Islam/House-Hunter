
import { Link, NavLink, Outlet } from "react-router-dom";


const Dashboard = () => {
    
    return (
        <div className="flex">
            <div >
                <div
                    className={` ${open ? "w-52" : "w-20 "
                        } bg-gradient-to-r from-blue-500 to-blue-400 h-[200vh] p-5  pt-8 relative duration-300`}
                >
                   
                    <div className="flex gap-x-4 items-center">
                        <h1
                            className={`normal-case flex gap-2 text-xl lg:text-3xl font-medium text-white duration-200 ${!open && "scale-0"
                                }`}
                        >
                            Taskia
                        </h1>
                    </div>
                    <ul className="pt-6">

                        <li className={`flex  rounded-md p-2 cursor-pointer hover:bg-light-white text-white text-base items-center gap-x-4 
                                        } `}>
                            <NavLink to="/dashboard/userhome" className=' flex items-center gap-2'>

                                <span className={`${!open && "hidden"} origin-left duration-200`}>Dashboard</span></NavLink>
                        </li>
                        <li>
                            <NavLink to="/dashboard/tasks" className=' flex items-center gap-2'>
                               
                                <span className={`${!open && "hidden"} origin-left duration-200`}>Tasks</span></NavLink>
                        </li>

                    </ul>
                </div>

            </div>
            <div className="flex-1 p-2">
                <div className="p-2 flex items-center gap-2 justify-end border-b">
                    <div className="dropdown dropdown-end">
                        <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                            <div className="w-10 rounded-full">
                                <img alt="Tailwind CSS Navbar component" src='' />
                            </div>
                        </div>
                        <ul tabIndex={0} className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52">
                            <li><div>
                                <p>user</p>
                            </div></li>
                            <li ><a>Logout</a></li>
                        </ul>
                    </div>
                </div>

                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Dashboard;