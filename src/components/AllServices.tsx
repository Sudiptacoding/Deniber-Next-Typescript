import React from 'react';

const AllServices = () => {
    const properties = [
        {
            id: 1,
            title: 'Buy a property',
            image: 'https://i.postimg.cc/SQ3mnJLC/8460352-01-1.png',
            description: 'Discover your perfect spot with an immersive photo experience and access to the most listings, featuring unique finds you won’t see anywhere else.',
            button: 'Browse homes'
        },
        {
            id: 2,
            title: 'Sell a property',
            image: 'https://i.postimg.cc/QdkDYm2J/2811888-01-1.png',
            description: "No matter which route you choose to sell your home, we're here to guide you toward a successful sale.",
            button: 'Add property'
        },
        {
            id: 3,
            title: 'Rent a home',
            image: 'https://i.postimg.cc/C1tpnQ8S/2843145-1.png',
            description: "We're building a seamless online experience—from browsing the largest rental network to applying and paying rent.",
            button: 'Find rental'
        }
    ];

    return (
        <div className="flex 2xl:px-80 lg:px-16 px-5 justify-center md:px-20 gap-6 py-8 bg-[#F7F7F7] w-full lg:flex-row flex-col">
            {properties.map(property => (
                <div key={property.id} className="w-full px-12 py-8 delay-100 bg-white rounded-lg shadow-md hover:shadow-lg">
                    <div className='flex items-center justify-center'><img src={property.image} alt={property.title} className="object-cover w-36 h-28" /></div>
                    <div className="px-4 text-center ">
                        <h2 className="pt-4 text-xl font-extrabold text-secondary">{property.title}</h2>
                        <p className="pt-2 pb-10 text-sm font-normal text-common">{property.description}</p>
                        <button className="px-12 py-3 text-base font-extrabold delay-100 border rounded-lg cursor-pointer text-primary border-primary hover:bg-primary hover:text-white hover:border-white">
                            {property.button}
                        </button>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default AllServices;