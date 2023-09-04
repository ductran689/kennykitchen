type Props = {
  canScrollPrev: boolean;
  canScrollNext: boolean;
  onPrev(): void;
  onNext(): void;
};
const CarouselControls = (props: Props) => {
  return (
    <div className="flex flex-row-reverse justify-between  center-item w-[98%] center-col ">
      <div
        onClick={() => {
          if (props.canScrollNext) {
            props.onNext();
          }
        }}
        /* disabled={!props.canScrollPrev} */
        className=""
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={2.5}
          stroke="#ffffff"
          className=" r-arrow w-9 h-9 max-[578px]:hidden border-solid border-white border-[3px] rounded-full bg-black/50 hover:border-black hover:bg-white/50"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M11.25 4.5l7.5 7.5-7.5 7.5m-6-15l7.5 7.5-7.5 7.5"
          />
        </svg>

        {/* <Image
          className="rounded-t-lg"
          src="/images/round-line arrow-white.svg"
          alt="{service.name}"
          width={60}
          height={10}
        /> */}
      </div>
      <div
        onClick={() => {
          if (props.canScrollPrev) {
            props.onPrev();
          }
        }}
        className=""
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={2.5}
          stroke="#ffffff"
          className="r-arrow w-9 h-9 max-[578px]:hidden border-solid border-white border-[3px] rounded-full bg-black/50 hover:border-black hover:bg-white/50"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M18.75 19.5l-7.5-7.5 7.5-7.5m-6 15L5.25 12l7.5-7.5"
          />
        </svg>

        {/*    <Image
          className="rotate-180"
          src="/images/round-line arrow-white.svg"
          alt="{service.name}"
          width={60}
          height={10}
        /> */}
      </div>
      {/* <button
        onClick={() => {
          if (props.canScrollPrev) {
            props.onPrev();
          }
        }}
        disabled={!props.canScrollPrev}
        className={classNames({
          'px-4 py-2 text-white rounded-md': true,
          'bg-indigo-200': !props.canScrollPrev,
          'bg-indigo-400': props.canScrollPrev,
        })}
      >
        Prev
      </button> */}
      {/* <button
        onClick={() => {
          if (props.canScrollNext) {
            props.onNext();
          }
        }}
        disabled={!props.canScrollNext}
        className={classNames({
          'px-4 py-2 text-white rounded-md': true,
          'bg-indigo-200': !props.canScrollNext,
          'bg-indigo-400': props.canScrollNext,
        })}
      >
        Next
      </button> */}
    </div>
  );
};
export default CarouselControls;
