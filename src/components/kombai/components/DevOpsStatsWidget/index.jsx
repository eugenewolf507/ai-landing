import { Button } from "@mui/base";
import SvgIcon1 from "./icons/SvgIcon1";

function DevOpsStatsWidget() {
  return (
    <div className="flex justify-start items-stretch flex-col self-stretch grow-0 shrink-0 basis-auto mt-[7.25px]">
      <p className="text-center text-[white] self-center grow-0 shrink-0 basis-auto m-0 p-0">
        <span className="[font-family:'DM_Sans',sans-serif] text-[28px] font-bold text-center">
          Companies with Junior DevOps: 500,000+
          <br />
          Companies using{" "}
        </span>
        <span className="[font-family:'DM_Mono',monospace] text-[28px] font-medium text-[#6cffa4] text-center">UpTime</span>
        <span className="[font-family:'DM_Sans',sans-serif] text-[28px] font-bold text-center">
          : 0 <br />
        </span>
      </p>
      <div className="flex justify-start items-center flex-col grow-0 shrink-0 basis-auto mt-[55px]">
        {/* Button Component starts here. We've generated code using MUI Base. See other options in "Component library" dropdown in Settings */}
        <Button className="bg-[#6cffa4] [font-family:'DM_Sans',sans-serif] text-lg font-medium text-[#1d1c20] min-w-[240px] h-[60px] w-60 cursor-pointer inline-flex items-center justify-center gap-2.5 box-border grow-0 shrink-0 basis-auto rounded-[100px] border-[none]">
          Launch UpTime
          <SvgIcon1 className="w-[15px] h-[15px] text-[#121823] flex" />
        </Button>
        <p className="[font-family:'DM_Sans',sans-serif] text-sm font-medium text-center text-[#cbcbcb] w-40 grow-0 shrink-0 basis-auto box-border ml-2 mt-[25px] m-0 p-0">COMING SOON</p>
      </div>
    </div>
  );
}

export default DevOpsStatsWidget;
