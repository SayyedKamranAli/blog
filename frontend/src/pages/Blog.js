import axios from "axios";
import React, { useEffect, useState } from "react";
import style from "./style/blog.module.css";
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";
import img from "../assets/images/how-to-create-a-winning-crm-strategy-salesblink.webp";
import img1 from "../assets/images/author.jpg";
function Blog() {
  const next = useNavigate();
  const [pageState, setPageState] = useState(1);
  const location = useLocation();
  const id = location.state.id;
  const initialValues = {
    author: "",
    comment: "",
    blogId: id,
  };

  const [values, setValues] = useState(initialValues);
  const [datas, setDatas] = useState([]);
  const [comment, setComment] = useState([]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
  };
  const handleClick = (event) => {
    event.preventDefault();
    next("/");
  };

  // Add Comments Function

  const handleComment = (event) => {
    event.preventDefault();
    Array.from(document.querySelectorAll("input")).forEach(
      (input) => (input.value = "")
    );
    axios
      .post("http://localhost:3200/AddComment", values)
      .then((response) => console.log("res", response))
      .catch(function (error) {
        // handle error
        console.log(error, "error");
      })
      .finally(() => {
        setPageState(pageState + 1);
        values.author = "";
        values.comment = "";
      });
  };

  // Api Calls

  useEffect(() => {
    axios
      .get("http://localhost:3200/GetBlogContent/" + id + "")

      .then(function (response) {
        // handle success
        setDatas(response.data.data);
      })
      .catch(function (error) {
        // handle error
        console.log(error, "network");
      });
    axios
      .get("http://localhost:3200/GetBlogComments/" + id + "")

      .then(function (response) {
        // handle success
        setComment(response.data.data);
      })
      .catch(function (error) {
        // handle error
        console.log(error, "network");
      });
  }, [id, pageState]);
  return (
    <div>
      <div className="container">
        <div className="row">
          <div className=" col-lg-1 col-md-1 "></div>
          <div className=" col-lg-10 col-md-10 mb-4 pb-2">
            <div>
              <div className="card ">
                {datas.map((item, index) => {
                  return (
                    <div>
                      <img src={img} className="card-img-top" alt="..." />

                      <div className="card-body">
                        <h2 className="card-title text-center">
                          {item.blogHeading}
                        </h2>
                        <p>{item.content}</p>
                      </div>
                    </div>
                  );
                })}
                <h3 className="text-center">Comments</h3>
                {comment.map((item, index) => {
                  return (
                    <div key={index} className={style.commentsec}>
                      <div>
                        <img src={img1} className={style.img1} alt="..." />
                      </div>

                      <div className={style.comments}>
                        {item.comment}&nbsp;
                        <span>by&nbsp;{item.author}</span>
                      </div>
                    </div>
                  );
                })}

                <form className={style.commentform}>
                  <div className="mb-3">
                    <input
                      type="text"
                      name="author"
                      value={values.author}
                      onChange={handleInputChange}
                      className="form-control"
                      id="formGroupExampleInput1"
                      placeholder="Your Name..."
                      style={{
                        borderTop: "none",
                        borderLeft: "none",
                        borderRight: "none",
                        borderRadius: "0",
                      }}
                    />
                  </div>
                  <div class="mb-3">
                    <textarea
                      type="text"
                      name="comment"
                      value={values.comment}
                      onChange={handleInputChange}
                      className="form-control"
                      id="formGroupExampleInput2"
                      placeholder="Add a comment..."
                      style={{
                        borderTop: "none",
                        borderLeft: "none",
                        borderRight: "none",
                        borderRadius: "0",
                      }}
                    />
                  </div>
                  <div className={style.commentbutton}>
                    <button
                      type="submit"
                      className="btn btn-info"
                      onClick={handleComment}
                    >
                      Drop Here!
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
          <div className=" col-lg-1 col-md-1 "></div>
        </div>
      </div>
      <span> &#8592;</span>{" "}
      <span style={{ cursor: "pointer" }} onClick={handleClick}>
        Go Back
      </span>
    </div>
  );
}

export default Blog;
