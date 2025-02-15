import { useState, useEffect } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import axios from "axios";

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    try {
      const res = await axios.get("https://randomuser.me/api/?results=10");
      setData(res.data.results);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <div style={{ display: "flex", flexWrap: "wrap" }}>
        {data.map((item) => {
          return (
            <div key={item?.cell} style={{ margin: "0px 12px" }}>
              <img src={item?.picture.medium} alt="" />
              <h3>
                姓名：{item?.name.last} {item?.name.first}
              </h3>
              <h3>性別：{item?.gender}</h3>
              <p>信箱：{item?.email}</p>
              <p>電話：{item?.phone}</p>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default App;
