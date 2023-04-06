import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import style from "./style/bloglist.module.css";
import { format } from "date-fns";
import img from "../assets/images/designer-1.jpg";
import axios from "axios";

function Bloglist() {
  const next = useNavigate();
  const [datas, setDatas] = useState([]);
  const data = datas;

  const handleClick = (id) => {
    next("/blog", { state: { id: id } });
  };

  // Get all blog List

  useEffect(() => {
    axios
      .get("http://localhost:3200/GetBlogList")

      .then(function (response) {
        // handle success
        setDatas(response.data.data);
      })
      .catch(function (error) {
        // handle error
        console.log(error, "network");
      });
  }, []);

  return (
    <div>
      <div className={style.header}>
        <h1 className="text-center">Welcome to Blog Page</h1>
        <h5 className="text-center">Publish your passions, your way</h5>
        <p className="text-center">
          Create a unique and beautiful blog easily.
        </p>
      </div>
      <div className="container mt-4">
        <div className="row">
          {data.map((item, index) => {
            return (
              <div key={index} className="col-lg-4 col-md-6 mb-4 pb-2 ">
                <div
                  className={style.zoom}
                  onClick={() => handleClick(item._id)}
                >
                  <div
                    className="card "
                    style={{
                      boxShadow:
                        "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
                    }}
                  >
                    <img src={img} className="card-img-top" alt="..." />

                    <div className="card-body">
                      <h5 className="card-title">{item.blogHeading}</h5>

                      <div className={style.cardtime}>
                        <div>
                          {format(new Date(item.createdAt), "MMMM dd, yyyy")}
                        </div>
                        <button
                          style={{
                            border: "none",
                            backgroundColor: "white",
                          }}
                          type="submit"
                          onClick={() => handleClick(item._id)}
                        >
                          Start Reading
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Bloglist;
