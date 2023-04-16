import { useState } from "react";
import "./collapse.scss";

function Collapse(props) {
  const [open, setOpen] = useState([]);

  const handleClick = (index) => {
    const newOpen = [...open];
    if (newOpen.includes(index)) {
      newOpen.splice(newOpen.indexOf(index), 1);
    } else {
      newOpen.push(index);
    }
    setOpen(newOpen);
  };

  const renderContent = (data, contentType, index) => {
    if (contentType === "description") {
      return (
        <section key={`description-${data.id}`}>
          <div className="title" onClick={() => handleClick(index)}>
            <span>Description</span>
            <img src={props.arrow} alt="Arrow icon" className={open.includes(index) ? "arrow-up" : "arrow-down"} />
          </div>
          {open.includes(index) ? (
            <div className="content content-housing">{data.description}</div>
          ) : null}
        </section>
      );
    } else if (contentType === "equipements") {
      return (
        <section key={`equipements-${data.id}`}>
          <div className="title" onClick={() => handleClick(index)}>
            <span>Équipements</span>
            <img src={props.arrow} alt="Arrow icon"  className={open.includes(index) ? "arrow-up" : "arrow-down"}/>
          </div>
          {open.includes(index) ? (
            <div className="content content-housing">
              {data.equipments.map((equipment) => (
                <div key={equipment}>{equipment}</div>
              ))}
            </div>
          ) : null}
        </section>
      );
    } else if (contentType === "about") {
      return data.map((item, subIndex) => (
        <section key={item.title}>
          <div className="title" onClick={() => handleClick(subIndex)}>
            <span>{item.title}</span>
            <img src={props.arrow} alt="Arrow icon" className={open.includes(index) ? "arrow-up" : "arrow-down"}/>
          </div>
          {open.includes(subIndex) ? (
            <div className="content">{item.rules}</div>
          ) : null}
        </section>
      ));
    }
  };

  const renderCollapse = (contentType) => {
    if (Array.isArray(contentType)) {
      return contentType.map((type, index) =>
        renderContent(props.data, type, index)
      );
    } else {
      return renderContent(props.data, contentType, 0);
    }
  };

  return (
    <section className={`collapse ${props.customClass}`}>
      {renderCollapse(props.contentType)}
    </section>
  );
}

export default Collapse;
