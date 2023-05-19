import React,{useState} from "react";



function Card({id,name,info,image,price,removeCard}){

    const [readMore ,setRedmore] = useState(false);
    const Description = readMore ? info : `${info.substring(0,200)}....` 

    const handelMore = () =>{
        setRedmore(!readMore);
       
        
    }

    return(
        <div className="w-[400px] h-[500px] bg-slate-500 rounded-xl">
            <img src= {image} className="w-[400px] h-[250px] p-5"></img>
            <div>
                <div className="pl-5 pr-5">
                    <h4 className="text-xl mb-2 font-bold">{price}</h4>
                    <h4 className="text-xl mb-2 font-bold">{name}</h4>
                </div>

                <div className="pl-5 pr-5">
                    {Description}
                    <span onClick={handelMore} className="c-[#fff]">
                        {
                            readMore ? `show less` : `Show More`
                        }
                    </span>
                </div>
            </div>
            <button onClick={() => removeCard(id)}>
                Not interested
            </button>
        </div>
    );

}
export default Card;