import { Carousel } from 'antd';
import 'antd/dist/antd.css';
import Img from '../components/common/Img';
import './header.css';

function Slider() {
  return (
    <div className="slider-container">
      <Carousel autoplay className="slider">

        <Img
          src="https://stylesage.co/blog/content/images/2020/05/beauty.jpg"
          alt="beauty skin product"
        />

        <Img
          src="https://www.salongold.co.uk/wp-content/uploads/2017/12/beauty-insurance-1920x1080.jpeg"
          alt="beauty skin product"
        />

        <Img
          src="https://www.lasallecollege.com/-/media/images/responsive/collegelasalle_montreal/programs/mode_art_design/maquillage-artistique.ashx"
          alt="beauty skin product"
        />
      </Carousel>
    </div>
  );
}

export default Slider;
