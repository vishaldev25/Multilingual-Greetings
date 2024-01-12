import './index.css'

const GreetingsCard = props => {
  const {greetingDetails} = props
  const {imageUrl, imageAltText} = greetingDetails
  return (
    <li className="greetings-card">
      <img src={imageUrl} alt={imageAltText} className="gretting-image" />
    </li>
  )
}

export default GreetingsCard
