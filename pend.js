(function iasisHospitalSystem() {
    const currentYear = new Date().getFullYear(); // Get the current year

    while (true) {
        const admitAnswer = prompt("Would you like to admit a patient? (yes/no)")?.toLowerCase();
        if (admitAnswer === "no") {
            alert("Thank you for visiting Iasis Hospital. Goodbye!");
            break;
        }
        if (admitAnswer !== "yes") {
            alert("Please answer only with 'yes' or 'no'.");
            continue;
        }

        alert("🏥 Welcome to Iasis Hospital!");

        // Collect patient info with improved validation and address breakdown
        const patientInfo = collectPatientInfo();
        const formattedName = formatName(patientInfo);
        const patientID = generatePatientID(formattedName);

        alert(`👤 Patient Registered\nName: ${formattedName}\nPatient ID: ${patientID}`);

        // Available services with scheduling information
        const availableServices = {
            "Laboratory": {
                options: ["Blood Test", "Urinalysis", "X-ray", "MRI", "CT Scan"],
                schedule: {
                    "Blood Test": {
                        [new Date(currentYear, 4, 22).toLocaleDateString()]: ["08:00", "09:00", "10:00", "14:00", "15:00"],
                        [new Date(currentYear, 4, 23).toLocaleDateString()]: ["09:30", "11:00", "13:30", "16:00"]
                    },
                    "Urinalysis": {
                        [new Date(currentYear, 4, 22).toLocaleDateString()]: ["08:30", "10:30", "14:30"],
                        [new Date(currentYear, 4, 23).toLocaleDateString()]: ["10:00", "14:00", "16:30"]
                    },
                    "X-ray": {
                        [new Date(currentYear, 4, 24).toLocaleDateString()]: ["09:00", "11:00", "13:00", "15:00"]
                    },
                    "MRI": {
                        [new Date(currentYear, 4, 25).toLocaleDateString()]: ["10:00", "14:00"]
                    },
                    "CT Scan": {
                        [new Date(currentYear, 4, 26).toLocaleDateString()]: ["09:30", "13:30"]
                    }
                }
            },
            "Operations": {
                options: ["Appendectomy", "C-section", "Gallbladder Removal", "Bypass Surgery", "Hernia Repair"],
                schedule: {
                    "Appendectomy": { [new Date(currentYear, 4, 27).toLocaleDateString()]: ["08:00", "14:00"] },
                    "C-section": { [new Date(currentYear, 4, 28).toLocaleDateString()]: ["09:00", "15:00"] },
                    "Gallbladder Removal": { [new Date(currentYear, 4, 29).toLocaleDateString()]: ["10:00"] },
                    "Bypass Surgery": { [new Date(currentYear, 4, 30).toLocaleDateString()]: ["08:30"] },
                    "Hernia Repair": { [new Date(currentYear, 5, 2).toLocaleDateString()]: ["13:00"] }
                }
            },
            "Check-Ups": {
                options: ["General Exam", "Pediatric", "Prenatal", "Senior Wellness", "Follow-up"],
                schedule: {
                    "General Exam": {
                        [new Date(currentYear, 4, 22).toLocaleDateString()]: ["11:00", "13:00", "16:00"],
                        [new Date(currentYear, 4, 23).toLocaleDateString()]: ["08:00", "12:00", "15:00"]
                    },
                    "Pediatric": {
                        [new Date(currentYear, 4, 24).toLocaleDateString()]: ["10:30", "14:30"]
                    },
                    "Prenatal": {
                        [new Date(currentYear, 4, 25).toLocaleDateString()]: ["09:00", "13:00"]
                    },
                    "Senior Wellness": {
                        [new Date(currentYear, 4, 26).toLocaleDateString()]: ["11:30", "15:30"]
                    },
                    "Follow-up": {
                        [new Date(currentYear, 4, 27).toLocaleDateString()]: ["09:30", "16:30"]
                    }
                }
            },
            "Immunization": {
                options: ["Flu Shot", "COVID-19", "Hepatitis B", "Tetanus"],
                schedule: {
                    "Flu Shot": { [new Date(currentYear, 4, 23).toLocaleDateString()]: ["10:30", "14:30"] },
                    "COVID-19": { [new Date(currentYear, 4, 25).toLocaleDateString()]: ["11:30", "15:30"] },
                    "Hepatitis B": { [new Date(currentYear, 4, 27).toLocaleDateString()]: ["13:30"] },
                    "Tetanus": { [new Date(currentYear, 4, 29).toLocaleDateString()]: ["09:30"] }
                }
            },
            "Therapy": {
                options: ["Physical Therapy", "Speech Therapy", "Occupational Therapy"],
                schedule: {
                    "Physical Therapy": {
                        [new Date(currentYear, 4, 24).toLocaleDateString()]: ["08:00", "10:00", "14:00"]
                    },
                    "Speech Therapy": {
                        [new Date(currentYear, 4, 26).toLocaleDateString()]: ["09:00", "11:00", "13:00"]
                    },
                    "Occupational Therapy": {
                        [new Date(currentYear, 4, 28).toLocaleDateString()]: ["10:30", "14:30"]
                    }
                }
            },
            "Dental": {
                options: ["Tooth Extraction", "Cleaning", "Braces", "Filling"],
                schedule: {
                    "Tooth Extraction": { [new Date(currentYear, 4, 25).toLocaleDateString()]: ["08:30", "14:30"] },
                    "Cleaning": { [new Date(currentYear, 4, 23).toLocaleDateString()]: ["09:00", "13:00", "16:00"] },
                    "Braces": { [new Date(currentYear, 5, 1).toLocaleDateString()]: ["11:00"] },
                    "Filling": { [new Date(currentYear, 4, 26).toLocaleDateString()]: ["10:00", "15:00"] }
                }
            },
            "Psychiatric": {
                options: ["Evaluation", "Counseling", "Medication Management"],
                schedule: {
                    "Evaluation": { [new Date(currentYear, 4, 22).toLocaleDateString()]: ["09:30", "15:30"] },
                    "Counseling": { [new Date(currentYear, 4, 24).toLocaleDateString()]: ["11:30", "16:30"] },
                    "Medication Management": { [new Date(currentYear, 4, 27).toLocaleDateString()]: ["10:30"] }
                }
            }
        };

        const servicePrices = {
            "Blood Test": 500,
            "Urinalysis": 300,
            "X-ray": 800,
            "MRI": 5000,
            "CT Scan": 6000,
            "Appendectomy": 20000,
            "C-section": 25000,
            "Gallbladder Removal": 22000,
            "Bypass Surgery": 50000,
            "Hernia Repair": 18000,
            "General Exam": 800,
            "Pediatric": 700,
            "Prenatal": 900,
            "Senior Wellness": 1000,
            "Follow-up": 600,
            "Flu Shot": 500,
            "COVID-19": 800,
            "Hepatitis B": 700,
            "Tetanus": 400,
            "Physical Therapy": 1200,
            "Speech Therapy": 1500,
            "Occupational Therapy": 1300,
            "Tooth Extraction": 1000,
            "Cleaning": 700,
            "Braces": 30000,
            "Filling": 900,
            "Evaluation": 2000,
            "Counseling": 1800,
            "Medication Management": 2500
        };

        const medicines = {
            Paracetamol: 30,
            Amoxicillin: 15,
            Ibuprofen: 20
        };

        const doctors = {
            "Blood Test": ["Lab Technician 1", "Lab"],
            "Urinalysis": ["Lab Technician 2", "Lab"],
            "X-ray": ["Radiologist 1", "X-ray Room"],
            "MRI": ["Radiologist 2", "MRI Suite"],
            "CT Scan": ["Radiologist 3", "CT Scan Suite"],
            "Appendectomy": ["Dr. Villanueva", "OR 1"],
            "C-section": ["Dr. Mendoza", "OR 2"],
            "Gallbladder Removal": ["Dr. Santos", "OR 3"],
            "Bypass Surgery": ["Dr. Reyes", "OR 4"],
            "Hernia Repair": ["Dr. Gomez", "OR 5"],
            "General Exam": ["Dr. Santos", "Clinic 1"],
            "Pediatric": ["Dr. Reyes", "Clinic 2"],
            "Prenatal": ["Dr. Gomez", "Clinic 3"],
            "Senior Wellness": ["Dr. Cruz", "Clinic 4"],
            "Follow-up": ["Dr. Santos", "Clinic 5"],
            "Flu Shot": ["Nurse Ana", "Immunization Room"],
            "COVID-19": ["Nurse Ben", "Immunization Room"],
            "Hepatitis B": ["Nurse Carol", "Immunization Room"],
            "Tetanus": ["Nurse David", "Immunization Room"],
            "Physical Therapy": ["Therapist Eve", "PT Room"],
            "Speech Therapy": ["Therapist Finn", "ST Room"],
            "Occupational Therapy": ["Therapist Gina", "OT Room"],
            "Tooth Extraction": ["Dr. Harold", "Dental Clinic"],
            "Cleaning": ["Dr. Ivy", "Dental Clinic"],
            "Braces": ["Dr. Jack", "Dental Clinic"],
            "Filling": ["Dr. Kelly", "Dental Clinic"],
            "Evaluation": ["Dr. Liam", "Psychiatric Clinic"],
            "Counseling": ["Dr. Mia", "Psychiatric Clinic"],
            "Medication Management": ["Dr. Noah", "Psychiatric Clinic"]
        };

        let scheduledServices = [];
        const selectedServices = chooseServicesAndSchedule(availableServices, servicePrices, scheduledServices, doctors);

        if (!selectedServices || selectedServices.length === 0) continue; // If no services were selected

        alert("Scheduled Services:\n" + selectedServices.map(item => `${item.name} - ${item.date} at ${item.time} with ${item.doctor} in ${item.room}`).join("\n"));

        // Payment processing with discount choice
        const discountType = chooseDiscount();
        const servicePaymentAmount = processPayment(patientInfo, selectedServices.map(item => item.name), [], servicePrices, medicines, discountType);

        // Pharmacy for medicines
        const selectedMedicinesWithQuantity = goToPharmacy(medicines);
        let medicinePaymentAmount = 0;

        // Medicine payment with discount
        if (selectedMedicinesWithQuantity.length > 0) {
            medicinePaymentAmount = processMedicinePayment(patientInfo, selectedMedicinesWithQuantity, medicines, discountType);
        }

        const totalPaymentDue = servicePaymentAmount + medicinePaymentAmount;

        // Issue receipt
        issueReceipt(patientInfo, patientID, selectedServices, selectedMedicinesWithQuantity, totalPaymentDue, servicePrices, medicines, discountType);

        alert("🌟 Process completed. Get well soon!");
    }

    // Helper functions

    function collectPatientInfo() {
        const lastName = prompt("Enter Last Name:") || "";
        const firstName = prompt("Enter First Name:") || "";
        const middleName = prompt("Enter Middle Name:") || "";
        const suffix = prompt("Enter Suffix (leave blank if none):") || "";

        // Validate birthdate
        let birthday = "";
        while (true) {
            birthday = prompt("Enter birthday (YYYY-MM-DD):");
            if (!birthday || !isValidDate(birthday)) {
                alert("Invalid date format or date in the future. Please enter a valid date inYYYY-MM-DD format.");
            } else {
                break;
            }
        }

        // Address broken down
        const barangay = prompt("Enter Barangay:") || "";
        const municipality = prompt("Enter Municipality/City:") || "";
        const province = prompt("Enter Province:") || "";

        const nationality = prompt("Enter Nationality:") || "";
        const maritalStatus = prompt("Enter Marital Status:") || "";
        const religion = prompt("Enter Religion:") || "";
        const bloodType = prompt("Enter Blood Type:") || "";

        // Contact info
        const phoneNumber = prompt("Enter Phone Number:") || "";
        const email = prompt("Enter Email:") || "";

        // Emergency contact
        const emergencyContactName = prompt("Enter Emergency Contact Name:") || "";
        const emergencyContactNumber = prompt("Enter Emergency Contact Number:") || "";

        const signsSymptoms = prompt("Enter signs and symptoms:") || "";
        const allergies = prompt("Enter any allergies:") || "";
        const medicalHistory = prompt("Enter medical history:") || "";
        const medicineTaken = prompt("Enter medicines taken:") || "";

        return {
            lastName, firstName, middleName, suffix, birthday,
            barangay, municipality, province,
            nationality, maritalStatus, religion, bloodType, phoneNumber, email,
            emergencyContactName, emergencyContactNumber,
            signsSymptoms, allergies, medicalHistory, medicineTaken
        };
    }

    function isValidDate(dateString) {
        // Check formatYYYY-MM-DD
        const regex = /^\d{4}-\d{2}-\d{2}$/;
        if (!regex.test(dateString)) return false;
        const date = new Date(dateString);
        if (Number.isNaN(date.getTime())) return false; // invalid date
        const today = new Date();
        if (date > today) return false; // future date not allowed
        return true;
    }

    function formatName(info) {
        let fullName = info.lastName.trim();
        if (info.firstName.trim()) fullName += ", " + info.firstName.trim();
        if (info.middleName.trim()) fullName += " " + info.middleName.trim();
        if (info.suffix.trim()) fullName += " " + info.suffix.trim();
        return fullName;
    }

    function generatePatientID(name) {
        const timestamp = Date.now().toString().slice(-4);
        return name.split(" ").map(word => word[0]).join("").toUpperCase() + timestamp;
    }

    function chooseServicesAndSchedule(serviceList, prices, scheduled, doctorsList) {
        let selectedAndScheduled = [];
        let scheduling = true;

        while (scheduling) {
            const categories = Object.keys(serviceList);
            const categoryChoice = parseInt(prompt("Choose category for service:\n" + categories.map((c, i) => `${i + 1} - ${c}`).join("\n") + `\n${categories.length + 1} - Done selecting services`));

            if (categoryChoice >= 1 && categoryChoice <= categories.length) {
                const selectedCategory = categories[categoryChoice - 1];
                const services = serviceList[selectedCategory].options;

                const serviceChoice = parseInt(prompt(`Choose a service in ${selectedCategory}:\n` + services.map((s, i) => `${i + 1} - ${s} (PHP ${prices[s]})`).join("\n")));

                if (serviceChoice >= 1 && serviceChoice <= services.length) {
                    const selectedService = services[serviceChoice - 1];
                    const availableSlots = serviceList[selectedCategory].schedule[selectedService];

                    if (availableSlots && Object.keys(availableSlots).length > 0) {
                        const dates = Object.keys(availableSlots);
                        const dateChoice = parseInt(prompt(`Available dates for ${selected Service}:\n` + dates.map((d, i) => `${i + 1} - ${d}`).join("\n")));

                        if (dateChoice >= 1 && dateChoice <= dates.length) {
                            const selectedDate = dates[dateChoice - 1];
                            const times = availableSlots[selectedDate];
                            const timeChoice = parseInt(prompt(`Available times for ${selectedService} on ${selectedDate}:\n` + times.map((t, i) => `${i + 1} - ${t}`).join("\n")));

                            if (timeChoice >= 1 && timeChoice <= times.length) {
                                const selectedTime = times[timeChoice - 1];
                                const doctorInfo = doctorsList[selectedService];
                                if (doctorInfo) {
                                    selectedAndScheduled.push({
                                        name: selectedService,
                                        date: selectedDate,
                                        time: selectedTime,
                                        doctor: doctorInfo[0],
                                        room: doctorInfo[1]
                                    });
                                    alert(`${selectedService} scheduled on ${selectedDate} at ${selectedTime} with ${doctorInfo[0]} in ${doctorInfo[1]}.`);
                                } else {
                                    selectedAndScheduled.push({
                                        name: selectedService,
                                        date: selectedDate,
                                        time: selectedTime,
                                        doctor: "To be assigned",
                                        room: "To be assigned"
                                    });
                                    alert(`${selectedService} scheduled on ${selectedDate} at ${selectedTime}. Doctor and room will be assigned.`);
                                }
                            } else {
                                alert("Invalid time choice.");
                            }
                        } else {
                            alert("Invalid date choice.");
                        }
                    } else {
                        alert(`No available schedules for ${selectedService}.`);
                    }
                } else {
                    alert("Invalid service choice.");
                }
            } else if (categoryChoice === categories.length + 1) {
                scheduling = false;
            } else {
                alert("Invalid category choice.");
            }
        }
        return selectedAndScheduled;
    }

    function goToPharmacy(medicineList) {
        let selectedWithQuantity = [];
        const wantMeds = prompt("Do you want to purchase medicines? yes/no")?.toLowerCase();
        if (wantMeds === "yes") {
            const meds = Object.keys(medicineList);
            let choosing = true;
            while (choosing) {
                const choice = parseInt(prompt(`Select a medicine:\n${meds.map((m, i) => `${i + 1} - ${m} (${medicineList[m]} PHP per tablet)`).join("\n")}\n${meds.length + 1} - Done`));
                if (choice >= 1 && choice <= meds.length) {
                    const medicineName = meds[choice - 1];
                    const quantity = parseInt(prompt(`Enter quantity for ${medicineName}:`));
                    if (!isNaN(quantity) && quantity > 0) {
                        selectedWithQuantity.push({ name: medicineName, quantity: quantity });
                        alert(`${quantity} tablet(s) of ${medicineName} added.`);
                    } else {
                        alert("Invalid quantity.");
                    }
                } else if (choice === meds.length + 1) {
                    choosing = false;
                } else {
                    alert("Invalid choice.");
                }
            }
        }
        return selectedWithQuantity;
    }

    function chooseDiscount() {
        const discountOptions = ["Senior Citizen", "PWD", "Employee", "None"];
        let choice = parseInt(prompt("Choose discount type:\n" + discountOptions.map((d, i) => `${i + 1} - ${d}`).join("\n")));
        if (choice >= 1 && choice <= discountOptions.length) {
            return discountOptions[choice - 1];
        }
        return "None";
    }

    function processPayment(patientInfo, services, medicinesSelected, pricesServices, pricesMedicines, discountType) {
        let total = 0;
        services.forEach(s => total += pricesServices[s] || 0);

        // Apply discount for services
        let discount = 0;
        if (discountType === "Senior Citizen" || discountType === "PWD") {
            discount = total * 0.20; // 20% discount
        } else if (discountType === "Employee") {
            discount = total * 0.15; // 15% discount
        }

        const finalAmount = total - discount;

        alert(`Total amount for services: PHP ${total.toFixed(2)}\nDiscount (${discountType}): PHP ${discount.toFixed(2)}\nAmount to pay for services: PHP ${finalAmount.toFixed(2)}`);

        // Payment loop for services
        while (true) {
            const payment = parseFloat(prompt(`Enter payment amount for services (PHP ${finalAmount.toFixed(2)}):`));
            if (isNaN(payment) || payment < finalAmount) {
                alert("Insufficient payment for services. Please pay at least the required amount.");
            } else {
                const change = payment - finalAmount;
                alert(`Payment accepted for services. Change: PHP ${change.toFixed(2)}`);
                return finalAmount;
            }
        }
    }

    function processMedicinePayment(patientInfo, medicinesWithQuantity, pricesMedicines, discountType) {
        let totalMedicineCost = 0;
        medicinesWithQuantity.forEach(item => {
            totalMedicineCost += (pricesMedicines[item.name] || 0) * item.quantity;
        });

        // Apply discount for medicines
        let medicineDiscount = 0;
        if (discountType === "Senior Citizen" || discountType === "PWD") {
            medicineDiscount = totalMedicineCost * 0.20; // 20% discount
        } else if (discountType === "Employee") {
            medicineDiscount = totalMedicineCost * 0.15; // 15% discount
        }

        const finalMedicineAmount = totalMedicineCost - medicineDiscount;

        alert(`Total amount for medicines: PHP ${totalMedicineCost.toFixed(2)}\nDiscount (${discountType}): PHP ${medicineDiscount.toFixed(2)}\nAmount to pay for medicines: PHP ${finalMedicineAmount.toFixed(2)}`);

        // Payment loop for medicines
        while (true) {
            const payment = parseFloat(prompt(`Enter payment amount for medicines (PHP ${finalMedicineAmount.toFixed(2)}):`));
            if (isNaN(payment) || payment < finalMedicineAmount) {
                alert("Insufficient payment for medicines. Please pay at least the required amount.");
            } else {
                const change = payment - finalMedicineAmount;
                alert(`Payment accepted for medicines. Change: PHP ${change.toFixed(2)}`);
                return finalMedicineAmount;
            }
        }
    }

    function issueReceipt(patientInfo, patientID, scheduledServices, medicinesWithQuantity, totalPaid, pricesServices, pricesMedicines, discountType) {
        let receipt = "===== Iasis Hospital Receipt =====\n";
        receipt += `Patient: ${formatName(patientInfo)}\n`;
        receipt += `ID: ${patientID}\n\n`;
        receipt += "Services:\n";
        let serviceTotal = 0;
        scheduledServices.forEach(item => {
            const price = pricesServices[item.name] || 0;
            receipt += `- ${item.name} (${item.date} at ${item.time}) with ${item.doctor} in ${item.room}: PHP ${price.toFixed(2)}\n`;
            serviceTotal += price;
        });

        let medicineTotal = 0;
        if (medicinesWithQuantity.length > 0) {
            receipt += "\nMedicines:\n";
            medicinesWithQuantity.forEach(item => {
                const price = pricesMedicines[item.name] || 0;
                const itemTotal = price * item.quantity;
                receipt += `- ${item.name} (${item.quantity} x PHP ${price.toFixed(2)}): PHP ${itemTotal.toFixed(2)}\n`;
                medicineTotal += itemTotal;
            });
        }

        let totalDiscount = 0;
        if (discountType === "Senior Citizen" || discountType === "PWD") {
            totalDiscount = (serviceTotal + medicineTotal) * 0.20;
        } else if (discountType === "Employee") {
            totalDiscount = (serviceTotal + medicineTotal) * 0.15;
        }

        const finalTotal = serviceTotal + medicineTotal - totalDiscount;

        receipt += `\nDiscount (${discountType}): PHP ${totalDiscount.toFixed(2)}\n`;
        receipt += `Total Paid: PHP ${finalTotal.toFixed(2)}\n`;
        receipt += "\nThank you for choosing Iasis Hospital!\n";
        receipt += "===============================\n";
        alert(receipt);
    }
})();