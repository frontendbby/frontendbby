<div align="center">

# Jessica Melani Romero Lora
### Complex Systems Scientist & AI Research Engineer
*M.Sc. Candidate at Metropolitan Polytechnic University of Hidalgo | Data Quality Engineer at Shift Technology*

[![Email](https://img.shields.io/badge/Email-Contact-0052cc?style=flat-square&logo=gmail&logoColor=white)](mailto:soymelanieromero@gmail.com)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-Connect-0077b5?style=flat-square&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/jessica-romero-lora/)
[![CV](https://img.shields.io/badge/CV-Download_PDF-b31b1b?style=flat-square&logo=adobeacrobatreader&logoColor=white)](./CV2026.pdf)

</div>

---

## I. Research Statement

I am an interdisciplinary researcher operating at the convergence of **Complex Systems Theory**, **Quantitative Sociology**, and **Artificial Intelligence**. My work bridges the gap between theoretical social frameworks and computational design, focusing on **Systemic Robustness**, **Contextual Integrity**, and **Anomaly Detection** in high-entropy socio-technical systems.

Unlike traditional engineering approaches that view data in isolation, I treat datasets as artifacts of complex, non-linear systems. My primary objective is to contribute to the **ELLIS network** agenda by developing trustworthy AI architectures that are resilient to the stochastic nature of human behavior, mathematically robust against class imbalance, and compliant with rigorous regulatory standards (GDPR/EU AI Act).

---

## II. Selected Research Implementations

### 1. Systemic Anomaly Detection in InsurTech Ecosystems
*Role: Data Quality Analyst (Shift Technology)*

**The Systemic Challenge:**
Fraud in insurance markets does not manifest as linear outliers but as complex topological clusters within highly imbalanced datasets. Standard classification fails to capture the minority class without compromising the systemic validity of the model (False Positives).

**Methodological Architecture:**
I designed a detection framework for the California market, evaluating three concurrent architectures: Logistic Regression (stochastic baseline), Random Forest (variance reduction), and **XGBoost**. The final pipeline utilized **SMOTE (Synthetic Minority Over-sampling Technique)** to learn the topology of fraud in critical variables rather than simply oversampling.

* **Geospatial Topology:** Mapped concentration of risk in specific jurisdictions to identify spatial autocorrelation.
* **Distribution Analysis:** Identified medical overbilling patterns using Beta distributions.
* **Outcome:** Prioritized **Recall** over Accuracy, resulting in a **600% increase in the detection rate**, directly optimizing technical reserves and preventing systemic capital leakage.

**Mathematical Foundation (Gradient Boosting Optimization):**
**Mathematical Foundation (Gradient Boosting Optimization):**
To correct residual biases in real-time, the model minimizes the regularized objective function:

$$
\mathcal{L}(\phi) = \sum_{i} l(\hat{y}_i, y_i) + \sum_{k} \Omega(f_k)
$$

Where $\Omega(f_k) = \gamma T + \frac{1}{2}\lambda ||w||^2$ controls the complexity of the trees, preventing overfitting in the sparse, high-dimensional feature space..

### 2. Phenotypic Classification of Neurofibromatosis Type 1 (NF1)
*Role: Learning Specialization Project*

**The Systemic Challenge:**
Rare disease diagnosis suffers from high dimensionality and noise. The objective was to reduce diagnostic latency by isolating critical clinical markers from irrelevant phenotypic data.

**Methodological Architecture:**
Implemented an **Ensemble Learning framework** incorporating XGBoost and Random Forest. Crucially, I applied **L1 Regularization (Lasso)** to enforce sparsity. This acted as a feature selection mechanism, effectively zeroing out coefficients for non-predictive symptoms and revealing the core phenotypic signal.

**Mathematical Foundation (L1 Regularization):**
The system solves for the coefficient vector $\beta$ that minimizes the residual sum of squares subject to the sum of the absolute values of the coefficients:
$$\min_{\beta} \left( \frac{1}{2N} \sum_{i=1}^{N} (y_i - x_i^T \beta)^2 + \lambda \sum_{j=1}^{p} |\beta_j| \right)$$
This geometric constraint creates a "diamond" shape in the contour plot, allowing the solution to hit the axis and set irrelevant features strictly to zero.

### 3. Digital Twin Simulation: EV Battery Survival
*Role: Simulation Lead*

**The Systemic Challenge:**
Optimizing the trade-off between battery longevity and mission completion time involves non-linear inputs (State of Charge, Distance, Driver Aggression) that cannot be modeled with binary logic.

**Methodological Architecture:**
Developed a **Fuzzy Inference System (FIS)**. Unlike crisp logic, this system maps inputs to continuous membership functions. The controller regulates driving modes (Survival, Eco, Sport) dynamically, creating a feedback loop that adapts to the system's current energy state.

**Mathematical Foundation (Fuzzy Logic):**
The degree of membership $\mu_{A}(x)$ for a given input $x$ in fuzzy set $A$ is defined by the Gaussian membership function:
$$\mu_{A}(x, c, \sigma) = e^{-\frac{1}{2}\left(\frac{x-c}{\sigma}\right)^2}$$
Defuzzification was performed using the Centroid method to convert the fuzzy inference output into a precise control signal for the vehicle.

---

## III. Academic & Research Experience

My transition to AI Engineering is grounded in a rigorous background in sociological research and complexity theory.

| **Role & Institution** | **Research Focus** |
| :--- | :--- |
| **Data Quality Engineer**<br>Shift Technology (2024 - Present) | **Algorithmic Governance:** Architecting privacy-preserving pipelines (GDPR) and mining unstructured data (NoSQL) to ensure contextual integrity in fraud models. |
| **Visiting Research Fellow - Summer School **<br>University of Essex (2023 - 2024) | **Computational Social Science:** Applied advanced statistical techniques to large-scale datasets to identify emergent patterns in behavioral data. |
| **Metric Design Evaluator**<br>Institute of Social Development (2021) | **Systemic Evaluation:** Designed quantitative indicators to evaluate the efficacy of the "Hidalgo Model of Care", bridging public policy with statistical evaluation. |
| **Research Fellow**<br>UNESCO / COLMEX / CLACSO (2020) | **Structural Analysis:** Selected for the "Inequalities and Youth in Latin America" project. Analyzed systemic stratification variables to understand precariousness in emerging demographics. |
| **Digital Sociology Researcher**<br>UNAM (2019) | **Onlife Systems:** Investigated digital environments, analyzing the feedback loops between online platforms and youth subjectivity. |

---

## IV. Education

* **M.Sc. in AI Engineering** | *Metropolitan Polytechnic University of Hidalgo* (2025 - 2027)
* **B.A. in Sociology (Complexity Specialization)** | *Universidad Autónoma del Estado de Hidalgo*
    * **Honors:** GPA 9.75 / 10.
    * **Thesis:** Analyzing the Discourse of Bussinessman and The Reproduction of The Logic of Merit.

---

<div align="center">
    <sub>© 2026 Jessica Melani Romero Lora. Open for academic collaboration.</sub>
</div>
