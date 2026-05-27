let blogPosts = [
  {
    id: 1,
    title: "Morning Walk",
    content: "Went for a walk today."
  },
  {
    id: 2,
    title: "Node Practice",
    content: "Learned Express routing."
  }
];

export const getAllPosts = (req, res) => {
  res.json(blogPosts);
};


export const getPostById = (req, res) => {
  const postId = parseInt(req.params.id);
  const post = blogPosts.find(p => p.id === postId);
  if (!post) {
    return res.status(404).json({ message: "Post not found" });
  }
  res.json(post);
};

export const createPost = (req, res) => {
     const newPost = req.body;

  blogPosts.push(newPost);

  res.status(201).json({
    message: "Post added",
    data: newPost
  });
};

export const updatePost = (req, res) => {
    const postId = parseInt(req.params.id);

  const index = blogPosts.findIndex((item) => item.id === postId);

  if (index === -1) {
    return res.status(404).json({
      message: "Post not found"
    });
  }

  blogPosts[index] = req.body;

  res.json({
    message: "Post updated",
    data: blogPosts[index]
  });
};


export const deletePost = (req, res) => {
   const postId = parseInt(req.params.id);

  blogPosts = blogPosts.filter((item) => item.id !== postId);

  res.json({
    message: "Post deleted"
  });
};