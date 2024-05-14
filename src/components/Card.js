import { useState } from "react";


function Card({ id, name, info, image, price, removeTour }) {


    const [readmore, setReadmore] = useState(false);


    const description = readmore ? info : `${info.substring(0, 200)}.... `;


    function readMoreHandler() {
        setReadmore(!readmore);
    }


    return (
        <div className="w-[400px] max-h-full m-[1rem] p-[1rem] flex flex-col rounded-xl shadow-lg items-center">
            <img src={image} alt="" className="w-[380px] aspect-[1/1] object-cover" />

            <div className="my-[20px] mx-[5px]">
                <div className="tour-details">
                    <div className="tour-info">
                        <h4 className="text-[#1faa59] text-[1.3rem]">₹ {price}</h4>
                        <h4 className="text-[1.5rem]">{name}</h4>
                    </div>

                    <div className="tour-description">
                        {description}
                        <span className="text-[#12b0e8] cursor-pointer" onClick={readMoreHandler}>
                            {readmore ? 'Show Less' : "Read More"}
                        </span>
                    </div>
                </div>
            </div>

            <button className="mt-[18px] py-[10px] px-[80px] border-2 border-red-500 rounded-lg text-[18px] font-bold hover:text-white hover:bg-red-500" onClick={() => removeTour(id)}>
                Not Interested
            </button>
        </div>
    )
}

export default Card;