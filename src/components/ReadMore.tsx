import React from "react";

const ReadMore = (props: any) => {
  return (
    <div
      ref={props.ref}
      id="99"
      className="flex flex-col h-[50vh] p-10 w-full text-slate-50 bg-gray-900"
    >
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus
      doloribus, non fuga repellendus a reprehenderit consequatur totam.
      Consectetur quisquam repellat neque optio maxime, quas magni eligendi
      dolorem eaque placeat ad. Sint vero quibusdam, repudiandae ab assumenda
      sit at ut odio, eum id, ipsam obcaecati! Fugit, porro, quae libero commodi
      accusamus architecto deleniti at id laudantium, blanditiis explicabo
      repudiandae amet eius? Et, totam similique. Ab incidunt laudantium
      corporis iusto at quaerat! Obcaecati non doloremque expedita eveniet,
      impedit quo nisi quis repellat blanditiis enim, libero fugit placeat, unde
      nemo. Nostrum magnam quo labore. Aliquam asperiores distinctio natus
      itaque error molestiae nam eaque!
      {props.children}
    </div>
  );
};

export default ReadMore;
