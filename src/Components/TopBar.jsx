import { X }  from 'lucide-react';
import { useState } from 'react';

function TopBar() {

  const [visible, setVisible] = useState(true);

  if (!visible) return null;

  return (
   <div className="bg-dark flex flex-col md:flex-row justify-center items-center gap-3 md:gap-4 px-4 md:px-6 py-[14px] relative w-full">
    {/* Emoji and Message */}
    <div className="flex items-center gap-2 text-white text-center">
      
      <h2 className="text-[14px] md:text-xl lg:text-lg font-medium max-w-[350px] md:max-w-none">
        🔥 Use code <span className="font-bold">TRADE10</span> for 10% + BOGO off your challenge!
      </h2>
    </div>

    {/* Close Button */}
    <X
      onClick={() => setVisible(false)}
      className="text-white size-6 md:size-7 absolute md:top-3 top-1 right-3 md:right-6 cursor-pointer"
      aria-label="Close promo"
    />
  </div>
  )
}

export default TopBar