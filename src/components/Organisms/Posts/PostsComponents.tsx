import React from 'react';

interface PostProps {
  title: string;
  body: string;
  tags: string[];
  reactions: {
    likes: number;
    dislikes: number;
  };
  views: number;
}

const PostsComponents: React.FC<PostProps> = ({ title, body, tags, reactions, views }) => {
  return (
    <div className="max-w-full rounded overflow-hidden shadow-lg bg-white">
      <div className="p-4">
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-gray-700 mb-4">{body}</p>
        <div className="text-sm text-gray-500 mb-4">
          <span className="mr-2">Views: {views}</span>
          <span className="mr-2">Likes: {reactions.likes}</span>
          <span>Dislikes: {reactions.dislikes}</span>
        </div>
        <div className="flex flex-wrap gap-2">
          {tags.map((tag, index) => (
            <span key={index} className="bg-gray-200 text-gray-700 text-sm px-2 py-1 rounded">
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PostsComponents;
