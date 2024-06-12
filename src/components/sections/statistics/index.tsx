import './index.scss';

const statsItems = [
  { number: '100k', label: 'User' },
  { number: '4.8', label: 'Rating' },
  { number: '4350+', label: 'Music' },
  { number: '3+', label: 'Partnership' },
]

const Statistics = () => {
  return (
    <div className='my-3 statistics' id='statistics'>
      <div className="container">
        <div className="row">
          {
            statsItems.map(item => {
              return(
                <div className="stats-item col-12 col-md-6 col-lg-3 text-center my-1" key={item.label}>
                  <h2>{item.number}</h2>
                  <p>{item.label}</p>
                </div>
              )
            })
          }
        </div>
      </div>
    </div>
  )
}

export default Statistics;