export function filterData(allRestaurants, searchText) {
    const ans = allRestaurants.filter((restaurant) =>
      restaurant?.info?.name.toLowerCase().includes(searchText.toLowerCase())
    );
    return ans;
  }
  