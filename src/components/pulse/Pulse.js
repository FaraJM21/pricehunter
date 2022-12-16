import React, { useState } from "react";
import "./style.scss";
import { TbBrandTelegram } from "react-icons/tb";
import { MdClose } from "react-icons/md";
import PulseModal from "../pulsemodal/PulseModal";

function Pulse() {
  const [block, setBlock] = useState(false);
  return (
    <>
      <div className="pulser" onClick={() => setBlock(!block)}>
        <span>{block ? <MdClose /> : <TbBrandTelegram />}</span>
      </div>
      <PulseModal block={block} />
    </>
  );
}

export default Pulse;
