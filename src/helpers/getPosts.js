const getHoursAgo = (created) => {
  const diff = (new Date() - new Date(created)) / 3600000;
  return Math.ceil(diff);
};

export const getPosts = async (option = "", page = 0) => {
  const url = `https://hn.algolia.com/api/v1/search_by_date?query=${option.toLowerCase()}&page=${page}`;

  try {
    const res = await fetch(url);
    const data = await res.json();
    console.log(data);
    const { hits } = data;
    const acceptedPosts = hits.filter(
      (h) => h.author && h.story_title && h.story_url && h.created_at
    );
    const posts = acceptedPosts.map((post) => {
      return {
        author: post.author,
        title: post.story_title,
        url: post.story_url,
        created: getHoursAgo(post.created_at),
        id: post.story_id,
      };
    });
    return posts;
  } catch (error) {
    console.log(error);
    return [];
  }
};
