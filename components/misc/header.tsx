import Link from "next/link";
import { useEffect, useState } from "react";
import Search from "./search";

const Header = () => {
  const [top, setTop] = useState(true);
  const [searching, setSearching] = useState(false);

  useEffect(() => {
    const scrollHandler = () => {
      window.pageYOffset > 10 ? setTop(false) : setTop(true);
    };
    window.addEventListener("scroll", scrollHandler);
    return () => window.removeEventListener("scroll", scrollHandler);
  }, [top]);

  return (
    <header
      className={`fixed w-full z-30 md:bg-slate-900 transition duration-300 ease-in-out ${!top && " bg-slate-900 backdrop-blur-sm shadow-lg"}`}
    >
      <div className="max-w-6xl mx-auto px-5 sm:px-6">
        <div className="flex items-center justify-between h-16 md:h-20">
          <h2 className="shrink-0 mr-4 text-2xl text-Pufr-300 font-bold tracking-tight md:tracking-tighter leading-tight">
            <Link
              href="/BIBF-AI"
              className="block hover:underline"
              aria-label="My Blog"
            >
              Home
            </Link>
          </h2>

          <h2 className="shrink-0 mr-4 text-2xl text-Pufr-300 font-bold tracking-tight md:tracking-tighter leading-tight">
            <Link
              href="/notes"
              className="block hover:underline"
              aria-label="notes"
            >
              Notes
            </Link>
          </h2>

          <h2 className="shrink-0 mr-4 text-2xl text-Pufr-300 font-bold tracking-tight md:tracking-tighter leading-tight">
            <Link
              href="/QuizPage"
              className="block hover:underline"
              aria-label="notes"
            >
              Quiz
            </Link>
          </h2>
          {/* Move the Search button and ⌘k to the left of the search icon */}
          <ul className="flex grow justify-end flex-wrap items-center">
            <li className="flex items-center">
              <h1 className="text-Pufr-300 mr-0">⌘k</h1>
              <button
                className="w-4 h-3 my-auto mx-2 border-black"
                aria-label="Search"
                onClick={() => setSearching(!searching)}
                disabled={searching}
              >
                <svg
                  className="w-4 h-4 fill-current text-Pufr-300"
                  viewBox="0 0 16 16"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M7 14c-3.86 0-7-3.14-7-7s3.14-7 7-7 7 3.14 7 7-3.14 7-7 7zM7 2C4.243 2 2 4.243 2 7s2.243 5 5 5 5-2.243 5-5-2.243-5-5-5zM15.707 14.293L13.314 11.9a8.019 8.019 0 01-1.414 1.414l2.393 2.393a.997.997 0 001.414 0 .999.999 0 000-1.414z" />
                </svg>
              </button>
            </li>
          </ul>

          {/* Search */}
          <Search visible={searching} setVisible={setSearching} />
        </div>
      </div>
    </header>
  );
};

export default Header;
