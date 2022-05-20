import React from "react";
import { useNavigate } from "react-router-dom";
import { useQuestion } from "../context";

function Modal() {
  const { modal, setModal } = useQuestion();
  const navigate = useNavigate();
  return (
    <div className="relative z-10">
      <div className="modal-cont ">
        <h3 className="text-3xl">Are you sure want to quit?</h3>
        <div className="flex">
          <button
            className="py-2 px-4 mt-4 bg-red text-1xl text_color rounded-lg self-start"
            onClick={() => setModal(false)}
          >
            cancel
          </button>
          <button
            className="py-2 px-4 mt-4 bg-green text-1xl text_color rounded-lg self-start"
            onClick={() => {
              sessionStorage.removeItem("colName");
              sessionStorage.removeItem("quizId");
              setModal(false);
              navigate("/");
            }}
          >
            confirm
          </button>
        </div>
      </div>
    </div>
  );
}

export { Modal };
