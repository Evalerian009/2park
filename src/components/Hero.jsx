import HeroBg from '../assets/herobg.jpg'
import Phone from '../assets/phone.png'
import Logo from '../assets/logo.png'
const Hero = () => {
  return (
    <div className="w-full lg:h-[600px] rounded-b-3xl" style={{backgroundImage: `url(${HeroBg})`, backgroundSize: 'cover'}}>
      <div className='bg-gradient-to-r from-[#082994eb] from-50% to-[#082994ab] w-full h-full rounded-b-3xl py-7 md:py-14 px-4 md:px-14'>
        <div className='text-[ghostwhite] w-[50px] mx-auto lg:ml-0'>
          <img src={Logo} alt="logo" />
        </div>
        <div className='mt-10 md:mt-16 lg:mt-0 text-center lg:text-start lg:py-[150px] relative'>
          <div className='lg:w-1/2 h-full text-[ghostwhite]'>
            <h1 className='text-4xl md:text-5xl font-semibold leading-tight'>Parking Revolution is Here.</h1>
            <p className='mt-3 text-lg font-[300]'>Unlock the potentioal of your parking space with the power of 2park.</p>
          </div>
          <div className='mt-6 md:mt-10 lg:mt-0 w-[150px] h-[300px] md:w-[200px] md:h-[400px] lg:w-[220px] lg:h-[440px] lg:absolute right-[70px] mx-auto bottom-[-70px] shadow-2xl shadow-blue-800 rounded-3xl'>
            <img src={Phone} alt='phone map' className='w-full h-full rounded-3xl object-cover' />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero