(function iasisHospitalSystem() {
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

        // Services, payments, referrals, medicines, receipt (same as before)
        const availableServices = {
            "Laboratory": ["Blood Test", "Urinalysis", "X-ray", "MRI", "CT Scan"],
            "Operations": ["Appendectomy", "C-section", "Gallbladder Removal", "Bypass Surgery", "Hernia Repair"],
            "Check-Ups": ["General Exam", "Pediatric", "Prenatal", "Senior Wellness", "Follow-up"],
            "Immunization": ["Flu Shot", "COVID-19", "Hepatitis B", "Tetanus"],
            "Therapy": ["Physical Therapy", "Speech Therapy", "Occupational Therapy"],
            "Dental": ["Tooth Extraction", "Cleaning", "Braces", "Filling"],
            "Psychiatric": ["Evaluation", "Counseling", "Medication Management"]
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
            "General Exam": ["Dr. Santos", "Room 101"],
            "Pediatric": ["Dr. Reyes", "Room 102"],
            "Prenatal": ["Dr. Gomez", "Room 103"],
            "Senior Wellness": ["Dr. Cruz", "Room 104"],
            "Follow-up": ["Dr. Santos", "Room 105"],
            "Appendectomy": ["Dr. Villanueva", "OR 1"],
            "C-section": ["Dr. Mendoza", "OR 2"],
            "Counseling": ["Dr. Javier", "Room 301"],
            "Medication Management": ["Dr. Navarro", "Room 302"]
        };

        // Service selection loop
        let selectedServices = [];
        let modifying = true;
        while (modifying) {
            const action = prompt("Choose an option:\n1 - Add service\n2 - Remove service\n3 - Finish selection\n4 - View selected services");
            if (action === "1") {
                const service = chooseService(availableServices, servicePrices);
                if (service) selectedServices.push(service);
            } else if (action === "2") {
                if (selectedServices.length === 0) {
                    alert("No services to remove.");
                } else {
                    const idx = parseInt(prompt("Select service to remove:\n" + selectedServices.map((s, i) => `${i + 1} - ${s}`).join("\n")));
                    if (idx >= 1 && idx <= selectedServices.length) selectedServices.splice(idx - 1, 1);
                }
            } else if (action === "3") {
                modifying = false;
            } else if (action === "4") {
                alert("Selected Services:\n" + (selectedServices.length ? selectedServices.join("\n") : "None"));
            } else {
                alert("Invalid option.");
            }
        }

        alert("Selected Services:\n" + (selectedServices.length ? selectedServices.join("\n") : "No services selected"));

        // ====== Inserted doctor and room referral here ======
        selectedServices.forEach(service => {
            if (doctors[service]) {
                const [doc, room] = doctors[service];
                alert(`🧎 You will be referred to ${doc} in ${room} for "${service}".`);
            }
        });

        // Payment processing with discount choice
        const discountType = chooseDiscount();
        const servicePaymentAmount = processPayment(patientInfo, selectedServices, [], servicePrices, medicines, discountType);

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

    function chooseService(serviceList, prices) {
        const categories = Object.keys(serviceList);
        const categoryChoice = parseInt(prompt("Choose category:\n" + categories.map((c, i) => `${i + 1} - ${c}`).join("\n")));
        if (categoryChoice >= 1 && categoryChoice <= categories.length) {
            const selectedCategory = categories[categoryChoice - 1];
            const services = serviceList[selectedCategory];
            const serviceChoice = parseInt(prompt(`Choose service in ${selectedCategory}:\n` + services.map((s, i) => `${i + 1} - ${s} (PHP ${prices[s]})`).join("\n")));
            if (serviceChoice >= 1 && serviceChoice <= services.length) {
                return services[serviceChoice - 1];
            } else alert("Invalid service choice.");
        } else alert("Invalid category choice.");
        return null;
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

    function issueReceipt(patientInfo, patientID, services, medicinesWithQuantity, totalPaid, pricesServices, pricesMedicines, discountType) {
        let receipt = "===== Iasis Hospital Receipt =====\n";
        receipt += `Patient: ${formatName(patientInfo)}\n`;
        receipt += `ID: ${patientID}\n\n`;
        receipt += "Services:\n";
        let serviceTotal = 0;
        services.forEach(s => {
            receipt += `- ${s}: PHP ${pricesServices[s] || 0}\n`;
            serviceTotal += pricesServices[s] || 0;
        });

        let medicineTotal = 0;
        if (medicinesWithQuantity.length > 0) {
            receipt += "\nMedicines:\n";
            medicinesWithQuantity.forEach(item => {
                const price = pricesMedicines[item.name] || 0;
                const itemTotal = price * item.quantity;
                receipt += `- ${item.name} (${item.quantity} x PHP ${price}): PHP ${itemTotal.toFixed(2)}\n`;
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