import { Button } from "@mui/base";
import SvgIcon1 from "./icons/SvgIcon1";

function UptimeButton() {
  return (
    <div className="flex justify-start items-center flex-col grow-0 shrink-0 basis-auto mt-[50px]">
      {/* Button Component starts here. We've generated code using MUI Base. See other options in "Component library" dropdown in Settings */}
      <Button className="bg-[#121823] shadow-[0px_0px_20px_rgba(108,255,164,0.50)] [font-family:'DM_Sans',sans-serif] text-lg font-medium text-[#6cffa4] min-w-[240px] h-[60px] w-60 cursor-pointer inline-flex items-center justify-center gap-2.5 box-border grow-0 shrink-0 basis-auto rounded-[100px] border-[1.5px] border-solid border-[#6cffa4]">
        <SvgIcon1 className="w-[21px] h-7 text-[#6cffa4] flex" />
        Get $UPTIME
      </Button>
      <p className="[font-family:'DM_Sans',sans-serif] text-sm font-medium text-center text-[#cbcbcb] w-40 grow-0 shrink-0 basis-auto box-border mt-[11px] m-0 p-0">COMING SOON</p>
    </div>
  );
}

export default UptimeButton;
