import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

export function Project() {
  const state = useSelector((state) => state);
  const dispatch = useDispatch();

  const increment = () => dispatch({ type: "INC" });
  const decrment = () => dispatch({ type: "DEC" });

  return (
    <div className="mx-4">
      <div className="alert alert-info mt-2 text-center">
        COUNTER {state.counter}
      </div>

      <input
        className="btn btn-secondary btn-lg w-100"
        type="button"
        onClick={() => increment()}
        value="INCRMENT"
      />

      <input
        className="btn btn-secondary mt-1 btn-lg w-100"
        type="button"
        onClick={() => decrment()}
        value="DECRMENT"
      />
    </div>
  );
}
