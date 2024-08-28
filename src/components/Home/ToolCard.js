import FeatherIcon from "feather-icons-react";

const ToolCard = ({
  title,
  subTitle,
  icon = "tool",
  onClicked = () => {},
  bg = "bg-surface dark:bg-surface-dark",
  hover = "hover:bg-gray-50 hover:dark:bg-neutral-900",
}) => {
  return (
    <div
      className={`cursor-pointer rounded-lg shadow-md p-6 hover:bg-gray-50 hover:dark:bg-neutral-900 ${bg} ${hover}`}
      onClick={onClicked}
    >
      <div className="inline-block bg-primary rounded-lg shadow-md p-2 ">
        <FeatherIcon icon={icon} className="text-white" strokeWidth={3} />
      </div>
      <h3 className="text-lg font-semibold text-gray-900 dark:text-white mt-2">
        {title}
      </h3>
      <p className="text-sm text-gray-700 dark:text-gray-300">{subTitle}</p>
    </div>
  );
};

export default ToolCard;
