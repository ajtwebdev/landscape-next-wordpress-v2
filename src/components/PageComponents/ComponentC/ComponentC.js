const ComponentC = ({ subheader, title, body, image }) => {
  let width = '100%';
  let height = 'auto';
  return (
    <div>
      <p>{subheader}</p>
      <h2>{title}</h2>
      {body ? <div dangerouslySetInnerHTML={{ __html: body }} /> : null}
      {image ? (
        <img width={width} height={height} src={image.sourceUrl} alt={image.altText || ''} srcSet={image.srcSet} />
      ) : null}
    </div>
  );
};

export default ComponentC;
