interface ImageProjectProps {
  activeProject: {
    title: string;
    imgSrc: string;
  };
}

const ImageProject: React.FC<ImageProjectProps> = ({ activeProject }) => {
  return (
    <div
      //? RIGHT
      className="right-0 bottom-0 h-3/4 w-1/2 absolute"
      //? LEFT
      // className="left-0 bottom-0 h-3/4 w-1/2 absolute"
    >
      {/* <img
        src="/src/images/swpc.png"
        alt="SWPC Banner"
        className="rounded-tl-2xl rounded-br-2xl h-full w-full object-cover border-gray-button border-t border-l"
      />  */}
      {activeProject?.imgSrc ? (
        <img
          src={activeProject?.imgSrc}
          alt={`${activeProject?.title} Thumbnail`}
          //? RIGHT
          className="rounded-tl-2xl rounded-br-2xl h-full w-full object-cover border-gray-button border-t border-l"
          //? LEFT
          // className="rounded-tr-2xl rounded-bl-2xl h-full w-full object-cover border-gray-button border-t border-l"
        />
      ) : null}
    </div>
  );
};

export default ImageProject;
