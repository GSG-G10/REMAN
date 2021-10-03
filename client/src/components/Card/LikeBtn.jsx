import React from 'react';
import { HeartOutlined, HeartFilled } from '@ant-design/icons';
const LikeBtn = () => {
  return (
    <div onClick={() => {}}>
      {true ? (
        <HeartFilled className="icon icon-love" />
      ) : (
        <HeartOutlined className="icon icon-love" />
      )}
    </div>
  );
};

export default LikeBtn;
