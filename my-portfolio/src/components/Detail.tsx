const Detail = ({src, text}: {src: string; text: string}) => {
  return (
    <div className="flex">
      <img src={src} className="min-[768px]:w-7 min-[768px]:h-7 w-5 h-5 mr-[5px]" />
      <p className="text-[--grey] min-[768px]:text-xl max-[375px]:text-sm text-base whitespace-nowrap sm:mr-[15px]">{text}</p>
    </div>
  )
}

export default Detail

