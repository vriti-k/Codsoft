import React, { useContext } from 'react'
import './ProductDisplay.css'
import star_icon from '../Assets/star_icon.png'
import star_dull_icon from '../Assets/star_dull_icon.png'
import { ShopContext } from '../../Context/ShopContext'

export const ProductDisplay = (props) => {
    const {product} = props;
    const {addToCart} = useContext(ShopContext);
    if (!product || !product.image) {
        return <div>Loading...</div>;
    }
  return (
    <div className='productdisplay'>
        <div className='productdisplay-left'>
            <div className='productdisplay-img-list'>
                <img src={product.image} alt=""/>
                <img src={product.image} alt=""/>
                <img src={product.image} alt=""/>
                <img src={product.image} alt=""/>
            </div>
            <div className='productdisplay-img'>
                <img className='productdisplay-main-img' src={product.image} alt=""/>
            </div>
        </div>
        <div className='productdisplay-right'>
            <h1>{product.name}</h1>
            <div className='productdisplay-right-star'>
                <img src={star_icon} alt=''/>
                <img src={star_icon} alt=''/>
                <img src={star_icon} alt=''/>
                <img src={star_icon} alt=''/>
                <img src={star_dull_icon} alt=''/>
                <p>(122)</p>
            </div>
            <div className='productdisplay-right-prices'>
                <div className='productdisplay-right-price-old'>${product.old_price}</div>
                <div className='productdisplay-right-price-new'>${product.new_price}</div>
            </div>
            <div className='productdisplay-right-description'>
            As a third-year Ph.D. candidate, Olive Smith doesn't believe in lasting romantic relationships--but her best friend does,
            and that's what got her into this situation. Convincing Anh that Olive is dating and well on her way to a happily ever after
            was always going to take more than hand-wavy Jedi mind tricks: Scientists require proof. So, like any self-respecting biologist,
            Olive panics and kisses the first man she sees.<br/>That man is none other than Adam Carlsen, a young hotshot professor--and
            well-known ass. Which is why Olive is positively floored when Stanford's reigning lab tyrant agrees to keep her charade a secret
            and be her fake boyfriend. But when a big science conference goes haywire, putting Olive's career on the Bunsen burner, Adam
            surprises her again with his unyielding support and even more unyielding... six-pack abs.<br/>Suddenly their little experiment
            feels dangerously close to combustion. And Olive discovers that the only thing more complicated than a hypothesis on love is
            putting her own heart under the microscope.
            </div>
            <button onClick={()=>{addToCart(product.id)}}>Add To Cart</button>
            <p className='productdisplay-right-genere'><span>Generes : </span>Fictional, Romance, Contempory, Adult</p>
        </div>
    </div>
  )
}
