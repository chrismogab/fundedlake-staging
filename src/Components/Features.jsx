import feature1 from "../assets/icons/feature-icon2.svg";

function Features() {
  return (
    <div class="container w-full max-w-6xl h-100 mx-auto px-4 py-12 lg:px-0 lg:py-16">
      <div class="flex flex-wrap w-full flex-col items-center text-center">
        <h2 class="sm:text-3xl text-2xl font-bold title-font mb-2 text-white">
          WHY CHOOSE US?
        </h2>
      </div>
      <div
        style={{
          background:
            "linear-gradient(180deg, rgba(0, 0, 0, 1) 0%, rgba(24, 24, 24, 15) 35%)",
        }}
        className="feature-grid grid mt-10 grid-cols-1 md:grid-cols-2 lg:grid-cols-4 bg-dark text-white"
      >
        <div className="feature-col flex justify-start items-center flex-col p-[25px] hover:bg-primary duration-500 hover:bg-bg-primary">
          <div className="size-[52px] rounded flex items-center justify-center my-1">
            <svg
              aria-hidden="true"
              fill="#fff"
              class="e-font-icon-svg e-far-money-bill-alt"
              viewBox="0 0 640 512"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M320 144c-53.02 0-96 50.14-96 112 0 61.85 42.98 112 96 112 53 0 96-50.13 96-112 0-61.86-42.98-112-96-112zm40 168c0 4.42-3.58 8-8 8h-64c-4.42 0-8-3.58-8-8v-16c0-4.42 3.58-8 8-8h16v-55.44l-.47.31a7.992 7.992 0 0 1-11.09-2.22l-8.88-13.31a7.992 7.992 0 0 1 2.22-11.09l15.33-10.22a23.99 23.99 0 0 1 13.31-4.03H328c4.42 0 8 3.58 8 8v88h16c4.42 0 8 3.58 8 8v16zM608 64H32C14.33 64 0 78.33 0 96v320c0 17.67 14.33 32 32 32h576c17.67 0 32-14.33 32-32V96c0-17.67-14.33-32-32-32zm-16 272c-35.35 0-64 28.65-64 64H112c0-35.35-28.65-64-64-64V176c35.35 0 64-28.65 64-64h416c0 35.35 28.65 64 64 64v160z"></path>
            </svg>
          </div>
          <h3 className="text-[#00AEEF] font-bold text-[20px] mt-7 mb-4 text-center">
            INSTANT FUNDING
          </h3>
          <p className="text-white text-[16px] text-center leading-6 w-[220px] mb-5">
            Get access to capital and start trading immediately with no waiting,
            no delays.
          </p>
        </div>
        <div className="feature-col instant-funding flex justify-start items-center flex-col p-[25px] hover:bg-primary duration-500 hover:bg-bg-primary">
          <div className="size-[52px] rounded flex items-center justify-center my-1">
            <svg
              aria-hidden="true"
              fill="#fff"
              className="w-[30px]"
              class="e-font-icon-svg e-fas-bolt"
              viewBox="0 0 320 512"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M296 160H180.6l42.6-129.8C227.2 15 215.7 0 200 0H56C44 0 33.8 8.9 32.2 20.8l-32 240C-1.7 275.2 9.5 288 24 288h118.7L96.6 482.5c-3.6 15.2 8 29.5 23.3 29.5 8.4 0 16.4-4.4 20.8-12l176-304c9.3-15.9-2.2-36-20.7-36z"></path>
            </svg>
          </div>
          <h3 className="text-[#00AEEF] font-bold text-[20px] my-6 text-center leading-6">
            LIGHTING-FAST PAYOUTS
          </h3>
          <p className="text-white text-[16px] text-center leading-6 w-[220px] mb-5">
            Withdraw your profits in as little as 24 hours.
          </p>
        </div>
        <div className="feature-col flex justify-start items-center flex-col p-[25px] hover:bg-primary duration-500">
          <div className="size-[52px] rounded flex items-center justify-center my-1">
            <span className="text-black text-sm font-semibold">
              <svg
                aria-hidden="true"
                class="e-font-icon-svg e-far-hourglass"
                viewBox="0 0 384 512"
                xmlns="http://www.w3.org/2000/svg"
                fill="#fff"
                className="w-[70%]"
              >
                <path d="M368 48h4c6.627 0 12-5.373 12-12V12c0-6.627-5.373-12-12-12H12C5.373 0 0 5.373 0 12v24c0 6.627 5.373 12 12 12h4c0 80.564 32.188 165.807 97.18 208C47.899 298.381 16 383.9 16 464h-4c-6.627 0-12 5.373-12 12v24c0 6.627 5.373 12 12 12h360c6.627 0 12-5.373 12-12v-24c0-6.627-5.373-12-12-12h-4c0-80.564-32.188-165.807-97.18-208C336.102 213.619 368 128.1 368 48zM64 48h256c0 101.62-57.307 184-128 184S64 149.621 64 48zm256 416H64c0-101.62 57.308-184 128-184s128 82.38 128 184z"></path>
              </svg>
            </span>
          </div>
          <h3 className="text-[#00AEEF] font-bold text-[20px] my-6 text-center leading-6">
            NO TIME LIMITS
          </h3>
          <p className="text-white text-[16px] text-center leading-6 w-[220px] mb-5">
            Trade at your own pace with no maximum days to complete challenges.
          </p>
        </div>
        <div className="feature-col flex justify-start items-center flex-col p-[25px] hover:bg-primary duration-500 hover:bg-bg-primary">
          <div className="size-[52px] rounded flex items-center justify-center my-1">
            <span className="text-black text-sm font-semibold">
              <svg
                aria-hidden="true"
                class="e-font-icon-svg e-fas-wallet"
                viewBox="0 0 512 512"
                xmlns="http://www.w3.org/2000/svg"
                fill="#fff"
                className="w-[100%]"
              >
                <path d="M461.2 128H80c-8.84 0-16-7.16-16-16s7.16-16 16-16h384c8.84 0 16-7.16 16-16 0-26.51-21.49-48-48-48H64C28.65 32 0 60.65 0 96v320c0 35.35 28.65 64 64 64h397.2c28.02 0 50.8-21.53 50.8-48V176c0-26.47-22.78-48-50.8-48zM416 336c-17.67 0-32-14.33-32-32s14.33-32 32-32 32 14.33 32 32-14.33 32-32 32z"></path>
              </svg>
            </span>
          </div>
          <h3 className="text-[#00AEEF] font-bold text-[20px] my-6 text-center leading-6">
            AFFORDABLE PRICING
          </h3>
          <p className="text-white text-[16px] text-center leading-6 w-[220px] mb-5">
            Top-tier funding programs at unbeatable rates.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Features;
