import FixedBackground from "@/components/BackgroundElements";
import Slide1 from "@/components/slides/Slide1";
import Slide2 from "@/components/slides/Slide2";
import Slide3 from "@/components/slides/Slide3";
import Slide4 from "@/components/slides/Slide4";
import Slide5 from "@/components/slides/Slide5";
import Slide6 from "@/components/slides/Slide6";
import Slide7 from "@/components/slides/Slide7";
import Slide9 from "@/components/slides/Slide9";
import Slide10 from "@/components/slides/Slide10";
import Slide11 from "@/components/slides/Slide11";
import Slide12 from "@/components/slides/Slide12";
import Slide13 from "@/components/slides/Slide13";
import Slide14 from "@/components/slides/Slide14";
import Slide15 from "@/components/slides/Slide15";
import Slide16 from "@/components/slides/Slide16";
import Slide17 from "@/components/slides/Slide17";
import Slide18 from "@/components/slides/Slide18";
import Slide19 from "@/components/slides/Slide19";
import Slide20 from "@/components/slides/Slide20";
import Slide21 from "@/components/slides/Slide21";
import Slide22 from "@/components/slides/Slide22";
import Slide23 from "@/components/slides/Slide23";
import Slide24 from "@/components/slides/Slide24";
import Slide25 from "@/components/slides/Slide25";
import Slide26 from "@/components/slides/Slide26";
import Slide27 from "@/components/slides/Slide27";
import Slide28 from "@/components/slides/Slide28";
import Slide29 from "@/components/slides/Slide29";
import Slide30 from "@/components/slides/Slide30";
import Slide31 from "@/components/slides/Slide31";
import Slide32 from "@/components/slides/Slide32";
import Slide33 from "@/components/slides/Slide33";
import Slide34 from "@/components/slides/Slide34";

const slides = [
  Slide1, Slide2, Slide3, Slide4, Slide5, Slide6, Slide7,
  Slide9, Slide10, Slide11, Slide12, Slide13, Slide14, Slide15,
  Slide16, Slide17, Slide18, Slide19, Slide20, Slide21, Slide22,
  Slide23, Slide24, Slide25, Slide26, Slide27, Slide28, Slide29,
  Slide30, Slide31, Slide32, Slide33, Slide34,
];

export default function Home() {
  return (
    <div className="relative w-full h-screen overflow-y-scroll snap-y snap-mandatory hide-scrollbar">
      {/* Fixed Background */}
      <FixedBackground />

      {/* Slides */}
      <div className="relative z-10">
        {slides.map((SlideComponent, index) => (
          <div key={index} className="w-full min-h-screen snap-start snap-always">
            <SlideComponent />
          </div>
        ))}
      </div>
    </div>
  );
}
