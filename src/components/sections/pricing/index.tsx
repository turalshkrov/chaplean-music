import { FaSquareCheck } from 'react-icons/fa6';
import './index.scss';

const priceItems = [
  { label: 'Free', price: 0, features: ['3 Chaplean Ai use', 'Limitless reels ', 'Advertisement'] },
  { label: 'Normal', price: 3, features: ['25 Chaplean Ai use', 'Limitless reels ', 'No advertisement'] },
  { label: 'Premium', price: 5, features: ['50 Chaplean Ai use', 'Badge', 'Limitless reels ', 'No advertisement', 'Autoreply'] },
  { label: 'VIP', price: 10, features: ['150 Chaplean Ai use', 'Limitless reels ', 'No advertisement', 'Autoreply', 'Customizable badge', '2 username'] },
]

const Pricing = () => {
  return (
    <div className='pricing mt-2' id='pricing'>
      <div className="container">
        <div className="d-f justify-center mt-2">
          <div className="btn-group">
            <button className="active">Personal</button>
            <button>Creator</button>
          </div>
        </div>
        <div className="row my-4 align-items-stretch">
          {
            priceItems.map(item => {
              return (
                <div className="price-item col-12 col-md-6 col-lg-3 p-1" key={item.label}>
                  <div className="item-card">
                    <p className='price-label'>{item.label}</p>
                    <h2>{item.price}$</h2>
                    <ul className="mt-2">
                      {
                        item.features.map(feature => {
                          return(
                            <li className="d-f align-items-center" key={feature}>
                              <FaSquareCheck className="mr-1" color="#1D9BF0" />
                              {feature}
                            </li>
                          )
                        })
                      }
                    </ul>
                    <div className="card-footer">
                      <button>Subscribe</button>
                    </div>
                  </div>
                </div>
              )
            })
          }
        </div>
      </div>
    </div>
  )
}

export default Pricing