import { useEffect, useState } from "react";
import { Vehicle } from "../Interfaces/vehicle";
import API from "../API";
import EasterEgg from "../EasterEgg.json";

const useVehicles = (page: number) => {
  const [memo, setMemo] = useState<Memo>({}); // For memoization, fewer requests needed
  const [data, setData] = useState<Data | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      let res = await API.get("/vehicles/", {
        params: {
          page: page + 1, // Our page is indexed at 0, SWAPI is indexed at 1
        },
      });

      // Easter egg ;)
      if (page === 3) {
        res.data.results.push(EasterEgg);
      }

      setMemo({
        ...memo,
        [page]: res.data,
      });
      setData(res.data);
      console.log(res.data);
    };

    if (memo[page]) {
      setData(memo[page]);
    } else {
      setData(null); // Loading
      fetchData();
    }
  }, [page, memo]);

  return data;
};

interface Memo {
  [page: number]: Data;
}

interface Data {
  count: number;
  next: string;
  previous: string;
  results: Array<Vehicle>;
}

export default useVehicles;
