import { Search } from './components/Search';

export default function Home() {
  return (
    <main className="flex flex-col h-screen justify-between">
      <h1 className="text-2xl text-rose-700 flex justify-center">
        Anime Abyss - Watch anime online for free
      </h1>
      <Search />
      <div>
        <p className="flex justify-center">Tech Stack</p>
        <ul className="flex justify-center gap-4">
          <li>Next</li>
          <li>React</li>
          <li>Redux</li>
          <li>Axios</li>
          <li>TailwindCSS</li>
        </ul>
      </div>
    </main>
  );
}
