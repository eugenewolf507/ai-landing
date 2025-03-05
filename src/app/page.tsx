import Image from 'next/image';

import HeaderMedium from '@/components/HeaderMedium';
import HeaderSmall from '@/components/HeaderSmall';
import ChatGPT from '@/components/chatGpt';
import Claude from '@/components/claude';
import Kombai from '@/components/kombai';
import BuilderMob from '@/components/builder-mob';
import Builder from '@/components/builder-desk';
import { ThumbsUp, ThumbsDown } from 'lucide-react';

export default function Home() {
  return (
    <div className="bg-white px-6 pt-18 pb-24 lg:px-8">
      <h1 className="text-center text-5xl font-semibold tracking-tight text-gray-900 sm:text-7xl">
        Figma into Website layout with AI
      </h1>
      <p className="pt-6 text-pretty text-center text-lg font-medium text-gray-500 sm:text-xl/8">
        I took two options for AI from Figma: mobile sample and desktop.
        Let&#39;s see how AI can handle it.
        <br />
        All result code can be checked here -{'>'}{' '}
        <a
          href="https://github.com/eugenewolf507/ai-landing"
          className="underline"
        >
          https://github.com/eugenewolf507/ai-landing
        </a>
      </p>
      <p className="pt-2 pb-12 text-pretty text-center text-lg font-medium text-gray-500 sm:text-xl/8"></p>

      <HeaderMedium text="Mobile sample provided" />
      <div className="flex justify-between pb-6 pt-4">
        <div className="w-[375px] border-2 border-red-800 rounded-md  ">
          <HeaderSmall text="Figma sample" />
          <Image
            src="/Tokenomics_Mobile.png"
            alt="Initial layout"
            width={1125}
            height={5331}
            className="w-[375px] h-[1777px]"
          />
        </div>
        <div className="w-1/3  border-2 border-red-800 rounded-md ">
          <HeaderSmall text="Chat Gpt result" />

          <p className="px-6 pb-6 text-pretty text-start text-lg font-medium text-gray-500">
            Nah, Use only to get all texts.
            <br /> Not recommended for layout.
          </p>
          <ChatGPT />
        </div>
        <div className="w-1/3  border-2 border-red-800 rounded-md ">
          <HeaderSmall text="Claude result" />
          <p className="px-6 pb-6 text-pretty text-start text-lg font-medium text-gray-500">
            Same sort as GPT
            <br /> Not recommended for layout.
          </p>
          <Claude />
        </div>
      </div>
      <div className="flex justify-between pb-20">
        <div className="w-[375px] border-2 border-red-800 rounded-md">
          <HeaderSmall text="Figma sample" />
          <div className="h-[208px]"></div>
          <Image
            src="/Tokenomics_Mobile.png"
            alt="Initial layout"
            width={1125}
            height={5331}
            className="w-[375px] h-[1777px]"
          />
        </div>
        <div className="flex flex-col items-center w-1/3  border-2 border-red-800 rounded-md ">
          <HeaderSmall text="Kombai.com result" />
          <ul className="px-6 pb-6 w-full text-pretty text-lg text-start font-medium text-gray-500">
            <li className=" flex gap-4">
              <ThumbsUp className="text-green-700" />
              Super, super accurate
            </li>
            <li className="flex gap-4 pb-4">
              <ThumbsUp className="text-green-700" />
              React + Tailwind
            </li>
            <li className="flex gap-4">
              <ThumbsDown className="text-rose-700" />
              Nor responsive or adoptive
            </li>
            <li className="flex gap-4">
              <ThumbsDown className="text-rose-700" />A lot of work to make it
              adoptive
            </li>
            <li className="flex gap-4">
              <ThumbsDown className="text-rose-700" />A lot of small weird
              components
            </li>
            <li className="flex gap-4">
              <ThumbsDown className="text-rose-700" />
              Components are not reused
            </li>
          </ul>
          <Kombai />
        </div>
        <div className="w-1/3  border-2 border-red-800 rounded-md ">
          <HeaderSmall text="Builder.io result" />
          <ul className="px-6 pb-6 w-full text-pretty text-lg text-start font-medium text-gray-500">
            <li className=" flex gap-4">
              <ThumbsUp className="text-green-700" />
              Responsive and adoptive from one sample
            </li>
            <li className="flex gap-4">
              <ThumbsUp className="text-green-700" />
              React + Tailwind
            </li>
            <li className="flex gap-4 pb-4">
              <ThumbsUp className="text-green-700" />
              Can be used for fast prototyping
            </li>

            <li className="flex gap-4">
              <ThumbsDown className="text-rose-700" />
              Not accurate
            </li>
            <li className="flex gap-4">
              <ThumbsDown className="text-rose-700" />A lot of work to make it
              as in sample
            </li>
            <li className="flex gap-4">
              <ThumbsDown className="text-rose-700" />
              Components are not reused
            </li>
          </ul>
          <BuilderMob />
        </div>
      </div>

      <HeaderMedium text="Desktop sample provided" />
      <p className=" pb-6 text-pretty text-center text-lg font-medium text-gray-500 sm:text-xl/8">
        The example shows how Builder.io AI can handle desktop samples in both
        mobile and desktop layouts.
        <br />
        The benefits of Builder.io are listed higher.
      </p>
      <div className="flex justify-between gap-6 pb-6">
        <div className="w-2/3  border-2 border-red-800 rounded-md ">
          <HeaderSmall text="Figma sample" />
          <Image
            src="/Tokenomics_Desktop.png"
            alt="Initial layout"
            width={4320}
            height={5808}
            className=""
          />
        </div>
        <div className="w-1/3  border-2 border-red-800 rounded-md ">
          <HeaderSmall text="Builder.io mobile result" />
          <Builder />
        </div>
      </div>
      <div className="w-full  border-2 border-red-800 rounded-md ">
        <HeaderSmall text="Builder.io desktop result" />
        <Builder />
      </div>
    </div>
  );
}
