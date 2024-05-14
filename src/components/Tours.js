import Card from "./Card";

function Tours({ tours, removeTour }) {
    return (
        <div className="flex flex-col justify-center items-center">
            <div>
                <h2 className="text-5xl border-4 border-sky-500 rounded-xl border-dashed m-[6vh] px-[1vw] py-[5vh]" >Tour With Sid</h2>
            </div>

            <div className="flex flex-wrap max-x-[1300px] justify-center mx-auto my-0">
                {
                    tours.map((tour) => {
                        return <Card key={tour.id} {...tour} removeTour={removeTour}></Card>
                    })
                }
            </div>
        </div>
    )

}

export default Tours;