import React from "react";

const ReadMore = (props: any) => {
  return (
    <div
      ref={props.ref}
      id="99"
      className="flex flex-col  p-10 w-full text-slate-50 bg-gray-900"
    >
      
      {props.children}
    </div>
  );
};

export default ReadMore;
