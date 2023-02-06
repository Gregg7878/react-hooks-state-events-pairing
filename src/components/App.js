import video from "../data/video.js";
import Element from "./Element.js";

function App() {
  console.log("Here's your data:", video);
  const {id, title, embedUrl, views, createdAt, upvotes, downvotes, comments}=video
  
  return (
    <>
    <div className="App">
      <iframe
        width="919"
        height="525"
        src="https://www.youtube.com/embed/dQw4w9WgXcQ"
        frameBorder="0"
        allowFullScreen
        title="Thinking in React"
      />
      <Element title={title} vedio={embedUrl} views={views} time={createdAt} upcount={upvotes} downcount={downvotes} comments={comments}  />
    </div>
    </>
    
  );
}

export default App;
