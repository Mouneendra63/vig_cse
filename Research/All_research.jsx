import React, { useState } from 'react';
import { Book, Link2, Users, School, Award, FileText, SearchIcon } from "lucide-react";
import AA from '../CSE/AA'

const PublicationCard = ({ publication }) => {
  const [showModal, setShowModal] = useState(false);

  const parseStudents = (regStr) => {
    return regStr.split(',').map(student => {
      const match = student.match(/(.*?)\((.*?)\)/);
      if (match) {
        return {
          name: match[1].trim(),
          regNo: match[2].trim()
        };
      }
      return null;
    }).filter(Boolean);
  };

  const students = publication['Student Regd.no'] ? parseStudents(publication['Student Regd.no']) : [];
  return (
    <div className="col-12 col-md-6 col-lg-4 mb-5">
    <div className="card border-0 shadow-sm h-100 " style={{width:"100%"}}>
      <div className="card-header text-white py-3" style={{backgroundColor:'#1152ae'}}>
        <h5 className="card-title mb-0 fs-6" style={{ minHeight: '4rem' }}>
          {publication.Title}
        </h5>
      </div>

      <div className="card-body">
        <div className="d-flex flex-column gap-3">
          {/* Authors Section */}
          <div>
            <div className="d-flex align-items-start gap-2">
              <Users size={20} className="mt-1 flex-shrink-0" style={{color:'#1152ae'}} />
              <div>
                <h6 className="fw-bold mb-2">All Authors</h6>
                <p className="text-muted small">
                  {publication['Author names (all)']}
                </p>
              </div>
            </div>
          </div>

          {/* VFSTR Authors */}
          <div>
            <div className="d-flex align-items-start gap-2">
              <School size={20} className="text-primary mt-1 flex-shrink-0" />
              <div>
                <h6 className="fw-bold mb-2">VFSTR Authors</h6>
                <p className="text-muted small">
                  {publication['Author names (VFSTR)']}
                </p>
              </div>
            </div>
          </div>

          {/* Conference */}
          <div>
            <div className="d-flex align-items-start gap-2">
              <Book size={20} className="text-primary mt-1 flex-shrink-0" />
              <div>
                <h6 className="fw-bold mb-2">Conference</h6>
                <p className="text-muted small mb-0">{publication['Conference Name']}</p>
              </div>
            </div>
          </div>

          {/* DOI Link */}
          <div>
            <div className="d-flex align-items-start gap-2">
              <Link2 size={20} className="text-primary mt-1 flex-shrink-0" />
              <div>
                <h6 className="fw-bold mb-2">DOI</h6>
                <a href={publication.DOI}
                   target="_blank" 
                   rel="noopener noreferrer"
                   className="text-decoration-none small">
                  {publication.DOI.replace('https://doi.org/', '')}
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="card-footer bg-light">
        <button 
          className="btn btn-warning w-100 d-flex align-items-center justify-content-center gap-2"
          onClick={() => setShowModal(true)}
        >
          <Book size={16} />
          View Full Details
        </button>
      </div>
    </div>

      {/* <hr /> */}
    {/* Modal */}
    {showModal && (
      <div className="modal fade show d-block" 
           tabIndex="-1" 
           style={{ backgroundColor: 'rgba(0,0,0,0.5)' }}>
        <div className="modal-dialog modal-dialog-scrollable modal-lg">
          <div className="modal-content border-0">
            <div className="modal-header bg-primary text-white">
              <h5 className="modal-title">Publication Details</h5>
              <button 
                type="button" 
                className="btn-close btn-close-white" 
                onClick={() => setShowModal(false)}
                aria-label="Close"
              ></button>
            </div>

            <div className="modal-body">
              {/* Title Section */}
              <div className="p-3 bg-light rounded mb-4">
                <h4 className="fw-bold mb-0">{publication.Title}</h4>
              </div>

              {/* Content Sections */}
              <div className="row g-4">
                {/* Abstract */}
                <div className="col-12">
                  <div className="d-flex gap-3">
                    <FileText size={24} className="text-primary flex-shrink-0" />
                    <div>
                      <h6 className="fw-bold">Abstract</h6>
                      <p className="text-muted">{publication.Abstract}</p>
                    </div>
                  </div>
                </div>

                {/* All Authors */}
                <div className="col-12">
                  <div className="d-flex gap-3">
                    <Users size={24} className="text-primary flex-shrink-0" />
                    <div>
                      <h6 className="fw-bold">All Authors</h6>
                      <p className="text-muted">{publication['Author names (all)']}</p>
                    </div>
                  </div>
                </div>

                {/* VFSTR Authors */}
                <div className="col-12">
                  <div className="d-flex gap-3">
                    <School size={24} className="text-primary flex-shrink-0" />
                    <div>
                      <h6 className="fw-bold">VFSTR Authors</h6>
                      <p className="text-muted">{publication['Author names (VFSTR)']}</p>
                    </div>
                  </div>
                </div>

                {/* Student Details */}
                <div className="col-12">
                  <div className="d-flex gap-3">
                    <Award size={24} className="text-primary flex-shrink-0" />
                    <div className="w-100">
                      <h6 className="fw-bold">Student Authors</h6>
                      <div className="row g-3 mt-2" >
                        {students.map((student) => (
                          <div key={student.regNo} className="col-md-6" style={{width:"100%"}}>
                            <div className="card h-100 bg-light border-0" style={{width:"100%"}}>
                              <div className="card-body" style={{width:"100%"}}>
                                <h6 className="fw-bold mb-1">{student.name}</h6>
                                <p className="text-muted mb-0">{student.regNo}</p>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Conference */}
                <div className="col-12">
                  <div className="d-flex gap-3">
                    <Book size={24} className="text-primary flex-shrink-0" />
                    <div>
                      <h6 className="fw-bold">Conference</h6>
                      <p className="text-muted">{publication['Conference Name']}</p>
                    </div>
                  </div>
                </div>

                {/* DOI */}
                <div className="col-12">
                  <div className="d-flex gap-3">
                    <Link2 size={24} className="text-primary flex-shrink-0" />
                    <div>
                      <h6 className="fw-bold">DOI</h6>
                      <a 
                        href={publication.DOI}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-primary text-decoration-none"
                      >
                        {publication.DOI.replace('https://doi.org/', '')}
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="modal-footer">
              <button 
                type="button" 
                className="btn btn-secondary" 
                onClick={() => setShowModal(false)}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    )}
  </div>
);
};

const App = () => {
  const publications = [
    {
        "S.no": 8,
        "Author names (all)": "P N L Gayatri Samanvita, Abhinay Balivada, Subham Kumar Satapathy, Maridu Bhargavi",
        "Author names (VFSTR)": "Maridu Bhargavi",
        "Student Regd.no": "P N L Gayatri Samanvita(211FA04570),Abhinay Balivada(211FA04565),Subham Kumar Satapathy(211FA04523)",
        "Title": "Fraud detection: Comparison of traditional methods, hybrid methods, monarch butterfly optimization, and Temporal Convolutional Networks",
        "Conference Name": "2024 3rd International Conference on Applied Artificial Intelligence and Computing (ICAAIC)",
        "Abstract": "In recent years Transaction Fraud has happened nowadays through credit card transactions or online transac tions This article provides an overview of different algorithms, methods, and techniques used to identify fraudulent transactions...",
        "DOI": "https://doi.org/10.1109/ICAAIC60222.2024.10575347"
      },
      {
          "S.no":1,
          "Author names (all)":"Ajay Bhaskar Sanganaboina; Sandeep Ruttala; Hrushikesh Mandadapu; Sai Venkata Uma Maheswararao Kanigiri; Venkatramaphanikumar Sistla; Venkata Krishna Kishore Kolli",
          "Author names (VFSTR)":"Deva Kumar S; Venkatrama Phani Kumar S",
          "Student Regd.no":"Ajay Bhaskar Sanganaboina (211FA04010)\nSandeep Ruttala (211FA04256)\nHrushikesh Mandadapu (211FA04431)\nSai Venkata Uma Maheswararao Kanigiri (211FA04439)",
          "Title":"Prediction of Solar Panel Maintenance using BiLSTM: A \n Case Study on VFSTR",
          "Conference Name":"3rd International Conference on Applied Artificial Intelligence and Computing",
          "Abstract":"This study focuses on predicting the need for maintenance in solar energy systems using various machine and deep learning models. With the increase in adoption of solar energy, maintenance prediction becomes crucial for ensuring solar panels efficiency and durability. This study explores the performance of LSTM, Bi LSTM, GRU, Decision Tree, Random Forest, Bagging, Gradient Boosting, Voting Regressor, and Stacking models. Data was collected from Vignan\u2019s University solar panels within a time span of four years. Through comprehensive experimentation, it was found that LSTM architectures were suitable for time series prediction and in Bi LSTM model few layers were added that achieved r2 score of 0.99, indicating superior predictive capability compared to other models. The results of this research can significantly contribute to the optimization of maintenance schedules for solar energy in Vignan\u2019s University, ultimately reducing the cost of frequent maintenance and maximizing energy production efficiency.",
          "DOI":"10.1109\/ICAAIC60222.2024.10575035"
      },
      {
          "S.no":2,
          "Author names (all)":"Soumya Puvvada; Kusuma; Mastan Valli Shaik; Karthik Galla;Venkatramaphanikumar Sistla; Venkata Krishna Kishore Kolli",
          "Author names (VFSTR)":"Venkatramaphanikumar Sistla; Venkata Krishna Kishore Kolli",
          "Student Regd.no":"Soumya Puvvada (211FA04099)\nKusuma (211FA04189)\nMastan Valli Shaik (211FA04155)\nKarthik Galla (211FA04146)",
          "Title":"A Novel Machine Learning Model for Sarcasm Detection on Facebook \n Comments",
          "Conference Name":"3rd International Conference on Applied Artificial Intelligence and Computing",
          "Abstract":"This research focuses on identifying sarcasm in online comments using a combination of machine learning techniques, including feature extraction, pattern recognition, and analysis of emojis. Various methods were utilized to categorize comments into sarcastic and non-sarcastic categories, aiding computers in understanding the sentiment expressed. The experiments have yielded positive results, particularly with hierarchical clustering, which exhibited higher Silhouette Scores and improved cluster quality compared to other techniques. The study used a dataset containing 5,471 comments, labeled with sarcasm as (0 for sarcastic, 1 for non-sarcastic), with sentiment analysis facilitating comment categorization. By categorizing comments based on sentiment, computers can easily identify the underlying sentiment of each comment. The combination of features, including emojis and text, adds an extra layer of meaning, helping the system to identify the type of comment easily. The objective is to help computers understand human language better, enabling them to grasp the real meaning behind a joke and sarcastic sentence, there by making online communication more accurate and effective.",
          "DOI":"10.1109\/ICAAIC60222.2024.10575012"
      },
      {
          "S.no":3,
          "Author names (all)":"Vyshnavi Manduru;  Karthik Manchina;  Vijay Shanmuk Davuluri; Tharun Gopi Kasireddy; Venkatramaphanikumar Sistla; Venkata Krishna Kishore Kolli\n ",
          "Author names (VFSTR)":"Venkatramaphanikumar Sistla; Venkata Krishna Kishore Kolli",
          "Student Regd.no":"Vyshnavi Manduru (211FA04031)\n Karthik Manchina (211FA04161)\n Vijay Shanmuk Davuluri  (211FA04206)                                                                                                                                                                                                                                             \n TharunGopi Kasireddy (211FA04044)\n ",
          "Title":"A light gradient boosted model for network intrusion detection system",
          "Conference Name":"INTERNATIONAL CONFERENCE ON SMART SYSTEMS FOR ELECTRICAL, ELECTRONICS, COMMUNICATION AND COMPUTER ENGINEERING",
          "Abstract":"This paper investigates the development of a robust Network Intrusion Detection System (NIDS) utilizing the Light- GBM classification algorithm within the domain of data mining techniques. Extensive data preprocessing, feature engineering, and selection methods are applied to extract meaningful insights from a comprehensive dataset of web traffic attributes. Light-GBM, renowned for its meticulous approach compared to alter- native models, is specifically selected for its capacity to enhance NIDS accuracy and efficiency in discerning normal network traffic from potential intrusions. Evaluation results demonstrate the superior performance of LightGBM across diverse metrics, exhibiting high accuracy, precision, and recall. These results underscore the effectiveness of LightGBM in network intrusion detection and stress the significance of deliberate model selection for achieving high detection accuracy in practical scenarios.",
          "DOI":"10.1109\/ICSSEECC61126.2024.10649416"
      },
      {
          "S.no":4,
          "Author names (all)":"SowmyaSri Puligadda;  Saranyya Chimata; Devakiran Devagiri; AnkammaRao Bollimuntha;Venkatramaphanikumar Sistla; Venkata Krishna Kishore Kolli",
          "Author names (VFSTR)":"Venkatramaphanikumar Sistla; Venkata Krishna Kishore Kolli",
          "Student Regd.no":"SowmyaSri Puligadda (211FA04162)\n Saranyya Chimata (211FA04030)\n Devakiran Devagiri (211FA04092)\n AnkammaRao Bollimuntha (211FA04063)\n ",
          "Title":"An Investigative analysis on generation of AI text using deep learning models for Large Language Models",
          "Conference Name":"INTERNATIONAL CONFERENCE ON SMART SYSTEMS FOR ELECTRICAL, ELECTRONICS, COMMUNICATION AND COMPUTER ENGINEERING",
          "Abstract":"In this study, we propose a method for \npredicting whether a given text is generated by AI or human  authors using Long Short-Term Memory (LSTM) networks. The proposed methodology involves \npreprocessing the text data, including tokenization and padding, followed by training an LSTM-based binary classification model. We utilize a dataset containing essays labeled as either AI-generated or human-generated for \nmodel training and evaluation. Our experiments involve splitting the dataset into training and testing sets, training the LSTM model on the training data, and evaluating its performance on the testing data. We assess the model\u2019s \nperformance using various evaluation metrics, including accuracy, precision, recall, and F1 score. The results demonstrate the effectiveness of the LSTM based approach in accurately predicting the origin of the text, with promising performance metrics indicating its potential for real-world applications in identifying AI-generated content.",
          "DOI":"10.1109\/ICSSEECC61126.2024.10649514 "
      },
      {
          "S.no":5,
          "Author names (all)":"Satish Kumar Satti, N V Raja Reddy, N Vishnu Murti, Gayatri manasvini",
          "Author names (VFSTR)":"Satish Kumar Satti ",
          "Student Regd.no":"S P N L Gayatri samanvitha (211FA04570)",
          "Title":"Drowsy Alert: A System to Detect and Alert \nDriver\u2019s Drowsiness for Road Safety",
          "Conference Name":"2024 IEEE Students Conference on Engineering and Systems (SCES), June 21-23, 2024, Prayagraj, India",
          "Abstract":"Driver drowsiness is a leading cause of road accidents, often resulting in severe injuries and fatalities. To mitigate this risk and enhance road safety, we propose Drowsy Alert, an intelligent system designed to detect and alert drivers' drowsiness in real time using a combination of cascade classifiers and convolutional neural networks (CNN). DrowsyAlert leverages a cascade classifier to identify and track the driver's face in video frames captured by an onboard camera. The cascade classifier accurately detects facial landmarks, enabling the system to extract relevant features, including eye closure, head position, and facial expressions. These features are then fed into a CNN model, which is trained to classify drowsiness based on learned patterns from a diverse dataset of drowsy and alert driver images. The system continuously analyzes the driver's facial features, monitoring for signs of drowsiness. If drowsiness is detected, DrowsyAlert promptly generates an alert, notifying the driver through visual, auditory, or haptic feedback. To evaluate the performance of DrowsyAlert, extensive experiments were conducted on a diverse dataset of driver images, encompassing various lighting conditions, driver poses, and levels of drowsiness. The results demonstrate the system's high accuracy in detecting drowsiness and generating timely alerts, thus contributing to improved road safety.",
          "DOI":"https:\/\/ieeexplore.ieee.org\/abstract\/document\/10652546"
      },
      {
          "S.no":6,
          "Author names (all)":"Nemalikanti Naga Alekhyasri, Gunturu Bhanu Prasad,   Tarigopula Pardhasaradhi,   Arumalla Purna Vignesh Reddy, Maridu Bhargavi",
          "Author names (VFSTR)":"Maridu Bhargavi",
          "Student Regd.no":"Nemalikanti Naga Alekhyasri(211FA04574) , G Bhanu Prasad (211FA04296), T  Pardhasaradhi( 211FA04407) ,   A Purna Vignesh Reddy(211FA04495)",
          "Title":"Predictive Analysis for Retail: Sales Forecasting atWalmart",
          "Conference Name":"2024 3rd International Conference on Applied Artificial Intelligence and Computing (ICAAIC)",
          "Abstract":"In retail, accurate profit and revenue forecasts are important for stock control and increased customer satisfaction. In this regard we examined regression algorithms such as Linear Regression, Ridge Regression, KNN Regression, Random Forest Regression, XGBoost Regression, and CatBoost. For each version, hyperparameter tuning was performed by grid seek and pass-validation. A survey metric with R-square rating has been used to evaluate the new general statistics. Feature need analysis is perfect for understanding profitability predictions. Ensemble methods such as the Voting Regressor showed changes in accuracy improvements as model strengths were combined. Our theory provides insights into instrument learning techniques for predicting retail revenue, providing concrete recommendations for specific performance outcomes.",
          "DOI":"https:\/\/doi.org\/10.1109\/ICAAIC60222.2024.10575027"
      },
      {
          "S.no":7,
          "Author names (all)":"Nunna  Charan teja,Kovuri Venkata Bindu Sree,Shaik Mohammad Saif,P.Navya Sree",
          "Author names (VFSTR)":"Maridu Bhargavi",
          "Student Regd.no":"Nunna Charan Teja (211FA04418),Kovuri Venkata Bindu Sree(211FA04423),Shaik Mohammad Saif(211FA04499),P.Navya Sree(211FA04624)",
          "Title":"Mobile Application Analysis and Forecasting App Ratings Before Usage with Hybrid Neural Network",
          "Conference Name":"2024 3rd International Conference on Applied Artificial Intelligence and Computing (ICAAIC)",
          "Abstract":"The reviews and ratings play a critical role in app store platforms, enabling end users to gauge the performance and drawbacks of applications before installation. In this paper, we conduct a Comparative Model Evaluation using a dataset from the Google Play Store. Through the application of various models and algorithms, we compare their accuracy in predicting ratings. Subsequently, we implement a Hybrid Neural Network for feature extraction and leverage LightGBM for prediction due to its superior performance in terms of Mean Squared Error (MSE) compared to other models. Our study utilizes applications sourced from the Google Play Store dataset.",
          "DOI":"10.1109\/ICAAIC60222.2024.10575458"
      },
      {
          "S.no":8,
          "Author names (all)":"P N L Gayatri Samanvita ,       Abhinay Balivada,     Subham Kumar Satapathy   ,Maridu Bhargavi",
          "Author names (VFSTR)":"Maridu Bhargavi",
          "Student Regd.no":"P N L Gayatri Samanvita(211FA04570),Abhinay Balivada(211FA04565),Subham Kumar Satapathy(211FA04523)",
          "Title":"Fraud detection: Comparison of traditional methods, hybrid methods, monarch butterfly optimization, and Temporal Convolutional Networks",
          "Conference Name":"2024 3rd International Conference on Applied Artificial Intelligence and Computing (ICAAIC)",
          "Abstract":"In recent years Transaction Fraud has happened nowadays through credit card transactions or online transac tions This article provides an overview of different algorithms, methods, and techniques used to identify fraudulent transactions. This article provides an overview of different algorithms used for\nidentification fraud. This study has analyzed different types of models such as logistic regression, decision trees, random forests, and support vector machines to identify suspicious activities. By taking the Decision tree as a Base estimator and Ada Boost as an n estimator, this study has developed a new model. The study used the Credit card Fraud Detection Dataset from Kaggle. Additionally, the Monarch Butterfly Optimization(MBO) Algorithm using SMOTE, RandomSubSampler and Temporal Convolutional Networks are integrated.",
          "DOI":"https:\/\/doi.org\/10.1109\/ICAAIC60222.2024.10575347"
      },
      {
          "S.no":9,
          "Author names (all)":"Mannepati VenkateshAbburi Sri Lakshmi,Chukkapalli Ramya,,D.Dasaradha Ramireddy",
          "Author names (VFSTR)":"Maridu Bhargavi",
          "Student Regd.no":"211FA04522,\n211FA04571,\n211FA04595,\n211FA04598",
          "Title":"Hybrid Model Fusion: Enhancing Water Quality Prediction using Ensemble Modelling",
          "Conference Name":"2024 3rd International Conference on Applied Artificial Intelligence and Computing (ICAAIC)",
          "Abstract":"Water is an essential natural resource, vital for life, making it important to ensure its quality for our safety. Traditional methods for checking water quality, like laboratory tests, can take time to provide results. Machine learning (ML) offers a faster and potentially more accurate way to predict water quality. This article explores how machine learning can be used to predict water quality. It looks at a range of ML techniques such as support vector machines, decision trees, and clustering methods, and how they can help model various aspects of water quality. These aspects include pH levels, dissolved oxygen, turbidity (how cloudy the water is), and contamination from pollutants. The article also talks about the challenges in this field and suggests areas for future research. By the use of machine learning in water quality prediction can lead to better and quicker results, aiding in effective water management and conservation",
          "DOI":"https:\/\/doi.org\/10.1109\/ICAAIC60222.2024.10575009"
      },
      {
          "S.no":10,
          "Author names (all)":"Ravirala Vinay NagaGopi,Chaganti SiriVigna,Jasti Phani ,Kayala Vishnu Kanth",
          "Author names (VFSTR)":"Maridu Bhargavi",
          "Student Regd.no":"211FA04640,\n211FA04552,\n211FA04546,\n211FA04531",
          "Title":"Predicting App  Ratings on Google Play Store:AnEnsemble LearningApproach",
          "Conference Name":"2024 IEEE International Conference on Infromation Technology, Electronics andIntelligent Communication Systems (ICITEICS)",
          "Abstract":"As the Google Play Store continues to burgeon with millions of mobile applications catering to diverse needs and preferences, app developers face the challenge of understanding and predicting user satisfaction and ratings. Accurately predicting app ratings is crucial for developers to optimize their app's features, user experience, and overall performance. In this study, we present a comprehensive approach to predicting app ratings on the Google Play Store using machine learning techniques. Utilizing a rich dataset encompassing app metadata such as category, size, price, number of downloads, user reviews, and historical ratings, we employ various machine learning algorithms including regression models, decision trees, random forests, and gradient boosting. Feature engineering techniques are applied to extract useful insights and enhance the models to predict.",
          "DOI":"10.1109\/ICITEICS61368.2024.10625269"
      },
      {
          "S.no":11,
          "Author names (all)":"Narra Chandana\nSure Lakshmi Vyshnavi\nNallagorla Naga Sai Ramya\nB.Suvarna",
          "Author names (VFSTR)":"B.Suvarna",
          "Student Regd.no":"211FA04020\n211FA04015\n211FA04035",
          "Title":"GestureSense: A Deep \nLearning-based Gesture \nLanguage Translator \nusing VGG16 and ResNet50\nEnsembles",
          "Conference Name":"2024 5th International\nConference on Image\nProcessing and\nCapsule Networks\n(ICIPCN)",
          "Abstract":"This research study introduces a Gesture Language Translator system leveraging state-of-the-art Convolutional Neural Network (CNN) architectures, including VGG-16 and ResNet. Through extensive experimentation, the efficacy of these models in capturing the complex features of sign language gestures is evaluated in this research study. To improve translation robustness and accuracy, the Sign Language Translator system combines the capabilities of the VGG-16 and ResNet-50 models using ensemble learning approaches. Furthermore, the project incorporates data preprocessing techniques to enhance the quality and consistency of input sign language images, ensuring optimal performance of the CNN models. Transfer learning strategies are also explored to adapt pre-trained CNN models to the task of sign language recognition, thereby reducing the need for extensive labeled data. Evaluation of the Sign Language Translator system is conducted on standard benchmark dataset ASL Alphabet demonstrating promising results in real-world scenarios. Through comprehensive experimentation and analysis, this research study promotes diversity and accessibility in communication while advancing assistive technologies for people with hearing impairments.",
          "DOI":"10.1109\/ICIPCN63822.2024.00085"
      },
      {
          "S.no":12,
          "Author names (all)":"Uuhasri Madala;\n Renu Bonthagorla;\n Bhavya Sai Mikkilineni;\n Yashmitha Priya Parikala;\nVenkatramaphanikumar Sistla;\n Venkata Krishna Kishore Kolli ",
          "Author names (VFSTR)":"Venkatramaphanikumar Sistla; Venkata Krishna Kishore Kolli",
          "Student Regd.no":"Uuhasri Madala (211FA04132)\n Renu Bonthagorla (211FA04154)\n Bhavya Sai Mikkilineni (211FA04118)\n Yashmitha Priya Parikala (211FA04168)",
          "Title":"An Experimental Study on Prediction of Revenue and Customer Segmentation",
          "Conference Name":"8th International Conference on Inventive Systems and Control",
          "Abstract":"The proliferation of product variety presents a\nsignificant challenge for small retailers grappling with limited\nspace and capital to manage their inventory effectively. This\npaper addresses this issue by investigating various machine\nlearning and deep learning algorithms for predicting future\nproduct demand in small retail establishments. Accurate demand\nforecasts are crucial not only for optimizing retail operations\nbut also for enhancing the efficiency of the entire supply chain.\nLeveraging the abundance of data available today, this study\nexplores the application of suitable machine learning algorithms\nfor forecasting, thereby enabling small retailers to maximize their\nprofit margins. In addition to sales forecasting, the research aims\nto conduct customer segmentation, facilitating informed decision making to drive revenue generation. By harnessing predictive\nanalytics, small retail shop owners can make strategic decisions\nthat align with market demand and consumer behavior, thereby\nenhancing their competitiveness in the retail landscape.",
          "DOI":"10.1109\/ICISC62624.2024.00089"
      },
      {
          "S.no":13,
          "Author names (all)":"Sruthi Chowdary Kongara; Krishna Praneetha Lingamarla ; Holika Singaram; Bindu Priya Dammalapati; Venkatramaphanikumar Sistla;\n Venkata Krishna Kishore Kolli ",
          "Author names (VFSTR)":"Venkatramaphanikumar Sistla; Venkata Krishna Kishore Kolli",
          "Student Regd.no":"Sruthi Chowdary Kongara (211FA04005); Krishna Praneetha Lingamarla (211FA04129); Holika Singaram (211FA04123); Bindu Priya Dammalapati(211FA04163); ",
          "Title":"Prediction of Food Wastage Using XG Boost",
          "Conference Name":"8th International Conference on Inventive Systems and Control",
          "Abstract":"This research study introduces a predictive modelling approach by employing machine learning algorithms to forecast food wastage levels, addressing significant challenges such as data variability, environmental dependencies, and socio-economic disparities. Recent techniques in food wastage prediction often struggle with integrating diverse datasets and achieving high predictive accuracy. Utilizing a comprehensive dataset featuring factors such as environmental conditions, socio-economic indicators, and historical wastage records, this study evaluates five prominent machine learning models: AdaBoost, XGBoost, CatBoost, Support Vector Machines (SVM), and Gaussian Na\u03cave Bayes. The models were assessed using metrics including Mean Squared Error, Root Mean Squared Error, R-Squared Score, and Mean Absolute Error. XGBoost emerged as the top performer, demonstrating superior predictive accuracy and robustness despite the inherent challenges. Additionally, feature importance analysis was conducted to identify significant factors influencing food wastage, offering valuable insights for stakeholders and policymakers. This study underscores the potential of advanced machine learning techniques in addressing the complexities of food waste prediction and advancing sustainability within the food distribution network.",
          "DOI":"10.1109\/ICISC62624.2024.00059"
      },
      {
          "S.no":14,
          "Author names (all)":" Kodali Kowshya Sree;\n Tummala Harika;\n T.V.K Sriramu;\n Manyam Revanthsaikumar;\n Venkatramaphanikumar Sistla;\n S Jaya Sankar",
          "Author names (VFSTR)":"Venkatramaphanikumar Sistla; S Jaya Sankar",
          "Student Regd.no":" Kodali Kowshya Sree (211FA04172) \n Tummala Harika (211FA04110) \n T.V.K Sriramu (211FA04097)\n Manyam Revanthsaikumar (211FA04179)",
          "Title":"An Ensemble Machine Learning Model To Predictive Analysis of End to End Uber Data",
          "Conference Name":"8th International Conference on Inventive Systems and Control",
          "Abstract":"Accurately predicting both daily and monthly transactions is crucial for businesses, providing invaluable insights to analyze fluctuations and formulate strategic plans effectively. This predictive capability not only enhances overall company performance but also plays a pivotal role in optimizing taxi fleet management and reducing wait times for passengers and drivers alike. Leveraging the realm of predictive analytics, our study delves into the utilization of data analytics to scrutinize Uber\u2019s transaction dataset. By exploring historical data and employing a novel machine-learning model, we propose a method to forecast taxi demand across specific areas. Through rigorous analysis of various machine learning algorithms such as AdaBoost, XGBoost, Gradient Boosting, K-Nearest Neighbors (KNN), and Bagging with extra tree classifiers, we evaluate their performance using key metrics like r2 score, mean squared error (MSE), and mean absolute error (MAE). Our findings highlight XGBoost\u2019s remarkable accuracy across all metrics, underscoring the effectiveness of machine learning methodologies in devising robust solutions to enhance urban mobility. Additionally, visual aids such as histograms and heat maps provide a clear representation of data trends, aiding in informed decision-making and facilitating actionable changes.",
          "DOI":" 10.1109\/APCIT62007.2024.10673705"
      },
      {
          "S.no":15,
          "Author names (all)":"Venkata Ramya Manam;\nSatya Lakshmi Ghanta;\nLakshmi Harshitha Polisetty;\nKrishna Babu Yadlapalli;\nVenkatramaphanikumar Sistla;\n Venkata Krishna Kishore Kolli ",
          "Author names (VFSTR)":"Venkatramaphanikumar Sistla; Venkata Krishna Kishore Kolli",
          "Student Regd.no":"Venkata Ramya Manam (211FA04191)\nSatya Lakshmi Ghanta (211FA04019)\nLakshmi Harshitha Polisetty (211FA04119)\nKrishna Babu Yadlapalli (211FA04165)",
          "Title":"A Novel Boosted Machine Learning Model For Software Defective Prediction",
          "Conference Name":"8th International Conference on Inventive Systems and Control",
          "Abstract":"This paper introduces a novel methodology for software defective prediction, combining Kernel Principal Component Analysis (PCA) with the XGBoost algorithm. Software quality assurance remains a critical aspect of modern software development, necessitating advanced techniques for defect identification. Our approach focuses on extracting key features using Kernel PCA, reducing dimensionality while preserving essential information. We discuss our methodology for predicting software defects, which includes data preprocessing, feature extraction with Kernel PCA, and using the XGBoost classifier for prediction. Our algorithmic framework offers a comprehensive solution for defect prediction, leveraging the strengths of both dimensionality reduction and ensemble learning.",
          "DOI":"10.1109\/APCIT62007.2024.10673439"
      },
      {
          "S.no":16,
          "Author names (all)":"Gorige Gayathri;\n Priyanka Potla;\n Manjeera B;\n Niharika Karayavarapu;\nVenkatramaphanikumar Sistla;\n Venkata Krishna Kishore Kolli ",
          "Author names (VFSTR)":"Venkatramaphanikumar Sistla; Venkata Krishna Kishore Kolli",
          "Student Regd.no":"Gorige Gayathri (211FA04002)\n Priyanka Potla (211FA04177)\n Manjeera B (201FA04020)\n Niharika Karayavarapu (211FA04145)\n ",
          "Title":"An Extra Tree Classifier for prediction of End to End Customer Churn and Retention",
          "Conference Name":"8th International Conference on Inventive Systems and Control",
          "Abstract":"Customer retention remains a significant challenge in service-oriented sectors, critically impacting revenue and growth due to churn rates. This paper presents a comprehensive approach using multiple machine learning models to predict customer churn, leveraging a detailed dataset reflecting customer behavior and engagement. The methodology utilized includes diverse models such as bagging with K-Nearest Neighbors (KNN), Ridge Classifier, XGBoost, AdaBoost, and ExtraTree Classifier, with Principal Component Analysis (PCA) for feature extraction to enhance model input. Among these, the ExtraTree Classifier emerged as the most effective, achieving the highest accuracy and consistency across essential metrics like precision, recall, and F1-score. This indicates that the ExtraTree Classifier, paired with PCA, proficiently pinpoints the critical factors influencing customer churn. The findings provide actionable insights for businesses to formulate targeted customer retention strategies. Discussions highlight that the strategic application of the Ex-traTree Classifier, supported by robust feature extraction, can significantly influence customer management and retention initiatives.",
          "DOI":"10.1109\/APCIT62007.2024.10673618"
      },
      {
          "S.no":17,
          "Author names (all)":"Jahnavi Naga Sai Sighakolli;\nViswanath Vangipurapu;\nJai Rama Srinivas Nadella;\nYashwanth Vennapu;\nDeva Kumar S;\nVenkatramaphanikumar Sistla ",
          "Author names (VFSTR)":"Venkatramaphanikumar Sistla; S Deva Kumar",
          "Student Regd.no":"Jahnavi Naga Sai Sighakolli (211FA04114)\nViswanath Vangipurapu (211FA04549)\nJai Rama Srinivas Nadella (211FA04646)\nYashwanth Vennapu (211FA04629)",
          "Title":"Prediction of food ingredient pairings using Siamese Neural Networks",
          "Conference Name":"8th International Conference on Inventive Systems and Control",
          "Abstract":"The study introduces a novel method for predicting food ingredient pairings using siamese neural networks, a type of neural network architecture renowned for its capacity to learn embeddings and capture semantic similarity. The accurate prediction of ingredient pairings holds significance for recipe recommendation systems and culinary innovation. The proposed approach entails training siamese neural networks on a substantial dataset of recipes, where the networks acquire embeddings for each ingredient and assess their compatibility through comparison. The effectiveness of the method is demonstrated through comprehensive evaluation on the dataset, highlighting its capability to accurately forecast ingredient pairings.",
          "DOI":"10.1109\/ICISC62624.2024.00037"
      },
      {
          "S.no":18,
          "Author names (all)":"S.Harshitha,J.Subhashini,N.Archana,P.Neeraj,M.Lahari,M. Bhargavi",
          "Author names (VFSTR)":"Maridu Bhargavi",
          "Student Regd.no":"211FA04513,\n211FA04602,\n211FA04603,\n211FA04615,\n211FA04557\n",
          "Title":"Dividing people's opinions about Amazon Alexa using Classification",
          "Conference Name":"ICISC 2024",
          "Abstract":"In today\u2019s e-commerce, understanding public sentiment towards products is crucial for business growth. Analysing customer feedback poses a challenge due to the increased volume of data. The proposed method addresses this challenge effectively, offering insights critical for informed decision-making. Leveraging machine learning algorithms, this study extracts valuable insights from extensive customer reviews. This research study utilizes data from Kaggle\u2019s Amazon Alexa review dataset, comprising nearly 3000 customer reviews and ratings. Through rigorous analysis, this study has achieved an impressive 94% accuracy rate in discerning customer sentiments. This method not only enhances understanding of consumer perceptions but also provides actionable insights for product development and marketing strategies. By harnessing the power of machine learning, businesses can gain invaluable insights into customer opinions, enabling them to adapt and thrive in the competitive e-commerce landscape.",
          "DOI":"10.1109\/ICISC62624.2024.00090"
      },
      {
          "S.no":19,
          "Author names (all)":"MARELLA VENKATA POOJITHA, Alok Kumar, Turlapati anuhya, Katuri Srinivas",
          "Author names (VFSTR)":"Maridu Bhargavi",
          "Student Regd.no":"211FA04635, 211FA04668, 211FA04559, 211FA04661",
          "Title":"CREDIT CARD FRAUD DETECTION",
          "Conference Name":"ICISC 2024",
          "Abstract":"An enormous challenge for both financial institutions and consumers as a result of the exponential expansion in digital transactions and the related increase in credit card fraud incidences. As fraudulent actions get more complicated, traditional ways of detecting fraud are becoming less and less effective. Utilizing cutting-edge analytical methods is therefore imperative in order to safeguard financial assets and maintain public confidence in the banking system. To examine transaction data from credit card networks and financial institutions, we use machine learning methods in this study. In particular, we apply sentiment analysis to identify possible credit card fraud using the Random Forest, Logistic Regression, and Naive Bayes algorithms. These algorithms were selected because they work well with big datasets and can identify trends that point to fraudulent activity. When accuracy is used to evaluate algorithm performance, Na\u00efve Bayes comes out on top, with an impressive accuracy percentage of 99.30% among the algorithms examined. Nonetheless, the Random Forest and Logistic Regression algorithms also perform admirably, with accuracy rates of 98.5% respectively.",
          "DOI":"10.1109\/ICISC62624.2024.00020"
      },
      {
          "S.no":20,
          "Author names (all)":"Ch.Himaja,N.Jayasri,Sk.Sameer,S.Pratheek",
          "Author names (VFSTR)":"Maridu Bhargavi",
          "Student Regd.no":"211FA04600, 211FA04416, 211FA04305, 211FA04368",
          "Title":"Navigating Car Price Predictions: Unveiling Machine Learning Insights",
          "Conference Name":"ICISC 2024",
          "Abstract":"This research study analyzes car price prediction utilizing machine learning models such as LightGBM, Random Forest, XGBoost, and CatBoost regressors with a comprehensive dataset containing diverse car attributes. Through rigorous evaluation, this study intends to identify the most accurate predictor. LightGBM emerges as a efficient model, achieving minimal Mean Squared Error (MSE) of 0.1 and Root Mean Squared Error (RMSE) of 0.316, closely followed by CatBoost. Additionally, the ensemble model demonstrates strong performance with the lowest MSE (0.08) and RMSE (0.282). These findings contribute to advancing machine learning applications in car valuation, providing valuable guidance to consumers in their purchasing decisions.",
          "DOI":"10.1109\/ICISC62624.2024.00022"
      },
      {
          "S.no":21,
          "Author names (all)":"Shivam Kumar,Safuwan Shiblee,Boyapati Bhavana,K.sri pranathi",
          "Author names (VFSTR)":"Maridu Bhargavi",
          "Student Regd.no":"211FA04672, 211FA04676, 211FA04511, 211FA04632",
          "Title":"Network Instrusion Detection System using machine learning algorithms",
          "Conference Name":"ICISC 2024",
          "Abstract":"In the face of increasing cyber threats and the expansion of computer connections and applications, strong protection against cyber-attacks has become necessary. Intrusion Detection Systems (IDS) are necessary to detect anomalies and dangers in computer networks and thus increase network security. This research combines machine learning (ML) with artificial intelligence (AI) to inform data-driven access to research. Performance of three different classification methods (decision trees, K-nearest neighbors (KNN), and XGBoost + LGBM integration) in identifying effects in the network. Before using the particle separator, the particle s warm optimization (PSO) algorithm is used to reduce residue. The popular KDD-CUP 99 database was used to evaluate the performance of various methods, including parameters such as the ability to detect network interference. Before using the particle separator, the particle swarm optimization (PSO) algorithm is used to reduce residue. Using the popular KDD-CUP 99 database, the performance of this method is evaluated based on metrics such as s pecificity, recall, f1 score, precision, accuracy, and consistency across many types of cyberattacks. The results highlight the effectiveness of the proposed strategy to improve network security by accurately identifying and reducing network crimes.",
          "DOI":"10.1109\/ICISC62624.2024.00093"
      },
      {
          "S.no":22,
          "Author names (all)":"V.Bhanu Prakash,sahil raj,P.NarendraReddy,Harika Rayi,M.Bhargavi",
          "Author names (VFSTR)":"Maridu Bhargavi",
          "Student Regd.no":"211FA04584\n211FA04677,\n211FA04647,\n211FA04628",
          "Title":"Product Price Prediction Using Ensemble Learning Techniques",
          "Conference Name":"ICISC 2024",
          "Abstract":"This study explores the various methods for predicting product prices utilizing past information on attributes, sales trends, and market trends. The suggested methodology may identify patterns and generate accurate price forecasts for new products by examining big datasets that include details about pricing trends, consumer behavior, and comparable products. The objective is to develop a precise system that can predict prices accurately even when the market changes. This will assist businesses in determining fair prices so they may increase revenue and satisfy clients. Many industries stand to gain from the research since it will enable them to use technology to make more informed pricing decisions.",
          "DOI":"10.1109\/ICISC62624.2024.00019"
      },
      {
          "S.no":23,
          "Author names (all)":"D. Likhitha, M.Ramprakash reddy, M.Siri chandana, Kundan Jha",
          "Author names (VFSTR)":"Maridu Bhargavi",
          "Student Regd.no":"211FA04572, 211FA04591, 211FA04599, 211FA04663",
          "Title":"Career prediction using machine learning",
          "Conference Name":"ICISC 2024",
          "Abstract":"This study uses advanced machine learning techniques to predict students\u2019 career paths more accurately. By analyzing and preprocessing various data, including academic performance, extracurricular activities, internships, and personality traits, the study identifies patterns. Ethical considerations, privacy protection, and bias prevention are part of the model development process. The practical applications include personalized career counseling, improving curricula, and optimizing alumni networks. Despite challenges like model interpret ability and adapting to changing job markets, interdisciplinary collaboration is crucial. Overall, educational institutions can use these techniques to provide customized support, helping students make informed career decisions in today\u2019s ever-changing workforce.",
          "DOI":"10.1109\/ICISC62624.2024.00027"
      },
      {
          "S.no":24,
          "Author names (all)":"A Maanas Sai Surya Chandra\n G Bhoomika\n M Manisha\n Y Jeevan Sai Ganesh\n Syed Shareefunnisa",
          "Author names (VFSTR)":"Syed Shareefunnisa",
          "Student Regd.no":"211FA04199,\n 211FA04228,\n 211FA04234,\n 211FA04268",
          "Title":"Analyzing Student Performance for Early Intervention: A Binary Classification Study",
          "Conference Name":"8th International Conference on\n Inventive Systems and Control\n ICISC 2024",
          "Abstract":"This study investigates the classification of pass\/fail outcomes of students without using the G3 characteristics, which stands for final grades. The dataset includes a variety of characteristics, including the socioeconomic variables. This study intends to create reliable machine-learning models to predict student outcomes based on certain characteristics. This will help to get important insights into early intervention techniques and enable support systems in educational environments. The proposed supervised learning method involves training and evaluating ensemble models of multiple classification algorithms through the application of cross-validation techniques. The outcomes show that the proposed method produces good classification accuracy rates, proving that the machine learning techniques are effective in forecasting student success irrespective of final grades. The study\u2019s insights can help educational stakeholders to support atrisk students and raise overall academic attainment.",
          "DOI":"10.1109\/ICISC62624.2024.00100"
      },
      {
          "S.no":25,
          "Author names (all)":"A.Umesh Reddy \n Thirumala Devi\n Anushka\n Bala Vamsi\n Syed Shareefunnisa",
          "Author names (VFSTR)":"Syed Shareefunnisa",
          "Student Regd.no":"211FA04434\n 211FA04471\n 211FA04475\n 211FA04476",
          "Title":"Enhancing Predictive\n  Performance in \n Binary Classification \n on Imbalanced\n  Data Using \n Automated Methodology",
          "Conference Name":"2024 2nd \n World Conference\n  on Communication & \n Computing (WCONF)",
          "Abstract":"Addressing the issue of class imbalance in binary classification tasks remains a significant concern in machine learning. In this study, we propose an automated methodology utilizing a range of classifiers, including K Nearest Neighbors (KNN), Random Forest, and Decision Tree, aimed at mitigating the challenges posed by imbalanced datasets. Through thorough experimentation across a variety of datasets, we assess the effectiveness of these algorithms in terms of primary performance metrics such as accuracy, precision, recall, and F1-score. Suprisingly, our findings reveal that the Random Forest classifier is the most promising solution, demonstrating superior predictive accuracy and resilience in handling imbalanced data distributions. Furthermore, a comprehensive analysis of feature importance sheds light on the underlying factors influencing the classification outcomes. Our study highlights the effectiveness of the of the Random Forest algorithm in addressing class imbalance issues and underscores its potential for practical applications.",
          "DOI":"10.1109\/WCONF61366.2024.10692288"
      },
      {
          "S.no":26,
          "Author names (all)":"Chinni Swarna Rekha,\n Kanyadara Bala Sathvika,\n Govapudi Siva Nandini,\n Rayankula Sumanth,\n Syed Shareefunnisa",
          "Author names (VFSTR)":"Syed Shareefunnisa",
          "Student Regd.no":"211FA04244, 211FA04008, 211FA04254, 211FA04057",
          "Title":"Ensemble Strategies for Predicting Walmart Sales Using Regression Models",
          "Conference Name":"8th International Conference on\n Inventive Systems and Control\n ICISC 2024",
          "Abstract":"This study looks into predictive modeling in the retail sector, with a specific focus on improving sales price predictions for Walmart\u2019s extensive product line. It uses advanced machine learning algorithms and statistical models to rigorously analyze historical sales data alongside external factors such as economic indicators and seasonal trends in order to generate effective models. Our research uses approaches such as Light GBM, Random Forest, Gradient Boosting, Cat Boosting, and K Nearest Neighbors to explore the complex interplay between pricing dynamics and consumer behavior. Our findings not only promote predictive analytics in retail, but also have practical implications for industry practitioners, particularly Walmart, in terms of pricing strategies, inventory management, and overall business performance. We show that the voting ensemble strategy outperforms averaging by accurately improving predictive accuracy across varied base model combinations.",
          "DOI":"10.1109\/ICISC62624.2024.00123"
      },
      {
          "S.no":27,
          "Author names (all)":"Vaddineni Sai Pranathi \n  Pillarisetty Uday Karthik \n  Kalyan Ram \n  Yaswanth Rayapati \n  Syed Shareefunnisa",
          "Author names (VFSTR)":"Syed Shareefunnisa",
          "Student Regd.no":"211FA04071 211FA04245 211FA04091 211FA04109",
          "Title":"Integrating Multiple Recommendation Technique for Enhanced Anime Discovery",
          "Conference Name":"8th International Conference on\n Inventive Systems and Control\n ICISC 2024",
          "Abstract":"Anime recommendation systems play a pivotal role in assisting users in discovering new content tailored to their preferences. This paper presents an innovative approach to anime recommendation utilizing content-based filtering techniques augmented by ensemble learning algorithms. The system leverages the TfIdfVectorizer to analyze textual data from anime names and ratings, extracting features to represent the content. Subsequently, ensemble learning algorithms including XGBoost, LightGBM, Gradient Boosting Decision Trees, AdaBoost, and CatBoost are employed to predict the accuracy of recommendations. The integration of content-based filtering and ensemble learning ensures a robust and accurate recommendation framework, enhancing user satisfaction and engagement. Experimental results demonstrate the effectiveness of the proposed system in providing personalized anime recommendations, thereby facilitating users in exploring diverse and appealing content within the anime domain.",
          "DOI":" 10.1109\/ICISC62624.2024.00045"
      },
      {
          "S.no":28,
          "Author names (all)":"Ambavarapu Harshini \n  Nallagorla Naga Sai Ramya \n  Bathula Sai Teja \n  Chandra Sandeep\n  Syed Shareefunnisa",
          "Author names (VFSTR)":"Syed Shareefunnisa",
          "Student Regd.no":"211FA04073 211FA04035 211FA04271 211FA04079",
          "Title":"Improving customer churn prediction accuracy: a\n SMOTE-based approach",
          "Conference Name":"8th International Conference on\n Inventive Systems and Control\n ICISC 2024",
          "Abstract":"Predicting customer churn could be a crucial assignment for numerous businesses, especially within the broadcast communication industry where the yearly churn rate can be as high as 40%.This process includes recognizing clients who are likely to take off the company, which is basic for maintenance methodologies and income development. In this context, SMOTE has been connected to a dataset to address the issue of imbalanced information, which can adversely affect the execution of machine learning calculations. SVM has shown promising execution in customer churn prediction compared to other machine learning calculations. Specifically, SVM has demonstrated high accuracy rates and effectiveness in predicting customer churn. By combining SMOTE with SVM, a more accurate customer churn prediction model can be developed, leading to improved retention strategies and revenue growth for businesses.",
          "DOI":" 10.1109\/ICISC62624.2024.00044"
      },
      {
          "S.no":29,
          "Author names (all)":"Bhimavarapu Yogi sai reddy\nInturi Pradeep\n Sukhavasi Veerendra\n Burramukku Jeevan Ankush\n Syed Shareefunnisa",
          "Author names (VFSTR)":"Syed Shareefunnisa",
          "Student Regd.no":"211FA04454,\n211FA04467,\n211FA04213\n211FA04489",
          "Title":"Unveiling the Potential of Data Mining in Breast Cancer Prediction",
          "Conference Name":"2024 2nd \n World Conference\n  on Communication & \n Computing (WCONF)",
          "Abstract":"Though breast cancer is prevalent, one in eight women are diagnosed, early detection offers a powerful chance for successful treatment. Regular self-exams and mammograms are your allies in catching any abnormalities early. Diagnosis goes beyond a simple test - advanced scans like ultrasounds and MRIs provide a detailed picture, while biopsies pinpoint the exact type. Risk factors like age, family history, and lifestyle habits influence treatment plans. Remember, breast cancer isn't a one-size-fits-all disease. Different sub types respond best to specific therapies. Genetic testing helps unlock personalized treatment options. While the emotional impact is undeniable, it highlights the importance of strong support systems and mental health resources. The future of breast cancer care is bright - ongoing research paves the way for less invasive and more effective treatments and prevention methods.",
          "DOI":"https:\/\/doi.org\/10.1109\/WCONF61366.2024.10692147"
      },
      {
          "S.no":30,
          "Author names (all)":"Induri Chandana\n Oruganti Mariya Reshma\n Nerella Geetha Sree\n Bommu Jagadeesh Reddy\n Syed Shareefunnisa",
          "Author names (VFSTR)":"Syed Shareefunnisa",
          "Student Regd.no":"211FA04415,\n211FA04432,\n211FA04440,\n211FA04485",
          "Title":"Detecting AI Generated Text",
          "Conference Name":"2024 2nd \n World Conference\n  on Communication & \n Computing (WCONF)",
          "Abstract":"The exponential progression in artificial intelligence (AI) technologies has spearheaded the evolution towards proliferation of AI-generated text across various online platforms. This phenomenon poses significant challenges in maintaining the integrity of information dissemination and combating misinformation. In response, this project proposes a comprehensive approach to detecting AI-generated text through ML methods. By leveraging a diverse dataset of both AI-generated and human-generated text, the project aims to develop robust models capable of accurately discerning AI-generated content. The methodology involves feature engineering, model training, and validation using state-of-the-art NLP frameworks. Additionally, the project explores the ethical implications of AI-generated content detection and considers potential countermeasures against adversarial attacks. The outcomes of this project have practical implications for enhancing content moderation systems, safeguarding against malicious use of AI, and fostering trust in online information ecosystems.",
          "DOI":"10.1109\/WCONF61366.2024.10692028"
      },
      {
          "S.no":31,
          "Author names (all)":"Mandadhi Alekhya;\nGadde Vineela;\nJayanth Addepalli;\nJonnalagadda M V Lakshmi Harshitha;\nVenkatramaphanikumar Sistla;\nVenkata Krishna Kishore Kolli",
          "Author names (VFSTR)":"Venkatramaphanikumar Sistla; Venkata Krishna Kishore Kolli",
          "Student Regd.no":"MANDADHI ALEKHYA(211FA04040) \nGADDE VINEELA (211FA04023)\nJAYANTH ADDEPALLI (211FA04062)\nJONNALAGADDA M V LAKSHMI HARSHITHA (211FA04077)",
          "Title":"An Experimental Analysis of Association Rule Mining Algorithms to Extract Strong and Interesting Association Rules",
          "Conference Name":"2nd IEEE International Conference on Advances in Information Technology (ICAIT-24)",
          "Abstract":"In the dynamic realm of market basket analysis, understanding customer purchase patterns is paramount for strategic decision-making. This research embarked on an exploratory journey through the utilization of five prominent algorithms: Apriori, FP-Growth, GSP, ECLAT, and DEclat, each evaluated across a comprehensive framework of metrics including support, confidence, lift, and conviction. It aiming to uncover patterns in purchasing behaviour through association rule mining. Employing a comprehensive transactional dataset retrieved from Kaggle, this study navigates through the stages of data preprocessing, visualization, and algorithmic application to distill strong and interesting association rules. Explored from strong association rules how many are interesting and non - interesting association rules.",
          "DOI":"10.1109\/ICAIT61638.2024.10690451"
      },
      {
          "S.no":32,
          "Author names (all)":"Nerella Pujitha;\nPittu Divya Sri;\nSandhya Undrakonda;\nSasidhar Chennamsetty;\nVenkatramaphanikumar Sistla;\nVenkata Krishna Kishore Kolli",
          "Author names (VFSTR)":"Venkatramaphanikumar Sistla; Venkata Krishna Kishore Kolli",
          "Student Regd.no":"NERELLA PUJITHA - 211FA04152\nPITTU DIVYA SRI - 211FA04004\nSANDHYA UNDRAKONDA - 211FA04105\nSASIDHAR CHENNAMSETTY - 211FA04052",
          "Title":"An Efficient Seq2Seq model to predict Question and Answer response system",
          "Conference Name":"2nd IEEE International Conference on Advances in Information Technology (ICAIT-24)",
          "Abstract":"The study introduces an innovative automated question and response prediction system, leveraging A Seq2Seq model with LSTM handles NLP challenges like long-term dependencies and sequential data. By harnessing Transformer-based models, it showcases proficiency in tasks such as Event argument extraction, event extraction, QA, and sequencelabeling tasks. Through comprehensive model evaluation, the system demonstrates its ability to generate Q&A directly from input paragraphs, thereby enhancing comprehension of meaning and context. The incorporation of LSTM architecture further enhances the system's performance, particularly in capturing long-range dependencies and sequential patterns. This utilization of LSTM architecture facilitates more effective learning of temporal dependencies and context, contributing significantly to the system's overall accuracy and effectiveness in automated Question Answering (QA) systems. These advancements hold promise for a wide range of applications across diverse domains, signifying a significant leap forward in NLP technology. Index Terms-NLP, Event Extraction, QA, BERT, LSTM",
          "DOI":"10.1109\/ICAIT61638.2024.10690343"
      },
      {
          "S.no":33,
          "Author names (all)":"Jayanth Paladugu;\nAbhiram Nagam;\nPriyanka Undavalli;\nPriya Parasaram;\nVenkatramaphanikumar Sistla;\nVenkata Krishna Kishore Kolli",
          "Author names (VFSTR)":"Venkatramaphanikumar Sistla; Venkata Krishna Kishore Kolli",
          "Student Regd.no":"Jayanth Paladugu (211FA04210) \nAbhiram Nagam (211FA04562) \nPriyanka Undavalli (211FA04452) \nPriya Parasaram(211FA04279)",
          "Title":"Leveraging CAT Boost for enhances prediction of app ratings in the google play store",
          "Conference Name":"2nd IEEE International Conference on Advances in Information Technology (ICAIT-24)",
          "Abstract":"This study focuses on predicting app ratings in the Google Play Store using a comprehensive google playstore dataset. It examines various app characteristics, such as the number of installs, app size, and the number of reviews, to determine influential factors in predicting app ratings. The methodology incorporates data preprocessing, feature engineering, and the application of five distinct regression models to evaluate their predictive performance. Among the models, CAT Boost emerged as the superior method, demonstrating the highest predictive accuracy. This research not only identifies key factors influencing app ratings but also offers a comparative analysis of model performances, facilitating the selection of the most effective predictive strategy. The insights gained are instrumental for developers seeking to enhance app quality and optimize user engagement.",
          "DOI":"10.1109\/ICAIT61638.2024.10690600"
      },
      {
          "S.no":34,
          "Author names (all)":"Vanamala Sai Sevitha;\nChennupati Tanuja;\nGalla Prabhath;\nVempati Manikanta;\nVenkatramaphanikumar Sistla;\nVenkata Krishna Kishore Kolli",
          "Author names (VFSTR)":"Venkatramaphanikumar Sistla; Venkata Krishna Kishore Kolli",
          "Student Regd.no":"Vanamala Sai Sevitha (211FA04135)\nChennupati Tanuja (211FA04121)\nGalla Prabhath (211FA04413)\nVempati Manikanta (211FA04544)",
          "Title":"An Experimental Study on Prediction Of Video Ads Engagement",
          "Conference Name":"2nd IEEE International Conference on Advances in Information Technology (ICAIT-24)",
          "Abstract":"In the realm of digital advertising, the quest to anticipate and adapt to user engagement patterns with video advertisements drives the adoption of advanced machine learning techniques. This study utilizes a rich dataset encompassing various user attributes such as demographic information, browsing behavior, and device details. Leveraging Principal Component Analysis (PCA) for feature extraction, the dataset's dimensionality is reduced while preserving crucial patterns, thus enhancing the effectiveness of the predictive model. Through rigorous training and evaluation, employing metrics like accuracy, confusion matrix analysis, precision, recall, and F1 score, the study showcases the efficacy of the employed machine learning approach, particularly in predicting user engagement with video ads. These findings underscore the potential of machine learning in providing actionable insights into user behavior, guiding advertising strategies and decision-making processes. Furthermore, the application of PCA in feature extraction stands out as a notable contribution, refining the dataset and improving prediction accuracy. By delving into user engagement analysis, this research offers valuable insights for advertisers aiming to thrive in the competitive landscape of digital advertising.",
          "DOI":"10.1109\/ICAIT61638.2024.10690423"
      },
      {
          "S.no":35,
          "Author names (all)":"Annam Jayasri;\nShaik Rafiya Nasreen; \nAtchutha Kavya;\nSayyad Karimun; Venkatramaphanikumar Sistla;\nVenkata Krishna Kishore Kolli",
          "Author names (VFSTR)":"Venkatramaphanikumar Sistla; Venkata Krishna Kishore Kolli",
          "Student Regd.no":"Annam Jayasri (211FA04128) \nShaik Rafiya Nasreen(211FA04076) \nAtchutha Kavya(211FA04150) \nsayyad Karimun(211FA04038)",
          "Title":"Sentiment Analysis using CEMO LSTM to reveal the emotions from Tweets",
          "Conference Name":"2nd\u00a0International Conference on Data Science and Network Security (ICDSNS-2024)",
          "Abstract":"This study highlights the importance of sentiment analysis for text data mining and natural language processing (NLP) and goes into great length about it. Given that Twitter is a widely used medium for opinion and sentiment expression, finding sentiment within its massive dataset is crucial. It looks into several aspects of sentiment analysis on Twitter using a range of approaches and techniques. It outlines the advantages and disadvantages of several approaches, such as lexicon-based tactics, machine learning algorithms, and sophisticated deep learning models, for efficiently extracting sentiment from tweets. explains the particular difficulties that come with sentiment analysis on Twitter, including the dynamic nature of social media, short-form tweets, and small language variances.",
          "DOI":"10.1109\/ICDSNS62112.2024.10690888"
      },
      {
          "S.no":36,
          "Author names (all)":"Vinay Kumar Naramala\nPrasanna Ravipudi \nSurya Prakesh Reddy Bhavanam \nVenkata Narayana Pokuri \nVenkatramaphanikumar Sistla \nVenkata Krishna Kishore Kolli",
          "Author names (VFSTR)":"Venkatramaphanikumar Sistla; Venkata Krishna Kishore Kolli",
          "Student Regd.no":"Vinay Kumar Naramala - 211FA04173\nPrasanna Ravipudi - 211FA04460\nSurya Prakesh Reddy Bhavanam - 211FA04103\nVenkata Narayana Pokuri - 211FA04042",
          "Title":"Prediction of Credit Card Fraud detection using Extra Tree Classifier and Data Balancing Methods",
          "Conference Name":"2024 IEEE World Conference on Applied Intelligence and Computing",
          "Abstract":"In the digital finance age, increased credit card transactions have led to a rise in fraudulent activities. This study employs machine learning to detect fraud in unbalanced European credit card data. Techniques like SMOTE and Cluster Centroids are utilized for data balancing. Algorithms including Extra Trees, XGBoost, and K-Nearest Neighbors are evaluated using metrics such as accuracy and F1 score. The results show significant improvements, especially with the Extra Trees classifier, emphasizing the method's effectiveness in securing online financial transactions.",
          "DOI":"10.1109\/AIC61668.2024.10730885"
      },
      {
          "S.no":37,
          "Author names (all)":"Venkata Sai Sudheer kumar Batchu\nKhajavali Syed\nAnuhya Kavuri\nAnusha Kukkapalli\nVenkatramaphanikumar Sistla \nVenkata Krishna Kishore K",
          "Author names (VFSTR)":"Venkatramaphanikumar Sistla; Venkata Krishna Kishore Kolli",
          "Student Regd.no":"Venkata Sai Sudheer kumar Batchu-211FA04174\nKhajavali Syed-211FA04184\nAnuhya Kavuri-211FA04087\nAnusha Kukkapalli-211FA04050",
          "Title":"Impact Analysis of Feature Selection in Supervised and Unsupervised Methods",
          "Conference Name":"2024 IEEE World Conference on Applied Intelligence and Computing",
          "Abstract":"Feature selection plays a pivotal role in enhancing machine learning model performance by removing irrelevant and redundant data, thus reducing dimensionality and improving computational efficiency. There are various Feature selection techniques in both supervised and unsupervised approaches. This study investigates about the performance of various base classifiers and clustering models using different feature selection techniques. This study is based on spam dataset which consist of spam emails and how feature selection makes a impact on the model. The unique aspect of our approach is trying various combinations of feature selection on the dataset and observe the results. This study also focuses on univariate and bivariate feature selection strategies and their outcomes in both supervised and unsupervised approaches. The feature selection techniques used in this study are chi-square, anova, PCA and their combinations.",
          "DOI":"10.1109\/AIC61668.2024.10730832"
      },
  ];

  const [searchTerm, setSearchTerm] = useState('');

  // Filter publications based on search term
  const filteredPublications = publications.filter(publication =>
    publication.Title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="container-fluid py-4">
      {/* Search Bar */}
      <div className="row mb-4">
        <div className="col-12 d-flex justify-content-end">
          <div className="position-relative" style={{ maxWidth: '300px' }}>
            <input
              type="text"
              className="form-control pe-5"
              placeholder="Search by title..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <SearchIcon 
              size={20} 
              className="position-absolute text-muted" 
              style={{ 
                right: '10px', 
                top: '50%', 
                transform: 'translateY(-50%)' 
              }}
            />
          </div>
        </div>
      </div>

      {/* Publications Grid */}
      <div className="row">
        {filteredPublications.length > 0 ? (
          filteredPublications.map((publication, index) => (
            <PublicationCard 
              key={publication.DOI || index} 
              publication={publication} 
            />
          ))
        ) : (
          <div className="col-12 text-center py-5">
            <h5 className="text-muted">No publications found matching your search.</h5>
          </div>
        )}
      </div>
    </div>
  );
};

export default App;