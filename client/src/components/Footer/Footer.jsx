import './footer.css';
import {
  YoutubeOutlined, LinkedinOutlined, FacebookOutlined, InstagramOutlined,
} from '@ant-design/icons';

function Footer() {
  const company = [
    'Delivery',
    'Legal Notice',
    'Terms of use',
    'About us',
    'Secure payment',
    'Contact us',
    'Sitemap',
  ];
  const account = ['Personal info', 'Orders', 'Credit slips', 'Addresses'];
  const conatct = ['+391 (0)35 2568 4593 ', 'hello@domain.com'];

  return (
    <section className="footer">
      <div className="container">
        <div className="photos">
          <img src="../../assets/logo.png" alt="REMAN logo" />
          <div className="icons-list">
            <FacebookOutlined style={{ fontSize: '30px', margin: '10px 10px 10px 0' }} />
            <InstagramOutlined style={{ fontSize: '30px', margin: '10px 10px 10px 0' }} />
            <LinkedinOutlined style={{ fontSize: '30px', margin: '10px 10px 10px 0' }} />
            <YoutubeOutlined style={{ fontSize: '30px', margin: '10px 10px 10px 0' }} />
          </div>
          <img
            src="http://laberpresta.com/v17/laber_rubix_v17/img/cms/paymen.png"
            alt="payment logos"
          />
        </div>
        <ul className="list">
          <h4>Our Company </h4>
          {company.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>

        <ul className="list">
          <h4>Your account </h4>
          {account.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
        <ul className="list">
          <h4>Let’s Talk </h4>
          {conatct.map((item) => (
            <li key={item}>{item}</li>
          ))}
          <h4>Find Us</h4>
          <li> 502 New Design Str</li>
          <li>Melbourne, Australia</li>
        </ul>
      </div>
      <hr className="line" />
      <p>@2021 REMAN .All Rights Reserved </p>
    </section>
  );
}

export default Footer;
