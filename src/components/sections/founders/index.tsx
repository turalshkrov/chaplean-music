import founder0 from '../../../assets/founder-0.png';
import founder1 from '../../../assets/founder-1.png';
import './index.scss';

const founders = [
  { img: founder0, name: 'Qiyas Sadıqov', position: 'Chief Executive Officer' },
  { img: founder1, name: 'Leyla Allahverdiyeva', position: 'Chief Operating Officer/Designer' },
]

const Founders = () => {
  return (
    <div className='founders'>
      <div className="container">
        <div className="row justify-center mb-3">
          {
            founders.map(founder => {
              return(
                <div className="founder col-12 col-md-6 col-lg-3 p-2 d-f align-items-center" key={founder.name}>
                  <img src={founder.img} alt="" />
                  <p className='founder-name mt-2 mb-0'>{founder.name}</p>
                  <p>{founder.position}</p>
                </div>
              )
            })
          }
        </div>
      </div>
    </div>
  )
}

export default Founders;