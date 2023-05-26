import { useEffect } from "react";
import { store } from "./App";

function Test() {
  const testData = store;

  useEffect(() => {
    testData.dispatch({ type: "next" });
  }, []);

  return <div></div>;
}

export default Test;
