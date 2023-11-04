import axios from 'axios';
import './App.css';
import { useEffect, useState } from 'react';
import scoreee from '../src/score.png'

function App() {
  const [question, setQuestion] = useState([])
  const [shuffledAnswer, setShuffledAnswer] = useState()
  const [first, setFirst] = useState({ borderRadius: "14px", backgroundColor: ""})
  const [second, setSecond] = useState({ borderRadius: "14px", backgroundColor: ""})
  const [third, setThird] = useState({ borderRadius: "14px", backgroundColor: ""})
  const [four, setFour] = useState({ borderRadius: "14px", backgroundColor: ""})
  const [curQue, setCurQue] = useState(0)
  const [point, setPoint] = useState(0)
  const [btndis, setButtonDis] = useState(false)
  const [isCompleted,setIsCompleted] = useState(false)

  const apiCall = async () => {
    const result = await axios.get("https://opentdb.com/api.php?amount=10&category=18&difficulty=medium&type=multiple")
    setQuestion(result.data.results)
  }
  const shuffle = () => {
    if (question.length > 0 && curQue<=9) {
      const answer = [...question[curQue].incorrect_answers, question[curQue].correct_answer]
      for (let index = 0; index < answer.length; index++) {
        const j = Math.floor(Math.random() * index);
        const tmp = answer[index];
        answer[index] = answer[j];
        answer[j] = tmp
      }
      setShuffledAnswer(answer)
    }
    if(curQue>9){
      setIsCompleted(true)
    }
  }

  const handleAnswer = (choosen, classo) => {
    if (!btndis) {
      if (choosen === question[curQue].correct_answer) {

        if (classo === "first") {
          setFirst({ ...first, backgroundColor: "Green", color: "white" })
          setTimeout(() => {
            setFirst({ ...first, backgroundColor: "", color: "" })
          }, 1000);
        } else if (classo === "second") {
          setSecond({ ...second, backgroundColor: "Green", color: "white" })
          setTimeout(() => {
            setSecond({ ...first, backgroundColor: "", color: "" })
          }, 1000);
        } else if (classo === "third") {
          setThird({ ...third, backgroundColor: "Green", color: "white" })
          setTimeout(() => {
            setThird({ ...first, backgroundColor: "", color: "" })
          }, 1000);
        } else if (classo === "fourth") {
          setFour({ ...four, backgroundColor: "Green", color: "white" })
          setTimeout(() => {
            setFour({ ...first, backgroundColor: "", color: "" })
          }, 1000);
        }
        setButtonDis(true)
        const nextQuestion = curQue + 1
        setTimeout(() => {
          setCurQue(nextQuestion)
          setButtonDis(false)
        }, 1000);
        const pointss = point + 1
        setPoint(pointss)
        
      } else {
        if (classo === "first") {
          setFirst({ ...first, backgroundColor: "red", color: "white" })
          setTimeout(() => {
            setFirst({ ...first, backgroundColor: "", color: "" })
          }, 1000);
        } else if (classo === "second") {
          setSecond({ ...second, backgroundColor: "red", color: "white" })
          setTimeout(() => {
            setSecond({ ...first, backgroundColor: "", color: "" })
          }, 1000);
        } else if (classo === "third") {
          setThird({ ...third, backgroundColor: "red", color: "white" })
          setTimeout(() => {
            setThird({ ...first, backgroundColor: "", color: "" })
          }, 1000);

        } else if (classo === "fourth") {
          setFour({ ...four, backgroundColor: "red", color: "white" })
          setTimeout(() => {
            setFour({ ...first, backgroundColor: "", color: "" })
          }, 1000);
        }
        setButtonDis(true)
        const nextQuestion = curQue + 1
        setTimeout(() => {
          setCurQue(nextQuestion)
          setButtonDis(false)
        }, 1000);
      }
    }
  }

  const handleReset = ()=>{
    setIsCompleted(!isCompleted)
    setCurQue(0)
  }

  useEffect(() => {
    apiCall()
  }, [isCompleted])
  useEffect(() => {
    shuffle()
  }, [question, curQue,isCompleted])


  return (
    <div id='bg-color' style={{ height: "100vh", padding: "4%" }}>
      <div id="main-cointainer" className='row'>
        <div className="col-lg-3 "></div>
        <div className='col-lg-6 text-center mt-3'>
          <div style={{ background: "rgba(191,177,177,0.5)", borderRadius: "20px" }} className={!isCompleted ? "p-5" : "d-flex justify-content-center p-5 align-items-center"}>
            { !isCompleted ?
              <div>
              <div>
                <div>
                  <div className='d-flex justify-content-center'>
                    <h5 className='fw-bold text-center'>Question {curQue + 1}/10 </h5>
                  </div>
                </div>
                <h5 className='mt-3 fw-bold'>{question[curQue]?.question}</h5>
              </div>
              <div>
                <div style={first} className='w-100 py-3 fw-bold d-flex align-items-left utharam changeColor mt-3' onClick={() => handleAnswer(shuffledAnswer[0], "first")}>
                  <div className='d-flex align-items-center ms-3 mt-1'>
                    <h5 className='px-2 py-1 Asss rounded-circle fw-bold me-3 '>A</h5>
                    <h5>{shuffledAnswer ? shuffledAnswer[0] : 'Loading...'}</h5>
                  </div>
                </div>
                <div style={second} className='w-100 py-3 fw-bold d-flex align-items-left changeColor mt-3 utharam' onClick={() => handleAnswer(shuffledAnswer[1], "second")}>
                  <div className='d-flex align-items-center ms-3 mt-1'>
                    <h5 className='px-2 py-1 Asss rounded-circle fw-bold me-3 '>B</h5>
                    <h5>{shuffledAnswer ? shuffledAnswer[1] : 'Loading...'}</h5>
                  </div>
                </div>
                <div style={third} className='w-100 py-3 fw-bold d-flex align-items-left utharam mt-3' onClick={() => handleAnswer(shuffledAnswer[2], "third")}>
                  <div className='d-flex align-items-center ms-3 mt-1'>
                    <h5 className='px-2 py-1 Asss rounded-circle fw-bold me-3 '>C</h5>
                    <h5>{shuffledAnswer ? shuffledAnswer[2] : 'Loading...'}</h5>
                  </div>
                </div>
                <div style={four} className='w-100 py-3 fw-bold d-flex align-items-left utharam mt-3' onClick={() => handleAnswer(shuffledAnswer[3], "four")}>
                  <div className='d-flex align-items-center ms-3 mt-1'>
                    <h5 className='px-2 py-1 Asss rounded-circle fw-bold me-3 '>D</h5>
                    <h5>{shuffledAnswer ? shuffledAnswer[3] : 'Loading...'}</h5>
                  </div>
                </div>
              </div>
            </div> :
            <div className='scoree p-5'>
              <div>
                <img className='img-fluid' src={scoreee} alt="" />
                <h1 className='text-light'>{point}</h1>
              </div>
              <button className='btn btn-primary' onClick={()=>handleReset()}>Play Again</button>
            </div>
            
            }
          </div>
        </div>
        <div className='col-lg-3'></div>
      </div>
    </div>
  );
}

export default App;
