import './tags.scss'

function Tags({ tags, id }) {
  return (
    <div className="tags">
      {tags.map((tag, index) => {
        return <p key={`tags-${id}-${index}`}>{tag}</p>
      })}
    </div>
  )
}

export default Tags
