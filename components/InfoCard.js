import Image from "next/image";
import {HeartIcon} from "@heroicons/react/outline";
import {StarIcon} from "@heroicons/react/solid";
function InfoCard(props) {
    return (
        <div className="flex flex-col mb-4 sm:flex-row p-3 hover:shadow-lg shadow-md rounded-lg duration-200">
            <div className="relative w-full h-[200px] sm:h-auto sm:w-[30%] ">
                <Image className="rounded-lg" src={props.img} layout="fill" objectFit="cover" objectPosition="center"/>
            </div>
            <div className="flex-1  sm:pl-4 py-2 ">
                <div className="flex justify-between">
                    <p className="text-xs text-gray-400">{props.location}</p>
                    <HeartIcon className="w-5"/>
                </div>
                
                <p className="text-lg font-semibold">{props.title}</p>
                <hr className="my-1 w-10 text-black border-t-2 border-gray-200"/>
                <p className="text-xs text-gray-400">{props.description}</p>
                <div className="flex justify-between items-end mt-5">
                    <p className='text-xs font-semibold'><span><StarIcon className="w-4 relative top-[-1px] text-red-400 inline"/>{props.star}</span></p>
                    <div className="">
                        <p className="text-lg font-semibold">{props.price}</p>
                        <p className="text-xs text-gray-400">{props.total}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default InfoCard
