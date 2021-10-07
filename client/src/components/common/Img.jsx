function Img(props) {
  // eslint-disable-next-line react/prop-types
  const { src, alt, imgClass } = props;
  return (
    <img src={src} alt={alt} className={imgClass || ''} />
  );
}

export default Img;
