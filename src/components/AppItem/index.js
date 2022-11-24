import './index.css'

const AppItem = props => {
  const {projectDetails} = props
  const {appName, imageUrl} = projectDetails

  return (
    <div className="project-container">
      <li className="project-item-container">
        <img className="project-item-image" src={imageUrl} alt={appName} />
        <p className="project-item-title">{appName}</p>
      </li>
    </div>
  )
}
export default AppItem
