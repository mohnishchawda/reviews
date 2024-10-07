export const getReviews = async (country, id) => {
  return fetch(
    `https://itunes.apple.com/${country}/rss/customerreviews/id=${id}/json`,
    {
      headers: {
        Accept: "application/json",
      },
      cache: "no-store", // Set cache option here
    }
  )
    .then((response) => response.json())
    .then((json_response) => {
      if (json_response["feed"]["entry"]) {
        const reviews = json_response["feed"]["entry"];
        console.log(reviews);
      }
    });
};
