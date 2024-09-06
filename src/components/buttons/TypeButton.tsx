import { Link } from "react-router-dom";
import useType from "../../store/useType";

const TypeButton = ({ title }: { title: string }) => {
  const { type, setType } = useType();
  return (
    <div>
      <Link to="/tarot">
        <button
          onClick={() => setType(title)}
          className="relative z-10 w-52 p-4 text-white rounded-xl bg-gradient-to-r from-blue-900 to-blue-700 hover:from-blue-700 hover:to-blue-500"
        >
          {title}
        </button>
      </Link>
    </div>
  );
};

export default TypeButton;
