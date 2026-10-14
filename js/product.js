const productsData = [
    {
        id: "apt-c",
        category: "Supplements",
        title: "APT C",
        subtitle: "Vitamin C 180mg (Sugar Free)",
        img: "image/aptc.png",
        description: "APT C combines high-potency Vitamin C with Zinc to help support and maintain a healthy immune system daily.",
        features: [
            "Food Supplement",
            "Supports immune system and reduces fatigue",
            "20 effervescent tablets",
            "Take one tablet daily, dissolved in a glass of water (200 ml), or as directed by a healthcare practitioner.",
            "Nutrillo Gmbh Germany",
        ]
    },
    {
        id: "apt-m",
        category: "Supplements",
        title: "APT M",
        subtitle: "Vitamin C 100mg, Vitamin E 10mgαTE, Vitamin B1 1.4mg, Vitamin B2 1.6mg, Niacin 15 mgNE, Vitamin B6 2mg, Folic Acid 200mcg, Vitamin B12 1mcg, Biotin 150mcg, Pantothenic Acid 6mg (Sugar Free)",
        img: "image/aptm.png",
        description: "Do not consume more than suggested daily intake. Food supplement should not be used as a substitute for a varied and balanced diet and healthy lifestyle. If symptoms persist, consult a healthcare practitioner. Not recommended for children under 4 years of age unless directed by a healthcare practitioner.",
        features: [
            "20 effervescent tablets",
            "Take one tablet daily, dissolved in a glass of water (200 ml), or as directed by a healthcare practitioner.",
            "There are no side effects if taken as prescribed",
            "Nutrillo Gmbh.,Germany",
        ]
    },
    {
        id: "apt-m+n",
         category: "Supplements",
        title: "APT M+N",
        subtitle: "Vitamin C 100mg, Vitamin E 10mgαTE, Vitamin B1 1.4mg, Vitamin B2 1.6mg, Niacin 15 mgNE, Vitamin B6 2mg, Folic Acid 200mcg, Vitamin B12 1mcg, Biotin 150mcg, Pantothenic Acid 6mg, Potassium 175mg, Magnesium 45mg, Calcium 120mg (Sugar Free)",
        img: "image/aptmn.png",
        description: "Do not consume more than suggested daily intake. Food supplement should not be used as a substitute for a varied and balanced diet and healthy lifestyle. If symptoms persist, consult a healthcare practitioner. Not recommended for children under 4 years of age unless directed by a healthcare practitioner.",
        features: [
            "20 effervescent tablets",
            "Take one tablet daily, dissolved in a glass of water (200 ml), or as directed by a healthcare practitioner.",
            "There are no side effects if taken as prescribed",
            "Nutrillo Gmbh.,Germany",
        ]
    },
    {
        id: "apt-ceejuicy",
        category: "Supplements",
        title: "APT CEEJUICY",
        subtitle: "Vitamin-C 1000mg Effervescent",
        img: "image/ceejuicy.png",
        description: "Patients prone to recurrent renal Calculi, those undergoing stool occult blood test and those on anticoagulant therapy should not take excessive dose of ascorbic acid over an extended period of time.",
        features: [
            "5 x 4 effervescent tablets",
            "1-2 Tablets daily or as directed by physician. Dissolve one tablet in glass of water (Approx 200ml). Drink as soon as tablet dissolves.",
            "There are no side effects if taken as prescribed",
            "SciTech Specialities Pvt. Ltd., India",
        ]
    },
    {
        id: "daily-vit",
        category: "Supplements",
        title: "DailyVIt Capsule",
        subtitle: "Multivitamin & Minerals",
        img: "image/dailyvit.png",
        description: "Beneficial in patients with G.I disorders, chronic alcoholism, heart related diseases, diabetes or other physiologically stressful conditions. Helps improve mental function and physical endurance. Eases anxiety, relieves symptoms of chronic fatigue. Boosts immune system. Promotes healthy nerve and muscle functions. Natural detoxifier and anti aging effect. Exerts cardiovascular benefits. Helps fight degenerative diseases.",
        features: [
            "3 x 10 soft gelatin capsules",
            "One capsule daily, preferably taken one hour after meals. The capsule should be swallowed whole with water",
            "Do not exceed the stated dose. Keep out of reach of children. If symptoms persist, consult your doctor",
            "ASOJ SOFT CAPS PVT. LTD, India",
        ]
    },
    {
        id: "apt-preg",
        category: "Supplements",
        title: "APT-Preg",
        subtitle: "Dietary Supplement (Prenatal Care)",
        img: "image/dailyvit.png",
        description: "Vitamin B1 1.4mg, Vitamin B2 1.4mg, Vitamin B6 5mg, Vitamin B12 5mcg, Vitamin C 80mg, Vitamin D 10mcg, Vitamin E 20mg, Vitamin K 50mcg, Folic acid 400mcg, Iron 18mg, Copper 1mg, Zinc 15mg, Selenium 60mcg, Iodine 100mcg, Chromium 15mcg, Calcium 200mg",
        features: [
            "3 x 10 capsules",
            "One capsule daily, preferred after meal.",
            "There are no side effects if taken as prescribed",
            "PHARMACY Laboratories Plus Robert Filipowicz.,Poland",
        ]

    },
    {
        id: "apt-preg",
        category: "Supplements",
        title: "APT-Preg",
        subtitle: "Dietary Supplement (Prenatal Care)",
        img: "image/dailyvit.png",
        description: "Vitamin B1 1.4mg, Vitamin B2 1.4mg, Vitamin B6 5mg, Vitamin B12 5mcg, Vitamin C 80mg, Vitamin D 10mcg, Vitamin E 20mg, Vitamin K 50mcg, Folic acid 400mcg, Iron 18mg, Copper 1mg, Zinc 15mg, Selenium 60mcg, Iodine 100mcg, Chromium 15mcg, Calcium 200mg",
        features: [
            "3 x 10 capsules",
            "One capsule daily, preferred after meal.",
            "There are no side effects if taken as prescribed",
            "PHARMACY Laboratories Plus Robert Filipowicz.,Poland",
        ]
    },
    {
        id: "apt-menopause",
        category: "Supplements",
        title: "APT-Menopause",
        subtitle: "Food supplement (Women's Vigor & Longevity)",
        img: "image/dailyvit.png",
        description: "Magnesium(Magnesium Citrate) 187.5mg, Dry lemon balm herb extract (Melissa officinalis) 100mg(400mg)**, Dry soybean extract (Glycine max) standardized on 40% content of soy isoflavones 50mg including 20mg of soy isoflavones, Vitamin C (L-ascorbic acid) 40mg, Vitamin B6 0.7mg, Vitamin B1 0.55mg",
        features: [
            "3 x 10 capsules",
            "1-2 capsules per day or as directed by medical professional.",
            "There are no side effects if taken as prescribed.",
            "PHARMACY Laboratories Plus Robert Filipowicz.,Poland",
        ]
    },
    {
        id: "apt-livoforte",
        category: "Supplements",
        title: "APT-Livoforte",
        subtitle: "Food Supplement (Quadri Unique Protection)",
        img: "image/dailyvit.png",
        description: "L-ornithine L-aspartate 150mg, Choline Tartrate 66.9mg including 27.5mg of choline, Dry extract from the leaves of an artichoke (Cynara scolymus) 25mg(500mg)**, Dry extract of chicory root(Radix Cichorii) 11.5mg(115mg)**, Vitamin B6 0.21mg, Folic Acid 30mcg.",
        features: [
            "3 x 10 capsules",
            "1-2 capsules per day or as directed by medical professional.",
            "There are no side effects if taken as prescribed.",
            "Pharmacy Laboratories s.c.,Poland",
        ]
    },
    {
        id: "apt-pantodom",
        category: "Pharmaceutical",
        title: "APT-Pantodom Capsule",
        subtitle: "Antiulcer (Gastrointestinal),Proton Pump Inhibitor, Antiemetic",
        img: "image/dailyvit.png",
        description: "Each hard gelatin capsule contains : Pantoprazole sodium sesquihydrate BP equivalent to Pantoprazole 40mg (as enteric coated pellets) and Domperidone BP 30 mg (as sustained release pellets )",
        features: [
            "1 x 10 capsules",
            "One or two capsule once daily or as directed by healthcare practitioner",
            "Like all medicines, this medicine can cause side effects, although not everybody gets them.Common side effects are allergic reactions, nausea, drowsiness, flatulence and dry mouth..",
            "Innova Captab Ltd., India",
        ]
    },
    {
        id: "SIRANALEN 75 mg Capsule",
        category: "Pharmaceutical",
        title: "SIRANALEN 75 mg Capsule",
        subtitle: "Antiulcer (Gastrointestinal),Proton Pump Inhibitor, Antiemetic",
        img: "image/dailyvit.png",
        description: "Each hard capsule contains 75mg of pregabalin.",
        features: [
            "2 x 7 hard capsules",
            "150 - 600mg daily divided into 2 or 3 doses. Follow the doctor's instructions.",
            "Like all medicines, this medicine can cause side effects, although not everybody gets them. Common side effects are increased appetite,weight gain,dizziness, drowsiness, sedation, peripheral edema, dry mouth, blurred vision, fatigue and constipation",
            "Medochemie Ltd.,Cyprus",
        ]
    },
    {
        id: "AFITEN Tablet",
        category: "Pharmaceutical",
        title: "AFITEN Tablet",
        subtitle: "Antihypertensive (Calcium Channel Blocker)",
        img: "image/dailyvit.png",
        description: "Each tablet contains 5mg of amlodipine (as amlodipine besilate)",
        features: [
            "3 x 10 tablets",
            "Do not take if you are allergic to amlodipine or any of the other ingredients of this medicine.",
            "Like all medicines, this medicine can cause side effects, although not everybody gets them. Common side effects are nausea, fatigue, headache, ankle swelling, somnolence and flushing",
            "Medochemie Ltd.,Cyprus",
        ]
    },
    {
        id: "SALBEC 2g Powder",
        category: "Pharmaceutical",
        title: "SALBEC 2g Powder for Solution for Injection/Infusion",
        subtitle: "Antibiotic (Cephalosporin combination with beta-lactamase inhibitor)",
        img: "image/dailyvit.png",
        description: "Each vial contains Sterile mixture of Cefoperazone 1G & Sulbactam 1G powder (as cefoperazone sodium and sulbactam sodium)",
        features: [
            "1 vial + 2 ampoules of 10ml of water for injection",
            "Individuals with known hypersensitivity to penicillins, sulbactam, cefoperazone or other cephalosporins.",
            "Generally well tolerated.Adverse reactions are mild and transient. The common side effects are gastro-intestinal disturbances, hypersensitivity reactions and very rarely anaphylaxis. Transient pain may be experienced at the site of intramuscular injection and occasionally, thrombophlebitis may follow at the site of intravenous injection",
            "Medochemie Ltd.,Cyprus",
        ]
    },
    {
        id: "MABRON 100mg/2ml INJECITON",
        category: "Pharmaceutical",
        title: "MABRON 100mg/2ml INJECITON",
        subtitle: "Narcotic analgesic",
        img: "image/dailyvit.png",
        description: "Each 2 ml ampoule contains 100mg tramadol hydrochloride",
        features: [
            "10 x 2 ml ampoules",
            "Individuals with known hypersensitivity to tramadol. Concurrent use with MAOIs. Severe liver or kidney impairment. Epilepsy or seizure disorders. Pregnancy and Breastfeeding",
            "Like all medicines, this medicine can cause side effects, although not everybody gets them. Common side effects are dizziness, nausea, headaches, drowsiness, fatigue, constipation, dry mouth and vomiting",
            "Medochemie Ltd.,Cyprus",
        ]
    },
    {
        id: "MOXICLAV 625 Tablet",
        category: "Pharmaceutical",
        title: "MOXICLAV 625 Tablet",
        subtitle: "Antibiotics (penicillin combination with beta-lactamase inhibitor)",
        img: "image/dailyvit.png",
        description: "Each film-coated tablet contains 500mg of Amoxicillin as Amoxicillin trihydrate and 125mg Clavulanic Acid as Potassium Clavulanate",
        features: [
            "2 x 8 film-coated tablets",
            "If you are allergic (hypersensitive) to amoxicillin, clavulanic acid; penicillin, or any of the other ingredients, if you have ever had a severe allergic (hypersensitive) reaction to any other antibiotic. this can include a skin rash or swelling of the face or neck. if you have ever had liver problems or jaundice.",
            "Like all medicines, this medicine can cause side effects, although not everybody gets them. Common side effects are allergic reactions, diarrhea, nausea, vomiting, abdominal pain, indigestion and loss of appetite",
            "Medochemie Ltd.,Cyprus",
        ]
    },
    {
        id: "CILIMERIGHT 500mg Powder",
        category: "Pharmaceutical",
        title: "CILIMERIGHT 500mg Powder for Injection",
        subtitle: "Antibiotic (Carbapenem antibiotic and renal dehydropeptidase I inhibitor)",
        img: "image/dailyvit.png",
        description: "Each vial contains sterile lmipenem U.S.P equivalent to Anhydrous lmipenem 500 mg and sterile cilastatin sodium U.S.P equivalent to cilastatin 500mg",
        features: [
            "1 vial/ Box",
            "Individuals with known hypersensitivity to the active substance or to any of the excipients used in the formulation.",
            "Generally well tolerated. Side effect rarely require cessation of therapy and are generally mild and transient, serious side effects are rare.",
            "Zeiss Pharmaceuticals Pvt. Ltd., India",
        ]
    },
    {
        id: "MERORIGHT 1g Powder",
        category: "Pharmaceutical",
        title: "MERORIGHT 1g Powder for Injection",
        subtitle: "Carbapenem antibiotic",
        img: "image/dailyvit.png",
        description: "Each vial contains sterile meropenem trihydrate USP equivalent to anhydrous Meropenem 1gm and, sodium carbonate equivalent to sodium 90.2 mg",
        features: [
            "1 vial/ Box",
            "Individuals with known hypersensitivity to the active substance or to any of the excipients used in the formulation.",
            "Generally well tolerated. Side effect rarely require cessation of therapy and are generally mild and transient, serious side effects are rare.",
            "Zeiss Pharmaceuticals Pvt. Ltd., India",
        ]
    },
    {
        id: "MERORIGHT 500mg Powder",
        category: "Pharmaceutical",
        title: "MERORIGHT 500mg Powder for Injection",
        subtitle: "Carbapenem antibiotic",
        img: "image/dailyvit.png",
        description: "Each vial contains sterile meropenem trihydrate USP equivalent to anhydrous Meropenem 500mg and, sodium carbonate equivalent to sodium 45.1 mg",
        features: [
            "1 vial/ Box",
            "Individuals with known hypersensitivity to the active substance or to any of the excipients used in the formulation.",
            "Generally well tolerated. Side effect rarely require cessation of therapy and are generally mild and transient, serious side effects are rare.",
            "Zeiss Pharmaceuticals Pvt. Ltd., India",
        ]
    },
    {
        id: "CELMANTIN Tablet",
        category: "Pharmaceutical",
        title: "CELMANTIN Tablet",
        subtitle: "Lipid Regulating Agent, HMG-CoA reductase inhibitor",
        img: "image/dailyvit.png",
        description: "Each film-coated tablet contains 10mg of Rosuvastatin (as rosuvastatin calcium)",
        features: [
            "2 x 7 film-coated tablets",
            "Do not use if you are allergic to rosuvastatin, or any of the other ingredients of this medicine. Do not use if you are pregnant, breast-feeding, have liver disease, severe kidney problems, repeated or unexplained muscle aches or pain.",
            "Like all medicines, this medicine can cause side effects, although not everybody gets them. Common side effects are headache, stomach pain, constipation, feeling sick, muscle pain, feeling weak and dizziness.",
            "Medochemie Ltd.,Cyprus",
        ]
    },
    {
        id: "ALMIRAL Suppository",
        category: "Pharmaceutical",
        title: "ALMIRAL Suppository",
        subtitle: "Analgesic, Anti-inflammatory (Non-steroidal)",
        img: "image/dailyvit.png",
        description: "Each suppository contains Diclofenac sodium 100 mg",
        features: [
            "2 x 5 suppositories",
            "Do not use if you are allergic to diclofenac sodium, aspirin, ibuprofen, or any other NSAID, or any of the other ingredients of this medicine Do not use if you have had stomach or bowel issues with other NSAIDs, severe heart, kidney, or liver failure, are over six months pregnant, or experience straining, diarrhea, or rectal bleeding.",
            "Like all medicines, this medicine can cause side effects, although not everybody gets them. Uncommon side effects are headache, drowsiness, dizziness, loss of appetite and irritation of the rectum.",
            "Medochemie Ltd.,Cyprus",
        ]
    },
    {
        id: "MEDOLEVO 500",
        category: "Pharmaceutical",
        title: "MEDOLEVO 500 Tablet",
        subtitle: "Antibacterials for systemic use (Fluoroquinolone antibiotic)",
        img: "image/dailyvit.png",
        description: "Each film-coated tablet contains 500mg of Levofloxacin as Levofloxacin Hemihydrate.",
        features: [
            "1 x 10 film-coated tablets",
            "Contraindicated in individuals with known hypersensitivity to levofloxacin, any other quinolone antibiotics (eg. moxifloxacin, ciprofloxacin or ofloxacin) or any of the other ingredients of this medicine, history of tendonitis or tendon rupture associated with treatment of any member of the quinolone group, epilepsy, pregnancy, breast-feeding and child or a growing teenager.",
            "Like all medicines, this medicine can cause side effects, although not everybody gets them. Common side effects are headache, allergic reactions, diarrhoea, nausea, vomiting, abdominal pain, indigestion, insomnia, dizziness and changes in taste or smell",
            "Medochemie Ltd, (Far East), Vietnam",
        ]
    },
    {
        id: "MEDOLEVO 250",
        category: "Pharmaceutical",
        title: "MEDOLEVO 250 Tablet",
        subtitle: "Antibacterials for systemic use (Fluoroquinolone antibiotic)",
        img: "image/dailyvit.png",
        description: "Each film-coated tablet contains 250mg of Levofloxacin as Levofloxacin Hemihydrate.",
        features: [
            "1 x 10 film-coated tablets",
            "Contraindicated in individuals with known hypersensitivity to levofloxacin, any other quinolone antibiotics (eg. moxifloxacin, ciprofloxacin or ofloxacin) or any of the other ingredients of this medicine, history of tendonitis or tendon rupture associated with treatment of any member of the quinolone group, epilepsy, pregnancy, breast-feeding and child or a growing teenager.",
            "Like all medicines, this medicine can cause side effects, although not everybody gets them. Common side effects are headache, allergic reactions, diarrhoea, nausea, vomiting, abdominal pain, indigestion, insomnia, dizziness and changes in taste or smell",
            "Medochemie Ltd, (Far East), Vietnam",
        ]
    },
];