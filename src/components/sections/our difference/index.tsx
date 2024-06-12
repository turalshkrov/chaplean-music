import { RiMovie2Fill } from "react-icons/ri";
import { PiShareNetworkFill } from "react-icons/pi";
import { FaCompass, FaLightbulb } from "react-icons/fa";
import './index.scss';

const itemsData = [
  { icon: <RiMovie2Fill />, title: 'Music Reel', content: 'You can create 30-second music videos, watch, like, comment, share on or off the platform and save these short videos to your playlists.'},
  { icon: <PiShareNetworkFill />, title: 'Social Media', content: 'You can create 30-second music videos, watch, like, comment, share on or off the platform and save these short videos to your playlists.'},
  { icon: <FaCompass />, title: 'Discovering New Music With AI', content: 'You can create 30-second music videos, watch, like, comment, share on or off the platform and save these short videos to your playlists.'},
  { icon: <FaLightbulb />, title: 'Lorem Ipsum', content: 'You can create 30-second music videos, watch, like, comment, share on or off the platform and save these short videos to your playlists.'},
]

const OurDifference = () => {
  return (
    <div className='our-difference' id="ourdifference">
      <div className="container">
        <div className="row">
          {
            itemsData.map(item => {
              return(
                <div className="item d-f col-12 col-lg-6 align-items-start p-2" key={item.title}>
                  <div className="icon">
                    {item.icon}
                  </div>
                  <div className="item-content ml-2">
                    <h2>{item.title}</h2>
                    <p>{item.content}</p>
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

export default OurDifference