
import { useEffect } from "react";
import ReactionButton from "./ReactionButton";
import { usePostsSelector, useGetPosts , useStatusSelector} from "./postsHooks";

const PostList = (props) => {
    const postslist = usePostsSelector()
    const statusObj = useStatusSelector()
    const callGetPosts = useGetPosts()
    

    useEffect(()=>{
       callGetPosts()
    },[])

    if(statusObj==='loading'){
        return <h1>Loading</h1>
    }
    if(statusObj==='failed'){
        return <h1>Something went Wrong</h1>
    }
    if(statusObj===''){
        return (
            <>
                <h2>Posts</h2>
                <section>
                    {postslist.map(item => {
                        return (
                            <article key={item.id}>
                                <h3>{item.title}</h3>
                                <p>{item.body}</p>
                                <ReactionButton post={item}/>
                            </article>
                )
            })}
                </section>
            </>
        )
        }
    }
   


export default PostList