import { Outlet, Link } from "react-router-dom";

export default function Root() {
    return (
        <>
            <nav className="bg-gray-800 px-4 py-3">
                <div className="flex items-center justify-between">
                    <Link to={'/'} className="text-white font-bold text-xl">Games, and stuff, i guess</Link>
                    <div className="flex">
                        <ul className="space-y-4">
                            <li>
                                <Link className="text-gray-300 hover:text-white mx-6 my-2 rounded-md text-xl font-medium border" to={'fake/1'}>this is fake</Link>
                            </li>
                            <li>
                                <Link className="text-gray-300 hover:text-white mx-6 my-2 rounded-md text-xl font-medium border" to={'/jankenpo'}>This would be a game page, and it is rock paper scissors!</Link>
                            </li>
                        </ul>
                        <ul className="space-y-4">
                            <li>
                                <Link className="text-gray-300 hover:text-white mx-6 my-2 rounded-md text-xl font-medium border" to={'/numberguess'}>You can guess numbers here!</Link>
                            </li>
                            <li>
                                <Link className="text-gray-300 hover:text-white mx-6 my-2 rounded-md text-xl font-medium border" to={'/stuff'}>This is a game page, and it is Tic Tac Toe!</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
            <div>
                <Outlet />
            </div>
        </>
    )
}