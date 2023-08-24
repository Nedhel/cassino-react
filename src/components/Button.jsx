export function Button({ features, handleClick }) {
    let bgcolor, span;

    if (features.color === "black") {
        bgcolor = "bg-black";
    } else if (features.color === "red") {
        bgcolor = "bg-red-800";
    } else {
        bgcolor = "bg-green-950";
    }

    if (features.span === "big") {
        span = "col-span-4";
    } else if (features.span === "medium") {
        span = "col-span-2";
    } else if (features.span === "normal") {
        span = "col-auto";
    } else {
        span = "row-span-3";
    }
    return (
        <div
            className={`${bgcolor} ${span} border flex flex-col justify-center text-white`}
        >
            <button
                className={`text-lg w-full ${features.text}`}
                onClick={() => handleClick(features.number)}
            >
                {features.number}
            </button>
        </div>
    );
}
