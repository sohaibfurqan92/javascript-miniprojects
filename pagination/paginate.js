const paginate = (followers) => {
  const itemsPerPage = 10;

  const followerPages = [];

  //create multiple arrays from one array

  for (let i = 0; i < followers.length; i += itemsPerPage) {
    followerPages.push(followers.slice(i, i + itemsPerPage));
  }
  return followerPages;
};

export default paginate;
