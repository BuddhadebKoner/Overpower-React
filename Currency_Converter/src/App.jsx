import { useState, useEffect } from 'react';
import Input from './Components/Input';
import Appinfo from './Hooks/Appinfo';

function App() {
  const MainDataArray = Appinfo();
  const CurrencyInfo = MainDataArray[1];
  const currencyList = MainDataArray[0];

  const [AllCountryList, setAllCountryList] = useState([]);
  const [selectedInputCurrency, setSelectedInputCurrency] = useState('INR');
  const [selectedOutputCurrency, setSelectedOutputCurrency] = useState('USD');
  const [inputAmount, setInputAmount] = useState(1); // Default input amount

  useEffect(() => {
    setAllCountryList(Object.keys(currencyList));
  }, [currencyList]);

  const handleCurrencyChange = (value, isInputCurrency) => {
    if (isInputCurrency) {
      setSelectedInputCurrency(value);
    } else {
      setSelectedOutputCurrency(value);
    }
  };

  const handleAmountChange = (e) => {
    setInputAmount(e.target.value);
  };

  const convertCurrency = () => {
    // Get exchange rate for input and output currencies
    const inputExchangeRate = currencyList[selectedInputCurrency].value;
    const outputExchangeRate = currencyList[selectedOutputCurrency].value;

    // Calculate converted amount
    const convertedAmount = (inputAmount / inputExchangeRate) * outputExchangeRate;

    // Display converted amount
    alert(`${inputAmount} ${selectedInputCurrency} = ${convertedAmount.toFixed(2)} ${selectedOutputCurrency}`);
  };

  return (
    <div className="main-card bg-primary-bg w-[60rem] h-[29rem] rounded-[1.5em] flex justify-center flex-col p-8">
      <div className="head-details-container w-[100%] h-[37%] flex flex-col justify-between items-start p-4">
        <h1 className='font-thin text-2xl' >1.00 US Dollar =</h1>
        <h1 className='font-bold text-5xl'>83.54 Indian Rupee</h1>
        <p className='font-bold'>Last updated · {CurrencyInfo.meta.last_updated_at}</p>
      </div>
      <div className="exchange-container h-[40%] flex flex-row justify-around items-center">
        <Input
          currencyList={AllCountryList}
          selectedCurrency={selectedInputCurrency}
          onCurrencyChange={(value) => handleCurrencyChange(value, true)}
          amount={inputAmount}
          onAmountChange={handleAmountChange}
        />
        <button type="button" onClick={() => setSelectedInputCurrency(selectedOutputCurrency)}>
          <img src="swap.svg" alt="" />
        </button>
        <Input
          currencyList={AllCountryList}
          selectedCurrency={selectedOutputCurrency}
          onCurrencyChange={(value) => handleCurrencyChange(value, false)}
          amount={inputAmount} // Pass input amount to output currency for display consistency
          disabled={true} // Disable output section
        />
      </div>
      <div className="submit-btn-container h-[23%] flex items-end justify-center ">
        <button
          className='bg-primary-light text-text-color font-bold text-2xl w-[50%] h-[50%] rounded-[1.5em] flex justify-center items-center cursor-pointer'
          type="button"
          onClick={convertCurrency}
        >
          Convert {selectedInputCurrency} to {selectedOutputCurrency}
        </button>
      </div>
    </div>
  );
}

export default App;
