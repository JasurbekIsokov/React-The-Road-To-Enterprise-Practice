import { useQuery } from 'react-query';
import { fetchPosts, Post } from '../../api/postsApi';

const FetchPosts = () => {
  const {
    data: posts,
    isLoading,
    isSuccess,
    isError,
  } = useQuery<Post[]>('posts', fetchPosts);

  return (
    <div className='py-8 max-w-2xl mx-auto'>
      <div>
        <h2 className='font-bold text-2xl mb-4'>Posts</h2>
        {isError ? (
          <p className='text-red-900'>
            There was a problem with fetching quotes
          </p>
        ) : null}{' '}
        {isLoading ? <p>Fetching quotes</p> : null}
        {isSuccess ? (
          <div className='max-h-96 overflow-y-auto divide-y'>
            {posts?.map((post) => {
              return (
                <blockquote
                  key={post.id}
                  className='relative p-4 text-xl italic border-l-4 bg-neutral-100 text-neutral-600 border-neutral-500 quote'
                >
                  <p className='mb-4'>"{post.title}"</p>
                  <cite className='flex items-center justify-center'>
                    <div className='flex flex-col items-start'>
                      <span className='mb-1 text-sm italic font-bold'>
                        {post.body}
                      </span>
                    </div>
                  </cite>
                </blockquote>
              );
            })}
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default FetchPosts;
