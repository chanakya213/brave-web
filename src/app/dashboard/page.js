"use client"
import React, { useEffect } from 'react';
import { useState } from 'react';
import { GoArrowRight } from "react-icons/go";
import { GoArrowLeft } from "react-icons/go";

function Dashboard() {
    const imagesObjectStore = {
        1: '/pageOne.jpg',
        2: '/pageTwo.jpg',
        3: '/pageThree.jpg',
        4: '/pageFour.jpg',
        5: '/pageFive.jpg',
    }

    const [currentImage, setCurrentImage] = useState(1);
    const [prevImage, setPrevImage] = useState(5);

    const handleNextImageSlider = () => {
        setPrevImage(currentImage)
        setCurrentImage(prev => prev === 5 ? 1 : prev + 1)
    }

    const handlePrevImageSlider = () => {
        setPrevImage(currentImage)
        setCurrentImage(prev => prev === 1 ? 5 : prev - 1)
    }

    useEffect(() => {
        const id = setInterval(() => {
            handleNextImageSlider()
        }, 6000);
        return () => clearInterval(id);
    }, [])

    return (
        <>
            <div className='image-div z-0'>
                <GoArrowRight onClick={handleNextImageSlider} size={45} className='hide-sm absolute cursor-pointer right-8 top-1/2 bg-slate-900 hover:bg-white hover:text-black p-2 z-30 rounded-full' />
                <GoArrowLeft onClick={handlePrevImageSlider} size={45} className='hide-sm absolute cursor-pointer left-8 top-1/2 bg-slate-900 hover:bg-white hover:text-black p-2 z-30 rounded-full' />
                <img src={imagesObjectStore[1]} className={`${currentImage === 1 ? 'slide-right z-20' : `hidden`}`} />
                <img src={imagesObjectStore[2]} className={`${currentImage === 2 ? 'slide-right z-20' : 'hidden'}`} />
                <img src={imagesObjectStore[3]} className={`${currentImage === 3 ? 'slide-right z-20' : 'hidden'}`} />
                <img src={imagesObjectStore[4]} className={`${currentImage === 4 ? 'slide-right z-20' : 'hidden'}`} />
                <img src={imagesObjectStore[5]} className={`${currentImage === 5 ? 'slide-right z-20' : 'hidden'}`} />

                <img src={imagesObjectStore[1]} className={`${prevImage === 1 ? `image-background` : 'hidden'}`} />
                <img src={imagesObjectStore[2]} className={`${prevImage === 2 ? `image-background` : 'hidden'}`} />
                <img src={imagesObjectStore[3]} className={`${prevImage === 3 ? `image-background` : 'hidden'}`} />
                <img src={imagesObjectStore[4]} className={`${prevImage === 4 ? `image-background` : 'hidden'}`} />
                <img src={imagesObjectStore[5]} className={`${prevImage === 5 ? `image-background` : 'hidden'}`} />

                <p className={`card-name z-30 text-5xl font-bold left-32 top-1/2 ${currentImage === 1 ? 'slide-right' : 'hidden'}`}>
                    Chanakya  <br />
                    Full Stack Dev
                    <br />
                    <button class="custom-btn">Shop Now</button>
                </p>
                <p className={`card-name z-30 text-5xl font-bold right-32 top-1/2 ${currentImage === 2 ? 'slide-right' : 'hidden'}`}>
                    Chanakya  <br />
                    Full Stack Dev
                    <br />
                    <button class="custom-btn">Shop Now</button>
                </p>
                <p className={`card-name z-30 text-5xl font-bold left-32 top-1/2 ${currentImage === 3 ? 'slide-right' : 'hidden'}`}>
                    Chanakya  <br />
                    Full Stack Dev
                    <br />
                    <button class="custom-btn">Shop Now</button>
                </p>
                <p className={`card-name z-30 text-5xl font-bold right-32 top-1/2 ${currentImage === 4 ? 'slide-right' : 'hidden'}`}>
                    Chanakya  <br />
                    Full Stack Dev
                    <br />
                    <button class="custom-btn">Shop Now</button>
                </p>
                <p className={`card-name z-30 text-5xl font-bold left-32 top-1/2 ${currentImage === 5 ? 'slide-right' : 'hidden'}`}>
                    Chanakya  <br />
                    Full Stack Dev
                    <br />
                    <button class="custom-btn">Shop Now</button>
                </p>
            </div>
        </>
    )
}

export default Dashboard;