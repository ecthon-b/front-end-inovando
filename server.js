// index.js
module.exports = () => {
  const data = { users: [], renatos: [], posts: [] };
  // Create 1000 users
  for (let i = 0; i < 95; i++) {
    data.users.push({ id: i, name: i, lastname: `${i}user` });
  }
  for (let i = 0; i < 95; i++) {
    data.posts.push({ id: i, title: i, body: `${i}post` });
  }

  return data;
};
