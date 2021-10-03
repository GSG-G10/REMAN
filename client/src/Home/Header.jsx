import { Carousel } from 'antd';
import 'antd/dist/antd.css';
import './header.css';

function Header() {
  return (
    <div className="header">
      <Carousel autoplay className="slider">
        <img
          src="https://mybeautywhisper.com/wp-content/uploads/2021/06/Human-32.jpg"
          alt="beauty skin product "
        />

        <img
          src="https://stylesage.co/blog/content/images/2020/05/beauty.jpg"
          alt="beauty skin product"
        />

        <img
          src="https://www.salongold.co.uk/wp-content/uploads/2017/12/beauty-insurance-1920x1080.jpeg"
          alt="beauty skin product"
        />

        <img
          src="https://www.lasallecollege.com/-/media/images/responsive/collegelasalle_montreal/programs/mode_art_design/maquillage-artistique.ashx"
          alt="beauty skin product"
        />
      </Carousel>
    </div>
  );
}

export default Header;
