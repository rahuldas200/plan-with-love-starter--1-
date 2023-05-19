import Card from "./Card";


function Tours({tours,removeCard}){
    return(
        <div className="w-[1200px]">
            <div className="h-20 w-auto">
                <h2 className="text-center text-3xl p-2 mt-9">Plan with Rahul</h2>
            </div>
            <div className="grid grid-cols-3 gap-6 items-start justify-center">
                {
                    tours.map( (tour) => {
                        return <Card {...tour} removeCard = {removeCard}></Card>
                    })
                }
            </div>
        </div>
    );

}
export default Tours;