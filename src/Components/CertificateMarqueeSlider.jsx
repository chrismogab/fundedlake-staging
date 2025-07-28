import img7 from '../assets/certificate-of-withdrawl7.jpg'; 
import img1 from '../assets/certificate-of-withdrawl1.jpeg';
import img2 from '../assets/certificate-of-withdrawl2.jpeg';
import img3 from '../assets/certificate-of-withdrawl3.jpeg'; 
import img4 from '../assets/certificate-of-withdrawl4.jpeg'; 
import img5 from '../assets/certificate-of-withdrawl5.jpeg'; 
import img6 from '../assets/certificate-of-withdrawl6.jpeg'; 
import img8 from '../assets/certificate-of-withdrawl8.jpg'; 
import img9 from '../assets/certificate-of-withdrawl9.jpg'; 
import img10 from '../assets/certificate-of-withdrawl10.jpg'; 
import img11 from '../assets/certificate-of-withdrawl11.jpg'; 
import img12 from '../assets/certificate-of-withdrawl12.jpg'; 

const CertificateMarqueeSlider = () => {
  // Latest images first
  const images = [img12, img11, img10, img9, img8, img7, img6, img5, img4, img3, img2, img1];

  return (
    <div className="overflow-hidden py-6 md:py-10 lg:py-24 bg-[radial-gradient(circle,rgba(2,33,80,1)_6%,rgba(0,0,0,1)_47%)] min-w-full">
      <div className="relative animate-marquee group">
        <div className="flex gap-6 whitespace-nowrap min-w-[200vw] group-hover:[animation-play-state:paused]">
          {[...images, ...images].map((img, idx) => (
            <img
              key={idx}
              src={img}
              alt={`slide-${idx}`}
              className="inline-block w-[520px] rounded-md shadow-md"
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default CertificateMarqueeSlider;