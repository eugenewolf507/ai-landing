import UptimeTokenDescription from "../UptimeTokenDescription";
import UptimeButton from "../UptimeButton";

function DisplayContentWithImage() {
  return (
    <div className="ml-[-59px] flex justify-start items-start flex-row grow-0 shrink-0 basis-auto">
      <div className="flex justify-start items-stretch flex-col w-[314px] grow-0 shrink-0 basis-auto box-border pt-[54px]">
        <UptimeTokenDescription />
        <UptimeButton />
      </div>
      <img src="/assets/image_90621f05.png" alt="" className="h-[265px] max-w-[initial] w-[187px] block ml-[-157px] box-border" />
    </div>
  );
}

export default DisplayContentWithImage;
