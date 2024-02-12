import { useState } from 'react'
import './App.css'

function App() {

	let randPos = () => {
		let min = 50, max = 150
		return {x: (Math.random() * max-min + min)* Math.pow(-1, Math.floor(Math.random()*2)), y: (Math.random() * max-min + min)* Math.pow(-1, Math.floor(Math.random()*2))}
	}
	const [scale, setScale] = useState(1)
	const [style,setStyle] = useState({transform: `translate(${randPos.x}px, ${randPos.y}px)`})
	let newPos = () => {
		setStyle({...style, transform: `translate(${randPos().x}px, ${randPos().y}px) scale(${scale})`})
		setScale(prev => prev - .1)
	}
	const [show, setShow] = useState(false)
	let Onshow = ()	=> {
		setShow(true)
	}
  return (
    <>
      <h1>Ти будеш моєю валентинкою?</h1>
      <div className="wraper">
				{show ? <div className='metoo'><h1>Я теж буду твоїм валентином❤️‍🔥</h1></div> : false}
        <button onMouseEnter={Onshow}>Так</button>
        <button style={style} onMouseEnter={newPos}>Ні</button>
      </div>
    </>
  );
}

export default App
