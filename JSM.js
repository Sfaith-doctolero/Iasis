//JSM HEALTH SOLUTIONS
//1st Section: Hospital Configuration Constants
//Static data for the hospital system.
//Placed at the top for easy access and modification
//Core Data Parameters
//for various functions throughtout the system 

// Hospital_Services (Nested object) - contains arrayswhich in turn contain other objects
// hospital service => object  which has operations & surgeries etc, as keys which value is an array 
// inside the arrays arethe objects that contains key-value pairs
//Use of name and price keys throughout is allowed because they are defined locally within each individual service object, not globally.
const HOSPITAL_SERVICES = {
    "Operations & Surgeries": [
        { name: "Appendectomy", price: 50000 },
        { name: "Hernia Repair", price: 65000 },
        { name: "Cataract Surgery", price: 40000 },
        { name: "Knee Replacement", price: 150000 },
        { name: "Gallbladder Removal", price: 70000 },
        { name: "Cardiac Bypass", price: 300000 },
        { name: "Cesarean Section", price: 80000 },
        { name: "Tonsillectomy", price: 30000 },
        { name: "Fracture Repair", price: 55000 },
        { name: "Exploratory Surgery", price: 60000 },
        { name: "Biopsy", price: 25000 }
    ],
    "Admissions for Specific Conditions": [
        { name: "Pneumonia", price: 45000 },
        { name: "Diabetes Management (Acute)", price: 35000 },
        { name: "Asthma Exacerbation", price: 30000 },
        { name: "Heart Attack (MI)", price: 120000 },
        { name: "Stroke (CVA)", price: 100000 },
        { name: "Kidney Failure (Acute)", price: 90000 },
        { name: "Severe Infection", price: 50000 },
        { name: "Dehydration", price: 20000 },
        { name: "Gastroenteritis (Severe)", price: 28000 },
        { name: "Hypertensive Crisis", price: 32000 },
        { name: "Diabetic Ketoacidosis (DKA)", price: 40000 }
    ],
    "Diagnostic Procedures": [
        { name: "Endoscopy", price: 18000 },
        { name: "Colonoscopy", price: 22000 },
        { name: "MRI Scan", price: 15000 },
        { name: "CT Scan", price: 10000 },
        { name: "Angiography", price: 75000 },
        { name: "Bronchoscopy", price: 30000 }
    ],
    "Maternity Services": [
        { name: "Labor and Delivery", price: 70000 },
        { name: "Postpartum Care", price: 20000 },
        { name: "High-Risk Pregnancy Monitoring", price: 40000 }
    ],
    "Emergency Care": [
        { name: "Trauma", price: 60000 },
        { name: "Poisoning", price: 45000 },
        { name: "Severe Allergic Reaction", price: 25000 },
        { name: "Loss of Consciousness", price: 35000 },
        { name: "Acute Abdominal Pain", price: 20000 },
        { name: "Chest Pain (Non-Cardiac)", price: 28000 }
    ],
    "Rehabilitation & Therapy": [
        { name: "Physical Therapy (Post-Op)", price: 15000 },
        { name: "Occupational Therapy (Post-Stroke)", price: 18000 },
        { name: "Speech Therapy", price: 12000 }
    ],
    "Other Admissions": [
        { name: "Observation Stay", price: 10000 },
        { name: "Transfusion", price: 8000 },
        { name: "Chemotherapy Session (Inpatient)", price: 50000 },
        { name: "Palliative Care Admission", price: 25000 },
        { name: "Mental Health Crisis Stabilization", price: 30000 }
    ]
};

//Helper to flatten all services into a single array for multi-selection
//Hospital Services is structured as an object where the keys are service categories 
//values are arrays of service objects
const ALL_HOSPITAL_SERVICES_FLAT = Object.values(HOSPITAL_SERVICES).flat();
const ALL_HOSPITAL_SERVICE_NAMES_FLAT = ALL_HOSPITAL_SERVICES_FLAT.map(s => s.name);


const HOSPITAL_DEPARTMENTS = {
    "General Surgery": ["Appendectomy", "Hernia Repair", "Gallbladder Removal", "Tonsillectomy", "Biopsy", "Fracture Repair", "Exploratory Surgery"],
    "Ophthalmology": ["Cataract Surgery"],
    "Orthopedics": ["Knee Replacement"],
    "Cardiology": ["Cardiac Bypass", "Heart Attack (MI)", "Chest Pain (Non-Cardiac)"],
    "Obstetrics & Gynecology": ["Cesarean Section", "Labor and Delivery", "Postpartum Care", "High-Risk Pregnancy Monitoring"],
    "Internal Medicine": ["Pneumonia", "Diabetes Management (Acute)", "Asthma Exacerbation", "Kidney Failure (Acute)", "Severe Infection", "Dehydration", "Gastroenteritis (Severe)", "Hypertensive Crisis", "Diabetic Ketoacidosis (DKA)", "Observation Stay", "Transfusion", "Chemotherapy Session (Inpatient)", "Palliative Care Admission"],
    "Neurology": ["Stroke (CVA)", "Loss of Consciousness"],
    "Gastroenterology": ["Endoscopy", "Colonoscopy", "Acute Abdominal Pain"],
    "Radiology": ["MRI Scan", "CT Scan", "Angiography"],
    "Pulmonology": ["Bronchoscopy"],
    "Emergency Department": ["Trauma", "Poisoning", "Severe Allergic Reaction", "Loss of Consciousness", "Acute Abdominal Pain", "Chest Pain (Non-Cardiac)"],
    "Rehabilitation Medicine": ["Physical Therapy (Post-Op)", "Occupational Therapy (Post-Stroke)", "Speech Therapy"],
    "Psychiatry": ["Dr. Peter "] //Psychiatry department, not tied to a service here
};

const HOSPITAL_DOCTORS = {
    "General Surgery": ["Dr. Alex Ramirez", "Dr. Sofia Castro"],
    "Ophthalmology": ["Dr. Gabriel Lim"],
    "Orthopedics": ["Dr. Ben Cruz"],
    "Cardiology": ["Dr. Clara Santos"],
    "Obstetrics & Gynecology": ["Dr. David Rivera", "Dr. Emily Garcia"],
    "Internal Medicine": ["Dr. Frank Tan", "Dr. Grace Lee", "Dr. Henry Dela Cruz"],
    "Neurology": ["Dr. Irene Salazar"],
    "Gastroenterology": ["Dr. Joseph Kim"],
    "Radiology": ["Dr. Karen Cortez"],
    "Pulmonology": ["Dr. Liam Ocampo"],
    "Emergency Department": ["Dr. Mia Perez", "Dr. Noah Reyes"],
    "Rehabilitation Medicine": ["Dr. Olivia Rodrigo"],
    "Psychiatry": ["Dr. Taylor Swift"]
};

const HOSPITAL_ROOMS = {
    "Private": {
        description: "A comfortable single-occupancy room with a private bathroom, TV, and a dedicated visitor seating area. Offers maximum privacy and comfort.",
        price: 7000
    },
    "Semi-Private": {
        description: "A double-occupancy room shared with one other patient, with a shared bathroom. A more economical option offering a balance of privacy and cost.",
        price: 3500
    },
    "Ward": {
        description: "A multi-occupancy room shared with several patients, providing basic amenities and shared facilities. The most budget-friendly option.",
        price: 1500
    }
};

const REFERRING_PHYSICIANS = [
    "Dr. Maria Lopez (Family Medicine)",
    "Dr. John Javillo (General Practice)",
    "Dr. Sarah Bello (Pediatrics)",
    "Dr. Robert Asunscion (Internal Medicine)",
    "Dr. Alice Cortez (ER Physician)"
];

const IMMUNIZATION_STATUSES = [
    "Fully Vaccinated (up-to-date)",
    "Partially Vaccinated",
    "Not Vaccinated",
    "Unknown"
];

const ALCOHOL_CONSUMPTION_LEVELS = [
    "None",
    "Occasional (social drinking)",
    "Moderate (1-2 drinks/day)",
    "Heavy (3+ drinks/day)",
    "Former Drinker"
];

const ONLINE_PAYMENT_OPTIONS = [
    "GCash",
    "PayMaya (Maya)",
    "Bank Transfer ",
    "Other E-Wallet"
];
//Probable card options
const CARD_TYPE_OPTIONS = [
    "Visa",
    "Mastercard",
    "JCB",
    "American Express"
];

// Defines the structure and validation rules for all input fields.
//validation is handled by a general purpose validation function (getValidatedInput)
// it uses the rules defined within the ADMISSION_PROCESS_CONFIG
const ADMISSION_PROCESS_CONFIG = {
    "Patient Demographics": {
        "Identification": {
            //use type to dictate Prompt formatting
            //getValidatedInput function uses type to customize the prompt message 
            //for instance type:text - expects string 
            //type:generated - it is something that the the system creates not a user input
            //use of RegEx to follow format and not allow invalid inputs


            //Process of flow 
            // getValidatedInput recieves a fieldConfig argument.
            //Inside getValidated info are conditional statements that value of the fieldConfig.type and it is programmed to react based on what type it finds 

            //clarification for type
            // getValidated is an assistant that collect information and the fieldConfig is a set of instructions you hand to it 
            //e.g. fieldConfigType is select
            // Instruction: type:"select", options: ["Male, "Female"]
            //fieldConfig.options - system gives user the option and prompts user to choose 
            //if the option is valid then the system will convert the number ti an actual option 1- male, 2 - female

            //discussion for input 
            // Patient ID - key and acts as a placeholder for the actual patient id
            // when the admissionprocess runs the actualy patient id will then be stored under this key 
            // {} - object literal, every value associated with their individual keys will be stored here 
            // during admission when system reaches "identification" the processDubcategory function will then iterate through the fields defined in admission process config 
            // when it encounters then the certain key, it will tehn read the associated value (user input)
           
            // getValidatedInput uses required to check for ields that requires input
            //RegEx (/^[A-Za-z\s.'-]+$/) - find specific pattern to follow 
            //.test search for same pattern throughout the string 
            //.trim removes whitespace characters
            "Patient ID": { type: "generated", label: "Unique Patient ID" },
            "Patient Last Name": { type: "text", required: true, validation: (input) => /^[A-Za-z\s.'-]+$/.test(input.trim()) && input.trim().length > 0, errorMessage: "Please enter a valid last name (letters, spaces, hyphens, apostrophes, periods only)." },
            "Patient First Name": { type: "text", required: true, validation: (input) => /^[A-Za-z\s.'-]+$/.test(input.trim()) && input.trim().length > 0, errorMessage: "Please enter a valid first name (letters, spaces, hyphens, apostrophes, periods only)." },
            "Patient Middle Name": { type: "text", required: false, validation: (input) => input === "" || /^[A-Za-z\s.'-]+$/.test(input.trim()), errorMessage: "Please enter a valid middle name or leave blank." },
            "Patient Suffix (e.g., Jr., III)": { type: "text", required: false, validation: (input) => input === "" || /^[A-Za-z\s.'-]+$/.test(input.trim()), errorMessage: "Please enter a valid suffix or leave blank." },
            //new Date() - if input is valid it will create a date object representing the birthdate
            "Date of Birth": {
                type: "date",
                required: true,
                validation: (input) => {
                    if (!/^\d{4}-\d{2}-\d{2}$/.test(input)) return false;
                    const birthDate = new Date(input);
                    const today = new Date();
                    return !isNaN(birthDate.getTime()) && birthDate <= today;
                },
                errorMessage: "Please enter a valid Date of Birth in YYYY-MM-DD format."
            },
            "Gender": { type: "select", options: ["Male", "Female"], required: true },
            "Patient Type": { type: "select", options: ["Regular", "Senior Citizen", "PWD"], required: true, errorMessage: "Please select a valid patient type for discount eligibility." },
            "Blood Type": { type: "select", options: ["A+", "A-", "B+", "B-", "AB+", "AB-", "O+", "O-", "Unknown"], required: true, errorMessage: "Please select a valid blood type." },
            "Marital Status": { type: "select", options: ["Single", "Married", "Divorced", "Widowed", "Separated"], required: true, errorMessage: "Please select a valid marital status." },
            "Contact Number": { type: "tel", required: true, validation: (input) => /^\d{10,}$/.test(input), errorMessage: "Please enter a valid 11-digit or more phone number. (e.g. 09123456789" }, // Changed to 11 digits for flexibility
            "Email Address": { type: "email", required: false, validation: (input) => input === "" || /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(input), errorMessage: "Please enter a valid email address or leave blank." },
            "Nationality": { type: "text", required: true, validation: (input) => input.trim().length > 0, errorMessage: "Kindly input your Nationality." },
            "Religion": { type: "text", required: true, errorMessage: "Please input your religion." }
        },
        "Address Information": {
            "Street Address": { type: "text", required: true, validation: (input) => input.trim().length > 0, errorMessage: "Street address can't be empty." },
            "City": { type: "text", required: true, validation: (input) => input.trim().length > 0, errorMessage: "City can't be empty." },
            "State/Province": { type: "text", required: true, validation: (input) => input.trim().length > 0, errorMessage: "State/Province can't be empty." },
            "Postal Code": { type: "text", required: true, validation: (input) => /^\d{4,}$/.test(input), errorMessage: "Please enter a valid postal code (at least 4 digits)." },
            "Country": { type: "text", required: true, validation: (input) => input.trim().length > 0, errorMessage: "Country can't be empty." }
        },
        "Emergency Contact": {
            "Emergency Contact Last Name": { type: "text", required: true, validation: (input) => /^[A-Za-z\s.'-]+$/.test(input.trim()) && input.trim().length > 0, errorMessage: "Please enter a valid last name (letters, spaces, hyphens, apostrophes, periods only)." },
            "Emergency Contact First Name": { type: "text", required: true, validation: (input) => /^[A-Za-z\s.'-]+$/.test(input.trim()) && input.trim().length > 0, errorMessage: "Please enter a valid first name (letters, spaces, hyphens, apostrophes, periods only)." },
            "Emergency Contact Middle Name (Optional)": { type: "text", required: false, validation: (input) => input === "" || /^[A-Za-z\s.'-]+$/.test(input.trim()), errorMessage: "Please enter a valid middle name or leave blank." },
            "Emergency Contact Suffix (Optional)": { type: "text", required: false, validation: (input) => input === "" || /^[A-Za-z\s.'-]+$/.test(input.trim()), errorMessage: "Please enter a valid suffix or leave blank." },
            "Relationship to Patient": { type: "text", required: true, validation: (input) => input.trim().length > 0, errorMessage: "Relationship can't be empty." },
            "Emergency Contact Number": { type: "tel", required: true, validation: (input) => /^\d{11,}$/.test(input), errorMessage: "Please enter a valid 11-digit or more phone number. (e.g. 09123456789)" }
        }
    },
    "Medical Information": {
        "Reason for Admission": {
            // This field will now use a custom processor
            "Admission Category": { type: "select", options: Object.keys(HOSPITAL_SERVICES), required: true, customProcessor: "getAdmissionServiceDetails" },
            // The following fields are handled within getAdmissionServiceDetails
            "Specific Service/Condition": { type: "text", required: true }, // This will be set by getAdmissionServiceDetails
            "Additional Services": { type: "array", required: false }, // This will be set by getAdmissionServiceDetails
            "Admitting Doctor": { type: "text", required: true }, // This will be set by getAdmissionServiceDetails
            "Chief Complaint": { type: "textarea", required: true, validation: (input) => input.trim().length > 0, errorMessage: "Chief complaint can't be empty. Please describe the patient's primary complaint." },
            "Onset Date": { type: "date-clear", required: true, validation: (input) => /^\d{4}-\d{2}-\d{2}$/.test(input), errorMessage: "Please enter date in YYYY-MM-DD format." },
            "Onset Time": { type: "time-clear", required: true, validation: (input) => input === "" || /^([01]\d|2[0-3]):([0-5]\d)$/.test(input), errorMessage: "Please enter time in HH:MM format (24-hour)." },
            "Referring Physician": { type: "select", options: REFERRING_PHYSICIANS, required: true },
        },
        "Medical History": {
            "Past Medical Conditions": {
                type: "multiselect-with-other",
                options: ["Diabetes", "Hypertension", "Asthma", "Heart Disease", "Kidney Disease", "Cancer"],
                required: false,
                validation: (input) => true
            },
            "Past Surgeries": { type: "textarea", required: true },
            "Allergies": { type: "textarea", required: true },
            "Current Medications": { type: "textarea", required: true },
            "Immunization Status": { type: "select", options: IMMUNIZATION_STATUSES, required: true},
        },
        "Social History": {
            "Smoking Status": { type: "select", options: ["Never Smoker", "Former Smoker", "Current Smoker"], required: false },
            "Alcohol Consumption": { type: "select", options: ALCOHOL_CONSUMPTION_LEVELS, required: true },
            "Drug Use": { type: "text", required: true },
            "Occupation": { type: "text", required: true}
        }
    },
    "Admission Details": {
        "Admission Information": {
            "Admission Date/Time": {
                type: "datetime-custom",
                required: true,
                validation: (input) => /^\d{4}-\d{2}-\d{2} ([01]\d|2[0-3]):([0-5]\d)$/.test(input),
                errorMessage: "Please enter Admission Date/Time in YYYY-MM-DD :MM format (e.g., 2025-05-23 14:30)."
            },
            "Expected Length of Stay (Days)": { type: "number", required: false, validation: (input) => input === "" || (Number(input) > 0 && Number.isInteger(Number(input))), errorMessage: "Please enter a valid whole number of days." },
            "Room Type Preference": { type: "select", options: Object.keys(HOSPITAL_ROOMS), required: true }
        },
        "Consent Forms": {
            "Consent for Treatment (Y/N)": { type: "boolean", required: true },
            "Privacy Policy Acknowledged (Y/N)": { type: "boolean", required: true }
        }
    }
};


//Block of Code that Generates a unique patient ID.
function generatePatientID() {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    let result = '';
    const length = 6;
    for (let i = 0; i < length; i++) {
        result += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    return `PID-${result}`;
}

// Block of Code that Generates a unique transaction ID.
function generateTransactionID() {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789'; //Options of characters 
    let result = ''; //
    const length = 8;
    for (let i = 0; i < length; i++) {
        result += characters.charAt(Math.floor(Math.random() * characters.length));
    }
     return `TRN-${result}`;
}
//function to clean up string input by trimming whitespace and converting to lowercase.
function normalizeInput(input) {
    return input.trim().toLowerCase();
}

function getValidatedInput(message, fieldConfig) {
    let input;
    let isValid = false;
//fieldConfig.options.length makes sure that the input of the user is valid and is in the options
// fieldConfig.options.map((option, index) =>${index + 1}. ${option}).join('\n')
// is used to dynamically generate a neatly formatted, numbered list for the user to choose from when a "select" type field is encountered.

//prpcess
//fiedlConfig.options shows choices by accessing the array
//.map() iterates over each transforming them into new string with associated numbers 
//join('n\') takes the new array of numbered string and combines them into single long one, insertinga new line character between 
while (!isValid) {
        let promptMessage = message;
        if (fieldConfig.type === "select" || fieldConfig.type === "select-dynamic") {
            promptMessage += "\n" + fieldConfig.options.map((option, index) => `${index + 1}. ${option}`).join('\n') + `\nEnter the number:`;
        } else if (fieldConfig.type === "multiselect") {
            promptMessage += ` (Enter comma-separated values from: ${fieldConfig.options.join(', ')})`;
        } else if (fieldConfig.type === "multiselect-with-other") {
            promptMessage += "\n" + fieldConfig.options.map((option, index) => `${index + 1}. ${option}`).join('\n');
            promptMessage += `\n${fieldConfig.options.length + 1}. Other\n`;
            promptMessage += `Enter number(s) separated by commas (e.g., 1,3,4) or type "none" to skip:`;
        } else if (fieldConfig.type === "boolean") {
            promptMessage += ` (Y/N)`;
        } else if (fieldConfig.type.includes("date") && !fieldConfig.type.includes("datetime")) { // General date prompt
            promptMessage += ` (Format: YYYY-MM-DD)`;
        } else if (fieldConfig.type.includes("time")) {
            promptMessage += ` (Format: HH:MM, e.g., 14:30)`;
        } else if (fieldConfig.type === "datetime-custom") {
            promptMessage += ` (Format: YYYY-MM-DD HH:MM, e.g., 2025-05-23 14:30)`;
        }

        input = prompt(promptMessage);
        if (input === null) {
            alert("Operation cancelled by user.");
            throw new Error("User cancelled operation.");
        }

        // Handle "none" for multiselect-with-other if it's not required
        if (fieldConfig.type === "multiselect-with-other" && normalizeInput(input) === 'none') {
            if (fieldConfig.required) {
                alert(fieldConfig.errorMessage || "This field is required. You cannot select 'none'.");
                continue;
            } else {
                return []; // Return an empty array if "none" is allowed and chosen
            }
        }


        if (fieldConfig.required && input.trim() === '') {
            alert(fieldConfig.errorMessage || "This field is required. Please provide a value.");
            continue;
        }
        if (!fieldConfig.required && input.trim() === '') {
            isValid = true;
            input = '';
            continue;
        }
//.filter removes empty strings
//.some checks atleast one option is valid 
//throw normal flow interrupted  and control transfers to catch 
        if (fieldConfig.type === "select" || fieldConfig.type === "select-dynamic") {
            const parsedInput = parseInt(input);
            if (!isNaN(parsedInput) && parsedInput >= 1 && parsedInput <= fieldConfig.options.length) {
                input = fieldConfig.options[parsedInput - 1];
                isValid = true;
            } else {
                alert(`Invalid input. Please enter a number between 1 and ${fieldConfig.options.length}.`);
            }
        } else if (fieldConfig.type === "multiselect") {
            const selectedOptions = input.split(',').map(opt => normalizeInput(opt)).filter(opt => opt !== '');
            const allValid = selectedOptions.every(opt => fieldConfig.options.some(validOpt => normalizeInput(validOpt) === opt));
            if (allValid) {
                input = selectedOptions.map(normOpt => fieldConfig.options.find(origOpt => normalizeInput(origOpt) === normOpt));
                isValid = true;
            } else {
                alert(`Some of your selections are invalid. Please choose only from: ${fieldConfig.options.join(', ')}`);
            }
        } else if (fieldConfig.type === "multiselect-with-other") {
            const selectedNumbers = input.split(',').map(Number).filter(num => !isNaN(num) && num > 0);
            const chosenOptions = [];
            let otherInput = '';

            const hasInvalidNumber = selectedNumbers.some(num => num > fieldConfig.options.length + 1);
            if (hasInvalidNumber) {
                alert(`Invalid number entered. Please choose numbers between 1 and ${fieldConfig.options.length + 1}.`);
                continue;
            }

            const hasOtherSelected = selectedNumbers.includes(fieldConfig.options.length + 1);

            for (const num of selectedNumbers) {
                if (num <= fieldConfig.options.length) {
                    chosenOptions.push(fieldConfig.options[num - 1]);
                }
            }

            if (hasOtherSelected) {
                otherInput = prompt("You selected 'Other'. Please specify the medical condition(s) (comma-separated if multiple):");
                if (otherInput === null) {
                    throw new Error("User cancelled operation.");
                }
                if (otherInput.trim() === '' && fieldConfig.required) {
                    alert("You selected 'Other', but did not specify any condition. Please provide details or unselect 'Other'.");
                    continue;
                }
                if (otherInput.trim() !== '') {
                    chosenOptions.push(...otherInput.split(',').map(s => s.trim()).filter(s => s !== ''));
                }
            }
            input = chosenOptions;
            isValid = true;
        } else if (fieldConfig.type === "boolean") {
            const normalizedInput = normalizeInput(input);
            if (normalizedInput === 'y') {
                input = true;
                isValid = true;
            } else if (normalizedInput === 'n') {
                input = false;
                isValid = true;
            } else {
                alert("Invalid input. Please enter 'Y' for Yes or 'N' for No.");
            }
        } else if (fieldConfig.type === "number") {
            const num = Number(input);
            if (!isNaN(num) && (fieldConfig.validation ? fieldConfig.validation(input) : true)) {
                input = num;
                isValid = true;
            } else {
                alert(fieldConfig.errorMessage || "Invalid number input.");
            }
        } else if (fieldConfig.validation) {
            if (fieldConfig.validation(input)) {
                isValid = true;
            } else {
                alert(fieldConfig.errorMessage || "Invalid input provided.");
            }
        } else {
            isValid = true;
        }
    }
    return input;
}

function getAdmissionServiceDetails(subcategoryData) {
    let allSelectedServices = []; // This will store all service objects

    // 1. Prompt for the primary admission category
    const categoryConfig = { type: "select", options: Object.keys(HOSPITAL_SERVICES), required: true };
    const admissionCategory = getValidatedInput(`Select primary reason for admission category:`, categoryConfig);
    subcategoryData["Admission Category"] = admissionCategory;

    // 2. Prompt for the specific primary service within that category
    const servicesForCategory = HOSPITAL_SERVICES[admissionCategory] || [];
    if (servicesForCategory.length === 0) {
        alert(`No services found for category: ${admissionCategory}. Please select another category or manually add a service.`);
        // Fallback for cases where a category has no pre-defined services
        const primaryServiceConfig = { type: "text", required: true, validation: (input) => input.trim().length > 0, errorMessage: "Please specify the primary service/condition." };
        const primaryServiceName = getValidatedInput("Enter the specific primary service/condition:", primaryServiceConfig);
        const primaryService = { name: primaryServiceName, price: 0 }; // Assume 0 price if manually entered
        subcategoryData["Specific Service/Condition"] = primaryService;
        allSelectedServices.push(primaryService);
    } else {
        const serviceOptions = servicesForCategory.map(s => `${s.name} (₱${s.price.toLocaleString()})`);
        const primaryServiceConfig = { type: "select", options: serviceOptions, required: true };
        const selectedPrimaryServiceOption = getValidatedInput(`Select the primary service/condition for '${admissionCategory}':`, primaryServiceConfig);

        const primaryServiceName = selectedPrimaryServiceOption.split(' (₱')[0]; // Extract just the name
        const primaryService = servicesForCategory.find(s => s.name === primaryServiceName);
        subcategoryData["Specific Service/Condition"] = primaryService;
        allSelectedServices.push(primaryService);
    }

    // 3. Loop to add additional services
    let addMoreServices = true;
    const additionalServices = [];

    while (addMoreServices) {
        // Display currently added services
        if (allSelectedServices.length > 0) {
            let currentServicesList = "\n--- Currently Selected Services ---\n";
            allSelectedServices.forEach((svc, index) => {
                currentServicesList += `${index + 1}. ${svc.name} (₱${svc.price.toLocaleString()})\n`;
            });
            alert(currentServicesList);
        } else {
            alert("\nNo additional services selected yet.");
        }

        const addAnother = getValidatedInput("Do you want to add any additional services? (Y/N)", { type: "boolean", required: true });

        if (addAnother) {
            alert("\n--- Adding Additional Service ---");
            alert("You can select from any service category, or enter a new service not listed.");

            const serviceCategories = Object.keys(HOSPITAL_SERVICES).map((cat, index) => `${index + 1}. ${cat}`).join('\n');
            const categoryChoiceConfig = {
                type: "select",
                options: Object.keys(HOSPITAL_SERVICES),
                required: true,
                errorMessage: "Please select a valid service category."
            };
            const chosenCategory = getValidatedInput(`Select category for additional service:\n${serviceCategories}`, categoryChoiceConfig);

            const servicesInChosenCategory = HOSPITAL_SERVICES[chosenCategory] || [];
            const serviceOptions = servicesInChosenCategory.map(s => `${s.name} (₱${s.price.toLocaleString()})`);

            const serviceAddConfig = {
                type: "select-with-other", // Use a special type for single select with "other"
                options: serviceOptions,
                required: true,
                errorMessage: "Please select an additional service or specify 'Other'.",
                customProcessor: (options, promptMsg) => { // Mini custom processor for select-with-other
                    let selectedService = null;
                    let isValidChoice = false;
                    while(!isValidChoice) {
                        let promptWithOptions = promptMsg + "\n" + options.map((opt, idx) => `${idx + 1}. ${opt}`).join('\n') + `\n${options.length + 1}. Other\nEnter number or "Other":`;
                        let input = prompt(promptWithOptions);
                        if (input === null) throw new Error("User cancelled operation.");

                        const parsedInput = parseInt(input);
                        if (!isNaN(parsedInput) && parsedInput >= 1 && parsedInput <= options.length) {
                            selectedService = options[parsedInput - 1];
                            isValidChoice = true;
                        } else if (!isNaN(parsedInput) && parsedInput === options.length + 1 || normalizeInput(input) === 'other') {
                            let otherName = prompt("Please specify the 'Other' service name:");
                            if (otherName === null) throw new Error("User cancelled operation.");
                            if (otherName.trim() === '') {
                                alert("Service name cannot be empty when choosing 'Other'.");
                                continue;
                            }
                            selectedService = otherName.trim(); // Just the name for 'other'
                            isValidChoice = true;
                        } else {
                            alert("Invalid selection. Please choose a number or type 'Other'.");
                        }
                    }
                    return selectedService;
                }
            };

            const selectedAdditionalServiceOption = serviceAddConfig.customProcessor(serviceOptions, "Choose additional service:");

            let addedService;
            const foundService = ALL_HOSPITAL_SERVICES_FLAT.find(s => s.name === selectedAdditionalServiceOption.split(' (₱')[0]);
            if (foundService) {
                addedService = foundService;
            } else {
                // This is an "other" service entered by the user, or one not found in predefined list
                addedService = { name: selectedAdditionalServiceOption, price: 0 }; // Assume 0 price for manually entered 'other'
            }

            // Check if the service is already in the list
            if (allSelectedServices.some(s => s.name === addedService.name)) {
                alert(`'${addedService.name}' is already in your selected services. Skipping addition.`);
            } else {
                additionalServices.push(addedService);
                allSelectedServices.push(addedService);
                alert(`'${addedService.name}' added to additional services.`);
            }

        } else {
            addMoreServices = false;
        }
    }
    subcategoryData["Additional Services"] = additionalServices;
    // Store all selected services for easy total calculation later
    subcategoryData["All Availed Services"] = allSelectedServices;


    // --- Determine Admitting Doctor based on ALL selected services ---
    let potentialDepartments = [];
    allSelectedServices.forEach(service => {
        for (const dept in HOSPITAL_DEPARTMENTS) {
            if (HOSPITAL_DEPARTMENTS[dept].includes(service.name)) {
                potentialDepartments.push(dept);
            }
        }
    });

    let potentialDoctors = [];
    if (potentialDepartments.length > 0) {
        potentialDepartments = [...new Set(potentialDepartments)]; // Remove duplicates
        potentialDepartments.forEach(dept => {
            if (HOSPITAL_DOCTORS[dept]) {
                potentialDoctors = potentialDoctors.concat(HOSPITAL_DOCTORS[dept]);
            }
        });
        potentialDoctors = [...new Set(potentialDoctors)].sort(); // Remove duplicates and sort
    } else {
        alert("No specific department found for the selected services. Offering all available doctors.");
        potentialDoctors = Object.values(HOSPITAL_DOCTORS).flat().sort();
    }

    const admittingDoctorConfig = {
        type: "select-dynamic",
        options: potentialDoctors,
        required: true,
        validation: (input) => potentialDoctors.some(opt => normalizeInput(opt) === normalizeInput(input)),
        errorMessage: "Please select a valid Admitting Doctor."
    };
    if (potentialDoctors.length === 0) {
        alert("No doctors found in the system. Please enter manually.");
        admittingDoctorConfig.type = "text";
        admittingDoctorConfig.validation = (input) => input.trim().length > 0;
        admittingDoctorConfig.errorMessage = "Admitting doctor cannot be empty.";
    }
    subcategoryData["Admitting Doctor"] = getValidatedInput("Select Admitting Doctor:", admittingDoctorConfig);
    const medicalReasonFields = ADMISSION_PROCESS_CONFIG["Medical Information"]["Reason for Admission"];
    subcategoryData["Chief Complaint"] = getValidatedInput(`Please enter Chief Complaint:`, medicalReasonFields["Chief Complaint"]);
    subcategoryData["Onset Date"] = getValidatedInput(`Please enter Onset Date:`, medicalReasonFields["Onset Date"]);
    subcategoryData["Onset Time"] = getValidatedInput(`Please enter Onset Time:`, medicalReasonFields["Onset Time"]);
    subcategoryData["Referring Physician"] = getValidatedInput(`Please enter Referring Physician:`, medicalReasonFields["Referring Physician"]);
}

function processSubcategory(categoryName, subcategoryName, fields) {
    alert(`\n--- Collecting ${subcategoryName} Information ---`);
    const subcategoryData = {};

    for (const fieldName in fields) {
        const fieldConfig = fields[fieldName];

        if (fieldName === "Patient ID" && fieldConfig.type === "generated") {
            subcategoryData[fieldName] = generatePatientID();
            alert(`Generated ${fieldConfig.label}: ${subcategoryData[fieldName]}`);
            continue;
        }

        if (fieldConfig.customProcessor) {
            if (fieldConfig.customProcessor === "getAdmissionServiceDetails") {
                getAdmissionServiceDetails(subcategoryData);

                const handledFields = [
                    "Admission Category", "Specific Service/Condition", "Additional Services",
                    "Admitting Doctor", "Chief Complaint", "Onset Date", "Onset Time", "Referring Physician",
                    "All Availed Services" // Internal helper field, not a prompt field
                ];
                if (handledFields.includes(fieldName)) {
                    continue;
                }
            }
        }


        if (subcategoryData[fieldName] === undefined) {
            const promptMessage = `Please enter ${fieldName}:`;
            subcategoryData[fieldName] = getValidatedInput(promptMessage, fieldConfig);
        }
    }

    return subcategoryData;
}

function processCategory(categoryName, subcategories) {
    alert(`\n=== Starting ${categoryName} Section ===`);
    const categoryData = {};
    for (const subcategoryName in subcategories) {
        categoryData[subcategoryName] = processSubcategory(categoryName, subcategoryName, subcategories[subcategoryName]);
    }
    return categoryData;
}

function calculateBill(admissionData) {
    let serviceCost = 0;
    let roomCost = 0;
    let totalCostBeforeDiscount = 0;
    let discountAmount = 0;
    const discountRate = 0.20; // 20%

    // Iterate through ALL_AVAILLED_SERVICES to sum up their prices
    const allAvailedServices = admissionData["Medical Information"]["Reason for Admission"]["All Availed Services"] || [];
    allAvailedServices.forEach(service => {
        serviceCost += service.price; // Add price of each service
    });

    const roomType = admissionData["Admission Details"]["Admission Information"]["Room Type Preference"];
    const expectedLengthOfStay = admissionData["Admission Details"]["Admission Information"]["Expected Length of Stay (Days)"] || 1;


    if (roomType && HOSPITAL_ROOMS[roomType]) {
        roomCost = HOSPITAL_ROOMS[roomType].price * expectedLengthOfStay;
    }

    totalCostBeforeDiscount = serviceCost + roomCost;

    const patientType = admissionData["Patient Demographics"]["Identification"]["Patient Type"];
    if (patientType === "Senior Citizen" || patientType === "PWD") {
        discountAmount = totalCostBeforeDiscount * discountRate;
    }

    const finalAmount = totalCostBeforeDiscount - discountAmount;

    return {
        serviceCost, // This now includes primary + additional services
        primaryService: admissionData["Medical Information"]["Reason for Admission"]["Specific Service/Condition"], // Kept for primary display
        additionalServices: admissionData["Medical Information"]["Reason for Admission"]["Additional Services"], // The filtered list
        allAvailedServices: allAvailedServices, // The full list of selected services for comprehensive display
        roomCost,
        totalCostBeforeDiscount,
        discountAmount,
        finalAmount,
        patientType,
        roomDetails: HOSPITAL_ROOMS[roomType] || null,
        roomType: roomType,
        expectedLengthOfStay: expectedLengthOfStay,
    };
}

function displayPrePaymentBillSummary(billDetails) {
    let billSummary = "\n--- Detailed Bill Summary (Before Payment) ---\n";
    billSummary += `1. Medical Services Charge:\n`;

    if (billDetails.allAvailedServices && billDetails.allAvailedServices.length > 0) {
        billSummary += `- Services Availed:\n`;
        billDetails.allAvailedServices.forEach(svc => {
            billSummary += `- ${svc.name} (₱${svc.price.toLocaleString()})\n`;
        });
    } else {
        billSummary += `- No services selected.\n`;
    }
    billSummary += `- Total Service Cost: ₱${billDetails.serviceCost.toLocaleString()}\n`;
    billSummary += `- Description: This charge covers professional fees, use of specialized medical equipment, medical supplies, and facility usage related to all selected services.\n`;


    billSummary += `\n2. Room Accommodation Charge:\n`;
    if (billDetails.roomType && billDetails.roomDetails) {
        billSummary += `- Room Type: ${billDetails.roomType}\n`;
        billSummary += `- Room Description: ${billDetails.roomDetails.description}\n`;
        billSummary += `- Daily Room Rate: ₱${billDetails.roomDetails.price.toLocaleString()}\n`;
        billSummary += `- Expected Length of Stay: ${billDetails.expectedLengthOfStay} Day(s)\n`;
        billSummary += `- Calculation: ₱${billDetails.roomDetails.price.toLocaleString()} (Daily Rate) x ${billDetails.expectedLengthOfStay} Day(s) = ₱${billDetails.roomCost.toLocaleString()}\n`;
    } else {
        billSummary += `- Room Type: Not selected/provided\n`;
        billSummary += `- Room Cost: ₱0\n`;
    }

    billSummary += `\nSubtotal (Medical Services + Room): ₱${billDetails.totalCostBeforeDiscount.toLocaleString()}\n`;

    if (billDetails.discountAmount > 0) {
        billSummary += `\n3. Applied Discount:\n`;
        billSummary += `- Patient Type: ${billDetails.patientType}\n`;
        billSummary += `- Discount Rate: 20%\n`;
        billSummary += `- Discount Amount: -₱${billDetails.discountAmount.toLocaleString()}\n`;
        billSummary += `- Note: This 20% discount is mandated for ${billDetails.patientType} on the total bill for services and room accommodation, in accordance with national laws.\n`;
    } else {
        billSummary += `\n3. No Discount Applied:\n`;
        billSummary += `- Patient Type: ${billDetails.patientType}\n`;
        billSummary += `- Discount Amount: ₱0\n`;
        billSummary += `- Note: Discounts are applicable only for Senior Citizens and Persons With Disabilities (PWDs).\n`;
    }

    billSummary += `\nTOTAL AMOUNT DUE (After Discount): ₱${billDetails.finalAmount.toLocaleString()}\n`;
    billSummary += `\nPlease review these charges before proceeding to payment.\n`;

    alert(billSummary);
}

function processPayment(amountDue) {
    alert(`\n--- Proceed to Payment ---
Your total bill is: ₱${amountDue.toLocaleString()}

Please choose your payment method to complete the admission.`);

    const paymentMethodConfig = {
        type: "select",
        options: ["Cash", "Online Payment", "Card Payment"],
        required: true
    };
    const paymentMethod = getValidatedInput("Select payment method:", paymentMethodConfig);

    let transactionDetails = {
        method: paymentMethod,
        transactionId: generateTransactionID(),
        status: "Successful"
    };

    try {
        switch (paymentMethod) {
            case "Online Payment":
                const onlineOption = getValidatedInput("Select online payment platform:", {
                    type: "select",
                    options: ONLINE_PAYMENT_OPTIONS,
                    required: true
                });
                const onlineRef = getValidatedInput(`Enter reference number for ${onlineOption}:`, {
                    type: "text",
                    required: true,
                    validation: (input) => input.trim().length > 5,
                    errorMessage: "Please enter a valid reference number (at least 6 characters)."
                });
                transactionDetails.onlinePlatform = onlineOption;
                transactionDetails.referenceNumber = onlineRef;
                break;
            case "Card Payment":
                const cardType = getValidatedInput("Select card type:", {
                    type: "select",
                    options: CARD_TYPE_OPTIONS,
                    required: true
                });
                const cardNumber = getValidatedInput("Enter 16-Digit card number:", {
                    type: "text",
                    required: true,
                    validation: (input) => /^\d{13,19}$/.test(input.replace(/\s/g, '')), // 13-19 digits, allows spaces
                    errorMessage: "Please enter a valid card number (13-19 digits)."
                });
                const cardExpiry = getValidatedInput("Enter card expiry (MM/YY):", {
                    type: "text",
                    required: true,
                    validation: (input) => {
                        const parts = input.split('/');
                        if (parts.length !== 2 || parts[0].length !== 2 || parts[1].length !== 2) return false;
                        const month = parseInt(parts[0], 10);
                        const year = parseInt(parts[1], 10) + 2000; // Assuming 2-digit year like 25 -> 2025
                        const lowerBoundYear = 24; // Assuming it's at least 2024 (YY format)
                        const upperBoundYear = 35; // Allowing cards up to 2035 (YY format)
                
                        if (year < lowerBoundYear || year > upperBoundYear) {
                            return false;
                        }
                
                        // If all checks pass
                        return true;
                    },
                    errorMessage: "Please enter a valid expiry date in MM/YY format (e.g., 01/28)."
                });
                const cardCVV = getValidatedInput("Enter CVV:", {
                    type: "text",
                    required: true,
                    validation: (input) => /^\d{3,4}$/.test(input),
                    errorMessage: "Please enter a valid CVV (3 or 4 digits)."
                });
                transactionDetails.cardType = cardType;
                transactionDetails.cardNumberMasked = `**** **** **** ${cardNumber.slice(-4)}`; // Mask card number
                transactionDetails.cardExpiry = cardExpiry;
                break;
            case "Cash":
                alert("Please proceed to the cashier for cash payment.");
                transactionDetails.cashReceived = amountDue; // Simulate cash received
                break;
        }
    } catch (error) {
        if (error.message === "User cancelled operation.") {
            alert("Payment process cancelled. Admission not complete.");
            throw error; // Re-throw to stop the main admission process
        } else {
            throw error;
        }
    }

    alert(`Payment of ₱${amountDue.toLocaleString()} successful! Transaction ID: ${transactionDetails.transactionId}`);
    return transactionDetails;
}

function displayAdmissionSummary(admissionData, billDetails, paymentInfo = null) {
    let summary = "\n--- Admission Summary ---\n";

    // Patient Demographics
    const patientIdent = admissionData["Patient Demographics"]["Identification"];
    summary += `\n**Patient Information:**\n`;
    summary += `Patient ID: ${patientIdent["Patient ID"]}\n`;
    summary += `Name: ${patientIdent["Patient First Name"]} ${patientIdent["Patient Middle Name (Optional)"] ? patientIdent["Patient Middle Name (Optional)"] + ' ' : ''}${patientIdent["Patient Last Name"]}${patientIdent["Patient Suffix (e.g., Jr., III)"] ? ' ' + patientIdent["Patient Suffix (e.g., Jr., III)"] : ''}\n`;
    summary += `DOB: ${patientIdent["Date of Birth"]} (Gender: ${patientIdent["Gender"]})\n`;
    summary += `Patient Type: ${patientIdent["Patient Type"]}\n`;
    summary += `Contact: ${patientIdent["Contact Number"]}${patientIdent["Email Address"] ? ` (${patientIdent["Email Address"]})` : ''}\n`;
    summary += `Address: ${admissionData["Patient Demographics"]["Address Information"]["Street Address"]}, ${admissionData["Patient Demographics"]["Address Information"]["City"]}, ${admissionData["Patient Demographics"]["Address Information"]["State/Province"]} ${admissionData["Patient Demographics"]["Address Information"]["Postal Code"]}, ${admissionData["Patient Demographics"]["Address Information"]["Country"]}\n`;
    const emergencyContact = admissionData["Patient Demographics"]["Emergency Contact"];
    summary += `Emergency Contact: ${emergencyContact["Emergency Contact First Name"]} ${emergencyContact["Emergency Contact Last Name"]} (${emergencyContact["Relationship to Patient"]}) - ${emergencyContact["Emergency Contact Number"]}\n`;


    // Medical Information
    const reasonForAdmission = admissionData["Medical Information"]["Reason for Admission"];
    summary += `\n**Medical Information:**\n`;
    summary += `Admission Category: ${reasonForAdmission["Admission Category"]}\n`;

    if (billDetails.allAvailedServices && billDetails.allAvailedServices.length > 0) {
        summary += `Services Availed:\n`;
        billDetails.allAvailedServices.forEach(svc => {
            summary += `   - ${svc.name} (₱${svc.price.toLocaleString()})\n`;
        });
    } else {
        summary += `Services Availed: None\n`;
    }

    summary += `Admitting Doctor: ${reasonForAdmission["Admitting Doctor"]}\n`;
    summary += `Chief Complaint: ${reasonForAdmission["Chief Complaint"]}\n`;
    summary += `Onset Date/Time: ${reasonForAdmission["Onset Date"]}${reasonForAdmission["Onset Time"] ? ' ' + reasonForAdmission["Onset Time"] : ''}\n`;
    summary += `Referring Physician: ${reasonForAdmission["Referring Physician"] || 'N/A'}\n`;

    // Admission Details
    const admissionInfo = admissionData["Admission Details"]["Admission Information"];
    summary += `\n**Admission Details:**\n`;
    summary += `Admission Date/Time: ${admissionInfo["Admission Date/Time"]}\n`;
    summary += `Expected Length of Stay: ${admissionInfo["Expected Length of Stay (Days)"] || 'Not specified'} days\n`;
    summary += `Room Type Preference: ${admissionInfo["Room Type Preference"] || 'Not specified'}\n`;
    summary += `Consent for Treatment: ${admissionData["Admission Details"]["Consent Forms"]["Consent for Treatment (Y/N)"] ? 'Yes' : 'No'}\n`;
    summary += `Privacy Policy Acknowledged: ${admissionData["Admission Details"]["Consent Forms"]["Privacy Policy Acknowledged (Y/N)"] ? 'Yes' : 'No'}\n`;


    // Financials / Bill Summary
    summary += `\n--- Financial Summary ---\n`;
    summary += `Total Medical Services Charge: ₱${billDetails.serviceCost.toLocaleString()}\n`;
    summary += `Room Accommodation Charge: ₱${billDetails.roomCost.toLocaleString()}\n`;
    summary += `Subtotal: ₱${billDetails.totalCostBeforeDiscount.toLocaleString()}\n`;
    if (billDetails.discountAmount > 0) {
        summary += `Discount (${billDetails.patientType} 20%): -₱${billDetails.discountAmount.toLocaleString()}\n`;
    } else {
        summary += `Discount: ₱0 (No discount applied for ${billDetails.patientType})\n`;
    }
    summary += `**TOTAL AMOUNT DUE: ₱${billDetails.finalAmount.toLocaleString()}**\n`;

    // Payment Receipt
    if (paymentInfo) {
        summary += `\n--- Official Transaction Receipt ---\n`;
        summary += `Transaction ID: ${paymentInfo.transactionId}\n`;
        summary += `Date/Time of Payment: ${new Date().toLocaleString()}\n`;
        summary += `Payment Method: ${paymentInfo.method}\n`;
        if (paymentInfo.method === "Online Payment") {
            summary += `  Platform: ${paymentInfo.onlinePlatform}\n`;
            summary += `  Reference Number: ${paymentInfo.referenceNumber}\n`;
        } else if (paymentInfo.method === "Card Payment") {
            summary += `  Card Type: ${paymentInfo.cardType}\n`;
            summary += `  Card Number: ${paymentInfo.cardNumberMasked}\n`;
            summary += `  Expiry: ${paymentInfo.cardExpiry}\n`;
        }
        summary += `Amount Paid: ₱${billDetails.finalAmount.toLocaleString()}\n`;
        summary += `Payment Status: ${paymentInfo.status}\n`;
    } else {
        summary += `\n--- Payment Information ---\n`;
        summary += `Payment not completed.\n`;
    }

    summary += `\n--- Admission Status: COMPLETED ---\n`;
    alert(summary);
}

(function() {
    let currentAdmissionData = {};
    let currentBillDetails = {};


    function startAdmissionProcess() {
        let admitAnotherPatient = true;

        while (admitAnotherPatient) {
            currentAdmissionData = {}; // Reset for new patient
            currentBillDetails = {}; // Reset for new patient

            alert("Welcome to the JSM Health Solutions!\n\nThis system will guide you through the patient admission process.");

            try {
                // Process each main category of the admission form
                for (const categoryName in ADMISSION_PROCESS_CONFIG) {
                    currentAdmissionData[categoryName] = processCategory(categoryName, ADMISSION_PROCESS_CONFIG[categoryName]);
                }

                // Calculate the bill once all necessary data is collected
                currentBillDetails = calculateBill(currentAdmissionData);

                // Display the bill summary before payment
                displayPrePaymentBillSummary(currentBillDetails);

                // Process payment
                const paymentResult = processPayment(currentBillDetails.finalAmount);
                currentBillDetails.paymentInfo = paymentResult; // Attach payment info to bill details

                // Display final admission summary
                displayAdmissionSummary(currentAdmissionData, currentBillDetails, currentBillDetails.paymentInfo);

                alert("Admission process for this patient complete!");
                console.log("Full Patient Admission Data:", currentAdmissionData); // For debugging/logging

                // Ask if another patient needs to be admitted
                admitAnotherPatient = getValidatedInput("Do you want to admit another patient? (Y/N)", { type: "boolean", required: true });

            } catch (error) {
                if (error.message === "User cancelled operation.") {
                    alert("Patient admission process cancelled. Returning to main menu.");
                    admitAnotherPatient = false; // Exit the loop if user cancelled
                } else {
                    alert(`An unexpected error occurred: ${error.message}\nAdmission process terminated.`);
                    console.error(error); // Log the actual error for debugging
                    admitAnotherPatient = false; // Exit the loop on other errors
                }
            }
        }
        alert("Hospital Admission System closed. Goodbye!");
    }
    startAdmissionProcess();
})();