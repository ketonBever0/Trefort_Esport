import './_css/button2.css'

function Button2(content:any, myFunct:any) {
  return (
    <div className='d-flex justify-content-center'>
        <button onClick={()=>{myFunct.myFunct}} className="button2">{content.content}</button>
    </div>
  )
}

export default Button2