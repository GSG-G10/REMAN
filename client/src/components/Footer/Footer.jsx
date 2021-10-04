import './footer.css';
import {
  YoutubeOutlined,
  LinkedinOutlined,
  FacebookOutlined,
  InstagramOutlined,
} from '@ant-design/icons';
import Img from '../Common/Img';

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
          <Img
            src="https://cdn.discordapp.com/attachments/893117015223586948/893841984328970250/1e72120b0d98410fbfeba53b9142b186_1.png"
            alt="REMAN logo"
            imgClass='logo'
          />
          <div className="icons-list">
            <FacebookOutlined
              style={{ fontSize: '30px', margin: '10px 10px 10px 0' }}
            />
            <InstagramOutlined
              style={{ fontSize: '30px', margin: '10px 10px 10px 0' }}
            />
            <LinkedinOutlined
              style={{ fontSize: '30px', margin: '10px 10px 10px 0' }}
            />
            <YoutubeOutlined
              style={{ fontSize: '30px', margin: '10px 10px 10px 0' }}
            />
          </div>
          <Img
            src="http://laberpresta.com/v17/laber_rubix_v17/img/cms/paymen.png"
            alt="payment logos"
            imgClass='payment-img'
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
