import { useState } from "react";

export function Home() {
  // private in nature :: state member are for this component only
  const [tinput, setTinput] = useState("");
  const [list, setList] = useState([]);

  const updateTinput = (e) => setTinput(e.target.value);
  const postTweet = () => {
    setList([tinput, ...list]);
    setTinput("");
  };

  return (
    <div>
      {/** CAPTURE INPUT HERE  */}
      <div className="d-flex mt-2 mx-4">
        <input
          className="form-control w-75"
          type="text"
          value={tinput}
          onChange={(e) => updateTinput(e)}
          placeholder="tweer here"
        />
        <input
          type="button"
          onClick={() => postTweet()}
          className="w-25 btn btn-secondary"
          value="Tweet"
        />
      </div>

      {/** DISPLAY TWEET HERE */}
      <div className="mx-4 mt-4">
        {list.map((item, index) => (
          <h4 key={index} className="text-secondary">
            {item}
          </h4>
        ))}
      </div>
    </div>
  );
}
