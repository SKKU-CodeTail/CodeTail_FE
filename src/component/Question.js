import QuestionData from "../files/leetcode";
import axios from "axios";
import React, { Fragment, useEffect, useState } from "react";

const Question = () => {
  const [lecture, setLecture] = useState([]);
  useEffect(() => {
    axios
      .get("/qid/question", {
        params: {
          abc: "가나다",
        },
      })
      .then((response) => {
        var temp=JSON.stringify(response.data)
        var step
        for (step = 0; step < 6582; step++) {
          if(QuestionData[step].id==temp){
            setLecture(QuestionData[step].description);
          }
        }
      });
  }, []);
  return (
  <textarea value={lecture} style={{ whiteSpace: 'pre-line', height: '300px' }}></textarea>
  //<div style={{ fontSize: '14px', color:'black'}}>{lecture}</div>
  );
};


export default Question;