const Header = () => {
    return (
        <div className="fixed w-screen bg-white">
            <nav className="flex space-x-3 p-2">
                <div className="flex-grow">
                    <a className="text border-2 border-dark inline-flex p-1">
                        <span className=" p-1 px-2 bg-black text-white">U<span
                            className="hidden lg:inline">shindi</span></span>
                        <span className=" p-1 px-2 bg-white">B<span className="hidden lg:inline">ienvenu</span></span>
                    </a>
                </div>
                <ul className="flex hidden space-x-8 lg:flex p-1 py-3">
                    <li><a href="#link1">Link1</a></li>
                    <li><a href="#link2">Link2</a></li>
                    <li><a href="#link3">Link3</a></li>
                    <li><a href="#link4">Link4</a></li>
                    <li>
                        <a href="#f"
                            className="shadow-2xl bg-white :text-black outline  outline-2 outline-black px-6 py-2 hover:bg-black  hover:text-white capitalize">Let's
                            connect
                        </a>
                    </li>
                </ul>
                <div className="flex lg:hidden my-2">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-6 h-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path
                            // stroke-linecap="round"
                            // stroke-linejoin="round"
                            // stroke-width="2"
                            d="M4 6h16M4 12h16M4 18h16"
                        />
                    </svg>
                </div>

            </nav>
        </div>

    )
}

export default Header