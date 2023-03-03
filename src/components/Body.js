function ImageData(props) {
    return (
      <div>
        <div key={props.id} className="column">
          <img src={props.img}/>
        </div>
      </div>
    );
  }
  
  export default ImageData;