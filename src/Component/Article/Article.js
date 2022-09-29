import React from "react";

const Article = () => {
  return (
    <div className="mt-[100px] p-[100px]">
      <div
        tabIndex={0}
        className="collapse collapse-plus border border-base-300 bg-base-100 rounded-box"
      >
        <div className="collapse-title text-xl font-medium">
          How does react work?
        </div>
        <div className="collapse-content">
          <p>
            React is a JavaScript library developed by Facebook which, among
            other things, was used to build Instagram.com. Its aim is to allow
            developers to easily create fast user interfaces for websites and
            applications alike. The main concept of React. js is virtua
          </p>
        </div>
      </div>
    </div>
  );
};

export default Article;
