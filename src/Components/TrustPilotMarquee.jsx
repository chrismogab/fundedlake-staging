import trustpilotimg1  from "../assets/trust-pilot-img1.png";
import trustpilotimg2  from "../assets/trust-pilot-img2.png";
import trustpilotimg3  from "../assets/trust-pilot-img3.png";
import trustpilotimg4  from "../assets/trust-pilot-img4.png";
import trustpilotimg5  from "../assets/trust-pilot-img5.png";
import trustpilotimg6  from "../assets/trust-pilot-img6.png";
import trustpilotimg7  from "../assets/trust-pilot-img7.png";
import trustpilotimg8  from "../assets/trust-pilot-img8.png";
import trustpilotimg9  from "../assets/trust-pilot-img9.png";

function TrustPilotMarquee() {

    const trustImages = [trustpilotimg1, trustpilotimg2, trustpilotimg3, trustpilotimg4, trustpilotimg5, trustpilotimg6, trustpilotimg7, trustpilotimg8, trustpilotimg9]

  return (
    <div className="overflow-hidden md:py-16 whitespace-nowrap bg-[radial-gradient(circle,rgba(2,33,80,1)_6%,rgba(0,0,0,1)_47%)] py-4">
      <div class="flex flex-wrap w-full mb-16 flex-col items-center text-center">
        <h2 class="sm:text-[50px] leading-[1.1em] text-2xl font-bold title-font mb-2 text-white">
          WATCH SOME OF OUR<br/>
          <span className="text-gredient text-primary">TRUST PILOT</span> REVIEWS
        </h2>
      </div>
      <div className="trustPilot-container relative">
        <div className="trustPilot-marquee">
        {/* Duplicate for seamless loop */}
        {[...trustImages, ...trustImages].map((img, idx) => (
          <img
            key={idx}
            src={img}
            alt={`slide-${idx}`}
            className=" w-[620px] object-contain mx-4 inline-block"
          />
        ))}
      </div>
      </div>
      
    </div>
  );
}

export default TrustPilotMarquee