import AllServices from '@/components/AllServices';
import Banner from '@/components/Banner';
import FeaturedProperties from '@/components/FeaturedProperties';
import Landlord from '@/components/Landlord';
import OurCustomerFeedback from '@/components/OurCustomerFeedback';

import React from 'react';

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <FeaturedProperties></FeaturedProperties>
      <AllServices></AllServices>
      <div className='px-5 pt-12 pb-8 2xl:px-80'>
        <h2 className='pb-1 text-2xl font-extrabold text-secondary'>Our customer feedback</h2>
        <p className='text-base font-normal text-common'>Don’t take our word for it. Trust our customers</p>
      </div>
      <OurCustomerFeedback></OurCustomerFeedback>
      <Landlord></Landlord>
    </div>
  );
};

export default Home;