/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */

// import React from 'react'
const commentsData = [
  {
    name: "Mohan",
    comment: "loperum , hello every one",
    replies: [
      {
        name: "Mohan",
        comment: "loperum , hello every one",
        replies: [ {
            name: "Mohan",
            comment: "loperum , hello every one",
            replies: [],
          },
          {
            name: "Mohan",
            comment: "loperum , hello every one",
            replies: [ {
                name: "Mohan",
                comment: "loperum , hello every one",
                replies: [],
              },],
          },],
      },
      {
        name: "Mohan",
        comment: "loperum , hello every one",
        replies: [],
      },
      {
        name: "Mohan",
        comment: "loperum , hello every one",
        replies: [
          {
            name: "Mohan",
            comment: "loperum , hello every one",
            replies: [],
          },
          {
            name: "Mohan",
            comment: "loperum , hello every one",
            replies: [
              {
                name: "Mohan",
                comment: "loperum , hello every one",
                replies: [
                  {
                    name: "Mohan",
                    comment: "loperum , hello every one",
                    replies: [ {
                        name: "Mohan",
                        comment: "loperum , hello every one",
                        replies: [ {
                            name: "Mohan",
                            comment: "loperum , hello every one",
                            replies: [ {
                                name: "Mohan",
                                comment: "loperum , hello every one",
                                replies: [],
                              },
                            ],
                          },],
                      },],
                  },
                ],
              },
              {
                name: "Mohan",
                comment: "loperum , hello every one",
                replies: [],
              },
            ],
          },
        ],
      },
    ],
  },
  {
    name: "Mohan",
    comment: "loperum , hello every one",
    replies: [],
  },
  {
    name: "Mohan",
    comment: "loperum , hello every one",
    replies: [],
  },
  {
    name: "Mohan",
    comment: "loperum , hello every one",
    replies: [],
  },
  {
    name: "Mohan",
    comment: "loperum , hello every one",
    replies: [
      {
        name: "Mohan",
        comment: "loperum , hello every one",
        replies: [],
      },
    ],
  },
  {
    name: "Mohan",
    comment: "loperum , hello every one",
    replies: [],
  },
];

const Comment = ({ info }) => {
  const { name, comment} = info;
  return (
    <>
      <div className="flex bg-gray-100">
        <img
          className="w-10 object-cover h-10 my-2"
          alt="user"
          src="https://www.iconpacks.net/icons/2/free-user-icon-3296-thumb.png"
        />
        <div className="px-2">
          <p className="font-bold">{name}</p>
          <p>{comment}</p>
        </div>
      </div>
    </>
  );
};

const CommentsList = ({commentsData}) => {
  return commentsData.map((item, index) => (
    <div key={index}>
      <Comment  info={item} />
      <div className="px-3 m-1 border-l border-l-red-500">
        <CommentsList commentsData={item.replies} />
      </div>
    </div>
  ));
};

const CommentsContainer = () => {
  return (
    <div>
      <h1 className="font-bold text-2xl">Comments</h1>
      <CommentsList commentsData={commentsData}/>
    </div>
  );
};

export default CommentsContainer;
