import http from "./post.http-common";

class PostDataService {
  getAll() {
    return http.get("/posts");
  }

  get() {
    return http.get(`/posts/:id`);
  }

  create() {
    return http.put("/posts");
  }



}

const PostData = new PostDataService();
export default PostData;