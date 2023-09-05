import React, { useState } from 'react';
import type { GetStaticPropsContext, GetStaticPropsResult } from 'next';
import SubLayout from '../../components/SubLayout';

type PageParams = {
  id: string;
};

type ContentPageProps = {
  post: Post;
};

type Post = {
  _id: string;
  name: string;
  description: string;
};

type ResponseFromServer = {
  name: string;
  description: string;
  _id: string;
};

export async function getStaticProps({
  params,
}: GetStaticPropsContext<PageParams>): Promise<
  GetStaticPropsResult<ContentPageProps>
> {
  try {
    let response = await fetch(
      process.env.URL + '/api/getContent?id=' + params?.id,
      { cache: 'no-store' }
    );

    let responseFromServer: ResponseFromServer = await response.json();

    return {
      // Passed to the page component as props
      props: {
        post: {
          _id: responseFromServer._id,
          name: responseFromServer.name,
          description: responseFromServer.description,
        },
      },
    };
  } catch (e) {
    console.log('error ', e);
    return {
      props: {
        post: {
          _id: '',
          name: '',
          description: '',
        },
      },
    };
  }
}

export async function getStaticPaths() {
  let posts = await fetch(process.env.URL + '/api/getContents', {
    cache: 'no-store',
  });

  let postFromServer: [Post] = await posts.json();
  return {
    paths: postFromServer.map((post) => {
      return {
        params: {
          id: post._id,
        },
      };
    }),
    fallback: false, // can also be true or 'blocking'
  };
}

export default function EditPost({
  post: { _id, name, description },
}: ContentPageProps) {
  const [postTitle, setPostTitle] = useState(name);
  const [postContent, setPostContent] = useState(description);
  const [error, setError] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    if (postTitle && postContent) {
      try {
        let response = await fetch(
          process.env.URL + '/api/editContent?id=' + _id,
          {
            method: 'POST',
            cache: 'no-store',
            body: JSON.stringify({
              name: postTitle,
              description: postContent,
            }),
            headers: {
              Accept: 'application/json, text/plain, */*',
              'Content-Type': 'application/json',
            },
          }
        );
        response = await response.json();

        setError('');
        setMessage('Post edited successfully');
      } catch (errorMessage: any) {
        setError(errorMessage);
      }
    } else {
      return setError('All fields are required');
    }
  };

  return (
    <SubLayout topic="manage" btn="false">
      <div className="relative">
        <form onSubmit={handleSubmit} className="form w-[80%] m-auto ">
          {error ? <div className="alert-error">{error}</div> : null}
          {message ? (
            <div className="alert-message text-blue-700 font-poppins mb-4 text-center font-bold">
              {message}
            </div>
          ) : null}
          <div className="form-group flex flex-row justify-start mb-4">
            <label className="mr-4 w-[20%] font-poppinsbold">Name</label>
            <input
              type="text"
              placeholder="Title of the post"
              onChange={(e) => setPostTitle(e.target.value)}
              value={postTitle ? postTitle : ''}
              className="w-[75%] bg-gray-300 rounded-md p-2 text-center"
            />
          </div>
          <div className="form-group flex flex-row justify-start mb-4 ">
            <label className="mr-4 w-[20%] font-poppinsbold">Content</label>
            <textarea
              name="content"
              placeholder="Content of the post"
              value={postContent ? postContent : ''}
              onChange={(e) => setPostContent(e.target.value)}
              cols={40}
              rows={8}
              className="w-[75%] bg-gray-300 rounded-md p-2"
            />
          </div>
          <div className="btn-manage flex flex-row justify-between">
            <div className="form-group">
              <button
                type="submit"
                className="submit_btn border-solid border-2 border-black text-black hover:text-blue-600 hover:bg-gray-300 font-semibold p-2 rounded-md hover:border-blue-700"
              >
                Update
              </button>
            </div>
          </div>
        </form>
      </div>
    </SubLayout>
  );
}
