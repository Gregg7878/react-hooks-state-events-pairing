import React from "react";
import video from "../data/video";

function Element({title,vedio,views,upcount, downcount,comments}){
    return(
        <div>
       <h3>{title}</h3>
         </div>
        <div>
            {comments.map((item) => (<p key={item.id}>item.comment</p>))}
         </div>
    );
}
;


export default Element;