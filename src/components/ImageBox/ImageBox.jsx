export default function ImageBox({pickedImage}) {

  return (
    <div 
      className="ImageBox"         
      style={{
        backgroundImage: `url(${pickedImage})`
      }}
    >
      
    </div>
  );
}