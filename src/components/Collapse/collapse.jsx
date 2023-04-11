import { useState } from "react"
import './collapse.scss'

function Collapse(props) {
  const [open, setOpen] = useState(null);

  const renderContent = (data, index) => {
    if (props.contentType === "description") {
      return (
        <section key={data.id}>
          <div className="title" onClick={() => setOpen(open === index ? null : index)}>
            <span>Description</span>
            <img src={props.arrow} alt="Arrow icon" />
          </div>
          {open === index ? <div className="content">{data.description}</div> : null}
        </section>
      )
    } else if (props.contentType === "equipements") {
      return (
        <section key={data.id}>
          <div className="title" onClick={() => setOpen(open === index ? null : index)}>
            <span>Équipements</span>
            <img src={props.arrow} alt="Arrow icon" />
          </div>
          {open === index ? (
            <div className="content">
              {data.equipments.map((equipment) => (
                <div key={equipment}>{equipment}</div>
              ))}
            </div>
          ) : null}
        </section>
      )
    } else if (props.contentType === "about") {
      return (
        <section key={data.title}>
          <div className="title" onClick={() => setOpen(open === index ? null : index)}>
            <span>{data.title}</span>
            <img src={props.arrow} alt="Arrow icon" />
          </div>
          {open === index ? <div className="content">{data.rules}</div> : null}
        </section>
      )
    }
  }

  return <section>{props.data.map((item, index) => renderContent(item, index))}</section>;
}

export default Collapse;
