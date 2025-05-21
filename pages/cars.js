import Head from 'next/head';
import Header from '../components/Header';
import Footer from '../components/Footer';
import SmallCard from '../components/SmallCard'; // Import SmallCard

export default function Cars() {
  // Sample car data
  const sampleCarData = [
    { img: "https://via.placeholder.com/150/FF0000/FFFFFF?Text=Car1", location: "Sedan Cruiser", distance: "$50/day" },
    { img: "https://via.placeholder.com/150/00FF00/FFFFFF?Text=Car2", location: "SUV Explorer", distance: "$75/day" },
    { img: "https://via.placeholder.com/150/0000FF/FFFFFF?Text=Car3", location: "Hatchback City", distance: "$40/day" },
    { img: "https://via.placeholder.com/150/FFFF00/000000?Text=Car4", location: "Minivan Family", distance: "$90/day" },
  ];

  return (
    <div className="">
      <Head>
        <title>Car Rentals</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <main className="max-w-screen-xl py-4 px-5 md:py-8 mx-auto">
        <h1 className="text-3xl font-semibold">Car Rentals</h1>
        
        <section className="pt-6">
          <h2 className="text-2xl font-semibold pb-5">Available Cars</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-4 gap-y-4 py-8">
            {sampleCarData.map((car, index) => (
              <SmallCard key={index} img={car.img} location={car.location} distance={car.distance} />
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
