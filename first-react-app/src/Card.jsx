export default function Card({pic,title,price,onSale})
{
    return(
        <>
        <div className="item">
            <img src={pic} alt="" width="200"></img>
            <h2>{title}</h2>
            <p>{price}</p>
            <div>{(onSale&&"SALE!!")}</div>
        </div>
        </>
    )
}