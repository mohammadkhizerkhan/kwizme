import React from "react";
import { useNavigate } from "react-router-dom";
import { useQuestion } from "../context";

function Modal() {
  const { modal, setModal } = useQuestion();
  const navigate = useNavigate();
  return (
    <>
      <div className="modal-cont bg-white rounded z-20 flex-col w-fit p-2 justify-center mt-4 mx-auto">
        <h3 className="text-3xl">Are you sure want to quit?</h3>
        <div className="flex">
          <button
            className="py-2 px-4 mt-4 bg-red mr-4 text-1xl text_color rounded-lg self-start"
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
      <div
        className="fixed inset-0 z-10 bg-overlay"
        onClick={() => setModal(false)}
      ></div>
    </>
  );
}

export { Modal };
