import {Component} from 'react'

import './index.css'

import innercard from '../Assets/innercard.png'
import innercard2 from '../Assets/innercard2.png'
import Thumbnail from '../Thumbnail'

const imagesList = [
  {
    id: 0,
    imageUrl:innercard,
    thumbnailUrl:innercard,
    imageAltText: 'inner-card',
    thumbnailAltText: 'innerc-card',
  },
  {
    id: 1,
    imageUrl: innercard2,
    thumbnailUrl:innercard2,
    imageAltText: "innercard-2",
    thumbnailAltText: "inner-card2",
  },
  {
    id: 2,
    imageUrl: innercard2,
    thumbnailUrl:innercard2,
    imageAltText: "innercard-2",
    thumbnailAltText: "inner-card2",
    
  },
  {
    id: 3,
    imageUrl: innercard2,
    thumbnailUrl:innercard2,
    imageAltText: "innercard-2",
    thumbnailAltText: "inner-card2",
  }
]

// Write your code here.

class CardDetails extends Component {
  state = {
    firstImageId: imagesList[0].id,
  }

  setActiveImage = id => {
    this.setState({firstImageId: id})
  }

  render() {
    const {firstImageId} = this.state
    const {imageUrl, imageAltText} = imagesList[firstImageId]

    return (
      <div className="main">
        <div>
          <img alt={imageAltText} src={imageUrl} className="image-url" />
        </div>
        <ul className="list-cont">
          {imagesList.map(eachImage => (
            <Thumbnail
              key={eachImage.id}
              details={eachImage}
              isActive={firstImageId === eachImage.id}
              setActiveImage={this.setActiveImage}
            />
          ))}
        </ul>
      </div>
    )
  }
}

export default CardDetails