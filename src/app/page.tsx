import { NextPage } from "next";
import Image from "next/image";
import NavBar from "../components/navbar"
import homeInfo from "@/data/home";

const Home:NextPage = () => {
  return (
    <div>
      <header>
        <NavBar/>
      </header>
      <div className="p-16 text-6xl flex items-center justify-center w-full animate-pulse">
        <h1>Battle Arts Suite</h1>
      </div>
      <div className="inline-block m-8 text-xl">
        {homeInfo.map(
          (content, index) =>
          {
            return (
              <div key={content.key} className="m-4">
                <p>{content.content}</p>
              </div>
            )
          }
        )
      }
      </div>
    </div>
  );
}

export default Home;
