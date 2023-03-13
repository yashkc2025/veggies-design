
// import '.././App.css'
// import '../styles/hero.scss'
export default function Hero() {
    return (
        <div className="hero">
            <div className="hero-text">
                <h1>we eat</h1><h1>fresh green</h1><h1> food</h1>
                <h3>the most convinient way to </h3><h3>get craveable,
                    feel-good </h3><h3>food on-demand
                </h3>
            </div>
           <div className="hero-image">
                <div className='image1'>
                    <img src={require('../images/okra.png')}></img>
                </div>
                <div className='image2'>
                    <img src={require('../images/cauli.png')}></img>
                </div>
            </div> 
        </div>
    );
}