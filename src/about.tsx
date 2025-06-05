import Seal from './assets/seal.png';

export default function About() {
  return (
    <>
      {/* ...navbar is rendered by parent layout... */}
      <h1 className="text-2xl font-bold text-center m-4">About Us</h1>
      <div className="flex flex-col items-center justify-center my-4 max-h-[33vh] max-w-screen">
        <img src={Seal} className="max-h-[33vh] w-auto object-contain" />
      </div>
    </>
  );
}
