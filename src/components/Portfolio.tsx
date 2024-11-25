import React from "react";

const Portfolio = () => {
  const projects = [
    {
      title: "BMI Calculator",
      description:
        "The BMI Calculator is a TypeScript-based CLI tool that calculates Body Mass Index (BMI) using user inputs for height and weight. It provides health status feedback (Underweight, Healthy, Overweight) with color-coded results using Chalk, and features an interactive interface with Inquirer.",
      link: "https://github.com/AbdullahNisar123",
    },
    {
      title: "Rock-Paper-Scissors",
      description:
        "A classic Rock-Paper-Scissors game. It allows players to enter their name, choose between rock, paper, and scissors, and then compares their choice to a computer's random selection. The game displays the winner and offers the option to play again.",
      link: "https://github.com/AbdullahNisar123",
    },
    {
      title: "Number Guessing Game",
      description:
        "A number guessing game. The computer generates a random number, and the user is prompted to guess a number between 1 and 10. If the guess is correct, the game ends with a congratulatory message. Otherwise, the user receives feedback and can try again.",
      link: "https://github.com/AbdullahNisar123",
    },
    {
      title: "ATM",
      description:
        "This TypeScript code simulates a simple ATM with a CLI. Users can sign in with predefined credentials and perform actions like checking their balance, withdrawing cash, or using pre-defined 'Fast cash' amounts.",
      link: "https://github.com/AbdullahNisar123",
    },
    {
      title: "To-Do List",
      description:
        "A simple to-do list application where users can add tasks. The tasks are displayed until the user confirms they're done, after which the full list is shown.",
      link: "https://github.com/AbdullahNisar123",
    },
    {
      title: "Currency Converter",
      description:
        "A currency converter that lets users select currencies and enter amounts to convert. The app uses pre-defined exchange rates to calculate and display the converted amount.",
      link: "https://github.com/AbdullahNisar123",
    },
  ];
  return (
    <section className="bg-gray-900 text-white py-16 px-[2rem] md:px-4" id="projects">
      <h2 className="text-center text-[4rem] font-bold mt-[60px] mb-[30px] text-white
      ">
        My <span className="text-[#ff0077]">Projects</span>
      </h2>
      <div className="flex flex-wrap justify-center gap-[40px] ">
        {projects.map((project, index) => (
          <div
            key={index}
            className="relative border-2 border-[#ff0077] p-6 rounded-lg group w-[100%] md:w-[40%] h-[260px] overflow-hidden"
          >
            <div className="absolute inset-0 bg-[#ff0077] opacity-0 transition-opacity duration-300 group-hover:opacity-30"></div>
            <div className="relative z-1 ">
              <h3 className="text-[1.9rem] font-semibold text-[#ff0077] my-[20px]">
                {project.title}
              </h3>
              <p className="text-gray-200 text-[1.3rem] md:text-[1.5rem] mb-7 leading-[2.5rem] md:leading-[2.8rem] overflow-hidden">
                {project.description}
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white font-bold ml-2 transition-colors hover:text-black"
                >
                  Read More
                </a>
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Portfolio;
