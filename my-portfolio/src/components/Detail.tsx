const Detail = ({src, text}) => {
  return (
    <div className="flex">
      <img src={src} className="w-5 h-5 mr-[5px]" />
      <p className="text-[--grey] text-sm whitespace-nowrap sm:mr-[15px]">{text}</p>
    </div>
  )
}

export default Detail

