const Banner = ({ title, subheader, description, image }) => {
  let width = '100%';
  let height = 'auto';
  return (
    <div>
      <h2>PageComponent Banner</h2>
      <h3>{title}</h3>
      <p>{subheader}</p>
      <p>{description}</p>
      {image ? (
        <img width={width} height={height} src={image.sourceUrl} alt={image.altText || ''} srcSet={image.srcSet} />
      ) : null}
    </div>
  );
};

export default Banner;
