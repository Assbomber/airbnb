import Image from "next/image";
import {useRouter} from "next/dist/client/router";
import {useState} from "react";
import {SearchIcon , GlobeAltIcon,UserCircleIcon,UsersIcon,MenuIcon, UserIcon} from "@heroicons/react/solid"
import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css'; // theme css file
import { DateRangePicker } from 'react-date-range';
function Header(props) {

    const [search,setSearch]= useState("");
    const [startDate,setStartDate]=useState(new Date());
    const [endDate,setEndDate]=useState(new Date());
    const [numberOfGuest,setNumberOfGuest]=useState(1);
    const router=useRouter();
    const selectionRange = {
      startDate: startDate,
      endDate: endDate,
      key: 'selection',
    }

    const searchFunc=()=>{
        router.push({
            pathname: '/search',
            query:{
                location:search,
                startDate:startDate.toISOString(),
                endDate:endDate.toISOString(),
                numberOfGuest:numberOfGuest,
            }
        });
        setSearch("");
    }
    

    return (
        <header className="sticky top-0 z-[100] grid grid-cols-3 items-center bg-white p-5 md:px-10 shadow-md ">
            <div onClick={()=>router.push("/")} className="relative h-10 item-center flex cursor-pointer mr-2 ">
                <Image src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/Airbnb_Logo_B%C3%A9lo.svg/2560px-Airbnb_Logo_B%C3%A9lo.svg.png" layout="fill" objectFit="contain" objectPosition="left" />
            </div>
            <div className="border-gray-300 border-2 rounded-full px-2 py-1 p-5  flex items-center ">
                <input value={search} onChange={(e)=>setSearch(e.target.value)} className="w-full border-none outline-none text-gray-600" placeholder={props.placeholder? props.placeholder:"Start your search"} type="text"/>
                <SearchIcon className="w-7 p-1 bg-red-400 ml-3 text-white rounded-full cursor-pointer "/>
            </div>

            <div className="flex justify-center md:justify-end items-center text-gray-500 space-x-3 ">
                <p className="hidden md:inline cursor-pointer">Become a host</p>
                <GlobeAltIcon className="w-5 cursor-pointer"/>
                <div className="rounded-full border-gray-300 border-2 p-1 flex justify-center items-center space-x-1 cursor-pointer">
                    <MenuIcon className="w-5"/>
                    <UserCircleIcon className="w-5"/>
                </div>
            </div>
            {search && 
                <div className="flex flex-col mx-auto col-span-3">
                    <DateRangePicker  minDate={new Date()} ranges={[selectionRange]}
                        onChange={(e)=>{console.log(e);setStartDate(e.selection.startDate);setEndDate(e.selection.endDate)}}
                        rangeColors={["#FD5B61"]} className=""

                    />
                    <div class="flex items-center border-b mb-4 pb-1 ">
                        <h2 className="text-2xl flex-grow font-semibold">Number of guest</h2>
                        <UserIcon className="h-5"/>
                        <input type="number" value={numberOfGuest} onChange={(e)=>setNumberOfGuest(e.target.value)} className="w-[50px] pl-2 text-red-400 focus:outline-none focus:ring focus:border-red-400"/>
                    </div>
                    <div className="flex">
                        <button className="flex-1  border-r"onClick={()=>setSearch("")}>Cancel</button>
                        <button onClick={searchFunc} className="flex-1 text-red-400">Search</button>
                    </div>
                </div>
            }
            
        </header>
    )
}

export default Header
