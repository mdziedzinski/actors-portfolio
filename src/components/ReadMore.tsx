import React from "react";

const ReadMore = (props: any) => {
  return (
    <div
      ref={props.ref}
      className="container mx-auto flex h-full flex-col bg-gray-900 px-4 py-5 text-slate-50"
    >
      {props.children}
    </div>
  );
};

export default ReadMore;
