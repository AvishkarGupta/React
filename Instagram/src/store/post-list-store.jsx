import { useReducer, createContext } from "react";

export const PostList = createContext({
  postList: [],
  addPost: () => {},
  deletePost: () => {}
});

const postListReducer = (currPostList, action) =>{
  let newPostList = currPostList
  if (action.type === "DELETE_POST"){
    newPostList = currPostList.filter((post)=>  post.id !== action.payload.postId);
  }else if (action.type === "ADD_POST"){
    newPostList = [action.payload, ...currPostList]
  }
  return newPostList;
}

const PostListProvider = ({children}) => {
  const [postList, dispatchPostList] = useReducer(postListReducer, DEFAULT_POST_LIST);

  const addPost = (userId, postTitle, postBody, reactions, tags) => {
    
    dispatchPostList({
      type: "ADD_POST",
      payload:{
        id: Date.now(),
        title: postTitle,
        body: postBody,
        reactions: reactions,
        UserId: userId,
        tags: tags
      }
    })
  };

  const deletePost = (postId) => {
    dispatchPostList({
      type: "DELETE_POST",
      payload: {
        postId,
      },
    });
  };
  return <PostList.Provider value={{postList, addPost, deletePost}}>{children} </PostList.Provider>
}

const DEFAULT_POST_LIST = [{
  id: "1",
  title: "Day in a life at Google",
  body: "Today is my first day at Google as a Software engineer.",
  reactions: "No one liked this post yet.",
  UserId: "Avishkar Gupta",
  tags: ['software', 'google', 'dayInALife']
},
{
  id: "2",
  title: "It was hard but I did it!",
  body: "One Dream, 6 months and 6 figure salary ",
  reactions: "Liked by Prachi, and 99 others",
  UserId: "Avishkar Gupta",
  tags: ['software', 'google', 'hustle']
},];

export default PostListProvider;
// export default PostList;

