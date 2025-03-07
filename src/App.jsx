import React, { useState } from 'react';
import './App.css'

const easy = [
  { question: "What is the capital of France?", answer: "Paris", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQcssQ4215Dn8w5JTKRwpImgojHCJV4kVNO3g&s" },
  { question: "What is the capital of Spain?", answer: "Madrid", image: "https://images.prismic.io/bounce/f9fe3657-0901-4a18-979a-9fcebb33998e_florian-wehde-WBGjg0DsO_g-unsplash.jpg?auto=compress%2Cformat&w=1466&fit=crop&ar=3%3A2" },
  { question: "What is the capital of the Netherlands?", answer: "Amsterdam", image: "https://static01.nyt.com/images/2023/09/24/multimedia/24-36Hrs-Amsterdam-01-01-cwqt/24-36Hrs-Amsterdam-01-01-cwqt-videoSixteenByNineJumbo1600.jpg" },
  { question: "What is the capital of Belgium?", answer: "Brussels", image: "https://www.theaugustin.com/_novaimg/4967824-1491086_0_0_1920_1281_2000_1334.webp" },
  { question: "What is the capital of Monaco?", answer: "Monaco", image: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/08/ba/72/68/monte-carlo-harbor.jpg?w=900&h=500&s=1" },
  { question: "What is the capital of Italy?", answer: "Rome", image: "https://www.insightvacations.com/wp-content/uploads/2024/01/caleb-miller-0Bs3et8FYyg-unsplash.jpg" },
  { question: "What is the capital of the United Kingdom?", answer: "London", image: "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8bG9uZG9uJTIwY2l0eXxlbnwwfHwwfHx8MA%3D%3D" },
  { question: "What is the capital of Germany?", answer: "Berlin", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f7/Museumsinsel_Berlin_Juli_2021_1_%28cropped%29_b.jpg/800px-Museumsinsel_Berlin_Juli_2021_1_%28cropped%29_b.jpg" },
  { question: "What is the capital of Japan?", answer: "Tokyo", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Skyscrapers_of_Shinjuku_2009_January.jpg/640px-Skyscrapers_of_Shinjuku_2009_January.jpg" },
  { question: "What is the capital of South Korea?", answer: "Seoul", image: "https://cdn.concreteplayground.com/content/uploads/2023/12/City-of-Seoul_CJNattanai_Getty-Images-1.jpg" },
  { question: "What is the capital of Singapore?", answer: "Singapore", image: "https://i.natgeofe.com/k/95d61645-a0c7-470f-b198-74a399dd5dfb/singapore-city_2x1.jpg" },
  { question: "What is the capital of the United States?", answer: "Washington, D.C.", image: "https://assets.editorial.aetnd.com/uploads/2010/06/washington-dc-gettyimages-74063516.jpg" },
  { question: "What is the capital of Mexico?", answer: "Mexico City", image: "https://afar.brightspotcdn.com/dims4/default/94017a2/2147483647/strip/false/crop/3000x1500+0+0/resize/1486x743!/quality/90/?url=https%3A%2F%2Fk3-prod-afar-media.s3.us-west-2.amazonaws.com%2Fbrightspot%2F22%2Fa3%2Fbf9b1d384ca8a9dcb732491dfadf%2Ftravelguide-mexicocity-ramiroreynajr.jpg" },
  { question: "What is the capital of Russia?", answer: "Moscow", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/85/Saint_Basil%27s_Cathedral_and_the_Red_Square.jpg/800px-Saint_Basil%27s_Cathedral_and_the_Red_Square.jpg" },
  { question: "What is the capital of China?", answer: "Beijing", image: "https://cdn.britannica.com/03/198203-050-138BB1C3/entrance-Gate-of-Divine-Might-Beijing-Forbidden.jpg" },
];

const hard = [
  { question: "What is the capital of Canada?", answer: "Ottawa", image: "https://travel.destinationcanada.com/_next/image?url=https%3A%2F%2Fadmin.destinationcanada.com%2Fsites%2Fdefault%2Ffiles%2Fimages%2Farticle%2Fp150006_018rr-945x597-c-default.jpg&w=1920&q=75" },
  { question: "What is the capital of Portugal?", answer: "Lisbon", image: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/15/33/f9/46/lisbon.jpg?w=1400&h=1400&s=1" },
  { question: "What is the capital of Vietnam?", answer: "Hanoi", image: "https://i.natgeofe.com/n/39181071-db55-488f-bd54-707759ad924e/river-hanoi-vietnam_4x3.jpg" },
  { question: "What is the capital of Thailand?", answer: "Bangkok", image: "https://static.independent.co.uk/2025/01/03/14/newFile-12.jpg" },
  { question: "What is the capital of Australia?", answer: "Canberra", image: "https://canberra.com.au/_next/image?url=https%3A%2F%2Fcms.canberra.com.au%2Fwp-content%2Fuploads%2F2022%2F03%2F2413_actgovt_001.jpg&w=3840&q=75" },
  { question: "What is the capital of Brazil?", answer: "Brasília", image: "https://upload.wikimedia.org/wikipedia/commons/2/2d/Planalto_Central_%28cropped%29.jpg" },
  { question: "What is the capital of Argentina?", answer: "Buenos Aires", image: "https://a.travel-assets.com/findyours-php/viewfinder/images/res70/64000/64898-Argentina.jpg" },
  { question: "What is the capital of Egypt?", answer: "Cairo", image: "https://media.cntraveler.com/photos/655cdf1d2d09a7e0b27741b5/16:9/w_2560%2Cc_limit/Cairo%2520Egypt_GettyImages-1370918272.jpg" },
  { question: "What is the capital of Turkey?", answer: "Ankara", image: "https://cdn.britannica.com/50/198450-050-3554B2AF/Ankara-Turkey.jpg" },
  { question: "What is the capital of Saudi Arabia?", answer: "Riyadh", image: "https://afar.brightspotcdn.com/dims4/default/bfded3e/2147483647/strip/true/crop/1000x667+0+0/resize/900x600!/quality/90/?url=https%3A%2F%2Fk3-prod-afar-media.s3.us-west-2.amazonaws.com%2Fbrightspot%2F6e%2F88%2Fa6ea44124d838499c3ee29c4a57c%2Fshutterstock-1224851173.jpg" },
];

function App() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showAnswer, setShowAnswer] = useState(false);
  const [flashcards, setFlashcards] = useState(easy);
  const [selectedMode, setSelectedMode] = useState('easy');

  const selectMode = (mode) => {
    setShowAnswer(false);
    setCurrentIndex(0);
    setSelectedMode(mode);
    if (mode === 'easy') {
      setTimeout(() => {
        setFlashcards(easy);
      }, 100);
    } else if (mode === 'hard') {
      setTimeout(() => {
        setFlashcards(hard);
      }, 100);
    } else {
      setTimeout(() => {
        setFlashcards(easy.concat(hard));
      }, 100);
    }
  };

  const selectNextCard = () => {
    setShowAnswer(false);
    setTimeout(() => {
      setCurrentIndex((currentIndex + 1) % flashcards.length);
    }, 100);
  };

  const selectLastCard = () => {
    setShowAnswer(false);
    setTimeout(() => {
      setCurrentIndex((currentIndex - 1 + flashcards.length) % flashcards.length);
    }, 100);
  };

  const toggleAnswer = () => {
    setShowAnswer(!showAnswer);
  };
  
  return (
    <div className="App">
      <h1>Guess the capital!</h1>
      <h3>How good are you with country capitals? Test your knowledge here!</h3>
      <h4>Number of cards: {flashcards.length}</h4>
      <div>
        <button className={`button ${selectedMode === 'easy' ? 'selected' : ''}`} onClick={() => selectMode('easy')}>Easy</button>
        <button className={`button ${selectedMode === 'hard' ? 'selected' : ''}`} onClick={() => selectMode('hard')}>Hard</button>
        <button className={`button ${selectedMode === 'all' ? 'selected' : ''}`} onClick={() => selectMode('all')}>All</button>
      </div>
      <div className={`flip-card ${showAnswer ? 'flipped' : ''} ${selectedMode}`} onClick={toggleAnswer}>
        <div className="flip-card-inner">
          <div className="flip-card-front">
            <p>{flashcards[currentIndex].question}</p>
          </div>
          <div className="flip-card-back">
            <p>{flashcards[currentIndex].answer}</p>
            <img src={flashcards[currentIndex].image} alt={flashcards[currentIndex].answer} />
          </div>
        </div>
      </div>
      <button onClick={selectLastCard} className="button">⭠</button>
      <button onClick={selectNextCard} className="button">⭢</button>
    </div>
  )
}

export default App;
