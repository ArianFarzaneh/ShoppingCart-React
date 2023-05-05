import ButtonCart from '../components/ButtonCart';
import Search from '../components/Search';

function Header() {
  return (
    <div className="w-full h-20 flex justify-around items-center px-16 py-2 bg-gray-800 text-white ">
      <h3 className="font-semibold text-xl">Shopping Cart</h3>
      <Search />
      <ButtonCart />
    </div>
  );
}

export default Header;
