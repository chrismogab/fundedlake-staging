import { X } from 'lucide-react';
import { useState } from 'react';
import topbarData from '../data/topbar.json';

function TopBar() {
  const [visible, setVisible] = useState(true);

  if (!visible) return null;

  return (
    <div className="bg-dark flex flex-col md:flex-row justify-center items-center gap-3 md:gap-4 px-4 md:px-6 py-[14px] relative w-full">
      <div className="flex items-center gap-2 text-white text-center relative">
        <h2 className="text-[14px] md:text-xl lg:text-lg font-medium max-w-[350px] md:max-w-none">
          {topbarData.note}
        </h2>
      </div>

      <X
        onClick={() => setVisible(false)}
        className="text-white size-6 md:size-7 absolute md:top-3 top-1 right-3 md:right-24 cursor-pointer"
        aria-label="Close promo"
      />

      <div className="flex gap-2">
        {topbarData.messages.map((item, index) => (
          <button
            key={index}
            onClick={() => navigator.clipboard.writeText(item.code)}
            className={`${
              index === 0
                ? 'bg-primary text-white'
                : 'bg-white text-black'
            } px-2 py-1 text-xs hover:bg-white hover:text-black transition`}
          >
            Copy {item.code}
          </button>
        ))}
      </div>
    </div>
  );
}

export default TopBar;
