'use client';
import { Counter } from './components/Counter';
import { Search } from './components/Search';
import Script from 'next/script';

export default function Home() {
  return (
    <div className="container">
      <Script src="https://www.googletagmanager.com/gtag/js?id=G-G3D4DVMT2P" />
      <Script id="google-analytics">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
 
          gtag('config', 'G-G3D4DVMT2P');
        `}
      </Script>
      <main className="flex flex-col min-h-screen justify-between bg-slate-200">
        <h1 className="text-2xl text-rose-700 flex justify-center">
          Anime Abyss - Watch anime online for free
        </h1>
        <div className="flex flex-col items-center">
          <p>You can watch DUB(Marked as Dub) or SUB versions.</p>
          <p>You can also use adblock for greater user experience.</p>
        </div>
        <Search />
        <div className="flex flex-col gap-4">
          <span className="flex justify-center text-2xl font-semibold">
            Tech Stack
          </span>
          <div className="flex justify-center items-center gap-4">
            <img
              src="https://seeklogo.com/images/N/next-js-icon-logo-EE302D5DBD-seeklogo.com.png"
              alt="Next icon"
              width={40}
            />
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg"
              alt="React logo"
              width={48}
            />
            <img
              src="https://d33wubrfki0l68.cloudfront.net/0834d0215db51e91525a25acf97433051f280f2f/c30f5/img/redux.svg"
              alt="Redux icon"
              width={48}
            />
            <img
              src="https://seeklogo.com/images/A/axios-logo-CD0C90458F-seeklogo.com.png"
              alt="Axios icon"
              width={104}
            />
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/d/d5/Tailwind_CSS_Logo.svg"
              alt="TailwindCSS logo"
              width={48}
            />
          </div>
        </div>
        <Counter />
      </main>
    </div>
  );
}
