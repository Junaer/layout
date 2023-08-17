import ShopItem from "../ShopItem/ShopItem"


export default function ListView(props) {

    return (
        <div className='item-list'>
            {props.cards.products.map((item, index) => 
                <ShopItem 
                item={item}
                key={index}
            />)}
        </div>
    )
}