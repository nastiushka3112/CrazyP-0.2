import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setPage } from "../../store/helpers/helpersSlice";
import postlist from "../../posts.json";
import Card from "./Components/Card";
import Pagination from "./Components/Pagination";

export default function Blog() {
  const dispatch = useDispatch();
	const activeP = useSelector((state) => state.helpers.pagination);

  useEffect(() => {
    dispatch(setPage("blog"));
  }, []);

  const excerptList = postlist.map((post) => {
    return post.content.split(" ").slice(0, 20).join(" ") + "...";
  });


  const nextP = () => {
    if(activeP == 1 ) {
			return 0
		}else{
			return (activeP - 1 ) * 12
		}
  };

	
  return (
    <div class="">
      <div class="bg-blogBg bg-cover h-[274px] flex justify-center text-center items-center">
        <div class="text-center">
          <h1 class="font-mainText text-regular text-[32px] leading-[36px]">
            The Crazy Prints blog
          </h1>
          <p class="font-textSec text-[18px] leading-[26px] text-white">
            News, views, case studies and ideas to help you along in the world
            of tech
          </p>
        </div>
      </div>
      <div>
        <div class="flex flex-wrap gap-[32px] px-[5%] pt-[100px] pb-[201px] items-center justify-center">
          {postlist.length &&
            postlist
              .slice(nextP(), activeP * 12)
              .map((post, i) => (
                <Card post={post} i={i} excerptList={excerptList} />
              ))}
        </div>
      </div>
      <div class="pb-[164px]">
        <Pagination elements={postlist.length} />
      </div>
    </div>
  );
}
