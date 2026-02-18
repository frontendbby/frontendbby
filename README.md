<div align="center">

# Jessica Melani Romero Lora
### Complex Systems Scientist & AI Research Engineer
*Master in AI Engineering Candidate | Data Quality Engineer*

[![Email](https://img.shields.io/badge/Email-Contact_Me-0052cc?style=flat-square&logo=gmail&logoColor=white)](mailto:soymelanieromero@gmail.com)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-Professional_Profile-0077b5?style=flat-square&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/jessica-romero-lora/)
[![CV](https://img.shields.io/badge/CV-Curriculum_Vitae_2026-b31b1b?style=flat-square&logo=adobeacrobatreader&logoColor=white)](./CV2026.pdf)

</div>

---

## I. Research Statement

I am an interdisciplinary researcher operating at the convergence of **Complex Systems Theory**, **Quantitative Sociology**, and **Artificial Intelligence**. My work bridges the gap between theoretical social frameworks and computational design, focusing on **Systemic Robustness**, **Contextual Integrity**, and **Anomaly Detection** in high-entropy socio-technical systems.

Unlike traditional engineering approaches that view data in isolation, I treat datasets as artifacts of complex, non-linear systems. My primary objective is to contribute to the **ELLIS network** agenda by developing trustworthy AI architectures that are resilient to the stochastic nature of human behavior, mathematically robust against class imbalance, and compliant with rigorous regulatory standards.

---

## II. Selected Research Implementations

### 1. Systemic Anomaly Detection in InsurTech Ecosystems
*Role: Lead Research Engineer (Shift Technology)*

**The Systemic Challenge**
Fraud in insurance markets does not manifest as linear outliers but as complex topological clusters within highly imbalanced datasets. Standard classification fails to capture the minority class without compromising the systemic validity of the model.

**Methodological Architecture**
I designed a detection framework for the California market, evaluating concurrent architectures to address the Imbalanced Data phenomenon. The final pipeline utilized **XGBoost** combined with **SMOTE (Synthetic Minority Over-sampling Technique)**. This allowed the model to learn the topology of fraud in critical variables rather than simply oversampling, focusing on Geospatial Hotspots and Medical Billing Anomalies using Beta distributions. The approach prioritized Recall over Accuracy, resulting in a **600% increase in the detection rate**, directly optimizing technical reserves.

**Mathematical Foundation (Gradient Boosting Optimization)**
To correct residual biases in real-time, the model minimizes the regularized objective function:

$$
\mathcal{L}(\phi) = \sum_{i} l(\hat{y}_i, y_i) + \sum_{k} \Omega(f_k)
$$

Where $\Omega(f_k) = \gamma T + \frac{1}{2}\lambda ||w||^2$ controls the complexity of the trees, preventing overfitting in the sparse, high-dimensional feature space.

### 2. Phenotypic Classification of Neurofibromatosis Type 1 (NF1)
*Role: Learning Specialization Project*

**The Systemic Challenge**
Rare disease diagnosis suffers from high dimensionality and noise. The objective was to reduce diagnostic latency by isolating critical clinical markers from irrelevant phenotypic data.

**Methodological Architecture**
Implemented an **Ensemble Learning framework** incorporating XGBoost and Random Forest. Crucially, I applied **L1 Regularization (Lasso)** to enforce sparsity. This acted as a feature selection mechanism, effectively zeroing out coefficients for non-predictive symptoms and revealing the core phenotypic signal.

**Mathematical Foundation (L1 Regularization)**
The system solves for the coefficient vector $\beta$ that minimizes the residual sum of squares subject to the sum of the absolute values of the coefficients:

$$
\min_{\beta} \left( \frac{1}{2N} \sum_{i=1}^{N} (y_i - x_i^T \beta)^2 + \lambda \sum_{j=1}^{p} |\beta_j| \right)
$$

This geometric constraint creates a "diamond" shape in the contour plot, allowing the solution to hit the axis and set irrelevant features strictly to zero.

### 3. Digital Twin Simulation: EV Battery Survival
*Role: Simulation Lead*

**The Systemic Challenge**
Optimizing the trade-off between battery longevity and mission completion time involves non-linear inputs (State of Charge, Distance, Driver Aggression) that cannot be modeled with binary logic.

**Methodological Architecture**
Developed a **Fuzzy Inference System (FIS)**. Unlike crisp logic, this system maps inputs to continuous membership functions. The controller regulates driving modes (Survival, Eco, Sport) dynamically, creating a feedback loop that adapts to the system's current energy state.

**Mathematical Foundation (Fuzzy Logic)**
The degree of membership $\mu_{A}(x)$ for a given input $x$ in fuzzy set $A$ is defined by the Gaussian membership function:

$$
\mu_{A}(x, c, \sigma) = e^{-\frac{1}{2}\left(\frac{x-c}{\sigma}\right)^2}
$$

Defuzzification was performed using the Centroid method to convert the fuzzy inference output into a precise control signal for the vehicle.

---

## III. Academic & Research Experience

**Data Quality Engineer | Shift Technology (2024 - Present)**
Focusing on **Algorithmic Governance**, I architect privacy-preserving pipelines compliant with GDPR and mine unstructured data (NoSQL) to ensure contextual integrity in fraud models. My role involves ensuring that data ingestion maintains the statistical properties necessary for robust model training.

**Visiting Research Fellow | University of Essex (2023 - 2024)**
As a researcher in **Computational Social Science**, I applied advanced statistical techniques to large-scale datasets to identify emergent patterns in behavioral data, bridging the gap between sociological theory and data science.

**Metric Design Evaluator | Institute of Social Development (2021)**
Executed **Systemic Evaluation** protocols by designing quantitative indicators to assess the efficacy of state-level welfare programs (Hidalgo Model of Care). This role required translating public policy objectives into measurable statistical variables.

**Research Fellow | UNESCO / COLMEX / CLACSO (2020)**
Selected for the **"Inequalities and Youth in Latin America"** project. I conducted structural analysis on systemic stratification variables to understand precariousness in emerging demographics, contributing to the broader discourse on social inequality.

**Digital Sociology Researcher | UNAM (2019)**
Investigated **Onlife Systems** and digital environments, analyzing the feedback loops between online platforms and youth subjectivity. This research laid the groundwork for my current focus on Socio-technical Systems.

---

## IV. Education

### **Master in Artificial Intelligence Engineering (MAEng)**
**Metropolitan Polytechnic University of Hidalgo (UPMH)** | *2025 - 2027 (Candidate)*
Currently pursuing a specialized research track in **Mathematical Modeling & Systemic Robustness**. My thesis work focuses on the intersection of Control Theory and Machine Learning for anomaly detection in high-entropy environments. Key coursework includes Advanced Mathematical Programming and Stochastic Processes.

### **Master in Applied Artificial Intelligence (MIA)**
**Tecnológico de Monterrey (ITESM)** | *2023 - 2024*
Executed a **Strategic Transfer** after completing foundational coursework (Core AI & Data Science) at Latin America's top-ranked private university. This decision was driven by a research objective to shift focus from application-layer development to the "Hard Engineering" and mathematical foundations of Complex Systems available at UPMH.

### **Bachelor of Arts in Sociology**
**Universidad Autónoma del Estado de Hidalgo (UAEH)** | *2018 - 2022*
Graduated with **High Honors (GPA: 9.75 / 10)** with a specialization in Complexity Theory & Quantitative Methods.

**Key Academic Output:**
Authored the publication *"La retórica del mérito en el discurso oficialista de la Confederación Patronal de la República Mexicana (COPARMEX) 2020-2022"*, an analysis of discourse structures using quantitative text processing.

[![Read Publication](https://img.shields.io/badge/Read_Publication-External_Link-181717?style=flat-square&logo=readthedocs)](AQUI_PEGA_TU_LINK_DE_LA_PUBLICACION)

---

<div align="center">
    <sub>© 2026 Jessica Melani Romero Lora. Open for academic collaboration.</sub>
</div>
