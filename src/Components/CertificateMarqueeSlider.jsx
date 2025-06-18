import img1 from '../assets/certificate-of-withdrawl1.jpeg';
import img2 from '../assets/certificate-of-withdrawl2.jpeg';
import img3 from '../assets/certificate-of-withdrawl3.jpeg'; 
import img4 from '../assets/certificate-of-withdrawl4.jpeg'; 
import img5 from '../assets/certificate-of-withdrawl5.jpeg'; 


const CertificateMarqueeSlider = () => {
  const images = [img1, img2, img3, img4, img5];

  return (
    <div className="overflow-hidden lg:py-24 md:py-10 whitespace-nowrap bg-[radial-gradient(circle,rgba(2,33,80,1)_6%,rgba(0,0,0,1)_47%)] py-4">
      <div className="marquee-container relative">
        <div className="marquee">
        {/* Duplicate for seamless loop */}
        {[...images, ...images].map((img, idx) => (
          <img
            key={idx}
            src={img}
            alt={`slide-${idx}`}
            className=" w-[520px] mx-4 inline-block"
          />
        ))}
      </div>
      </div>
      
    </div>
  );
};

export default CertificateMarqueeSlider;
