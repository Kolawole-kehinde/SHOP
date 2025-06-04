
import { CiSearch } from "react-icons/ci";
import { RxCross2 } from "react-icons/rx";
import { useLocation } from 'react-router-dom';

const SearchBar = ({ search, setSearch, showSearch, setShowSearch }) => {
  const location = useLocation();

  const visible = location.pathname === '/shop';

  if (!showSearch || !visible) return null;

  return (
    <div className='border-t border-b bg-gray-50 text-center py-3 flex items-center justify-center'>
      <div className='inline-flex items-center justify-center border border-gray-400 px-5 py-2 mx-3 rounded-full w-3/4 sm:w-1/2'>
        <input
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className='flex-1 outline-none bg-inherit text-sm'
          type='text'
          placeholder='Search'
        />
        <CiSearch className='w-4 text-2xl' />
      </div>
      <RxCross2
        className='w-4 cursor-pointer'
        onClick={() => {
          setSearch('');
          setShowSearch(false);
        }}
      />
    </div>
  );
};

export default SearchBar;
