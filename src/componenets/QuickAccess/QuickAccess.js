import React, { useEffect, useState } from "react";
import "./QuickAccess.css";
import Item from "../Item/Item";
import axios from "axios";
const QuickAccess = (props) => {
  const [itemss, setitemss] = useState([]);

  useEffect(() => {
    axios
      .get(`${URL}`)
      .then((res) => {
        console.log(res);

        setitemss(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  console.log(`This is State ${itemss}`);

  // const LolItem = itemss.map((item) => (
  //   <div>
  //     <Item bgcolor={props.bgcolor} discount="10%OFF" name={item.name} />
  //   </div>
  // ));

  return (
    <div className="QuickAccess">
      <div className="QuickTitle">
        <div className="QuickDot"></div>
        <h2>{props.heading}</h2>
        <div className="QuickDot"></div>
      </div>
      <div className="itemgrid">
        {/* {itemss.map((item) => ( */}
        <div>
          <Item
            // key={item.id}
            bgcolor={props.bgcolor}
            discount="10%OFF"
            name="Apple"
            selling_price="₹ 80"
          />
        </div>
        <div>
          <Item
            // key={item.id}
            bgcolor={props.bgcolor}
            discount="10%OFF"
            name="Apple"
            selling_price="80"
          />
        </div>
        <div>
          <Item
            // key={item.id}
            bgcolor={props.bgcolor}
            discount="10%OFF"
            name="Apple"
            selling_price="80"
          />
        </div>
        <div>
          <Item
            // key={item.id}
            bgcolor={props.bgcolor}
            discount="10%OFF"
            name="Apple"
            selling_price="80"
          />
        </div>
        <div>
          <Item
            // key={item.id}
            bgcolor={props.bgcolor}
            discount="10%OFF"
            name="Apple"
            selling_price="80"
          />
        </div>
        <div>
          <Item
            // key={item.id}
            bgcolor={props.bgcolor}
            discount="10%OFF"
            name="Apple"
            selling_price="80"
          />
        </div>
        <div>
          <Item
            // key={item.id}
            bgcolor={props.bgcolor}
            discount="10%OFF"
            name="Apple"
            selling_price="80"
          />
        </div>
        <div>
          <Item
            // key={item.id}
            bgcolor={props.bgcolor}
            discount="10%OFF"
            name="Apple"
            selling_price="80"
          />
        </div>
        {/* ))} */}
      </div>
    </div>
  );
};

export default QuickAccess;
