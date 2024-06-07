// src/components/List.jsx
const List = (props) => {
  const { items, onDelete } = props;
  return (
    <ul className="mt-8 space-y-2 mx-auto">
      {items.map((item, index) => (
        <li key={index} className="flex justify-between items-center p-2 border-b border-gray-300">
          <span>{item}</span>
          <button
            onClick={() => onDelete(index)}
            className="ml-4 p-2 bg-red-500 text-white rounded hover:bg-red-600"
          >
            Eliminar
          </button>
        </li>
      ))}
    </ul>
  );
};

export default List;
