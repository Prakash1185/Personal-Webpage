import React, { useEffect, useState } from "react";
import { toPng } from "html-to-image";
import frame2 from "../assets/frame2.png";
import PartyPopperButton from './PartyPopperButton';
const HappyNewYearFrame = () => {
    const [uploadedImage, setUploadedImage] = useState(null);
    // Handle file upload
    const handleUpload = (e) => {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = () => {
                setUploadedImage(reader.result);
            };
            reader.readAsDataURL(file);
        }
    };
    // Download combined image
    const handleDownload = () => {
        const frameContainer = document.getElementById("frame-container");
        toPng(frameContainer)
            .then((dataUrl) => {
                const link = document.createElement("a");
                link.href = dataUrl;
                link.download = "Happy-New-Year.png";
                link.click();
            })
            .catch((error) => {
                console.error("Error generating image: ", error);
            });
    };
    const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());
    function calculateTimeLeft() {
        const targetDate = new Date(2025, 0, 1, 0, 0, 1); // January 1, 2025, 12:00:01 AM
        const now = new Date();
        const difference = targetDate - now;

        if (difference <= 0) {
            return { days: 0, hours: 0, minutes: 0, seconds: 0 }; // Stop the countdown
        }

        return {
            days: Math.floor(difference / (1000 * 60 * 60 * 24)),
            hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
            minutes: Math.floor((difference / 1000 / 60) % 60),
            seconds: Math.floor((difference / 1000) % 60),
        };
    }

    useEffect(() => {
        const timer = setInterval(() => {
            const newTimeLeft = calculateTimeLeft();

            // Stop the timer if the countdown reaches the target time
            if (
                newTimeLeft.days === 0 &&
                newTimeLeft.hours === 0 &&
                newTimeLeft.minutes === 0 &&
                newTimeLeft.seconds === 0
            ) {
                clearInterval(timer);
            }

            setTimeLeft(newTimeLeft);
        }, 1000);

        return () => clearInterval(timer); // Cleanup on unmount
    }, []);
    return (
        <div id="activities" className='pt-14 bg-background md:px-16 px-10 sm:px-14 pb-16 dark:bg-gray-950'>
            <div className="relative flex items-center justify-center gap-2 pt-16">
                <div className="w-5 h-1 bg-bluee"></div>
                <div className="text-xl font-medium dark:text-gray-100">Activities</div>
                <div className="absolute  opacity-10 -top-2 text-[3.5rem] md:text-[4.5rem] font-bold tracking-wider whitespace-nowrap dark:text-gray-100 dark:opacity-5">Happy New Year</div>
            </div>
            <div>
                <div className="flex md:justify-around items-center flex-col  md:flex-row py-8 pt-12">
                    <div className="">
                        <div className="px-2 text-center md:text-start  md:px-10  pb-10 flex flex-col gap-5">
                            <p className="text-2xl  font-medium dark:text-gray-100">
                                Upload your picture and celebrate ✨
                            </p>
                            {/* File Input */}
                            <label
                                htmlFor="file-input"
                                className="px-8 py-4 text-white bg-bluee rounded-full  w-fit text-lg cursor-pointer hover:bg-opacity-95 mx-auto md:mx-0"
                            >
                                Upload Photo
                            </label>
                        </div>
                        {/* coutdown timer */}
                        <div className="hidden md:block">
                            <div className="flex flex-col items-center justify-center border bg-white border-gray-500 border-opacity-30  px-8 py-6 rounded-lg shadow-xl">
                                <h1 className="text-2xl sm:text-3xl md:text-4xl font-semibold mb-6 ">Countdown to New Year</h1>
                                <div className="flex items-center justify-center text-center bg-pair text-black p-4 rounded-xl shadow-lg w-full max-w-xl">
                                    <TimeDisplay label="Days" value={timeLeft.days} />
                                    <Divider />
                                    <TimeDisplay label="Hours" value={timeLeft.hours} />
                                    <Divider />
                                    <TimeDisplay label="Minutes" value={timeLeft.minutes} />
                                    <Divider />
                                    <TimeDisplay label="Seconds" value={timeLeft.seconds} />
                                </div>
                                <PartyPopperButton />
                            </div>
                        </div>
                    </div>
                    {/* image section */}
                    <div className="">
                        <input
                            id="file-input"
                            type="file"
                            accept="image/*"
                            onChange={handleUpload}
                            className="hidden"
                        />
                        <div>
                            <div
                                id="frame-container"
                                className="relative w-[20rem]  h-[20rem] sm:w-[23rem] sm:h-[23rem] md:w-[25rem] md:h-[25rem] bg-gray-200 overflow-hidden rounded-lg"
                            >
                                {/* Uploaded Image or Placeholder */}
                                {uploadedImage ? (
                                    <img
                                        src={uploadedImage}
                                        alt="Uploaded"
                                        className="absolute top-0 left-0 w-full h-full object-cover"
                                    />
                                ) : (
                                    <div className="absolute inset-0 flex items-center justify-center text-gray-500 text-xl font-medium ">
                                    </div>
                                )}
                                {/* Transparent PNG Frame */}
                                <img
                                    src={frame2}
                                    alt="New Year Frame"
                                    className="absolute top-0 left-0 w-full h-full pointer-events-none"
                                />
                            </div>
                            <div className="w-full flex  justify-start  py-2">
                                <button
                                    onClick={handleDownload}
                                    className="px-4 py-3 text-white bg-bluee  hover:bg-opacity-95 transition-all duration-200 rounded-full "
                                >
                                    <i className="fa-solid fa-download"></i>
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* Countdown on screen */}
                    {/* coutdown timer */}
                    <div className=" md:hidden pt-16">
                        <div className="flex flex-col items-center justify-center border bg-white border-gray-500 border-opacity-30  px-8 py-6 rounded-lg shadow-xl">
                            <h1 className="text-2xl sm:text-3xl md:text-4xl font-semibold mb-6 ">Countdown to New Year</h1>
                            <div className="flex items-center justify-center text-center bg-pair text-black p-4 rounded-xl shadow-lg w-full max-w-xl">
                                <TimeDisplay label="Days" value={timeLeft.days} />
                                <Divider />
                                <TimeDisplay label="Hours" value={timeLeft.hours} />
                                <Divider />
                                <TimeDisplay label="Minutes" value={timeLeft.minutes} />
                                <Divider />
                                <TimeDisplay label="Seconds" value={timeLeft.seconds} />
                            </div>
                            <PartyPopperButton />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
const TimeDisplay = ({ label, value, isCountdownOver }) => {
    if (isCountdownOver) {
        return (
            <div className="flex flex-col items-center w-full">
                <span className="text-4xl sm:text-5xl md:text-6xl font-bold text-green-500">
                    Happy New Year! 🎉
                </span>
            </div>
        );
    }

    return (
        <div className="flex flex-col items-center w-1/4">
            <span className="text-2xl sm:text-3xl md:text-4xl font-bold">{value < 10 ? `0${value}` : value}</span>
            <span className="text-sm font-medium mt-1">{label}</span>
        </div>
    );
};
const Divider = () => (
    <div className="text-2xl font-bold mx-2 ">:</div>
);
export default HappyNewYearFrame;
