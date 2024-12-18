"use client";
import { div } from "framer-motion/client";
import { GraduationCap, Link, ShieldCheck } from "lucide-react";
import Image from "next/image";
import { useState } from "react";
import CalendarContent from "./imagecalendar";
import { CardBody, CardContainer, CardItem } from "./ui/3d-card";

export default function Calendar() {
  const [activeTab, setActiveTab] = useState("sertifikasi");
  return (
    <>
      <p className="text-black text-[32px] text-center">Kalender Jadwal</p>
      <hr className="w-[30%] m-auto" />
      <div className="px-[132px] py-[40px]">
        <div className="flex items-center gap-[15px]">
          <button
            onClick={() => setActiveTab("sertifikasi")}
            className={`flex items-center justify-center p-4 rounded-t-[32px] transition-all duration-300 ${
              activeTab === "sertifikasi"
                ? "bg-[#252C4A] text-white w-[92%]"
                : "bg-gray-200 text-black w-[8%]"
            }`}
          >
            <div className="flex items-center gap-5 font-[600]">
              <ShieldCheck />
              {activeTab === "sertifikasi" && "SERTIFIKASI"}
            </div>
          </button>

          <button
            onClick={() => setActiveTab("seminar")}
            className={`flex items-center justify-center p-4 rounded-t-[32px] transition-all duration-300 ${
              activeTab === "seminar"
                ? "bg-[#252C4A] text-white w-[92%]"
                : "bg-gray-200 text-black w-[8%]"
            }`}
          >
            <div className="flex items-center gap-5 font-[600]">
              <GraduationCap />
              {activeTab === "seminar" && "SEMINAR"}
            </div>
          </button>
        </div>
        <div className="p-[46px] bg-[#E8E6E6] rounded-b-[32px] w-full">
          {activeTab === "seminar" && (
            <div className="flex gap-5">
              <CalendarContent />
              <CardContainer className="inter-var">
                <CardBody className="bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border  ">
                  <CardItem
                    translateZ="50"
                    className="text-xl font-bold text-neutral-600 dark:text-white"
                  >
                    Seminar blablabla
                  </CardItem>
                  <CardItem
                    as="p"
                    translateZ="60"
                    className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
                  >
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Doloremque numquam, dolorum consectetur possimus quae iste
                    accusantium ipsum sint unde neque fuga optio quidem.
                    Mollitia repellendus illo expedita libero possimus odit!
                  </CardItem>
                  <CardItem translateZ="100" className="w-full mt-4">
                    <Image
                      src={"/cardcalender.jpg"}
                      height="1000"
                      width="1000"
                      className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                      alt="thumbnail"
                    />
                  </CardItem>
                  <CardItem
                    translateZ={20}
                    as="button"
                    className="mt-5 px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold"
                  >
                    Lihat Selengkapnya
                  </CardItem>
                </CardBody>
              </CardContainer>
            </div>
          )}

          {activeTab === "sertifikasi" && (
            <div className="flex gap-5">
              <CardContainer className="inter-var">
                <CardBody className="bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border  ">
                  <CardItem
                    translateZ="50"
                    className="text-xl font-bold text-neutral-600 dark:text-white"
                  >
                    Sertifikasi blablabla
                  </CardItem>
                  <CardItem
                    as="p"
                    translateZ="60"
                    className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
                  >
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Doloremque numquam, dolorum consectetur possimus quae iste
                    accusantium ipsum sint unde neque fuga optio quidem.
                    Mollitia repellendus illo expedita libero possimus odit!
                  </CardItem>
                  <CardItem translateZ="100" className="w-full mt-4">
                    <Image
                      src={"/cardcalender.jpg"}
                      height="1000"
                      width="1000"
                      className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                      alt="thumbnail"
                    />
                  </CardItem>
                  <CardItem
                    translateZ={20}
                    as="button"
                    className="mt-5 px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold"
                  >
                    Lihat Selengkapnya
                  </CardItem>
                </CardBody>
              </CardContainer>
              <CalendarContent />
            </div>
          )}
        </div>
      </div>
    </>
  );
}
