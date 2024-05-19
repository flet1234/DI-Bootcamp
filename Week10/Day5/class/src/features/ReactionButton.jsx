import { useDispatch } from "react-redux";
import { adreaction } from "./postSlice";
import { memo } from "react";

const reactionEmoji = {
    thumbsUp: "👍",
    wow: "😮",
    heart: "❤️",
    rocket: "🚀",
    coffee: "☕",
  };



const ReactionButton = ({post}) => {
    console.log('renderButton');
    const dispatch=useDispatch()
    const renderReacton = Object.entries(reactionEmoji).map(([name,emoji])=>{
        return (
                <button key={name} className="reactionButton"
                onClick={()=>dispatch(adreaction({id:post.id, name}))}
                >
                    {emoji} {post.reaction[name]}
                </button>
        )
    })


    return <div>{renderReacton}</div>
}

export default memo(ReactionButton)