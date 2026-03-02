// HIMKO - Cambridge Biology Practice Software
// Questions for Grade 9 and 10 based on Cambridge Biology 4th Edition

// Question Banks
const questionBanks = {
    grade9: {
        title: "Grade 9 - Cell Structure, Biological Molecules, Enzymes, Nutrition, Transport, Respiration",
        topics: ["Cell Structure", "Biological Molecules", "Enzymes", "Plant Nutrition", "Human Nutrition", "Transport", "Gas Exchange", "Respiration"],
        questions: [
            {
                id: 1,
                topic: "Cell Structure",
                question: "Which organelle is responsible for photosynthesis in plant cells?",
                options: ["Mitochondria", "Chloroplast", "Ribosome", "Nucleus"],
                correct: 1,
                explanation: "Chloroplasts contain chlorophyll and are the sites of photosynthesis in plant cells. They convert light energy into chemical energy (glucose)."
            },
            {
                id: 2,
                topic: "Cell Structure",
                question: "What is the function of the cell membrane?",
                options: ["To control cell division", "To provide energy", "To control what enters and leaves the cell", "To store genetic information"],
                correct: 2,
                explanation: "The cell membrane is selectively permeable, controlling the passage of substances in and out of the cell. It protects the cell and maintains homeostasis."
            },
            {
                id: 3,
                topic: "Biological Molecules",
                question: "Which element is present in all organic molecules?",
                options: ["Oxygen", "Hydrogen", "Carbon", "Nitrogen"],
                correct: 2,
                explanation: "Carbon is the basis of all organic molecules. It can form four covalent bonds, making it ideal for building complex molecules like carbohydrates, proteins, lipids, and nucleic acids."
            },
            {
                id: 4,
                topic: "Biological Molecules",
                question: "Which test is used to detect the presence of starch?",
                options: ["Benedict's test", "Iodine test", "Biuret test", "Emulsion test"],
                correct: 1,
                explanation: "The iodine test is used to detect starch. When iodine solution (amber/brown) is added to starch, it turns blue-black."
            },
            {
                id: 5,
                topic: "Enzymes",
                question: "What is the lock and key model of enzyme action?",
                options: ["Enzymes are activated by light", "The substrate fits into the active site like a key in a lock", "Enzymes break down all molecules equally", "Enzymes work at any temperature"],
                correct: 1,
                explanation: "The lock and key model states that each enzyme has a specific active site that only fits with a specific substrate, like a key fitting into a lock."
            },
            {
                id: 6,
                topic: "Enzymes",
                question: "What happens to enzyme activity when temperature is increased beyond the optimum?",
                options: ["Activity increases", "Activity decreases", "Activity remains the same", "Activity doubles"],
                correct: 1,
                explanation: "When temperature exceeds the optimum, enzymes become denatured. The heat disrupts the hydrogen and ionic bonds in the active site, preventing substrate binding."
            },
            {
                id: 7,
                topic: "Plant Nutrition",
                question: "What is the role of chlorophyll in plants?",
                options: ["Water absorption", "Light absorption for photosynthesis", "Nutrient transport", "Root growth"],
                correct: 1,
                explanation: "Chlorophyll is the green pigment in chloroplasts that absorbs light energy from the sun to drive the process of photosynthesis."
            },
            {
                id: 8,
                topic: "Plant Nutrition",
                question: "Which mineral ion is essential for leaf development?",
                options: ["Nitrogen", "Iron", "Magnesium", "All of the above"],
                correct: 3,
                explanation: "Nitrogen is needed for leaf growth, iron for chlorophyll production, and magnesium is the central atom in chlorophyll. All are essential for healthy leaf development."
            },
            {
                id: 9,
                topic: "Human Nutrition",
                question: "Which vitamin is produced when skin is exposed to sunlight?",
                options: ["Vitamin A", "Vitamin B", "Vitamin C", "Vitamin D"],
                correct: 3,
                explanation: "Vitamin D is synthesized in the skin when exposed to UV-B radiation from sunlight. It helps in calcium absorption for strong bones and teeth."
            },
            {
                id: 10,
                topic: "Human Nutrition",
                question: "What is the function of dietary fiber?",
                options: ["Energy production", "Muscle growth", "Aids digestion and prevents constipation", "Water balance"],
                correct: 2,
                explanation: "Dietary fiber (roughage) adds bulk to food and helps move it through the digestive system, preventing constipation and maintaining gut health."
            },
            {
                id: 11,
                topic: "Transport",
                question: "What is transpiration in plants?",
                options: ["Water loss through roots", "Water loss through leaves", "Water absorption", "Nutrient transport"],
                correct: 1,
                explanation: "Transpiration is the loss of water vapor from the leaves of plants, mainly through stomata. It creates a continuous column of water pulled up from the roots."
            },
            {
                id: 12,
                topic: "Transport",
                question: "Which blood vessel carries blood away from the heart?",
                options: ["Vein", "Artery", "Capillary", "Venule"],
                correct: 1,
                explanation: "Arteries carry blood away from the heart to the body tissues. They have thick, elastic walls to handle the high pressure of blood pumped from the heart."
            },
            {
                id: 13,
                topic: "Gas Exchange",
                question: "Where does gas exchange occur in the lungs?",
                options: ["Bronchi", "Trachea", "Alveoli", "Bronchioles"],
                correct: 2,
                explanation: "Gas exchange occurs in the alveoli (tiny air sacs). Oxygen diffuses into the blood, and carbon dioxide diffuses out to be exhaled."
            },
            {
                id: 14,
                topic: "Gas Exchange",
                question: "What is the function of cilia in the respiratory tract?",
                options: ["Gas exchange", "Mucus production", "To move mucus and trapped particles out", "To warm the air"],
                correct: 2,
                explanation: "Cilia are tiny hair-like structures that line the respiratory tract. They sweep mucus (containing trapped particles) upward to be expelled or swallowed."
            },
            {
                id: 15,
                topic: "Respiration",
                question: "What is cellular respiration?",
                options: ["Breathing", "The process of releasing energy from glucose", "Gas exchange", "Energy storage"],
                correct: 1,
                explanation: "Cellular respiration is the process where glucose is broken down in cells to release energy (ATP). It occurs in mitochondria and requires oxygen."
            },
            {
                id: 16,
                topic: "Respiration",
                question: "What is the equation for aerobic respiration?",
                options: ["Glucose → Lactate + Energy", "Glucose + Oxygen → Carbon Dioxide + Water + Energy", "Carbon Dioxide + Water → Glucose + Oxygen", "Glucose → Alcohol + Carbon Dioxide"],
                correct: 1,
                explanation: "Aerobic respiration: C₆H₁₂O₆ + 6O₂ → 6CO₂ + 6H₂O + Energy (ATP). This occurs in the presence of oxygen and releases the most energy."
            },
            {
                id: 17,
                topic: "Enzymes",
                question: "What is the effect of pH on enzyme activity?",
                options: ["pH has no effect", "Each enzyme has an optimum pH", "Enzymes work best at low pH", "Enzymes work best at high pH"],
                correct: 1,
                explanation: "Each enzyme has an optimum pH at which it works best. Changes in pH can denature enzymes by disrupting the bonds in their active site."
            },
            {
                id: 18,
                topic: "Biological Molecules",
                question: "Which food test detects protein?",
                options: ["Iodine test", "Benedict's test", "Biuret test", "Ethanol emulsion test"],
                correct: 2,
                explanation: "The Biuret test detects peptide bonds in proteins. When Biuret reagent is added to protein, it turns from blue to purple/violet."
            },
            {
                id: 19,
                topic: "Cell Structure",
                question: "What is the function of ribosomes?",
                options: ["Energy production", "Protein synthesis", "Cell division", "Waste removal"],
                correct: 1,
                explanation: "Ribosomes are the sites of protein synthesis in cells. They translate genetic information from mRNA to produce proteins."
            },
            {
                id: 20,
                topic: "Transport",
                question: "What is the function of white blood cells?",
                options: ["Transport oxygen", "Blood clotting", "To fight infections", "To carry carbon dioxide"],
                correct: 2,
                explanation: "White blood cells (leukocytes) are part of the immune system. They engulf pathogens (phagocytosis) and produce antibodies to fight infections."
            }
        ]
    },
    grade10: {
        title: "Grade 10 - Disease & Immunity, Excretion, Co-ordination, Inheritance, Ecology",
        topics: ["Disease & Immunity", "Excretion", "Co-ordination & Response", "Inheritance", "Variation & Selection", "Ecology", "Biotechnology"],
        questions: [
            {
                id: 1,
                topic: "Disease & Immunity",
                question: "What is the difference between communicable and non-communicable diseases?",
                options: ["Communicable diseases are genetic", "Communicable diseases can be transmitted from person to person", "Non-communicable are caused by viruses", "There is no difference"],
                correct: 1,
                explanation: "Communicable (infectious) diseases can be transmitted from one person to another through direct contact, air, water, or vectors. Non-communicable diseases (like diabetes, cancer) cannot be transmitted."
            },
            {
                id: 2,
                topic: "Disease & Immunity",
                question: "What is vaccination?",
                options: ["Treatment of disease", "Introduction of weakened or dead pathogens to build immunity", "Antibiotic use", "Surgery"],
                correct: 1,
                explanation: "Vaccination involves introducing weakened, dead, or subunit parts of pathogens into the body to stimulate the immune system to produce antibodies without causing the disease."
            },
            {
                id: 3,
                topic: "Disease & Immunity",
                question: "What is the function of antibodies?",
                options: ["To cause infection", "To identify and neutralize pathogens", "To produce toxins", "To carry oxygen"],
                correct: 1,
                explanation: "Antibodies are proteins produced by B-lymphocytes that identify and neutralize antigens (pathogens) by binding to them, marking them for destruction by other immune cells."
            },
            {
                id: 4,
                topic: "Excretion",
                question: "What is the main function of the kidneys?",
                options: ["To digest food", "To filter blood and remove waste", "To produce hormones", "To store urine"],
                correct: 1,
                explanation: "The kidneys filter blood to remove metabolic wastes (urea, excess salts, water) and regulate blood pressure, pH, and fluid balance in the body."
            },
            {
                id: 5,
                topic: "Excretion",
                question: "What is the function of the loop of Henle?",
                options: ["Urine storage", "Filtration of blood", "Reabsorption of water and salts", "Urine transport"],
                correct: 2,
                explanation: "The loop of Henle is the part of the nephron that concentrates urine by reabsorbing water and salts. It creates a concentration gradient in the medulla."
            },
            {
                id: 6,
                topic: "Excretion",
                question: "What is urea?",
                options: ["A hormone", "A waste product of protein breakdown", "A type of sugar", "A vitamin"],
                correct: 1,
                explanation: "Urea is the main nitrogenous waste product formed in the liver from the breakdown of excess amino acids. It is less toxic than ammonia and is excreted in urine."
            },
            {
                id: 7,
                topic: "Co-ordination & Response",
                question: "What is the function of the cerebrum?",
                options: ["Balance and coordination", "Intelligence, memory, and voluntary actions", "Heart rate control", "Breathing control"],
                correct: 1,
                explanation: "The cerebrum (largest part of the brain) controls voluntary actions, intelligence, memory, language, speech, and sensory processing."
            },
            {
                id: 8,
                topic: "Co-ordination & Response",
                question: "What is a reflex arc?",
                options: ["A learning process", "A rapid automatic response to a stimulus", "A type of memory", "A voluntary action"],
                correct: 1,
                explanation: "A reflex arc is a neural pathway that mediates a reflex action. It involves a sensory neuron, relay neuron, and motor neuron, enabling rapid responses without brain involvement."
            },
            {
                id: 9,
                topic: "Co-ordination & Response",
                question: "What is the function of insulin?",
                options: ["To increase blood sugar", "To decrease blood sugar levels", "To regulate water balance", "To control growth"],
                correct: 1,
                explanation: "Insulin is a hormone produced by the pancreas that lowers blood glucose levels by promoting glucose uptake into cells and converting glucose to glycogen for storage."
            },
            {
                id: 10,
                topic: "Inheritance",
                question: "What are genes?",
                options: ["A type of cell", "Units of inheritance that control characteristics", "A type of virus", "A part of the brain"],
                correct: 1,
                explanation: "Genes are units of inheritance found on chromosomes. They contain DNA sequences that code for specific proteins and determine an organism's characteristics."
            },
            {
                id: 11,
                topic: "Inheritance",
                question: "What is the genotype?",
                options: ["Physical appearance", "Genetic makeup of an organism", "Mixed characteristics", "Environment factors"],
                correct: 1,
                explanation: "Genotype refers to the genetic makeup of an organism - the combination of alleles (genes) present. It determines the potential characteristics, while phenotype is the physical expression."
            },
            {
                id: 12,
                topic: "Inheritance",
                question: "If a heterozygous tall plant (Tt) is crossed with a homozygous short plant (tt), what percentage will be tall?",
                options: ["25%", "50%", "75%", "100%"],
                correct: 1,
                explanation: "Cross: Tt × tt. Offspring: Tt (tall), tt (short), Tt (tall), tt (short). 50% will be tall (Tt) and 50% will be short (tt)."
            },
            {
                id: 13,
                topic: "Variation & Selection",
                question: "What is natural selection?",
                options: ["Artificial selection by humans", "Survival of organisms best adapted to environment", "Random changes in DNA", "Breeding of plants"],
                correct: 1,
                explanation: "Natural selection is the process where organisms better adapted to their environment tend to survive and reproduce, passing on beneficial traits to offspring."
            },
            {
                id: 14,
                topic: "Variation & Selection",
                question: "What is variation?",
                options: ["Identical characteristics", "Differences between individuals of the same species", "Environmental changes", "Genetic clones"],
                correct: 1,
                explanation: "Variation is the difference in characteristics between individuals of the same species. It can be genetic (inherited) or caused by environmental factors."
            },
            {
                id: 15,
                topic: "Ecology",
                question: "What is a food chain?",
                options: ["A sequence of restaurants", "A feeding relationship between organisms", "A type of ecosystem", "A chemical process"],
                correct: 1,
                explanation: "A food chain shows the feeding relationships between organisms, with energy transferred from one organism to the next. Each organism eats the one before it."
            },
            {
                id: 16,
                topic: "Ecology",
                question: "What is the role of decomposers in an ecosystem?",
                options: ["To produce food", "To break down dead organisms and recycle nutrients", "To hunt prey", "To photosynthesize"],
                correct: 1,
                explanation: "Decomposers (bacteria, fungi) break down dead organic matter, releasing nutrients back into the soil for plants to use. They are essential for nutrient cycling."
            },
            {
                id: 17,
                topic: "Ecology",
                question: "What is a habitat?",
                options: ["A type of animal", "The natural home of an organism", "A type of food", "A predator"],
                correct: 1,
                explanation: "A habitat is the natural environment where an organism lives. It provides food, water, shelter, and suitable conditions for the organism to survive."
            },
            {
                id: 18,
                topic: "Biotechnology",
                question: "What is genetic engineering?",
                options: ["Traditional breeding", "Direct modification of an organism's genes", "Natural selection", "Cloning only"],
                correct: 1,
                explanation: "Genetic engineering involves directly manipulating an organism's DNA to add, remove, or modify specific genes. This is used to produce insulin, GM crops, and gene therapy."
            },
            {
                id: 19,
                topic: "Co-ordination & Response",
                question: "What is homeostasis?",
                options: ["Evolution", "Maintenance of internal body conditions", "Cell division", "Growth response"],
                correct: 1,
                explanation: "Homeostasis is the maintenance of a stable internal environment in an organism. It involves controlling factors like temperature, blood glucose, and water balance."
            },
            {
                id: 20,
                topic: "Inheritance",
                question: "What is codominance?",
                options: ["One allele masks another", "Both alleles are expressed equally", "No alleles are expressed", "Only one allele is inherited"],
                correct: 1,
                explanation: "Codominance occurs when both alleles of a gene are expressed in the offspring. An example is the ABO blood group system where A and B antigens are both expressed."
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
    console.log('HIMKO Biology App Initialized');
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
    document.getElementById('topic-tag').textContent = question.topic;
    
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
        resultMessage.textContent = 'Excellent! You are a Biology Master!';
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
