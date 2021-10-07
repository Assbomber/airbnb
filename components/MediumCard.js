import Image from "next/image";
function MediumCard(props) {
    return (
        <div className="hover:scale-105 cursor-pointer duration-200 rounded-lg ">
            <div className="relative w-80 h-80">
                <Image className="rounded-lg" src={props.img} layout="fill" objectFit="cover"></Image>
            </div>
            <p className="text-lg font-medium">{props.title}</p>
            
            
        </div>
    )
}

export default MediumCard
