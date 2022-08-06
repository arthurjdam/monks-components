import clsx from "clsx";
/*
justify-content: center;
  align-items: center;
  white-space: nowrap;
  */
const M1Button: React.FC = () => {
  // const tag = 'button';
  return (
    <button className="inline-flex justify-center items-center whitespace-nowrap">
      {/* button-label */}
      <span className="inline-flex justify-center items-center rounded-full relative">
        {/* button-label-background */}
        <span className="rounded-full absolute origin-[0%_50%] top-0 left-0">
          <span className={clsx("a", "b", true && "c")}></span>
        </span>
      </span>
    </button>
  );
};
M1Button.displayName = 'm1-button';

export default M1Button;
