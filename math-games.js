/* ============================================================
   Formula Sprint — Math Games question bank (math-games.js)
   Decomposed from the GMAT Focus Equation Guide.
   Loaded as a plain script → window.MATH_GAMES

   Shape:
     MATH_GAMES = [
       { id, name, icon, blurb,
         formulas: [
           { formula, concept,
             questions: [ {stem, options:[...], answer:<idx>}, ... ]  // >=2 each
           }, ...
         ]
       }, ...
     ]

   Every formula has AT LEAST TWO questions, so the matching /
   pairs / WhoT mode always has a valid partner card.
   `answer` is the 0-based index of the correct option.
   ============================================================ */
window.MATH_GAMES = [

  /* ============ GAME 1 — FRACTIONS & PERCENTS ============ */
  {
    id: "frac-pct", name: "Fractions & Percents", icon: "½",
    blurb: "Combine fractions, convert to percents, and handle percent change.",
    formulas: [
      { formula: "a/b + c/d = (ad + bc) / bd", concept: "Adding fractions (bow-tie)",
        questions: [
          { stem: "Compute 2/3 + 5/7.", options: ["10/21","29/21","7/10","29/10"], answer: 1 },
          { stem: "Compute 1/4 + 2/5.", options: ["3/9","13/20","3/20","7/20"], answer: 1 }
        ] },
      { formula: "a/b − c/d = (ad − bc) / bd", concept: "Subtracting fractions",
        questions: [
          { stem: "Compute 3/4 − 1/6.", options: ["2/24","7/12","1/2","11/12"], answer: 1 },
          { stem: "Compute 5/6 − 2/5.", options: ["3/1","13/30","3/11","17/30"], answer: 1 }
        ] },
      { formula: "fraction → decimal × 100 = percent", concept: "Fraction to percent",
        questions: [
          { stem: "Express 3/8 as a percent.", options: ["24%","37.5%","3.8%","30%"], answer: 1 },
          { stem: "Express 7/20 as a percent.", options: ["35%","3.5%","70%","14%"], answer: 0 }
        ] },
      { formula: "(p% ) of z = (p/100) × z", concept: "Percent of a value",
        questions: [
          { stem: "What is 36% of 25?", options: ["9","36","61","900"], answer: 0 },
          { stem: "What is 5% of 240?", options: ["48","12","24","1200"], answer: 1 }
        ] },
      { formula: "% change = (final − initial)/initial × 100", concept: "Percent change",
        questions: [
          { stem: "A price rises from $80 to $92. Percent increase?", options: ["12%","15%","20%","13%"], answer: 1 },
          { stem: "A value falls from 50 to 40. Percent decrease?", options: ["10%","25%","20%","80%"], answer: 2 }
        ] },
      { formula: "x is n% greater than y ⇒ x = (1 + n/100)y", concept: "Percent greater / less than",
        questions: [
          { stem: "x is 60% greater than y. If y = 50, x = ?", options: ["80","30","110","86"], answer: 0 },
          { stem: "x is 2% less than y. If y = 200, x = ?", options: ["198","196","204","202"], answer: 1 }
        ] }
    ]
  },

  /* ============ GAME 2 — EXPONENTS & ROOTS ============ */
  {
    id: "exp-root", name: "Exponents & Roots", icon: "xⁿ",
    blurb: "Exponent laws, radical rules, and units-digit patterns.",
    formulas: [
      { formula: "(xᵃ)(xᵇ) = xᵃ⁺ᵇ", concept: "Multiplying like bases",
        questions: [
          { stem: "Simplify 2³ · 2⁴.", options: ["2⁷","2¹²","4⁷","2¹"], answer: 0 },
          { stem: "Simplify 5² · 5³.", options: ["5⁶","25⁵","5⁵","5¹"], answer: 2 }
        ] },
      { formula: "xᵃ / xᵇ = xᵃ⁻ᵇ", concept: "Dividing like bases",
        questions: [
          { stem: "Simplify 3⁷ / 3⁴.", options: ["3³","3¹¹","1³","3²"], answer: 0 },
          { stem: "Simplify 2⁹ / 2⁶.", options: ["2¹⁵","2³","1³","2⁵⁴"], answer: 1 }
        ] },
      { formula: "(xᵃ)ᵇ = xᵃᵇ", concept: "Power to a power",
        questions: [
          { stem: "Simplify (2³)².", options: ["2⁵","2⁶","2⁹","4⁶"], answer: 1 },
          { stem: "Simplify (5²)³.", options: ["5⁵","5⁸","5⁶","25³"], answer: 2 }
        ] },
      { formula: "x⁻ⁿ = 1 / xⁿ", concept: "Negative exponent",
        questions: [
          { stem: "Evaluate 2⁻³.", options: ["−8","1/8","−6","1/6"], answer: 1 },
          { stem: "Evaluate 3⁻².", options: ["1/9","−9","1/6","9"], answer: 0 }
        ] },
      { formula: "2ⁿ + 2ⁿ = 2ⁿ⁺¹", concept: "Special addition of like bases",
        questions: [
          { stem: "Simplify 2⁵ + 2⁵.", options: ["2¹⁰","4⁵","2⁶","2²⁵"], answer: 2 },
          { stem: "Simplify 3ⁿ + 3ⁿ + 3ⁿ.", options: ["3ⁿ⁺¹","9ⁿ","3³ⁿ","3ⁿ⁺³"], answer: 0 }
        ] },
      { formula: "√a · √b = √(ab)", concept: "Multiplying radicals",
        questions: [
          { stem: "Simplify √5 · √7.", options: ["√12","√35","35","12"], answer: 1 },
          { stem: "Simplify √6 · √6.", options: ["6","36","√12","√6"], answer: 0 }
        ] },
      { formula: "units digit of 3ⁿ cycles 3, 9, 7, 1", concept: "Units-digit patterns",
        questions: [
          { stem: "Units digit of 3²⁰?", options: ["3","9","7","1"], answer: 3 },
          { stem: "Units digit of 2¹⁰? (cycle 2,4,8,6)", options: ["2","4","8","6"], answer: 1 }
        ] }
    ]
  },

  /* ============ GAME 3 — NUMBER PROPERTIES ============ */
  {
    id: "num-prop", name: "Number Properties", icon: "#",
    blurb: "Factors, multiples, divisibility, LCM/GCF, and trailing zeros.",
    formulas: [
      { formula: "odd × odd = odd; even × anything = even", concept: "Even/odd rules",
        questions: [
          { stem: "Which is always even?", options: ["odd × odd","odd + even","even × odd","3 × odd"], answer: 2 },
          { stem: "odd + odd = ?", options: ["odd","even","could be either","zero"], answer: 1 }
        ] },
      { formula: "# factors = product of (each exponent + 1)", concept: "Counting factors",
        questions: [
          { stem: "How many factors does 240 = 2⁴·3·5 have?", options: ["12","20","16","9"], answer: 1 },
          { stem: "How many factors does 36 = 2²·3² have?", options: ["6","4","9","8"], answer: 2 }
        ] },
      { formula: "divisible by 3 if digit sum divisible by 3", concept: "Divisibility rules",
        questions: [
          { stem: "Which is divisible by 3?", options: ["124","251","417","530"], answer: 2 },
          { stem: "Which is divisible by 4? (last two digits)", options: ["114","236","318","522"], answer: 1 }
        ] },
      { formula: "LCM: take highest power of each prime", concept: "Least common multiple",
        questions: [
          { stem: "LCM of 24 and 60?", options: ["120","12","1440","240"], answer: 0 },
          { stem: "LCM of 6 and 8?", options: ["48","24","14","2"], answer: 1 }
        ] },
      { formula: "GCF: take lowest power of shared primes", concept: "Greatest common factor",
        questions: [
          { stem: "GCF of 24 and 60?", options: ["6","4","12","120"], answer: 2 },
          { stem: "GCF of 18 and 24?", options: ["6","3","9","12"], answer: 0 }
        ] },
      { formula: "trailing zeros = # of (5×2) pairs in prime factn", concept: "Trailing zeros",
        questions: [
          { stem: "How many trailing zeros does 5,200 = 52·10² have?", options: ["1","2","3","0"], answer: 1 },
          { stem: "Trailing zeros of 250 × 4 = 1000?", options: ["2","1","3","4"], answer: 2 }
        ] }
    ]
  },

  /* ============ GAME 4 — ALGEBRA & QUADRATICS ============ */
  {
    id: "algebra", name: "Algebra & Quadratics", icon: "x²",
    blurb: "Factoring, FOIL, difference of squares, and the zero-product rule.",
    formulas: [
      { formula: "x² + bx + c = (x + p)(x + q), p·q=c, p+q=b", concept: "Factoring quadratics",
        questions: [
          { stem: "Factor x² − 3x − 28.", options: ["(x−7)(x+4)","(x−4)(x+7)","(x−7)(x−4)","(x+7)(x+4)"], answer: 0 },
          { stem: "Factor x² + 5x + 6.", options: ["(x+2)(x+3)","(x+1)(x+6)","(x−2)(x−3)","(x+5)(x+1)"], answer: 0 }
        ] },
      { formula: "(x + y)(x − y) = x² − y²", concept: "Difference of squares",
        questions: [
          { stem: "Simplify (x+3)(x−3).", options: ["x²−9","x²+9","x²−6x+9","x²−3"], answer: 0 },
          { stem: "Factor x² − 16.", options: ["(x−4)(x+4)","(x−8)(x+2)","(x−4)²","(x+16)(x−1)"], answer: 0 }
        ] },
      { formula: "(x + y)² = x² + 2xy + y²", concept: "Perfect-square expansion",
        questions: [
          { stem: "Expand (x + 4)².", options: ["x²+16","x²+8x+16","x²+4x+16","x²+8x+8"], answer: 1 },
          { stem: "Expand (x − 5)².", options: ["x²−25","x²−10x+25","x²+10x+25","x²−5x+25"], answer: 1 }
        ] },
      { formula: "if a·b = 0 then a=0 or b=0", concept: "Zero-product property",
        questions: [
          { stem: "Solve x(x + 100) = 0.", options: ["x=100","x=0 or x=−100","x=−100 only","no solution"], answer: 1 },
          { stem: "Solve (x−7)(x+4) = 0.", options: ["x=7 or x=−4","x=−7 or x=4","x=7 or x=4","x=28"], answer: 0 }
        ] },
      { formula: "FOIL: (a+b)(c+d) = ac+ad+bc+bd", concept: "FOIL multiplication",
        questions: [
          { stem: "Expand (x + 2)(x + 3).", options: ["x²+5x+6","x²+6x+5","x²+5x+5","x²+6"], answer: 0 },
          { stem: "Expand (x − 1)(x + 4).", options: ["x²+3x−4","x²−3x−4","x²+4x−1","x²−4"], answer: 0 }
        ] }
    ]
  },

  /* ============ GAME 5 — STATISTICS ============ */
  {
    id: "stats", name: "Statistics", icon: "x̄",
    blurb: "Mean, weighted mean, median, range, and standard-deviation rules.",
    formulas: [
      { formula: "average = sum of terms / number of terms", concept: "Arithmetic mean",
        questions: [
          { stem: "Average of 12, 18, 30?", options: ["20","18","25","60"], answer: 0 },
          { stem: "Five numbers average 18. A sixth (30) is added. New average?", options: ["19","20","24","21"], answer: 1 }
        ] },
      { formula: "weighted avg = Σ(wᵢxᵢ) / Σwᵢ", concept: "Weighted average",
        questions: [
          { stem: "20 students avg 75; 30 students avg 85. Combined avg?", options: ["80","81","82","79"], answer: 1 },
          { stem: "Mix 2 kg at $3 and 3 kg at $8. Avg price/kg?", options: ["$5.50","$6.00","$5.00","$6.50"], answer: 1 }
        ] },
      { formula: "median = middle value of ordered set", concept: "Median",
        questions: [
          { stem: "Median of 3, 9, 4, 1, 7?", options: ["4","7","9","3"], answer: 0 },
          { stem: "Median of 2, 8, 4, 10?", options: ["6","4","8","5"], answer: 0 }
        ] },
      { formula: "range = highest − lowest", concept: "Range",
        questions: [
          { stem: "Range of {4, 7, 9, 24, 32}?", options: ["28","36","24","32"], answer: 0 },
          { stem: "Range of {−3, 5, 11, 2}?", options: ["8","14","11","6"], answer: 1 }
        ] },
      { formula: "in an evenly spaced set, mean = median", concept: "Evenly spaced sets",
        questions: [
          { stem: "Mean of consecutive integers 4…12?", options: ["8","7","9","6"], answer: 0 },
          { stem: "Mean of {5,10,15,20,25}?", options: ["12","15","20","10"], answer: 1 }
        ] },
      { formula: "adding a constant to each term: SD unchanged", concept: "Standard-deviation rules",
        questions: [
          { stem: "Add 10 to every value in a set. The SD…", options: ["increases by 10","is unchanged","doubles","becomes 0"], answer: 1 },
          { stem: "Multiply every value by 3. The SD…", options: ["is unchanged","triples","increases by 3","halves"], answer: 1 }
        ] }
    ]
  },

  /* ============ GAME 6 — RATE, WORK & RATIOS ============ */
  {
    id: "rate-work", name: "Rate, Work & Ratios", icon: "⏱",
    blurb: "Distance, combined work, ratios, and interest.",
    formulas: [
      { formula: "distance = rate × time", concept: "Rate–time–distance",
        questions: [
          { stem: "240 miles in 4 hours; same rate, distance in 7 h?", options: ["420 mi","400 mi","480 mi","360 mi"], answer: 0 },
          { stem: "A train at 60 mph for 3.5 h travels?", options: ["180 mi","210 mi","240 mi","200 mi"], answer: 1 }
        ] },
      { formula: "average rate = total distance / total time", concept: "Average rate",
        questions: [
          { stem: "Go 60 mi at 30 mph, return 60 mi at 60 mph. Avg speed?", options: ["45 mph","40 mph","50 mph","48 mph"], answer: 1 },
          { stem: "120 mi total in 3 h total. Average rate?", options: ["40 mph","30 mph","60 mph","36 mph"], answer: 0 }
        ] },
      { formula: "1/T = 1/a + 1/b (combined work)", concept: "Combined work",
        questions: [
          { stem: "A: 6 h, B: 3 h. Together they finish in?", options: ["2 h","1.5 h","4.5 h","9 h"], answer: 0 },
          { stem: "Two taps fill in 4 h and 12 h. Together?", options: ["3 h","8 h","16 h","2 h"], answer: 0 }
        ] },
      { formula: "part/total = share / total shares", concept: "Ratios",
        questions: [
          { stem: "Boys:girls = 3:5, total 40. Girls?", options: ["25","15","20","24"], answer: 0 },
          { stem: "Ratio 2:3, total 30. Larger part?", options: ["18","12","20","15"], answer: 0 }
        ] },
      { formula: "Simple Interest = P × r × t", concept: "Simple interest",
        questions: [
          { stem: "SI on $1,200 at 5%/yr for 3 years?", options: ["$180","$60","$360","$200"], answer: 0 },
          { stem: "SI on $500 at 4%/yr for 2 years?", options: ["$40","$20","$80","$100"], answer: 0 }
        ] },
      { formula: "A = P(1 + r)ᵗ (compound, yearly)", concept: "Compound interest",
        questions: [
          { stem: "$2,000 at 10% compounded yearly, 2 years?", options: ["$2,420","$2,400","$2,200","$2,410"], answer: 0 },
          { stem: "$1,000 at 20% compounded yearly, 2 years?", options: ["$1,440","$1,400","$1,200","$1,420"], answer: 0 }
        ] }
    ]
  },

  /* ============ GAME 7 — COUNTING & PROBABILITY ============ */
  {
    id: "count-prob", name: "Counting & Probability", icon: "🎲",
    blurb: "Combinations, permutations, and probability rules.",
    formulas: [
      { formula: "ₙCₖ = n! / [k!(n−k)!]  (order doesn't matter)", concept: "Combinations",
        questions: [
          { stem: "Choose a committee of 3 from 8 people.", options: ["56","336","24","112"], answer: 0 },
          { stem: "Choose 2 toppings from 5.", options: ["10","20","25","7"], answer: 0 }
        ] },
      { formula: "ₙPₖ = n! / (n−k)!  (order matters)", concept: "Permutations",
        questions: [
          { stem: "Arrange 3 of 5 books on a shelf.", options: ["60","10","20","125"], answer: 0 },
          { stem: "First, second, third from 4 runners?", options: ["24","12","4","64"], answer: 0 }
        ] },
      { formula: "arrangements of N with repeats = N!/(r₁!r₂!…)", concept: "Indistinguishable items",
        questions: [
          { stem: "Arrangements of the letters A,A,B,B?", options: ["6","24","4","12"], answer: 0 },
          { stem: "Arrangements of the letters in 'TOOT'?", options: ["6","24","12","4"], answer: 0 }
        ] },
      { formula: "P = favorable / total outcomes", concept: "Basic probability",
        questions: [
          { stem: "Roll a die: P(rolling a 5)?", options: ["1/6","1/5","1/2","5/6"], answer: 0 },
          { stem: "Bag: 3 red, 2 blue. P(red)?", options: ["3/5","2/5","3/2","1/3"], answer: 0 }
        ] },
      { formula: "independent: P(A and B) = P(A)·P(B)", concept: "Probability of A and B",
        questions: [
          { stem: "Two fair coins: P(both heads)?", options: ["1/4","1/2","1/3","3/4"], answer: 0 },
          { stem: "4 red of 10, draw 2 (no replace): P(both red)?", options: ["2/15","4/25","1/5","2/5"], answer: 0 }
        ] },
      { formula: "P(at least 1) = 1 − P(none)", concept: "At-least-one",
        questions: [
          { stem: "Flip 3 coins. P(at least one head)?", options: ["7/8","1/2","3/4","5/8"], answer: 0 },
          { stem: "P(none) = 0.2, so P(at least one) = ?", options: ["0.8","0.2","0.5","1.2"], answer: 0 }
        ] }
    ]
  },

  /* ============ GAME 8 — COORDINATE GEOMETRY & SEQUENCES ============ */
  {
    id: "coord-seq", name: "Coordinate Geometry & Sequences", icon: "📈",
    blurb: "Slope, distance, midpoint, and arithmetic/geometric sequences.",
    formulas: [
      { formula: "slope m = (y₂ − y₁)/(x₂ − x₁)", concept: "Slope of a line",
        questions: [
          { stem: "Slope through (1,2) and (4,8)?", options: ["2","1/2","3","6"], answer: 0 },
          { stem: "Slope through (0,5) and (2,1)?", options: ["−2","2","−1/2","4"], answer: 0 }
        ] },
      { formula: "d = √[(x₂−x₁)² + (y₂−y₁)²]", concept: "Distance formula",
        questions: [
          { stem: "Distance between (1,2) and (4,6)?", options: ["5","7","25","√13"], answer: 0 },
          { stem: "Distance between (0,0) and (6,8)?", options: ["10","14","√48","48"], answer: 0 }
        ] },
      { formula: "midpoint = ((x₁+x₂)/2 , (y₁+y₂)/2)", concept: "Midpoint formula",
        questions: [
          { stem: "Midpoint of (2,4) and (6,10)?", options: ["(4,7)","(8,14)","(3,5)","(4,6)"], answer: 0 },
          { stem: "Midpoint of (−2,3) and (4,1)?", options: ["(1,2)","(2,4)","(1,4)","(3,2)"], answer: 0 }
        ] },
      { formula: "perpendicular slopes multiply to −1", concept: "Parallel & perpendicular",
        questions: [
          { stem: "A line has slope 2. A perpendicular line's slope?", options: ["−1/2","−2","1/2","2"], answer: 0 },
          { stem: "Parallel lines have…", options: ["equal slopes","opposite slopes","product −1","no slope"], answer: 0 }
        ] },
      { formula: "arithmetic: aₙ = a₁ + (n − 1)d", concept: "Arithmetic sequence",
        questions: [
          { stem: "a₁=4, d=6. Find the 10th term.", options: ["58","60","54","64"], answer: 0 },
          { stem: "Sequence 5,10,15,… find the 8th term.", options: ["40","35","45","50"], answer: 0 }
        ] },
      { formula: "geometric: aₙ = a₁ · rⁿ⁻¹", concept: "Geometric sequence",
        questions: [
          { stem: "5, 10, 20, 40, … find the 4th term.", options: ["40","80","60","35"], answer: 0 },
          { stem: "3, 6, 12, … find the 5th term.", options: ["48","24","96","36"], answer: 0 }
        ] },
      { formula: "sum of arithmetic = n(a₁ + aₙ)/2", concept: "Sum of an arithmetic sequence",
        questions: [
          { stem: "Sum of 5+10+15+20?", options: ["50","45","55","40"], answer: 0 },
          { stem: "Sum of first 5 terms: 2,4,6,8,10?", options: ["30","25","40","20"], answer: 0 }
        ] }
    ]
  },

  /* ============ GAME 9 — GEOMETRY & SOLIDS (high-yield) ============ */
  {
    id: "geometry", name: "Geometry & Solids", icon: "△",
    blurb: "Areas, the Pythagorean theorem, special triangles, circles, angles, and volume.",
    formulas: [
      { formula: "triangle area = ½ × base × height", concept: "Area of a triangle",
        questions: [
          { stem: "Triangle with base 10 and height 6. Area?", options: ["30","60","16","80"], answer: 0 },
          { stem: "Triangle with base 8 and height 5. Area?", options: ["20","40","13","26"], answer: 0 }
        ] },
      { formula: "a² + b² = c² (right triangle)", concept: "Pythagorean theorem",
        questions: [
          { stem: "Right triangle with legs 6 and 8. Hypotenuse?", options: ["10","14","12","48"], answer: 0 },
          { stem: "Right triangle with legs 5 and 12. Hypotenuse?", options: ["13","17","60","7"], answer: 0 }
        ] },
      { formula: "45-45-90 triangle: sides 1 : 1 : √2", concept: "Isosceles right triangle",
        questions: [
          { stem: "Isosceles right triangle, legs = 5. Hypotenuse?", options: ["5√2","10","5","25"], answer: 0 },
          { stem: "Isosceles right triangle, legs = 7. Hypotenuse?", options: ["7√2","14","7","49"], answer: 0 }
        ] },
      { formula: "30-60-90 triangle: sides 1 : √3 : 2", concept: "30-60-90 triangle",
        questions: [
          { stem: "30-60-90 triangle, short side = 4. Hypotenuse?", options: ["8","4√3","12","16"], answer: 0 },
          { stem: "30-60-90 triangle, short side = 6. Longer leg?", options: ["6√3","12","3√3","18"], answer: 0 }
        ] },
      { formula: "circle: A = πr² , C = 2πr", concept: "Area & circumference",
        questions: [
          { stem: "Circle with radius 5. Area?", options: ["25π","10π","5π","100π"], answer: 0 },
          { stem: "Circle with radius 7. Circumference?", options: ["14π","49π","7π","28π"], answer: 0 }
        ] },
      { formula: "rectangle: A = l × w , P = 2(l + w)", concept: "Rectangle area & perimeter",
        questions: [
          { stem: "Rectangle 12 by 5. Area?", options: ["60","34","17","120"], answer: 0 },
          { stem: "Rectangle 9 by 4. Perimeter?", options: ["26","36","13","72"], answer: 0 }
        ] },
      { formula: "sum of interior angles = (n − 2) × 180°", concept: "Polygon angle sum",
        questions: [
          { stem: "Sum of interior angles of a pentagon (5 sides)?", options: ["540°","360°","720°","180°"], answer: 0 },
          { stem: "Sum of interior angles of a hexagon (6 sides)?", options: ["720°","540°","900°","360°"], answer: 0 }
        ] },
      { formula: "box volume = length × width × height", concept: "Volume of a rectangular solid",
        questions: [
          { stem: "Box 2 × 3 × 4. Volume?", options: ["24","9","20","12"], answer: 0 },
          { stem: "Box 5 × 5 × 2. Volume?", options: ["50","20","12","25"], answer: 0 }
        ] },
      { formula: "cylinder volume = πr²h", concept: "Volume of a cylinder",
        questions: [
          { stem: "Cylinder radius 3, height 5. Volume?", options: ["45π","15π","30π","225π"], answer: 0 },
          { stem: "Cylinder radius 2, height 10. Volume?", options: ["40π","20π","80π","100π"], answer: 0 }
        ] }
    ]
  }

];
