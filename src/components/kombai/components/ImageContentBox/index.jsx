import DisplayContentWithImage from "../DisplayContentWithImage";

function ImageContentBox() {
  return (
    <div className="box-border flex justify-start items-start flex-row pb-[37px]">
      <img src="/assets/image_a32081ca.png" alt="" className="h-[200px] max-w-[initial] w-[90px] block box-border" />
      <DisplayContentWithImage />
    </div>
  );
}

export default ImageContentBox;
