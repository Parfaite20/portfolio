import Banner from "@/components/banner";


const Home = () => {
    return (
        <section
            id="home" className="w-full py-20 flex border-b-[1px]
            font-titleFont border-b-gray-300"
        >
            <Banner/>
            <div className="w-1/2"> 
                <img
                className="w-[300px] h-[300px] z-10"
                 src="ime.jpg" alt="" 
                />
            </div>
        </section>
    );
};

export default Home;