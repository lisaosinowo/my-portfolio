import ProfileInformation from './ProfileInformation'

const MainContainer = () => {
  return (
    <div className='relative flex justify-center'>
      <div className='border absolute top-[6.5rem] flex main-container-width lg:top-24 md:top-32 sm:top-32'>
         <ProfileInformation />
      </div>
    </div>
  )
}

export default MainContainer
