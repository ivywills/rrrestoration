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
    <div className="w-full max-w-2xl mx-auto mb-8">
      <h1 className="text-2xl font-bold text-center m-4">About Us</h1>
      <div className="flex flex-col items-center justify-center my-4 max-h-[33vh] max-w-screen">
        <img src={Seal} className="max-h-[25vh] w-auto object-contain" />
      </div>
      <div className="text-center text-lg font-semibold text-secondary m-2 min-h-[2rem]">
        {message.slice(0, visibleLetters)}
      </div>
      <div className="card border-2 border-accent-content bg-base-100 w-full shadow-sm transition-transform duration-200 hover:scale-101 hover:shadow-lg">
        <div className="text-md font-semibold mt-4 mb-2 mx-4">
          Together, for the past 10 years, we have had the opportunity to serve
          numerous clients in Windsor-Essex County. The majority of our work is
          focused on restoring your home or business to its original condition.
        </div>
        <div className="text-md font-semibold m-2 mx-4">
          Your property is one of the biggest investments you'll make in your
          life, and far too often, we see these investments depreciate in value.
          At RR, we take pride in helping our clients restore and protect their
          investments.
        </div>
        <div className="text-md font-semibold mt-2 mb-4 mx-4">
          If you're interested in what we can do for your property, please
          contact us for a free estimate.
        </div>
      </div>
    </div>
  );
}
