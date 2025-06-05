import Seal from './assets/seal.png';
import { useEffect, useState } from 'react';

const message =
  'Bring New Life to Your Home or Business with Our Professional Services!';

export default function About() {
  const [visibleLetters, setVisibleLetters] = useState(0);

  useEffect(() => {
    if (visibleLetters < message.length) {
      const timer = setTimeout(() => setVisibleLetters(visibleLetters + 1), 50);
      return () => clearTimeout(timer);
    }
  }, [visibleLetters, message.length]);

  return (
    <>
      <h1 className="text-2xl font-bold text-center m-4">About Us</h1>
      <div className="w-full max-w-5xl mx-auto mb-8 flex flex-col md:flex-row">
        {/* Left column: main content */}
        <div className="w-full md:w-2/3">
          <div className="flex flex-col items-center justify-center my-4 max-h-[33vh] max-w-screen">
            <img src={Seal} className="max-h-[25vh] w-auto object-contain" />
          </div>
          <div className="text-center text-lg font-semibold text-secondary m-2 md:min-h-[2rem] min-h-[4rem]">
            {message.slice(0, visibleLetters)}
          </div>
          <div className="card border-2 border-accent-content bg-neutral-content w-11/12 max-w-xl mx-auto shadow-sm transition-transform duration-200 hover:scale-105 hover:shadow-lg my-2">
            <div className="text-md font-semibold mt-4 mb-1 mx-8">
              Together, for the past 10 years, we have had the opportunity to
              serve numerous clients in Windsor-Essex County. The majority of
              our work is focused on restoring your home or business to its
              original condition.
            </div>
            <div className="text-md font-semibold m-1 mx-8">
              Your property is one of the biggest investments you'll make in
              your life, and far too often, we see these investments depreciate
              in value. At RR, we take pride in helping our clients restore and
              protect their investments.
            </div>
            <div className="text-md font-semibold mt-1 mb-4 mx-8">
              If you're interested in what we can do for your property, please
              contact us for a free estimate.
            </div>
          </div>
        </div>
        <div className="w-full md:w-1/3 flex flex-col items-center min-h-[60vh]">
          <div className="card bg-base-200 border-2 border-accent-content shadow-sm transition-transform duration-200 hover:scale-105 hover:shadow-lg mb-4 w-11/12 h-full">
            <h1 className="text-l font-bold text-center m-4">Ryan Patterson</h1>
            <a
              href="tel:15199651547"
              className="text-md font-semibold text-left mx-4 block md:text-accent-content text-primary"
            >
              Phone: <span className="text-secondary">(519) 965-1547</span>
            </a>
          </div>
          <div className="card bg-base-200 border-2 border-accent-content shadow-sm transition-transform duration-200 hover:scale-105 hover:shadow-lg mb-4 w-11/12 h-full">
            <h1 className="text-l font-bold text-center m-4">Ryan Sterling</h1>
            <a
              href="tel:15195665065"
              className="text-md font-semibold text-left mx-4 block md:text-accent-content text-primary"
            >
              Phone: <span className="text-secondary">(519) 566-5065</span>
            </a>
          </div>
          <button className="btn btn-primary  border-2 border-accent-content shadow-sm transition-transform duration-200 hover:scale-105 hover:shadow-lg  text-white w-11/12 self-center mt-2 mb-4">
            Fill out a Request Form to get started!
          </button>
        </div>
      </div>
    </>
  );
}
