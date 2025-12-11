import React from 'react';
import '../footerpages/styles/SupportPage.css';

const SupportPage = () => {
  return (
    <div className="support-container">
      <div className="support-hero">
        <div className="support-hero-content">
          <h1 className="support-title">Поддержать проект</h1>
          <p className="support-subtitle">
            Ваша поддержка помогает нам развиваться и создавать ещё более качественные продукты
          </p>
        </div>
      </div>

      <div className="support-content">
        <div className="support-card">
          <div className="support-card-header">
            <h2>Почему важна ваша поддержка?</h2>
          </div>
          
          <div className="support-reasons">
            <div className="reason-item">
              <div className="reason-content">
                <h3>Развитие проекта</h3>
                <p>Средства пойдут на улучшение функционала и добавление новых возможностей</p>
              </div>
            </div>
            
            <div className="reason-item">
              <div className="reason-content">
                <h3>Быстрые обновления</h3>
                <p>Позволит ускорить разработку и выпускать обновления чаще</p>
              </div>
            </div>
            
            <div className="reason-item">
              <div className="reason-content">
                <h3>Техническая поддержка</h3>
                <p>Обеспечит стабильную работу и оперативное решение проблем</p>
              </div>
            </div>
            
            <div className="reason-item">
              <div className="reason-content">
                <h3>Мотивация команды</h3>
                <p>Ваша поддержка - лучшая награда за нашу работу</p>
              </div>
            </div>
          </div>
        </div>

        <div className="donation-card">
          <div className="donation-header">
            <h2>Поддержать через СБП</h2>
            <p>Отсканируйте QR-код для перевода</p>
          </div>
          
          <div className="qr-container">
            <div className="qr-wrapper">
              <img src="/qrcode.jpg" alt="QR код для оплаты через СБП" className="qr-image" />
            </div>
            
            <div className="donation-info">
              <div className="info-item">
                <div className="info-content">
                  <h4>Быстрый перевод</h4>
                  <p>Откройте приложение банка и отсканируйте код</p>
                </div>
              </div>
              
              <div className="info-item">
                <div className="info-content">
                  <h4>Любая сумма</h4>
                  <p>Вы можете указать любую удобную для вас сумму</p>
                </div>
              </div>
              
              <div className="info-item">
                <div className="info-content">
                  <h4>Безопасно</h4>
                  <p>Платежи защищены системой быстрых платежей ЦБ РФ</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="donation-alternatives">
            <h3>Другие способы поддержки</h3>
            <div className="alternative-methods">
              <div className="method">
                <div className="method-content">
                  <h4>Банковской картой</h4>
                  <p>2202 2002 2002 2002</p>
                </div>
              </div>
              <div className="method">
                <div className="method-content">
                  <h4>Сотрудничество</h4>
                  <p>info@technobatya.ru</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="support-message">
          <div className="message-content">
            <h3>Спасибо за вашу поддержку!</h3>
            <p>
              Каждое пожертвование, большое или маленькое, приближает нас к новым целям. 
              Мы ценим каждого, кто верит в наш проект и помогает нам становиться лучше.
            </p>
            <div className="team-signature">
              <p>С уважением, команда <strong>Техно Батя</strong></p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SupportPage;