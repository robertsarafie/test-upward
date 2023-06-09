const HomeCustomRightArrow = ({ onClick }) => {
  return (
    <button className="home-arrow-right" onClick={onClick}>
      <div className="circle">
        <i className="fa-solid fa-chevron-right"></i>
      </div>
    </button>
  );
};

const HomeCustomLeftArrow = ({ onClick }) => {
  return (
    <button className="home-arrow-left" onClick={onClick}>
      <div className="circle">
        <i className="fa-solid fa-chevron-left"></i>
      </div>
    </button>
  );
};

export { HomeCustomRightArrow, HomeCustomLeftArrow };
