import './_css/button.css'


function Button(content:any, myFunct:any) {
    return (
      <div className="d-flex justify-content-center">
          <button className='mybutton' onClick={myFunct}>{content.content}</button>
      </div>
    )
  }
  
  export default Button