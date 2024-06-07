// src/components/Input.jsx
const Input = (props) => {
  const { value, onChange, onSubmit } = props;
  return (
    <div className="w-full">
      <div className="text-center mt-8 w-full">
        <h1 className="font-bold text-2xl">Documentos</h1>
        <h3 className="mt-2 text-lg">Agrega la lista de documentos a solicitar</h3>
      </div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          onSubmit();
        }}
        className="mt-10"
      >
        <div className="flex flex-col items-center w-full space-y-4">
          <input
            type="text"
            value={value}
            onChange={(e) => onChange(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded text-black"
          />
          <button type="submit" className="w-full p-2 bg-blue-500 rounded hover:bg-blue-600 text-white">
            Agregar
          </button>
        </div>
      </form>
    </div>
  );
};

export default Input;
