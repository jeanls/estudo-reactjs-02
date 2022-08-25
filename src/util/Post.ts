import Author from "./Author";

interface Post {
    id: number,
    author: Author,
    content: string,
    publishedAt: Date
}

export default Post;
