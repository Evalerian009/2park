import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Logo from '../assets/logo.png'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'

const Footer = () => {
  return (
    <>
      <div className='w-full py-10 px-4 md:px-14 flex flex-col gap-4'>
        <div className='w-full flex justify-between items-center'>
          <img src={Logo} alt="Footer logo" className='w-[50px]' />
          <div>
            <h5>Contact Us</h5>
            <p>
              <FontAwesomeIcon icon={faEnvelope} className='text-slate-500 mr-3' />
                info@2park.go
            </p>
          </div>
        </div>
        <p className='max-w-[300px]'>Be the first to explore and use our new products white others are still waiting.</p>
        <small className='font-[300]'>Copyright &copy; 2023 2park.go</small>
      </div>
    </>
  )
}

export default Footer