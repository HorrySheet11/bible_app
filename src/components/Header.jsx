import Breadcrumb from './Breadcrumb';

function Header(){
  return(
    <div className='z-100 sticky top-0 left-0 bg-linear-to-r from-cyan-500 to-blue-500 w-full h-20 flex flex-row justify-around items-center'>
      <h1>The Horry Bible</h1>
      <Breadcrumb />
    </div>
  )
}

export default Header;