const ComponentD = ({ subheader, title, content }) => {
  return (
    <div>
      <p>{subheader}</p>
      <h2>{title}</h2>
      {content.map((item) => {
        return (
          // eslint-disable-next-line react/jsx-key
          <div
            dangerouslySetInnerHTML={{
              __html: `${item.text}`,
            }}
          />
        );
      })}
    </div>
  );
};

export default ComponentD;
