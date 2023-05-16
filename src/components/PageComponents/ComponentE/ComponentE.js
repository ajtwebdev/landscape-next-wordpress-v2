const ComponentE = ({ subheader, title, content }) => {
  let width = '100%';
  let height = 'auto';
  return (
    <div>
      <p>{subheader}</p>
      <h2>{title}</h2>
      {content.map((item) => {
        return (
          // eslint-disable-next-line react/jsx-key
          <div>
            <img
              width={width}
              height={height}
              src={item.image.sourceUrl}
              alt={item.image.altText || ''}
              srcSet={item.image.srcSet}
            />
            <div
              dangerouslySetInnerHTML={{
                __html: `${item.text}`,
              }}
            />
          </div>
        );
      })}
    </div>
  );
};

export default ComponentE;
