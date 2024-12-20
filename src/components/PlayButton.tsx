import { MouseEventHandler } from "react";
import { BsFillPlayFill } from "react-icons/bs";
import { GrPowerReset } from "react-icons/gr";

export function PlayButton({
  handlerRunVisualizer,
  isDisabled,
  isGraphVisualized,
}: {
  isDisabled: boolean;
  isGraphVisualized: boolean;
  handlerRunVisualizer: MouseEventHandler<HTMLButtonElement>;
}) {
  return (
    <button
      disabled={isDisabled}
      onClick={handlerRunVisualizer}
      className="disabled:pointer-events-none disabled:opacity-50 transition ease-in rounded-full p-2.5 shadow-md bg-green-500 hover:bg-green-700 border-none active:ring-green-400 focus:outlin-none focus:ring focus:ring-green-300 focus-ring-opacity-30"
    >
      {isGraphVisualized ? (
        <GrPowerReset className="w-5 h-5" />
      ) : (
        <BsFillPlayFill />
      )}
    </button>
  );
}
