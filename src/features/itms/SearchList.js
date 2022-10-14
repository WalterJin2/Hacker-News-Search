import React from "react";
import { FaUserAlt } from "react-icons/fa";
import { formatDistanceToNow } from "date-fns";
export default function SearchList({ itms }) {
  return (
    <div className="flex flex-col justify-between items-center  w-full px-1 py-1 border border-green-800">
      {itms.hits.map((data) => {
        const {
          title,
          author,
          points,
          created_at,
          num_comments,
          url,
          objectID,
        } = data;

        return (
          <div className="flex flex-col w-full px-2  py-4 gap-2" key={objectID}>
            <a className="resultTag  px-1 py-1" href={url}>
              <h1
                className="px-1 py-1"
                dangerouslySetInnerHTML={{
                  // Assume the response is sanitised
                  __html:
                    (data._highlightResult.title &&
                      data._highlightResult.title.value) ||
                    (data._highlightResult.story_title &&
                      data._highlightResult.story_title.value) ||
                    "Title not found",
                }}
              ></h1>
            </a>
            <div className="flex justify-start gap-1  pt-1 pb-4 border-b border-green-900">
              <div className="resultTag px-1 py-1">{points} points</div>
              <div className="flex justify-between items-center resultTag px-1 py-1 ">
                <div className="px-1 ">
                  <FaUserAlt />
                </div>
                <div className="px-1 ">{author}</div>
              </div>
              <div className="resultTag  px-1 py-1">
                {formatDistanceToNow(new Date(created_at), {
                  addSuffix: true,
                })}
              </div>
              <div className="resultTag px-1 py-1">{num_comments} comments</div>
              <a className="resultTag  px-1 py-1" href={url}>
                {url}
              </a>
            </div>
            {data._highlightResult.comment_text ||
            data._highlightResult.story_text ? (
              <div
                dangerouslySetInnerHTML={{
                  __html:
                    (data._highlightResult.comment_text &&
                      data._highlightResult.comment_text.value) ||
                    (data._highlightResult.story_text &&
                      data._highlightResult.story_text.value),
                }}
              />
            ) : null}
          </div>
        );
      })}
    </div>
  );
}
