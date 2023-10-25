import React from "react";
import "./Cover.css";
import img from "../../assets/codedef.png";
import { BiMoon, BiSolidMoon, BiSolidBookAdd } from "react-icons/bi";
import { BsFillBookmarkPlusFill } from "react-icons/bs";

function ArticleCover({
  setNight,
  night,
  onClick,
  author,
  date,
  title,
  courseimg,
  authorimg,
  duration,
}) {
  return (
    <main className="cover-contain">
      <div className="marginn"></div>
      <div className="mode">
        <BiMoon
          onClick={() => setNight(!night)}
          className={night === true ? "moon" : "light"}
          size={40}
        />
      </div>
      <section
        style={{
          backgroundImage: `url(${courseimg})`,
        }}
        className="background-cover"
      >
        <div className="cover-header">
          <h1>{title}</h1>
          <img src={authorimg} alt={"author"} />
          <div>
            <p>
              <h4>{author}</h4>
            </p>
            <p>
              {date} <br /> {duration}
            </p>
          </div>
        </div>
      </section>
      <section className="add">
        <div onClick={onClick}>
          <BsFillBookmarkPlusFill
            className="add-to"
            size={60}
            onClick={() => onClick()}
          />
        </div>
      </section>
    </main>
  );
}

export default ArticleCover;
