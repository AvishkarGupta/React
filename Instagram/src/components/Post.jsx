import "bootstrap/dist/css/bootstrap.css";
import { useContext } from "react";
import { CiCircleRemove } from "react-icons/ci";
import { PostList } from "../store/post-list-store";

const Post = ({post}) => {
  const {deletePost} = useContext(PostList)

  return (
    <div id="postCard" className="card postCard" style={{width: "23rem"}}>
      <div className="postCardTitle">
      <img style={{ padding:"0.5rem", width: "3rem", borderRadius: "50%"}} src="https://avatars.githubusercontent.com/u/187547066?v=4" className="card-img-top" alt="..."/>
      <h5 className="postCardUserId">{post.UserId} 
        <span onClick={()=> deletePost(post.id)} className="position-absolute top-2 start-100 translate-middle badge rounded-pill text-secondary" style={{marginLeft:"-0.5rem"}}><CiCircleRemove /></span>
        <span className="position-absolute top-100 my-2 start-0 badge rounded-pill bg-primary" style={{fontSize:"0.6rem"}}>
            {post.reactions}
        </span>
      </h5>
      </div>
      <hr  style={{margin: "0rem", border: "1px solid rgba(13, 48, 224, 0.5)"}}/>
      <div className="card-body">
        <h5 className="card-title" style={{fontWeight: "700", textShadow: "0.5px 0.5px 0.5px rgba(13, 38, 224, 0.5)"}} >{post.title} </h5>
        <p className="card-text" style={{fontWeight: "500",}} >{post.body}</p>
        {post.tags.map( (tag) => <span key={tag} className="badge text-bg-secondary postCardUsertags">{tag}</span>)}
        
        {/* <a href="#" className="btn btn-primary">Go somewhere</a> */}
    </div>
</div>);
}

export default Post;