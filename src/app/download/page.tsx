import { Container } from "@/components/Container";
import { Hero } from "@/components/Hero";
import { SectionTitle } from "@/components/SectionTitle";
import { Benefits } from "@/components/Benefits";
import { Video } from "@/components/Video";
import { Testimonials } from "@/components/Testimonials";
import { Faq } from "@/components/Faq";
import { Cta } from "@/components/Cta";

import { benefitOne, benefitTwo } from "@/components/data";
import React from "react";
import DevicePhoneMobileIcon from "@heroicons/react/24/outline/esm/DevicePhoneMobileIcon";
import AdjustmentsHorizontalIcon from "@heroicons/react/24/solid/esm/AdjustmentsHorizontalIcon";
const data = {
  title: "Cara Installasi Aplikasi",
  desc: "You can use this same layout with a flip image to highlight your rest of the benefits of your product. It can also contain an image or Illustration as above section along with some bullet points.",
  bullets: [
    {
      title: "Klik File",
      desc: "Kembangkan Brand Awareness Perusahaan dalam Mendukung Sustainablity",
      icon: <DevicePhoneMobileIcon />,
    },
    {
      title: "Tekan Setuju",
      desc: "Dapatkan Kain sesuai kebutuhan, dan pasarkan produkmu lebih jauh",
      icon: <AdjustmentsHorizontalIcon />,
    },
  ],
};
export default function Home() {
  return (
    <Container>
      <Container className="flex flex-wrap mb-20 lg:gap-10 lg:flex-nowrap ">
        <div
          className={`flex items-center justify-center w-full lg:w-1/2 `}>
          <div>
            {/* Tempat untuk download */}
          </div>
        </div>

        <div
          className={`flex flex-wrap items-center w-full lg:w-1/2 lg:justify-end`}>
          <div>
            <div className="flex flex-col w-full mt-4">
              <h3 className="max-w-2xl mt-3 text-3xl font-bold leading-snug tracking-tight text-gray-800 lg:leading-tight lg:text-4xl dark:text-white">
                {data.title}
              </h3>

              <p className="max-w-2xl py-4 text-lg leading-normal text-gray-500 lg:text-xl xl:text-xl dark:text-gray-300">
                {data.desc}
              </p>
            </div>

            <div className="w-full mt-5">
              {data.bullets.map((item, index) => (
                <Benefit key={index} title={item.title} icon={item.icon}>
                  {item.desc}
                </Benefit>
              ))}
            </div>
          </div>
        </div>
      </Container>

    </Container>
  );
  function Benefit(props: any) {
    return (
        <div className="flex items-start mt-8 space-x-3">
          <div className="flex items-center justify-center flex-shrink-0 mt-1 bg-primary rounded-md w-11 h-11 ">
            {React.cloneElement(props.icon, {
              className: "w-7 h-7 text-indigo-50",
            })}
          </div>
          <div>
            <h4 className="text-xl font-medium text-gray-800 dark:text-gray-200">
              {props.title}
            </h4>
            <p className="mt-1 text-gray-500 dark:text-gray-400">
              {props.children}
            </p>
          </div>
        </div>
    );
  }
  
}
