const stateServices = {
    "Andhra Pradesh": [
        "Passport Seva",
        "UIDAI Aadhaar",
        "AP Ration Card",
        "Chief Electoral Officer AP",
        "AP Transport Dept",
        "AP Civil Supplies",
        "Meebhoomi AP Land Records",
        "AP Education Dept",
        "AP Commercial Taxes",
        "AP Police",
        "AP Health Dept",
        "AP Employment Exchange",
        "AP Social Welfare Dept"
    ],
    "Telangana": [
        "Telangana Passport Seva",
        "Telangana UIDAI Aadhaar",
        "Telangana Ration Card",
        "Telangana Election Commission",
        "Telangana Transport Dept",
        "Telangana Civil Supplies",
        "Telangana Land Records",
        "Telangana Education Dept",
        "Telangana Commercial Taxes",
        "Telangana Police",
        "Telangana Health Dept",
        "Telangana Employment Exchange",
        "Telangana Social Welfare Dept"
    ],
    "Tamil Nadu": [
        "Tamil Nadu Passport Seva",
        "Tamil Nadu UIDAI Aadhaar",
        "Tamil Nadu Ration Card",
        "Tamil Nadu Election Commission",
        "Tamil Nadu Transport Dept",
        "Tamil Nadu Civil Supplies",
        "Tamil Nadu Land Records",
        "Tamil Nadu Education Dept",
        "Tamil Nadu Commercial Taxes",
        "Tamil Nadu Police",
        "Tamil Nadu Health Dept",
        "Tamil Nadu Employment Exchange",
        "Tamil Nadu Social Welfare Dept"
    ],
    "Karnataka": [
        "Karnataka Passport Seva",
        "Karnataka UIDAI Aadhaar",
        "Karnataka Ration Card",
        "Karnataka Election Commission",
        "Karnataka Transport Dept",
        "Karnataka Civil Supplies",
        "Karnataka Land Records",
        "Karnataka Education Dept",
        "Karnataka Commercial Taxes",
        "Karnataka Police",
        "Karnataka Health Dept",
        "Karnataka Employment Exchange",
        "Karnataka Social Welfare Dept"
    ],
    "Kerala": [
        "Kerala Passport Seva",
        "Kerala UIDAI Aadhaar",
        "Kerala Ration Card",
        "Kerala Election Commission",
        "Kerala Transport Dept",
        "Kerala Civil Supplies",
        "Kerala Land Records",
        "Kerala Education Dept",
        "Kerala Commercial Taxes",
        "Kerala Police",
        "Kerala Health Dept",
        "Kerala Employment Exchange",
        "Kerala Social Welfare Dept"
    ]
};

function showServices(state) {
    const serviceSection = document.getElementById("service-section");
    serviceSection.style.display = "block";
    serviceSection.classList.remove("show"); // Reset animation
    void serviceSection.offsetWidth; // Trigger reflow
    serviceSection.classList.add("show"); // Start fade in

    document.getElementById("state-name").textContent = `Select a Service for ${state}`;

    const dropdown = document.getElementById("service-dropdown");
    dropdown.innerHTML = "<option value='' disabled selected>Select a Service</option>";

    stateServices[state].forEach(service => {
        const option = document.createElement("option");
        option.value = service;
        option.textContent = service;
        dropdown.appendChild(option);
    });
}