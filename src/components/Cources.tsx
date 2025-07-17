import CourceCard from "./common/CourceCard.tsx";

const Cources = () => {
    const corse = [
        {
            id: 1,
            course_name: "AWS Developer Associate Exam Prep",
            reviews: "99%",
            review_status: true,
            tutor_details: {
                certified:false,
                name: "Michele Burns",
                profile_pic:"https://skillmentor-frontend.vercel.app/assets/mentor-1-BcvFCmi6.webp",
                position: "Tech lead at IFS",
                started_year: "2018",
                self_note: "Hi! I'm Michelle. Language lover and tutor of English. I specialize in AWS certification preparation and have helped over 150 students achieve their AWS Developer Associate certification. With my background in cloud computing and software development, I can provide practical insights and real-world examples to help you understand complex concepts. I also offer mock interviews and hands-on coding sessions."
            },
            enrollments:158,
            course_picture:"https://skillmentor-frontend.vercel.app/assets/aws-certified-1-D6wyl1tQ.webp"
        },
        {
            id: 2,
            course_name: "AWS DevOps Engineering Proffesional Exam Prep",
            reviews: "97%",
            review_status: true,
            tutor_details: {
                certified:true,
                name: "David Kumar",
                profile_pic:"https://skillmentor-frontend.vercel.app/assets/mentor-2-D_9R4NPS.webp",
                position: "Senior DevOps Engineer at WSO2",
                started_year: "2015",
                self_note: "Hey there! I'm a Senior DevOps Engineer with experience at Fortune 500 companies. I specialize in CI/CD pipelines, container orchestration with Kubernetes, and cloud-native architectures. I've helped hundreds of engineers transition into DevOps roles and master tools like Docker, Jenkins, and GitLab. My sessions include hands-on infrastructure as code exercises and real-world automation scenarios."
            },
            enrollments:175,
            course_picture:"https://skillmentor-frontend.vercel.app/assets/aws-certified-2-Hv4PUJ2j.webp"
        },
        {
            id: 3,
            course_name: "AWS Machine Learning Specialty Certification Examp Prep",
            reviews: "98%",
            review_status: true,
            tutor_details: {
                certified:true,
                name: "Dr. Priya Sharma",
                profile_pic:"https://skillmentor-frontend.vercel.app/assets/mentor-3-CtKq0xJq.webp",
                position: "Senior ML Engineer at IBM",
                started_year: "2015",
                self_note: "Hi there! I'm a Senior Machine Learning Engineer with 8+ years of experience in ML/AI. I specialize in helping developers master AWS ML services like SageMaker, Comprehend, and Rekognition. I've successfully guided over 120 students to achieve their AWS ML Specialty certification. My sessions include hands-on ML model deployment, practical deep learning exercises, and real-world case studies. We'll cover everything from data preprocessing to model optimization and production deployment on AWS."
            },
            enrollments:142,
            course_picture:"https://skillmentor-frontend.vercel.app/assets/aws-certified-3-uMqJTt8t.webp"
        },
    ]
    return (
        <>
            <div className="container">
                <h3 className="sm:text-3xl md:text-4xl lg:text-5xl ">Schedule a Call</h3>
                <div className="py-3 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
                    {corse.map(item => (
                        <CourceCard item={item}/>
                    ))}
                </div>
            </div>
        </>
    )
}
export default Cources
