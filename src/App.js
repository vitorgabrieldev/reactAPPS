import logo from './logo.svg';
import './App.css';

function App() {
  
  const lettername = 'vitor';

  const name = lettername.toUpperCase();

  function sun(a, b)
  {
    return a + b;
  };

  const url = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTY0YffJXSjSMEwLUzpKR_PHlgykcnGzbdRkAqKdXCfXg&s";

  // ===== timer ======
  var hours = new Date().getHours();
  var minutes = new Date().getMinutes();
  var seconds = new Date().getSeconds();

  return (
    
    <section class="hello">
      <h1> Hello, {name}! </h1>
      <p>soma: {sun(20, 20)}</p>
      <h1>{hours} : {minutes} : {seconds}</h1>
      <img src={url} />
    </section>
  );
}

export default App;
