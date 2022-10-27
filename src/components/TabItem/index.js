import './index.css'

const TabItem = props => {
  const {tabDetails, updateTabId} = props
  const {tabId, displayText} = tabDetails

  const change = () => {
    updateTabId(tabId)
  }
  return (
    <li className="tab-item-container ">
      <button type="button" className="tab-btn" onClick={change}>
        {displayText}
      </button>
    </li>
  )
}

export default TabItem
