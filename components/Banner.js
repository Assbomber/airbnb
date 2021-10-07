import Image from "next/image";

function Banner() {
    return (
        <div className="relative h-[300px] md:h-[400px] lg:h-[500px] xl:h-[600px]">
            <Image src="https://cdn.wallpaperhub.app/cloudcache/1/b/5/8/e/f/1b58ef6e3d36a42e01992accf5c52d6eea244353.jpg" layout="fill" objectFit="cover" objectPosition="center"/>
            <div className="absolute top-[45%] w-full text-center">
                <p className="text-lg text-white">Not sure where to go? Perfect.</p>
                <button className="text-purple-500 mt-2 md:mt-4 font-bold bg-white px-7 md:px-10 py-2 md:py-4 rounded-full shadow-md hover:shadow-xl active:scale-90 transition duration-150">I'm flexible</button>
            </div>
            
        </div>
    )
}

export default Banner;
