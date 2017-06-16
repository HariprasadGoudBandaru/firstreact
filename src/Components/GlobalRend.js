const protocol = window.location.protocol;
const slashes = protocol.concat("//");
const host = slashes.concat(window.location.hostname);

const urls = {
  users_list_url: host + '/cake/blog/users/index',
}

export default urls;