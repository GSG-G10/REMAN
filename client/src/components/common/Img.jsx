function Img(props) {
  const {src,alt ,imgClass} = props;
  return (
    <img src={src} alt={alt} className={imgClass ? imgClass : ''} />
  );
}

export default Img;
