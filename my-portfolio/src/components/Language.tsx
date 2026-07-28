const Language = ({img}: {img: string}) => {
  return (
    <div className="w-full h-full center items-center">
      <img src={img} className="w-16 h-16 object-contain" />
    </div>
  )
}

export default Language
