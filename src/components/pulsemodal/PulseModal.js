import React from "react";
import "./style.scss";
import { FaTelegram, FaPhone } from "react-icons/fa";
import { AiOutlineMail } from "react-icons/ai";
function PulseModal(props) {
  return (
    <>
      <div
        className="modal"
        style={{ display: props.block ? "block" : "none" }}
      >
        <div className="modal-content">
          <div className="blocks">
            <div className="telegram">
              <span>
                <FaTelegram />
              </span>
            </div>

            <p>Telegram</p>
          </div>

          <div className="blocks">
            <div className="email">
              <span>
                <AiOutlineMail />
              </span>
            </div>

            <p>info@pricehunter.uz</p>
          </div>

          <div className="blocks">
            <div className="phone">
              <span>
                <FaPhone />
              </span>
            </div>

            <p>Заказать звонок</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default PulseModal;
