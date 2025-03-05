import DevOpsDashboardView from "../DevOpsDashboardView";
import SvgIcon1 from "./icons/SvgIcon1";

function DevOpsDashboardContainer() {
  return (
    <div className="bg-[#1d2530] box-border max-w-[375px]">
      <div className="bg-[#121823] box-border flex justify-start items-center flex-row w-[100.00%] h-20 px-[21px]">
        <SvgIcon1 className="w-6 h-6 text-[#6cffa4] flex grow-0 shrink-0 basis-auto" />
        <div className="flex justify-center items-stretch flex-col gap-[9px] w-9 h-20 grow-0 shrink-0 basis-auto box-border ml-[268px]">
          <div className="bg-[white] box-border h-1 grow-0 shrink-0 basis-auto" />
          <div className="bg-[white] box-border h-1 grow-0 shrink-0 basis-auto" />
          <div className="bg-[white] box-border h-1 grow-0 shrink-0 basis-auto" />
        </div>
      </div>
      <DevOpsDashboardView />
    </div>
  );
}

export default DevOpsDashboardContainer;
