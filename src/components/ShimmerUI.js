
// Shimmer card to display 
const CardShimmer = () => {
  return (
    <div className="shimmer-card">
      <div className="shimmer-img stroke animate"></div>
      <div className="shimmer-title stroke animate"></div>
      <div className="shimmer-tags stroke animate "></div>
      <div className="shimmer-details stroke animate "></div>
    </div>
  );
};

export const MenuItemsShimmer = () => {
  return (
    <div className="restaurant-menu">
      <div className="restaurant-summary stroke-color animate">
        <img className="shimmer-img stroke animate" />
        <div className="restaurant-summary-details">
          <h2 className="shimmer-w40  stroke animate"></h2>
          <p className="shimmer-w20 stroke animate"></p>
          <div className="shimmer-w60  stroke animate">
          </div>
        </div>
      </div>

      <div className="restaurant-menu-content">
        <div className="menu-items-container">
          <div className="menu-title-wrap ">
            <h3 className="shimmer-w40 stroke animate"></h3>
            <p className="shimmer-w20 stroke animate"></p>
          </div>
          <div className="menu-items-list">
            { Array(20).fill("").map( (element, index)  => 
            <div className="shimmer-menu-card" key={index}>
              <div className="shimmer-item-details">
                <h3 className="shimmer-w40  stroke animate"></h3>
                <p className="shimmer-w20  stroke animate"> </p>
                <p className="shimmer-w60  stroke animate"></p>
              </div>
              <div className="shimmer-img-wrapper">
                <img className="shimmer-img stroke animate" /> 
                <div className="shimmer-btn stroke animate"> </div>
              </div>
            </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}


//Shimmer is dummy restaurant CARDS
 const Shimmer = () => {
  const shimmerCards = Array(15).fill(null);
  return (
    <div className="shimmer-container">
      {shimmerCards.map((_, index) => {
          return <CardShimmer key={index} />;
      })}
    </div>
  );
};

export default Shimmer;
