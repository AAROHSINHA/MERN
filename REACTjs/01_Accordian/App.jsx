import React from 'react';
import './app.css';
import Dropdown from './dropdown';

const data = [
  {question : 'What is Sharpe Ratio in Mutual Fund?',
    answer : 'Sharpe raito determines the risk to reward ratio in Mutual Funds. It basically tells how much reward an investor gets on per-unit of risk.'
  },
  {question : 'What is the Expense Ratio of a Mutual Fund?', 
    answer : 'The Expense Ratio of the Mutual fund is the operating charge the fund house consts...it includes the manager fees, legal charges and brokerage fees,'
  },
  {question : 'What are the three types of Mutual Funds',
    answer : 'The three types of Mutual Funds are - Equity funds, Debt funds and Hybrid Funds. Investment in either of the three must be done, keeping in mind the risk tolerance and investment horizon of the investor.'
  },
  {question : 'Is a low AUM for a small cap fund good?',
    answer : 'Generally it is not considered a good option, as small cap funds invest in small cap equity stocks which are way too volatile. A large AUM means the fund manager has the pressure to put large amount of money in the high risk and high movement small cap stocks, which if things so south can give not so good results!'
  }
]

function App() {
  return (
    <div className='mainContent'>
        {data.map((dropdowns, index)=> (
          <Dropdown key={index} question={dropdowns.question} answer={dropdowns.answer}/>
        ))}
    </div>
  )
}

export default App
