import React from "react";
import { Link } from "react-router-dom";

import aboutUs from "../../res/about_us.jpg";

function About() {
  return (
    <div>
      <p></p>

      <div className="w-screen">
        <div className="w-15/16 2xl:w-13/16 mx-auto md:pl-10">
          <div className="flex flex-col-reverse md:flex-row px-10 md:px-0">
            <div className="flex-1 pb-10">
              <h1 className="text-gray-800 pl-10 md:pl-0 font-bold text-5xl pb-10 pt-20 hidden md:block">
                About Us
              </h1>
              <p>
                Innovei Technologies was established in December 2004 in El Paso
                TX, with a primary focus of supplying business-to-business
                repair, rework, test and refurbishing services. Innovei creates
                partnerships with its customers by using its core competency in
                repair to lower their customers' OEM warranty liability costs
                and/or increase their extended warranty programs' profit rates.
              </p>
            </div>
            <div className="flex-1 md:px-20 py-10">
              <img src={aboutUs} alt="reverse logistics" className="" />
            </div>
            <h1 className="text-gray-800 font-bold text-5xl pt-20 block md:hidden">
              About Us
            </h1>
          </div>

          <div className="bg-gray-800 w-14/16 md:w-15/16 2xl:w-13/16 rounded-3xl mx-auto mb-24">
            <div className="flex flex-col-reverse md:flex-row h-full">
              <div className="flex-1 h-full">
                <div className="md:mt-0 my-auto flex flex-col justify-center h-full ml-10 mr-10 xl:ml-16 xl:mr-16 pb-10">
                  <h1 className=" text-gray-50 font-bold text-4xl md:text-6xl mb-5 pt-10">
                    Ready to Get Started?
                  </h1>
                  <p className=" text-gray-300 font-light text-lg mb-10">
                    As a premier repair, customer service, and logistics service
                    provider, we are dedicated to the{" "}
                    <span className="font-semibold text-xl text-red-400">
                      best services
                    </span>{" "}
                    in support of In-Warranty and Out-of-Warranty{" "}
                    <span className="font-semibold text-xl text-red-400">
                      repair
                    </span>{" "}
                    and{" "}
                    <span className="font-semibold text-xl text-red-400">
                      support
                    </span>{" "}
                    needs.
                  </p>

                  <button className="w-1/2 md:w-1/4 border border-gray-200 rounded-md hover:bg-gray-200">
                    <Link to="/contact-us">
                      <h3 className="py-4 font-semibold text-white text-base hover:text-gray-800">
                        Get Started
                      </h3>
                    </Link>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
