import { useState } from 'react'
import Input from './Components/Input'
import Appinfo from './Hooks/Appinfo'

function App() {

	const MainDataArray = Appinfo()
	const CurrencyInfo = MainDataArray[1]
	const currencyList = MainDataArray[0]
	
	console.log(CurrencyInfo, currencyList);

	// const currencyOptions = Object.keys(CurrencyInfo.data)
	

	return (
		<>
			<div className="main-card bg-primary-bg w-[60rem] h-[29rem] rounded-[1.5em] flex justify-center flex-col p-8">
				<div className="head-details-container w-[100%] h-[37%] flex flex-col justify-between items-start p-4">
					<h1 className='font-thin text-2xl' >1.00 US Dollar =</h1>
					<h1 className='font-bold text-5xl'>83.54 Indian Rupee</h1>
					<p className='font-bold'>Last updated · {CurrencyInfo.meta.last_updated_at}</p>
				</div>
				<div className="exchange-container h-[40%] flex flex-row justify-around items-center">
					<Input/>
					<button type="button">
						<img src="swap.svg" alt="" />
					</button>
					<Input/>
				</div>
				<div className="submit-btn-container h-[23%] flex items-end justify-center ">
					<p
						className='bg-primary-light text-text-color font-bold text-2xl w-[50%] h-[50%] rounded-[1.5em] flex justify-center items-center cursor-pointer'
						type="button"
					>Convert USD to INR</p>
				</div>

			</div>
		</>
	)
}

export default App
