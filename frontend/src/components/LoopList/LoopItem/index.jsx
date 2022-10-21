import "./LoopItem.css";
import User from "./User";
import Description from "./Description";
import Interact from "./Interact";
import Content from "./Content";
import Feedback from "./Feedback";

const LoopItem = ({ collection, loop }) => {
  const username = loop?.user?.username || "No name";

  return (
    <div className="loop">
      <User username={username} time={loop.created_at} />
      <Interact content={loop.content} filename={loop.filename} />
      <Description
        title={loop.name}
        description={loop.description}
        language={loop.language.name}
      />
      <Content language={loop.language.name} content={loop.content} />
      <Feedback loop={loop} collection={collection} />
    </div>
  );
};

export default LoopItem;
