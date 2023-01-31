import React from "react";

const ReadMore = (props: any) => {
  return (
    <div
      ref={props.ref}
      id="99"
      className="flex flex-col  p-5 w-screen h-full text-slate-50 bg-gray-900"
    >
      {props.children}
    </div>
  );
};

export default ReadMore;
