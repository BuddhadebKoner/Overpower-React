import React from 'react';

export default function Input({
  currencyList,
  selectedCurrency,
  onCurrencyChange,
  amount,
  onAmountChange,
  disabled }) {
  return (
    <div className="input-container bg-primary-light text-text-color w-[20rem] h-[85%] rounded-[1.5em]">
      <div className="excanger-head w-[100%] h-[45%] bg-primary-light rounded-[1.5em] drop-shadow-lg p-3 flex justify-start items-center">
        <select
          className="rounded-lg p-1 cursor-pointer outline-none text-2xl font-bold bg-transparent w-[100%]"
          value={selectedCurrency}
          onChange={(e) => onCurrencyChange(e.target.value)}
        >
          {currencyList.map((currency) => (
            <option key={currency} value={currency}>{currency}</option>
          ))}
        </select>
      </div>
      <div className="w-[100%] h-[55%] flex items-center justify-start rounded-[1.5em] pl-4 ">
        <input
          className="w-[90%] h-[70%] bg-transparent text-text-color font-bold text-3xl outline-none"
          type="number"
          value={amount}
          placeholder="Enter amount"
          onChange={onAmountChange}
          disabled={disabled}
        />
      </div>
    </div>
  );
}
