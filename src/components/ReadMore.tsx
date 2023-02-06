import React from "react";

const ReadMore = (props: any) => {
  return (
    <div
      ref={props.ref}
      className="flex h-full w-screen flex-col bg-gray-900 p-5 text-slate-50"
    >
      {props.children}
    </div>
  );
};

export default ReadMore;
