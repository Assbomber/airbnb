import Image from "next/image";

function SmallCard(props) {
    return (
        <div className="relative flex space-x-4  rounded-lg hover:scale-105 transitions duration-200 hover:bg-gray-100 cursor-pointer">
            <div className="relative  w-16 h-16  ">
                <Image className="rounded-lg" src={props.img} layout="fill" objectFit="contain"></Image>
            </div>
            <div className="flex flex-col justify-center">
                <p className="font-semibold">{props.location}</p>
                <p>{props.distance}</p>
            </div>
        </div>
    )
}

export default SmallCard
