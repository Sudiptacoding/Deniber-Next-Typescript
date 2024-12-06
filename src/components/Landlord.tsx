import React from 'react';

const Landlord = () => {
  return (
    <div className="px-5 2xl:px-80">
      <div
        className="relative w-full rounded-xl"
        style={{
          backgroundImage: `linear-gradient(0deg, rgb(0 0 0 / 0%) 35%, rgb(0 0 0 / 0%) 100%), url('https://raw.githubusercontent.com/Sudiptacoding/Deniber/refs/heads/main/src/assets/landlord.jpg')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          backgroundAttachment: 'fixed',
        }}
      >
        <div className="relative w-full px-5 py-16 text-center rounded-lg 2xl:px-64 lg:px-40">
          <h1 className="text-base font-normal text-white">No Spam Promise</h1>
          <p className="py-2 text-2xl font-extrabold text-white">
            Are you a landlord?
          </p>
          <p className="pb-4 text-base font-medium text-white">
            Discover ways to increase your home's value and get listed. No Spam.
          </p>

          <div className="relative flex">
            <input type='text'
              placeholder="Enter your email/phone number"
              className="flex w-full px-4 py-6 text-sm bg-white outline-none rounded-2xl focus:outline-none"    

            />
            <button className="bg-primary absolute right-[13px] top-[12px] text-white lg:px-10 lg:py-3 px-5 py-3 rounded-lg hover:bg-primary-dark focus:outline-none">
              Submit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Landlord;