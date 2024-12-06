"use client";
import Congratulations from '@/components/Congratulations';
import React, { useEffect, useState } from 'react';
import { FaCheck } from 'react-icons/fa';
import { PiConfetti, PiSmileySadThin } from 'react-icons/pi';









const AddProperty = () => {
    const [activeStep, setActiveStep] = useState(1);
    const [completedSteps, setCompletedSteps] = useState(new Set());
    const [step7checkd, setStep7Checkd] = useState(false)
    const [card1SelectColor, setCard1SelectColor] = useState<number | null>(null);
    const [card2SelectColor, setCard2SelectColor] = useState<number | null>(null)


    // Bellow all input value
    const [step1Value, setStep1Value] = useState({})
    const [step2Value, setStep2Value] = useState({})
    const [selectedItems, setSelectedItems] = useState<string[]>([]);
    const [step5Images, setStep5Images] = useState<string[]>([]);

    const [formData, setFormData] = useState({
        division: '',
        district: '',
        address: '',

        title: '',
        description: '',
        bedroom: '',
        bathroom: '',
        amount: '',
    });





    const totalSteps = 7;
    const steps = [
        "Select Type",
        "Select Category",
        "Address",
        "Property info",
        "Property image",
        "What this place offers",
        "Congratulations",
    ];
    const step1Card = [
        { tile: 'Rent property', description: 'Maximize Your Income with the Best Rental Deals!' },
        { tile: 'Sale property', description: 'Get the Best Deal for Your Apartment Today!' },
    ]
    const step2Card = [
        { name: 'Flat', img: 'https://i.postimg.cc/d3kwzrwX/Frame.png' },
        { name: 'Office', img: 'https://i.postimg.cc/D0MmG7wV/Frame.png' },
        { name: 'Hostel/mess', img: 'https://i.postimg.cc/zGW3LZmM/Frame.png' },
        { name: 'Office', img: 'https://i.postimg.cc/D0MmG7wV/Frame.png' },
        { name: 'Sublet', img: 'https://i.postimg.cc/25RbTjFr/Frame.png' },
        { name: 'Land', img: 'https://i.postimg.cc/Ghtym5mw/Frame.png' },
    ]
    const step6Card = ['Electricity backup ', 'Elevators in building ', 'Parking ', 'CCTV security', 'Dryer', 'Kitchen', 'Maintenance staff', 'Guard/security staff', 'Gas']


    // Step 1 function
    const handleCardSelect = (i: number, item: object): void => {
        setStep1Value(item)
        setCard1SelectColor(i)
        setCompletedSteps((prev) => new Set(prev).add(1));
    };


    // Step 2 function
    const handleCategorySelect = (i: number, item: object) => {
        setStep2Value(item)
        setCard2SelectColor(i)
        setCompletedSteps((prev) => new Set(prev).add(2));
    };


    // All for value hangel (Step 3,4)
    const handleInputChange = (e: any) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    // Stape 5 image uplode
    const [uploadedImages, setUploadedImages] = useState<string[]>([]);
    const handleImageUpload = (e: any) => {
        const file = e.target.files[0];
        if (file) {
            const newImageUrl = URL.createObjectURL(file);
            setUploadedImages((prevImages) => [...prevImages, newImageUrl]);
            setStep5Images([...step5Images, file])
        }
    };

    // Strp 6 checkbox value
    const handleCheckboxChange = (item: string) => {
        setSelectedItems((prevSelected) => {
            if (prevSelected.includes(item)) {
                return prevSelected.filter((selectedItem) => selectedItem !== item);
            } else {
                return [...prevSelected, item];
            }
        });
    };
    const isStep6Completed = () => selectedItems.length > 0;

    // All stpe check for complet or not
    useEffect(() => {
        const fromValue = Object.values(formData).every(value => value !== '' && value !== null)
        const checkboxData = isStep6Completed()
        setStep7Checkd(false)
        if (fromValue && checkboxData && Object.keys(step1Value).length > 0 && Object.keys(step2Value).length > 0) {
            setStep7Checkd(true)
        }
    }, [formData, selectedItems, completedSteps, step2Value, step1Value])


    const isStepCompleted = (step: number) => {
        switch (step) {
            case 3:
                return formData.address && formData.district && formData.division;
            case 4:
                return formData.title && formData.description && formData.bedroom && formData.bathroom && formData.amount;
            case 5:
                return uploadedImages?.length > 0;
            case 6:
                return isStep6Completed();
            case 7:
                return step7checkd;
            default:
                return completedSteps.has(step);
        }
    };


    const step1Filled = Object.values(step1Value).every((value) => typeof value === 'string' && value.trim() !== "");
    const step2Filled = Object.values(step2Value).every((value) => typeof value === 'string' && value.trim() !== "");
    const step3Filled = Object.values(formData).every((value) => typeof value === 'string' && value.trim() !== "");
    if (step1Filled && step2Filled && step3Filled && selectedItems?.length > 0 && step5Images?.length > 0) {
        console.log(step1Value, step2Value, formData, selectedItems, step5Images)
    }




    return (
        <div className=' 2xl:px-[300px] px-5'>
            <div>
                <h3 className='text-[#444955] text-2xl font-extrabold border-b pb-4 mb-4'>Add your property</h3>
            </div>
            <div className="flex border shadow-lg md:px-16 rounded-xl py-14">
                {/* Left Side Steps */}
                <ul className="w-16 mt-10 steps steps-vertical">
                    {steps.map((stepLabel, index) => {
                        const stepIndex = index + 1;
                        const isCompleted = isStepCompleted(stepIndex);
                        return (
                            <li
                                key={stepIndex}
                                className={`step ${activeStep === stepIndex ? 'step-primary' : ''} ${isCompleted ? 'step-completed' : ''}`}
                                onClick={() => setActiveStep(stepIndex)} // Navigate to the step on click
                            >
                                <span className="z-50 -ml-8 text-white">

                                    {isCompleted ? <>{stepIndex === 7 && step7checkd ? <PiConfetti className='p-0 -ml-1' /> : <FaCheck className='p-0 -ml-1' />}</> : stepIndex}
                                </span>
                            </li>
                        );
                    })}
                </ul>

                {/* Right Side Content */}
                <div className="flex-1 p-2 md:pl-5 ">
                    {activeStep === 1 && (
                        <div className="">
                            <p className=' text-primary'>4 simple steps  </p>

                            <h2 className="text-secondary text-[28px] font-extrabold pt-4 pb-6">Step 1: {steps[0]}</h2>
                            <div className="max-w-2xl">
                                {
                                    step1Card?.map((item, i) => (
                                        <button key={i} className="flex items-center justify-between w-full md:gap-16 gap-1 p-6 mb-4 border border-[#D0D1D4] rounded-2xl" onClick={() => handleCardSelect(i, item)}>
                                            <div className='text-left '>
                                                <h4 className='text-[#444955] font-extrabold'>{item?.tile}</h4>
                                                <p className='text-[#737780] pt-2'>{item?.description}</p>
                                            </div>
                                            <div>
                                                {
                                                    card1SelectColor === i ? <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
                                                        <circle cx="16" cy="16" r="15" stroke="#ED1C24" strokeWidth="2" />
                                                        <circle cx="16" cy="16" r="11" fill="#ED1C24" />
                                                    </svg> : <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
                                                        <circle cx="16" cy="16" r="15" stroke="#D0D1D4" strokeWidth="2" />
                                                    </svg>
                                                }
                                            </div>
                                        </button>
                                    ))
                                }
                            </div>
                        </div>
                    )}

                    {activeStep === 2 && (
                        <div className="p-2 md:pl-5">
                            <p className=' text-primary'>4 simple steps </p>
                            <h2 className="text-secondary text-[28px] font-extrabold pt-4 pb-6">Step 2: {steps[1]}</h2>
                            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
                                {
                                    step2Card?.map((item, i) => (
                                        <button
                                            key={i}
                                            className={`flex items-center gap-4 px-10 py-8 border rounded-2xl shadow-sm transition duration-200 ease-in-out 
                                                }`}
                                            onClick={() => handleCategorySelect(i, item)}
                                        >
                                            <div className="flex items-center gap-4 text-left">
                                                <img className="w-10 h-10 " src={item?.img} alt={item?.name || "Category Image"} />
                                                <p className="font-medium text-gray-700">{item?.name}</p>
                                            </div>
                                            <div className="ml-auto">
                                                {card2SelectColor === i ? (
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
                                                        <circle cx="16" cy="16" r="15" stroke="#ED1C24" strokeWidth="2" />
                                                        <circle cx="16" cy="16" r="11" fill="#ED1C24" />
                                                    </svg>
                                                ) : (
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
                                                        <circle cx="16" cy="16" r="15" stroke="#D0D1D4" strokeWidth="2" />
                                                    </svg>
                                                )}
                                            </div>
                                        </button>
                                    ))
                                }
                            </div>
                        </div>
                    )}

                    {activeStep === 3 && (
                        <div className="p-2 md:pl-5">
                            <p className=' text-primary'>4 simple steps </p>
                            <h2 className="text-secondary text-[28px] font-extrabold pt-4 pb-6">Step 3: {steps[2]}</h2>
                            <div className="flex flex-col ">
                                <label className="w-full max-w-2xl form-control ">
                                    <div className="pb-2 label">
                                        <span className="font-medium label-text">Division</span>
                                    </div>
                                    <select
                                        name="division"
                                        value={formData.division}
                                        onChange={handleInputChange}
                                        className="w-full select select-bordered text-[#A1A4AA] text-sm"
                                    >
                                        <option disabled value="">
                                            Select division
                                        </option>
                                        <option value="Han Solo">Khulna</option>
                                        <option value="Greedo">Dhaka</option>
                                    </select>
                                </label>
                                <label className="w-full max-w-2xl py-4 form-control">
                                    <div className="label">
                                        <span className="font-medium label-text">District</span>
                                    </div>
                                    <select
                                        name="district"
                                        value={formData.district}
                                        onChange={handleInputChange}
                                        className="w-full select select-bordered text-[#A1A4AA] text-sm"
                                    >
                                        <option disabled value="">
                                            Who shot first?
                                        </option>
                                        <option value="Han Solo">Satkhira</option>
                                        <option value="Greedo">Kaligong</option>
                                    </select>
                                </label>
                                <label className="w-full max-w-2xl form-control">
                                    <div className="pb-2 label">
                                        <span className="label-text">Full address</span>
                                    </div>
                                    <input
                                        type="text"
                                        name="address"
                                        placeholder="Enter your full address"
                                        value={formData.address}
                                        onChange={handleInputChange}
                                        className="w-full border border-[#D0D1D4] rounded-lg p-3 text-sm"
                                    />
                                </label>
                            </div>
                        </div>
                    )}

                    {activeStep === 4 && (
                        <div className="p-2 md:pl-5 ">
                            <p className=' text-primary'>4 simple steps </p>
                            <h2 className="text-secondary text-[28px] font-extrabold pt-4 pb-6">Step 4: {steps[3]}</h2>
                            <div className="flex flex-col mt-2 space-y-2">
                                <label className="w-full max-w-2xl form-control">
                                    <div className="pb-2 label">
                                        <span className="label-text">Title</span>
                                    </div>
                                    <input
                                        type="text"
                                        name="title"
                                        placeholder="Enter a tittle for this property"
                                        value={formData.title}
                                        onChange={handleInputChange}
                                        className="w-full border border-[#D0D1D4] rounded-lg p-3 text-sm"
                                    />
                                </label>
                                <label className="w-full max-w-2xl form-control">
                                    <div className="label">
                                        <span className="label-text">Description</span>
                                    </div>

                                    <textarea
                                        name="description"
                                        placeholder="Describe about your property "
                                        value={formData.description}
                                        onChange={handleInputChange}
                                        className="w-full p-2 border border-gray-400 rounded"
                                    />
                                </label>
                                <div className='flex max-w-2xl gap-3'>
                                    <label className="w-full form-control ">
                                        <div className="label">
                                            <span className="label-text">Bedroom</span>
                                        </div>
                                        <select
                                            name="bedroom"
                                            value={formData.bedroom}
                                            onChange={handleInputChange}
                                            className="w-full select select-bordered"
                                        >
                                            <option disabled value="">
                                                Select no. of bedroom
                                            </option>
                                            <option value="Han Solo">1 bed room</option>
                                            <option value="Greedo">2 bed room</option>
                                        </select>
                                    </label>
                                    <label className="w-full form-control ">
                                        <div className="label">
                                            <span className="label-text">Bathroom</span>
                                        </div>
                                        <select
                                            name="bathroom"
                                            value={formData.bathroom}
                                            onChange={handleInputChange}
                                            className="w-full select select-bordered"
                                        >
                                            <option disabled value="">
                                                Select no. of bathroom
                                            </option>
                                            <option value="Han Solo">1 bathroom</option>
                                            <option value="Greedo">2 bathroom</option>
                                        </select>
                                    </label>
                                </div>
                                <label className="w-full max-w-2xl form-control">
                                    <div className="pb-2 label">
                                        <span className="label-text">Amount</span>
                                    </div>
                                    <input
                                        type="number"
                                        name="amount"
                                        placeholder="Enter amount of your property"
                                        value={formData.amount}
                                        onChange={handleInputChange}
                                        className="w-full border border-[#D0D1D4] rounded-lg p-3 text-sm"
                                    />
                                </label>
                            </div>
                        </div>
                    )}
                    {activeStep === 5 && (
                        <div className="p-2 md:pl-5 ">
                            <p className=' text-primary'>4 simple steps </p>
                            <h2 className="text-secondary text-[28px] font-extrabold pt-4 pb-6">Step 5: {steps[4]}</h2>
                            <div className="p-4 space-y-4">
                                <div className="flex flex-wrap gap-4">
                                    {uploadedImages.map((image, index) => (
                                        <div key={index} className="relative overflow-hidden bg-gray-100 border rounded-lg w-36 h-36">
                                            <img src={image} alt={`Uploaded ${index}`} className="object-cover w-full h-full" />
                                        </div>
                                    ))}
                                </div>
                                <div className="rounded-md  border bg-[#ECEDEE] p-4 shadow-md w-36 cursor-pointer">
                                    <label htmlFor="upload" className="flex flex-col items-center gap-2 py-6 cursor-pointer">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                            <g clipPath="url(#clip0_2958_25089)">
                                                <path d="M12 0C5.38294 0 0 5.38294 0 12C0 18.6171 5.38294 24 12 24C18.6171 24 24 18.6171 24 12C24 5.38294 18.6171 0 12 0Z" fill="#22252B" />
                                                <path d="M17.2499 12.9999H12.9999V17.25C12.9999 17.802 12.552 18.2499 11.9999 18.2499C11.4479 18.2499 11 17.802 11 17.25V12.9999H6.74994C6.19789 12.9999 5.75 12.552 5.75 12C5.75 11.448 6.19789 11.0001 6.74994 11.0001H11V6.75C11 6.19795 11.4479 5.75006 11.9999 5.75006C12.552 5.75006 12.9999 6.19795 12.9999 6.75V11.0001H17.2499C17.802 11.0001 18.2499 11.448 18.2499 12C18.2499 12.552 17.802 12.9999 17.2499 12.9999Z" fill="#FAFAFA" />
                                            </g>
                                            <defs>
                                                <clipPath id="clip0_2958_25089">
                                                    <rect width="24" height="24" fill="white" />
                                                </clipPath>
                                            </defs>
                                        </svg>
                                        <span className="text-[#737780] font-normal">Add photo</span>
                                    </label>
                                    <input
                                        id="upload"
                                        onChange={handleImageUpload}
                                        type="file"
                                        accept="image/*"
                                        className="hidden"
                                    />
                                </div>
                            </div>
                        </div>
                    )}

                    {activeStep === 6 && (
                        <div className="p-2 md:pl-5">
                            <p className=' text-primary'>4 simple steps </p>
                            <h2 className="text-secondary text-[28px] font-extrabold pt-4 pb-6">Step 6: {steps[5]}</h2>
                            <div className="flex flex-wrap items-center gap-5">
                                {step6Card.map((item, i) => (
                                    <label key={i} className="flex items-center p-4 border rounded-lg text-[#444955] cursor-pointer delay-75 hover:shadow-md">
                                        <input
                                            type="checkbox"
                                            checked={selectedItems.includes(item)}
                                            onChange={() => handleCheckboxChange(item)}
                                            className="checkbox mr-2 border-[#D0D1D4] [--chkbg:theme(colors.primary)] [--chkfg:white] checked:border-primary" />

                                        {item}
                                    </label>
                                ))}
                            </div>
                        </div>
                    )}

                    {activeStep === 7 && (
                        <>
                            <div className={`md:pl-5 p-2 ${step7checkd ? '' : 'hidden'}`}>
                                <p className=' text-primary'>You’ve accomplished it! </p>
                                <h2 className="text-secondary text-[28px] font-extrabold pt-4 pb-6">{steps[6]}</h2>
                                <div>
                                    <Congratulations></Congratulations>
                                </div>
                            </div>
                            <div className={`md:pl-5 p-2  ${step7checkd ? 'hidden' : ''}`}>
                                <p className=' text-primary'>Oops! We are sorry</p>
                                <h2 className="text-secondary text-[28px] font-extrabold pt-4 pb-6">You have not completed all the steps yet.</h2>
                                <div className='pt-20 text-center'>
                                    <span className='flex items-center justify-center'> <PiSmileySadThin className='text-9xl' /></span>
                                    <h3 className='py-6 pt-4 font-extrabold text-secondary'> Please click the button below to finish up!</h3>
                                    <button onClick={() => activeStep > 1 && setActiveStep(activeStep - 1)} className='px-8 py-2 font-extrabold border rounded-lg text-primary border-primary'>Back to  Previous Steps</button>
                                </div>
                            </div>

                        </>
                    )}

                    {/* Navigation Buttons */}
                    <div className={`flex items-center justify-between mt-40 ${activeStep === 7 ? 'hidden' : ''}`}>
                        <button
                            onClick={() => activeStep > 1 && setActiveStep(activeStep - 1)}
                            disabled={activeStep === 1}
                            className="md:px-8 px-3 flex items-center md:gap-4 gap-2 py-2 text-common border border-[#D0D1D4] rounded-lg disabled:opacity-50"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                                <path d="M10 12.6666L5.33333 7.99998L10 3.33331" stroke="#737780" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                            Previous
                        </button>
                        <button
                            onClick={() => activeStep < totalSteps && setActiveStep(activeStep + 1)}
                            disabled={activeStep === totalSteps}
                            className="flex items-center gap-2 px-3 py-2 font-bold text-white rounded-lg md:gap-4 md:px-8 bg-primary disabled:opacity-50"
                        >
                            Next
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                                <path d="M6 3.33335L10.6667 8.00002L6 12.6667" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </button>
                    </div>
                </div>
            </div >
        </div >
    );
};

export default AddProperty;