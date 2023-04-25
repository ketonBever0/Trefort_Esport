import './_css/button2.css'

function Button2({ content, myFunct }: any) {
  return (
    <div className='d-flex justify-content-center'>
      <button onClick={(e: any) => {
        e.preventDefault();
        myFunct();
      }} className="button2">{content}</button>
    </div>
  )
}

export default Button2