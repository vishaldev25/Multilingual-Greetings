import './index.css'

const TabsItem = props => {
  const {tabsList, clickTab, isActive} = props
  const {buttonText, id} = tabsList

  const classname = isActive ? 'active-class button' : 'button'

  const onClickTab = () => {
    clickTab(id)
  }
  return (
    <li className="tabs-item">
      <button type="button" onClick={onClickTab} className={classname}>
        {buttonText}
      </button>
    </li>
  )
}

export default TabsItem
