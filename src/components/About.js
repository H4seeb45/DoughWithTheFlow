import React from "react";
import "../tailwind.css";
import AboutAnimation from "../assets/anims/laptopwork.json";
import lottie from "lottie-web";
import "../styles/aboutanim.css";
export default function About() {
  React.useEffect(() => {
    lottie.loadAnimation({
      loop: true,
      autoplay: true,
      container: document.querySelector("#about-animation"),
      animationData: AboutAnimation,
    });
  }, []);
  return (
    <div>
      <div className="mx-auto text-center mt-5 nameanim">
        <div
          id="about-animation"
          className="w-xl ml-2 about-anim inline-block"
        ></div>
        <div className="pt-2 text-center md:pt-5 animBottom">
          <span className="text-5xl bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-blue-500">
            Haseeb Ahmed
          </span>
          <div className="pt-5 text-blue-600 mt-auto">Frontend Developer</div>
          <div className="text-blue-600">0300-0769059</div>
        </div>
      </div>
    </div>
  );
}
