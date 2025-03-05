import SecureTechDashboard from "../SecureTechDashboard";
import DevOpsStatsWidget from "../DevOpsStatsWidget";

function EliteDevOpsDashboard() {
  return (
    <div className="bg-[#121823] box-border flex justify-start items-center flex-col gap-[38px] w-[100.00%] pl-4 pr-[15px] pt-[45px] pb-[77px]">
      <p className="[font-family:'DM_Sans',sans-serif] text-5xl font-bold text-center text-[white] max-w-[262px] grow-0 shrink-0 basis-auto box-border m-0 p-0">Never hire junior DevOps again.</p>
      <SecureTechDashboard />
      <DevOpsStatsWidget />
    </div>
  );
}

export default EliteDevOpsDashboard;
