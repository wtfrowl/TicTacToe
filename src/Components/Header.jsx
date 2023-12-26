import logo from '../assets/logo.png'
function Header() {

    return (
      <>

<div className="bg-purple-950 p-4 flex wrap items-center justify-between">
 <img src={logo} alt="logo" className='w-14 mx-5'/> 
 <div className='text-white font-bold mx-5'>Hey! User</div>
 </div>

 </>
    )
  }
  
  export default Header