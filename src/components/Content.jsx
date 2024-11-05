import { useState } from "react";
import { getDadJoke } from "../http";
import Button from "./Button";

export default function Content() {
  const [joke, setJoke] = useState();

  async function fetchJoke() {
    const joke = await getDadJoke();
    setJoke(joke);
  }

  return (
    <>
      <h1>😂DAD JOKE GENERATOR😂</h1>
      <div className="content">
        <div className="joke">
          <p className="joke-text">
            {joke || "Do you want to hear a good dad joke?"}
          </p>
        </div>
        <p>
          <Button onClick={fetchJoke}>Tell me a dad joke!</Button>
        </p>
      </div>
    </>
  );
}
