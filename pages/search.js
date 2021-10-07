import Header from "../components/Header";
import Footer from "../components/Footer";
import {useRouter} from "next/dist/client/router";
import {format} from "date-fns";
import axios from "axios";
import InfoCard from "../components/InfoCard";
import Map from "../components/Map";
function Search(props) {
    console.log(props)
    const router = useRouter();
    const startDate=format(new Date(router.query.startDate),"dd MMMM yy");
    const endDate=format(new Date(router.query.endDate),"dd MMMM yy");
    const range=startDate+" - "+endDate;
    return (
        <div>
            <Header placeholder={router.query.location+" | "+range+" | "+router.query.numberOfGuest+" guests"}/>
            <main className=" flex ">
                <section className="flex-1 px-6 py-14">
                    <p className="text-xs">300+ Stays for {range} and {router.query.numberOfGuest} number of guests</p>
                    <h1 className="text-3xl font-semibold my-3">Stays in {router.query.location}</h1>
                    <div className=" hidden md:flex flex-auto flex-wrap my-3">
                        <p className="button">Cancellations</p>
                        <p className="button">Type of place</p>
                        <p className="button">Price</p>
                        <p className="button">Rooms and beds</p>
                        <p className="button">More filters</p>
                    </div>
                    <div>
                        {props.data.map((item,index) =><InfoCard key={index} img={item.img} location={item.location} description={item.description} price={item.price} total={item.total} star={item.star} title={item.title} />)}
                    </div>
                    
                </section>
                <section className="hidden lg:block w-[500px] h-[100vh] sticky top-[80px] bg-red-600">
                    <Map locations={props.data}/>
                </section>
            </main>
            <Footer/>
        </div>
    )
}

export default Search;

export async function getServerSideProps(){
    const data=await axios.get("https://links.papareact.com/isz").then(res=>res.data);

    return {
        props:{
            data:data,
        }
    }
}
