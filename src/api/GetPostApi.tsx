// export default function GetData(moves: any, DataIsloaded): void {

//     fetch('https://localhost:7185/api/Move'
//     )
//         .then(response => response.json())
//         .then((data) => {
//             setState({
//                 moves: data,
//                 DataIsloaded: true
//             })
//         });
// }

export const GetAllMoves = async () => {
    const data = await fetch('https://localhost:5001/api/Move');
    const json = await data.json();
    return json;
};