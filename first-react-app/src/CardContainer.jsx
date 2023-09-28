import Card from './Card'
export default function CardContainer()
{
    return(
        <div className="CardContainer">
            <Card pic="src\assets\pexels-the-glorious-studio-10475791.jpg" title="Ice Lake" price="$899" onSale={true}/>
            <Card pic="src\assets\pexels-the-glorious-studio-10475793.jpg" title="sapo de trapo" price="$1090"/>
    
        </div>
    )

}