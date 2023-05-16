import Image from 'components/Image';
const ImageLeft = ({ subheader, title, body, image }) => {
  return (
    <div>
      <h2>PageComponent ImageLeft</h2>
      <h3>{title}</h3>
      <h4>{subheader}</h4>
      <p>{body}</p>
      <Image alt={image.altText} srcSet={image.srcSet} />
    </div>
  );
};

export default ImageLeft;
