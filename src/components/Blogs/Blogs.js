import React from "react";
import "./Blogs.css";
const Blogs = () => {
  return (
    <div className="blogs">
      <div className="context-api">
        <h1>CONTEXT API</h1>
        <p>
          Context Api solves a problem which was due to props drilling. With
          context api, data need to be drilled down to every corresponding
          components. If the data is used by context api in the parent
          component, it can be used by anytime anywhere in the children.
        </p>
      </div>
      <div className="semantic-tags">
        <h1>SEMANTIC TAGS</h1>
        <p>
          Semantic Tags are very popular now a days. Because it clearly explain
          the right usage for the right tags.It helps both the developer and the
          browser. Search Engines rank the website based on the right semantic
          tags used for right content.
        </p>
      </div>
    </div>
  );
};

export default Blogs;
