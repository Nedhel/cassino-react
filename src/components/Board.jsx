import { Button } from "./Button";
export function Board({ handleClick }) {
    const items = [
        {
            color: "green",
            number: "0",
            span: "zero",
            text: "text-inherit",
        },
        {
            color: "red",
            number: "3",
            span: "normal",
            text: "text-inherit",
        },
        {
            color: "black",
            number: "6",
            span: "normal",
            text: "text-inherit",
        },
        {
            color: "red",
            number: "9",
            span: "normal",
            text: "text-inherit",
        },
        {
            color: "red",
            number: "12",
            span: "normal",
            text: "text-inherit",
        },
        {
            color: "black",
            number: "15",
            span: "normal",
            text: "text-inherit",
        },
        {
            color: "red",
            number: "18",
            span: "normal",
            text: "text-inherit",
        },
        {
            color: "red",
            number: "21",
            span: "normal",
            text: "text-inherit",
        },
        {
            color: "black",
            number: "24",
            span: "normal",
            text: "text-inherit",
        },
        {
            color: "red",
            number: "27",
            span: "normal",
            text: "text-inherit",
        },
        {
            color: "red",
            number: "30",
            span: "normal",
            text: "text-inherit",
        },
        {
            color: "black",
            number: "33",
            span: "normal",
            text: "text-inherit",
        },
        {
            color: "red",
            number: "36",
            span: "normal",
            text: "text-inherit",
        },
        {
            color: "black",
            number: "2",
            span: "normal",
            text: "text-inherit",
        },
        {
            color: "red",
            number: "5",
            span: "normal",
            text: "text-inherit",
        },
        {
            color: "black",
            number: "8",
            span: "normal",
            text: "text-inherit",
        },
        {
            color: "black",
            number: "11",
            span: "normal",
            text: "text-inherit",
        },
        {
            color: "red",
            number: "14",
            span: "normal",
            text: "text-inherit",
        },
        {
            color: "black",
            number: "17",
            span: "normal",
            text: "text-inherit",
        },
        {
            color: "black",
            number: "20",
            span: "normal",
            text: "text-inherit",
        },
        {
            color: "red",
            number: "23",
            span: "normal",
            text: "text-inherit",
        },
        {
            color: "black",
            number: "26",
            span: "normal",
            text: "text-inherit",
        },
        {
            color: "black",
            number: "29",
            span: "normal",
            text: "text-inherit",
        },
        {
            color: "red",
            number: "32",
            span: "normal",
            text: "text-inherit",
        },
        {
            color: "black",
            number: "35",
            span: "normal",
            text: "text-inherit",
        },
        {
            color: "red",
            number: "1",
            span: "normal",
            text: "text-inherit",
        },

        {
            color: "black",
            number: "4",
            span: "normal",
            text: "text-inherit",
        },

        {
            color: "red",
            number: "7",
            span: "normal",
            text: "text-inherit",
        },

        {
            color: "black",
            number: "10",
            span: "normal",
            text: "text-inherit",
        },

        {
            color: "black",
            number: "13",
            span: "normal",
            text: "text-inherit",
        },

        {
            color: "red",
            number: "16",
            span: "normal",
            text: "text-inherit",
        },

        {
            color: "red",
            number: "19",
            span: "normal",
            text: "text-inherit",
        },

        {
            color: "black",
            number: "22",
            span: "normal",
            text: "text-inherit",
        },

        {
            color: "red",
            number: "25",
            span: "normal",
            text: "text-inherit",
        },

        {
            color: "black",
            number: "28",
            span: "normal",
            text: "text-inherit",
        },

        {
            color: "black",
            number: "31",
            span: "normal",
            text: "text-inherit",
        },

        {
            color: "red",
            number: "34",
            span: "normal",
            text: "text-inherit",
        },

        {
            color: "green",
            number: "",
            span: "empty",
            text: "text-transparent",
        },
        {
            color: "green",
            number: "1st 12",
            span: "big",
            text: "text-inherit",
        },
        {
            color: "green",
            number: "2nd 12",
            span: "big",
            text: "text-inherit",
        },
        {
            color: "green",
            number: "3rd 12",
            span: "big",
            text: "text-inherit",
        },
        {
            color: "green",
            number: "1 - 18",
            span: "medium",
            text: "text-inherit",
        },
        {
            color: "green",
            number: "Even",
            span: "medium",
            text: "text-inherit",
        },
        {
            color: "red",
            number: "red",
            span: "medium",
            text: "text-transparent",
        },
        {
            color: "black",
            number: "black",
            span: "medium",
            text: "text-transparent",
        },
        {
            color: "green",
            number: "Odd",
            span: "medium",
            text: "text-inherit",
        },
        {
            color: "green",
            number: "19 - 36",
            span: "medium",
            text: "text-inherit",
        },
    ];
    return (
        <div className="grid grid-cols-13">
            {items.map((item) => {
                return (
                    <Button
                        features={item}
                        key={item.number}
                        handleClick={handleClick}
                    />
                );
            })}
        </div>
    );
}
