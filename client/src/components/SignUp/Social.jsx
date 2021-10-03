import { GoogleOutlined, AppleFilled, FacebookFilled } from '@ant-design/icons';

import './style.css';

const Social = () => (
  <div className="social">
    <GoogleOutlined style={{ fontSize: '1.5rem' }} />
    <AppleFilled style={{ fontSize: '1.5rem' }} />
    <FacebookFilled style={{ fontSize: '1.5rem' }} />
  </div>
);

export default Social;
