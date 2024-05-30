// components/List.jsx

const List = (props) => {
  // eslint-disable-next-line react/prop-types
  const { items } = props;
  return (
    <ul>
      {items?.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </ul>
  );
};

export default List;