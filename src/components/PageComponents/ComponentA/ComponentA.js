const ComponentA = ({ subheader, title, body, componentItems }) => {
  return (
    <div>
      <p>{subheader}</p>
      <h2>{title}</h2>
      {body ? <div dangerouslySetInnerHTML={{ __html: body }} /> : null}
      {componentItems.length &&
        componentItems.map((item) => {
          return (
            // eslint-disable-next-line react/jsx-key
            <div>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
              {item.button ? <div dangerouslySetInnerHTML={{ __html: item.button }} /> : null}
            </div>
          );
        })}
    </div>
  );
};

export default ComponentA;
