const research = [
  {
    title: "PPO vs SAC for UAV Coverage Path Planning",
    university: "Queen's University",
    year: "2026",
    description:
      "Expanded and evaluated reinforcement learning algorithms for power-constrained UAV coverage path planning, focusing on PPO and SAC under energy-aware environments.",
    topics: [
      "Reinforcement Learning",
      "PPO",
      "SAC",
      "PyTorch",
      "UAV"
    ],
    paper: "#",
    github: "#"
  },
  {
    title: "Domain-Informed Feature Engineering and Ensemble Learning for Forest Cover Classification",
    university: "Queen's University",
    year: "2025",
    status: "Unpublished Research",
    description:
      "This paper presents a multi-class forest cover  prediction framework using the UCI Cover type dataset from wilderness areas of Roosevelt National Forest, Colorado, across seven cover classes [1]. Building on prior work by Suhail & Refonaa (2023) [2], where Random Forest [3] achieved 96.5%  accuracy and a Cohen Kappa score of 90.4%, this study  introduces two key enhancements. First, domain-informed  Feature Engineering derived using ecological and topographic  insights, along with Exploratory data analysis EDA insights,  was statistically validated via one-way Analysis of Variance  ANOVA [4]. Second, an ensemble learning framework.",
    topics: [
      "Machine Learning",
      "Scikit-learn",
      "Feature Engineering",
      "Model Evaluation",
      "Data Analysis"
    ]
},
{
    title: "Multi-Scale Character-Level CNN and Hybrid Feature Fusion for Lightweight Phishing URL Detection ",
    university: "Queen's University",
    year: "2025",
    status: "Unpublished Research",
    description:
      "This paper presents a complete lightweight phishing URL (Uniform Resource Locator) detection system evaluated across classical and deep learning approaches. We use the Mende-ley 2026 phishing URL dataset (DOI: 10.17632/3jddhy2f6s.1) comprising 129,776 cleaned URL records. A fully reproducible data pipeline performs duplicate-aware cleaning, stratified 70/15/15 splits, extraction of 23 handcrafted lexical URL features, train-only StandardScaler normalisation, and generation of balanced and imbalanced evaluation sets. Classical ML baselines—Logistic Regression (LR), Linear SVM, Random Forest (RF), and XGBoost (XGB)—are trained under three imbalance-handling strategies: no handling, class weighting, and SMOTE oversampling. A stacking ensemble (RF + XGB + LR base learners, LR meta-learner) achieves the best phishing-class F1 of 0.9519 with ROC-AUC = 0.9918 on the original test set. On the deep learning side, four ar-chitectures are designed, trained, and rigorously compared: Multi-Scale CharCNN (179,329 parameters), CNN-BiLSTM, FastText-CNN, and Hybrid Feature Fusion model combining character-level features with the 23 handcrafted features. ",
    topics: [
      "Deep Learning",
      "TensorFlow",
      "PyTorch",
      "Convoultional Neural Networks",
      "Model Optimization",
      "Text Embedding"
    ]
}
];

export default research;