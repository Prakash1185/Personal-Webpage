import React, { useState } from "react";

const Quote = () => {
    const [quote, setQuote] = useState("");
    const [author, setAuthor] = useState("");
    const [loading, setLoading] = useState(false);
    // Fetch a new quote from the API
    const fetchQuote = async () => {
        setLoading(true); // Show loader while fetching
        setQuote(""); // Clear previous quote
        setAuthor(""); // Clear previous author
        const url = 'https://quotes85.p.rapidapi.com/keyword?word=success';
        const options = {
            method: 'GET',
            headers: {
                'x-rapidapi-key': import.meta.env.VITE_API_KEY,
                'x-rapidapi-host': import.meta.env.VITE_HOST,
            }
        };

        try {
            const response = await fetch(url, options);
            const result = await response.json(); // Parse the response to JSON

            if (result && Array.isArray(result)) {
                const randomQuote = result[Math.floor(Math.random() * result.length)];
                const [quoteText, authorText] = randomQuote.split(" - ");
                setQuote(quoteText);
                setAuthor(authorText || "Unknown Author");
            } else {
                setQuote("No quote found.");
                setAuthor(""); // Ensure author is cleared when no quote is found
            }
        } catch (error) {
            setQuote("Failed to fetch quote. Please try again.");
            setAuthor(""); // Ensure author is cleared in case of an error
        } finally {
            setLoading(false);
        }
    };


    return (
        <div id="quote" className="bg-bluee min-h-[25rem] text-white py-8 px-16">
            <div className="relative flex items-center gap-2 pt-14">
                <div className="w-5 h-1 bg-pair"></div>
                <div className="text-xl font-medium">Quote</div>
                <div className="absolute -left-10 top-0 opacity-5 text-[4.5rem] font-bold tracking-wider">
                    Positive Quote
                </div>
            </div>

            <div className="pt-5">
                {loading ? (
                    <div className="text-2xl font-medium text-center animate-pulse">
                        Generating...
                    </div>
                ) : (
                    <p className="text-3xl font-medium tracking-wide">
                        {quote || "Success is not final, failure is not fatal: It is the courage to continue that counts."}
                    </p>
                )}
                {(
                  author &&  <p className="mt-2 text-xl font-light text-right"> - {author}</p>
                )}
            </div>

            <div className="pt-5 text-center">

                <button
                    onClick={fetchQuote}
                    className="flex justify-center gap-2 items-center mx-auto shadow-xl text-lg backdrop-blur-md lg:font-semibold isolation-auto bg-white text-gray-950 before:absolute before:w-full before:transition-all before:duration-700 before:hover:w-full before:-left-full before:hover:left-0 before:rounded-full before:bg-pair hover:text-gray-950 before:-z-10 before:aspect-square before:hover:scale-150 before:hover:duration-700 relative z-10 px-4 py-2 overflow-hidden rounded-full group"
                >
                    Generate
                    <svg
                        className="w-8 h-8 justify-end group-hover:rotate-90 group-hover:bg-bluee text-gray-200 ease-linear duration-300 rounded-full group-hover:border-none border border-gray-700 p-2 rotate-45"
                        viewBox="0 0 16 19"
                        xmlns="http://www.w3.org/2000/svg"
                    > <path
                        d="M7 18C7 18.5523 7.44772 19 8 19C8.55228 19 9 18.5523 9 18H7ZM8.70711 0.292893C8.31658 -0.0976311 7.68342 -0.0976311 7.29289 0.292893L0.928932 6.65685C0.538408 7.04738 0.538408 7.68054 0.928932 8.07107C1.31946 8.46159 1.95262 8.46159 2.34315 8.07107L8 2.41421L13.6569 8.07107C14.0474 8.46159 14.6805 8.46159 15.0711 8.07107C15.4616 7.68054 15.4616 7.04738 15.0711 6.65685L8.70711 0.292893ZM9 18L9 1H7L7 18H9Z"
                    ></path>
                    </svg>
                </button>
            </div>
        </div>
    )
}
export default Quote;



