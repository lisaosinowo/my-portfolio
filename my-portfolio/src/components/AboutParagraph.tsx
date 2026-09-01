const AboutParagraph = ({paragraph}: {paragraph: string}) => {
  return (
    <div className="mb-3 text-base max-[358px]:text-[0.91rem] min-[768px]:text-xl">
      <p>{paragraph}</p>
    </div>
  )
}

export default AboutParagraph
