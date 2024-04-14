
import logo from "../../../assets/logo.png";
import style from "./about.module.css";

const About = () => {
  return (
    <>
      <div className={`${style.bg}`}>
       
        <div className="container pt-5">
          <div
            id="carouselExampleFade"
            className="carousel slide carousel-fade"
            data-bs-ride="carousel"
          >
            <div
              className={`${style["carousel-indicator"]} carousel-indicators`}
            >
              <button
                type="button"
                data-bs-target="#carouselExampleFade"
                data-bs-slide-to="0"
                className={`${style.carouselbutton} active`}
                aria-current="true"
                aria-label="Slide 1"
              ></button>
              <button
                type="button"
                data-bs-target="#carouselExampleFade"
                data-bs-slide-to="1"
                aria-label="Slide 2"
                className={`${style.carouselbutton}`}
              ></button>
              \{" "}
            </div>
            
            <div className="carousel-inner text-end">
              <div className="carousel-item active" data-bs-interval="10000">
                <div className="row align-items-center">
                  <div className="col-lg-4 col-md-5">
                    <img src={logo} className="d-block w-50" alt="img" />
                  </div>
                  <div className="col-lg-8 col-md-6">
                    <h1 className="section_title">
                      إستشارات قانونية بمعايير عالمية المستوي
                    </h1>
                    <p className="section_subtitle pt-3">
                      يعتبر البرمجة أحد العناصر الأساسية والحيوية في تقديم
                      الحلول التقنية المبتكرة والفعالة للعملاء. تقوم البرمجة
                      بتحويل الأفكار والمتطلبات إلى تطبيقات وبرمجيات قائمة على
                      الحوسبة، مما يساعد على تحسين العمليات وزيادة الإنتاجية.
                      تعتمد فعالية مكتب الاستشارات في هذا المجال على فريق متخصص
                      من المبرمجين والمطورين الذين يمتلكون مهارات عالية وخبرة
                      واسعة في مجالات متعددة مثل تطوير تطبيقات الويب والهواتف
                      الذكية، وتحليل البيانات، والذكاء الصناعي، والأمن
                    </p>
                  </div>
                </div>
              </div>
              <div className="carousel-item" data-bs-interval="2000">
                <div className="row align-items-center">
                  <div className="col-lg-4 col-md-5">
                    <img src={logo} className="d-block w-50" alt="img" />
                  </div>
                  <div className="col-lg-8 col-md-6">
                    <h1 className="section_title">
                      مكتب محاماه دولي بمعايير عالمية
                    </h1>
                    <p className="section_subtitle pt-3">
                      يعتبر البرمجة أحد العناصر الأساسية والحيوية في تقديم
                      الحلول التقنية المبتكرة والفعالة للعملاء. تقوم البرمجة
                      بتحويل الأفكار والمتطلبات إلى تطبيقات وبرمجيات قائمة على
                      وتحليل البيانات، والذكاء الصناعي، والأمن بتحويل الأفكار
                      والمتطلبات إلى تطبيقات وبرمجيات قائمة على وتحليل البيانات،
                      والذكاء الصناعي، والأمن
                    </p>
                  </div>
                </div>{" "}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
