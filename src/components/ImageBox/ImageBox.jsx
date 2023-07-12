export default function ImageBox({pickedImage}) {
  if (!pickedImage) pickedImage="https://d26oc3sg82pgk3.cloudfront.net/files/media/edit/image/45357/square_thumb%402x.jpg" // default

  return (
    <div 
      className="ImageBox"         
      style={{
        backgroundImage: `url(${pickedImage})`,
        padding: 50,
        width: "25vmin",
        height: "25vmin",
        border: "1px solid red",
      }}
    >
      
    </div>
  );
}