const TextThree = (props) => {
    return (
        <div className="flex items-start">
          <div className="border border-black rounded-xl w-max mt-6 mr-6 pb-2 min-w-fit max-h-fit shadow-xl bg-red-900 text-red-900">image is <br/>here</div>
          <div>
            <div className="font-bold text-lg mt-6">{props.label}</div>
            <div className="mr-12 mt-4 leading-loose mb-10">{props.content}</div>
          </div>
        </div>
    );
  };
  
  export default TextThree;