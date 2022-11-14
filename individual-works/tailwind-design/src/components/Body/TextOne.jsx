const TextOne = (props) => {
    return (
        <div>
        <div className="border border-black rounded-xl w-max pb-2 shadow-xl bg-red-900 text-red-900">image is <br/>here</div>
        <div className="font-bold text-lg mt-4"> {props.label} </div>
        <div className="mr-12 mt-4 leading-loose">Get your blood tests delivered at home collect a sample from the your blood tests</div>
      </div>
    );
  };
  
  export default TextOne;