import React, { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import {
  HowItemsKey,
  Links,
  MenuItems,
  SupportLinks,
  TestAddress,
  WhyItemsKey,
} from "./const";
import {
  DemoContainer,
  DeviceExample,
  ExampleCard,
  TwitterCard,
} from "./components";
import { Background, Footer } from "./layout";
import { scrollIntoViewById } from "./lib/utils";
import {
  Input,
  ColorfulAddress,
  AddressPattern,
  MainButton,
  WalletIcon,
  TextCard,
} from "./components";
import "./App.scss";
import { useTranslation } from "react-i18next";
import { Languages } from "lucide-react";

const App: React.FC = () => {
  const location = useLocation();
  const [address, setAddress] = useState<string>(TestAddress);
  const { t, i18n } = useTranslation();

  useEffect(() => {
    if (location.hash) {
      scrollIntoViewById(location.hash);
    } else {
      document
        .querySelector("#container")
        ?.scrollTo({ top: 0, behavior: "smooth" });
    }
  }, [location]);

  // 切换语言的函数
  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
  };

  return (
    <>
      <Background />

      <div id="container" className="absolute inset-0 overflow-auto">
        <header className="sticky top-0 z-50 h-fit py-4 px-4 sm:px-8 backdrop-blur-sm bg-white/5 flex justify-between items-center shadow-sm">
          <Link to={"/"}>
            <h1 className="flex items-center text-white text-sm sm:text-lg font-bold">
              <img
                src="/eth-shenzhen.svg"
                alt="ETH ShenZhen"
                className="w-[92px] h-[28px]"
              />
              <span className="ml-4">ETH Colored Address Protocol</span>
            </h1>
          </Link>

          <div className="flex items-center gap-4">
            <ul className="flex-nowrap gap-8 hidden md:flex">
              {MenuItems.map((it) => (
                <NavLink key={it.id} to={`/#${it.id}`}>
                  <li className="text-white">{it.label}</li>
                </NavLink>
              ))}
            </ul>
            <Languages
              className="text-white cursor-pointer"
              onClick={() =>
                changeLanguage(i18n.language === "en" ? "zh" : "en")
              }
            />
          </div>
        </header>

        <main className="max-w-screen-xl mx-auto p-4 sm:p-6">
          <div className="w-full flex flex-col items-center justify-center h-dvh mt-0 sm:-mt-[88px]">
            <div className="w-full flex flex-col md:flex-row justify-between items-center">
              <div className="flex flex-col gap-4">
                <h1 className="font-bold text-4xl bg-gradient-to-r from-cyan-500 to-fuchsia-500 bg-clip-text text-transparent">
                  ETH Colored Address Protocol
                </h1>
                <h2 className="font-bold text-2xl bg-gradient-to-r from-cyan-500 to-fuchsia-500 bg-clip-text text-transparent">
                  以太坊有色地址协议
                </h2>
                <p className="text-gray-100 max-w-96">{t("intro")}</p>
                <div className="mt-8">{MainButton("#try")}</div>
              </div>

              <ExampleCard />
            </div>
          </div>

          <DeviceExample />

          {/* DEMO */}
          <div id="try" className="my-6 py-16 sm:py-36">
            <p className="text-white text-2xl text-center pb-16">Try!</p>
            <div className="min-w-80 w-full flex flex-col gap-4 text-gray-100 font-bold bg-slate-50/10 p-4 sm:p-6 rounded-md">
              <Input
                className="w-full text-xs sm:text-base"
                value={address}
                placeholder="ETH Address"
                icon={<WalletIcon />}
                onChange={(e) => setAddress(e.target.value)}
              />

              <DemoContainer>
                <AddressPattern address={address} />
              </DemoContainer>
              <DemoContainer>
                <ColorfulAddress address={address} simple={true} />
              </DemoContainer>
              <DemoContainer>
                <ColorfulAddress address={address} />
              </DemoContainer>
            </div>
          </div>

          <div id="why" className="my-6 py-12 sm:py-48">
            <p className="text-white text-2xl text-center">Why?</p>
            <div className="flex flex-col sm:flex-row justify-center gap-6 pt-16">
              {WhyItemsKey.map((key, index) => (
                <TextCard
                  key={`why + ${index}`}
                  title={t(`why.title.${key}`)}
                  content={t(`why.content.${key}`)}
                />
              ))}
            </div>
          </div>

          <div id="how" className="my-6 py-12 sm:py-48">
            <p className="text-white text-2xl text-center">How?</p>
            <div className="flex flex-col sm:flex-row justify-center gap-6 pt-16">
              {HowItemsKey.map((key, index) => (
                <TextCard
                  key={`how + ${index}`}
                  title={t(`how.title.${key}`)}
                  content={t(`how.content.${key}`)}
                />
              ))}
            </div>
          </div>

          <div id="support" className="my-6">
            <p className="text-white text-2xl text-center">Support</p>
            <div className="flex flex-col sm:flex-row justify-center gap-4 items-center my-16 px-4 sm:px-20">
              <a href={SupportLinks.Rebase} target="_blank" rel="noreferrer">
                <img
                  src="/logo_rebase.png"
                  alt="Rebase"
                  className="h-10 bg-white rounded-sm p-2"
                />
              </a>
              <a href={SupportLinks.ETHPanda} target="_blank" rel="noreferrer">
                <img
                  src="/logo_ethpanda.png"
                  alt="ETHPanda"
                  className="h-10 bg-white rounded-sm p-2"
                />
              </a>
              <a href={SupportLinks.OpenBuild} target="_blank" rel="noreferrer">
                <img
                  src="/logo_openbuild.svg"
                  alt="OpenBuild"
                  className="h-10"
                />
              </a>
              <a
                href={SupportLinks.LearnBlockchain}
                target="_blank"
                rel="noreferrer"
              >
                <img
                  src="/logo_learnblockchain.png"
                  alt="LearnBlockchain"
                  className="h-10"
                />
              </a>
              <a href={SupportLinks.LXDao} target="_blank" rel="noreferrer">
                <img src="/logo_lxdao.png" alt="LXDao" className="h-10" />
              </a>
            </div>
          </div>

          <div id="links" className="my-6">
            <p className="text-white text-2xl text-center">Links</p>
            <div className="flex flex-col justify-center gap-4 items-center my-16 px-4 sm:px-20">
              <Link to={Links.Github} target="_blank">
                <img
                  src={Links.GithubCover}
                  className="w-[500px] rounded-md"
                  alt="Github Card"
                />
              </Link>

              <TwitterCard />
            </div>
          </div>
        </main>

        <Footer />
      </div>
    </>
  );
};

export default App;
