import React, { useEffect, useState } from "react";
import { getDocs, collection } from "firebase/firestore";
import db from "../../firebase/clientApp";
import { AppstoreOutlined, CopyOutlined } from "@ant-design/icons";
import projectImage from "../../public/static/project1.png";
import Image from "next/image";

const classNamePrefix = "post-page";

const PostPage = () => {
  const [post, setPost] = useState([]);
  const [postContainerStyle, setPostContainerStyle] =
    useState<string>("slider");

  const fetchPost = async () => {
    await getDocs(collection(db, "posts")).then((querySnapshot) => {
      const newData = querySnapshot.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }));
      setPost(newData);
      console.log(post, newData);
    });
  };

  const handleChangePostContainerStyle = (style: string) => {
    setPostContainerStyle(style);
  };

  useEffect(() => {
    fetchPost();
  }, []);

  return (
    <div className={classNamePrefix}>
      <div className={`${classNamePrefix}__toolbar`}>
        <div className={`${classNamePrefix}__toolbar-group`}>
          <div
            className={`${classNamePrefix}__toolbar-icon-wrapper`}
            onClick={() => handleChangePostContainerStyle("slider")}
          >
            <CopyOutlined
              rev
              className={`${classNamePrefix}__toolbar-icon ${
                postContainerStyle === "slider" ? "post-style-active" : ""
              }`}
            />
          </div>

          <div
            className={`${classNamePrefix}__toolbar-icon-wrapper`}
            onClick={() => handleChangePostContainerStyle("grid")}
          >
            <AppstoreOutlined
              rev
              className={`${classNamePrefix}__toolbar-icon ${
                postContainerStyle === "grid" ? "post-style-active" : ""
              }`}
            />
          </div>
        </div>
      </div>

      <div
        className={`${classNamePrefix}__post-list`}
        style={{
          position: "relative",
        }}
      >
        {post.length > 0 &&
          post.map((p, index) => (
            <div
              className={`${classNamePrefix}__item`}
              style={{
                position:
                  postContainerStyle === "slider" ? "absolute" : "relative",
              }}
              key={p.id}
            >
              <div
                className={`${classNamePrefix}__item-image`}
                style={{ backgroundImage: `url(${projectImage.src})` }}
              >
              </div>

              {postContainerStyle === "slider" && (
                <div className={`${classNamePrefix}__item-info`}>
                  <span>Post number {index + 1}</span>
                  <span>{p.title}</span>
                  <div>{p.message}</div>
                </div>
              )}
            </div>
          ))}
      </div>
    </div>
  );
};

export default PostPage;
