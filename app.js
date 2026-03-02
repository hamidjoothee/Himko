// HIMKO - Cambridge Physics Practice Software
// Questions for Grade 8, 9, and 10

// Question Banks
const questionBanks = {
    grade8: {
        title: "Grade 8 - Motion, Forces, Energy, Simple Machines",
        topics: ["Motion", "Forces", "Energy", "Simple Machines"],
        questions: [
            {
                id: 1,
                topic: "Motion",
                question: "A car travels 200 km in 4 hours. What is its average speed?",
                options: ["40 km/h", "50 km/h", "60 km/h", "80 km/h"],
                correct: 1,
                explanation: "Average speed = Total distance / Total time = 200 km / 4 h = 50 km/h"
            },
            {
                id: 2,
                topic: "Motion",
                question: "What is the acceleration of a car that increases its velocity from 20 m/s to 40 m/s in 5 seconds?",
                options: ["2 m/s²", "4 m/s²", "5 m/s²", "10 m/s²"],
                correct: 1,
                explanation: "Acceleration = (final velocity - initial velocity) / time = (40 - 20) / 5 = 4 m/s²"
            },
            {
                id: 3,
                topic: "Forces",
                question: "According to Newton's First Law, an object will continue at rest or in uniform motion unless acted upon by:",
                options: ["Gravity", "Friction", "A net force", "Magnetic force"],
                correct: 2,
                explanation: "Newton's First Law states that an object remains in its state of rest or uniform motion unless acted upon by a net external force."
            },
            {
                id: 4,
                topic: "Forces",
                question: "What is the weight of a 10 kg mass on Earth? (g = 10 m/s²)",
                options: ["10 N", "100 N", "1000 N", "1 N"],
                correct: 1,
                explanation: "Weight = mass × gravitational acceleration = 10 kg × 10 m/s² = 100 N"
            },
            {
                id: 5,
                topic: "Forces",
                question: "A force of 20 N acts on an area of 4 m². What is the pressure?",
                options: ["5 Pa", "80 Pa", "24 Pa", "0.2 Pa"],
                correct: 0,
                explanation: "Pressure = Force / Area = 20 N / 4 m² = 5 Pa"
            },
            {
                id: 6,
                topic: "Energy",
                question: "A ball of mass 2 kg is dropped from a height of 10 m. What is its potential energy? (g = 10 m/s²)",
                options: ["20 J", "100 J", "200 J", "50 J"],
                correct: 2,
                explanation: "PE = mgh = 2 kg × 10 m/s² × 10 m = 200 J"
            },
            {
                id: 7,
                topic: "Energy",
                question: "Which of the following is a renewable energy source?",
                options: ["Coal", "Natural gas", "Solar energy", "Petroleum"],
                correct: 2,
                explanation: "Solar energy is renewable as it comes from the sun and is continuously replenished. Coal, natural gas, and petroleum are non-renewable fossil fuels."
            },
            {
                id: 8,
                topic: "Energy",
                question: "What type of energy does a moving car have?",
                options: ["Potential energy", "Kinetic energy", "Chemical energy", "Nuclear energy"],
                correct: 1,
                explanation: "A moving object has kinetic energy due to its motion. Kinetic energy = ½mv²"
            },
            {
                id: 9,
                topic: "Simple Machines",
                question: "Which simple machine is a wheel and axle?",
                options: ["Pulley", "Wheelbarrow", "Steering wheel", "Scissors"],
                correct: 2,
                explanation: "A steering wheel is an example of a wheel and axle, where a wheel is attached to an axle that rotates together."
            },
            {
                id: 10,
                topic: "Simple Machines",
                question: "A lever has a mechanical advantage of 4. If the input force is 20 N, what is the output force?",
                options: ["5 N", "16 N", "80 N", "24 N"],
                correct: 2,
                explanation: "Mechanical Advantage = Output Force / Input Force. Therefore, Output Force = MA × Input Force = 4 × 20 N = 80 N"
            },
            {
                id: 11,
                topic: "Motion",
                question: "What is the SI unit of velocity?",
                options: ["m/s", "km/h", "m/s²", "N"],
                correct: 0,
                explanation: "Velocity is speed in a given direction. Its SI unit is meters per second (m/s)."
            },
            {
                id: 12,
                topic: "Forces",
                question: "The frictional force between two surfaces depends on:",
                options: ["Only the area of contact", "Only the nature of surfaces", "The normal reaction and nature of surfaces", "The speed of movement"],
                correct: 2,
                explanation: "Frictional force = μ × R, where μ is the coefficient of friction (depends on nature of surfaces) and R is the normal reaction."
            },
            {
                id: 13,
                topic: "Energy",
                question: "When a person climbs stairs, they convert chemical energy into:",
                options: ["Only kinetic energy", "Only potential energy", "Kinetic and potential energy", "Heat energy only"],
                correct: 2,
                explanation: "As the person climbs, they gain gravitational potential energy (height increases) and also have kinetic energy while moving."
            },
            {
                id: 14,
                topic: "Simple Machines",
                question: "Which type of lever has the fulcrum between the effort and the load?",
                options: ["First class", "Second class", "Third class", "Fourth class"],
                correct: 0,
                explanation: "First class levers have the fulcrum between the effort and load. Examples include scissors, see-saws, and pliers."
            },
            {
                id: 15,
                topic: "Motion",
                question: "A train decelerates from 30 m/s to rest in 6 seconds. What is its deceleration?",
                options: ["-5 m/s²", "5 m/s²", "-30 m/s²", "180 m/s²"],
                correct: 0,
                explanation: "Deceleration = (final velocity - initial velocity) / time = (0 - 30) / 6 = -5 m/s² (negative sign indicates deceleration)"
            }
        ]
    },
    grade9: {
        title: "Grade 9 - Waves, Sound, Light, Electricity, Magnetism",
        topics: ["Waves", "Sound", "Light", "Electricity", "Magnetism"],
        questions: [
            {
                id: 1,
                topic: "Waves",
                question: "What is the frequency of a wave with a period of 0.02 seconds?",
                options: ["20 Hz", "50 Hz", "0.02 Hz", "2000 Hz"],
                correct: 1,
                explanation: "Frequency = 1/Period = 1/0.02 = 50 Hz"
            },
            {
                id: 2,
                topic: "Waves",
                question: "Which type of wave does not require a medium to travel?",
                options: ["Sound wave", "Water wave", "Light wave", "Seismic wave"],
                correct: 2,
                explanation: "Light is an electromagnetic wave and does not require a medium to travel. Sound, water, and seismic waves all require a material medium."
            },
            {
                id: 3,
                topic: "Sound",
                question: "The speed of sound in air is approximately:",
                options: ["330 m/s", "1500 m/s", "300,000 km/s", "3 × 10⁸ m/s"],
                correct: 0,
                explanation: "The speed of sound in air at room temperature is approximately 330 m/s (or about 340 m/s at 20°C)."
            },
            {
                id: 4,
                topic: "Sound",
                question: "Which property of sound determines its loudness?",
                options: ["Frequency", "Amplitude", "Wavelength", "Speed"],
                correct: 1,
                explanation: "Loudness of sound depends on amplitude. Greater amplitude means louder sound."
            },
            {
                id: 5,
                topic: "Sound",
                question: "Sound cannot travel through:",
                options: ["Air", "Water", "Steel", "Vacuum"],
                correct: 3,
                explanation: "Sound requires a material medium to travel. It cannot propagate through a vacuum as there are no particles to vibrate."
            },
            {
                id: 6,
                topic: "Light",
                question: "When light travels from air into water, it:",
                options: ["Speeds up", "Slows down", "Remains the same", "Stops"],
                correct: 1,
                explanation: "Light slows down when entering a denser medium like water. This is called refraction."
            },
            {
                id: 7,
                topic: "Light",
                question: "The focal length of a convex lens is:",
                options: ["Negative", "Zero", "Positive", "Infinite"],
                correct: 2,
                explanation: "A convex (converging) lens has a positive focal length as it converges parallel light rays to a point."
            },
            {
                id: 8,
                topic: "Light",
                question: "Which color of light has the longest wavelength?",
                options: ["Violet", "Blue", "Green", "Red"],
                correct: 3,
                explanation: "Red light has the longest wavelength (about 700 nm) in the visible spectrum, while violet has the shortest (about 400 nm)."
            },
            {
                id: 9,
                topic: "Electricity",
                question: "Ohm's Law states that:",
                options: ["V = IR", "P = VI", "V = I/R", "R = PV"],
                correct: 0,
                explanation: "Ohm's Law states that Voltage (V) = Current (I) × Resistance (R)"
            },
            {
                id: 10,
                topic: "Electricity",
                question: "Two resistors of 2 Ω and 4 Ω are connected in series. What is the total resistance?",
                options: ["6 Ω", "2 Ω", "8 Ω", "0.67 Ω"],
                correct: 0,
                explanation: "In series, total resistance = R1 + R2 = 2 + 4 = 6 Ω"
            },
            {
                id: 11,
                topic: "Electricity",
                question: "The power dissipated in a resistor of 10 Ω carrying a current of 2 A is:",
                options: ["20 W", "40 W", "5 W", "4 W"],
                correct: 1,
                explanation: "P = I²R = (2)² × 10 = 4 × 10 = 40 W"
            },
            {
                id: 12,
                topic: "Magnetism",
                question: "Magnetic field lines emerge from which pole?",
                options: ["South pole", "North pole", "Both poles", "Neither pole"],
                correct: 1,
                explanation: "Magnetic field lines emerge from the north pole and enter the south pole."
            },
            {
                id: 13,
                topic: "Magnetism",
                question: "A current-carrying wire produces:",
                options: ["Only electric field", "Only magnetic field", "Both electric and magnetic fields", "No field"],
                correct: 2,
                explanation: "A current-carrying wire produces both electric and magnetic fields. This is the principle behind electromagnets."
            },
            {
                id: 14,
                topic: "Magnetism",
                question: "The device that converts electrical energy into mechanical energy is:",
                options: ["Generator", "Motor", "Transformer", "Resistor"],
                correct: 1,
                explanation: "An electric motor converts electrical energy into mechanical energy. A generator does the opposite."
            },
            {
                id: 15,
                topic: "Waves",
                question: "The distance between two consecutive crests of a wave is called:",
                options: ["Amplitude", "Frequency", "Wavelength", "Period"],
                correct: 2,
                explanation: "Wavelength (λ) is the distance between two consecutive points in a wave that are in the same phase, such as crest to crest."
            }
        ]
    },
    grade10: {
        title: "Grade 10 - Thermal Physics, Gas Laws, Atomic Physics",
        topics: ["Thermal Physics", "Gas Laws", "Atomic Physics"],
        questions: [
            {
                id: 1,
                topic: "Thermal Physics",
                question: "Heat is measured in:",
                options: ["Kelvin", "Joules", "Watts", "Degrees"],
                correct: 1,
                explanation: "Heat is a form of energy and is measured in Joules (SI unit). Temperature is measured in Kelvin or Degrees."
            },
            {
                id: 2,
                topic: "Thermal Physics",
                question: "Which material has the highest specific heat capacity?",
                options: ["Copper", "Iron", "Water", "Aluminum"],
                correct: 2,
                explanation: "Water has the highest specific heat capacity (4200 J/kg·°C) among common substances, making it excellent for heat storage."
            },
            {
                id: 3,
                topic: "Thermal Physics",
                question: "Heat transfer by convection primarily occurs in:",
                options: ["Solids", "Liquids and gases", "Vacuum", "Metals"],
                correct: 1,
                explanation: "Convection is the transfer of heat through fluids (liquids and gases) by the movement of fluid particles."
            },
            {
                id: 4,
                topic: "Gas Laws",
                question: "According to Charles's Law, when pressure remains constant, the volume of a gas is:",
                options: ["Inversely proportional to temperature", "Directly proportional to temperature", "Independent of temperature", "Equal to temperature"],
                correct: 1,
                explanation: "Charles's Law states V ∝ T (in Kelvin), meaning volume is directly proportional to absolute temperature when pressure is constant."
            },
            {
                id: 5,
                topic: "Gas Laws",
                question: "At constant temperature, if the volume of a gas is halved, the pressure becomes:",
                options: ["Half", "Double", "Same", "Four times"],
                correct: 1,
                explanation: "From Boyle's Law: P₁V₁ = P₂V₂. If V₂ = V₁/2, then P₂ = 2P₁ (pressure doubles)."
            },
            {
                id: 6,
                topic: "Gas Laws",
                question: "The absolute zero temperature is:",
                options: ["0°C", "-273°C", "-100°C", "100°C"],
                correct: 1,
                explanation: "Absolute zero is -273°C (or 0 K) - the temperature at which all molecular motion theoretically stops."
            },
            {
                id: 7,
                topic: "Gas Laws",
                question: "A gas occupies 2 m³ at 300 K. What will be its volume at 600 K if pressure is constant?",
                options: ["1 m³", "3 m³", "4 m³", "0.5 m³"],
                correct: 2,
                explanation: "Using Charles's Law: V₁/T₁ = V₂/T₂. So 2/300 = V₂/600, V₂ = 4 m³"
            },
            {
                id: 8,
                topic: "Atomic Physics",
                question: "Who discovered the electron?",
                options: ["Rutherford", "Thomson", "Bohr", "Einstein"],
                correct: 1,
                explanation: "J.J. Thomson discovered the electron in 1897 through his cathode ray tube experiments."
            },
            {
                id: 9,
                topic: "Atomic Physics",
                question: "In the Bohr model of the atom, electrons orbit the nucleus in:",
                options: ["Random paths", "Fixed energy levels", "Figure-8 paths", "Straight lines"],
                correct: 1,
                explanation: "In the Bohr model, electrons occupy specific, quantized energy levels (shells) at fixed distances from the nucleus."
            },
            {
                id: 10,
                topic: "Atomic Physics",
                question: "The process of releasing energy from the sun is called:",
                options: ["Fission", "Fusion", "Radioactivity", "Combustion"],
                correct: 1,
                explanation: "Nuclear fusion is the process in the sun where hydrogen nuclei combine to form helium, releasing enormous amounts of energy."
            },
            {
                id: 11,
                topic: "Atomic Physics",
                question: "An atom that has lost or gained electrons is called a:",
                options: ["Molecule", "Ion", "Nucleus", "Isotope"],
                correct: 1,
                explanation: "An ion is an atom that has become electrically charged by losing or gaining electrons."
            },
            {
                id: 12,
                topic: "Thermal Physics",
                question: "The process by which heat is transferred without any medium is:",
                options: ["Conduction", "Convection", "Radiation", "Insulation"],
                correct: 2,
                explanation: "Radiation is the transfer of heat through electromagnetic waves and does not require any medium. This is how heat reaches Earth from the Sun."
            },
            {
                id: 13,
                topic: "Gas Laws",
                question: "The pressure of a fixed mass of gas at constant volume is directly proportional to:",
                options: ["Volume", "Temperature", "Density", "Mass"],
                correct: 1,
                explanation: "From the pressure law (Gay-Lussac's Law): P ∝ T (in Kelvin) at constant volume."
            },
            {
                id: 14,
                topic: "Atomic Physics",
                question: "Which particle has no charge?",
                options: ["Proton", "Electron", "Neutron", "Alpha particle"],
                correct: 2,
                explanation: "Neutrons have no electric charge. Protons are positive, electrons are negative, and alpha particles are positive."
            },
            {
                id: 15,
                topic: "Thermal Physics",
                question: "A good thermal insulator has:",
                options: ["High specific heat capacity", "Low thermal conductivity", "High density", "High thermal conductivity"],
                correct: 1,
                explanation: "A good insulator has low thermal conductivity, meaning it resists the flow of heat through it."
            }
        ]
    }
};

// Quiz State
let currentGrade = null;
let currentQuestions = [];
let currentQuestionIndex = 0;
let score = 0;
let selectedAnswer = null;
let answered = false;

// DOM Elements
const screens = {
    welcome: document.getElementById('welcome-screen'),
    grade: document.getElementById('grade-screen'),
    quiz: document.getElementById('quiz-screen'),
    results: document.getElementById('results-screen')
};

// Initialize App
document.addEventListener('DOMContentLoaded', function() {
    console.log('Kimko Physics App Initialized');
});

// Screen Navigation
function showScreen(screenId) {
    Object.values(screens).forEach(screen => {
        screen.classList.remove('active');
    });
    screens[screenId].classList.add('active');
}

function showGradeSelection() {
    showScreen('grade');
}

// Grade Selection
function selectGrade(grade) {
    currentGrade = grade;
    loadQuestions(grade);
    showScreen('quiz');
}

// Load Questions for Selected Grade
function loadQuestions(grade) {
    const questionBank = questionBanks['grade' + grade];
    // Shuffle and select 10 questions
    const shuffled = [...questionBank.questions].sort(() => Math.random() - 0.5);
    currentQuestions = shuffled.slice(0, 10);
    
    currentQuestionIndex = 0;
    score = 0;
    
    displayQuestion();
    updateScore();
    updateProgress();
}

// Display Current Question
function displayQuestion() {
    const question = currentQuestions[currentQuestionIndex];
    
    document.getElementById('current-grade').textContent = `Grade ${currentGrade}`;
    document.getElementById('question-counter').textContent = `Question ${currentQuestionIndex + 1}/${currentQuestions.length}`;
    document.getElementById('q-number').textContent = currentQuestionIndex + 1;
    document.getElementById('question-text').textContent = question.question;
    
    // Display options
    const optionsContainer = document.getElementById('options');
    optionsContainer.innerHTML = '';
    
    const optionLabels = ['A', 'B', 'C', 'D'];
    question.options.forEach((option, index) => {
        const optionDiv = document.createElement('div');
        optionDiv.className = 'option';
        optionDiv.onclick = () => selectOption(index);
        
        const marker = document.createElement('span');
        marker.className = 'option-marker';
        marker.textContent = optionLabels[index];
        
        const text = document.createElement('span');
        text.textContent = option;
        
        optionDiv.appendChild(marker);
        optionDiv.appendChild(text);
        optionsContainer.appendChild(optionDiv);
    });
    
    // Reset state
    selectedAnswer = null;
    answered = false;
    document.getElementById('explanation').style.display = 'none';
    document.getElementById('next-btn').style.display = 'none';
    document.getElementById('finish-btn').style.display = 'none';
}

// Select Answer
function selectOption(index) {
    if (answered) return;
    
    selectedAnswer = index;
    answered = true;
    
    const question = currentQuestions[currentQuestionIndex];
    const options = document.querySelectorAll('.option');
    
    // Mark selected option
    options[index].classList.add('selected');
    
    // Check if correct
    if (index === question.correct) {
        options[index].classList.add('correct');
        score++;
        updateScore();
    } else {
        options[index].classList.add('incorrect');
        options[question.correct].classList.add('correct');
    }
    
    // Disable all options
    options.forEach(opt => {
        opt.classList.add('disabled');
    });
    
    // Show explanation
    document.getElementById('explanation-text').textContent = question.explanation;
    document.getElementById('explanation').style.display = 'block';
    
    // Show next/finish button
    if (currentQuestionIndex < currentQuestions.length - 1) {
        document.getElementById('next-btn').style.display = 'inline-block';
    } else {
        document.getElementById('finish-btn').style.display = 'inline-block';
    }
    
    updateProgress();
}

// Next Question
function nextQuestion() {
    currentQuestionIndex++;
    displayQuestion();
}

// Update Score Display
function updateScore() {
    document.getElementById('current-score').textContent = score;
}

// Update Progress Bar
function updateProgress() {
    const progress = ((currentQuestionIndex + 1) / currentQuestions.length) * 100;
    document.getElementById('progress-fill').style.width = progress + '%';
}

// Show Results
function showResults() {
    showScreen('results');
    
    const totalQuestions = currentQuestions.length;
    const percentage = Math.round((score / totalQuestions) * 100);
    
    document.getElementById('final-score').textContent = score;
    document.getElementById('total-questions').textContent = totalQuestions;
    document.getElementById('percentage').textContent = percentage + '%';
    document.getElementById('correct-count').textContent = score;
    document.getElementById('incorrect-count').textContent = totalQuestions - score;
    
    // Set result message and icon based on score
    const resultIcon = document.getElementById('result-icon');
    const resultMessage = document.getElementById('result-message');
    
    if (percentage >= 80) {
        resultIcon.textContent = '🏆';
        resultMessage.textContent = 'Excellent! You are a Physics Master!';
    } else if (percentage >= 60) {
        resultIcon.textContent = '🌟';
        resultMessage.textContent = 'Great job! Keep practicing!';
    } else if (percentage >= 40) {
        resultIcon.textContent = '📚';
        resultMessage.textContent = 'Good effort! Review the topics and try again.';
    } else {
        resultIcon.textContent = '💪';
        resultMessage.textContent = 'Keep learning! Practice more to improve.';
    }
}

// Restart Quiz
function restartQuiz() {
    loadQuestions(currentGrade);
    showScreen('quiz');
}

// Service Worker Registration (for PWA)
if ('serviceWorker' in navigator) {
    window.addEventListener('load', function() {
        navigator.serviceWorker.register('service-worker.js')
            .then(registration => {
                console.log('ServiceWorker registration successful');
            })
            .catch(error => {
                console.log('ServiceWorker registration failed: ', error);
            });
    });
}
