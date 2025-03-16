import { useEffect } from "react";
import { fetchData } from "./actions";
import { useSelector, useDispatch } from "react-redux";

const DisplayData = () => {
  const data = useSelector((state) => state.data);
  const loading = useSelector((state) => state.loading);
  const dispatch = useDispatch();
  
  useEffect(()=>{
    dispatch(fetchData());
  },[dispatch])

  const displayData = data && data.data ? data.data :[];

  return (
    <div>
      <h2>A short Narration of Lorem Ipsum</h2>
      <h4>
        Below Contains A title and body getting from <br />
        a random API, please take your time to review
      </h4>
      {loading === true ? (
        <h3>Loading....</h3>
      ) : (
        <div >
          {displayData.map((item, index) => {
            return (
              <div key={index}>
                <p>Title: {item.title}</p>
                <p>Body: {item.description}</p> 
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default DisplayData;
