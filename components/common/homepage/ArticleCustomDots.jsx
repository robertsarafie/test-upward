export const ArticleCustomDots = ({ onMove, index, onClick, active }) => {
  // onMove means if dragging or swiping in progress.
  // active is provided by this lib for checking if the item is active or not.
  return (
    <li
      className={active ? 'dots-article active-article' : 'dots-article'}
      onClick={() => onClick()}
    ></li>
  );
};
