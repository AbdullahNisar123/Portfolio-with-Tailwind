const IntroSection = () => {
  return (
    <section
      id="intro"
      className="bg-[#151515] bg-cover bg-fixed bg-center-bottom bg-no-repeat w-full h-full min-h-[720px] flex relative text-center"
      style={{ backgroundImage: "url('/images/bgg.jpg')" }}
    >
      <div className="absolute top-0 left-0 w-full h-full bg-[#111111] opacity-75"></div>

      <div className="flex flex-col justify-center items-center text-center transform -translate-y-8 w-[100%]">
        <h5 className="text-[#cc005f] font-bold text-[1.6rem] md:text-[2.3rem] leading-[1.865] mb-[.3rem] md:mb-0 uppercase tracking-[.2rem] md:tracking-[0.3rem]">
          Hello, World.
        </h5>
        <h1
          className={`text-white font-bold text-[4.6rem] md:text-[8.4rem] leading-[1.071] max-w-[900px] mx-auto mb-[0.6rem] text-center shadow-[0_0_20px_rgba(0,0,0,0.5)]`}
        >
          I<span style={{ color: "#cc005f" }}>{"'"}</span>m Abdullah
          <span style={{ color: "#cc005f" }}>.</span>
        </h1>

        <h1 className="typing-text"></h1>

        <a
          className="button inline-flex items-center text-[1.3rem] font-bold uppercase tracking-[0.25rem] h-[6rem] leading-[4.8rem] px-[3.5rem] pl-[3rem] mt-[0.6rem] mb-[1.2rem] m-[0.3rem] bg-transparent text-white no-underline cursor-pointer text-center whitespace-nowrap border-[3px] border-[#313131] transition-all duration-300 ease-in-out hover:border-[#cc005f] focus:border-[#cc005f]"
          href="https://github.com/AbdullahNisar123"
        >
          More About Me
        </a>
      </div>

      <ul className="block absolute w-full left-0 bottom-[7.2rem] text-[3.3rem] m-0 p-0">
        <li className="inline-block mx-[20px]">
          <a
            href="https://github.com/AbdullahNisar123"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-[#cc005f]"
          >
            <i className="fab fa-linkedin text-[2rem]"></i>
          </a>
        </li>
        <li className="inline-block mx-[20px]">
          <a
            href="https://www.instagram.com/its_me_abdullah976/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-[#cc005f]"
          >
            <i className="fab fa-instagram text-[2rem]"></i>
          </a>
        </li>
        <li className="inline-block mx-[20px]">
          <a
            href="https://github.com/AbdullahNisar123"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-[#cc005f]"
          >
            <i className="fab fa-github text-[2rem]"></i>
          </a>
        </li>
        <li className="inline-block mx-[20px]">
          <a
            href="https://github.com/AbdullahNisar123"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-[#cc005f]"
          >
            <i className="fab fa-youtube text-[2rem]"></i>
          </a>
        </li>
      </ul>
    </section>
  );
};

export default IntroSection;

// export default function IntroSection(){
//   return(
//     <section id="intro" className="bg-[#151515] bg-cover bg-fixed bg-center-bottom bg-no-repeat w-full h-full min-h-[720px] flex relative text-center"
//     style={{ backgroundImage: "url('/images/bgg.jpg')" }}
//     >
//       <div className={`absolute top-0 left-0 w-full h-full bg-[#111111] opacity-75`}></div>

//       <div className={`table-cell align-middle text-center -translate-y-[2.1rem] transformtable-cell align-middle text-center -translate-y-[2.1rem] transform`}>
//         <div className={`bg-[#151515]`}>
//           <div className={`bg-[#151515]`}>
//             <h5 className="text-[#cc005f] font-bold text-[2.3rem] leading-[1.565] mb-0 uppercase tracking-[0.3rem] shadow-[0_0_6px_rgba(0,0,0,0.2)]">Hello{","} World{"."}</h5>
//             <h1 className={`text-white font-medium text-[8.4rem] leading-[1.071] max-w-[900px] mx-auto mb-[0.6rem] text-center shadow-[0_0_20px_rgba(0,0,0,0.5)]`}>
//               I<span style={{ color: "#cc005f" }}>{"'"}</span>m Abdullah
//               <span style={{ color: "#cc005f" }}>{"."}</span>
//             </h1>

//             <h1 className={`bg-[#151515]`}></h1>
//             {/* <script src="./typing-text/dist/script.js"></script> */}

//             <a
//               className={`button text-lg font-bold relative inline-flex items-center bg-transparent border-[3px] border-[#313131] leading-[4.8rem] hover:bg-[#cc005f] focus:border-[#cc005f]`}
//               href="#about"
//               title=""
//             >
//               More About Me
//             </a>
//           </div>
//         </div>
//       </div>

//       <ul className={`bg-[#151515]`}>
//         <li>
//           <a
//             href="./coming-soon/Iinkedin/index.html"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             <i className={`fab fa-linkedin`}></i>
//           </a>
//         </li>
//         <li>
//           <a
//             href="https://www.instagram.com/its_me_abdullah976/"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             <i className={`fab fa-instagram`}></i>
//           </a>
//         </li>
//         <li>
//           <a
//             href="https://github.com/AbdullahNisar123"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             <i className={`fab fa-github`}></i>
//           </a>
//         </li>
//         <li>
//           <a
//             href="./coming-soon/Youtube/index.html"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             <i className={`fab fa-youtube`}></i>
//           </a>
//         </li>
//       </ul>
//     </section>
//   )
// }
