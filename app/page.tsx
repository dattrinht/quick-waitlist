"use client";
import EmailForm from "@/components/EmailForm";
import {Tag} from "lucide-react";
import {Dancing_Script} from "next/font/google";

const dancingScript = Dancing_Script({
  subsets: ["latin"],
  weight: "400"
});

export default function Home() {
  return (
    <div className="flex flex-col items-center">
      <div className="flex items-center gap-2 bg-gray-200 text-black px-4 py-2 rounded-full">
        <Tag
          size={20}
          strokeWidth={2}
          aria-hidden="true"
        />
        <p className="text-md">New Feature</p>
      </div>

      <div>
        <h1
          className="relative top-0 w-fit h-auto py-4 justify-center flex bg-gradient-to-r items-center from-white via-blue-200 to-blue-500 bg-clip-text text-6xl font-extrabold text-transparent text-center select-auto">
          Coming Soon
        </h1>
      </div>

      <div
        className="flex flex-col items-center gap-5 bg-gray-100 rounded-md bg-clip-padding backdrop-filter backdrop-blur-xl bg-opacity-60 px-10 py-10">
        <h1 className="text-white text-center text-2xl sm:text-4xl">
          <span>Good things come <br/> to those <span className={dancingScript.className}>who wait</span></span>
        </h1>
        <p className="text-white text-center text-sm sm:text-base">We Send Email Inc. is an all AI-powered platform that helps
          you <br/> spread your news via emails in a <b className="font-bold">clean</b>, <b
            className="font-bold">clear</b>, <b className="font-bold">fast</b>, <b className="font-bold">dynamic</b> and <b className="font-bold">secure</b> way.</p>
        <p className="text-white text-center text-sm sm:text-base"><b className="font-bold">Sign up</b> to get notified when we
          officially launch and <br className="hidden sm:block"/> have access to
          all the exciting perks and offers.</p>
        <EmailForm/>
      </div>

    </div>
  );
}
