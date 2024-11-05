import { navLinksdata } from "@/constants";
import { Link } from "react-scroll";

const Navbar = () => {
    return (
        <div className="w-full h-full h-24 mx-auto flex justify-between items-center font-titleFont
            border-b-[1px] border-b-gray-300">
            <div>
                <img src="./person1.png" className="w-[50px] h-[50px]" />
            </div>
            <div>
                <ul className="flex items-center gap-10">
                    {
                        navLinksdata.map(({ _id, title, link }) => (
                            <li className="text-base font-normal  
                            tracking-wide cursor-pointer hover:text-blue-600 duration-300"
                                key={_id}
                            >
                                <Link
                                    activeClass="active"
                                    to={link}
                                    spy={true}
                                    smooth={true}
                                    offset={-70}
                                    duration={500}
                                >
                                    {title}
                                </Link>
                            </li>
                        ))
                    }
                </ul>
            </div>
        </div>
    );
};

export default Navbar;