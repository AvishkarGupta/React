import "bootstrap/dist/css/bootstrap.css";
import { useContext, useRef } from "react";
import {PostList} from "../store/post-list-store";
const CreatePost = () => {

  const {addPost} = useContext(PostList);

  const userIdElement = useRef();
  const postTitleElement = useRef();
  const postBodyElement = useRef();
  const reactionsElement = useRef();
  const tagsElement = useRef();

  const handleSubmit = (event)=>{
    event.preventDefault();
    const userId = userIdElement.current.value;
    const postTitle = postTitleElement.current.value;
    const postBody = postBodyElement.current.value;
    const reactions = reactionsElement.current.value;
    const tags = tagsElement.current.value.split(' ');
    
    userIdElement.current.value = ""
    postTitleElement.current.value = ""
    postBodyElement.current.value = ""
    reactionsElement.current.value = ""
    tagsElement.current.value = ""
    addPost(userId, postTitle, postBody, reactions, tags);
  };
  return (
    <form action="" className="createPost" onSubmit={handleSubmit}>
      <div className="mb-3">
        <label htmlFor="userId" className="form-label">Enter your User Id</label>
        <input ref={userIdElement} type="text" className="form-control" id="userId" placeholder="Your user Id..."/>
      </div>

      <div className="mb-3">
        <label htmlFor="title" className="form-label">Post Title</label>
        <input ref={postTitleElement} type="text" className="form-control" id="title" placeholder="Creat your post..."/>
      </div>

      <div className="mb-3">
        <label htmlFor="body" className="form-label">Content</label>
        <textarea ref={postBodyElement} type="text" className="form-control" id="body" placeholder="Tell us about you day..."/>
      </div>

      <div className="mb-3">
        <label htmlFor="reactions" className="form-label">Number of Reactions</label>
        <input ref={reactionsElement} type="text" className="form-control" id="reactions" placeholder="How many people reacted..."/>
      </div>

      <div className="mb-3">
        <label htmlFor="tag" className="form-label">Tags</label>
        <input ref={tagsElement} type="text" className="form-control" id="tag" placeholder="Hashtag..."/>
      </div>
      <button type="submit" className="btn btn-primary">Post</button>
    </form>
  );
}

export default CreatePost;