import Head from 'next/head'
import Banner from '../components/Banner';
import Header from "../components/Header";
import axios from "axios";
import SmallCard from '../components/SmallCard';
import MediumCard from "../components/MediumCard";
import LargeCard from "../components/LargeCard";
import Footer from "../components/Footer";
export default function Home(props) {
 
  return (
    <div className="">
     <Header/>
     <Banner/>
     <main className="max-w-screen-xl py-4 px-5 md:py-8 mx-auto">
       <section className="">
         <h1 className="text-3xl font-semibold">Explore Nearby</h1>
         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-4 gap-y-4 py-8">
         {props.exploreData?.map((data,index)=>{
           return <SmallCard key={index} img={data.img} location={data.location} distance={data.distance} />
         })}
         </div>
       </section>
       <section>
         <h1 className="text-3xl font-semibold">Live Anywhere</h1>
         <div className=" scroll-hide py-8 px-4 -ml-4 flex space-x-4 overflow-x-scroll  ">
           {props.cardsData?.map((data,index)=>{
           return <MediumCard key={index} img={data.img} title={data.title}/>
         })}
         </div>
         
       </section>
       <LargeCard img="https://links.papareact.com/4cj" title="The Greatest Outdoors" description="Whitelist created by airbnb" buttonText="Get inspired"/>
     </main>
     <Footer/>
    </div>
  )
}

export async function getStaticProps(){
  const exploreData=await axios.get("https://jsonkeeper.com/b/4G1G").then(res=>res.data).catch(e=>{console.log(e)});
  const cardsData=await axios.get("https://links.papareact.com/zp1").then(res=>res.data).catch(e=>{console.log(e)});
  return {
    props:{
      exploreData: exploreData,
      cardsData:cardsData,
    }
  }
}


