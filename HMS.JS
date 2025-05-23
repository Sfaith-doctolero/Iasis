// SECTION 1: Hospital Configuration Constants
// These constants define the static data for the hospital system.
// They are placed at the top as they are fundamental to the system's operation.

const HOSPITAL_SERVICES = {
    "Operations & Surgeries": [{ name: "Appendectomy", price: 50000 }, { name: "Hernia Repair", price: 65000 }, { name: "Cataract Surgery", price: 40000 }, { name: "Knee Replacement", price: 150000 }, { name: "Gallbladder Removal", price: 70000 }, { name: "Cardiac Bypass", price: 300000 }, { name: "Cesarean Section", price: 80000 }, { name: "Tonsillectomy", price: 30000 }, { name: "Fracture Repair", price: 55000 }, { name: "Exploratory Surgery", price: 60000 }, { name: "Biopsy", price: 25000 }],
    "Admissions for Specific Conditions": [{ name: "Pneumonia", price: 45000 }, { name: "Diabetes Management (Acute)", price: 35000 }, { name: "Asthma Exacerbation", price: 30000 }, { name: "Heart Attack (MI)", price: 120000 }, { name: "Stroke (CVA)", price: 100000 }, { name: "Kidney Failure (Acute)", price: 90000 }, { name: "Severe Infection", price: 50000 }, { name: "Dehydration", price: 20000 }, { name: "Gastroenteritis (Severe)", price: 28000 }, { name: "Hypertensive Crisis", price: 32000 }, { name: "Diabetic Ketoacidosis (DKA)", price: 40000 }],
    "Diagnostic Procedures": [{ name: "Endoscopy", price: 18000 }, { name: "Colonoscopy", price: 22000 }, { name: "MRI Scan", price: 15000 }, { name: "CT Scan", price: 10000 }, { name: "Angiography", price: 75000 }, { name: "Bronchoscopy", price: 30000 }],
    "Maternity Services": [{ name: "Labor and Delivery", price: 70000 }, { name: "Postpartum Care", price: 20000 }, { name: "High-Risk Pregnancy Monitoring", price: 40000 }],
    "Emergency Care": [{ name: "Trauma", price: 60000 }, { name: "Poisoning", price: 45000 }, { name: "Severe Allergic Reaction", price: 25000 }, { name: "Loss of Consciousness", price: 35000 }, { name: "Acute Abdominal Pain", price: 20000 }, { name: "Chest Pain (Non-Cardiac)", price: 28000 }],
    "Rehabilitation & Therapy": [{ name: "Physical Therapy (Post-Op)", price: 15000 }, { name: "Occupational Therapy (Post-Stroke)", price: 18000 }, { name: "Speech Therapy", price: 12000 }],
    "Other Admissions": [{ name: "Observation Stay", price: 10000 }, { name: "Transfusion", price: 8000 }, { name: "Chemotherapy Session (Inpatient)", price: 50000 }, { name: "Palliative Care Admission", price: 25000 }, { name: "Mental Health Crisis Stabilization", price: 30000 }]
};

const HOSPITAL_DEPARTMENTS = {
    "General Surgery": ["Appendectomy", "Hernia Repair", "Gallbladder Removal", "Tonsillectomy", "Biopsy", "Fracture Repair", "Exploratory Surgery"],
    "Ophthalmology": ["Cataract Surgery"], "Orthopedics": ["Knee Replacement"], "Cardiology": ["Cardiac Bypass", "Heart Attack (MI)", "Chest Pain (Non-Cardiac)"],
    "Obstetrics & Gynecology": ["Cesarean Section", "Labor and Delivery", "Postpartum Care", "High-Risk Pregnancy Monitoring"],
    "Internal Medicine": ["Pneumonia", "Diabetes Management (Acute)", "Asthma Exacerbation", "Kidney Failure (Acute)", "Severe Infection", "Dehydration", "Gastroenteritis (Severe)", "Hypertensive Crisis", "Diabetic Ketoacidosis (DKA)", "Observation Stay", "Transfusion", "Chemotherapy Session (Inpatient)", "Palliative Care Admission"],
    "Neurology": ["Stroke (CVA)", "Loss of Consciousness"], "Gastroenterology": ["Endoscopy", "Colonoscopy", "Acute Abdominal Pain"],
    "Radiology": ["MRI Scan", "CT Scan", "Angiography"], "Pulmonology": ["Bronchoscopy"],
    "Emergency Department": ["Trauma", "Poisoning", "Severe Allergic Reaction", "Loss of Consciousness", "Acute Abdominal Pain", "Chest Pain (Non-Cardiac)"],
    "Rehabilitation Medicine": ["Physical Therapy (Post-Op)", "Occupational Therapy (Post-Stroke)", "Speech Therapy"], "Psychiatry": ["Dr. Peter Sy"]
};

const HOSPITAL_DOCTORS = {
    "General Surgery": ["Dr. Alex Ramirez", "Dr. Sofia Castro"], "Ophthalmology": ["Dr. Gabriel Lim"], "Orthopedics": ["Dr. Ben Cruz"],
    "Cardiology": ["Dr. Clara Santos"], "Obstetrics & Gynecology": ["Dr. David Rivera", "Dr. Emily Garcia"],
    "Internal Medicine": ["Dr. Frank Tan", "Dr. Grace Lee", "Dr. Henry Dela Cruz"], "Neurology": ["Dr. Irene Salazar"],
    "Gastroenterology": ["Dr. Joseph Kim"], "Radiology": ["Dr. Karen Wong"], "Pulmonology": ["Dr. Liam Ocampo"],
    "Emergency Department": ["Dr. Mia Perez", "Dr. Noah Reyes"], "Rehabilitation Medicine": ["Dr. Olivia Chen"], "Psychiatry": ["Dr. Peter Sy"]
};

const HOSPITAL_ROOMS = {
    "Private": { description: "Single-occupancy with private bath, TV, visitor seating. Maximum privacy.", price: 7000 },
    "Semi-Private": { description: "Double-occupancy with shared bath. Balance of privacy and cost.", price: 3500 },
    "Ward": { description: "Multi-occupancy with basic amenities. Most budget-friendly.", price: 1500 }
};

const REFERRING_PHYSICIANS = ["Dr. Maria Lopez (Family Medicine)", "Dr. John Smith (General Practice)", "Dr. Sarah Chen (Pediatrics)", "Dr. Robert Davis (Internal Medicine)", "Dr. Alice Brown (ER Physician)"];
const IMMUNIZATION_STATUSES = ["Fully Vaccinated (up-to-date)", "Partially Vaccinated", "Not Vaccinated", "Unknown"];
const ALCOHOL_CONSUMPTION_LEVELS = ["None", "Occasional (social drinking)", "Moderate (1-2 drinks/day)", "Heavy (3+ drinks/day)", "Former Drinker"];
const ONLINE_PAYMENT_OPTIONS = ["GCash", "PayMaya (Maya)", "Bank Transfer (InstaPay/PESONet)", "Other E-Wallet"];
const CARD_TYPE_OPTIONS = ["Visa", "Mastercard", "JCB", "American Express"];

// Defines the structure and validation rules for all input fields.
const ADMISSION_PROCESS_CONFIG = {
    "Patient Demographics": {
        "Identification": {
            "Patient ID": { type: "generated", label: "Unique Patient ID" },
            "Patient Last Name": { type: "text", required: true, validation: (input) => /^[A-Za-z\s.'-]+$/.test(input.trim()) && input.trim().length > 0, errorMessage: "Enter valid last name (letters, spaces, hyphens, apostrophes, periods only)." },
            "Patient First Name": { type: "text", required: true, validation: (input) => /^[A-Za-z\s.'-]+$/.test(input.trim()) && input.trim().length > 0, errorMessage: "Enter valid first name." },
            "Patient Middle Name (Optional)": { type: "text", required: false, validation: (input) => input === "" || /^[A-Za-z\s.'-]+$/.test(input.trim()), errorMessage: "Enter valid middle name or leave blank." },
            "Patient Suffix (e.g., Jr., III)": { type: "text", required: false, validation: (input) => input === "" || /^[A-Za-z\s.'-]+$/.test(input.trim()), errorMessage: "Enter valid suffix or leave blank." },
            "Date of Birth": { type: "date", required: true, validation: (input) => { if (!/^\d{4}-\d{2}-\d{2}$/.test(input)) return false; const birthDate = new Date(input); const today = new Date(); return !isNaN(birthDate.getTime()) && birthDate <= today; }, errorMessage: "Enter valid YYYY-MM-DD date, not in the future." },
            "Gender": { type: "select", options: ["Male", "Female"], required: true },
            "Patient Type": { type: "select", options: ["Regular", "Senior Citizen", "PWD"], required: true, errorMessage: "Select patient type for discount eligibility." },
            "Blood Type": { type: "select", options: ["A+", "A-", "B+", "B-", "AB+", "AB-", "O+", "O-", "Unknown"], required: true, errorMessage: "Select valid blood type." },
            "Marital Status": { type: "select", options: ["Single", "Married", "Divorced", "Widowed", "Separated"], required: true, errorMessage: "Select valid marital status." },
            "Contact Number": { type: "tel", required: true, validation: (input) => /^\d{10,}$/.test(input), errorMessage: "Enter valid 10-digit or more phone number." },
            "Email Address": { type: "email", required: false, validation: (input) => input === "" || /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(input), errorMessage: "Enter valid email address or leave blank." },
            "Nationality": { type: "text", required: true, validation: (input) => input.trim().length > 0, errorMessage: "Nationality can't be empty." },
            "Religion": { type: "text", required: false }
        },
        "Address Information": {
            "Street Address": { type: "text", required: true, validation: (input) => input.trim().length > 0, errorMessage: "Street address can't be empty." },
            "City": { type: "text", required: true, validation: (input) => input.trim().length > 0, errorMessage: "City can't be empty." },
            "State/Province": { type: "text", required: true, validation: (input) => input.trim().length > 0, errorMessage: "State/Province can't be empty." },
            "Postal Code": { type: "text", required: true, validation: (input) => /^\d{4,}$/.test(input), errorMessage: "Enter valid postal code (at least 4 digits)." },
            "Country": { type: "text", required: true, validation: (input) => input.trim().length > 0, errorMessage: "Country can't be empty." }
        },
        "Emergency Contact": {
            "Emergency Contact Last Name": { type: "text", required: true, validation: (input) => /^[A-Za-z\s.'-]+$/.test(input.trim()) && input.trim().length > 0, errorMessage: "Enter valid last name." },
            "Emergency Contact First Name": { type: "text", required: true, validation: (input) => /^[A-Za-z\s.'-]+$/.test(input.trim()) && input.trim().length > 0, errorMessage: "Enter valid first name." },
            "Emergency Contact Middle Name (Optional)": { type: "text", required: false, validation: (input) => input === "" || /^[A-Za-z\s.'-]+$/.test(input.trim()), errorMessage: "Enter valid middle name or leave blank." },
            "Emergency Contact Suffix (Optional)": { type: "text", required: false, validation: (input) => input === "" || /^[A-Za-z\s.'-]+$/.test(input.trim()), errorMessage: "Enter valid suffix or leave blank." },
            "Relationship to Patient": { type: "text", required: true, validation: (input) => input.trim().length > 0, errorMessage: "Relationship can't be empty." },
            "Emergency Contact Number": { type: "tel", required: true, validation: (input) => /^\d{10,}$/.test(input), errorMessage: "Enter valid 10-digit or more phone number." }
        }
    },
    "Medical Information": {
        "Reason for Admission": {
            "Admission Category": { type: "select", options: Object.keys(HOSPITAL_SERVICES), required: true, customProcessor: "getAdmissionServiceDetails" },
            // Specific Service/Condition, Admitting Doctor, Chief Complaint, Onset Date, Onset Time, Referring Physician
            // are handled by the customProcessor, so they are not listed here to avoid double prompting
            "Chief Complaint": { type: "textarea", required: true, validation: (input) => input.trim().length > 0, errorMessage: "Chief complaint can't be empty. Please describe the patient's primary complaint." },
            "Onset Date": { type: "date-clear", required: true, validation: (input) => /^\d{4}-\d{2}-\d{2}$/.test(input), errorMessage: "Please enter date in YYYY-MM-DD format." },
            "Onset Time": { type: "time-clear", required: false, validation: (input) => input === "" || /^([01]\d|2[0-3]):([0-5]\d)$/.test(input), errorMessage: "Please enter time in HH:MM format (24-hour)." },
            "Referring Physician": { type: "select", options: REFERRING_PHYSICIANS, required: false },
        },
        "Medical History": {
            "Past Medical Conditions": { type: "multiselect-with-other", options: ["Diabetes", "Hypertension", "Asthma", "Heart Disease", "Kidney Disease", "Cancer"], required: false, validation: (input) => true },
            "Past Surgeries": { type: "textarea", required: false }, "Allergies": { type: "textarea", required: false },
            "Current Medications": { type: "textarea", required: false }, "Immunization Status": { type: "select", options: IMMUNIZATION_STATUSES, required: false },
        },
        "Social History": {
            "Smoking Status": { type: "select", options: ["Never Smoker", "Former Smoker", "Current Smoker"], required: false },
            "Alcohol Consumption": { type: "select", options: ALCOHOL_CONSUMPTION_LEVELS, required: false },
            "Drug Use": { type: "text", required: false }, "Occupation": { type: "text", required: false }
        }
    },
    "Admission Details": {
        "Admission Information": {
            "Admission Date/Time": { type: "datetime-custom", required: true, validation: (input) => /^\d{4}-\d{2}-\d{2} ([01]\d|2[0-3]):([0-5]\d)$/.test(input), errorMessage: "Please enter Admission Date/Time in YYYY-MM-DD HH:MM format (e.g., 2025-05-23 14:30)." },
            "Expected Length of Stay (Days)": { type: "number", required: false, validation: (input) => input === "" || (Number(input) > 0 && Number.isInteger(Number(input))), errorMessage: "Please enter a valid whole number of days." },
            "Room Type Preference": { type: "select", options: Object.keys(HOSPITAL_ROOMS), required: false }
        },
        "Consent Forms": { "Consent for Treatment (Y/N)": { type: "boolean", required: true }, "Privacy Policy Acknowledged (Y/N)": { type: "boolean", required: true } }
    }
};


// SECTION 2: Helper Functions
// These are utility functions that perform specific, often repeated tasks.

/** Generates a unique patient ID. */
function generatePatientID() {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789'; let result = ''; const length = 6;
    for (let i = 0; i < length; i++) { result += characters.charAt(Math.floor(Math.random() * characters.length)); }
    return `PID-${result}`;
}

/** Generates a unique transaction ID. */
function generateTransactionID() {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789'; let result = 'TRN-'; const length = 8;
    for (let i = 0; i < length; i++) { result += characters.charAt(Math.floor(Math.random() * characters.length)); }
    return result;
}

/** Normalizes user input (trims whitespace, converts to lowercase) for consistent comparison. */
function normalizeInput(input) { return input.trim().toLowerCase(); }

/**
 * Prompts the user for input and validates it based on `fieldConfig`.
 * Keeps prompting until valid input is received or user cancels.
 */
function getValidatedInput(message, fieldConfig) {
    let input; let isValid = false;
    while (!isValid) {
        let promptMessage = message;
        if (fieldConfig.type === "select" || fieldConfig.type === "select-dynamic") {
            promptMessage += "\n" + fieldConfig.options.map((option, index) => `${index + 1}. ${option}`).join('\n') + `\nEnter the number:`;
        } else if (fieldConfig.type === "multiselect") {
            promptMessage += ` (Enter comma-separated values from: ${fieldConfig.options.join(', ')})`;
        } else if (fieldConfig.type === "multiselect-with-other") {
            promptMessage += "\n" + fieldConfig.options.map((option, index) => `${index + 1}. ${option}`).join('\n');
            promptMessage += `\n${fieldConfig.options.length + 1}. Other\n`;
            promptMessage += `Enter number(s) separated by commas (e.g., 1,3,4):`;
        } else if (fieldConfig.type === "boolean") {
            promptMessage += ` (Y/N)`;
        } else if (fieldConfig.type.includes("date")) {
            promptMessage += ` (Format: YYYY-MM-DD)`;
        } else if (fieldConfig.type.includes("time")) {
            promptMessage += ` (Format: HH:MM, e.g., 14:30)`;
        } else if (fieldConfig.type === "datetime-custom") {
            promptMessage += ` (Format: YYYY-MM-DD HH:MM, e.g., 2025-05-23 14:30)`;
        }

        input = prompt(promptMessage);
        if (input === null) { alert("Operation cancelled by user."); throw new Error("User cancelled operation."); }
        if (fieldConfig.required && input.trim() === '') { alert("This field is required. Please provide a value."); continue; }
        if (!fieldConfig.required && input.trim() === '') { isValid = true; input = ''; continue; }

        if (fieldConfig.type === "select" || fieldConfig.type === "select-dynamic") {
            const parsedInput = parseInt(input);
            if (!isNaN(parsedInput) && parsedInput >= 1 && parsedInput <= fieldConfig.options.length) { input = fieldConfig.options[parsedInput - 1]; isValid = true; }
            else { alert(`Invalid input. Please enter a number between 1 and ${fieldConfig.options.length}.`); }
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
            input = chosenOptions; isValid = true;
        } else if (fieldConfig.type === "boolean") {
            const normalizedInput = normalizeInput(input);
            if (normalizedInput === 'y') { input = true; isValid = true; }
            else if (normalizedInput === 'n') { input = false; isValid = true; }
            else { alert("Invalid input. Please enter 'Y' for Yes or 'N' for No."); }
        } else if (fieldConfig.type === "number") {
            const num = Number(input);
            if (!isNaN(num) && (fieldConfig.validation ? fieldConfig.validation(input) : true)) {
                input = num;
                isValid = true;
            } else {
                alert(fieldConfig.errorMessage || "Invalid number input.");
            }
        } else if (fieldConfig.validation) {
            if (fieldConfig.validation(input)) { isValid = true; }
            else { alert(fieldConfig.errorMessage || "Invalid input provided."); }
        } else { isValid = true; }
    }
    return input;
}

/**
 * Handles the custom logic for admission service and doctor selection.
 */
function getAdmissionServiceDetails(subcategoryData) {
    const categoryConfig = ADMISSION_PROCESS_CONFIG["Medical Information"]["Reason for Admission"]["Admission Category"];
    const admissionCategory = getValidatedInput(`Select primary reason for admission category:`, categoryConfig);
    subcategoryData["Admission Category"] = admissionCategory;

    const specificServiceOptions = HOSPITAL_SERVICES[admissionCategory] || [];
    if (specificServiceOptions.length === 0) {
        alert("No services found for this category. Enter manually.");
        subcategoryData["Specific Service/Condition"] = { name: getValidatedInput("Enter specific service/condition:", { type: "text", required: true, validation: (input) => input.trim().length > 0, errorMessage: "Service/condition cannot be empty." }), price: 0 };
    } else {
        const serviceNames = specificServiceOptions.map(s => s.name);
        const selectedServiceName = getValidatedInput(`Select specific service or condition (${admissionCategory}):`, { type: "select-dynamic", options: serviceNames, required: true, validation: (input) => serviceNames.some(opt => normalizeInput(opt) === normalizeInput(input)), errorMessage: "Select valid service/condition." });
        const selectedService = specificServiceOptions.find(s => normalizeInput(s.name) === normalizeInput(selectedServiceName));
        subcategoryData["Specific Service/Condition"] = selectedService || { name: selectedServiceName, price: 0 };
    }

    let potentialDepartments = []; let potentialDoctors = [];
    const serviceName = subcategoryData["Specific Service/Condition"].name;
    for (const dept in HOSPITAL_DEPARTMENTS) { if (HOSPITAL_DEPARTMENTS[dept].includes(serviceName)) potentialDepartments.push(dept); }
    if (potentialDepartments.length > 0) {
        potentialDepartments.forEach(dept => { if (HOSPITAL_DOCTORS[dept]) potentialDoctors = potentialDoctors.concat(HOSPITAL_DOCTORS[dept]); });
        potentialDoctors = [...new Set(potentialDoctors)].sort();
    } else { potentialDoctors = Object.values(HOSPITAL_DOCTORS).flat().sort(); }

    const admittingDoctorConfig = { type: "select-dynamic", options: potentialDoctors, required: true, validation: (input) => potentialDoctors.some(opt => normalizeInput(opt) === normalizeInput(input)), errorMessage: "Select valid Admitting Doctor." };
    if (potentialDoctors.length === 0) {
        alert("No doctors found. Enter manually.");
        admittingDoctorConfig.type = "text"; admittingDoctorConfig.validation = (input) => input.trim().length > 0; admittingDoctorConfig.errorMessage = "Admitting doctor cannot be empty.";
    }
    subcategoryData["Admitting Doctor"] = getValidatedInput("Select Admitting Doctor:", admittingDoctorConfig);

    // ************* FIX: Handle the fields directly here **************
    // Prompt for Chief Complaint, Onset Date, Onset Time, Referring Physician once.
    // They will be stored in subcategoryData, preventing `processSubcategory` from re-prompting.
    const medicalReasonFields = ADMISSION_PROCESS_CONFIG["Medical Information"]["Reason for Admission"];
    subcategoryData["Chief Complaint"] = getValidatedInput(`Please enter Chief Complaint:`, medicalReasonFields["Chief Complaint"]);
    subcategoryData["Onset Date"] = getValidatedInput(`Please enter Onset Date:`, medicalReasonFields["Onset Date"]);
    subcategoryData["Onset Time"] = getValidatedInput(`Please enter Onset Time:`, medicalReasonFields["Onset Time"]);
    subcategoryData["Referring Physician"] = getValidatedInput(`Please enter Referring Physician:`, medicalReasonFields["Referring Physician"]);
}


/**
 * Processes all fields within a single subcategory.
 * @param {string} categoryName - The name of the main category.
 * @param {string} subcategoryName - The name of the subcategory.
 * @param {object} fields - An object containing field configurations for this subcategory.
 * @returns {object} - An object with collected data for the subcategory.
 */
function processSubcategory(categoryName, subcategoryName, fields) { // Added categoryName argument
    alert(`\n--- Collecting ${subcategoryName} Information ---`);
    const subcategoryData = {};

    for (const fieldName in fields) {
        const fieldConfig = fields[fieldName];

        // Handle generated fields (like Patient ID)
        if (fieldName === "Patient ID" && fieldConfig.type === "generated") {
            subcategoryData[fieldName] = generatePatientID();
            alert(`Generated ${fieldConfig.label}: ${subcategoryData[fieldName]}`);
            continue; // Skip to the next field in this loop iteration
        }

        // Handle custom processors (like Admission Category)
        if (fieldConfig.customProcessor) {
            if (fieldConfig.customProcessor === "getAdmissionServiceDetails") {
                getAdmissionServiceDetails(subcategoryData);
            }
            // After custom processor runs, it's assumed it filled the related fields
            // so we skip the rest of the fields in this iteration if they were
            // part of the custom processing group.
            // We now rely on `getAdmissionServiceDetails` to set the fields.
            continue; // Skip to the next field in this loop iteration
        }

        // Only prompt for fields that haven't been handled by a custom processor
        // or generated, i.e., if the field is not already in subcategoryData.
        if (subcategoryData[fieldName] === undefined) {
            const promptMessage = `Please enter ${fieldName}:`;
            subcategoryData[fieldName] = getValidatedInput(promptMessage, fieldConfig);
        }
    }

    return subcategoryData;
}

/**
 * Processes all subcategories within a single main category.
 * @param {string} categoryName - The name of the main category.
 * @param {object} subcategories - An object containing subcategory configurations for this category.
 * @returns {object} - An object with collected data for the category.
 */
function processCategory(categoryName, subcategories) {
    alert(`\n=== Starting ${categoryName} Section ===`);
    const categoryData = {};
    for (const subcategoryName in subcategories) {
        categoryData[subcategoryName] = processSubcategory(categoryName, subcategoryName, subcategories[subcategoryName]);
    }
    return categoryData;
}

/**
 * Calculates the total bill, applies discounts, and returns pricing details.
 * @param {object} admissionData - The complete admission data.
 * @returns {object} - An object containing cost breakdown and final amount.
 */
function calculateBill(admissionData) {
    let serviceCost = 0;
    let roomCost = 0;
    let totalCostBeforeDiscount = 0;
    let discountAmount = 0;
    const discountRate = 0.20; // 20%

    const specificService = admissionData["Medical Information"]["Reason for Admission"]["Specific Service/Condition"];
    if (specificService && specificService.price !== undefined) {
        serviceCost = specificService.price;
    }

    const roomType = admissionData["Admission Details"]["Admission Information"]["Room Type Preference"];
    // Default to 1 day if expected length of stay is not specified or is 0
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
        serviceCost,
        roomCost,
        totalCostBeforeDiscount,
        discountAmount,
        finalAmount,
        patientType,
        roomDetails: HOSPITAL_ROOMS[roomType] || null, // Include room details for summary
        roomType: roomType,
        expectedLengthOfStay: expectedLengthOfStay,
        specificService: specificService // Include service details for summary
    };
}

/**
 * Displays a detailed, itemized bill summary before payment.
 * @param {object} billDetails - The calculated bill details.
 */
function displayPrePaymentBillSummary(billDetails) {
    let billSummary = "\n--- Detailed Bill Summary (Before Payment) ---\n";
    billSummary += `**1. Medical Service Charge:**\n`;
    if (billDetails.specificService) {
        billSummary += `  - Chosen Service/Condition: **${billDetails.specificService.name || 'N/A'}**\n`;
        billSummary += `  - Service Cost: **₱${billDetails.serviceCost.toLocaleString()}**\n`;
        billSummary += `  - Description: This charge covers professional fees (e.g., attending physician, specialists), use of specialized medical equipment, initial medical supplies, and facility usage directly related to your primary service or condition. This is typically a one-time charge for the primary service.\n`;
    } else {
        billSummary += `  - Chosen Service/Condition: Not selected/provided\n`;
        billSummary += `  - Service Cost: ₱0\n`;
    }

    billSummary += `\n**2. Room Accommodation Charge:**\n`;
    if (billDetails.roomType && billDetails.roomDetails) {
        billSummary += `  - Room Type: **${billDetails.roomType}**\n`;
        billSummary += `  - Room Description: ${billDetails.roomDetails.description}\n`;
        billSummary += `  - Daily Room Rate: ₱${billDetails.roomDetails.price.toLocaleString()}\n`;
        billSummary += `  - Expected Length of Stay: **${billDetails.expectedLengthOfStay} Day(s)**\n`;
        billSummary += `  - Calculation: ₱${billDetails.roomDetails.price.toLocaleString()} (Daily Rate) x ${billDetails.expectedLengthOfStay} Day(s) = **₱${billDetails.roomCost.toLocaleString()}**\n`;
    } else {
        billSummary += `  - Room Type: Not selected/provided\n`;
        billSummary += `  - Room Cost: ₱0\n`;
    }

    billSummary += `\n**Subtotal (Medical Service + Room): ₱${billDetails.totalCostBeforeDiscount.toLocaleString()}**\n`;

    if (billDetails.discountAmount > 0) {
        billSummary += `\n**3. Applied Discount:**\n`;
        billSummary += `  - Patient Type: **${billDetails.patientType}**\n`;
        billSummary += `  - Discount Rate: 20%\n`;
        billSummary += `  - Discount Amount: -**₱${billDetails.discountAmount.toLocaleString()}**\n`;
        billSummary += `  - Note: This 20% discount is mandated for ${billDetails.patientType} on the total bill for services and room accommodation, in accordance with national laws.\n`;
    } else {
        billSummary += `\n**3. No Discount Applied:**\n`;
        billSummary += `  - Patient Type: **${billDetails.patientType}**\n`;
        billSummary += `  - Discount Amount: ₱0\n`;
        billSummary += `  - Note: Discounts are applicable only for Senior Citizens and Persons With Disabilities (PWDs).\n`;
    }

    billSummary += `\n**TOTAL AMOUNT DUE (After Discount): ₱${billDetails.finalAmount.toLocaleString()}**\n`;
    billSummary += `\nPlease review these charges before proceeding to payment.\n`;

    alert(billSummary);
}

/**
 * Handles the payment process, prompting the user for payment method and details.
 * @param {number} amountDue - The total amount the patient needs to pay.
 * @returns {object} - An object containing payment method and a transaction ID, or throws an error if cancelled.
 */
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

    switch (paymentMethod) {
        case "Online Payment":
            const onlinePaymentConfig = {
                type: "select",
                options: ONLINE_PAYMENT_OPTIONS,
                required: true
            };
            const onlineOption = getValidatedInput("Select online payment platform:", onlinePaymentConfig);
            alert(`Proceeding with ${onlineOption}. Please complete the payment of ₱${amountDue.toLocaleString()} through your ${onlineOption} app/website.
(Simulating successful payment...)`);
            transactionDetails.onlinePlatform = onlineOption;
            break;
        case "Card Payment":
            const cardType = getValidatedInput("Enter card type:", { type: "select", options: CARD_TYPE_OPTIONS, required: true });
            const cardNumber = getValidatedInput("Enter card number (16 digits):", {
                type: "text",
                required: true,
                validation: (input) => /^\d{16}$/.test(input.replace(/\s/g, '')),
                errorMessage: "Please enter a valid 16-digit card number."
            });
            const expiryDate = getValidatedInput("Enter expiry date (MM/YY):", {
                type: "text",
                required: true,
                validation: (input) => {
                    const parts = input.split('/');
                    if (parts.length !== 2) return false;
                    const month = parseInt(parts[0], 10);
                    const year = parseInt(parts[1], 10);

                    if (isNaN(month) || isNaN(year) || month < 1 || month > 12) return false;

                    const currentYearLastTwoDigits = new Date().getFullYear() % 100;
                    const currentMonth = new Date().getMonth() + 1; // getMonth() is 0-indexed

                    // Check if year is in the past
                    if (year < currentYearLastTwoDigits) return false;
                    // Check if same year but month is in the past
                    if (year === currentYearLastTwoDigits && month < currentMonth) return false;

                    return true;
                },
                errorMessage: "Please enter a valid future expiry date in MM/YY format (e.g., 12/28)."
            });
            const cvv = getValidatedInput("Enter CVV (3 or 4 digits):", {
                type: "text",
                required: true,
                validation: (input) => /^\d{3,4}$/.test(input),
                errorMessage: "Please enter a valid 3 or 4 digit CVV."
            });
            alert(`Processing ₱${amountDue.toLocaleString()} via ${cardType} ending in ${cardNumber.slice(-4)}.
(Simulating successful payment...)`);
            transactionDetails.cardType = cardType;
            // Store last 4 digits for receipt, if necessary
            transactionDetails.cardNumberLast4 = cardNumber.slice(-4);
            break;
        case "Cash":
            alert(`Please pay ₱${amountDue.toLocaleString()} at the hospital cashier.
(Simulating cash payment received...)`);
            break;
    }

    alert(`Payment of ₱${amountDue.toLocaleString()} successful!`);
    return transactionDetails;
}


/**
 * Displays a detailed summary of the collected admission data, including costs, payment, and final status.
 * @param {object} currentAdmissionData - The complete patient admission data.
 * @param {object} currentBillDetails - The calculated bill details.
 * @param {object} paymentInfo - Information about the successful payment.
 */
function displayAdmissionSummary(currentAdmissionData, currentBillDetails, paymentInfo = null) {
    let summary = "\n--- Admission Summary ---\n";

    const patientFirstName = currentAdmissionData["Patient Demographics"]["Identification"]["Patient First Name"] || 'N/A';
    const patientMiddleName = currentAdmissionData["Patient Demographics"]["Identification"]["Patient Middle Name (Optional)"] || '';
    const patientLastName = currentAdmissionData["Patient Demographics"]["Identification"]["Patient Last Name"] || 'N/A';
    const patientSuffix = currentAdmissionData["Patient Demographics"]["Identification"]["Patient Suffix (e.g., Jr., III)"] || '';
    const fullPatientName = `${patientLastName}, ${patientFirstName}${patientMiddleName ? ' ' + patientMiddleName : ''}${patientSuffix ? ' ' + patientSuffix : ''}`;

    summary += `\n** PATIENT: ${fullPatientName} (ID: ${currentAdmissionData["Patient Demographics"]["Identification"]["Patient ID"]}) **\n`;

    // Display relevant sections from collected data
    const sectionsToDisplay = [
        "Patient Demographics",
        "Medical Information",
        "Admission Details"
    ];

    for (const categoryName of sectionsToDisplay) {
        if (currentAdmissionData[categoryName]) {
            summary += `\n** ${categoryName} **\n`;
            const categoryData = currentAdmissionData[categoryName];
            for (const subcategoryName in categoryData) {
                summary += `  * ${subcategoryName}:\n`;
                const subcategoryData = categoryData[subcategoryName];
                for (const fieldName in subcategoryData) {
                    let fieldValue = subcategoryData[fieldName];
                    if (typeof fieldValue === 'object' && fieldValue !== null && fieldValue.name) {
                        fieldValue = `${fieldValue.name} (₱${fieldValue.price ? fieldValue.price.toLocaleString() : 'N/A'})`;
                    } else if (Array.isArray(fieldValue)) {
                        fieldValue = fieldValue.length > 0 ? fieldValue.join(', ') : 'None Provided';
                    } else if (typeof fieldValue === 'boolean') {
                        fieldValue = fieldValue ? 'Yes' : 'No';
                    } else if (fieldValue === null || fieldValue === undefined || String(fieldValue).trim() === '') {
                        fieldValue = 'Not provided';
                    }
                    summary += `    - ${fieldName}: ${fieldValue}\n`;
                }
            }
        }
    }

    // --- Financial Bill Description (Detailed Itemized Breakdown) ---
    summary += `\n--- Financial Bill Description ---\n`;
    const specificService = currentAdmissionData["Medical Information"]["Reason for Admission"]["Specific Service/Condition"];
    summary += `**1. Medical Service Charge:**\n`;
    if (specificService) {
        summary += `  - Chosen Service/Condition: **${specificService.name || 'N/A'}**\n`;
        summary += `  - Service Cost: **₱${currentBillDetails.serviceCost.toLocaleString()}**\n`;
        summary += `  - Description: This charge covers professional fees (e.g., attending physician, specialists), use of specialized medical equipment, initial medical supplies, and facility usage directly related to your primary service or condition. This is a one-time charge for the primary service.\n`;
    } else {
        summary += `  - Chosen Service/Condition: Not selected/provided\n`;
        summary += `  - Service Cost: ₱0\n`;
    }

    summary += `\n**2. Room Accommodation Charge:**\n`;
    const roomType = currentAdmissionData["Admission Details"]["Admission Information"]["Room Type Preference"];
    const expectedLengthOfStay = currentAdmissionData["Admission Details"]["Admission Information"]["Expected Length of Stay (Days)"];
    if (roomType && HOSPITAL_ROOMS[roomType] && expectedLengthOfStay > 0) {
        summary += `  - Room Type: **${roomType}**\n`;
        summary += `  - Room Description: ${HOSPITAL_ROOMS[roomType].description}\n`;
        summary += `  - Daily Room Rate: ₱${HOSPITAL_ROOMS[roomType].price.toLocaleString()}\n`;
        summary += `  - Expected Length of Stay: **${expectedLengthOfStay} Day(s)**\n`;
        summary += `  - Calculation: ₱${HOSPITAL_ROOMS[roomType].price.toLocaleString()} (Daily Rate) x ${expectedLengthOfStay} Day(s) = **₱${currentBillDetails.roomCost.toLocaleString()}**\n`;
    } else if (roomType && HOSPITAL_ROOMS[roomType]) {
           summary += `  - Room Type: **${roomType}**\n`;
           summary += `  - Room Description: ${HOSPITAL_ROOMS[roomType].description}\n`;
           summary += `  - Daily Room Rate: ₱${HOSPITAL_ROOMS[roomType].price.toLocaleString()}\n`;
           summary += `  - Expected Length of Stay: Not specified. (Assuming 1 day for initial cost calculation)\n`;
           summary += `  - Room Cost: ₱${HOSPITAL_ROOMS[roomType].price.toLocaleString()} (Estimated for 1 day)\n`;
    }
    else {
        summary += `  - Room Type: Not selected/provided\n`;
        summary += `  - Room Cost: ₱0\n`;
    }

    summary += `\n**Subtotal (Medical Service + Room): ₱${currentBillDetails.totalCostBeforeDiscount.toLocaleString()}**\n`;

    if (currentBillDetails.discountAmount > 0) {
        summary += `\n**3. Applied Discount:**\n`;
        summary += `  - Patient Type: **${currentBillDetails.patientType}**\n`;
        summary += `  - Discount Rate: 20%\n`;
        summary += `  - Discount Amount: -**₱${currentBillDetails.discountAmount.toLocaleString()}**\n`;
        summary += `  - Note: This 20% discount is mandated for ${currentBillDetails.patientType} on the total bill for services and room accommodation, in accordance with national laws.\n`;
    } else {
        summary += `\n**3. No Discount Applied:**\n`;
        summary += `  - Patient Type: **${currentBillDetails.patientType}**\n`;
        summary += `  - Discount Amount: ₱0\n`;
        summary += `  - Note: Discounts are applicable only for Senior Citizens and Persons With Disabilities (PWDs).\n`;
    }

    summary += `\n**TOTAL AMOUNT DUE (After Discount): ₱${currentBillDetails.finalAmount.toLocaleString()}**\n`;


    // --- Transaction Receipt ---
    if (paymentInfo) {
        summary += `\n--- Official Transaction Receipt ---\n`;
        summary += `Transaction ID: **${paymentInfo.transactionId}**\n`;
        summary += `Date/Time of Payment: ${new Date().toLocaleString()}\n`;
        summary += `Payment Method: **${paymentInfo.method}**\n`;
        if (paymentInfo.onlinePlatform) {
            summary += `  - Platform: ${paymentInfo.onlinePlatform}\n`;
        }
        if (paymentInfo.cardType) {
            summary += `  - Card Type: ${paymentInfo.cardType}\n`;
            summary += `  - Card Number (last 4 digits): **** **** **** ${paymentInfo.cardNumberLast4 || 'N/A'}\n`;
        }
        summary += `**Amount Paid: ₱${currentBillDetails.finalAmount.toLocaleString()}**\n`;
        summary += `Status: **${paymentInfo.status}**\n`;
        summary += `Thank you for your payment. Your admission is now confirmed.\n`;
    }


    summary += `\n--- Admission Status ---\n`;
    summary += `Admission Status: **Complete** (Full payment received)\n`;
    summary += `Room Scheduled: **Yes** (Room assigned after payment)\n`;


    alert(summary);
}

// SECTION 3: Main Application Logic (Using an IIFE for encapsulation)
// This Immediately Invoked Function Expression (IIFE) creates a private scope
// for the application's main state and logic, preventing global pollution.
(function() {
    let currentAdmissionData = {}; // Encapsulated state for the current patient.
    let currentBillDetails = {};   // Encapsulated state for the current bill.

    /** The main function that orchestrates the entire hospital admission process. */
    function startAdmissionProcess() {
        let admitAnotherPatient = true;

        while (admitAnotherPatient) {
            currentAdmissionData = {}; // Reset for new patient
            currentBillDetails = {};   // Reset for new bill

            alert("Welcome to the Hospital Admission System!\n\nKindly follow this guide for collection of necessary Patient Information");

            try {
                // Collect patient data
                for (const categoryName in ADMISSION_PROCESS_CONFIG) {
                    currentAdmissionData[categoryName] = processCategory(categoryName, ADMISSION_PROCESS_CONFIG[categoryName]);
                }

                currentBillDetails = calculateBill(currentAdmissionData);
                alert(`All patient data collected.`);

                displayPrePaymentBillSummary(currentBillDetails); // Show breakdown BEFORE payment

                const paymentResult = processPayment(currentBillDetails.finalAmount);
                currentBillDetails.paymentInfo = paymentResult;

                displayAdmissionSummary(currentAdmissionData, currentBillDetails, currentBillDetails.paymentInfo); // Pass current data

                alert("Admission process for this patient complete!");
                console.log("Full Patient Admission Data:", currentAdmissionData);

                admitAnotherPatient = getValidatedInput("Do you want to admit another patient?(Y/N)", { type: "boolean", required: true });

            } catch (error) {
                if (error.message === "User cancelled operation.") {
                    console.warn("Admission process was cancelled by the user, admission was NOT finalized.");
                    alert("Admission process cancelled. The current patient's admission was NOT finalized.");
                    admitAnotherPatient = false;
                } else {
                    console.error("An unexpected error occurred during admission:", error);
                    alert("An error occurred during admission. Please check the console for details.");
                    admitAnotherPatient = false; // Exit the main loop on unexpected error
                }
            }
        }
        alert("Hospital Admission System closed. Goodbye!");
    }

    // SECTION 4: Execution Trigger
    // This line starts the entire application when the script loads.
    startAdmissionProcess();
})(); // The `()` immediately invokes the function.