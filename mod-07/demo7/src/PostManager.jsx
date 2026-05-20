import { useEffect, useState } from "react";

export default function PostManager() {
  const [posts, setPosts] = useState([]);
  const [title, setTitle] = useState("");
  const [editingId, setEditingId] = useState(null);

  // READ
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts?_limit=5")
      .then((res) => res.json())
      .then((data) => setPosts(data))
      .catch((err) => console.error(err));
  }, []);

  // CREATE + UPDATE
  const handleSubmit = async (e) => {
    e.preventDefault();

    const postData = {
      title,
      body: "Demo content",
      userId: 1,
    };

    // UPDATE
    if (editingId) {
      try {
        const res = await fetch(
          `https://jsonplaceholder.typicode.com/posts/${editingId}`,
          {
            method: "PUT",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(postData),
          }
        );

        if (!res.ok) {
          throw new Error(`HTTP error: ${res.status}`);
        }

        const updatedPost = await res.json();

        // setPosts(
        //   posts.map((post) =>
        //     post.id === editingId ? updatedPost : post
        //   )
        // );
        setPosts((prevPosts) =>
          prevPosts.map((post) =>
            post.id === editingId
              ? { ...post, ...updatedPost }
              : post
          )
        );


        setEditingId(null);
      } catch (err) {
        console.error("Request failed:", err);
      }
    } else {
      // CREATE
      try {
        const res = await fetch(
          "https://jsonplaceholder.typicode.com/posts",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(postData),
          }
        );

        if (!res.ok) {
          throw new Error(`HTTP error: ${res.status}`);
        }

        const newPost = await res.json();

        setPosts([newPost, ...posts]);
      } catch (err) {
        console.error("Request failed:", err);
      }
    }

    setTitle("");
  };

  // DELETE
  const deletePost = async (id) => {
    try {
      const res = await fetch(
        `https://jsonplaceholder.typicode.com/posts/${id}`,
        {
          method: "DELETE",
        }
      );

      if (!res.ok) {
        throw new Error(`HTTP error: ${res.status}`);
      }

      setPosts(posts.filter((post) => post.id !== id));
    } catch (err) {
      console.error("Delete failed:", err);
    }
  };

  // START EDITING
  const editPost = (post) => {
    setTitle(post.title);
    setEditingId(post.id);
  };

  return (
    <div style={{ padding: 20, fontFamily: "Arial" }}>
      <h1>Post Manager</h1>

      <form onSubmit={handleSubmit}>
        <input
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Post title"
        />

        <button type="submit">
          {editingId ? "Update Post" : "Add Post"}
        </button>
      </form>

      <hr />

      {posts.map((post) => (
        <div
          key={post.id}
          style={{
            border: "1px solid #ccc",
            padding: 10,
            marginTop: 10,
          }}
        >
          <h3>{post.title}</h3>

          <button onClick={() => editPost(post)}>
            Edit
          </button>

          <button onClick={() => deletePost(post.id)}>
            Delete
          </button>
        </div>
      ))}
    </div>
  );
}