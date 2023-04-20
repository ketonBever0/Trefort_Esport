
import './_css/progressbar.css'

function ProgressBar(myWidth:any) {

  return (
    <div>
      <div className="container p-10 justify-content-center">
        <div className="row">
          <div className="col">
            <div className="progress">
              <div id='barWidth' className="progress-bar" style={{ background: "#dd163b", width: `${myWidth.myWidth}%` }}>
              
              </div>
            </div>
          </div>
        </div>
      </div>


    </div>
  )
}

export default ProgressBar