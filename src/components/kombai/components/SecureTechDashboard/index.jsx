import SecureAccessCard from "../SecureAccessCard";
import SecureTechCard from "../SecureTechCard";

function SecureTechDashboard() {
  return (
    <div className="grow-0 shrink-0 basis-auto pl-[13px] pr-3.5">
      <div className="box-border flex justify-start items-start flex-col gap-[31px]">
        <SecureAccessCard />
        <SecureTechCard />
      </div>
    </div>
  );
}

export default SecureTechDashboard;
