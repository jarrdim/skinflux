// src/components/PaymentForm.tsx
import React, { useState } from 'react';

const PaymentForm: React.FC = () => {
  const [amount, setAmount] = useState<number>(0);
  const [currency, setCurrency] = useState<string>('USD');
  const [cardNumber, setCardNumber] = useState<string>('');
  const [expiryDate, setExpiryDate] = useState<string>('');
  const [cvv, setCvv] = useState<string>('');
  const [rememberCard, setRememberCard] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>('');

  const handlePayment = async () => {
    setError('');
    if (!amount || !currency || !cardNumber || !expiryDate || !cvv) {
      setError('Please fill out all fields');
      return;
    }


    setLoading(true);
    try {
      const response = await fetch('/payment', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          amount: amount * 100,
          currency,
          source: {
            number: cardNumber,
            exp_month: expiryDate.split('/')[0],
            exp_year: expiryDate.split('/')[1],
            cvc: cvv,
          },
          rememberCard,
        }),
      });
      const data = await response.json();
      setLoading(false);
      if (data.error) {
        setError(data.message);
        return;
      }
      console.log('Payment successful:', data.charge);
    } catch (error) {
      setLoading(false);
      setError('An error occurred. Please try again.');
      console.error(error);
    }
  };

  return (
    <div className="max-w-lg mx-auto mt-10  bg-gray-300 p-10 rounded-md shadow-md ">
      <h1 className="text-3xl font-bold text-center mb-6">Payment</h1>
      <p className="text-center mb-4 text-gray-600">Please enter your payment details below to proceed.</p>
      <div className="space-y-4">
        {error && <p className="text-red-500 text-center">{error}</p>}
        <div className="flex flex-col">
          <label className="mb-1 text-gray-900">Amount</label>
          <input
            type="number"
            placeholder="Amount"
            value={amount}
            onChange={(e) => setAmount(Number(e.target.value))}
            className="border border-gray-400 px-3 py-2 rounded focus:outline-none focus:border-slate-900"
          />
        </div>
        <div className="flex flex-col">
          <label className="mb-1 text-gray-700">Card Number</label>
          <input
            type="text"
            placeholder="Card Number"
            value={cardNumber}
            onChange={(e) => setCardNumber(e.target.value)}
            className="border border-gray-400 px-3 py-2 rounded focus:outline-none focus:border-slate-900"
          />
        </div>
        <div className="flex flex-col">
          <label className="mb-1 text-gray-900">Expiry Date (MM/YY)</label>
          <input
            type="text"
            placeholder="Expiry Date (MM/YY)"
            value={expiryDate}
            onChange={(e) => setExpiryDate(e.target.value)}
            className="border border-gray-900 px-3 py-2 rounded focus:outline-none focus:border-slate-900"
          />
        </div>
        <div className="flex flex-col">
          <label className="mb-1 text-gray-900">CVV</label>
          <input
            type="text"
            placeholder="CVV"
            value={cvv}
            onChange={(e) => setCvv(e.target.value)}
            className="border border-gray-900 px-3 py-2 rounded focus:outline-none focus:border-slate-900"
          />
        </div>
        <div className="flex items-center">
          <input
            type="checkbox"
            checked={rememberCard}
            onChange={(e) => setRememberCard(e.target.checked)}
            className="mr-2"
          />
          <label className="text-gray-900">Remember this card for future payments</label>
        </div>
        <button
          onClick={handlePayment}
          disabled={loading}
          className="w-full bg-slate-900 text-white px-4 py-2 rounded mt-4 hover:bg-purple-600 transition duration-300"
        >
          {loading ? 'Processing...' : 'Pay'}
        </button>
      </div>
    </div>
  );
};

export default PaymentForm;
