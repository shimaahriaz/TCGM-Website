import style from "./Header.module.css";

const Header = () => {
  return (
    <>
      <div className={`${style.bg}`}>
        <div className="container">
          <div className="d-flex align-items-center vh-100">
          <div className="text-content text-end pt-4">
            <h1 className="section_title">
              مستوي جديد من الحلول البرمجية والقانوية
            </h1>
            <p className="section_subtitle w-50 m-auto pt-4">
              يعتبر البرمجة أحد العناصر الأساسية والحيوية في تقديم الحلول
              التقنية المبتكرة والفعالة للعملاء. تقوم البرمجة بتحويل الأفكار
              والمتطلبات إلى تطبيقات وبرمجيات قائمة على الحوسبة، مما يساعد على
              تحسين العمليات وزيادة الإنتاجية. تعتمد فعالية مكتب الاستشارات في
              هذا المجال على فريق متخصص من المبرمجين والمطورين الذين يمتلكون
              مهارات عالية وخبرة واسعة في مجالات متعددة مثل تطوير تطبيقات الويب
              والهواتف الذكية، وتحليل البيانات، والذكاء الصناعي، والأمن
              
            </p>
          </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
