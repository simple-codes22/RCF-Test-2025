export const quizData = {
  title: 'General Knowledge Quiz',
  description: 'Test your knowledge with these general knowledge questions!',
  questions: [
    {
      question: "1. Suppose M= {x:x is positive integers less than 10} and N= {x:x is prime numbers}, what is M ∩ N?",
      options: ["{2}", "{2,4}", "{ }", "{6}"],
      answer: "{2}"
    },
    {
      question: "2. Let A ={2,3,5,7}, B={3,5,7,9} and C={5,7,9,11}, What is (A ∪ B) ∩ (B ∪ C)?",
      options: ["{3,5,7,9}", "{5,7}", "{5,7,9}", "{3,5,7}"],
      answer: "{3,5,7,9}"
    },
    {
      question: "3. Suppose Ų ={x:1≤x≤10} and X={2,4,6,8}, Y={3,6,9}; find (X ∩ Y)'.",
      options: ["{6}", "{ø}", "{1,2,3,4,5,6,7,8,9,10}", "{3,9}"],
      answer: "{1,2,3,4,5,6,7,8,9,10}"
    },
    {
      question: "4. Which of these is equivalent to (X ∩ X')?",
      options: ["{ø}", "ų", "X", "Y"],
      answer: "ų"
    },
    {
      question: "5. In a group of 100 students, 44 students love maths, 56 students love physics and 49 love GST. Among these students, 18 love math only, 20 love physics only and 25 love GST only. How many love at least two courses?",
      options: ["86", "6", "37", "40"],
      answer: "37"
    },
    {
      question: "6. Determine the pre-image of f:x-> x²+2x+1 if C = {16,25,49} and f is defined on D.",
      options: ["{-5,-6,-8,3,4,6}", "{-3,-5,-7,2,3,5}", "{-4,-5,-7,3,4,5}", "{-5,-6,-8,2,3,5}"],
      answer: "{-5,-6,-8,3,4,6}"
    },
    {
      question: "7. What is the range of Z=25x +2?",
      options: ["0,1", "0,infinity", "-infinity,0", "-infinity,infinity"],
      answer: "-infinity,infinity"
    },
    {
      question: "8. Given that f(x) =(2x+7)/3; solve for x such that f(x)=f⁻¹(x).",
      options: ["7", "7/2", "-7", "-7/2"],
      answer: "7"
    },
    {
      question: "9. Determine the zero of the function defined by f(x)= (3x+7)/(8x²+16x+8).",
      options: ["0", "-1", "-2⅓", "-1,-8"],
      answer: "-1"
    },
    {
      question: "10. Given that f(z)=y²z and f(3)=243; find y.",
      options: ["3", "9", "81", "24"],
      answer: "9"
    },
    {
      question: "11. The type of mapping that assigns a unique matric number to each student of 100 level is called:",
      options: ["constant mapping", "Onto mapping", "one-to-one mapping", "composite mapping"],
      answer: "one-to-one mapping"
    },
    {
      question: "12. The type of mapping where every 100 level student is assigned to a course such that every course has at least one student enrolled in it is called:",
      options: ["constant mapping", "Onto mapping", "one-to-one mapping", "composite mapping"],
      answer: "Onto mapping"
    },
    {
      question: "13. Imagine a school where every student wears the same colored uniform. The mapping that assigns every student to the color of the shirt worn is called:",
      options: ["constant mapping", "Onto mapping", "one-to-one mapping", "composite mapping"],
      answer: "constant mapping"
    },
    {
      question: "14. If f:x=>7x+9 is a mapping defined on the set R of real numbers. Determine the pre-image of {-5,2,9}.",
      options: ["{-26,23,27}", "{26,23,-27}", "{-2,-1,0}", "{2,10}"],
      answer: "{-2,-1,0}"
    },
    {
      question: "15. Given that the image of Q under the mapping x=7x+9 is 23, what is the value of Q?",
      options: ["2", "-2", "170", "-170"],
      answer: "2"
    },
    {
      question: "16. The product of a complex number and its conjugate results in a ______.",
      options: ["Real number", "Imaginary number", "Complex number", "Zero"],
      answer: "Real number"
    },
    {
      question: "17. Evaluate 4/(1+i)⁴.",
      options: ["1", "-1", "4", "-4"],
      answer: "1"
    },
    {
      question: "18. Simplify 2/(3-4i) + 2/(2+2i).",
      options: ["37/25 - 9i/25", "37/25 + 9i/25", "29/50 + 47i/50", "29/50 - 57i/50"],
      answer: "37/25 - 9i/25"
    },
    {
      question: "19. Find Z₁•Z₃ where Z₁ = 1+2i and Z₃ = 2+3i.",
      options: ["7i-4", "8+7i", "4+7i", "8-7i"],
      answer: "7i-4"
    },
    {
      question: "20. Find (Z₁)² where Z₁ = 1+2i.",
      options: ["5i-4", "5i+4", "4-3i", "4i-3"],
      answer: "4i-3"
    },
    // {
    //   question: "6. Find Z₁•Z₂ where Z₁ = 1+2i and Z₂ = 4-3i.",
    //   options: ["10i+5", "10+5i", "4-3i", "4i-7"],
    //   answer: "10+5i"
    // },
    // {
    //   question: "7. Compute Z₁+Z₂-Z₃ where Z₁ = 1+2i, Z₂ = 4-3i, and Z₃ = 2+3i.",
    //   options: ["5i -4", "7-2i", "3-4i", "7i-2"],
    //   answer: "3-4i"
    // },
    // {
    //   question: "8. _____ numbers range from -infinity to infinity.",
    //   options: ["natural", "integral", "complex", "Real", "complete"],
    //   answer: "Real"
    // },
    // {
    //   question: "1. ⅓x +1 ≥ ½x +3; solve the inequality.",
    //   options: ["x ≥ 12", "x > -12", "x ≤ 12", "x ≤ -12"],
    //   answer: "x ≤ -12"
    // },
    // {
    //   question: "2. Find the range for which the inequality x²+7x+12 ≤ 0.",
    //   options: ["x ≤ -3, x ≤ 4", "x < -3, x ≤ -4", "x ≤ -3, x ≤ -4", "x ≥ -3, x ≤ 4"],
    //   answer: "x ≤ -3, x ≤ -4"
    // },
    // {
    //   question: "3. Solve the inequality x²+4x >5.",
    //   options: ["x < 5, x > -1", "x < -5, x > 1", "x < 5, x > 1", "x < -5, x > -1"],
    //   answer: "x < 5, x > -1"
    // },
    // {
    //   question: "4. Determine the value of the inequality (x+5)⁵ > 0.",
    //   options: ["x > -5", "x > 5", "x > -3125", "x > 3125"],
    //   answer: "x > -5"
    // },
    // {
    //   question: "5. Solve the inequality 3x+4>2x-3.",
    //   options: ["x > 1", "x > -7", "x < -7", "x < 1"],
    //   answer: "x > -7"
    // },
    // {
    //   question: "1. Express 1/√5 + √7 in the form of a√5 and b√7.",
    //   options: ["½√5 - ½√7", "-(½√5 + ½√7)", "½√7 + ½√5", "½√7 - ½√5"],
    //   answer: "½√7 - ½√5"
    // },
    // {
    //   question: "2. If (4+2√3)²= a + B√3, find a and b.",
    //   options: ["a=25, b=16", "a=34, b=16", "a=34, b=8", "a=25, b=8"],
    //   answer: "a=34, b=16"
    // },
    // {
    //   question: "3. The square of 4+√5 is:",
    //   options: ["20√5", "21", "21 + 8√5", "41 + √5"],
    //   answer: "21 + 8√5"
    // },
    // {
    //   question: "4. Express (27-√12)/√3 in its simplest form.",
    //   options: ["-(2-3√3)", "2+3√3", "-(2+3√3)", "2-3√3"],
    //   answer: "-(2-3√3)"
    // },
    // {
    //   question: "5. Simplify √2 + 1/√2 - 1/√8.",
    //   options: ["4√2/2", "6√3/4", "5√2/4", "5√2/2"],
    //   answer: "5√2/4"
    // },
    // {
    //   question: "1. Simplify √(288y⁻⁴/32y⁻²).",
    //   options: ["3/y", "3/y²", "3y", "9y²"],
    //   answer: "3/y"
    // },
    // {
    //   question: "2. Evaluate 625⁰•¹² ×625⁰•¹³.",
    //   options: ["5", "25", "125", "625"],
    //   answer: "5"
    // },
    // {
    //   question: "3. Solve for x in 5(2^(x-2))=320.",
    //   options: ["4", "2", "7", "8"],
    //   answer: "8"
    // },
    // {
    //   question: "4. Simplify cube root(64x⁻⁶)^½.",
    //   options: ["1/2x", "2x", "x/2", "2/x"],
    //   answer: "2/x"
    // },
    // {
    //   question: "5. If 5^(3x+2) = 3125, find x.",
    //   options: ["-1", "1", "-2", "2"],
    //   answer: "1"
    // },
    // {
    //   question: "6. Evaluate log125 base5 + log 10 base5 - log 250 base5.",
    //   options: ["1", "3", "log½ base5", "log⅕ base5"],
    //   answer: "1"
    // },
    // {
    //   question: "7. Solve for x if 7log(x+3) = log128.",
    //   options: ["2", "1", "0", "-1"],
    //   answer: "-1"
    // },
    // {
    //   question: "8. Evaluate log24 base10 - log6 base10/log8 base10.",
    //   options: ["1⅛", "9/8", "2/3", "1/2"],
    //   answer: "2/3"
    // },
    // {
    //   question: "9. Express the function x=log343 base7 in exponential form.",
    //   options: ["x =7", "x=343⁷", "7^x=343", "343^x=7"],
    //   answer: "7^x=343"
    // },
    // {
    //   question: "10. Solve for x, logx=log1024/10.",
    //   options: ["½", "¼", "2", "4"],
    //   answer: "2"
    // },
    // {
    //   question: "1. Obtain the first three terms of the expression (1+x)^-m.",
    //   options: ["1-mx-½m(m+1)x²", "1+mx+½m(m-1)x²", "1-mx+½m(m+1)x²", "1+mx-½m(m-1)x²"],
    //   answer: "1-mx+½m(m+1)x²"
    // },
    // {
    //   question: "2. Obtain the second term of (2x-1)².",
    //   options: ["-4", "4", "-4x", "4x"],
    //   answer: "-4x"
    // },
    // {
    //   question: "3. Obtain the first three terms of (1+x)^(1/m).",
    //   options: ["1+x/m +(m-1)x²/2m²", "1+x/m -(m-1)x²/2m²", "1+x/m +(m-1)x²/2", "1+x/m +(m-1)x²/2m"],
    //   answer: "1+x/m -(m-1)x²/2m²"
    // },
    // {
    //   question: "4. If (1-2x)⁶ =1+Px+Qx²+..... find the value of P and Q.",
    //   options: ["60 and -12", "-60 and 12", "12 and -60", "-12 and 60"],
    //   answer: "-12 and 60"
    // },
    // {
    //   question: "5. Obtain the seventh term of the expression (2+3x)¹¹.",
    //   options: ["330×2⁴×3⁷×x⁷", "462×2⁵×3⁶×x⁶", "165×2⁴×3⁷×x⁷", "330×2⁵×3⁶×x⁶"],
    //   answer: "462×2⁵×3⁶×x⁶"
    // },
    // {
    //   question: "1. Find the value of 1²+2²+3²+...+10².",
    //   options: ["365", "395", "385", "375"],
    //   answer: "385"
    // },
    // {
    //   question: "2. Find the value of 1³+2³+3³+...+10³.",
    //   options: ["3025", "2025", "2485", "385"],
    //   answer: "3025"
    // },
    // {
    //   question: "3. Evaluate (n+2)!/n!.",
    //   options: ["1/2(n+1)(n+2)", "(n-1)(n-2)", "n(n-1)(n-2)", "(n+1)(n+2)"],
    //   answer: "(n+1)(n+2)"
    // },
    // {
    //   question: "4. Which of these expressions represents the sum of odd N numbers?",
    //   options: ["1/2n(n+1)", "1/6n(n+1)(2n+1)", "1/4n²(n+1)²", "n²"],
    //   answer: "n²"
    // },
    // {
    //   question: "5. Obtain the sum of positive even numbers less than 100.",
    //   options: ["5500", "3450", "2450", "5450"],
    //   answer: "2450"
    // },
    // {
    //   question: "1. Find the equation whose roots are 1/ą and 1/ę.",
    //   options: ["x²+bx+c=0", "cx²+bx+a=0", "1/ax²+1/bx+1/c=0", "x²+1/bx+1/c=0"],
    //   answer: "cx²+bx+a=0"
    // },
    // {
    //   question: "2. The equation whose roots are (ą+ę) and (ąę) is:",
    //   options: ["x²+a(b-c)x+cb=0", "a²x²+a(b-c)x+cb=0", "a²x²-a(b-c)x+cb=0", "a²x²+a(b-c)x-cb=0"],
    //   answer: "a²x²+a(b-c)x-cb=0"
    // },
    // {
    //   question: "3. Determine the discriminant of 2x²-x-4=0.",
    //   options: ["33", "9", "-31", "-8"],
    //   answer: "33"
    // },
    // {
    //   question: "4. Determine the discriminant of x²-3x+2=0.",
    //   options: ["7", "-7", "1", "-1"],
    //   answer: "1"
    // },
    // {
    //   question: "5. Determine the discriminant of 3x²+2x+1=0.",
    //   options: ["-16", "-8", "16", "8"],
    //   answer: "-8"
    // }
  ]
      
  };
  














//---------------------- OLD QUESTIONS (2024) ------------------------



  // questions: [
  //   {
  //     question: '1. How many subsets of 3 elements are obtainable from the set p= {x, y, z ,m ,n}? ',
  //     options: ['10', '32', '6', '120'],
  //     answer: '10'
  //   },
  //   {
  //     question: '2. If the universal set U = {x:20<x<35}; A= {even numbers}; B= {prime numbers}, find (AUB)` ',
  //     options: ['{21,22,24,25,27}', '{21,25,27,29}', '{21,27,28}', '{21,25,27,29,33,34}'],
  //     answer: '{21,25,27,29,33,34}'
  //   },
  //   {
      
  //     question: '3. If A = { ( x, y ) : y² = 4} and B = { ( x, y ) : y² = 16}, find the elements of A n B ',
  //     options: ['{2,4}', '{1,2}', '{1,4}', '{2,2}'],
  //     answer: '{2,4}'
  //   },
  //   {
  //     question: '4. If the universal set U = {x: x is a natural number and 1 ≤ x ≤ 9}, P = {x : 1 ≤ x ≤ 4} and Q = {2,4,6,8}. Find (PUQ)`  ',
  //     options: ['{1,2,3,4,5,6,7,8,9}', '{1,2,3,4,6,8}', '{4,5,6,7}', '{5,7,9}'],
  //     answer: '{1,2,3,4,6,8}'
  //   },
  //   {
  //     question: '5. If A = { x : x is a natural number and 1 ≤ x ≤ 19}, B = { prime numbers }. Find A – B ',
  //     options: ['{1,3,4,5,6}', '{1,2,4,6,9,11}', '{2,3,4,6,8,9,10,12,14,15,16,18}', '{1,2,3,4,6,8,9,10,12,14,16,18}'],
  //     answer: '{2,3,4,6,8,9,10,12,14,15,16,18}'
  //   },
  //   {
  //     question: '6. In a certain class, 22 pupils take one or more of chemistry, Economics and government. 12 take Economics, 8 take government and 7 take chemistry, nobody takes economics and chemistry and 4 pupils take economics and government. How many pupils take both Chemistry and Government?  ',
  //     options: ['2', '1', '3', '15'],
  //     answer: '1'
  //   },
  //   {
  //     question: '7. In a certain class, 22 pupils take one or more of chemistry, Economics and government. 12 take Economics, 8 take government and 7 take chemistry, nobody takes economics and chemistry and 4 pupils take economics and government. How many pupils take Government only? ',
  //     options: ['3', '14', '10', '2'],
  //     answer: '3'
  //   },
  //   {
  //     question: '8. In a certain class, 22 pupils take one or more of chemistry, Economics and government. 12 take Economics, 8 take government and 7 take chemistry, nobody takes economics and chemistry and 4 pupils take economics and government. How many pupils take all 3 courses?    ',
  //     options: ['4', '5', '0', '2'],
  //     answer: '0'
  //   },
  //   {
  //     question: '9. In a certain class, 22 pupils take one or more of chemistry, Economics and government. 12 take Economics, 8 take government and 7 take chemistry, nobody takes economics and chemistry and 4 pupils take economics and government. How many pupils take none of the courses?     ',
  //     options: ['2', '0', '3', '10'],
  //     answer: '0'
  //   },
  //   {
  //     question: '10. A and B are two sets. The number of elements in AUB is 49, the number in A is 22 and the number in B is 34. How many elements are in AnB? ',
  //     options: ['105', '27', '7', '12'],
  //     answer: '7'
  //   },
  //   {
  //     question: '11. If n(P) = 21, n(R) = 33 and n(PUR) = 46, where n(P) is the number of elements in the set P, find n(PnR)  ',
  //     options: ['8', '34', '58', '19'],
  //     answer: '8'
  //   },
  //   {
  //     question: '12. An element is said to be injective if: ',
  //     options: ['Every element of the co-domain is an image', 'Elements in the domain are uniquely paired to elements of the co-domain', 'Each element in the domain are paired to more than one element in the co-domain'],
  //     answer: 'Every element of the co-domain is an image'
  //   },
  //   {
  //     question: '13. A typical example of a one-one mapping is a mapping that assigns: ',
  //     options: ['Each engineering student to Mat111', 'Each Vice chancellor to a university in west africa', 'Each governor to a state in Nigeria', 'A and C'],
  //     answer: 'A and C'
  //   },
  //   {
  //     question: '14. A mapping is said to be valid if:',
  //     options: ['All the elements in the domain is not paired to the co-domain', 'One element in the domain is paired to more than one element in the co-domain', 'One element in the co-domain is paired to more than one element in the domain', 'C and B'],
  //     answer: 'One element in the co-domain is paired to more than one element in the domain'
  //   },
  //   {
  //     question: '15. Let the function f:w → R be defined by f : x² – x – 2, where W = {-1,0,2,5,11} and R, the set of real numbers. Find the range of f ',
  //     options: ['{-2,0,18,108}', '{-2,18,108}', '{-1,0,2,5,11}', '{-2,0,18}'],
  //     answer: '{-2,0,18,108}'
  //   },
  //   {
  //     question: '16. Find the domain of f(x) = x² + 6 if the range of f is {6,7,10,15} ',
  //     options: ['{0,1,2,3}', '{-1,0,1,2}', '{5,6,12}', '{1,0,1,2}'],
  //     answer: '{0,1,2,3}'
  //   },
  //     { 
  //     question: '17. If f(x-4) = x² + 2x +3, find f(2) ',
  //     options: ['6', '11 ', '27 ', '51'],
  //     answer: '51'
  //     },
  //     { 
  //     question: ' 18. If f(x+2) = 2x² + 7x – 5, find f(-1) ',
  //     options: [' -10', '-8', '4 ', '10 '],
  //     answer: '-8'
  //     },
  //     { 
  //       question: '19. If f(x) = 2x² – 5x + 3, find f(x+1)',
  //       options: ['2x² – x', '2x² – x + 10', '4x³ + 3x + 2', '4x³ + 3x + 3'],
  //       answer: '2x² – x'
  //     },
  //     { 
  //     question: '20. The function F : R R is defined by {3x – 2 if x = 4}, F(x)=    	{3x+2 if x > 4}{5x – 3 if x < 4}. Find f(4) – f(-3) ',
  //     options: ['24 ', '28', '20', '15'],
  //     answer: '28'
  //     }
  //     ,
      // { 
      // question: 'Given that f(x) = 3x and g(x) = 3x – 2, find fog(2)',
      // options: ['81', '36 ', ' 27', '9 '],
      // answer: ''
      // },
      // { 
      // question: ' Given that function f(x) = 5x-2, find f-1(-1)  ',
      // options: ['-3/5', '1/5 ', '1 ', '3 '],
      // answer: '1/5'
      // },
      // { 
      // question: '  Find the term independent of x in the expansion of (x3 – 1/2x)12. What term is it found? ',
      // options: [' 9th ', '10th  ', '8th  ', '7th  '],
      // answer: '10th'
      // },
      // { 
      // question: 'The constant term in the expansion of (x – 1/x)6 is',
      // options: [' -20', ' 15', '60 ', '120 '],
      // answer: '-20'
      // },
      // { 
      // question: 'Determine the coefficient of x6 in the expansion of (x + y)8  ',
      // options: [' 8y2', ' 28 ', ' 56y2 ', ' 28y2 '],
      // answer: '28y2'
      // },
      // { 
      // question: ' Is 11C6 + 11C7 = 12C7? ',
      // options: [' True', 'False'],
      // answer: 'True'
      // },
      // { 
      // question: '  Simplify -1/4C2 ',
      // options: [' 5/6', '10/16 ', '5/32 '],
      // answer: '5/32'
      // },
      // { 
      // question: 'Simplify (n + 1)!  n! ',
      // options: [' n+1/2', 'n+1 ', ' n!', 'n-1 '],
      // answer: 'n+1'
      // },
      // { 
      // question: '      Evaluate n!   (n-2)!  ',
      // options: ['n(n-1) ', ' n2(n-2) ', ' n(n-1)!', 'n2+1 '],
      // answer: 'n(n-1)'
      // },
      // { 
      // question: '    Find the coefficient of x8 in the expansion: (x2 + 2y/x)10 ',
      // options: ['3360y4 ', '3360 ', '3060y4 ', ' 3060'],
      // answer: '3360y4'
      // },
      // { 
      // question: ' Evaluate nC3 x (n-3)! /n! ',
      // options: [' 8', ' 6', '1/6 ', '1/8 '],
      // answer: ''
      // },
      // { 
      // question: ' 10! Is equal to 9! X 10  ',
      // options: [' True', 'False '],
      // answer: 'True'
      // },
      // { 
      // question: ' What is the coefficient of x3 in the expansion: (2 + x)6 ',
      // options: [' 80', '160 ', '240 ', '160x3 '],
      // answer: '160'
      // },
      // { 
      // question: ' If Kx4 is a term in the binomial expansion of (1+2x)5, find the value of K ',
      // options: ['80 ', ' 40', '160 ', '22 '],
      // answer: '80'
      // },
      // { 
      // question: ' If Z1 = 2i + 3j and Z2 = 3i – j, Find Z1 + Z2 ',
      // options: ['5i + 3j ', '5i +2j ', '5i – 2j ', '5i-3i '],
      // answer: '5i + 2j'
      // },
      // { 
      // question: 'If Z1 = 2i + 3j and Z2 = 3i – j, Find Z1.Z2   ',
      // options: ['6i – 3j',' 6i + 3j', '5i + j ', '5i - j '],
      // answer: '6i – 3j'
      // },
      // { 
      // question: '   If j2 = -1, Evaluate J20     ',
      // options: [' 1', 'J ', '-1 ', '-J '],
      // answer: '1'
      // },
      // { 
      // question: '   If j2 = -1, Evaluate J7 ',
      // options: ['1 ', 'J ', '-1 ', '-J '],
      // answer: 'j'
      // },
      // { 
      // question: '  If j2 = -1, Evaluate J5       ',
      // options: [' J', '1/J ', ' -1', '-1/J '],
      // answer: 'J'
      // },
      // ]