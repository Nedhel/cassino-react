export function GameData({ selection, serverData }) {
    console.log(selection);
    return (
        <div className="flex-none w-1/4 text-white flex flex-col items-center justify-around">
            <p>
                Your Selection:{" "}
                <span className="text-6xl text-orange-600">
                    {selection.number}
                </span>
            </p>
            <p>
                Multiplier:{" "}
                <span className="text-6xl text-orange-600">
                    {selection.multiplier}
                </span>
            </p>
            <p>
                In Roulette:{" "}
                <span className="text-6xl text-orange-600">{serverData}</span>
            </p>
            <span className="text-xl">{selection.textGift}</span>
        </div>
    );
}
