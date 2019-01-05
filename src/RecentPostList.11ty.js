class RecentPostList {
  render ({collections}) {
    function renderPost (post) {
      return `
        <li>
          <a href="${post.data.permalink}">xxx${post.data.title}</a>
        </li>
      `;
    }

    return `
      <h2>Recent posts</h2>
      <ul>
        ${[].concat(collections).reverse().slice(2).map(renderPost)}
      </ul>
    `;
  }
}

module.exports = RecentPostList;
