let securityQuestions = [
    {
    question: "What was your first pet’s name?",
    expectedAnswer: 'FlufferNutter'
    },
    {
    question: 'What was the model year of your first car?',
    expectedAnswer: 1985
    },
    {
    question: 'What city were you born in?',
    expectedAnswer: 'NYC'
    }
   ]
   function chksecurityQuestions(securityQuestions,question,expectedAnswer) {
              let ans;
         securityQuestions.forEach(item => {
                  
             if (item.question==question){ 
                 if(item.expectedAnswer==expectedAnswer){
                 ans= true;
             } else {
                 ans=false
             }
                
             
                
             }
                
             
         }); return ans;
             
             
        
   } console.log(chksecurityQuestions(securityQuestions,"What was your first pet’s name?",'FlufferNutter'))
