export const getReviews = async (url) => {
  const urlObj = new URL(url);
  const pathParts = urlObj.pathname.split("/");

  const country = pathParts[1];
  const appName = pathParts[3];
  const id = pathParts[4].replace("id", "");
  
  return fetch(
    `https://itunes.apple.com/${country}/rss/customerreviews/id=${id}/json`,
    {
      headers: {
        Accept: "application/json",
      },
      cache: "no-store", // Set cache option here
    }
  ).then((response) => response.json());
};
