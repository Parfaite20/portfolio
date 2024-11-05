import { FaFacebookF, FaLinkedinIn } from "react-icons/fa";
import { useTypewriter } from "react-simple-typewriter";


const Banner = () => {
    const [text] = useTypewriter({
        words: ["full stack."],
        loop: true,
        typeSpeed: 20,
        deleteSpeed: 10,
        delaySpeed: 2000,
    });
    return (
        <div className="w-1/2 flex flex-col gap-8">
            <div className="flex flex-col gap-2">
                <h4 className="text-lg font-normal">Bienvenue</h4>
                <h2 className="text-4xl">Je suis
                    <span className="text-blue-600 capitalize font-bold"> Parfaite HOUNKPATCHI</span>
                </h2>
                <h4 className="text-3xl ">
                    Développeur <span> {text}</span>
                </h4>
                <p className="text-base font-bodyFont leading-6 tracking-wide">
                    Lorem Ipsum has been the industry's standard dummy text ever since
                    the 1500s, when an unknown printer took a galley of type and
                    scrambled it to make a type specimen book. It has survived not only
                    five centuries.
                </p>
            </div>
            <div className="flex justify-between">
                <div>
                    <h3 className="text-base uppercase font-titleFont mb-4">
                        Retrouve-moi dans
                    </h3>
                    <div className="flex gap-4">
                        <span className="bannerIcon">
                            <FaFacebookF />
                        </span>
                        <span className="bannerIcon">
                            <FaLinkedinIn />
                        </span>
                    </div>
                </div>
                <div>
                    <h3 className="text-base uppercase font-titleFont mb-4">
                        Meilleure compétence sur
                    </h3>
                    <div className="flex gap-4">
                        <span className="bannerIcon">
                            <FaFacebookF />
                        </span>
                        <span className="bannerIcon">
                            <FaLinkedinIn />
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;