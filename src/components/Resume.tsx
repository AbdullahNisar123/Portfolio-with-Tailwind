import React from "react";

const Resume = () => {
  return (
    <section id="resume" className="bg-gray-200 py-24">
      <div className="flex flex-col items-center mx-auto mb-[3.6rem] w-[94%] max-w-[1140px] mx-auto">
        <div className="text-center">
          <h5 className="text-[#FF0077] text-[1.6rem] leading-[1.875] m-0 mb-[0.3rem] tracking-[0.4rem] font-bold">Resume</h5>
          <h2 className="text-[2.4rem] leading-[1.25] m-0 mb-[2.1rem] text-[#313131] font-bold">More of my Credentials</h2>
        </div>
      </div>

      <div className="w-[94%] max-w-[1140px] mx-auto relative">
        <div className="text-center px-[15px] lg:px-[20px]">
          <h2 className="text-[#FF0077] mt-0 font-[2.4rem] leading-[1.25] mb-[2.1rem] font-bold">Education</h2>
        </div>

        <div className="max-w-full px-[15px] lg:px-[20px]">
          <div className="timelinewrap relative mt-[1.5rem] mb-[6rem]">

            <div className="relative pt-[1.5rem]">
              <div className="h-[3.6rem] lg:h-[4.8rem] lg:w-[4.8rem] w-[3.6rem] lg:leading-[4.8rem] leading-[3.6rem] bg-[#313131] rounded-full text-center text-white absolute left-[1.8rem] lg:left-[38%] top-[.9rem] lg:ml-[-2.4rem] ml-[-1.8rem] text-[1.5rem]">
                <i className="fa fa-briefcase"></i>
              </div>
              <div className="lg:float-left float-none w-auto lg:w-[38%] lg:pr-[80px] lg:pl-0 text-left lg:text-right pl-[5.5rem] md:pl-[7rem] pr-[15px]">
                <h3 className="text-[2rem] m-0 leading-[1.5] font-bold">Secondary Schooling</h3>
                <p className="text-[#888888] text-[1.6rem] mb-[3rem] mt-0">2023 - Present (2024)</p>
              </div>
              <div className="m-0 lg:ml-[38%] lg:pl-[40px] pl-[5.5rem] md:pl-[7rem] lg:pl-[5.5rem]">
                <h4 className="underlines relative pb-[1.8rem] mt-0 text-[1.7rem] leading-[1.5] font-bold">
                  <a href="#" className="text[#313131] hover:text-pink-500">
                    Govt Degree College Surjani Town
                  </a>
                </h4>
                <p>
                  Completed my Secondary Schooling at Govt Degree College Surjani Town through Karachi Board.
                </p>
              </div>
            </div>

            <div className="relative pt-[1.5rem]">
              <div className="h-[3.6rem] lg:h-[4.8rem] lg:w-[4.8rem] w-[3.6rem] lg:leading-[4.8rem] leading-[3.6rem] bg-[#313131] rounded-full text-center text-white absolute left-[1.8rem] lg:left-[38%] top-[.9rem] lg:ml-[-2.4rem] ml-[-1.8rem] text-[1.5rem]">
                <i className="fa fa-briefcase"></i>
              </div>
              <div className="lg:float-left float-none w-auto lg:w-[38%] lg:pr-[80px] lg:pl-0 text-left lg:text-right pl-[5.5rem] md:pl-[7rem] pr-[15px]">
                <h3 className="text-[2rem] m-0 leading-[1.5] font-bold">Primary Schooling</h3>
                <p className="text-[#888888] text-[1.6rem] mb-[3rem] mt-0">July 2018 - 2022</p>
              </div>
              <div className="m-0 lg:ml-[38%] lg:pl-[40px] pl-[5.5rem] md:pl-[7rem] lg:pl-[5.5rem]">
                <h4 className="underlines relative pb-[1.8rem] mt-0 text-[1.7rem] leading-[1.5] font-bold">
                  <a href="#" className="text[#313131] hover:text-pink-500">
                    Gulistan Shah Abdul Latif School
                  </a>
                </h4>
                <p>
                  Completed my Primary Schooling at Gulistan Shah Abdul Latif School through Karachi Board.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resume;
