import { useState } from "react";

export default function CommentSection({ postSlug }) {
  const [comments, setComments] = useState([]);
  const [commentText, setCommentText] = useState("");

  const handleCommentChange = (event) => {
    setCommentText(event.target.value);
  };

  const handleCommentSubmit = (event) => {
    event.preventDefault();
    if (commentText.trim()) {
      setComments([...comments, commentText.trim()]);
      setCommentText("");
    }
  };

  return (
    <div className="comment-section">
      <h2 className="text-xl font-bold mb-4">Comments</h2>
      <div className="mb-4">
        {comments.length > 0 ? (
          <ul className="list-disc pl-5">
            {comments.map((comment, index) => (
              <li key={index} className="mb-2">
                {comment}
              </li>
            ))}
          </ul>
        ) : (
          <p>No comments yet.</p>
        )}
      </div>
      <form onSubmit={handleCommentSubmit}>
        <textarea
          value={commentText}
          onChange={handleCommentChange}
          rows="4"
          className="w-full p-2 border border-gray-300 rounded"
          placeholder="Add a comment..."
        />
        <button
          type="submit"
          className="mt-2 bg-blue-500 text-white px-4 py-2 rounded"
        >
          Submit
        </button>
      </form>
    </div>
  );
}
