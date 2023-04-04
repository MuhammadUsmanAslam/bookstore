import './Categories.css';
import { useDispatch, useSelector } from 'react-redux';
import { checkStatus } from '../../redux/categories/categoriesSlice';

function Categories() {
  const { status } = useSelector((store) => store.categories);

  const dispatch = useDispatch();

  return (
    <div className="categories">
      <h1>categories</h1>
      <p>
        Status:
        {' '}
        {status}
      </p>
      <button
        type="submit"
        onClick={() => {
          dispatch(checkStatus());
        }}
      >
        Status
      </button>
    </div>
  );
}

export default Categories;
