import SupportImg from '../assets/support.png'

const Support = () => {
  return (
    <div className="md:mt-10 lg:mt-24 py-10 px-4 md:px-14 bg-blue-700 rounded-3xl text-[ghostwhite] relative">
      <div className="md:hidden w-[120px] mx-auto">
        <img src={SupportImg} alt="support" className='w-full h-full object-cover' />
      </div>
      <div className="md:w-1/2">
        <h3 className="text-4xl font-semibold leading-tight">Ask us how 2park can help you.</h3>
        <h4 className="mt-3 leading-7">Get the answers to your unique questions and find out why 2park is the right choice for you.</h4>
      </div>
      <div className="hidden md:block absolute bottom-0 right-4 lg:right-[10%] w-[250px]">
        <img src={SupportImg} alt="support" className='w-full h-full object-cover' />
      </div>
    </div>
  )
}

export default Support