import './index.css'

const ThumbnailItem = props => {
  const {thumbList, setactivedId, isactive} = props
  const {thumbnailUrl, thumbnailAltText, id} = thumbList
  const classStyle = isactive ? 'thumb-style' : ''

  const changeImg = () => {
    setactivedId(id)
  }
  return (
    <div>
      <li className="list-item">
        <button
          className={`btn ${classStyle}`}
          type="button"
          onClick={changeImg}
        >
          <img src={thumbnailUrl} alt={thumbnailAltText} />
        </button>
      </li>
    </div>
  )
}

export default ThumbnailItem
