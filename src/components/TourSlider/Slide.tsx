const Slide = ({src, alt}: Props) => {
  return (
    <div className={'h-[80vh]'}>
      <img src={src} alt={alt}/>
    </div>
  );
};

type Props = {
  src: string;
  alt?: string;
}

export default Slide;