import Image from "next/image";

function LargeCard(props) {
    return (
        <div className="relative h-80 ">
            <Image className="rounded-lg" src={props.img} layout="fill" objectFit="cover"></Image>
            <div className="relative pl-10 pt-10 z-50">
                <p className="text-4xl my-3 w-[250px]" >{props.title}</p>
                <p className="text-lg my-3">{props.description}</p>
                <button className="outline-none border-none bg-black text-white p-2 rounded-lg active:scale-95 duration-150">{props.buttonText}</button>
            </div>
        </div>
    )
}

export default LargeCard
