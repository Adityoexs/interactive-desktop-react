import React, { useEffect, useState } from 'react';
import PostsComponents from './PostsComponents';
import Pagination from '../Pagination';

const PostsList: React.FC = () => {
  const [get, setGet] = useState<any[]>([]); // Data from fetch


      
  
        // Fetching function
          const fetchFunct = async () => {
            const url = `https://dummyjson.com/posts`;
            const response = await fetch(url);
            const data = await response.json();
            setGet(data.posts); // Set the fetched data
          };
        
          useEffect(() => {
            fetchFunct(); // Fetch data when component mounts
          }, []);

          const itemsPerPage = 3;
          const [currentPage, setCurrentPage] = useState(1);
        
          // Recalculate totalPages and currentData dynamically
          const totalPages = Math.ceil(get.length / itemsPerPage);
        
          // Handle page change
          const handlePageChange = (page: number) => {
            setCurrentPage(page);
          };

          const currentData = get.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);

  return (
    <div className="grid lg:grid-cols-1 sm:grid-cols-2 md:grid-cols-1 gap-6 p-4">
      {currentData.map(post => (
        <PostsComponents
          key={post.id}
          title={post.title}
          body={post.body}
          tags={post.tags}
          reactions={post.reactions}
          views={post.views}
        />
      ))}
      <div className="grid grid-cols-1 mt-4">
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={handlePageChange}
        />
      </div>
    </div>
  );
};

export default PostsList;