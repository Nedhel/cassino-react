import { Roulette } from "./components/Roulette";
import { Board } from "./components/Board";
import { GameData } from "./components/GameData";
import { UserData } from "./components/UserData";
import { useState } from "react";

function App() {
    const [selection, setSelection] = useState({
        number: "",
        multiplier: "",
        textGift: "",
    });
    const [serverData, setServerData] = useState({ degrees: 0, number: "" });
    const [userData, setUserData] = useState({
        name: "Carlos Zalpa",
        money: 1000,
        bet: 50,
    });
    const [complement, setComplement] = useState(0);

    function handleClickBoard(e) {
        let multiplyX;
        switch (e) {
            case "0":
                multiplyX = "X15";
                break;
            case "1st 12":
            case "2nd 12":
            case "3rd 12":
                multiplyX = "X5";
                break;
            case "1 - 18":
            case "19 - 36":
                multiplyX = "X3";
                break;
            case "Even":
            case "Odd":
            case "red":
            case "black":
                multiplyX = "X2";
                break;
            default:
                multiplyX = "X10";
                break;
        }
        const newObj = { number: e, multiplier: multiplyX, textGift: "" };
        setSelection(newObj);
    }
    function handleSpin() {
        fetch("http://localhost:5000/", {
            method: "GET",
            headers: { task: "play" },
        })
            .then((response) => {
                return response.json();
            })
            .then((data) => {
                let newData = data.data;
                newData = {
                    ...newData,
                    degrees:
                        newData.degrees +
                        serverData.degrees +
                        1080 +
                        complement,
                };
                setServerData(newData);
                setComplement(360 - data.data.degrees);
                setTimeout(() => checkGame(newData), 3000);
            })
            .catch((error) => {
                console.log("Somethig is wrong with server", error);
            });
    }
    function handleBet(e) {
        let newUserData = { ...userData, bet: e };
        setUserData(newUserData);
    }
    function checkGame(data) {
        console.log(selection.number, data.number, data.color);
        switch (selection.number) {
            case "1st 12":
                if (data.number >= 1 && data.number < 13) {
                    alert("You Win!!");
                    let newData = {
                        ...userData,
                        money: userData.money + userData.bet,
                    };
                    setUserData(newData);
                } else {
                    alert("You Lost!!");
                    let newData = {
                        ...userData,
                        money: userData.money - userData.bet,
                    };
                    setUserData(newData);
                }
                break;
            case "2nd 12":
                if (data.number >= 13 && data.number < 23) {
                    alert("You Win!!");
                    let newData = {
                        ...userData,
                        money: userData.money + userData.bet,
                    };
                    setUserData(newData);
                } else {
                    alert("You Lost!!");
                    let newData = {
                        ...userData,
                        money: userData.money - userData.bet,
                    };
                    setUserData(newData);
                }
                break;
            case "3rd 12":
                if (data.number >= 23 && data.number < 37) {
                    alert("You Win!!");
                    let newData = {
                        ...userData,
                        money: userData.money + userData.bet,
                    };
                    setUserData(newData);
                } else {
                    alert("You Lost!!");
                    let newData = {
                        ...userData,
                        money: userData.money - userData.bet,
                    };
                    setUserData(newData);
                }
                break;
            case "1 - 18":
                if (data.number >= 1 && data.number < 19) {
                    alert("You Win!!");
                    let newData = {
                        ...userData,
                        money: userData.money + userData.bet,
                    };
                    setUserData(newData);
                } else {
                    alert("You Lost!!");
                    let newData = {
                        ...userData,
                        money: userData.money - userData.bet,
                    };
                    setUserData(newData);
                }
                break;
            case "19 - 36":
                if (data.number >= 19 && data.number < 37) {
                    alert("You Win!!");
                    let newData = {
                        ...userData,
                        money: userData.money + userData.bet,
                    };
                    setUserData(newData);
                } else {
                    alert("You Lost!!");
                    let newData = {
                        ...userData,
                        money: userData.money - userData.bet,
                    };
                    setUserData(newData);
                }
                break;
            case "Even":
                if (data.number % 2 === 0) {
                    alert("You Win!!");
                    let newData = {
                        ...userData,
                        money: userData.money + userData.bet,
                    };
                    setUserData(newData);
                } else {
                    alert("You Lost!!");
                    let newData = {
                        ...userData,
                        money: userData.money - userData.bet,
                    };
                    setUserData(newData);
                }
                break;
            case "Odd":
                if (data.number % 2 === 1) {
                    alert("You Win!!");
                    let newData = {
                        ...userData,
                        money: userData.money + userData.bet,
                    };
                    setUserData(newData);
                } else {
                    alert("You Lost!!");
                    let newData = {
                        ...userData,
                        money: userData.money - userData.bet,
                    };
                    setUserData(newData);
                }
                break;
            case "red":
                if (data.color === "red") {
                    alert("You Win!!");
                    let newData = {
                        ...userData,
                        money: userData.money + userData.bet,
                    };
                    setUserData(newData);
                } else {
                    alert("You Lost!!");
                    let newData = {
                        ...userData,
                        money: userData.money - userData.bet,
                    };
                    setUserData(newData);
                }
                break;
            case "black":
                if (data.color === "black") {
                    alert("You Win!!");
                    let newData = {
                        ...userData,
                        money: userData.money + userData.bet,
                    };
                    setUserData(newData);
                } else {
                    alert("You Lost!!");
                    let newData = {
                        ...userData,
                        money: userData.money - userData.bet,
                    };
                    setUserData(newData);
                }
                break;
            default:
                if (parseInt(selection.number) === data.number) {
                    alert("You Win!!");
                    let newData = {
                        ...userData,
                        money: userData.money + userData.bet,
                    };
                    setUserData(newData);
                } else {
                    alert("You Lost!!");
                    let newData = {
                        ...userData,
                        money: userData.money - userData.bet,
                    };
                    setUserData(newData);
                }
                break;
        }
    }
    return (
        <div className="bg-green-950 h-screen">
            <div className="flex bg-black mb-20">
                <GameData
                    selection={selection}
                    serverData={serverData.number}
                />
                <Roulette degrees={serverData.degrees} />
                <UserData
                    handleSpin={handleSpin}
                    userData={userData}
                    handleBet={handleBet}
                />
            </div>
            <Board handleClick={handleClickBoard} />
        </div>
    );
}

export default App;
