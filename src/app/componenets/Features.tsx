export default function Features() {
  return (
      <section className="bg-[#252B42] py-16 px-8 mx-auto max-w-15xl">
          <div className="grid grid-cols-3 gap-8">
              {/* Box 1 */}
              <div className="p-6 border  shadow-lg bg-white">
                  {/* Icon Box */}
                  <div className="w-12 h-12 bg-[#FFDCD1] rounded-md mb-4"></div>

                  {/* Title */}
                  <h3 className="text-lg font-semibold text-[#252B42] mb-2">Training Courses</h3>

                  {/* Divider Line */}
                  <div className="w-8 h-1 bg-red-500 mb-4"></div>

                  {/* Description */}
                  <p className="text-[#737373] text-sm">The gradual accumulation of information about atomic and small-scale behaviour...</p>
              </div>

              {/* Box 2 */}
              <div className="p-6 border  shadow-lg bg-white">
                  <div className="w-12 h-12 bg-[#B9EAA8] rounded-md mb-4"></div>
                  <h3 className="text-lg font-semibold text-[#252B42] mb-2">2,769 online courses</h3>
                  <div className="w-8 h-1 bg-red-500 mb-4"></div>
                  <p className="text-[#737373] text-sm">The gradual accumulation of information about atomic and small-scale behaviour...</p>
              </div>

              {/* Box 3 */}
              <div className="p-6 border  shadow-lg bg-[#23A6F0]">
                  <div className="w-12 h-12 bg-[#FFFFFF] rounded-md mb-4"></div>
                  <h3 className="text-lg font-semibold text-white mb-2">Training Courses</h3>
                  <div className="w-8 h-1 bg-white mb-4"></div>
                  <p className="text-white text-sm">The gradual accumulation of information about atomic and small-scale behaviour...</p>
              </div>
          </div>
      </section>
  );
}
