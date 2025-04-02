import { useState, useEffect } from "react";

const useStore = (store, callback) => {
  const result = store(callback);
  const [data, setData] = useState();

  console.log("useStore", result);

  useEffect(() => {
    setData(result);
  }, [result]);

  return data;
};

export default useStore;
