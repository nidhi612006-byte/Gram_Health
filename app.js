/**
 * ============================================================================
 * GramHealth | ग्राम स्वास्थ्य - Core Application Script
 * AI-Assisted Rural Healthcare Access & Early Risk Screening Prototype
 * 
 * Tech Stack: Vanilla JavaScript, HTML5, CSS3.
 * Zero paid APIs, Zero API keys, Device-First Privacy (localStorage).
 * ============================================================================
 */

'use strict';

// -----------------------------------------------------------------------------
// 1. BILINGUAL DICTIONARY (English & Hindi)
// -----------------------------------------------------------------------------
const i18nData = {
  en: {
    // Top Bar & Brand
    emergencyAlert: "EMERGENCY HOTLINE",
    emergencyBannerText: "Medical Emergency: Dial 108 (Free 24x7 Ambulance) | Pregnant Mothers & Newborns: 102",
    call108: "Call 108",
    brandTagline: "Rural Healthcare Access & Early Screening",
    lowBwBadge: "⚡ Low Bandwidth",

    // Navigation
    navHome: "Dashboard",
    navScreening: "Symptom Screener",
    navFacilities: "Find Health Centers",
    navEducation: "Health Education",
    navReminders: "Reminders & Camps",
    navHelplines: "Emergency Contacts",

    // Dashboard
    heroBadge: "Free Community Health Portal",
    heroTitle: "Healthcare Guidance for Every Village",
    heroSubtext: "Early risk screening, primary healthcare facility guidance, and essential health information designed for rural India. Works fast even on 2G/3G connections.",
    heroBtnScreening: "Check Symptoms Now",
    heroBtnFacilities: "Locate Nearest Hospital",
    disclaimerTitle: "Important Medical Disclaimer",
    disclaimerText: "GramHealth is a preliminary, educational, rule-based screening prototype. It cannot diagnose diseases, prescribe medication, or replace a licensed doctor, ASHA worker, or ANM. If you experience severe chest pain, extreme breathlessness, or heavy bleeding, visit the nearest emergency facility or call 108 immediately.",

    cardScreenerTitle: "Symptom Screening",
    cardScreenerDesc: "Answer simple questions to receive transparent, rule-based triage guidance and decide when to visit a clinic.",
    cardStartNow: "Start screening →",
    cardHospitalTitle: "Find Health Facilities",
    cardHospitalDesc: "Locate Sub-Centres, PHCs, CHCs, and District Hospitals using your PIN code or OpenStreetMap data.",
    cardFindCenter: "Find centers →",
    cardEduTitle: "Preventive Health Guides",
    cardEduDesc: "Read simple, verified community health guides in Hindi and English on ORS, nutrition, seasonal illnesses and hygiene.",
    cardReadGuides: "Read guides →",
    cardReminderTitle: "Reminders & Camps",
    cardReminderDesc: "Keep track of maternal checkups, child vaccinations, and upcoming rural health camps stored locally on your device.",
    cardManageReminders: "Open schedule →",

    privacyHeading: "Device-First Privacy",
    privacySub: "No sensitive medical data is sold or stored on external cloud databases. Reminders stay in your phone's browser.",
    offlineHeading: "Low-Bandwidth Optimized",
    offlineSub: "No bloated libraries or heavy downloads. Fast response on rural cellular networks.",
    rulesHeading: "Transparent Rule Logic",
    rulesSub: "Clear screening logic based on standard community health protocols, avoiding unsafe black-box AI claims.",

    // Screener Form
    screenerHeader: "Preliminary Health Risk Screener",
    screenerSub: "Answer simple questions to understand the urgency of your symptoms. This tool provides preliminary guidance only.",
    demographicsTitle: "1. Patient Information",
    lblAge: "Age Group *",
    optSelectAge: "-- Select Age Group --",
    optInfant: "Infant / Toddler (Below 2 years)",
    optChild: "Child (2 - 12 years)",
    optAdult: "Adult (13 - 59 years)",
    optElderly: "Senior Citizen (60+ years)",
    lblDuration: "Symptom Duration *",
    optSelectDuration: "-- Select Duration --",
    optUnder24: "Less than 24 hours",
    optDays1to3: "1 to 3 days",
    optDays4to7: "4 to 7 days",
    optOverWeek: "More than 1 week",
    lblPregnant: "Patient is pregnant or recently delivered (< 6 weeks)",

    redFlagsTitle: "2. Emergency Warning Signs (Check all that apply)",
    redFlagsHelper: "If any of these severe signs are present, the patient requires immediate urgent medical care:",
    rfBreathing: "Severe difficulty breathing / fast chest indrawing",
    rfChestPain: "Persistent chest pressure, pain, or heaviness",
    rfConfusion: "Confusion, drowsiness, fainting, or inability to wake",
    rfDehydration: "Cannot drink fluids / sunken eyes / no urine for 8+ hours",
    rfBluish: "Bluish lips, tongue, face, or fingernails",
    rfBleeding: "Severe uncontrolled bleeding or coughing up blood",
    rfStiffNeck: "High fever accompanied by a stiff neck and light sensitivity",
    rfSeizures: "Seizures / convulsions / sudden limb weakness",

    symptomsTitle: "3. Common Symptoms Experienced",
    symptomsHelper: "Select the primary discomforts the patient is experiencing:",
    symFever: "Fever / Chills (बुखार / ठंड लगना)",
    symCough: "Cough or Sore Throat (खांसी या गले में खराश)",
    symDiarrhea: "Loose watery stools / Vomiting (दस्त या उल्टी)",
    symStomach: "Stomach Pain or Cramps (पेट में दर्द या मरोड़)",
    symHeadache: "Headache or Body Aches (सिरदर्द या बदन दर्द)",
    symSkin: "Skin Rash, Itching, or Boils (त्वचा पर चकत्ते या खुजली)",
    symJoint: "Joint Swelling or Knee Pain (जोड़ों में सूजन या दर्द)",
    symUrination: "Burning Urination / Frequent Urge (पेशाब में जलन)",
    symWeakness: "Extreme Fatigue / Loss of Appetite (अत्यधिक कमजोरी / भूख न लगना)",
    symEye: "Red or Watery Eyes (आंखों में लाली या जलन)",

    btnEvaluate: "Evaluate Symptoms",
    btnReset: "Reset Form",

    // Screener Validation Errors
    errSelectAge: "Please select an age group.",
    errSelectDuration: "Please select how long symptoms have lasted.",
    errSelectSymptom: "Please check at least one symptom or warning sign.",

    // Facility Finder
    facilityHeader: "Rural Healthcare Facility Finder",
    facilitySub: "Find nearby Sub-Centres, Primary Health Centres (PHC), Community Health Centres (CHC), and District Hospitals.",
    lblSearchFacility: "Search city, town, or 6-digit PIN code",
    btnSearch: "Search Centers",
    btnUseLocation: "Use My Current Location",
    locationPrivacyNote: "Requires browser permission. Your GPS coordinates are processed solely on your device.",
    filterLabel: "Filter Type:",
    filterAll: "All Facilities",
    filterPHC: "Primary Health Centre (PHC)",
    filterCHC: "Community Health Centre (CHC)",
    filterDistrict: "District Hospital",
    filterSubCentre: "Health Sub-Centre",
    osmNotice: "Map and facility search connects to public OpenStreetMap and Nominatim services. Map data © OpenStreetMap contributors (ODbL). If offline or an area lacks live records, sample community facilities are displayed with explicit unverified demo labeling. Always verify operating hours with your local block administration before traveling.",
    loadingFacilities: "Searching nearby healthcare facilities on OpenStreetMap...",

    // Health Education
    eduHeader: "Preventive Health & First-Aid Education",
    eduSub: "Practical, evidence-aligned community health guidelines in simple language. Prevention saves lives.",
    orsBadge: "Life-Saving First Aid",
    orsCalcTitle: "Oral Rehydration Salts (ORS) Ratio Guide",
    orsCalcDesc: "Dehydration from severe diarrhea or vomiting is dangerous, especially in young children. If commercial WHO-ORS packets are not immediately reachable, prepare clean homemade rehydration fluid:",
    lblOrsWater: "Clean Boiled & Cooled Water:",
    litersUnit: "Liter(s)",
    orsBoiledWater: "Boiled & Cooled Water",
    orsSugar: "Clean Sugar (चीनी)",
    orsSalt: "Common Salt (नमक)",
    orsCaution: "⚠️ Do NOT add excess salt or artificial color. Stir until fully dissolved. Give in small sips. Always visit the PHC if vomiting continues or stool has blood.",

    // Reminders & Camps
    remindersHeader: "Check-Up Reminders & Village Health Camps",
    remindersSub: "Never miss a child immunization date, maternal ANC visit, or routine BP/sugar checkup.",
    remindersPrivacyTitle: "Private Device-Only Storage",
    remindersPrivacyDesc: "All reminders created here are saved strictly inside your current web browser storage (localStorage). GramHealth does NOT send your appointments to external servers. Because this is a lightweight static website, reminders are displayed whenever you visit this site on this phone or browser.",
    addReminderTitle: "Add New Health Reminder",
    lblReminderTitle: "Reason / Checkup Name *",
    lblReminderDate: "Date *",
    lblReminderTime: "Time (Optional)",
    lblReminderType: "Category",
    catVaccine: "Child Vaccination (टीकाकरण)",
    catANC: "Maternal ANC Care (गर्भावस्था जांच)",
    catRoutine: "Routine BP / Sugar Test (सामान्य जांच)",
    catMedicine: "Refill Prescription / Medicines (दवा रीफिल)",
    catOther: "Other Health Follow-up (अन्य)",
    lblReminderLocation: "Facility / Place (Optional)",
    lblReminderNotes: "Notes / ASHA Worker Name (Optional)",
    btnSaveReminder: "Save Reminder to Device",
    myRemindersTitle: "Your Saved Reminders",
    btnClearAll: "Clear All",

    campsTitle: "Community Health Camps & Drives",
    campsSub: "Upcoming diagnostic, screening, and eye-care drives in surrounding rural blocks.",
    campsDemoBadge: "Demo Sample Schedule (Unverified hackathon examples)",
    campVerificationNotice: "⚠️ Notice: The events below are illustrative demonstration entries for prototype testing. Always confirm exact dates, timings, and venue with your village Gram Panchayat, ANM, or ASHA worker before attending.",

    // Helplines
    helplineHeader: "National & State Emergency Helplines",
    helplineSub: "Toll-free, 24x7 government telephone helplines available across India from any mobile or landline.",
    hl108Title: "National Emergency Ambulance",
    hl108Desc: "For acute medical emergencies, accidents, sudden severe chest pain, breathing collapse, or trauma.",
    hl102Title: "Janani Shishu Suraksha (JSSK)",
    hl102Desc: "Free ambulance transport for pregnant women in labor, post-delivery drop-back, and sick infants up to 1 year.",
    hl1075Title: "National Health Helpline",
    hl1075Desc: "Government health policies, epidemic information, immunization queries, and Ayushman Bharat guidance.",
    hl14416Title: "Tele-MANAS Mental Health",
    hl14416Desc: "Free, 24x7 confidential psychological counseling and emotional support in multiple Indian regional languages.",
    hl112Title: "All-India Emergency Number",
    hl112Desc: "Integrated emergency service connecting Police, Fire, and Ambulance across all States and UTs.",
    hl1098Title: "Childline Emergency",
    hl1098Desc: "24-hour emergency helpline for children in need of medical care, rescue, shelter, and protection.",
    callNow: "Call Now",

    // Footer
    footerMission: "An open-source, hackathon-built rural health access portal designed for offline resilience, patient privacy, and transparent community guidance.",
    footerQuickLinks: "Quick Links",
    footerDisclaimer: "Medical & Prototype Notice: GramHealth is an educational prototype and does not provide clinical diagnoses, prescriptive medical treatments, or formal doctor consultations. No data is stored externally. In case of an emergency, call 108 immediately. Map data © OpenStreetMap contributors."
  },

  hi: {
    // Top Bar & Brand
    emergencyAlert: "आपातकालीन हेल्पलाइन",
    emergencyBannerText: "चिकित्सा आपातकाल: डायल करें 108 (निःशुल्क 24x7 एम्बुलेंस) | गर्भवती माताएं व नवजात: 102",
    call108: "108 पर कॉल करें",
    brandTagline: "ग्रामीण स्वास्थ्य सेवा पहुंच और प्रारंभिक लक्षण जांच",
    lowBwBadge: "⚡ कम बैंडविड्थ",

    // Navigation
    navHome: "डैशबोर्ड",
    navScreening: "लक्षण जांच",
    navFacilities: "स्वास्थ्य केंद्र खोजें",
    navEducation: "स्वास्थ्य शिक्षा",
    navReminders: "रिमाइंडर व शिविर",
    navHelplines: "आपातकालीन नंबर",

    // Dashboard
    heroBadge: "निःशुल्क ग्रामीण स्वास्थ्य सेवा पोर्टल",
    heroTitle: "हर गांव तक प्राथमिक स्वास्थ्य मार्गदर्शन",
    heroSubtext: "ग्रामीण भारत के लिए प्रारंभिक स्वास्थ्य जोखिम जांच, नजदीकी प्राथमिक स्वास्थ्य केंद्र की जानकारी और स्वास्थ्य नियम। 2G/3G नेटवर्क पर भी तेज काम करता है।",
    heroBtnScreening: "अभी लक्षण जांचें",
    heroBtnFacilities: "निकटतम अस्पताल खोजें",
    disclaimerTitle: "महत्वपूर्ण चिकित्सीय अस्वीकरण (Disclaimer)",
    disclaimerText: "ग्राम स्वास्थ्य एक प्रारंभिक, शैक्षिक, नियम-आधारित स्क्रीनिंग प्रोटोटाइप है। यह किसी बीमारी का निश्चित निदान (diagnosis) नहीं करता, दवाइयां नहीं लिखता और प्रमाणित डॉक्टर, आशा दीदी या एएनएम का विकल्प नहीं है। यदि सीने में तेज दर्द, सांस लेने में अत्यधिक तकलीफ या भारी रक्तस्राव हो, तो तुरंत 108 डायल करें या निकटतम अस्पताल जाएं।",

    cardScreenerTitle: "लक्षण जांच (स्क्रीनिंग)",
    cardScreenerDesc: "सरल प्रश्नों के उत्तर दें और पारदर्शी नियमों के आधार पर जानें कि डॉक्टर या स्वास्थ्य केंद्र कब जाना चाहिए।",
    cardStartNow: "जांच शुरू करें →",
    cardHospitalTitle: "स्वास्थ्य केंद्र खोजें",
    cardHospitalDesc: "अपने पिन कोड या जिले के नाम से निकटतम उप-स्वास्थ्य केंद्र, पीएचसी, सीएचसी और जिला अस्पताल खोजें।",
    cardFindCenter: "केंद्र खोजें →",
    cardEduTitle: "स्वास्थ्य शिक्षा व बचाव",
    cardEduDesc: "ओआरएस घोल, मातृत्व व शिशु पोषण, मौसमी बीमारियों और स्वच्छता पर प्रमाणित प्राथमिक जानकारी पढ़ें।",
    cardReadGuides: "गाइड पढ़ें →",
    cardReminderTitle: "जांच स्मरण व स्वास्थ्य शिविर",
    cardReminderDesc: "गर्भावस्था जांच, बच्चों के टीके और आगामी ग्रामीण स्वास्थ्य शिविरों का रिकॉर्ड अपने ही मोबाइल में सुरक्षित रखें।",
    cardManageReminders: "शेड्यूल खोलें →",

    privacyHeading: "गोपनीयता और डेटा सुरक्षा",
    privacySub: "कोई भी व्यक्तिगत या चिकित्सीय डेटा किसी बाहरी सर्वर पर नहीं भेजा जाता। आपके रिमाइंडर केवल आपके फोन में रहते हैं।",
    offlineHeading: "धीमे इंटरनेट में भी समर्थ",
    offlineSub: "कोई भारी लाइब्रेरी या ऐप डाउनलोड नहीं। ग्रामीण मोबाइल नेटवर्क पर तुरंत लोड होता है।",
    rulesHeading: "पारदर्शी नियम तर्क",
    rulesSub: "मानक प्राथमिक स्वास्थ्य दिशा-निर्देशों पर आधारित पारदर्शी निर्णय, बिना किसी अस्पष्ट दावे के।",

    // Screener Form
    screenerHeader: "प्रारंभिक स्वास्थ्य जोखिम स्क्रीनिंग",
    screenerSub: "सरल प्रश्नों के उत्तर देकर लक्षणों की गंभीरता समझें। यह टूल केवल प्रारंभिक मार्गदर्शन देता है।",
    demographicsTitle: "1. मरीज की सामान्य जानकारी",
    lblAge: "आयु वर्ग *",
    optSelectAge: "-- आयु वर्ग चुनें --",
    optInfant: "शिशु / छोटा बच्चा (2 वर्ष से कम)",
    optChild: "बच्चा (2 से 12 वर्ष)",
    optAdult: "वयस्क (13 से 59 वर्ष)",
    optElderly: "वरिष्ठ नागरिक (60 वर्ष से अधिक)",
    lblDuration: "लक्षण कितने समय से हैं? *",
    optSelectDuration: "-- समयावधि चुनें --",
    optUnder24: "24 घंटे से कम",
    optDays1to3: "1 से 3 दिन",
    optDays4to7: "4 से 7 दिन",
    optOverWeek: "1 सप्ताह से अधिक",
    lblPregnant: "मरीज गर्भवती हैं या हाल ही में प्रसव (< 6 सप्ताह) हुआ है",

    redFlagsTitle: "2. आपातकालीन खतरे के संकेत (लागू होने पर चुनें)",
    redFlagsHelper: "यदि इनमें से कोई भी गंभीर लक्षण है, तो मरीज को तुरंत आपातकालीन अस्पताल ले जाएं:",
    rfBreathing: "सांस लेने में अत्यधिक कठिनाई / पसलियां तेजी से चलना",
    rfChestPain: "सीने में लगातार भारीपन, दबाव या तेज दर्द",
    rfConfusion: "बेहोशी, अत्यधिक सुस्ती, भ्रम या जगाने में असमर्थता",
    rfDehydration: "पानी न पी पाना / धंसी हुई आंखें / 8+ घंटे से पेशाब न होना",
    rfBluish: "होंठ, जीभ, चेहरे या नाखूनों का नीला पड़ना",
    rfBleeding: "गंभीर अनियंत्रित रक्तस्राव या खांसी में खून आना",
    rfStiffNeck: "तेज बुखार के साथ गर्दन में अकड़न और रोशनी से परेशानी",
    rfSeizures: "दौरे / झटके आना या शरीर के किसी अंग में अचानक कमजोरी",

    symptomsTitle: "3. महसूस हो रहे सामान्य लक्षण",
    symptomsHelper: "मरीज को जो प्राथमिक तकलीफें हो रही हैं उन्हें चुनें:",
    symFever: "बुखार / ठंड लगना (Fever / Chills)",
    symCough: "खांसी या गले में दर्द (Cough or Sore Throat)",
    symDiarrhea: "पतले दस्त या उल्टी (Loose stools / Vomiting)",
    symStomach: "पेट दर्द या मरोड़ (Stomach Pain or Cramps)",
    symHeadache: "सिरदर्द या बदन दर्द (Headache or Body Aches)",
    symSkin: "त्वचा पर चकत्ते, खुजली या दाने (Skin Rash / Itching)",
    symJoint: "जोड़ों में सूजन या घुटनों में दर्द (Joint Pain)",
    symUrination: "पेशाब में जलन या बार-बार पेशाब आना (Burning Urination)",
    symWeakness: "अत्यधिक कमजोरी / भूख न लगना (Extreme Fatigue)",
    symEye: "आंखों में लाली या पानी बहना (Red or Watery Eyes)",

    btnEvaluate: "लक्षणों का मूल्यांकन करें",
    btnReset: "फॉर्म रीसेट करें",

    // Screener Validation Errors
    errSelectAge: "कृपया मरीज का आयु वर्ग चुनें।",
    errSelectDuration: "कृपया बताएं कि लक्षण कितने समय से हैं।",
    errSelectSymptom: "कृपया कम से कम एक लक्षण या खतरे का संकेत चुनें।",

    // Facility Finder
    facilityHeader: "ग्रामीण स्वास्थ्य केंद्र खोजक",
    facilitySub: "अपने निकटतम उप-स्वास्थ्य केंद्र, प्राथमिक स्वास्थ्य केंद्र (PHC), सामुदायिक स्वास्थ्य केंद्र (CHC) और जिला अस्पताल खोजें।",
    lblSearchFacility: "शहर, कस्बा या 6 अंकों का पिन कोड दर्ज करें",
    btnSearch: "स्वास्थ्य केंद्र खोजें",
    btnUseLocation: "मेरे वर्तमान स्थान (GPS) का उपयोग करें",
    locationPrivacyNote: "ब्राउज़र अनुमति की आवश्यकता है। आपकी लोकेशन केवल आपके फोन पर ही प्रोसेस होती है।",
    filterLabel: "केंद्र प्रकार फ़िल्टर:",
    filterAll: "सभी केंद्र",
    filterPHC: "प्राथमिक स्वास्थ्य केंद्र (PHC)",
    filterCHC: "सामुदायिक स्वास्थ्य केंद्र (CHC)",
    filterDistrict: "जिला अस्पताल",
    filterSubCentre: "उप-स्वास्थ्य केंद्र",
    osmNotice: "नक्शा और केंद्र खोज सार्वजनिक OpenStreetMap और Nominatim सेवाओं से जुड़ती है। नक्शा डेटा © OpenStreetMap contributors (ODbL)। यदि इंटरनेट बंद है या रिकॉर्ड नहीं मिलता, तो नमूना सामुदायिक केंद्र अस्पष्टता से बचने के लिए 'अपुष्ट डेमो डेटा' लेबल के साथ दिखते हैं। जाने से पहले हमेशा स्थानीय प्रशासन से समय की पुष्टि करें।",
    loadingFacilities: "OpenStreetMap पर निकटतम स्वास्थ्य केंद्र खोजे जा रहे हैं...",

    // Health Education
    eduHeader: "स्वास्थ्य शिक्षा व प्राथमिक उपचार",
    eduSub: "सरल भाषा में प्रमाणित सामुदायिक स्वास्थ्य नियम। सही समय पर सावधानी जीवन बचाती है।",
    orsBadge: "जीवनरक्षक प्राथमिक उपचार",
    orsCalcTitle: "ओआरएस (ORS) घोल बनाने का सही अनुपात",
    orsCalcDesc: "दस्त या उल्टी में शरीर से पानी की कमी (डिहाइड्रेशन) विशेषकर छोटे बच्चों के लिए बहुत खतरनाक होती है। यदि पैकेट वाला ओआरएस तुरंत न मिले, तो घर पर सुरक्षित घोल बनाएं:",
    lblOrsWater: "साफ उबला और ठंडा किया गया पानी:",
    litersUnit: "लीटर",
    orsBoiledWater: "उबला व ठंडा पानी",
    orsSugar: "साफ चीनी (Clean Sugar)",
    orsSalt: "साधारण नमक (Common Salt)",
    orsCaution: "⚠️ नमक अधिक न डालें। चीनी और नमक पूरी तरह घुलने तक चम्मच से मिलाएं। घूंट-घूंट करके पिलाएं। यदि उल्टी न रुके या दस्त में खून आए तो तुरंत अस्पताल जाएं।",

    // Reminders & Camps
    remindersHeader: "जांच रिमाइंडर व ग्रामीण स्वास्थ्य शिविर",
    remindersSub: "शिशु टीकाकरण, गर्भावस्था जांच या बीपी/शुगर टेस्ट की तारीख कभी न भूलें।",
    remindersPrivacyTitle: "फोन की मेमोरी में सुरक्षित",
    remindersPrivacyDesc: "आपके द्वारा बनाए गए सभी रिमाइंडर पूरी तरह आपके ब्राउज़र मेमोरी (localStorage) में सुरक्षित रहते हैं। ग्राम स्वास्थ्य किसी सर्वर पर डेटा नहीं भेजता। जब भी आप इस फोन में वेबसाइट खोलेंगे, आपको आगामी जांच दिखाई देगी।",
    addReminderTitle: "नया स्वास्थ्य रिमाइंडर जोड़ें",
    lblReminderTitle: "जांच का नाम / उद्देश्य *",
    lblReminderDate: "तारीख *",
    lblReminderTime: "समय (वैकल्पिक)",
    lblReminderType: "श्रेणी",
    catVaccine: "शिशु टीकाकरण (Child Vaccination)",
    catANC: "गर्भावस्था जांच (ANC Checkup)",
    catRoutine: "नियमित बीपी/शुगर जांच (Routine Checkup)",
    catMedicine: "दवाइयों का रीफिल (Medicine Refill)",
    catOther: "अन्य स्वास्थ्य अनुवर्ती (Other Follow-up)",
    lblReminderLocation: "अस्पताल / स्थान (वैकल्पिक)",
    lblReminderNotes: "नोट / आशा दीदी का नाम (वैकल्पिक)",
    btnSaveReminder: "फोन में रिमाइंडर सुरक्षित करें",
    myRemindersTitle: "आपके सहेजे गए रिमाइंडर",
    btnClearAll: "सभी हटाएं",

    campsTitle: "सामुदायिक स्वास्थ्य शिविर व जांच दिवस",
    campsSub: "निकटवर्ती ब्लॉकों में आगामी नेत्र जांच, मातृत्व पोषण और सामान्य स्वास्थ्य शिविर।",
    campsDemoBadge: "डेमो नमूना अनुसूची (अपुष्ट हैकथॉन उदाहरण)",
    campVerificationNotice: "⚠️ सूचना: नीचे दिए गए शिविर केवल प्रोटोटाइप परीक्षण हेतु नमूना प्रविष्टियां हैं। शिविर में जाने से पहले अपनी ग्राम पंचायत, एएनएम या आशा दीदी से सही तारीख और स्थान अवश्य सत्यापित करें।",

    // Helplines
    helplineHeader: "राष्ट्रीय व राज्य आपातकालीन हेल्पलाइन",
    helplineSub: "भारत भर में किसी भी मोबाइल या लैंडलाइन से 24x7 निःशुल्क (टोल-फ्री) सरकारी सेवाएं।",
    hl108Title: "राष्ट्रीय आपातकालीन एम्बुलेंस",
    hl108Desc: "गंभीर आपातकाल, दुर्घटना, अचानक तेज सीने में दर्द, सांस रुकने या गंभीर चोट के लिए।",
    hl102Title: "जननी शिशु सुरक्षा कार्यक्रम (JSSK)",
    hl102Desc: "प्रसव हेतु गर्भवती महिलाओं और 1 वर्ष तक के बीमार शिशुओं के लिए निःशुल्क एम्बुलेंस वाहन सेवा।",
    hl1075Title: "राष्ट्रीय स्वास्थ्य हेल्पलाइन",
    hl1075Desc: "स्वास्थ्य योजनाएं, महामारी जानकारी, टीकाकरण नियम और आयुष्मान भारत मार्गदर्शन।",
    hl14416Title: "टेली-मानस मानसिक स्वास्थ्य",
    hl14416Desc: "तनाव, चिंता या मानसिक स्वास्थ्य समस्याओं के लिए क्षेत्रीय भाषाओं में निःशुल्क गोपनीय परामर्श।",
    hl112Title: "अखिल भारतीय आपातकालीन नंबर",
    hl112Desc: "पुलिस, फायर और एम्बुलेंस को जोड़ने वाली एकीकृत आपातकालीन नंबर सेवा।",
    hl1098Title: "चाइल्डलाइन आपातकालीन सेवा",
    hl1098Desc: "संकटग्रस्त, बीमार या असहाय बच्चों की सहायता व सुरक्षा के लिए 24 घंटे हेल्पलाइन।",
    callNow: "अभी कॉल करें",

    // Footer
    footerMission: "ग्रामीण समुदायों के लिए बनाया गया खुला, हैकथॉन-विकसित स्वास्थ्य सेवा पोर्टल। बिना किसी बाहरी ट्रैकिंग के पूर्ण गोपनीयता।",
    footerQuickLinks: "महत्वपूर्ण लिंक",
    footerDisclaimer: "चिकित्सीय व प्रोटोटाइप सूचना: ग्राम स्वास्थ्य एक शैक्षिक प्रोटोटाइप है और यह कोई औपचारिक डॉक्टर परामर्श या दवा पर्ची नहीं प्रदान करता। आपातकाल में तुरंत 108 डायल करें। नक्शा डेटा © OpenStreetMap योगदानकर्ता।"
  }
};

// -----------------------------------------------------------------------------
// 2. EDUCATIONAL MODULE CONTENT (Bilingual Cards)
// -----------------------------------------------------------------------------
const educationalTopics = [
  {
    id: "ors-diarrhea",
    category: { en: "Hydration & First Aid", hi: "जलयोजन व प्राथमिक उपचार" },
    icon: "💧",
    title: {
      en: "Diarrhea, Dehydration & Oral Rehydration Salts (ORS)",
      hi: "दस्त, निर्जलीकरण (डिहाइड्रेशन) और ओआरएस घोल"
    },
    points: {
      en: [
        "Loose watery stools quickly drain vital salts and fluids from the body, which can be fatal for infants.",
        "Always give ORS after every loose stool. Continue breast-feeding infants without interruption.",
        "Give Zinc dispersible tablets (as prescribed by ASHA/PHC) for 14 days to reduce future episodes in children.",
        "Never starve a sick child; continue giving soft home-cooked khichdi, mashed banana, and coconut water."
      ],
      hi: [
        "पतले दस्तों से शरीर में पानी और जीवनरक्षक लवणों की कमी हो जाती है, जो बच्चों के लिए बहुत खतरनाक है।",
        "हर बार दस्त आने पर घूंट-घूंट करके ओआरएस घोल अवश्य पिलाएं। छोटे बच्चों को मां का दूध पिलाना जारी रखें।",
        "बच्चों में दस्त ठीक करने और भविष्य में बचाव के लिए आशा दीदी/पीएचसी की सलाह से 14 दिन तक जिंक की गोली दें।",
        "बीमार बच्चे को भूखा न रखें; नरम खिचड़ी, दलिया, केला और दाल का पानी देते रहें।"
      ]
    },
    tip: {
      en: "🚨 Red Flag: If stools contain blood or the child is unusually drowsy, go to the PHC immediately.",
      hi: "🚨 चेतावनी: यदि दस्त में खून आए या बच्चा बहुत सुस्त हो जाए, तो तुरंत नजदीकी स्वास्थ्य केंद्र ले जाएं।"
    }
  },
  {
    id: "clean-water",
    category: { en: "Hygiene & Sanitation", hi: "स्वच्छता व जल सुरक्षा" },
    icon: "🚰",
    title: {
      en: "Safe Drinking Water & Monsoon Disease Prevention",
      hi: "पीने का स्वच्छ पानी और मौसमी बीमारियों से बचाव"
    },
    points: {
      en: [
        "Boiling water briskly for 1 minute kills germs causing cholera, typhoid, and viral jaundice.",
        "Store drinking water in narrow-mouth, covered containers and use a ladle with a handle to draw water.",
        "Clear stagnant water from pots, coolers, and old tires every Sunday to eliminate dengue and malaria mosquitoes.",
        "Always wash hands with soap and running water before feeding children and after using the toilet."
      ],
      hi: [
        "पानी को 1 मिनट तक खौलाने से हैजा, टाइफाइड और पीलिया फैलाने वाले जीवाणु नष्ट हो जाते हैं।",
        "पीने के पानी को हमेशा ढककर रखें और निकालने के लिए डंडी वाले लोटे या चम्मच का उपयोग करें।",
        "मलेरिया और डेंगू के मच्छरों से बचने के लिए कूलर, पुराने टायरों और गमलों में ठहरा पानी हर हफ्ते साफ करें।",
        "बच्चों को खाना खिलाने से पहले और शौच के बाद साबुन से हाथ अच्छी तरह धोएं।"
      ]
    },
    tip: {
      en: "💡 Prevention: Sleeping under insecticide-treated bed nets protects the entire family from night-biting malaria mosquitoes.",
      hi: "💡 बचाव: मच्छरदानी में सोने से परिवार मलेरिया और डेंगू जैसी गंभीर बीमारियों से सुरक्षित रहता है।"
    }
  },
  {
    id: "maternal-child",
    category: { en: "Maternal & Child Care", hi: "मातृत्व व शिशु स्वास्थ्य" },
    icon: "🤱",
    title: {
      en: "Pregnancy Nutrition & Child Immunization",
      hi: "गर्भावस्था पोषण और संपूर्ण शिशु टीकाकरण"
    },
    points: {
      en: [
        "Pregnant mothers must attend at least 4 Antenatal Care (ANC) checkups at the PHC/Anganwadi.",
        "Consume Iron-Folic Acid (IFA) tablets daily after the first trimester with lemon water or amla to prevent anemia.",
        "Start breastfeeding within 1 hour of birth. Exclusive breastfeeding is essential for the first 6 months—do not give honey or plain water.",
        "Complete all routine vaccines (BCG, Pentavalent, Rotavirus, Measles-Rubella) according to the Mother-Child Protection card."
      ],
      hi: [
        "गर्भवती माताएं आंगनवाड़ी या पीएचसी में कम से कम 4 प्रसव पूर्व जांच (ANC) अवश्य करवाएं।",
        "खून की कमी (एनीमिया) से बचने के लिए आशा दीदी द्वारा दी गई आयरन-फोलिक एसिड की गोलियां नियमित खाएं।",
        "जन्म के 1 घंटे के भीतर मां का पहला गाढ़ा दूध (कोलोस्ट्रम) जरूर पिलाएं। 6 माह तक केवल मां का दूध ही दें—शहद या पानी न दें।",
        "शिशु-मातृ सुरक्षा कार्ड के अनुसार समय पर सभी टीके (बीसीजी, पेंटावैलेंट, पोलियो, खसरा) जरूर लगवाएं।"
      ]
    },
    tip: {
      en: "📞 Free Transport: Dial 102 for free government ambulance service to the hospital for delivery.",
      hi: "📞 निःशुल्क वाहन: प्रसव के लिए अस्पताल जाने हेतु 102 नंबर डायल करके सरकारी एम्बुलेंस बुलाएं।"
    }
  },
  {
    id: "ncd-lifestyle",
    category: { en: "Chronic Diseases", hi: "गैर-संचारी रोग (बीपी व शुगर)" },
    icon: "❤️",
    title: {
      en: "Blood Pressure & Diabetes: Silent Risk Awareness",
      hi: "उच्च रक्तचाप (High BP) और मधुमेह (शुगर) से बचाव"
    },
    points: {
      en: [
        "High blood pressure and diabetes often show zero symptoms until they damage the heart, kidneys, or eyes.",
        "Everyone above 30 years should get their BP and blood sugar checked once every 6 months at their local Health & Wellness Centre.",
        "Reduce daily salt intake to under 1 teaspoon per person. Avoid repeated use of burnt cooking oil.",
        "Walk briskly for at least 30 minutes daily. Quit smoking bidi/gutkha, which sharply raises heart attack risk."
      ],
      hi: [
        "हाई ब्लड प्रेशर और शुगर के अक्सर शुरुआती लक्षण नहीं होते, पर ये दिल, गुर्दे और आंखों को नुकसान पहुंचा सकते हैं।",
        "30 वर्ष से अधिक उम्र के सभी व्यक्ति हर 6 माह में अपने आरोग्य मंदिर (HWC) में जाकर बीपी और शुगर की जांच कराएं।",
        "भोजन में नमक की मात्रा कम करें। बीड़ी, गुटखा और तंबाकू का सेवन तुरंत बंद करें।",
        "प्रतिदिन कम से कम 30 मिनट तेज गति से पैदल चलें और हरी पत्तेदार सब्जियां खाएं।"
      ]
    },
    tip: {
      en: "💊 Important: Never stop blood pressure medicines without a doctor's advice, even if you feel healthy.",
      hi: "💊 ध्यान दें: बीपी या शुगर की दवा कभी भी अपने मन से बंद न करें, भले ही आप स्वस्थ महसूस कर रहे हों।"
    }
  },
  {
    id: "mental-health",
    category: { en: "Emotional Wellbeing", hi: "मानसिक स्वास्थ्य" },
    icon: "🧠",
    title: {
      en: "Mental Wellbeing & Tele-MANAS Counseling",
      hi: "मानसिक स्वास्थ्य और निःशुल्क टेली-मानस परामर्श"
    },
    points: {
      en: [
        "Persistent anxiety, deep sadness, loss of sleep, or sudden alcohol dependency are health conditions that require compassionate care.",
        "Mental stress is not a weakness or personal failing—seeking counsel is a sign of strength.",
        "Talk with trusted community elders, family members, or your village health volunteer.",
        "The Government of India provides Tele-MANAS: free, confidential, 24x7 emotional support in your language."
      ],
      hi: [
        "लगातार चिंता, गहरी उदासी, नींद न आना या शराब की लत चिकित्सीय समस्याएं हैं जिनका समाधान संभव है।",
        "मानसिक परेशानी कोई कमजोरी या कलंक नहीं है—सही समय पर बात करना बुद्धिमानी है।",
        "अपने परिवार, दोस्तों या विश्वासपात्र स्वास्थ्य कार्यकर्ताओं से अपनी परेशानी साझा करें।",
        "भारत सरकार की 'टेली-मानस' सेवा पर 14416 डायल करके अपनी भाषा में 24 घंटे मुफ्त और गोपनीय सलाह लें।"
      ]
    },
    tip: {
      en: "📞 Free & Anonymous: Call 14416 anytime to speak with a trained counselor.",
      hi: "📞 निःशुल्क सहायता: किसी भी समय 14416 पर कॉल करें और प्रशिक्षित मनोवैज्ञानिक से बात करें।"
    }
  },
  {
    id: "heatstroke",
    category: { en: "Seasonal First Aid", hi: "मौसमी प्राथमिक उपचार" },
    icon: "☀️",
    title: {
      en: "Field Heatstroke (Loo) & Sun Safety",
      hi: "लू (हीटस्ट्रोक) से बचाव और प्राथमिक उपचार"
    },
    points: {
      en: [
        "Working in open agricultural fields during peak afternoon hours (12 PM - 3 PM) can lead to severe heat exhaustion.",
        "Always cover your head with a light cotton cloth or gamchha and carry a bottle of water mixed with a pinch of salt.",
        "Drink traditional cooling drinks like aam panna (raw mango drink), chaas (buttermilk), and coconut water.",
        "If someone collapses or stops sweating with very hot skin, move them immediately to shade, pour cool water over their body, and rush to a clinic."
      ],
      hi: [
        "दोपहर 12 से 3 बजे के बीच कड़ी धूप में खेतों में काम करने से लू लगने का गंभीर खतरा रहता है।",
        "धूप में निकलते समय सिर को सूती गमछे या टोपी से ढकें और साथ में पानी व नींबू-पानी जरूर रखें।",
        "कच्चे आम का पना, छाछ, नारियल पानी और सत्तू का सेवन करें जो शरीर को प्राकृतिक ठंडक देते हैं।",
        "यदि किसी को तेज बुखार हो, पसीना बंद हो जाए या चक्कर खाकर गिर पड़े, तो तुरंत छांव में लिटाएं और सिर पर ठंडा पानी डालें।"
      ]
    },
    tip: {
      en: "⚠️ Emergency: High body temperature without sweating is a medical emergency. Rush to the PHC.",
      hi: "⚠️ आपातकाल: पसीना बंद होने के साथ शरीर अत्यधिक तपना गंभीर स्थिति है। तुरंत अस्पताल ले जाएं।"
    }
  }
];

// -----------------------------------------------------------------------------
// 3. SAMPLE COMMUNITY HEALTH CAMPS (Bilingual & Unverified Demo Data)
// -----------------------------------------------------------------------------
const sampleHealthCamps = [
  {
    id: "camp-1",
    type: { en: "Eye Care Drive", hi: "नेत्र जांच शिविर" },
    title: {
      en: "Free Cataract & Vision Screening Camp",
      hi: "निःशुल्क मोतियाबिंद व दृष्टि जांच शिविर"
    },
    date: "First Saturday of Next Month",
    time: "09:30 AM - 02:00 PM",
    location: {
      en: "Community Health Centre (CHC) Main Hall",
      hi: "सामुदायिक स्वास्थ्य केंद्र (CHC) मुख्य परिसर"
    },
    desc: {
      en: "Free eye checkup for seniors, testing for cataracts, and distribution of reading spectacles.",
      hi: "वरिष्ठ नागरिकों के लिए आंखों की जांच, मोतियाबिंद का परीक्षण और नजर के चश्मों का निःशुल्क वितरण।"
    }
  },
  {
    id: "camp-2",
    type: { en: "Maternal & Child Drive", hi: "मातृत्व व शिशु शिविर" },
    title: {
      en: "Village Health, Sanitation & Nutrition Day (VHSND)",
      hi: "ग्राम स्वास्थ्य, स्वच्छता एवं पोषण दिवस (VHSND)"
    },
    date: "Every Wednesday & Friday",
    time: "10:00 AM - 01:00 PM",
    location: {
      en: "Village Anganwadi Centre",
      hi: "ग्राम आंगनवाड़ी केंद्र"
    },
    desc: {
      en: "Routine child immunization, pregnant women hemoglobin check, IFA tablet distribution, and supplementary nutrition.",
      hi: "बच्चों का नियमित टीकाकरण, गर्भवती माताओं की खून जांच, आयरन की गोलियां और पोषण आहार वितरण।"
    }
  },
  {
    id: "camp-3",
    type: { en: "NCD Screening", hi: "गैर-संचारी रोग जांच" },
    title: {
      en: "BP, Blood Sugar & Diabetes Awareness Camp",
      hi: "रक्तचाप, मधुमेह (शुगर) एवं सामान्य स्वास्थ्य शिविर"
    },
    date: "Second Sunday of the Month",
    time: "08:30 AM - 12:30 PM",
    location: {
      en: "Ayushman Arogya Mandir (Sub-Centre / HWC)",
      hi: "आयुष्मान आरोग्य मंदिर (उप-स्वास्थ्य केंद्र)"
    },
    desc: {
      en: "Free blood pressure testing, random blood glucose testing for citizens 30+ years, and dietary guidance by medical officers.",
      hi: "30 वर्ष से अधिक उम्र के लोगों के लिए बीपी व शुगर की निःशुल्क जांच और डॉक्टर द्वारा खान-पान की सलाह।"
    }
  },
  {
    id: "camp-4",
    type: { en: "Adolescent Health", hi: "किशोरी स्वास्थ्य दिवस" },
    title: {
      en: "Kishori Shakti & Anemia Elimination Drive",
      hi: "किशोरी स्वास्थ्य एवं एनीमिया उन्मूलन दिवस"
    },
    date: "Third Tuesday of the Month",
    time: "11:00 AM - 03:00 PM",
    location: {
      en: "Gram Panchayat Bhawan",
      hi: "ग्राम पंचायत भवन"
    },
    desc: {
      en: "Awareness on menstrual hygiene, sanitary napkin availability, hemoglobin screening, and blue IFA tablets for teenage girls.",
      hi: "माहवारी स्वच्छता, सेनेटरी नैपकिन की उपलब्धता, हीमोग्लोबिन परीक्षण और किशोरियों के लिए पोषण मार्गदर्शन।"
    }
  }
];

// -----------------------------------------------------------------------------
// 4. SAMPLE UNVERIFIED COMMUNITY HEALTHCARE FACILITIES (Demo Fallback)
// -----------------------------------------------------------------------------
const sampleDemoFacilities = [
  {
    id: "fac-1",
    name: "Primary Health Centre (PHC) - Community Care",
    type: "PHC",
    address: "Block Main Road, Near Panchayat Bhawan",
    services: "Outpatient (OPD), Normal Delivery, Immunization, Basic Pharmacy, Cold Chain",
    status: "sample",
    lat: 25.3176,
    lon: 82.9739
  },
  {
    id: "fac-2",
    name: "Community Health Centre (CHC) - 30-Bed Facility",
    type: "CHC",
    address: "Tehsil Headquarters, Opposite Bus Stand",
    services: "24x7 Emergency, General Surgery, Pediatric Care, X-Ray, Pathology Lab",
    status: "sample",
    lat: 25.3216,
    lon: 82.9850
  },
  {
    id: "fac-3",
    name: "Ayushman Bharat Health & Wellness Sub-Centre",
    type: "Sub Centre",
    address: "Village Sector 3, Near Primary School",
    services: "Community Health Officer (CHO), Maternal Care, NCD Screening, Free Essential Drugs",
    status: "sample",
    lat: 25.3100,
    lon: 82.9600
  },
  {
    id: "fac-4",
    name: "District Civil Hospital",
    type: "District Hospital",
    address: "District Administrative Complex, Civil Lines",
    services: "Multi-Specialty Inpatient, ICU, Trauma Centre, Blood Bank, CT Scan",
    status: "sample",
    lat: 25.3300,
    lon: 82.9900
  }
];

// -----------------------------------------------------------------------------
// 5. APPLICATION STATE & LOCAL STORAGE KEYS
// -----------------------------------------------------------------------------
const STORAGE_KEYS = {
  LANG: "gramhealth_lang",
  REMINDERS: "gramhealth_reminders"
};

const appState = {
  lang: "en",
  currentTab: "home",
  facilitiesFilter: "all",
  activeFacilities: [...sampleDemoFacilities],
  reminders: []
};

// -----------------------------------------------------------------------------
// 6. MAIN CONTROLLER & INITIALIZATION
// -----------------------------------------------------------------------------
const app = {
  /**
   * Initializes the application, attaches event listeners, loads stored data.
   */
  init() {
    this.loadPreferences();
    this.setupNavigation();
    this.setupLanguageSwitcher();
    this.setupScreener();
    this.setupFacilityFinder();
    this.setupEducation();
    this.setupReminders();
    this.renderCamps();
    this.renderEducationalCards();
    this.applyTranslations();
  },

  /**
   * Loads saved language and reminder data from localStorage.
   */
  loadPreferences() {
    try {
      const savedLang = localStorage.getItem(STORAGE_KEYS.LANG);
      if (savedLang === "en" || savedLang === "hi") {
        appState.lang = savedLang;
      }
      const savedReminders = localStorage.getItem(STORAGE_KEYS.REMINDERS);
      if (savedReminders) {
        appState.reminders = JSON.parse(savedReminders);
      }
    } catch (e) {
      console.warn("Local storage access warning:", e);
    }
  },

  /**
   * Tab Navigation System (Dashboard, Screener, Facilities, Education, Reminders, Helplines)
   */
  setupNavigation() {
    const navLinks = document.querySelectorAll(".nav-link");
    const brandLink = document.getElementById("brandLink");
    const mobileBtn = document.getElementById("mobileMenuBtn");
    const primaryNav = document.getElementById("primaryNav");

    navLinks.forEach((button) => {
      button.addEventListener("click", (e) => {
        const targetTab = e.currentTarget.getAttribute("data-tab");
        this.switchTab(targetTab);
        if (primaryNav.classList.contains("is-open")) {
          primaryNav.classList.remove("is-open");
          mobileBtn.setAttribute("aria-expanded", "false");
        }
      });
    });

    if (brandLink) {
      brandLink.addEventListener("click", (e) => {
        e.preventDefault();
        this.switchTab("home");
      });
    }

    if (mobileBtn && primaryNav) {
      mobileBtn.addEventListener("click", () => {
        const isOpen = primaryNav.classList.toggle("is-open");
        mobileBtn.setAttribute("aria-expanded", isOpen ? "true" : "false");
      });
    }
  },

  /**
   * Switches the active content view panel and updates tabs/ARIA attributes.
   */
  switchTab(tabId) {
    const panels = document.querySelectorAll(".tab-panel");
    const navLinks = document.querySelectorAll(".nav-link");

    panels.forEach((panel) => {
      const isTarget = panel.id === `panel-${tabId}`;
      panel.classList.toggle("active", isTarget);
      panel.hidden = !isTarget;
    });

    navLinks.forEach((link) => {
      const isTarget = link.getAttribute("data-tab") === tabId;
      link.classList.toggle("active", isTarget);
      link.setAttribute("aria-selected", isTarget ? "true" : "false");
    });

    appState.currentTab = tabId;
    window.scrollTo({ top: 0, behavior: "smooth" });
  },

  /**
   * Bilingual English/Hindi toggle handlers.
   */
  setupLanguageSwitcher() {
    const btnEn = document.getElementById("langEnBtn");
    const btnHi = document.getElementById("langHiBtn");

    if (btnEn && btnHi) {
      btnEn.addEventListener("click", () => this.setLanguage("en"));
      btnHi.addEventListener("click", () => this.setLanguage("hi"));
    }
  },

  /**
   * Sets the active language, saves to localStorage, updates DOM.
   */
  setLanguage(langCode) {
    appState.lang = langCode;
    try {
      localStorage.setItem(STORAGE_KEYS.LANG, langCode);
    } catch (e) {
      console.warn("Could not save language to localStorage:", e);
    }

    const btnEn = document.getElementById("langEnBtn");
    const btnHi = document.getElementById("langHiBtn");
    if (btnEn && btnHi) {
      btnEn.classList.toggle("active", langCode === "en");
      btnEn.setAttribute("aria-pressed", langCode === "en" ? "true" : "false");
      btnHi.classList.toggle("active", langCode === "hi");
      btnHi.setAttribute("aria-pressed", langCode === "hi" ? "true" : "false");
    }

    document.documentElement.lang = langCode;
    this.applyTranslations();
    this.renderEducationalCards();
    this.renderCamps();
    this.renderReminders();
    this.renderFacilities(appState.activeFacilities);
    this.updateOrsGuide();

    // If screening results are already shown, re-evaluate to translate result text
    const resultBox = document.getElementById("screeningResultBox");
    if (resultBox && resultBox.style.display !== "none" && this.lastScreeningEvaluation) {
      this.displayScreeningResults(this.lastScreeningEvaluation);
    }
  },

  /**
   * Updates all DOM elements with [data-i18n] attributes using the dictionary.
   */
  applyTranslations() {
    const dict = i18nData[appState.lang] || i18nData.en;
    document.querySelectorAll("[data-i18n]").forEach((el) => {
      const key = el.getAttribute("data-i18n");
      if (dict[key]) {
        el.innerHTML = dict[key];
      }
    });
  },

  // ---------------------------------------------------------------------------
  // 7. SYMPTOM SCREENER (Rule-Based Triage Engine)
  // ---------------------------------------------------------------------------
  setupScreener() {
    const form = document.getElementById("screeningForm");
    const resetBtn = document.getElementById("btnResetScreener");

    if (form) {
      form.addEventListener("submit", (e) => {
        e.preventDefault();
        this.evaluateSymptoms();
      });
    }

    if (resetBtn) {
      resetBtn.addEventListener("click", () => {
        form.reset();
        this.clearScreenerErrors();
        const resultBox = document.getElementById("screeningResultBox");
        if (resultBox) {
          resultBox.style.display = "none";
          resultBox.innerHTML = "";
        }
        this.lastScreeningEvaluation = null;
      });
    }
  },

  clearScreenerErrors() {
    document.getElementById("errAge").textContent = "";
    document.getElementById("errDuration").textContent = "";
    document.getElementById("errSymptoms").textContent = "";
  },

  /**
   * Evaluates patient inputs against transparent, conservative clinical rules.
   */
  evaluateSymptoms() {
    this.clearScreenerErrors();
    const dict = i18nData[appState.lang];

    const ageGroup = document.getElementById("patientAgeGroup").value;
    const duration = document.getElementById("symptomDuration").value;
    const isPregnant = document.getElementById("isPregnant").checked;

    // Collect warning signs and common symptoms
    const warningSignEls = document.querySelectorAll('input[name="warningSigns"]:checked');
    const warningSigns = Array.from(warningSignEls).map((el) => el.value);

    const symptomEls = document.querySelectorAll('input[name="symptoms"]:checked');
    const symptoms = Array.from(symptomEls).map((el) => el.value);

    // Form Validation
    let hasError = false;
    if (!ageGroup) {
      document.getElementById("errAge").textContent = dict.errSelectAge;
      hasError = true;
    }
    if (!duration) {
      document.getElementById("errDuration").textContent = dict.errSelectDuration;
      hasError = true;
    }
    if (warningSigns.length === 0 && symptoms.length === 0) {
      document.getElementById("errSymptoms").textContent = dict.errSelectSymptom;
      hasError = true;
    }

    if (hasError) return;

    // --- RULE-BASED TRIAGE EVALUATION ---
    // Conservatively categorizes into: 'red' (Emergency), 'amber' (Moderate/Doctor Visit), 'green' (Mild/Self-Care)
    let tier = "green";
    const triggers = [];

    // Red Flag 1: Any explicit emergency sign selected
    if (warningSigns.length > 0) {
      tier = "red";
      triggers.push({
        en: "One or more critical emergency warning signs are present.",
        hi: "एक या अधिक गंभीर आपातकालीन खतरे के संकेत मौजूद हैं।"
      });
    }

    // Red Flag 2: Infant with fever lasting more than 24 hours or severe diarrhea
    if (ageGroup === "infant") {
      if (symptoms.includes("fever") && duration !== "under24") {
        tier = "red";
        triggers.push({
          en: "Infants under 2 years with fever exceeding 24 hours require urgent medical evaluation to rule out acute sepsis or pneumonia.",
          hi: "2 वर्ष से छोटे शिशुओं में 24 घंटे से अधिक का बुखार गंभीर संक्रमण का संकेत हो सकता है, तत्काल डॉक्टर को दिखाएं।"
        });
      }
      if (symptoms.includes("diarrhea")) {
        if (tier !== "red") tier = "amber";
        triggers.push({
          en: "Infant diarrhea carries a very high risk of rapid, life-threatening dehydration.",
          hi: "शिशुओं में दस्त से बहुत तेजी से शरीर में पानी की कमी हो सकती है।"
        });
      }
    }

    // Red Flag 3: Pregnancy with fever, vomiting, or stomach pain
    if (isPregnant) {
      if (symptoms.includes("fever") || symptoms.includes("stomach_pain") || symptoms.includes("burning_urination")) {
        tier = tier === "red" ? "red" : "amber";
        triggers.push({
          en: "In pregnant patients, fever or abdominal discomfort warrants prompt evaluation by an obstetrician or ANM/PHC.",
          hi: "गर्भावस्था के दौरान बुखार या पेट दर्द में बिना देरी किए एएनएम या अस्पताल के डॉक्टर से जांच करानी चाहिए।"
        });
      }
    }

    // Amber Rules: Elderly with multiple symptoms, or symptoms lasting over 3 days
    if (tier !== "red") {
      if (ageGroup === "elderly" && (symptoms.includes("diarrhea") || symptoms.includes("weakness") || symptoms.includes("fever"))) {
        tier = "amber";
        triggers.push({
          en: "Senior citizens have lower physiological reserve and are vulnerable to sudden complications.",
          hi: "वरिष्ठ नागरिकों में रोग प्रतिरोधक क्षमता कम होने से जटिलताओं का खतरा अधिक होता है।"
        });
      }

      if (duration === "days4to7" || duration === "overWeek") {
        tier = "amber";
        triggers.push({
          en: `Symptoms have persisted for ${duration === "days4to7" ? "4 to 7 days" : "more than a week"} without resolving.`,
          hi: `लक्षण ${duration === "days4to7" ? "4 से 7 दिनों" : "एक सप्ताह से अधिक समय"} से बने हुए हैं, क्लीनिकल जांच आवश्यक है।`
        });
      }

      if (symptoms.includes("fever") && symptoms.includes("cough") && symptoms.includes("weakness")) {
        tier = "amber";
        triggers.push({
          en: "Combination of fever, cough, and systemic fatigue indicates a potential respiratory or systemic infection.",
          hi: "बुखार, खांसी और कमजोरी का संयोजन श्वसन संबंधी संक्रमण का संकेत हो सकता है।"
        });
      }

      if (symptoms.includes("burning_urination")) {
        tier = "amber";
        triggers.push({
          en: "Burning urination suggests a probable urinary tract infection (UTI), which requires urine testing at a PHC.",
          hi: "पेशाब में जलन यूटीआई (संक्रमण) का लक्षण हो सकता है, जिसकी जांच पीएचसी में करानी चाहिए।"
        });
      }
    }

    // If still green, provide supportive self-care guidance
    if (tier === "green") {
      triggers.push({
        en: "Mild symptoms of recent onset with no emergency warning signs detected.",
        hi: "शुरुआती हल्के लक्षण और कोई गंभीर खतरे का संकेत नहीं पाया गया।"
      });
    }

    const evaluationData = {
      tier,
      triggers,
      ageGroup,
      duration,
      isPregnant,
      warningSigns,
      symptoms
    };

    this.lastScreeningEvaluation = evaluationData;
    this.displayScreeningResults(evaluationData);
  },

  /**
   * Renders the screening result card with triage color, transparent reasoning, and safe next steps.
   */
  displayScreeningResults(data) {
    const isHi = appState.lang === "hi";
    const box = document.getElementById("screeningResultBox");
    if (!box) return;

    let bannerClass = "";
    let tierTitle = "";
    let tierBadge = "";
    let mainAction = "";
    let immediateSteps = [];
    let safeHomeCare = [];
    let whatNotToDo = [];

    if (data.tier === "red") {
      bannerClass = "triage-red";
      tierTitle = isHi ? "तत्काल आपातकालीन चिकित्सा सहायता की आवश्यकता" : "Immediate Urgent Medical Attention Required";
      tierBadge = isHi ? "रेड टियर: आपातकाल (108)" : "RED TIER: EMERGENCY CARE (108)";
      mainAction = isHi
        ? "मरीज को बिना किसी देरी के तुरंत 108 डायल करके या वाहन से निकटतम प्राथमिक स्वास्थ्य केंद्र (PHC), सामुदायिक स्वास्थ्य केंद्र (CHC) या जिला अस्पताल की आपातकालीन यूनिट में ले जाएं।"
        : "Immediately call 108 for an ambulance or transport the patient to the nearest PHC, CHC, or District Hospital emergency room without delay.";
      
      immediateSteps = isHi
        ? [
            "तुरंत 108 पर कॉल करें या स्थानीय एम्बुलेंस/वाहन की व्यवस्था करें।",
            "मरीज को शांत रखें और आराम की मुद्रा में लिटाएं (सांस लेने में दिक्कत होने पर सिर ऊंचा रखें)।",
            "अस्पताल जाते समय मरीज के पिछले पर्चे, टीकाकरण कार्ड या दवाइयां साथ रखें।",
            "यदि प्रसव पीड़ा या नवजात शिशु है, तो 102 एम्बुलेंस भी बुला सकते हैं।"
          ]
        : [
            "Dial 108 immediately or arrange prompt local hospital transport.",
            "Keep the patient calm; if breathless, seat them upright rather than lying flat.",
            "Carry prior medical cards, immunization records, or current medicine strips to the hospital.",
            "For pregnant mothers or newborns, dial 102 for government ambulance assistance."
          ];

      safeHomeCare = isHi
        ? [
            "मरीज के कपड़े ढीले करें और ताजी हवा आने दें।",
            "यदि मरीज होश में है और निगल सकता है, तो घूंट-घूंट करके थोड़ा पानी या ओआरएस दें। बेहोशी की हालत में मुंह में कुछ न डालें।"
          ]
        : [
            "Loosen tight clothing and ensure good ventilation.",
            "If fully alert and able to swallow, offer small sips of clean water or ORS. Never force fluids if the patient is drowsy or choking."
          ];

      whatNotToDo = isHi
        ? [
            "❌ बिना डॉक्टर के पर्चे के मेडिकल स्टोर से तेज एंटीबायोटिक या नींद/दर्द की गोलियां न लें।",
            "❌ घर पर समय बर्बाद न करें और झाड़-फूंक या अप्रमाणित देसी इलाज के चक्कर में अस्पताल जाने में देरी न करें।"
          ]
        : [
            "❌ Do NOT give over-the-counter antibiotics, steroid injections, or sleeping pills without a physician's order.",
            "❌ Do NOT wait for symptoms to resolve at home or delay clinical transport for unverified alternative cures."
          ];

    } else if (data.tier === "amber") {
      bannerClass = "triage-amber";
      tierTitle = isHi ? "24 से 48 घंटे के भीतर डॉक्टर या PHC से संपर्क करें" : "Consult a Doctor or PHC within 24 - 48 Hours";
      tierBadge = isHi ? "येलो टियर: क्लीनिकल परामर्श आवश्यक" : "AMBER TIER: PROMPT CLINICAL EVALUATION";
      mainAction = isHi
        ? "लक्षणों की अवधि और मरीज की स्थिति को देखते हुए, अगले 24 से 48 घंटों में निकटतम प्राथमिक स्वास्थ्य केंद्र (PHC), उप-स्वास्थ्य केंद्र या आशा/एएनएम कार्यकर्ता से व्यक्तिगत जांच करवाएं।"
        : "Based on duration and symptom combination, schedule an in-person evaluation at your local Primary Health Centre (PHC), Health Sub-Centre, or with your village ASHA/ANM worker within 24 to 48 hours.";

      immediateSteps = isHi
        ? [
            "अपनी नजदीकी आशा दीदी, एएनएम या ब्लॉक पीएचसी डॉक्टर से संपर्क करें।",
            "यदि बुखार 101°F से अधिक है, तो सामान्य पानी की पट्टी माथे पर रखकर तापमान कम करें।",
            "मरीज के लक्षणों (तापमान, दस्त की संख्या, खांसी) पर नजर रखें।"
          ]
        : [
            "Contact your village ASHA worker, ANM, or visit your block PHC.",
            "For elevated fever, apply room-temperature water sponges to forehead and neck.",
            "Monitor key signs: count frequency of loose stools and record temperature if a thermometer is available."
          ];

      safeHomeCare = isHi
        ? [
            "ओआरएस, नींबू-पानी, नारियल पानी या दाल का पानी देकर शरीर में पानी की कमी न होने दें।",
            "पचने में आसान ताजा सुपाच्य भोजन (खिचड़ी, दलिया) दें।",
            "मरीज को भरपूर आराम करने दें।"
          ]
        : [
            "Drink plenty of clean fluids: ORS, tender coconut water, diluted buttermilk, or clear dal soup.",
            "Provide light, nutritious, freshly prepared meals (khichdi, soft rice, boiled vegetables).",
            "Ensure ample bed rest in a quiet, well-ventilated room."
          ];

      whatNotToDo = isHi
        ? [
            "❌ मेडिकल स्टोर से बिना जांच के एंटीबायोटिक कैप्सूल खरीदकर न खाएं।",
            "❌ यदि सांस फूलने लगे, सीने में दर्द हो या अत्यधिक कमजोरी आ जाए, तो तुरंत 108 पर कॉल करें।"
          ]
        : [
            "❌ Do NOT purchase unprescribed antibiotic courses or heavy pain relievers from informal shops.",
            "❌ Do NOT ignore sudden onset of shortness of breath, confusion, or inability to keep fluids down."
          ];

    } else {
      bannerClass = "triage-green";
      tierTitle = isHi ? "हल्के लक्षण: घरेलू देखभाल व निगरानी" : "Mild Symptoms: Supportive Home Care & Monitoring";
      tierBadge = isHi ? "ग्रीन टियर: सामान्य लक्षण" : "GREEN TIER: SELF-MONITORING";
      mainAction = isHi
        ? "वर्तमान में कोई गंभीर लक्षण नहीं दिख रहा है। घर पर सुरक्षित देखभाल करें और शरीर में पानी की कमी न होने दें। यदि 48 घंटे में सुधार न हो, तो पीएचसी जाकर जांच कराएं।"
        : "Symptoms appear mild without immediate red flags. Practice safe supportive care, rest, and fluid intake. If symptoms worsen or do not resolve in 48 hours, visit your local Primary Health Centre.";

      immediateSteps = isHi
        ? [
            "पर्याप्त मात्रा में साफ उबला पानी पिएं।",
            "भरपूर नींद लें और तेज धूप या भारी श्रम से बचें।",
            "अपनी ग्राम आशा दीदी या एएनएम को अपनी स्थिति से अवगत कराएं।"
          ]
        : [
            "Drink adequate clean, boiled and cooled drinking water.",
            "Prioritize restorative sleep; avoid strenuous field work in the midday sun.",
            "Inform your local ASHA worker if you need guidance on community clinic hours."
          ];

      safeHomeCare = isHi
        ? [
            "खांसी-जुकाम में गुनगुना पानी पिएं और भाप लें।",
            "ताजा, पौष्टिक और सुपाच्य भोजन लें।"
          ]
        : [
            "For mild cough or throat irritation, sip warm fluids and gargle with warm water.",
            "Maintain wholesome nutrition with seasonal fruits and light warm porridge."
          ];

      whatNotToDo = isHi
        ? [
            "❌ मामूली जुकाम या हल्के बुखार के लिए अनावश्यक दवाइयों का सेवन न करें।",
            "❌ यदि लक्षण 3 दिन से अधिक बने रहें तो नजरअंदाज न करें।"
          ]
        : [
            "❌ Do NOT self-medicate with leftover medicines or unverified concoctions.",
            "❌ Do NOT disregard symptoms if they progress or fail to improve after 3 days."
          ];
    }

    // Format Demographics & Triggers
    const triggerHtml = data.triggers
      .map((t) => `<li>${isHi ? t.hi : t.en}</li>`)
      .join("");

    const ageLabelMap = {
      infant: isHi ? "शिशु (< 2 वर्ष)" : "Infant (< 2 yrs)",
      child: isHi ? "बच्चा (2-12 वर्ष)" : "Child (2-12 yrs)",
      adult: isHi ? "वयस्क (13-59 वर्ष)" : "Adult (13-59 yrs)",
      elderly: isHi ? "वरिष्ठ (60+ वर्ष)" : "Senior Citizen (60+)"
    };

    const durationLabelMap = {
      under24: isHi ? "< 24 घंटे" : "< 24 Hours",
      days1to3: isHi ? "1 - 3 दिन" : "1 - 3 Days",
      days4to7: isHi ? "4 - 7 दिन" : "4 - 7 Days",
      overWeek: isHi ? "> 1 सप्ताह" : "> 1 Week"
    };

    const summaryMetaHtml = `
      <div class="triage-summary-grid">
        <div class="summary-meta-item">
          <strong>${isHi ? "आयु वर्ग" : "Age Group"}</strong>
          <span>${ageLabelMap[data.ageGroup] || data.ageGroup}</span>
        </div>
        <div class="summary-meta-item">
          <strong>${isHi ? "लक्षण समयावधि" : "Duration"}</strong>
          <span>${durationLabelMap[data.duration] || data.duration}</span>
        </div>
        <div class="summary-meta-item">
          <strong>${isHi ? "विशेष स्थिति" : "Special Condition"}</strong>
          <span>${data.isPregnant ? (isHi ? "गर्भावस्था / प्रसव" : "Pregnant / Postpartum") : (isHi ? "कोई नहीं" : "None")}</span>
        </div>
      </div>
    `;

    box.className = `screener-result-card ${bannerClass}`;
    box.style.display = "block";
    box.innerHTML = `
      <div class="triage-banner">
        <div class="triage-header-left">
          <span class="triage-icon" aria-hidden="true">${data.tier === "red" ? "🚨" : data.tier === "amber" ? "⚠️" : "✅"}</span>
          <div>
            <div class="triage-level">${tierBadge}</div>
            <div class="triage-heading">${tierTitle}</div>
          </div>
        </div>
      </div>

      <div class="triage-content">
        ${summaryMetaHtml}

        <div class="triage-section">
          <div class="triage-sec-title">
            <span>📋</span> ${isHi ? "मूल्यांकन का पारदर्शी आधार (क्यों यह परिणाम?)" : "Transparent Screening Reasoning"}
          </div>
          <ul class="triage-list">${triggerHtml}</ul>
        </div>

        <div class="triage-section">
          <div class="triage-sec-title">
            <span>👉</span> ${isHi ? "अनुशंसित प्राथमिक कदम" : "Recommended Immediate Action"}
          </div>
          <p style="font-weight: 600; color: var(--text-main); margin-bottom: 0.5rem;">${mainAction}</p>
          <ul class="triage-list">
            ${immediateSteps.map((s) => `<li>${s}</li>`).join("")}
          </ul>
        </div>

        <div class="triage-section">
          <div class="triage-sec-title">
            <span>🥣</span> ${isHi ? "सुरक्षित सहायक घरेलू देखभाल" : "Safe Supportive Comfort Measures"}
          </div>
          <ul class="triage-list">
            ${safeHomeCare.map((s) => `<li>${s}</li>`).join("")}
          </ul>
        </div>

        <div class="triage-section">
          <div class="triage-sec-title text-danger">
            <span>⛔</span> ${isHi ? "क्या कदापि न करें (सुरक्षा सावधानियां)" : "What NOT to Do (Safety Precautions)"}
          </div>
          <ul class="triage-list">
            ${whatNotToDo.map((s) => `<li>${s}</li>`).join("")}
          </ul>
        </div>

        <div class="triage-box-caution">
          <strong>${isHi ? "कानूनी व चिकित्सीय सूचना:" : "Medical Notice:"}</strong>
          ${isHi
            ? "यह परिणाम केवल कंप्यूटर आधारित नियमों पर आधारित एक प्रारंभिक स्क्रीनिंग है। ग्राम स्वास्थ्य कोई नुस्खा या डॉक्टरी निदान नहीं देता। किसी भी चिकित्सीय निर्णय के लिए हमेशा योग्य डॉक्टर से संपर्क करें।"
            : "This result is preliminary rule-based triage advice. GramHealth does not prescribe medication or deliver formal diagnoses. Always consult a certified healthcare professional."
          }
        </div>

        <div class="triage-actions">
          <button type="button" class="btn btn-secondary" onclick="window.print()">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><polyline points="6 9 6 2 18 2 18 9"/><path d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2"/><rect x="6" y="14" width="12" height="8"/></svg>
            ${isHi ? "मूल्यांकन पर्ची प्रिंट / सेव करें" : "Print / Save Summary"}
          </button>
          <button type="button" class="btn btn-outline" onclick="app.switchTab('facilities')">
            🏥 ${isHi ? "निकटतम स्वास्थ्य केंद्र खोजें" : "Find Nearby Health Center"}
          </button>
        </div>
      </div>
    `;

    // Smooth scroll to result
    box.scrollIntoView({ behavior: "smooth", block: "start" });
  },

  // ---------------------------------------------------------------------------
  // 8. HEALTHCARE FACILITY FINDER (OpenStreetMap & Public Geosearch)
  // ---------------------------------------------------------------------------
  setupFacilityFinder() {
    const searchForm = document.getElementById("facilitySearchForm");
    const searchInput = document.getElementById("facilitySearchInput");
    const locBtn = document.getElementById("btnUseLocation");
    const filterPills = document.querySelectorAll(".filter-pill");

    if (searchForm) {
      searchForm.addEventListener("submit", (e) => {
        e.preventDefault();
        const query = searchInput.value.trim();
        if (query) {
          this.searchFacilitiesByQuery(query);
        } else {
          this.showFacilityStatus(
            appState.lang === "hi" ? "कृपया शहर, ब्लॉक या 6 अंकों का पिन कोड दर्ज करें।" : "Please enter a town, block, or 6-digit PIN code.",
            "error"
          );
        }
      });
    }

    if (locBtn) {
      locBtn.addEventListener("click", () => {
        this.useUserLocation();
      });
    }

    filterPills.forEach((pill) => {
      pill.addEventListener("click", (e) => {
        filterPills.forEach((p) => p.classList.remove("active"));
        e.currentTarget.classList.add("active");
        appState.facilitiesFilter = e.currentTarget.getAttribute("data-filter");
        this.renderFacilities(appState.activeFacilities);
      });
    });

    // Initial render with default demo facilities
    this.renderFacilities(appState.activeFacilities);
  },

  showFacilityStatus(message, type = "info") {
    const statusBox = document.getElementById("facilityStatusMsg");
    if (!statusBox) return;
    statusBox.className = `status-banner status-${type}`;
    statusBox.textContent = message;
    statusBox.style.display = "block";
  },

  hideFacilityStatus() {
    const statusBox = document.getElementById("facilityStatusMsg");
    if (statusBox) statusBox.style.display = "none";
  },

  /**
   * Browser Geolocation: requires explicit user click & permission.
   */
  useUserLocation() {
    const isHi = appState.lang === "hi";
    if (!navigator.geolocation) {
      this.showFacilityStatus(
        isHi ? "आपके ब्राउज़र में जीपीएस (लोकेशन) सेवा समर्थित नहीं है।" : "Geolocation is not supported by your browser.",
        "error"
      );
      return;
    }

    this.showFacilityStatus(
      isHi ? "जीपीएस अनुमति की प्रतीक्षा की जा रही है..." : "Requesting browser location permission...",
      "info"
    );

    const loadingEl = document.getElementById("facilityLoading");
    if (loadingEl) loadingEl.style.display = "flex";

    navigator.geolocation.getCurrentPosition(
      (position) => {
        const lat = position.coords.latitude;
        const lon = position.coords.longitude;
        this.showFacilityStatus(
          isHi
            ? `स्थान प्राप्त हुआ (${lat.toFixed(4)}, ${lon.toFixed(4)})। OpenStreetMap पर केंद्र खोजे जा रहे हैं...`
            : `Location found (${lat.toFixed(4)}, ${lon.toFixed(4)}). Querying OpenStreetMap...`,
          "info"
        );
        this.fetchOsmFacilitiesByCoords(lat, lon);
      },
      (error) => {
        if (loadingEl) loadingEl.style.display = "none";
        let errMsg = isHi ? "लोकेशन प्राप्त नहीं हो सकी। कृपया पिन कोड या शहर का नाम लिखकर खोजें।" : "Unable to retrieve GPS location. Please search by PIN code or town name.";
        if (error.code === error.PERMISSION_DENIED) {
          errMsg = isHi ? "लोकेशन अनुमति अस्वीकृत की गई। कृपया ऊपर खोज बार में पिन कोड दर्ज करें।" : "Location access was denied. Please enter a PIN code or city in the search bar above.";
        }
        this.showFacilityStatus(errMsg, "error");
      },
      { timeout: 10000, enableHighAccuracy: false }
    );
  },

  /**
   * Search facilities using OpenStreetMap Nominatim geocoding API.
   */
  async searchFacilitiesByQuery(query) {
    const isHi = appState.lang === "hi";
    const loadingEl = document.getElementById("facilityLoading");
    this.hideFacilityStatus();
    if (loadingEl) loadingEl.style.display = "flex";

    try {
      // Nominatim search restricted to India
      const url = `https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(query)}&countrycodes=in&limit=1`;
      const response = await fetch(url, { headers: { "Accept-Language": appState.lang } });

      if (!response.ok) {
        throw new Error(`Nominatim error: ${response.status}`);
      }

      const results = await response.json();
      if (!results || results.length === 0) {
        if (loadingEl) loadingEl.style.display = "none";
        this.showFacilityStatus(
          isHi
            ? `"${query}" के लिए कोई स्थान नहीं मिला। नीचे नमूना स्वास्थ्य केंद्र प्रदर्शित किए जा रहे हैं।`
            : `No matching location found for "${query}". Displaying sample community healthcare centers below.`,
          "info"
        );
        this.loadSampleFallbackFacilities(query);
        return;
      }

      const place = results[0];
      const lat = parseFloat(place.lat);
      const lon = parseFloat(place.lon);

      this.showFacilityStatus(
        isHi
          ? `स्थान मिला: ${place.display_name.slice(0, 70)}... OpenStreetMap डेटा लोड हो रहा है...`
          : `Found: ${place.display_name.slice(0, 70)}... Searching nearby healthcare centers...`,
        "info"
      );

      await this.fetchOsmFacilitiesByCoords(lat, lon, query);
    } catch (err) {
      console.warn("External OSM geocoding unavailable:", err);
      if (loadingEl) loadingEl.style.display = "none";
      this.showFacilityStatus(
        isHi
          ? "बाहरी OpenStreetMap सेवा से संपर्क नहीं हो सका (ऑफ़लाइन या नेटवर्क सीमा)। परीक्षण हेतु नमूना केंद्र प्रदर्शित हैं।"
          : "External OpenStreetMap service unreachable (offline or network restriction). Showing sample test centers with direct OSM links.",
        "info"
      );
      this.loadSampleFallbackFacilities(query);
    }
  },

  /**
   * Attempts an Overpass API query for real healthcare facilities near coordinates;
   * gracefully falls back to structured OSM links if network or rate limits occur.
   */
  async fetchOsmFacilitiesByCoords(lat, lon, queryLabel = "Selected Area") {
    const loadingEl = document.getElementById("facilityLoading");
    const isHi = appState.lang === "hi";

    try {
      // Query Overpass API for amenities within ~15km radius (15000m)
      const overpassQuery = `[out:json][timeout:10];(node["amenity"="hospital"](around:15000,${lat},${lon});node["amenity"="clinic"](around:15000,${lat},${lon});node["healthcare"="centre"](around:15000,${lat},${lon}););out 10;`;
      const overpassUrl = `https://overpass-api.de/api/interpreter?data=${encodeURIComponent(overpassQuery)}`;

      // Setup an AbortController with 7 second timeout so user never hangs
      const controller = new AbortController();
      const timeoutId = setTimeout(() => controller.abort(), 7000);

      const resp = await fetch(overpassUrl, { signal: controller.signal });
      clearTimeout(timeoutId);

      if (loadingEl) loadingEl.style.display = "none";

      if (resp.ok) {
        const data = await resp.json();
        if (data.elements && data.elements.length > 0) {
          const liveList = data.elements.map((el) => {
            const tags = el.tags || {};
            const name = tags.name || tags["name:en"] || tags["name:hi"] || "Community Healthcare Centre";
            let type = "PHC";
            if (tags.amenity === "hospital") type = "District Hospital";
            else if (tags.healthcare === "centre") type = "CHC";

            return {
              id: `osm-${el.id}`,
              name: name,
              type: type,
              address: tags["addr:street"] || tags["addr:city"] || tags["addr:subdistrict"] || `${lat.toFixed(3)}, ${lon.toFixed(3)}`,
              services: tags.operator || "Public Healthcare Facility",
              status: "osm",
              lat: el.lat,
              lon: el.lon
            };
          });

          appState.activeFacilities = liveList;
          this.renderFacilities(liveList);
          this.showFacilityStatus(
            isHi
              ? `OpenStreetMap से ${liveList.length} वास्तविक स्वास्थ्य सुविधाएं प्राप्त हुईं।`
              : `Found ${liveList.length} live healthcare facilities directly from OpenStreetMap.`,
            "info"
          );
          return;
        }
      }
      // If no live elements found in Overpass, generate coordinated OSM direct links
      this.loadSampleFallbackFacilities(queryLabel, lat, lon);
    } catch (err) {
      console.warn("Overpass query bypassed or timed out:", err);
      if (loadingEl) loadingEl.style.display = "none";
      this.loadSampleFallbackFacilities(queryLabel, lat, lon);
    }
  },

  /**
   * Loads sample facilities explicitly labeled as unverified hackathon demo data,
   * with real clickable OpenStreetMap search and directions links.
   */
  loadSampleFallbackFacilities(query = "Sample Area", lat = 25.3176, lon = 82.9739) {
    const isHi = appState.lang === "hi";
    const sampleList = [
      {
        id: "fac-1",
        name: isHi ? `प्राथमिक स्वास्थ्य केंद्र (PHC) - ${query}` : `Primary Health Centre (PHC) - ${query}`,
        type: "PHC",
        address: isHi ? `${query} मुख्य मार्ग, निकट ग्राम पंचायत` : `Main Road, Near Gram Panchayat, ${query}`,
        services: isHi ? "ओपीडी परामर्श, सामान्य प्रसव, टीकाकरण, निशुल्क आवश्यक दवाइयां" : "Outpatient OPD, Normal Delivery, Routine Vaccines, Free Essential Drugs",
        status: "sample",
        lat: lat + 0.005,
        lon: lon + 0.005
      },
      {
        id: "fac-2",
        name: isHi ? `सामुदायिक स्वास्थ्य केंद्र (CHC) - 30 बेड` : `Community Health Centre (CHC) - 30-Bed`,
        type: "CHC",
        address: isHi ? `तहसील मुख्यालय, बस स्टैंड के पास` : `Tehsil Headquarters, Near Bus Depot, ${query}`,
        services: isHi ? "24x7 आपातकालीन सेवा, स्त्री रोग विशेषज्ञ, एक्स-रे, पैथोलॉजी लैब" : "24x7 Emergency Room, Gynecology, Basic X-Ray, Blood Testing Lab",
        status: "sample",
        lat: lat - 0.008,
        lon: lon - 0.008
      },
      {
        id: "fac-3",
        name: isHi ? `आयुष्मान आरोग्य मंदिर (उप-स्वास्थ्य केंद्र)` : `Ayushman Arogya Mandir (Sub-Centre / HWC)`,
        type: "Sub Centre",
        address: isHi ? `प्राथमिक विद्यालय के सामने, वार्ड 2` : `Sector 2, Opposite Primary School, ${query}`,
        services: isHi ? "सीएचओ (कम्युनिटी हेल्थ ऑफिसर), एनसीडी स्क्रीनिंग, टेली-परामर्श" : "Community Health Officer (CHO), NCD Screening, Tele-Consultation",
        status: "sample",
        lat: lat + 0.012,
        lon: lon - 0.004
      },
      {
        id: "fac-4",
        name: isHi ? `जिला सिविल अस्पताल (District Hospital)` : `District Civil Hospital`,
        type: "District Hospital",
        address: isHi ? `कलेक्ट्रेट रोड, जिला मुख्यालय` : `Collectorate Road, District Headquarters`,
        services: isHi ? "विशिष्ट ओपीडी, आईसीयू वार्ड, ब्लड बैंक, उन्नत सर्जरी" : "Multi-Specialty Wards, ICU, Blood Bank, Major Surgical Care",
        status: "sample",
        lat: lat + 0.025,
        lon: lon + 0.02
      }
    ];

    appState.activeFacilities = sampleList;
    this.renderFacilities(sampleList);
  },

  /**
   * Renders facility cards to the DOM with attribution, badges, and OpenStreetMap links.
   */
  renderFacilities(facilities) {
    const isHi = appState.lang === "hi";
    const container = document.getElementById("facilityResultsGrid");
    if (!container) return;

    // Apply active filter
    const filter = appState.facilitiesFilter;
    const filtered = filter === "all" ? facilities : facilities.filter((f) => f.type === filter);

    if (filtered.length === 0) {
      container.innerHTML = `
        <div class="empty-state" style="grid-column: 1 / -1;">
          <div class="empty-icon">🏥</div>
          <p>${isHi ? "इस श्रेणी में कोई स्वास्थ्य केंद्र नहीं मिला। फ़िल्टर में 'सभी केंद्र' चुनें।" : "No facilities matched this filter. Select 'All Facilities' to view available centers."}</p>
        </div>
      `;
      return;
    }

    const typeBadgeMap = {
      PHC: { class: "badge-phc", label: isHi ? "पीएचसी (PHC)" : "Primary Health Centre" },
      CHC: { class: "badge-chc", label: isHi ? "सीएचसी (CHC)" : "Community Health Centre" },
      "District Hospital": { class: "badge-district", label: isHi ? "जिला अस्पताल" : "District Hospital" },
      "Sub Centre": { class: "badge-subcentre", label: isHi ? "उप-स्वास्थ्य केंद्र" : "Health Sub-Centre" }
    };

    container.innerHTML = filtered
      .map((fac) => {
        const typeInfo = typeBadgeMap[fac.type] || { class: "badge-subcentre", label: fac.type };
        const isLive = fac.status === "osm";
        const sourceBadge = isLive
          ? `<span class="badge-source source-osm">✓ ${isHi ? "OpenStreetMap वास्तविक रिकॉर्ड" : "Live OSM Record"}</span>`
          : `<span class="badge-source source-sample">⚠️ ${isHi ? "अपुष्ट डेमो नमूना (परीक्षण डेटा)" : "Unverified Sample Demo Entry"}</span>`;

        // Direct OpenStreetMap view & navigation links (zero proprietary lock-in)
        const osmMapUrl = `https://www.openstreetmap.org/?mlat=${fac.lat}&mlon=${fac.lon}#map=16/${fac.lat}/${fac.lon}`;
        const osmDirectionsUrl = `https://www.openstreetmap.org/directions?engine=fossgis_osrm_car&route=%3B${fac.lat}%2C${fac.lon}`;

        return `
          <article class="facility-card">
            <div class="facility-top">
              <h2 class="facility-name">${fac.name}</h2>
              <span class="badge-tag ${typeInfo.class}">${typeInfo.label}</span>
            </div>
            
            ${sourceBadge}

            <p class="facility-address">
              <strong>${isHi ? "पता:" : "Location:"}</strong> ${fac.address}
            </p>

            <div class="facility-meta">
              <strong>${isHi ? "उपलब्ध सेवाएं:" : "Key Services:"}</strong> ${fac.services}
            </div>

            <div class="facility-links">
              <a href="${osmMapUrl}" target="_blank" rel="noopener noreferrer" class="btn btn-outline btn-sm">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><polygon points="1 6 1 22 8 18 16 22 23 18 23 2 16 6 8 2 1 6"/><line x1="8" y1="2" x2="8" y2="18"/><line x1="16" y1="6" x2="16" y2="22"/></svg>
                ${isHi ? "OSM नक्शा देखें" : "View on OpenStreetMap"}
              </a>
              <a href="${osmDirectionsUrl}" target="_blank" rel="noopener noreferrer" class="btn btn-secondary btn-sm">
                🧭 ${isHi ? "दिशा निर्देश (Directions)" : "Get Directions"}
              </a>
            </div>
          </article>
        `;
      })
      .join("");
  },

  // ---------------------------------------------------------------------------
  // 9. HEALTH EDUCATION & ORS CALCULATOR
  // ---------------------------------------------------------------------------
  setupEducation() {
    const waterInput = document.getElementById("orsWaterLiters");
    if (waterInput) {
      waterInput.addEventListener("input", () => {
        this.updateOrsGuide();
      });
    }
    this.updateOrsGuide();
  },

  /**
   * Interactive calculator according to standard WHO proportions:
   * 1 Liter Clean Boiled Water = 6 level teaspoons Sugar + 1/2 level teaspoon Salt.
   */
  updateOrsGuide() {
    const waterInput = document.getElementById("orsWaterLiters");
    if (!waterInput) return;

    let liters = parseFloat(waterInput.value) || 1;
    if (liters < 1) liters = 1;
    if (liters > 10) liters = 10;

    const sugarSpoons = (liters * 6).toFixed(0);
    const saltSpoonsVal = liters * 0.5;
    const saltSpoonsText = saltSpoonsVal % 1 === 0 ? saltSpoonsVal.toFixed(0) : `${saltSpoonsVal.toFixed(1)}`;

    const isHi = appState.lang === "hi";

    document.getElementById("dispWaterLit").textContent = `${liters} ${isHi ? "लीटर पानी" : "Liter(s)"}`;
    document.getElementById("dispSugarSpoons").textContent = `${sugarSpoons} ${isHi ? "चम्मच चीनी" : "Teaspoons"}`;
    document.getElementById("dispSaltSpoons").textContent = `${saltSpoonsText} ${isHi ? "चम्मच नमक" : "Teaspoon(s)"}`;
  },

  /**
   * Renders educational preventive health cards in Hindi & English.
   */
  renderEducationalCards() {
    const isHi = appState.lang === "hi";
    const container = document.getElementById("eduCardsContainer");
    if (!container) return;

    container.innerHTML = educationalTopics
      .map((topic) => {
        const category = isHi ? topic.category.hi : topic.category.en;
        const title = isHi ? topic.title.hi : topic.title.en;
        const points = isHi ? topic.points.hi : topic.points.en;
        const tip = isHi ? topic.tip.hi : topic.tip.en;

        const pointsHtml = points.map((p) => `<li>${p}</li>`).join("");

        return `
          <article class="edu-card">
            <div class="edu-card-top">
              <div class="edu-icon" aria-hidden="true">${topic.icon}</div>
              <div>
                <span class="edu-card-category">${category}</span>
                <h2 class="edu-card-title">${title}</h2>
              </div>
            </div>
            
            <ul class="edu-points">
              ${pointsHtml}
            </ul>

            <div class="edu-footer-tip">
              ${tip}
            </div>
          </article>
        `;
      })
      .join("");
  },

  // ---------------------------------------------------------------------------
  // 10. REMINDERS & HEALTH CAMPS
  // ---------------------------------------------------------------------------
  setupReminders() {
    const form = document.getElementById("reminderForm");
    const clearAllBtn = document.getElementById("btnClearAllReminders");

    if (form) {
      form.addEventListener("submit", (e) => {
        e.preventDefault();
        this.saveReminder();
      });
    }

    if (clearAllBtn) {
      clearAllBtn.addEventListener("click", () => {
        const isHi = appState.lang === "hi";
        const confirmMsg = isHi
          ? "क्या आप निश्चित रूप से अपने डिवाइस से सभी सहेजे गए रिमाइंडर हटाना चाहते हैं?"
          : "Are you sure you want to delete all saved reminders from this device?";
        if (confirm(confirmMsg)) {
          appState.reminders = [];
          this.persistReminders();
          this.renderReminders();
        }
      });
    }

    this.renderReminders();
  },

  saveReminder() {
    const isHi = appState.lang === "hi";
    const titleInput = document.getElementById("reminderTitle");
    const dateInput = document.getElementById("reminderDate");
    const timeInput = document.getElementById("reminderTime");
    const typeInput = document.getElementById("reminderType");
    const locInput = document.getElementById("reminderLocation");
    const notesInput = document.getElementById("reminderNotes");

    const errTitle = document.getElementById("errReminderTitle");
    const errDate = document.getElementById("errReminderDate");

    errTitle.textContent = "";
    errDate.textContent = "";

    const title = titleInput.value.trim();
    const date = dateInput.value;

    let hasError = false;
    if (!title) {
      errTitle.textContent = isHi ? "कृपया जांच या कार्य का नाम दर्ज करें।" : "Please enter a reminder title or checkup name.";
      hasError = true;
    }
    if (!date) {
      errDate.textContent = isHi ? "कृपया तारीख चुनें।" : "Please select a date.";
      hasError = true;
    }

    if (hasError) return;

    const newReminder = {
      id: "rem_" + Date.now(),
      title,
      date,
      time: timeInput.value || "",
      type: typeInput.value || "other",
      location: locInput.value.trim() || "",
      notes: notesInput.value.trim() || "",
      createdAt: new Date().toISOString()
    };

    appState.reminders.unshift(newReminder);
    this.persistReminders();
    this.renderReminders();

    // Reset Form
    document.getElementById("reminderForm").reset();
  },

  persistReminders() {
    try {
      localStorage.setItem(STORAGE_KEYS.REMINDERS, JSON.stringify(appState.reminders));
    } catch (e) {
      console.warn("Could not persist reminders:", e);
    }
  },

  deleteReminder(id) {
    appState.reminders = appState.reminders.filter((r) => r.id !== id);
    this.persistReminders();
    this.renderReminders();
  },

  renderReminders() {
    const isHi = appState.lang === "hi";
    const container = document.getElementById("remindersContainer");
    if (!container) return;

    if (appState.reminders.length === 0) {
      container.innerHTML = `
        <div class="empty-state">
          <div class="empty-icon">📅</div>
          <p>${isHi ? "अभी तक कोई रिमाइंडर नहीं जोड़ा गया है।" : "No reminders saved yet."}</p>
          <span style="font-size: 0.85rem; color: var(--text-light);">${isHi ? "टीकाकरण या डॉक्टर जांच याद रखने के लिए ऊपर फॉर्म भरें।" : "Use the form on the left to track vaccinations, ANC visits or BP checks."}</span>
        </div>
      `;
      return;
    }

    // Determine Today, Upcoming, or Past
    const todayStr = new Date().toISOString().split("T")[0];

    const categoryNames = {
      vaccine: isHi ? "टीकाकरण" : "Child Vaccine",
      anc: isHi ? "गर्भावस्था जांच" : "Maternal ANC",
      routine: isHi ? "सामान्य जांच" : "Routine Check",
      medicine: isHi ? "दवा रीफिल" : "Medicine Refill",
      other: isHi ? "स्वास्थ्य फॉलो-अप" : "General Health"
    };

    container.innerHTML = appState.reminders
      .map((rem) => {
        let statusClass = "upcoming";
        let statusBadge = `<span class="reminder-badge rb-upcoming">${isHi ? "आगामी" : "Upcoming"}</span>`;

        if (rem.date === todayStr) {
          statusClass = "today";
          statusBadge = `<span class="reminder-badge rb-today">⚡ ${isHi ? "आज है!" : "Today!"}</span>`;
        } else if (rem.date < todayStr) {
          statusClass = "past";
          statusBadge = `<span class="reminder-badge rb-past">${isHi ? "समाप्त" : "Past"}</span>`;
        }

        const catLabel = categoryNames[rem.type] || rem.type;

        return `
          <article class="reminder-card ${statusClass}">
            <div class="reminder-top">
              <h3 class="reminder-title">${rem.title}</h3>
              ${statusBadge}
            </div>

            <div class="reminder-meta">
              <span>📅 ${rem.date} ${rem.time ? `⏰ ${rem.time}` : ""}</span>
              <span>🏷️ ${catLabel}</span>
              ${rem.location ? `<span>📍 ${rem.location}</span>` : ""}
            </div>

            ${rem.notes ? `<div class="reminder-notes">📝 ${rem.notes}</div>` : ""}

            <div>
              <button type="button" class="reminder-delete-btn" onclick="app.deleteReminder('${rem.id}')">
                🗑️ ${isHi ? "हटाएं" : "Delete"}
              </button>
            </div>
          </article>
        `;
      })
      .join("");
  },

  /**
   * Renders sample health camp drives with explicit unverified demo labeling.
   */
  renderCamps() {
    const isHi = appState.lang === "hi";
    const container = document.getElementById("campsGridContainer");
    if (!container) return;

    container.innerHTML = sampleHealthCamps
      .map((camp) => {
        const type = isHi ? camp.type.hi : camp.type.en;
        const title = isHi ? camp.title.hi : camp.title.en;
        const location = isHi ? camp.location.hi : camp.location.en;
        const desc = isHi ? camp.desc.hi : camp.desc.en;

        return `
          <article class="camp-card">
            <span class="camp-type-badge">${type}</span>
            <h3 class="camp-title">${title}</h3>
            
            <div class="camp-meta">
              <p><strong>🗓️ ${isHi ? "दिन/तारीख:" : "Schedule:"}</strong> ${camp.date}</p>
              <p><strong>⏰ ${isHi ? "समय:" : "Timing:"}</strong> ${camp.time}</p>
              <p class="camp-location">📍 ${location}</p>
            </div>

            <p style="font-size: 0.88rem; color: var(--text-muted); margin-bottom: 0.75rem;">${desc}</p>
            
            <span class="camp-unverified-tag">⚠️ ${isHi ? "नमूना प्रविष्टि (आशा/पंचायत से सत्यापित करें)" : "Demo Entry (Verify with Panchayat/ASHA)"}</span>
          </article>
        `;
      })
      .join("");
  }
};

// Expose app to global scope for inline button handlers (onclick="app.switchTab(...)")
window.app = app;

// Bootstrap when DOM is ready
document.addEventListener("DOMContentLoaded", () => {
  app.init();
});
