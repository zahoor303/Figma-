export default function HeroSection() {
  return (
    <section
      className="h-screen bg-[#252B42] bg-cover flex flex-col items-center justify-center text-center px-4"
      style={{ backgroundImage: 'url(/images/hero-bg.jpg)' }}
    >
      {/* Title */}
      <h1 className="text-xl md:text-xl font-bold text-[#23A6F0] bg-[#252B42] mb-4">
        Welcome
      </h1>

      {/* Main Heading */}
      <p className="text-4xl md:text-6xl font-bold text-white mb-8 leading-tight">
        Selling on the <br /> internet like a pro
      </p>

      {/* Subtext */}
      <p className="text-base md:text-lg text-stone-100 mb-8 max-w-lg leading-relaxed">
        We know how large objects will act, but things on a <br /> small scale just do not act that way.
      </p>

      {/* Buttons */}
      <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
        <button className="bg-[#23A6F0] text-white py-2 px-6 rounded font-semibold">
          Get Quote Now
        </button>
        <button className="bg-transparent border border-[#23A6F0] text-[#23A6F0] py-2 px-6 rounded font-semibold">
          Learn More
        </button>
      </div>
    </section>
  );
}
