import { useSelector } from "react-redux";

export function ContactUs() {
  const state = useSelector((state) => state);
  return (
    <div className="bg-light" style={{ height: "100vh" }}>
      <h1 className="text-danger">Contact Us Page</h1>
      <h2>{state.message}</h2>
      <h2>{state.counter}</h2>
    </div>
  );
}
