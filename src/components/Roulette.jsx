import roulette from "../img/roulette.png";
import arrow from "../img/pin.png";
export function Roulette({ degrees }) {
    return (
        <div className="flex-none w-2/4 relative border flex justify-center">
            <img
                src={roulette}
                alt="Roulette"
                className={`w-1/2 cursor-grab transition ease-linear duration-[1500ms]`}
                style={{ transform: `rotateZ(${degrees}deg)` }}
            />
            <img src={arrow} alt="arrow" className="absolute top-4 w-[2vw]" />
        </div>
    );
}
