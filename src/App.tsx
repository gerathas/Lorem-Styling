import './App.css';
import { useState } from 'react';

function App() {
  var paragraph =
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas aliquam odio ut sapien mollis hendrerit. Fusce in lectus ex. In hac habitasse platea dictumst. Duis aliquam sed arcu at sagittis. Pellentesque suscipit elit a elit dignissim, ornare mattis libero convallis. Interdum et malesuada fames ac ante ipsum primis in faucibus. Pellentesque in dictum augue, nec consectetur enim. Pellentesque quis quam ultricies, volutpat nulla sit amet, egestas est. Praesent accumsan ante non dui sollicitudin convallis. Etiam facilisis finibus lectus, euismod gravida ipsum ultricies at.';

  const [input1, setInput1] = useState('');
  const [input2, setInput2] = useState('');
  const [input3, setInput3] = useState('');

  const handleInput1 = (event) => {
    setInput1(event.target.value);
  };
  const handleInput2 = (event) => {
    setInput2(event.target.value);
  };
  const handleInput3 = (event) => {
    setInput3(event.target.value);
  };

  // Helper function to underline text from the first input
  function getUnderlinedText(text, highlight) {
    const parts = text.split(new RegExp(`(${highlight})`, 'gi'));
    return (
      <span>
        {' '}
        {parts.map((part, i) => (
          <span
            key={i}
            style={
              part.toLowerCase() === highlight.toLowerCase()
                ? { textDecorationLine: 'underline' }
                : {}
            }
          >
            {part}
          </span>
        ))}{' '}
      </span>
    );
  }

  // Helper function to bold text from the second input
  function getBoldedText(text, highlight) {
    const parts = text.split(new RegExp(`(${highlight})`, 'gi'));
    return (
      <span>
        {' '}
        {parts.map((part, i) => (
          <span
            key={i}
            style={
              part.toLowerCase() === highlight.toLowerCase()
                ? { fontWeight: 'bold' }
                : {}
            }
          >
            {part}
          </span>
        ))}{' '}
      </span>
    );
  }

  // Helper function to change text to red from the third input
  function getRedText(text, highlight) {
    // Split on highlight term and include term into parts, ignore case
    const parts = text.split(new RegExp(`(${highlight})`, 'gi'));
    return (
      <span>
        {' '}
        {parts.map((part, i) => (
          <span
            key={i}
            style={
              part.toLowerCase() === highlight.toLowerCase()
                ? { color: 'red' }
                : {}
            }
          >
            {part}
          </span>
        ))}{' '}
      </span>
    );
  }

  return (
    <>
      {input1 ? (
        getUnderlinedText(paragraph, input1)
      ) : input2 ? (
        getBoldedText(paragraph, input2)
      ) : input3 ? (
        getRedText(paragraph, input3)
      ) : (
        <span> {paragraph} </span>
      )}
      <div></div>
      <div className="card">
        <input
          onChange={handleInput1}
          placeholder="Enter text to be underlined."
        />
      </div>
      <div>
        <input onChange={handleInput2} placeholder="Enter text to be bolded." />
      </div>
      <div className="card">
        <input
          onChange={handleInput3}
          placeholder="Enter text to appear red."
        />
      </div>
    </>
  );
}

export default App;
