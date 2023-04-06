import React, { useState } from "react";
import style from "./style/home.module.css";
import { useNavigate } from "react-router-dom";
import axios from "axios";
function CreateBlog() {
  const next = useNavigate();

  const initialValues = {
    blogHeading: "",
    content: "",
  };

  const [values, setValues] = useState(initialValues);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
  };

  const back = () => {
    next("/");
  };

  // create blog function

  const handleClick = (event) => {
    event.preventDefault();

    axios
      .post("http://localhost:3200/AddBlog", values)
      .then((response) => console.log("res", response))
      .catch(function (error) {
        // handle error
        console.log(error, "error");
      });
    setValues("");
    next("/");
  };
  return (
    <div>
      <div className={style.inputcard}>
        <h2 className="text-center">Create Blog</h2>
        <form>
          <div className="mb-3">
            <label className="form-label">Blog Title</label>
            <input
              type="text"
              name="blogHeading"
              value={values.blogHeading}
              onChange={handleInputChange}
              className="form-control"
              id="formGroupExampleInput1"
              placeholder="Title here..."
            />
          </div>
          <div class="mb-3">
            <label className="form-label">Content</label>
            <textarea
              type="text"
              name="content"
              value={values.content}
              onChange={handleInputChange}
              className="form-control"
              id="formGroupExampleInput2"
              placeholder="Content here..."
            />
          </div>
          <div style={{ display: "flex", gap: "10px" }}>
            <button type="submit" className="btn btn-dark" onClick={back}>
              Back
            </button>
            <button
              type="submit"
              className="btn btn-success"
              onClick={handleClick}
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default CreateBlog;
