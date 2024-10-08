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
import { ArrowDownIcon } from "@heroicons/react/16/solid";
import Link from "next/link";
const data = {
  title: "Cara Installasi Aplikasi",
  desc: "Ikuti step step yang tersedia pada device anda",
  bullets: [
    {
      title: "Klik File",
      desc: "Klik file yang telah di download pada device anda",
      icon: <DevicePhoneMobileIcon />,
    },
    {
      title: "Tekan Setuju",
      desc: "Tekan tombol setuju untuk melanjutkan proses instalasi",
      icon: <AdjustmentsHorizontalIcon />,
    },
  ],
};
export default function Home() {
  return (
    <Container>
      <Container className="flex flex-wrap mb-20 lg:gap-10 lg:flex-nowrap ">
        <div className={`flex items-center justify-center w-full lg:w-1/2 `}>
          <div className="border-solid border-[1px] p-5 rounded-xl border-primary ">
          <table className="table-fixed">
  <thead className="text-left">
    <tr>
      <th className="w-32 ">Versi App</th>
      <th className="w-32">Platform</th>
      <th></th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>v.0.0.1 (Alpha)</td>
      <td>Android</td>
      <td>
        <a href="https://drive.google.com/drive/folders/1Taaxv23BE5zNDwcwfzAOoKEOshaClq4X?usp=sharing" className="flex items-center justify-center flex-shrink-0 mt-1 text-primary hover:bg-primary hover:text-white focus:border-5 focus:border-green-300  border-2 border-primary rounded-md w-11 h-11">
          <ArrowDownIcon className="w-5" />
        </a>
        </td>
    </tr>
  </tbody>
</table>
          </div>
        </div>

        <div
          className={`flex flex-wrap items-center w-full lg:w-1/2 lg:justify-end`}
        >
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
