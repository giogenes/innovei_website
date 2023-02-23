import React from "react";

import reverseLogistics from "../../res/reverse_logistics.jpg";
import productRepair from "../../res/product_repair.jpg";
import engineeringSupport from "../../res/engineering_support.jpg";
import customerService from "../../res/customer_service.jpg";
import warehousingServices from "../../res/warehousing.jpg";

/*
<div className="w-screen">
        <div className="w-15/16 2xl:w-13/16 mx-auto md:pl-10 ">
          <div className="flex flex-col-reverse md:flex-row px-10 md:px-0">
            <div className="flex-1 pb-10">
              <h1 className="text-gray-800 pl-10 md:pl-0 font-bold text-5xl pb-10 pt-20 hidden md:block">
                TITLE
              </h1>
              <p>
              </p>
              <ol className="list-disc pl-10 pt-10">
                <li>
                  LIST ITEM
                </li>
              </ol>
            </div>
            <div className="flex-1 my-auto md:px-20 py-10">
              <img src={imageRef} alt="desc" />
            </div>
            <h1 className="text-gray-800 font-bold text-5xl pt-20 block md:hidden">
              TITLE
            </h1>
          </div>
        </div>
      </div>
 */

function Services() {
  return (
    <div>
      <div className="w-screen">
        <div className="w-15/16 2xl:w-13/16 mx-auto md:pl-10 ">
          <div className="flex flex-col-reverse md:flex-row px-10 md:px-0">
            <div className="flex-1 pb-10">
              <h1 className="text-gray-800 pl-10 md:pl-0 font-bold text-5xl pb-10 pt-20 hidden md:block">
                Reverse Logistics
              </h1>
              <p>
                Innovei International receives from, and distributions to,
                locations all over the world. Product that comes into the
                receiving depot may be shipped into Innovei’s repair facility as
                promptly as it comes in, or it may be stored and metered via a
                pre-established volume agreement. Metering of product into the
                repair center is calculated to meet customer turn-around-time
                requirements. All products are scanned into the shop floor
                control system and are verified for data integrity. Some of the
                data integrity tests perform: date code extractions for
                time-in-use versus warranty term limits, failure code
                extractions for engineering analysis requirements, and other
                data extraction for special tracking requirements and warranty
                void conditions. All non-conforming matters are communicated to
                customers immediately and targeted for resolution within four
                hours.
              </p>
              <br />
              <p>
                Repaired product may be shipped back to the end user directly
                from our distribution depot as promptly as it comes out of the
                repair center or it may be stored and be used to replace product
                as needed. The receiving, tracking, and shipping system allows
                for shipping “same-for-same” and/or “like-for-like” depending on
                customer need. In addition, our logistics system is able to link
                to and extract our customers’ end-customer address tables and
                automatically fill in carrier databases to eliminate the
                probability of shipping product to the wrong location. All
                products are shipped in customer specified packaging with
                accompanying paperwork and labeling.
              </p>
              <ol className="list-disc pl-10 pt-10">
                <li>
                  Receiving from, and distribution to, global destinations
                </li>
                <li>
                  Quick pass through to repair, or metered at pre-established
                  quantities
                </li>
                <li> Scanned and automated tracking</li>
                <li>
                  “Same-for-Same” or “Like-for-Like” processing capabilities
                </li>
                <li>Onsite warehousing services available</li>
                <li>
                  In-coming product and associated data verification and
                  validation
                </li>
              </ol>
            </div>
            <div className="flex-1 my-auto md:px-20 py-10">
              <img src={reverseLogistics} alt="reverse logistics" />
            </div>
            <h1 className="text-gray-800 font-bold text-5xl pt-20 block md:hidden">
              Reverse Logistics
            </h1>
          </div>
        </div>
      </div>

      <div className="w-screen bg-gray-100">
        <div className="w-15/16 2xl:w-13/16 mx-auto md:pl-10 ">
          <div className="flex flex-col-reverse md:flex-row px-10 md:px-0">
            <div className="flex-1 pb-10">
              <h1 className="text-gray-800 pl-10 md:pl-0 font-bold text-5xl pb-10 pt-20 hidden md:block">
                Product Repair
              </h1>
              <p>
                At Innovei International, we understand that each business
                customer has different needs. We are here to develop a
                customized solution for you. Our services utilize our
                competencies in repair, engineering, and lean manufacturing
                processes to provide world-class solutions by adding value to
                your complete value chain.
              </p>
              <ol className="list-disc pl-10 pt-10">
                <li>Repair</li>
                <li>Rework</li>
                <li>Refurbishment</li>
                <li>Remanufacture</li>
                <li>Customer Tailored Configuration</li>
                <li>Onsite warehousing services available</li>
                <li>Packaging</li>
                <li>Final Assembly</li>
                <li>Subassembly</li>
              </ol>
            </div>
            <div className="flex-1 my-auto md:px-20 py-10">
              <img src={productRepair} alt="product repair" />
            </div>
            <h1 className="text-gray-800 font-bold text-5xl pt-20 block md:hidden">
              Product Repair
            </h1>
          </div>
        </div>
      </div>

      <div className="w-screen">
        <div className="w-15/16 2xl:w-13/16 mx-auto md:pl-10 ">
          <div className="flex flex-col-reverse md:flex-row px-10 md:px-0">
            <div className="flex-1 pb-10">
              <h1 className="text-gray-800 pl-10 md:pl-0 font-bold text-5xl pb-10 pt-20 hidden md:block">
                Engineering Support
              </h1>
              <p className="font-semibold">Repair Rework and Remanufacture</p>
              <p className="pb-5">
                The fully staffed engineering group with experience in Design,
                Manufacturing, Process Improvement, Test, and Quality has the
                goal of continuously improving our customer service to meet your
                needs.
              </p>
              <p className="font-semibold"> Testing</p>
              <p className="pb-5">
                Innovei International can provide a full range of testing
                services for your products. Whether we develop our own testing
                strategy to meet your specification requirements or implement
                your developed plan, our end goal is to ensure that your product
                reliability is achieved.
              </p>
              <p className="pb-5">
                To this end, we are fully equipped with a diverse allotment of
                test and troubleshooting equipment, and have the experience to
                successfully phase in and maintain custom product test hardware
                and software.
              </p>
              <p className="font-semibold"> Inspection</p>
              <p className="pb-5">
                We are committed to achieve zero-defects and as such focus on
                continuous improvements through process control techniques. In
                addition, we inspect our work to IPC-A-610C workmanship
                standards and customer specific standards.
              </p>
              <ol className="list-disc pl-10 pt-10">
                <li>Burn-in</li>
                <li>
                  Temperature chamber cycling for passive and active burn-in
                </li>
                <li> Failure Analysis</li>
                <li>Repair History</li>
                <li>Data feedback of failure defects</li>
                <li>Consulting on Design for Electronics Manufacturing</li>
              </ol>
            </div>
            <div className="flex-1 my-auto md:px-20 py-10">
              <img src={engineeringSupport} alt="engineering support" />
            </div>
            <h1 className="text-gray-800 font-bold text-5xl pt-20 block md:hidden">
              Engineering Support
            </h1>
          </div>
        </div>
      </div>

      <div className="w-screen bg-gray-100">
        <div className="w-15/16 2xl:w-13/16 mx-auto md:pl-10 ">
          <div className="flex flex-col-reverse md:flex-row px-10 md:px-0">
            <div className="flex-1 pb-10">
              <h1 className="text-gray-800 pl-10 md:pl-0 font-bold text-5xl pb-10 pt-20 hidden md:block">
                Customer Service
              </h1>
              <p>
                Our operational flexibility extends to our customer service. We
                are here to develop a customized solution for you. Through
                integrity, Innovei International values a relentless pursuit for
                customer satisfaction by developing trust and delivering on its
                commitments.
              </p>
              <ol className="list-disc pl-10 pt-10">
                <li>Shop-floor control database system</li>
                <li>
                  Customer tailored Internet based job status accessibility
                </li>
                <li>Automated Reverse Logistics Management</li>
                <li>
                  Capability to receive and/or ship directly from and to
                  customer's end customer
                </li>
                <li>
                  Supply Chain Management for consigned or full turn-key raw
                  materials
                </li>
              </ol>
            </div>
            <div className="flex-1 my-auto md:px-20 py-10">
              <img src={customerService} alt="customer service" />
            </div>
            <h1 className="text-gray-800 font-bold text-5xl pt-20 block md:hidden">
              Customer Service
            </h1>
          </div>
        </div>
      </div>

      <div className="w-screen">
        <div className="w-15/16 2xl:w-13/16 mx-auto md:pl-10 ">
          <div className="flex flex-col-reverse md:flex-row px-10 md:px-0">
            <div className="flex-1 pb-10">
              <h1 className="text-gray-800 pl-10 md:pl-0 font-bold text-5xl pb-10 pt-20 hidden md:block">
                Warehousing Services
              </h1>
              <p className="pb-5">
                Innovei International is able to provide both consigned
                inventory and full turn-key solutions and has a fully staffed
                material purchasing and control group able to find materials
                through distribution or in obsolete material markets. All raw
                materials are tracked through a fully integrated Enterprise
                level MRP system while all repair units are tracked via a shop
                floor control system. Innovei purchases materials to accommodate
                product volume peaks and valleys which are customary in the
                repair service industry. Innovei also has a fully staffed
                customs group able to import/export raw materials and product
                needing repair from and to the US, Mexico, Canada, South
                America, Asia and Europe.
              </p>
              <p className="font-semibold"> Warehousing and Distribution</p>
              <p className="pb-5">
                Materials ManagementInnovei has quick access to additional
                warehouse space that can be used to provide you with solutions
                to your warehousing and distribution needs. Our central location
                in North America, which is in the manufacturing hub of El
                Paso/Juarez, creates a strategic staging area for distribution
                into the USA. We are capable of offering you a warehousing and
                distribution solution for your just-in-time logistics, staging,
                and domestic and international distribution needs. Innovei is
                committed to offering you the best solution that can be obtained
                through either your designated product transportation carriers
                or ours.
              </p>
              <p className="font-semibold"> Shelter Operations</p>
              <p className="pb-5">
                No matter the size of your business, Innovei can help you obtain
                presence in Mexico. Our bilingual and bicultural experiences in
                this matter, allow us to help you obtain your business goals.
                Whether you are looking for contract services, a stand alone
                shelter operation, a joint venture, or another business model,
                we can help. Contact us for more information.
              </p>
            </div>
            <div className="flex-1 my-auto md:px-20 py-10">
              <img src={warehousingServices} alt="warehousing support" />
            </div>
            <h1 className="text-gray-800 font-bold text-5xl pt-20 block md:hidden">
              Warehousing Services
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Services;
