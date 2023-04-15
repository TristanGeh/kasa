import { useState } from "react";
import "./collapse.scss";

function Collapse(props) {
  const [open, setOpen] = useState(null);

  const renderContent = (data, contentType) => {
    const index = Array.isArray(props.contentType)
      ? props.contentType.indexOf(contentType)
      : 0;

    if (contentType === "description") {
      return (
        <section key={`description-${data.id}`}>
          <div
            className="title"
            onClick={() => setOpen(open === index ? null : index)}
          >
            <span>Description</span>
            <img src={props.arrow} alt="Arrow icon" />
          </div>
          {open === index ? (
            <div className="content">{data.description}</div>
          ) : null}
        </section>
      );
    } else if (contentType === "equipements") {
      return (
        <section key={`equipements-${data.id}`}>
          <div
            className="title"
            onClick={() => setOpen(open === index ? null : index)}
          >
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
      );
    } else if (contentType === "about") {
      return data.map((item, subIndex) => (
        <section key={item.title}>
          <div
            className="title"
            onClick={() => setOpen(open === subIndex ? null : subIndex)}
          >
            <span>{item.title}</span>
            <img src={props.arrow} alt="Arrow icon" />
          </div>
          {open === subIndex ? (
            <div className="content">{item.rules}</div>
          ) : null}
        </section>
      ));
    }
  };

  const renderCollapse = (contentType) => {
    if (Array.isArray(contentType)) {
      return contentType.map((type) => renderContent(props.data, type));
    } else {
      return renderContent(props.data, contentType);
    }
  };

  return (
    <section className="collapse">{renderCollapse(props.contentType)}</section>
  );
}

export default Collapse;
