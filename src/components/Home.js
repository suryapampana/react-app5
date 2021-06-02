import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

export function Home() {
  // private in nature :: state member are for this component only
  const [tinput, setTinput] = useState("");

  const state = useSelector((state) => state);
  const dispatch = useDispatch();

  const updateTinput = (e) => setTinput(e.target.value);
  const postTweet = () => {
    dispatch({ type: "POST_TWEET", payload: tinput });
    setTinput("");
  };

  return (
    <div style={{ backgroundColor: "lightgray", height: "100vh" }}>
      {/** CAPTURE INPUT HERE  */}
      <div className=" bg-info  d-flex mt-2 mx-4">
        <input
          className="text-danger form-control w-75"
          type="text"
          value={tinput}
          onChange={(e) => updateTinput(e)}
          placeholder="tweer here"
        />
        <input
          type="button"
          onClick={() => postTweet()}
          className="w-25 btn btn-primary"
          value="Tweet"
        />
      </div>

      <h2 className="text-primary mx-4 mt-4">Your Tweets</h2>

      {/** DISPLAY TWEET HERE */}
      <div className="mx-4 mt-4">
        {state.list.map((item, index) => (
          <h4 key={index} className="text-danger">
            {item}
          </h4>
        ))}
      </div>
    </div>
  );
}
