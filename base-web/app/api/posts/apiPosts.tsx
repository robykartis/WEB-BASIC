// Get Posts data
async function getPostsData() {
  const api = process.env.BACKEND_URL
  const res = await fetch(`${api}/api/posts`, {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error('Failed to fetch data')
  }

  const posts = await res.json()
  return posts.data
}
export default getPostsData;



