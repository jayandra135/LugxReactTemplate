import React from "react";

const LeftHeroSectionComp = () => {
  return (
    <div className="sec1-left">
      <h4>Welcome to lugx</h4>
      <h2>best gaming site ever!</h2>
      <p className="heroText">
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book
      </p>
      <div className="search-input">
        <form>
          <input type="text" placeholder="type something" />
          <button>Search Now</button>
        </form>
      </div>
    </div>
  );
};

export default LeftHeroSectionComp;
