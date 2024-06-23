// Write your code here.
import './index.css'
const Thumbnail = props => {
  const {details, isActive, setActiveImage} = props

  const {thumbnailUrl, thumbnailAltText, id} = details

  const thumbnailClassName = isActive ? `thumbnail active` : `thumbnail`

  const changeImg = () => {
    setActiveImage(id)
  }

  return (
    <li className="list">
      <button className="thumbnail-button" type="button" onClick={changeImg}>
        <img
          alt={thumbnailAltText}
          src={thumbnailUrl}
          className={thumbnailClassName}
        />
      </button>
    </li>
  )
}
export default Thumbnail