import React from "react";

const posts = [
  {
    PostID: 1,
    UserID: 1,
    Likes: 0,
    Comments: 0,
    Content: "This is a post",
    Timestamp: "2021-09-28T00:00:00Z",
    HasPhoto: false,
    PhotoID: null,
  },
  {
    PostID: 2,
    UserID: 1,
    Likes: 0,
    Comments: 0,
    Content: "This is another post",
    Timestamp: "2021-09-28T00:00:00Z",
    HasPhoto: false,
    PhotoID: null,
  },
];

export default function Posts() {
  return (
    <div>
      {posts.map((post) => (
        <div key={post.PostID} className="flex p-4 border border-gray-300 rounded-md mt-2 mb-2">
          <div className="mr-4 flex-shrink-0">
            <svg
              className="h-14 w-14 border border-gray-300 bg-white text-gray-300"
              preserveAspectRatio="none"
              stroke="currentColor"
              fill="none"
              viewBox="0 0 200 200"
              aria-hidden="true"
            >
              <path
                vectorEffect="non-scaling-stroke"
                strokeWidth={1}
                d="M0 0l200 200M0 200L200 0"
              />
            </svg>
          </div>
          <div>
            <h4 className="text-lg font-bold">Lorem ipsum</h4>
            <p className="mt-1">
              Repudiandae sint consequuntur vel. Amet ut nobis explicabo numquam
              expedita quia omnis voluptatem. Minus quidem ipsam quia iusto.
            </p>

            <div className="mt-6 flex">
              <div className="mr-4 flex-shrink-0">
                <svg
                  className="h-12 w-12 border border-gray-300 bg-white text-gray-300"
                  preserveAspectRatio="none"
                  stroke="currentColor"
                  fill="none"
                  viewBox="0 0 200 200"
                  aria-hidden="true"
                >
                  <path
                    vectorEffect="non-scaling-stroke"
                    strokeWidth={1}
                    d="M0 0l200 200M0 200L200 0"
                  />
                </svg>
              </div>
              <div>
                <h4 className="text-lg font-bold">Lorem ipsum</h4>
                <p className="mt-1">
                  Repudiandae sint consequuntur vel. Amet ut nobis explicabo
                  numquam expedita quia omnis voluptatem. Minus quidem ipsam
                  quia iusto.
                </p>
              </div>
            </div>
            <div className="mt-6 flex">
              <div className="mr-4 flex-shrink-0">
                <svg
                  className="h-12 w-12 border border-gray-300 bg-white text-gray-300"
                  preserveAspectRatio="none"
                  stroke="currentColor"
                  fill="none"
                  viewBox="0 0 200 200"
                  aria-hidden="true"
                >
                  <path
                    vectorEffect="non-scaling-stroke"
                    strokeWidth={1}
                    d="M0 0l200 200M0 200L200 0"
                  />
                </svg>
              </div>
              <div>
                <h4 className="text-lg font-bold">Lorem ipsum</h4>
                <p className="mt-1">
                  Repudiandae sint consequuntur vel. Amet ut nobis explicabo
                  numquam expedita quia omnis voluptatem. Minus quidem ipsam
                  quia iusto.
                </p>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
