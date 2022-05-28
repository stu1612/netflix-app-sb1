// npm
import { useEffect, useState } from "react";

// files
import { readCollection } from "../firebase/fireStore";

export default function useLoad(path, setter) {
  // local state
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  // methods
  useEffect(() => {
    async function loadData() {
      setIsLoading(true);
      const data = await readCollection(path).catch(onFail);
      if (data) onSuccess(data);
    }

    loadData();
  }, [path]);

  function onSuccess(data) {
    setter(data);
    setIsLoading(false);
    setError(null);
  }

  function onFail(error) {
    console.error(error.code);
    setIsLoading(false);
    setError(true);
  }

  return { isLoading, error };
}
