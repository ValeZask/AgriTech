import { useState } from 'react';
import aboutImg from './assets/about.jpg';
import heroImg from './assets/hero-bgorig.png';
import logo from './assets/logotech.png';



export default function AgriTechLanding() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    message: ''
  });

  const [instrumentData, setInstrumentData] = useState({
    region: '',
    temperature: '',
    precipitation: '',
    humidity: '',
    soilType: '',
    ph: '',
    soilMoisture: '',
    soilTemp: '',
    crop: '',
    plantingDate: '',
    stage: '',
    previousCrops: '',
    area: '',
    problems: '',
    notes: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Contact form submitted:', formData);
    alert('Спасибо! Мы свяжемся с вами в ближайшее время.');
    setFormData({ name: '', phone: '', email: '', message: '' });
  };

  const handleInstrumentSubmit = (e) => {
    e.preventDefault();
    console.log('Instrument form submitted:', instrumentData);
    const analysisSection = document.getElementById('analysis');
    if (analysisSection) {
      analysisSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToSection = (e, id) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      const offset = 110;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
    }
  };

  return (
    <div style={{ margin: 0, padding: 0, fontFamily: 'Arial, sans-serif', color: '#333' }}>
      <style>{`
        * { margin: 0; padding: 0; box-sizing: border-box; }
        body { line-height: 1.6; }
        
        .header {
          background-color: #31473B;
          position: sticky;
          top: 0;
          z-index: 1000;
          box-shadow: 0 2px 10px rgba(0,0,0,0.1);
        }
        
        .navbar {
          max-width: 1400px;
          margin: 0 auto;
          padding: 0 40px;
          display: flex;
          justify-content: space-between;
          align-items: center;
          height: 80px;
        }
        
.logo {
  display: flex;
  align-items: center;
}

.logo img {
  height: 30px;
  width: auto;
  display: block;
}

        
        .nav-menu {
          display: flex;
          list-style: none;
          gap: 60px;
          flex: 1;
          justify-content: center;
        }
        
        .nav-menu a {
          color: white;
          text-decoration: none;
          font-size: 16px;
          transition: opacity 0.3s;
          cursor: pointer;
        }
        
        .nav-menu a:hover { opacity: 0.8; }
        
        .contact-button {
          background-color: #D4AA52;
          color: #000;
          padding: 7px 35px;
          text-decoration: none;
          font-weight: 500;
          font-size: 16px;
          transition: background-color 0.3s;
          border: none;
          cursor: pointer;
        }
        
        .contact-button:hover { background-color: #b8a892; }
        
        .hero {
          min-height: calc(100vh - 90px);
          display: flex;
          align-items: center;
          justify-content: center;
          background-color: #fff;
          padding: 50px 40px 25px;
        }
        
        .video-container {
          position: relative;
          max-width: 1100px;
          margin: 0 auto 40px;
          overflow: hidden;
        }
        
.video-container { position: relative; max-width: 1100px; margin: 0 auto 40px; overflow: hidden; }

.hero-image {
  width: 100%;
  height: 500px;          /* при необходимости уменьшай/увеличивай */
  object-fit: cover;
  display: block;
  filter: brightness(0.85);
  z-index: 0;
}

.play-button {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 2;
  cursor: pointer;
}

.hero-title {
  position: absolute;
  bottom: 30px;
  left: 50%;
  transform: translateX(-50%);
  color: #f8f6f0;
  font-size: 2.5rem;
  z-index: 2;
  white-space: nowrap;
  text-align: center;
}
        
        .about {
          background-color: #edf8f1;
          padding: 60px 80px;
        }
        
        .about-wrapper {
          max-width: 1100px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: 1.1fr 1fr;
          align-items: center;
          gap: 70px;
        }
        
        .about-text h2 {
          font-size: 48px;
          color: #1F4636;
          font-weight: 400;
          margin-bottom: 40px;
        }
        
        .about-text p {
          font-size: 18px;
          line-height: 1.6;
          margin-bottom: 22px;
          color: #1b1b1b;
        }
        
        .about-image {
          position: relative;
          display: flex;
          justify-content: center;
          align-items: center;
        }
        
        .image-wrapper {
          position: relative;
          width: 60%;
          max-width: 400px;
          z-index: 2;
        }
        
        .about-image img {
          width: 100%;
          height: auto;
          display: block;
          background: linear-gradient(45deg, #2c5f4f, #1F4636);
          min-height: 400px;
        }
        
        .about-image::after {
          content: "";
          position: absolute;
          bottom: -25px;
          right: 70px;
          width: 60%;
          height: 100%;
          background-color: #1F4636;
          z-index: 1;
        }
        
        .instrument {
          background: #fff;
          padding: 60px 80px;
        }
        
        .instrument-container {
          max-width: 1100px;
          margin: 0 auto;
        }
        
        .instrument-title {
          font-size: 42px;
          color: #1F4636;
          font-weight: 400;
          margin-bottom: 18px;
        }
        
        .instrument-desc {
          font-size: 18px;
          margin-bottom: 38px;
          color: #222;
        }
        
        .fieldset {
          border: none;
          margin-bottom: 32px;
          padding: 0;
        }
        
        .legend {
          font-size: 26px;
          color: #1F4636;
          font-weight: 500;
          margin-bottom: 18px;
        }
        
        .form-row {
          display: flex;
          gap: 24px;
          margin-bottom: 18px;
        }
        
        .instrument-form input,
        .instrument-form textarea {
          flex: 1;
          padding: 14px;
          font-size: 16px;
          border: none;
          background: #f5f5f5;
          outline: none;
          font-family: inherit;
        }
        
        .instrument-form textarea {
          resize: vertical;
          min-height: 60px;
        }
        
        .instrument-submit {
          background: #D4AA52;
          color: #31473B;
          border: none;
          padding: 14px 0;
          font-size: 18px;
          font-weight: 500;
          cursor: pointer;
          width: 100%;
          margin-top: 18px;
          transition: background 0.3s;
        }
        
        .instrument-submit:hover { background: #b8a892; }
        
        .analysis {
          background: #edf8f1;
          padding: 60px 80px;
        }
        
        .analysis-container {
          max-width: 1100px;
          margin: 0 auto;
        }
        
        .analysis-title {
          font-size: 42px;
          color: #1F4636;
          font-weight: 400;
          margin-bottom: 24px;
        }
        
        .analysis-desc {
          font-size: 18px;
          margin-bottom: 32px;
          color: #222;
        }
        
        .analysis-subtitle {
          font-size: 26px;
          color: #1F4636;
          font-weight: 500;
          margin-top: 32px;
          margin-bottom: 18px;
        }
        
        .analysis-list {
          font-size: 18px;
          color: #222;
          margin-bottom: 18px;
          padding-left: 22px;
        }
        
        .footer {
          background-color: #31473B;
          color: white;
          padding: 80px 0 40px;
        }
        
        .footer-wrapper {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 80px;
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 100px;
          align-items: start;
        }
        
        .footer-title {
          font-size: 28px;
          font-weight: 400;
          margin-bottom: 10px;
        }
        
        .footer-subtitle {
          font-size: 36px;
          font-weight: 400;
          margin-bottom: 50px;
        }
        
        .contact-info {
          display: flex;
          flex-direction: column;
          gap: 25px;
        }
        
        .contact-item {
          display: flex;
          align-items: center;
          gap: 20px;
          font-size: 18px;
        }
        
        .contact-form {
          display: flex;
          flex-direction: column;
          gap: 20px;
        }
        
        .form-group {
          display: flex;
          flex-direction: column;
        }
        
        .form-group label {
          margin-bottom: 8px;
          font-size: 16px;
        }
        
        .form-group input,
        .form-group textarea {
          padding: 15px;
          border: none;
          background-color: white;
          font-size: 16px;
          font-family: inherit;
          outline: none;
        }
        
        .form-group textarea {
          resize: vertical;
          min-height: 120px;
        }
        
        .submit-button {
          background-color: #D4AA52;
          color: #31473B;
          border: none;
          padding: 18px 40px;
          font-size: 18px;
          font-weight: 500;
          cursor: pointer;
          transition: background-color 0.3s;
          width: 100%;
        }
        
        .submit-button:hover { background-color: #b8a892; }
        
        #about, #instrument, #analysis, #contact {
          scroll-margin-top: 110px;
        }
        
        @media (max-width: 900px) {
          .about-wrapper {
            grid-template-columns: 1fr;
            gap: 40px;
          }
          .footer-wrapper {
            grid-template-columns: 1fr;
            gap: 50px;
            padding: 0 40px;
          }
          .nav-menu {
            display: none;
          }
          .hero-title {
            font-size: 1.8rem;
            white-space: normal;
          }
        }
      `}</style>

{/* HEADER */}
<header className="header">
  <nav className="navbar">
    <div className="logo">
      <img src={logo} alt="AgriTech Logo" />
    </div>

    <ul className="nav-menu">
      <li><a onClick={(e) => scrollToSection(e, 'home')}>Главная</a></li>
      <li><a onClick={(e) => scrollToSection(e, 'about')}>О нас</a></li>
      <li><a onClick={(e) => scrollToSection(e, 'instrument')}>Инструмент</a></li>
      <li><a onClick={(e) => scrollToSection(e, 'analysis')}>Информация</a></li>
    </ul>

    <button className="contact-button" onClick={(e) => scrollToSection(e, 'contact')}>
      Контакты
    </button>
  </nav>
</header>

<section className="hero" id="home">
  <div className="video-container">
    <img
      src={heroImg}
      alt="Hero"
      className="hero-image"
      onError={(e) => { e.currentTarget.style.display = 'none'; console.warn('hero image load failed'); }}
    />

    <div className="play-button" aria-hidden>
      <svg width="110" height="110" viewBox="0 0 110 110">
        <circle cx="55" cy="55" r="50" fill="rgba(255,255,255,0.3)" />
        <polygon points="45,35 45,75 80,55" fill="#222" />
      </svg>
    </div>

    <h1 className="hero-title">Земля подскажет, мы переведём</h1>
  </div>
</section>
      {/* ABOUT SECTION */}
      <section className="about" id="about">
        <div className="about-wrapper">
          <div className="about-text">
            <h2>О нас</h2>
            <p>Мы создаём сервис, который помогает фермерам принимать решения на основе данных</p>
            <p>Наш алгоритм анализирует климат, состояние почвы и выбранные культуры, чтобы давать точные рекомендации по поливу, посеву и уходу за урожаем</p>
            <p>Мы верим, что технологии должны работать просто и приносить пользу даже там, где главное слово за землёй</p>
          </div>
<div className="about-image">
  <div className="image-wrapper">
    <img src={aboutImg} alt="О нас" />
  </div>
</div>
        </div>
      </section>

      {/* INSTRUMENT SECTION */}
      <section className="instrument" id="instrument">
        <div className="instrument-container">
          <h2 className="instrument-title">Название инструмента</h2>
          <p className="instrument-desc">
            Этот инструмент создан, чтобы превратить сложные данные в понятные шаги. Заполните несколько полей о вашей ферме и получите рекомендации, которые помогут повысить урожайность и сэкономить ресурсы
          </p>
          <div className="instrument-form">
            <div className="fieldset">
              <div className="legend">Климат и погода</div>
              <div className="form-row">
                <input 
                  type="text" 
                  placeholder="Регион / локация"
                  value={instrumentData.region}
                  onChange={(e) => setInstrumentData({...instrumentData, region: e.target.value})}
                />
              </div>
              <div className="form-row">
                <input 
                  type="text" 
                  placeholder="Средняя температура"
                  value={instrumentData.temperature}
                  onChange={(e) => setInstrumentData({...instrumentData, temperature: e.target.value})}
                />
                <input 
                  type="text" 
                  placeholder="Осадки"
                  value={instrumentData.precipitation}
                  onChange={(e) => setInstrumentData({...instrumentData, precipitation: e.target.value})}
                />
                <input 
                  type="text" 
                  placeholder="Влажность воздуха"
                  value={instrumentData.humidity}
                  onChange={(e) => setInstrumentData({...instrumentData, humidity: e.target.value})}
                />
              </div>
            </div>
            
            <div className="fieldset">
              <div className="legend">Почва</div>
              <div className="form-row">
                <input 
                  type="text" 
                  placeholder="Тип почвы"
                  value={instrumentData.soilType}
                  onChange={(e) => setInstrumentData({...instrumentData, soilType: e.target.value})}
                />
                <input 
                  type="text" 
                  placeholder="Уровень pH (кислотность)"
                  value={instrumentData.ph}
                  onChange={(e) => setInstrumentData({...instrumentData, ph: e.target.value})}
                />
                <input 
                  type="text" 
                  placeholder="Влажность почвы (на момент ввода)"
                  value={instrumentData.soilMoisture}
                  onChange={(e) => setInstrumentData({...instrumentData, soilMoisture: e.target.value})}
                />
              </div>
              <div className="form-row">
                <input 
                  type="text" 
                  placeholder="Температура почвы"
                  value={instrumentData.soilTemp}
                  onChange={(e) => setInstrumentData({...instrumentData, soilTemp: e.target.value})}
                />
              </div>
            </div>
            
            <div className="fieldset">
              <div className="legend">Культура</div>
              <div className="form-row">
                <input 
                  type="text" 
                  placeholder="Выбранная культура / сорт"
                  value={instrumentData.crop}
                  onChange={(e) => setInstrumentData({...instrumentData, crop: e.target.value})}
                />
                <input 
                  type="text" 
                  placeholder="Планируемая дата посадки / посева"
                  value={instrumentData.plantingDate}
                  onChange={(e) => setInstrumentData({...instrumentData, plantingDate: e.target.value})}
                />
                <input 
                  type="text" 
                  placeholder="Этап развития"
                  value={instrumentData.stage}
                  onChange={(e) => setInstrumentData({...instrumentData, stage: e.target.value})}
                />
              </div>
              <div className="form-row">
                <input 
                  type="text" 
                  placeholder="Предыдущие культуры"
                  value={instrumentData.previousCrops}
                  onChange={(e) => setInstrumentData({...instrumentData, previousCrops: e.target.value})}
                />
              </div>
            </div>
            
            <div className="fieldset">
              <div className="legend">Дополнительно</div>
              <div className="form-row">
                <input 
                  type="text" 
                  placeholder="Размер участка (м²)"
                  value={instrumentData.area}
                  onChange={(e) => setInstrumentData({...instrumentData, area: e.target.value})}
                />
                <input 
                  type="text" 
                  placeholder="Проблемы в прошлом сезоне"
                  value={instrumentData.problems}
                  onChange={(e) => setInstrumentData({...instrumentData, problems: e.target.value})}
                />
              </div>
              <div className="form-row">
                <textarea 
                  placeholder="Отметки"
                  value={instrumentData.notes}
                  onChange={(e) => setInstrumentData({...instrumentData, notes: e.target.value})}
                />
              </div>
            </div>
            
            <button onClick={handleInstrumentSubmit} className="instrument-submit">Анализировать</button>
          </div>
        </div>
      </section>

      {/* ANALYSIS SECTION */}
      <section className="analysis" id="analysis">
        <div className="analysis-container">
          <h2 className="analysis-title">Анализ ситуации</h2>
          <p className="analysis-desc">
            Текущая влажность почвы ниже оптимальной для томатов на этапе цветения. Это может привести к опадению цветков и снижению урожайности. Повышенные дневные температуры усиливают испарение влаги, а отсутствие дождей означает, что единственным источником влаги будет искусственный полив
          </p>
          
          <h3 className="analysis-subtitle">Рекомендации по поливу</h3>
          <ol className="analysis-list">
            <li>Проведите капельный полив завтра с 6:00 до 8:00 (ориентировочно 25–30 м³ воды на гектар), чтобы поднять влажность до 30–35 %.</li>
            <li>В условиях жары увеличьте частоту полива с 1 раза до 2 раз в неделю, чтобы не допустить стресса растений.</li>
            <li>Проверьте работу системы капельного полива: убедитесь, что расходомеры дают равномерный поток по всей длине гряд.</li>
          </ol>
          
          <h3 className="analysis-subtitle">Рекомендации по питанию растений</h3>
          <ol className="analysis-list">
            <li>Через 2–3 дня после полива внесите растворимое азотное удобрение (около 10 кг действующего вещества на гектар) для поддержания роста зелёной массы.</li>
            <li>В период цветения добавьте калийные удобрения (5–7 кг на гектар), чтобы улучшить качество плодов и снизить риск вершинной гнили.</li>
          </ol>
          
          <h3 className="analysis-subtitle">Дополнительные советы</h3>
          <ol className="analysis-list">
            <li>Проводите осмотр растений вечером — если край листьев скручиваются или бледнеют, это признак нехватки влаги.</li>
            <li>Используйте мульчирование почвы (солома, агроткань), чтобы уменьшить испарение и стабилизировать влажность.</li>
            <li>Следите за прогнозом — при резком похолодании уменьшайте объём полива, чтобы не переувлажнить почву.</li>
          </ol>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="footer" id="contact">
        <div className="footer-wrapper">
          <div className="footer-left">
            <h2 className="footer-title">Остались вопросы?</h2>
            <h3 className="footer-subtitle">Свяжитесь с нами</h3>
            
            <div className="contact-info">
              <div className="contact-item">
                <svg className="contact-icon" width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path d="M3 5a2 2 0 0 1 2-2h3.28a1 1 0 0 1 .948.684l1.498 4.493a1 1 0 0 1-.502 1.21l-2.257 1.13a11.042 11.042 0 0 0 5.516 5.516l1.13-2.257a1 1 0 0 1 1.21-.502l4.493 1.498a1 1 0 0 1 .684.949V19a2 2 0 0 1-2 2h-1C9.716 21 3 14.284 3 6V5z" stroke="currentColor" strokeWidth="2"/>
                </svg>
                <span>+123 456 789</span>
              </div>
              
              <div className="contact-item">
                <svg className="contact-icon" width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <rect x="3" y="5" width="18" height="14" rx="2" stroke="currentColor" strokeWidth="2"/>
                  <path d="M3 7l9 6 9-6" stroke="currentColor" strokeWidth="2"/>
                </svg>
                <span>name@gmail.com</span>
              </div>
              
              <div className="contact-item">
                <svg className="contact-icon" width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <rect x="2" y="2" width="20" height="20" rx="5" stroke="currentColor" strokeWidth="2"/>
                  <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="2"/>
                  <circle cx="18" cy="6" r="1" fill="currentColor"/>
                </svg>
                <span>@название</span>
              </div>
              
              <div className="contact-item">
                <svg className="contact-icon" width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" stroke="currentColor" strokeWidth="2"/>
                </svg>
                <span>@название</span>
              </div>
            </div>
          </div>
          
          <div className="footer-right">
            <div className="contact-form">
              <div className="form-group">
                <label htmlFor="name">Имя</label>
                <input 
                  type="text" 
                  id="name" 
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="phone">Телефон</label>
                <input 
                  type="tel" 
                  id="phone" 
                  value={formData.phone}
                  onChange={(e) => setFormData({...formData, phone: e.target.value})}
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="email">Эл - почта</label>
                <input 
                  type="email" 
                  id="email" 
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="message">Сообщение</label>
                <textarea 
                  id="message" 
                  rows="4"
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                />
              </div>
              
              <button onClick={handleSubmit} className="submit-button">Отправить</button>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}