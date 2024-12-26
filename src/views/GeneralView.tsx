import React from "react";
import flamingoImage from "../assets/archish_flamingo.png";
import headShot from "../assets/headshot.png";
import {
  HomeIcon,
  MapPinIcon,
  AcademicCapIcon,
  BriefcaseIcon,
} from "@heroicons/react/24/outline";
import { Tooltip } from "@material-tailwind/react";

function GeneralView() {
  return (
    <div>
      <div className="py-20 px-20 font-rasa text-2xl">
        <div className="flex items-center">
          <span className="hover:cursor-pointer font-medium text-2xl">
            <div
              onClick={() => (window.location.href = "/")}
              className="w-5 h-5 transition-colors delay-75 bg-gray-400 hover:bg-clip-border hover:text-transparent hover:bg-gradient-to-r  hover:from-red-500 hover:to-yellow-500"
            />
          </span>
          <img
            src={flamingoImage}
            className=" object-cover h-12 hover:cursor-pointer grayscale w-12 hover:grayscale-0"
          />
        </div>
        <div className=" sm:px-12">
          <div className="pt-10">
            <div>
              <div className="flex items-center">
                <div>
                  <img src={headShot} className="w-24 rounded-full" alt="" />
                </div>
                <div className="flex-0 ml-5">
                  <div className="hidden sm:block">
                    <div className="font-rasa text-4xl">archish arun</div>

                    <div className=" flex font-extralight font-dm text-gray-400">
                      <div className="flex text-sm">
                        <MapPinIcon className="w-4 mr-0.5 font-bold stroke-current stroke-2  text-gray-400" />
                        los altos, ca &nbsp;|| &nbsp;
                      </div>
                      <div className="flex text-sm">
                        <AcademicCapIcon className="font-bold w-4 mr-0.5 stroke-2  text-gray-400" />
                        stanford university
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="pt-10 lg:w-4/5 space-y-2">
            <div className="text-2xl">bio</div>
            <div className="text-sm font-dm">
              hey! my name is{" "}
              <Tooltip
                className="rounded-md bg-black text-white px-2 py-1"
                content={<div className=""> [ˈɑːʧɪʃ, "ar-cheesh"]</div>}
              >
                <span className="hover:cursor-pointer text-transparent underline bg-gradient-to-r bg-clip-text from-red-500 to-yellow-500">
                  archish
                </span>
              </Tooltip>
              , and i'm an college student studying computer science. after 2
              years of undergrad at nyu, i transferred to stanford and
              discovered a newfound interest in human-centric artificial
              intelligence and linguistics. i interned at paypal in the summers
              of 2022 and 2023, where i worked on cross-channel payments tools
              for large merchants and robotic testing automations. currently, i
              work at{" "}
              <Tooltip
                className="rounded-md bg-black text-white px-2 py-1"
                content={<div className="">https://holisticai.com</div>}
              >
                <a
                  href="https://holisticai.com"
                  target="_blank"
                  className="hover:cursor-pointer text-transparent underline bg-gradient-to-r bg-clip-text from-red-500 to-yellow-500"
                >
                  holistic ai
                </a>
              </Tooltip>
              , conducting research across a broad variety of AI applications.
              check out our recent paper on LLM hallucination mitigation{" "}
              <Tooltip
                className="rounded-md bg-black text-white px-2 py-1"
                content={
                  <div className="">
                    THaMES: An End-to-End Tool for Hallucination Mitigation and
                    Evaluation in LLMs
                  </div>
                }
              >
                <a
                  href="https://arxiv.org/abs/2409.11353"
                  target="_blank"
                  className="hover:cursor-pointer text-transparent underline bg-gradient-to-r bg-clip-text from-red-500 to-yellow-500"
                >
                  here
                </a>
              </Tooltip>
              !
            </div>
            <div className="text-sm font-dm pt-1">
              <span>
                i also make music! i've composed, produced, and released 13
                singles and 2 albums as part of pop/funk production team{" "}
                <Tooltip
                  className="rounded-md bg-black text-white px-2 py-1"
                  content={<div className="">https://52prime.com</div>}
                >
                  <a
                    href="https://52prime.com"
                    className=" hover:cursor-pointer text-transparent underline bg-gradient-to-r bg-clip-text from-red-500 to-yellow-500"
                  >
                    52prime
                  </a>
                </Tooltip>
                , as well as several compositions as a solo artist, available on{" "}
                <Tooltip
                  className="rounded-md bg-black text-white px-2 py-1"
                  content={
                    <div className="">
                      <span className="font-bold">archish arun </span>on spotify
                    </div>
                  }
                >
                  <a
                    href="https://open.spotify.com/artist/4f5hsDIno1YcAWvudVPyeu?si=NOZUlFIgTNOfe2Iz3Pe9Og"
                    target="_blank"
                    className=" hover:cursor-pointer text-transparent underline bg-gradient-to-r bg-clip-text from-red-500 to-yellow-500"
                  >
                    spotify
                  </a>
                </Tooltip>{" "}
                +{" "}
                <Tooltip
                  className="rounded-md bg-black text-white px-2 py-1"
                  content={
                    <div className="">
                      <div className="">
                        <span className="font-bold">archish arun </span>on apple
                        music
                      </div>
                    </div>
                  }
                >
                  <a
                    href="https://music.apple.com/us/artist/archish-arun/1631020076"
                    target="_blank"
                    className=" hover:cursor-pointer text-transparent underline bg-gradient-to-r bg-clip-text from-red-500 to-yellow-500"
                  >
                    apple music
                  </a>
                </Tooltip>
                , and wherever else people listen.
              </span>
            </div>
            <div className="pt-2">
              <div className="text-2xl">cool stuff:</div>
              <ul className="list-disc list-outside space-y-0 text-sm font-dm pt-1">
                <div className="px-5">
                  <li className="list-item text-gray-400">
                    <span>
                      {" "}
                      i co-founded{" "}
                      <Tooltip
                        className="rounded-md bg-black text-white px-2 py-1"
                        content={
                          <div className="">
                            <div className="">https://upsideapp.io</div>
                          </div>
                        }
                      >
                        <a
                          href="https://upside-landing-next-r34f.vercel.app/"
                          target="_blank"
                          className=" hover:cursor-pointer text-transparent underline bg-gradient-to-r bg-clip-text from-red-500 to-yellow-500"
                        >
                          upside,
                        </a>
                      </Tooltip>
                    </span>{" "}
                    an llm-powered second brain. backed by general catalyst
                    through rough draft ventures at a multi-million dollar
                    valuation.
                  </li>
                  <li className="pt-1 list-item text-gray-400">
                    here is a{" "}
                    <Tooltip
                      className="rounded-md bg-black text-white px-2 py-1"
                      content={
                        <div className="">
                          <div className="">
                            <span className="font-bold">performances</span>{" "}
                            (youtube playlist)
                          </div>
                        </div>
                      }
                    >
                      <a
                        href="https://www.youtube.com/watch?v=acpQSe8OUiA&list=PLMNm6DWa-B4rIOTQiMunqoU49_Gxw4Fyb&index=1"
                        target="_blank"
                        className=" hover:cursor-pointer text-transparent underline bg-gradient-to-r bg-clip-text from-red-500 to-yellow-500"
                      >
                        youtube playlist
                      </a>
                    </Tooltip>{" "}
                    of recent jazz/funk/pop/other performances. i'm mainly a
                    piano player, but working on my bass chops & expanding my
                    instrument arsenal!
                  </li>
                  <li className="pt-1 list-item text-gray-400">
                    in high school, a friend and i wrote a spoken word poem
                    about music's relevance. we{" "}
                    <Tooltip
                      className="rounded-md bg-black text-white px-2 py-1"
                      content={
                        <div className="">
                          <span>
                            <div className="font-bold">
                              purpose of music in changing times
                            </div>
                            (youtube)
                          </span>
                        </div>
                      }
                    >
                      <a
                        href="https://www.youtube.com/watch?v=ejxvZd45hVw"
                        target="_blank"
                        className=" hover:cursor-pointer text-transparent underline bg-gradient-to-r bg-clip-text from-red-500 to-yellow-500"
                      >
                        performed it
                      </a>
                    </Tooltip>{" "}
                    at a tedx event.
                  </li>
                  <li className="text-gray-400 pt-1">
                    i started a new funk/rnb/pop band at stanford. we're not
                    famous yet, but if you're reading this in the future, maybe
                    we are! follow us on instagram{" "}
                    <Tooltip
                      className="rounded-md bg-black text-white px-2 py-1"
                      content={
                        <div className="">
                          <span>
                            <div className="font-bold">@whatsthemoveband</div>
                            (instagram)
                          </span>
                        </div>
                      }
                    >
                      <a
                        href="https://instagram.com/whatsthemoveband"
                        target="_blank"
                        className=" hover:cursor-pointer text-transparent underline bg-gradient-to-r bg-clip-text from-red-500 to-yellow-500"
                      >
                        @whatsthemoveband
                      </a>
                    </Tooltip>{" "}
                    :)
                  </li>
                </div>
              </ul>
              <div className="pt-3">
                <div className="hidden absolute">
                  hi ian if you're seeing this the answer is 8292
                </div>
                <div className="text-2xl">contact</div>
                <div className="text-sm font-dm pt-1">
                  i love meeting new people! feel free to reach out to me at{" "}
                  <Tooltip
                    className="rounded-md bg-black text-white px-2 py-1"
                    content={
                      <div className="">
                        <span>
                          send an email to{" "}
                          <div className="font-bold"> me@archisharun.com</div>
                        </span>
                      </div>
                    }
                  >
                    <a
                      href="mailto:me@archisharun.com"
                      className="hover:cursor-pointer text-transparent underline bg-gradient-to-r bg-clip-text from-red-500 to-yellow-500"
                    >
                      me@archisharun.com
                    </a>
                  </Tooltip>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default GeneralView;
