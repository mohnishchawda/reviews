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
        reviews.map((item) => {
          item.date = item.updated.label;
          item.rating = item["im:rating"].label;
          item.version = item["im:version"].label;
          item.title = item.title.label;
          item.content = item.content.label;

          delete item["im:version"];
          delete item["im:rating"];
          delete item.updated;
          delete item.author;
          delete item.id;
          delete item.link;
          delete item["im:contentType"];
          delete item["im:voteSum"];
          delete item["im:voteCount"];
          return item;
        });
        console.log(reviews);
      }
    });
};
