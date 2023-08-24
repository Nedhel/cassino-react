export function UserData({ handleSpin, userData, handleBet }) {
    return (
        <div className="flex-none w-1/4 flex flex-col justify-around items-center text-white">
            <p>
                User Name:{" "}
                <span className="text-4xl text-orange-600">
                    {userData.name}
                </span>
            </p>
            <p>
                Your Money:{" "}
                <span className="text-6xl text-orange-600">
                    {userData.money}
                </span>
            </p>
            <p>
                Your Bet:{" "}
                <input
                    type="number"
                    name="bet"
                    id="yourBet"
                    value={userData.bet}
                    onChange={(e) => handleBet(e.target.value)}
                    className="text-black"
                />
            </p>
            <div className="flex gap-3">
                <button className="border p-2" onClick={handleSpin}>
                    Play
                </button>
                <button className="border p-2">Buy Credits</button>
            </div>

            <span></span>
        </div>
    );
}
